// ─── Career Pathing screen ───────────────────────────────────────────────────
Object.assign(app, {

  _screenCareers() {
    return `
      <style>
      /* ── careers: scoped overrides on top of app chrome ── */
      #careers-wrap{
        position:fixed;top:var(--chrome-h,92px);left:0;right:0;bottom:0;
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

      #careers-zc{
        position:fixed;bottom:18px;right:16px;z-index:190;
        display:flex;gap:4px;
        transition:right .22s cubic-bezier(.4,0,.2,1);
      }
      body:has(#careers-det.open) #careers-zc{ right:calc(min(330px,100vw) + 16px); }
      .careers-zb{
        width:30px;height:30px;background:#fff;border:1px solid var(--border);
        border-radius:7px;font-size:16px;line-height:30px;text-align:center;
        color:var(--text2);cursor:pointer;user-select:none;transition:color .1s;
      }
      .careers-zb:hover{color:var(--text1)}

      #careers-leg{
        position:fixed;bottom:18px;left:16px;z-index:190;
        background:rgba(255,255,255,.94);backdrop-filter:blur(12px);
        border:1px solid var(--border);border-radius:9px;
        padding:9px 12px;display:flex;flex-direction:column;gap:5px;
      }
      .careers-li{display:flex;align-items:center;gap:7px;font-size:10.5px;font-family:var(--mono,monospace);color:var(--text2)}
      .careers-ld{width:8px;height:8px;border-radius:2px;flex-shrink:0}

      #careers-det{
        position:fixed;top:var(--chrome-h,92px);right:0;bottom:0;width:330px;max-width:100vw;z-index:199;
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
        border-radius:5px;padding:3px 8px;font-size:10px;
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
      .careers-dkids{font-size:11px;color:var(--text2);line-height:1.7}
      .careers-dpath{margin-top:14px;padding:9px 10px;background:#fff;border:1px solid var(--border);border-radius:7px;font-size:10.5px;font-family:var(--mono,monospace);color:var(--text2);line-height:1.8}

      .cngrp{cursor:pointer}
      .cngrp:hover .cnbg{filter:brightness(1.18)}

      @media(max-width:640px){
        #careers-bar{align-items:flex-start;}
        #careers-sw{order:1;flex:1 1 100%;max-width:none;}
        #careers-chips{order:2;flex:1 1 100%;}
        #careers-acts{order:3;margin-left:0;}
      }
      @media(prefers-reduced-motion:reduce){#careers-det{transition:none}}
      </style>

      <!-- TOOLBAR -->
      <div id="careers-bar">
        <div id="careers-sw">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input id="careers-search" placeholder="Search any career, exam…" autocomplete="off" spellcheck="false">
          <button id="careers-search-clear" title="Clear search" hidden>✕</button>
        </div>
        <div id="careers-chips">
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
      </div>

      <!-- TREE -->
      <div id="careers-wrap"><div id="careers-inner"><svg id="careers-tsvg"></svg></div></div>

      <!-- ZOOM -->
      <div id="careers-zc">
        <div class="careers-zb" id="careers-zi">+</div>
        <div class="careers-zb" id="careers-zo">−</div>
        <div class="careers-zb" id="careers-zr" title="Reset zoom">⌂</div>
      </div>

      <!-- DETAIL -->
      <div id="careers-det">
        <button id="careers-dclose">esc</button>
        <div id="careers-dcrumb"></div>
        <div id="careers-dcont"></div>
      </div>`;
  }

});
