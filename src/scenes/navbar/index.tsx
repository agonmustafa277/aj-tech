import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";

import logoUrl from "../../assets/aj-tech-logo-white.svg";
import { useLanguage } from "../../i18n/LanguageContext";
import {
  languages,
  languageLabels,
  type Language,
} from "../../i18n/translations";

const glassStyle = {
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
};

type BackgroundTheme = "light" | "dark";

// Erkennt CSS-Hintergrundfarben direkt hinter dem Logo. Bei Bildern und
// Verläufen die betreffende Sektion mit data-nav-theme="light" oder "dark"
// kennzeichnen. Die Angabe beschreibt den Hintergrund, nicht die Logofarbe.
const getBackgroundTheme = (
  x: number,
  y: number,
  header: HTMLElement,
  context: CanvasRenderingContext2D,
): BackgroundTheme | null => {
  const layers: Uint8ClampedArray[] = [];

  for (const element of document.elementsFromPoint(x, y)) {
    if (header.contains(element)) continue;

    const explicitTheme = element
      .closest("[data-nav-theme]")
      ?.getAttribute("data-nav-theme");

    if (explicitTheme === "light" || explicitTheme === "dark") {
      return explicitTheme;
    }

    const style = getComputedStyle(element);

    // DOM-Hintergrundfarben erlauben keine verlässliche Pixelanalyse
    // von Bildern, Videos oder Verläufen. Dafür gilt die Kennzeichnung oben.
    if (
      style.backgroundImage !== "none" ||
      ["IMG", "VIDEO", "CANVAS", "SVG"].includes(element.tagName.toUpperCase())
    ) {
      return null;
    }

    // Der Browser normalisiert auch moderne CSS-Farben wie oklch().
    context.clearRect(0, 0, 1, 1);
    context.fillStyle = "transparent";
    context.fillStyle = style.backgroundColor;
    context.fillRect(0, 0, 1, 1);
    const color = context.getImageData(0, 0, 1, 1).data;
    layers.push(color);
    if (color[3] === 255) break;
  }

  // Transparente Ebenen über dem standardmäßig weißen Seitenhintergrund.
  let red = 255;
  let green = 255;
  let blue = 255;

  for (const color of layers.reverse()) {
    const alpha = color[3] / 255;
    red = color[0] * alpha + red * (1 - alpha);
    green = color[1] * alpha + green * (1 - alpha);
    blue = color[2] * alpha + blue * (1 - alpha);
  }

  const linear = (channel: number) => {
    const value = channel / 255;
    return value <= 0.04045
      ? value / 12.92
      : ((value + 0.055) / 1.055) ** 2.4;
  };

  const luminance =
    0.2126 * linear(red) + 0.7152 * linear(green) + 0.0722 * linear(blue);

  return luminance > 0.179 ? "light" : "dark";
};

const observeBackgroundTheme = (
  header: HTMLElement,
  logo: HTMLImageElement,
  onChange: (theme: BackgroundTheme) => void,
) => {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) return () => {};

  let frame = 0;
  let disposed = false;
  let previousTheme: BackgroundTheme | null = null;

  const update = () => {
    frame = 0;
    if (disposed) return;
    const rect = logo.getBoundingClientRect();
    const theme = getBackgroundTheme(
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      header,
      context,
    ) ?? "dark";

    if (theme !== previousTheme) {
      previousTheme = theme;
      onChange(theme);
    }
  };

  const schedule = () => {
    if (!disposed && !frame) frame = requestAnimationFrame(update);
  };

  // Aktualisiert auch nach Routenwechseln und nachgeladenen Inhalten.
  const mutations = new MutationObserver((records) => {
    if (records.some((record) => !header.contains(record.target))) schedule();
  });
  mutations.observe(document.documentElement, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["class", "style", "data-nav-theme"],
  });

  const resize = new ResizeObserver(schedule);
  resize.observe(document.documentElement);
  resize.observe(logo);
  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

  window.addEventListener("scroll", schedule, { passive: true, capture: true });
  window.addEventListener("resize", schedule);
  window.addEventListener("load", schedule, true);
  colorScheme.addEventListener("change", schedule);
  update();

  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    mutations.disconnect();
    resize.disconnect();
    window.removeEventListener("scroll", schedule, true);
    window.removeEventListener("resize", schedule);
    window.removeEventListener("load", schedule, true);
    colorScheme.removeEventListener("change", schedule);
  };
};

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
  >
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

