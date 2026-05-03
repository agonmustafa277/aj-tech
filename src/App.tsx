import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { gsap } from "gsap";

import Navbar from "./scenes/navbar";
import Footer from "./scenes/Footer";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import { useLanguage } from "./i18n/LanguageContext";

function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline.to(".loading-page", {
      opacity: 0,
      duration: 1.2,
      delay: 1.8,
      ease: "power2.out",
    });

    timeline.set(".loading-page", {
      display: "none",
      pointerEvents: "none",
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-gradient-to-r from-[#2c5364] to-[#0f2027]">
      <section
        id="top"
        className="relative w-full overflow-hidden px-4 pb-20 pt-20 text-white sm:px-6 md:pb-28 md:pt-28"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <span className="inline-flex max-w-full rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100 backdrop-blur">
              {t.hero.badge}
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              {t.hero.text}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontakt"
                className="inline-flex justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-extrabold text-white shadow-lg transition hover:bg-blue-700 sm:text-base"
              >
                {t.hero.primary}
              </a>

              <a
                href="#leistungen"
                className="inline-flex justify-center rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-extrabold text-slate-950 transition hover:border-blue-400 hover:text-blue-600 sm:text-base"
              >
                {t.hero.secondary}
              </a>
            </div>
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

      <section id="probleme" className="bg-white px-4 py-20 text-slate-950 sm:px-6">
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

      <section id="leistungen" className="bg-slate-950 px-4 py-20 text-white sm:px-6">
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

      <section id="prozess" className="bg-white px-4 py-20 text-slate-950 sm:px-6">
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

      <section id="pakete" className="bg-slate-50 px-4 py-20 text-slate-950 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            eyebrow={t.packages.eyebrow}
            title={t.packages.title}
            text={t.packages.text}
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.packages.cards.map((card, index) => (
              <PricingCard
                key={card.title}
                highlighted={index === 1}
                title={card.title}
                description={card.description}
                price={card.price}
                button={card.button}
                features={card.features}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="branchen" className="bg-slate-950 px-4 py-20 text-white sm:px-6">
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

      <section id="seo" className="bg-white px-4 py-20 text-slate-950 sm:px-6">
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

      <section id="faq" className="bg-slate-50 px-4 py-20 text-slate-950 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <SectionHead eyebrow={t.faq.eyebrow} title={t.faq.title} />

          <div className="mt-10 grid gap-4">
            {t.faq.items.map((item) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-white px-4 py-20 text-slate-950 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 rounded-[2rem] bg-gradient-to-br from-blue-600 to-slate-950 p-6 text-white shadow-2xl md:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                {t.contact.title}
              </h2>

              <p className="mt-5 text-lg text-blue-100">{t.contact.text}</p>
            </div>

            <form
              action="mailto:kontakt@aj-tech.de"
              method="post"
              encType="text/plain"
              className="grid gap-4 rounded-3xl bg-white p-5 text-slate-950"
            >
              <InputField
                id="name"
                label={t.contact.name}
                name="Name"
                autoComplete="name"
                required
              />

              <InputField
                id="email"
                label={t.contact.email}
                name="E-Mail"
                type="email"
                autoComplete="email"
                required
              />

              <InputField
                id="website"
                label={t.contact.website}
                name="Website"
                type="url"
                placeholder="https://"
              />

              <div>
                <label className="font-bold" htmlFor="message">
                  {t.contact.message}
                </label>

                <textarea
                  id="message"
                  name="Nachricht"
                  placeholder={t.contact.placeholder}
                  className="mt-2 min-h-32 w-full resize-y rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-blue-600 px-6 py-3 font-extrabold text-white transition hover:bg-blue-700"
              >
                {t.contact.button}
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="loading-page fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-r from-[#2c5364] to-[#0f2027]">
        <img
          src="/aj-tech-logo.png"
          alt="AJ-Tech Logo"
          className="w-52 animate-pulse sm:w-72"
        />
      </div>
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

function PricingCard({
  title,
  description,
  price,
  features,
  button,
  highlighted = false,
}: {
  title: string;
  description: string;
  price: string;
  features: string[];
  button: string;
  highlighted?: boolean;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl border bg-white p-6 shadow-xl ${
        highlighted ? "border-blue-600" : "border-slate-200"
      }`}
    >
      <h3 className="text-2xl font-black">{title}</h3>

      <p className="mt-3 text-slate-600">{description}</p>

      <div className="mt-5 text-4xl font-black tracking-tight">{price}</div>

      <ul className="mt-5 grid gap-3 text-slate-600">
        {features.map((feature) => (
          <li
            key={feature}
            className="before:font-black before:text-green-600 before:content-['✓_']"
          >
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#kontakt"
        className={`mt-8 inline-flex justify-center rounded-full px-6 py-3 font-extrabold transition ${
          highlighted
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-slate-200 bg-white text-slate-950 hover:border-blue-600 hover:text-blue-600"
        }`}
      >
        {button}
      </a>
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

function InputField({
  id,
  label,
  name,
  type = "text",
  placeholder,
  autoComplete,
  required = false,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-bold" htmlFor={id}>
        {label}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-blue-600"
      />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-r from-[#2c5364] to-[#0f2027]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;