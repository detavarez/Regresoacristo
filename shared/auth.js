/**
 * shared/auth.js
 * Ver-001 
 *
 * Maneja login, logout, sesión activa, y resolución de rol/permisos por
 * app. Depende de shared/supabase-client.js (debe cargarse antes).
 *
 * Cada app define su propio APP_SLUG (ej. 'church_admin', 'food_pantry',
 * 'free_store', 'instituto_biblico') ANTES de cargar este script:
 *
 *   <script>const APP_SLUG = 'church_admin';</script>
 *   <script src="/shared/supabase-client.js"></script>
 *   <script src="/shared/auth.js"></script>
 */

if (typeof APP_SLUG === 'undefined') {
  throw new Error('APP_SLUG no está definido. Debe declararse antes de cargar shared/auth.js.');
}

// Estado de sesión en memoria (no localStorage propio — supabase-js ya
// persiste el token; esto es solo cache de los datos derivados)
let sesionActual = {
  usuario: null,       // fila de la tabla usuarios
  personaId: null,     // persona vinculada (para nombre, etc.)
  rol: null,            // rol en ESTA app (de usuario_apps)
  permisos: {},         // permisos efectivos (rol + overrides) para ESTA app
};

/**
 * Intenta iniciar sesión. Retorna { ok: true } o { ok: false, mensaje }.
 */
async function iniciarSesion(email, password) {
  const { data, error } = await sbCall(
    sb.auth.signInWithPassword({ email, password })
  );
  if (error) {
    return { ok: false, mensaje: 'Correo o contraseña incorrectos.' };
  }

  const cargada = await cargarSesion();
  if (!cargada.ok) {
    await sb.auth.signOut();
    return cargada;
  }
  return { ok: true };
}

/**
 * Carga (o recarga) los datos de usuario/rol/permisos para la sesión activa.
 * Se llama después de login y también al abrir la app si ya hay un token
 * válido guardado (auto-login).
 */
async function cargarSesion() {
  const { data: authData } = await sb.auth.getUser();
  const authUser = authData?.user;
  if (!authUser) {
    return { ok: false, mensaje: 'No hay sesión activa.' };
  }

  const { data: usuario, error: errUsuario } = await sbCall(
    sb.from('usuarios').select('*').eq('id', authUser.id).single()
  );
  if (errUsuario || !usuario) {
    return { ok: false, mensaje: 'No se encontró el perfil de usuario.' };
  }

  const { data: usuarioApp, error: errApp } = await sbCall(
    sb.from('usuario_apps')
      .select('rol, permisos_override')
      .eq('usuario_id', usuario.id)
      .eq('app', APP_SLUG)
      .single()
  );
  if (errApp || !usuarioApp) {
    return { ok: false, mensaje: 'Tu usuario no tiene acceso a esta aplicación.' };
  }

  sesionActual = {
    usuario,
    personaId: usuario.persona_id,
    rol: usuarioApp.rol,
    permisos: resolverPermisos(usuarioApp.rol, usuarioApp.permisos_override),
  };

  return { ok: true };
}

/**
 * Combina los permisos por defecto del rol con los overrides guardados
 * por usuario. Ajusta ROLES_DEFAULT según los PERM_KEYS reales de cada app.
 */
const ROLES_DEFAULT = {
  Administrador: { todo: true },
  Tesorero: { verReportes: true, agregarTrans: true, editarTrans: true, exportarDatos: true },
  Colaborador: { agregarTrans: true },
};

function resolverPermisos(rol, override) {
  const base = ROLES_DEFAULT[rol] || {};
  return { ...base, ...(override || {}) };
}

function tienePermiso(clave) {
  return !!(sesionActual.permisos.todo || sesionActual.permisos[clave]);
}

async function cerrarSesion() {
  await sb.auth.signOut();
  sesionActual = { usuario: null, personaId: null, rol: null, permisos: {} };
}

function sesionActiva() {
  return !!sesionActual.usuario;
}

// Exponer en window
window.iniciarSesion = iniciarSesion;
window.cargarSesion = cargarSesion;
window.cerrarSesion = cerrarSesion;
window.tienePermiso = tienePermiso;
window.sesionActiva = sesionActiva;
window.getSesion = () => sesionActual;
