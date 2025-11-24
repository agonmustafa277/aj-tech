import { Palette, Search, Code, Bot } from "lucide-react";
import "@/scenes/cards/index.css"; // <--- Flip Animation (CSS unten hinzufügen!)

const Cards = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#2c5364] to-[#0f2027] py-16 px-6">
      <div
        className="
        max-w-[1500px] mx-auto
        grid gap-10
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
      "
      >
  
        {/* CARD 1 – Webdesign */}
        <div className="card-container h-[340px] w-full perspective">
          <div className="card flip-card">
            {/* FRONT */}
            <div className="front flex flex-col items-center justify-center bg-[#f5f2fe] rounded-4xl p-6 text-center">
              <Palette className="text-[#2c5364] w-12 h-12 mb-3" />
              <h3 className="text-xl font-semibold text-[#1e1047]">
                Web Design
              </h3>
            </div>

            {/* BACK */}
            <div className="back flex items-center justify-center bg-[#f5f2fe] rounded-4xl p-6 text-center text-gray-700">
              Moderne und responsive Webseiten, die Ihr Unternehmen
              professionell präsentieren und auf jedem Gerät überzeugen.
            </div>
          </div>
        </div>

        {/* CARD 2 – SEO */}
        <div className="card-container h-[340px] w-full perspective">
          <div className="card flip-card">
            {/* FRONT */}
            <div className="front flex flex-col items-center justify-center bg-[#f5f2fe] rounded-4xl p-6 text-center">
              <Search className="text-[#2c5364] w-12 h-12 mb-3" />
              <h3 className="text-xl font-semibold text-[#1e1047]">
                SEO-Optimierung
              </h3>
            </div>

            {/* BACK */}
            <div className="back flex items-center justify-center bg-[#f5f2fe] rounded-4xl p-6 text-center text-gray-700">
              Wir verbessern Ihre Sichtbarkeit durch technische Optimierung,
              Keyword-Strategien und Performance-Optimierung.
            </div>
          </div>
        </div>

        {/* CARD 3 – Softwareentwicklung */}
        <div className="card-container h-[340px] w-full perspective">
          <div className="card flip-card">
            {/* FRONT */}
            <div className="front flex flex-col items-center justify-center bg-[#f5f2fe] rounded-4xl p-6 text-center text-white">
              <Code className="w-12 h-12 mb-3" />
              <h3 className="text-xl font-semibold">Softwareentwicklung</h3>
            </div>

            {/* BACK */}
            <div className="back flex items-center justify-center bg-[#f5f2fe] rounded-4xl p-6 text-center text-gray-200">
              Individuelle Softwarelösungen – exakt abgestimmt auf Ihre
              Anforderungen und perfekt integriert in Ihre Prozesse.
            </div>
          </div>
        </div>

        {/* CARD 4 – KI-Lösungen */}
        <div className="card-container h-[340px] w-full perspective">
          <div className="card flip-card">
            {/* FRONT */}
            <div className="front flex flex-col items-center justify-center bg-[#f5f2fe] rounded-4xl p-6 text-center">
              <Bot className="text-[#2c5364] w-12 h-12 mb-3" />
              <h3 className="text-xl font-semibold text-[#1e1047]">
                KI-Lösungen
              </h3>
            </div>

            {/* BACK */}
            <div className="back flex items-center justify-center bg-[#f5f2fe] rounded-4xl p-6 text-center text-gray-700">
              Intelligente Systeme auf Basis künstlicher Intelligenz zur
              Automatisierung, Analyse und Entscheidungsunterstützung.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cards;