// Der Hero-Hintergrund reicht bis zum oberen Seitenrand.
// Dem Hero-Inhalt mit pt-28 sm:pt-32 Abstand zur fixierten Navbar geben.
const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [backgroundTheme, setBackgroundTheme] = useState<BackgroundTheme>("dark");
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const isLight = backgroundTheme === "light";

  const focusRing = `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${isLight ? "focus-visible:ring-blue-600 focus-visible:ring-offset-white" : "focus-visible:ring-cyan-300 focus-visible:ring-offset-slate-950"}`;
  const linkColors = isLight
    ? "text-black/80 hover:bg-black/5 hover:text-black"
    : "text-white/80 hover:bg-white/10 hover:text-white";
  const controlColors = isLight
    ? "border-black/10 bg-black/5 text-black hover:border-black/20 hover:bg-black/10"
    : "border-white/20 bg-white/5 text-white hover:border-white/30 hover:bg-white/10";

  const links = [
    { href: "/#leistungen", label: t.nav.services },
    { href: "/#prozess", label: t.nav.process },
    { href: "/#ueber-mich", label: t.nav.about },
    { href: "/#faq", label: t.nav.faq },
    { href: "/#kontakt", label: t.nav.contact },
  ];

  const analysisClass = `group items-center justify-center gap-3 rounded-full border border-blue-400/40 bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_24px_rgba(37,99,235,0.25),inset_0_1px_0_rgba(255,255,255,0.18)] transition-colors duration-200 hover:bg-blue-500 motion-reduce:transition-none ${focusRing}`;

  useEffect(() => {
    const header = headerRef.current;
    const logo = logoRef.current;
    if (!header || !logo) return;
    return observeBackgroundTheme(header, logo, setBackgroundTheme);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Entspricht dem Standard-Breakpoint "xl" in Tailwind.
    const desktop = window.matchMedia("(min-width: 1280px)");
    const handleDesktop = () => {
      if (desktop.matches) setIsMenuOpen(false);
    };

    handleDesktop();
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    desktop.addEventListener("change", handleDesktop);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      desktop.removeEventListener("change", handleDesktop);
    };
  }, [isMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-4 ${isLight ? "text-black" : "text-white"}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsMenuOpen(false);
        }
      }}
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="pointer-events-auto relative rounded-full">
          {/* Transparente, runde Glasfläche: Der Hero-Hintergrund bleibt sichtbar. */}
          <div
            aria-hidden="true"
            style={glassStyle}
            className={`pointer-events-none absolute inset-0 rounded-full border bg-transparent shadow-[0_12px_40px_rgba(0,0,0,0.12)] ${isLight ? "border-black/10" : "border-white/20"}`}
          />
          <div className="relative flex min-h-[80px] items-center justify-between gap-2 px-4 sm:gap-4 sm:px-6">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              aria-label="AJ-Tech Startseite"
              className={`shrink-0 rounded-lg ${focusRing}`}
            >
              <img
                ref={logoRef}
                src={logoUrl}
                alt="AJ-Tech Logo"
                width={160}
                height={160}
                style={{
                  filter: isLight ? "brightness(0)" : "brightness(0) invert(1)",
                }}
                className="h-14 w-auto max-w-[96px] object-contain sm:h-16 sm:max-w-[148px]"
              />
            </Link>

            <nav
              aria-label="Hauptnavigation"
              className="hidden items-center gap-1 xl:flex"
            >
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 motion-reduce:transition-none ${linkColors} ${focusRing}`}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <div className="relative">
                <select
                  value={language}
                  onChange={(event) =>
                    setLanguage(event.target.value as Language)
                  }
                  aria-label="Sprache auswählen"
                  style={{ colorScheme: isLight ? "light" : "dark" }}
                  className={`h-11 w-[104px] cursor-pointer appearance-none rounded-full border pl-3 pr-8 text-sm font-medium transition-colors motion-reduce:transition-none sm:w-[124px] sm:pl-4 ${controlColors} ${focusRing}`}
                >
                  {languages.map((item) => (
                    <option
                      key={item}
                      value={item}
                      className={isLight ? "bg-white text-black" : "bg-slate-950 text-white"}
                    >
                      {languageLabels[item]}
                    </option>
                  ))}
                </select>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-current opacity-70"
                >
                  <path d="m6 8 4 4 4-4" />
                </svg>
              </div>

              <a
                href="/#kontakt"
                onClick={() => setIsMenuOpen(false)}
                className={`hidden whitespace-nowrap sm:inline-flex ${analysisClass}`}
              >
                {t.nav.analysis}
                <ArrowIcon />
              </a>

              <button
                ref={menuButtonRef}
                type="button"
                aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={isMenuOpen}
                aria-controls={menuId}
                onClick={() => setIsMenuOpen((open) => !open)}
                className={`relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors motion-reduce:transition-none xl:hidden ${controlColors} ${focusRing}`}
              >
                <span
                  aria-hidden="true"
                  className={`absolute h-px w-[18px] rounded-full bg-current transition-transform duration-200 motion-reduce:transition-none ${isMenuOpen ? "rotate-45" : "-translate-y-[3px]"}`}
                />
                <span
                  aria-hidden="true"
                  className={`absolute h-px w-[18px] rounded-full bg-current transition-transform duration-200 motion-reduce:transition-none ${isMenuOpen ? "-rotate-45" : "translate-y-[3px]"}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Eigene Glasfläche, damit auch das Menü den Seiteninhalt weichzeichnet. */}
        <nav
          id={menuId}
          aria-label="Mobile Navigation"
          hidden={!isMenuOpen}
          style={glassStyle}
          className={`pointer-events-auto absolute inset-x-0 top-full mt-3 max-h-[calc(100dvh-140px)] overflow-y-auto rounded-[24px] border p-3 shadow-[0_16px_48px_rgba(0,0,0,0.15)] xl:hidden ${isLight ? "border-black/10 bg-white/95" : "border-white/20 bg-slate-950/95"}`}
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className={`block rounded-2xl px-4 py-3.5 text-sm font-medium transition-colors motion-reduce:transition-none ${linkColors} ${focusRing}`}
            >
              {label}
            </a>
          ))}
          <a
            href="/#kontakt"
            onClick={() => setIsMenuOpen(false)}
            className={`mt-3 flex w-full sm:hidden ${analysisClass}`}
          >
            {t.nav.analysis}
            <ArrowIcon />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
