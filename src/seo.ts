import { getTranslation } from "./i18n/LanguageContext";
import { EMAIL, PHONE_INTL } from "./i18n/extra";

// Zentrale SEO-Daten. Werden beim Build ins statische HTML geschrieben
// (scripts/prerender.mjs) und beim Seitenwechsel im Browser aktualisiert.

export const SITE_URL = "https://www.aj-tech.de";

export type RouteMeta = {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
};

export const routeMeta: Record<string, RouteMeta> = {
  "/": {
    path: "/",
    title: "Webdesign Mechernich | Websites für kleine Unternehmen | AJ-Tech",
    description:
      "Webdesign aus Mechernich für Handwerker & kleine Betriebe im Kreis Euskirchen: schnelle, SEO-optimierte Websites, die Anfragen bringen. Jetzt kostenlos anfragen.",
  },
  "/impressum": {
    path: "/impressum",
    title: "Impressum | AJ-Tech Webdesign Mechernich",
    description:
      "Impressum von AJ-Tech, Inhaber Agon Mustafa, Mechernicher Weg 88, 53894 Mechernich.",
  },
  "/datenschutz": {
    path: "/datenschutz",
    title: "Datenschutzerklärung | AJ-Tech Webdesign Mechernich",
    description:
      "Datenschutzerklärung von AJ-Tech: welche Daten beim Besuch der Website und bei Anfragen verarbeitet werden.",
  },
  "/404": {
    path: "/404",
    title: "Seite nicht gefunden | AJ-Tech",
    description: "Diese Seite existiert nicht.",
    noindex: true,
  },
};

export function getRouteMeta(pathname: string): RouteMeta {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return routeMeta[clean] ?? routeMeta["/404"];
}

const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export function headTags(meta: RouteMeta): string {
  const url = `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;
  const esc = (value: string) =>
    value
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;");

  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />`,
  ];

  if (!meta.noindex) {
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:locale" content="de_DE" />`,
      `<meta property="og:site_name" content="AJ-Tech" />`,
      `<meta property="og:title" content="${esc(meta.title)}" />`,
      `<meta property="og:description" content="${esc(meta.description)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${OG_IMAGE}" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
    );
  }

  if (meta.path === "/") {
    for (const schema of homeSchemas()) {
      tags.push(
        `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`,
      );
    }
  }

  return tags.join("\n    ");
}

function homeSchemas() {
  const de = getTranslation("de");

  const business = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#business`,
    name: "AJ-Tech",
    alternateName: "AJ-Tech Webdesign Mechernich",
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/aj-tech-logo.svg`,
    image: OG_IMAGE,
    description:
      "AJ-Tech entwickelt Websites, Website-Relaunches und Automatisierungen für kleine Unternehmen, Handwerker und Dienstleister in Mechernich, im Kreis Euskirchen und deutschlandweit.",
    email: EMAIL,
    telephone: PHONE_INTL.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mechernicher Weg 88",
      postalCode: "53894",
      addressLocality: "Mechernich",
      addressRegion: "Nordrhein-Westfalen",
      addressCountry: "DE",
    },
    areaServed: [
      { "@type": "City", name: "Mechernich" },
      { "@type": "AdministrativeArea", name: "Kreis Euskirchen" },
      { "@type": "Place", name: "Eifel" },
      { "@type": "City", name: "Köln" },
      { "@type": "City", name: "Bonn" },
      { "@type": "Country", name: "Deutschland" },
    ],
    founder: { "@type": "Person", name: "Agon Mustafa" },
    knowsLanguage: ["de", "en"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Leistungen von AJ-Tech",
      itemListElement: de.services.cards.map((card) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: card.title,
          description: card.text,
        },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: "AJ-Tech",
    inLanguage: "de-DE",
    publisher: { "@id": `${SITE_URL}/#business` },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...de.faq.items, ...de.faqMore].map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return [business, website, faq];
}

// Aktualisiert Titel, Beschreibung und Canonical beim Seitenwechsel im Browser.
export function applyRouteMeta(pathname: string) {
  const meta = getRouteMeta(pathname);
  document.title = meta.title;

  const setAttr = (selector: string, attr: string, value: string) => {
    const element = document.head.querySelector(selector);
    if (element) element.setAttribute(attr, value);
  };

  const url = `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;
  setAttr('meta[name="description"]', "content", meta.description);
  setAttr('link[rel="canonical"]', "href", url);
  setAttr('meta[property="og:url"]', "content", url);
  setAttr('meta[property="og:title"]', "content", meta.title);
  setAttr('meta[property="og:description"]', "content", meta.description);
}
