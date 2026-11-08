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
  // Módulo abierto desde el Portal (?portal=1): sin entradas extra en el historial, así "atrás" vuelve directo al Portal.
  const DESDE_PORTAL = new URLSearchParams(location.search).get('portal') === '1';
  // Celular: las tablas se muestran como tarjetas (cada fila, un bloque con "Columna: valor") para no tener que mover la pantalla a la derecha.
  (function tablasMovil() {
    const css = `@media (max-width: 720px) {
      html, body { max-width: 100%; overflow-x: hidden; }
      table.apilada { display: block; width: 100%; border: 0; }
      table.apilada thead { display: none; }
      table.apilada tbody, table.apilada tfoot { display: block; }
      table.apilada tr { display: grid; grid-template-columns: 1fr 1fr; gap: 2px 14px; border: 1px solid rgba(128,128,128,0.35); border-radius: 10px; margin: 0 0 8px; padding: 8px 10px; }
      table.apilada td { display: block; width: auto !important; max-width: none !important; min-width: 0; padding: 1px 0 !important; border: 0 !important; text-align: left !important; white-space: normal !important; overflow-wrap: anywhere; }
      table.apilada td.ancha, table.apilada td.acciones { grid-column: 1 / -1; }
      table.apilada td.vacia { display: none; }
      table.apilada td.cabF { grid-column: 1; grid-row: 1; }
      table.apilada td.cabM { grid-column: 2; grid-row: 1; text-align: right !important; font-weight: 700; }
      table.apilada td[data-label]::before { content: attr(data-label); display: block; font-weight: 600; font-size: 0.66rem; text-transform: uppercase; letter-spacing: 0.03em; color: var(--text-muted, #667); }
      table.apilada td > button, table.apilada td > a { white-space: normal; margin-top: 2px; }
    }
    @media (max-width: 520px) { .evdFila { grid-template-columns: 1fr !important; } }`;
    const st = document.createElement('style'); st.textContent = css; (document.head || document.documentElement).appendChild(st);
    function marcar(t) {
      if (t.dataset.apil) return;
      const ths = [...t.querySelectorAll('thead th')].map(h => h.textContent.trim());
      t.dataset.apil = '1';
      t.classList.add('apilada');
      if (!ths.length) return;
      t.querySelectorAll('tbody tr, tfoot tr').forEach(tr => {
        const tds = [...tr.children].filter(c => c.tagName === 'TD');
        if (tds.length !== ths.length) return;
        tds.forEach((td, i) => {
          if (ths[i]) td.setAttribute('data-label', ths[i]);
          const txt = td.textContent.trim();
          if (!txt && !td.querySelector('button, a, input, select')) td.classList.add('vacia');
          else if (txt === '—' || txt === '-') td.classList.add('vacia');
          if (i === 0 && /^(fecha|date)/i.test(ths[0] || '')) td.classList.add('cabF');
          if (i === tds.length - 1 && /^[-+(]?\$?[\d,]+(\.\d+)?\)?$/.test(txt.replace(/\s/g, '')) && /\$/.test(txt) && !td.querySelector('button, a')) td.classList.add('cabM');
          if (td.querySelector('button, a')) td.classList.add('acciones');
          else if (txt.length > 24) td.classList.add('ancha');
        });
      });
    }
    let pend = false;
    function barrer() {
      pend = false;
      document.querySelectorAll('.tablaWrap table, table.tablaTrans').forEach(marcar);
    }
    function programar() { if (!pend) { pend = true; requestAnimationFrame(barrer); } }
    document.addEventListener('DOMContentLoaded', () => {
      barrer();
      new MutationObserver(programar).observe(document.body, { childList: true, subtree: true });
    });
  })();

  if (DESDE_PORTAL) { try { history.pushState = function () {}; } catch (e) { /* sin historial */ } }
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
    if (op.portal !== false && !op.esPortal) bar.appendChild(boton({ href: '../portal/', html: '‹&nbsp;Portal', titulo: 'Volver al Portal', onclick: DESDE_PORTAL ? 'if(history.length>1){history.back();return false}' : '' }));
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
