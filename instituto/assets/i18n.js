/* Traducción ES -> EN para login, maestro y admin.
   Idioma: localStorage 'inst_lang' (lo guarda core.js al cargar el perfil), o el del navegador en el login. */
(function (global) {
  var lang = 'es';
  try {
    lang = localStorage.getItem('inst_lang') || '';
    if (!lang) lang = (navigator.language || 'es').toLowerCase().indexOf('en') === 0 ? 'en' : 'es';
  } catch (e) { lang = 'es'; }
  if (lang !== 'en') lang = 'es';

  /* Textos que solo se traducen si el nodo completo coincide */
  var EXACT = {
    'Nombre': 'Name', 'Correo': 'Email', 'Contraseña': 'Password', 'Estudiantes': 'Students', 'Maestros': 'Teachers',
    'Administradores': 'Administrators', 'Lección': 'Lesson', 'Estado': 'Status', 'Mejor': 'Best', 'Intentos': 'Attempts',
    'Aprobadas': 'Passed', 'Creado': 'Created', 'Guardar': 'Save', 'Asignar': 'Assign', 'Quitar': 'Remove', 'Crear': 'Create',
    'Lista': 'List', 'Eliminar': 'Delete', 'Generar': 'Generate', 'Entrar': 'Sign in', 'Cargando': 'Loading', 'Cargando…': 'Loading…',
    'pendiente': 'pending', 'cambiada': 'changed', 'Nota %': 'Grade %', 'Dar de alta': 'Add new', 'Entrando…': 'Signing in…',
    'Lección actual': 'Current lesson', 'Lección asignada': 'Assigned lesson', 'Creado': 'Created', 'Instituto Bíblico': 'Bible Institute',
    'Instituto': 'Institute', 'aprobada': 'passed', 'en-curso': 'in progress', 'no-iniciada': 'not started', 'Guardar': 'Save'
  };

  /* Frases: se reemplazan dentro de cualquier texto (las más largas primero) */
  var PHRASES = {
    'Escribe tu correo y contraseña.': 'Enter your email and password.',
    'Correo o contraseña incorrectos.': 'Incorrect email or password.',
    '¿A qué correo te enviamos el enlace para restablecer tu contraseña?': 'Which email should we send the password reset link to?',
    'No se pudo enviar el correo:': 'Could not send the email:',
    'Si ese correo tiene una cuenta, te llegará un enlace para restablecer tu contraseña.': 'If that email has an account, you will receive a link to reset your password.',
    'Entra con el correo y la contraseña que te dio el administrador.': 'Sign in with the email and password the administrator gave you.',
    '¿Olvidaste tu contraseña?': 'Forgot your password?',
    'Entrar — Instituto Bíblico': 'Sign in — Bible Institute',
    'Maestro — Instituto Bíblico': 'Teacher — Bible Institute',
    'Administrador — Instituto Bíblico': 'Administrator — Bible Institute',
    'Sin acceso': 'No access',
    'Esta cuenta no tiene permisos de maestro.': 'This account does not have teacher permissions.',
    'Esta cuenta no tiene permisos de administrador.': 'This account does not have administrator permissions.',
    'Volver al índice': 'Back to the index',
    '← Volver al panel': '← Back to the panel',
    'Error desconocido': 'Unknown error',
    'No se pudo conectar:': 'Could not connect:',
    'Panel de maestro': 'Teacher panel',
    'Panel de administrador': 'Administrator panel',
    'Dar de alta un estudiante nuevo': 'Add a new student',
    'Crear estudiante': 'Create student',
    'Es una contraseña TEMPORAL — se le pedirá cambiarla en su primer ingreso.': 'This is a TEMPORARY password — they will be asked to change it on first sign-in.',
    'Contraseña TEMPORAL — se le pedirá cambiarla en su primer ingreso.': 'TEMPORARY password — they will be asked to change it on first sign-in.',
    'Estudiantes y sus notas': 'Students and their grades',
    'Estudiantes existentes': 'Existing students',
    'Estudiante creado. Contraseña temporal:': 'Student created. Temporary password:',
    'creado. Contraseña temporal:': 'created. Temporary password:',
    '— compártela con': '— share it with',
    '; se le pedirá cambiarla al entrar.': '; they will be asked to change it on sign-in.',
    '— se le pedirá cambiarla al entrar.': '— they will be asked to change it on sign-in.',
    '(sin nombre)': '(no name)',
    'Todavía no hay estudiantes.': 'There are no students yet.',
    'Todavía no hay nadie en esta lista.': 'There is nobody in this list yet.',
    'Sin coincidencias.': 'No matches.',
    '— solo lectura': '— read only',
    'Diagnóstico hecho el': 'Placement exam taken on',
    'Hecho el': 'Taken on',
    ', recomendó la lección': ', it recommended lesson',
    ', recomendó la': ', it recommended',
    'Sin diagnóstico.': 'No placement exam.',
    'Sin diagnóstico': 'No placement exam',
    'Sin lecciones registradas.': 'No lessons recorded.',
    'Sigue con la temporal — aún no la ha cambiado.': 'Still on the temporary password — not changed yet.',
    'Sigue con la temporal.': 'Still on the temporary password.',
    'Ya eligió su propia contraseña.': 'Has already chosen their own password.',
    'Restablecer contraseña': 'Reset password',
    'Se generará una contraseña TEMPORAL nueva para': 'A new TEMPORARY password will be generated for',
    'y tendrás que compartírsela. ¿Continuar?': 'and you will need to share it with them. Continue?',
    'Contraseña temporal nueva para': 'New temporary password for',
    'Contraseña temporal nueva:': 'New temporary password:',
    '¿Restablecer con una contraseña temporal nueva?': 'Reset with a new temporary password?',
    '¿Qué quieres hacer?': 'What would you like to do?',
    'Dar de alta, cambiar correo, asignar lecciones, calificar, ver progreso.': 'Add students, change email, assign lessons, grade, view progress.',
    'Pueden crear estudiantes, ver notas y restablecer contraseñas.': 'They can create students, view grades, and reset passwords.',
    'Otros administradores con control total.': 'Other administrators with full control.',
    'Activos esta semana': 'Active this week',
    'Avance promedio': 'Average progress',
    'Sin cambiar contraseña': 'Password not changed',
    'Buscar por nombre o correo': 'Search by name or email',
    'Cambiar correo': 'Change email',
    'El cambio se aplica de inmediato: la próxima vez entrará con el correo nuevo.': 'The change applies immediately: next time they will sign in with the new email.',
    'Borrar diagnóstico': 'Delete placement exam',
    'Progreso por lección': 'Progress by lesson',
    'Marcar aprobada': 'Mark as passed',
    'Borrar su progreso': 'Delete their progress',
    'Vaciar todo el progreso': 'Clear all progress',
    'Eliminar estudiante por completo': 'Delete student completely',
    'Editor avanzado (JSON crudo)': 'Advanced editor (raw JSON)',
    'Guardar este JSON': 'Save this JSON',
    'Escribe un correo válido.': 'Enter a valid email.',
    'Ese ya es su correo actual.': 'That is already their current email.',
    'Cambiar el correo de': 'Change the email of',
    'Desde ahora tendrá que entrar con ese correo. ¿Continuar?': 'From now on they must sign in with that email. Continue?',
    'Correo actualizado:': 'Email updated:',
    'Correo nuevo:': 'New email:',
    '¿Borrar el diagnóstico de': 'Delete the placement exam of',
    'Escribe una nota entre 0 y 100.': 'Enter a grade between 0 and 100.',
    'asignada por administrador': 'assigned by administrator',
    'Esa lección no tiene progreso registrado.': 'That lesson has no recorded progress.',
    '¿Borrar el progreso de la lección': 'Delete progress for lesson',
    'Esto borra TODO: nombre, diagnóstico, progreso e historial de': 'This deletes EVERYTHING: name, placement exam, progress, and history of',
    'Esto elimina la cuenta de': 'This deletes the account of',
    'por completo, incluido su acceso. No se puede deshacer. ¿Continuar?': 'completely, including their access. This cannot be undone. Continue?',
    '¿Eliminar esta cuenta por completo? No se puede deshacer.': 'Delete this account completely? This cannot be undone.',
    'Estudiante eliminado.': 'Student deleted.',
    'JSON inválido:': 'Invalid JSON:',
    'Hola,': 'Hello,',
    'Correo:': 'Email:',
    /* errores que devuelven las Edge Functions */
    'Ese correo ya tiene una cuenta': 'That email already has an account',
    'Correo inválido': 'Invalid email',
    'Correo no válido.': 'Invalid email.',
    'La contraseña debe tener al menos 8 caracteres': 'The password must be at least 8 characters',
    'Solo un administrador puede cambiar correos': 'Only an administrator can change emails',
    'Solo un administrador puede eliminar estudiantes': 'Only an administrator can delete students',
    'Solo un administrador puede gestionar personal': 'Only an administrator can manage staff',
    'No tienes permisos para esto': 'You do not have permission for this',
    'Sesión inválida': 'Invalid session',
    'Falta autenticación': 'Missing authentication',
    'Falta el nombre': 'Name is missing',
    'Falta el estudiante': 'Student is missing',
    'Falta la persona': 'Person is missing',
    'Ese usuario no es un estudiante': 'That user is not a student',
    'Esa persona no está en esta lista': 'That person is not on this list',
    'No puedes eliminar tu propia cuenta': 'You cannot delete your own account',
    'No puedes eliminar al único administrador': 'You cannot delete the only administrator',
    'Acción no reconocida': 'Unrecognized action',
    'Rol inválido': 'Invalid role',
    'No se pudo crear la cuenta': 'The account could not be created'
  };

  var keys = Object.keys(PHRASES).sort(function (a, b) { return b.length - a.length; });

  function tr(s) {
    if (lang !== 'en' || !s) return s;
    var t = s.trim();
    if (!t) return s;
    if (EXACT.hasOwnProperty(t)) return s.replace(t, EXACT[t]);
    var out = s;
    for (var i = 0; i < keys.length; i++) {
      if (out.indexOf(keys[i]) !== -1) out = out.split(keys[i]).join(PHRASES[keys[i]]);
    }
    return out;
  }

  var ATTRS = ['placeholder', 'title', 'aria-label', 'value'];
  function nodo(n) {
    if (n.nodeType === 3) {
      var p = n.parentNode && n.parentNode.nodeName;
      if (p === 'SCRIPT' || p === 'STYLE' || p === 'TEXTAREA') return;
      var nv = tr(n.nodeValue);
      if (nv !== n.nodeValue) n.nodeValue = nv;
    } else if (n.nodeType === 1) {
      if (n.nodeName === 'SCRIPT' || n.nodeName === 'STYLE' || n.nodeName === 'TEXTAREA') return;
      ATTRS.forEach(function (a) {
        if (!n.hasAttribute(a)) return;
        if (a === 'value' && n.nodeName !== 'BUTTON' && n.nodeName !== 'OPTION' && !(n.nodeName === 'INPUT' && /submit|button/.test(n.type))) return;
        var v = n.getAttribute(a), nv = tr(v);
        if (nv !== v) n.setAttribute(a, nv);
      });
      for (var c = n.firstChild; c; c = c.nextSibling) nodo(c);
    }
  }

  function arrancar() {
    if (lang !== 'en') return;
    document.documentElement.lang = 'en';
    document.title = tr(document.title);
    nodo(document.body);
    new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        if (m.type === 'characterData') nodo(m.target);
        m.addedNodes.forEach(nodo);
      });
    }).observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  if (lang === 'en') {
    var _alert = global.alert, _confirm = global.confirm, _prompt = global.prompt;
    global.alert = function (m) { return _alert.call(global, tr(String(m))); };
    global.confirm = function (m) { return _confirm.call(global, tr(String(m))); };
    global.prompt = function (m, d) { return _prompt.call(global, tr(String(m)), d); };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrancar); else arrancar();

  global.I18N = {
    lang: lang, tr: tr,
    set: function (l) { try { localStorage.setItem('inst_lang', l === 'en' ? 'en' : 'es'); } catch (e) {} location.reload(); }
  };
})(window);
