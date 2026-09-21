// Shared KaTeX rendering for all screens (MCQ, SA, Solved, Notes, Results).
// Depends on: esc() from app.js (always loaded first), katex (CDN, optional).
//
// window.renderMath(text) — returns HTML string.
//   Renders $...$ (inline) and $$...$$ (block) math via KaTeX.
//   Plain text is HTML-escaped. Newlines → <br>.
//   If KaTeX is not yet loaded, emits <span class="rise-math-fb"> fallbacks
//   that are replaced in-place once KaTeX arrives.

(function () {
  function _split(text) {
    const tokens = [];
    const blockRe = /\$\$([\s\S]+?)\$\$/g;
    let last = 0, m;
    while ((m = blockRe.exec(text)) !== null) {
      if (m.index > last) tokens.push({ type: 'text', val: text.slice(last, m.index) });
      tokens.push({ type: 'block', val: m[1] });
      last = m.index + m[0].length;
    }
    if (last < text.length) tokens.push({ type: 'text', val: text.slice(last) });
    const result = [];
    for (const tok of tokens) {
      if (tok.type !== 'text') { result.push(tok); continue; }
      const inlineRe = /\$([^$\n]+?)\$/g;
      let j = 0, n;
      while ((n = inlineRe.exec(tok.val)) !== null) {
        if (n.index > j) result.push({ type: 'text', val: tok.val.slice(j, n.index) });
        result.push({ type: 'inline', val: n[1] });
        j = n.index + n[0].length;
      }
      if (j < tok.val.length) result.push({ type: 'text', val: tok.val.slice(j) });
    }
    return result;
  }

  function _render(src, display) {
    try {
      if (window.katex) return katex.renderToString(src, { displayMode: display, throwOnError: false });
    } catch {}
    return `<span class="rise-math-fb" data-src="${esc(src)}" data-d="${display ? 1 : 0}">${display ? '$$' : '$'}${esc(src)}${display ? '$$' : '$'}</span>`;
  }

  window.renderMath = function (text) {
    if (!text) return '';
    return String(text).split('\n').map(function (line) {
      const bm = line.trim().match(/^\$\$([\s\S]+?)\$\$$/);
      if (bm) return _render(bm[1], true);
      return _split(line).map(function (tok) {
        if (tok.type === 'block')  return _render(tok.val, true);
        if (tok.type === 'inline') return _render(tok.val, false);
        return esc(tok.val);
      }).join('');
    }).join('<br>');
  };

  // Replace a single .rise-math-fb span with rendered KaTeX (katex must be loaded).
  function _replaceFb(span) {
    try {
      const html = katex.renderToString(span.dataset.src, { displayMode: span.dataset.d === '1', throwOnError: false });
      const tmp = document.createElement('span');
      tmp.innerHTML = html;
      span.replaceWith.apply(span, tmp.childNodes.length ? Array.from(tmp.childNodes) : [tmp]);
    } catch {}
  }

  // If KaTeX is not yet available, register a one-shot listener that re-renders
  // all .rise-math-fb fallback spans once KaTeX loads.
  (function setupRetry() {
    if (window.katex) return;
    const s = document.querySelector('script[src*="katex"]');
    if (!s) return;
    s.addEventListener('load', function () {
      document.querySelectorAll('.rise-math-fb').forEach(_replaceFb);
    });
  })();
})();
