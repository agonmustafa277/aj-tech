const Impressum = () => {
  return (
    <main className="min-h-screen bg-white px-4 pb-20 pt-32 sm:pt-36 text-slate-950 sm:px-6">
      <section className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          Impressum
        </h1>

        <div className="mt-10 space-y-10 text-slate-700">
          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">
              Angaben gemäß § 5 DDG
            </h2>

            <p className="mt-4 leading-relaxed">
              AJ-Tech
              <br />
              Inhaber: Agon Mustafa
              <br />
              Mechernicher Weg 88
              <br />
              53894 Mechernich
              <br />
              Deutschland
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">Kontakt</h2>

            <p className="mt-4 leading-relaxed">
              Telefon:{" "}
              <a
                href="tel:+491738828927"
                className="font-bold text-blue-600 transition hover:text-blue-700"
              >
                +49 173 8828927
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:agon.mustafa@aj-tech.de"
                className="font-bold text-blue-600 transition hover:text-blue-700"
              >
                agon.mustafa@aj-tech.de
              </a>
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">
              Redaktionell verantwortlich
            </h2>

            <p className="mt-4 leading-relaxed">Agon Mustafa</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>

            <p className="mt-4 leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <h2 className="text-2xl font-black text-slate-950">
              Zentrale Kontaktstelle nach dem Digital Services Act (Verordnung
              (EU) 2022/2065)
            </h2>

            <p className="mt-4 leading-relaxed">
              Unsere zentrale Kontaktstelle für Nutzer und Behörden nach Art. 11,
              12 DSA erreichen Sie wie folgt:
            </p>

            <p className="mt-4 leading-relaxed">
              E-Mail:{" "}
              <a
                href="mailto:agon.mustafa@aj-tech.de"
                className="font-bold text-blue-600 transition hover:text-blue-700"
              >
                agon.mustafa@aj-tech.de
              </a>
              <br />
              Telefon:{" "}
              <a
                href="tel:+491738828927"
                className="font-bold text-blue-600 transition hover:text-blue-700"
              >
                +49 173 8828927
              </a>
            </p>

            <p className="mt-4 leading-relaxed">
              Die für den Kontakt zur Verfügung stehenden Sprachen sind:
              Deutsch, Englisch.
            </p>
          </section>

          <p className="text-sm text-slate-500">
            Quelle:{" "}
            <a
              href="https://www.e-recht24.de/impressum-generator.html"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-blue-600 transition hover:text-blue-700"
            >
              e-recht24.de/impressum-generator.html
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Impressum;