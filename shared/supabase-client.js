/**
 * shared/supabase-client.js
 * Ver-001
 *
 * Cliente compartido de Supabase para las 4 apps (Church Admin, Food Pantry,
 * Free Store, Instituto Bíblico). Cárgalo en cada index.html DESPUÉS del
 * script CDN de supabase-js y ANTES del código propio de cada app:
 *
 *   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js"></script>
 *   <script src="/shared/supabase-client.js"></script>
 *   <script src="/shared/auth.js"></script>
 *   <script src="app.js"></script>  <-- código propio de esta app
 *
 * Todas las apps viven bajo el mismo dominio (midominio.com/church-admin/,
 * /food-pantry/, etc.) por lo que comparten automáticamente la sesión de
 * Auth guardada en localStorage por supabase-js — no hace falta SSO extra.
 */

// ── CONFIGURACIÓN ────────────────────────────────────────────────────────
// TODO: reemplazar con las credenciales reales del proyecto Supabase (A001
// mientras se prueba, luego W001/T001). El anon key es seguro de exponer
// en el cliente: el aislamiento real lo hace RLS en el servidor, no esto.
const SUPABASE_CONFIG = {
  url: 'https://mhdzugfaykazcwbvcrkh.supabase.co',
  anonKey: 'sb_publishable_8g4MN2pEDMIo0PUetbcXuQ_Bw13eMcO',
};

if (typeof supabase === 'undefined') {
  throw new Error(
    'supabase-js no está cargado. Verifica que el <script> del CDN esté ' +
    'antes de shared/supabase-client.js en el HTML.'
  );
}

const sb = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storageKey: 'iglesia-auth', // mismo storageKey en las 4 apps = sesión compartida
  },
});

// ── HELPERS DE ERROR / RESPUESTA ─────────────────────────────────────────
/**
 * Envuelve una llamada a Supabase y normaliza el resultado.
 * Uso: const { data, error } = await sbCall(sb.from('personas').select('*'));
 */
async function sbCall(promiseLike) {
  try {
    const { data, error } = await promiseLike;
    if (error) {
      console.error('[Supabase]', error.message, error);
      return { data: null, error };
    }
    return { data, error: null };
  } catch (err) {
    console.error('[Supabase] excepción inesperada:', err);
    return { data: null, error: err };
  }
}

/**
 * Muestra un mensaje de error genérico al usuario (ajusta al sistema de
 * toasts/alerts que ya use cada app — placeholder simple por ahora).
 */
function sbNotifyError(mensaje) {
  console.error(mensaje);
  if (typeof mostrarToast === 'function') {
    mostrarToast(mensaje, 'error');
  } else {
    alert(mensaje);
  }
}

// ── ESTADO DE CONEXIÓN ────────────────────────────────────────────────────
let _sbOnline = navigator.onLine;
window.addEventListener('online', () => { _sbOnline = true; });
window.addEventListener('offline', () => { _sbOnline = false; });

function sbIsOnline() {
  return _sbOnline;
}

// Exponer en window para que app.js de cada app lo use sin imports/build step
window.sb = sb;
window.sbCall = sbCall;
window.sbNotifyError = sbNotifyError;
window.sbIsOnline = sbIsOnline;
