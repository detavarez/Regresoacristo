INST.registrarLeccion({
  n: 102,
  resumen: 'La lección 101 mostró que la Biblia es una biblioteca de 66 libros. Esta explica cómo está ordenada esa biblioteca por dentro: por qué los libros están donde están, qué géneros contiene cada sección, y por qué el orden no es cronológico.',

  objetivos: [
    'Nombrar las cinco secciones del Antiguo Testamento y las cuatro del Nuevo, con al menos un libro de ejemplo en cada una.',
    'Explicar el criterio real con el que se ordenaron los libros (género y tradición, no fecha de escritura).',
    'Distinguir género literario de contenido: reconocer que un mismo libro puede combinar varios géneros.',
    'Ubicar cualquier libro bíblico en su sección correspondiente usando solo el índice de la Biblia.'
  ],

  secciones: [
    { tipo: 'texto', titulo: 'Cinco secciones en el Antiguo Testamento', html:
      '<p>La Biblia hebrea original se organiza en tres bloques —Torá (Ley), Nevi\'im (Profetas) y Ketuvim (Escritos)— con un orden distinto al que usan las Biblias cristianas en español. Nuestras Biblias siguen el orden que fijó la <span class="gterm" data-def="Traducción del Antiguo Testamento al griego, hecha en Alejandría entre los siglos III y I a.C. Su orden de libros, agrupado por género en vez de por las tres divisiones hebreas, es el que heredaron las Biblias cristianas.">Septuaginta</span>, la antigua traducción griega, que reagrupó los mismos libros por tipo de contenido. De ahí salen las cinco secciones que encuentras en el índice:</p>' +
      '<ul>' +
      '<li><b><span class="gterm" data-def="Del griego penta («cinco») y teuchos («rollo» o «volumen»): los cinco primeros libros de la Biblia. En la tradición judía se llama Torá, «instrucción» o «ley».">Pentateuco</span></b> (5 libros: Génesis a Deuteronomio) — la Ley, el fundamento narrativo y legal de todo lo demás.</li>' +
      '<li><b>Históricos</b> (12 libros: Josué a Ester) — la historia de Israel en la tierra, desde la conquista hasta el regreso del exilio.</li>' +
      '<li><b>Poéticos y <span class="gterm" data-def="Relativo a la sabiduría práctica: cómo vivir bien, tomar decisiones y entender el sentido de la vida. Proverbios, Job y Eclesiastés son los ejemplos clásicos de este tipo de literatura.">sapienciales</span></b> (5 libros: Job a Cantares) — poesía, sabiduría práctica y reflexión existencial.</li>' +
      '<li><b>Profetas mayores</b> (5 libros: Isaías a Daniel) — así llamados por la extensión del libro, no por mayor importancia.</li>' +
      '<li><b>Profetas menores</b> (12 libros: Oseas a Malaquías) — más breves, a veces de un par de páginas, con el mismo peso profético.</li>' +
      '</ul>' +
      '<p>39 libros en total. El criterio de agrupación es el género predominante del libro, no la fecha en que se escribió: Job, por ejemplo, narra hechos que muchos ubican entre los más antiguos de la Biblia, y está colocado después de Ester, uno de los últimos históricamente.</p>' },

    { tipo: 'texto', titulo: 'Cuatro secciones en el Nuevo Testamento', html:
      '<ul>' +
      '<li><b>Evangelios e Historia</b> (5 libros: Mateo a Hechos) — los cuatro relatos de Jesús y la continuación de Lucas sobre la iglesia primitiva.</li>' +
      '<li><b>Cartas de Pablo</b> (13 libros: Romanos a Filemón) — ordenadas de mayor a menor extensión, primero las dirigidas a iglesias y después las dirigidas a personas.</li>' +
      '<li><b>Cartas generales</b> (8 libros: Hebreos a Judas) — de autores distintos a Pablo, algunas dirigidas a una audiencia amplia.</li>' +
      '<li><b>Apocalipsis</b> (1 libro) — cierra tanto el Nuevo Testamento como la Biblia entera.</li>' +
      '</ul>' +
      '<p>27 libros. El orden por extensión dentro de las cartas paulinas explica algo que sorprende a muchos lectores nuevos: Gálatas, que muchos estudiosos fechan antes que Romanos, aparece después, simplemente porque Romanos es más larga.</p>' },

    { tipo: 'nota', titulo: 'Género no es lo mismo que sección', html:
      '<p>La sección de un libro en el índice indica su género predominante, no que sea puro en ese género. Génesis, clasificado como Ley, es sobre todo narrativa con genealogías y algo de poesía (Gn 49). Isaías, entre los profetas, contiene también narrativa histórica (Is 36–39) casi idéntica a pasajes de 2 Reyes. Salmos, en la sección poética, incluye salmos históricos (Sal 78, 105, 106) que repasan la historia de Israel en verso. Reconocer esto evita una confusión común: pensar que "está en la sección de historia" significa "todo aquí es narración objetiva sin poesía ni interpretación", cuando en realidad cada libro histórico bíblico ya trae una lectura teológica de los hechos que narra, no una crónica neutral.</p>' }
  ],

  ejercicios: [
    'Sin ver el índice, nombra las cinco secciones del Antiguo Testamento en orden y un libro de ejemplo de cada una.',
    'Explica por qué Job puede narrar hechos muy antiguos y estar, sin embargo, colocado casi al final del Antiguo Testamento.',
    'Busca Isaías 36–39 y Salmos 78. ¿Qué género "no esperado para su sección" encuentras en cada uno?',
    'Ordena de memoria las cuatro secciones del Nuevo Testamento y explica el criterio real con que se ordenaron las cartas de Pablo.'
  ],

  transferencia: '¿Puedes explicarle a alguien, sin ver el índice, cómo están organizadas las dos partes de la Biblia y por qué el orden de los libros no sigue la fecha en que se escribieron? Si te cuesta, repasa antes de avanzar.',

  fuentes: [
    'Tomás de la Fuente, <i>Claves de interpretación bíblica</i>, Casa Bautista de Publicaciones — cap. 9, "El propósito, el plan y las limitaciones de cada Escritura".',
    'Referencias bíblicas en Reina-Valera 1960.'
  ],

  quiz: [
    { p: '¿Cuántos libros tiene el Pentateuco y cómo se llama también esa sección?',
      opciones: ['5 libros; la Ley', '12 libros; los Históricos', '5 libros; los Profetas mayores', '7 libros; los Sapienciales'],
      correcta: 0, tema: 'Organización del Antiguo Testamento',
      explica: 'Génesis a Deuteronomio: 5 libros, conocidos como la Ley o Torá.' },
    { p: '¿Por qué Job aparece cerca del final del Antiguo Testamento aunque narre hechos muy antiguos?',
      opciones: ['Porque se escribió al final del período del Antiguo Testamento', 'Porque los libros están agrupados por género, no por fecha de los hechos que narran', 'Porque Job no es un libro histórico', 'Porque el orden es alfabético en hebreo'],
      correcta: 1, tema: 'Criterio de ordenamiento',
      explica: 'La sección poética y sapiencial agrupa por género; Job entra ahí por su forma literaria, sin importar cuándo ocurrieron los hechos que relata.' },
    { p: 'Las cartas de Pablo están ordenadas principalmente por:',
      opciones: ['Fecha de escritura', 'Extensión, de mayor a menor, primero a iglesias y luego a personas', 'Orden alfabético', 'Importancia teológica'],
      correcta: 1, tema: 'Organización del Nuevo Testamento',
      explica: 'Por eso Gálatas, que muchos fechan antes que Romanos, aparece después: Romanos es simplemente más extensa.' },
    { p: 'Encontrar narrativa histórica dentro de un libro profético (como Isaías 36–39) significa que:',
      opciones: ['Isaías fue mal clasificado', 'La sección indica el género predominante, no que el libro sea puro en ese género', 'Ese pasaje no pertenece originalmente al libro', 'Los profetas nunca narran historia'],
      correcta: 1, tema: 'Género y sección',
      explica: 'Casi todo libro bíblico mezcla géneros; la sección del índice refleja el género dominante, no exclusivo.' },
    { p: '¿Cuál es el orden correcto de las cuatro secciones del Nuevo Testamento?',
      opciones: ['Cartas generales, Evangelios, Pablo, Apocalipsis', 'Evangelios e Historia, Cartas de Pablo, Cartas generales, Apocalipsis', 'Apocalipsis, Evangelios, Pablo, Generales', 'Pablo, Evangelios, Apocalipsis, Generales'],
      correcta: 1, tema: 'Organización del Nuevo Testamento',
      explica: 'Mateo a Hechos, luego Romanos a Filemón, luego Hebreos a Judas, y Apocalipsis al cierre.' },
    { p: 'Un libro histórico bíblico, a diferencia de una crónica moderna neutral, se caracteriza porque:',
      opciones: ['Nunca incluye interpretación', 'Ya trae una lectura teológica de los hechos que narra', 'Solo contiene listas de reyes', 'Fue escrito por el propio Dios sin autor humano'],
      correcta: 1, tema: 'Naturaleza de la narrativa bíblica',
      explica: 'La historiografía bíblica narra con propósito teológico explícito: qué hizo Dios y cómo respondió el pueblo, no solo qué pasó.' }
  ]
});
