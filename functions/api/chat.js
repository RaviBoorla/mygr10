/**
 * Cloudflare Pages Function — /api/chat
 * Streams chat responses from multiple providers.
 * Cloudflare Workers AI is used when provider = "cloudflare" (no API key needed).
 * All other providers proxy through with the caller-supplied API key.
 *
 * POST /api/chat
 * Body: { provider, endpoint, model, apiKey, history: [{role, content}] }
 * Streams: newline-delimited JSON  {"delta":"token"} … {"done":true}
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try { body = await request.json(); } catch {
    return err('Invalid JSON body');
  }

  const {
    provider  = 'cloudflare',
    endpoint  = '',
    model     = '@cf/meta/llama-3.1-8b-instruct',
    apiKey    = '',
    history   = [],
    systemPrompt = '',
  } = body;

  const h = capHistory(history);
  const sys = systemPrompt || 'You are a helpful, concise Grade 10 study assistant for CBSE and ICSE students.';

  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();
  const enc = new TextEncoder();

  const write = (obj) => writer.write(enc.encode(JSON.stringify(obj) + '\n'));

  // Run provider in background so we can return the stream immediately
  (async () => {
    try {
      switch (provider) {
        case 'cloudflare': await streamCF(write, env, model, sys, h); break;
        case 'ollama':     await streamOllama(write, endpoint, model, sys, h); break;
        case 'anthropic':  await streamAnthropic(write, model, apiKey, sys, h); break;
        case 'gemini':     await streamGemini(write, model, apiKey, sys, h); break;
        case 'openai':
        case 'grok':
        case 'mistral':
        case 'deepseek':   await streamOpenAI(write, endpoint || defaultEndpoint(provider), model, apiKey, sys, h); break;
        default:           await write({ error: `Unknown provider: ${provider}` });
      }
    } catch (e) {
      await write({ error: e.message ?? String(e) });
    }
    await write({ done: true });
    await writer.close();
  })();

  return new Response(readable, {
    headers: {
      'Content-Type': 'application/x-ndjson',
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// ── helpers ───────────────────────────────────────────────────────────────────

function err(msg) {
  return new Response(JSON.stringify({ error: msg }) + '\n', {
    status: 400,
    headers: { 'Content-Type': 'application/x-ndjson' },
  });
}

function capHistory(h) {
  let out = h.slice(-32);
  if (out.length && out[0].role === 'assistant') out = out.slice(1);
  return out;
}

function defaultEndpoint(provider) {
  const map = {
    grok:     'https://api.x.ai/v1',
    mistral:  'https://api.mistral.ai/v1',
    deepseek: 'https://api.deepseek.com/v1',
    openai:   'https://api.openai.com/v1',
  };
  return map[provider] || '';
}

// ── Cloudflare Workers AI ────────────────────────────────────────────────────

async function streamCF(write, env, model, system, history) {
  if (!env.AI) {
    await write({ error: 'Cloudflare AI binding not configured. Add AI binding in Pages settings.' });
    return;
  }
  const messages = [{ role: 'system', content: system }, ...history];
  const stream = await env.AI.run(model, { messages, stream: true });
  const reader = stream.getReader();
  const dec = new TextDecoder();
  let buf = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += dec.decode(value, { stream: true });
    const lines = buf.split('\n');
    buf = lines.pop();
    for (const line of lines) {
      const d = line.replace(/^data:\s*/, '').trim();
      if (!d || d === '[DONE]') continue;
      try {
        const j = JSON.parse(d);
        const delta = j?.response ?? '';
        if (delta) await write({ delta });
      } catch { /* skip */ }
    }
  }
}

// ── Ollama ───────────────────────────────────────────────────────────────────

async function streamOllama(write, endpoint, model, system, history) {
  const base = (endpoint || 'http://localhost:11434').replace(/\/$/, '');
  const messages = [{ role: 'system', content: system }, ...history];
  const upstream = await fetch(`${base}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, messages, stream: true }),
  });
  if (!upstream.ok) { await write({ error: `Ollama ${upstream.status}: ${await upstream.text()}` }); return; }
  await pipeNDJSON(write, upstream, j => j?.message?.content ?? '', j => j?.done);
}

// ── OpenAI-compatible ────────────────────────────────────────────────────────

async function streamOpenAI(write, endpoint, model, apiKey, system, history) {
  const base = endpoint.replace(/\/$/, '');
  const messages = [{ role: 'system', content: system }, ...history];
  const upstream = await fetch(`${base}/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
    body: JSON.stringify({ model, messages, stream: true }),
  });
  if (!upstream.ok) { await write({ error: `${upstream.status}: ${await upstream.text()}` }); return; }
  await pipeSSE(write, upstream, j => j?.choices?.[0]?.delta?.content ?? '');
}

// ── Anthropic ────────────────────────────────────────────────────────────────

async function streamAnthropic(write, model, apiKey, system, history) {
  const messages = history.map(m => ({ role: m.role, content: m.content }));
  while (messages.length && messages[0].role === 'assistant') messages.shift();
  const upstream = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({ model, system, messages, max_tokens: 4096, stream: true }),
  });
  if (!upstream.ok) { await write({ error: `Anthropic ${upstream.status}: ${await upstream.text()}` }); return; }
  await pipeSSE(write, upstream,
    j => j?.type === 'content_block_delta' ? (j?.delta?.text ?? '') : '',
    j => j?.type === 'message_stop'
  );
}

// ── Gemini ───────────────────────────────────────────────────────────────────

async function streamGemini(write, model, apiKey, system, history) {
  const contents = [
    { role: 'user',  parts: [{ text: system }] },
    { role: 'model', parts: [{ text: 'Understood.' }] },
    ...history.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
  ];
  const upstream = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${apiKey}`,
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents }) }
  );
  if (!upstream.ok) { await write({ error: `Gemini ${upstream.status}: ${await upstream.text()}` }); return; }
  await pipeSSE(write, upstream,
    j => (j?.candidates?.[0]?.content?.parts ?? []).map(p => p.text || '').join('')
  );
}

// ── stream helpers ────────────────────────────────────────────────────────────

async function pipeSSE(write, upstream, getDelta, isDone) {
  const reader = upstream.body.getReader();
  const dec = new TextDecoder();
  let buf = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += dec.decode(value, { stream: true });
    const lines = buf.split('\n');
    buf = lines.pop();
    for (const line of lines) {
      if (line.startsWith('event:') || line.startsWith('id:') || line.startsWith(':')) continue;
      const d = line.replace(/^data:\s*/, '').trim();
      if (!d || d === '[DONE]') continue;
      try {
        const j = JSON.parse(d);
        const delta = getDelta(j);
        if (delta) await write({ delta });
        if (isDone?.(j)) return;
      } catch { /* skip */ }
    }
  }
}

async function pipeNDJSON(write, upstream, getDelta, isDone) {
  const reader = upstream.body.getReader();
  const dec = new TextDecoder();
  let buf = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += dec.decode(value, { stream: true });
    const lines = buf.split('\n');
    buf = lines.pop();
    for (const line of lines) {
      if (!line.trim()) continue;
      try {
        const j = JSON.parse(line);
        const delta = getDelta(j);
        if (delta) await write({ delta });
        if (isDone?.(j)) return;
      } catch { /* skip */ }
    }
  }
}
