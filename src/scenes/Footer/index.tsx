import React from "react";
import { Link } from "react-router-dom";
//import Logo from "@/Assets/Logo_rand.svg"; // dein echtes SVG

const Footer = () => {
  return (
    <footer className="w-full backdrop-blur-xl bg-white/10 text-white py-12 px-6 border-t border-white/20 shadow-xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + BESCHREIBUNG */}
        <div className="flex flex-col gap-4">
          <img
            src="/Logo_rand.svg"
            alt="AJ Tech Logo"
            className="w-28 h-auto drop-shadow-xl"
          />

          <p className="text-gray-200 text-sm leading-relaxed">
            AJ Tech – Innovative Lösungen für Software, Automatisierung und digitale Prozesse.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-3">

            {/* LinkedIn */}
            <a
              href="#"
              className="hover:text-blue-300 transition"
              aria-label="LinkedIn"
            >
              <i className="lab la-linkedin text-2xl"></i>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="hover:text-pink-300 transition"
              aria-label="Instagram"
            >
              <i className="lab la-instagram text-2xl"></i>
            </a>

            {/* Email */}
            <a
              href="mailto:agon.mustafa@aj-tech.de"
              className="hover:text-green-300 transition"
              aria-label="Email"
            >
              <i className="las la-envelope text-2xl"></i>
            </a>
          </div>
        </div>

        {/* LEISTUNGEN */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Leistungen</h3>
          <ul className="space-y-2 text-gray-100 text-sm">
            <li>Softwareentwicklung</li>
            <li>Automatisierung</li>
            <li>Webentwicklung</li>
            <li>Digitalisierung</li>
          </ul>
        </div>

        {/* RECHTLICH */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Rechtliches</h3>
          <ul className="space-y-2 text-gray-100 text-sm">
            <li><Link to="/datenschutz">Datenschutz</Link></li>
            <li><Link to="/impressum">Impressum</Link></li>
          </ul>
        </div>

        {/* KONTAKT */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Kontakt</h3>
          <ul className="space-y-2 text-gray-100 text-sm">
            <li>A.J. Tech</li>
            <li>Inh.: Agon Mustafa</li>
            <li>Mechernicher Weg 88</li>
            <li>53894 Mechernich</li>
            <li>Deutschland</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-gray-200 text-sm mt-10 border-t border-white/20 pt-6">
        © {new Date().getFullYear()} AJ Tech – Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};

export default Footer;
