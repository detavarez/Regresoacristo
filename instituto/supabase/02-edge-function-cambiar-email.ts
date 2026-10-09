// Añadir dentro de las Edge Functions `admin-estudiantes` y `admin-personal`,
// junto a las acciones existentes ('crear', 'cambiar_password', 'eliminar').
// Debe ir DESPUÉS de validar el JWT y confirmar que quien llama es admin.
// Variables ya existentes en tu función: `admin` = cliente supabase con service_role,
// `cuerpo` = JSON recibido, `respuesta(obj, status)` = tu helper que devuelve JSON con CORS.
// Si tu helper tiene otro nombre, ajústalo.

if (cuerpo.accion === 'cambiar_email') {
  const email = String(cuerpo.email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return respuesta({ ok: false, error: 'Correo no válido.' }, 400);
  if (!cuerpo.user_id) return respuesta({ ok: false, error: 'Falta user_id.' }, 400);

  const { error } = await admin.auth.admin.updateUserById(cuerpo.user_id, { email, email_confirm: true });
  if (error) return respuesta({ ok: false, error: error.message }, 400);

  // En admin-estudiantes la tabla es 'estudiantes'.
  // En admin-personal usa la tabla según cuerpo.rol: 'maestro' -> 'maestros', 'admin' -> 'admins'.
  await admin.from('estudiantes').update({ email }).eq('user_id', cuerpo.user_id);

  return respuesta({ ok: true }, 200);
}
