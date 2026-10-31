# CREDENCIALES (sin valores)

Los tokens viven SOLO en `TOKENS.txt` en tu equipo (está en `.gitignore`). **Nunca** en un repo, log, lección, mensaje de commit ni documento de este kit.

## Quién usa qué
| Rol | Lee | Escribe | Bloque de TOKENS.txt |
|---|---|---|---|
| Extractor | libros (humano los adjunta) | análisis → `instituto-fuentes` | `[FUENTES_ESCRITURA]` |
| Autor | análisis en `instituto-fuentes` (privado) | — | `[FUENTES_LECTURA]` |
| QC | análisis (privado) + sitio (público, sin token) | — | `[FUENTES_LECTURA]` |
| Coordinador | sitio (público) | MASTER-LOG | ninguno, o `[SITIO_ESCRITURA]` si sube él |

**Mínimo recomendado:** Autor y QC NO reciben tokens de escritura; entregan archivos y el humano (o el Coordinador) los sube. Motivo: Art. 11. Un chat con escritura en el repo publicado podría publicar su propio trabajo sin revisión.
**Alternativa (tu matriz original):** `[SITIO_ESCRITURA]` para los chats que suben lecciones, QC y constitución. Funciona, pero pierdes esa barrera.

## Reglas
1. Un chat recibe **un** bloque, el de su etiqueta, nunca el archivo completo.
2. El chat no imprime, repite ni guarda el token (Art. 17), y lista rutas antes de subir.
3. Vencimiento corto y permiso mínimo (fine-grained, un repo, solo lo necesario).
4. Si un token aparece en cualquier salida: revócalo ya en GitHub, crea otro y cambia **solo su bloque**.
5. Supabase (`[SUPABASE_OPCIONAL]`) está fuera del alcance de este kit. Ese token da acceso a toda la cuenta: no lo pegues en chats de contenido.

## NO VERIFICADO
Que un chat pueda leer un repo privado con token depende de que tenga entorno de código y salida de red a `api.github.com` (la lectura se haría con una llamada a la API con cabecera `Authorization`). No lo he probado. Si tu chat no puede, adjunta los análisis a mano.
