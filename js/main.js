/* ============================================================
   INSTAL·LACIONS JAUME NADAL — main.js
   Multilingual (ES/EN/DE), Navbar, Animations, WhatsApp
   ============================================================ */

'use strict';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {
  es: {
    // Nav
    nav_home:     'Inicio',
    nav_services: 'Servicios',
    nav_brands:   'Marcas',
    nav_contact:  'Contacto',
    nav_cta:      'Contacto',

    // Hero (home)
    hero_sub: 'Especialistas en fontanería, calefacción y aire acondicionado en Mallorca',

    // About
    about_heading: 'Desde 2005 trabajando para usted',
    about_stat1_num: 'Desde\n2005',
    about_stat1_label: 'Más de 20 años de experiencia',
    about_stat2_num: '+13',
    about_stat2_label: 'Servicios especializados',
    about_stat3_num: 'Felanitx',
    about_stat3_label: 'Mallorca, Islas Baleares',
    about_body: 'En Jaume Nadal Pedregosa nos hemos preocupado por satisfacer las necesidades de nuestros clientes más exigentes ofreciendo siempre un trato serio y profesional junto con unos productos de alta calidad. Somos especialistas en fontanería, calefacción y aire acondicionado, piscinas, grupos de presión y pozos, energía solar e instalaciones eléctricas. Si tiene alguna necesidad o proyecto, contáctenos sin compromiso.',
    about_cta:    'Solicitar presupuesto',

    // FAQ
    faq_label:   'FAQ',
    faq_heading: 'Preguntas frecuentes',
    faq1_q: '¿Realizáis presupuestos gratuitos?',
    faq1_a: 'Sí, realizamos presupuestos completamente gratuitos y sin compromiso. Contáctenos por teléfono, WhatsApp o mediante el formulario de contacto y le responderemos lo antes posible.',
    faq2_q: '¿En qué zonas de Mallorca trabajáis?',
    faq2_a: 'Trabajamos principalmente en Felanitx y toda la comarca del Migjorn, aunque también realizamos trabajos en otras zonas de Mallorca según el proyecto.',
    faq3_q: '¿Atendéis urgencias?',
    faq3_a: 'Sí, atendemos urgencias de fontanería y calefacción. Llámenos al 971 580 428 o al 646 170 957 y le atenderemos lo antes posible.',
    faq4_q: '¿Qué marcas utilizáis en vuestras instalaciones?',
    faq4_a: 'Trabajamos exclusivamente con primeras marcas como Daikin, Vaillant, Uponor, Hansgrohe, Roca y Grohe, garantizando así la máxima calidad y durabilidad en cada instalación.',
    faq5_q: '¿Instaláis aire acondicionado en comunidades de vecinos?',
    faq5_a: 'Sí, realizamos instalaciones tanto en viviendas particulares como en comunidades de vecinos, locales comerciales e industrias.',
    faq6_q: '¿Ofrecéis mantenimiento anual de calderas?',
    faq6_a: 'Sí, ofrecemos contratos de mantenimiento anual para calderas y sistemas de calefacción, lo que garantiza un funcionamiento óptimo y alarga la vida útil del equipo.',
    faq7_q: '¿Cuánto tiempo tarda una instalación de aire acondicionado?',
    faq7_a: 'Una instalación estándar de aire acondicionado para una vivienda suele realizarse en un solo día. Para proyectos más grandes o complejos puede llevar 2-3 días.',
    faq8_q: '¿Tramitáis las ayudas y subvenciones para energía solar o aerotermia?',
    faq8_a: 'Sí, le asesoramos sobre las subvenciones disponibles y le ayudamos con la tramitación de los expedientes para instalaciones de energía solar y aerotermia.',

    // Why us
    why_label:   '¿POR QUÉ NOSOTROS?',
    why_heading: 'La diferencia Jaume Nadal',
    why1_title: '+20 Años de Experiencia',
    why1_text:  'Desde 2005 trabajando en Mallorca con los clientes más exigentes.',
    why2_title: 'Primeras Marcas',
    why2_text:  'Solo trabajamos con Daikin, Vaillant, Hansgrohe y otras marcas líderes del sector.',
    why3_title: 'Servicio Urgente',
    why3_text:  'Atendemos urgencias con rapidez. Llámenos y le ayudamos cuanto antes.',
    why4_title: 'Presupuesto Gratuito',
    why4_text:  'Le hacemos un presupuesto detallado sin compromiso y sin coste alguno.',

    // Services preview
    services_label: 'Lo que hacemos',
    services_title: 'Nuestros Servicios',
    services_cta:   'Ver todos los servicios',

    // Testimonials
    testimonials_label: 'Opiniones',
    testimonials_title: 'Lo que dicen nuestros clientes',
    testimonials_sub:   'Más de 20 años de confianza en Felanitx y toda Mallorca',
    testimonials_cta:   'Ver reseñas en Google',

    // Brands strip
    brands_strip_title: 'Trabajamos con las mejores marcas',
    brands_strip_cta:   'Ver todas nuestras marcas →',

    // CTA banner
    cta_heading: '¿Tiene un proyecto? Contáctenos sin compromiso',
    cta_btn:     'Solicitar presupuesto',

    // Brands page
    brands_page_title:   'Nuestras Marcas',
    brands_intro_quote:  'En Jaume Nadal Pedregosa solo trabajamos con primeras marcas ofreciendo así los mejores resultados y la mejor calidad a nuestros clientes.',
    brands_intro_author: '— JAUME NADAL',

    // Contact page
    contact_details_title: 'Nuestros Datos',
    contact_intro:         'Si tiene cualquier duda o necesita más información, puede encontrarnos en:',
    contact_hours:         'Lunes a Viernes de 08:00 a 14:00',
    contact_addr_label:    'DIRECCIÓN',
    contact_addr:          'Paseo Ramón Llull 6, 07200 Felanitx (Islas Baleares)',
    contact_mobile_label:  'MÓVIL',
    contact_mobile:        '646 170 957 – 636 139 640',
    contact_email_label:   'EMAIL',
    contact_tel_label:     'TELÉFONO',
    contact_directions:    'Cómo llegar',
    contact_form_title:    'Contacta con Nosotros',

    // Form
    form_name:    'Tu nombre',
    form_email:   'Tu correo electrónico',
    form_subject: 'Asunto',
    form_message: 'Tu mensaje',
    form_submit:  'Enviar mensaje',

    // Footer
    footer_cookies: 'Política de Cookies',
    footer_privacy: 'Política de Privacidad',
    footer_address: 'Paseo Ramón Llull 6\n07200 Felanitx (Islas Baleares)',
    footer_copyright: '© 2026 | Instal·lacions Jaume Nadal',

    // WhatsApp
    whatsapp_tooltip: 'Escríbenos por WhatsApp',

    // Page titles
    title_home:     'Fontanería, Calefacción y Aire Acondicionado en Felanitx | Jaume Nadal',
    title_services: 'Servicios de Fontanería y Climatización | Jaume Nadal Felanitx',
    title_brands:   'Marcas con las que trabajamos | Jaume Nadal',
    title_contact:  'Contacto | Instal·lacions Jaume Nadal Felanitx',

    // Services page title
    services_page_title: 'SERVICIOS',

    // Marcas page hero
    marcas_page_title: 'MARCAS',

    // Contact page hero
    contacto_page_title: 'CONTACTO',

    // Individual service names & descriptions
    s01_name: 'FONTANERÍA',
    s01_desc: 'Realizamos todo tipo de trabajos de fontanería, desde instalación de tuberías bajantes para la evacuación de aguas residuales a la instalación interior de tuberías para cuartos de baño, pasando por el suministro y colocación de porcelana y grifería.',

    s02_name: 'TRATAMIENTO DE AGUAS',
    s02_desc: 'Instalación, control y mantenimiento de sistemas de descalcificación de aguas y de osmosis para viviendas, comunidades y zonas industriales.',

    s03_name: 'CALEFACCIÓN Y RADIADORES',
    s03_desc: 'Instalación, control y mantenimiento de sistemas de equipos calefactables, revisión de circuitos térmicos, radiadores y puesta a punto de calderas para el invierno.',

    s04_name: 'BOMBA DE CALOR Y AEROTERMIA',
    s04_desc: 'Instalación y control de nuevos sistemas de calefacción para viviendas mediante sistemas de aerotermia. Revisión de bombas de circulación, circuitos caloríficos y mantenimiento de equipos.',

    s05_name: 'AIRE ACONDICIONADO',
    s05_desc: 'Realizamos todo tipo de instalaciones y mantenimientos de aire acondicionado, además de revisiones y reparaciones para que tenga su sistema de aire listo para el verano.',

    s06_name: 'SUELO RADIANTE',
    s06_desc: 'Instalación de suelos radiantes en viviendas para conseguir una climatización invisible, con una temperatura uniforme y sin corrientes de aire.',

    s07_name: 'ENERGÍA SOLAR',
    s07_desc: 'Instalación de paneles solares térmicos para la producción de agua caliente sanitaria y sistemas de apoyo para calefacción, ahorrando en el consumo energético.',

    s08_name: 'PISCINAS',
    s08_desc: 'Instalación y mantenimiento de sistemas de depuración, bombas de calor para piscinas, equipos de filtración y tratamiento del agua.',

    s09_name: 'GAS',
    s09_desc: 'Instalación y legalización de instalaciones de gas natural y gas butano/propano, calderas de gas, cocinas y equipos de calefacción por gas.',

    s10_name: 'INSTALACIONES ELÉCTRICAS',
    s10_desc: 'Instalaciones eléctricas para viviendas, locales y comunidades. Cuadros eléctricos, líneas de suministro, puntos de recarga para vehículos eléctricos.',

    s11_name: 'ENERGÍA FOTOVOLTAICA',
    s11_desc: 'Instalación de paneles solares fotovoltaicos para autoconsumo, reduciendo la factura eléctrica y apostando por las energías renovables.',

    s12_name: 'POZOS Y BOMBEO',
    s12_desc: 'Instalación de bombas sumergibles en pozos y aljibes, sistemas de extracción y bombeo de agua para viviendas y fincas rurales.',

    s13_name: 'GRUPOS DE PRESIÓN',
    s13_desc: 'Instalación, control y mantenimiento de grupos de presión tanto en viviendas, comunidades o industrias. Así como grupos de presión sumergidos en aljibes y pozos. Revisión de circuitos de presión y mantenimiento.',
  },

  en: {
    nav_home:     'Home',
    nav_services: 'Services',
    nav_brands:   'Brands',
    nav_contact:  'Contact',
    nav_cta:      'Contact',

    hero_sub: 'Specialists in plumbing, heating and air conditioning in Mallorca',

    about_heading: 'Serving you since 2005',
    about_stat1_num: 'Since\n2005',
    about_stat1_label: 'Over 20 years of experience',
    about_stat2_num: '+13',
    about_stat2_label: 'Specialised services',
    about_stat3_num: 'Felanitx',
    about_stat3_label: 'Mallorca, Balearic Islands',
    about_body: 'At Jaume Nadal Pedregosa we have always focused on meeting the needs of our most demanding clients, offering a serious, professional approach alongside high-quality products. We specialise in plumbing, heating and air conditioning, swimming pools, pressure pump groups and wells, solar energy and electrical installations. If you have a need or a project, contact us with no obligation.',
    about_cta:    'Request a quote',

    // FAQ
    faq_label:   'FAQ',
    faq_heading: 'Frequently asked questions',
    faq1_q: 'Do you provide free quotes?',
    faq1_a: 'Yes, we provide completely free and no-obligation quotes. Contact us by phone, WhatsApp or via the contact form and we will get back to you as soon as possible.',
    faq2_q: 'Which areas of Mallorca do you cover?',
    faq2_a: 'We mainly work in Felanitx and the Migjorn region, but also take on projects in other areas of Mallorca depending on the job.',
    faq3_q: 'Do you handle emergencies?',
    faq3_a: 'Yes, we handle plumbing and heating emergencies. Call us on 971 580 428 or 646 170 957 and we will assist you as soon as possible.',
    faq4_q: 'Which brands do you use in your installations?',
    faq4_a: 'We work exclusively with premium brands such as Daikin, Vaillant, Uponor, Hansgrohe, Roca and Grohe, ensuring maximum quality and durability.',
    faq5_q: 'Do you install air conditioning in residential communities?',
    faq5_a: 'Yes, we carry out installations in private homes, residential communities, commercial premises and industrial buildings.',
    faq6_q: 'Do you offer annual boiler maintenance?',
    faq6_a: 'Yes, we offer annual maintenance contracts for boilers and heating systems, ensuring optimal performance and extending equipment lifespan.',
    faq7_q: 'How long does an air conditioning installation take?',
    faq7_a: 'A standard air conditioning installation for a home is usually completed in a single day. Larger or more complex projects may take 2-3 days.',
    faq8_q: 'Do you handle grants and subsidies for solar energy or aerothermal systems?',
    faq8_a: 'Yes, we advise on available subsidies and help with the application process for solar energy and aerothermal installations.',

    // Why us
    why_label:   'WHY CHOOSE US?',
    why_heading: 'The Jaume Nadal Difference',
    why1_title: '20+ Years Experience',
    why1_text:  'Serving Mallorca\'s most demanding clients since 2005.',
    why2_title: 'Premium Brands Only',
    why2_text:  'We work exclusively with Daikin, Vaillant, Hansgrohe and other leading brands.',
    why3_title: 'Emergency Service',
    why3_text:  'We respond to emergencies quickly. Call us and we\'ll help as soon as possible.',
    why4_title: 'Free Quote',
    why4_text:  'We provide a detailed quote with no commitment and no cost.',

    services_label: 'What we do',
    services_title: 'Our Services',
    services_cta:   'View all services',

    testimonials_label: 'Reviews',
    testimonials_title: 'What our clients say',
    testimonials_sub:   'Over 20 years of trust in Felanitx and all of Mallorca',
    testimonials_cta:   'See Google Reviews',

    brands_strip_title: 'We work with the best brands',
    brands_strip_cta:   'View all our brands →',

    cta_heading: 'Have a project? Contact us with no obligation',
    cta_btn:     'Request a quote',

    brands_page_title:   'Our Brands',
    brands_intro_quote:  'At Jaume Nadal Pedregosa we only work with leading brands, thus offering the best results and the highest quality to our clients.',
    brands_intro_author: '— JAUME NADAL',

    contact_details_title: 'Our Details',
    contact_intro:         'If you have any questions or need more information, you can find us at:',
    contact_hours:         'Monday to Friday, 08:00 to 14:00',
    contact_addr_label:    'ADDRESS',
    contact_addr:          'Paseo Ramón Llull 6, 07200 Felanitx (Balearic Islands)',
    contact_mobile_label:  'MOBILE',
    contact_mobile:        '646 170 957 – 636 139 640',
    contact_email_label:   'EMAIL',
    contact_tel_label:     'TELEPHONE',
    contact_directions:    'Get directions',
    contact_form_title:    'Contact Us',

    form_name:    'Your name',
    form_email:   'Your email address',
    form_subject: 'Subject',
    form_message: 'Your message',
    form_submit:  'Send message',

    footer_cookies: 'Cookie Policy',
    footer_privacy: 'Privacy Policy',
    footer_address: 'Paseo Ramón Llull 6\n07200 Felanitx (Balearic Islands)',
    footer_copyright: '© 2026 | Instal·lacions Jaume Nadal',

    whatsapp_tooltip: 'Message us on WhatsApp',

    title_home:     'Plumbing, Heating and Air Conditioning in Felanitx | Jaume Nadal',
    title_services: 'Plumbing and HVAC Services | Jaume Nadal Felanitx',
    title_brands:   'Brands we work with | Jaume Nadal',
    title_contact:  'Contact | Instal·lacions Jaume Nadal Felanitx',

    services_page_title: 'SERVICES',
    marcas_page_title:   'BRANDS',
    contacto_page_title: 'CONTACT',

    s01_name: 'PLUMBING',
    s01_desc: 'We carry out all types of plumbing work, from downpipe installation for wastewater drainage to interior pipe fitting for bathrooms, including supply and installation of ceramics and taps.',

    s02_name: 'WATER TREATMENT',
    s02_desc: 'Installation, control and maintenance of water softening and osmosis systems for homes, communities and industrial areas.',

    s03_name: 'HEATING & RADIATORS',
    s03_desc: 'Installation, control and maintenance of heating systems, inspection of thermal circuits, radiators and boiler servicing for winter.',

    s04_name: 'HEAT PUMP & AEROTHERMAL',
    s04_desc: 'Installation and control of new home heating systems using aerothermal technology. Inspection of circulation pumps, heat circuits and equipment maintenance.',

    s05_name: 'AIR CONDITIONING',
    s05_desc: 'We carry out all types of air conditioning installations and maintenance, plus inspections and repairs to have your system ready for summer.',

    s06_name: 'UNDERFLOOR HEATING',
    s06_desc: 'Installation of underfloor heating systems in homes for invisible climate control, with uniform temperature and no air currents.',

    s07_name: 'SOLAR ENERGY',
    s07_desc: 'Installation of thermal solar panels for domestic hot water production and heating support systems, reducing energy consumption.',

    s08_name: 'SWIMMING POOLS',
    s08_desc: 'Installation and maintenance of filtration systems, heat pumps for pools, filtration equipment and water treatment.',

    s09_name: 'GAS',
    s09_desc: 'Installation and legal certification of natural gas and butane/propane systems, gas boilers, cookers and gas heating equipment.',

    s10_name: 'ELECTRICAL INSTALLATIONS',
    s10_desc: 'Electrical installations for homes, premises and communities. Electrical panels, supply lines, EV charging points.',

    s11_name: 'PHOTOVOLTAIC ENERGY',
    s11_desc: 'Installation of photovoltaic solar panels for self-consumption, reducing electricity bills and investing in renewable energy.',

    s12_name: 'WELLS & PUMPING',
    s12_desc: 'Installation of submersible pumps in wells and cisterns, water extraction and pumping systems for homes and rural properties.',

    s13_name: 'PRESSURE PUMP GROUPS',
    s13_desc: 'Installation, control and maintenance of pressure pump groups for homes, communities and industries, including submersible pressure groups in cisterns and wells. Pressure circuit inspection and maintenance.',
  },

  de: {
    nav_home:     'Startseite',
    nav_services: 'Dienstleistungen',
    nav_brands:   'Marken',
    nav_contact:  'Kontakt',
    nav_cta:      'Kontakt',

    hero_sub: 'Spezialisten für Sanitär, Heizung und Klimatechnik auf Mallorca',

    about_heading: 'Seit 2005 für Sie im Einsatz',
    about_stat1_num: 'Seit\n2005',
    about_stat1_label: 'Über 20 Jahre Erfahrung',
    about_stat2_num: '+13',
    about_stat2_label: 'Spezialisierte Dienstleistungen',
    about_stat3_num: 'Felanitx',
    about_stat3_label: 'Mallorca, Balearen',
    about_body: 'Bei Jaume Nadal Pedregosa haben wir uns stets darum gekümmert, die Bedürfnisse unserer anspruchsvollsten Kunden zu erfüllen und dabei immer eine seriöse und professionelle Behandlung zusammen mit hochwertigen Produkten anzubieten. Wir sind Spezialisten für Sanitär, Heizung und Klimatechnik, Schwimmbäder, Druckpumpengruppen und Brunnen, Solarenergie und elektrische Installationen. Wenn Sie einen Bedarf oder ein Projekt haben, kontaktieren Sie uns unverbindlich.',
    about_cta:    'Angebot anfordern',

    // FAQ
    faq_label:   'FAQ',
    faq_heading: 'Häufig gestellte Fragen',
    faq1_q: 'Erstellen Sie kostenlose Angebote?',
    faq1_a: 'Ja, wir erstellen völlig kostenlose und unverbindliche Angebote. Kontaktieren Sie uns per Telefon, WhatsApp oder über das Kontaktformular.',
    faq2_q: 'In welchen Gebieten Mallorcas sind Sie tätig?',
    faq2_a: 'Wir arbeiten hauptsächlich in Felanitx und der Migjorn-Region, nehmen aber auch Aufträge in anderen Teilen Mallorcas an.',
    faq3_q: 'Bearbeiten Sie Notfälle?',
    faq3_a: 'Ja, wir bearbeiten Klempner- und Heizungsnotfälle. Rufen Sie uns unter 971 580 428 oder 646 170 957 an.',
    faq4_q: 'Welche Marken verwenden Sie bei Ihren Installationen?',
    faq4_a: 'Wir arbeiten ausschließlich mit erstklassigen Marken wie Daikin, Vaillant, Uponor, Hansgrohe, Roca und Grohe.',
    faq5_q: 'Installieren Sie Klimaanlagen in Wohngemeinschaften?',
    faq5_a: 'Ja, wir führen Installationen in Privatwohnungen, Wohngemeinschaften, Gewerberäumen und Industriegebäuden durch.',
    faq6_q: 'Bieten Sie jährliche Kesselwartung an?',
    faq6_a: 'Ja, wir bieten Jahreswartungsverträge für Kessel und Heizungsanlagen an.',
    faq7_q: 'Wie lange dauert eine Klimaanlageninstallation?',
    faq7_a: 'Eine Standard-Klimaanlage für ein Haus wird in der Regel an einem Tag installiert. Größere Projekte können 2-3 Tage dauern.',
    faq8_q: 'Bearbeiten Sie Förderanträge für Solarenergie oder Aerothermie?',
    faq8_a: 'Ja, wir beraten zu verfügbaren Förderungen und helfen bei der Antragstellung für Solar- und Aerothermie-Anlagen.',

    // Why us
    why_label:   'WARUM WIR?',
    why_heading: 'Der Jaume Nadal Unterschied',
    why1_title: '20+ Jahre Erfahrung',
    why1_text:  'Seit 2005 für anspruchsvolle Kunden auf Mallorca tätig.',
    why2_title: 'Nur Erstklassige Marken',
    why2_text:  'Wir arbeiten ausschließlich mit Daikin, Vaillant, Hansgrohe und anderen führenden Marken.',
    why3_title: 'Notfalldienst',
    why3_text:  'Wir reagieren schnell auf Notfälle. Rufen Sie uns an, wir helfen so schnell wie möglich.',
    why4_title: 'Kostenloser Kostenvoranschlag',
    why4_text:  'Wir erstellen ein detailliertes Angebot ohne Verpflichtung und kostenlos.',

    services_label: 'Was wir tun',
    services_title: 'Unsere Dienstleistungen',
    services_cta:   'Alle Leistungen ansehen',

    testimonials_label: 'Bewertungen',
    testimonials_title: 'Was unsere Kunden sagen',
    testimonials_sub:   'Über 20 Jahre Vertrauen in Felanitx und ganz Mallorca',
    testimonials_cta:   'Google-Bewertungen ansehen',

    brands_strip_title: 'Wir arbeiten mit den besten Marken',
    brands_strip_cta:   'Alle unsere Marken ansehen →',

    cta_heading: 'Haben Sie ein Projekt? Kontaktieren Sie uns unverbindlich',
    cta_btn:     'Angebot anfordern',

    brands_page_title:   'Unsere Marken',
    brands_intro_quote:  'Bei Jaume Nadal Pedregosa arbeiten wir ausschließlich mit erstklassigen Marken und bieten unseren Kunden so die besten Ergebnisse und höchste Qualität.',
    brands_intro_author: '— JAUME NADAL',

    contact_details_title: 'Unsere Kontaktdaten',
    contact_intro:         'Wenn Sie Fragen haben oder weitere Informationen benötigen, finden Sie uns unter:',
    contact_hours:         'Montag bis Freitag, 08:00 bis 14:00 Uhr',
    contact_addr_label:    'ADRESSE',
    contact_addr:          'Paseo Ramón Llull 6, 07200 Felanitx (Balearen)',
    contact_mobile_label:  'MOBIL',
    contact_mobile:        '646 170 957 – 636 139 640',
    contact_email_label:   'E-MAIL',
    contact_tel_label:     'TELEFON',
    contact_directions:    'Wegbeschreibung',
    contact_form_title:    'Schreiben Sie uns',

    form_name:    'Ihr Name',
    form_email:   'Ihre E-Mail-Adresse',
    form_subject: 'Betreff',
    form_message: 'Ihre Nachricht',
    form_submit:  'Nachricht senden',

    footer_cookies: 'Cookie-Richtlinie',
    footer_privacy: 'Datenschutzerklärung',
    footer_address: 'Paseo Ramón Llull 6\n07200 Felanitx (Balearen)',
    footer_copyright: '© 2026 | Instal·lacions Jaume Nadal',

    whatsapp_tooltip: 'Schreiben Sie uns auf WhatsApp',

    title_home:     'Sanitär, Heizung und Klimatechnik in Felanitx | Jaume Nadal',
    title_services: 'Sanitär- und Klimadienstleistungen | Jaume Nadal Felanitx',
    title_brands:   'Marken, mit denen wir arbeiten | Jaume Nadal',
    title_contact:  'Kontakt | Instal·lacions Jaume Nadal Felanitx',

    services_page_title: 'DIENSTLEISTUNGEN',
    marcas_page_title:   'MARKEN',
    contacto_page_title: 'KONTAKT',

    s01_name: 'SANITÄRINSTALLATIONEN',
    s01_desc: 'Wir führen alle Arten von Klempnerarbeiten durch, von der Installation von Fallrohren für die Abwasserentsorgung bis zur Innenverrohrung für Badezimmer, einschließlich Lieferung und Montage von Keramik und Armaturen.',

    s02_name: 'WASSERAUFBEREITUNG',
    s02_desc: 'Installation, Steuerung und Wartung von Wasserenthärtigungs- und Osmoseanlagen für Wohnhäuser, Gemeinschaftsanlagen und Industriebereiche.',

    s03_name: 'HEIZUNG & HEIZKÖRPER',
    s03_desc: 'Installation, Steuerung und Wartung von Heizungsanlagen, Überprüfung von Wärmekreisläufen, Heizkörpern und Kesseln zur Wintervorbereitung.',

    s04_name: 'WÄRMEPUMPE & AEROTHERMIE',
    s04_desc: 'Installation und Steuerung neuer Heizungssysteme für Wohnhäuser mittels Aerothermie. Überprüfung von Umwälzpumpen, Wärmekreisläufen und Gerätewartung.',

    s05_name: 'KLIMAANLAGE',
    s05_desc: 'Wir führen alle Arten von Klimaanlageninstallationen und -wartungen durch, sowie Inspektionen und Reparaturen, damit Ihre Anlage sommertauglich ist.',

    s06_name: 'FUSSBODENHEIZUNG',
    s06_desc: 'Installation von Fußbodenheizungen in Wohnhäusern für unsichtbare Klimatisierung, gleichmäßige Temperatur und ohne Zugluft.',

    s07_name: 'SOLARENERGIE',
    s07_desc: 'Installation von thermischen Solarkollektoren zur Warmwasserbereitung und als Heizungsunterstützung zur Senkung des Energieverbrauchs.',

    s08_name: 'SCHWIMMBÄDER',
    s08_desc: 'Installation und Wartung von Filteranlagen, Wärmepumpen für Pools, Filtrationsgeräten und Wasseraufbereitung.',

    s09_name: 'GAS',
    s09_desc: 'Installation und behördliche Zulassung von Erdgas- und Butan-/Propananlagen, Gaskesseln, Herden und Gasheizungsanlagen.',

    s10_name: 'ELEKTROINSTALLATIONEN',
    s10_desc: 'Elektroinstallationen für Wohnhäuser, Gewerberäume und Gemeinschaftsanlagen. Schaltschränke, Versorgungsleitungen, Ladepunkte für Elektrofahrzeuge.',

    s11_name: 'PHOTOVOLTAIK',
    s11_desc: 'Installation von Photovoltaik-Solarmodulen für den Eigenverbrauch zur Senkung der Stromrechnung und Förderung erneuerbarer Energien.',

    s12_name: 'BRUNNEN & PUMPEN',
    s12_desc: 'Installation von Tauchpumpen in Brunnen und Zisternen, Wasserentnahme- und Pumpsysteme für Wohnhäuser und ländliche Anwesen.',

    s13_name: 'DRUCKPUMPENGRUPPEN',
    s13_desc: 'Installation, Steuerung und Wartung von Druckpumpengruppen für Wohnhäuser, Gemeinschaftsanlagen und Industrie, einschließlich Tauchdruckgruppen in Zisternen und Brunnen. Druckkreisinspektion und Wartung.',
  }
};

