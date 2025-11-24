import { Users, Rocket, Lightbulb } from "lucide-react";

const UeberUns = () => {
  return (
    <section
      className="
        relative w-full 
        bg-gradient-to-r from-[#2c5364] to-[#0f2027]
        py-28 px-6
        overflow-hidden
      "
      id="ueber-uns"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="w-[650px] h-[650px] bg-indigo-500 blur-[200px] rounded-full absolute -top-40 left-10"></div>
        <div className="w-[550px] h-[550px] bg-cyan-400 blur-[200px] rounded-full absolute bottom-0 right-10"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1500px] mx-auto text-center text-white">
        {/* Heading */}
        <h2
          className="
            text-4xl md:text-5xl font-bold 
            mb-8 drop-shadow-xl
          "
        >
          Über uns
        </h2>

        {/* Intro Text */}
        <p
          className="
            max-w-3xl mx-auto 
            text-lg md:text-xl 
            text-gray-200 
            leading-relaxed 
            mb-20
          "
        >
          Wir sind ein junges, dynamisches Team, das digitale Lösungen mit
          Leidenschaft und Präzision entwickelt. Dabei begleiten wir unsere
          Kunden von der Idee bis zur Umsetzung – innovativ, zuverlässig
          und immer auf Augenhöhe.
        </p>

        {/* ICON ROW */}
        <div
          className="
            grid 
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-12
            max-w-5xl mx-auto
          "
        >
          {/* BLOCK 1 */}
          <div
            className="
              group
              flex flex-col items-center text-center
              p-8 rounded-3xl
              backdrop-blur-xl bg-white/10
              border border-white/10
              shadow-xl
              transition-all 
              duration-500
              hover:bg-white/20
              hover:shadow-2xl
              hover:-translate-y-2
            "
          >
            <Users
              className="
                w-16 h-16 mb-4 
                text-white drop-shadow-lg 
                transition-transform duration-500 
                group-hover:scale-110
              "
            />
            <h3 className="text-2xl font-semibold mb-3">Teamorientiert</h3>
            <p className="text-gray-200">
              Wir kombinieren individuelle Stärken und arbeiten eng zusammen,
              um bestmögliche Ergebnisse zu erzielen.
            </p>
          </div>

          {/* BLOCK 2 */}
          <div
            className="
              group
              flex flex-col items-center text-center
              p-8 rounded-3xl
              backdrop-blur-xl bg-white/10
              border border-white/10
              shadow-xl
              transition-all 
              duration-500
              hover:bg-white/20
              hover:shadow-2xl
              hover:-translate-y-2
            "
          >
            <Rocket
              className="
                w-16 h-16 mb-4 
                text-white drop-shadow-lg 
                transition-transform duration-500 
                group-hover:scale-110
              "
            />
            <h3 className="text-2xl font-semibold mb-3">Innovativ</h3>
            <p className="text-gray-200">
              Wir nutzen moderne Technologien und entwickeln zukunftsfähige,
              skalierbare Lösungen.
            </p>
          </div>

          {/* BLOCK 3 */}
          <div
            className="
              group
              flex flex-col items-center text-center
              p-8 rounded-3xl
              backdrop-blur-xl bg-white/10
              border border-white/10
              shadow-xl
              transition-all 
              duration-500
              hover:bg-white/20
              hover:shadow-2xl
              hover:-translate-y-2
            "
          >
            <Lightbulb
              className="
                w-16 h-16 mb-4 
                text-white drop-shadow-lg 
                transition-transform duration-500 
                group-hover:scale-110
              "
            />
            <h3 className="text-2xl font-semibold mb-3">Kreativ</h3>
            <p className="text-gray-200">
              Neue Ideen und clevere Konzepte sind unser täglicher Antrieb.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UeberUns;
