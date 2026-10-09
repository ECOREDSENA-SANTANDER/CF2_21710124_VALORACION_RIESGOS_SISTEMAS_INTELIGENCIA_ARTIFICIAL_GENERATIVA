export default {
  global: {
    Name: 'Valoración y tratamiento de riesgos en sistemas de inteligencia artificial generativa',
    Description: 'El componente Valoración y tratamiento de riesgos en sistemas de inteligencia artificial generativa desarrolla capacidades para analizar y priorizar riesgos mediante la valoración de su probabilidad, impacto y nivel de criticidad. Promueve la aplicación de criterios, matrices y controles para definir medidas de tratamiento, responsables, indicadores y acciones de seguimiento, favoreciendo una gestión responsable de la inteligencia artificial generativa alineada con los objetivos y requerimientos del proceso de negocio.    ',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Valoración de riesgos en sistemas de inteligencia artificial generativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Factores para determinar el nivel de riesgo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Impactos asociados con los sistemas de inteligencia artificial generativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Construcción y análisis de la matriz de riesgos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tratamiento y control de riesgos en inteligencia artificial generativa',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Control',
      significado: 'Medida técnica, humana, administrativa, contractual u organizacional destinada a prevenir, detectar, reducir o corregir un riesgo.',
    },
    {
      termino: 'Criticidad',
      significado: 'Grado de importancia de un activo, proceso, sistema o decisión según las consecuencias que produciría su afectación.',
    },
    {
      termino: 'Eficacia del control',
      significado: 'Grado en que una medida implementada logra modificar efectivamente la probabilidad o el impacto del escenario para el cual fue diseñada.',
    },
    {
      termino: 'Evidencia',
      significado: 'Información verificable empleada para sustentar una valoración, como resultados de pruebas, registros, auditorías, documentación técnica, incidentes o entrevistas.',
    },
    {
      termino: 'Exposición',
      significado: 'Grado en que una persona, activo, proceso o sistema se encuentra sujeto a condiciones que permiten la materialización de un riesgo.',
    },
    {
      termino: 'Impacto',
      significado: 'Magnitud de las consecuencias que pueden producirse cuando se materializa un escenario de riesgo.',
    },
    {
      termino: 'Indicador de riesgo',
      significado: 'Variable utilizada para observar el comportamiento de un riesgo o de los controles aplicados y facilitar su seguimiento.',
    },
    {
      termino: 'Matriz de riesgos',
      significado: 'Instrumento que organiza escenarios de riesgo y consolida información sobre probabilidad, impacto, controles, nivel inherente, nivel residual y prioridad.',
    },
    {
      termino: 'Mitigación',
      significado: 'Aplicación de medidas destinadas a reducir la probabilidad de un riesgo, disminuir sus consecuencias o actuar simultáneamente sobre ambas dimensiones.',
    },
    {
      termino: 'Plan de tratamiento',
      significado: 'Instrumento que establece las acciones necesarias para intervenir riesgos priorizados, indicando responsables, recursos, plazos, indicadores y mecanismos de seguimiento.',
    },
    {
      termino: 'Probabilidad',
      significado: 'Estimación de la posibilidad de que un escenario de riesgo ocurra bajo determinadas condiciones.',
    },
    {
      termino: 'Riesgo inherente',
      significado: 'Nivel de riesgo existente antes de considerar la aplicación y eficacia de los controles implementados.',
    },
    {
      termino: 'Riesgo residual',
      significado: 'Nivel de riesgo que permanece después de considerar los controles existentes y su eficacia.',
    },
    {
      termino: 'Supervisión humana',
      significado: 'Capacidad efectiva de una persona competente para revisar, intervenir, modificar o detener resultados y acciones de un sistema de inteligencia artificial.',
    },
    {
      termino: 'Tolerancia al riesgo',
      significado: 'Margen específico de riesgo que la organización admite dentro de un proceso o actividad antes de requerir intervención adicional.',
    },
    {
      termino: 'Tratamiento del riesgo',
      significado: 'Proceso mediante el cual se seleccionan e implementan opciones para evitar, reducir, compartir, transferir o aceptar un riesgo.',
    },
    {
      termino: 'Umbral de riesgo',
      significado: 'Valor o condición previamente definida que determina cuándo un indicador o escenario requiere atención, escalamiento o tratamiento adicional.',
    },
  ],
  referencias: [
    {
      referencia: 'Departamento Nacional de Planeación. (2025). Documento CONPES 4144: Política Nacional de Inteligencia Artificial. Consejo Nacional de Política Económica y Social, República de Colombia.',
      link: '',
    },
    {
      referencia: 'International Organization for Standardization, & International Electrotechnical Commission. (2023a). ISO/IEC 23894:2023 Information technology. Artificial intelligence. Guidance on risk management. ISO.',
      link: '',
    },
    {
      referencia: 'International Organization for Standardization, & International Electrotechnical Commission. (2023b). ISO/IEC 42001:2023 Information technology. Artificial intelligence. Management system. ISO.',
      link: '',
    },
    {
      referencia: 'International Organization for Standardization, & International Electrotechnical Commission. (2023c). ISO/IEC 5338:2023 Information technology. Artificial intelligence. AI system life cycle processes. ISO.',
      link: '',
    },
    {
      referencia: 'National Institute of Standards and Technology. (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0) (NIST AI 100-1). U.S. Department of Commerce.',
      link: '',
    },
    {
      referencia: 'National Institute of Standards and Technology. (2024). Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile (NIST AI 600-1). U.S. Department of Commerce.',
      link: '',
    },
    {
      referencia: 'OWASP Foundation. (2025). OWASP Top 10 for Large Language Model Applications.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '---',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: ' ',
          cargo: ' ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ' ',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
