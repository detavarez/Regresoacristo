/**
 * seguridad.js — bloqueo, PIN, biometría y perfil de acceso (compartido).
 *
 * La sesión de Supabase NUNCA se cierra al bloquear. Bloquear solo tapa la
 * aplicación con la pantalla 1 hasta que el usuario se autentique de nuevo.
 *
 * Métodos de desbloqueo: 'pin' | 'bio' | 'clave' (email + contraseña).
 * - El método predeterminado se guarda en el servidor (usuario_pins.metodo_defecto).
 * - Elegir otro método en la pantalla de bloqueo vale solo para ese acceso.
 * - La biometría (WebAuthn de la plataforma) es por dispositivo y solo confirma
 *   la presencia del usuario en el equipo; la sesión sigue siendo la de Supabase.
 *
 * Requiere globales: sb, sbCall, getSesion (shared/auth.js).
 * Uso: SEG.init({ cerrarSesion: async () => {...}, nombreApp: 'Church Admin' });
 *      SEG.sesionIniciada({ nueva: true|false });
 */
(function (global) {
  const LS_ACT = 'ca_ultima_actividad';
  const LS_BLOQ = 'ca_bloqueada';
  const SS_OK = 'ca_sesion_ok';

  const cfg = { cerrarSesion: null, nombreApp: 'Church Admin', alDesbloquear: null };
  let est = { tiene_pin: false, preguntado: true, metodo_defecto: 'clave' };
  let minutos = 5;
  let bloqueado = false;
  let temporizador = null;
  let metodo = 'clave';
  let listo = false;

  const $ = id => document.getElementById(id);
  const ses = () => (typeof getSesion === 'function' ? getSesion() : null);
  const usuario = () => (ses() && ses().usuario) || null;
  const uid = () => (usuario() && usuario().id) || '';
  const esc = t => String(t == null ? '' : t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function b64(buf) { return btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  function deB64(t) { const s = atob(t.replace(/-/g, '+').replace(/_/g, '/')); return Uint8Array.from(s, c => c.charCodeAt(0)); }
  const bioSoportada = () => !!(global.PublicKeyCredential && navigator.credentials && navigator.credentials.create);
  const bioAqui = () => !!localStorage.getItem('ca_bio_' + uid()) && bioSoportada();

  // ───────── Interfaz (se inyecta sola) ─────────
  function inyectar() {
    if ($('segLock')) return;
    const css = document.createElement('style');
    css.textContent = `
      .segOv{position:fixed;inset:0;z-index:6000;display:none;align-items:center;justify-content:center;padding:18px;background:linear-gradient(160deg,var(--navy,#0b1f3a) 0%,var(--navy-light,#16335c) 100%);font-family:inherit}
      .segCard{background:var(--surface,#fff);color:var(--text,#1a2433);width:100%;max-width:380px;border-radius:14px;padding:26px 22px;box-shadow:0 12px 40px rgba(0,0,0,.35)}
      .segCard h1{font-size:1.25rem;margin:0 0 4px;color:var(--heading,#0b1f3a)}
      .segSub{font-size:.88rem;opacity:.75;margin-bottom:14px}
      .segCard input{width:100%;box-sizing:border-box;padding:11px 12px;border:1px solid rgba(128,128,128,.45);border-radius:8px;font-size:1rem;background:transparent;color:inherit;margin-top:4px}
      .segCard label{font-size:.8rem;opacity:.8}
      .segPin{letter-spacing:16px;text-align:center;font-size:1.7rem!important}
      .segBtn{width:100%;padding:12px;border-radius:8px;border:0;background:var(--navy,#0b1f3a);color:#fff;font-size:1rem;cursor:pointer;margin-top:10px}
      .segBtn2{width:100%;padding:10px;border-radius:8px;border:1px solid rgba(128,128,128,.5);background:none;color:inherit;cursor:pointer;margin-top:8px;font-size:.92rem}
      .segLinks{margin-top:14px;display:flex;flex-direction:column;gap:8px;text-align:center}
      .segLinks a{color:var(--navy,#0b1f3a);text-decoration:underline;cursor:pointer;font-size:.9rem}
      .segMsg{display:none;margin:10px 0 0;padding:9px 11px;border-radius:8px;font-size:.86rem;background:rgba(217,48,37,.12);color:#b3261e}
      .segMsg.ok{background:rgba(31,169,113,.15);color:#1f7a4d}
      .segPerfil{max-height:90vh;overflow:auto}
      .segSec{font-weight:700;font-size:.8rem;text-transform:uppercase;letter-spacing:.04em;margin:18px 0 8px}
      .segFila{display:grid;grid-template-columns:1fr 1fr;gap:8px}
      .segBtnRow{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}
      .segBtnRow button{flex:1;min-width:120px}
      .segLista{display:flex;flex-direction:column;gap:8px;margin-top:6px}
      .segItem{display:flex;justify-content:space-between;align-items:center;gap:10px;width:100%;padding:12px 14px;border-radius:10px;border:1px solid rgba(128,128,128,.4);background:none;color:inherit;cursor:pointer;font-size:.95rem;text-align:left}
      .segItem b{font-weight:600;font-size:.85rem;opacity:.8}
      .segPanelP{display:none}
      .segPanelP h1{margin-bottom:10px}
      .segPanelP .segFila{margin-top:8px}
    `;
    document.head.appendChild(css);

    const lock = document.createElement('div');
    lock.id = 'segLock';
    lock.className = 'segOv';
    lock.innerHTML = `
      <div class="segCard">
        <h1>${esc(cfg.nombreApp)} bloqueada</h1>
        <div class="segSub" id="segLockUser"></div>
        <div class="segMsg" id="segLockMsg"></div>
        <div id="segPanelInicio" style="display:none"><button class="segBtn" id="segBtnInicio" type="button"></button></div>
        <div id="segPanelBio" style="display:none"></div>
        <div id="segPanelPin" style="display:none"><label for="segInPin">PIN de 4 números</label><input id="segInPin" class="segPin" type="password" inputmode="numeric" maxlength="4" autocomplete="off"></div>
        <form id="segPanelClave" style="display:none"><label for="segInClave">Contraseña</label><input id="segInClave" type="password" autocomplete="current-password"><button class="segBtn" type="submit" id="segBtnClave">Entrar</button></form>
        <div class="segLinks">
          <a id="segOlvido" style="display:none">Olvidé mi contraseña</a>
          <a id="segUsaPin" style="display:none">Usar PIN</a>
          <a id="segUsaBio" style="display:none">Usar huella o rostro</a>
          <a id="segUsaClave" style="display:none">Usar email y contraseña</a>
        </div>
      </div>`;
    document.body.appendChild(lock);

    const perfil = document.createElement('div');
    perfil.id = 'segPerfil';
    perfil.className = 'segOv';
    perfil.style.zIndex = '5500';
    perfil.style.background = 'rgba(0,0,0,.55)';
    perfil.innerHTML = `
      <div class=\"segCard segPerfil\">
        <h1>Mi perfil</h1>
        <div class=\"segSub\" id=\"segPerfilUser\"></div>
        <div class=\"segSub\" id=\"segPerfilIntro\" style=\"display:none\">Elige cómo quieres entrar cada vez. Es tu decisión: puedes usar PIN, huella o rostro, o tu email y contraseña.</div>
        <div class=\"segMsg\" id=\"segPerfilMsg\"></div>
        <div class=\"segLista\">
          <button type=\"button\" class=\"segItem\" id=\"segAbrMetodo\"><span>Método de acceso</span><b id=\"segResMetodo\"></b></button>
          <button type=\"button\" class=\"segItem\" id=\"segAbrPin\"><span>PIN</span><b id=\"segPinEstado\"></b></button>
          <button type=\"button\" class=\"segItem\" id=\"segBioBtn\"><span>Huella o rostro</span><b id=\"segBioEstado\"></b></button>
          <button type=\"button\" class=\"segItem\" id=\"segAbrClave\"><span>Contraseña</span><b>Cambiar</b></button>
          <button type=\"button\" class=\"segItem\" id=\"segTemaBtn\"><span>Tema</span><b id=\"segTemaTxt\"></b></button>
        </div>
        <div class=\"segBtnRow\"><button class=\"segBtn2\" id=\"segBloquearAhora\" type=\"button\">Bloquear ahora</button><button class=\"segBtn2\" id=\"segCerrarSesion\" type=\"button\">Cerrar sesión</button></div>
        <button class=\"segBtn2\" id=\"segCerrarPerfil\" type=\"button\" style=\"margin-top:14px\">Cerrar</button>
      </div>`;
    document.body.appendChild(perfil);

    const pop = document.createElement('div');
    pop.id = 'segPop';
    pop.className = 'segOv';
    pop.style.zIndex = '5600';
    pop.style.background = 'rgba(0,0,0,.55)';
    pop.innerHTML = `
      <div class="segCard">
        <div id="segPopMetodo" class="segPanelP">
          <h1>Método de acceso</h1>
          <div class="segSub">Cómo quieres entrar cada vez.</div>
          <select id="segSelMetodo" style="width:100%;padding:10px;border-radius:8px;border:1px solid rgba(128,128,128,.45);background:transparent;color:inherit"></select>
          <button class="segBtn" id="segMetodoOk" type="button">Guardar</button>
        </div>
        <div id="segPopPin" class="segPanelP">
          <h1>PIN de 4 números</h1>
          <div class="segFila"><input id="segPin1" type="password" inputmode="numeric" maxlength="4" placeholder="PIN nuevo" autocomplete="off"><input id="segPin2" type="password" inputmode="numeric" maxlength="4" placeholder="Repetir PIN" autocomplete="off"></div>
          <button class="segBtn" id="segGuardarPin" type="button">Guardar PIN</button>
          <button class="segBtn2" id="segQuitarPin" type="button">No usar PIN</button>
        </div>
        <div id="segPopClave" class="segPanelP">
          <h1>Cambiar contraseña</h1>
          <input id="segClaveActual" type="password" placeholder="Contraseña actual" autocomplete="current-password">
          <div class="segFila"><input id="segClaveNueva" type="password" placeholder="Nueva contraseña" autocomplete="new-password"><input id="segClaveNueva2" type="password" placeholder="Repetir" autocomplete="new-password"></div>
          <button class="segBtn" id="segCambiarClave" type="button">Cambiar contraseña</button>
        </div>
        <div class="segMsg" id="segPopMsg"></div>
        <button class="segBtn2" id="segPopCerrar" type="button">Cancelar</button>
      </div>`;
    document.body.appendChild(pop);

    $('segBtnInicio').onclick = () => iniciarMetodo(metodo);
    $('segInPin').oninput = e => { if (e.target.value.length === 4) verificarPin(); };
    $('segPanelClave').onsubmit = e => { e.preventDefault(); verificarClave(); };
    $('segOlvido').onclick = olvideClave;
    $('segUsaPin').onclick = () => iniciarMetodo('pin');
    $('segUsaBio').onclick = () => iniciarMetodo('bio');
    $('segUsaClave').onclick = () => iniciarMetodo('clave');
    $('segAbrMetodo').onclick = () => abrirPop('segPopMetodo');
    $('segAbrPin').onclick = () => abrirPop('segPopPin');
    $('segAbrClave').onclick = () => abrirPop('segPopClave');
    $('segMetodoOk').onclick = guardarMetodo;
    $('segPopCerrar').onclick = cerrarPop;
    $('segTemaBtn').onclick = alternarTema;
    $('segBioBtn').onclick = () => (bioAqui() ? bioQuitar() : bioActivar());
    $('segGuardarPin').onclick = guardarPin;
    $('segQuitarPin').onclick = quitarPin;
    $('segCambiarClave').onclick = cambiarClave;
    $('segBloquearAhora').onclick = () => { cerrarPerfil(); bloquear(); };
    $('segCerrarSesion').onclick = async () => {
      if (!await confirmar('¿Cerrar la sesión? Tendrás que entrar de nuevo con tu email y contraseña.')) return;
      cerrarPerfil();
      detenerTodo();
      if (cfg.cerrarSesion) await cfg.cerrarSesion();
    };
    $('segCerrarPerfil').onclick = cerrarPerfil;
  }

  function msg(id, texto, ok) {
    const m = $(id);
    m.textContent = texto;
    m.className = 'segMsg' + (ok ? ' ok' : '');
    m.style.display = texto ? 'block' : 'none';
    // Si hay una ventanilla abierta, el mensaje se ve ahí; al tener éxito se cierra y queda en el perfil.
    if (id === 'segPerfilMsg' && $('segPop') && $('segPop').style.display === 'flex') {
      const q = $('segPopMsg');
      q.textContent = texto; q.className = 'segMsg' + (ok ? ' ok' : ''); q.style.display = texto ? 'block' : 'none';
      if (ok) cerrarPop();
    }
  }

  // ───────── Estado y configuración ─────────
  async function cargarEstado() {
    const c = await sbCall(sb.from('config_iglesia').select('bloqueo_minutos').eq('id', 1).maybeSingle());
    if (!c.error && c.data && typeof c.data.bloqueo_minutos === 'number') minutos = c.data.bloqueo_minutos;
    const e = await sbCall(sb.rpc('ca_pin_estado'));
    if (!e.error && e.data) est = e.data;
  }

  function metodoDisponible(m) {
    if (m === 'pin') return !!est.tiene_pin;
    if (m === 'bio') return bioAqui();
    return true;
  }
  function metodoPredeterminado() {
    const m = est.metodo_defecto || 'clave';
    if (metodoDisponible(m)) return m;
    if (bioAqui()) return 'bio';
    if (est.tiene_pin) return 'pin';
    return 'clave';
  }

  // ───────── Bloqueo ─────────
  function guardarActividad() { localStorage.setItem(LS_ACT, String(Date.now())); }
  function marcarActividad() {
    if (bloqueado || !usuario()) return;
    guardarActividad();
    clearTimeout(temporizador);
    if (minutos > 0) temporizador = setTimeout(bloquear, minutos * 60000);
  }
  function detenerTodo() {
    clearTimeout(temporizador);
    bloqueado = false;
    localStorage.removeItem(LS_BLOQ);
    sessionStorage.removeItem(SS_OK);
    if ($('segLock')) $('segLock').style.display = 'none';
  }

  function bloquear() {
    if (bloqueado || !usuario()) return;
    bloqueado = true;
    clearTimeout(temporizador);
    localStorage.setItem(LS_BLOQ, '1');
    sessionStorage.removeItem(SS_OK);
    document.querySelectorAll('.modalOverlay.abierto').forEach(m => m.classList.remove('abierto'));
    cerrarPerfil();
    const u = usuario();
    $('segLockUser').textContent = u.nombre || u.correo || '';
    $('segInPin').value = '';
    $('segInClave').value = '';
    msg('segLockMsg', '');
    $('segLock').style.display = 'flex';
    mostrarInicio(metodoPredeterminado());
  }

  function desbloquear() {
    bloqueado = false;
    localStorage.removeItem(LS_BLOQ);
    sessionStorage.setItem(SS_OK, '1');
    $('segLock').style.display = 'none';
    // Si estábamos en la entrada "página 1" del historial, volvemos a la aplicación.
    try { if (history.state && history.state.ca === 'lock') history.pushState({ ca: 'base' }, ''); } catch (e) { /* sin historial */ }
    marcarActividad();
    if (cfg.alDesbloquear) cfg.alDesbloquear();
  }

  // Pantalla 1: muestra un botón para el método predeterminado; nada se inicia solo.
  function mostrarInicio(m) {
    metodo = m;
    $('segPanelInicio').style.display = 'block';
    $('segPanelBio').style.display = 'none';
    $('segPanelPin').style.display = 'none';
    $('segPanelClave').style.display = 'none';
    $('segBtnInicio').textContent = m === 'bio' ? 'Entrar con huella o rostro' : (m === 'pin' ? 'Entrar con PIN' : 'Entrar con email y contraseña');
    $('segOlvido').style.display = 'none';
    $('segUsaPin').style.display = (m !== 'pin' && est.tiene_pin) ? '' : 'none';
    $('segUsaBio').style.display = (m !== 'bio' && bioAqui()) ? '' : 'none';
    $('segUsaClave').style.display = m !== 'clave' ? '' : 'none';
    msg('segLockMsg', '');
  }
  // Se llama solo cuando el usuario toca un botón o enlace.
  function iniciarMetodo(m) {
    metodo = m;
    $('segPanelInicio').style.display = 'none';
    $('segPanelPin').style.display = m === 'pin' ? 'block' : 'none';
    $('segPanelClave').style.display = m === 'clave' ? 'block' : 'none';
    $('segOlvido').style.display = (m === 'pin' || m === 'clave') ? '' : 'none';
    $('segUsaPin').style.display = (m !== 'pin' && est.tiene_pin) ? '' : 'none';
    $('segUsaBio').style.display = (m !== 'bio' && bioAqui()) ? '' : 'none';
    $('segUsaClave').style.display = m !== 'clave' ? '' : 'none';
    msg('segLockMsg', '');
    if (m === 'pin') setTimeout(() => $('segInPin').focus(), 80);
    if (m === 'clave') setTimeout(() => $('segInClave').focus(), 80);
    if (m === 'bio') bioDesbloquear(false);
  }
  // Compatibilidad con llamadas internas (errores): muestra el panel de un método ya elegido.
  function mostrarMetodo(m) { iniciarMetodo(m); }

  async function verificarPin() {
    const pin = $('segInPin').value.trim();
    if (!/^[0-9]{4}$/.test(pin)) return;
    const r = await sbCall(sb.rpc('ca_pin_verificar', { p: pin }));
    $('segInPin').value = '';
    if (r.error) { msg('segLockMsg', 'No se pudo verificar el PIN. Usa tu email y contraseña.'); return; }
    const d = r.data || {};
    if (d.ok) { desbloquear(); return; }
    if (d.sin_pin) { est.tiene_pin = false; mostrarMetodo('clave', false); msg('segLockMsg', 'No hay un PIN activo. Usa tu contraseña.'); return; }
    if (d.bloqueado) { mostrarMetodo('clave', false); msg('segLockMsg', 'Demasiados intentos con el PIN. Usa tu contraseña o espera ' + Math.ceil((d.segundos || 300) / 60) + ' min.'); return; }
    msg('segLockMsg', 'PIN incorrecto. Intentos restantes: ' + d.restantes);
  }

  async function verificarClave() {
    const clave = $('segInClave').value;
    const correo = usuario() && usuario().correo;
    if (!clave || !correo) return;
    $('segBtnClave').disabled = true;
    const { error } = await sbCall(sb.auth.signInWithPassword({ email: correo, password: clave }));
    $('segBtnClave').disabled = false;
    $('segInClave').value = '';
    if (error) { msg('segLockMsg', 'Contraseña incorrecta.'); return; }
    desbloquear();
  }

  async function olvideClave() {
    // Sin correos automáticos: un administrador crea una contraseña temporal (Admin → Usuarios → Editar acceso).
    msg('segLockMsg', 'Pide a un administrador que te cree una contraseña temporal.', true);
  }

  // Primer ingreso con email: la huella o el rostro es el método predeterminado (cada quien puede cambiarlo).
  async function primerInicio() {
    let listo = false;
    try {
      if (bioSoportada() && await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()) listo = await bioActivar(true);
    } catch (e) { listo = false; }
    if (listo) {
      const r = await sbCall(sb.rpc('ca_metodo_fijar', { m: 'bio' }));
      if (!r.error) { est.metodo_defecto = 'bio'; est.preguntado = true; }
    }
    abrirPerfil(!listo);
    if (listo) msg('segPerfilMsg', 'Listo: tu huella o rostro es tu método predeterminado. Aquí puedes cambiarlo.', true);
  }

  // ───────── Biometría ─────────
  async function bioActivar(silenciosoPrimera) {
    const u = usuario();
    if (!u) return false;
    if (!bioSoportada()) { msg('segPerfilMsg', 'Este navegador no permite huella o rostro.'); return false; }
    try {
      if (!(await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable())) { if (!silenciosoPrimera) msg('segPerfilMsg', 'Este dispositivo no tiene huella o rostro configurados.'); return false; }
      const cred = await navigator.credentials.create({ publicKey: {
        challenge: crypto.getRandomValues(new Uint8Array(32)),
        rp: { name: cfg.nombreApp, id: location.hostname },
        user: { id: new TextEncoder().encode(String(u.id).replace(/-/g, '').slice(0, 32)), name: u.correo || 'usuario', displayName: u.nombre || u.correo || 'Usuario' },
        pubKeyCredParams: [{ type: 'public-key', alg: -7 }, { type: 'public-key', alg: -257 }],
        authenticatorSelection: { authenticatorAttachment: 'platform', userVerification: 'required', residentKey: 'discouraged' },
        timeout: 60000, attestation: 'none',
      } });
      localStorage.setItem('ca_bio_' + u.id, b64(cred.rawId));
      if (!silenciosoPrimera) { msg('segPerfilMsg', 'Listo: ya puedes entrar con huella o rostro en este dispositivo.', true); pintarPerfil(); }
      return true;
    } catch (e) {
      if (!silenciosoPrimera) msg('segPerfilMsg', 'No se pudo activar: ' + (e && e.name === 'NotAllowedError' ? 'cancelado o sin permiso.' : (e.message || 'error')));
      return false;
    }
  }
  async function bioQuitar() {
    localStorage.removeItem('ca_bio_' + uid());
    if (est.metodo_defecto === 'bio') { await sbCall(sb.rpc('ca_metodo_fijar', { m: 'clave' })); est.metodo_defecto = 'clave'; }
    msg('segPerfilMsg', 'Se desactivó la huella o rostro en este dispositivo.', true);
    pintarPerfil();
  }
  async function bioDesbloquear(silencioso) {
    const id = localStorage.getItem('ca_bio_' + uid());
    if (!id) { mostrarInicio(est.tiene_pin ? 'pin' : 'clave'); return; }
    try {
      await navigator.credentials.get({ publicKey: {
        challenge: crypto.getRandomValues(new Uint8Array(32)),
        allowCredentials: [{ type: 'public-key', id: deB64(id), transports: ['internal'] }],
        userVerification: 'required', timeout: 60000, rpId: location.hostname,
      } });
      desbloquear();
    } catch (e) {
      if (!silencioso) { mostrarInicio('bio'); msg('segLockMsg', 'No se reconoció la huella o el rostro. Puedes intentar de nuevo o usar otro método.'); }
    }
  }

  // ───────── Perfil ─────────
  const ETIQ_METODO = { clave: 'Email y contraseña', pin: 'PIN', bio: 'Huella o rostro' };
  function pintarPerfil() {
    const u = usuario() || {};
    $('segPerfilUser').textContent = (u.nombre || '') + (u.correo ? ' · ' + u.correo : '');
    $('segResMetodo').textContent = ETIQ_METODO[est.metodo_defecto || 'clave'] || '';
    $('segPinEstado').textContent = est.tiene_pin ? 'Activado · Cambiar' : 'Crear';
    $('segQuitarPin').style.display = est.tiene_pin ? '' : 'none';
    $('segBioEstado').textContent = !bioSoportada() ? 'No disponible' : (bioAqui() ? 'Activada · Desactivar' : 'Activar');
    $('segBioBtn').disabled = !bioSoportada();
    const sel = $('segSelMetodo');
    sel.innerHTML = `<option value="clave">Email y contraseña</option><option value="pin">PIN de 4 números</option><option value="bio">Huella o rostro (este dispositivo)</option>`;
    sel.value = est.metodo_defecto || 'clave';
    $('segTemaTxt').textContent = temaActual() === 'oscuro' ? '🌞 Modo claro' : '🌛 Modo oscuro';
  }
  function abrirPop(panel) {
    ['segPopMetodo', 'segPopPin', 'segPopClave'].forEach(i => { $(i).style.display = i === panel ? 'block' : 'none'; });
    ['segPin1', 'segPin2', 'segClaveActual', 'segClaveNueva', 'segClaveNueva2'].forEach(i => { $(i).value = ''; });
    const q = $('segPopMsg'); q.textContent = ''; q.style.display = 'none';
    $('segPop').style.display = 'flex';
  }
  function cerrarPop() { if ($('segPop')) $('segPop').style.display = 'none'; }
  // Tema claro/oscuro compartido por todas las apps (misma clave que Church Admin).
  function temaActual() { try { return localStorage.getItem('ca_tema') === 'oscuro' ? 'oscuro' : 'claro'; } catch (e) { return 'claro'; } }
  function aplicarTemaGlobal(t) {
    if (t === 'oscuro') document.documentElement.setAttribute('data-tema', 'oscuro'); else document.documentElement.removeAttribute('data-tema');
  }
  function alternarTema() {
    const nuevo = temaActual() === 'oscuro' ? 'claro' : 'oscuro';
    try { localStorage.setItem('ca_tema', nuevo); } catch (e) { /* sin almacenamiento */ }
    aplicarTemaGlobal(nuevo);
    pintarPerfil();
  }
  aplicarTemaGlobal(temaActual());
  function abrirPerfil(primeraVez) {
    pintarPerfil();
    $('segPerfilIntro').style.display = primeraVez ? 'block' : 'none';
    cerrarPop();
    msg('segPerfilMsg', '');
    $('segPerfil').style.display = 'flex';
  }
  function cerrarPerfil() { cerrarPop(); if ($('segPerfil')) $('segPerfil').style.display = 'none'; }

  async function guardarMetodo() {
    const m = $('segSelMetodo').value;
    if (m === 'pin' && !est.tiene_pin) { msg('segPerfilMsg', 'Primero guarda un PIN.'); $('segSelMetodo').value = est.metodo_defecto || 'clave'; return; }
    if (m === 'bio' && !bioAqui()) { msg('segPerfilMsg', 'Primero activa la huella o rostro en este dispositivo.'); $('segSelMetodo').value = est.metodo_defecto || 'clave'; return; }
    const r = await sbCall(sb.rpc('ca_metodo_fijar', { m }));
    if (r.error) { msg('segPerfilMsg', 'No se pudo guardar: ' + r.error.message); return; }
    est.metodo_defecto = m; est.preguntado = true;
    msg('segPerfilMsg', 'Método predeterminado guardado.', true);
  }
  async function guardarPin() {
    const a = $('segPin1').value.trim(), b = $('segPin2').value.trim();
    if (!/^[0-9]{4}$/.test(a)) { msg('segPerfilMsg', 'El PIN debe tener exactamente 4 números.'); return; }
    if (a !== b) { msg('segPerfilMsg', 'Los dos PIN no coinciden.'); return; }
    const r = await sbCall(sb.rpc('ca_pin_fijar', { p: a }));
    if (r.error) { msg('segPerfilMsg', 'No se pudo guardar: ' + r.error.message); return; }
    est.tiene_pin = true; est.preguntado = true;
    $('segPin1').value = ''; $('segPin2').value = '';
    msg('segPerfilMsg', 'PIN guardado.', true);
    pintarPerfil();
  }
  async function quitarPin() {
    const r = await sbCall(sb.rpc('ca_pin_no_usar'));
    if (r.error) { msg('segPerfilMsg', 'No se pudo guardar: ' + r.error.message); return; }
    est.tiene_pin = false; est.preguntado = true;
    if (est.metodo_defecto === 'pin') est.metodo_defecto = 'clave';
    msg('segPerfilMsg', 'Listo: no se usará PIN.', true);
    pintarPerfil();
  }
  async function cambiarClave() {
    const actual = $('segClaveActual').value, n1 = $('segClaveNueva').value, n2 = $('segClaveNueva2').value;
    const correo = usuario() && usuario().correo;
    if (!actual || !n1) { msg('segPerfilMsg', 'Escribe tu contraseña actual y la nueva.'); return; }
    if (n1.length < 8) { msg('segPerfilMsg', 'La contraseña nueva debe tener al menos 8 caracteres.'); return; }
    if (n1 !== n2) { msg('segPerfilMsg', 'Las contraseñas nuevas no coinciden.'); return; }
    const v = await sbCall(sb.auth.signInWithPassword({ email: correo, password: actual }));
    if (v.error) { msg('segPerfilMsg', 'La contraseña actual no es correcta.'); return; }
    const r = await sbCall(sb.auth.updateUser({ password: n1 }));
    if (r.error) { msg('segPerfilMsg', 'No se pudo cambiar: ' + r.error.message); return; }
    ['segClaveActual', 'segClaveNueva', 'segClaveNueva2'].forEach(i => { $(i).value = ''; });
    msg('segPerfilMsg', 'Contraseña cambiada.', true);
  }

  // ───────── Historial: "página 1" = pantalla de bloqueo ─────────
  function prepararHistorial() {
    // Páginas abiertas desde el Portal (?portal=1) y el propio Portal: "atrás" vuelve al portal / sale, sin pantalla de bloqueo intermedia.
    if (cfg.sinHistorial || new URLSearchParams(location.search).get('portal') === '1') return;
    try {
      if (history.state && history.state.ca === 'lock') return;
      history.replaceState({ ca: 'lock' }, '');
      history.pushState({ ca: 'base' }, '');
    } catch (e) { /* sin historial */ }
  }
  function lockPorAtras() { if (usuario()) bloquear(); }

  // ───────── Eventos globales ─────────
  let ultimaMarca = 0;
  function enganchar() {
    ['pointerdown', 'keydown', 'touchstart', 'scroll'].forEach(ev => document.addEventListener(ev, () => {
      const t = Date.now();
      if (t - ultimaMarca > 3000 && usuario() && !bloqueado) { ultimaMarca = t; marcarActividad(); }
    }, { passive: true }));
    document.addEventListener('visibilitychange', () => {
      if (!usuario()) return;
      if (document.visibilityState !== 'visible' || bloqueado) return;
      // Solo se bloquea si pasó el tiempo de inactividad; cambiar de pestaña o de app no bloquea.
      const last = Number(localStorage.getItem(LS_ACT)) || Date.now();
      if (minutos > 0 && Date.now() - last > minutos * 60000) bloquear();
      else marcarActividad();
    });
    if (global.sb && sb.auth && sb.auth.onAuthStateChange) {
      sb.auth.onAuthStateChange(async evento => {
        if (evento === 'PASSWORD_RECOVERY') {
          const n = await pedir('Escribe tu nueva contraseña (mínimo 8 caracteres):', '', 'password');
          if (n && n.length >= 8) sb.auth.updateUser({ password: n }).then(r => alert(r.error ? 'No se pudo cambiar: ' + r.error.message : 'Contraseña cambiada.'));
        }
      });
    }
  }

  // ───────── API pública ─────────
  global.SEG = {
    init(opciones) {
      Object.assign(cfg, opciones || {});
      inyectar();
      if (!listo) { enganchar(); listo = true; }
    },
    async sesionIniciada(opciones) {
      const nueva = !!(opciones && opciones.nueva);
      await cargarEstado();
      prepararHistorial();
      if (nueva) {
        bloqueado = false;
        localStorage.removeItem(LS_BLOQ);
        sessionStorage.setItem(SS_OK, '1');
        guardarActividad();
        marcarActividad();
        if (!est.preguntado) await primerInicio();
        return;
      }
      const last = Number(localStorage.getItem(LS_ACT)) || Date.now();
      const vencida = minutos > 0 && Date.now() - last > minutos * 60000;
      if (localStorage.getItem(LS_BLOQ) === '1' || vencida) bloquear();
      else marcarActividad();
    },
    bloquear,
    abrirPerfil,
    lockPorAtras,
    detener: detenerTodo,
    estaBloqueado: () => bloqueado,
    getMinutos: () => minutos,
    setMinutos(n) { minutos = n; marcarActividad(); },
  };
})(window);
