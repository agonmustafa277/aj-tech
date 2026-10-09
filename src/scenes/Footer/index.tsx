import { Link } from "react-router-dom";

import { useLanguage } from "../../i18n/LanguageContext";
import logoUrl from "../../assets/aj-tech-logo-white.svg";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "../../i18n/extra";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t border-white/10 bg-slate-950 px-4 py-12 text-white sm:px-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <img
            src={logoUrl}
            alt="AJ-Tech Logo"
            width={160}
            height={160}
            loading="lazy"
            className="h-24 w-auto self-start"
          />

          <p className="text-sm leading-relaxed text-slate-300">
            {t.footer.description}
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="text-sm font-bold text-slate-300 transition hover:text-blue-300"
          >
            {EMAIL}
          </a>
          <a
            href={PHONE_HREF}
            className="text-sm font-bold text-slate-300 transition hover:text-blue-300"
          >
            {PHONE_DISPLAY}
          </a>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-black">{t.footer.servicesTitle}</h2>

          <ul className="space-y-2 text-sm text-slate-300">
            {t.footer.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-black">{t.footer.legalTitle}</h2>

          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <Link to="/datenschutz" className="transition hover:text-blue-300">
                {t.footer.privacy}
              </Link>
            </li>
            <li>
              <Link to="/impressum" className="transition hover:text-blue-300">
                {t.footer.imprint}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-black">{t.footer.contactTitle}</h2>

          <ul className="space-y-2 text-sm text-slate-300">
            <li>AJ-Tech</li>
            <li>Inh.: Agon Mustafa</li>
            <li>Mechernicher Weg 88</li>
            <li>53894 Mechernich</li>
            <li>Deutschland</li>
            <li>
              <a href="/#kontakt" className="font-bold text-blue-300 transition hover:text-blue-200">
                {t.footer.analysis}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} AJ-Tech – {t.footer.rights}
      </div>
    </footer>
  );
};

export default Footer;