(function (global) {
  'use strict';

  var VERSION = 'Ver-003';
  var SUPABASE_URL = 'https://zkmrwmondbmboxqvrdto.supabase.co';
  var ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprbXJ3bW9uZGJtYm94cXZyZHRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk2MzUwOTMsImV4cCI6MjEwNTIxMTA5M30.JbPL9fb1oDFOcEi7aFuv84QdV53_ndUVEQObIoHO0hs';

  var sb = global.supabase.createClient(SUPABASE_URL, ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true }
  });

  var BASE = {
    progreso: {},
    consultadas: [],
    errores: {},
    diagnostico: null,
    config: { tema: 'auto', tamano: 'b', tipo: 'serif', ancho: 'normal', idioma: 'es' }
  };

  function clonar(o) { return JSON.parse(JSON.stringify(o)); }

  function normalizar(g) {
    var e = clonar(BASE);
    if (g) {
      Object.keys(BASE).forEach(function (k) {
        if (g[k] !== undefined && g[k] !== null) e[k] = g[k];
      });
      if (g.config) e.config = Object.assign(clonar(BASE.config), g.config);
    }
    return e;
  }

  var estado = null;      // se llena de forma asíncrona, ver iniciar()
  var sesion = null;      // { user_id, email }
  var esAdmin = false;
  var tieneFilaEstudiante = false;
  var listoResolve;
  var listo = new Promise(function (res) { listoResolve = res; });
  var LOGIN_PATH = 'login.html';

  function enLogin() { return /(^|\/)login\.html$/.test(location.pathname); }

  function irALogin() {
    if (enLogin()) return;
    location.href = LOGIN_PATH + '?volver=' + encodeURIComponent(location.pathname + location.search);
  }

  async function cargarFilaEstudiante(uid) {
    var r = await sb.from('estudiantes').select('*').eq('user_id', uid).maybeSingle();
    return r.data || null;
  }

  async function iniciar() {
    var s = await sb.auth.getSession();
    var sesionActiva = s && s.data && s.data.session;
    if (!sesionActiva) {
      if (!enLogin()) irALogin();
      listoResolve();
      return;
    }
    sesion = { user_id: sesionActiva.user.id, email: sesionActiva.user.email };

    var fila = await cargarFilaEstudiante(sesion.user_id);
    var admFila = await sb.from('admins').select('user_id, nombre, config').eq('user_id', sesion.user_id).maybeSingle();
    esAdmin = !!(admFila && admFila.data);

    if (fila) {
      tieneFilaEstudiante = true;
      estado = normalizar(fila.estado);
      estado.perfil = { nombre: fila.nombre || '' };
      estado.leccionActual = fila.leccion_actual || null;
    } else if (esAdmin) {
      tieneFilaEstudiante = false;
      estado = clonar(BASE);
      if (admFila.data.config) estado.config = Object.assign(clonar(BASE.config), admFila.data.config);
      estado.perfil = { nombre: admFila.data.nombre || '' };
      estado.leccionActual = null;
    } else {
      // Sesión válida pero sin fila de estudiante ni de admin: no pertenece aquí.
      await sb.auth.signOut();
      irALogin();
      listoResolve();
      return;
    }

    aplicarConfig();
    listoResolve();
  }
  iniciar();

  async function guardar() {
    if (!estado || !sesion) return false;
    if (esAdmin && !tieneFilaEstudiante) {
      var ra = await sb.from('admins').update({ config: estado.config }).eq('user_id', sesion.user_id);
      return !ra.error;
    }
    var copia = clonar(estado);
    delete copia.perfil;
    delete copia.leccionActual;
    var r = await sb.from('estudiantes').update({
      estado: copia,
      leccion_actual: estado.leccionActual || null,
      nombre: (estado.perfil && estado.perfil.nombre) || null
    }).eq('user_id', sesion.user_id);
    return !r.error;
  }

  function aplicarConfig() {
    var h = document.documentElement;
    var conf = estado ? estado.config : BASE.config;
    var t = conf.tema;
    if (t === 'auto') {
      t = global.matchMedia && global.matchMedia('(prefers-color-scheme: dark)').matches ? 'oscuro' : 'claro';
    }
    h.setAttribute('data-tema', t);
    h.setAttribute('data-tamano', conf.tamano);
    h.setAttribute('data-tipo', conf.tipo);
    h.setAttribute('data-ancho', conf.ancho);
    h.lang = conf.idioma;
  }

  function setConfig(k, v) {
    estado.config[k] = v;
    aplicarConfig();
    if (k === 'idioma') {
      guardar().then(function () { location.reload(); });
    } else {
      guardar();
    }
  }

  function meta(n) {
    var r = null;
    if (!global.CURRICULO) return null;
    global.CURRICULO.niveles.forEach(function (niv) {
      niv.modulos.forEach(function (mod) {
        mod.lecciones.forEach(function (l) {
          if (String(l.n) === String(n)) {
            r = { n: l.n, t: l.t, ten: l.ten || null, tipo: l.tipo || '', libros: l.libros || '',
                  nivel: niv.id, nivelNombre: niv.nombre, nivelNombreEn: niv.nombreEn || null,
                  area: mod.area, areaEn: mod.areaEn || null,
                  modulo: mod.id, moduloTitulo: mod.titulo, moduloTituloEn: mod.tituloEn || null };
          }
        });
      });
    });
    return r;
  }

  function listaPlana() {
    var out = [];
    if (!global.CURRICULO) return out;
    global.CURRICULO.niveles.forEach(function (niv) {
      niv.modulos.forEach(function (mod) {
        mod.lecciones.forEach(function (l) {
          out.push({ n: l.n, t: l.t, ten: l.ten || null, nivel: niv.id, modulo: mod.id, area: mod.area, libros: l.libros || '' });
        });
      });
    });
    return out;
  }

  function vecinas(n) {
    var lista = listaPlana();
    var i = lista.findIndex(function (l) { return String(l.n) === String(n); });
    return { anterior: i > 0 ? lista[i - 1] : null, siguiente: (i >= 0 && i < lista.length - 1) ? lista[i + 1] : null };
  }

  function reg(n) {
    var k = String(n);
    if (!estado.progreso[k]) {
      estado.progreso[k] = { estado: 'nueva', visitas: 0, intentos: [], mejor: null, primera: null, ultima: null };
    }
    return estado.progreso[k];
  }

  function registrarVisita(n, oficial) {
    var r = reg(n);
    r.visitas += 1;
    r.ultima = new Date().toISOString();
    if (!r.primera) r.primera = r.ultima;
    if (r.estado === 'nueva') r.estado = 'en-curso';
    if (oficial) {
      estado.leccionActual = String(n);
    } else if (estado.consultadas.indexOf(String(n)) === -1) {
      estado.consultadas.push(String(n));
    }
    guardar();
  }

  function registrarExamen(n, detalle) {
    var r = reg(n);
    var intento = {
      fecha: new Date().toISOString(),
      correctas: detalle.correctas,
      total: detalle.total,
      pct: Math.round((detalle.correctas / detalle.total) * 100),
      falladas: detalle.falladas || []
    };
    r.intentos.push(intento);
    if (r.mejor === null || intento.pct > r.mejor) r.mejor = intento.pct;
    var umbral = (global.CURRICULO && global.CURRICULO.umbralAprobacion) || 70;
    r.estado = intento.pct >= umbral ? 'aprobada' : 'repasar';
    (detalle.falladas || []).forEach(function (f) {
      if (!f.tema) return;
      estado.errores[f.tema] = (estado.errores[f.tema] || 0) + 1;
    });
    guardar();
    return intento;
  }

  function temasDebiles(limite) {
    return Object.keys(estado.errores)
      .map(function (t) { return { tema: t, fallos: estado.errores[t] }; })
      .sort(function (a, b) { return b.fallos - a.fallos; })
      .slice(0, limite || 5);
  }

  function resumen() {
    var total = listaPlana().length;
    var aprobadas = 0, enCurso = 0, escritas = 0;
    Object.keys(estado.progreso).forEach(function (k) {
      var e = estado.progreso[k].estado;
      if (e === 'aprobada') aprobadas++;
      else if (e === 'en-curso' || e === 'repasar') enCurso++;
    });
    if (global.CURRICULO) {
      escritas = listaPlana().filter(function (l) { return global.LECCIONES_DISPONIBLES.indexOf(String(l.n)) !== -1; }).length;
    }
    return { total: total, aprobadas: aprobadas, enCurso: enCurso, escritas: escritas,
             pct: total ? Math.round((aprobadas / total) * 100) : 0 };
  }

  function exportar() {
    var blob = new Blob([JSON.stringify(estado, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'instituto-historial-' + (estado.perfil.nombre || 'estudiante').replace(/\s+/g, '-').toLowerCase() + '.json';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  function buscar(q) {
    q = (q || '').trim().toLowerCase();
    if (q.length < 2) return [];
    var res = [];
    listaPlana().forEach(function (l) {
      var campo = (l.n + ' ' + l.t + ' ' + l.area + ' ' + l.libros).toLowerCase();
      if (campo.indexOf(q) !== -1) res.push({ tipo: 'Lección', n: l.n, texto: l.t, extra: l.area, url: 'leccion.html?n=' + l.n });
    });
    if (global.CURRICULO && global.CURRICULO.niveles) {
      global.CURRICULO.niveles.forEach(function (niv) {
        niv.modulos.forEach(function (m) {
          if ((m.titulo + ' ' + m.area).toLowerCase().indexOf(q) !== -1) {
            res.push({ tipo: 'Módulo ' + m.id, n: '', texto: m.titulo, extra: niv.nombre, url: 'index.html#m' + m.id });
          }
        });
      });
    }
    return res.slice(0, 25);
  }

  async function cerrarSesion() {
    await sb.auth.signOut();
    location.href = LOGIN_PATH;
  }

  function barra(activo, contexto) {
    var html =
      '<header class="barra"><div class="env">' +
      '<a class="marca" href="index.html">Instituto Bíblico</a>' +
      (contexto ? '<span class="ctx">' + contexto + '</span>' : '') +
      '<button type="button" id="btnMenu" class="hamb" aria-label="Menú" aria-expanded="false">&#9776;</button>' +
      '<div id="menuDrop" class="menudrop">' +
      '<a href="index.html"' + (activo === 'indice' ? ' aria-current="page"' : '') + '>Índice</a>' +
      '<a href="diagnostico.html"' + (activo === 'diag' ? ' aria-current="page"' : '') + '>Ubicación</a>' +
      '<a href="progreso.html"' + (activo === 'prog' ? ' aria-current="page"' : '') + '>Mi avance</a>' +
      '<button type="button" id="btnPanel">Ajustes de lectura</button>' +
      '<button type="button" id="btnSalir">Cerrar sesión</button>' +
      '<span class="ver">' + VERSION + '</span>' +
      '</div></div></header>' +
      '<div id="panel"><div class="caja" role="dialog" aria-label="Ajustes de lectura">' +
      '<h3>Ajustes de lectura</h3>' +
      grupo('Tema', 'tema', [['claro', 'Claro'], ['oscuro', 'Oscuro'], ['auto', 'Automático']]) +
      grupo('Tamaño del texto', 'tamano', [['a', 'A'], ['b', 'A'], ['c', 'A'], ['d', 'A']]) +
      grupo('Tipografía', 'tipo', [['serif', 'Serif'], ['sans', 'Sans']]) +
      grupo('Ancho de lectura', 'ancho', [['angosto', 'Angosto'], ['normal', 'Normal'], ['ancho', 'Ancho']]) +
      grupo('Idioma de las lecciones · Lesson language', 'idioma', [['es', 'Español'], ['en', 'English']]) +
      '<div class="grupo"><label>Historial</label>' +
      '<button class="btn sec" type="button" id="btnExportar">Descargar mi historial</button></div>' +
      '<button class="btn" type="button" id="btnCerrarPanel">Cerrar</button>' +
      '</div></div><div id="glosarioPop" role="tooltip"><button type="button" id="glosarioCerrar" aria-label="Cerrar">&times;</button><div id="glosarioTexto"></div></div>';
    document.body.insertAdjacentHTML('afterbegin', html);

    var menu = document.getElementById('menuDrop');
    var btnMenu = document.getElementById('btnMenu');
    btnMenu.onclick = function (e) {
      e.stopPropagation();
      var abierto = menu.classList.toggle('abierto');
      btnMenu.setAttribute('aria-expanded', String(abierto));
    };
    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && e.target !== btnMenu) menu.classList.remove('abierto');
    });

    document.getElementById('btnPanel').onclick = function () {
      menu.classList.remove('abierto');
      document.getElementById('panel').classList.add('abierto');
    };
    document.getElementById('btnCerrarPanel').onclick = cerrar;
    document.getElementById('panel').addEventListener('click', function (e) { if (e.target.id === 'panel') cerrar(); });
    document.getElementById('btnExportar').onclick = exportar;
    document.getElementById('btnSalir').onclick = cerrarSesion;
    document.querySelectorAll('#panel .chips button').forEach(function (b) {
      b.onclick = function () {
        setConfig(b.dataset.k, b.dataset.v);
        b.parentNode.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      };
    });
    function cerrar() { document.getElementById('panel').classList.remove('abierto'); }
  }

  function grupo(titulo, clave, opciones) {
    var b = opciones.map(function (o, i) {
      var tam = clave === 'tamano' ? ' style="font-size:' + (0.75 + i * 0.13) + 'rem"' : '';
      return '<button type="button" data-k="' + clave + '" data-v="' + o[0] + '"' + tam +
             ' aria-pressed="' + (estado.config[clave] === o[0]) + '">' + o[1] + '</button>';
    }).join('');
    return '<div class="grupo"><label>' + titulo + '</label><div class="chips">' + b + '</div></div>';
  }

  function glosarioActivo() {
    var pop = document.getElementById('glosarioPop');
    if (!pop) return;
    var texto = document.getElementById('glosarioTexto');
    document.getElementById('glosarioCerrar').onclick = function () { pop.classList.remove('visible'); };
    document.addEventListener('click', function (e) {
      if (e.target.closest('#glosarioPop') && !e.target.closest('#glosarioCerrar')) return;
      var t = e.target.closest('.gterm');
      if (!t) { pop.classList.remove('visible'); return; }
      texto.innerHTML = '<b>' + t.textContent + '</b>' + t.dataset.def;
      pop.classList.add('visible');
      var r = t.getBoundingClientRect();
      var x = Math.min(r.left + global.scrollX, global.innerWidth - 340);
      pop.style.left = Math.max(12, x) + 'px';
      pop.style.top = (r.bottom + global.scrollY + 8) + 'px';
    });
  }

  global.INST = {
    VERSION: VERSION,
    sb: sb,
    listo: listo,
    get estado() { return estado; },
    get sesion() { return sesion; },
    get esAdmin() { return esAdmin; },
    guardar: guardar,
    aplicarConfig: aplicarConfig,
    setConfig: setConfig,
    meta: meta,
    listaPlana: listaPlana,
    vecinas: vecinas,
    reg: reg,
    registrarVisita: registrarVisita,
    registrarExamen: registrarExamen,
    temasDebiles: temasDebiles,
    resumen: resumen,
    exportar: exportar,
    buscar: buscar,
    barra: barra,
    glosarioActivo: glosarioActivo,
    cerrarSesion: cerrarSesion,
    lecciones: {},
    registrarLeccion: function (obj) { global.INST.lecciones[String(obj.n)] = obj; }
  };
})(window);
