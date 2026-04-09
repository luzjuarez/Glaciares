// ─── Fuentes de datos ────────────────────────────────────────────────────────
// • Glaciares, km², provincias: Inventario Nacional de Glaciares 2018 – IANIGLA/CONICET
//   (Publicado en: https://www.glaciares.org.ar)
// • Población: INDEC – Censo Nacional de Población 2022
// • Zonas periglaciales estimadas: metodología ING/IANIGLA; ratio 3-5× respecto
//   a superficie glaciar en provincias áridas (Azócar & Brenning, 2010; Perucca et al., IANIGLA)
// • Conflictos mineros: documentación pública CONICET, causas judiciales, prensa

export const TOTAL_GLACIARES = 16968;
export const TOTAL_KM2 = 8484;
export const VOTE_DATE = '2026-04-08';

// ─── Reforma propuesta ───────────────────────────────────────────────────────
export const REFORMA = {
  ley: '26.639',
  articulo: '6°',
  ley_nombre: 'Régimen de Presupuestos Mínimos para la Preservación de los Glaciares y del Ambiente Periglacial',
  aprobacion_original: '2010-10-30',
  ley_vigente: [
    'Prohíbe actividades mineras e hidrocarburíferas en glaciares',
    'Prohíbe actividades en zonas periglaciales (glaciares de roca, permafrost, suelo congelado)',
    'Protección automática y preventiva sobre todos los ambientes criosféricos',
  ],
  reforma_propone: [
    'Elimina la protección automática de zonas periglaciales',
    'Redefine la protección según "función hídrica" evaluada caso a caso',
    'Transfiere a las provincias la facultad de definir qué áreas se protegen',
    'Las provincias tienen intereses económicos directos en la actividad minera',
  ],
  punto_clave:
    'Los glaciares de roca (ambientes periglaciales) almacenan entre 3 y 5 veces más agua que los glaciares de hielo en las provincias áridas del Cuyo y NOA. Son invisibles a simple vista, pero son la reserva de agua dulce más importante para millones de personas en zonas sin lluvias abundantes.',
  proyectos_frenados: [
    {
      nombre: 'Pascua-Lama',
      empresa: 'Barrick Gold',
      provincia: 'San Juan',
      inversion: 'USD 8.500 millones',
      frenado_por: 'Ley 26.639 (2013) – estaba sobre glaciares Toro 1, Toro 2 y Esperanza',
      estado_actual: 'Frenado. La reforma lo habilitaría.',
    },
    {
      nombre: 'Josemaría',
      empresa: 'Lundin Mining',
      provincia: 'San Juan',
      frenado_por: 'Restricciones periglaciales bajo Ley 26.639',
      estado_actual: 'En evaluación. La reforma despejaría obstáculos.',
    },
  ],
};

