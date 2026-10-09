import { useEffect, useState } from "react";

import { useLanguage } from "../i18n/LanguageContext";
import { PHONE_HREF } from "../i18n/extra";

// Feste Leiste am unteren Rand auf dem Smartphone: Anrufen oder Anfrage.
// Erscheint nach dem Hero und verschwindet, sobald das Formular sichtbar ist.
const StickyContactBar = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("kontakt");

    // Sichtbar zwischen Hero und Kontaktbereich, danach (Formular, Footer) nicht mehr.
    const update = () => {
      const contactTop = contact?.getBoundingClientRect().top ?? Infinity;
      setVisible(window.scrollY > 500 && contactTop > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/95 p-3 backdrop-blur transition-transform duration-300 motion-reduce:transition-none md:hidden ${visible ? "translate-y-0" : "pointer-events-none translate-y-full"}`}
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={PHONE_HREF}
          tabIndex={visible ? 0 : -1}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-4 py-3 text-sm font-extrabold text-white"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {t.sticky.call}
        </a>
        <a
          href="#kontakt"
          tabIndex={visible ? 0 : -1}
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-3 text-sm font-extrabold text-white"
        >
          {t.sticky.inquiry}
        </a>
      </div>
    </div>
  );
};

export default StickyContactBar;
