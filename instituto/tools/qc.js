#!/usr/bin/env node
/* QC del Instituto Bíblico — mide las lecciones contra instituto/CONSTITUCION.md.
   Uso:  node instituto/tools/qc.js          (desde la raíz del repo)
   Salida: instituto/docs/QC-informe.md y QC-informe.json. Código de salida 1 si: falla una lección NUEVA, se viola la puerta (§7.6) o una lección pierde palabras respecto a la línea base.
   Las lecciones anteriores a ESTANDAR_DESDE se consideran "heredadas": se reportan, no bloquean. */
const fs = require('fs'), path = require('path'), vm = require('vm');

const RAIZ = path.resolve(__dirname, '..');
const ESTANDAR_DESDE = 141;          // primera lección escrita con el estándar de la Constitución
const PISO = 3000, ADVERTENCIA = 4500;   // palabras por idioma (resumen + objetivos + secciones)
const QUIZ_MIN = 10, QUIZ_MAX = 12, EJERC_MIN = 5;
const RATIO_MIN = 0.85, RATIO_MAX = 1.15;
const PUERTA_HASTA = 141;            // Constitución §7.6: no se escribe la lección siguiente hasta que 101..PUERTA_HASTA cumplan
const TOLERANCIA_REGRESION = 0.95;   // una lección no puede perder más del 5 % de sus palabras respecto a la línea base

const TEMAS = {
  'bautismo en el Espíritu / lenguas': /bautismo en el esp[ií]ritu|lenguas|glosolalia|baptism in the (holy )?spirit|speaking in tongues|tongues/i,
  'sanidad divina': /sanidad divina|divine healing/i,
  'escatología detallada': /rapto|milenio|tribulaci[oó]n|rapture|millennium|tribulation/i,
  'elección / seguridad eterna': /predestinaci[oó]n|elecci[oó]n|seguridad eterna|predestination|eternal security|perseverance of the saints/i,
  'demonios y creyentes': /demonizad|pose[ií]d[oa]|possession|demonized/i
};

function cargar(file, ctx) { vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file }); }

// Contexto con window/INST simulados
const lecciones = {};
const ctx = vm.createContext({ window: {}, console });
ctx.window = ctx;
ctx.INST = { registrarLeccion: o => { lecciones[o.n] = o; } };
cargar(path.join(RAIZ, 'data/curriculo.js'), ctx);
const CUR = ctx.CURRICULO, DISP = ctx.LECCIONES_DISPONIBLES || [];
const dirL = path.join(RAIZ, 'data/lecciones');
const archivos = fs.readdirSync(dirL).filter(f => /^L\d+\.js$/.test(f)).sort();
const errCarga = {};
archivos.forEach(f => { try { cargar(path.join(dirL, f), ctx); } catch (e) { errCarga[f] = e.message; } });

// Curriculo plano
const enCur = {};
(CUR.niveles || []).forEach(n => n.modulos.forEach(m => m.lecciones.forEach(l => { enCur[String(l.n)] = { nivel: n.id, modulo: m.id, titulo: l.t }; })));

