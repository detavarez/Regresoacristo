# Handoff — Instituto Bíblico (v5, reemplaza a v1 a v4)

**PROYECTO: Instituto Bíblico.** Nació como estudio personal de David y luego se abrió para que otras personas también se eduquen; por eso incluye cuentas de estudiante, maestro y administrador. Si existe otro proyecto aparte (clases), tiene su propio handoff y repo; no mezclar.

Este documento NO contiene tokens. Los tokens viven en `TOKENS.txt`, que se adjunta en cada chat.

## Cómo arrancar un chat nuevo (pega esto primero)
> Lee este handoff, `CONSTITUCION.md` y `DECLARACION-DE-FE.md` (están en `instituto/` del repo público detavarez/Regresoacristo; si aún no se han publicado, te los adjunto). Verifica qué documentos y tokens faltan antes de trabajar. Ejecuta `node instituto/tools/qc.js`, lee `instituto/docs/COLA-AMPLIACION.md` y dime en pocas líneas dónde estamos y cuál es el siguiente paso. No reescribas nada hasta que yo confirme.

## Documentos que se adjuntan al abrir un chat
`TOKENS.txt` va en todos los chats. El chat toma el token por su etiqueta y no lo repite completo ni lo guarda en ningún repo.

| Tipo de chat | Adjuntar | Token |
|---|---|---|
| Extraer un libro | `PROMPT-extraer-libro.md` (pegado), PDF, `TOKENS.txt`, este handoff | `FUENTES_ESCRITURA` |
| Síntesis de fuentes / mapa | este handoff, `TOKENS.txt` | `FUENTES_ESCRITURA` |
| Escribir o ampliar lecciones | este handoff, `TOKENS.txt` | `SITIO_ESCRITURA` y `FUENTES_LECTURA` |
| QC, constitución, sitio, Supabase | este handoff, `TOKENS.txt` | `SITIO_ESCRITURA` (Supabase: conector, o `SUPABASE_OPCIONAL`) |

**Regla para el chat:** antes de trabajar, verificar qué documentos están adjuntos. Si falta uno obligatorio (o un token sigue en `PEGA_AQUI`, o su fecha `vence` pasó), detenerse y decir exactamente cuál falta. Probar el token con una lectura y explicar 401, 403 o 404.

## Estilo
Responder breve (pocas líneas); detalle solo si David lo pide. Nunca recortar lecciones ni omitir avisos de error, datos no verificados o riesgos.

## Regla de oro
No se reescribe ninguna lección existente sin decisión de David. **Ampliar** las heredadas (decidido) significa añadir contenido conservando el texto existente; la línea base del QC lo vigila. No se inventan citas, capítulos ni páginas. Ningún chat modifica la Constitución sin decisión de David.

## Dónde está todo
- **Repo público del sitio:** github.com/detavarez/Regresoacristo, carpeta `instituto/`, rama `main`. Versión Ver-004. En el mismo repo vive Church Admin (otro proyecto): no tocarlo. El token de escritura aplica a todo el repo.
- **Repo privado de fuentes:** `detavarez/instituto-fuentes` (creado por David, vacío). Ningún libro analizado todavía.
- **Supabase:** proyecto `zkmrwmondbmboxqvrdto`, vía conector de Supabase. Nunca usar `git push --force`.

## Estado verificado (13 oct 2026)
- Lecciones escritas: **41** (101 a 141) de **247** previstas; faltan 206. Siguiente: **142**.
- El sitio ya tiene: menú con avatar, perfil rediseñado, índice por botones con ubicación automática, correo editable desde admin (el estudiante no puede cambiar su nombre, bloqueado también en la base de datos), login/maestro/admin bilingües (`assets/i18n.js`).
- Supabase: columna `email` en estudiantes/maestros/admins, triggers de sincronización y protección, Edge Functions `admin-estudiantes` (v7) y `admin-personal` (v2) con `cambiar_email`.

