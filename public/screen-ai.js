// ─── AI Chat panel ────────────────────────────────────────────────────────────
// Floating slide-in panel. No React, no bundler — plain JS.
// Grounded in Rise's revision KB; refuses off-topic questions.

const AI_LS_KEY = 'rise-ai-config';
const AI_CHAT_KEY = 'rise-ai-history';
const AI_ENDPOINT = '/api/chat';

const AI_DEFAULT_CONFIG = {
  provider: 'cloudflare',
  endpoint: '',
  model:    '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
  apiKey:   '',
};

const AI_PROVIDERS = [
  { id: 'cloudflare', label: 'Cloudflare AI',  needsKey: false, defaultEndpoint: '' },
  { id: 'anthropic',  label: 'Claude',          needsKey: true,  defaultEndpoint: '' },
  { id: 'openai',     label: 'OpenAI',          needsKey: true,  defaultEndpoint: 'https://api.openai.com/v1' },
  { id: 'gemini',     label: 'Gemini',          needsKey: true,  defaultEndpoint: '' },
  { id: 'grok',       label: 'Grok',            needsKey: true,  defaultEndpoint: 'https://api.x.ai/v1' },
  { id: 'mistral',    label: 'Mistral',         needsKey: true,  defaultEndpoint: 'https://api.mistral.ai/v1' },
  { id: 'deepseek',   label: 'DeepSeek',        needsKey: true,  defaultEndpoint: 'https://api.deepseek.com/v1' },
  { id: 'ollama',     label: 'Ollama (local)',  needsKey: false, defaultEndpoint: 'http://localhost:11434' },
];

// ── KB retrieval ──────────────────────────────────────────────────────────────

