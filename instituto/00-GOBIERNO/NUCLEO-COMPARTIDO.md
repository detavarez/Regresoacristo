# NÚCLEO COMPARTIDO — un Instituto, dos modos

No reemplaza ninguna constitución: dice cuál manda dónde y cómo trabajan a la vez dos chats en cuentas distintas. Sin tokens.

## Qué es común (los dos modos)
- **Contenido:** currículo (`data/curriculo.js`: 4 niveles, 247 lecciones), lecciones `L###`, glosario.
- **Fuentes:** repo privado `detavarez/instituto-fuentes`, un archivo por libro en `fuentes/<libro>.md` (análisis con páginas verificadas).
- **Doctrina:** `instituto/CONSTITUCION.md` §3 (3.1-bis, 3.2–3.6) y `DECLARACION-DE-FE.md`. Cuenta para ambos modos.
- **Plataforma:** sitio `instituto/` y Supabase `zkmrwmondbmboxqvrdto` (mismo login: estudiante, maestro, administrador).

## Qué cambia en el modo presencial
| | Autoestudio | Presencial |
|---|---|---|
| Unidad | Lección 3 000–4 000 palabras/idioma, quiz 70 % | Guion de clase de 1 h: 1 800–2 500 palabras (1 100–1 600 `[LEER]`), ≥20 min de diálogo |
| Idiomas | ES + EN | ES (EN si la ficha del curso lo pide) |
| Quién enseña | El estudiante, solo | Maestro humano (su firma aprueba) |
| Estructura | Niveles/lecciones | Materia → semestre 12/16 semanas → clases, 3–4 exámenes |
| Plataforma extra | Progreso, diagnóstico | Asistencia, cuotas, cursos/inscripciones (**no existen aún**) |
| Constitución que manda | `instituto/CONSTITUCION.md` | `instituto/00-GOBIERNO/CONSTITUCION.md` |

Cada guion presencial indica la(s) lección(es) `L###` equivalente(s) y **no contradice su doctrina**. Si hay diferencia, se anota en el handoff y se sigue.

## Reglas para no detenerse en los choques entre las dos constituciones
1. Doctrina y honestidad (§3, §6 de autoestudio; Art. 3–9 y 14 de presencial): se aplican **ambas**; son compatibles.
2. Etiquetas: coexisten. Origen (`[F:n]`, `[BIB]`, `[AI]`, `[VERIFICAR]`) y certeza (explícito, inferido, tradición, especulación). No verificado: `[NO VERIFICADO]` en lecciones, `[VERIFICAR]` en guiones.
3. Citas literales: máximo **20 palabras**, con página (la regla más estricta).
4. Versión bíblica: RVR1960 y NKJV, salvo que la ficha del curso indique otra.
5. Postura de un libro: se atribuye al autor **y** se confronta con el texto bíblico (§3.5–3.6). No se omite ni se suaviza.
6. Roles (presencial, Art. 11): un rol por chat (Autor, QC, Coordinador, Plataforma). El «siguiente rol» lo fija el HANDOFF-vigente.

## Autorización permanente del responsable (sustituye «lista rutas y espera "sube"/"adelante"»)
Los chats suben sin pedir confirmación, **solo** a las rutas propias de su modo, y no esperan «adelante» para empezar. Siguen valiendo: no imprimir ni guardar tokens, no `git push --force`, no tocar constituciones ni `DECLARACION-DE-FE.md`, no tocar otras carpetas del repo (Church Admin, etc.).

## Dos chats a la vez (repo único `main`)
- **Rutas propias, autoestudio:** `data/`, `docs/`, `tools/`, `*.html`, `assets/`.
- **Rutas propias, presencial:** `02-CLASES/`, `03-LOGS/presencial/`, `supabase/presencial/`.
- **Compartidas (solo agregar líneas):** `03-LOGS/MASTER-LOG.md`, `supabase/APLICADO.md`.
- Antes de cada push: `git pull --rebase`. Si hay conflicto en una ruta ajena: abortar, no resolver, avisar. Commits pequeños (una lección o una clase).
- Supabase: solo migraciones **aditivas** (tablas o columnas nuevas, RLS activo), registradas en `APLICADO.md`. Nunca borrar ni alterar datos existentes.

## Arranque y paro
- Primera línea del chat: «Retomando: <modo> — <tarea>». Empieza sin preguntar qué hacer.
- **Se detiene solo si:** falta un token requerido, está en `PEGA_AQUI`, venció o falla con 401/403; el repo es inaccesible; falta el material imprescindible de la tarea (PDF o análisis); o hay un conflicto que este documento no resuelve. Dice exactamente qué falta y qué hacer.
- **No se detiene por** decisiones pendientes de David: las anota en el handoff y sigue con lo que no dependa de ellas.
- Cierre: actualizar el handoff del modo, subir, y responder en pocas líneas: qué hiciste, qué falta, qué debo hacer yo, más avisos.

## Plataforma presencial (por construir)
Asistencia, cuotas y cursos/inscripciones no existen todavía en el código ni en la base. Es la fase 2 del modo presencial: migración SQL aditiva en `supabase/presencial/`, con RLS. Cuotas: solo registro (monto, periodo, estado, fecha); nunca datos de tarjeta.
