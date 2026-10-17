/**
 * dialogos.js — avisos y confirmaciones dentro de la propia app.
 * Reemplaza alert() y evita el letrero "detavarez.github.io dice…" del navegador.
 *   alert(msg)            → aviso con botón Aceptar (no bloquea la página)
 *   await confirmar(msg)  → true / false
 *   await pedir(msg, def) → texto o null
 */
(function (global) {
  const cola = [];
  let abierto = false;
  const esc = t => String(t == null ? '' : t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function estilos() {
    if (document.getElementById('dlgCss')) return;
    const s = document.createElement('style');
    s.id = 'dlgCss';
    s.textContent = `
      .dlgOv{position:fixed;inset:0;z-index:7000;display:flex;align-items:center;justify-content:center;padding:18px;background:rgba(0,0,0,.5);font-family:-apple-system,'Segoe UI',Roboto,sans-serif}
      .dlgCaja{background:#fff;color:#1a2433;max-width:380px;width:100%;border-radius:14px;padding:20px 20px 16px;box-shadow:0 12px 40px rgba(0,0,0,.4)}
      .dlgTit{font-weight:700;font-size:.95rem;color:#0f2445;margin-bottom:8px}
      .dlgMsg{font-size:.95rem;line-height:1.45;white-space:pre-wrap;word-break:break-word}
      .dlgIn{width:100%;box-sizing:border-box;margin-top:12px;padding:10px;border:1px solid #b9c2d0;border-radius:8px;font-size:1rem}
      .dlgBtns{display:flex;gap:8px;justify-content:flex-end;margin-top:16px}
      .dlgBtns button{border-radius:8px;padding:9px 16px;font-size:.95rem;cursor:pointer;border:1px solid #0f2445;background:#fff;color:#0f2445}
      .dlgBtns button.p{background:#0f2445;color:#fff}`;
    document.head.appendChild(s);
  }
  const titulo = () => (document.title || 'Aviso').replace(/\s*[—-].*$/, '');

  function mostrar(cfg) {
    return new Promise(resolve => {
      const poner = () => {
        estilos();
        abierto = true;
        const ov = document.createElement('div');
        ov.className = 'dlgOv';
        ov.innerHTML = `<div class="dlgCaja" role="dialog" aria-modal="true"><div class="dlgTit">${esc(titulo())}</div><div class="dlgMsg">${esc(cfg.mensaje)}</div>${cfg.input ? `<input class="dlgIn" type="${cfg.tipo || 'text'}" value="${esc(cfg.valor || '')}">` : ''}<div class="dlgBtns">${cfg.cancelar ? '<button type="button" data-v="no">Cancelar</button>' : ''}<button type="button" class="p" data-v="si">Aceptar</button></div></div>`;
        document.body.appendChild(ov);
        const input = ov.querySelector('.dlgIn');
        const cerrar = ok => {
          document.removeEventListener('keydown', tecla, true);
          const v = cfg.input ? (ok ? input.value : null) : ok;
          ov.remove();
          abierto = false;
          resolve(v);
          if (cola.length) cola.shift()();
        };
        const tecla = e => {
          if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); e.stopPropagation(); cerrar(true); }
          else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); cerrar(!cfg.cancelar); }
        };
        document.addEventListener('keydown', tecla, true);
        ov.querySelectorAll('button').forEach(b => { b.onclick = () => cerrar(b.dataset.v === 'si'); });
        setTimeout(() => (input || ov.querySelector('button.p')).focus(), 30);
      };
      if (abierto || !document.body) cola.push(poner); else poner();
    });
  }

  global.alert = msg => { mostrar({ mensaje: msg }); };
  global.confirmar = msg => mostrar({ mensaje: msg, cancelar: true });
  global.pedir = (msg, valor, tipo) => mostrar({ mensaje: msg, cancelar: true, input: true, valor, tipo });
})(window);
