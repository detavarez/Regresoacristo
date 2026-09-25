window.CURRICULO = {
  version: 'Ver-001',
  umbralAprobacion: 70,
  niveles: [
    {
      id: 1,
      nombre: 'Nivel 1 — Fundamental',
      nombreEn: 'Level 1 — Foundational',
      lema: 'Conocer la Biblia: qué es, qué contiene, qué historia cuenta y cómo empezar a leerla bien.',
      lemaEn: 'Know the Bible: what it is, what it contains, what story it tells, and how to start reading it well.',
      capacidad: 'Al terminar, el estudiante reconoce, identifica y recuerda: puede ubicar cualquier libro, personaje o acontecimiento dentro de la historia bíblica y explicar el evangelio con sus propias palabras.',
      modulos: [
        {
          id: '1.1', area: 'Panorama bíblico', areaEn: 'Bible overview', titulo: 'La historia completa de la Biblia', tituloEn: 'The whole story of the Bible',
          lecciones: [
            { n: 101, t: '¿Qué es la Biblia? Composición, autores, idiomas y unidad', ten: 'What is the Bible? Composition, authors, languages, and unity', libros: '2 Ti 3:16-17; 2 P 1:20-21', tipo: 'doctrinal' },
            { n: 102, t: 'Cómo está organizada: Antiguo y Nuevo Testamento, secciones y géneros', ten: 'How it is organized: Old and New Testament, sections, and genres', libros: 'Lc 24:44', tipo: 'panorama' },
            { n: 103, t: 'La historia bíblica en seis actos: el mapa completo', ten: 'The biblical story in six acts: the whole map', libros: 'Gn 1–3; Gn 12; Lc 24; Ap 21–22', tipo: 'panorama' },
            { n: 104, t: 'Acto 1 — Creación: un mundo bueno y un ser humano con encargo', ten: 'Act 1 — Creation: a good world and a human being with a task', libros: 'Gn 1–2', tipo: 'narrativa' },
            { n: 105, t: 'Acto 2 — Caída: qué se rompió y hasta dónde llegó la ruptura', ten: 'Act 2 — Fall: what broke, and how far the rupture went', libros: 'Gn 3; Ro 5:12-21', tipo: 'narrativa' },
            { n: 106, t: 'Acto 3 — Israel: promesa, pacto, fracaso y esperanza', ten: 'Act 3 — Israel: promise, covenant, failure, and hope', libros: 'Gn 12:1-3; Éx 19:3-6; 2 S 7', tipo: 'narrativa' },
            { n: 107, t: 'Acto 4 — Cristo: el cumplimiento que Israel no pudo lograr', ten: 'Act 4 — Christ: the fulfillment Israel could not achieve', libros: 'Jn 1:1-18; 1 Co 15:3-4', tipo: 'doctrinal' },
            { n: 108, t: 'Actos 5 y 6 — Iglesia y nueva creación: dónde estamos y hacia dónde va', ten: 'Acts 5 and 6 — Church and new creation: where we are and where it\'s headed', libros: 'Hch 1:8; Ap 21:1-8', tipo: 'doctrinal' }
          ]
        },
        {
          id: '1.2', area: 'Contexto', areaEn: 'Context', titulo: 'Geografía y cronología básicas', tituloEn: 'Basic geography and chronology',
          lecciones: [
            { n: 109, t: 'El mapa del mundo bíblico: de Mesopotamia a Roma', ten: 'The map of the biblical world: from Mesopotamia to Rome', libros: '—', tipo: 'historica' },
            { n: 110, t: 'Línea de tiempo del Antiguo Testamento', ten: 'Old Testament timeline', libros: '—', tipo: 'historica' },
            { n: 111, t: 'Línea de tiempo del Nuevo Testamento', ten: 'New Testament timeline', libros: '—', tipo: 'historica' },
            { n: 112, t: 'Los cuatro siglos entre los Testamentos: introducción', ten: 'The four centuries between the Testaments: an introduction', libros: '—', tipo: 'historica' }
          ]
        },
        {
          id: '1.3', area: 'Panorama bíblico', areaEn: 'Bible overview', titulo: 'Los libros de la Biblia, uno por uno', tituloEn: 'The books of the Bible, one by one',
          lecciones: [
            { n: 113, t: 'Pentateuco: qué hace cada uno de los cinco libros', ten: 'Pentateuch: what each of the five books does', libros: 'Gn–Dt', tipo: 'panorama' },
            { n: 114, t: 'Libros históricos: de Josué a Ester', ten: 'Historical books: from Joshua to Esther', libros: 'Jos–Est', tipo: 'panorama' },
            { n: 115, t: 'Poéticos y sapienciales: Job a Cantares', ten: 'Poetic and wisdom books: Job through Song of Songs', libros: 'Job–Cnt', tipo: 'panorama' },
            { n: 116, t: 'Profetas mayores: Isaías a Daniel', ten: 'Major Prophets: Isaiah through Daniel', libros: 'Is–Dn', tipo: 'panorama' },
            { n: 117, t: 'Profetas menores: los doce', ten: 'Minor Prophets: the Twelve', libros: 'Os–Mal', tipo: 'panorama' },
            { n: 118, t: 'Evangelios y Hechos: cuatro retratos y una continuación', ten: 'Gospels and Acts: four portraits and a sequel', libros: 'Mt–Hch', tipo: 'panorama' },
            { n: 119, t: 'Cartas de Pablo: a quién, por qué y en qué orden', ten: 'Paul\'s letters: to whom, why, and in what order', libros: 'Ro–Flm', tipo: 'panorama' },
            { n: 120, t: 'Epístolas generales y Apocalipsis', ten: 'General epistles and Revelation', libros: 'He–Ap', tipo: 'panorama' },
            { n: 121, t: 'Cómo ubicar un pasaje: capítulos, versículos y referencias cruzadas', ten: 'How to locate a passage: chapters, verses, and cross references', libros: '—', tipo: 'herramientas' },
            { n: 122, t: 'Libros apócrifos y deuterocanónicos: qué son y por qué no están en esta Biblia', ten: 'Apocryphal and deuterocanonical books: what they are and why they\'re not in this Bible', libros: '—', tipo: 'doctrinal' }
          ]
        },
        {
          id: '1.4', area: 'Panorama bíblico', areaEn: 'Bible overview', titulo: 'Personajes y acontecimientos clave', tituloEn: 'Key people and events',
          lecciones: [
            { n: 123, t: 'Adán, Caín, Noé y Babel: la humanidad antes de Abraham', ten: 'Adam, Cain, Noah, and Babel: humanity before Abraham', libros: 'Gn 4–11', tipo: 'narrativa' },
            { n: 124, t: 'Abraham, Isaac y Jacob: la familia de la promesa', ten: 'Abraham, Isaac, and Jacob: the family of promise', libros: 'Gn 12–36', tipo: 'narrativa' },
            { n: 125, t: 'José y la bajada a Egipto', ten: 'Joseph and the journey down to Egypt', libros: 'Gn 37–50', tipo: 'narrativa' },
            { n: 126, t: 'Moisés, el Éxodo y el Sinaí', ten: 'Moses, the Exodus, and Sinai', libros: 'Éx 1–20', tipo: 'narrativa' },
            { n: 127, t: 'Josué, los jueces y Samuel', ten: 'Joshua, the judges, and Samuel', libros: 'Jos 1; Jue 2; 1 S 8', tipo: 'narrativa' },
            { n: 128, t: 'Saúl, David y Salomón', ten: 'Saul, David, and Solomon', libros: '1–2 S; 1 R 1–11', tipo: 'narrativa' },
            { n: 129, t: 'El reino dividido, los profetas y el exilio', ten: 'The divided kingdom, the prophets, and the exile', libros: '1 R 12; 2 R 17, 25', tipo: 'narrativa' },
            { n: 130, t: 'El retorno: Esdras, Nehemías y la espera', ten: 'The return: Ezra, Nehemiah, and the waiting', libros: 'Esd 1; Neh 1; Mal 4', tipo: 'narrativa' },
            { n: 131, t: 'Jesús: nacimiento, ministerio, muerte y resurrección', ten: 'Jesus: birth, ministry, death, and resurrection', libros: 'Lc 1–2; Mr 1; Jn 19–20', tipo: 'narrativa' },
            { n: 132, t: 'Los apóstoles y la expansión de la Iglesia', ten: 'The apostles and the spread of the church', libros: 'Hch 2; 9; 13', tipo: 'narrativa' }
          ]
        },
        {
          id: '1.5', area: 'Doctrina', areaEn: 'Doctrine', titulo: 'Doctrina introductoria', tituloEn: 'Introductory doctrine',
          lecciones: [
            { n: 133, t: 'Dios: quién dice la Biblia que es', ten: 'God: who the Bible says he is', libros: 'Éx 3:14; 34:6-7; Is 6', tipo: 'doctrinal' },
            { n: 134, t: 'La Trinidad: introducción a un Dios en tres personas', ten: 'The Trinity: an introduction to one God in three persons', libros: 'Mt 28:19; 2 Co 13:14', tipo: 'doctrinal' },
            { n: 135, t: 'Jesucristo: plenamente Dios y plenamente hombre', ten: 'Jesus Christ: fully God and fully man', libros: 'Jn 1:1-14; Fil 2:5-11', tipo: 'doctrinal' },
            { n: 136, t: 'El Espíritu Santo: persona, no fuerza', ten: 'The Holy Spirit: a person, not a force', libros: 'Jn 14–16; Hch 2', tipo: 'doctrinal' },
            { n: 137, t: 'El ser humano: imagen de Dios y realidad del pecado', ten: 'The human being: image of God and the reality of sin', libros: 'Gn 1:26-27; Ro 3:9-20', tipo: 'doctrinal' },
            { n: 138, t: 'La salvación: el evangelio explicado paso a paso', ten: 'Salvation: the gospel explained step by step', libros: 'Ef 2:1-10; Ro 3–5', tipo: 'doctrinal' },
            { n: 139, t: 'La Iglesia: qué es, para qué existe, cómo se reúne', ten: 'The church: what it is, why it exists, how it gathers', libros: 'Hch 2:42-47; Ef 4', tipo: 'doctrinal' },
            { n: 140, t: 'Las últimas cosas: introducción y advertencia sobre la especulación', ten: 'The last things: an introduction, and a warning about speculation', libros: '1 Ts 4:13-18; Ap 21–22', tipo: 'doctrinal' },
            { n: 141, t: 'Ángeles, demonios y el mundo espiritual: lo que el texto afirma y lo que no', ten: 'Angels, demons, and the spiritual world: what the text affirms and what it doesn\'t', libros: 'Job 1; Ef 6:10-18', tipo: 'doctrinal' },
            { n: 142, t: 'Oración, ayuno, adoración y ofrenda: práctica cristiana básica', ten: 'Prayer, fasting, worship, and giving: basic Christian practice', libros: 'Mt 6:1-18', tipo: 'ministerial' }
          ]
        },
        {
          id: '1.6', area: 'Hermenéutica', areaEn: 'Hermeneutics', titulo: 'Primeros principios de interpretación', tituloEn: 'First principles of interpretation',
          lecciones: [
            { n: 143, t: 'Qué significa interpretar y por qué no basta con "leer y ya"', ten: 'What it means to interpret, and why "just reading" isn\'t enough', libros: 'Hch 8:30-31; Neh 8:8', tipo: 'hermeneutica' },
            { n: 144, t: 'El contexto: la primera y más importante regla', ten: 'Context: the first and most important rule', libros: '—', tipo: 'hermeneutica' },
            { n: 145, t: 'Significado y aplicación: dos cosas distintas', ten: 'Meaning and application: two different things', libros: '—', tipo: 'hermeneutica' },
            { n: 146, t: 'Errores frecuentes del lector principiante', ten: 'Common mistakes of the beginning reader', libros: '—', tipo: 'hermeneutica' },
            { n: 147, t: 'Cada género se lee distinto: primera aproximación', ten: 'Every genre is read differently: a first approach', libros: '—', tipo: 'hermeneutica' },
            { n: 148, t: 'Cómo preparar un devocional personal responsable', ten: 'How to prepare a responsible personal devotional', libros: 'Sal 1; Jos 1:8', tipo: 'ministerial' }
          ]
        },
        {
          id: '1.7', area: 'Herramientas', areaEn: 'Tools', titulo: 'Vocabulario y herramientas de estudio', tituloEn: 'Vocabulary and study tools',
          lecciones: [
            { n: 149, t: 'Vocabulario bíblico esencial: cien términos que hay que dominar', ten: 'Essential Bible vocabulary: a hundred terms to master', libros: '—', tipo: 'herramientas' },
            { n: 150, t: 'Traducciones al español: RVR1960, NVI, LBLA y por qué difieren', ten: 'Spanish Bible translations: RVR1960, NVI, LBLA, and why they differ', libros: '—', tipo: 'herramientas' },
            { n: 151, t: 'Concordancia, diccionario bíblico y Biblia de estudio: cómo se usan', ten: 'Concordance, Bible dictionary, and study Bible: how to use them', libros: '—', tipo: 'herramientas' },
            { n: 152, t: 'Hebreo, arameo y griego: nociones útiles sin saber los idiomas', ten: 'Hebrew, Aramaic, and Greek: useful notions without knowing the languages', libros: '—', tipo: 'herramientas' },
            { n: 153, t: 'Cómo tomar apuntes y construir tu propio archivo de estudio', ten: 'How to take notes and build your own study file', libros: '—', tipo: 'herramientas' }
          ]
        },
        {
          id: '1.8', area: 'Evaluación', areaEn: 'Assessment', titulo: 'Cierre de nivel', tituloEn: 'Level closing',
          lecciones: [
            { n: 154, t: 'Repaso integrador del Nivel 1', ten: 'Level 1 integrative review', libros: '—', tipo: 'repaso' },
            { n: 155, t: 'Examen de dominio — Nivel 1', ten: 'Mastery exam — Level 1', libros: '—', tipo: 'examen' }
          ]
        }
      ]
    },

    {
      id: 2,
      nombre: 'Nivel 2 — Desarrollo',
      nombreEn: 'Level 2 — Development',
      lema: 'Comprender: contexto, géneros, estructura de los libros y las primeras herramientas de interpretación.',
      lemaEn: 'Understand: context, genres, book structure, and the first tools of interpretation.',
      capacidad: 'Al terminar, el estudiante explica, relaciona y distingue: puede situar un pasaje en su contexto histórico y literario y decir qué tipo de texto está leyendo.',
      modulos: [
        {
          id: '2.1', area: 'Bibliología', areaEn: 'Bibliology', titulo: 'De dónde viene la Biblia', tituloEn: 'Where the Bible comes from',
          lecciones: [
            { n: 201, t: 'Revelación: general y especial', ten: 'Revelation: general and special', libros: 'Sal 19; He 1:1-3', tipo: 'doctrinal' },
            { n: 202, t: 'Inspiración: qué afirma el texto sobre sí mismo y qué modelos existen', ten: 'Inspiration: what the text claims about itself, and what models exist', libros: '2 Ti 3:16; 2 P 1:21', tipo: 'doctrinal' },
            { n: 203, t: 'El canon del Antiguo Testamento: cómo se reconoció', ten: 'The Old Testament canon: how it was recognized', libros: '—', tipo: 'historica' },
            { n: 204, t: 'El canon del Nuevo Testamento: criterios y proceso', ten: 'The New Testament canon: criteria and process', libros: '—', tipo: 'historica' },
            { n: 205, t: 'Manuscritos y transmisión: cómo llegó el texto hasta nosotros', ten: 'Manuscripts and transmission: how the text reached us', libros: '—', tipo: 'historica' },
            { n: 206, t: 'Variantes textuales: qué son, cuántas importan y cuáles no', ten: 'Textual variants: what they are, which ones matter, and which don\'t', libros: 'Mr 16:9-20; Jn 7:53–8:11', tipo: 'hermeneutica' },
            { n: 207, t: 'Teoría de la traducción: equivalencia formal y dinámica', ten: 'Translation theory: formal and dynamic equivalence', libros: '—', tipo: 'herramientas' },
            { n: 208, t: 'Autoridad, suficiencia e inerrancia: posturas dentro del evangelicalismo', ten: 'Authority, sufficiency, and inerrancy: positions within evangelicalism', libros: 'Sal 119; Jn 10:35', tipo: 'debate' }
          ]
        },
        {
          id: '2.2', area: 'Contexto', areaEn: 'Context', titulo: 'El mundo detrás del texto', tituloEn: 'The world behind the text',
          lecciones: [
            { n: 209, t: 'El Antiguo Cercano Oriente: cultura, religión y leyes comparadas', ten: 'The Ancient Near East: culture, religion, and comparative law', libros: '—', tipo: 'historica' },
            { n: 210, t: 'Egipto, Asiria, Babilonia y Persia en la historia bíblica', ten: 'Egypt, Assyria, Babylon, and Persia in biblical history', libros: '—', tipo: 'historica' },
            { n: 211, t: 'Vida cotidiana en Israel: familia, tierra, honor y economía', ten: 'Daily life in Israel: family, land, honor, and economy', libros: 'Rt 2–4', tipo: 'historica' },
            { n: 212, t: 'El período intertestamentario: de Alejandro a los Macabeos', ten: 'The intertestamental period: from Alexander to the Maccabees', libros: '—', tipo: 'historica' },
            { n: 213, t: 'El judaísmo del Segundo Templo: fariseos, saduceos, esenios, zelotes', ten: 'Second Temple Judaism: Pharisees, Sadducees, Essenes, Zealots', libros: 'Mt 23; Hch 23:6-8', tipo: 'historica' },
            { n: 214, t: 'El mundo grecorromano del Nuevo Testamento', ten: 'The Greco-Roman world of the New Testament', libros: 'Hch 17:16-34', tipo: 'historica' },
            { n: 215, t: 'Sinagoga, templo, sacrificios y fiestas', ten: 'Synagogue, temple, sacrifices, and feasts', libros: 'Lv 23; Lc 4:16-21', tipo: 'historica' },
            { n: 216, t: 'Geografía que cambia el sentido del texto', ten: 'Geography that changes the meaning of the text', libros: 'Jn 4:1-6', tipo: 'historica' }
          ]
        },
        {
          id: '2.3', area: 'Hermenéutica', areaEn: 'Hermeneutics', titulo: 'Géneros literarios', tituloEn: 'Literary genres',
          lecciones: [
            { n: 217, t: 'Narrativa: cómo enseña una historia sin decir la moraleja', ten: 'Narrative: how a story teaches without stating the moral', libros: 'Jue 19–21', tipo: 'hermeneutica' },
            { n: 218, t: 'Ley: los mandamientos dentro del pacto', ten: 'Law: the commandments within the covenant', libros: 'Éx 20; Lv 19', tipo: 'hermeneutica' },
            { n: 219, t: 'Poesía hebrea: paralelismo, imagen y emoción', ten: 'Hebrew poetry: parallelism, imagery, and emotion', libros: 'Sal 22; 23', tipo: 'hermeneutica' },
            { n: 220, t: 'Literatura sapiencial: proverbio no es promesa', ten: 'Wisdom literature: a proverb is not a promise', libros: 'Pr 22:6; Ec 1', tipo: 'hermeneutica' },
            { n: 221, t: 'Profecía: predicción, denuncia y cumplimiento', ten: 'Prophecy: prediction, indictment, and fulfillment', libros: 'Am 5; Is 7', tipo: 'hermeneutica' },
            { n: 222, t: 'Evangelio: biografía antigua con propósito teológico', ten: 'Gospel: ancient biography with a theological purpose', libros: 'Jn 20:30-31', tipo: 'hermeneutica' },
            { n: 223, t: 'Epístola: cartas reales a situaciones reales', ten: 'Epistle: real letters to real situations', libros: '1 Co 1:10-17', tipo: 'hermeneutica' },
            { n: 224, t: 'Apocalíptica: por qué no se lee como el periódico', ten: 'Apocalyptic: why it isn\'t read like the newspaper', libros: 'Dn 7; Ap 12', tipo: 'hermeneutica' }
          ]
        },
        {
          id: '2.4', area: 'Antiguo Testamento', areaEn: 'Old Testament', titulo: 'Pentateuco', tituloEn: 'Pentateuch',
          lecciones: [
            { n: 225, t: 'Génesis 1–11: los orígenes y sus preguntas interpretativas', ten: 'Genesis 1–11: origins and their interpretive questions', libros: 'Gn 1–11', tipo: 'debate' },
            { n: 226, t: 'Génesis 12–50: los patriarcas y la promesa', ten: 'Genesis 12–50: the patriarchs and the promise', libros: 'Gn 12–50', tipo: 'narrativa' },
            { n: 227, t: 'Éxodo: liberación, pacto y presencia', ten: 'Exodus: liberation, covenant, and presence', libros: 'Éx', tipo: 'narrativa' },
            { n: 228, t: 'Levítico: santidad, sacrificio y sacerdocio', ten: 'Leviticus: holiness, sacrifice, and priesthood', libros: 'Lv', tipo: 'doctrinal' },
            { n: 229, t: 'Números: la generación del desierto', ten: 'Numbers: the wilderness generation', libros: 'Nm', tipo: 'narrativa' },
            { n: 230, t: 'Deuteronomio: el pacto renovado antes de entrar', ten: 'Deuteronomy: the covenant renewed before entering', libros: 'Dt', tipo: 'doctrinal' },
            { n: 231, t: 'Autoría del Pentateuco: la tradición mosaica y las teorías críticas', ten: 'Authorship of the Pentateuch: the Mosaic tradition and critical theories', libros: '—', tipo: 'debate' },
            { n: 232, t: 'La Ley y el cristiano: continuidad y discontinuidad', ten: 'The Law and the Christian: continuity and discontinuity', libros: 'Mt 5:17-20; Ro 10:4; Gá 3', tipo: 'debate' }
          ]
        },
        {
          id: '2.5', area: 'Antiguo Testamento', areaEn: 'Old Testament', titulo: 'Historia de Israel', tituloEn: 'History of Israel',
          lecciones: [
            { n: 233, t: 'Josué: conquista, tierra y las preguntas éticas del herem', ten: 'Joshua: conquest, land, and the ethical questions of the herem', libros: 'Jos', tipo: 'debate' },
            { n: 234, t: 'Jueces: el ciclo de la apostasía', ten: 'Judges: the cycle of apostasy', libros: 'Jue', tipo: 'narrativa' },
            { n: 235, t: 'Rut: providencia en la vida ordinaria', ten: 'Ruth: providence in ordinary life', libros: 'Rt', tipo: 'narrativa' },
            { n: 236, t: '1–2 Samuel: del juez al rey', ten: '1–2 Samuel: from judge to king', libros: '1–2 S', tipo: 'narrativa' },
            { n: 237, t: '1–2 Reyes: la evaluación teológica de la monarquía', ten: '1–2 Kings: the theological evaluation of the monarchy', libros: '1–2 R', tipo: 'narrativa' },
            { n: 238, t: '1–2 Crónicas: la misma historia contada con otro propósito', ten: '1–2 Chronicles: the same history told for a different purpose', libros: '1–2 Cr', tipo: 'hermeneutica' },
            { n: 239, t: 'Esdras y Nehemías: reconstruir pueblo, muro e identidad', ten: 'Ezra and Nehemiah: rebuilding a people, a wall, and an identity', libros: 'Esd; Neh', tipo: 'narrativa' },
            { n: 240, t: 'Ester: el nombre de Dios ausente y su providencia presente', ten: 'Esther: God\'s name absent, his providence present', libros: 'Est', tipo: 'narrativa' }
          ]
        },
        {
          id: '2.6', area: 'Antiguo Testamento', areaEn: 'Old Testament', titulo: 'Poéticos y sapienciales', tituloEn: 'Poetic and wisdom books',
          lecciones: [
            { n: 241, t: 'Job: el sufrimiento del justo y el silencio de las respuestas fáciles', ten: 'Job: the suffering of the righteous and the silence of easy answers', libros: 'Job', tipo: 'doctrinal' },
            { n: 242, t: 'Salmos: tipos, usos y cómo orarlos', ten: 'Psalms: types, uses, and how to pray them', libros: 'Sal', tipo: 'hermeneutica' },
            { n: 243, t: 'Salmos imprecatorios y mesiánicos', ten: 'Imprecatory and messianic psalms', libros: 'Sal 2; 22; 109', tipo: 'debate' },
            { n: 244, t: 'Proverbios: sabiduría práctica y sus límites', ten: 'Proverbs: practical wisdom and its limits', libros: 'Pr', tipo: 'hermeneutica' },
            { n: 245, t: 'Eclesiastés: el realismo bajo el sol', ten: 'Ecclesiastes: realism under the sun', libros: 'Ec', tipo: 'doctrinal' },
            { n: 246, t: 'Cantares: historia de interpretación y lectura responsable', ten: 'Song of Songs: history of interpretation and responsible reading', libros: 'Cnt', tipo: 'debate' }
          ]
        },
        {
          id: '2.7', area: 'Hermenéutica', areaEn: 'Hermeneutics', titulo: 'Hermenéutica I: método', tituloEn: 'Hermeneutics I: method',
          lecciones: [
            { n: 247, t: 'El método completo: observar, interpretar, aplicar', ten: 'The full method: observe, interpret, apply', libros: '—', tipo: 'hermeneutica' },
            { n: 248, t: 'Contexto inmediato, del libro y canónico', ten: 'Immediate, book-level, and canonical context', libros: '—', tipo: 'hermeneutica' },
            { n: 249, t: 'Palabras: uso, campo semántico y falacia etimológica', ten: 'Words: usage, semantic range, and the etymological fallacy', libros: '—', tipo: 'hermeneutica' },
            { n: 250, t: 'Pasajes paralelos y comparación de Escritura con Escritura', ten: 'Parallel passages and comparing Scripture with Scripture', libros: '—', tipo: 'hermeneutica' },
            { n: 251, t: 'Figuras literarias y modismos hebreos', ten: 'Figures of speech and Hebrew idioms', libros: '—', tipo: 'hermeneutica' },
            { n: 252, t: 'Supuestas contradicciones: cómo se examinan con honestidad', ten: 'Alleged contradictions: how to examine them honestly', libros: '—', tipo: 'apologetica' }
          ]
        },
        {
          id: '2.8', area: 'Teología bíblica', areaEn: 'Biblical theology', titulo: 'Temas que atraviesan toda la Biblia', tituloEn: 'Themes that run through the whole Bible',
          lecciones: [
            { n: 253, t: 'Pacto: la estructura de la relación con Dios', ten: 'Covenant: the structure of the relationship with God', libros: 'Gn 15; Éx 24; Jer 31', tipo: 'doctrinal' },
            { n: 254, t: 'Reino de Dios: ya y todavía no', ten: 'Kingdom of God: already and not yet', libros: 'Mr 1:15; Mt 13', tipo: 'doctrinal' },
            { n: 255, t: 'Presencia de Dios: Edén, tabernáculo, templo, Cristo, Iglesia, nueva creación', ten: 'God\'s presence: Eden, tabernacle, temple, Christ, church, new creation', libros: 'Éx 40; Jn 1:14; Ap 21', tipo: 'doctrinal' },
            { n: 256, t: 'Sacrificio y expiación en toda la Escritura', ten: 'Sacrifice and atonement throughout Scripture', libros: 'Lv 16; He 9–10', tipo: 'doctrinal' },
            { n: 257, t: 'Mesías: el hilo de la promesa', ten: 'Messiah: the thread of the promise', libros: 'Gn 3:15; 2 S 7; Is 53', tipo: 'doctrinal' },
            { n: 258, t: 'Pueblo de Dios: Israel y la Iglesia', ten: 'People of God: Israel and the church', libros: 'Ro 9–11; Ef 2:11-22', tipo: 'debate' }
          ]
        },
        {
          id: '2.9', area: 'Evaluación', areaEn: 'Assessment', titulo: 'Cierre de nivel', tituloEn: 'Level closing',
          lecciones: [
            { n: 259, t: 'Repaso integrador del Nivel 2', ten: 'Level 2 integrative review', libros: '—', tipo: 'repaso' },
            { n: 260, t: 'Examen de dominio — Nivel 2', ten: 'Mastery exam — Level 2', libros: '—', tipo: 'examen' }
          ]
        }
      ]
    },

    {
      id: 3,
      nombre: 'Nivel 3 — Profundización',
      nombreEn: 'Level 3 — Deepening',
      lema: 'Analizar: exégesis, teología sistemática, historia de la interpretación y comparación de posturas.',
      lemaEn: 'Analyze: exegesis, systematic theology, history of interpretation, and comparing positions.',
      capacidad: 'Al terminar, el estudiante analiza, compara, evalúa y argumenta: puede trabajar un pasaje difícil, exponer varias posiciones con justicia y defender una conclusión.',
      modulos: [
        {
          id: '3.1', area: 'Antiguo Testamento', areaEn: 'Old Testament', titulo: 'Los profetas', tituloEn: 'The prophets',
          lecciones: [
            { n: 301, t: 'Qué es un profeta y cómo funciona el oráculo', ten: 'What a prophet is and how the oracle works', libros: 'Dt 18:15-22', tipo: 'hermeneutica' },
            { n: 302, t: 'Isaías 1–39: juicio y el Santo de Israel', ten: 'Isaiah 1–39: judgment and the Holy One of Israel', libros: 'Is 1–39', tipo: 'exegesis' },
            { n: 303, t: 'Isaías 40–66 y los cánticos del Siervo', ten: 'Isaiah 40–66 and the Servant Songs', libros: 'Is 40–66; 52:13–53:12', tipo: 'exegesis' },
            { n: 304, t: 'Jeremías y Lamentaciones: el profeta del colapso', ten: 'Jeremiah and Lamentations: the prophet of collapse', libros: 'Jer; Lm', tipo: 'exegesis' },
            { n: 305, t: 'Ezequiel: gloria que se va y que vuelve', ten: 'Ezekiel: glory that departs and returns', libros: 'Ez 1; 10; 37; 40–48', tipo: 'exegesis' },
            { n: 306, t: 'Daniel 1–6: fidelidad en el exilio', ten: 'Daniel 1–6: faithfulness in exile', libros: 'Dn 1–6', tipo: 'narrativa' },
            { n: 307, t: 'Daniel 7–12: visiones y las grandes preguntas de fecha y cumplimiento', ten: 'Daniel 7–12: visions and the big questions of dating and fulfillment', libros: 'Dn 7–12', tipo: 'debate' },
            { n: 308, t: 'Profetas menores I: Oseas, Joel, Amós, Abdías', ten: 'Minor Prophets I: Hosea, Joel, Amos, Obadiah', libros: 'Os–Abd', tipo: 'exegesis' },
            { n: 309, t: 'Profetas menores II: Jonás, Miqueas, Nahúm, Habacuc, Sofonías', ten: 'Minor Prophets II: Jonah, Micah, Nahum, Habakkuk, Zephaniah', libros: 'Jon–Sof', tipo: 'exegesis' },
            { n: 310, t: 'Profetas menores III: Hageo, Zacarías, Malaquías', ten: 'Minor Prophets III: Haggai, Zechariah, Malachi', libros: 'Hag–Mal', tipo: 'exegesis' }
          ]
        },
        {
          id: '3.2', area: 'Nuevo Testamento', areaEn: 'New Testament', titulo: 'Evangelios y vida de Jesús', tituloEn: 'Gospels and the life of Jesus',
          lecciones: [
            { n: 311, t: 'El problema sinóptico y qué aporta cada evangelio', ten: 'The synoptic problem and what each Gospel contributes', libros: 'Mt; Mr; Lc', tipo: 'debate' },
            { n: 312, t: 'Mateo: el Mesías y el cumplimiento', ten: 'Matthew: the Messiah and fulfillment', libros: 'Mt', tipo: 'exegesis' },
            { n: 313, t: 'Marcos: el siervo que va a la cruz', ten: 'Mark: the servant on the way to the cross', libros: 'Mr', tipo: 'exegesis' },
            { n: 314, t: 'Lucas: el evangelio para los excluidos', ten: 'Luke: the gospel for the excluded', libros: 'Lc', tipo: 'exegesis' },
            { n: 315, t: 'Juan: creer y tener vida', ten: 'John: believing and having life', libros: 'Jn', tipo: 'exegesis' },
            { n: 316, t: 'El Sermón del Monte', ten: 'The Sermon on the Mount', libros: 'Mt 5–7', tipo: 'exegesis' },
            { n: 317, t: 'Las parábolas: cómo interpretarlas sin alegorizar', ten: 'The parables: how to interpret them without allegorizing', libros: 'Lc 15; Mt 13', tipo: 'hermeneutica' },
            { n: 318, t: 'Milagros: función, evidencia y objeciones', ten: 'Miracles: function, evidence, and objections', libros: 'Jn 2; Mr 5', tipo: 'apologetica' },
            { n: 319, t: 'La semana de la pasión, hora por hora', ten: 'Passion week, hour by hour', libros: 'Mt 21–27; Jn 12–19', tipo: 'exegesis' },
            { n: 320, t: 'La resurrección: los relatos, sus diferencias y su historicidad', ten: 'The resurrection: the accounts, their differences, and their historicity', libros: 'Mt 28; Lc 24; Jn 20–21; 1 Co 15', tipo: 'apologetica' }
          ]
        },
        {
          id: '3.3', area: 'Nuevo Testamento', areaEn: 'New Testament', titulo: 'Hechos y la Iglesia primitiva', tituloEn: 'Acts and the early church',
          lecciones: [
            { n: 321, t: 'Hechos 1–7: Pentecostés y la comunidad de Jerusalén', ten: 'Acts 1–7: Pentecost and the Jerusalem community', libros: 'Hch 1–7', tipo: 'exegesis' },
            { n: 322, t: 'Hechos 8–12: la fe cruza fronteras', ten: 'Acts 8–12: the faith crosses borders', libros: 'Hch 8–12', tipo: 'exegesis' },
            { n: 323, t: 'Hechos 13–20: los viajes misioneros', ten: 'Acts 13–20: the missionary journeys', libros: 'Hch 13–20', tipo: 'exegesis' },
            { n: 324, t: 'Hechos 15: el concilio y el método para resolver conflictos doctrinales', ten: 'Acts 15: the council, and a method for resolving doctrinal conflict', libros: 'Hch 15', tipo: 'ministerial' },
            { n: 325, t: 'Hechos 21–28: juicio, apelación y Roma', ten: 'Acts 21–28: trial, appeal, and Rome', libros: 'Hch 21–28', tipo: 'exegesis' },
            { n: 326, t: 'Narrativa y doctrina: qué se puede y qué no se puede fundamentar en Hechos', ten: 'Narrative and doctrine: what can and can\'t be grounded in Acts', libros: '—', tipo: 'hermeneutica' }
          ]
        },
        {
          id: '3.4', area: 'Nuevo Testamento', areaEn: 'New Testament', titulo: 'Epístolas paulinas', tituloEn: 'Pauline epistles',
          lecciones: [
            { n: 327, t: 'Pablo: vida, cronología y teología de conjunto', ten: 'Paul: life, chronology, and overall theology', libros: 'Hch 9; Gá 1', tipo: 'historica' },
            { n: 328, t: 'Romanos 1–4: el problema y la justificación', ten: 'Romans 1–4: the problem and justification', libros: 'Ro 1–4', tipo: 'exegesis' },
            { n: 329, t: 'Romanos 5–8: unión con Cristo y vida en el Espíritu', ten: 'Romans 5–8: union with Christ and life in the Spirit', libros: 'Ro 5–8', tipo: 'exegesis' },
            { n: 330, t: 'Romanos 9–11: Israel, elección y misericordia', ten: 'Romans 9–11: Israel, election, and mercy', libros: 'Ro 9–11', tipo: 'debate' },
            { n: 331, t: 'Romanos 12–16: la ética que sigue al evangelio', ten: 'Romans 12–16: the ethics that follow the gospel', libros: 'Ro 12–16', tipo: 'exegesis' },
            { n: 332, t: '1 Corintios: una iglesia dividida y sus problemas reales', ten: '1 Corinthians: a divided church and its real problems', libros: '1 Co', tipo: 'exegesis' },
            { n: 333, t: '2 Corintios: ministerio, debilidad y falsos apóstoles', ten: '2 Corinthians: ministry, weakness, and false apostles', libros: '2 Co', tipo: 'exegesis' },
            { n: 334, t: 'Gálatas: libertad frente al legalismo', ten: 'Galatians: freedom versus legalism', libros: 'Gá', tipo: 'exegesis' },
            { n: 335, t: 'Efesios y Colosenses: Cristo, Iglesia y nueva humanidad', ten: 'Ephesians and Colossians: Christ, church, and new humanity', libros: 'Ef; Col', tipo: 'exegesis' },
            { n: 336, t: 'Filipenses y Filemón: gozo, humildad y reconciliación', ten: 'Philippians and Philemon: joy, humility, and reconciliation', libros: 'Fil; Flm', tipo: 'exegesis' },
            { n: 337, t: '1–2 Tesalonicenses: esperanza y trabajo', ten: '1–2 Thessalonians: hope and work', libros: '1–2 Ts', tipo: 'exegesis' },
            { n: 338, t: 'Pastorales: 1–2 Timoteo y Tito', ten: 'Pastorals: 1–2 Timothy and Titus', libros: '1–2 Ti; Tit', tipo: 'ministerial' }
          ]
        },
        {
          id: '3.5', area: 'Nuevo Testamento', areaEn: 'New Testament', titulo: 'Epístolas generales y Apocalipsis', tituloEn: 'General epistles and Revelation',
          lecciones: [
            { n: 339, t: 'Hebreos: la superioridad de Cristo y las advertencias', ten: 'Hebrews: the superiority of Christ, and the warnings', libros: 'He', tipo: 'exegesis' },
            { n: 340, t: 'Santiago: fe que se demuestra', ten: 'James: faith that shows itself', libros: 'Stg', tipo: 'exegesis' },
            { n: 341, t: '1–2 Pedro: sufrimiento, santidad y falsos maestros', ten: '1–2 Peter: suffering, holiness, and false teachers', libros: '1–2 P', tipo: 'exegesis' },
            { n: 342, t: '1–3 Juan y Judas: verdad, amor y contender por la fe', ten: '1–3 John and Jude: truth, love, and contending for the faith', libros: '1–3 Jn; Jud', tipo: 'exegesis' },
            { n: 343, t: 'Apocalipsis: género, estructura y las cuatro escuelas de interpretación', ten: 'Revelation: genre, structure, and the four schools of interpretation', libros: 'Ap 1', tipo: 'debate' },
            { n: 344, t: 'Apocalipsis 2–3: las siete iglesias', ten: 'Revelation 2–3: the seven churches', libros: 'Ap 2–3', tipo: 'exegesis' },
            { n: 345, t: 'Apocalipsis 4–18: sellos, trompetas y copas', ten: 'Revelation 4–18: seals, trumpets, and bowls', libros: 'Ap 4–18', tipo: 'exegesis' },
            { n: 346, t: 'Apocalipsis 19–22: el desenlace y la nueva creación', ten: 'Revelation 19–22: the resolution and the new creation', libros: 'Ap 19–22', tipo: 'exegesis' }
          ]
        },
        {
          id: '3.6', area: 'Hermenéutica', areaEn: 'Hermeneutics', titulo: 'Hermenéutica II y exégesis', tituloEn: 'Hermeneutics II and exegesis',
          lecciones: [
            { n: 347, t: 'Del texto al sentido: pasos de una exégesis completa', ten: 'From text to meaning: the steps of a full exegesis', libros: '—', tipo: 'exegesis' },
            { n: 348, t: 'Análisis literario: estructura, quiasmo, inclusión, argumento', ten: 'Literary analysis: structure, chiasm, inclusio, argument', libros: '—', tipo: 'exegesis' },
            { n: 349, t: 'Gramática y sintaxis que sí cambian el sentido', ten: 'Grammar and syntax that actually change the meaning', libros: '—', tipo: 'exegesis' },
            { n: 350, t: 'Estudio de palabras hecho correctamente', ten: 'Word studies done correctly', libros: '—', tipo: 'exegesis' },
            { n: 351, t: 'Tipología, símbolo y numerología: límites responsables', ten: 'Typology, symbol, and numerology: responsible limits', libros: '—', tipo: 'hermeneutica' },
            { n: 352, t: 'El Nuevo Testamento citando al Antiguo', ten: 'The New Testament quoting the Old', libros: 'Os 11:1 / Mt 2:15', tipo: 'debate' },
            { n: 353, t: 'Historia de la interpretación: patrística, medieval, reforma, moderna', ten: 'History of interpretation: patristic, medieval, Reformation, modern', libros: '—', tipo: 'historica' },
            { n: 354, t: 'Taller: exégesis completa de un pasaje asignado', ten: 'Workshop: a full exegesis of an assigned passage', libros: '—', tipo: 'taller' }
          ]
        },
        {
          id: '3.7', area: 'Teología sistemática', areaEn: 'Systematic theology', titulo: 'Doctrina organizada por temas', tituloEn: 'Doctrine organized by topic',
          lecciones: [
            { n: 355, t: 'Qué es la teología sistemática y cómo se hace', ten: 'What systematic theology is and how it\'s done', libros: '—', tipo: 'doctrinal' },
            { n: 356, t: 'Atributos de Dios', ten: 'The attributes of God', libros: 'Éx 34; Sal 139; Is 40', tipo: 'doctrinal' },
            { n: 357, t: 'La Trinidad: formulación, herejías antiguas y precisión', ten: 'The Trinity: formulation, ancient heresies, and precision', libros: 'Jn 1; Mt 28:19', tipo: 'doctrinal' },
            { n: 358, t: 'Creación y providencia', ten: 'Creation and providence', libros: 'Gn 1; Col 1:16-17', tipo: 'doctrinal' },
            { n: 359, t: 'Antropología y hamartiología: naturaleza humana y pecado', ten: 'Anthropology and hamartiology: human nature and sin', libros: 'Gn 1–3; Ro 5', tipo: 'doctrinal' },
            { n: 360, t: 'Cristología: las dos naturalezas y los concilios', ten: 'Christology: the two natures and the councils', libros: 'Jn 1; Fil 2; Col 1', tipo: 'doctrinal' },
            { n: 361, t: 'La obra de Cristo: teorías de la expiación comparadas', ten: 'The work of Christ: atonement theories compared', libros: 'Is 53; Ro 3; He 9', tipo: 'debate' },
            { n: 362, t: 'Soteriología: llamamiento, regeneración, justificación, adopción', ten: 'Soteriology: calling, regeneration, justification, adoption', libros: 'Ro 8:29-30; Ef 2', tipo: 'doctrinal' },
            { n: 363, t: 'Gracia, fe, obras y perseverancia: el debate calvinista-arminiano', ten: 'Grace, faith, works, and perseverance: the Calvinist-Arminian debate', libros: 'Jn 6; Ro 9; He 6', tipo: 'debate' },
            { n: 364, t: 'Pneumatología: persona y obra del Espíritu Santo', ten: 'Pneumatology: the person and work of the Holy Spirit', libros: 'Jn 14–16; Ro 8', tipo: 'doctrinal' },
            { n: 365, t: 'Bautismo en el Espíritu y santificación: posturas comparadas', ten: 'Baptism in the Spirit and sanctification: positions compared', libros: 'Hch 2; 8; 19; 1 Co 12–14', tipo: 'debate' },
            { n: 366, t: 'Dones espirituales: cesacionismo y continuismo', ten: 'Spiritual gifts: cessationism and continuationism', libros: '1 Co 12–14; Ef 4', tipo: 'debate' },
            { n: 367, t: 'Sanidad divina: textos, posturas y cuidado pastoral', ten: 'Divine healing: texts, positions, and pastoral care', libros: 'Stg 5:14-16; 2 Co 12', tipo: 'debate' },
            { n: 368, t: 'Eclesiología: naturaleza, gobierno, ordenanzas y disciplina', ten: 'Ecclesiology: nature, government, ordinances, and discipline', libros: 'Mt 18; Hch 6; 1 Ti 3', tipo: 'doctrinal' }
          ]
        },
        {
          id: '3.8', area: 'Historia', areaEn: 'History', titulo: 'Historia de la Iglesia', tituloEn: 'Church history',
          lecciones: [
            { n: 369, t: 'Los seis períodos: mapa general de veinte siglos', ten: 'The six periods: an overview of twenty centuries', libros: '—', tipo: 'historica' },
            { n: 370, t: 'La iglesia apostólica', ten: 'The apostolic church', libros: '—', tipo: 'historica' },
            { n: 371, t: 'La iglesia perseguida (100–313)', ten: 'The persecuted church (100–313)', libros: '—', tipo: 'historica' },
            { n: 372, t: 'La iglesia imperial y los concilios (313–476)', ten: 'The imperial church and the councils (313–476)', libros: '—', tipo: 'historica' },
            { n: 373, t: 'La iglesia medieval (476–1453)', ten: 'The medieval church (476–1453)', libros: '—', tipo: 'historica' },
            { n: 374, t: 'La Reforma: Lutero, Calvino, radicales y contrarreforma', ten: 'The Reformation: Luther, Calvin, radicals, and the Counter-Reformation', libros: '—', tipo: 'historica' },
            { n: 375, t: 'Avivamientos, misiones y el mundo moderno', ten: 'Revivals, missions, and the modern world', libros: '—', tipo: 'historica' },
            { n: 376, t: 'Orígenes del pentecostalismo y el movimiento carismático', ten: 'Origins of Pentecostalism and the charismatic movement', libros: '—', tipo: 'historica' },
            { n: 377, t: 'El cristianismo en América Latina', ten: 'Christianity in Latin America', libros: '—', tipo: 'historica' },
            { n: 378, t: 'Historia de los credos y confesiones', ten: 'History of the creeds and confessions', libros: '—', tipo: 'historica' }
          ]
        },
        {
          id: '3.9', area: 'Evaluación', areaEn: 'Assessment', titulo: 'Cierre de nivel', tituloEn: 'Level closing',
          lecciones: [
            { n: 379, t: 'Repaso integrador del Nivel 3', ten: 'Level 3 integrative review', libros: '—', tipo: 'repaso' },
            { n: 380, t: 'Examen de dominio — Nivel 3', ten: 'Mastery exam — Level 3', libros: '—', tipo: 'examen' }
          ]
        }
      ]
    },

    {
      id: 4,
      nombre: 'Nivel 4 — Especialización ministerial',
      nombreEn: 'Level 4 — Ministry Specialization',
      lema: 'Competencia: enseñar, predicar, defender, discernir y pastorear con fundamento.',
      lemaEn: 'Competence: teaching, preaching, defending, discerning, and pastoring with a solid foundation.',
      capacidad: 'Al terminar, el estudiante produce: prepara una clase, un sermón expositivo, una defensa razonada y una respuesta pastoral fundamentada.',
      modulos: [
        {
          id: '4.1', area: 'Escatología', areaEn: 'Eschatology', titulo: 'Las últimas cosas, en serio', tituloEn: 'The last things, taken seriously',
          lecciones: [
            { n: 401, t: 'Cómo se estudia escatología sin especular', ten: 'How to study eschatology without speculating', libros: '—', tipo: 'hermeneutica' },
            { n: 402, t: 'Muerte, estado intermedio y resurrección', ten: 'Death, the intermediate state, and resurrection', libros: '1 Co 15; 2 Co 5', tipo: 'doctrinal' },
            { n: 403, t: 'El discurso del Monte de los Olivos', ten: 'The Olivet Discourse', libros: 'Mt 24–25', tipo: 'exegesis' },
            { n: 404, t: 'La segunda venida: lo que todos afirman', ten: 'The second coming: what everyone affirms', libros: '1 Ts 4; Hch 1:11', tipo: 'doctrinal' },
            { n: 405, t: 'Milenio: premilenarismo, amilenarismo y posmilenarismo', ten: 'The millennium: premillennialism, amillennialism, and postmillennialism', libros: 'Ap 20', tipo: 'debate' },
            { n: 406, t: 'Tribulación y arrebatamiento: pretribulacionismo y alternativas', ten: 'Tribulation and rapture: pretribulationism and alternatives', libros: '1 Ts 4; 2 Ts 2', tipo: 'debate' },
            { n: 407, t: 'Dispensacionalismo y teología del pacto comparados', ten: 'Dispensationalism and covenant theology compared', libros: '—', tipo: 'debate' },
            { n: 408, t: 'Juicio final, infierno y cielo: textos y posturas', ten: 'Final judgment, hell, and heaven: texts and positions', libros: 'Mt 25:31-46; Ap 20:11-15', tipo: 'debate' },
            { n: 409, t: 'Cómo enseñar escatología en la iglesia sin dividirla', ten: 'How to teach eschatology in the church without dividing it', libros: '—', tipo: 'ministerial' }
          ]
        },
        {
          id: '4.2', area: 'Apologética', areaEn: 'Apologetics', titulo: 'Defensa razonada de la fe', tituloEn: 'A reasoned defense of the faith',
          lecciones: [
            { n: 410, t: 'Qué es la apologética y qué no es', ten: 'What apologetics is, and isn\'t', libros: '1 P 3:15-16', tipo: 'apologetica' },
            { n: 411, t: 'Existencia de Dios: los argumentos y sus límites', ten: 'The existence of God: the arguments and their limits', libros: 'Ro 1:19-20', tipo: 'apologetica' },
            { n: 412, t: 'El problema del mal y del sufrimiento', ten: 'The problem of evil and suffering', libros: 'Job; Lc 13:1-5', tipo: 'apologetica' },
            { n: 413, t: 'Confiabilidad histórica de los evangelios', ten: 'The historical reliability of the Gospels', libros: '—', tipo: 'apologetica' },
            { n: 414, t: 'La resurrección como argumento histórico', ten: 'The resurrection as a historical argument', libros: '1 Co 15:3-8', tipo: 'apologetica' },
            { n: 415, t: 'Ciencia y fe: creación, edad de la tierra, evolución', ten: 'Science and faith: creation, the age of the earth, evolution', libros: 'Gn 1–2', tipo: 'debate' },
            { n: 416, t: 'Objeciones morales al Antiguo Testamento', ten: 'Moral objections to the Old Testament', libros: 'Jos 6; Dt 20', tipo: 'apologetica' },
            { n: 417, t: 'Respuesta al ateísmo y al escepticismo contemporáneo', ten: 'Responding to atheism and contemporary skepticism', libros: '—', tipo: 'apologetica' },
            { n: 418, t: 'Sectas y grupos: mormonismo y Testigos de Jehová', ten: 'Sects and groups: Mormonism and Jehovah\'s Witnesses', libros: 'Jn 1:1; Col 2:9', tipo: 'apologetica' },
            { n: 419, t: 'Islam, judaísmo y religiones orientales: diferencias reales', ten: 'Islam, Judaism, and Eastern religions: real differences', libros: '—', tipo: 'apologetica' },
            { n: 420, t: 'Nueva Era, ocultismo y espiritualidad difusa', ten: 'New Age, occultism, and diffuse spirituality', libros: 'Dt 18:9-14', tipo: 'apologetica' },
            { n: 421, t: 'Discernimiento doctrinal dentro de la iglesia evangélica', ten: 'Doctrinal discernment within the evangelical church', libros: '1 Jn 4:1; Hch 17:11', tipo: 'apologetica' }
          ]
        },
        {
          id: '4.3', area: 'Homilética', areaEn: 'Homiletics', titulo: 'Predicación', tituloEn: 'Preaching',
          lecciones: [
            { n: 422, t: 'Qué es predicar y cuál es su lugar bíblico', ten: 'What preaching is and its biblical place', libros: 'Neh 8; 2 Ti 4:1-5', tipo: 'ministerial' },
            { n: 423, t: 'El predicador como comunicador', ten: 'The preacher as communicator', libros: '—', tipo: 'ministerial' },
            { n: 424, t: 'Del texto a la idea central', ten: 'From text to the central idea', libros: '—', tipo: 'ministerial' },
            { n: 425, t: 'Tipos de sermón: expositivo, textual, temático', ten: 'Types of sermons: expository, textual, topical', libros: '—', tipo: 'ministerial' },
            { n: 426, t: 'El bosquejo: construcción y uso', ten: 'The outline: building and using it', libros: '—', tipo: 'ministerial' },
            { n: 427, t: 'Introducción, transiciones y conclusión', ten: 'Introduction, transitions, and conclusion', libros: '—', tipo: 'ministerial' },
            { n: 428, t: 'Ilustración y aplicación sin manipular', ten: 'Illustration and application without manipulating', libros: '—', tipo: 'ministerial' },
            { n: 429, t: 'Entrega: voz, cuerpo, tiempo y nervios', ten: 'Delivery: voice, body, timing, and nerves', libros: '—', tipo: 'ministerial' },
            { n: 430, t: 'Predicar Cristo desde el Antiguo Testamento sin forzarlo', ten: 'Preaching Christ from the Old Testament without forcing it', libros: 'Lc 24:27', tipo: 'ministerial' },
            { n: 431, t: 'Taller: preparar y entregar un sermón expositivo completo', ten: 'Workshop: preparing and delivering a full expository sermon', libros: '—', tipo: 'taller' }
          ]
        },
        {
          id: '4.4', area: 'Docencia', areaEn: 'Teaching', titulo: 'Formación de maestros', tituloEn: 'Teacher training',
          lecciones: [
            { n: 432, t: 'Cómo aprende un adulto y cómo aprende un joven', ten: 'How an adult learns and how a young person learns', libros: '—', tipo: 'ministerial' },
            { n: 433, t: 'Diseñar una clase de 30 a 45 minutos', ten: 'Designing a 30- to 45-minute class', libros: '—', tipo: 'ministerial' },
            { n: 434, t: 'Simplificar sin distorsionar', ten: 'Simplifying without distorting', libros: '—', tipo: 'ministerial' },
            { n: 435, t: 'Preguntas, analogías y corrección de errores en clase', ten: 'Questions, analogies, and correcting mistakes in class', libros: '—', tipo: 'ministerial' },
            { n: 436, t: 'Evaluar si el alumno realmente aprendió', ten: 'Assessing whether the student actually learned', libros: '—', tipo: 'ministerial' },
            { n: 437, t: 'Taller: enseñar una lección del Instituto a otros', ten: 'Workshop: teaching an Institute lesson to others', libros: '—', tipo: 'taller' }
          ]
        },
        {
          id: '4.5', area: 'Pastoral', areaEn: 'Pastoral', titulo: 'Teología pastoral y ética', tituloEn: 'Pastoral theology and ethics',
          lecciones: [
            { n: 438, t: 'Ética cristiana: cómo se decide lo correcto', ten: 'Christian ethics: how what\'s right is decided', libros: 'Mi 6:8; Ro 12', tipo: 'doctrinal' },
            { n: 439, t: 'Matrimonio, divorcio y nuevo matrimonio: textos y posturas', ten: 'Marriage, divorce, and remarriage: texts and positions', libros: 'Mt 19; 1 Co 7', tipo: 'debate' },
            { n: 440, t: 'Sexualidad, género e identidad: enseñanza bíblica y trato pastoral', ten: 'Sexuality, gender, and identity: biblical teaching and pastoral care', libros: 'Gn 2; Ro 1; 1 Co 6', tipo: 'debate' },
            { n: 441, t: 'Dinero, trabajo, justicia y pobreza', ten: 'Money, work, justice, and poverty', libros: 'Pr; Stg 5; 2 Co 8–9', tipo: 'doctrinal' },
            { n: 442, t: 'Vida, muerte y decisiones médicas difíciles', ten: 'Life, death, and difficult medical decisions', libros: 'Sal 139', tipo: 'debate' },
            { n: 443, t: 'Consejería bíblica básica y sus límites', ten: 'Basic biblical counseling and its limits', libros: 'Gá 6:1-2', tipo: 'ministerial' },
            { n: 444, t: 'Duelo, crisis, abuso y cuándo derivar a un profesional', ten: 'Grief, crisis, abuse, and when to refer to a professional', libros: '—', tipo: 'ministerial' },
            { n: 445, t: 'Liderazgo, conflicto y disciplina en la congregación', ten: 'Leadership, conflict, and discipline in the congregation', libros: 'Mt 18:15-20; 1 Ti 5', tipo: 'ministerial' },
            { n: 446, t: 'Integridad del ministro y prevención del desgaste', ten: 'The minister\'s integrity and preventing burnout', libros: '1 Ti 4:16', tipo: 'ministerial' },
            { n: 447, t: 'Casos pastorales: resolución fundamentada', ten: 'Pastoral cases: well-grounded resolution', libros: '—', tipo: 'taller' }
          ]
        },
        {
          id: '4.6', area: 'Investigación', areaEn: 'Research', titulo: 'Investigación y proyecto final', tituloEn: 'Research and final project',
          lecciones: [
            { n: 448, t: 'Cómo investigar un tema bíblico con fuentes reales', ten: 'How to research a biblical topic with real sources', libros: '—', tipo: 'herramientas' },
            { n: 449, t: 'Evaluar una fuente: perspectiva, fortaleza y límite', ten: 'Evaluating a source: perspective, strength, and limit', libros: '—', tipo: 'herramientas' },
            { n: 450, t: 'Construir y defender un argumento teológico', ten: 'Building and defending a theological argument', libros: '—', tipo: 'taller' },
            { n: 451, t: 'Examen final integrador', ten: 'Final integrative exam', libros: '—', tipo: 'examen' },
            { n: 452, t: 'Proyecto de graduación: sermón, clase y monografía breve', ten: 'Graduation project: sermon, class, and short paper', libros: '—', tipo: 'taller' }
          ]
        }
      ]
    }
  ]
};

window.LECCIONES_DISPONIBLES = ['101','102','103','104','105','106','107','108','109'];
