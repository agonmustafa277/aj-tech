import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import ContactForm from "./components/ContactForm";
import StickyContactBar from "./components/StickyContactBar";
import Navbar from "./scenes/navbar";
import Footer from "./scenes/Footer";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import NotFound from "./pages/NotFound";
import { useLanguage } from "./i18n/LanguageContext";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "./i18n/extra";
import { applyRouteMeta } from "./seo";

function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.55),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.28),transparent_28%),linear-gradient(135deg,#0f172a,#111827_60%,#020617)]">
      <section
        id="top"
        className="relative w-full overflow-hidden px-4 pb-20 pt-30 text-white sm:px-6 md:pb-28 md:pt-28"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <span className="inline-flex max-w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100 backdrop-blur">
              {t.hero.badge}
            </span>

            <h1 className="mt-6 hyphens-auto break-words text-[2.1rem] font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {t.hero.text}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontakt"
                className="inline-flex justify-center rounded-full bg-blue-600 px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-500"
              >
                {t.hero.primary}
              </a>

              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-4 text-base font-extrabold text-white transition hover:border-white/50 hover:bg-white/10"
              >
                <PhoneIcon />
                {t.hero.call}
              </a>
            </div>

            <ul className="mt-6 flex flex-col gap-2 text-sm font-semibold text-blue-100 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {t.hero.trust.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-green-300">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="w-full rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur sm:p-7">
            <h2 className="text-2xl font-black">{t.hero.cardTitle}</h2>

            <ul className="mt-6 grid gap-4">
              {t.hero.points.map((point) => (
                <li key={point} className="flex gap-3 text-slate-100">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-400/20 text-sm font-black text-green-300">
                    ✓
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="probleme" className="scroll-mt-24 bg-white px-4 py-20 text-slate-950 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow={t.problem.eyebrow}
            title={t.problem.title}
            text={t.problem.text}
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.problem.cards.map((card, index) => (
              <article
                key={card.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 font-black text-blue-600">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-black">{card.title}</h3>
                <p className="mt-3 text-slate-600">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="leistungen" className="scroll-mt-24 bg-slate-950 px-4 py-20 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            text={t.services.text}
            dark
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.services.cards.map((card) => (
              <DarkCard key={card.title} title={card.title} text={card.text} />
            ))}
          </div>
        </div>
      </section>

      <section id="prozess" className="scroll-mt-24 bg-white px-4 py-20 text-slate-950 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow={t.process.eyebrow}
            title={t.process.title}
            text={t.process.text}
          />

          <div className="mt-10 grid gap-4">
            {t.process.steps.map((step, index) => (
              <article
                key={step.title}
                className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:grid-cols-[auto_1fr]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 font-black text-white">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-black">{step.title}</h3>
                  <p className="mt-2 text-slate-600">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section id="ueber-mich" className="scroll-mt-28 bg-slate-50 px-4 py-20 text-slate-950 sm:px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          {/* Tipp: Ein echtes Foto (z. B. src/assets/agon.jpg) wirkt hier am stärksten. */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl">
            <div
              aria-hidden="true"
              className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-slate-950 text-3xl font-black text-white"
            >
              AM
            </div>
            <p className="mt-5 text-2xl font-black">Agon Mustafa</p>
            <p className="mt-1 text-slate-600">{t.about.role} · AJ-Tech</p>
            <p className="mt-1 text-sm text-slate-500">53894 Mechernich</p>

            <div className="mt-6 grid gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3 font-extrabold text-white transition hover:bg-blue-700"
              >
                <PhoneIcon />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex justify-center break-all rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-600 hover:text-blue-700"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          <div>
            <SectionHead eyebrow={t.about.eyebrow} title={t.about.title} />
            <p className="mt-5 text-lg text-slate-700">{t.about.text}</p>
            <p className="mt-4 text-lg text-slate-700">{t.about.text2}</p>

            <ul className="mt-6 grid gap-3">
              {t.about.points.map((point) => (
                <li key={point} className="flex gap-3 text-slate-800">
                  <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-black text-green-700">
                    ✓
                  </span>
                  <span className="font-semibold">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="branchen" className="scroll-mt-24 bg-slate-950 px-4 py-20 text-white sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow={t.industries.eyebrow}
            title={t.industries.title}
            text={t.industries.text}
            dark
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.industries.cards.map((card) => (
              <DarkCard key={card.title} title={card.title} text={card.text} />
            ))}
          </div>
        </div>
      </section>

      <section id="seo" className="scroll-mt-24 bg-white px-4 py-20 text-slate-950 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              {t.seo.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              {t.seo.title}
            </h2>

            <p className="mt-5 text-lg text-slate-600">{t.seo.text}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-xl">
            <h3 className="text-xl font-black">{t.seo.boxTitle}</h3>

            <ul className="mt-5 grid gap-3 text-slate-600">
              {t.seo.features.map((feature) => (
                <li
                  key={feature}
                  className="before:font-black before:text-green-600 before:content-['✓_']"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 bg-slate-50 px-4 py-20 text-slate-950 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} />

          <div className="mt-10 grid gap-4">
            {[...t.faq.items, ...t.faqMore].map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-24 bg-white px-4 py-20 text-slate-950 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 p-6 text-white shadow-2xl md:grid-cols-[0.95fr_1.05fr] md:p-12">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                {t.contact.title}
              </h2>

              <p className="mt-5 text-lg text-blue-100">{t.contact.text}</p>

              <h3 className="mt-10 text-sm font-black uppercase tracking-widest text-blue-200">
                {t.contact.stepsTitle}
              </h3>
              <ol className="mt-4 grid gap-4">
                {t.contact.steps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-blue-700">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-blue-50">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-10 rounded-3xl border border-white/15 bg-white/10 p-5">
                <p className="font-black">{t.contact.direct}</p>
                <div className="mt-3 grid gap-2 text-blue-50">
                  <a href={PHONE_HREF} className="inline-flex items-center gap-2 font-bold hover:text-white">
                    <PhoneIcon />
                    {PHONE_DISPLAY}
                  </a>
                  <a href={`mailto:${EMAIL}`} className="break-all font-bold hover:text-white">
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHead({
  eyebrow,
  title,
  text,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-sm font-black uppercase tracking-widest ${
          dark ? "text-blue-400" : "text-blue-600"
        }`}
      >
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
        {title}
      </h2>

      {text && (
        <p className={`mt-5 text-lg ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

function DarkCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 text-slate-300">{text}</p>
    </article>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <summary className="cursor-pointer text-lg font-black">{question}</summary>
      <p className="mt-4 text-slate-600">{answer}</p>
    </details>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    applyRouteMeta(location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-950">
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-slate-950"
      >
        Zum Inhalt springen
      </a>

      <Navbar />

      <div id="inhalt">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
      {location.pathname === "/" && <StickyContactBar />}
    </div>
  );
}

export default App;