function _aiKbContext(query) {
  const q = query.toLowerCase();
  const keywords = q.split(/\W+/).filter(w => w.length > 3);
  const scored = [];

  function scoreText(text) {
    const t = text.toLowerCase();
    let s = 0;
    keywords.forEach(kw => { if (t.includes(kw)) s++; });
    if (t.includes(q)) s += 3;
    return s;
  }

  // 1. Revision notes
  if (window.REVISION) {
    Object.entries(window.REVISION).forEach(([subjectKey, chapters]) => {
      if (!Array.isArray(chapters)) return;
      chapters.forEach(ch => {
        if (!ch || !ch.chapter) return;
        const chText = [ch.chapter, ...(ch.formulae||[]), ...(ch.theorems||[]), ...(ch.logic||[]), ...(ch.tips||[]), ...(ch.bestPractices||[])].join(' ');
        const s = scoreText(chText);
        if (s > 0) scored.push({ score: s, type: 'notes', subjectKey, ch });
      });
    });
  }

  // 2. MCQ banks (already in memory from previous visits)
  Object.entries(window.bankCache || {}).forEach(([bankKey, questions]) => {
    if (!Array.isArray(questions)) return;
    questions.forEach(q2 => {
      const text = [q2.text||'', q2.chapter||'', (q2.options||[]).join(' ')].join(' ');
      const s = scoreText(text);
      if (s > 0) scored.push({ score: s + 0.1, type: 'mcq', bankKey, q: q2 });
    });
  });

  // 3. Short-answer banks (already in memory)
  Object.entries(window.saBankCache || {}).forEach(([bankKey, questions]) => {
    if (!Array.isArray(questions)) return;
    questions.forEach(q2 => {
      const text = [q2.question||q2.text||'', q2.answer||'', q2.chapter||''].join(' ');
      const s = scoreText(text);
      if (s > 0) scored.push({ score: s + 0.2, type: 'sa', bankKey, q: q2 });
    });
  });

  // 4. Solved exercise banks (already in memory)
  Object.entries(window.solvedBankCache || {}).forEach(([bankKey, questions]) => {
    if (!Array.isArray(questions)) return;
    questions.forEach(q2 => {
      const text = [q2.question||q2.text||'', q2.solution||q2.answer||'', q2.chapter||''].join(' ');
      const s = scoreText(text);
      if (s > 0) scored.push({ score: s + 0.2, type: 'solved', bankKey, q: q2 });
    });
  });

  // 5. Career data (if careers.js was loaded)
  if (window.T) {
    function walkCareer(node, path) {
      const text = [node.label||'', node.sublabel||'', node.meta?.note||'', node.meta?.exams||'', (node.keywords||'')].join(' ');
      const s = scoreText(text);
      if (s > 0) scored.push({ score: s, type: 'career', node, path: path.join(' › ') });
      (node.children||[]).forEach(c => walkCareer(c, [...path, node.label]));
    }
    walkCareer(window.T, []);
  }

  scored.sort((a, b) => b.score - a.score);
  const seen = new Set();
  const top = scored.filter(item => {
    const key = item.type + '|' + (item.subjectKey || item.bankKey || item.node?.id || '');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 5);

  if (!top.length) return '';

  return top.map(item => {
    if (item.type === 'notes') {
      const { subjectKey, ch } = item;
      const lines = [
        ...(ch.formulae||[]).map(t=>`Formula: ${t}`),
        ...(ch.theorems||[]).map(t=>`Theorem: ${t}`),
        ...(ch.logic||[]).map(t=>`Logic: ${t}`),
        ...(ch.tips||[]).map(t=>`Tip: ${t}`),
        ...(ch.bestPractices||[]).map(t=>`Best practice: ${t}`),
      ].slice(0,15);
      return `[Notes: ${subjectKey} — ${ch.chapter}]\n${lines.join('\n')}`;
    }
    if (item.type === 'mcq') {
      const q2 = item.q;
      return `[MCQ: ${item.bankKey} — ${q2.chapter||''}]\nQ: ${q2.text||''}\nOptions: ${(q2.options||[]).join(' / ')}\nAnswer: option ${q2.answer ?? ''}`;
    }
    if (item.type === 'sa') {
      const q2 = item.q;
      return `[Short Answer: ${item.bankKey} — ${q2.chapter||''}]\nQ: ${q2.question||q2.text||''}\nA: ${q2.answer||''}`;
    }
    if (item.type === 'solved') {
      const q2 = item.q;
      return `[Solved: ${item.bankKey} — ${q2.chapter||''}]\nQ: ${q2.question||q2.text||''}\nSolution: ${(q2.solution||q2.answer||'').slice(0,300)}`;
    }
    if (item.type === 'career') {
      const n = item.node;
      return `[Career Path: ${item.path}]\n${n.label}${n.sublabel?' ('+n.sublabel+')':''}: ${n.meta?.note||''} Exams: ${n.meta?.exams||''}`;
    }
    return '';
  }).filter(Boolean).join('\n\n');
}

function _aiSystemPrompt(query) {
  const ctx = _aiKbContext(query);
  const base = `You are Cloé, a sharp and curious Grade 10 study companion in Rise, an exam-prep app for CBSE and ICSE students. Your name is Cloé — a warm, witty French study friend.

You cover ALL Grade 10 subjects for CBSE and ICSE: Mathematics, Science (Physics, Chemistry, Biology), Social Science, History & Civics, Geography, English, Hindi, Computer Science — plus career pathing, stream selection (Science/Commerce/Humanities/Vocational), and exam guidance (JEE, NEET, CUET, board exams, and more).

Rules:
- Answer ONLY what was asked — one concept at a time, 2–4 sentences max.
- Never give a full chapter summary unprompted. Reveal depth gradually.
- End every reply with ONE short question that makes the student think deeper or connects to something they might not have considered.
- Use a warm, energetic tone — like a smart friend, not a textbook. Use emojis sparingly — at most one per reply, only when it genuinely adds warmth or humour.
- If the question is genuinely off-topic (nothing to do with Grade 10 studies or career planning), decline in one sentence and redirect.
- Use the knowledge base below only as a reference — don't recite it verbatim.`;
  return ctx ? `${base}\n\nKnowledge base excerpts:\n${ctx}` : base;
}

// ── config helpers ────────────────────────────────────────────────────────────

function aiLoadConfig() {
  try { return { ...AI_DEFAULT_CONFIG, ...JSON.parse(localStorage.getItem(AI_LS_KEY) || '{}') }; }
  catch { return { ...AI_DEFAULT_CONFIG }; }
}
const AI_SYNC_KEY = 'rise-ai-config-sync'; // provider + model only — no key

function aiSaveConfig(cfg) {
  try {
    localStorage.setItem(AI_LS_KEY, JSON.stringify(cfg));
    // Sync provider/model/endpoint to Firestore — but NOT the API key
    const { apiKey: _drop, ...syncable } = cfg;
    localStorage.setItem(AI_SYNC_KEY, JSON.stringify(syncable));
    window.riseSync?.push?.();
  } catch { /* ignore */ }
}
function aiLoadHistory() {
  try { return JSON.parse(localStorage.getItem(AI_CHAT_KEY) || '[]'); } catch { return []; }
}
function aiSaveHistory(msgs) {
  try { localStorage.setItem(AI_CHAT_KEY, JSON.stringify(msgs.slice(-40))); } catch { /* ignore */ }
}

// ── markdown renderer ─────────────────────────────────────────────────────────

function aiRenderMarkdown(text) {
  const lines = text.split('\n');
  const out = [];
  let inCode = false, codeLines = [];

  lines.forEach((line, i) => {
    if (line.startsWith('```')) {
      if (!inCode) { inCode = true; codeLines = []; }
      else {
        out.push(`<pre class="ai-code"><code>${escHtml(codeLines.join('\n'))}</code></pre>`);
        inCode = false; codeLines = [];
      }
      return;
    }
    if (inCode) { codeLines.push(line); return; }
    if (line.startsWith('### ')) { out.push(`<h4 class="ai-h">${escHtml(line.slice(4))}</h4>`); return; }
    if (line.startsWith('## '))  { out.push(`<h3 class="ai-h">${escHtml(line.slice(3))}</h3>`); return; }
    if (line.startsWith('# '))   { out.push(`<h3 class="ai-h">${escHtml(line.slice(2))}</h3>`); return; }
    if (!line.trim()) { out.push('<div class="ai-gap"></div>'); return; }
    out.push(`<p class="ai-p">${aiInline(line)}</p>`);
  });
  return out.join('');
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function aiInline(text) {
  return escHtml(text)
    .replace(/`([^`]+)`/g, '<code class="ai-inline-code">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

// ── panel state ───────────────────────────────────────────────────────────────

const aiState = {
  open: false,
  showConfig: false,
  emojiOpen: false,
  listening: false,
  _recognition: null,
  messages: aiLoadHistory(),
  streaming: false,
  abortCtrl: null,
  config: aiLoadConfig(),
};

// ── render helpers ────────────────────────────────────────────────────────────

function aiProviderInfo(id) {
  return AI_PROVIDERS.find(p => p.id === id) || AI_PROVIDERS[0];
}

function aiRenderMessages() {
  const box = document.getElementById('ai-msgs');
  if (!box) return;
  if (!aiState.messages.length) {
    box.innerHTML = `<div class="ai-empty">
      <span class="ai-empty-icon">✦</span>
      <p>Bonjour! I'm Cloé 👩‍🏫 — ask me anything about your Grade 10 subjects</p>
      <p class="ai-empty-sub">Maths · Science · Social Science · History · Geography · English · Hindi · CS</p>
    </div>`;
    return;
  }
  box.innerHTML = aiState.messages.map((m, idx) => {
    const isUser = m.role === 'user';
    // Retry: beside the user bubble (rendered as a small icon before the bubble)
    const isLastUser = isUser && idx === aiState.messages.length - 2;
    const retryBtn = isLastUser && !aiState.streaming
      ? `<button class="ai-action-btn ai-retry-btn" title="Retry" onclick="aiPanel.retry()">↺</button>`
      : '';
    const copyBtn = !isUser && !m.streaming
      ? `<button class="ai-action-btn ai-copy-btn" data-copy-idx="${idx}" title="Copy" onclick="aiCopy(${idx}, this)">⧉</button>`
      : '';
    return `<div class="ai-msg ${isUser ? 'ai-msg-user' : 'ai-msg-ai'}">
      ${retryBtn}
      <div class="ai-bubble ${isUser ? 'ai-bubble-user' : 'ai-bubble-ai'}">
        ${isUser ? escHtml(m.content) : aiRenderMarkdown(m.content)}
        ${m.streaming ? '<span class="ai-dots"><span></span><span></span><span></span></span>' : ''}
      </div>
      ${copyBtn}
    </div>`;
  }).join('');
  box.scrollTop = box.scrollHeight;
}

function aiRenderConfigPanel() {
  const cfg = aiState.config;
  const prov = aiProviderInfo(cfg.provider);
  return `
    <div class="ai-config-panel">
      <div class="ai-config-head">
        <span>AI Settings</span>
        <button class="ai-icon-btn" onclick="aiPanel.closeConfig()">✕</button>
      </div>
      <div class="ai-config-body">
        <label class="ai-label">Provider</label>
        <select class="ai-input" id="ai-cfg-provider" onchange="aiPanel.onProviderChange(this.value)">
          ${AI_PROVIDERS.map(p => `<option value="${p.id}" ${p.id === cfg.provider ? 'selected' : ''}>${escHtml(p.label)}</option>`).join('')}
        </select>

        ${prov.defaultEndpoint !== '' ? `
        <label class="ai-label">Endpoint URL</label>
        <input class="ai-input" id="ai-cfg-endpoint" value="${escHtml(cfg.endpoint || prov.defaultEndpoint)}" placeholder="${escHtml(prov.defaultEndpoint)}">
        ` : ''}

        <label class="ai-label">Model</label>
        <input class="ai-input" id="ai-cfg-model" value="${escHtml(cfg.model)}" placeholder="e.g. llama-3.1-8b / gpt-4o / claude-haiku-4-5-20251001">

        ${prov.needsKey ? `
        <label class="ai-label">API Key</label>
        <input class="ai-input" type="password" id="ai-cfg-apikey" value="${escHtml(cfg.apiKey)}" placeholder="sk-…">
        ` : ''}

        <button class="ai-save-btn" onclick="aiPanel.saveConfig()">Save</button>
      </div>
    </div>`;
}

function aiRenderPanel() {
  const cfg = aiState.config;
  const prov = aiProviderInfo(cfg.provider);
  return `
    <div class="ai-panel-inner">
      <div class="ai-header">
        <div class="ai-header-left">
          <span class="ai-star">✦</span>
          <span class="ai-title">Cloé</span>
          <span class="ai-badge">${escHtml(prov.label)} · ${escHtml(cfg.model || '—')}</span>
        </div>
        <div class="ai-header-right">
          ${aiState.messages.length ? `<button class="ai-icon-btn" title="Clear chat" onclick="aiPanel.clear()">↺</button>` : ''}
          <button class="ai-icon-btn" title="Settings" onclick="aiPanel.openConfig()">⚙</button>
          <button class="ai-icon-btn" title="Close" onclick="aiPanel.close()">✕</button>
        </div>
      </div>
      <div class="ai-msgs" id="ai-msgs"></div>
      <div class="ai-input-row">
        <button class="ai-icon-btn ai-mic-btn ${aiState.listening ? 'ai-mic-active' : ''}" title="Voice input" onclick="aiPanel.toggleVoice()">🎙️</button>
        <textarea class="ai-textarea" id="ai-input" placeholder="${aiState.listening ? 'Listening…' : 'Ask a subject question… (Enter to send)'}" rows="2"
          onkeydown="aiPanel.handleKey(event)"
          oninput="this.style.height='auto';this.style.height=Math.min(this.scrollHeight,240)+'px'"></textarea>
        ${aiState.streaming
          ? `<button class="ai-send-btn ai-stop-btn" onclick="aiPanel.stop()">Stop</button>`
          : `<button class="ai-send-btn" onclick="aiPanel.send()">Send</button>`}
      </div>
      ${aiState.showConfig ? aiRenderConfigPanel() : ''}
    </div>`;
}

function aiInsertEmoji(emoji) {
  const ta = document.getElementById('ai-input');
  if (!ta) return;
  const s = ta.selectionStart, e = ta.selectionEnd;
  ta.value = ta.value.slice(0, s) + emoji + ta.value.slice(e);
  ta.selectionStart = ta.selectionEnd = s + emoji.length;
  ta.style.height = 'auto';
  ta.style.height = Math.min(ta.scrollHeight, 240) + 'px';
  // Hide picker directly — no re-render needed
  aiState.emojiOpen = false;
  const picker = document.getElementById('ai-emoji-picker');
  if (picker) picker.hidden = true;
  ta.focus();
}

function aiCopy(idx, btn) {
  const m = aiState.messages[idx];
  if (!m) return;
  navigator.clipboard.writeText(m.content).then(() => {
    if (btn) { btn.textContent = '✓ Copied'; setTimeout(() => { btn.textContent = '⧉ Copy'; }, 1500); }
  }).catch(() => {});
}

// ── public API (called from HTML onclick) ─────────────────────────────────────

const aiPanel = {
  open() {
    if (!window.riseAuth?.user) return;
    aiState.open = true;
    this._ensureMount();
    this._render();
    requestAnimationFrame(() => {
      const el = document.getElementById('ai-panel');
      if (el) el.classList.add('ai-panel-open');
      document.getElementById('ai-input')?.focus();
    });
  },

  close() {
    const el = document.getElementById('ai-panel');
    if (el) {
      el.classList.remove('ai-panel-open');
      el.addEventListener('transitionend', () => { aiState.open = false; }, { once: true });
    }
  },

  toggle() {
    if (aiState.open) this.close(); else this.open();
  },

  openConfig()  { aiState.showConfig = true;  this._render(); },
  closeConfig() { aiState.showConfig = false; this._render(); },

  onProviderChange(id) {
    const prov = aiProviderInfo(id);
    // Re-render config panel with updated provider (endpoint/key visibility)
    aiState.config = { ...aiState.config, provider: id, endpoint: prov.defaultEndpoint };
    this._renderConfig();
  },

  saveConfig() {
    const cfg = { ...aiState.config };
    cfg.provider = document.getElementById('ai-cfg-provider')?.value || cfg.provider;
    cfg.model    = document.getElementById('ai-cfg-model')?.value?.trim() || cfg.model;
    cfg.endpoint = document.getElementById('ai-cfg-endpoint')?.value?.trim() || '';
    cfg.apiKey   = document.getElementById('ai-cfg-apikey')?.value?.trim() || '';
    aiState.config = cfg;
    aiSaveConfig(cfg);
    aiState.showConfig = false;
    this._render();
  },

  toggleEmoji() {
    aiState.emojiOpen = !aiState.emojiOpen;
    const picker = document.getElementById('ai-emoji-picker');
    if (picker) picker.hidden = !aiState.emojiOpen;
  },

  toggleVoice() {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert('Voice input is not supported in this browser. Try Chrome or Edge.'); return; }

    if (aiState.listening) {
      aiState._recognition?.stop();
      return;
    }

    const rec = new SR();
    rec.lang = 'en-IN';
    rec.interimResults = true;
    rec.continuous = false;
    aiState._recognition = rec;
    aiState.listening = true;
    this._render();

    let finalText = '';
    rec.onresult = (e) => {
      const ta = document.getElementById('ai-input');
      if (!ta) return;
      let interim = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) finalText += e.results[i][0].transcript;
        else interim = e.results[i][0].transcript;
      }
      ta.value = finalText + interim;
      ta.style.height = 'auto';
      ta.style.height = Math.min(ta.scrollHeight, 120) + 'px';
    };
    rec.onerror = () => { aiState.listening = false; aiState._recognition = null; aiPanel._render(); };
    rec.onend = () => {
      const saved = document.getElementById('ai-input')?.value || '';
      aiState.listening = false;
      aiState._recognition = null;
      aiPanel._render();
      const ta = document.getElementById('ai-input');
      if (ta && saved) { ta.value = saved; ta.style.height = 'auto'; ta.style.height = Math.min(ta.scrollHeight, 120) + 'px'; }
      ta?.focus();
    };
    rec.start();
  },
  retry() {
    if (aiState.streaming) return;
    // Remove last AI message and re-send last user message
    const msgs = aiState.messages;
    if (msgs.length >= 2 && msgs[msgs.length - 1].role === 'assistant') {
      aiState.messages.pop();
      const lastUser = [...msgs].reverse().find(m => m.role === 'user');
      if (lastUser) this.send(lastUser.content, true);
    }
  },
  clear() {
    if (aiState.streaming) this.stop();
    aiState.messages = [];
    aiSaveHistory([]);
    this._render();
  },

  stop() {
    aiState.abortCtrl?.abort();
    aiState.streaming = false;
    aiState.messages = aiState.messages.map((m, i) =>
      i === aiState.messages.length - 1 && m.streaming
        ? { ...m, streaming: false, content: m.content + ' *(stopped)*' }
        : m
    );
    aiSaveHistory(aiState.messages);
    this._render();
  },

  handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); this.send(); }
  },

  async send(prefill, skipUserPush) {
    const ta = document.getElementById('ai-input');
    const text = prefill || ta?.value?.trim();
    if (!text || aiState.streaming) return;
    if (!prefill) { ta.value = ''; ta.style.height = 'auto'; }

    const userMsg  = { role: 'user',      content: text,    ts: Date.now() };
    const asstMsg  = { role: 'assistant', content: '',       streaming: true, ts: Date.now() };
    aiState.messages = skipUserPush
      ? [...aiState.messages, asstMsg]
      : [...aiState.messages, userMsg, asstMsg];
    aiState.streaming = true;
    this._render();

    const history = aiState.messages
      .filter(m => !m.streaming)
      .map(m => ({ role: m.role, content: m.content }))
      .concat([{ role: 'user', content: text }]);

    const ctrl = new AbortController();
    aiState.abortCtrl = ctrl;

    const cfg = aiState.config;

    try {
      const r = await fetch(AI_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          provider:     cfg.provider,
          endpoint:     cfg.endpoint,
          model:        cfg.model,
          apiKey:       cfg.apiKey,
          history,
          systemPrompt: _aiSystemPrompt(text),
        }),
        signal: ctrl.signal,
      });

      const reader = r.body.getReader();
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
            if (j.delta) {
              aiState.messages = aiState.messages.map((m, i) =>
                i === aiState.messages.length - 1
                  ? { ...m, content: m.content + j.delta }
                  : m
              );
              aiRenderMessages();
            }
            if (j.error) {
              aiState.messages = aiState.messages.map((m, i) =>
                i === aiState.messages.length - 1
                  ? { ...m, content: `Error: ${j.error}`, streaming: false }
                  : m
              );
            }
          } catch { /* skip */ }
        }
      }
    } catch (e) {
      if (e.name !== 'AbortError') {
        aiState.messages = aiState.messages.map((m, i) =>
          i === aiState.messages.length - 1
            ? { ...m, content: `Connection error: ${e.message}`, streaming: false }
            : m
        );
      }
    }

    aiState.messages = aiState.messages.map((m, i) =>
      i === aiState.messages.length - 1 ? { ...m, streaming: false } : m
    );
    aiState.streaming = false;
    aiSaveHistory(aiState.messages);
    this._render();
  },

  // ── private ─────────────────────────────────────────────────────────────────

  _ensureMount() {
    if (!document.getElementById('ai-panel')) {
      const el = document.createElement('div');
      el.id = 'ai-panel';
      el.className = 'ai-panel';
      document.body.appendChild(el);
    }
  },

  _render() {
    this._ensureMount();
    const el = document.getElementById('ai-panel');
    if (!el) return;
    el.innerHTML = aiRenderPanel();
    aiRenderMessages();
  },

  _renderConfig() {
    const box = document.querySelector('.ai-config-panel');
    if (box) box.outerHTML = aiRenderConfigPanel();
    else this._render();
  },
};

// Expose for profile AI config button
function openAiConfig() {
  aiPanel.open();
  setTimeout(() => aiPanel.openConfig(), 50);
}
