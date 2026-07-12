export const RECOMMENDED_PLACES = [
  {
    destino: "San Miguel de Allende, México",
    nombreCorto: "San Miguel de Allende",
    pais: "México",
    flag: "🇲🇽",
    rating: "4.9",
    tag: "Arte y Arquitectura",
    clima: "22°C",
    lat: 20.9139,
    lon: -100.7439,
    imagen: "/images/san-miguel-de-allende.jpg",
    presupuesto_estimado: {
      vuelos: 250,
      hotel: 300,
      comida: 180,
      transporte: 90
    },
    hoteles: [
      {
        nombre: "Rosewood San Miguel de Allende",
        stars: "5",
        imagen: "https://images.trvl-media.com/lodging/4000000/3910000/3907700/3907636/03c8e2b3.jpg",
        descripcion: "Un lujoso santuario colonial con un spa de clase mundial, piscinas climatizadas rodeadas de jardines y el exclusivo bar Luna Rooftop, que ofrece vistas espectaculares de la Parroquia.",
        precio: "$$$$",
        rating: "4.9",
        direccion: "Nemesio Diez 11, Centro Histórico, 37700 San Miguel de Allende, Gto.",
        detalles: ["Luna Rooftop Bar", "Sense Spa", "Canchas de Tenis", "Kids Club", "Piscina climatizada"]
      },
      {
        nombre: "Hotel Matilda",
        stars: "5",
        imagen: "https://media-cdn.tripadvisor.com/media/photo-s/2d/9e/dc/d3/lobby.jpg",
        descripcion: "Hotel boutique de diseño contemporáneo enfocado en el arte. Alberga una colección única de arte contemporáneo, una piscina infinity excepcional y el renombrado restaurante gourmet Moxi.",
        precio: "$$$$",
        rating: "4.8",
        direccion: "Aldama 53, Centro Histórico, 37700 San Miguel de Allende, Gto.",
        detalles: ["Colección de Arte Privada", "Spa de Hidroterapia", "Piscina Infinity", "Bar con Mixología", "Restaurante Moxi"]
      },
      {
        nombre: "Casa de Sierra Nevada, A Belmond Hotel",
        stars: "5",
        imagen: "https://images.trvl-media.com/lodging/1000000/900000/894000/893921/c6c36360.jpg",
        descripcion: "Un conjunto de casonas históricas de los siglos XVI a XVIII restauradas. Habitaciones con chimenea de piedra, una piscina rodeada de muros coloniales y la famosa escuela culinaria Sazón.",
        precio: "$$$$",
        rating: "4.9",
        direccion: "Hospicio 35, Centro Histórico, 37700 San Miguel de Allende, Gto.",
        detalles: ["Escuela de cocina Sazón", "Piscina en patio colonial", "Habitaciones con chimenea", "Spa en casona", "Jardines privados"]
      }
    ],
    atracciones: [
      {
        nombre: "Parroquia de San Miguel Arcángel",
        tipo: "Cultura",
        imagen: "https://www.mimexico360.com/wp-content/uploads/2019/11/parroquiasma10-2.jpg",
        descripcion: "Icónico templo de cantera rosa de finales del siglo XIX, con un diseño gótico único creado por el maestro de obras Zeferino Gutiérrez basándose en postales de iglesias europeas.",
        precio: "Gratis",
        rating: "4.9",
        direccion: "Plaza Principal S/N, Centro Histórico, 37700 San Miguel de Allende, Gto.",
        detalles: ["Fachada de cantera rosa", "Criptas históricas", "Estilo Neogótico único", "Abierto todos los días"]
      },
      {
        nombre: "Fábrica La Aurora",
        tipo: "Arte y Diseño",
        imagen: "https://i0.wp.com/wokii.com/wp-content/uploads/2021/04/la-aurora-san-miguel-de-allende-20.jpg",
        descripcion: "Antigua fábrica textil convertida en un complejo de arte y diseño donde operan galerías de pintores, escultores, tiendas de antigüedades, estudios activos y agradables cafeterías.",
        precio: "Gratis",
        rating: "4.7",
        direccion: "Calzada de La Aurora S/N, Aurora, 37710 San Miguel de Allende, Gto.",
        detalles: ["Estudios de artistas activos", "Tiendas de antigüedades", "Cafés y restaurantes", "Amplio estacionamiento"]
      },
      {
        nombre: "Jardín Principal",
        tipo: "Plaza Central",
        imagen: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=600&q=80",
        descripcion: "El corazón y centro de reunión social de la ciudad. Rodeado de portales históricos y laureles de la India perfectamente esculpidos, ofrece música de mariachis y un ambiente vibrante.",
        precio: "Gratis",
        rating: "4.8",
        direccion: "Principal 18, Centro Histórico, 37700 San Miguel de Allende, Gto.",
        detalles: ["Kiosco central", "Música en vivo los fines de semana", "Puestos de esquites y nieves", "Punto de encuentro"]
      },
      {
        nombre: "Cañada de la Virgen",
        tipo: "Arqueología",
        imagen: "https://images.unsplash.com/photo-1518638150341-db7d7f76634a?auto=format&fit=crop&w=600&q=80",
        descripcion: "Asentamiento arqueológico prehispánico Otomí de características defensivas y ceremoniales, que destaca por la precisión matemática de sus pirámides orientadas a los astros.",
        precio: "$60 MXN aprox.",
        rating: "4.6",
        direccion: "Carretera San Miguel de Allende a Guanajuato KM 16, Gto.",
        detalles: ["Visita guiada obligatoria", "Senderismo de 2km", "Pirámides ceremoniales", "Reserva ecológica"]
      }
    ],
    restaurantes: [
      {
        nombre: "Moxi Restaurant",
        tipo: "Mexicana Contemporánea",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUux37GBVK8FD9nHdMbxofbT3zfEuw57xuWPBCzvIjZu_EcOwAdjozHeQ&s=10",
        descripcion: "Menú excepcional creado por chefs reconocidos, que combina ingredientes tradicionales mexicanos con técnicas de alta cocina moderna, en la terraza vanguardista del Hotel Matilda.",
        precio: "$$$$",
        rating: "4.6",
        direccion: "Aldama 53 (Dentro de Hotel Matilda), Centro, 37700 San Miguel de Allende, Gto.",
        detalles: ["Menú de degustación", "Terraza exterior elegante", "Cava de vinos selectos", "Mixología de autor"]
      },
      {
        nombre: "Áperi",
        tipo: "Cocina de Autor",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq8swdtep6cDvmdNH-pkeL_ZjzPNeWZheHQE-7G6Qja5PL7cw1JQSZjnER&s=10",
        descripcion: "Experiencia culinaria íntima con ingredientes del campo a la mesa. Cuenta con un menú degustación multisensorial y una fantástica Mesa del Chef dentro de un patio colonial elegante.",
        precio: "$$$$",
        rating: "4.7",
        direccion: "Quebrada 101, Centro Histórico, 37700 San Miguel de Allende, Gto.",
        detalles: ["Mesa del Chef disponible", "Patio colonial íntimo", "Maridaje de vinos locales", "Ingredientes de temporada"]
      },
      {
        nombre: "La Única",
        tipo: "Regional y Grill",
        imagen: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=600&q=80",
        descripcion: "Restaurante de cocina regional y cortes con un toque contemporáneo del norte de México. Cuenta con una terraza espectacular con vistas panorámicas privilegiadas hacia la Parroquia.",
        precio: "$$$",
        rating: "4.5",
        direccion: "Canal 9, Centro Histórico, 37700 San Miguel de Allende, Gto.",
        detalles: ["Terraza con vista a la iglesia", "Cortes de carne premium", "Tacos gourmet y mariscos", "DJ en vivo por la noche"]
      }
    ],
    itinerario: [
      { dia: "Día 1", descripcion: "Llegada, recorrido por el Jardín Principal y visita a la impresionante Parroquia de San Miguel Arcángel. Cena en Moxi." },
      { dia: "Día 2", descripcion: "Visita a la Fábrica La Aurora para ver galerías de arte y tiendas de diseño. Tarde de relajación en un spa local." },
      { dia: "Día 3", descripcion: "Excursión de medio día a la zona arqueológica de Cañada de la Virgen. Por la tarde, degustación de tequila o mezcal." },
      { dia: "Día 4", descripcion: "Tour a pie por las hermosas calles empedradas, visita al Templo de San Francisco y mirador panorámico de la ciudad." },
      { dia: "Día 5", descripcion: "Desayuno tradicional, compras de artesanías locales en el Mercado de Artesanías y fin del viaje." }
    ]
  },
  {
    destino: "Kyoto, Japón",
    nombreCorto: "Kyoto",
    pais: "Japón",
    flag: "🇯🇵",
    rating: "4.95",
    tag: "Zen y Tradición",
    clima: "18°C",
    lat: 35.0116,
    lon: 135.7681,
    imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    presupuesto_estimado: {
      vuelos: 950,
      hotel: 550,
      comida: 320,
      transporte: 180
    },
    hoteles: [
      {
        nombre: "The Ritz-Carlton, Kyoto",
        stars: "5",
        imagen: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
        descripcion: "Lujo sereno a orillas del río Kamogawa. Con vistas de Higashiyama, suites decoradas con paneles de madera shoji hechos a mano, y una gastronomía Michelin excepcional.",
        precio: "$$$$",
        rating: "4.9",
        direccion: "Kamiohyacho 543, Nakagyo-ku, Kyoto 604-0902",
        detalles: ["Spa con piscina de 20m", "Restaurante Tempura Mizuki", "Clase de elaboración de sushi", "Vistas al río Kamogawa"]
      },
      {
        nombre: "Hoshinoya Kyoto",
        stars: "5",
        imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
        descripcion: "Un ryokan de ultra-lujo situado en Arashiyama. Únicamente accesible mediante un paseo de 15 minutos en barca tradicional de madera por el río Oi, rodeado de arces centenarios.",
        precio: "$$$$",
        rating: "4.95",
        direccion: "Arashiyama Genrokuzancho 11-2, Nishikyo-ku, Kyoto 615-8385",
        detalles: ["Acceso exclusivo en bote", "Jardín zen de musgo y rocas", "Desayuno Hot-pot tradicional", "Ceremonia del té matutina"]
      },
      {
        nombre: "Sowaka Ryokan",
        stars: "5",
        imagen: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80",
        descripcion: "Un ryokan contemporáneo de lujo alojado en una casona tradicional machiya de la era Taisho en el distrito histórico de Gion. Una mezcla de paz zen e interiorismo japonés.",
        precio: "$$$$",
        rating: "4.8",
        direccion: "Kiyomotocho 480, Higashiyama-ku, Kyoto 605-0084",
        detalles: ["Habitaciones Machiya auténticas", "Restaurante galardonado La Bombance", "Baños de madera de hinoki", "Patios ajardinados privados"]
      }
    ],
    atracciones: [
      {
        nombre: "Fushimi Inari-taisha",
        tipo: "Santuario",
        imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
        descripcion: "El santuario sintoísta dedicado a la deidad de la agricultura. Famoso mundialmente por sus senderos de montaña flanqueados por miles de toriis de madera color bermellón.",
        precio: "Gratis",
        rating: "4.9",
        direccion: "Fukakusa Yabunouchicho 68, Fushimi-ku, Kyoto 612-0882",
        detalles: ["Senderos de toriis rojos", "Estatutas de zorros de piedra", "Vistas de la ciudad desde la cima", "Abierto las 24 horas"]
      },
      {
        nombre: "Kinkaku-ji (Pabellón Dorado)",
        tipo: "Histórico",
        imagen: "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&w=600&q=80",
        descripcion: "Templo budista zen patrimonio de la humanidad, cuyas plantas superiores se hallan completamente recubiertas en pan de oro. Rodeado de un hermoso jardín tradicional de paseo.",
        precio: "¥400 aprox.",
        rating: "4.8",
        direccion: "Kinkakujicho 1, Kita-ku, Kyoto 603-8361",
        detalles: ["Recubrimiento de oro real", "Jardín de paseo tradicional", "Estanque Kyoko-chi", "Casa de té Sekka-tei"]
      },
      {
        nombre: "Bosque de Bambú de Arashiyama",
        tipo: "Naturaleza",
        imagen: "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?auto=format&fit=crop&w=600&q=80",
        descripcion: "Un majestuoso sendero rodeado de gigantescas cañas de bambú verde que se elevan al cielo. Su susurro con el viento ha sido clasificado como uno de los sonidos nacionales protegidos de Japón.",
        precio: "Gratis",
        rating: "4.7",
        direccion: "Arashiyama, Ukyo-ku, Kyoto 616-0000",
        detalles: ["Sendero de bambú gigante", "Templo Tenryu-ji adyacente", "Sonido ambiental protegido", "Ideal para fotos temprano en la mañana"]
      },
      {
        nombre: "Templo Kiyomizu-dera",
        tipo: "Vistas y Cultura",
        imagen: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
        descripcion: "Templo fundado en el año 778 en la montaña Otowa, célebre por su terraza de madera sostenida por enormes pilares ensamblados sin clavos, ofreciendo vistas inigualables.",
        precio: "¥400 aprox.",
        rating: "4.8",
        direccion: "Kiyomizu 1-chome 294, Higashiyama-ku, Kyoto 605-0862",
        detalles: ["Terraza histórica sin clavos", "Manantial Otowa (tres canales de agua)", "Salón principal Hondo", "Vistas de cerezos y arces"]
      }
    ],
    restaurantes: [
      {
        nombre: "Gion Sasaki",
        tipo: "Kaiseki (3 Estrellas Michelin)",
        imagen: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=600&q=80",
        descripcion: "Una experiencia culinaria moderna e interactiva donde el chefHiroshi Sasaki prepara un menú Kaiseki sumamente creativo enfrente de los comensales en una exclusiva barra.",
        precio: "$$$$",
        rating: "4.9",
        direccion: "Gionmachi Minamigawa 566-4, Higashiyama-ku, Kyoto 605-0074",
        detalles: ["3 Estrellas Michelin", "Barra de madera de ginkgo", "Menú Kaiseki de vanguardia", "Reserva obligatoria con meses de antelación"]
      },
      {
        nombre: "Kyoto Kaji",
        tipo: "Sushi Tradicional",
        imagen: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80",
        descripcion: "Restaurante íntimo de sushi de altísima calidad. Pescado fresco adquirido cada mañana directamente del mercado local de Kyoto y preparado con la sabiduría del chef.",
        precio: "$$$",
        rating: "4.7",
        direccion: "Nakagyo-ku, Kyoto",
        detalles: ["Menú Omakase", "Atmósfera zen íntima (8 asientos)", "Pescado fresco del día", "Maridaje con sake local"]
      },
      {
        nombre: "Honke Owariya",
        tipo: "Fideos Soba Históricos",
        imagen: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=600&q=80",
        descripcion: "Establecido en 1465, comenzó como confitería y posteriormente como casa de fideos Soba. Es considerado el restaurante más antiguo del país, amado por la casa imperial.",
        precio: "$$",
        rating: "4.6",
        direccion: "Kurumayacho Nijo-sagaru, Nakagyo-ku, Kyoto 604-0841",
        detalles: ["Soba histórico de harina de Hokkaido", "Caldo dashi secreto con agua de pozo local", "Especialidad en Hourai Soba", "Casa tradicional de madera"]
      }
    ],
    itinerario: [
      { dia: "Día 1", descripcion: "Llegada a Kyoto. Paseo nocturno por el histórico barrio de Gion con posibilidad de ver geishas. Cena Kaiseki." },
      { dia: "Día 2", descripcion: "Visita temprano al Santuario Fushimi Inari-taisha para subir la montaña de toriis rojos. Por la tarde, Templo Kiyomizu-dera." },
      { dia: "Día 3", descripcion: "Recorrido por el Pabellón Dorado (Kinkaku-ji) y caminata por el tranquilo Templo Zen Ryoan-ji con su jardín de rocas." },
      { dia: "Día 4", descripcion: "Excursión al Bosque de Bambú de Arashiyama y visita al Templo Tenryu-ji. Paseo opcional en bote tradicional por el río Hozu." },
      { dia: "Día 5", descripcion: "Visita al Mercado de Nishiki para probar deliciosa comida callejera tradicional antes de la partida." }
    ]
  },
  {
    destino: "Chiang Mai, Tailandia",
    nombreCorto: "Chiang Mai",
    pais: "Tailandia",
    flag: "🇹🇭",
    rating: "4.85",
    tag: "Naturaleza y Templos",
    clima: "28°C",
    lat: 18.7883,
    lon: 98.9853,
    imagen: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
    presupuesto_estimado: {
      vuelos: 800,
      hotel: 220,
      comida: 140,
      transporte: 80
    },
    hoteles: [
      {
        nombre: "Anantara Chiang Mai Resort",
        stars: "5",
        imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        descripcion: "Un impresionante resort a orillas del río Ping. Su diseño fusiona la herencia del antiguo consulado británico construido en 1921 con elegantes toques asiáticos modernos.",
        precio: "$$$",
        rating: "4.8",
        direccion: "123 Charoenprathet Road, T.Changklan, A.Muang, Chiang Mai 50100",
        detalles: ["Piscina de 34m frente al río", "Té de la tarde colonial", "Spa de lujo con terapias Lanna", "Clases de Muay Thai"]
      },
      {
        nombre: "137 Pillars House",
        stars: "5",
        imagen: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
        descripcion: "Una casona colonial de madera de teca del siglo XIX, cuidadosamente restaurada en el centro del distrito de Wat Gate, equipada con suites amplias y rodeada de vegetación exuberante.",
        precio: "$$$$",
        rating: "4.9",
        direccion: "2 soi 1, Nawatgate Road, Wat Gate, Chiang Mai 50000",
        detalles: ["Pared de jardín vertical de 25m", "Suites con bañeras victorianas", "Gimnasio y spa", "Restaurante gourmet de teca"]
      },
      {
        nombre: "Tamarind Village",
        stars: "4",
        imagen: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
        descripcion: "Un oasis rodeado de templos en la ciudad antigua. Su entrada es a través de un espectacular túnel verde custodiado por un imponente árbol de tamarindo con 200 años de antigüedad.",
        precio: "$$",
        rating: "4.7",
        direccion: "50/1 Ratchadamnoen Road, Sri Phoom, Chiang Mai 50200",
        detalles: ["Patio con piscina tranquila", "Árbol de tamarindo de 200 años", "Clases de manualidades locales gratis", "Ubicación ideal para el Sunday Market"]
      }
    ],
    atracciones: [
      {
        nombre: "Wat Phra That Doi Suthep",
        tipo: "Templo de Montaña",
        imagen: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80",
        descripcion: "El santuario budista más sagrado y reverenciado en el norte del país, situado en una frondosa montaña. Famoso por su estupa central dorada que brilla al sol.",
        precio: "฿30 aprox.",
        rating: "4.8",
        direccion: "Doi Suthep, Chiang Mai 50200",
        detalles: ["Chedi dorado central", "Escalera Naga de 306 escalones", "Mirador panorámico de la ciudad", "Vistas espectaculares al amanecer"]
      },
      {
        nombre: "Elephant Nature Park",
        tipo: "Santuario Ético",
        imagen: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=600&q=80",
        descripcion: "Pionero centro de rescate para elefantes, perros, gatos y búfalos fundado por Lek Chailert. Un espacio libre de maltrato donde se puede observar a los paquidermos interactuar pacíficamente.",
        precio: "Desde ฿2500",
        rating: "4.9",
        direccion: "209/2 Sridom Rd, Chiang Mai 50100",
        detalles: ["Interacción 100% ética y libre de crueldad", "Alimentación y observación de elefantes en libertad", "Visitas de día completo o voluntariados", "Almuerzo buffet vegetariano incluido"]
      },
      {
        nombre: "Night Bazaar",
        tipo: "Compras y Comida",
        imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        descripcion: "Un vibrante distrito de mercados que cobra vida todas las tardes al encender sus luces. Es ideal para comprar artesanías locales hechas de madera, seda y comer comida local deliciosa y barata.",
        precio: "Gratis",
        rating: "4.5",
        direccion: "Chang Klan Road, Chang Khlan, Chiang Mai 50100",
        detalles: ["Cientos de puestos de comida y suvenires", "Espectáculos en vivo", "Gran ambiente nocturno", "Regateo aceptado y recomendado"]
      },
      {
        nombre: "Wat Chedi Luang",
        tipo: "Ruinas Históricas",
        imagen: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=600&q=80",
        descripcion: "Un antiguo templo budista erigido a finales del siglo XIV. Su gran estupa central parcialmente en ruinas debido a un terremoto en 1545 sigue albergando una aura espiritual imponente.",
        precio: "฿40 aprox.",
        rating: "4.7",
        direccion: "103 Prapokkloa Road, Phra Sing, Chiang Mai 50200",
        detalles: ["Chedi histórico masivo de teca y piedra", "Charlas diarias con monjes (Monk Chat)", "Esculturas de elefantes de piedra", "Ubicación céntrica en la ciudad amurallada"]
      }
    ],
    restaurantes: [
      {
        nombre: "SP Chicken",
        tipo: "Pollo Asado Tailandés",
        imagen: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80",
        descripcion: "Un pequeño pero famosísimo local familiar recomendado por la guía Michelin, especializado en preparar pollos asados al estilo Isan rellenos de ajo aromático, limoncillo y especias.",
        precio: "$",
        rating: "4.6",
        direccion: "9/1 Samlan Road Soi 1, Sri Phoom, Chiang Mai 50200",
        detalles: ["Pollo asado estilo Isan", "Ensalada Som Tum (ensalada de papaya)", "Salsa picante de tamarindo", "Recomendado por la guía Michelin (Bib Gourmand)"]
      },
      {
        nombre: "Huen Phen",
        tipo: "Comida Lanna Tradicional",
        imagen: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
        descripcion: "Sirviendo platos tradicionales Lanna del norte del país por más de 40 años. Decorado al estilo vintage con cientos de antigüedades acumuladas a lo largo de décadas.",
        precio: "$$",
        rating: "4.4",
        direccion: "112 Ratchamanka Road, Phra Sing, Chiang Mai 50200",
        detalles: ["Especialidad en Khao Soi (curry de fideos crujientes)", "Ambiente de museo nocturno lleno de antigüedades", "Platos de degustación del norte de Tailandia", "Comida auténtica y local"]
      },
      {
        nombre: "The Service 1921",
        tipo: "Fusión Asiática",
        imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        descripcion: "Restaurante del Anantara decorado ingeniosamente simulando una sede del servicio de inteligencia británico de 1921. Cocina contemporánea exquisita de fusión asiática.",
        precio: "$$$",
        rating: "4.7",
        direccion: "Dentro del Anantara Chiang Mai Resort, Chiang Mai 50100",
        detalles: ["Salas secretas tras librerías", "Cócteles de mixología creativa de espías", "Platos chinos, vietnamitas e indios sofisticados", "Vistas al río Ping"]
      }
    ],
    itinerario: [
      { dia: "Día 1", descripcion: "Llegada a Chiang Mai. Exploración de los templos de la antigua ciudad amurallada como Wat Chedi Luang. Cena en Huen Phen." },
      { dia: "Día 2", descripcion: "Subida al templo Wat Phra That Doi Suthep para admirar las vistas panorámicas al amanecer. Tarde de masaje tailandés tradicional." },
      { dia: "Día 3", descripcion: "Visita interactiva de día completo al santuario ético Elephant Nature Park para conocer de cerca el rescate de elefantes." },
      { dia: "Día 4", descripcion: "Clase de cocina tailandesa por la mañana. Por la noche, compras y comida callejera en el Chiang Mai Night Bazaar." },
      { dia: "Día 5", descripcion: "Paseo matutino por el barrio creativo de Nimmanhaemin y traslado para la salida." }
    ]
  },
  {
    destino: "Hoi An, Vietnam",
    nombreCorto: "Hoi An",
    pais: "Vietnam",
    flag: "🇻🇳",
    rating: "4.8",
    tag: "Ciudad de Linternas",
    clima: "26°C",
    lat: 15.8801,
    lon: 108.338,
    imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    presupuesto_estimado: {
      vuelos: 850,
      hotel: 250,
      comida: 150,
      transporte: 70
    },
    hoteles: [
      {
        nombre: "Four Seasons Resort The Nam Hai",
        stars: "5",
        imagen: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80",
        descripcion: "Resort de ultra-lujo situado a orillas del mar en la playa Ha My. Incorpora villas privadas de espectacular diseño inspiradas en los hogares tradicionales vietnamitas del siglo XIX.",
        precio: "$$$$",
        rating: "4.95",
        direccion: "Block Ha My Dong B, Dien Ban Town, Quang Nam, Hoi An Beach",
        detalles: ["Tres piscinas infinitas frente al mar", "Villas privadas con piscina", "Spa sobre un estanque de loto", "Restaurante gourmet de fusión costera"]
      },
      {
        nombre: "Anantara Hoi An Resort",
        stars: "5",
        imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        descripcion: "Un retiro colonial situado al borde del río Thu Bon. Jardines tropicales suntuosos, habitaciones de diseño colonial indochino y actividades inmersivas de cocina y linternas.",
        precio: "$$$",
        rating: "4.8",
        direccion: "1 Pham Hong Thai Street, Cam Chau, Hoi An",
        detalles: ["Paseos en barco al atardecer", "Piscina rodeada de palmeras", "Clases de idioma y cultura vietnamita", "Restaurante Lanterns frente al río"]
      },
      {
        nombre: "La Siesta Hoi An Resort & Spa",
        stars: "5",
        imagen: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
        descripcion: "Boutique resort de ensueño colindante con campos de arroz. Cuenta con dos alas, colonial y clásica, servicio de spa de renombre y múltiples piscinas rodeadas de áreas verdes.",
        precio: "$$",
        rating: "4.9",
        direccion: "132 Hung Vuong, Thanh Ha, Hoi An 560000",
        detalles: ["Cuatro piscinas al aire libre (incluyendo agua salada)", "La Siesta Spa", "Servicio gratuito de transporte a la playa y centro", "Restaurante de cocina tradicional vietnamita y occidental"]
      }
    ],
    atracciones: [
      {
        nombre: "Casco Antiguo de Hoi An",
        tipo: "Patrimonio Cultural",
        imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        descripcion: "El corazón colonial de Hoi An. Declarado Patrimonio Mundial de la UNESCO, conserva casonas del siglo XV, templos chinos ricamente decorados y sus calles peatonales con linternas.",
        precio: "$120,000 VND aprox.",
        rating: "4.9",
        direccion: "Casco Antiguo, Hoi An, Quang Nam",
        detalles: ["Patrimonio Mundial de la UNESCO", "Entradas para casas históricas y templos de clanes", "Sin autos ni motos en horarios específicos", "Cientos de sastrerías a medida"]
      },
      {
        nombre: "Puente Cubierto Japonés",
        tipo: "Monumento Histórico",
        imagen: "https://images.unsplash.com/photo-1504618223053-559bdef9dd5a?auto=format&fit=crop&w=600&q=80",
        descripcion: "Una notable estructura arqueada construida por la comunidad japonesa local a principios del siglo XVII, que destaca por su techado de tejas ornamentado y su altar budista.",
        precio: "Incluido en pase de Casco Antiguo",
        rating: "4.6",
        direccion: "Nguyen Thi Minh Khai, Hoi An",
        detalles: ["Puente arqueado de madera histórico", "Esculturas de monos y perros guardianes", "Símbolo icónico de Hoi An", "Estructura protegida antigua"]
      },
      {
        nombre: "Mercado Nocturno de Linternas",
        tipo: "Atracción Visual",
        imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        descripcion: "Un despliegue de miles de linternas de seda de colores iluminadas cruzando el río. Ideal para cenar especialidades locales y adquirir manualidades típicas vietnamitas.",
        precio: "Gratis",
        rating: "4.7",
        direccion: "Nguyen Hoang Street, Hoi An",
        detalles: ["Paredes de linternas iluminadas para fotos", "Comida callejera vietnamita", "Souvenires locales", "Paseo nocturno imperdible"]
      },
      {
        nombre: "Playa de An Bang",
        tipo: "Playa y Relajación",
        imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        descripcion: "Hermosa playa de aguas cálidas y arena suave ubicada a corta distancia en bicicleta. Repleta de marisquerías y zonas ideales para relajarse en camastros tradicionales de bambú.",
        precio: "Gratis",
        rating: "4.6",
        direccion: "Hai Ba Trung, Cam An, Hoi An",
        detalles: ["Restaurantes de mariscos frente al mar", "Alquiler de camastros y sombrillas", "Ambiente relajado de playa", "Perfecto para ir en bicicleta"]
      }
    ],
    restaurantes: [
      {
        nombre: "Morning Glory Original",
        tipo: "Tradicional Vietnamita",
        imagen: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80",
        descripcion: "El afamado restaurante fundado por Miss Vy. Es el mejor lugar en Hoi An para probar los Cao Lau y los dumplings White Rose elaborados de forma tradicional en una cocina abierta central.",
        precio: "$$",
        rating: "4.6",
        direccion: "106 Nguyen Thai Hoc Street, Hoi An",
        detalles: ["Cocina central a la vista", "Especialidad en Cao Lau (fideos locales) y White Rose (dumplings de camarón)", "Cocina tradicional vietnamita", "Ubicación en el Casco Antiguo"]
      },
      {
        nombre: "Banh Mi Phuong",
        tipo: "Comida Callejera / Banh Mi",
        imagen: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
        descripcion: "El local de Banh Mi más famoso del mundo, popularizado por Anthony Bourdain en su programa. Sirve baguettes horneadas al día crujientes rellenas con paté especial de cerdo.",
        precio: "$",
        rating: "4.7",
        direccion: "2B Phan Chu Trinh Street, Cam Chau, Hoi An",
        detalles: ["El Banh Mi más famoso de Vietnam", "Ingredientes ultrafrescos", "Precios muy bajos", "Suele haber fila pero avanza rápido"]
      },
      {
        nombre: "Mango Mango",
        tipo: "Fusión frente al Río",
        imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        descripcion: "Restaurante de autor dirigido por el chef Tran Duc, conocido por su audaz y creativa cocina fusión con acentos vietnamitas y latinos, maridado con mixología tropical de calidad.",
        precio: "$$$",
        rating: "4.6",
        direccion: "45 Nguyen Phuc Chu Street, Hoi An",
        detalles: ["Vistas espectaculares del río y puente iluminado", "Coctelería premium e ingredientes locales innovadores", "Música acústica y DJ sets", "Ambiente moderno e informal"]
      }
    ],
    itinerario: [
      { dia: "Día 1", descripcion: "Llegada y caminata nocturna por las calles iluminadas con linternas del Casco Antiguo. Cena en Morning Glory." },
      { dia: "Día 2", descripcion: "Tour guiado en bicicleta por los arrozales circundantes y paseo en los botes tradicionales de canasta en el bosque de cocoteros de Cam Thanh." },
      { dia: "Día 3", descripcion: "Mañana de relajación en la Playa de An Bang. Al atardecer, paseo en bote por el río Thu Bon para encender linternas de papel flotantes." },
      { dia: "Día 4", descripcion: "Visita al taller artesanal de linternas de seda para diseñar la tuya propia. Almuerzo del célebre Banh Mi Phuong." },
      { dia: "Día 5", descripcion: "Compras de vestidos o trajes hechos a medida por sastres rápidos locales y despedida de Hoi An." }
    ]
  },
  {
    destino: "Oaxaca, México",
    nombreCorto: "Oaxaca",
    pais: "México",
    flag: "🇲🇽",
    rating: "4.92",
    tag: "Gastronomía y Cultura",
    clima: "24°C",
    lat: 17.0732,
    lon: -96.7266,
    imagen: "/images/oaxaca.jpg",
    presupuesto_estimado: {
      vuelos: 220,
      hotel: 280,
      comida: 190,
      transporte: 90
    },
    hoteles: [
      {
        nombre: "Quinta Real Oaxaca",
        stars: "5",
        imagen: "https://images.trvl-media.com/lodging/1000000/30000/23400/23319/81b40701.jpg",
        descripcion: "Majestuoso hotel colonial ubicado en lo que fue el histórico Convento de Santa Catalina de Siena fundado en el siglo XVI. Conserva frescos, arcos de piedra y patios espectaculares.",
        precio: "$$$$",
        rating: "4.9",
        direccion: "5 de Mayo 300, Centro Histórico, 68000 Oaxaca de Juárez, Oax.",
        detalles: ["Ubicado en ex-convento del siglo XVI", "Patio colonial principal majestuoso", "Piscina en jardín central", "Restaurante El Refectorio"]
      },
      {
        nombre: "Hotel Azul de Oaxaca",
        stars: "4",
        imagen: "https://media.foodandtravel.mx/wp-content/uploads/2025/01/Hotel_Azul_destacada_1.jpg",
        descripcion: "Hotel boutique de diseño que rinde tributo al arte y la cultura local en colaboración con reconocidos artistas de Oaxaca como Francisco Toledo. Estilo contemporáneo único.",
        precio: "$$$",
        rating: "4.7",
        direccion: "Mariano Abasolo 109, Centro Histórico, 68000 Oaxaca de Juárez, Oax.",
        detalles: ["Patios diseñados por Francisco Toledo", "Rooftop con vista al Templo de Santo Domingo", "Galería de arte y boutique interior", "Excelente restaurante Cocina Azul"]
      },
      {
        nombre: "Casa Oaxaca",
        stars: "5",
        imagen: "https://www.casaoaxaca.com.mx/assets/img/quedateencasa/quedate4.jpg",
        descripcion: "Un hotel gastronómico boutique de gran prestigio y exclusividad, compuesto por solo 9 habitaciones. Cuenta con el restaurante de renombre dirigido por el chef Alejandro Ruiz.",
        precio: "$$$$",
        rating: "4.9",
        direccion: "Manuel García Vigil 407, Centro Histórico, 68000 Oaxaca de Juárez, Oax.",
        detalles: ["Restaurante a cargo del chef Alejandro Ruiz", "Servicio ultra-personalizado", "Piscina privada íntima", "Terraza privada con vistas"]
      }
    ],
    atracciones: [
      {
        nombre: "Templo de Santo Domingo de Guzmán",
        tipo: "Cultura Barroca",
        imagen: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2022/02/LP_Oaxaca-006.jpg",
        descripcion: "Extraordinaria joya barroca edificada por la orden Dominica a partir de 1570. Su interior deslumbra por su retablo tallado y techos recubiertos con oro de 24 quilates.",
        precio: "Gratis",
        rating: "4.9",
        direccion: "Macedonio Alcalá S/N, Centro Histórico, 68000 Oaxaca de Juárez, Oax.",
        detalles: ["Interior recubierto de oro de 24 quilates", "Museo de las Culturas de Oaxaca adjunto", "Jardín Etnobotánico en el ex-convento", "Plaza con artesanos locales"]
      },
      {
        nombre: "Hierve el Agua",
        tipo: "Cascadas Petrificadas",
        imagen: "https://i0.wp.com/www.quepasaoaxaca.com/wp-content/uploads/2022/04/hierve-el-agua-coyote-6.jpeg",
        descripcion: "Un conjunto extraordinario de pozas de agua templada y cascadas petrificadas formadas a lo largo de miles de años por el escurrimiento de agua saturada de carbonato de calcio.",
        precio: "$50 MXN aprox.",
        rating: "4.8",
        direccion: "San Lorenzo Albarradas, Oaxaca",
        detalles: ["Pozas naturales de agua templada para nadar", "Senderos para caminatas con vistas a las montañas", "Cascada de más de 30 metros de altura", "Visitas organizadas o en transporte local"]
      },
      {
        nombre: "Monte Albán",
        tipo: "Sitio Arqueológico",
        imagen: "https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?auto=format&fit=crop&w=600&q=80",
        descripcion: "Imponente zona arqueológica precolombina que fungió como la antigua capital de la gran cultura Zapoteca. Fundada en lo alto de un cerro con hermosas vistas panorámicas del valle.",
        precio: "$95 MXN",
        rating: "4.8",
        direccion: "Carretera a Monte Albán S/N, Santa Cruz Xoxocotlán, Oax.",
        detalles: ["Gran Plaza Ceremonial prehispánica", "Espectaculares vistas de 360 grados del valle", "Tumba 7 con tesoros prehispánicos", "Patrimonio Mundial de la UNESCO"]
      },
      {
        nombre: "Mercado 20 de Noviembre",
        tipo: "Mercado Gastronómico",
        imagen: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80",
        descripcion: "Mercado municipal emblemático de Oaxaca, famoso por su emblemático 'Pasillo de Humo', donde se asan carnes locales como tasajo, cecina y chorizo en asadores de carbón al instante.",
        precio: "Gratis",
        rating: "4.7",
        direccion: "20 de Noviembre, Centro Histórico, 68000 Oaxaca de Juárez, Oax.",
        detalles: ["Pasillo de Humo con tasajo, cecina y chorizo", "Puestos de tlayudas y mole oaxaqueño", "Pan de yema y chocolate tradicional", "Gran bullicio y sabor local"]
      }
    ],
    restaurantes: [
      {
        nombre: "Criollo",
        tipo: "Cocina Oaxaqueña de Autor",
        imagen: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        descripcion: "Un aclamado restaurante de cocina de humo oaxaqueña dirigido por el chef Luis Arellano y Enrique Olvera. Ofrece un exclusivo menú degustación de seis tiempos cambiante diariamente.",
        precio: "$$$$",
        rating: "4.8",
        direccion: "Calzada Madero 129, Centro, 68000 Oaxaca de Juárez, Oax.",
        detalles: ["Menú de degustación sorpresa de 6 tiempos", "Hermoso diseño interior contemporáneo con patio", "Cocina tradicional mexicana de humo y nixtamal", "Reserva obligatoria"]
      },
      {
        nombre: "Alfonsina",
        tipo: "Cocina Tradicional de Humo",
        imagen: "https://media.foodandtravel.mx/wp-content/uploads/2025/01/Alfonsina_restaurante.jpg",
        descripcion: "Ubicado a las afueras, en el hogar de doña Marcelina Bolaños. Un santuario de cocina tradicional zapoteca donde los moles, tortillas de maíz criollo y tlayudas se hacen a la leña.",
        precio: "$$",
        rating: "4.9",
        direccion: "San Juan Bautista La Raya, Oax.",
        detalles: ["Cocina de humo tradicional zapoteca", "Tortillas hechas al comal de leña", "Elaborado por la chef Marcelina y su hijo chef Jorge León", "Ambiente casero e íntimo"]
      },
      {
        nombre: "Origen",
        tipo: "Fusión Regional",
        imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
        descripcion: "Restaurante del chef Rodolfo Castellanos (ganador de Top Chef México). Reinterpreta sabores de las ocho regiones del estado bajo técnicas de alta cocina europea.",
        precio: "$$$",
        rating: "4.6",
        direccion: "Hidalgo 820, Centro Histórico, 68000 Oaxaca de Juárez, Oax.",
        detalles: ["Cocina oaxaqueña de vanguardia", "Casona colonial restaurada en el centro", "Gran selección de coctelería con mezcal", "Ganador de múltiples premios nacionales"]
      }
    ],
    itinerario: [
      { dia: "Día 1", descripcion: "Llegada a Oaxaca. Recorrido por el centro histórico, visita al majestuoso Templo de Santo Domingo y cena de bienvenida en Criollo." },
      { dia: "Día 2", descripcion: "Exploración de la antigua capital zapoteca de Monte Albán con vistas espectaculares del valle. Tarde en el Mercado de Artesanías." },
      { dia: "Día 3", descripcion: "Excursión a las increíbles cascadas petrificadas de Hierve el Agua, visita al Árbol del Tule y degustación de mezcal artesanal." },
      { dia: "Día 4", descripcion: "Recorrido gastronómico por el Pasillo de Humo del Mercado 20 de Noviembre para probar mole y tlayudas. Taller de alebrijes." },
      { dia: "Día 5", descripcion: "Visita al Jardín Etnobotánico de Oaxaca por la mañana antes de empacar y tomar el vuelo de regreso." }
    ]
  }
];
