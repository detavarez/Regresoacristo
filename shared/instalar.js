/**
 * instalar.js — invitación para instalar la app al abrir su enlace.
 * - Android / Chrome / Edge: botón "Instalar" que abre el aviso del sistema (un toque).
 * - iPhone / iPad (Safari): muestra los pasos (Compartir → Agregar a pantalla de inicio).
 * - No aparece si la app ya está instalada. Con "?instalar" en el enlace se muestra aunque se haya cerrado antes.
 */
(function () {
  const instalada = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone;
  if (instalada) return;
  const params = new URLSearchParams(location.search);
  const forzar = params.has('instalar');
  const esPortal = /\/portal\/?(index\.html)?$/.test(location.pathname);
  // Solo el Portal ofrece instalar por defecto; las demás páginas únicamente si el enlace trae ?instalar.
  // Nunca dentro del Portal instalado (?portal=1).
  if (!forzar && (!esPortal || params.get('portal') === '1')) return;
  const clave = 'ca_instalar_cerrado_' + location.pathname;
  if (!forzar && localStorage.getItem(clave)) return;
  const ua = navigator.userAgent;
  const ios = /iphone|ipad|ipod/i.test(ua) && !window.MSStream;
  const nombre = (document.title || 'esta app').replace(/\s*[—-].*$/, '');
  let ev = null, barra = null;

  function quitar(recordar) {
    if (barra) { barra.remove(); barra = null; }
    if (recordar) localStorage.setItem(clave, '1');
  }
  function mostrar() {
    if (barra || !document.body) return;
    barra = document.createElement('div');
    barra.style.cssText = 'position:fixed;left:10px;right:10px;bottom:10px;z-index:4000;background:#0f2445;color:#fff;border-radius:12px;padding:12px 14px;box-shadow:0 6px 24px rgba(0,0,0,.35);font:14px/1.4 -apple-system,Segoe UI,Roboto,sans-serif;display:flex;gap:10px;align-items:center;justify-content:space-between;';
    const texto = ios
      ? `Para instalar <b>${nombre}</b>: toca <b>Compartir</b> (el cuadro con la flecha) y luego <b>Agregar a pantalla de inicio</b>.`
      : `Instala <b>${nombre}</b> en tu dispositivo para abrirla como una app.`;
    barra.innerHTML = `<span style="flex:1">${texto}</span>${ios ? '' : '<button id="insBtn" style="background:#fff;color:#0f2445;border:0;border-radius:8px;padding:9px 14px;font-size:14px;font-weight:600;cursor:pointer">Instalar</button>'}<button id="insX" aria-label="Cerrar" style="background:none;border:0;color:#fff;font-size:20px;cursor:pointer;padding:0 4px">×</button>`;
    document.body.appendChild(barra);
    barra.querySelector('#insX').onclick = () => quitar(true);
    const b = barra.querySelector('#insBtn');
    if (b) b.onclick = async () => {
      if (!ev) { alert('Abre el menú del navegador (⋮) y elige "Instalar app" o "Agregar a pantalla de inicio".'); return; }
      ev.prompt();
      try { await ev.userChoice; } catch (e) { /* sin elección */ }
      ev = null; quitar(false);
    };
  }
  window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); ev = e; mostrar(); });
  window.addEventListener('appinstalled', () => quitar(false));
  if (ios) setTimeout(mostrar, 1500);
})();
