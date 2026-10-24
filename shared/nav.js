/*
 * nav.js — barra superior única para todos los módulos (NAV.montar).
 * Uso: <script>NAV.montar({ titulo, sub, portal, extras, bloq, perfil })</script> en el lugar donde iba el encabezado.
 *   portal:  true  -> botón "‹ Portal" a la izquierda (todos los módulos menos el propio Portal)
 *   extras:  [{ id, html, titulo, onclick, oculto }]  botones propios del módulo (🔍, ↻, 📲…)
 *   bloq:    { oculto: true } -> 🔒 oculto hasta NAV.mostrar('btnBloq')
 *   perfil:  true -> 👤 (solo el Portal)
 */
(function (global) {
  'use strict';
  const CSS = `
    .nvBar{position:sticky;top:0;z-index:90;display:flex;align-items:center;gap:10px;box-sizing:border-box;width:100%;min-height:58px;
      padding:calc(8px + env(safe-area-inset-top,0px)) 14px 8px;background:var(--nvBg,var(--navy,#0f2445));color:#fff;font-family:inherit;
      box-shadow:0 2px 10px rgba(0,0,0,.18)}
    .nvBar *{box-sizing:border-box}
    .nvBtn{display:inline-flex;align-items:center;justify-content:center;gap:4px;flex:none;height:38px;min-width:38px;padding:0 12px;margin:0;border:0;border-radius:10px;
      background:rgba(255,255,255,.14);color:#fff;font:600 .88rem/1 inherit;font-family:inherit;text-decoration:none;cursor:pointer;-webkit-tap-highlight-color:transparent}
    .nvBtn:hover{background:rgba(255,255,255,.24)}
    .nvBtn.nvOculto,.nvBtn.oculto{display:none}
    .nvTit{flex:1;min-width:0;line-height:1.15}
    .nvTit b{display:block;font-size:1.05rem;font-weight:700;letter-spacing:.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .nvTit small{display:block;margin-top:2px;font-size:.72rem;opacity:.72;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .nvDer{display:flex;align-items:center;gap:8px;flex:none}
    .nvPunto{width:9px;height:9px;border-radius:50%;background:#3DAA6E;flex:none}
  `;
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

  function boton(o, oculto) {
    const b = document.createElement(o.href ? 'a' : 'button');
    if (!o.href) b.type = 'button'; else b.href = o.href;
    b.className = 'nvBtn' + (oculto ? ' nvOculto' : '');
    if (o.id) b.id = o.id;
    if (o.titulo) { b.title = o.titulo; b.setAttribute('aria-label', o.titulo); }
    if (o.onclick) b.setAttribute('onclick', o.onclick);
    b.innerHTML = o.html;
    return b;
  }

  function montar(op) {
    op = op || {};
    if (!document.getElementById('nvCss')) {
      const st = document.createElement('style'); st.id = 'nvCss'; st.textContent = CSS; document.head.appendChild(st);
    }
    const bar = document.createElement('header');
    bar.className = 'nvBar';
    if (op.portal !== false && !op.esPortal) bar.appendChild(boton({ href: '../portal/', html: '‹&nbsp;Portal', titulo: 'Volver al Portal' }));
    const tit = document.createElement('div');
    tit.className = 'nvTit';
    tit.innerHTML = '<b>' + esc(op.titulo || '') + '</b>' + (op.sub ? '<small>' + op.sub + '</small>' : '');
    bar.appendChild(tit);
    const der = document.createElement('div'); der.className = 'nvDer';
    if (op.punto) { const d = document.createElement('span'); d.id = 'dot'; d.className = 'nvPunto'; d.title = 'Conectado'; der.appendChild(d); }
    (op.extras || []).forEach(x => der.appendChild(boton(x, !!x.oculto)));
    der.appendChild(boton({ id: 'btnBloq', html: '🔒', titulo: 'Bloquear', onclick: 'SEG.bloquear()' }, !!(op.bloq && op.bloq.oculto)));
    if (op.perfil) der.appendChild(boton({ id: 'btnPerfil', html: '👤', titulo: 'Mi perfil', onclick: 'SEG.abrirPerfil(false)' }, true));
    bar.appendChild(der);
    const ref = document.currentScript;
    if (ref && ref.parentNode) ref.parentNode.insertBefore(bar, ref); else document.body.insertBefore(bar, document.body.firstChild);
  }
  function mostrar(id, ver) {
    const e = document.getElementById(id); if (!e) return;
    const v = ver !== false;
    e.classList.toggle('nvOculto', !v); if (v) { e.classList.remove('oculto'); e.style.display = ''; }
  }
  global.NAV = { montar, mostrar };
})(window);
