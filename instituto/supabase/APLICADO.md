# Cambios aplicados en Supabase (proyecto zkmrwmondbmboxqvrdto)

- Migración `email_en_tablas_y_proteger_nombre_estudiante`: columna `email` en estudiantes, maestros y admins; sincronización con auth.users; el estudiante no puede cambiar su `nombre` ni `email` desde el cliente.
- Edge Functions `admin-estudiantes` (v7) y `admin-personal` (v2): nueva acción `cambiar_email`, y `crear` ahora guarda el correo.
- `cambiar_email` en admin-estudiantes: solo administrador. En admin-personal: solo administrador.
- El archivo `01-email-y-proteger-nombre.sql` es la misma migración, por referencia.