function textos(v, out = []) {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach(x => textos(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach(x => textos(x, out));
  return out;
}
function palabras(v) {
  return textos(v).join(' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').split(/\s+/).filter(w => /[A-Za-zÁ-ú0-9]/.test(w)).length;
}
const cuerpo = (L, lg) => palabras([L.resumen && L.resumen[lg], L.objetivos && L.objetivos[lg], L.secciones && L.secciones[lg]]);

const filas = [];
const ids = Object.keys(lecciones).map(Number).sort((a, b) => a - b);

ids.forEach(n => {
  const L = lecciones[n], errores = [], avisos = [], info = [];
  const nuevo = n >= ESTANDAR_DESDE;
  const w = { es: cuerpo(L, 'es'), en: cuerpo(L, 'en') };
  const ratio = w.es ? w.en / w.es : 0;

  ['es', 'en'].forEach(lg => {
    if (w[lg] < PISO) errores.push(`${lg.toUpperCase()}: ${w[lg]} palabras (piso ${PISO})`);
    else if (w[lg] > ADVERTENCIA) avisos.push(`${lg.toUpperCase()}: ${w[lg]} palabras (sobre ${ADVERTENCIA})`);
    ['resumen', 'objetivos', 'transferencia'].forEach(k => { if (!L[k] || !textos(L[k][lg]).join('').trim()) errores.push(`falta ${k} ${lg.toUpperCase()}`); });
    const q = (L.quiz && L.quiz[lg]) || [];
    if (q.length < QUIZ_MIN || q.length > QUIZ_MAX) errores.push(`quiz ${lg.toUpperCase()}: ${q.length} preguntas (esperado ${QUIZ_MIN}–${QUIZ_MAX})`);
    q.forEach((x, i) => {
      if (!Array.isArray(x.opciones) || x.opciones.length < 3) errores.push(`quiz ${lg.toUpperCase()} #${i + 1}: opciones insuficientes`);
      else if (!Number.isInteger(x.correcta) || x.correcta < 0 || x.correcta >= x.opciones.length) errores.push(`quiz ${lg.toUpperCase()} #${i + 1}: respuesta correcta inválida`);
      if (!x.explica || !String(x.explica).trim()) errores.push(`quiz ${lg.toUpperCase()} #${i + 1}: sin explicación`);
    });
    const ej = (L.ejercicios && L.ejercicios[lg]) || [];
    if (ej.length < EJERC_MIN) errores.push(`ejercicios ${lg.toUpperCase()}: ${ej.length} (mínimo ${EJERC_MIN})`);
  });
  const qe = (L.quiz && L.quiz.es || []).length, qn = (L.quiz && L.quiz.en || []).length;
  if (qe !== qn) errores.push(`quiz desigual ES ${qe} / EN ${qn}`);
  const ee = (L.ejercicios && L.ejercicios.es || []).length, en_ = (L.ejercicios && L.ejercicios.en || []).length;
  if (ee !== en_) avisos.push(`ejercicios desiguales ES ${ee} / EN ${en_}`);
  if (ratio < RATIO_MIN || ratio > RATIO_MAX) avisos.push(`desequilibrio EN/ES = ${ratio.toFixed(2)}`);

  const tipos = new Set(((L.secciones && L.secciones.es) || []).map(s => s.tipo));
  if (!tipos.has('errores')) errores.push('falta sección de errores frecuentes');
  if (!tipos.has('nota')) errores.push('falta caso para pensar (nota)');
  if (!tipos.has('posturas')) info.push('sin bloque de posturas (válido solo si no hay tema debatido)');
  if (!Array.isArray(L.fuentes) || !L.fuentes.length) errores.push('sin fuentes');
  else if (L.fuentes.some(f => /\bcap\.|cap[ií]tulo|\bpp?\.\s*\d/i.test(f))) avisos.push('fuentes con capítulo o página: confirmar que están verificadas contra el libro');
  const gl = (textos(L.secciones && L.secciones.es).join(' ').match(/class="gterm"/g) || []).length;
  if (!gl) avisos.push('sin términos de glosario');

  const sens = [];
  Object.entries(TEMAS).forEach(([t, re]) => {
    const all = textos([L.secciones, L.resumen, L.quiz, L.ejercicios]).join(' ');
    if (re.test(all)) sens.push(t);
  });
  if (sens.length) info.push('revisar contra Constitución 3.3: ' + sens.join('; '));

  if (!enCur[n]) errores.push('no está en el currículo');
  if (!DISP.includes(String(n))) errores.push('no está en LECCIONES_DISPONIBLES');

  let estado;
  if (!errores.length) estado = 'CUMPLE';
  else estado = nuevo ? 'FALLA' : 'HEREDADA';
  filas.push({ n, nivel: enCur[n] && enCur[n].nivel, titulo: enCur[n] && enCur[n].titulo, es: w.es, en: w.en, ratio: +ratio.toFixed(2), quizEs: qe, quizEn: qn, ejEs: ee, ejEn: en_, glosario: gl, estado, errores, avisos, info });
});

// Consistencia disponibles <-> archivos
const huerfanas = DISP.filter(d => !lecciones[d]);
const sinDisp = ids.filter(n => !DISP.includes(String(n)));
Object.keys(errCarga).forEach(f => huerfanas.push(`${f} no carga: ${errCarga[f]}`));

// --- Puerta (Constitución §7.6)
const puertaProblemas = [];
const noCumplen = filas.filter(f => f.n <= PUERTA_HASTA && f.estado !== 'CUMPLE');
const sobrePuerta = filas.filter(f => f.n > PUERTA_HASTA);
const puertaAbierta = noCumplen.length === 0;
if (!puertaAbierta && sobrePuerta.length)
  puertaProblemas.push(`PUERTA CERRADA: existen las lecciones ${sobrePuerta.map(f => f.n).join(', ')}, pero ${noCumplen.length} lección(es) de la 101 a la ${PUERTA_HASTA} no cumplen el estándar`);

// --- Línea base: ninguna lección puede perder palabras (ampliar no es reemplazar)
const archivoBase = path.join(RAIZ, 'docs/QC-linea-base.json');
let base = fs.existsSync(archivoBase) ? JSON.parse(fs.readFileSync(archivoBase, 'utf8')) : null;
const regresiones = [];
if (base) filas.forEach(f => {
  const b = base[f.n]; if (!b) return;
  if (f.es < b.es * TOLERANCIA_REGRESION) regresiones.push(`Lección ${f.n}: ES bajó de ${b.es} a ${f.es} palabras`);
  if (f.en < b.en * TOLERANCIA_REGRESION) regresiones.push(`Lección ${f.n}: EN bajó de ${b.en} a ${f.en} palabras`);
});
const nuevaBase = Object.assign({}, base || {});
filas.forEach(f => { const b = nuevaBase[f.n] || { es: 0, en: 0 }; nuevaBase[f.n] = { es: Math.max(b.es, f.es), en: Math.max(b.en, f.en) }; });
if (!base || process.argv.includes('--actualizar-base')) fs.writeFileSync(archivoBase, JSON.stringify(nuevaBase, null, 2));

const cuenta = e => filas.filter(f => f.estado === e).length;
const total = Object.keys(enCur).length;
const piso = filas.filter(f => f.es < PISO || f.en < PISO).length;
let md = `# Informe QC — Instituto Bíblico\n\nGenerado: ${new Date().toISOString().slice(0, 10)} · Estándar: Constitución §4 · Lecciones nuevas: desde la ${ESTANDAR_DESDE}\n\n`;
md += `## Resumen\n- Lecciones escritas: **${filas.length}** de ${total} previstas en el currículo (${total - filas.length} por escribir).\n`;
md += `- CUMPLEN el estándar: **${cuenta('CUMPLE')}** · FALLAN (nuevas): **${cuenta('FALLA')}** · HEREDADAS por debajo del estándar: **${cuenta('HEREDADA')}**\n`;
md += `- Por debajo del piso de ${PISO} palabras en algún idioma: **${piso}** de ${filas.length}\n`;
if (filas.length) { const m = a => Math.round(a.reduce((x, y) => x + y, 0) / a.length); md += `- Promedio de palabras por lección: ES ${m(filas.map(f => f.es))} · EN ${m(filas.map(f => f.en))}\n`; }
md += `- Disponibles sin archivo: ${huerfanas.length ? huerfanas.join(', ') : 'ninguna'} · Archivos sin estar disponibles: ${sinDisp.length ? sinDisp.join(', ') : 'ninguno'}\n\n`;
md += `**Palabras** = resumen + objetivos + secciones, por idioma (sin ejercicios ni quiz). Las heredadas no se reescriben sin decisión de David (Constitución §4.5).\n\n`;
md += `## Tabla por lección\n\n| Lección | Nivel | ES | EN | EN/ES | Quiz ES/EN | Ejerc. ES/EN | Glos. | Estado |\n|---|---|---|---|---|---|---|---|---|\n`;
filas.forEach(f => { md += `| ${f.n} | ${f.nivel || '?'} | ${f.es} | ${f.en} | ${f.ratio} | ${f.quizEs}/${f.quizEn} | ${f.ejEs}/${f.ejEn} | ${f.glosario} | ${f.estado} |\n`; });
md += `\n## Puerta y línea base\n- Puerta (§7.6): **${puertaAbierta ? 'ABIERTA' : 'CERRADA'}** — ${noCumplen.length} de las lecciones 101 a ${PUERTA_HASTA} aún no cumplen.\n`;
puertaProblemas.concat(regresiones).forEach(e => md += `- ✘ ${e}\n`);
if (!puertaProblemas.length && !regresiones.length) md += `- Sin violaciones de la puerta ni regresiones respecto a la línea base.\n`;
md += `\n## Detalle de problemas\n`;
filas.filter(f => f.errores.length || f.avisos.length).forEach(f => {
  md += `\n### Lección ${f.n} — ${f.titulo || ''} (${f.estado})\n`;
  f.errores.forEach(e => md += `- ✘ ${e}\n`); f.avisos.forEach(e => md += `- ⚠ ${e}\n`);
});
md += `\n## Lecciones que tocan temas de la Constitución §3.3 (para revisión, no reescritura)\n`;
const sensFilas = filas.filter(f => f.info.some(i => i.startsWith('revisar')));
md += sensFilas.length ? sensFilas.map(f => `- ${f.n}: ${f.info.find(i => i.startsWith('revisar')).replace('revisar contra Constitución 3.3: ', '')}`).join('\n') : 'Ninguna.';
md += '\n';
fs.mkdirSync(path.join(RAIZ, 'docs'), { recursive: true });
fs.writeFileSync(path.join(RAIZ, 'docs/QC-informe.md'), md);
fs.writeFileSync(path.join(RAIZ, 'docs/QC-informe.json'), JSON.stringify({ resumen: { escritas: filas.length, previstas: total }, filas }, null, 2));
console.log(md.split('\n## Tabla')[0]);
// --- Cola de ampliación
const pend = filas.filter(f => f.n <= PUERTA_HASTA && f.estado !== 'CUMPLE');
let cola = `# Cola de ampliación — Instituto Bíblico\n\nGenerada por \`instituto/tools/qc.js\` (${new Date().toISOString().slice(0, 10)}). **Cada chat la lee al arrancar.** Se trabaja en este orden, de la 101 en adelante.\n\n`;
cola += `- Puerta (Constitución §7.6): **${puertaAbierta ? 'ABIERTA: se puede escribir la lección ' + (PUERTA_HASTA + 1) : 'CERRADA: no se escribe la lección ' + (PUERTA_HASTA + 1) + ' hasta que todas las de abajo cumplan'}**\n`;
cola += `- Progreso: **${filas.filter(f => f.n <= PUERTA_HASTA && f.estado === 'CUMPLE').length} de ${filas.filter(f => f.n <= PUERTA_HASTA).length}** lecciones cumplen.\n`;
cola += `- Regla: ampliar es **añadir** (contenido hasta el piso, errores frecuentes, caso, glosario, equilibrio EN/ES) **conservando el texto existente**. Errores factuales o doctrinales se señalan a David antes de modificar. La línea base (\`QC-linea-base.json\`) impide que una lección pierda palabras.\n\n`;
if (pend.length) {
  const s0 = pend[0];
  cola += `## Siguiente en la cola: lección ${s0.n} — ${s0.titulo || ''}\n\n`;
  cola += `| # | Lección | Faltan ES | Faltan EN | Estructura que falta | Otras notas |\n|---|---|---|---|---|---|\n`;
  pend.forEach((f, i) => {
    const falta = f.errores.filter(e => /^falta/.test(e)).map(e => e.replace('falta ', '')).join('; ') || '—';
    const notas = f.avisos.filter(a => !/sobre 4500/.test(a)).concat(f.errores.filter(e => /quiz|ejercicios|sin fuentes|currículo|DISPONIBLES/.test(e))).join('; ') || '—';
    cola += `| ${i + 1} | ${f.n} — ${f.titulo || ''} | ${Math.max(0, PISO - f.es)} | ${Math.max(0, PISO - f.en)} | ${falta} | ${notas} |\n`;
  });
} else cola += `## Cola vacía: todas las lecciones 101 a ${PUERTA_HASTA} cumplen. La puerta está abierta.\n`;
fs.writeFileSync(path.join(RAIZ, 'docs/COLA-AMPLIACION.md'), cola);

const fallos = cuenta('FALLA') + huerfanas.length + puertaProblemas.length + regresiones.length;
if (puertaProblemas.length || regresiones.length) console.log('\nPROBLEMAS BLOQUEANTES:\n- ' + puertaProblemas.concat(regresiones).join('\n- '));
process.exit(fallos ? 1 : 0);
