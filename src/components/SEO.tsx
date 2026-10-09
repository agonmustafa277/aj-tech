import { Helmet } from "react-helmet-async";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.aj-tech.de/#business",
  name: "AJ-Tech",
  url: "https://www.aj-tech.de/",
  description:
    "AJ-Tech entwickelt Webseiten, Website-Relaunches und Automatisierungen für kleine Unternehmen, Handwerker und B2B-Dienstleister.",
  email: "agon.mustafa@aj-tech.de",
  telephone: "+491738828927",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mechernicher Weg 88",
    postalCode: "53894",
    addressLocality: "Mechernich",
    addressCountry: "DE",
  },
  areaServed: {
    "@type": "Country",
    name: "Deutschland",
  },
  founder: {
    "@type": "Person",
    name: "Agon Mustafa",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen von AJ-Tech",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Webseitenentwicklung",
          description:
            "Entwicklung moderner, schneller und responsiver Unternehmenswebsites.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website-Relaunch",
          description:
            "Überarbeitung bestehender Websites mit besserer Struktur, Nutzerführung und technischer Grundlage.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO-Grundoptimierung",
          description:
            "Optimierung von Meta-Daten, Überschriftenstruktur, interner Verlinkung und strukturierten Daten.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website-Wartung",
          description:
            "Regelmäßige Pflege, technische Prüfung und kleinere Website-Anpassungen.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatisierung",
          description:
            "Automatisierung von Kontaktformularen, E-Mail-Prozessen, Terminbuchungen und CRM-Anbindungen.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Formular- und CRM-Anbindung",
          description:
            "Verbindung von Website-Formularen mit E-Mail, CRM-Systemen oder Automatisierungstools.",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Was macht AJ-Tech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AJ-Tech entwickelt Webseiten, optimiert bestehende Websites und automatisiert digitale Abläufe für kleine Unternehmen und B2B-Dienstleister.",
      },
    },
    {
      "@type": "Question",
      name: "Für wen ist AJ-Tech geeignet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AJ-Tech ist geeignet für kleine Unternehmen, Handwerker, technische Dienstleister, Berater und lokale Betriebe, die mehr qualifizierte Anfragen über ihre Website gewinnen möchten.",
      },
    },
    {
      "@type": "Question",
      name: "Kann AJ-Tech bestehende Webseiten verbessern?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ja. AJ-Tech analysiert bestehende Webseiten und verbessert Struktur, Ladezeit, Kontaktwege, mobile Darstellung, Texte und technische SEO-Grundlagen.",
      },
    },
  ],
};

const SEO = () => {
  return (
    <Helmet>
      <html lang="de" />

      <title>
        AJ-Tech | Webseitenentwicklung & Automatisierung für kleine Unternehmen
      </title>

      <meta
        name="description"
        content="AJ-Tech entwickelt schnelle, SEO-optimierte Webseiten und Automatisierungen für kleine Unternehmen, Handwerker und B2B-Dienstleister. Mehr Anfragen, weniger manuelle Arbeit."
      />

      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="author" content="AJ-Tech" />
      <meta name="theme-color" content="#0f172a" />

      <link rel="canonical" href="https://www.aj-tech.de/" />

      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="AJ-Tech | Webseitenentwicklung & Automatisierung"
      />
      <meta
        property="og:description"
        content="Webseiten, Relaunches und digitale Automatisierungen für kleine Unternehmen. Klar, schnell, technisch sauber und auf Anfragen optimiert."
      />
      <meta property="og:url" content="https://www.aj-tech.de/" />
      <meta property="og:site_name" content="AJ-Tech" />

      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>

      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
};

export default SEO;