// ─── Datos por provincia ─────────────────────────────────────────────────────
export const PROVINCES = [
  {
    id: 'santa-cruz',
    name: 'Santa Cruz',
    region: 'Andes del sur de la Patagonia',
    glaciares: 2420,
    km2: 3421,
    pct: 40.3,
    cuencas: ['Río Santa Cruz', 'Lago Argentino', 'Lago Viedma'],
    notables: 'Perito Moreno, Upsala, Viedma y Campo de Hielo Sur',
    coords: [-50.0, -73.2],
    // INDEC Censo 2022
    poblacion: 366711,
    agua_usos: ['Generación hidroeléctrica', 'Reservas de agua dulce patagónica', 'Turismo de alta montaña'],
    // Estimado: zona periglacial en patagonia ~1.5× superficie glaciar (menos ratio que en zonas áridas)
    periglacial_km2_est: 5000,
    desproteccion_pct_est: 59,
    reforma_impacto:
      'Campo de Hielo Sur es la tercera masa de hielo continental más grande del mundo (17.000 km²). Las zonas periglaciales adyacentes —que actualmente tienen protección automática— quedarían sujetas a evaluación provincial. La provincia tiene proyectos mineros en carpeta para el norte de Santa Cruz.',
    conflicto: {
      active: true,
      descripcion:
        'Campo de Hielo Sur: tercera masa de hielo continental más grande del mundo. Zona de alta sensibilidad ambiental con presión por proyectos limítrofes y mineros en el norte provincial.',
    },
  },
  {
    id: 'mendoza',
    name: 'Mendoza',
    region: 'Andes Centrales',
    glaciares: 4172,
    km2: 1239,
    pct: 14.6,
    cuencas: ['Río Mendoza', 'Río Tunuyán', 'Río Diamante', 'Río Atuel'],
    notables: 'Glaciares del Aconcagua (6.961 msnm, techo de América)',
    coords: [-33.5, -69.8],
    poblacion: 2014533,
    agua_usos: [
      'Riego de más de 350.000 ha de viñedos, frutales y hortalizas',
      'Agua potable para la ciudad de Mendoza y el Gran Mendoza (1,1 millón de habitantes)',
      'Generación hidroeléctrica (Embalse Potrerillos)',
    ],
    // Estimado: en zonas áridas la zona periglacial es 3-5× el área glaciar
    periglacial_km2_est: 3700,
    desproteccion_pct_est: 75,
    reforma_impacto:
      'La agroindustria mendocina depende directamente del deshielo andino. Los glaciares de roca de las cuencas del Río Mendoza y Tunuyán —ambientes periglaciales— son la reserva estratégica de agua durante años de sequía. Sin protección automática, quedarían expuestos a proyectos mineros que avanza el gobierno provincial.',
    conflicto: {
      active: true,
      descripcion:
        'Los glaciares mendocinos alimentan el riego de toda la agricultura provincial. Proyectos mineros en los cordones de Potrerillos y Uspallata amenazan cuencas clave. En 2019 la Legislatura mendocina intentó modificar la Ley de Glaciares por decreto —fue rechazado por movilizaciones masivas.',
    },
  },
  {
    id: 'san-juan',
    name: 'San Juan',
    region: 'Andes Centrales / Desérticos',
    glaciares: 2533,
    km2: 658,
    pct: 7.8,
    cuencas: ['Río San Juan', 'Río Jáchal', 'Valle de Calingasta'],
    notables: 'Más de 2.000 glaciares de roca documentados por IANIGLA',
    coords: [-30.2, -69.5],
    poblacion: 781217,
    agua_usos: [
      'El Río San Juan provee el 90% del agua potable de toda la provincia',
      'Riego del oasis sanjuanino (vid, olivos, tomates)',
      'En verano, los glaciares de roca aportan hasta el 50-60% del caudal de algunas cuencas (IANIGLA)',
    ],
    periglacial_km2_est: 1800,
    desproteccion_pct_est: 73,
    reforma_impacto:
      'Pascua-Lama (Barrick Gold, USD 8.500 M) fue frenado en 2013 específicamente por la Ley 26.639: el proyecto estaba sobre los glaciares Toro 1, Toro 2 y Esperanza. La reforma eliminaría esa restricción para las zonas periglaciales donde también operaría el proyecto. Barrick Gold ya anunció intención de retomar la obra.',
    conflicto: {
      active: true,
      descripcion:
        'Barrick Gold opera Veladero (4.200 msnm) con cinco derrames de solución cianurada documentados (2015, 2016, 2019, 2021, 2023). Pascua-Lama fue frenado por la ley vigente. La reforma del Artículo 6° habilitaría operaciones en zonas periglaciales donde están estos yacimientos.',
    },
  },
  {
    id: 'tierra-del-fuego',
    name: 'Tierra del Fuego',
    region: 'Andes del sur de la Patagonia',
    glaciares: 898,
    km2: 442,
    pct: 5.2,
    cuencas: ['Glaciar Martial', 'Ríos de la isla grande', 'Islas del Atlántico Sur'],
    notables: '890 cuerpos de hielo en Islas del Atlántico Sur bajo soberanía argentina',
    coords: [-54.5, -68.5],
    poblacion: 166458,
    agua_usos: [
      'Agua dulce de la isla',
      'Reserva soberana en Islas del Atlántico Sur',
      'Ecosistema subantártico único',
    ],
    periglacial_km2_est: 650,
    desproteccion_pct_est: 60,
    reforma_impacto:
      'Los glaciares fueguinos y su entorno periglacial alimentan todos los ríos de la Isla Grande. La desprotección de zonas periglaciales abriría estas áreas a exploración minera. Tierra del Fuego es Área Protegida Internacional (Ramsar) pero la ley nacional prevalece.',
    conflicto: {
      active: false,
      descripcion: '',
    },
  },
  {
    id: 'chubut',
    name: 'Chubut',
    region: 'Andes del norte de la Patagonia',
    glaciares: 777,
    km2: 146,
    pct: 1.7,
    cuencas: ['Lago Puelo', 'Río Futaleufú', 'Río Corintos'],
    notables: '',
    coords: [-43.8, -71.5],
    poblacion: 620898,
    agua_usos: [
      'Cuencas binacionales con Chile (Futaleufú)',
      'Agua dulce de la cordillera andino-patagónica',
    ],
    periglacial_km2_est: 280,
    desproteccion_pct_est: 66,
    reforma_impacto:
      'La provincia tiene historial de resistencia a la minería (consulta popular de 2003, ratificada en 2021). La reforma abriría periglaciales chubutenses a proyectos que la provincia rechazó por vía democrática.',
    conflicto: {
      active: false,
      descripcion: '',
    },
  },
  {
    id: 'catamarca',
    name: 'Catamarca',
    region: 'Andes Desérticos',
    glaciares: 1359,
    km2: 106,
    pct: 1.2,
    cuencas: ['Monte Pissis', 'Río Abaucán', 'Cuenca del Salar del Hombre Muerto'],
    notables: '',
    coords: [-27.5, -68.5],
    poblacion: 416758,
    agua_usos: [
      'Fuente de agua de comunidades diaguitas y atacameñas de la Puna',
      'Recarga de acuíferos en zonas sin lluvias (precipitación < 100 mm/año)',
    ],
    periglacial_km2_est: 600,
    desproteccion_pct_est: 85,
    reforma_impacto:
      'La Mesa del Litio (proyectos de litio y cobre) avanza sobre zonas periglaciales de la Puna. En una región con menos de 100 mm de lluvia al año, los glaciares de roca son la única fuente de agua dulce permanente para comunidades indígenas. Sin protección, estas comunidades quedarían sin respaldo legal.',
    conflicto: {
      active: true,
      descripcion:
        'Mesa del Litio: extracción de litio y cobre en zonas periglaciales de la Puna. En Catamarca opera el proyecto Livent (antes FMC) en el Salar del Hombre Muerto. La presión minera amenaza los glaciares de roca en una de las regiones más áridas del país.',
    },
  },
  {
    id: 'salta',
    name: 'Salta',
    region: 'Andes Desérticos',
    glaciares: 672,
    km2: 104,
    pct: 1.2,
    cuencas: ['Nevados de Cachi', 'Río Calchaquí', 'Cuenca del Pastos Grandes'],
    notables: '',
    coords: [-24.0, -66.5],
    poblacion: 1490381,
    agua_usos: [
      'Agua de los Valles Calchaquíes (vid, pimientos)',
      'Recarga de fuentes de agua de comunidades kollas y diaguitas',
    ],
    periglacial_km2_est: 580,
    desproteccion_pct_est: 85,
    reforma_impacto:
      'La Mesa del Litio avanza en los salares puneños salteños. Los glaciares de roca y permafrost de la Puna alimentan acuíferos que son el único recurso hídrico de comunidades indígenas. La reforma trasladaría la decisión de protección a la provincia, que emitió permisos de exploración sobre estas áreas.',
    conflicto: {
      active: true,
      descripcion:
        'Mesa del Litio: expansión de la frontera extractiva del litio en la Puna salteña. Comunidades kollas y diaguitas denuncian impacto en fuentes de agua ante la Secretaría de Derechos Humanos y la CIDH.',
    },
  },
  {
    id: 'rio-negro',
    name: 'Río Negro',
    region: 'Andes del norte de la Patagonia',
    glaciares: 896,
    km2: 72,
    pct: 0.8,
    cuencas: ['Cerro Tronador', 'Lago Nahuel Huapi', 'Río Manso'],
    notables: 'Glaciares Alerce y Castaño Overo en el Tronador',
    coords: [-41.1, -71.8],
    poblacion: 748229,
    agua_usos: [
      'Cuenca del Nahuel Huapi (agua potable de Bariloche)',
      'Turismo y ecosistema andino-patagónico',
    ],
    periglacial_km2_est: 160,
    desproteccion_pct_est: 69,
    reforma_impacto:
      'Los glaciares del Cerro Tronador y sus zonas periglaciales alimentan el lago Nahuel Huapi y el sistema de agua potable de San Carlos de Bariloche. La reforma abriría estas áreas a actividades extractivas actualmente prohibidas.',
    conflicto: {
      active: false,
      descripcion: '',
    },
  },
  {
    id: 'neuquen',
    name: 'Neuquén',
    region: 'Andes del norte de la Patagonia',
    glaciares: 314,
    km2: 71,
    pct: 0.8,
    cuencas: ['Volcán Lanín', 'Copahue', 'Río Neuquén'],
    notables: '',
    coords: [-38.5, -71.2],
    poblacion: 725640,
    agua_usos: [
      'Cuencas del Río Neuquén (agua potable de Neuquén capital)',
      'Alimenta embalses hidroeléctricos (El Chocón)',
    ],
    periglacial_km2_est: 165,
    desproteccion_pct_est: 70,
    reforma_impacto:
      'Neuquén tiene proyectos de exploración minera en la cordillera. Los ambientes periglaciales del Copahue y el Lanín alimentan ríos que abastecen la capital provincial. La reforma desprotegería estas fuentes de recarga.',
    conflicto: {
      active: false,
      descripcion: '',
    },
  },
  {
    id: 'la-rioja',
    name: 'La Rioja',
    region: 'Andes Desérticos',
    glaciares: 289,
    km2: 38,
    pct: 0.4,
    cuencas: ['Sierra de Famatina', 'Río Vinchina', 'Río Los Sauces'],
    notables: '',
    coords: [-29.0, -68.8],
    poblacion: 383066,
    agua_usos: [
      'Río Famatina: fuente de agua de Los Sauces y Chilecito',
      'Único recurso hídrico en una de las provincias más áridas del país',
    ],
    periglacial_km2_est: 190,
    desproteccion_pct_est: 83,
    reforma_impacto:
      'El Famatina tiene proyectos mineros (entre ellos de empresas chinas y canadienses) frenados por la ley vigente. El río que nace en sus glaciares y periglaciales es la única fuente de agua de la región. "Famatina no se toca" fue en 2012 una resistencia ciudadana masiva. La reforma eliminaría el respaldo legal de esa protección.',
    conflicto: {
      active: true,
      descripcion:
        'Sierra de Famatina: resistencia ciudadana histórica en 2012 ("Famatina no se toca"). Proyectos mineros en zonas de alta montaña que abastecen los únicos ríos permanentes de la provincia. Sin la Ley de Glaciares, los periglaciales del Famatina quedan sin protección.',
    },
  },
  {
    id: 'tucuman',
    name: 'Tucumán',
    region: 'Andes Desérticos',
    glaciares: 91,
    km2: 10,
    pct: 0.1,
    cuencas: ['Nevados del Aconquija', 'Río Salí', 'Embalse El Cadillal'],
    notables: '',
    coords: [-26.7, -66.0],
    poblacion: 1697272,
    agua_usos: [
      'El Río Salí alimenta el Embalse El Cadillal, principal fuente de agua de Tucumán capital (más de 1 millón de habitantes)',
      'Irrigación de la caña de azúcar (principal cultivo provincial)',
    ],
    periglacial_km2_est: 38,
    desproteccion_pct_est: 79,
    reforma_impacto:
      'Los glaciares del Aconquija son pequeños pero estratégicos: recargan el Río Salí en estiaje. Si las zonas periglaciales pierden protección, proyectos en el sistema de Cumbres Calchaquíes podrían comprometer la fuente de agua de más de un millón de tucumanos.',
    conflicto: {
      active: false,
      descripcion: '',
    },
  },
  {
    id: 'jujuy',
    name: 'Jujuy',
    region: 'Andes Desérticos',
    glaciares: 255,
    km2: 9.5,
    pct: 0.1,
    cuencas: ['Puna jujeña', 'Río Grande de Jujuy', 'Cuenca del Salar de Olaroz'],
    notables: '',
    coords: [-23.5, -65.8],
    poblacion: 779212,
    agua_usos: [
      'Recargas de acuíferos y bofedales de comunidades omaguacas y kollas',
      'Zonas periglaciales alimentan los ríos de la Quebrada de Humahuaca (Patrimonio Mundial UNESCO)',
    ],
    periglacial_km2_est: 47,
    desproteccion_pct_est: 83,
    reforma_impacto:
      'Proyecto Cauchari-Olaroz (Lithium Americas + JEMSE + CATL/Ganfeng) opera en la Puna jujeña. Los glaciares de roca y periglaciales de la cuenca alimentan bofedales y ríos que son la única fuente de agua de comunidades indígenas. El gobierno provincial emitió permisos de exploración sobre zonas que la ley vigente protege.',
    conflicto: {
      active: true,
      descripcion:
        'Proyecto Cauchari-Olaroz (litio): Lithium Americas + JEMSE (empresa estatal jujeña) + socios chinos. Opera sobre zonas periglaciales de la Puna. Comunidades indígenas de la Quebrada y Puna denuncian falta de consulta previa y afectación de sus fuentes de agua.',
    },
  },
];
