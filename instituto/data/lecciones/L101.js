INST.registrarLeccion({
  n: 101,
  resumen: 'Antes de estudiar lo que la Biblia dice, hay que saber qué clase de libro es: cómo se formó, quién la escribió, en qué idiomas, y por qué la iglesia cristiana sostiene que esa biblioteca de sesenta y seis libros cuenta una sola historia.',

  objetivos: [
    'Describir la composición de la Biblia: número de libros, división, idiomas originales y marco temporal aproximado.',
    'Explicar con tus propias palabras qué afirma la iglesia cristiana cuando llama a la Biblia "Palabra de Dios".',
    'Distinguir tres modelos de inspiración y señalar la dificultad principal de cada uno.',
    'Identificar cuatro errores de lectura que nacen de no entender qué tipo de libro es la Biblia.'
  ],

  secciones: [
    { tipo: 'texto', titulo: 'Una biblioteca, no un libro', html:
      '<p>La palabra "Biblia" viene del griego <i>biblía</i>, plural de <i>biblíon</i>: "los libros". El nombre es exacto. Lo que tienes en las manos no es una obra escrita de corrido por un autor, sino una colección de sesenta y seis escritos de géneros distintos: relatos históricos, leyes, poemas, cartas, oráculos proféticos, genealogías, proverbios, visiones.</p>' +
      '<p>Se divide en dos partes. El <span class="gterm" data-def="Del latín testamentum, que traduce el hebreo berit y el griego diathēkē: pacto o alianza. Hablar de dos Testamentos es hablar de dos etapas de la relación pactual entre Dios y su pueblo, no de dos libros sin relación.">Antiguo Testamento</span> reúne 39 libros escritos antes de Cristo, y el Nuevo Testamento 27, escritos en el primer siglo. Esa numeración corresponde al <span class="gterm" data-def="Del griego kanon, «regla» o «medida». La lista oficial de libros que una tradición cristiana reconoce como Escritura inspirada, distinta de otros escritos antiguos que existen pero no se incluyen.">canon</span> protestante; las Biblias católica y ortodoxa incluyen además otros libros, un asunto que se trata en la lección 122.</p>' +
      '<p>Las cifras que se repiten sobre autores y siglos —alrededor de cuarenta autores a lo largo de unos mil quinientos años— son aproximaciones tradicionales útiles, no datos exactos: varios libros son anónimos y la fecha de composición de algunos se discute. Lo que no está en discusión es lo esencial del dato: los autores fueron muchos, muy distintos entre sí y separados por siglos. Hubo entre ellos un legislador, un rey, un pastor de ovejas, un copero real, un médico, un recaudador de impuestos, pescadores y un rabino formado en Jerusalén.</p>' },

    { tipo: 'texto', titulo: 'Tres idiomas', html:
      '<p>El Antiguo Testamento se escribió casi todo en <span class="gterm" data-def="Idioma semítico de Israel. Se escribe de derecha a izquierda y en su forma antigua se anotaba solo con consonantes; los signos vocálicos los añadieron copistas judíos (los masoretas) muchos siglos después.">hebreo</span>. Algunas secciones están en <span class="gterm" data-def="Lengua semítica emparentada con el hebreo, idioma común del Imperio Persa. En la Biblia aparece en partes de Daniel y Esdras, y era la lengua que se hablaba en Galilea en el siglo I.">arameo</span>: parte de Daniel, parte de Esdras y un versículo de Jeremías. El Nuevo Testamento se escribió en <span class="gterm" data-def="Griego koiné significa griego común. Fue la lengua franca del Mediterráneo oriental desde Alejandro Magno hasta bien entrada la era romana: la lengua del comercio, no de los filósofos.">griego koiné</span>.</p>' +
      '<p>Que la elección del koiné no fue casual importa: era el idioma que entendía cualquiera en el imperio, de un soldado a un comerciante. El Nuevo Testamento no nació en lenguaje culto de élite sino en la lengua de la calle.</p>' +
      '<p>Todo lo que lees en español es traducción. Eso no debilita el texto —ninguna doctrina cristiana depende de una palabra que solo aparezca en una versión— pero sí implica que comparar traducciones es una herramienta legítima de estudio, no una falta de respeto. Se trabaja a fondo en la lección 150.</p>' },

    { tipo: 'texto', titulo: 'Qué afirma la iglesia cristiana sobre este libro', html:
      '<p>La afirmación central no es que la Biblia sea antigua, ni influyente, ni bella, sino que Dios habló a través de sus autores humanos. El texto lo dice de sí mismo en dos lugares clásicos:</p>' +
      '<blockquote style="border-left:2px solid var(--arena);padding-left:14px;margin:0 0 15px"><p>"Toda la Escritura es inspirada por Dios, y útil para enseñar, para redargüir, para corregir, para instruir en justicia." (2 Timoteo 3:16, RVR1960)</p>' +
      '<p>"Porque nunca la profecía fue traída por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo." (2 Pedro 1:21, RVR1960)</p></blockquote>' +
      '<p>La palabra griega detrás de "inspirada por Dios" en 2 Timoteo 3:16 es <i>theópneustos</i>, que literalmente significa "soplada por Dios". La imagen no es la de un hombre que respira hondo y se inspira, sino la de un texto que sale del aliento de Dios.</p>' },

    { tipo: 'nota', titulo: 'Una diferencia de traducción que vale la pena conocer', html:
      '<p>La frase inicial de 2 Timoteo 3:16 admite gramaticalmente dos lecturas: "toda la Escritura es inspirada por Dios <b>y</b> útil..." (RVR1960, NVI y la mayoría de las versiones modernas) o "toda Escritura inspirada por Dios <b>es también</b> útil...", como traducían algunas versiones antiguas. La segunda podría sugerir que hay escritos inspirados y otros no. La mayoría de los traductores prefiere la primera por el uso del adjetivo en la construcción griega y por el contexto del versículo anterior, donde Pablo se refiere a las Escrituras que Timoteo conoce desde niño. Es un buen primer ejemplo de algo que se repetirá: una diferencia de traducción no es automáticamente una diferencia doctrinal, pero merece examinarse en lugar de ignorarse.</p>' },

    { tipo: 'posturas', titulo: '¿Cómo obró Dios a través de autores humanos?',
      intro: '<p>Que la Biblia sea "soplada por Dios" no explica por sí mismo el mecanismo. Aquí hay posiciones distintas entre cristianos que afirman igualmente la autoridad de la Escritura.</p>',
      posturas: [
        { nombre: 'Dictado mecánico', quien: 'Posición minoritaria hoy; aparece más en la piedad popular que en la teología formal.',
          argumento: 'Dios dictó palabra por palabra y el autor humano funcionó como secretario pasivo.',
          fortalezas: 'Protege con fuerza la idea de que las palabras vienen de Dios.',
          dificultades: 'Choca con el texto mismo: Lucas dice haber investigado y ordenado su relato (Lc 1:1-4), y los estilos de Amós, Isaías y Pablo son inconfundiblemente distintos entre sí. Un dictado no produce estilos personales.' },
        { nombre: 'Inspiración verbal plenaria', quien: 'Posición mayoritaria en el evangelicalismo, incluida la teología pentecostal clásica.',
          argumento: 'Dios obró de tal manera sobre autores plenamente activos —con su personalidad, su vocabulario, su investigación y su época— que el resultado es a la vez plenamente humano y plenamente lo que Dios quiso decir. "Verbal" se refiere a que alcanza a las palabras; "plenaria", a que alcanza a todo el texto, no solo a las partes doctrinales.',
          fortalezas: 'Explica a la vez la diversidad de estilos y la autoridad del texto.',
          dificultades: 'No describe el mecanismo: afirma el resultado sin explicar cómo ocurrió. Sus defensores responden que la Escritura tampoco lo describe.' },
        { nombre: 'Inspiración dinámica o conceptual', quien: 'Presente en sectores del protestantismo más amplio.',
          argumento: 'Dios inspiró las ideas y los conceptos, dejando la formulación verbal enteramente al autor.',
          fortalezas: 'Da cuenta con facilidad de las variaciones de estilo y de detalle entre relatos paralelos.',
          dificultades: 'Las ideas no existen sin palabras que las expresen, y varios argumentos del Nuevo Testamento descansan en términos concretos del Antiguo (por ejemplo Gá 3:16, que razona sobre un singular frente a un plural).' }
      ],
      conclusion: 'El Instituto enseña la segunda posición: autores plenamente humanos, texto plenamente confiable. Conviene retener la distinción entre lo que el texto afirma —que Dios habló por medio de ellos— y lo que es reconstrucción teológica posterior —el cómo—. Lo primero es enseñanza explícita; lo segundo, un modelo para explicarla.' },

    { tipo: 'texto', titulo: 'Una sola historia', html:
      '<p>Lo notable de esta biblioteca no es su diversidad sino su coherencia. Sesenta y seis libros escritos por decenas de personas que no se pusieron de acuerdo entre sí, separadas por siglos y culturas, avanzan en una misma dirección: un mundo creado bueno, una ruptura, un pueblo escogido para bendecir a los demás, un Mesías prometido, una promesa cumplida, una restauración final. Ese hilo es lo que hace posible que exista algo como un instituto bíblico y no solo un curso de sesenta y seis materias sueltas.</p>' +
      '<p>El propio Jesús lee así las Escrituras de su pueblo: "comenzando desde Moisés, y siguiendo por todos los profetas, les declaraba en todas las Escrituras lo que de él decían" (Lucas 24:27, RVR1960). La lección 103 recorre esa historia completa; las lecciones 104 a 108 la desarrollan acto por acto.</p>' },

    { tipo: 'errores', titulo: 'Cuatro errores que nacen aquí', items: [
      ['Tratar la Biblia como un libro de frases sueltas', 'Abrir al azar y tomar el primer versículo como mensaje personal ignora que cada frase pertenece a un libro con argumento propio. El problema no es la devoción: es que el método hace decir al texto lo que el lector ya traía.'],
      ['Leerla como si fuera un manual científico o un código legal moderno', 'Son géneros que no existían cuando se escribió. Preguntarle al texto cosas que no se propuso responder produce respuestas inventadas.'],
      ['Suponer que el orden de los libros es cronológico', 'Los libros están agrupados por género y tradición, no por fecha. Job probablemente narra hechos muy antiguos y está colocado después de Ester; varias cartas de Pablo se escribieron antes que los evangelios.'],
      ['Confundir "escrita para mí" con "escrita a mí"', 'Toda la Escritura es para el lector cristiano, pero ninguna carta fue dirigida a él. Levítico se le dio a Israel en el desierto; 1 Corintios, a una congregación concreta con problemas concretos. Recuperar el destinatario original es el primer paso para aplicarla bien, no un obstáculo devocional.']
    ] }
  ],

  ejercicios: [
    'Sin mirar, escribe: cuántos libros tiene cada Testamento, en qué tres idiomas se escribió la Biblia y qué significa theópneustos.',
    'Busca el índice de tu Biblia y clasifica diez libros al azar según su género probable (ley, historia, poesía, profecía, evangelio, carta, apocalíptica). Comprueba después en la lección 102.',
    'Lee 2 Timoteo 3:14-17 completo. ¿Qué "Escritura" tenía Timoteo disponible desde niño, y qué implica eso para el alcance del versículo 16?',
    'Explica en un párrafo, a alguien que nunca ha leído la Biblia, por qué un libro escrito por tantas personas distintas puede considerarse una sola obra.'
  ],

  transferencia: '¿Podrías explicarle a alguien sin formación bíblica qué es la Biblia, en qué idiomas se escribió y qué significa llamarla Palabra de Dios, sin leer esta lección? Si no, vuelve a las dos primeras secciones antes de seguir.',

  fuentes: [
    'Tomás de la Fuente, <i>Claves de interpretación bíblica</i>, Casa Bautista de Publicaciones — cap. 1, "Observaciones preliminares sobre la interpretación bíblica", y cap. 11, "La clave de los dos Testamentos".',
    'Stanley M. Horton (ed.), <i>Teología sistemática: una perspectiva pentecostal</i>, Editorial Vida — cap. 3, "La Palabra inspirada de Dios", por John R. Higgins.',
    'Textos bíblicos citados en Reina-Valera 1960; las referencias a la Nueva Versión Internacional se indican donde aparecen.'
  ],

  quiz: [
    { p: '¿Cuántos libros tiene la Biblia protestante y cómo se dividen?',
      opciones: ['66: 39 del Antiguo Testamento y 27 del Nuevo', '73: 46 y 27', '66: 27 y 39', '72: 45 y 27'],
      correcta: 0, tema: 'Composición de la Biblia',
      explica: 'El canon protestante tiene 39 libros en el Antiguo Testamento y 27 en el Nuevo. Otras tradiciones cristianas incluyen libros adicionales (lección 122).' },
    { p: '¿En qué idiomas se escribieron originalmente los textos bíblicos?',
      opciones: ['Hebreo y latín', 'Hebreo, arameo y griego koiné', 'Arameo y latín', 'Griego clásico y hebreo'],
      correcta: 1, tema: 'Idiomas originales',
      explica: 'Hebreo en casi todo el Antiguo Testamento, arameo en partes de Daniel y Esdras, y griego koiné en todo el Nuevo. El latín llegó después, con la traducción de la Vulgata.' },
    { p: 'La palabra griega theópneustos, traducida "inspirada por Dios" en 2 Timoteo 3:16, significa literalmente:',
      opciones: ['Escrita con esmero', 'Soplada por Dios', 'Recibida en visión', 'Guardada por Dios'],
      correcta: 1, tema: 'Inspiración',
      explica: 'La imagen es la del aliento de Dios sobre el texto, no la del entusiasmo del autor humano.' },
    { p: 'La principal dificultad del modelo de "dictado mecánico" es que:',
      opciones: ['Niega que Dios hable', 'No explica por qué los autores conservan estilos y vocabularios personales distintos', 'Contradice el canon', 'Fue condenado en Calcedonia'],
      correcta: 1, tema: 'Modelos de inspiración',
      explica: 'Lucas 1:1-4 describe investigación humana, y los estilos de Amós, Isaías y Pablo son claramente diferentes. Un dictado literal no produciría esa variedad.' },
    { p: '¿Por qué es un error suponer que el orden de los libros es cronológico?',
      opciones: ['Porque los libros están ordenados por longitud', 'Porque están agrupados por género y tradición, no por fecha de escritura', 'Porque el orden cambia en cada versión', 'Porque nadie sabe cuándo se escribió nada'],
      correcta: 1, tema: 'Organización del canon',
      explica: 'Las cartas de Pablo, por ejemplo, se agrupan de mayor a menor extensión y varias se escribieron antes que los evangelios.' },
    { p: 'Un maestro dice: "esta carta fue escrita a nosotros, la iglesia de hoy". La corrección más precisa es:',
      opciones: ['Es correcto tal como lo dijo', 'Fue escrita a destinatarios concretos del primer siglo y es para nosotros; recuperar al destinatario original es lo que permite aplicarla bien', 'Las cartas de Pablo no tienen aplicación actual', 'Solo los evangelios se aplican hoy'],
      correcta: 1, tema: 'Destinatario original',
      explica: 'La distinción entre "escrita a" y "escrita para" conserva a la vez la historicidad del texto y su autoridad presente. Se desarrolla en las lecciones 144 y 145.' }
  ]
});
