import React from "react";

const Impressum: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-white space-y-6">
      <div
        dangerouslySetInnerHTML={{
          __html: `
<h1>Impressum</h1>

<p>Agon Mustafa<br />
Mechernicher Weg 88<br />
53894 Mechernich</p>

<h2>Kontakt</h2>
<p>Telefon: +491738828927<br />
E-Mail: agon.mustafa@aj-tech.de</p>

<h2>Redaktionell verantwortlich</h2>
<p>Agon Mustafa</p>

<h2>Verbraucher&shy;streit&shy;beilegung / Universalschlichtungsstelle</h2>
<p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

<h2>Zentrale Kontaktstelle nach dem Digital Services Act (DSA)</h2>
<p>Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11, 12 DSA erreichen Sie wie folgt:</p>
<p>E-Mail: agon.mustafa@aj-tech.de<br />
Telefon: +491738828927</p>
<p>Die für den Kontakt zur Verfügung stehenden Sprachen sind: Deutsch, Englisch.</p>

<p>Quelle: https://www.e-recht24.de/impressum-generator.html</p>
      `,
        }}
      />
    </div>
  );
};

export default Impressum;