## Constitución (aprobada por David el 12 oct 2026)
Resumen; el texto completo es la fuente de verdad.
- **Propósito:** que cualquiera que quiera profundizar en la Palabra con honestidad y fidelidad a la Biblia pueda hacerlo, desde quien la abre por primera vez hasta el pastor; sin dar por sabido lo no explicado, sin humillar y sin diluir.
- **Niveles/público:** 1 Fundamental (nuevos en la fe), 2 Desarrollo (creyentes), 3 Profundización (líderes y maestros), 4 Especialización ministerial (futuros ministros).
- **Doctrina:** la posición del Instituto es la declaración de fe de la iglesia más las decisiones de David; Horton es fuente principal de consulta, no define por sí solo el Instituto (enmienda 3.1-bis). Tres grupos de temas: esenciales, distintivos, abiertos. Lo que la declaración no cubre se trata como abierto. Definido por David: el bautismo en el Espíritu es una experiencia posterior a la conversión, sin exigir las lenguas como evidencia. **Pendiente:** confirmar la clasificación propuesta (3.3), el lugar de las lenguas como don, sanidad divina y continuidad de los dones.
- **Postura frente a otras doctrinas (§3.5):** evangélico, abierto a todos; confronta con la Biblia las doctrinas contrarias (catolicismo, imágenes, otras religiones), describiéndolas con exactitud y sin atacar personas. Los libros que David sube son el material: no se omiten ni suavizan temas.
- **Fuentes (§3.6):** los libros que David sube están aprobados por él; la Biblia es la autoridad final. Marcar `[FALTA TEXTO BÍBLICO]` y `[DIFIERE: …]` como información, nunca para omitir.
- **Lección:** 3 000 a 4 000 palabras por idioma en los 4 niveles (piso 3 000, advertencia sobre 4 500), contando resumen, objetivos y secciones; español e inglés completos; aprobación al 70 %; estructura fija (§4.4); certeza clasificada en explícito, inferido, tradición y especulación.

## Resultado del QC (script `instituto/tools/qc.js`)
- Cumple: **1 de 41** (la 141). Las otras 40 son heredadas por debajo del piso.
- Promedios ES/EN: lecciones 101–108 → 2 407/2 201; 109–122 → 1 361/1 272; 123–133 → 1 319/1 228; 134–140 → 1 283/1 183. Faltan unas 121 000 palabras (ES+EN) para llevar las 40 al piso.
- 37 de 41 no tienen sección de errores frecuentes; 2 no tienen caso para pensar; 16 sin glosario; 30 con capítulos o páginas en fuentes por verificar; la lección 107 en inglés es mucho más corta que en español (0,68).
- Quiz (10–11 preguntas) y ejercicios (6) están bien en todas.
- **Decisión de David (final):** arreglar PRIMERO las lecciones heredadas, desde la 101 y en orden, antes de escribir lecciones nuevas. Aún no hay estudiantes. Se amplía conservando el texto existente.
- **Puerta (Constitución §7.6):** no se escribe la 142 hasta que las lecciones 101 a 141 cumplan. El QC la hace cumplir.
- **Cola:** `instituto/docs/COLA-AMPLIACION.md` (generada por el QC) dice qué le falta a cada lección y en qué orden. La siguiente es la **101** (faltan 251 palabras ES y 397 EN, y la sección de errores frecuentes).
- **Línea base:** `instituto/docs/QC-linea-base.json`; el QC falla si una lección pierde más del 5 % de sus palabras. Tras ampliar y publicar, correr `node instituto/tools/qc.js --actualizar-base`.
- **Estimación (no medida):** unas 4 ampliaciones por sesión, ~10 sesiones para las 40, luego 5 a 7 para las 14 lecciones nuevas del Nivel 1.

## Pendiente, en orden
1. **Publicar en el repo** (requiere `SITIO_ESCRITURA`): `instituto/CONSTITUCION.md`, `instituto/DECLARACION-DE-FE.md`, `instituto/tools/qc.js`, `instituto/docs/` (informe QC, cola, línea base), `.github/workflows/qc-instituto.yml` y este handoff como `instituto/docs/HANDOFF.md`. Subir el workflow exige que el token `SITIO_ESCRITURA` tenga también el permiso **Workflows: Read and write**; si no lo tiene, David puede crear ese archivo a mano desde la web de GitHub.
2. Ampliar las lecciones siguiendo la cola, desde la 101, con el QC corriendo antes de cada subida.
3. Revisar (sin reescribir) las lecciones que tocan temas de la Constitución §3.3; el informe QC las lista.
4. Extracción de libros, uno por chat (nada evaluado todavía; los PDF deben volver a subirse). Duplicados por resolver: Consejería (Collins), Homilética (Kittim Silva), Panorama AT/NT (Benware).
5. Confirmar con David la clasificación 3.3 y los temas que la declaración no cubre.
6. Prueba real del cambio de correo desde el panel admin con una cuenta de prueba.

## Seguridad
- Revocar el token de GitHub pegado en chats anteriores. Usar solo los tokens fine-grained de `TOKENS.txt`.

## Limitaciones
- Claude no tiene memoria entre chats: la continuidad vive en el repo y en este handoff.
- El QC mide lo medible (palabras, estructura, quiz); no juzga si una doctrina está bien explicada. La última palabra doctrinal es de David.
- Un libro por chat; cada chat que lea un libro necesita recibir el PDF de nuevo.
