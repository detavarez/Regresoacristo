INST.registrarLeccion({
  n: 102,

  resumen: {
    es: 'La lección 101 mostró que la Biblia es una biblioteca de 66 libros. Esta explica cómo está ordenada esa biblioteca por dentro: el orden hebreo original en tres bloques, el orden griego que heredaron las Biblias cristianas en cinco y cuatro secciones, por qué los libros están donde están, qué géneros contiene cada sección, y por qué el orden no es cronológico ni casual.',
    en: 'Lesson 101 showed that the Bible is a library of 66 books. This lesson explains how that library is organized inside: the original Hebrew order in three blocks, the Greek order that Christian Bibles inherited in five and four sections, why the books sit where they sit, what genres each section holds, and why the order is neither chronological nor arbitrary.'
  },

  objetivos: {
    es: [
      'Describir el orden hebreo original de la Biblia (Torá, Nevi\'im, Ketuvim) y compararlo con el orden que usan las Biblias en español.',
      'Nombrar las cinco secciones del Antiguo Testamento y las cuatro del Nuevo, con al menos un libro de ejemplo en cada una.',
      'Explicar el criterio real con el que se ordenaron los libros (género y tradición, no fecha de escritura).',
      'Distinguir género literario de contenido: reconocer que un mismo libro puede combinar varios géneros.',
      'Evaluar qué significado teológico se le ha dado al orden final de cada tradición, sin exagerarlo ni descartarlo.',
      'Ubicar cualquier libro bíblico en su sección correspondiente usando solo el índice de la Biblia.'
    ],
    en: [
      "Describe the original Hebrew order of the Bible (Torah, Nevi'im, Ketuvim) and compare it with the order used in English Bibles.",
      'Name the five sections of the Old Testament and the four of the New, with at least one example book from each.',
      'Explain the actual criterion used to order the books (genre and tradition, not date of writing).',
      'Distinguish literary genre from content: recognize that one book can combine several genres.',
      'Evaluate what theological significance has been given to each tradition\'s final ordering, without overstating or dismissing it.',
      "Locate any biblical book in its correct section using only the Bible's table of contents."
    ]
  },

  secciones: {
    es: [
      { tipo: 'texto', titulo: 'El orden hebreo original: tres bloques', html:
        '<p>Antes de llegar al orden que conoces, vale la pena ver el orden con que los judíos organizaron —y siguen organizando hoy— las Escrituras hebreas, porque revela algo que el orden cristiano oculta. La Biblia hebrea, el <span class="gterm" data-def="Acrónimo hebreo formado por las iniciales de Torá, Nevi\'im y Ketuvim: la Biblia hebrea organizada en sus tres bloques tradicionales.">Tanaj</span>, se divide en tres bloques: <b>Torá</b> (la Ley: los mismos cinco libros de Génesis a Deuteronomio), <b>Nevi\'im</b> (los Profetas, que incluyen tanto libros que nosotros llamamos "históricos" —Josué, Jueces, Samuel, Reyes, llamados "profetas anteriores"— como los libros proféticos propiamente dichos) y <b>Ketuvim</b> (los Escritos: Salmos, Proverbios, Job, y también Rut, Cantares, Eclesiastés, Lamentaciones, Ester, Daniel, Esdras-Nehemías y Crónicas).</p>' +
        '<p>El dato más llamativo de este orden es cuál es el último libro: no Malaquías, como en nuestras Biblias, sino <b>2 Crónicas</b>, que termina con el decreto del rey persa Ciro autorizando el regreso de los judíos a Jerusalén para reconstruir el templo (2 Crónicas 36:22-23). Jesús mismo parece tener presente este orden hebreo cuando, en Mateo 23:35, habla de la sangre derramada "desde Abel hasta Zacarías", refiriéndose al primer asesinato registrado en la Biblia (Génesis) y al último registrado en el orden hebreo (2 Crónicas 24) —es decir, "de la primera a la última página" según el orden judío, no el nuestro.</p>' +
        '<p>Jesús también resume las Escrituras con el nombre de sus tres bloques en Lucas 24:44: "era necesario que se cumpliese todo lo que está escrito de mí en la ley de Moisés, en los profetas y en los salmos" —Ley, Profetas y (el primer libro de) los Escritos, representando el Tanaj completo con esa fórmula abreviada.</p>' },

      { tipo: 'texto', titulo: 'Cinco secciones en el Antiguo Testamento', html:
        '<p>Nuestras Biblias no siguen el orden hebreo tripartito, sino el que fijó la <span class="gterm" data-def="Traducción del Antiguo Testamento al griego, hecha en Alejandría entre los siglos III y I a.C. Su orden de libros, agrupado por género en vez de por las tres divisiones hebreas, es el que heredaron las Biblias cristianas.">Septuaginta</span>, la antigua traducción griega del Antiguo Testamento usada por los judíos de habla griega y adoptada después por la iglesia primitiva. La Septuaginta reagrupó los mismos 39 libros, no por las tres categorías hebreas, sino por tipo de contenido. De ahí salen las cinco secciones que encuentras en el índice de tu Biblia:</p>' +
        '<ul>' +
        '<li><b><span class="gterm" data-def="Del griego penta («cinco») y teuchos («rollo» o «volumen»): los cinco primeros libros de la Biblia. En la tradición judía se llama Torá, «instrucción» o «ley».">Pentateuco</span></b> (5 libros: Génesis a Deuteronomio) — la Ley, el fundamento narrativo y legal de todo lo demás.</li>' +
        '<li><b>Históricos</b> (12 libros: Josué a Ester) — la historia de Israel en la tierra, desde la conquista hasta el regreso del exilio.</li>' +
        '<li><b>Poéticos y <span class="gterm" data-def="Relativo a la sabiduría práctica: cómo vivir bien, tomar decisiones y entender el sentido de la vida. Proverbios, Job y Eclesiastés son los ejemplos clásicos de este tipo de literatura.">sapienciales</span></b> (5 libros: Job a Cantares) — poesía, sabiduría práctica y reflexión existencial.</li>' +
        '<li><b>Profetas mayores</b> (5 libros: Isaías a Daniel) — así llamados por la extensión del libro, no por mayor importancia.</li>' +
        '<li><b>Profetas menores</b> (12 libros: Oseas a Malaquías) — más breves, a veces de un par de páginas, con el mismo peso profético.</li>' +
        '</ul>' +
        '<p>39 libros en total. El criterio de agrupación es el género predominante del libro, no la fecha en que se escribió: Job, por ejemplo, narra hechos que muchos ubican entre los más antiguos de la Biblia —anteriores incluso a Abraham, según algunos comentaristas— y sin embargo está colocado después de Ester, uno de los libros más tardíos del Antiguo Testamento en términos de los sucesos que narra.</p>' },

      { tipo: 'texto', titulo: 'Cuatro secciones en el Nuevo Testamento', html:
        '<ul>' +
        '<li><b>Evangelios e Historia</b> (5 libros: Mateo a Hechos) — los cuatro relatos de Jesús y la continuación de Lucas sobre la iglesia primitiva.</li>' +
        '<li><b>Cartas de Pablo</b> (13 libros: Romanos a Filemón) — ordenadas de mayor a menor extensión, primero las dirigidas a iglesias y después las dirigidas a personas.</li>' +
        '<li><b>Cartas generales</b> (8 libros: Hebreos a Judas) — de autores distintos a Pablo, algunas dirigidas a una audiencia amplia y no a una congregación específica.</li>' +
        '<li><b>Apocalipsis</b> (1 libro) — cierra tanto el Nuevo Testamento como la Biblia entera.</li>' +
        '</ul>' +
        '<p>27 libros. El orden por extensión dentro de las cartas paulinas explica algo que sorprende a muchos lectores nuevos: Gálatas, que muchos estudiosos fechan antes que Romanos —posiblemente la primera carta de Pablo que se conserva—, aparece después en el índice, simplemente porque Romanos es más larga. Lo mismo ocurre entre 1 y 2 Tesalonicenses frente a cartas posteriores más extensas como Efesios o Colosenses.</p>' },

      { tipo: 'nota', titulo: 'Género no es lo mismo que sección', html:
        '<p>La sección de un libro en el índice indica su género predominante, no que sea puro en ese género. Génesis, clasificado como Ley, es sobre todo narrativa con genealogías y algo de poesía (Génesis 49, la bendición de Jacob a sus hijos). Isaías, entre los profetas, contiene también narrativa histórica (Isaías 36–39) casi idéntica a pasajes de 2 Reyes 18–20. Salmos, en la sección poética, incluye salmos históricos (Salmos 78, 105, 106) que repasan la historia de Israel en verso, y hasta un salmo que es en realidad una oración de acción de gracias insertada en medio de un relato narrativo (compárese 1 Crónicas 16 con el Salmo 105). Reconocer esto evita una confusión común: pensar que "está en la sección de historia" significa "todo aquí es narración objetiva sin poesía ni interpretación", cuando en realidad cada libro histórico bíblico ya trae una lectura teológica de los hechos que narra, no una crónica neutral al estilo de un periódico moderno.</p>' },

      { tipo: 'posturas', titulo: '¿Importa teológicamente en qué orden terminan las dos tradiciones?',
        intro: '<p>El Tanaj hebreo termina en 2 Crónicas, con el decreto de Ciro y la orden de reconstruir el templo. El Antiguo Testamento cristiano termina en Malaquías, con una advertencia y una promesa: "he aquí, yo os envío el profeta Elías... y él hará volver el corazón de los padres hacia los hijos" (Malaquías 4:5-6). ¿Este contraste tiene peso teológico real, o es una simple curiosidad de organización editorial?</p>',
        posturas: [
          { nombre: 'El orden cristiano tiene peso teológico intencional', quien: 'Postura común en comentarios devocionales y en parte de la predicación evangélica sobre el "silencio de cuatrocientos años" entre Malaquías y Mateo.',
            argumento: 'Que el Antiguo Testamento cristiano termine con la promesa de un mensajero tipo Elías, y que el Nuevo Testamento abra precisamente con Juan el Bautista cumpliendo esa función (Mateo 3, Lucas 1:17), no es casualidad editorial sino que refleja —aunque de forma tardía, por la decisión de ordenar así los libros— la lógica misma de la promesa y el cumplimiento que atraviesa toda la Biblia.',
            fortalezas: 'Conecta de forma memorable y pedagógicamente útil el final del Antiguo Testamento con el inicio del Nuevo, algo que ayuda especialmente a un estudiante que empieza a leer la Biblia por primera vez.',
            dificultades: 'El orden de los libros del Antiguo Testamento cristiano no fue fijado por los autores originales ni por Jesús, sino por la tradición editorial de la Septuaginta varios siglos después de escrito Malaquías; presentarlo como si fuera una intención divina en el ordenamiento mismo, y no solo en el contenido de las profecías, va más allá de lo que el texto afirma sobre sí mismo.' },
          { nombre: 'El orden hebreo también tiene lógica teológica propia', quien: 'Postura frecuente entre estudiosos del canon hebreo y en comentaristas judíos y cristianos que trabajan con el Tanaj en su forma original.',
            argumento: 'Terminar en el decreto de Ciro deja al lector del Tanaj con una nota de esperanza abierta y activa —"suban, y el Señor su Dios esté con ellos" (2 Crónicas 36:23)— apuntando hacia adelante, hacia la reconstrucción y la restauración, en lugar de terminar con una advertencia.',
            fortalezas: 'Muestra que ambos órdenes, el hebreo y el griego, son formas legítimas y antiguas de organizar el mismo contenido, y que ninguna tradición "inventó" un final arbitrario.',
            dificultades: 'Corre el mismo riesgo que la postura anterior: convertir una decisión editorial de agrupamiento en una declaración teológica formal que el texto bíblico no hace explícitamente sobre sí mismo.' }
        ],
        conclusion: 'El Instituto sostiene una posición moderada: el contenido teológico de las profecías y las promesas es plenamente inspirado y autoritativo, sea cual sea el orden final de los libros; el orden mismo —tanto el hebreo como el griego— es una decisión editorial humana antigua, útil pedagógicamente y no carente de lógica, pero no un dato revelado que deba tratarse con el mismo peso doctrinal que el contenido del texto.' },

      { tipo: 'texto', titulo: 'De dónde viene la Septuaginta y por qué la iglesia la adoptó', html:
        '<p>La Septuaginta —su nombre viene del latín <i>septuaginta</i>, "setenta", por una leyenda antigua que habla de setenta y dos traductores trabajando de forma independiente y llegando al mismo resultado— se produjo por una necesidad práctica muy concreta: tras las conquistas de Alejandro Magno en el siglo IV a.C., una comunidad judía numerosa vivía en Alejandría, Egipto, hablando griego como lengua cotidiana y perdiendo fluidez en hebreo. El Pentateuco se tradujo primero, hacia el siglo III a.C., y el resto de los libros se fue añadiendo a lo largo de los dos siglos siguientes.</p>' +
        '<p>Cuando el cristianismo nace en el siglo I d.C. como movimiento dentro del judaísmo y luego se expande rápidamente al mundo grecoparlante, la Septuaginta —ya disponible, ya de uso extendido entre los judíos de la diáspora— se convierte en la Biblia de facto de la iglesia primitiva. La inmensa mayoría de las citas del Antiguo Testamento que aparecen en el Nuevo Testamento siguen el texto griego de la Septuaginta, no el hebreo masorético directamente, lo cual explica por qué a veces una cita en el Nuevo Testamento no coincide palabra por palabra con el versículo tal como aparece en tu Antiguo Testamento en español, que sí se traduce del hebreo. Este dato, lejos de ser un problema, es un testimonio más de cuán temprano y cuán extendido estaba ya el uso de esa traducción griega entre los primeros cristianos.</p>' },

      { tipo: 'texto', titulo: 'Por qué el orden importa para leer bien', html:
        '<p>Entender que el orden es editorial, no cronológico ni casual, cambia la manera de leer en la práctica. Si abres la Biblia sin este dato, puedes suponer erróneamente que un libro cercano a otro en el índice ocurrió cerca en el tiempo, o que el orden refleja importancia. Ninguna de las dos cosas es cierta: Rut, ubicado entre Jueces y 1 Samuel, ocurre durante el período de los jueces pero se escribió —según la mayoría de los especialistas— mucho después; y "menor" en "profetas menores" describe extensión de páginas, no menor autoridad ni menor peso profético frente a Isaías o Jeremías.</p>' +
        '<p>Esto también evita un error práctico común al enseñar: predicar o enseñar los libros en el orden del índice como si fuera el orden recomendado de lectura para alguien nuevo en la fe. Un buen plan de lectura para principiantes normalmente no sigue el orden del índice de principio a fin, precisamente porque ese orden agrupa por género, no por facilidad de comprensión progresiva; este tema se retoma con un plan de lectura sugerido en la lección 149.</p>' },

      { tipo: 'nota', titulo: 'Un vistazo rápido a la Vulgata y a las Biblias en español', html:
        '<p>Un tercer eslabón conecta el orden griego con el que usas hoy: la <span class="gterm" data-def="Traducción de toda la Biblia al latín hecha principalmente por Jerónimo de Estridón hacia finales del siglo IV d.C., que se convirtió en la Biblia estándar de la iglesia occidental durante más de mil años.">Vulgata</span> latina de Jerónimo, de finales del siglo IV, tradujo el Antiguo Testamento directamente del hebreo (a diferencia de otras versiones latinas anteriores, basadas en la Septuaginta), pero conservó básicamente el mismo orden griego de cinco y cuatro secciones. Las primeras traducciones de la Biblia al español —la Biblia del Oso de Casiodoro de Reina (1569), base de la que hoy conocemos como Reina-Valera— siguieron ese mismo orden heredado, y así ha llegado hasta el ejemplar que usas hoy.</p>' },

      { tipo: 'errores', titulo: 'Errores frecuentes sobre el orden de la Biblia', items: [
        ['Suponer que el orden es cronológico', 'Job puede narrar hechos anteriores a Abraham y estar casi al final del Antiguo Testamento; Rut ocurre durante los jueces pero se escribió después; varias cartas de Pablo son anteriores a los evangelios que las preceden en el índice.'],
        ['Confundir "profeta menor" con "profecía menos importante"', '"Menor" describe la extensión del libro en páginas, no su peso teológico. Miqueas, con apenas siete capítulos, contiene una de las profecías mesiánicas más citadas del Antiguo Testamento (Miqueas 5:2).'],
        ['Tratar la sección de un libro como si describiera todo su contenido', 'Un libro "histórico" puede contener poesía (el cántico de Débora en Jueces 5) y un libro "profético" puede contener narrativa extensa (Isaías 36–39, Jonás casi entero).'],
        ['Pensar que el orden del índice es el mejor orden de lectura para un principiante', 'El índice agrupa por género, no por facilidad pedagógica; leer de corrido de Génesis a Apocalipsis sin guía suele desanimar a un lector nuevo mucho antes de llegar al Nuevo Testamento.'],
        ['Ignorar que existe un orden hebreo distinto y más antiguo', 'Pensar que el orden de las Biblias en español es "el" orden original de la Escritura ignora que la tradición judía, que produjo estos libros, los organiza de otra manera, terminando en un libro distinto.']
      ] }
    ],

    en: [
      { tipo: 'texto', titulo: 'The original Hebrew order: three blocks', html:
        '<p>Before looking at the order you\'re used to, it\'s worth seeing the order in which Jews organized — and still organize today — the Hebrew Scriptures, because it reveals something the Christian order hides. The Hebrew Bible, the <span class="gterm" data-def="A Hebrew acronym formed from the initials of Torah, Nevi\'im, and Ketuvim: the Hebrew Bible organized into its three traditional blocks.">Tanakh</span>, is divided into three blocks: the <b>Torah</b> (the Law: the same five books from Genesis to Deuteronomy), <b>Nevi\'im</b> (the Prophets, which include both books we call "historical" — Joshua, Judges, Samuel, Kings, called the "Former Prophets" — and the prophetic books properly speaking) and <b>Ketuvim</b> (the Writings: Psalms, Proverbs, Job, and also Ruth, Song of Songs, Ecclesiastes, Lamentations, Esther, Daniel, Ezra-Nehemiah, and Chronicles).</p>' +
        '<p>The most striking feature of this order is which book comes last: not Malachi, as in our Bibles, but <b>2 Chronicles</b>, which ends with the decree of the Persian king Cyrus authorizing the Jews to return to Jerusalem to rebuild the temple (2 Chronicles 36:22-23). Jesus himself seems to have this Hebrew order in mind when, in Matthew 23:35, he speaks of the blood shed "from Abel to Zechariah," referring to the first murder recorded in the Bible (Genesis) and the last one recorded in the Hebrew order (2 Chronicles 24) — that is, "from the first page to the last" according to the Jewish order, not ours.</p>' +
        '<p>Jesus also summarizes the Scriptures using the names of its three blocks in Luke 24:44: "all things must be fulfilled which were written in the Law of Moses and the Prophets and the Psalms concerning Me" — Law, Prophets, and (the first book of) the Writings, representing the whole Tanakh with that shorthand formula.</p>' },

      { tipo: 'texto', titulo: 'Five sections in the Old Testament', html:
        '<p>Our Bibles don\'t follow the threefold Hebrew order, but rather the one set by the <span class="gterm" data-def="A Greek translation of the Old Testament made in Alexandria between the 3rd and 1st centuries BC. Its book order, grouped by genre rather than by the three Hebrew divisions, is the one Christian Bibles inherited.">Septuagint</span>, the ancient Greek translation of the Old Testament used by Greek-speaking Jews and later adopted by the early church. The Septuagint regrouped the same 39 books, not by the three Hebrew categories, but by type of content. That\'s where the five sections you find in your Bible\'s table of contents come from:</p>' +
        '<ul>' +
        '<li><b><span class="gterm" data-def="From the Greek penta («five») and teuchos («scroll» or «volume»): the first five books of the Bible. In Jewish tradition it is called the Torah, «instruction» or «law».">Pentateuch</span></b> (5 books: Genesis through Deuteronomy) — the Law, the narrative and legal foundation for everything else.</li>' +
        '<li><b>Historical books</b> (12 books: Joshua through Esther) — the story of Israel in the land, from the conquest to the return from exile.</li>' +
        '<li><b>Poetic and <span class="gterm" data-def="Related to practical wisdom: how to live well, make decisions, and understand the meaning of life. Proverbs, Job, and Ecclesiastes are the classic examples of this kind of literature.">wisdom</span> books</b> (5 books: Job through Song of Songs) — poetry, practical wisdom, and reflection on existence.</li>' +
        '<li><b>Major Prophets</b> (5 books: Isaiah through Daniel) — called "major" because of the book\'s length, not because of greater importance.</li>' +
        '<li><b>Minor Prophets</b> (12 books: Hosea through Malachi) — shorter, sometimes just a couple of pages, but carrying the same prophetic weight.</li>' +
        '</ul>' +
        '<p>39 books in total. The grouping criterion is the book\'s dominant genre, not the date it was written: Job, for example, narrates events many place among the oldest in the Bible — earlier even than Abraham, according to some commentators — yet it sits after Esther, one of the latest Old Testament books in terms of the events it narrates.</p>' },

      { tipo: 'texto', titulo: 'Four sections in the New Testament', html:
        '<ul>' +
        '<li><b>Gospels and History</b> (5 books: Matthew through Acts) — the four accounts of Jesus, plus Luke\'s continuation on the early church.</li>' +
        '<li><b>Paul\'s letters</b> (13 books: Romans through Philemon) — ordered from longest to shortest, first the ones written to churches and then the ones written to individuals.</li>' +
        '<li><b>General letters</b> (8 books: Hebrews through Jude) — by authors other than Paul, some addressed to a broad audience rather than a specific congregation.</li>' +
        '<li><b>Revelation</b> (1 book) — closes both the New Testament and the Bible as a whole.</li>' +
        '</ul>' +
        '<p>27 books. The length-based order within Paul\'s letters explains something that surprises many new readers: Galatians, which many scholars date earlier than Romans — possibly Paul\'s earliest surviving letter — appears after it in the table of contents, simply because Romans is longer. The same happens between 1 and 2 Thessalonians compared with later, longer letters like Ephesians or Colossians.</p>' },

      { tipo: 'nota', titulo: 'Genre is not the same thing as section', html:
        '<p>A book\'s section in the table of contents indicates its dominant genre, not that it is pure in that genre. Genesis, classified as Law, is mostly narrative with genealogies and some poetry (Genesis 49, Jacob\'s blessing of his sons). Isaiah, among the prophets, also contains historical narrative (Isaiah 36–39) nearly identical to passages in 2 Kings 18–20. Psalms, in the poetic section, includes historical psalms (Psalms 78, 105, 106) that retell Israel\'s history in verse, and even a psalm that is actually a thanksgiving prayer inserted into a narrative account (compare 1 Chronicles 16 with Psalm 105). Recognizing this avoids a common confusion: thinking that "it\'s in the history section" means "everything here is objective narration with no poetry or interpretation," when in reality every biblical historical book already carries a theological reading of the events it narrates, not a neutral chronicle in the style of a modern newspaper.</p>' },

      { tipo: 'posturas', titulo: 'Does it matter theologically which book each tradition ends on?',
        intro: '<p>The Hebrew Tanakh ends in 2 Chronicles, with Cyrus\'s decree and the order to rebuild the temple. The Christian Old Testament ends in Malachi, with a warning and a promise: "behold, I will send you Elijah the prophet... and he will turn the hearts of the fathers to the children" (Malachi 4:5-6). Does this contrast carry real theological weight, or is it simply an editorial curiosity?</p>',
        posturas: [
          { nombre: 'The Christian order carries intentional theological weight', quien: 'A common view in devotional commentary and in some evangelical preaching about the "four hundred years of silence" between Malachi and Matthew.',
            argumento: 'The fact that the Christian Old Testament ends with the promise of an Elijah-like messenger, and that the New Testament opens precisely with John the Baptist fulfilling that role (Matthew 3, Luke 1:17), is not editorial coincidence but reflects — even if only through the later decision to order the books this way — the very logic of promise and fulfillment that runs through the whole Bible.',
            fortalezas: 'It connects the end of the Old Testament with the beginning of the New in a memorable, pedagogically useful way, which is especially helpful for a student reading the Bible for the first time.',
            dificultades: "The order of the Christian Old Testament's books was not fixed by the original authors or by Jesus, but by the editorial tradition of the Septuagint several centuries after Malachi was written; presenting it as though the ordering itself, and not just the content of the prophecies, were a divine intention goes beyond what the text claims about itself." },
          { nombre: 'The Hebrew order also has its own theological logic', quien: 'A view common among scholars of the Hebrew canon and among Jewish and Christian commentators who work with the Tanakh in its original form.',
            argumento: 'Ending on Cyrus\'s decree leaves the reader of the Tanakh with a note of open, active hope — "let him go up, and may the Lord his God be with him" (2 Chronicles 36:23) — pointing forward, toward rebuilding and restoration, rather than ending with a warning.',
            fortalezas: 'It shows that both orders, Hebrew and Greek, are legitimate and ancient ways of organizing the same content, and that neither tradition "invented" an arbitrary ending.',
            dificultades: 'It runs the same risk as the previous position: turning an editorial grouping decision into a formal theological statement that the biblical text does not explicitly make about itself.' }
        ],
        conclusion: "The Institute holds a moderate position: the theological content of the prophecies and promises is fully inspired and authoritative regardless of the final order of the books; the order itself — both Hebrew and Greek — is an ancient human editorial decision, pedagogically useful and not without its own logic, but not revealed data that should carry the same doctrinal weight as the content of the text." },

      { tipo: 'texto', titulo: 'Where the Septuagint came from and why the church adopted it', html:
        '<p>The Septuagint — its name comes from the Latin <i>septuaginta</i>, "seventy," from an ancient legend of seventy-two translators working independently and arriving at the same result — was produced out of a very concrete practical need: after Alexander the Great\'s conquests in the fourth century BC, a large Jewish community lived in Alexandria, Egypt, speaking Greek as their everyday language and losing fluency in Hebrew. The Pentateuch was translated first, around the third century BC, and the rest of the books were added over the following two centuries.</p>' +
        '<p>When Christianity was born in the first century AD as a movement within Judaism and then rapidly spread into the Greek-speaking world, the Septuagint — already available, already in wide use among diaspora Jews — became the de facto Bible of the early church. The vast majority of Old Testament quotations that appear in the New Testament follow the Greek text of the Septuagint, not the Hebrew Masoretic text directly, which explains why a New Testament quotation sometimes doesn\'t match word for word the verse as it appears in your Old Testament in English, which is translated from Hebrew. Far from being a problem, this fact is one more piece of evidence for how early and how widespread the use of that Greek translation already was among the first Christians.</p>' },

      { tipo: 'texto', titulo: 'Why the order matters for reading well', html:
        '<p>Understanding that the order is editorial, not chronological or arbitrary, changes how you read in practice. Without this piece of information, you might wrongly assume that a book near another one in the table of contents happened close to it in time, or that the order reflects importance. Neither is true: Ruth, placed between Judges and 1 Samuel, takes place during the period of the judges but was written — according to most specialists — much later; and "minor" in "Minor Prophets" describes page length, not lesser authority or lesser prophetic weight compared to Isaiah or Jeremiah.</p>' +
        '<p>This also prevents a common practical mistake in teaching: preaching or teaching the books in table-of-contents order as if it were the recommended reading order for someone new to the faith. A good reading plan for beginners usually does not follow the table of contents front to back, precisely because that order groups by genre, not by ease of progressive understanding; this topic is picked up again with a suggested reading plan in lesson 149.</p>' },

      { tipo: 'nota', titulo: 'A quick look at the Vulgate and Bibles in modern languages', html:
        '<p>A third link connects the Greek order to the one you use today: Jerome\'s Latin <span class="gterm" data-def="A translation of the whole Bible into Latin, made mainly by Jerome of Stridon toward the end of the 4th century AD, which became the standard Bible of the Western church for over a thousand years.">Vulgate</span>, from the late fourth century, translated the Old Testament directly from Hebrew (unlike earlier Latin versions based on the Septuagint), but kept essentially the same Greek five-and-four-section order. The earliest translations of the Bible into modern European languages followed that same inherited order, and so it has come down to the copy you use today.</p>' },

      { tipo: 'errores', titulo: 'Common errors about the order of the Bible', items: [
        ['Assuming the order is chronological', 'Job may narrate events earlier than Abraham and still sit near the end of the Old Testament; Ruth takes place during the judges but was written later; several of Paul\'s letters predate the Gospels that come before them in the table of contents.'],
        ['Confusing "Minor Prophet" with "less important prophecy"', '"Minor" describes the length of the book in pages, not its theological weight. Micah, with just seven chapters, contains one of the most-quoted messianic prophecies in the Old Testament (Micah 5:2).'],
        ["Treating a book's section as if it described its entire content", 'A "historical" book can contain poetry (Deborah\'s song in Judges 5), and a "prophetic" book can contain extended narrative (Isaiah 36–39, almost all of Jonah).'],
        ["Thinking the table-of-contents order is the best reading order for a beginner", 'The table of contents groups by genre, not by pedagogical ease; reading straight through from Genesis to Revelation without guidance often discourages a new reader long before reaching the New Testament.'],
        ['Ignoring that a different, older Hebrew order exists', 'Assuming the order used in English Bibles is "the" original order of Scripture ignores that the Jewish tradition that produced these books organizes them differently, ending on a different book altogether.']
      ] }
    ]
  },

  ejercicios: {
    es: [
      'Sin ver el índice, nombra las cinco secciones del Antiguo Testamento en orden y un libro de ejemplo de cada una.',
      'Explica por qué Job puede narrar hechos muy antiguos y estar, sin embargo, colocado casi al final del Antiguo Testamento.',
      'Busca Isaías 36–39 y Salmos 78. ¿Qué género "no esperado para su sección" encuentras en cada uno?',
      'Ordena de memoria las cuatro secciones del Nuevo Testamento y explica el criterio real con que se ordenaron las cartas de Pablo.',
      'Caso para resolver: alguien en tu iglesia argumenta que "el Antiguo Testamento termina con Malaquías anunciando a Elías, y por eso ese orden fue puesto directamente por Dios como una profecía escondida en el índice mismo". Explica en tres o cuatro frases qué parte de esa afirmación es correcta (el contenido profético) y qué parte va más allá de lo que el texto puede sostener (el orden editorial).',
      'Compara el final del Tanaj hebreo (2 Crónicas 36:22-23) con el final del Antiguo Testamento cristiano (Malaquías 4:5-6). Escribe en un párrafo qué tono deja cada final en el lector, sin decidir cuál es "el correcto".'
    ],
    en: [
      'Without looking at the table of contents, name the five sections of the Old Testament in order, with one example book from each.',
      'Explain why Job can narrate very ancient events and yet sit near the end of the Old Testament.',
      'Look up Isaiah 36–39 and Psalm 78. What "unexpected for its section" genre do you find in each?',
      "From memory, order the four sections of the New Testament and explain the actual criterion used to order Paul's letters.",
      'Case to work through: someone at your church argues that "the Old Testament ends with Malachi announcing Elijah, so that order was put there directly by God as a hidden prophecy in the table of contents itself." In three or four sentences, explain which part of that claim is accurate (the prophetic content) and which part goes beyond what the text can support (the editorial ordering).',
      "Compare the ending of the Hebrew Tanakh (2 Chronicles 36:22-23) with the ending of the Christian Old Testament (Malachi 4:5-6). Write a paragraph on what tone each ending leaves with the reader, without deciding which one is \"the correct one.\""
    ]
  },

  transferencia: {
    es: '¿Puedes explicarle a alguien, sin ver el índice, cómo están organizadas las dos partes de la Biblia, en qué se diferencia del orden hebreo original, y por qué el orden de los libros no sigue la fecha en que se escribieron? Si te cuesta, repasa antes de avanzar.',
    en: "Can you explain to someone, without looking at the table of contents, how the two parts of the Bible are organized, how that differs from the original Hebrew order, and why the order of the books doesn't follow the date they were written? If it's hard, review before moving on."
  },

  fuentes: [
    'Tomás de la Fuente, <i>Claves de interpretación bíblica</i>, Casa Bautista de Publicaciones — cap. 9, "El propósito, el plan y las limitaciones de cada Escritura".',
    'Jesse Lyman Hurlbut, <i>Historia de la Iglesia Cristiana</i> — antecedentes sobre la Septuaginta y su recepción en la iglesia primitiva.',
    'Referencias bíblicas en Reina-Valera 1960.'
  ],

  quiz: {
    es: [
      { p: '¿Cuántos libros tiene el Pentateuco y cómo se llama también esa sección?',
        opciones: ['5 libros; la Ley', '12 libros; los Históricos', '5 libros; los Profetas mayores', '7 libros; los Sapienciales'],
        correcta: 0, tema: 'Organización del Antiguo Testamento',
        explica: 'Génesis a Deuteronomio: 5 libros, conocidos como la Ley o Torá.' },
      { p: '¿Cuáles son los tres bloques del Tanaj hebreo?',
        opciones: ['Ley, Historia, Poesía', "Torá, Nevi'im, Ketuvim", 'Pentateuco, Profetas mayores, Profetas menores', 'Génesis, Éxodo, Levítico'],
        correcta: 1, tema: 'Orden hebreo original',
        explica: "El Tanaj se divide en Torá (Ley), Nevi'im (Profetas) y Ketuvim (Escritos), un orden distinto al que usan las Biblias en español." },
      { p: '¿En qué libro termina el Tanaj hebreo, y en qué libro termina el Antiguo Testamento cristiano?',
        opciones: ['Ambos terminan en Malaquías', 'El Tanaj termina en 2 Crónicas; el cristiano, en Malaquías', 'El Tanaj termina en Malaquías; el cristiano, en 2 Crónicas', 'Ambos terminan en Ester'],
        correcta: 1, tema: 'Orden hebreo original',
        explica: 'El Tanaj cierra con el decreto de Ciro en 2 Crónicas 36; el Antiguo Testamento cristiano, ordenado según la Septuaginta, cierra con Malaquías.' },
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
        explica: 'La historiografía bíblica narra con propósito teológico explícito: qué hizo Dios y cómo respondió el pueblo, no solo qué pasó.' },
      { p: 'Según la postura moderada de este Instituto sobre el orden final de los libros, ¿qué es lo plenamente autoritativo?',
        opciones: ['El orden exacto de los libros en el índice', 'El contenido teológico del texto, independientemente del orden editorial', 'Solo el orden hebreo, por ser más antiguo', 'Solo el orden griego, por ser el que usa la iglesia'],
        correcta: 1, tema: 'Significado del orden canónico',
        explica: 'El Instituto distingue entre el contenido inspirado del texto y el orden editorial humano en que se organizaron los libros, sin darle a este último el mismo peso doctrinal.' },
      { p: '¿Por qué "profeta menor" no significa "profecía de menor importancia"?',
        opciones: ['Porque en realidad no hay diferencia de tamaño entre los libros', 'Porque "menor" se refiere a la extensión del libro, no a su peso teológico', 'Porque los profetas menores no son inspirados', 'Porque el término es un error de traducción sin base'],
        correcta: 1, tema: 'Género y sección',
        explica: 'Miqueas, con apenas siete capítulos, contiene una de las profecías mesiánicas más citadas del Antiguo Testamento (Miqueas 5:2).' },
      { p: '¿Qué traducción antigua fijó el orden de cinco y cuatro secciones que usan las Biblias cristianas en español?',
        opciones: ['La Vulgata latina', 'La Septuaginta griega', 'El Targum arameo', 'La Peshitta siríaca'],
        correcta: 1, tema: 'Origen del orden actual',
        explica: 'La Septuaginta, traducción griega del Antiguo Testamento hecha en Alejandría, reagrupó los libros por género y ese orden pasó a las Biblias cristianas.' }
    ],
    en: [
      { p: 'How many books does the Pentateuch have, and what is that section also called?',
        opciones: ['5 books; the Law', '12 books; the Historical books', '5 books; the Major Prophets', '7 books; the Wisdom books'],
        correcta: 0, tema: 'Old Testament organization',
        explica: 'Genesis through Deuteronomy: 5 books, known as the Law or Torah.' },
      { p: "What are the three blocks of the Hebrew Tanakh?",
        opciones: ['Law, History, Poetry', "Torah, Nevi'im, Ketuvim", 'Pentateuch, Major Prophets, Minor Prophets', 'Genesis, Exodus, Leviticus'],
        correcta: 1, tema: 'Original Hebrew order',
        explica: "The Tanakh is divided into Torah (Law), Nevi'im (Prophets), and Ketuvim (Writings), an order different from the one used in English Bibles." },
      { p: 'Which book does the Hebrew Tanakh end on, and which book does the Christian Old Testament end on?',
        opciones: ['Both end on Malachi', 'The Tanakh ends on 2 Chronicles; the Christian one on Malachi', 'The Tanakh ends on Malachi; the Christian one on 2 Chronicles', 'Both end on Esther'],
        correcta: 1, tema: 'Original Hebrew order',
        explica: "The Tanakh closes with Cyrus's decree in 2 Chronicles 36; the Christian Old Testament, ordered according to the Septuagint, closes with Malachi." },
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
        explica: "Biblical historiography narrates with explicit theological purpose: what God did and how the people responded, not merely what happened." },
      { p: "According to this Institute's moderate position on the final ordering of the books, what carries full authority?",
        opciones: ['The exact order of the books in the table of contents', "The text's theological content, regardless of the editorial order", 'Only the Hebrew order, because it is older', 'Only the Greek order, because it is the one the church uses'],
        correcta: 1, tema: 'Meaning of the canonical order',
        explica: "The Institute distinguishes between the inspired content of the text and the human editorial order in which the books were arranged, without giving the latter the same doctrinal weight." },
      { p: 'Why doesn\'t "Minor Prophet" mean "less important prophecy"?',
        opciones: ['Because there is actually no size difference between the books', "Because \"minor\" refers to the book's length, not its theological weight", 'Because the Minor Prophets are not inspired', 'Because the term is a translation error with no basis'],
        correcta: 1, tema: 'Genre and section',
        explica: 'Micah, with just seven chapters, contains one of the most-quoted messianic prophecies in the Old Testament (Micah 5:2).' },
      { p: 'Which ancient translation set the five-and-four-section order used by English Bibles?',
        opciones: ['The Latin Vulgate', 'The Greek Septuagint', 'The Aramaic Targum', 'The Syriac Peshitta'],
        correcta: 1, tema: 'Origin of the current order',
        explica: 'The Septuagint, the Greek translation of the Old Testament made in Alexandria, regrouped the books by genre, and that order passed into Christian Bibles.' }
    ]
  }
});
