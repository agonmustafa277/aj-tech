import { useEffect, useRef, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "../i18n/LanguageContext";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "../i18n/extra";

type Status = "idle" | "sending" | "success" | "error";

// Sendet die Anfrage an /kontakt.php (liegt in public/ und läuft auf dem
// PHP-Webspace bei hosting.de). Kein E-Mail-Programm beim Besucher nötig.
const ContactForm = () => {
  const { t, language } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const startedAt = useRef<number>(0);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("dauer", String(Math.round((Date.now() - startedAt.current) / 1000)));
    data.set("sprache", language);
    data.set("seite", window.location.href);

    setStatus("sending");

    try {
      const response = await fetch("/kontakt.php", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const result = (await response.json().catch(() => null)) as
        | { ok?: boolean }
        | null;

      if (response.ok && result?.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="grid content-center gap-4 rounded-3xl bg-white p-8 text-slate-950 outline-none"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl font-black text-green-700">
          ✓
        </div>
        <h3 className="text-2xl font-black">{t.contact.successTitle}</h3>
        <p className="text-slate-600">{t.contact.successText}</p>
      </div>
    );
  }

  const fieldClass =
    "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15";

  return (
    <form
      onSubmit={handleSubmit}
      className="relative grid gap-4 rounded-3xl bg-white p-5 text-slate-950 sm:p-7"
      noValidate={false}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="font-bold" htmlFor="cf-name">
            {t.contact.name} <span className="text-blue-600" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            autoComplete="name"
            required
            maxLength={120}
            className={fieldClass}
          />
        </div>

        <div>
          <label className="font-bold" htmlFor="cf-email">
            {t.contact.email} <span className="text-blue-600" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={200}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label className="font-bold" htmlFor="cf-phone">
          {t.contact.phone}
        </label>
        <input
          id="cf-phone"
          name="telefon"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          maxLength={40}
          className={fieldClass}
        />
      </div>

      <fieldset>
        <legend className="font-bold">{t.contact.topicLabel}</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {t.contact.topics.map((topic) => (
            <label key={topic} className="cursor-pointer">
              <input
                type="radio"
                name="thema"
                value={topic}
                className="peer sr-only"
              />
              <span className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-blue-600/25 hover:border-blue-600">
                {topic}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="font-bold" htmlFor="cf-website">
          {t.contact.website}
        </label>
        <input
          id="cf-website"
          name="website"
          type="text"
          inputMode="url"
          autoComplete="url"
          placeholder="www.ihre-firma.de"
          maxLength={200}
          className={fieldClass}
        />
      </div>

      <div>
        <label className="font-bold" htmlFor="cf-message">
          {t.contact.message}
        </label>
        <textarea
          id="cf-message"
          name="nachricht"
          rows={4}
          maxLength={5000}
          placeholder={t.contact.placeholder}
          className={`${fieldClass} min-h-32 resize-y`}
        />
      </div>

      {/* Spam-Falle: für Menschen unsichtbar, Bots füllen sie aus. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="cf-firma">Firma-Webseite</label>
        <input id="cf-firma" name="firma_url" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="text-xs leading-relaxed text-slate-500">
        <span className="text-blue-600" aria-hidden="true">*</span> {t.contact.required}.{" "}
        {t.contact.privacyBefore}
        <Link to="/datenschutz" className="font-semibold text-blue-700 underline underline-offset-2">
          {t.contact.privacyLink}
        </Link>
        {t.contact.privacyAfter}
      </p>

      {status === "error" && (
        <p role="alert" className="rounded-2xl bg-red-50 p-4 text-sm text-red-800">
          {t.contact.errorText}{" "}
          <a href={`mailto:${EMAIL}`} className="font-bold underline">
            {EMAIL}
          </a>{" "}
          · <a href={PHONE_HREF} className="font-bold underline">{PHONE_DISPLAY}</a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-blue-600 px-6 py-4 text-base font-extrabold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600/30 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? t.contact.sending : t.contact.button}
      </button>
    </form>
  );
};

export default ContactForm;
