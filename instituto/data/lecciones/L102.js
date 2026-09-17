INST.registrarLeccion({
  n: 102,

  resumen: {
    es: 'La lección 101 mostró que la Biblia es una biblioteca de 66 libros. Esta explica cómo está ordenada esa biblioteca por dentro: por qué los libros están donde están, qué géneros contiene cada sección, y por qué el orden no es cronológico.',
    en: 'Lesson 101 showed that the Bible is a library of 66 books. This lesson explains how that library is organized inside: why the books sit where they sit, what genres each section holds, and why the order is not chronological.'
  },

  objetivos: {
    es: [
      'Nombrar las cinco secciones del Antiguo Testamento y las cuatro del Nuevo, con al menos un libro de ejemplo en cada una.',
      'Explicar el criterio real con el que se ordenaron los libros (género y tradición, no fecha de escritura).',
      'Distinguir género literario de contenido: reconocer que un mismo libro puede combinar varios géneros.',
      'Ubicar cualquier libro bíblico en su sección correspondiente usando solo el índice de la Biblia.'
    ],
    en: [
      'Name the five sections of the Old Testament and the four of the New, with at least one example book from each.',
      'Explain the actual criterion used to order the books (genre and tradition, not date of writing).',
      'Distinguish literary genre from content: recognize that one book can combine several genres.',
      "Locate any biblical book in its correct section using only the Bible's table of contents."
    ]
  },

  secciones: {
    es: [
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

    en: [
      { tipo: 'texto', titulo: 'Five sections in the Old Testament', html:
        '<p>The original Hebrew Bible is organized into three blocks — Torah (Law), Nevi\'im (Prophets), and Ketuvim (Writings) — in a different order than the one Christian Bibles use. Our Bibles follow the order set by the <span class="gterm" data-def="A Greek translation of the Old Testament made in Alexandria between the 3rd and 1st centuries BC. Its book order, grouped by genre rather than by the three Hebrew divisions, is the one Christian Bibles inherited.">Septuagint</span>, the ancient Greek translation, which regrouped the same books by type of content. That\'s where the five sections you find in the table of contents come from:</p>' +
        '<ul>' +
        '<li><b><span class="gterm" data-def="From the Greek penta («five») and teuchos («scroll» or «volume»): the first five books of the Bible. In Jewish tradition it is called the Torah, «instruction» or «law».">Pentateuch</span></b> (5 books: Genesis through Deuteronomy) — the Law, the narrative and legal foundation for everything else.</li>' +
        '<li><b>Historical books</b> (12 books: Joshua through Esther) — the story of Israel in the land, from the conquest to the return from exile.</li>' +
        '<li><b>Poetic and <span class="gterm" data-def="Related to practical wisdom: how to live well, make decisions, and understand the meaning of life. Proverbs, Job, and Ecclesiastes are the classic examples of this kind of literature.">wisdom</span> books</b> (5 books: Job through Song of Songs) — poetry, practical wisdom, and reflection on existence.</li>' +
        '<li><b>Major Prophets</b> (5 books: Isaiah through Daniel) — called "major" because of the book\'s length, not because of greater importance.</li>' +
        '<li><b>Minor Prophets</b> (12 books: Hosea through Malachi) — shorter, sometimes just a couple of pages, but carrying the same prophetic weight.</li>' +
        '</ul>' +
        '<p>39 books in total. The grouping criterion is the book\'s dominant genre, not the date it was written: Job, for example, narrates events many place among the oldest in the Bible, yet it sits after Esther, one of the historically latest books.</p>' },

      { tipo: 'texto', titulo: 'Four sections in the New Testament', html:
        '<ul>' +
        '<li><b>Gospels and History</b> (5 books: Matthew through Acts) — the four accounts of Jesus, plus Luke\'s continuation on the early church.</li>' +
        '<li><b>Paul\'s letters</b> (13 books: Romans through Philemon) — ordered from longest to shortest, first the ones written to churches and then the ones written to individuals.</li>' +
        '<li><b>General letters</b> (8 books: Hebrews through Jude) — by authors other than Paul, some addressed to a broad audience.</li>' +
        '<li><b>Revelation</b> (1 book) — closes both the New Testament and the Bible as a whole.</li>' +
        '</ul>' +
        '<p>27 books. The length-based order within Paul\'s letters explains something that surprises many new readers: Galatians, which many scholars date earlier than Romans, appears after it, simply because Romans is longer.</p>' },

      { tipo: 'nota', titulo: 'Genre is not the same thing as section', html:
        '<p>A book\'s section in the table of contents indicates its dominant genre, not that it is pure in that genre. Genesis, classified as Law, is mostly narrative with genealogies and some poetry (Gen 49). Isaiah, among the prophets, also contains historical narrative (Isa 36–39) nearly identical to passages in 2 Kings. Psalms, in the poetic section, includes historical psalms (Ps 78, 105, 106) that retell Israel\'s history in verse. Recognizing this avoids a common confusion: thinking that "it\'s in the history section" means "everything here is objective narration with no poetry or interpretation," when in reality every biblical historical book already carries a theological reading of the events it narrates, not a neutral chronicle.</p>' }
    ]
  },

  ejercicios: {
    es: [
      'Sin ver el índice, nombra las cinco secciones del Antiguo Testamento en orden y un libro de ejemplo de cada una.',
      'Explica por qué Job puede narrar hechos muy antiguos y estar, sin embargo, colocado casi al final del Antiguo Testamento.',
      'Busca Isaías 36–39 y Salmos 78. ¿Qué género "no esperado para su sección" encuentras en cada uno?',
      'Ordena de memoria las cuatro secciones del Nuevo Testamento y explica el criterio real con que se ordenaron las cartas de Pablo.'
    ],
    en: [
      'Without looking at the table of contents, name the five sections of the Old Testament in order, with one example book from each.',
      'Explain why Job can narrate very ancient events and yet sit near the end of the Old Testament.',
      'Look up Isaiah 36–39 and Psalm 78. What "unexpected for its section" genre do you find in each?',
      "From memory, order the four sections of the New Testament and explain the actual criterion used to order Paul's letters."
    ]
  },

  transferencia: {
    es: '¿Puedes explicarle a alguien, sin ver el índice, cómo están organizadas las dos partes de la Biblia y por qué el orden de los libros no sigue la fecha en que se escribieron? Si te cuesta, repasa antes de avanzar.',
    en: "Can you explain to someone, without looking at the table of contents, how the two parts of the Bible are organized and why the order of the books doesn't follow the date they were written? If it's hard, review before moving on."
  },

  fuentes: [
    'Tomás de la Fuente, <i>Claves de interpretación bíblica</i>, Casa Bautista de Publicaciones — cap. 9, "El propósito, el plan y las limitaciones de cada Escritura".',
    'Referencias bíblicas en Reina-Valera 1960.'
  ],

  quiz: {
    es: [
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
    ],
    en: [
      { p: 'How many books does the Pentateuch have, and what is that section also called?',
        opciones: ['5 books; the Law', '12 books; the Historical books', '5 books; the Major Prophets', '7 books; the Wisdom books'],
        correcta: 0, tema: 'Old Testament organization',
        explica: 'Genesis through Deuteronomy: 5 books, known as the Law or Torah.' },
      { p: 'Why does Job appear near the end of the Old Testament even though it narrates very ancient events?',
        opciones: ['Because it was written at the end of the Old Testament period', 'Because the books are grouped by genre, not by the date of the events they narrate', "Because Job isn't a historical book", 'Because the order is alphabetical in Hebrew'],
        correcta: 1, tema: 'Ordering criterion',
        explica: 'The poetic and wisdom section groups by genre; Job belongs there because of its literary form, regardless of when the events it tells happened.' },
      { p: "Paul's letters are ordered mainly by:",
        opciones: ['Date written', 'Length, longest to shortest, first to churches and then to individuals', 'Alphabetical order', 'Theological importance'],
        correcta: 1, tema: 'New Testament organization',
        explica: "That's why Galatians, which many date earlier than Romans, appears after it: Romans is simply longer." },
      { p: 'Finding historical narrative inside a prophetic book (like Isaiah 36–39) means that:',
        opciones: ['Isaiah was misclassified', "The section indicates the dominant genre, not that the book is pure in that genre", "That passage doesn't originally belong to the book", 'Prophets never narrate history'],
        correcta: 1, tema: 'Genre and section',
        explica: "Almost every biblical book mixes genres; a section in the table of contents reflects the dominant genre, not an exclusive one." },
      { p: 'What is the correct order of the four sections of the New Testament?',
        opciones: ['General letters, Gospels, Paul, Revelation', 'Gospels and History, Paul\'s letters, General letters, Revelation', 'Revelation, Gospels, Paul, General letters', "Paul, Gospels, Revelation, General letters"],
        correcta: 1, tema: 'New Testament organization',
        explica: 'Matthew through Acts, then Romans through Philemon, then Hebrews through Jude, and Revelation at the close.' },
      { p: 'A biblical historical book, unlike a neutral modern chronicle, is characterized by the fact that it:',
        opciones: ['Never includes interpretation', 'Already carries a theological reading of the events it narrates', 'Contains only lists of kings', 'Was written by God himself with no human author'],
        correcta: 1, tema: 'Nature of biblical narrative',
        explica: "Biblical historiography narrates with explicit theological purpose: what God did and how the people responded, not merely what happened." }
    ]
  }
});
