import { createClient } from 'npm:@supabase/supabase-js@2';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};
const ROLES = ['Administrador', 'Administrador delegado', 'Tesorero', 'Secretaría', 'Colaborador', 'Pastor', 'Asistente'];

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } });
}

function claveTemporal() {
  const abc = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789';
  const b = new Uint8Array(12);
  crypto.getRandomValues(b);
  return Array.from(b, (x) => abc[x % abc.length]).join('');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  try {
    const url = Deno.env.get('SUPABASE_URL')!;
    const anon = Deno.env.get('SUPABASE_ANON_KEY')!;
    const service = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const authHeader = req.headers.get('Authorization') ?? '';
    const caller = createClient(url, anon, { global: { headers: { Authorization: authHeader } } });

    const { data: puede } = await caller.rpc('fn_perm', { p_app: 'church_admin', p_key: 'gestionarUsuarios' });
    if (puede !== true) return json({ error: 'No tienes permiso para administrar usuarios.' }, 403);

    const { data: quien } = await caller.auth.getUser();
    const miId = quien?.user?.id;
    const { data: miFila } = await caller.from('usuario_apps').select('rol').eq('usuario_id', miId).eq('app', 'church_admin').maybeSingle();
    const soyAdmin = miFila?.rol === 'Administrador';

    const body = await req.json();
    const admin = createClient(url, service);

    if (body.accion === 'crear') {
      const correo = String(body.correo ?? '').trim().toLowerCase();
      const nombre = String(body.nombre ?? '').trim();
      const rol = String(body.rol ?? '');
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo)) return json({ error: 'Correo no válido.' }, 400);
      if (!ROLES.includes(rol)) return json({ error: 'Nivel no válido.' }, 400);
      if (rol === 'Administrador' && !soyAdmin) return json({ error: 'Solo un Administrador puede crear otro Administrador.' }, 403);
      const password = claveTemporal();
      const { data: creado, error: eCrear } = await admin.auth.admin.createUser({ email: correo, password, email_confirm: true });
      if (eCrear || !creado?.user) return json({ error: eCrear?.message ?? 'No se pudo crear la cuenta.' }, 400);
      const uid = creado.user.id;
      const { error: eU } = await admin.from('usuarios').insert({ id: uid, correo, nombre: nombre || correo, activo: true, must_change_creds: true, persona_id: body.persona_id ?? null });
      if (eU) { await admin.auth.admin.deleteUser(uid); return json({ error: eU.message }, 400); }
      if (rol !== 'Asistente') {
        const { error: eA } = await admin.from('usuario_apps').insert({ usuario_id: uid, app: 'church_admin', rol, permisos: body.permisos ?? {}, activo: true });
        if (eA) { await admin.auth.admin.deleteUser(uid); return json({ error: eA.message }, 400); }
      }
      return json({ ok: true, usuario_id: uid, password_temporal: password });
    }

    if (body.accion === 'reset_temporal') {
      const { data: obj } = await admin.from('usuario_apps').select('rol').eq('usuario_id', body.usuario_id).eq('app', 'church_admin').maybeSingle();
      if (obj?.rol === 'Administrador' && !soyAdmin) return json({ error: 'Solo un Administrador puede restablecer a otro Administrador.' }, 403);
      const password = claveTemporal();
      const { error } = await admin.auth.admin.updateUserById(body.usuario_id, { password });
      if (error) return json({ error: error.message }, 400);
      await admin.from('usuarios').update({ must_change_creds: true }).eq('id', body.usuario_id);
      return json({ ok: true, password_temporal: password });
    }

    return json({ error: 'Acción no válida.' }, 400);
  } catch (e) {
    return json({ error: String((e as Error).message ?? e) }, 500);
  }
});
