# PROTOCOLO DE HANDOFF Y REGISTRO DE PROCESO

Un chat no recuerda a otro. **La memoria del sistema son estos archivos.**

## Tres documentos por chat
| Documento | Qué es | Dónde | Se sobrescribe |
|---|---|---|---|
| **LOG-DE-SESIÓN** | El *proceso* de este chat: qué se pidió, qué se hizo, qué falló | `03-LOGS/{materia}/LOG-AAAA-MM-DD-NN.md` | No (uno por chat) |
| **HANDOFF-vigente** | El *estado* actual: lo primero que lee el siguiente chat | `03-LOGS/{materia}/HANDOFF-vigente.md` | Sí (el anterior pasa a `historial/`) |
| **Entrada en MASTER-LOG** | 1–3 líneas del chat para la vista global | `03-LOGS/MASTER-LOG.md` | Se agrega |

Plantillas en `03-LOGS/_PLANTILLA/`.

## Cierre de chat (checklist)
1. Generar LOG-DE-SESIÓN. 2. Generar HANDOFF-vigente. 3. Redactar la línea del MASTER-LOG. 4. Listar archivos producidos con su ruta. 5. Listar `[AI]`/`[VERIFICAR]` pendientes. 6. Responder: qué se hizo / qué falta / qué debe hacer el humano + avisos.

## Importante
- LOG y HANDOFF se suben a un repo **público**: sin tokens y sin texto extenso del libro (Art. 17–18).
- El chat **entrega los archivos; el humano hace el commit** (salvo conector verificado).
- Pide un **handoff de emergencia** en cualquier momento ("genera el handoff ahora"), sobre todo si el chat se alarga o ves respuestas más débiles o confusas. No esperes al final.
- El siguiente chat debe confirmar que leyó el HANDOFF listando su "qué hacer primero".
