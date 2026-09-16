# Instituto Bíblico Intensivo — Ver-001

Motor, currículo maestro, examen de ubicación y primera lección modelo.

## Despliegue

Sube la carpeta `instituto/` completa a la raíz del repositorio `detavarez/Regresoacristo`.
Queda en `https://detavarez.github.io/Regresoacristo/instituto/`.

Todo se sirve desde el mismo origen, así que `localStorage` se comparte entre las páginas
y el progreso, el historial y el diagnóstico funcionan de verdad. Abrir los archivos con
doble clic (`file://`) también funciona, pero cada archivo sería un origen distinto en
Chrome y el progreso no se compartiría entre páginas.

## Archivos

```
instituto/
  index.html            índice maestro, progreso global, búsqueda
  diagnostico.html      examen de ubicación → recomienda una lección concreta
  leccion.html          renderiza cualquier lección: leccion.html?n=101
  progreso.html         historial académico, temas débiles, exportar
  assets/instituto.css  estilos compartidos
  assets/core.js        estado, progreso, historial, ajustes, glosario, búsqueda
  data/curriculo.js     currículo maestro completo (4 niveles, 32 módulos, 247 lecciones)
  data/diagnostico.js   banco del examen de ubicación
  data/lecciones/L###.js una lección por archivo
```

`leccion.html?n=###&modo=consulta` abre una lección sin mover tu lección actual:
es la navegación libre del §12.

## Para agregar una lección

1. Crear `data/lecciones/L###.js` siguiendo el patrón de `L101.js`.
2. Agregar `'###'` a `window.LECCIONES_DISPONIBLES` al final de `data/curriculo.js`.

No hace falta tocar nada más. Las lecciones aún no escritas ya aparecen en el índice
marcadas como "por escribir" y su página explica que el lugar está reservado.

## Estado

- Escritas: 101.
- Definidas en el currículo: 247.
- Umbral de aprobación: 70% (`CURRICULO.umbralAprobacion`, configurable).

## Datos guardados

Clave `instituto_v1` en `localStorage`, con `esquema: 1` para permitir migraciones.
Guarda perfil, configuración de lectura, diagnóstico completo, lección actual, progreso
por lección con todos los intentos, lecciones consultadas y conteo de errores por tema.
Se exporta e importa como JSON desde Ajustes o desde "Mi avance" — es el mecanismo del
§65 para que el estudiante entregue resultados al maestro antes de que exista base de datos.
