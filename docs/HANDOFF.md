# HANDOFF — Church Admin (Iglesia Regreso a Cristo)
Leer también `docs/PROGRESS.md` (hecho) y `docs/WIP.md` (pendiente). Sin secretos en este archivo.

## Usuario y reglas de trabajo
- David (admin, no técnico en Supabase/GitHub). Responder **corto, en español** (en inglés si él escribe en inglés). Sin resumen de lo hecho; solo lo que él debe hacer.
- **Cada respuesta empieza y termina con "Parte x de x"** (plan actual: 16 partes; 15 hechas).
- No preguntar "¿qué sigue?"; avanzar. Preguntar solo decisiones de diseño reales. Sin emojis innecesarios en documentos.
- Instrucciones de Supabase/GitHub: paso a paso y sencillas. Subir cambios directo a `main`.
- Token de GitHub: lo da David en el chat (clásico `ghp_`); **nunca guardarlo en archivos**. Hay que pedirlo si no está.

## Infraestructura
- Repo `detavarez/Regresoacristo` (GitHub Pages, sitio `detavarez.github.io/Regresoacristo/`). Supabase proyecto `mhdzugfaykazcwbvcrkh` (RaC-Proyecto-B001); herramientas Supabase: `execute_sql`, `apply_migration`, `deploy_edge_function` (pide aprobación; la 2.ª vez funcionó).
- Otro proceso también empuja a `main` (Instituto, listas de canciones): siempre `git pull --rebase` antes de `push`; configurar `user.name/email`.
- Apps (todas HTML de un archivo + `shared/`): `church-admin/index.html` (programa, Ver-068), `movil/` (MobileCash, M012), `pastor/` (Resumen), `portal/` (Portal de Asistentes, instalable, scope `/Regresoacristo/`), `asistencia/`, `historico/` (página temporal de saldos/atrasados; se borra al terminar). `shared/`: `auth.js` (sesión por `APP_SLUG`), `supabase-client.js`, `seguridad.js` (SEG: bloqueo, PIN, huella, perfil), `dialogos.js` (reemplaza alert/confirm/prompt: `confirmar()`, `pedir()`), `instalar.js` (banner solo en el Portal o con `?instalar`).
- Método de edición: scripts Python con `replace` exactos + `node --check` (extraer `<script>`), verificar ids/funciones duplicadas, y prueba con Playwright usando un stub de supabase (`window.supabase.createClient`) servido con `python -m http.server`.

## Modelo de datos y permisos (clave)
- Acceso: `usuario_apps(usuario_id, app, rol, permisos jsonb, activo)`; `fn_tiene_acceso(app)`, `fn_perm(app,clave)`, `ca_tiene_perm(clave)` (Administrador pasa todo). Apps: `church_admin`, `pastor_overview`, `asistencia`, `portal`, etc. Niveles: Administrador, Administrador delegado, Tesorero, Secretaría, Colaborador, Pastor (+ `Asistente` = solo portal).
- Portal: tabla `portal_paginas` (clave, url, app, permiso, activa); páginas autorizadas por usuario se marcan en Admin → Usuarios → Editar acceso. Edge function `admin-usuarios` (crear cuenta / reset) desplegada; código en `supabase-functions/`.
- Saldos: `config_iglesia.fecha_corte` + `saldos_iniciales`: movimientos con fecha ≤ corte son "histórico" (no afectan saldos vivos; sí reportes). `lcCargar` (libro contable) aplica esto. Cuenta 3900 = Saldo Inicial.
- Sobres: `personas.sobre_actual`, `sobres_historial`, interruptor `config_iglesia.usar_sobres` (apagado: se asigna y se muestra, no se pide).
- Seguridad: PIN en servidor (`usuario_pins`, RPC `ca_pin_*`, `ca_metodo_fijar`); bloqueo solo por inactividad (`bloqueo_minutos`, 15); huella = WebAuthn local por dispositivo.
- Catálogos editables: `metodos_pago` (uso Gasto/Ingreso[MobileCash]/Programa), `defaults_transaccion`, ministerios, tipos de servicio, `portal_paginas`. Métodos de entrada del programa: Efectivo, Cheque, Zelle, **CashApp** (escribir siempre "CashApp").
- Otros: `registros_movil` (+foto en bucket `comprobantes`), `pagos_entrantes` (Gmail Cash App/Zelle → Aprobaciones), `alias_donantes`, `persona_familias`, `relaciones_personas`, `reconciliacion_items`, RPC `pastor_resumen3`/`pastor_balance3`, `asistencia_*`.
