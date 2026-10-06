// Contenido del sitio. Edita este archivo para cambiar textos, proyectos o experiencia.
window.SITE = {
  githubUser: 'ronaldo-duran',
  linkedin: 'https://www.linkedin.com/in/ronaldoduran',
  email: 'ronaldodurantoloza@gmail.com',
  cv: 'assets/docs/CV-Ronaldo-Duran.pdf',

  projects: {
    es: [
      {cat:'Series de tiempo', kind:'Proyecto personal', slug:'precios-alimentos-DANE', img:'assets/img/proyecto-precios.jpg', title:'Pronóstico de precios de alimentos', desc:'Pipeline reproducible que pronostica precios mayoristas semanales (SIPSA–DANE) por producto y plaza, con intervalos conformales, validación walk-forward, registro de pronósticos en vivo y app en Streamlit.', tags:['Python','LightGBM','statsforecast','Streamlit','GitHub Actions']},
      {cat:'Machine Learning', kind:'Proyecto de aula', slug:'ML-Dengue-Valle-Aburra', img:'assets/img/proyecto-dengue.jpg', title:'Hospitalización por dengue', desc:'Modelo de clasificación que predice si un paciente es candidato a hospitalización por dengue a partir de síntomas, variables demográficas y geográficas. Compara siete modelos; XGBoost obtuvo el mejor F1-macro.', tags:['Python','scikit-learn','XGBoost','SMOTE','Streamlit']},
      {cat:'Agentes de IA', kind:'Proyecto de aula', slug:'agentes-maestria', img:'assets/img/proyecto-agentes.jpg', title:'Agentes para estado del arte', desc:'Sistema multiagente con Strands Agents SDK: un orquestador delega en un agente que busca papers recientes en arXiv (Tavily) y en otro que filtra por relevancia y genera la bibliografía en BibTeX.', tags:['Python','Strands Agents','Tavily','LLMs']},
      {cat:'Desarrollo web', kind:'Open source', slug:'Finlia', demo:'https://finlia.online', img:'assets/img/proyecto-finlia.jpg', title:'Finlia', desc:'App de finanzas personales y familiares que calcula cuánto dinero está realmente disponible para gastar. Nació para uso personal y la liberé como código abierto.', tags:['Laravel','PHP','PostgreSQL','Chart.js','Playwright']}
    ],
    en: [
      {cat:'Time series', kind:'Personal project', slug:'precios-alimentos-DANE', img:'assets/img/proyecto-precios.jpg', title:'Food price forecasting', desc:'Reproducible pipeline that forecasts weekly wholesale food prices (SIPSA–DANE) by product and market, with conformal intervals, walk-forward validation, a live forecast log and a Streamlit app.', tags:['Python','LightGBM','statsforecast','Streamlit','GitHub Actions']},
      {cat:'Machine Learning', kind:'Course project', slug:'ML-Dengue-Valle-Aburra', img:'assets/img/proyecto-dengue.jpg', title:'Dengue hospitalization', desc:'Classification model that predicts whether a patient needs hospitalization for dengue from symptoms, demographic and geographic variables. Seven models compared; XGBoost achieved the best macro-F1.', tags:['Python','scikit-learn','XGBoost','SMOTE','Streamlit']},
      {cat:'AI agents', kind:'Course project', slug:'agentes-maestria', img:'assets/img/proyecto-agentes.jpg', title:'Literature-review agents', desc:'Multi-agent system built with the Strands Agents SDK: an orchestrator delegates to an agent that searches recent arXiv papers (Tavily) and another that filters by relevance and writes the BibTeX bibliography.', tags:['Python','Strands Agents','Tavily','LLMs']},
      {cat:'Web development', kind:'Open source', slug:'Finlia', demo:'https://finlia.online', img:'assets/img/proyecto-finlia.jpg', title:'Finlia', desc:'Personal and family finance app that calculates how much money is actually available to spend. Built for personal use and released as open source.', tags:['Laravel','PHP','PostgreSQL','Chart.js','Playwright']}
    ]
  },

  skills: (l) => [
    {cat: l==='es'?'Lenguajes':'Languages', items:['Python','PHP','SQL','JavaScript']},
    {cat: l==='es'?'Datos e IA':'Data & AI', items:['Pandas','scikit-learn','XGBoost','LightGBM','NLP','ETL','Power BI']},
    {cat:'Backend', items:['Laravel','Symfony', l==='es'?'Microservicios':'Microservices','MySQL','PostgreSQL']},
    {cat: l==='es'?'Prácticas':'Practices', items:['Git','GitHub Actions','PHPUnit','Playwright','Scrum']}
  ],

  t: {
    es: {
      title:'Ronaldo Duran · Software, Datos e IA',
      nav:[['Sobre mí','#sobre-mi'],['Proyectos','#proyectos'],['Stack','#stack'],['Experiencia','#experiencia'],['Contacto','#contacto']],
      role:'Ingeniero de Sistemas · Maestría en Ciencia de Datos (en curso)',
      tagline:'Construyo soluciones que combinan software, datos e inteligencia artificial, desde entender el problema hasta llevar el producto a producción.',
      heroWords:['Software.','Datos.','IA.'],
      focus:[['Ciencia de Datos','Análisis, ETL, series de tiempo y visualización para tomar decisiones con evidencia.'],['Inteligencia Artificial','Modelos de machine learning, procesamiento de lenguaje natural y agentes.'],['Desarrollo de Software','Backend en PHP, microservicios y aplicaciones web probadas y desplegadas.']],
      ctaProjects:'Ver proyectos', ctaContact:'Contactar',
      aboutLabel:'Sobre mí', portraitAlt:'Retrato de Ronaldo Duran',
      facts:[['Formación','Ingeniería de Sistemas · Maestría en Ciencia de Datos'],['Enfoque','Ciencia de Datos, IA y Desarrollo de Software'],['Ubicación','Medellín, Colombia']],
      projectsLabel:'Proyectos destacados', projectsTitle:'Trabajo seleccionado.', viewCode:'Ver código', viewDemo:'Ver sitio', shotAlt:'Captura de',
      skillsLabel:'Stack', skillsTitle:'Herramientas con las que construyo.',
      expLabel:'Experiencia', expTitle:'Trayectoria.',
      exp:[
        {period:'06/2025 — Hoy', role:'Desarrollador Backend Junior', org:'Mántum S.A.S. · Medellín', desc:'Funcionalidades backend en PHP y diseño de microservicios desde cero. Levantamiento de requerimientos, soporte nivel III y pruebas funcionales dentro de un equipo ágil.'},
        {period:'11/2024 — 02/2025', role:'Profesional en gestión de datos', org:'Fundación Ayuda en Acción · Cúcuta', desc:'Recolección, limpieza y análisis de datos de campo; dashboards en Power BI, aseguramiento de calidad de datos y administración del enlace VPN.'},
        {period:'05/2023 — 12/2024', role:'Jefe de Área de Innovación', org:'Constructora Inmobiliaria Laura Rivera S.A.S.', desc:'Estructuré el área de innovación, lideré al equipo de desarrollo y dirigí la creación de un software propio para el archivo de la empresa, desarrollado en PHP.'},
        {period:'07/2022 — 12/2022', role:'Asistente de Dirección', org:'Constructora Inmobiliaria Laura Rivera S.A.S.', desc:'Apoyo a la gerencia en decisiones estratégicas y gestión integral del software y las redes de la empresa.'},
        {period:'12/2020 — 02/2021', role:'Apoyo administrativo', org:'Constructora Inmobiliaria Laura Rivera S.A.S.', desc:'Automaticé la elaboración de cartas extrayendo datos directamente de la base de datos: de unos 15 minutos a 2 minutos por carta.'}
      ],
      eduLabel:'Formación',
      edu:[['En curso','Maestría en Ciencia de Datos','Universidad Pontificia Bolivariana'],['2024','Ingeniería de Sistemas','Universidad de Pamplona'],['2023','Técnica laboral en Inglés','Inglés Para Todos'],['2016','Técnico en Sistemas','SENA']],
      numLabel:'En cifras', numTitle:'Experiencia y formación.',
      stats:[[5,'+','Años de experiencia profesional'],[3,'','Organizaciones en las que he trabajado'],[4,'','Proyectos publicados en GitHub'],[7,'','Modelos comparados en un solo proyecto de ML']],
      contactLabel:'Contacto', contactTitle:'Hablemos.', contactSub:'¿Tienes un proyecto, una vacante o una idea? Escríbeme.', cv:'Descargar CV', emailBtn:'Escríbeme',
      footer:'Hecho a mano · Publicado en GitHub Pages', menu:'Menú'
    },
    en: {
      title:'Ronaldo Duran · Software, Data & AI',
      nav:[['About','#sobre-mi'],['Projects','#proyectos'],['Stack','#stack'],['Experience','#experiencia'],['Contact','#contacto']],
      role:'Systems Engineer · M.Sc. in Data Science (in progress)',
      tagline:'I build solutions that combine software, data and artificial intelligence, from understanding the problem to taking the product to production.',
      heroWords:['Software.','Data.','AI.'],
      focus:[['Data Science','Analysis, ETL, time series and visualization for evidence-based decisions.'],['Artificial Intelligence','Machine learning models, natural language processing and agents.'],['Software Development','PHP backends, microservices and tested, deployed web applications.']],
      ctaProjects:'View projects', ctaContact:'Get in touch',
      aboutLabel:'About', portraitAlt:'Portrait of Ronaldo Duran',
      facts:[['Education','Systems Engineering · M.Sc. in Data Science'],['Focus','Data Science, AI and Software Development'],['Location','Medellín, Colombia']],
      projectsLabel:'Featured projects', projectsTitle:'Selected work.', viewCode:'View code', viewDemo:'Visit site', shotAlt:'Screenshot of',
      skillsLabel:'Stack', skillsTitle:'The tools I build with.',
      expLabel:'Experience', expTitle:'Journey.',
      exp:[
        {period:'06/2025 — Now', role:'Junior Backend Developer', org:'Mántum S.A.S. · Medellín', desc:'PHP backend features and microservices designed from scratch. Requirements gathering, level III support and functional testing within an agile team.'},
        {period:'11/2024 — 02/2025', role:'Data Management Professional', org:'Fundación Ayuda en Acción · Cúcuta', desc:'Field data collection, cleaning and analysis; Power BI dashboards, data quality assurance and VPN administration.'},
        {period:'05/2023 — 12/2024', role:'Head of Innovation', org:'Constructora Inmobiliaria Laura Rivera S.A.S.', desc:'Set up the innovation area, led the development team and directed an in-house document archive system built in PHP.'},
        {period:'07/2022 — 12/2022', role:'Management Assistant', org:'Constructora Inmobiliaria Laura Rivera S.A.S.', desc:'Supported management on strategic decisions and ran the company’s software and networks.'},
        {period:'12/2020 — 02/2021', role:'Administrative Support', org:'Constructora Inmobiliaria Laura Rivera S.A.S.', desc:'Automated letter generation by pulling data straight from the database: from about 15 minutes to 2 minutes per letter.'}
      ],
      eduLabel:'Education',
      edu:[['In progress','M.Sc. in Data Science','Universidad Pontificia Bolivariana'],['2024','Systems Engineering','Universidad de Pamplona'],['2023','English technical program','Inglés Para Todos'],['2016','Systems Technician','SENA']],
      numLabel:'By the numbers', numTitle:'Experience and learning.',
      stats:[[5,'+','Years of professional experience'],[3,'','Organizations I have worked with'],[4,'','Projects published on GitHub'],[7,'','Models compared in a single ML project']],
      contactLabel:'Contact', contactTitle:'Let’s talk.', contactSub:'Have a project, a role or an idea? Write to me.', cv:'Download résumé', emailBtn:'Email me',
      footer:'Handcrafted · Published on GitHub Pages', menu:'Menu'
    }
  }
};
