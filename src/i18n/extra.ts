import type { Language } from "./translations";

// Ergänzende Texte für Über-mich, Kontaktformular, Anruf-Buttons und
// zusätzliche FAQ. Werden in LanguageContext mit translations zusammengeführt.

export const PHONE_DISPLAY = "0173 8828927";
export const PHONE_INTL = "+49 173 8828927";
export const PHONE_HREF = "tel:+491738828927";
export const EMAIL = "agon.mustafa@aj-tech.de";

export type Extra = {
  nav: { about: string };
  hero: { call: string; trust: string[] };
  about: {
    eyebrow: string;
    title: string;
    text: string;
    text2: string;
    role: string;
    points: string[];
  };
  faqMore: { question: string; answer: string }[];
  contact: {
    phone: string;
    topicLabel: string;
    topics: string[];
    required: string;
    privacyBefore: string;
    privacyLink: string;
    privacyAfter: string;
    sending: string;
    successTitle: string;
    successText: string;
    errorText: string;
    stepsTitle: string;
    steps: string[];
    direct: string;
  };
  sticky: { call: string; inquiry: string };
};

export const extra: Record<Language, Extra> = {
  de: {
    nav: { about: "Über mich" },
    hero: {
      call: `Anrufen: ${PHONE_DISPLAY}`,
      trust: [
        "Kostenlos & unverbindlich",
        "Persönlicher Ansprechpartner",
        "Klares Angebot, bevor Kosten entstehen",
      ],
    },
    about: {
      eyebrow: "Über mich",
      title: "Ein Ansprechpartner – von der ersten Idee bis zum Launch.",
      text: "Ich bin Agon Mustafa, Gründer von AJ-Tech. Bei mir sprechen Sie nicht mit einem Callcenter oder wechselnden Projektmanagern, sondern direkt mit dem Menschen, der Ihre Website plant und programmiert.",
      text2: "AJ-Tech sitzt in Mechernich. Ich arbeite für Betriebe im Kreis Euskirchen, in der Eifel und im Raum Köln/Bonn – und per Telefon oder Videocall für Kunden in ganz Deutschland.",
      role: "Inhaber & Webentwickler",
      points: [
        "Direkter Draht per Telefon und E-Mail",
        "Verständliche Sprache statt Fachchinesisch",
        "Ehrliche Einschätzung, auch wenn sie „klein anfangen“ heißt",
      ],
    },
    faqMore: [
      {
        question: "Was kostet eine Website bei AJ-Tech?",
        answer: "Das hängt vom Umfang ab: Anzahl der Seiten, Texte, Funktionen wie Terminbuchung oder Automatisierungen. Nach dem kostenlosen Erstgespräch erhalten Sie ein klares, schriftliches Angebot – bevor irgendwelche Kosten entstehen.",
      },
      {
        question: "Arbeiten Sie nur in Mechernich und Umgebung?",
        answer: "Nein. AJ-Tech sitzt in Mechernich und betreut viele Betriebe im Kreis Euskirchen, in der Eifel und im Raum Köln/Bonn. Da fast alles per Telefon, E-Mail und Videocall läuft, arbeite ich genauso gern für Kunden in ganz Deutschland.",
      },
    ],
    contact: {
      phone: "Telefon (optional, für Rückruf)",
      topicLabel: "Worum geht es?",
      topics: [
        "Neue Website",
        "Bestehende Website verbessern",
        "Kostenlose Website-Analyse",
        "Automatisierung",
        "Etwas anderes",
      ],
      required: "Pflichtfeld",
      privacyBefore: "Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Details in der ",
      privacyLink: "Datenschutzerklärung",
      privacyAfter: ".",
      sending: "Wird gesendet …",
      successTitle: "Vielen Dank für Ihre Anfrage!",
      successText: "Ihre Nachricht ist angekommen. Ich melde mich persönlich bei Ihnen – in der Regel innerhalb eines Werktags.",
      errorText: "Das Senden hat leider nicht geklappt. Bitte schreiben Sie direkt an",
      stepsTitle: "So geht es weiter",
      steps: [
        "Sie senden Ihre Anfrage – das dauert eine Minute.",
        "Ich melde mich persönlich, meist innerhalb eines Werktags.",
        "Sie erhalten eine kostenlose Einschätzung und auf Wunsch ein klares Angebot.",
      ],
      direct: "Lieber direkt sprechen?",
    },
    sticky: { call: "Anrufen", inquiry: "Anfrage senden" },
  },

  en: {
    nav: { about: "About me" },
    hero: {
      call: `Call: ${PHONE_INTL}`,
      trust: [
        "Free & no obligation",
        "One personal contact",
        "Clear quote before any costs",
      ],
    },
    about: {
      eyebrow: "About me",
      title: "One contact person – from the first idea to launch.",
      text: "I am Agon Mustafa, founder of AJ-Tech. You won't talk to a call center or changing project managers, but directly to the person who plans and builds your website.",
      text2: "AJ-Tech is based in Mechernich, Germany. I work for businesses in the Euskirchen district, the Eifel and the Cologne/Bonn area – and by phone or video call for clients all over Germany.",
      role: "Owner & web developer",
      points: [
        "Direct line by phone and email",
        "Plain language instead of jargon",
        "Honest advice, even if it means starting small",
      ],
    },
    faqMore: [
      {
        question: "How much does a website from AJ-Tech cost?",
        answer: "It depends on the scope: number of pages, texts and features such as booking or automations. After the free initial consultation you receive a clear written quote – before any costs arise.",
      },
      {
        question: "Do you only work in Mechernich and the surrounding area?",
        answer: "No. AJ-Tech is based in Mechernich and works with many businesses in the Euskirchen district, the Eifel and the Cologne/Bonn area. Since almost everything runs by phone, email and video call, I am just as happy to work for clients all over Germany.",
      },
    ],
    contact: {
      phone: "Phone (optional, for a call back)",
      topicLabel: "What is it about?",
      topics: [
        "New website",
        "Improve existing website",
        "Free website audit",
        "Automation",
        "Something else",
      ],
      required: "Required",
      privacyBefore: "Your details are used only to handle your inquiry. Details in our ",
      privacyLink: "privacy policy",
      privacyAfter: ".",
      sending: "Sending …",
      successTitle: "Thank you for your inquiry!",
      successText: "Your message has arrived. I will get back to you personally – usually within one business day.",
      errorText: "Sending did not work, unfortunately. Please write directly to",
      stepsTitle: "What happens next",
      steps: [
        "You send your inquiry – it takes one minute.",
        "I get back to you personally, usually within one business day.",
        "You receive a free assessment and, if you wish, a clear quote.",
      ],
      direct: "Prefer to talk directly?",
    },
    sticky: { call: "Call", inquiry: "Send inquiry" },
  },

  sq: {
    nav: { about: "Rreth meje" },
    hero: {
      call: `Telefononi: ${PHONE_INTL}`,
      trust: [
        "Falas dhe pa detyrim",
        "Një person kontakti personal",
        "Ofertë e qartë para çdo kostoje",
      ],
    },
    about: {
      eyebrow: "Rreth meje",
      title: "Një person kontakti – nga ideja e parë deri në publikim.",
      text: "Unë jam Agon Mustafa, themeluesi i AJ-Tech. Nuk flisni me një qendër thirrjesh apo me menaxherë që ndryshojnë, por drejtpërdrejt me personin që planifikon dhe ndërton faqen tuaj.",
      text2: "AJ-Tech ndodhet në Mechernich, Gjermani. Punoj për biznese në rrethin e Euskirchen, në Eifel dhe në zonën Këln/Bon – dhe me telefon ose video-thirrje për klientë në të gjithë Gjermaninë.",
      role: "Pronar & zhvillues uebi",
      points: [
        "Kontakt i drejtpërdrejtë me telefon dhe e-mail",
        "Gjuhë e kuptueshme në vend të zhargonit teknik",
        "Vlerësim i sinqertë, edhe nëse do të thotë të fillojmë të vegjël",
      ],
    },
    faqMore: [
      {
        question: "Sa kushton një faqe interneti nga AJ-Tech?",
        answer: "Varet nga përmasat: numri i faqeve, tekstet dhe funksionet si rezervimet ose automatizimet. Pas konsultimit të parë falas merrni një ofertë të qartë me shkrim – para se të lindë ndonjë kosto.",
      },
      {
        question: "A punoni vetëm në Mechernich dhe rrethinë?",
        answer: "Jo. AJ-Tech ndodhet në Mechernich dhe punon me shumë biznese në rrethin e Euskirchen, në Eifel dhe në zonën Këln/Bon. Meqë pothuajse gjithçka bëhet me telefon, e-mail dhe video-thirrje, punoj me kënaqësi edhe për klientë në të gjithë Gjermaninë.",
      },
    ],
    contact: {
      phone: "Telefoni (opsional, për t'ju telefonuar)",
      topicLabel: "Për çfarë bëhet fjalë?",
      topics: [
        "Faqe e re",
        "Përmirësim i faqes ekzistuese",
        "Analizë falas e faqes",
        "Automatizim",
        "Diçka tjetër",
      ],
      required: "Fushë e detyrueshme",
      privacyBefore: "Të dhënat tuaja përdoren vetëm për përpunimin e kërkesës. Detaje te ",
      privacyLink: "deklarata e privatësisë",
      privacyAfter: ".",
      sending: "Po dërgohet …",
      successTitle: "Faleminderit për kërkesën tuaj!",
      successText: "Mesazhi juaj arriti. Do t'ju kontaktoj personalisht – zakonisht brenda një dite pune.",
      errorText: "Dërgimi fatkeqësisht nuk funksionoi. Ju lutemi shkruani direkt te",
      stepsTitle: "Si vazhdon më tej",
      steps: [
        "Dërgoni kërkesën tuaj – zgjat një minutë.",
        "Ju kontaktoj personalisht, zakonisht brenda një dite pune.",
        "Merrni një vlerësim falas dhe, nëse dëshironi, një ofertë të qartë.",
      ],
      direct: "Preferoni të flisni drejtpërdrejt?",
    },
    sticky: { call: "Telefononi", inquiry: "Dërgo kërkesë" },
  },

  es: {
    nav: { about: "Sobre mí" },
    hero: {
      call: `Llamar: ${PHONE_INTL}`,
      trust: [
        "Gratis y sin compromiso",
        "Un contacto personal",
        "Presupuesto claro antes de cualquier coste",
      ],
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Una sola persona de contacto, desde la primera idea hasta el lanzamiento.",
      text: "Soy Agon Mustafa, fundador de AJ-Tech. No hablará con un call center ni con gestores de proyecto que cambian, sino directamente con quien planifica y programa su web.",
      text2: "AJ-Tech está en Mechernich (Alemania). Trabajo para empresas del distrito de Euskirchen, el Eifel y la zona de Colonia/Bonn, y por teléfono o videollamada para clientes de toda Alemania.",
      role: "Propietario y desarrollador web",
      points: [
        "Contacto directo por teléfono y correo",
        "Lenguaje claro en lugar de tecnicismos",
        "Valoración honesta, aunque signifique empezar en pequeño",
      ],
    },
    faqMore: [
      {
        question: "¿Cuánto cuesta una web con AJ-Tech?",
        answer: "Depende del alcance: número de páginas, textos y funciones como reservas o automatizaciones. Tras la primera consulta gratuita recibirá un presupuesto claro por escrito, antes de que surja ningún coste.",
      },
      {
        question: "¿Trabaja solo en Mechernich y alrededores?",
        answer: "No. AJ-Tech está en Mechernich y trabaja con muchas empresas del distrito de Euskirchen, el Eifel y la zona de Colonia/Bonn. Como casi todo se hace por teléfono, correo y videollamada, trabajo igual de bien para clientes de toda Alemania.",
      },
    ],
    contact: {
      phone: "Teléfono (opcional, para devolverle la llamada)",
      topicLabel: "¿De qué se trata?",
      topics: [
        "Nueva web",
        "Mejorar la web actual",
        "Análisis web gratuito",
        "Automatización",
        "Otra cosa",
      ],
      required: "Obligatorio",
      privacyBefore: "Sus datos se usan solo para tramitar su consulta. Más en la ",
      privacyLink: "política de privacidad",
      privacyAfter: ".",
      sending: "Enviando …",
      successTitle: "¡Gracias por su consulta!",
      successText: "Su mensaje ha llegado. Me pondré en contacto con usted personalmente, normalmente en un día laborable.",
      errorText: "Lamentablemente no se pudo enviar. Escriba directamente a",
      stepsTitle: "Próximos pasos",
      steps: [
        "Envía su consulta: tarda un minuto.",
        "Le contacto personalmente, normalmente en un día laborable.",
        "Recibe una valoración gratuita y, si lo desea, un presupuesto claro.",
      ],
      direct: "¿Prefiere hablar directamente?",
    },
    sticky: { call: "Llamar", inquiry: "Enviar consulta" },
  },

  tr: {
    nav: { about: "Hakkımda" },
    hero: {
      call: `Arayın: ${PHONE_INTL}`,
      trust: [
        "Ücretsiz ve bağlayıcı değil",
        "Kişisel muhatap",
        "Masraf oluşmadan önce net teklif",
      ],
    },
    about: {
      eyebrow: "Hakkımda",
      title: "İlk fikirden yayına kadar tek muhatap.",
      text: "Ben Agon Mustafa, AJ-Tech'in kurucusuyum. Bir çağrı merkeziyle ya da sürekli değişen proje yöneticileriyle değil, web sitenizi planlayan ve kodlayan kişiyle doğrudan konuşursunuz.",
      text2: "AJ-Tech, Almanya'nın Mechernich şehrindedir. Euskirchen bölgesi, Eifel ve Köln/Bonn çevresindeki işletmeler için; telefon veya görüntülü görüşme ile de tüm Almanya'daki müşteriler için çalışıyorum.",
      role: "Sahibi & web geliştirici",
      points: [
        "Telefon ve e-posta ile doğrudan iletişim",
        "Teknik jargon yerine anlaşılır dil",
        "Küçük başlamak anlamına gelse bile dürüst değerlendirme",
      ],
    },
    faqMore: [
      {
        question: "AJ-Tech ile bir web sitesi ne kadar tutar?",
        answer: "Kapsama bağlıdır: sayfa sayısı, metinler ve randevu ya da otomasyon gibi fonksiyonlar. Ücretsiz ilk görüşmeden sonra, herhangi bir masraf oluşmadan önce yazılı ve net bir teklif alırsınız.",
      },
      {
        question: "Sadece Mechernich ve çevresinde mi çalışıyorsunuz?",
        answer: "Hayır. AJ-Tech Mechernich'tedir ve Euskirchen bölgesi, Eifel ve Köln/Bonn çevresindeki birçok işletmeyle çalışır. Neredeyse her şey telefon, e-posta ve görüntülü görüşmeyle yürüdüğü için tüm Almanya'daki müşterilerle de memnuniyetle çalışıyorum.",
      },
    ],
    contact: {
      phone: "Telefon (isteğe bağlı, geri arama için)",
      topicLabel: "Konu nedir?",
      topics: [
        "Yeni web sitesi",
        "Mevcut siteyi iyileştirme",
        "Ücretsiz web analizi",
        "Otomasyon",
        "Başka bir konu",
      ],
      required: "Zorunlu alan",
      privacyBefore: "Bilgileriniz yalnızca talebinizi işlemek için kullanılır. Ayrıntılar: ",
      privacyLink: "Gizlilik politikası",
      privacyAfter: ".",
      sending: "Gönderiliyor …",
      successTitle: "Talebiniz için teşekkürler!",
      successText: "Mesajınız ulaştı. Size kişisel olarak dönüş yapacağım – genellikle bir iş günü içinde.",
      errorText: "Gönderim maalesef başarısız oldu. Lütfen doğrudan şu adrese yazın:",
      stepsTitle: "Sonraki adımlar",
      steps: [
        "Talebinizi gönderin – bir dakika sürer.",
        "Size kişisel olarak, genellikle bir iş günü içinde dönüş yaparım.",
        "Ücretsiz bir değerlendirme ve isterseniz net bir teklif alırsınız.",
      ],
      direct: "Doğrudan konuşmayı mı tercih edersiniz?",
    },
    sticky: { call: "Ara", inquiry: "Talep gönder" },
  },

  el: {
    nav: { about: "Σχετικά με μένα" },
    hero: {
      call: `Κλήση: ${PHONE_INTL}`,
      trust: [
        "Δωρεάν και χωρίς δέσμευση",
        "Ένας προσωπικός συνεργάτης",
        "Σαφής προσφορά πριν από κάθε κόστος",
      ],
    },
    about: {
      eyebrow: "Σχετικά με μένα",
      title: "Ένας συνεργάτης – από την πρώτη ιδέα μέχρι την κυκλοφορία.",
      text: "Είμαι ο Agon Mustafa, ιδρυτής της AJ-Tech. Δεν μιλάτε με τηλεφωνικό κέντρο ή με διαφορετικούς υπεύθυνους έργου, αλλά απευθείας με τον άνθρωπο που σχεδιάζει και προγραμματίζει την ιστοσελίδα σας.",
      text2: "Η AJ-Tech βρίσκεται στο Mechernich της Γερμανίας. Εργάζομαι για επιχειρήσεις στην περιοχή Euskirchen, στο Eifel και στην περιοχή Κολωνίας/Βόννης – και μέσω τηλεφώνου ή βιντεοκλήσης για πελάτες σε όλη τη Γερμανία.",
      role: "Ιδιοκτήτης & web developer",
      points: [
        "Άμεση επικοινωνία μέσω τηλεφώνου και email",
        "Κατανοητή γλώσσα αντί για τεχνική ορολογία",
        "Ειλικρινής εκτίμηση, ακόμη κι αν σημαίνει να ξεκινήσουμε μικρά",
      ],
    },
    faqMore: [
      {
        question: "Πόσο κοστίζει μια ιστοσελίδα από την AJ-Tech;",
        answer: "Εξαρτάται από το εύρος: αριθμό σελίδων, κείμενα και λειτουργίες όπως κρατήσεις ή αυτοματισμούς. Μετά τη δωρεάν πρώτη συζήτηση λαμβάνετε σαφή γραπτή προσφορά – πριν προκύψει οποιοδήποτε κόστος.",
      },
      {
        question: "Εργάζεστε μόνο στο Mechernich και τη γύρω περιοχή;",
        answer: "Όχι. Η AJ-Tech βρίσκεται στο Mechernich και συνεργάζεται με πολλές επιχειρήσεις στην περιοχή Euskirchen, στο Eifel και στην περιοχή Κολωνίας/Βόννης. Επειδή σχεδόν όλα γίνονται μέσω τηλεφώνου, email και βιντεοκλήσης, εργάζομαι εξίσου ευχάριστα για πελάτες σε όλη τη Γερμανία.",
      },
    ],
    contact: {
      phone: "Τηλέφωνο (προαιρετικό, για επανάκληση)",
      topicLabel: "Τι αφορά;",
      topics: [
        "Νέα ιστοσελίδα",
        "Βελτίωση υπάρχουσας ιστοσελίδας",
        "Δωρεάν ανάλυση ιστοσελίδας",
        "Αυτοματοποίηση",
        "Κάτι άλλο",
      ],
      required: "Υποχρεωτικό πεδίο",
      privacyBefore: "Τα στοιχεία σας χρησιμοποιούνται μόνο για την επεξεργασία του αιτήματός σας. Λεπτομέρειες στην ",
      privacyLink: "πολιτική απορρήτου",
      privacyAfter: ".",
      sending: "Αποστολή …",
      successTitle: "Ευχαριστούμε για το αίτημά σας!",
      successText: "Το μήνυμά σας παραδόθηκε. Θα επικοινωνήσω προσωπικά μαζί σας – συνήθως μέσα σε μία εργάσιμη ημέρα.",
      errorText: "Δυστυχώς η αποστολή απέτυχε. Γράψτε απευθείας στο",
      stepsTitle: "Τα επόμενα βήματα",
      steps: [
        "Στέλνετε το αίτημά σας – χρειάζεται ένα λεπτό.",
        "Επικοινωνώ προσωπικά, συνήθως μέσα σε μία εργάσιμη ημέρα.",
        "Λαμβάνετε δωρεάν εκτίμηση και, αν θέλετε, σαφή προσφορά.",
      ],
      direct: "Προτιμάτε να μιλήσουμε απευθείας;",
    },
    sticky: { call: "Κλήση", inquiry: "Αποστολή αιτήματος" },
  },

  fr: {
    nav: { about: "À propos" },
    hero: {
      call: `Appeler : ${PHONE_INTL}`,
      trust: [
        "Gratuit et sans engagement",
        "Un interlocuteur personnel",
        "Devis clair avant tout coût",
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "Un seul interlocuteur, de la première idée à la mise en ligne.",
      text: "Je suis Agon Mustafa, fondateur d'AJ-Tech. Vous ne parlez pas à un centre d'appels ni à des chefs de projet qui changent, mais directement à la personne qui conçoit et développe votre site.",
      text2: "AJ-Tech est basé à Mechernich, en Allemagne. Je travaille pour des entreprises du district d'Euskirchen, de l'Eifel et de la région Cologne/Bonn – et par téléphone ou visioconférence pour des clients dans toute l'Allemagne.",
      role: "Fondateur & développeur web",
      points: [
        "Contact direct par téléphone et e-mail",
        "Un langage clair plutôt que du jargon",
        "Un avis honnête, même s'il faut commencer petit",
      ],
    },
    faqMore: [
      {
        question: "Combien coûte un site web avec AJ-Tech ?",
        answer: "Cela dépend du périmètre : nombre de pages, textes et fonctions comme la prise de rendez-vous ou les automatisations. Après le premier échange gratuit, vous recevez un devis écrit clair – avant tout coût.",
      },
      {
        question: "Travaillez-vous uniquement à Mechernich et dans les environs ?",
        answer: "Non. AJ-Tech est basé à Mechernich et travaille avec de nombreuses entreprises du district d'Euskirchen, de l'Eifel et de la région Cologne/Bonn. Comme presque tout se fait par téléphone, e-mail et visioconférence, je travaille tout aussi volontiers pour des clients dans toute l'Allemagne.",
      },
    ],
    contact: {
      phone: "Téléphone (facultatif, pour être rappelé)",
      topicLabel: "De quoi s'agit-il ?",
      topics: [
        "Nouveau site",
        "Améliorer le site existant",
        "Analyse gratuite du site",
        "Automatisation",
        "Autre chose",
      ],
      required: "Champ obligatoire",
      privacyBefore: "Vos données servent uniquement au traitement de votre demande. Détails dans la ",
      privacyLink: "politique de confidentialité",
      privacyAfter: ".",
      sending: "Envoi …",
      successTitle: "Merci pour votre demande !",
      successText: "Votre message est bien arrivé. Je vous recontacte personnellement – en général sous un jour ouvré.",
      errorText: "L'envoi n'a malheureusement pas fonctionné. Écrivez directement à",
      stepsTitle: "La suite",
      steps: [
        "Vous envoyez votre demande – cela prend une minute.",
        "Je vous recontacte personnellement, en général sous un jour ouvré.",
        "Vous recevez une évaluation gratuite et, si vous le souhaitez, un devis clair.",
      ],
      direct: "Vous préférez en parler directement ?",
    },
    sticky: { call: "Appeler", inquiry: "Envoyer une demande" },
  },

  it: {
    nav: { about: "Chi sono" },
    hero: {
      call: `Chiama: ${PHONE_INTL}`,
      trust: [
        "Gratuito e senza impegno",
        "Un referente personale",
        "Preventivo chiaro prima di ogni costo",
      ],
    },
    about: {
      eyebrow: "Chi sono",
      title: "Un unico referente, dalla prima idea al lancio.",
      text: "Sono Agon Mustafa, fondatore di AJ-Tech. Non parlate con un call center o con project manager che cambiano, ma direttamente con chi progetta e sviluppa il vostro sito.",
      text2: "AJ-Tech ha sede a Mechernich, in Germania. Lavoro per aziende del distretto di Euskirchen, dell'Eifel e dell'area Colonia/Bonn – e al telefono o in videochiamata per clienti in tutta la Germania.",
      role: "Titolare & sviluppatore web",
      points: [
        "Contatto diretto via telefono ed e-mail",
        "Linguaggio chiaro invece del gergo tecnico",
        "Valutazione onesta, anche se significa iniziare in piccolo",
      ],
    },
    faqMore: [
      {
        question: "Quanto costa un sito web con AJ-Tech?",
        answer: "Dipende dal progetto: numero di pagine, testi e funzioni come prenotazioni o automazioni. Dopo il primo colloquio gratuito ricevete un preventivo scritto e chiaro, prima che sorga qualsiasi costo.",
      },
      {
        question: "Lavorate solo a Mechernich e dintorni?",
        answer: "No. AJ-Tech ha sede a Mechernich e lavora con molte aziende del distretto di Euskirchen, dell'Eifel e dell'area Colonia/Bonn. Poiché quasi tutto avviene via telefono, e-mail e videochiamata, lavoro volentieri anche per clienti in tutta la Germania.",
      },
    ],
    contact: {
      phone: "Telefono (facoltativo, per essere richiamati)",
      topicLabel: "Di cosa si tratta?",
      topics: [
        "Nuovo sito",
        "Migliorare il sito esistente",
        "Analisi gratuita del sito",
        "Automazione",
        "Altro",
      ],
      required: "Campo obbligatorio",
      privacyBefore: "I vostri dati sono usati solo per gestire la richiesta. Dettagli nell'",
      privacyLink: "informativa sulla privacy",
      privacyAfter: ".",
      sending: "Invio in corso …",
      successTitle: "Grazie per la vostra richiesta!",
      successText: "Il messaggio è arrivato. Vi ricontatterò personalmente, di solito entro un giorno lavorativo.",
      errorText: "Purtroppo l'invio non è riuscito. Scrivete direttamente a",
      stepsTitle: "I prossimi passi",
      steps: [
        "Inviate la richiesta: ci vuole un minuto.",
        "Vi ricontatto personalmente, di solito entro un giorno lavorativo.",
        "Ricevete una valutazione gratuita e, se volete, un preventivo chiaro.",
      ],
      direct: "Preferite parlare direttamente?",
    },
    sticky: { call: "Chiama", inquiry: "Invia richiesta" },
  },

  nl: {
    nav: { about: "Over mij" },
    hero: {
      call: `Bellen: ${PHONE_INTL}`,
      trust: [
        "Gratis en vrijblijvend",
        "Eén persoonlijk aanspreekpunt",
        "Duidelijke offerte vóór er kosten zijn",
      ],
    },
    about: {
      eyebrow: "Over mij",
      title: "Eén aanspreekpunt – van het eerste idee tot de lancering.",
      text: "Ik ben Agon Mustafa, oprichter van AJ-Tech. U praat niet met een callcenter of wisselende projectmanagers, maar direct met degene die uw website plant en bouwt.",
      text2: "AJ-Tech is gevestigd in Mechernich, Duitsland. Ik werk voor bedrijven in de regio Euskirchen, de Eifel en de regio Keulen/Bonn – en via telefoon of videogesprek voor klanten in heel Duitsland.",
      role: "Eigenaar & webontwikkelaar",
      points: [
        "Direct contact via telefoon en e-mail",
        "Begrijpelijke taal in plaats van vakjargon",
        "Eerlijk advies, ook als dat klein beginnen betekent",
      ],
    },
    faqMore: [
      {
        question: "Wat kost een website bij AJ-Tech?",
        answer: "Dat hangt af van de omvang: aantal pagina's, teksten en functies zoals afspraken of automatiseringen. Na het gratis kennismakingsgesprek ontvangt u een duidelijke schriftelijke offerte – voordat er kosten ontstaan.",
      },
      {
        question: "Werkt u alleen in Mechernich en omgeving?",
        answer: "Nee. AJ-Tech is gevestigd in Mechernich en werkt met veel bedrijven in de regio Euskirchen, de Eifel en de regio Keulen/Bonn. Omdat bijna alles via telefoon, e-mail en videogesprek gaat, werk ik net zo graag voor klanten in heel Duitsland.",
      },
    ],
    contact: {
      phone: "Telefoon (optioneel, om terug te bellen)",
      topicLabel: "Waar gaat het om?",
      topics: [
        "Nieuwe website",
        "Bestaande website verbeteren",
        "Gratis website-analyse",
        "Automatisering",
        "Iets anders",
      ],
      required: "Verplicht veld",
      privacyBefore: "Uw gegevens worden alleen gebruikt om uw aanvraag te behandelen. Details in de ",
      privacyLink: "privacyverklaring",
      privacyAfter: ".",
      sending: "Wordt verzonden …",
      successTitle: "Bedankt voor uw aanvraag!",
      successText: "Uw bericht is aangekomen. Ik neem persoonlijk contact met u op – meestal binnen één werkdag.",
      errorText: "Verzenden is helaas mislukt. Schrijf direct naar",
      stepsTitle: "Zo gaat het verder",
      steps: [
        "U verstuurt uw aanvraag – dat duurt een minuut.",
        "Ik neem persoonlijk contact op, meestal binnen één werkdag.",
        "U ontvangt een gratis inschatting en desgewenst een duidelijke offerte.",
      ],
      direct: "Liever direct praten?",
    },
    sticky: { call: "Bellen", inquiry: "Aanvraag sturen" },
  },

  pl: {
    nav: { about: "O mnie" },
    hero: {
      call: `Zadzwoń: ${PHONE_INTL}`,
      trust: [
        "Bezpłatnie i bez zobowiązań",
        "Jedna osoba kontaktowa",
        "Jasna oferta, zanim pojawią się koszty",
      ],
    },
    about: {
      eyebrow: "O mnie",
      title: "Jedna osoba kontaktowa – od pierwszego pomysłu do startu.",
      text: "Nazywam się Agon Mustafa i jestem założycielem AJ-Tech. Nie rozmawiają Państwo z call center ani ze zmieniającymi się kierownikami projektów, lecz bezpośrednio z osobą, która planuje i programuje Państwa stronę.",
      text2: "AJ-Tech ma siedzibę w Mechernich w Niemczech. Pracuję dla firm z powiatu Euskirchen, regionu Eifel i okolic Kolonii/Bonn – a telefonicznie lub przez wideorozmowę dla klientów z całych Niemiec.",
      role: "Właściciel & web developer",
      points: [
        "Bezpośredni kontakt telefoniczny i mailowy",
        "Zrozumiały język zamiast żargonu",
        "Uczciwa ocena, nawet jeśli oznacza to skromny start",
      ],
    },
    faqMore: [
      {
        question: "Ile kosztuje strona internetowa w AJ-Tech?",
        answer: "To zależy od zakresu: liczby podstron, tekstów i funkcji, takich jak rezerwacje czy automatyzacje. Po bezpłatnej pierwszej rozmowie otrzymują Państwo jasną pisemną ofertę – zanim pojawią się jakiekolwiek koszty.",
      },
      {
        question: "Czy pracuje Pan tylko w Mechernich i okolicy?",
        answer: "Nie. AJ-Tech ma siedzibę w Mechernich i współpracuje z wieloma firmami z powiatu Euskirchen, regionu Eifel i okolic Kolonii/Bonn. Ponieważ prawie wszystko odbywa się telefonicznie, mailowo i przez wideorozmowę, równie chętnie pracuję dla klientów z całych Niemiec.",
      },
    ],
    contact: {
      phone: "Telefon (opcjonalnie, do oddzwonienia)",
      topicLabel: "Czego dotyczy zapytanie?",
      topics: [
        "Nowa strona",
        "Ulepszenie obecnej strony",
        "Bezpłatna analiza strony",
        "Automatyzacja",
        "Coś innego",
      ],
      required: "Pole wymagane",
      privacyBefore: "Państwa dane służą wyłącznie do obsługi zapytania. Szczegóły w ",
      privacyLink: "polityce prywatności",
      privacyAfter: ".",
      sending: "Wysyłanie …",
      successTitle: "Dziękuję za zapytanie!",
      successText: "Wiadomość dotarła. Odezwę się osobiście – zwykle w ciągu jednego dnia roboczego.",
      errorText: "Niestety wysyłka się nie powiodła. Proszę napisać bezpośrednio na",
      stepsTitle: "Co dalej",
      steps: [
        "Wysyłają Państwo zapytanie – to zajmuje minutę.",
        "Odzywam się osobiście, zwykle w ciągu jednego dnia roboczego.",
        "Otrzymują Państwo bezpłatną ocenę i na życzenie jasną ofertę.",
      ],
      direct: "Wolą Państwo porozmawiać bezpośrednio?",
    },
    sticky: { call: "Zadzwoń", inquiry: "Wyślij zapytanie" },
  },

  pt: {
    nav: { about: "Sobre mim" },
    hero: {
      call: `Ligar: ${PHONE_INTL}`,
      trust: [
        "Gratuito e sem compromisso",
        "Um contacto pessoal",
        "Orçamento claro antes de qualquer custo",
      ],
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Uma só pessoa de contacto – da primeira ideia ao lançamento.",
      text: "Sou o Agon Mustafa, fundador da AJ-Tech. Não fala com um call center nem com gestores de projeto que mudam, mas diretamente com quem planeia e programa o seu site.",
      text2: "A AJ-Tech está sediada em Mechernich, na Alemanha. Trabalho para empresas do distrito de Euskirchen, do Eifel e da região de Colónia/Bona – e por telefone ou videochamada para clientes em toda a Alemanha.",
      role: "Proprietário & programador web",
      points: [
        "Contacto direto por telefone e e-mail",
        "Linguagem clara em vez de jargão técnico",
        "Avaliação honesta, mesmo que signifique começar pequeno",
      ],
    },
    faqMore: [
      {
        question: "Quanto custa um site com a AJ-Tech?",
        answer: "Depende do âmbito: número de páginas, textos e funções como marcações ou automatizações. Após a primeira conversa gratuita recebe um orçamento claro por escrito – antes de surgir qualquer custo.",
      },
      {
        question: "Trabalha apenas em Mechernich e arredores?",
        answer: "Não. A AJ-Tech está em Mechernich e trabalha com muitas empresas do distrito de Euskirchen, do Eifel e da região de Colónia/Bona. Como quase tudo é feito por telefone, e-mail e videochamada, trabalho com o mesmo gosto para clientes de toda a Alemanha.",
      },
    ],
    contact: {
      phone: "Telefone (opcional, para lhe ligarmos)",
      topicLabel: "De que se trata?",
      topics: [
        "Novo site",
        "Melhorar o site atual",
        "Análise gratuita do site",
        "Automatização",
        "Outro assunto",
      ],
      required: "Campo obrigatório",
      privacyBefore: "Os seus dados são usados apenas para tratar o seu pedido. Detalhes na ",
      privacyLink: "política de privacidade",
      privacyAfter: ".",
      sending: "A enviar …",
      successTitle: "Obrigado pelo seu pedido!",
      successText: "A sua mensagem chegou. Entrarei em contacto pessoalmente – normalmente no prazo de um dia útil.",
      errorText: "Infelizmente o envio falhou. Escreva diretamente para",
      stepsTitle: "Próximos passos",
      steps: [
        "Envia o seu pedido – demora um minuto.",
        "Entro em contacto pessoalmente, normalmente num dia útil.",
        "Recebe uma avaliação gratuita e, se quiser, um orçamento claro.",
      ],
      direct: "Prefere falar diretamente?",
    },
    sticky: { call: "Ligar", inquiry: "Enviar pedido" },
  },

  ar: {
    nav: { about: "من أنا" },
    hero: {
      call: `اتصل: ${PHONE_INTL}`,
      trust: [
        "مجاناً ودون أي التزام",
        "شخص تواصل واحد",
        "عرض واضح قبل أي تكلفة",
      ],
    },
    about: {
      eyebrow: "من أنا",
      title: "شخص تواصل واحد – من الفكرة الأولى حتى الإطلاق.",
      text: "أنا أغون مصطفى، مؤسس AJ-Tech. لن تتحدث مع مركز اتصال أو مع مديري مشاريع يتغيرون، بل مباشرة مع الشخص الذي يخطط موقعك ويبرمجه.",
      text2: "يقع مقر AJ-Tech في مدينة ميشرنيش في ألمانيا. أعمل لصالح الشركات في منطقة أويسكيرشن وإيفل ومنطقة كولونيا/بون، وعبر الهاتف أو مكالمات الفيديو لعملاء في جميع أنحاء ألمانيا.",
      role: "المالك ومطوّر المواقع",
      points: [
        "تواصل مباشر عبر الهاتف والبريد الإلكتروني",
        "لغة مفهومة بدلاً من المصطلحات التقنية",
        "تقييم صادق، حتى لو كان يعني البدء بخطوة صغيرة",
      ],
    },
    faqMore: [
      {
        question: "كم تكلفة موقع إلكتروني لدى AJ-Tech؟",
        answer: "يعتمد ذلك على حجم المشروع: عدد الصفحات والنصوص والوظائف مثل الحجوزات أو الأتمتة. بعد الاستشارة الأولى المجانية تحصل على عرض مكتوب وواضح قبل نشوء أي تكلفة.",
      },
      {
        question: "هل تعمل فقط في ميشرنيش وما حولها؟",
        answer: "لا. يقع مقر AJ-Tech في ميشرنيش ويعمل مع العديد من الشركات في منطقة أويسكيرشن وإيفل ومنطقة كولونيا/بون. وبما أن معظم العمل يتم عبر الهاتف والبريد الإلكتروني ومكالمات الفيديو، أعمل بكل سرور لعملاء في جميع أنحاء ألمانيا.",
      },
    ],
    contact: {
      phone: "الهاتف (اختياري، لمعاودة الاتصال)",
      topicLabel: "ما موضوع طلبك؟",
      topics: [
        "موقع جديد",
        "تحسين الموقع الحالي",
        "تحليل مجاني للموقع",
        "أتمتة",
        "موضوع آخر",
      ],
      required: "حقل إلزامي",
      privacyBefore: "تُستخدم بياناتك فقط لمعالجة طلبك. التفاصيل في ",
      privacyLink: "سياسة الخصوصية",
      privacyAfter: ".",
      sending: "جارٍ الإرسال …",
      successTitle: "شكراً لطلبك!",
      successText: "وصلت رسالتك. سأتواصل معك شخصياً، عادةً خلال يوم عمل واحد.",
      errorText: "للأسف لم ينجح الإرسال. يُرجى الكتابة مباشرة إلى",
      stepsTitle: "الخطوات التالية",
      steps: [
        "ترسل طلبك – يستغرق ذلك دقيقة واحدة.",
        "أتواصل معك شخصياً، عادةً خلال يوم عمل واحد.",
        "تحصل على تقييم مجاني، وإن رغبت على عرض واضح.",
      ],
      direct: "تفضّل التحدث مباشرة؟",
    },
    sticky: { call: "اتصال", inquiry: "إرسال طلب" },
  },

  ru: {
    nav: { about: "Обо мне" },
    hero: {
      call: `Позвонить: ${PHONE_INTL}`,
      trust: [
        "Бесплатно и без обязательств",
        "Один личный контакт",
        "Понятное предложение до любых расходов",
      ],
    },
    about: {
      eyebrow: "Обо мне",
      title: "Один контакт – от первой идеи до запуска.",
      text: "Меня зовут Агон Мустафа, я основатель AJ-Tech. Вы общаетесь не с колл-центром и не с меняющимися менеджерами проектов, а напрямую с человеком, который планирует и программирует ваш сайт.",
      text2: "AJ-Tech находится в Мехернихе, Германия. Я работаю для компаний округа Ойскирхен, региона Айфель и района Кёльн/Бонн, а по телефону или видеосвязи – для клиентов по всей Германии.",
      role: "Владелец и веб-разработчик",
      points: [
        "Прямая связь по телефону и e-mail",
        "Понятный язык вместо технического жаргона",
        "Честная оценка, даже если это значит начать с малого",
      ],
    },
    faqMore: [
      {
        question: "Сколько стоит сайт в AJ-Tech?",
        answer: "Это зависит от объёма: количества страниц, текстов и функций, например онлайн-записи или автоматизаций. После бесплатной первой консультации вы получите понятное письменное предложение – до возникновения каких-либо расходов.",
      },
      {
        question: "Вы работаете только в Мехернихе и окрестностях?",
        answer: "Нет. AJ-Tech находится в Мехернихе и работает со многими компаниями округа Ойскирхен, региона Айфель и района Кёльн/Бонн. Поскольку почти всё происходит по телефону, e-mail и видеосвязи, я с удовольствием работаю и для клиентов по всей Германии.",
      },
    ],
    contact: {
      phone: "Телефон (необязательно, для обратного звонка)",
      topicLabel: "О чём идёт речь?",
      topics: [
        "Новый сайт",
        "Улучшить текущий сайт",
        "Бесплатный анализ сайта",
        "Автоматизация",
        "Другое",
      ],
      required: "Обязательное поле",
      privacyBefore: "Ваши данные используются только для обработки запроса. Подробнее в ",
      privacyLink: "политике конфиденциальности",
      privacyAfter: ".",
      sending: "Отправка …",
      successTitle: "Спасибо за ваш запрос!",
      successText: "Сообщение получено. Я свяжусь с вами лично – обычно в течение одного рабочего дня.",
      errorText: "К сожалению, отправка не удалась. Пожалуйста, напишите напрямую на",
      stepsTitle: "Что дальше",
      steps: [
        "Вы отправляете запрос – это займёт минуту.",
        "Я связываюсь с вами лично, обычно в течение рабочего дня.",
        "Вы получаете бесплатную оценку и, по желанию, понятное предложение.",
      ],
      direct: "Предпочитаете поговорить напрямую?",
    },
    sticky: { call: "Позвонить", inquiry: "Отправить запрос" },
  },
};
