INST.registrarLeccion({
  n: 101,

  resumen: {
    es: 'Antes de estudiar lo que la Biblia dice, hay que saber qué clase de libro es: cómo se formó, quién la escribió, en qué idiomas, y por qué la iglesia cristiana sostiene que esa biblioteca de sesenta y seis libros cuenta una sola historia.',
    en: 'Before studying what the Bible says, you need to know what kind of book it is: how it was formed, who wrote it, in which languages, and why the Christian church holds that this library of sixty-six books tells a single story.'
  },

  objetivos: {
    es: [
      'Describir la composición de la Biblia: número de libros, división, idiomas originales y marco temporal aproximado.',
      'Explicar con tus propias palabras qué afirma la iglesia cristiana cuando llama a la Biblia "Palabra de Dios".',
      'Distinguir tres modelos de inspiración y señalar la dificultad principal de cada uno.',
      'Identificar cuatro errores de lectura que nacen de no entender qué tipo de libro es la Biblia.'
    ],
    en: [
      'Describe the composition of the Bible: number of books, division, original languages, and approximate time span.',
      'Explain in your own words what the Christian church means when it calls the Bible "the Word of God."',
      'Distinguish three models of inspiration and name the main difficulty of each.',
      "Identify four reading errors that come from not understanding what kind of book the Bible is."
    ]
  },

  secciones: {
    es: [
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

    en: [
      { tipo: 'texto', titulo: 'A library, not a single book', html:
        '<p>The word "Bible" comes from the Greek <i>biblía</i>, plural of <i>biblíon</i>: "the books." The name is exact. What you\'re holding is not one continuous work by one author, but a collection of sixty-six writings in different genres: historical narrative, law, poetry, letters, prophetic oracles, genealogies, proverbs, visions.</p>' +
        '<p>It is divided into two parts. The <span class="gterm" data-def="From the Latin testamentum, translating the Hebrew berit and the Greek diathēkē: covenant or agreement. Speaking of two Testaments means two stages of the covenant relationship between God and his people, not two unrelated books.">Old Testament</span> gathers 39 books written before Christ, and the New Testament 27, written in the first century. That count follows the Protestant <span class="gterm" data-def="From the Greek kanon, «rule» or «measuring stick». The official list of books a Christian tradition recognizes as inspired Scripture, as opposed to other ancient writings that exist but are not included.">canon</span>; Catholic and Orthodox Bibles include additional books, a topic covered in lesson 122.</p>' +
        '<p>The commonly repeated figures about authors and centuries — roughly forty authors over about fifteen hundred years — are useful traditional approximations, not exact data: several books are anonymous, and the date of composition of some is debated. What is not in dispute is the essential point: the authors were many, very different from one another, and separated by centuries. Among them were a lawgiver, a king, a shepherd, a royal cupbearer, a physician, a tax collector, fishermen, and a rabbi trained in Jerusalem.</p>' },

      { tipo: 'texto', titulo: 'Three languages', html:
        '<p>The Old Testament was written almost entirely in <span class="gterm" data-def="The Semitic language of Israel. Written right to left; in its ancient form it recorded only consonants — vowel markings were added by Jewish scribes (the Masoretes) many centuries later.">Hebrew</span>. Some sections are in <span class="gterm" data-def="A Semitic language related to Hebrew, the common language of the Persian Empire. In the Bible it appears in parts of Daniel and Ezra, and it was the everyday language spoken in Galilee in the first century.">Aramaic</span>: part of Daniel, part of Ezra, and one verse of Jeremiah. The New Testament was written in <span class="gterm" data-def="Koine Greek means common Greek. It was the lingua franca of the eastern Mediterranean from Alexander the Great well into the Roman era — the language of trade, not of philosophers.">Koine Greek</span>.</p>' +
        '<p>The choice of Koine was not incidental: it was the language anyone in the empire understood, from a soldier to a merchant. The New Testament was not written in elite literary language but in the language of the street.</p>' +
        '<p>Everything you read in English is a translation. That doesn\'t weaken the text — no Christian doctrine depends on a word that appears in only one version — but it does mean comparing translations is a legitimate study tool, not a lack of respect. This is covered in depth in lesson 150.</p>' },

      { tipo: 'texto', titulo: 'What the Christian church claims about this book', html:
        '<p>The central claim is not that the Bible is old, influential, or beautiful, but that God spoke through its human authors. The text says this of itself in two classic passages:</p>' +
        '<blockquote style="border-left:2px solid var(--arena);padding-left:14px;margin:0 0 15px"><p>"All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness." (2 Timothy 3:16, NKJV)</p>' +
        '<p>"For prophecy never came by the will of man, but holy men of God spoke as they were moved by the Holy Spirit." (2 Peter 1:21, NKJV)</p></blockquote>' +
        '<p>The Greek word behind "inspired by God" in 2 Timothy 3:16 is <i>theópneustos</i>, literally "God-breathed." The image is not of a man taking a deep breath and feeling inspired, but of a text that comes out of the very breath of God.</p>' },

      { tipo: 'nota', titulo: 'A translation difference worth knowing', html:
        '<p>The opening phrase of 2 Timothy 3:16 grammatically allows two readings: "all Scripture is God-breathed <b>and</b> profitable..." (most modern versions) or "every God-breathed Scripture <b>is also</b> profitable...", as some older translations rendered it. The second could suggest that some writings are inspired and others are not. Most translators prefer the first reading based on the Greek adjective construction and on the context of the previous verse, where Paul refers to the Scriptures Timothy has known since childhood. It\'s a good first example of something that will come up again: a translation difference is not automatically a doctrinal difference, but it deserves examination rather than being ignored.</p>' },

      { tipo: 'posturas', titulo: 'How did God work through human authors?',
        intro: '<p>That the Bible is "God-breathed" doesn\'t by itself explain the mechanism. Here are different positions held by Christians who equally affirm the authority of Scripture.</p>',
        posturas: [
          { nombre: 'Mechanical dictation', quien: 'A minority position today; shows up more in popular piety than in formal theology.',
            argumento: 'God dictated word for word and the human author functioned as a passive secretary.',
            fortalezas: 'Strongly protects the idea that the words come from God.',
            dificultades: "Clashes with the text itself: Luke says he investigated and arranged his account (Lk 1:1-4), and the styles of Amos, Isaiah, and Paul are unmistakably different from one another. Dictation doesn't produce personal styles." },
          { nombre: 'Plenary verbal inspiration', quien: 'The majority position within evangelicalism, including classical Pentecostal theology.',
            argumento: 'God worked in such a way on fully active authors — with their personality, vocabulary, research, and era — that the result is at once fully human and fully what God intended to say. "Verbal" means it extends to the words themselves; "plenary," that it extends to the whole text, not just the doctrinal parts.',
            fortalezas: 'Accounts for both the diversity of styles and the authority of the text.',
            dificultades: "Doesn't describe the mechanism: it affirms the result without explaining how it happened. Its defenders reply that Scripture doesn't describe it either." },
          { nombre: 'Dynamic or conceptual inspiration', quien: 'Present in broader sectors of Protestantism.',
            argumento: 'God inspired the ideas and concepts, leaving the verbal formulation entirely to the author.',
            fortalezas: 'Easily accounts for variations in style and detail between parallel accounts.',
            dificultades: 'Ideas don\'t exist without words to express them, and several New Testament arguments rest on specific Old Testament terms (for example Gal 3:16, which turns on a singular versus a plural).' }
        ],
        conclusion: "The Institute teaches the second position: fully human authors, a fully trustworthy text. It's worth keeping the distinction between what the text claims — that God spoke through them — and later theological reconstruction — the how. The first is explicit teaching; the second, a model for explaining it." },

      { tipo: 'texto', titulo: 'One single story', html:
        '<p>What is remarkable about this library is not its diversity but its coherence. Sixty-six books written by dozens of people who never coordinated with one another, separated by centuries and cultures, move in the same direction: a world created good, a rupture, a people chosen to bless everyone else, a promised Messiah, a fulfilled promise, a final restoration. That thread is what makes something like a Bible institute possible, rather than just a course of sixty-six unrelated subjects.</p>' +
        '<p>Jesus himself reads the Scriptures of his people this way: "beginning at Moses and all the Prophets, He expounded to them in all the Scriptures the things concerning Himself" (Luke 24:27, NKJV). Lesson 103 walks through that full story; lessons 104 through 108 develop it act by act.</p>' },

      { tipo: 'errores', titulo: 'Four errors that start right here', items: [
        ["Treating the Bible as a book of loose sentences", "Opening at random and taking the first verse as a personal message ignores that every sentence belongs to a book with its own argument. The problem isn't devotion — it's that the method makes the text say whatever the reader already brought to it."],
        ['Reading it as if it were a science manual or a modern legal code', "These are genres that didn't exist when it was written. Asking the text questions it never set out to answer produces invented answers."],
        ['Assuming the order of the books is chronological', 'The books are grouped by genre and tradition, not by date. Job probably narrates very ancient events and is placed after Esther; several of Paul\'s letters were written before the Gospels.'],
        ['Confusing "written for me" with "written to me"', "All of Scripture is for the Christian reader, but no letter was addressed to him. Leviticus was given to Israel in the wilderness; 1 Corinthians, to one specific congregation with specific problems. Recovering the original recipient is the first step to applying it well, not a devotional obstacle."]
      ] }
    ]
  },

  ejercicios: {
    es: [
      'Sin mirar, escribe: cuántos libros tiene cada Testamento, en qué tres idiomas se escribió la Biblia y qué significa theópneustos.',
      'Busca el índice de tu Biblia y clasifica diez libros al azar según su género probable (ley, historia, poesía, profecía, evangelio, carta, apocalíptica). Comprueba después en la lección 102.',
      'Lee 2 Timoteo 3:14-17 completo. ¿Qué "Escritura" tenía Timoteo disponible desde niño, y qué implica eso para el alcance del versículo 16?',
      'Explica en un párrafo, a alguien que nunca ha leído la Biblia, por qué un libro escrito por tantas personas distintas puede considerarse una sola obra.'
    ],
    en: [
      'Without looking, write down: how many books each Testament has, in which three languages the Bible was written, and what theópneustos means.',
      "Look at your Bible's table of contents and classify ten random books by their likely genre (law, history, poetry, prophecy, gospel, letter, apocalyptic). Check yourself against lesson 102 afterward.",
      'Read 2 Timothy 3:14-17 in full. Which "Scripture" did Timothy have available since childhood, and what does that imply about the scope of verse 16?',
      'In one paragraph, explain to someone who has never read the Bible why a book written by so many different people can be considered a single work.'
    ]
  },

  transferencia: {
    es: '¿Podrías explicarle a alguien sin formación bíblica qué es la Biblia, en qué idiomas se escribió y qué significa llamarla Palabra de Dios, sin leer esta lección? Si no, vuelve a las dos primeras secciones antes de seguir.',
    en: "Could you explain to someone with no biblical background what the Bible is, in which languages it was written, and what it means to call it the Word of God — without looking back at this lesson? If not, revisit the first two sections before moving on."
  },

  fuentes: [
    'Tomás de la Fuente, <i>Claves de interpretación bíblica</i>, Casa Bautista de Publicaciones — cap. 1, "Observaciones preliminares sobre la interpretación bíblica", y cap. 11, "La clave de los dos Testamentos".',
    'Stanley M. Horton (ed.), <i>Teología sistemática: una perspectiva pentecostal</i>, Editorial Vida — cap. 3, "La Palabra inspirada de Dios", por John R. Higgins.',
    'Textos bíblicos citados en Reina-Valera 1960; las referencias a la Nueva Versión Internacional se indican donde aparecen.'
  ],

  quiz: {
    es: [
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
    ],
    en: [
      { p: 'How many books does the Protestant Bible have, and how are they divided?',
        opciones: ['66: 39 in the Old Testament and 27 in the New', '73: 46 and 27', '66: 27 and 39', '72: 45 and 27'],
        correcta: 0, tema: 'Bible composition',
        explica: 'The Protestant canon has 39 books in the Old Testament and 27 in the New. Other Christian traditions include additional books (lesson 122).' },
      { p: 'In which languages were the biblical texts originally written?',
        opciones: ['Hebrew and Latin', 'Hebrew, Aramaic, and Koine Greek', 'Aramaic and Latin', 'Classical Greek and Hebrew'],
        correcta: 1, tema: 'Original languages',
        explica: "Hebrew for almost all of the Old Testament, Aramaic in parts of Daniel and Ezra, and Koine Greek throughout the New Testament. Latin came later, with the Vulgate translation." },
      { p: 'The Greek word theópneustos, translated "given by inspiration of God" in 2 Timothy 3:16, literally means:',
        opciones: ['Written with great care', 'God-breathed', 'Received in a vision', 'Kept safe by God'],
        correcta: 1, tema: 'Inspiration',
        explica: "The image is God's own breath on the text, not the human author's enthusiasm." },
      { p: 'The main difficulty with the "mechanical dictation" model is that:',
        opciones: ['It denies that God speaks', "It doesn't explain why the authors keep distinct personal styles and vocabularies", 'It contradicts the canon', 'It was condemned at Chalcedon'],
        correcta: 1, tema: 'Models of inspiration',
        explica: "Luke 1:1-4 describes human investigation, and the styles of Amos, Isaiah, and Paul are clearly different. Literal dictation wouldn't produce that variety." },
      { p: 'Why is it a mistake to assume the order of the books is chronological?',
        opciones: ['Because the books are ordered by length', 'Because they are grouped by genre and tradition, not by the date they were written', 'Because the order changes in every version', 'Because no one knows when anything was written'],
        correcta: 1, tema: 'Canon organization',
        explica: "Paul's letters, for example, are arranged from longest to shortest, and several were written before the Gospels." },
      { p: 'A teacher says: "this letter was written to us, the church today." The most accurate correction is:',
        opciones: ['That is exactly correct', 'It was written to specific first-century recipients and is for us; recovering the original recipient is what allows it to be applied well', "Paul's letters have no application today", 'Only the Gospels apply today'],
        correcta: 1, tema: 'Original recipient',
        explica: 'The distinction between "written to" and "written for" preserves both the historicity of the text and its present authority. This is developed in lessons 144 and 145.' }
    ]
  }
});
