// ─── Career Pathing screen ───────────────────────────────────────────────────
Object.assign(app, {

  _screenCareers() {
    return `
      <style>
      /* ── careers: scoped overrides on top of app chrome ── */
      #careers-wrap{
        /* bottom:40px, not 0 — the site footer sits below this fixed layer;
           bottom:0 would extend the (transparent) canvas over it, and being
           painted on top it swallows clicks meant for the footer's links. */
        position:fixed;top:var(--chrome-h,92px);left:0;right:0;bottom:40px;
        overflow-x:auto;overflow-y:auto;
      }
      #careers-inner{display:inline-block;transform-origin:top left;line-height:0}
      #careers-tsvg{display:block}

      #careers-bar{
        position:fixed;top:var(--header-h,48px);left:0;right:0;z-index:9;
        display:flex;align-items:center;gap:10px;flex-wrap:wrap;
        padding:8px 16px;
        background:rgba(255,255,255,.94);backdrop-filter:blur(14px);
        border-bottom:1px solid var(--border);
      }
      #careers-sw{position:relative;flex:1;min-width:130px;max-width:220px}
      #careers-sw svg{position:absolute;left:9px;top:50%;transform:translateY(-50%);color:var(--text2);pointer-events:none}
      #careers-search-clear{position:absolute;right:6px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--text2);font-size:13px;line-height:1;padding:2px 4px;border-radius:4px;}
      #careers-search-clear:hover{color:var(--text1);}
      #careers-search{
        width:100%;padding:6px 24px 6px 28px;
        background:#fff;border:1px solid var(--border);border-radius:7px;
        font-family:var(--font);font-size:12.5px;color:var(--text1);outline:none;
      }
      #careers-search:focus{border-color:var(--primary)}
      #careers-search::placeholder{color:var(--text2)}

      #careers-chips{display:flex;gap:5px;flex-wrap:wrap}
      .careers-chip{
        padding:4px 9px;border-radius:20px;font-size:11px;font-weight:500;
        font-family:var(--font);border:1px solid var(--border);
        background:transparent;color:var(--text2);cursor:pointer;transition:all .15s;white-space:nowrap;
      }
      .careers-chip:hover{border-color:var(--text2);color:var(--text1)}
      .careers-chip.on{border-color:transparent;color:#07090F}

      #careers-acts{display:flex;gap:5px;flex-shrink:0}
      .careers-act{
        padding:4px 9px;border-radius:7px;font-size:11px;font-family:var(--mono,monospace);
        border:1px solid var(--border);background:#fff;color:var(--text2);cursor:pointer;
        transition:color .12s;white-space:nowrap;
      }
      .careers-act:hover{color:var(--text1)}
      .careers-home-btn{margin-left:auto;flex-shrink:0;}

      #careers-zc{
        position:fixed;bottom:58px;right:16px;z-index:190;
        display:flex;gap:4px;
        transition:right .22s cubic-bezier(.4,0,.2,1);
      }
      @media(min-width:561px){
        body:has(#careers-det.open) #careers-zc{ right:calc(330px + 16px); }
      }
      @media(max-width:560px){
        body:has(#careers-det.open) #careers-zc{ display:none; }
      }
      .careers-zb{
        width:30px;height:30px;background:#fff;border:1px solid var(--border);
        border-radius:7px;font-size:16px;line-height:30px;text-align:center;
        color:var(--text2);cursor:pointer;user-select:none;transition:color .1s;
        padding:0;font-family:var(--font);
      }
      .careers-zb:hover{color:var(--text1)}

      #careers-leg{
        position:fixed;bottom:58px;left:16px;z-index:190;
        background:rgba(255,255,255,.94);backdrop-filter:blur(12px);
        border:1px solid var(--border);border-radius:9px;
        padding:9px 12px;display:flex;flex-direction:column;gap:5px;
      }
      .careers-li{display:flex;align-items:center;gap:7px;font-size:10.5px;font-family:var(--mono,monospace);color:var(--text2)}
      .careers-ld{width:8px;height:8px;border-radius:2px;flex-shrink:0}

      #careers-det{
        position:fixed;top:var(--chrome-h,92px);right:0;bottom:40px;width:330px;max-width:100vw;z-index:199;
        background:rgba(255,255,255,.98);backdrop-filter:blur(18px);
        border-left:1px solid var(--border);
        box-shadow:-8px 0 24px rgba(15,23,42,.08);
        padding:16px 14px;overflow-y:auto;
        transform:translateX(100%);
        transition:transform .22s cubic-bezier(.4,0,.2,1);
      }
      #careers-det.open{transform:none}
      @media(max-width:560px){#careers-det{width:100%}}
      #careers-dclose{
        float:right;margin-top:-1px;
        background:#fff;border:1px solid var(--border);
        border-radius:6px;min-width:32px;min-height:32px;padding:0 8px;font-size:13px;
        font-family:var(--mono,monospace);color:var(--text2);cursor:pointer;
      }
      #careers-dcrumb{font-size:10px;font-family:var(--mono,monospace);color:var(--text2);line-height:1.8;margin-bottom:9px;padding-right:44px}
      #careers-det h2{font-family:var(--font);font-size:16px;font-weight:700;text-wrap:balance;margin-bottom:2px;line-height:1.25}
      .careers-dsub{font-size:11px;font-family:var(--mono,monospace);color:var(--text2);margin-bottom:12px}
      .careers-dlbl{font-size:9px;font-family:var(--mono,monospace);color:#4E4E50;text-transform:uppercase;letter-spacing:.08em;margin-bottom:3px;margin-top:11px}
      .careers-dval{font-size:12px;color:var(--text1);line-height:1.55}
      .careers-dval.mono{font-family:var(--mono,monospace);font-size:11px}
      .careers-dtags{display:flex;flex-wrap:wrap;gap:3px;margin-top:3px}
      .careers-dtag{padding:2px 7px;border-radius:10px;font-size:9.5px;font-family:var(--mono,monospace);border:1px solid var(--border);color:var(--text2)}
      .careers-dkids{display:flex;flex-wrap:wrap;gap:4px;margin-top:3px}
      .careers-dlink{
        font:inherit;font-size:11px;line-height:1.3;text-align:left;
        padding:4px 8px;border-radius:6px;border:1px solid var(--border);
        background:#fff;color:var(--text1);cursor:pointer;
      }
      .careers-dlink:hover,.careers-dlink:focus-visible{border-color:var(--primary);color:var(--primary)}
      #careers-dcrumb .careers-dlink{border:none;padding:0;background:none;color:inherit;font-size:10px;font-family:var(--mono,monospace);text-decoration:underline dotted}
      #careers-empty{position:sticky;left:0;padding:48px 24px;text-align:center;line-height:1.6;color:var(--text2);font-size:14px}
      #careers-empty q{color:var(--text1);font-weight:600}
      .careers-empty-hint{font-size:12px;margin:4px 0 14px}
      .careers-dpath{margin-top:14px;padding:9px 10px;background:#fff;border:1px solid var(--border);border-radius:7px;font-size:10.5px;font-family:var(--mono,monospace);color:var(--text2);line-height:1.8}

      .cngrp{cursor:pointer}
      .cngrp:hover .cnbg{filter:brightness(1.18)}
      .cngrp:focus{outline:none}
      .cngrp:focus-visible .cnbg{stroke:var(--primary);stroke-width:2.5}

      @media(max-width:640px){
        #careers-bar{align-items:flex-start;}
        #careers-sw{order:1;flex:1 1 auto;max-width:none;}
        .careers-home-btn{order:2;margin-left:0;}
        #careers-chips{order:3;flex:1 1 100%;}
      }
      @media(prefers-reduced-motion:reduce){#careers-det{transition:none}}
      </style>

      <!-- TOOLBAR -->
      <div id="careers-bar">
        <div id="careers-sw">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input id="careers-search" type="search" placeholder="Search any career, exam…" title="Search (press / to focus)" aria-label="Search careers and exams" autocomplete="off" spellcheck="false">
          <button id="careers-search-clear" title="Clear search" aria-label="Clear search" hidden>✕</button>
        </div>
        <div id="careers-chips" role="group" aria-label="Filter careers">
          <button class="careers-chip" data-f="high-salary" data-c="#34D399">💰 High Salary</button>
          <button class="careers-chip" data-f="govt"        data-c="#38BDF8">🏛 Govt / PSU</button>
          <button class="careers-chip" data-f="abroad"      data-c="#B57BF5">✈ Global</button>
          <button class="careers-chip" data-f="no-math"     data-c="#FB923C">∑ No Math</button>
          <button class="careers-chip" data-f="exam-free"   data-c="#F472B6">🎯 Exam-free</button>
          <div id="careers-acts">
            <button class="careers-act" id="careers-btn-expand">Expand All</button>
            <button class="careers-act" id="careers-btn-collapse">Collapse</button>
          </div>
        </div>
        <button class="btn ghost home-btn careers-home-btn" onclick="app.go(['home'])">&#8962; Home</button>
      </div>

      <!-- TREE -->
      <div id="careers-wrap">
        <div id="careers-inner"><svg id="careers-tsvg" role="group" aria-label="Career paths by stream"></svg></div>
        <div id="careers-empty" role="status" hidden>
          <p>No careers match <q></q>.</p>
          <p class="careers-empty-hint">Try a broader word: <em>doctor</em>, <em>design</em>, <em>law</em>, <em>NEET</em>.</p>
          <button class="careers-act">Clear search</button>
        </div>
      </div>

      <!-- ZOOM -->
      <div id="careers-zc">
        <button class="careers-zb" id="careers-zi" title="Zoom in (Ctrl + scroll)" aria-label="Zoom in">+</button>
        <button class="careers-zb" id="careers-zo" title="Zoom out" aria-label="Zoom out">−</button>
        <button class="careers-zb" id="careers-zr" title="Reset view" aria-label="Reset view">⌂</button>
      </div>

      <!-- DETAIL -->
      <div id="careers-det" role="region" aria-label="Career details">
        <button id="careers-dclose" title="Close (Esc)" aria-label="Close details">✕</button>
        <div id="careers-dcrumb"></div>
        <div id="careers-dcont"></div>
      </div>`;
  }

});
