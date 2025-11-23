import { Users, Rocket, Lightbulb } from "lucide-react";

const UeberUns = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#2c5364] to-[#0f2027] py-24 px-6 overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-indigo-500 blur-[180px] rounded-full absolute -top-40 left-10"></div>
        <div className="w-[500px] h-[500px] bg-cyan-400 blur-[180px] rounded-full absolute bottom-0 right-10"></div>
      </div>

      <div className="relative max-w-[1980px] mx-auto text-center text-white">

        <h2 className="text-4xl font-bold mb-6">Über uns</h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-200 leading-relaxed mb-16">
          Wir sind ein junges, dynamisches Team, das digitale Lösungen mit Leidenschaft und Präzision entwickelt.
          Mit einem frischen Blick, moderner Technologie und echter Begeisterung für Innovation begleiten wir unsere
          Kunden von der Idee bis zur Umsetzung – zuverlässig, transparent und auf Augenhöhe.
        </p>

        {/* Icon Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">

          {/* Teamorientiert */}
          <div className="flex flex-col items-center">
            <Users className="w-14 h-14 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Teamorientiert</h3>
            <p className="text-gray-300 text-sm">
              Wir arbeiten eng zusammen und kombinieren individuelle Stärken.
            </p>
          </div>

          {/* Innovativ */}
          <div className="flex flex-col items-center">
            <Rocket className="w-14 h-14 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovativ</h3>
            <p className="text-gray-300 text-sm">
              Wir nutzen moderne Technologien für zukunftssichere Lösungen.
            </p>
          </div>

          {/* Kreativ */}
          <div className="flex flex-col items-center">
            <Lightbulb className="w-14 h-14 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Kreativ</h3>
            <p className="text-gray-300 text-sm">
              Neue Ideen und smarte Konzepte treiben uns täglich an.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default UeberUns;
