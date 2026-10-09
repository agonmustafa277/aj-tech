export const languages = [
  "de",
  "en",
  "sq",
  "es",
  "tr",
  "el",
  "fr",
  "it",
  "nl",
  "pl",
  "pt",
  "ar",
  "ru",
] as const;

export type Language = (typeof languages)[number];

export const languageLabels: Record<Language, string> = {
  de: "Deutsch",
  en: "English",
  sq: "Shqip",
  es: "Español",
  tr: "Türkçe",
  el: "Ελληνικά",
  fr: "Français",
  it: "Italiano",
  nl: "Nederlands",
  pl: "Polski",
  pt: "Português",
  ar: "العربية",
  ru: "Русский",
};

export type Translation = {
  nav: {
    services: string;
    process: string;
    faq: string;
    contact: string;
    analysis: string;
  };
  hero: {
    badge: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
    cardTitle: string;
    points: string[];
  };
  problem: {
    eyebrow: string;
    title: string;
    text: string;
    cards: { title: string; text: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    text: string;
    cards: { title: string; text: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    text: string;
    steps: { title: string; text: string }[];
  };
  industries: {
    eyebrow: string;
    title: string;
    text: string;
    cards: { title: string; text: string }[];
  };
  seo: {
    eyebrow: string;
    title: string;
    text: string;
    boxTitle: string;
    features: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    title: string;
    text: string;
    name: string;
    email: string;
    website: string;
    message: string;
    placeholder: string;
    button: string;
  };
  footer: {
    description: string;
    servicesTitle: string;
    legalTitle: string;
    contactTitle: string;
    rights: string;
    services: string[];
    privacy: string;
    imprint: string;
    analysis: string;
  };
};

export const translations: Record<Language, Translation> = {
  de: {
    nav: {
      services: "Leistungen",
      process: "Ablauf",
      faq: "FAQ",
      contact: "Kontakt",
      analysis: "Kostenlose Website-Analyse",
    },
    hero: {
      badge: "Webdesign aus Mechernich · Kreis Euskirchen & deutschlandweit",
      title: "Webdesign in Mechernich: Websites, die Anfragen bringen",
      text: "AJ-Tech entwickelt schnelle, moderne Websites für Handwerker, Dienstleister und kleine Betriebe – mit klaren Texten, sauberer SEO-Basis und Kontaktwegen, die wirklich funktionieren. Auf Wunsch automatisieren wir auch Anfragen, Terminbuchungen und E-Mail-Abläufe.",
      primary: "Kostenlose Erstanalyse anfragen",
      secondary: "Leistungen ansehen",
      cardTitle: "Was Ihre Website leisten muss",
      points: [
        "Sofort klar zeigen, was Sie anbieten.",
        "Auf Smartphone und Desktop schnell laden.",
        "Besucher direkt zu Anfrage, Anruf oder Termin führen.",
        "Bei Google sauber crawlbar und verständlich sein.",
        "Manuelle Arbeit durch Automatisierung reduzieren.",
      ],
    },
    problem: {
      eyebrow: "Problem",
      title: "Viele kleine Unternehmen verlieren Anfragen, bevor der Kunde Kontakt aufnimmt.",
      text: "Eine Website ist kein digitales Prospekt. Sie muss Vertrauen aufbauen, Orientierung geben und den nächsten Schritt einfach machen.",
      cards: [
        {
          title: "Unklare Positionierung",
          text: "Besucher verstehen nicht innerhalb weniger Sekunden, was Sie anbieten und warum sie Sie kontaktieren sollten.",
        },
        {
          title: "Schwache Kontaktwege",
          text: "Kontaktformulare, Telefonnummern oder Terminbuchungen sind versteckt, fehlerhaft oder nicht mobil optimiert.",
        },
        {
          title: "Technische Mängel",
          text: "Langsame Ladezeiten, schlechte Struktur und fehlende SEO-Basics erschweren Sichtbarkeit und Nutzerführung.",
        },
      ],
    },
    services: {
      eyebrow: "Leistungen",
      title: "Websites, Relaunches und Automatisierungen aus einer Hand.",
      text: "AJ-Tech verbindet Webentwicklung mit praktischer Prozessautomatisierung. Dadurch entsteht nicht nur eine schöne Website, sondern ein digitales Werkzeug für mehr Effizienz.",
      cards: [
        {
          title: "Webseitenentwicklung",
          text: "Moderne Unternehmenswebsites mit klarer Struktur, responsivem Design, schnellen Ladezeiten und sauberem HTML.",
        },
        {
          title: "Website-Relaunch",
          text: "Überarbeitung bestehender Websites mit besserer Nutzerführung, klareren Texten, neuen Kontaktwegen und technischer SEO-Basis.",
        },
        {
          title: "SEO-Grundoptimierung",
          text: "Meta-Daten, Überschriftenstruktur, interne Verlinkung, strukturierte Daten, lokale Suchbegriffe und indexierbare Inhalte.",
        },
        {
          title: "Automatisierung",
          text: "Kontaktformulare, E-Mail-Benachrichtigungen, CRM-Anbindung, Terminbuchung und wiederkehrende Abläufe.",
        },
        {
          title: "Wartung & Sicherheit",
          text: "Regelmäßige Updates, Backups, technische Prüfung, kleinere Änderungen und Monitoring der wichtigsten Website-Funktionen.",
        },
        {
          title: "Website-Analyse",
          text: "Konkrete Prüfung Ihrer aktuellen Website auf Anfrageverluste, technische Fehler, SEO-Basics und schnelle Verbesserungen.",
        },
      ],
    },
    process: {
      eyebrow: "Ablauf",
      title: "Ein klarer Prozess ohne unnötige Komplexität.",
      text: "Jedes Projekt beginnt mit dem geschäftlichen Ziel. Erst danach folgen Design, Technik und Automatisierung.",
      steps: [
        {
          title: "Analyse",
          text: "Wir prüfen Ihre aktuelle Website, Zielgruppe, Kontaktwege, Suchbegriffe und wichtigsten Geschäftsziele.",
        },
        {
          title: "Struktur & Angebot",
          text: "Wir definieren Seitenstruktur, Inhalte, klare Handlungsaufforderungen und ein realistisches Umsetzungspaket.",
        },
        {
          title: "Entwicklung",
          text: "Die Website wird technisch sauber, schnell, mobil optimiert und suchmaschinenfreundlich umgesetzt.",
        },
        {
          title: "Automatisierung",
          text: "Formulare, Terminbuchung, E-Mail-Prozesse oder CRM-Anbindungen werden eingerichtet, wenn sie geschäftlich sinnvoll sind.",
        },
        {
          title: "Launch & Optimierung",
          text: "Nach Veröffentlichung werden Funktion, Darstellung, Geschwindigkeit und Indexierbarkeit geprüft.",
        },
      ],
    },
    industries: {
      eyebrow: "Zielgruppen",
      title: "Besonders geeignet für kleine Unternehmen mit erklärungsbedürftigen Leistungen.",
      text: "AJ-Tech arbeitet besonders stark dort, wo Technik, Vertrauen und klare Anfrageprozesse wichtig sind.",
      cards: [
        {
          title: "Handwerker",
          text: "Mehr regionale Anfragen, bessere Leistungsseiten und einfache Angebotsanfragen.",
        },
        {
          title: "B2B-Dienstleister",
          text: "Klare Positionierung, seriöse Darstellung und qualifizierte Kontaktformulare.",
        },
        {
          title: "Technische Unternehmen",
          text: "Strukturierte Erklärung komplexer Leistungen, Referenzen und Automatisierungen.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO",
      title: "SEO beginnt mit Klarheit, Struktur und technischer Sauberkeit.",
      text: "Eine Website kann bei Google nur sichtbar werden, wenn Inhalte verständlich, relevant, indexierbar und technisch zugänglich sind. AJ-Tech legt dafür die Grundlage.",
      boxTitle: "Enthaltene SEO-Basics",
      features: [
        "Keyword-orientierte Seitenstruktur",
        "Eindeutige Title-Tags und Meta-Descriptions",
        "Saubere H1-H3-Überschriften",
        "Interne Verlinkung und klare Navigation",
        "Strukturierte Daten per JSON-LD",
        "Mobile Optimierung und schnelle Ladezeiten",
        "Vorbereitung für Google Search Console",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Häufige Fragen zu Webdesign und Automatisierung.",
      items: [
        {
          question: "Kann AJ-Tech meine bestehende Website verbessern?",
          answer: "Ja. Bestehende Websites können technisch, inhaltlich und strukturell optimiert werden.",
        },
        {
          question: "Ist eine Platz-1-Garantie bei Google möglich?",
          answer: "Nein. Seriöse SEO kann keine Platz-1-Garantie geben.",
        },
        {
          question: "Welche Automatisierungen sind sinnvoll?",
          answer: "Sinnvoll sind Automatisierungen, die manuelle Arbeit reduzieren: Kontaktformular zu E-Mail oder CRM, automatische Terminbestätigungen und strukturierte Angebotsanfragen.",
        },
        {
          question: "Wie lange dauert eine neue Website?",
          answer: "Ein kleiner Website-Fix dauert oft wenige Tage. Ein kompletter Relaunch dauert je nach Umfang meist mehrere Wochen.",
        },
      ],
    },
    contact: {
      title: "Kostenlose Erstanalyse für Ihre Website",
      text: "Schildern Sie kurz Ihr Anliegen – ob neue Website, Überarbeitung oder Automatisierung. Sie erhalten eine persönliche, unverbindliche Einschätzung mit konkreten nächsten Schritten.",
      name: "Name",
      email: "E-Mail",
      website: "Ihre Website (falls vorhanden)",
      message: "Ihre Nachricht",
      placeholder: "z. B. Wir sind ein Malerbetrieb aus Euskirchen und möchten über unsere Website mehr Anfragen bekommen.",
      button: "Kostenlose Erstanalyse anfragen",
    },
    footer: {
      description: "Webdesign, SEO-Grundoptimierung und Automatisierung für kleine Unternehmen aus Mechernich, dem Kreis Euskirchen und ganz Deutschland.",
      servicesTitle: "Leistungen",
      legalTitle: "Rechtliches",
      contactTitle: "Kontakt",
      rights: "Alle Rechte vorbehalten.",
      services: ["Webseitenentwicklung", "Website-Relaunch", "Automatisierung", "Website-Wartung"],
      privacy: "Datenschutz",
      imprint: "Impressum",
      analysis: "Website-Analyse anfragen",
    },
  },

  en: {
    nav: {
      services: "Services",
      process: "Process",
      faq: "FAQ",
      contact: "Contact",
      analysis: "Free Website Audit",
    },
    hero: {
      badge: "Technically clean websites for measurable inquiries",
      title: "Website development and automation for small businesses",
      text: "AJ-Tech builds fast, structured and SEO-optimized websites that turn visitors into inquiries. We also automate contact forms, bookings and internal workflows.",
      primary: "Request website audit",
      secondary: "View services",
      cardTitle: "What your website must achieve",
      points: [
        "Show immediately what you offer.",
        "Load quickly on mobile and desktop.",
        "Guide visitors directly to inquiry, call or booking.",
        "Be cleanly crawlable and understandable for Google.",
        "Reduce manual work through automation.",
      ],
    },
    problem: {
      eyebrow: "Problem",
      title: "Many small businesses lose inquiries before customers even make contact.",
      text: "A website is not a digital brochure. It must build trust, provide orientation and make the next step easy.",
      cards: [
        {
          title: "Unclear positioning",
          text: "Visitors do not understand within seconds what you offer and why they should contact you.",
        },
        {
          title: "Weak contact paths",
          text: "Forms, phone numbers or booking options are hidden, broken or not optimized for mobile.",
        },
        {
          title: "Technical issues",
          text: "Slow loading times, poor structure and missing SEO basics make visibility and user guidance harder.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Websites, relaunches and automations from one source.",
      text: "AJ-Tech combines web development with practical process automation. The result is not just a good-looking website, but a digital tool for more efficiency.",
      cards: [
        {
          title: "Website development",
          text: "Modern business websites with clear structure, responsive design, fast loading times and clean HTML.",
        },
        {
          title: "Website relaunch",
          text: "Improvement of existing websites with better user guidance, clearer copy, new contact paths and technical SEO basics.",
        },
        {
          title: "SEO foundation",
          text: "Metadata, heading structure, internal links, structured data, local keywords and indexable content.",
        },
        {
          title: "Automation",
          text: "Contact forms, email notifications, CRM connection, booking flows and recurring workflows.",
        },
        {
          title: "Maintenance & security",
          text: "Regular updates, backups, technical checks, small changes and monitoring of important website functions.",
        },
        {
          title: "Website audit",
          text: "Concrete review of your current website for inquiry losses, technical errors, SEO basics and fast improvements.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "A clear process without unnecessary complexity.",
      text: "Every project starts with the business goal. Design, technology and automation follow after that.",
      steps: [
        {
          title: "Analysis",
          text: "We review your current website, target audience, contact paths, keywords and main business goals.",
        },
        {
          title: "Structure & offer",
          text: "We define page structure, content, clear calls to action and a realistic implementation package.",
        },
        {
          title: "Development",
          text: "The website is built cleanly, quickly, mobile-optimized and search-engine friendly.",
        },
        {
          title: "Automation",
          text: "Forms, bookings, email processes or CRM integrations are set up when they make business sense.",
        },
        {
          title: "Launch & optimization",
          text: "After launch, functionality, layout, speed and indexability are checked.",
        },
      ],
    },
    
    industries: {
      eyebrow: "Target groups",
      title: "Especially suitable for small businesses with services that require explanation.",
      text: "AJ-Tech is strongest where technology, trust and clear inquiry processes matter.",
      cards: [
        {
          title: "Trades",
          text: "More regional inquiries, better service pages and simple quote requests.",
        },
        {
          title: "B2B service providers",
          text: "Clear positioning, professional presentation and qualified contact forms.",
        },
        {
          title: "Technical companies",
          text: "Structured explanation of complex services, references and automations.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO",
      title: "SEO starts with clarity, structure and technical quality.",
      text: "A website can only become visible on Google when content is understandable, relevant, indexable and technically accessible. AJ-Tech builds that foundation.",
      boxTitle: "Included SEO basics",
      features: [
        "Keyword-oriented page structure",
        "Clear title tags and meta descriptions",
        "Clean H1-H3 heading structure",
        "Internal linking and clear navigation",
        "Structured data via JSON-LD",
        "Mobile optimization and fast loading times",
        "Preparation for Google Search Console",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions about website development and automation.",
      items: [
        {
          question: "Can AJ-Tech improve my existing website?",
          answer: "Yes. Existing websites can be optimized technically, structurally and in terms of content.",
        },
        {
          question: "Is a Google rank-one guarantee possible?",
          answer: "No. Serious SEO cannot guarantee rank one.",
        },
        {
          question: "Which automations are useful?",
          answer: "Useful automations reduce manual work: form to email or CRM, automatic confirmations and structured inquiry flows.",
        },
        {
          question: "How long does a new website take?",
          answer: "A small website fix often takes a few days. A full relaunch usually takes several weeks depending on scope.",
        },
      ],
    },
    contact: {
      title: "Free initial website audit for your business",
      text: "AJ-Tech checks your website for visible inquiry losses, technical weaknesses and quick improvement opportunities.",
      name: "Name",
      email: "Email",
      website: "Your website",
      message: "What is it about?",
      placeholder: "Website relaunch, optimization, automation or maintenance",
      button: "Request audit",
    },
    footer: {
      description: "Website development, SEO foundation and automation for small businesses.",
      servicesTitle: "Services",
      legalTitle: "Legal",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      services: ["Website development", "Website relaunch", "Automation", "Website maintenance"],
      privacy: "Privacy Policy",
      imprint: "Legal Notice",
      analysis: "Request website audit",
    },
  },

  sq: {
    nav: {
      services: "Shërbimet",
      process: "Procesi",
      faq: "FAQ",
      contact: "Kontakt",
      analysis: "Analizë falas e faqes",
    },
    hero: {
      badge: "Faqe teknikisht të pastra për kërkesa të matshme",
      title: "Zhvillim faqesh dhe automatizim për biznese të vogla",
      text: "AJ-Tech krijon faqe të shpejta, të strukturuara dhe të optimizuara për SEO që i kthejnë vizitorët në kërkesa. Gjithashtu automatizojmë formularë kontakti, rezervime dhe procese të brendshme.",
      primary: "Kontrollo faqen",
      secondary: "Shiko shërbimet",
      cardTitle: "Çfarë duhet të bëjë faqja juaj",
      points: [
        "Të tregojë menjëherë çfarë ofroni.",
        "Të hapet shpejt në telefon dhe kompjuter.",
        "T’i drejtojë vizitorët drejt kontaktit, telefonatës ose rezervimit.",
        "Të jetë e kuptueshme dhe e indeksueshme për Google.",
        "Të ulë punën manuale përmes automatizimit.",
      ],
    },
    problem: {
      eyebrow: "Problemi",
      title: "Shumë biznese të vogla humbin kërkesa para se klienti të kontaktojë.",
      text: "Një faqe interneti nuk është vetëm broshurë digjitale. Ajo duhet të krijojë besim, orientim dhe ta bëjë hapin tjetër të lehtë.",
      cards: [
        {
          title: "Pozicionim i paqartë",
          text: "Vizitorët nuk kuptojnë brenda pak sekondash çfarë ofroni dhe pse duhet t’ju kontaktojnë.",
        },
        {
          title: "Rrugë të dobëta kontakti",
          text: "Formularët, numrat e telefonit ose rezervimet janë të fshehura, me gabime ose jo të përshtatura për telefon.",
        },
        {
          title: "Mangësi teknike",
          text: "Ngarkimi i ngadaltë, struktura e dobët dhe mungesa e bazave SEO e vështirësojnë dukshmërinë.",
        },
      ],
    },
    services: {
      eyebrow: "Shërbimet",
      title: "Faqe interneti, relaunch dhe automatizime nga një vend.",
      text: "AJ-Tech lidh zhvillimin e faqeve me automatizimin praktik të proceseve. Rezultati nuk është vetëm një faqe e bukur, por një mjet digjital për më shumë efikasitet.",
      cards: [
        {
          title: "Zhvillim faqesh",
          text: "Faqe moderne biznesi me strukturë të qartë, dizajn responsiv, shpejtësi të mirë dhe HTML të pastër.",
        },
        {
          title: "Relaunch faqesh",
          text: "Përmirësim i faqeve ekzistuese me udhëzim më të mirë, tekste më të qarta, rrugë kontakti dhe bazë teknike SEO.",
        },
        {
          title: "Optimizim bazë SEO",
          text: "Meta të dhëna, strukturë titujsh, lidhje të brendshme, të dhëna të strukturuara, fjalë kyçe lokale dhe përmbajtje të indeksueshme.",
        },
        {
          title: "Automatizim",
          text: "Formularë kontakti, njoftime email, lidhje CRM, rezervime dhe procese të përsëritura.",
        },
        {
          title: "Mirëmbajtje & siguri",
          text: "Përditësime, backup, kontroll teknik, ndryshime të vogla dhe monitorim i funksioneve kryesore.",
        },
        {
          title: "Analizë faqeje",
          text: "Kontroll konkret i faqes suaj për humbje kërkesash, gabime teknike, baza SEO dhe përmirësime të shpejta.",
        },
      ],
    },
    process: {
      eyebrow: "Procesi",
      title: "Një proces i qartë pa kompleksitet të panevojshëm.",
      text: "Çdo projekt fillon me qëllimin e biznesit. Pastaj vijnë dizajni, teknologjia dhe automatizimi.",
      steps: [
        {
          title: "Analizë",
          text: "Kontrollojmë faqen aktuale, target grupin, rrugët e kontaktit, fjalët kyçe dhe qëllimet kryesore.",
        },
        {
          title: "Strukturë & ofertë",
          text: "Përcaktojmë strukturën, përmbajtjen, thirrjet për veprim dhe një paketë realiste.",
        },
        {
          title: "Zhvillim",
          text: "Faqja ndërtohet pastër, shpejt, e optimizuar për telefon dhe për motorët e kërkimit.",
        },
        {
          title: "Automatizim",
          text: "Formularët, rezervimet, proceset email ose CRM vendosen kur kanë kuptim për biznesin.",
        },
        {
          title: "Publikim & optimizim",
          text: "Pas publikimit kontrollohen funksioni, pamja, shpejtësia dhe indeksimi.",
        },
      ],
    },
    industries: {
      eyebrow: "Grupet e synuara",
      title: "Veçanërisht e përshtatshme për biznese të vogla me shërbime që kërkojnë shpjegim.",
      text: "AJ-Tech funksionon më mirë aty ku teknologjia, besimi dhe proceset e qarta të kërkesave janë të rëndësishme.",
      cards: [
        {
          title: "Zejtarë",
          text: "Më shumë kërkesa rajonale, faqe shërbimesh më të mira dhe kërkesa të thjeshta oferte.",
        },
        {
          title: "Shërbime B2B",
          text: "Pozicionim i qartë, prezantim serioz dhe formularë kontakti të kualifikuar.",
        },
        {
          title: "Kompani teknike",
          text: "Shpjegim i strukturuar i shërbimeve komplekse, referenca dhe automatizime.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO",
      title: "SEO fillon me qartësi, strukturë dhe pastërti teknike.",
      text: "Një faqe mund të bëhet e dukshme në Google vetëm kur përmbajtja është e kuptueshme, relevante, e indeksueshme dhe teknikisht e aksesueshme. AJ-Tech krijon këtë bazë.",
      boxTitle: "Bazat SEO të përfshira",
      features: [
        "Strukturë faqesh sipas fjalëve kyçe",
        "Title tags dhe meta descriptions të qarta",
        "Strukturë e pastër H1-H3",
        "Lidhje të brendshme dhe navigim i qartë",
        "Të dhëna të strukturuara JSON-LD",
        "Optimizim për telefon dhe ngarkim i shpejtë",
        "Përgatitje për Google Search Console",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Pyetje të shpeshta për zhvillim faqesh dhe automatizim.",
      items: [
        {
          question: "A mund ta përmirësojë AJ-Tech faqen time ekzistuese?",
          answer: "Po. Faqet ekzistuese mund të optimizohen teknikisht, në përmbajtje dhe në strukturë.",
        },
        {
          question: "A ka garanci për vendin e parë në Google?",
          answer: "Jo. SEO serioze nuk mund të garantojë vendin e parë.",
        },
        {
          question: "Cilat automatizime janë të dobishme?",
          answer: "Automatizimet e dobishme ulin punën manuale: formular në email ose CRM, konfirmime automatike dhe kërkesa të strukturuara.",
        },
        {
          question: "Sa zgjat një faqe e re?",
          answer: "Një fix i vogël zgjat shpesh disa ditë. Një relaunch i plotë zakonisht disa javë.",
        },
      ],
    },
    contact: {
      title: "Analizë fillestare falas për faqen e biznesit tuaj",
      text: "AJ-Tech kontrollon faqen tuaj për humbje kërkesash, dobësi teknike dhe mundësi të shpejta përmirësimi.",
      name: "Emri",
      email: "Email",
      website: "Faqja juaj",
      message: "Për çfarë bëhet fjalë?",
      placeholder: "Relaunch, optimizim, automatizim ose mirëmbajtje",
      button: "Kërko analizë",
    },
    footer: {
      description: "Zhvillim faqesh, bazë SEO dhe automatizim për biznese të vogla.",
      servicesTitle: "Shërbimet",
      legalTitle: "Ligjore",
      contactTitle: "Kontakt",
      rights: "Të gjitha të drejtat e rezervuara.",
      services: ["Zhvillim faqesh", "Relaunch faqeje", "Automatizim", "Mirëmbajtje faqeje"],
      privacy: "Privatësia",
      imprint: "Impressum",
      analysis: "Kërko analizë faqeje",
    },
  },

  es: {
    nav: {
      services: "Servicios",
      process: "Proceso",
      faq: "FAQ",
      contact: "Contacto",
      analysis: "Análisis web gratuito",
    },
    hero: {
      badge: "Sitios web técnicamente limpios para consultas medibles",
      title: "Desarrollo web y automatización para pequeñas empresas",
      text: "AJ-Tech crea sitios web rápidos, estructurados y optimizados para SEO que convierten visitantes en consultas. También automatizamos formularios de contacto, reservas y procesos internos.",
      primary: "Analizar mi web",
      secondary: "Ver servicios",
      cardTitle: "Lo que debe lograr su sitio web",
      points: [
        "Mostrar de inmediato lo que ofrece.",
        "Cargar rápido en móvil y escritorio.",
        "Guiar visitantes hacia consulta, llamada o reserva.",
        "Ser rastreable y comprensible para Google.",
        "Reducir trabajo manual mediante automatización.",
      ],
    },
    problem: {
      eyebrow: "Problema",
      title: "Muchas pequeñas empresas pierden consultas antes de que el cliente contacte.",
      text: "Un sitio web no es un folleto digital. Debe generar confianza, orientar y facilitar el siguiente paso.",
      cards: [
        {
          title: "Posicionamiento poco claro",
          text: "Los visitantes no entienden en segundos qué ofrece y por qué deberían contactarle.",
        },
        {
          title: "Canales de contacto débiles",
          text: "Formularios, teléfonos o reservas están ocultos, fallan o no están optimizados para móvil.",
        },
        {
          title: "Problemas técnicos",
          text: "Carga lenta, mala estructura y falta de bases SEO dificultan la visibilidad y la navegación.",
        },
      ],
    },
    services: {
      eyebrow: "Servicios",
      title: "Sitios web, relanzamientos y automatizaciones en un solo lugar.",
      text: "AJ-Tech combina desarrollo web con automatización práctica de procesos. El resultado no es solo una web bonita, sino una herramienta digital para mayor eficiencia.",
      cards: [
        {
          title: "Desarrollo web",
          text: "Sitios web empresariales modernos con estructura clara, diseño responsivo, carga rápida y HTML limpio.",
        },
        {
          title: "Relanzamiento web",
          text: "Mejora de sitios existentes con mejor guía de usuario, textos claros, nuevos contactos y base SEO técnica.",
        },
        {
          title: "SEO básico",
          text: "Metadatos, estructura de encabezados, enlaces internos, datos estructurados, palabras clave locales y contenido indexable.",
        },
        {
          title: "Automatización",
          text: "Formularios de contacto, notificaciones por email, conexión CRM, reservas y procesos recurrentes.",
        },
        {
          title: "Mantenimiento y seguridad",
          text: "Actualizaciones, copias de seguridad, revisión técnica, pequeños cambios y monitoreo de funciones importantes.",
        },
        {
          title: "Análisis web",
          text: "Revisión concreta de su web para detectar pérdidas de consultas, errores técnicos, bases SEO y mejoras rápidas.",
        },
      ],
    },
    process: {
      eyebrow: "Proceso",
      title: "Un proceso claro sin complejidad innecesaria.",
      text: "Cada proyecto empieza con el objetivo comercial. Después vienen diseño, tecnología y automatización.",
      steps: [
        {
          title: "Análisis",
          text: "Revisamos su web actual, público objetivo, canales de contacto, palabras clave y objetivos comerciales.",
        },
        {
          title: "Estructura y oferta",
          text: "Definimos estructura, contenidos, llamadas a la acción y un paquete realista.",
        },
        {
          title: "Desarrollo",
          text: "La web se implementa de forma limpia, rápida, optimizada para móvil y compatible con buscadores.",
        },
        {
          title: "Automatización",
          text: "Se configuran formularios, reservas, emails o CRM cuando tienen sentido comercial.",
        },
        {
          title: "Lanzamiento y optimización",
          text: "Tras la publicación se revisan función, diseño, velocidad e indexación.",
        },
      ],
    },
    
    industries: {
      eyebrow: "Sectores",
      title: "Especialmente adecuado para pequeñas empresas con servicios que requieren explicación.",
      text: "AJ-Tech trabaja mejor donde la tecnología, la confianza y procesos claros de consulta son importantes.",
      cards: [
        {
          title: "Oficios",
          text: "Más consultas regionales, mejores páginas de servicios y solicitudes de presupuesto simples.",
        },
        {
          title: "Servicios B2B",
          text: "Posicionamiento claro, presentación profesional y formularios cualificados.",
        },
        {
          title: "Empresas técnicas",
          text: "Explicación estructurada de servicios complejos, referencias y automatizaciones.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO",
      title: "El SEO empieza con claridad, estructura y limpieza técnica.",
      text: "Una web solo puede ser visible en Google si el contenido es comprensible, relevante, indexable y técnicamente accesible. AJ-Tech crea esa base.",
      boxTitle: "SEO básico incluido",
      features: [
        "Estructura orientada a palabras clave",
        "Title tags y meta descriptions claros",
        "Estructura limpia H1-H3",
        "Enlaces internos y navegación clara",
        "Datos estructurados JSON-LD",
        "Optimización móvil y carga rápida",
        "Preparación para Google Search Console",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes sobre desarrollo web y automatización.",
      items: [
        {
          question: "¿Puede AJ-Tech mejorar mi sitio web actual?",
          answer: "Sí. Los sitios existentes pueden optimizarse técnica, estructuralmente y en contenido.",
        },
        {
          question: "¿Es posible garantizar el primer puesto en Google?",
          answer: "No. Un SEO serio no puede garantizar el primer puesto.",
        },
        {
          question: "¿Qué automatizaciones son útiles?",
          answer: "Las automatizaciones útiles reducen trabajo manual: formulario a email o CRM, confirmaciones automáticas y consultas estructuradas.",
        },
        {
          question: "¿Cuánto tarda un sitio web nuevo?",
          answer: "Un pequeño fix suele tardar pocos días. Un relaunch completo suele tardar varias semanas.",
        },
      ],
    },
    contact: {
      title: "Análisis inicial gratuito para su empresa",
      text: "AJ-Tech revisa su sitio para detectar pérdidas de consultas, debilidades técnicas y mejoras rápidas.",
      name: "Nombre",
      email: "Email",
      website: "Su sitio web",
      message: "¿De qué se trata?",
      placeholder: "Relaunch, optimización, automatización o mantenimiento",
      button: "Solicitar análisis",
    },
    footer: {
      description: "Desarrollo web, SEO básico y automatización para pequeñas empresas.",
      servicesTitle: "Servicios",
      legalTitle: "Legal",
      contactTitle: "Contacto",
      rights: "Todos los derechos reservados.",
      services: ["Desarrollo web", "Relaunch web", "Automatización", "Mantenimiento web"],
      privacy: "Privacidad",
      imprint: "Aviso legal",
      analysis: "Solicitar análisis web",
    },
  },

  tr: {
    nav: {
      services: "Hizmetler",
      process: "Süreç",
      faq: "SSS",
      contact: "İletişim",
      analysis: "Ücretsiz Web Analizi",
    },
    hero: {
      badge: "Ölçülebilir talepler için teknik olarak temiz web siteleri",
      title: "Küçük işletmeler için web geliştirme ve otomasyon",
      text: "AJ-Tech hızlı, yapılandırılmış ve SEO uyumlu web siteleri geliştirir. Ziyaretçileri taleplere dönüştürür. Ayrıca iletişim formlarını, randevuları ve iç süreçleri otomatikleştiririz.",
      primary: "Web sitemi analiz et",
      secondary: "Hizmetleri gör",
      cardTitle: "Web siteniz ne yapmalı",
      points: [
        "Ne sunduğunuzu hemen göstermeli.",
        "Mobilde ve masaüstünde hızlı yüklenmeli.",
        "Ziyaretçileri talep, arama veya randevuya yönlendirmeli.",
        "Google için taranabilir ve anlaşılır olmalı.",
        "Otomasyonla manuel işi azaltmalı.",
      ],
    },
    problem: {
      eyebrow: "Problem",
      title: "Birçok küçük işletme, müşteri iletişime geçmeden talepleri kaybeder.",
      text: "Web sitesi dijital broşür değildir. Güven oluşturmalı, yönlendirmeli ve sonraki adımı kolaylaştırmalıdır.",
      cards: [
        {
          title: "Belirsiz konumlandırma",
          text: "Ziyaretçiler birkaç saniye içinde ne sunduğunuzu ve neden sizinle iletişime geçmeleri gerektiğini anlamaz.",
        },
        {
          title: "Zayıf iletişim yolları",
          text: "Formlar, telefon numaraları veya randevu seçenekleri gizlidir, hatalıdır veya mobil uyumlu değildir.",
        },
        {
          title: "Teknik eksikler",
          text: "Yavaş yükleme, kötü yapı ve eksik SEO temelleri görünürlüğü ve kullanıcı yönlendirmesini zorlaştırır.",
        },
      ],
    },
    services: {
      eyebrow: "Hizmetler",
      title: "Web siteleri, yenilemeler ve otomasyonlar tek elden.",
      text: "AJ-Tech web geliştirmeyi pratik süreç otomasyonuyla birleştirir. Sonuç sadece güzel bir web sitesi değil, daha fazla verimlilik sağlayan dijital bir araçtır.",
      cards: [
        {
          title: "Web geliştirme",
          text: "Net yapılı, responsive tasarımlı, hızlı yüklenen ve temiz HTML ile hazırlanmış modern işletme web siteleri.",
        },
        {
          title: "Web sitesi yenileme",
          text: "Mevcut sitelerin daha iyi kullanıcı yönlendirmesi, daha net metinler, yeni iletişim yolları ve teknik SEO temeliyle iyileştirilmesi.",
        },
        {
          title: "SEO temel optimizasyonu",
          text: "Meta veriler, başlık yapısı, iç bağlantılar, yapılandırılmış veriler, yerel anahtar kelimeler ve indekslenebilir içerik.",
        },
        {
          title: "Otomasyon",
          text: "İletişim formları, e-posta bildirimleri, CRM bağlantısı, randevu ve tekrarlayan süreçler.",
        },
        {
          title: "Bakım & güvenlik",
          text: "Düzenli güncellemeler, yedeklemeler, teknik kontrol, küçük değişiklikler ve önemli fonksiyonların izlenmesi.",
        },
        {
          title: "Web sitesi analizi",
          text: "Mevcut sitenizin talep kaybı, teknik hatalar, SEO temelleri ve hızlı iyileştirmeler açısından kontrolü.",
        },
      ],
    },
    process: {
      eyebrow: "Süreç",
      title: "Gereksiz karmaşıklık olmadan net bir süreç.",
      text: "Her proje iş hedefiyle başlar. Tasarım, teknoloji ve otomasyon daha sonra gelir.",
      steps: [
        {
          title: "Analiz",
          text: "Mevcut web sitenizi, hedef kitlenizi, iletişim yollarını, anahtar kelimeleri ve ana iş hedeflerini inceleriz.",
        },
        {
          title: "Yapı & teklif",
          text: "Sayfa yapısını, içerikleri, net aksiyon çağrılarını ve gerçekçi uygulama paketini belirleriz.",
        },
        {
          title: "Geliştirme",
          text: "Web sitesi temiz, hızlı, mobil uyumlu ve arama motoru dostu şekilde uygulanır.",
        },
        {
          title: "Otomasyon",
          text: "Formlar, randevular, e-posta süreçleri veya CRM entegrasyonları ticari açıdan anlamlıysa kurulur.",
        },
        {
          title: "Yayın & optimizasyon",
          text: "Yayın sonrası işlev, görünüm, hız ve indekslenebilirlik kontrol edilir.",
        },
      ],
    },
    
    industries: {
      eyebrow: "Hedef gruplar",
      title: "Açıklama gerektiren hizmetlere sahip küçük işletmeler için özellikle uygundur.",
      text: "AJ-Tech, teknoloji, güven ve net talep süreçlerinin önemli olduğu yerlerde güçlüdür.",
      cards: [
        {
          title: "Zanaat işletmeleri",
          text: "Daha fazla bölgesel talep, daha iyi hizmet sayfaları ve kolay teklif talepleri.",
        },
        {
          title: "B2B hizmet sağlayıcıları",
          text: "Net konumlandırma, profesyonel sunum ve nitelikli iletişim formları.",
        },
        {
          title: "Teknik şirketler",
          text: "Karmaşık hizmetlerin yapılandırılmış açıklaması, referanslar ve otomasyonlar.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO",
      title: "SEO; netlik, yapı ve teknik temizlikle başlar.",
      text: "Bir web sitesi Google’da ancak içerik anlaşılır, ilgili, indekslenebilir ve teknik olarak erişilebilir olduğunda görünür olabilir. AJ-Tech bu temeli kurar.",
      boxTitle: "Dahil olan SEO temelleri",
      features: [
        "Anahtar kelime odaklı sayfa yapısı",
        "Net title tag ve meta description",
        "Temiz H1-H3 başlık yapısı",
        "İç bağlantılar ve açık navigasyon",
        "JSON-LD ile yapılandırılmış veri",
        "Mobil optimizasyon ve hızlı yükleme",
        "Google Search Console hazırlığı",
      ],
    },
    faq: {
      eyebrow: "SSS",
      title: "Web geliştirme ve otomasyon hakkında sık sorulan sorular.",
      items: [
        {
          question: "AJ-Tech mevcut web sitemi iyileştirebilir mi?",
          answer: "Evet. Mevcut web siteleri teknik, içerik ve yapı açısından optimize edilebilir.",
        },
        {
          question: "Google’da birinci sıra garantisi mümkün mü?",
          answer: "Hayır. Ciddi SEO birinci sıra garantisi veremez.",
        },
        {
          question: "Hangi otomasyonlar mantıklıdır?",
          answer: "Mantıklı otomasyonlar manuel işi azaltır: formdan e-postaya veya CRM’e aktarım, otomatik onaylar ve yapılandırılmış talepler.",
        },
        {
          question: "Yeni bir web sitesi ne kadar sürer?",
          answer: "Küçük bir fix genellikle birkaç gün sürer. Tam bir relaunch kapsamına göre birkaç hafta sürebilir.",
        },
      ],
    },
    contact: {
      title: "İşletmeniz için ücretsiz ilk web sitesi analizi",
      text: "AJ-Tech web sitenizi görünür talep kayıpları, teknik zayıflıklar ve hızlı iyileştirme fırsatları açısından inceler.",
      name: "İsim",
      email: "E-posta",
      website: "Web siteniz",
      message: "Konu nedir?",
      placeholder: "Relaunch, optimizasyon, otomasyon veya bakım",
      button: "Analiz talep et",
    },
    footer: {
      description: "Küçük işletmeler için web geliştirme, SEO temeli ve otomasyon.",
      servicesTitle: "Hizmetler",
      legalTitle: "Yasal",
      contactTitle: "İletişim",
      rights: "Tüm hakları saklıdır.",
      services: ["Web geliştirme", "Web sitesi relaunch", "Otomasyon", "Web sitesi bakımı"],
      privacy: "Gizlilik",
      imprint: "Yasal bildirim",
      analysis: "Web analizi talep et",
    },
  },

  el: {
    nav: {
      services: "Υπηρεσίες",
      process: "Διαδικασία",
      faq: "FAQ",
      contact: "Επικοινωνία",
      analysis: "Δωρεάν ανάλυση ιστοσελίδας",
    },
    hero: {
      badge: "Τεχνικά καθαρές ιστοσελίδες για μετρήσιμα αιτήματα",
      title: "Ανάπτυξη ιστοσελίδων και αυτοματοποίηση για μικρές επιχειρήσεις",
      text: "Η AJ-Tech δημιουργεί γρήγορες, δομημένες και SEO-βελτιστοποιημένες ιστοσελίδες που μετατρέπουν επισκέπτες σε αιτήματα. Αυτοματοποιούμε επίσης φόρμες επικοινωνίας, κρατήσεις και εσωτερικές διαδικασίες.",
      primary: "Έλεγχος ιστοσελίδας",
      secondary: "Δείτε υπηρεσίες",
      cardTitle: "Τι πρέπει να πετυχαίνει η ιστοσελίδα σας",
      points: [
        "Να δείχνει άμεσα τι προσφέρετε.",
        "Να φορτώνει γρήγορα σε κινητό και υπολογιστή.",
        "Να οδηγεί τον επισκέπτη σε αίτημα, κλήση ή κράτηση.",
        "Να είναι κατανοητή και ανιχνεύσιμη από την Google.",
        "Να μειώνει χειροκίνητη εργασία μέσω αυτοματοποίησης.",
      ],
    },
    problem: {
      eyebrow: "Πρόβλημα",
      title: "Πολλές μικρές επιχειρήσεις χάνουν αιτήματα πριν ο πελάτης επικοινωνήσει.",
      text: "Μια ιστοσελίδα δεν είναι ψηφιακό φυλλάδιο. Πρέπει να χτίζει εμπιστοσύνη, να καθοδηγεί και να κάνει το επόμενο βήμα εύκολο.",
      cards: [
        {
          title: "Ασαφής τοποθέτηση",
          text: "Οι επισκέπτες δεν καταλαβαίνουν μέσα σε λίγα δευτερόλεπτα τι προσφέρετε και γιατί να σας επιλέξουν.",
        },
        {
          title: "Αδύναμοι τρόποι επικοινωνίας",
          text: "Φόρμες, τηλέφωνα ή κρατήσεις είναι κρυμμένα, προβληματικά ή όχι φιλικά σε κινητά.",
        },
        {
          title: "Τεχνικά προβλήματα",
          text: "Αργή φόρτωση, κακή δομή και έλλειψη βασικού SEO δυσκολεύουν την ορατότητα.",
        },
      ],
    },
    services: {
      eyebrow: "Υπηρεσίες",
      title: "Ιστοσελίδες, relaunch και αυτοματισμοί από ένα σημείο.",
      text: "Η AJ-Tech συνδυάζει web development με πρακτική αυτοματοποίηση διαδικασιών. Το αποτέλεσμα δεν είναι μόνο όμορφη ιστοσελίδα, αλλά ψηφιακό εργαλείο αποδοτικότητας.",
      cards: [
        {
          title: "Ανάπτυξη ιστοσελίδων",
          text: "Σύγχρονες εταιρικές ιστοσελίδες με καθαρή δομή, responsive design, γρήγορη φόρτωση και καθαρό HTML.",
        },
        {
          title: "Website relaunch",
          text: "Βελτίωση υπάρχουσας ιστοσελίδας με καλύτερη πλοήγηση, καθαρότερα κείμενα, νέους τρόπους επικοινωνίας και τεχνικό SEO.",
        },
        {
          title: "Βασικό SEO",
          text: "Meta δεδομένα, δομή επικεφαλίδων, εσωτερικοί σύνδεσμοι, structured data, τοπικές λέξεις-κλειδιά και indexable περιεχόμενο.",
        },
        {
          title: "Αυτοματοποίηση",
          text: "Φόρμες επικοινωνίας, email ειδοποιήσεις, CRM σύνδεση, κρατήσεις και επαναλαμβανόμενες διαδικασίες.",
        },
        {
          title: "Συντήρηση & ασφάλεια",
          text: "Τακτικές ενημερώσεις, αντίγραφα ασφαλείας, τεχνικός έλεγχος, μικρές αλλαγές και monitoring.",
        },
        {
          title: "Ανάλυση ιστοσελίδας",
          text: "Συγκεκριμένος έλεγχος για απώλειες αιτημάτων, τεχνικά λάθη, SEO βάσεις και γρήγορες βελτιώσεις.",
        },
      ],
    },
    process: {
      eyebrow: "Διαδικασία",
      title: "Καθαρή διαδικασία χωρίς περιττή πολυπλοκότητα.",
      text: "Κάθε έργο ξεκινά από τον επιχειρηματικό στόχο. Μετά ακολουθούν design, τεχνολογία και αυτοματοποίηση.",
      steps: [
        {
          title: "Ανάλυση",
          text: "Ελέγχουμε την τρέχουσα ιστοσελίδα, το κοινό, τους τρόπους επικοινωνίας, τις λέξεις-κλειδιά και τους στόχους.",
        },
        {
          title: "Δομή & προσφορά",
          text: "Ορίζουμε δομή σελίδων, περιεχόμενο, σαφείς παροτρύνσεις και ρεαλιστικό πακέτο υλοποίησης.",
        },
        {
          title: "Ανάπτυξη",
          text: "Η ιστοσελίδα υλοποιείται τεχνικά καθαρά, γρήγορα, mobile optimized και φιλικά για μηχανές αναζήτησης.",
        },
        {
          title: "Αυτοματοποίηση",
          text: "Φόρμες, κρατήσεις, email ή CRM ενσωματώνονται όταν έχουν επιχειρηματικό νόημα.",
        },
        {
          title: "Launch & βελτιστοποίηση",
          text: "Μετά τη δημοσίευση ελέγχονται λειτουργία, εμφάνιση, ταχύτητα και indexability.",
        },
      ],
    },
    
    industries: {
      eyebrow: "Κοινό",
      title: "Ιδανικό για μικρές επιχειρήσεις με υπηρεσίες που χρειάζονται εξήγηση.",
      text: "Η AJ-Tech είναι ιδιαίτερα χρήσιμη όπου τεχνολογία, εμπιστοσύνη και σαφείς διαδικασίες αιτημάτων είναι κρίσιμες.",
      cards: [
        {
          title: "Τεχνίτες",
          text: "Περισσότερα τοπικά αιτήματα, καλύτερες σελίδες υπηρεσιών και απλές αιτήσεις προσφοράς.",
        },
        {
          title: "B2B υπηρεσίες",
          text: "Σαφής τοποθέτηση, σοβαρή παρουσίαση και ποιοτικές φόρμες επικοινωνίας.",
        },
        {
          title: "Τεχνικές εταιρείες",
          text: "Δομημένη εξήγηση σύνθετων υπηρεσιών, references και αυτοματισμοί.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO",
      title: "Το SEO ξεκινά με καθαρότητα, δομή και τεχνική ποιότητα.",
      text: "Μια ιστοσελίδα γίνεται ορατή στην Google μόνο όταν το περιεχόμενο είναι κατανοητό, σχετικό, indexable και τεχνικά προσβάσιμο. Η AJ-Tech χτίζει αυτή τη βάση.",
      boxTitle: "Περιλαμβανόμενα SEO basics",
      features: [
        "Δομή σελίδων βάσει λέξεων-κλειδιών",
        "Καθαρά title tags και meta descriptions",
        "Καθαρή δομή H1-H3",
        "Εσωτερικοί σύνδεσμοι και καθαρή πλοήγηση",
        "Structured data μέσω JSON-LD",
        "Mobile optimization και γρήγορη φόρτωση",
        "Προετοιμασία για Google Search Console",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Συχνές ερωτήσεις για web development και αυτοματοποίηση.",
      items: [
        {
          question: "Μπορεί η AJ-Tech να βελτιώσει την υπάρχουσα ιστοσελίδα μου;",
          answer: "Ναι. Υπάρχουσες ιστοσελίδες μπορούν να βελτιωθούν τεχνικά, δομικά και σε περιεχόμενο.",
        },
        {
          question: "Υπάρχει εγγύηση για την πρώτη θέση στην Google;",
          answer: "Όχι. Σοβαρό SEO δεν μπορεί να εγγυηθεί πρώτη θέση.",
        },
        {
          question: "Ποιοι αυτοματισμοί είναι χρήσιμοι;",
          answer: "Χρήσιμοι είναι όσοι μειώνουν χειροκίνητη εργασία: φόρμα σε email ή CRM, αυτόματες επιβεβαιώσεις και δομημένα αιτήματα.",
        },
        {
          question: "Πόσο διαρκεί μια νέα ιστοσελίδα;",
          answer: "Ένα μικρό fix συνήθως λίγες ημέρες. Ένα πλήρες relaunch αρκετές εβδομάδες ανάλογα με το εύρος.",
        },
      ],
    },
    contact: {
      title: "Δωρεάν αρχική ανάλυση ιστοσελίδας για την επιχείρησή σας",
      text: "Η AJ-Tech ελέγχει την ιστοσελίδα σας για απώλειες αιτημάτων, τεχνικές αδυναμίες και γρήγορες δυνατότητες βελτίωσης.",
      name: "Όνομα",
      email: "Email",
      website: "Η ιστοσελίδα σας",
      message: "Τι αφορά;",
      placeholder: "Relaunch, βελτιστοποίηση, αυτοματοποίηση ή συντήρηση",
      button: "Ζητήστε ανάλυση",
    },
    footer: {
      description: "Ανάπτυξη ιστοσελίδων, SEO βάση και αυτοματοποίηση για μικρές επιχειρήσεις.",
      servicesTitle: "Υπηρεσίες",
      legalTitle: "Νομικά",
      contactTitle: "Επικοινωνία",
      rights: "Με επιφύλαξη παντός δικαιώματος.",
      services: ["Ανάπτυξη ιστοσελίδων", "Website relaunch", "Αυτοματοποίηση", "Συντήρηση ιστοσελίδας"],
      privacy: "Πολιτική απορρήτου",
      imprint: "Νομική σημείωση",
      analysis: "Ζητήστε ανάλυση ιστοσελίδας",
    },
  },

  fr: {
    nav: {
      services: "Services",
      process: "Processus",
      faq: "FAQ",
      contact: "Contact",
      analysis: "Analyse gratuite du site",
    },
    hero: {
      badge: "Sites techniquement propres pour des demandes mesurables",
      title: "Développement web et automatisation pour petites entreprises",
      text: "AJ-Tech crée des sites rapides, structurés et optimisés SEO qui transforment les visiteurs en demandes. Nous automatisons aussi les formulaires, réservations et processus internes.",
      primary: "Faire analyser mon site",
      secondary: "Voir les services",
      cardTitle: "Ce que votre site doit faire",
      points: [
        "Montrer immédiatement ce que vous proposez.",
        "Charger vite sur mobile et ordinateur.",
        "Guider vers demande, appel ou rendez-vous.",
        "Être compréhensible et crawlable par Google.",
        "Réduire le travail manuel par l’automatisation.",
      ],
    },
    problem: {
      eyebrow: "Problème",
      title: "Beaucoup de petites entreprises perdent des demandes avant même le premier contact.",
      text: "Un site web n’est pas une brochure numérique. Il doit inspirer confiance, orienter et rendre l’étape suivante simple.",
      cards: [
        {
          title: "Positionnement flou",
          text: "Les visiteurs ne comprennent pas rapidement ce que vous proposez et pourquoi vous contacter.",
        },
        {
          title: "Contacts faibles",
          text: "Formulaires, numéros ou réservations sont cachés, défectueux ou non optimisés mobile.",
        },
        {
          title: "Problèmes techniques",
          text: "Temps de chargement lents, mauvaise structure et bases SEO absentes réduisent la visibilité.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "Sites web, refontes et automatisations en un seul endroit.",
      text: "AJ-Tech combine développement web et automatisation pratique. Le résultat est un outil numérique efficace, pas seulement un joli site.",
      cards: [
        {
          title: "Développement web",
          text: "Sites modernes avec structure claire, design responsive, chargement rapide et HTML propre.",
        },
        {
          title: "Refonte de site",
          text: "Amélioration de sites existants avec meilleure navigation, textes plus clairs, nouveaux contacts et base SEO technique.",
        },
        {
          title: "SEO de base",
          text: "Métadonnées, structure de titres, liens internes, données structurées, mots-clés locaux et contenu indexable.",
        },
        {
          title: "Automatisation",
          text: "Formulaires, notifications email, CRM, réservations et processus récurrents.",
        },
        {
          title: "Maintenance & sécurité",
          text: "Mises à jour, sauvegardes, contrôles techniques, petits changements et monitoring.",
        },
        {
          title: "Analyse de site",
          text: "Audit concret de votre site pour pertes de demandes, erreurs techniques, bases SEO et améliorations rapides.",
        },
      ],
    },
    process: {
      eyebrow: "Processus",
      title: "Un processus clair sans complexité inutile.",
      text: "Chaque projet commence par l’objectif commercial. Design, technique et automatisation suivent ensuite.",
      steps: [
        {
          title: "Analyse",
          text: "Nous analysons votre site actuel, cible, contacts, mots-clés et objectifs commerciaux.",
        },
        {
          title: "Structure & offre",
          text: "Nous définissons la structure, les contenus, les appels à l’action et un package réaliste.",
        },
        {
          title: "Développement",
          text: "Le site est développé proprement, rapidement, mobile-first et compatible SEO.",
        },
        {
          title: "Automatisation",
          text: "Formulaires, rendez-vous, emails ou CRM sont intégrés si cela sert l’activité.",
        },
        {
          title: "Lancement & optimisation",
          text: "Après lancement, fonction, affichage, vitesse et indexabilité sont vérifiés.",
        },
      ],
    },
    industries: {
      eyebrow: "Cibles",
      title: "Idéal pour petites entreprises avec services nécessitant explication.",
      text: "AJ-Tech est particulièrement utile là où technologie, confiance et processus clairs comptent.",
      cards: [
        {
          title: "Artisans",
          text: "Plus de demandes locales, meilleures pages de services et demandes de devis simples.",
        },
        {
          title: "Services B2B",
          text: "Positionnement clair, présentation sérieuse et formulaires qualifiés.",
        },
        {
          title: "Entreprises techniques",
          text: "Explication structurée de services complexes, références et automatisations.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO",
      title: "Le SEO commence par clarté, structure et qualité technique.",
      text: "Un site devient visible sur Google seulement si le contenu est compréhensible, pertinent, indexable et techniquement accessible. AJ-Tech construit cette base.",
      boxTitle: "Bases SEO incluses",
      features: [
        "Structure orientée mots-clés",
        "Title tags et meta descriptions clairs",
        "Structure H1-H3 propre",
        "Liens internes et navigation claire",
        "Données structurées JSON-LD",
        "Optimisation mobile et chargement rapide",
        "Préparation Google Search Console",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions fréquentes sur développement web et automatisation.",
      items: [
        {
          question: "AJ-Tech peut-il améliorer mon site existant ?",
          answer: "Oui. Les sites existants peuvent être optimisés techniquement, structurellement et au niveau du contenu.",
        },
        {
          question: "Une garantie de première place Google est-elle possible ?",
          answer: "Non. Un SEO sérieux ne garantit pas la première place.",
        },
        {
          question: "Quelles automatisations sont utiles ?",
          answer: "Celles qui réduisent le travail manuel : formulaire vers email ou CRM, confirmations automatiques et demandes structurées.",
        },
        {
          question: "Combien de temps prend un nouveau site ?",
          answer: "Un petit fix prend souvent quelques jours. Une refonte complète prend généralement plusieurs semaines.",
        },
      ],
    },
    contact: {
      title: "Analyse initiale gratuite pour votre entreprise",
      text: "AJ-Tech vérifie votre site pour pertes de demandes, faiblesses techniques et améliorations rapides.",
      name: "Nom",
      email: "Email",
      website: "Votre site",
      message: "De quoi s’agit-il ?",
      placeholder: "Refonte, optimisation, automatisation ou maintenance",
      button: "Demander l’analyse",
    },
    footer: {
      description: "Développement web, base SEO et automatisation pour petites entreprises.",
      servicesTitle: "Services",
      legalTitle: "Légal",
      contactTitle: "Contact",
      rights: "Tous droits réservés.",
      services: ["Développement web", "Refonte de site", "Automatisation", "Maintenance web"],
      privacy: "Confidentialité",
      imprint: "Mentions légales",
      analysis: "Demander une analyse",
    },
  },

  it: {
    nav: {
      services: "Servizi",
      process: "Processo",
      faq: "FAQ",
      contact: "Contatto",
      analysis: "Analisi gratuita del sito",
    },
    hero: {
      badge: "Siti tecnicamente puliti per richieste misurabili",
      title: "Sviluppo web e automazione per piccole imprese",
      text: "AJ-Tech crea siti veloci, strutturati e ottimizzati SEO che trasformano i visitatori in richieste. Automatizziamo anche moduli di contatto, prenotazioni e processi interni.",
      primary: "Analizza il sito",
      secondary: "Vedi servizi",
      cardTitle: "Cosa deve fare il tuo sito",
      points: [
        "Mostrare subito cosa offri.",
        "Caricare velocemente su mobile e desktop.",
        "Guidare verso richiesta, chiamata o prenotazione.",
        "Essere leggibile e indicizzabile da Google.",
        "Ridurre il lavoro manuale con automazioni.",
      ],
    },
    problem: {
      eyebrow: "Problema",
      title: "Molte piccole imprese perdono richieste prima che il cliente contatti.",
      text: "Un sito non è una brochure digitale. Deve creare fiducia, orientare e rendere facile il passo successivo.",
      cards: [
        {
          title: "Posizionamento poco chiaro",
          text: "I visitatori non capiscono in pochi secondi cosa offri e perché dovrebbero contattarti.",
        },
        {
          title: "Contatti deboli",
          text: "Moduli, telefoni o prenotazioni sono nascosti, difettosi o non ottimizzati per mobile.",
        },
        {
          title: "Problemi tecnici",
          text: "Caricamenti lenti, struttura debole e basi SEO mancanti riducono visibilità e guida utente.",
        },
      ],
    },
    services: {
      eyebrow: "Servizi",
      title: "Siti web, relaunch e automazioni da un unico fornitore.",
      text: "AJ-Tech combina sviluppo web e automazione pratica dei processi. Il risultato è uno strumento digitale efficiente, non solo un bel sito.",
      cards: [
        {
          title: "Sviluppo web",
          text: "Siti aziendali moderni con struttura chiara, design responsive, caricamento veloce e HTML pulito.",
        },
        {
          title: "Relaunch sito",
          text: "Miglioramento di siti esistenti con migliore guida utente, testi più chiari, nuovi contatti e base SEO tecnica.",
        },
        {
          title: "SEO di base",
          text: "Metadati, struttura titoli, link interni, dati strutturati, keyword locali e contenuti indicizzabili.",
        },
        {
          title: "Automazione",
          text: "Moduli di contatto, notifiche email, CRM, prenotazioni e processi ricorrenti.",
        },
        {
          title: "Manutenzione & sicurezza",
          text: "Aggiornamenti, backup, controlli tecnici, piccole modifiche e monitoraggio.",
        },
        {
          title: "Analisi sito",
          text: "Controllo concreto per perdite di richieste, errori tecnici, basi SEO e miglioramenti rapidi.",
        },
      ],
    },
    process: {
      eyebrow: "Processo",
      title: "Un processo chiaro senza complessità inutile.",
      text: "Ogni progetto parte dall’obiettivo commerciale. Poi arrivano design, tecnologia e automazione.",
      steps: [
        {
          title: "Analisi",
          text: "Analizziamo sito attuale, target, contatti, keyword e obiettivi principali.",
        },
        {
          title: "Struttura & offerta",
          text: "Definiamo struttura, contenuti, call to action e pacchetto realistico.",
        },
        {
          title: "Sviluppo",
          text: "Il sito viene realizzato in modo pulito, veloce, mobile-friendly e SEO-friendly.",
        },
        {
          title: "Automazione",
          text: "Form, prenotazioni, email o CRM vengono configurati se hanno senso per il business.",
        },
        {
          title: "Lancio & ottimizzazione",
          text: "Dopo la pubblicazione si controllano funzione, layout, velocità e indicizzabilità.",
        },
      ],
    },
    industries: {
      eyebrow: "Target",
      title: "Particolarmente adatto a piccole imprese con servizi da spiegare.",
      text: "AJ-Tech lavora meglio dove tecnologia, fiducia e processi chiari di richiesta sono importanti.",
      cards: [
        {
          title: "Artigiani",
          text: "Più richieste locali, migliori pagine servizi e richieste preventivo semplici.",
        },
        {
          title: "Servizi B2B",
          text: "Posizionamento chiaro, presentazione professionale e moduli qualificati.",
        },
        {
          title: "Aziende tecniche",
          text: "Spiegazione strutturata di servizi complessi, referenze e automazioni.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO",
      title: "La SEO inizia con chiarezza, struttura e qualità tecnica.",
      text: "Un sito può essere visibile su Google solo se i contenuti sono comprensibili, rilevanti, indicizzabili e tecnicamente accessibili. AJ-Tech costruisce questa base.",
      boxTitle: "SEO base inclusa",
      features: [
        "Struttura orientata alle keyword",
        "Title tag e meta description chiari",
        "Struttura H1-H3 pulita",
        "Link interni e navigazione chiara",
        "Dati strutturati JSON-LD",
        "Ottimizzazione mobile e caricamento veloce",
        "Preparazione Google Search Console",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Domande frequenti su sviluppo web e automazione.",
      items: [
        {
          question: "AJ-Tech può migliorare il mio sito esistente?",
          answer: "Sì. I siti esistenti possono essere ottimizzati tecnicamente, strutturalmente e nei contenuti.",
        },
        {
          question: "È possibile garantire il primo posto su Google?",
          answer: "No. Una SEO seria non può garantire il primo posto.",
        },
        {
          question: "Quali automazioni sono utili?",
          answer: "Quelle che riducono lavoro manuale: form verso email o CRM, conferme automatiche e richieste strutturate.",
        },
        {
          question: "Quanto dura un nuovo sito?",
          answer: "Un piccolo fix richiede spesso pochi giorni. Un relaunch completo richiede di solito diverse settimane.",
        },
      ],
    },
    contact: {
      title: "Analisi iniziale gratuita per la tua azienda",
      text: "AJ-Tech controlla il sito per perdite di richieste, debolezze tecniche e miglioramenti rapidi.",
      name: "Nome",
      email: "Email",
      website: "Il tuo sito",
      message: "Di cosa si tratta?",
      placeholder: "Relaunch, ottimizzazione, automazione o manutenzione",
      button: "Richiedi analisi",
    },
    footer: {
      description: "Sviluppo web, SEO base e automazione per piccole imprese.",
      servicesTitle: "Servizi",
      legalTitle: "Legale",
      contactTitle: "Contatto",
      rights: "Tutti i diritti riservati.",
      services: ["Sviluppo web", "Relaunch sito", "Automazione", "Manutenzione sito"],
      privacy: "Privacy",
      imprint: "Note legali",
      analysis: "Richiedi analisi sito",
    },
  },

  nl: {
    nav: {
      services: "Diensten",
      process: "Proces",
      faq: "FAQ",
      contact: "Contact",
      analysis: "Gratis websiteanalyse",
    },
    hero: {
      badge: "Technisch schone websites voor meetbare aanvragen",
      title: "Websiteontwikkeling en automatisering voor kleine bedrijven",
      text: "AJ-Tech maakt snelle, gestructureerde en SEO-geoptimaliseerde websites die bezoekers omzetten in aanvragen. We automatiseren ook contactformulieren, boekingen en interne processen.",
      primary: "Website laten analyseren",
      secondary: "Diensten bekijken",
      cardTitle: "Wat uw website moet doen",
      points: [
        "Direct duidelijk maken wat u aanbiedt.",
        "Snel laden op mobiel en desktop.",
        "Bezoekers leiden naar aanvraag, telefoontje of boeking.",
        "Goed crawlbaar en begrijpelijk zijn voor Google.",
        "Handmatig werk verminderen door automatisering.",
      ],
    },
    problem: {
      eyebrow: "Probleem",
      title: "Veel kleine bedrijven verliezen aanvragen voordat de klant contact opneemt.",
      text: "Een website is geen digitale brochure. Ze moet vertrouwen opbouwen, richting geven en de volgende stap makkelijk maken.",
      cards: [
        {
          title: "Onduidelijke positionering",
          text: "Bezoekers begrijpen niet binnen enkele seconden wat u aanbiedt en waarom ze contact moeten opnemen.",
        },
        {
          title: "Zwakke contactroutes",
          text: "Formulieren, telefoonnummers of boekingen zijn verborgen, defect of niet mobiel geoptimaliseerd.",
        },
        {
          title: "Technische gebreken",
          text: "Trage laadtijden, slechte structuur en ontbrekende SEO-basis maken zichtbaarheid moeilijker.",
        },
      ],
    },
    services: {
      eyebrow: "Diensten",
      title: "Websites, relaunches en automatiseringen uit één hand.",
      text: "AJ-Tech combineert webontwikkeling met praktische procesautomatisering. Zo ontstaat niet alleen een mooie website, maar een digitaal hulpmiddel voor meer efficiëntie.",
      cards: [
        {
          title: "Websiteontwikkeling",
          text: "Moderne bedrijfswebsites met duidelijke structuur, responsive design, snelle laadtijden en schone HTML.",
        },
        {
          title: "Website relaunch",
          text: "Verbetering van bestaande websites met betere gebruikerssturing, duidelijkere teksten, nieuwe contactroutes en technische SEO-basis.",
        },
        {
          title: "SEO-basisoptimalisatie",
          text: "Metadata, koppenstructuur, interne links, structured data, lokale zoekwoorden en indexeerbare content.",
        },
        {
          title: "Automatisering",
          text: "Contactformulieren, e-mailnotificaties, CRM-koppeling, boekingen en terugkerende processen.",
        },
        {
          title: "Onderhoud & veiligheid",
          text: "Updates, backups, technische controle, kleine wijzigingen en monitoring van belangrijke functies.",
        },
        {
          title: "Websiteanalyse",
          text: "Concrete controle van uw website op aanvraagverlies, technische fouten, SEO-basis en snelle verbeteringen.",
        },
      ],
    },
    process: {
      eyebrow: "Proces",
      title: "Een duidelijk proces zonder onnodige complexiteit.",
      text: "Elk project begint met het zakelijke doel. Daarna volgen design, techniek en automatisering.",
      steps: [
        {
          title: "Analyse",
          text: "We controleren uw huidige website, doelgroep, contactroutes, zoekwoorden en belangrijkste doelen.",
        },
        {
          title: "Structuur & aanbod",
          text: "We bepalen paginastructuur, inhoud, duidelijke call-to-actions en een realistisch pakket.",
        },
        {
          title: "Ontwikkeling",
          text: "De website wordt technisch schoon, snel, mobiel geoptimaliseerd en zoekmachinevriendelijk gebouwd.",
        },
        {
          title: "Automatisering",
          text: "Formulieren, boekingen, e-mailprocessen of CRM-koppelingen worden ingericht wanneer ze zakelijk nuttig zijn.",
        },
        {
          title: "Launch & optimalisatie",
          text: "Na publicatie worden functie, weergave, snelheid en indexeerbaarheid gecontroleerd.",
        },
      ],
    },
    industries: {
      eyebrow: "Doelgroepen",
      title: "Vooral geschikt voor kleine bedrijven met uitlegbare diensten.",
      text: "AJ-Tech werkt sterk waar techniek, vertrouwen en duidelijke aanvraagprocessen belangrijk zijn.",
      cards: [
        {
          title: "Ambachten",
          text: "Meer regionale aanvragen, betere dienstpagina’s en eenvoudige offerteaanvragen.",
        },
        {
          title: "B2B-dienstverleners",
          text: "Duidelijke positionering, professionele presentatie en gekwalificeerde formulieren.",
        },
        {
          title: "Technische bedrijven",
          text: "Gestructureerde uitleg van complexe diensten, referenties en automatiseringen.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO",
      title: "SEO begint met duidelijkheid, structuur en technische kwaliteit.",
      text: "Een website kan pas zichtbaar worden in Google als inhoud begrijpelijk, relevant, indexeerbaar en technisch toegankelijk is. AJ-Tech legt die basis.",
      boxTitle: "Inbegrepen SEO-basis",
      features: [
        "Keywordgerichte paginastructuur",
        "Duidelijke title tags en meta descriptions",
        "Schone H1-H3 structuur",
        "Interne links en duidelijke navigatie",
        "Structured data via JSON-LD",
        "Mobiele optimalisatie en snelle laadtijden",
        "Voorbereiding Google Search Console",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Veelgestelde vragen over websiteontwikkeling en automatisering.",
      items: [
        {
          question: "Kan AJ-Tech mijn bestaande website verbeteren?",
          answer: "Ja. Bestaande websites kunnen technisch, structureel en inhoudelijk worden geoptimaliseerd.",
        },
        {
          question: "Is een nummer-één-garantie in Google mogelijk?",
          answer: "Nee. Serieuze SEO kan geen eerste plaats garanderen.",
        },
        {
          question: "Welke automatiseringen zijn zinvol?",
          answer: "Automatiseringen die handmatig werk verminderen: formulier naar e-mail of CRM, automatische bevestigingen en gestructureerde aanvragen.",
        },
        {
          question: "Hoe lang duurt een nieuwe website?",
          answer: "Een kleine fix duurt vaak enkele dagen. Een volledige relaunch duurt meestal enkele weken.",
        },
      ],
    },
    contact: {
      title: "Gratis eerste websiteanalyse voor uw bedrijf",
      text: "AJ-Tech controleert uw website op zichtbaar aanvraagverlies, technische zwaktes en snelle verbeterkansen.",
      name: "Naam",
      email: "E-mail",
      website: "Uw website",
      message: "Waar gaat het om?",
      placeholder: "Relaunch, optimalisatie, automatisering of onderhoud",
      button: "Analyse aanvragen",
    },
    footer: {
      description: "Websiteontwikkeling, SEO-basis en automatisering voor kleine bedrijven.",
      servicesTitle: "Diensten",
      legalTitle: "Juridisch",
      contactTitle: "Contact",
      rights: "Alle rechten voorbehouden.",
      services: ["Websiteontwikkeling", "Website relaunch", "Automatisering", "Websiteonderhoud"],
      privacy: "Privacy",
      imprint: "Juridische kennisgeving",
      analysis: "Websiteanalyse aanvragen",
    },
  },

  pl: {
    nav: {
      services: "Usługi",
      process: "Proces",
      faq: "FAQ",
      contact: "Kontakt",
      analysis: "Darmowa analiza strony",
    },
    hero: {
      badge: "Technicznie czyste strony dla mierzalnych zapytań",
      title: "Tworzenie stron i automatyzacja dla małych firm",
      text: "AJ-Tech tworzy szybkie, uporządkowane i zoptymalizowane pod SEO strony, które zamieniają odwiedzających w zapytania. Automatyzujemy też formularze, rezerwacje i procesy wewnętrzne.",
      primary: "Sprawdź stronę",
      secondary: "Zobacz usługi",
      cardTitle: "Co musi robić Twoja strona",
      points: [
        "Od razu pokazywać, co oferujesz.",
        "Szybko ładować się na telefonie i komputerze.",
        "Prowadzić do zapytania, telefonu lub rezerwacji.",
        "Być czytelna i indeksowalna dla Google.",
        "Zmniejszać pracę ręczną dzięki automatyzacji.",
      ],
    },
    problem: {
      eyebrow: "Problem",
      title: "Wiele małych firm traci zapytania, zanim klient się skontaktuje.",
      text: "Strona internetowa nie jest cyfrową ulotką. Musi budować zaufanie, dawać orientację i ułatwiać kolejny krok.",
      cards: [
        {
          title: "Niejasne pozycjonowanie",
          text: "Odwiedzający nie rozumieją w kilka sekund, co oferujesz i dlaczego mają się skontaktować.",
        },
        {
          title: "Słabe ścieżki kontaktu",
          text: "Formularze, telefony lub rezerwacje są ukryte, wadliwe albo nieprzystosowane do mobile.",
        },
        {
          title: "Problemy techniczne",
          text: "Wolne ładowanie, zła struktura i brak podstaw SEO utrudniają widoczność.",
        },
      ],
    },
    services: {
      eyebrow: "Usługi",
      title: "Strony, relaunch i automatyzacje z jednego źródła.",
      text: "AJ-Tech łączy web development z praktyczną automatyzacją procesów. Powstaje nie tylko ładna strona, ale narzędzie cyfrowe zwiększające efektywność.",
      cards: [
        {
          title: "Tworzenie stron",
          text: "Nowoczesne strony firmowe z jasną strukturą, responsywnym designem, szybkim ładowaniem i czystym HTML.",
        },
        {
          title: "Relaunch strony",
          text: "Poprawa istniejących stron przez lepsze prowadzenie użytkownika, jaśniejsze teksty, nowe kontakty i techniczne SEO.",
        },
        {
          title: "Podstawowe SEO",
          text: "Metadane, struktura nagłówków, linkowanie wewnętrzne, dane strukturalne, lokalne słowa kluczowe i indeksowalna treść.",
        },
        {
          title: "Automatyzacja",
          text: "Formularze kontaktowe, powiadomienia email, CRM, rezerwacje i procesy powtarzalne.",
        },
        {
          title: "Utrzymanie i bezpieczeństwo",
          text: "Aktualizacje, backupy, kontrola techniczna, drobne zmiany i monitoring funkcji.",
        },
        {
          title: "Analiza strony",
          text: "Konkretny audyt pod kątem utraty zapytań, błędów technicznych, SEO i szybkich usprawnień.",
        },
      ],
    },
    process: {
      eyebrow: "Proces",
      title: "Jasny proces bez zbędnej złożoności.",
      text: "Każdy projekt zaczyna się od celu biznesowego. Dopiero potem są design, technologia i automatyzacja.",
      steps: [
        {
          title: "Analiza",
          text: "Sprawdzamy obecną stronę, grupę docelową, ścieżki kontaktu, słowa kluczowe i cele biznesowe.",
        },
        {
          title: "Struktura i oferta",
          text: "Definiujemy strukturę stron, treści, wezwania do działania i realny zakres wdrożenia.",
        },
        {
          title: "Rozwój",
          text: "Strona jest budowana czysto technicznie, szybko, mobilnie i przyjaźnie dla wyszukiwarek.",
        },
        {
          title: "Automatyzacja",
          text: "Formularze, rezerwacje, procesy email lub CRM wdrażamy, jeśli mają sens biznesowy.",
        },
        {
          title: "Launch i optymalizacja",
          text: "Po publikacji sprawdzamy funkcje, wygląd, szybkość i indeksowalność.",
        },
      ],
    },
    industries: {
      eyebrow: "Grupy docelowe",
      title: "Szczególnie dobre dla małych firm z usługami wymagającymi wyjaśnienia.",
      text: "AJ-Tech działa najlepiej tam, gdzie ważne są technologia, zaufanie i jasne procesy zapytań.",
      cards: [
        {
          title: "Rzemieślnicy",
          text: "Więcej lokalnych zapytań, lepsze strony usług i proste zapytania ofertowe.",
        },
        {
          title: "Usługi B2B",
          text: "Jasne pozycjonowanie, profesjonalna prezentacja i kwalifikowane formularze.",
        },
        {
          title: "Firmy techniczne",
          text: "Strukturalne wyjaśnienie złożonych usług, referencje i automatyzacje.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO",
      title: "SEO zaczyna się od jasności, struktury i jakości technicznej.",
      text: "Strona może być widoczna w Google tylko wtedy, gdy treść jest zrozumiała, istotna, indeksowalna i technicznie dostępna. AJ-Tech buduje tę podstawę.",
      boxTitle: "Wliczone podstawy SEO",
      features: [
        "Struktura oparta na słowach kluczowych",
        "Jasne title tags i meta descriptions",
        "Czysta struktura H1-H3",
        "Linkowanie wewnętrzne i jasna nawigacja",
        "Dane strukturalne JSON-LD",
        "Optymalizacja mobile i szybkie ładowanie",
        "Przygotowanie Google Search Console",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Najczęstsze pytania o tworzenie stron i automatyzację.",
      items: [
        {
          question: "Czy AJ-Tech może poprawić moją obecną stronę?",
          answer: "Tak. Istniejące strony można optymalizować technicznie, strukturalnie i treściowo.",
        },
        {
          question: "Czy możliwa jest gwarancja pierwszego miejsca w Google?",
          answer: "Nie. Poważne SEO nie gwarantuje pierwszego miejsca.",
        },
        {
          question: "Jakie automatyzacje są sensowne?",
          answer: "Te, które zmniejszają pracę ręczną: formularz do emaila lub CRM, automatyczne potwierdzenia i uporządkowane zapytania.",
        },
        {
          question: "Ile trwa nowa strona?",
          answer: "Mały fix często trwa kilka dni. Pełny relaunch zwykle kilka tygodni.",
        },
      ],
    },
    contact: {
      title: "Darmowa analiza wstępna strony dla Twojej firmy",
      text: "AJ-Tech sprawdza stronę pod kątem utraty zapytań, słabości technicznych i szybkich usprawnień.",
      name: "Imię",
      email: "Email",
      website: "Twoja strona",
      message: "Czego dotyczy temat?",
      placeholder: "Relaunch, optymalizacja, automatyzacja lub utrzymanie",
      button: "Poproś o analizę",
    },
    footer: {
      description: "Tworzenie stron, SEO podstawowe i automatyzacja dla małych firm.",
      servicesTitle: "Usługi",
      legalTitle: "Prawne",
      contactTitle: "Kontakt",
      rights: "Wszelkie prawa zastrzeżone.",
      services: ["Tworzenie stron", "Relaunch strony", "Automatyzacja", "Utrzymanie strony"],
      privacy: "Prywatność",
      imprint: "Nota prawna",
      analysis: "Poproś o analizę strony",
    },
  },

  pt: {
    nav: {
      services: "Serviços",
      process: "Processo",
      faq: "FAQ",
      contact: "Contato",
      analysis: "Análise gratuita do site",
    },
    hero: {
      badge: "Sites tecnicamente limpos para pedidos mensuráveis",
      title: "Desenvolvimento web e automação para pequenas empresas",
      text: "A AJ-Tech cria sites rápidos, estruturados e otimizados para SEO que transformam visitantes em pedidos. Também automatizamos formulários, reservas e processos internos.",
      primary: "Analisar meu site",
      secondary: "Ver serviços",
      cardTitle: "O que seu site deve fazer",
      points: [
        "Mostrar imediatamente o que você oferece.",
        "Carregar rápido no celular e desktop.",
        "Guiar visitantes para pedido, ligação ou reserva.",
        "Ser rastreável e compreensível para o Google.",
        "Reduzir trabalho manual com automação.",
      ],
    },
    problem: {
      eyebrow: "Problema",
      title: "Muitas pequenas empresas perdem pedidos antes do cliente entrar em contato.",
      text: "Um site não é um panfleto digital. Ele deve gerar confiança, orientar e facilitar o próximo passo.",
      cards: [
        {
          title: "Posicionamento pouco claro",
          text: "Visitantes não entendem em segundos o que você oferece e por que devem entrar em contato.",
        },
        {
          title: "Caminhos de contato fracos",
          text: "Formulários, telefones ou reservas estão escondidos, com erro ou não otimizados para mobile.",
        },
        {
          title: "Falhas técnicas",
          text: "Carregamento lento, estrutura ruim e falta de SEO básico dificultam a visibilidade.",
        },
      ],
    },
    services: {
      eyebrow: "Serviços",
      title: "Sites, relançamentos e automações em um só lugar.",
      text: "A AJ-Tech combina desenvolvimento web com automação prática de processos. O resultado é uma ferramenta digital eficiente, não apenas um site bonito.",
      cards: [
        {
          title: "Desenvolvimento web",
          text: "Sites empresariais modernos com estrutura clara, design responsivo, carregamento rápido e HTML limpo.",
        },
        {
          title: "Relançamento de site",
          text: "Melhoria de sites existentes com melhor orientação, textos claros, novos contatos e base técnica de SEO.",
        },
        {
          title: "SEO básico",
          text: "Metadados, estrutura de títulos, links internos, dados estruturados, palavras-chave locais e conteúdo indexável.",
        },
        {
          title: "Automação",
          text: "Formulários de contato, notificações por email, CRM, reservas e processos recorrentes.",
        },
        {
          title: "Manutenção & segurança",
          text: "Atualizações, backups, verificação técnica, pequenas alterações e monitoramento.",
        },
        {
          title: "Análise de site",
          text: "Verificação concreta do site para perda de pedidos, erros técnicos, SEO básico e melhorias rápidas.",
        },
      ],
    },
    process: {
      eyebrow: "Processo",
      title: "Um processo claro sem complexidade desnecessária.",
      text: "Cada projeto começa com o objetivo comercial. Depois vêm design, tecnologia e automação.",
      steps: [
        {
          title: "Análise",
          text: "Analisamos seu site atual, público, contatos, palavras-chave e objetivos principais.",
        },
        {
          title: "Estrutura & oferta",
          text: "Definimos estrutura, conteúdo, chamadas para ação e um pacote realista.",
        },
        {
          title: "Desenvolvimento",
          text: "O site é desenvolvido de forma limpa, rápida, mobile-friendly e amigável para buscadores.",
        },
        {
          title: "Automação",
          text: "Formulários, reservas, emails ou CRM são configurados quando fazem sentido para o negócio.",
        },
        {
          title: "Lançamento & otimização",
          text: "Após a publicação, função, aparência, velocidade e indexação são verificadas.",
        },
      ],
    },
    industries: {
      eyebrow: "Públicos-alvo",
      title: "Especialmente adequado para pequenas empresas com serviços que exigem explicação.",
      text: "A AJ-Tech é mais forte onde tecnologia, confiança e processos claros de pedido são importantes.",
      cards: [
        {
          title: "Artesãos",
          text: "Mais pedidos regionais, melhores páginas de serviço e pedidos de orçamento simples.",
        },
        {
          title: "Prestadores B2B",
          text: "Posicionamento claro, apresentação profissional e formulários qualificados.",
        },
        {
          title: "Empresas técnicas",
          text: "Explicação estruturada de serviços complexos, referências e automações.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO",
      title: "SEO começa com clareza, estrutura e qualidade técnica.",
      text: "Um site só fica visível no Google quando o conteúdo é compreensível, relevante, indexável e tecnicamente acessível. A AJ-Tech constrói essa base.",
      boxTitle: "SEO básico incluído",
      features: [
        "Estrutura orientada por palavras-chave",
        "Title tags e meta descriptions claros",
        "Estrutura H1-H3 limpa",
        "Links internos e navegação clara",
        "Dados estruturados JSON-LD",
        "Otimização mobile e carregamento rápido",
        "Preparação para Google Search Console",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Perguntas frequentes sobre desenvolvimento web e automação.",
      items: [
        {
          question: "A AJ-Tech pode melhorar meu site existente?",
          answer: "Sim. Sites existentes podem ser otimizados tecnicamente, estruturalmente e em conteúdo.",
        },
        {
          question: "É possível garantir primeiro lugar no Google?",
          answer: "Não. SEO sério não garante primeiro lugar.",
        },
        {
          question: "Quais automações são úteis?",
          answer: "As que reduzem trabalho manual: formulário para email ou CRM, confirmações automáticas e pedidos estruturados.",
        },
        {
          question: "Quanto tempo leva um novo site?",
          answer: "Um pequeno fix geralmente leva poucos dias. Um relaunch completo normalmente leva várias semanas.",
        },
      ],
    },
    contact: {
      title: "Análise inicial gratuita para sua empresa",
      text: "A AJ-Tech verifica seu site para perdas de pedidos, fraquezas técnicas e oportunidades rápidas de melhoria.",
      name: "Nome",
      email: "Email",
      website: "Seu site",
      message: "Sobre o que é?",
      placeholder: "Relaunch, otimização, automação ou manutenção",
      button: "Solicitar análise",
    },
    footer: {
      description: "Desenvolvimento web, SEO básico e automação para pequenas empresas.",
      servicesTitle: "Serviços",
      legalTitle: "Legal",
      contactTitle: "Contato",
      rights: "Todos os direitos reservados.",
      services: ["Desenvolvimento web", "Relaunch de site", "Automação", "Manutenção de site"],
      privacy: "Privacidade",
      imprint: "Aviso legal",
      analysis: "Solicitar análise do site",
    },
  },

  ar: {
    nav: {
      services: "الخدمات",
      process: "العملية",
      faq: "الأسئلة",
      contact: "التواصل",
      analysis: "تحليل مجاني للموقع",
    },
    hero: {
      badge: "مواقع تقنية نظيفة للحصول على طلبات قابلة للقياس",
      title: "تطوير مواقع وأتمتة للشركات الصغيرة",
      text: "تقوم AJ-Tech بإنشاء مواقع سريعة ومنظمة ومحسنة لمحركات البحث لتحويل الزوار إلى طلبات. كما نؤتمت نماذج التواصل والحجوزات والعمليات الداخلية.",
      primary: "اطلب تحليل الموقع",
      secondary: "عرض الخدمات",
      cardTitle: "ما الذي يجب أن يحققه موقعك",
      points: [
        "يوضح فوراً ما تقدمه.",
        "يعمل بسرعة على الهاتف والحاسوب.",
        "يوجه الزائر إلى طلب أو اتصال أو حجز.",
        "يكون مفهوماً وقابلاً للفهرسة في Google.",
        "يقلل العمل اليدوي عبر الأتمتة.",
      ],
    },
    problem: {
      eyebrow: "المشكلة",
      title: "تخسر كثير من الشركات الصغيرة الطلبات قبل أن يتواصل العميل.",
      text: "الموقع ليس مجرد كتيب رقمي. يجب أن يبني الثقة ويوجه الزائر ويجعل الخطوة التالية سهلة.",
      cards: [
        {
          title: "تموضع غير واضح",
          text: "لا يفهم الزوار خلال ثوانٍ ما تقدمه ولماذا يجب التواصل معك.",
        },
        {
          title: "مسارات تواصل ضعيفة",
          text: "النماذج أو أرقام الهاتف أو الحجوزات مخفية أو لا تعمل جيداً أو غير مناسبة للهاتف.",
        },
        {
          title: "مشاكل تقنية",
          text: "بطء التحميل وضعف البنية وغياب أساسيات SEO تصعب الظهور والتوجيه.",
        },
      ],
    },
    services: {
      eyebrow: "الخدمات",
      title: "مواقع وإعادة إطلاق وأتمتة من مصدر واحد.",
      text: "تجمع AJ-Tech بين تطوير المواقع وأتمتة العمليات العملية. النتيجة ليست موقعاً جميلاً فقط، بل أداة رقمية لزيادة الكفاءة.",
      cards: [
        {
          title: "تطوير المواقع",
          text: "مواقع أعمال حديثة ببنية واضحة وتصميم متجاوب وسرعة تحميل عالية وHTML نظيف.",
        },
        {
          title: "إعادة إطلاق الموقع",
          text: "تحسين المواقع القائمة بتوجيه أفضل للمستخدم ونصوص أوضح ومسارات تواصل جديدة وأساس SEO تقني.",
        },
        {
          title: "أساسيات SEO",
          text: "بيانات وصفية، بنية عناوين، روابط داخلية، بيانات منظمة، كلمات محلية ومحتوى قابل للفهرسة.",
        },
        {
          title: "الأتمتة",
          text: "نماذج تواصل، إشعارات بريدية، ربط CRM، حجوزات وعمليات متكررة.",
        },
        {
          title: "الصيانة والأمان",
          text: "تحديثات ونسخ احتياطية وفحص تقني وتعديلات صغيرة ومراقبة الوظائف المهمة.",
        },
        {
          title: "تحليل الموقع",
          text: "فحص عملي لموقعك لاكتشاف فقدان الطلبات والأخطاء التقنية وأساسيات SEO والتحسينات السريعة.",
        },
      ],
    },
    process: {
      eyebrow: "العملية",
      title: "عملية واضحة بدون تعقيد غير ضروري.",
      text: "كل مشروع يبدأ بالهدف التجاري. بعد ذلك يأتي التصميم والتقنية والأتمتة.",
      steps: [
        {
          title: "التحليل",
          text: "نراجع موقعك الحالي والجمهور المستهدف ومسارات التواصل والكلمات المفتاحية والأهداف الرئيسية.",
        },
        {
          title: "البنية والعرض",
          text: "نحدد بنية الصفحات والمحتوى والدعوات الواضحة لاتخاذ إجراء ونطاق التنفيذ الواقعي.",
        },
        {
          title: "التطوير",
          text: "يتم تنفيذ الموقع بشكل تقني نظيف وسريع ومتوافق مع الهاتف ومحركات البحث.",
        },
        {
          title: "الأتمتة",
          text: "يتم إعداد النماذج والحجوزات والبريد أو CRM عندما يكون ذلك مفيداً تجارياً.",
        },
        {
          title: "الإطلاق والتحسين",
          text: "بعد النشر يتم فحص الوظائف والمظهر والسرعة وقابلية الفهرسة.",
        },
      ],
    },
    industries: {
      eyebrow: "الفئات المستهدفة",
      title: "مناسب خصوصاً للشركات الصغيرة ذات الخدمات التي تحتاج إلى شرح.",
      text: "تعمل AJ-Tech بقوة حيث تكون التقنية والثقة ومسارات الطلب الواضحة مهمة.",
      cards: [
        {
          title: "الحرفيون",
          text: "طلبات محلية أكثر وصفحات خدمات أفضل وطلبات عروض سهلة.",
        },
        {
          title: "مزودو خدمات B2B",
          text: "تموضع واضح وعرض احترافي ونماذج تواصل مؤهلة.",
        },
        {
          title: "الشركات التقنية",
          text: "شرح منظم للخدمات المعقدة ومراجع وأتمتة.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO",
      title: "يبدأ SEO بالوضوح والبنية والنظافة التقنية.",
      text: "لا يمكن أن يظهر الموقع في Google إلا عندما يكون المحتوى مفهوماً وملائماً وقابلاً للفهرسة ومتاحاً تقنياً. تبني AJ-Tech هذه القاعدة.",
      boxTitle: "أساسيات SEO المضمنة",
      features: [
        "بنية صفحات حسب الكلمات المفتاحية",
        "Title tags و meta descriptions واضحة",
        "بنية H1-H3 نظيفة",
        "روابط داخلية وتنقل واضح",
        "بيانات منظمة JSON-LD",
        "تحسين الهاتف وسرعة التحميل",
        "تحضير Google Search Console",
      ],
    },
    faq: {
      eyebrow: "الأسئلة",
      title: "أسئلة شائعة حول تطوير المواقع والأتمتة.",
      items: [
        {
          question: "هل يمكن لـ AJ-Tech تحسين موقعي الحالي؟",
          answer: "نعم. يمكن تحسين المواقع الحالية تقنياً وبنيوياً ومن ناحية المحتوى.",
        },
        {
          question: "هل يمكن ضمان المركز الأول في Google؟",
          answer: "لا. SEO الجاد لا يضمن المركز الأول.",
        },
        {
          question: "ما الأتمتة المفيدة؟",
          answer: "الأتمتة المفيدة تقلل العمل اليدوي: نموذج إلى بريد أو CRM، تأكيدات تلقائية وطلبات منظمة.",
        },
        {
          question: "كم يستغرق إنشاء موقع جديد؟",
          answer: "الإصلاح الصغير غالباً يستغرق أياماً قليلة. إعادة الإطلاق الكاملة تستغرق عادة عدة أسابيع.",
        },
      ],
    },
    contact: {
      title: "تحليل أولي مجاني لموقع شركتك",
      text: "تفحص AJ-Tech موقعك لاكتشاف فقدان الطلبات والضعف التقني وفرص التحسين السريعة.",
      name: "الاسم",
      email: "البريد الإلكتروني",
      website: "موقعك",
      message: "ما الموضوع؟",
      placeholder: "إعادة إطلاق، تحسين، أتمتة أو صيانة",
      button: "اطلب التحليل",
    },
    footer: {
      description: "تطوير مواقع، أساس SEO وأتمتة للشركات الصغيرة.",
      servicesTitle: "الخدمات",
      legalTitle: "قانوني",
      contactTitle: "التواصل",
      rights: "جميع الحقوق محفوظة.",
      services: ["تطوير مواقع", "إعادة إطلاق الموقع", "أتمتة", "صيانة الموقع"],
      privacy: "الخصوصية",
      imprint: "إشعار قانوني",
      analysis: "اطلب تحليل الموقع",
    },
  },

  ru: {
    nav: {
      services: "Услуги",
      process: "Процесс",
      faq: "FAQ",
      contact: "Контакт",
      analysis: "Бесплатный анализ сайта",
    },
    hero: {
      badge: "Технически чистые сайты для измеримых заявок",
      title: "Разработка сайтов и автоматизация для малого бизнеса",
      text: "AJ-Tech создает быстрые, структурированные и SEO-оптимизированные сайты, которые превращают посетителей в заявки. Также мы автоматизируем формы, бронирования и внутренние процессы.",
      primary: "Проверить сайт",
      secondary: "Посмотреть услуги",
      cardTitle: "Что должен делать ваш сайт",
      points: [
        "Сразу показывать, что вы предлагаете.",
        "Быстро загружаться на телефоне и компьютере.",
        "Вести посетителя к заявке, звонку или бронированию.",
        "Быть понятным и индексируемым для Google.",
        "Снижать ручную работу за счет автоматизации.",
      ],
    },
    problem: {
      eyebrow: "Проблема",
      title: "Многие малые компании теряют заявки еще до контакта клиента.",
      text: "Сайт — это не цифровая брошюра. Он должен вызывать доверие, направлять и упрощать следующий шаг.",
      cards: [
        {
          title: "Неясное позиционирование",
          text: "Посетители за несколько секунд не понимают, что вы предлагаете и почему нужно связаться с вами.",
        },
        {
          title: "Слабые пути контакта",
          text: "Формы, телефоны или бронирования скрыты, не работают или плохо адаптированы под мобильные устройства.",
        },
        {
          title: "Технические ошибки",
          text: "Медленная загрузка, слабая структура и отсутствие SEO-базы мешают видимости.",
        },
      ],
    },
    services: {
      eyebrow: "Услуги",
      title: "Сайты, редизайн и автоматизация из одного источника.",
      text: "AJ-Tech объединяет веб-разработку с практической автоматизацией процессов. Результат — не просто красивый сайт, а цифровой инструмент для эффективности.",
      cards: [
        {
          title: "Разработка сайтов",
          text: "Современные сайты для бизнеса с понятной структурой, адаптивным дизайном, быстрой загрузкой и чистым HTML.",
        },
        {
          title: "Релонч сайта",
          text: "Улучшение существующих сайтов: лучшая навигация, ясные тексты, новые пути контакта и техническая SEO-база.",
        },
        {
          title: "Базовая SEO-оптимизация",
          text: "Метаданные, структура заголовков, внутренние ссылки, структурированные данные, локальные ключевые слова и индексируемый контент.",
        },
        {
          title: "Автоматизация",
          text: "Формы контакта, email-уведомления, CRM, бронирования и повторяющиеся процессы.",
        },
        {
          title: "Поддержка и безопасность",
          text: "Обновления, резервные копии, технические проверки, небольшие изменения и мониторинг.",
        },
        {
          title: "Анализ сайта",
          text: "Конкретная проверка сайта на потерю заявок, технические ошибки, SEO-базу и быстрые улучшения.",
        },
      ],
    },
    process: {
      eyebrow: "Процесс",
      title: "Понятный процесс без лишней сложности.",
      text: "Каждый проект начинается с бизнес-цели. Потом идут дизайн, технология и автоматизация.",
      steps: [
        {
          title: "Анализ",
          text: "Мы проверяем текущий сайт, целевую аудиторию, пути контакта, ключевые слова и основные цели.",
        },
        {
          title: "Структура и предложение",
          text: "Определяем структуру страниц, контент, призывы к действию и реалистичный объем работ.",
        },
        {
          title: "Разработка",
          text: "Сайт создается технически чисто, быстро, mobile-friendly и дружественно к поисковым системам.",
        },
        {
          title: "Автоматизация",
          text: "Формы, бронирования, email-процессы или CRM подключаются, если это полезно для бизнеса.",
        },
        {
          title: "Запуск и оптимизация",
          text: "После публикации проверяются функции, отображение, скорость и индексируемость.",
        },
      ],
    },
    industries: {
      eyebrow: "Целевые группы",
      title: "Особенно подходит для малого бизнеса с услугами, которые нужно объяснять.",
      text: "AJ-Tech особенно полезен там, где важны технология, доверие и понятные процессы заявок.",
      cards: [
        {
          title: "Ремесленные компании",
          text: "Больше региональных заявок, лучшие страницы услуг и простые запросы предложений.",
        },
        {
          title: "B2B-услуги",
          text: "Четкое позиционирование, профессиональная презентация и квалифицированные формы.",
        },
        {
          title: "Технические компании",
          text: "Структурированное объяснение сложных услуг, кейсы и автоматизация.",
        },
      ],
    },
    seo: {
      eyebrow: "SEO",
      title: "SEO начинается с ясности, структуры и технического качества.",
      text: "Сайт может быть видимым в Google только если контент понятен, релевантен, индексируем и технически доступен. AJ-Tech создает эту основу.",
      boxTitle: "Включенная SEO-база",
      features: [
        "Структура страниц по ключевым словам",
        "Четкие title tags и meta descriptions",
        "Чистая структура H1-H3",
        "Внутренние ссылки и понятная навигация",
        "Структурированные данные JSON-LD",
        "Мобильная оптимизация и быстрая загрузка",
        "Подготовка Google Search Console",
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Частые вопросы о разработке сайтов и автоматизации.",
      items: [
        {
          question: "Может ли AJ-Tech улучшить мой существующий сайт?",
          answer: "Да. Существующие сайты можно оптимизировать технически, структурно и по содержанию.",
        },
        {
          question: "Возможна ли гарантия первого места в Google?",
          answer: "Нет. Серьезное SEO не может гарантировать первое место.",
        },
        {
          question: "Какие автоматизации полезны?",
          answer: "Полезны те, что уменьшают ручную работу: форма в email или CRM, автоматические подтверждения и структурированные заявки.",
        },
        {
          question: "Сколько занимает новый сайт?",
          answer: "Небольшой fix часто занимает несколько дней. Полный relaunch обычно занимает несколько недель.",
        },
      ],
    },
    contact: {
      title: "Бесплатный первичный анализ сайта для вашей компании",
      text: "AJ-Tech проверяет ваш сайт на потерю заявок, технические слабости и быстрые возможности улучшения.",
      name: "Имя",
      email: "Email",
      website: "Ваш сайт",
      message: "О чем речь?",
      placeholder: "Relaunch, оптимизация, автоматизация или поддержка",
      button: "Запросить анализ",
    },
    footer: {
      description: "Разработка сайтов, SEO-база и автоматизация для малого бизнеса.",
      servicesTitle: "Услуги",
      legalTitle: "Правовая информация",
      contactTitle: "Контакт",
      rights: "Все права защищены.",
      services: ["Разработка сайтов", "Релонч сайта", "Автоматизация", "Поддержка сайта"],
      privacy: "Конфиденциальность",
      imprint: "Правовая информация",
      analysis: "Запросить анализ сайта",
    },
  },
};