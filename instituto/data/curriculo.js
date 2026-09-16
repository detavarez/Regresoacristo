window.CURRICULO = {
  version: 'Ver-001',
  umbralAprobacion: 70,
  niveles: [
    {
      id: 1,
      nombre: 'Nivel 1 — Fundamental',
      lema: 'Conocer la Biblia: qué es, qué contiene, qué historia cuenta y cómo empezar a leerla bien.',
      capacidad: 'Al terminar, el estudiante reconoce, identifica y recuerda: puede ubicar cualquier libro, personaje o acontecimiento dentro de la historia bíblica y explicar el evangelio con sus propias palabras.',
      modulos: [
        {
          id: '1.1', area: 'Panorama bíblico', titulo: 'La historia completa de la Biblia',
          lecciones: [
            { n: 101, t: '¿Qué es la Biblia? Composición, autores, idiomas y unidad', libros: '2 Ti 3:16-17; 2 P 1:20-21', tipo: 'doctrinal' },
            { n: 102, t: 'Cómo está organizada: Antiguo y Nuevo Testamento, secciones y géneros', libros: 'Lc 24:44', tipo: 'panorama' },
            { n: 103, t: 'La historia bíblica en seis actos: el mapa completo', libros: 'Gn 1–3; Gn 12; Lc 24; Ap 21–22', tipo: 'panorama' },
            { n: 104, t: 'Acto 1 — Creación: un mundo bueno y un ser humano con encargo', libros: 'Gn 1–2', tipo: 'narrativa' },
            { n: 105, t: 'Acto 2 — Caída: qué se rompió y hasta dónde llegó la ruptura', libros: 'Gn 3; Ro 5:12-21', tipo: 'narrativa' },
            { n: 106, t: 'Acto 3 — Israel: promesa, pacto, fracaso y esperanza', libros: 'Gn 12:1-3; Éx 19:3-6; 2 S 7', tipo: 'narrativa' },
            { n: 107, t: 'Acto 4 — Cristo: el cumplimiento que Israel no pudo lograr', libros: 'Jn 1:1-18; 1 Co 15:3-4', tipo: 'doctrinal' },
            { n: 108, t: 'Actos 5 y 6 — Iglesia y nueva creación: dónde estamos y hacia dónde va', libros: 'Hch 1:8; Ap 21:1-8', tipo: 'doctrinal' }
          ]
        },
        {
          id: '1.2', area: 'Contexto', titulo: 'Geografía y cronología básicas',
          lecciones: [
            { n: 109, t: 'El mapa del mundo bíblico: de Mesopotamia a Roma', libros: '—', tipo: 'historica' },
            { n: 110, t: 'Línea de tiempo del Antiguo Testamento', libros: '—', tipo: 'historica' },
            { n: 111, t: 'Línea de tiempo del Nuevo Testamento', libros: '—', tipo: 'historica' },
            { n: 112, t: 'Los cuatro siglos entre los Testamentos: introducción', libros: '—', tipo: 'historica' }
          ]
        },
        {
          id: '1.3', area: 'Panorama bíblico', titulo: 'Los libros de la Biblia, uno por uno',
          lecciones: [
            { n: 113, t: 'Pentateuco: qué hace cada uno de los cinco libros', libros: 'Gn–Dt', tipo: 'panorama' },
            { n: 114, t: 'Libros históricos: de Josué a Ester', libros: 'Jos–Est', tipo: 'panorama' },
            { n: 115, t: 'Poéticos y sapienciales: Job a Cantares', libros: 'Job–Cnt', tipo: 'panorama' },
            { n: 116, t: 'Profetas mayores: Isaías a Daniel', libros: 'Is–Dn', tipo: 'panorama' },
            { n: 117, t: 'Profetas menores: los doce', libros: 'Os–Mal', tipo: 'panorama' },
            { n: 118, t: 'Evangelios y Hechos: cuatro retratos y una continuación', libros: 'Mt–Hch', tipo: 'panorama' },
            { n: 119, t: 'Cartas de Pablo: a quién, por qué y en qué orden', libros: 'Ro–Flm', tipo: 'panorama' },
            { n: 120, t: 'Epístolas generales y Apocalipsis', libros: 'He–Ap', tipo: 'panorama' },
            { n: 121, t: 'Cómo ubicar un pasaje: capítulos, versículos y referencias cruzadas', libros: '—', tipo: 'herramientas' },
            { n: 122, t: 'Libros apócrifos y deuterocanónicos: qué son y por qué no están en esta Biblia', libros: '—', tipo: 'doctrinal' }
          ]
        },
        {
          id: '1.4', area: 'Panorama bíblico', titulo: 'Personajes y acontecimientos clave',
          lecciones: [
            { n: 123, t: 'Adán, Caín, Noé y Babel: la humanidad antes de Abraham', libros: 'Gn 4–11', tipo: 'narrativa' },
            { n: 124, t: 'Abraham, Isaac y Jacob: la familia de la promesa', libros: 'Gn 12–36', tipo: 'narrativa' },
            { n: 125, t: 'José y la bajada a Egipto', libros: 'Gn 37–50', tipo: 'narrativa' },
            { n: 126, t: 'Moisés, el Éxodo y el Sinaí', libros: 'Éx 1–20', tipo: 'narrativa' },
            { n: 127, t: 'Josué, los jueces y Samuel', libros: 'Jos 1; Jue 2; 1 S 8', tipo: 'narrativa' },
            { n: 128, t: 'Saúl, David y Salomón', libros: '1–2 S; 1 R 1–11', tipo: 'narrativa' },
            { n: 129, t: 'El reino dividido, los profetas y el exilio', libros: '1 R 12; 2 R 17, 25', tipo: 'narrativa' },
            { n: 130, t: 'El retorno: Esdras, Nehemías y la espera', libros: 'Esd 1; Neh 1; Mal 4', tipo: 'narrativa' },
            { n: 131, t: 'Jesús: nacimiento, ministerio, muerte y resurrección', libros: 'Lc 1–2; Mr 1; Jn 19–20', tipo: 'narrativa' },
            { n: 132, t: 'Los apóstoles y la expansión de la Iglesia', libros: 'Hch 2; 9; 13', tipo: 'narrativa' }
          ]
        },
        {
          id: '1.5', area: 'Doctrina', titulo: 'Doctrina introductoria',
          lecciones: [
            { n: 133, t: 'Dios: quién dice la Biblia que es', libros: 'Éx 3:14; 34:6-7; Is 6', tipo: 'doctrinal' },
            { n: 134, t: 'La Trinidad: introducción a un Dios en tres personas', libros: 'Mt 28:19; 2 Co 13:14', tipo: 'doctrinal' },
            { n: 135, t: 'Jesucristo: plenamente Dios y plenamente hombre', libros: 'Jn 1:1-14; Fil 2:5-11', tipo: 'doctrinal' },
            { n: 136, t: 'El Espíritu Santo: persona, no fuerza', libros: 'Jn 14–16; Hch 2', tipo: 'doctrinal' },
            { n: 137, t: 'El ser humano: imagen de Dios y realidad del pecado', libros: 'Gn 1:26-27; Ro 3:9-20', tipo: 'doctrinal' },
            { n: 138, t: 'La salvación: el evangelio explicado paso a paso', libros: 'Ef 2:1-10; Ro 3–5', tipo: 'doctrinal' },
            { n: 139, t: 'La Iglesia: qué es, para qué existe, cómo se reúne', libros: 'Hch 2:42-47; Ef 4', tipo: 'doctrinal' },
            { n: 140, t: 'Las últimas cosas: introducción y advertencia sobre la especulación', libros: '1 Ts 4:13-18; Ap 21–22', tipo: 'doctrinal' },
            { n: 141, t: 'Ángeles, demonios y el mundo espiritual: lo que el texto afirma y lo que no', libros: 'Job 1; Ef 6:10-18', tipo: 'doctrinal' },
            { n: 142, t: 'Oración, ayuno, adoración y ofrenda: práctica cristiana básica', libros: 'Mt 6:1-18', tipo: 'ministerial' }
          ]
        },
        {
          id: '1.6', area: 'Hermenéutica', titulo: 'Primeros principios de interpretación',
          lecciones: [
            { n: 143, t: 'Qué significa interpretar y por qué no basta con "leer y ya"', libros: 'Hch 8:30-31; Neh 8:8', tipo: 'hermeneutica' },
            { n: 144, t: 'El contexto: la primera y más importante regla', libros: '—', tipo: 'hermeneutica' },
            { n: 145, t: 'Significado y aplicación: dos cosas distintas', libros: '—', tipo: 'hermeneutica' },
            { n: 146, t: 'Errores frecuentes del lector principiante', libros: '—', tipo: 'hermeneutica' },
            { n: 147, t: 'Cada género se lee distinto: primera aproximación', libros: '—', tipo: 'hermeneutica' },
            { n: 148, t: 'Cómo preparar un devocional personal responsable', libros: 'Sal 1; Jos 1:8', tipo: 'ministerial' }
          ]
        },
        {
          id: '1.7', area: 'Herramientas', titulo: 'Vocabulario y herramientas de estudio',
          lecciones: [
            { n: 149, t: 'Vocabulario bíblico esencial: cien términos que hay que dominar', libros: '—', tipo: 'herramientas' },
            { n: 150, t: 'Traducciones al español: RVR1960, NVI, LBLA y por qué difieren', libros: '—', tipo: 'herramientas' },
            { n: 151, t: 'Concordancia, diccionario bíblico y Biblia de estudio: cómo se usan', libros: '—', tipo: 'herramientas' },
            { n: 152, t: 'Hebreo, arameo y griego: nociones útiles sin saber los idiomas', libros: '—', tipo: 'herramientas' },
            { n: 153, t: 'Cómo tomar apuntes y construir tu propio archivo de estudio', libros: '—', tipo: 'herramientas' }
          ]
        },
        {
          id: '1.8', area: 'Evaluación', titulo: 'Cierre de nivel',
          lecciones: [
            { n: 154, t: 'Repaso integrador del Nivel 1', libros: '—', tipo: 'repaso' },
            { n: 155, t: 'Examen de dominio — Nivel 1', libros: '—', tipo: 'examen' }
          ]
        }
      ]
    },

    {
      id: 2,
      nombre: 'Nivel 2 — Desarrollo',
      lema: 'Comprender: contexto, géneros, estructura de los libros y las primeras herramientas de interpretación.',
      capacidad: 'Al terminar, el estudiante explica, relaciona y distingue: puede situar un pasaje en su contexto histórico y literario y decir qué tipo de texto está leyendo.',
      modulos: [
        {
          id: '2.1', area: 'Bibliología', titulo: 'De dónde viene la Biblia',
          lecciones: [
            { n: 201, t: 'Revelación: general y especial', libros: 'Sal 19; He 1:1-3', tipo: 'doctrinal' },
            { n: 202, t: 'Inspiración: qué afirma el texto sobre sí mismo y qué modelos existen', libros: '2 Ti 3:16; 2 P 1:21', tipo: 'doctrinal' },
            { n: 203, t: 'El canon del Antiguo Testamento: cómo se reconoció', libros: '—', tipo: 'historica' },
            { n: 204, t: 'El canon del Nuevo Testamento: criterios y proceso', libros: '—', tipo: 'historica' },
            { n: 205, t: 'Manuscritos y transmisión: cómo llegó el texto hasta nosotros', libros: '—', tipo: 'historica' },
            { n: 206, t: 'Variantes textuales: qué son, cuántas importan y cuáles no', libros: 'Mr 16:9-20; Jn 7:53–8:11', tipo: 'hermeneutica' },
            { n: 207, t: 'Teoría de la traducción: equivalencia formal y dinámica', libros: '—', tipo: 'herramientas' },
            { n: 208, t: 'Autoridad, suficiencia e inerrancia: posturas dentro del evangelicalismo', libros: 'Sal 119; Jn 10:35', tipo: 'debate' }
          ]
        },
        {
          id: '2.2', area: 'Contexto', titulo: 'El mundo detrás del texto',
          lecciones: [
            { n: 209, t: 'El Antiguo Cercano Oriente: cultura, religión y leyes comparadas', libros: '—', tipo: 'historica' },
            { n: 210, t: 'Egipto, Asiria, Babilonia y Persia en la historia bíblica', libros: '—', tipo: 'historica' },
            { n: 211, t: 'Vida cotidiana en Israel: familia, tierra, honor y economía', libros: 'Rt 2–4', tipo: 'historica' },
            { n: 212, t: 'El período intertestamentario: de Alejandro a los Macabeos', libros: '—', tipo: 'historica' },
            { n: 213, t: 'El judaísmo del Segundo Templo: fariseos, saduceos, esenios, zelotes', libros: 'Mt 23; Hch 23:6-8', tipo: 'historica' },
            { n: 214, t: 'El mundo grecorromano del Nuevo Testamento', libros: 'Hch 17:16-34', tipo: 'historica' },
            { n: 215, t: 'Sinagoga, templo, sacrificios y fiestas', libros: 'Lv 23; Lc 4:16-21', tipo: 'historica' },
            { n: 216, t: 'Geografía que cambia el sentido del texto', libros: 'Jn 4:1-6', tipo: 'historica' }
          ]
        },
        {
          id: '2.3', area: 'Hermenéutica', titulo: 'Géneros literarios',
          lecciones: [
            { n: 217, t: 'Narrativa: cómo enseña una historia sin decir la moraleja', libros: 'Jue 19–21', tipo: 'hermeneutica' },
            { n: 218, t: 'Ley: los mandamientos dentro del pacto', libros: 'Éx 20; Lv 19', tipo: 'hermeneutica' },
            { n: 219, t: 'Poesía hebrea: paralelismo, imagen y emoción', libros: 'Sal 22; 23', tipo: 'hermeneutica' },
            { n: 220, t: 'Literatura sapiencial: proverbio no es promesa', libros: 'Pr 22:6; Ec 1', tipo: 'hermeneutica' },
            { n: 221, t: 'Profecía: predicción, denuncia y cumplimiento', libros: 'Am 5; Is 7', tipo: 'hermeneutica' },
            { n: 222, t: 'Evangelio: biografía antigua con propósito teológico', libros: 'Jn 20:30-31', tipo: 'hermeneutica' },
            { n: 223, t: 'Epístola: cartas reales a situaciones reales', libros: '1 Co 1:10-17', tipo: 'hermeneutica' },
            { n: 224, t: 'Apocalíptica: por qué no se lee como el periódico', libros: 'Dn 7; Ap 12', tipo: 'hermeneutica' }
          ]
        },
        {
          id: '2.4', area: 'Antiguo Testamento', titulo: 'Pentateuco',
          lecciones: [
            { n: 225, t: 'Génesis 1–11: los orígenes y sus preguntas interpretativas', libros: 'Gn 1–11', tipo: 'debate' },
            { n: 226, t: 'Génesis 12–50: los patriarcas y la promesa', libros: 'Gn 12–50', tipo: 'narrativa' },
            { n: 227, t: 'Éxodo: liberación, pacto y presencia', libros: 'Éx', tipo: 'narrativa' },
            { n: 228, t: 'Levítico: santidad, sacrificio y sacerdocio', libros: 'Lv', tipo: 'doctrinal' },
            { n: 229, t: 'Números: la generación del desierto', libros: 'Nm', tipo: 'narrativa' },
            { n: 230, t: 'Deuteronomio: el pacto renovado antes de entrar', libros: 'Dt', tipo: 'doctrinal' },
            { n: 231, t: 'Autoría del Pentateuco: la tradición mosaica y las teorías críticas', libros: '—', tipo: 'debate' },
            { n: 232, t: 'La Ley y el cristiano: continuidad y discontinuidad', libros: 'Mt 5:17-20; Ro 10:4; Gá 3', tipo: 'debate' }
          ]
        },
        {
          id: '2.5', area: 'Antiguo Testamento', titulo: 'Historia de Israel',
          lecciones: [
            { n: 233, t: 'Josué: conquista, tierra y las preguntas éticas del herem', libros: 'Jos', tipo: 'debate' },
            { n: 234, t: 'Jueces: el ciclo de la apostasía', libros: 'Jue', tipo: 'narrativa' },
            { n: 235, t: 'Rut: providencia en la vida ordinaria', libros: 'Rt', tipo: 'narrativa' },
            { n: 236, t: '1–2 Samuel: del juez al rey', libros: '1–2 S', tipo: 'narrativa' },
            { n: 237, t: '1–2 Reyes: la evaluación teológica de la monarquía', libros: '1–2 R', tipo: 'narrativa' },
            { n: 238, t: '1–2 Crónicas: la misma historia contada con otro propósito', libros: '1–2 Cr', tipo: 'hermeneutica' },
            { n: 239, t: 'Esdras y Nehemías: reconstruir pueblo, muro e identidad', libros: 'Esd; Neh', tipo: 'narrativa' },
            { n: 240, t: 'Ester: el nombre de Dios ausente y su providencia presente', libros: 'Est', tipo: 'narrativa' }
          ]
        },
        {
          id: '2.6', area: 'Antiguo Testamento', titulo: 'Poéticos y sapienciales',
          lecciones: [
            { n: 241, t: 'Job: el sufrimiento del justo y el silencio de las respuestas fáciles', libros: 'Job', tipo: 'doctrinal' },
            { n: 242, t: 'Salmos: tipos, usos y cómo orarlos', libros: 'Sal', tipo: 'hermeneutica' },
            { n: 243, t: 'Salmos imprecatorios y mesiánicos', libros: 'Sal 2; 22; 109', tipo: 'debate' },
            { n: 244, t: 'Proverbios: sabiduría práctica y sus límites', libros: 'Pr', tipo: 'hermeneutica' },
            { n: 245, t: 'Eclesiastés: el realismo bajo el sol', libros: 'Ec', tipo: 'doctrinal' },
            { n: 246, t: 'Cantares: historia de interpretación y lectura responsable', libros: 'Cnt', tipo: 'debate' }
          ]
        },
        {
          id: '2.7', area: 'Hermenéutica', titulo: 'Hermenéutica I: método',
          lecciones: [
            { n: 247, t: 'El método completo: observar, interpretar, aplicar', libros: '—', tipo: 'hermeneutica' },
            { n: 248, t: 'Contexto inmediato, del libro y canónico', libros: '—', tipo: 'hermeneutica' },
            { n: 249, t: 'Palabras: uso, campo semántico y falacia etimológica', libros: '—', tipo: 'hermeneutica' },
            { n: 250, t: 'Pasajes paralelos y comparación de Escritura con Escritura', libros: '—', tipo: 'hermeneutica' },
            { n: 251, t: 'Figuras literarias y modismos hebreos', libros: '—', tipo: 'hermeneutica' },
            { n: 252, t: 'Supuestas contradicciones: cómo se examinan con honestidad', libros: '—', tipo: 'apologetica' }
          ]
        },
        {
          id: '2.8', area: 'Teología bíblica', titulo: 'Temas que atraviesan toda la Biblia',
          lecciones: [
            { n: 253, t: 'Pacto: la estructura de la relación con Dios', libros: 'Gn 15; Éx 24; Jer 31', tipo: 'doctrinal' },
            { n: 254, t: 'Reino de Dios: ya y todavía no', libros: 'Mr 1:15; Mt 13', tipo: 'doctrinal' },
            { n: 255, t: 'Presencia de Dios: Edén, tabernáculo, templo, Cristo, Iglesia, nueva creación', libros: 'Éx 40; Jn 1:14; Ap 21', tipo: 'doctrinal' },
            { n: 256, t: 'Sacrificio y expiación en toda la Escritura', libros: 'Lv 16; He 9–10', tipo: 'doctrinal' },
            { n: 257, t: 'Mesías: el hilo de la promesa', libros: 'Gn 3:15; 2 S 7; Is 53', tipo: 'doctrinal' },
            { n: 258, t: 'Pueblo de Dios: Israel y la Iglesia', libros: 'Ro 9–11; Ef 2:11-22', tipo: 'debate' }
          ]
        },
        {
          id: '2.9', area: 'Evaluación', titulo: 'Cierre de nivel',
          lecciones: [
            { n: 259, t: 'Repaso integrador del Nivel 2', libros: '—', tipo: 'repaso' },
            { n: 260, t: 'Examen de dominio — Nivel 2', libros: '—', tipo: 'examen' }
          ]
        }
      ]
    },

    {
      id: 3,
      nombre: 'Nivel 3 — Profundización',
      lema: 'Analizar: exégesis, teología sistemática, historia de la interpretación y comparación de posturas.',
      capacidad: 'Al terminar, el estudiante analiza, compara, evalúa y argumenta: puede trabajar un pasaje difícil, exponer varias posiciones con justicia y defender una conclusión.',
      modulos: [
        {
          id: '3.1', area: 'Antiguo Testamento', titulo: 'Los profetas',
          lecciones: [
            { n: 301, t: 'Qué es un profeta y cómo funciona el oráculo', libros: 'Dt 18:15-22', tipo: 'hermeneutica' },
            { n: 302, t: 'Isaías 1–39: juicio y el Santo de Israel', libros: 'Is 1–39', tipo: 'exegesis' },
            { n: 303, t: 'Isaías 40–66 y los cánticos del Siervo', libros: 'Is 40–66; 52:13–53:12', tipo: 'exegesis' },
            { n: 304, t: 'Jeremías y Lamentaciones: el profeta del colapso', libros: 'Jer; Lm', tipo: 'exegesis' },
            { n: 305, t: 'Ezequiel: gloria que se va y que vuelve', libros: 'Ez 1; 10; 37; 40–48', tipo: 'exegesis' },
            { n: 306, t: 'Daniel 1–6: fidelidad en el exilio', libros: 'Dn 1–6', tipo: 'narrativa' },
            { n: 307, t: 'Daniel 7–12: visiones y las grandes preguntas de fecha y cumplimiento', libros: 'Dn 7–12', tipo: 'debate' },
            { n: 308, t: 'Profetas menores I: Oseas, Joel, Amós, Abdías', libros: 'Os–Abd', tipo: 'exegesis' },
            { n: 309, t: 'Profetas menores II: Jonás, Miqueas, Nahúm, Habacuc, Sofonías', libros: 'Jon–Sof', tipo: 'exegesis' },
            { n: 310, t: 'Profetas menores III: Hageo, Zacarías, Malaquías', libros: 'Hag–Mal', tipo: 'exegesis' }
          ]
        },
        {
          id: '3.2', area: 'Nuevo Testamento', titulo: 'Evangelios y vida de Jesús',
          lecciones: [
            { n: 311, t: 'El problema sinóptico y qué aporta cada evangelio', libros: 'Mt; Mr; Lc', tipo: 'debate' },
            { n: 312, t: 'Mateo: el Mesías y el cumplimiento', libros: 'Mt', tipo: 'exegesis' },
            { n: 313, t: 'Marcos: el siervo que va a la cruz', libros: 'Mr', tipo: 'exegesis' },
            { n: 314, t: 'Lucas: el evangelio para los excluidos', libros: 'Lc', tipo: 'exegesis' },
            { n: 315, t: 'Juan: creer y tener vida', libros: 'Jn', tipo: 'exegesis' },
            { n: 316, t: 'El Sermón del Monte', libros: 'Mt 5–7', tipo: 'exegesis' },
            { n: 317, t: 'Las parábolas: cómo interpretarlas sin alegorizar', libros: 'Lc 15; Mt 13', tipo: 'hermeneutica' },
            { n: 318, t: 'Milagros: función, evidencia y objeciones', libros: 'Jn 2; Mr 5', tipo: 'apologetica' },
            { n: 319, t: 'La semana de la pasión, hora por hora', libros: 'Mt 21–27; Jn 12–19', tipo: 'exegesis' },
            { n: 320, t: 'La resurrección: los relatos, sus diferencias y su historicidad', libros: 'Mt 28; Lc 24; Jn 20–21; 1 Co 15', tipo: 'apologetica' }
          ]
        },
        {
          id: '3.3', area: 'Nuevo Testamento', titulo: 'Hechos y la Iglesia primitiva',
          lecciones: [
            { n: 321, t: 'Hechos 1–7: Pentecostés y la comunidad de Jerusalén', libros: 'Hch 1–7', tipo: 'exegesis' },
            { n: 322, t: 'Hechos 8–12: la fe cruza fronteras', libros: 'Hch 8–12', tipo: 'exegesis' },
            { n: 323, t: 'Hechos 13–20: los viajes misioneros', libros: 'Hch 13–20', tipo: 'exegesis' },
            { n: 324, t: 'Hechos 15: el concilio y el método para resolver conflictos doctrinales', libros: 'Hch 15', tipo: 'ministerial' },
            { n: 325, t: 'Hechos 21–28: juicio, apelación y Roma', libros: 'Hch 21–28', tipo: 'exegesis' },
            { n: 326, t: 'Narrativa y doctrina: qué se puede y qué no se puede fundamentar en Hechos', libros: '—', tipo: 'hermeneutica' }
          ]
        },
        {
          id: '3.4', area: 'Nuevo Testamento', titulo: 'Epístolas paulinas',
          lecciones: [
            { n: 327, t: 'Pablo: vida, cronología y teología de conjunto', libros: 'Hch 9; Gá 1', tipo: 'historica' },
            { n: 328, t: 'Romanos 1–4: el problema y la justificación', libros: 'Ro 1–4', tipo: 'exegesis' },
            { n: 329, t: 'Romanos 5–8: unión con Cristo y vida en el Espíritu', libros: 'Ro 5–8', tipo: 'exegesis' },
            { n: 330, t: 'Romanos 9–11: Israel, elección y misericordia', libros: 'Ro 9–11', tipo: 'debate' },
            { n: 331, t: 'Romanos 12–16: la ética que sigue al evangelio', libros: 'Ro 12–16', tipo: 'exegesis' },
            { n: 332, t: '1 Corintios: una iglesia dividida y sus problemas reales', libros: '1 Co', tipo: 'exegesis' },
            { n: 333, t: '2 Corintios: ministerio, debilidad y falsos apóstoles', libros: '2 Co', tipo: 'exegesis' },
            { n: 334, t: 'Gálatas: libertad frente al legalismo', libros: 'Gá', tipo: 'exegesis' },
            { n: 335, t: 'Efesios y Colosenses: Cristo, Iglesia y nueva humanidad', libros: 'Ef; Col', tipo: 'exegesis' },
            { n: 336, t: 'Filipenses y Filemón: gozo, humildad y reconciliación', libros: 'Fil; Flm', tipo: 'exegesis' },
            { n: 337, t: '1–2 Tesalonicenses: esperanza y trabajo', libros: '1–2 Ts', tipo: 'exegesis' },
            { n: 338, t: 'Pastorales: 1–2 Timoteo y Tito', libros: '1–2 Ti; Tit', tipo: 'ministerial' }
          ]
        },
        {
          id: '3.5', area: 'Nuevo Testamento', titulo: 'Epístolas generales y Apocalipsis',
          lecciones: [
            { n: 339, t: 'Hebreos: la superioridad de Cristo y las advertencias', libros: 'He', tipo: 'exegesis' },
            { n: 340, t: 'Santiago: fe que se demuestra', libros: 'Stg', tipo: 'exegesis' },
            { n: 341, t: '1–2 Pedro: sufrimiento, santidad y falsos maestros', libros: '1–2 P', tipo: 'exegesis' },
            { n: 342, t: '1–3 Juan y Judas: verdad, amor y contender por la fe', libros: '1–3 Jn; Jud', tipo: 'exegesis' },
            { n: 343, t: 'Apocalipsis: género, estructura y las cuatro escuelas de interpretación', libros: 'Ap 1', tipo: 'debate' },
            { n: 344, t: 'Apocalipsis 2–3: las siete iglesias', libros: 'Ap 2–3', tipo: 'exegesis' },
            { n: 345, t: 'Apocalipsis 4–18: sellos, trompetas y copas', libros: 'Ap 4–18', tipo: 'exegesis' },
            { n: 346, t: 'Apocalipsis 19–22: el desenlace y la nueva creación', libros: 'Ap 19–22', tipo: 'exegesis' }
          ]
        },
        {
          id: '3.6', area: 'Hermenéutica', titulo: 'Hermenéutica II y exégesis',
          lecciones: [
            { n: 347, t: 'Del texto al sentido: pasos de una exégesis completa', libros: '—', tipo: 'exegesis' },
            { n: 348, t: 'Análisis literario: estructura, quiasmo, inclusión, argumento', libros: '—', tipo: 'exegesis' },
            { n: 349, t: 'Gramática y sintaxis que sí cambian el sentido', libros: '—', tipo: 'exegesis' },
            { n: 350, t: 'Estudio de palabras hecho correctamente', libros: '—', tipo: 'exegesis' },
            { n: 351, t: 'Tipología, símbolo y numerología: límites responsables', libros: '—', tipo: 'hermeneutica' },
            { n: 352, t: 'El Nuevo Testamento citando al Antiguo', libros: 'Os 11:1 / Mt 2:15', tipo: 'debate' },
            { n: 353, t: 'Historia de la interpretación: patrística, medieval, reforma, moderna', libros: '—', tipo: 'historica' },
            { n: 354, t: 'Taller: exégesis completa de un pasaje asignado', libros: '—', tipo: 'taller' }
          ]
        },
        {
          id: '3.7', area: 'Teología sistemática', titulo: 'Doctrina organizada por temas',
          lecciones: [
            { n: 355, t: 'Qué es la teología sistemática y cómo se hace', libros: '—', tipo: 'doctrinal' },
            { n: 356, t: 'Atributos de Dios', libros: 'Éx 34; Sal 139; Is 40', tipo: 'doctrinal' },
            { n: 357, t: 'La Trinidad: formulación, herejías antiguas y precisión', libros: 'Jn 1; Mt 28:19', tipo: 'doctrinal' },
            { n: 358, t: 'Creación y providencia', libros: 'Gn 1; Col 1:16-17', tipo: 'doctrinal' },
            { n: 359, t: 'Antropología y hamartiología: naturaleza humana y pecado', libros: 'Gn 1–3; Ro 5', tipo: 'doctrinal' },
            { n: 360, t: 'Cristología: las dos naturalezas y los concilios', libros: 'Jn 1; Fil 2; Col 1', tipo: 'doctrinal' },
            { n: 361, t: 'La obra de Cristo: teorías de la expiación comparadas', libros: 'Is 53; Ro 3; He 9', tipo: 'debate' },
            { n: 362, t: 'Soteriología: llamamiento, regeneración, justificación, adopción', libros: 'Ro 8:29-30; Ef 2', tipo: 'doctrinal' },
            { n: 363, t: 'Gracia, fe, obras y perseverancia: el debate calvinista-arminiano', libros: 'Jn 6; Ro 9; He 6', tipo: 'debate' },
            { n: 364, t: 'Pneumatología: persona y obra del Espíritu Santo', libros: 'Jn 14–16; Ro 8', tipo: 'doctrinal' },
            { n: 365, t: 'Bautismo en el Espíritu y santificación: posturas comparadas', libros: 'Hch 2; 8; 19; 1 Co 12–14', tipo: 'debate' },
            { n: 366, t: 'Dones espirituales: cesacionismo y continuismo', libros: '1 Co 12–14; Ef 4', tipo: 'debate' },
            { n: 367, t: 'Sanidad divina: textos, posturas y cuidado pastoral', libros: 'Stg 5:14-16; 2 Co 12', tipo: 'debate' },
            { n: 368, t: 'Eclesiología: naturaleza, gobierno, ordenanzas y disciplina', libros: 'Mt 18; Hch 6; 1 Ti 3', tipo: 'doctrinal' }
          ]
        },
        {
          id: '3.8', area: 'Historia', titulo: 'Historia de la Iglesia',
          lecciones: [
            { n: 369, t: 'Los seis períodos: mapa general de veinte siglos', libros: '—', tipo: 'historica' },
            { n: 370, t: 'La iglesia apostólica', libros: '—', tipo: 'historica' },
            { n: 371, t: 'La iglesia perseguida (100–313)', libros: '—', tipo: 'historica' },
            { n: 372, t: 'La iglesia imperial y los concilios (313–476)', libros: '—', tipo: 'historica' },
            { n: 373, t: 'La iglesia medieval (476–1453)', libros: '—', tipo: 'historica' },
            { n: 374, t: 'La Reforma: Lutero, Calvino, radicales y contrarreforma', libros: '—', tipo: 'historica' },
            { n: 375, t: 'Avivamientos, misiones y el mundo moderno', libros: '—', tipo: 'historica' },
            { n: 376, t: 'Orígenes del pentecostalismo y el movimiento carismático', libros: '—', tipo: 'historica' },
            { n: 377, t: 'El cristianismo en América Latina', libros: '—', tipo: 'historica' },
            { n: 378, t: 'Historia de los credos y confesiones', libros: '—', tipo: 'historica' }
          ]
        },
        {
          id: '3.9', area: 'Evaluación', titulo: 'Cierre de nivel',
          lecciones: [
            { n: 379, t: 'Repaso integrador del Nivel 3', libros: '—', tipo: 'repaso' },
            { n: 380, t: 'Examen de dominio — Nivel 3', libros: '—', tipo: 'examen' }
          ]
        }
      ]
    },

    {
      id: 4,
      nombre: 'Nivel 4 — Especialización ministerial',
      lema: 'Competencia: enseñar, predicar, defender, discernir y pastorear con fundamento.',
      capacidad: 'Al terminar, el estudiante produce: prepara una clase, un sermón expositivo, una defensa razonada y una respuesta pastoral fundamentada.',
      modulos: [
        {
          id: '4.1', area: 'Escatología', titulo: 'Las últimas cosas, en serio',
          lecciones: [
            { n: 401, t: 'Cómo se estudia escatología sin especular', libros: '—', tipo: 'hermeneutica' },
            { n: 402, t: 'Muerte, estado intermedio y resurrección', libros: '1 Co 15; 2 Co 5', tipo: 'doctrinal' },
            { n: 403, t: 'El discurso del Monte de los Olivos', libros: 'Mt 24–25', tipo: 'exegesis' },
            { n: 404, t: 'La segunda venida: lo que todos afirman', libros: '1 Ts 4; Hch 1:11', tipo: 'doctrinal' },
            { n: 405, t: 'Milenio: premilenarismo, amilenarismo y posmilenarismo', libros: 'Ap 20', tipo: 'debate' },
            { n: 406, t: 'Tribulación y arrebatamiento: pretribulacionismo y alternativas', libros: '1 Ts 4; 2 Ts 2', tipo: 'debate' },
            { n: 407, t: 'Dispensacionalismo y teología del pacto comparados', libros: '—', tipo: 'debate' },
            { n: 408, t: 'Juicio final, infierno y cielo: textos y posturas', libros: 'Mt 25:31-46; Ap 20:11-15', tipo: 'debate' },
            { n: 409, t: 'Cómo enseñar escatología en la iglesia sin dividirla', libros: '—', tipo: 'ministerial' }
          ]
        },
        {
          id: '4.2', area: 'Apologética', titulo: 'Defensa razonada de la fe',
          lecciones: [
            { n: 410, t: 'Qué es la apologética y qué no es', libros: '1 P 3:15-16', tipo: 'apologetica' },
            { n: 411, t: 'Existencia de Dios: los argumentos y sus límites', libros: 'Ro 1:19-20', tipo: 'apologetica' },
            { n: 412, t: 'El problema del mal y del sufrimiento', libros: 'Job; Lc 13:1-5', tipo: 'apologetica' },
            { n: 413, t: 'Confiabilidad histórica de los evangelios', libros: '—', tipo: 'apologetica' },
            { n: 414, t: 'La resurrección como argumento histórico', libros: '1 Co 15:3-8', tipo: 'apologetica' },
            { n: 415, t: 'Ciencia y fe: creación, edad de la tierra, evolución', libros: 'Gn 1–2', tipo: 'debate' },
            { n: 416, t: 'Objeciones morales al Antiguo Testamento', libros: 'Jos 6; Dt 20', tipo: 'apologetica' },
            { n: 417, t: 'Respuesta al ateísmo y al escepticismo contemporáneo', libros: '—', tipo: 'apologetica' },
            { n: 418, t: 'Sectas y grupos: mormonismo y Testigos de Jehová', libros: 'Jn 1:1; Col 2:9', tipo: 'apologetica' },
            { n: 419, t: 'Islam, judaísmo y religiones orientales: diferencias reales', libros: '—', tipo: 'apologetica' },
            { n: 420, t: 'Nueva Era, ocultismo y espiritualidad difusa', libros: 'Dt 18:9-14', tipo: 'apologetica' },
            { n: 421, t: 'Discernimiento doctrinal dentro de la iglesia evangélica', libros: '1 Jn 4:1; Hch 17:11', tipo: 'apologetica' }
          ]
        },
        {
          id: '4.3', area: 'Homilética', titulo: 'Predicación',
          lecciones: [
            { n: 422, t: 'Qué es predicar y cuál es su lugar bíblico', libros: 'Neh 8; 2 Ti 4:1-5', tipo: 'ministerial' },
            { n: 423, t: 'El predicador como comunicador', libros: '—', tipo: 'ministerial' },
            { n: 424, t: 'Del texto a la idea central', libros: '—', tipo: 'ministerial' },
            { n: 425, t: 'Tipos de sermón: expositivo, textual, temático', libros: '—', tipo: 'ministerial' },
            { n: 426, t: 'El bosquejo: construcción y uso', libros: '—', tipo: 'ministerial' },
            { n: 427, t: 'Introducción, transiciones y conclusión', libros: '—', tipo: 'ministerial' },
            { n: 428, t: 'Ilustración y aplicación sin manipular', libros: '—', tipo: 'ministerial' },
            { n: 429, t: 'Entrega: voz, cuerpo, tiempo y nervios', libros: '—', tipo: 'ministerial' },
            { n: 430, t: 'Predicar Cristo desde el Antiguo Testamento sin forzarlo', libros: 'Lc 24:27', tipo: 'ministerial' },
            { n: 431, t: 'Taller: preparar y entregar un sermón expositivo completo', libros: '—', tipo: 'taller' }
          ]
        },
        {
          id: '4.4', area: 'Docencia', titulo: 'Formación de maestros',
          lecciones: [
            { n: 432, t: 'Cómo aprende un adulto y cómo aprende un joven', libros: '—', tipo: 'ministerial' },
            { n: 433, t: 'Diseñar una clase de 30 a 45 minutos', libros: '—', tipo: 'ministerial' },
            { n: 434, t: 'Simplificar sin distorsionar', libros: '—', tipo: 'ministerial' },
            { n: 435, t: 'Preguntas, analogías y corrección de errores en clase', libros: '—', tipo: 'ministerial' },
            { n: 436, t: 'Evaluar si el alumno realmente aprendió', libros: '—', tipo: 'ministerial' },
            { n: 437, t: 'Taller: enseñar una lección del Instituto a otros', libros: '—', tipo: 'taller' }
          ]
        },
        {
          id: '4.5', area: 'Pastoral', titulo: 'Teología pastoral y ética',
          lecciones: [
            { n: 438, t: 'Ética cristiana: cómo se decide lo correcto', libros: 'Mi 6:8; Ro 12', tipo: 'doctrinal' },
            { n: 439, t: 'Matrimonio, divorcio y nuevo matrimonio: textos y posturas', libros: 'Mt 19; 1 Co 7', tipo: 'debate' },
            { n: 440, t: 'Sexualidad, género e identidad: enseñanza bíblica y trato pastoral', libros: 'Gn 2; Ro 1; 1 Co 6', tipo: 'debate' },
            { n: 441, t: 'Dinero, trabajo, justicia y pobreza', libros: 'Pr; Stg 5; 2 Co 8–9', tipo: 'doctrinal' },
            { n: 442, t: 'Vida, muerte y decisiones médicas difíciles', libros: 'Sal 139', tipo: 'debate' },
            { n: 443, t: 'Consejería bíblica básica y sus límites', libros: 'Gá 6:1-2', tipo: 'ministerial' },
            { n: 444, t: 'Duelo, crisis, abuso y cuándo derivar a un profesional', libros: '—', tipo: 'ministerial' },
            { n: 445, t: 'Liderazgo, conflicto y disciplina en la congregación', libros: 'Mt 18:15-20; 1 Ti 5', tipo: 'ministerial' },
            { n: 446, t: 'Integridad del ministro y prevención del desgaste', libros: '1 Ti 4:16', tipo: 'ministerial' },
            { n: 447, t: 'Casos pastorales: resolución fundamentada', libros: '—', tipo: 'taller' }
          ]
        },
        {
          id: '4.6', area: 'Investigación', titulo: 'Investigación y proyecto final',
          lecciones: [
            { n: 448, t: 'Cómo investigar un tema bíblico con fuentes reales', libros: '—', tipo: 'herramientas' },
            { n: 449, t: 'Evaluar una fuente: perspectiva, fortaleza y límite', libros: '—', tipo: 'herramientas' },
            { n: 450, t: 'Construir y defender un argumento teológico', libros: '—', tipo: 'taller' },
            { n: 451, t: 'Examen final integrador', libros: '—', tipo: 'examen' },
            { n: 452, t: 'Proyecto de graduación: sermón, clase y monografía breve', libros: '—', tipo: 'taller' }
          ]
        }
      ]
    }
  ]
};

window.LECCIONES_DISPONIBLES = ['101'];