/* ============================================================
   PAGE TITLE KEYS — maps each page filename to its title key
   ============================================================ */
const pageTitleKeys = {
  'index.html':    'title_home',
  '':              'title_home',
  'servicios.html':'title_services',
  'marcas.html':   'title_brands',
  'contacto.html': 'title_contact',
};

/* ============================================================
   LANGUAGE ENGINE
   ============================================================ */
let currentLang = 'es';

function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  // Update <html lang>
  document.documentElement.lang = lang;

  // Swap all data-i18n text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      // Handle newlines in stat numbers
      if (key.endsWith('_num')) {
        el.innerHTML = translations[lang][key].replace(/\n/g, '<br>');
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Swap placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update page title
  const page = window.location.pathname.split('/').pop();
  const titleKey = pageTitleKeys[page] || 'title_home';
  document.title = translations[lang][titleKey] || document.title;

  // Update WhatsApp tooltip
  const waBtn = document.querySelector('.whatsapp-btn');
  if (waBtn && translations[lang].whatsapp_tooltip) {
    waBtn.setAttribute('data-tooltip', translations[lang].whatsapp_tooltip);
  }

  // Highlight active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Persist
  try { localStorage.setItem('jn_lang', lang); } catch(e) {}
}

/* ============================================================
   INIT LANGUAGE
   ============================================================ */
