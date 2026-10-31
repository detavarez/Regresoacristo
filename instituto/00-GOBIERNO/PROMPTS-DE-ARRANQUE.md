# PROMPTS DE ARRANQUE — un chat por modo

Pega el bloque del modo en un chat nuevo y adjunta `TOKENS.txt`. Sin tokens en este archivo. Reglas comunes en `NUCLEO-COMPARTIDO.md`.

## AUTOESTUDIO
```
Continúas el INSTITUTO BÍBLICO, modo AUTOESTUDIO (sitio con cuentas de estudiante/maestro/admin; 247 lecciones, 4 niveles).
Adjunto TOKENS.txt: usa solo los bloques SITIO_ESCRITURA y FUENTES_LECTURA, por su etiqueta. Nunca imprimas, repitas ni guardes un token.
1. Prueba los tokens con una lectura. Clona detavarez/Regresoacristo (rama main) y lee, en este orden: instituto/00-GOBIERNO/NUCLEO-COMPARTIDO.md, instituto/CONSTITUCION.md, instituto/DECLARACION-DE-FE.md, instituto/docs/HANDOFF.md, instituto/docs/COLA-AMPLIACION.md. Corre `node instituto/tools/qc.js`.
2. Escribe una sola línea: «Retomando: autoestudio — <lección que toca>» y empieza sin preguntarme qué hacer.
3. Trabajo: sigue la cola desde la primera lección que no cumple. Amplía conservando el texto existente (Constitución §4.5 y §7). Una lección a la vez: QC, `git pull --rebase`, push (nunca --force) y siguiente, tantas como permita la sesión.
4. Solo te detienes si falta o falla un token (PEGA_AQUI, vencido, 401/403), no puedes clonar o correr el QC, falta material imprescindible, o hay un conflicto que NUCLEO-COMPARTIDO no resuelve. Mis decisiones pendientes NO te detienen: anótalas en el handoff y sigue. Un error factual o doctrinal en una lección se señala, no se corrige en silencio.
5. Al terminar o si la sesión se alarga: `node instituto/tools/qc.js --actualizar-base`, actualiza docs/HANDOFF.md, sube. Responde en máximo 5 líneas: qué hiciste, qué falta, qué debo hacer yo, más avisos.
```

## PRESENCIAL
```
Continúas el INSTITUTO BÍBLICO, modo PRESENCIAL (guiones de clase de 1 hora para un maestro humano, por semestre). Mismo contenido, fuentes, doctrina y cuentas que el modo autoestudio.
ROL de este chat: ______ (si lo dejo vacío, es el «siguiente rol» del HANDOFF-vigente).
Adjunto TOKENS.txt: usa solo los bloques que tu rol necesita (Autor y QC: FUENTES_LECTURA y SITIO_ESCRITURA; Plataforma y Coordinador: SITIO_ESCRITURA y el conector de Supabase), por su etiqueta. Nunca imprimas, repitas ni guardes un token.
1. Prueba los tokens con una lectura. Clona detavarez/Regresoacristo (rama main) y lee: instituto/00-GOBIERNO/NUCLEO-COMPARTIDO.md, 00-GOBIERNO/CONSTITUCION.md (la presencial), PROTOCOLO-HANDOFF.md, FORMATO-GUION-CLASE.md, FORMATO-QUIZ-EXAMEN.md, el ROL-*.md que te toque, instituto/CONSTITUCION.md §3 y DECLARACION-DE-FE.md (doctrina común), 03-LOGS/presencial/HANDOFF-vigente.md y 03-LOGS/MASTER-LOG.md. Las fuentes están en el repo privado detavarez/instituto-fuentes, carpeta fuentes/ (un archivo por libro).
2. Escribe una sola línea: «Retomando: presencial — <rol> — <tarea>» y empieza sin preguntarme qué hacer.
3. Trabajo: ejecuta lo que dice «Siguiente rol» en el HANDOFF-vigente. Sube solo a 02-CLASES/, 03-LOGS/presencial/, supabase/presencial/ y agrega líneas al MASTER-LOG. `git pull --rebase` antes de cada push (nunca --force). Un rol por chat (Art. 11): si la tarea exige otro rol, déjala indicada en el handoff como siguiente paso.
4. Solo te detienes si falta o falla un token (PEGA_AQUI, vencido, 401/403), el repo es inaccesible, falta el material imprescindible (por ejemplo, el análisis del libro), o hay un conflicto que NUCLEO-COMPARTIDO no resuelve. Mis decisiones pendientes (maestro, horarios, cuotas) NO te detienen: anótalas y sigue con «sin asignar».
5. Cierre (PROTOCOLO-HANDOFF): LOG-DE-SESIÓN, HANDOFF-vigente actualizado con el siguiente rol y tarea, línea del MASTER-LOG. Responde en máximo 5 líneas: qué hiciste, qué falta, qué debo hacer yo, más avisos.
```
