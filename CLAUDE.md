# AJ-Tech Webseite

Firmenwebseite von **AJ-Tech** (https://www.aj-tech.de), Inhaber Agon Mustafa, Mechernich.
Webdesign, Relaunches und Automatisierungen für kleine Unternehmen, Handwerker und Dienstleister.

## Technik

- Vite + React 19 + TypeScript + Tailwind CSS 4, React Router 7
- **Vorgerendert:** `npm run build` erzeugt für jede Route fertiges HTML
  (`src/entry-server.tsx` + `scripts/prerender.mjs`). Google sieht Inhalt, Titel und Meta-Daten ohne JavaScript.
  Der Browser "weckt" das HTML danach auf (`hydrateRoot` in `src/main.tsx`).
- **SEO-Daten zentral in `src/seo.ts`:** Titel, Beschreibung, Canonical je Route, JSON-LD (ProfessionalService, WebSite, FAQPage).
  Neue Seite = Route in `App.tsx` + Eintrag in `routeMeta` + Eintrag in `scripts/prerender.mjs` + `public/sitemap.xml`.
- **Texte:** `src/i18n/translations.ts` (Grundtexte) und `src/i18n/extra.ts` (Über mich, Formular, Anruf-Buttons, zusätzliche FAQ),
  zusammengeführt in `LanguageContext.tsx`. 13 Sprachen; Deutsch ist die Hauptsprache und die einzige, die Google sieht.
  TypeScript erzwingt, dass jede Sprache alle Texte hat.
- **Kontaktformular:** `src/components/ContactForm.tsx` sendet an `public/kontakt.php` (PHP auf hosting.de).
  Versand per `mail()`, optional SMTP über `kontakt-config.php` (Vorlage: `kontakt-config.example.php`, nie mit Passwort committen).
  Spam-Schutz: Honeypot-Feld, Mindest-Ausfüllzeit, max. 5 Anfragen/Stunde je IP.
- Schrift: Inter, lokal über `@fontsource-variable/inter` (DSGVO: keine Google-Server).
- `public/.htaccess`: saubere URLs (`/impressum`), 404-Seite, Caching, Komprimierung.

## Befehle

- `npm run dev` – Entwicklung (Formular funktioniert dort nicht, weil kein PHP läuft)
- `npm run build` – Build nach `dist/`
- Veröffentlichen: **kompletten Inhalt von `dist/`** per FTP/SFTP in das Webverzeichnis bei hosting.de laden
  (alte Dateien in `assets/` vorher löschen). `.htaccess` ist eine versteckte Datei, mit hochladen.

## Vorgaben

- Hauptsprache Deutsch, Anrede **Sie**; Über-mich-Bereich in Ich-Form
- Eine E-Mail-Adresse überall: **agon.mustafa@aj-tech.de**, Telefon 0173 8828927 (Konstanten in `src/i18n/extra.ts`)
- Keine erfundenen Referenzen, Bewertungen oder Zahlen auf der Seite
- DSGVO: keine externen Dienste/Tracker ohne Einwilligung; Datenschutzerklärung anpassen, wenn sich etwas ändert
- Impressum nach § 5 DDG

## Offene Punkte

- [ ] Echtes Foto für den Über-mich-Bereich (ersetzt die Initialen „AM“ in `App.tsx`)
- [ ] Echte Referenzen/Kundenstimmen ergänzen, sobald vorhanden
- [ ] Google Unternehmensprofil anlegen und in Search Console die Sitemap einreichen
- [ ] Die Antwortzeit „innerhalb eines Werktags“ in `extra.ts` bestätigen oder ändern
- [ ] Ungenutzte Altdateien: `src/scenes/cards`, `src/scenes/ueber_uns`, `src/scenes/Kontakt`, alte Logos in `src/assets`
