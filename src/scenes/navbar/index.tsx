import { Link } from "react-router-dom";

import { useLanguage } from "../../i18n/LanguageContext";
import {
  languages,
  languageLabels,
  type Language,
} from "../../i18n/translations";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="AJ-Tech Startseite"
        >
          <img
            src="/aj-tech-logo.png"
            alt="AJ-Tech Logo"
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-bold text-slate-200 lg:flex">
          <a href="/#leistungen" className="transition hover:text-blue-300">
            {t.nav.services}
          </a>
          <a href="/#prozess" className="transition hover:text-blue-300">
            {t.nav.process}
          </a>
          <a href="/#pakete" className="transition hover:text-blue-300">
            {t.nav.packages}
          </a>
          <a href="/#faq" className="transition hover:text-blue-300">
            {t.nav.faq}
          </a>
          <a href="/#kontakt" className="transition hover:text-blue-300">
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex min-w-0 items-center gap-2">

          <div className="relative inline-flex items-center">
  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value as Language)}
    aria-label="Sprache auswählen"
    className="
      h-10
      w-[120px]
      appearance-none
      rounded-full
      border border-white/20
      bg-white/10
      px-4
      pr-9
      text-sm
      font-semibold
      text-white
      outline-none
      backdrop-blur-xl
      transition
      hover:bg-white/15
      focus:border-cyan-400
      focus:ring-2
      focus:ring-cyan-400/30
    "
  >
            {languages.map((item) => (
              <option key={item} value={item} className="bg-slate-950 text-white">
                {languageLabels[item]}
              </option>
            ))}
          </select>
  <span className="pointer-events-none absolute right-3 text-xs text-white/80">
    ▼
  </span>
</div>
          <a
            href="/#kontakt"
            className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-blue-700 md:inline-flex"
          >
            {t.nav.analysis}
          </a>

          <a
            href="/#kontakt"
            className="inline-flex rounded-full bg-blue-600 px-3 py-2 text-xs font-extrabold text-white transition hover:bg-blue-700 md:hidden"
          >
            Analyse
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;