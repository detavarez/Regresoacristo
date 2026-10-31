# FORMATO DE GUION DE CLASE

## Parámetros
- **Franja:** 1 hora (~55 min de clase + 2–7 min de margen).
- **Extensión del guion:** 1,800–2,500 palabras por idioma (sin Registro de fuentes ni quiz), de las cuales **1,100–1,600 son `[LEER]`**. El resto es `[EXPLICAR]`, preguntas y notas.
- **Tiempo de diálogo:** ≥20 min entre apertura y quiebres (maestro–estudiantes, preguntas, comentarios).
- **No se comprime ni se rellena:** lo que no cabe pasa a la siguiente clase o a lectura en casa (Art. 13).
- **AVISO (estimación mía, no medida):** 1,100–1,600 palabras de lectura son ~8–12 min a ~130–140 palabras/min. **Calibrar con UNA clase de prueba real antes de producir las demás** (retroalimentación del maestro, abajo) y ajustar estos números.

## Segmentos (tiempos objetivo)
| # | Segmento | Min | Contenido |
|---|---|---|---|
| 1 | Apertura | 5 | Pregunta de enganche o repaso de la clase anterior + 2–3 respuestas esperables |
| 2 | Bloque 1 | 14 | Contexto + desarrollo bíblico/exégesis (lectura + explicación) |
| 3 | Quiebre 1 | 8 | Pregunta abierta al salón + comentarios de estudiantes |
| 4 | Bloque 2 | 12 | Profundización: debate de posturas, teología relacionada, errores comunes |
| 5 | Quiebre 2 | 8 | Pregunta más exigente o ejercicio en parejas |
| 6 | Cierre | 6 | Resumen en una frase, chequeo de transferencia en voz alta, tarea |
| | **Total** | **53** | + 2–7 min de margen |

## Marcadores (dentro del .md)
- `[LEER]` — texto que el maestro lee casi textual (y se proyecta).
- `[EXPLICAR]` — puntos que el maestro desarrolla con sus propias palabras.
- `[PROYECTAR: ...]` — qué debe verse en pantalla (versículo, término, esquema).
- `[PAUSA 15s]` — silencio para que la idea asiente.
- `[QUIEBRE]` — pregunta al salón + respuestas esperadas + cómo redirigir un error con respeto.
- `[COMENTARIOS ~N min]` — espacio para aportes de estudiantes.
- `[NOTA AL MAESTRO]` — **nunca se lee en voz alta ni se proyecta.** Instrucciones, cuidados pastorales, advertencias doctrinales.
- Etiquetas de origen: `[F:n]` `[BIB]` `[AI]` `[VERIFICAR]` `[OCR?]` (ver Constitución, Art. 4).

## Voz
Español hablado, no manual. Primera/segunda persona, transiciones naturales ("ahora bien, esto nos lleva a preguntarnos…"). Lo difícil se explica primero simple y luego con profundidad. Las etiquetas de origen NO aparecen en la vista de proyector (ver abajo).

## Estructura del archivo
1. Encabezado: materia, clase #, maestro, fecha, fuentes (libro + capítulos).
2. Objetivos (verbos medibles: identificar, explicar, comparar, evaluar, aplicar).
3. Conocimientos previos.
4. Segmentos 1–6.
5. **Registro de fuentes** (al final):
   - `F1 — Autor, Título, cap. 3, pp. 45–47: qué se tomó (paráfrasis breve)`
   - `A1 — [AI] Afirmación añadida por el asistente; requiere verificación humana: …`
6. **Pendientes de verificación** (lista).
7. Quiz (ver FORMATO-QUIZ-EXAMEN).

## Salida HTML (PENDIENTE DE CONSTRUIR)
El .md es la fuente. El HTML final reutiliza el motor existente (tema, tamaño de letra) y añade **dos vistas**:
- **Vista proyector:** solo `[LEER]`, `[PROYECTAR]`, preguntas del `[QUIEBRE]`. Sin notas al maestro ni etiquetas. Letra grande.
- **Vista maestro:** todo, incluidas notas, etiquetas y respuestas esperadas.
Motivo: si las notas al maestro aparecen en el proyector, los estudiantes las leen.

## Retroalimentación del maestro (después de dar la clase, 2 minutos)
- Minutos reales por segmento: ___
- ¿Qué preguntas hicieron los estudiantes que el guion no previó? ___
- ¿Qué se sintió largo o corto? ___
- Errores o dudas sobre el contenido: ___
Esto se entrega al Coordinador y entra al HANDOFF de la siguiente clase.
