# MENSAJES DE ARRANQUE (PRIMER mensaje de cada chat)

Gobierno (público): `https://raw.githubusercontent.com/detavarez/Regresoacristo/main/instituto/00-GOBIERNO/<ARCHIVO>`
> Se asume la rama `main` y la subcarpeta `instituto/` (sin verificar). Si difiere, ajusta la URL.
Fuentes (privado): `detavarez/instituto-fuentes`. Se lee con token (ver CREDENCIALES.md), o adjuntando los archivos.

**Token:** pega SOLO el bloque de tu rol (p. ej. `[FUENTES_LECTURA]`), nunca TOKENS.txt completo.

Reglas comunes (ya están en cada mensaje): no imprimir ni repetir el token; listar rutas y esperar "sube" antes de escribir; si no puedes leer algo obligatorio o no tienes acceso, decirlo y detenerte.

---

## EXTRACTOR
```
Rol: EXTRACTOR de libros. Libro: {LIBRO}. Capítulos: {CAPS}.
Lee (URL raw): CONSTITUCION.md, PROMPT-PEDAGOGICO.md, ROL-EXTRACTOR.md, CREDENCIALES.md. Te adjunto el libro y la plantilla ANALISIS-CAPITULO.md.
Responde SOLO con: (a) qué pudiste leer y qué NO, (b) las 5 reglas de la Constitución que más pesan aquí, con tus palabras, (c) tu plan.
Token (solo este bloque): {PEGA EL BLOQUE [FUENTES_ESCRITURA]}
Reglas: no imprimas ni repitas el token; lista las rutas y espera mi "sube". No escribas hasta mi "adelante".
```

## AUTOR
```
Rol: AUTOR de guiones. Materia: {MATERIA}. Clase: {NN}.
Lee (URL raw): CONSTITUCION.md, PROMPT-PEDAGOGICO.md, ROL-AUTOR.md, FORMATO-GUION-CLASE.md, FORMATO-QUIZ-EXAMEN.md, y el HANDOFF-vigente.md de la materia. Del repo privado: INDEX-LIBRO.md y analisis-cap{NN}.md.
Responde SOLO con: (a) qué pudiste leer y qué NO, (b) las 5 reglas de la Constitución que más pesan aquí, (c) qué entiendes que toca hoy.
Token (solo este bloque): {PEGA EL BLOQUE [FUENTES_LECTURA]}
Reglas: no imprimas ni repitas el token. No escribas hasta mi "adelante". Entrega los archivos; yo los subo.
```

## QC
```
Rol: QC independiente. Materia: {MATERIA}. Clase: {NN}, versión {vX}.
No tienes acceso al chat del autor. Lee (URL raw): CONSTITUCION.md, PROMPT-PEDAGOGICO.md, ROL-QC.md, FORMATO-GUION-CLASE.md, FORMATO-QUIZ-EXAMEN.md. Te adjunto el borrador y el análisis del capítulo; si tengo páginas del original, también.
Confirma qué pudiste leer y qué NO, y espera mi "adelante". Entrega el informe según ROL-QC. Declara lo que no puedes verificar (A6 si no hay original).
Token (si hace falta leer el repo privado): {PEGA EL BLOQUE [FUENTES_LECTURA]}. No lo imprimas ni lo repitas.
```

## COORDINADOR
```
Rol: COORDINADOR. Lee (URL raw): CONSTITUCION.md, ROL-COORDINADOR.md, CREDENCIALES.md, y 03-LOGS/MASTER-LOG.md y los HANDOFF-vigente de: {LISTA}. Adjunto LOGs, informes QC y retroalimentación de maestros nuevos.
Confirma qué pudiste leer y qué NO. Luego actualiza el MASTER-LOG y dame: siguiente acción por materia, alertas y mensajes de arranque listos.
```

## CIERRE
```
Cierra el chat según PROTOCOLO-HANDOFF.md: LOG-DE-SESIÓN, HANDOFF-vigente, línea para el MASTER-LOG, lista de archivos con rutas y pendientes [AI]/[VERIFICAR]. Luego: qué hiciste, qué falta, qué debo hacer yo, y avisos. Confirma que ningún archivo contiene tokens.
```

## EMERGENCIA
```
Genera ahora el HANDOFF-vigente y el LOG-DE-SESIÓN de lo avanzado hasta este punto, aunque la tarea esté incompleta.
```