function initLanguage() {
  let saved = 'es';
  try { saved = localStorage.getItem('jn_lang') || 'es'; } catch(e) {}
  applyLanguage(saved);
}

/* ============================================================
   NAVBAR SCROLL SHADOW
   ============================================================ */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });
}

/* ============================================================
   HAMBURGER MENU
   ============================================================ */
function initHamburger() {
  const btn  = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

/* ============================================================
   LANGUAGE SWITCHER BUTTONS
   ============================================================ */
function initLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) applyLanguage(lang);
    });
  });
}

/* ============================================================
   INTERSECTION OBSERVER — fade in on scroll
   ============================================================ */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  // Stagger service cards
  document.querySelectorAll('.services-grid .service-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });
  document.querySelectorAll('.testimonials-grid .testimonial-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
  });
  document.querySelectorAll('.brands-grid-cards .brand-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.06}s`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ============================================================
   WHATSAPP FLOATING BUTTON — delayed appearance
   ============================================================ */
function initWhatsApp() {
  const btn = document.querySelector('.whatsapp-btn');
  if (!btn) return;
  setTimeout(() => btn.classList.add('visible'), 1500);
}

/* ============================================================
   BOOT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavbarScroll();
  initHamburger();
  initLangButtons();
  initScrollAnimations();
  initWhatsApp();
});
