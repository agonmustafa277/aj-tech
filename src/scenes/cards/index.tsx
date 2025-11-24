import { Palette, Search, Code, Bot } from "lucide-react";
import "@/scenes/cards/index.css"; // flip animation

const Cards = () => {
  const services = [
    {
      icon: <Palette className="w-12 h-12 text-[#2c5364]" />,
      title: <div className="text-[#2c5364]">Web Design</div>,
      desc: "Moderne und responsive Webseiten, die Ihr Unternehmen professionell präsentieren.",
    },
    {
      icon: <Search className="w-12 h-12 text-[#2c5364]" />,
      title: <div className="text-[#2c5364]">SEO-Optimierung</div>,
      desc: "Technische Optimierung, Keyword-Strategien & Performance-Boost.",
    },
    {
      icon: <Code className="w-12 h-12 text-[#2c5364]" />,
      title: <div className="text-[#2c5364]">Softwareentwicklung</div>,
      desc: "Individuelle Softwarelösungen – perfekt integriert in Ihre Prozesse.",
      dark: true,
    },
    {
      icon: <Bot className="w-12 h-12 text-[#2c5364]" />,
      title: <div className="text-[#2c5364]">KI-Lösungen</div>,
      desc: "Intelligente Systeme zur Automatisierung und Entscheidungsunterstützung.",
    },
  ];

  return (
    <section
      className="
        w-full bg-gradient-to-r from-[#2c5364] to-[#0f2027] 
        py-20 px-4 sm:px-6 lg:px-12 
      "
    >
      <div
        className="
          max-w-[1500px] mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-12
          justify-items-center    /* <--- ZENTRIERUNG */
        "
      >
        {services.map((item, i) => (
          <div
            key={i}
            className="
              card-container 
              perspective 
              w-[90%] sm:w-[80%] lg:w-full
              max-w-[330px] h-[380px] 
              flex items-center justify-center
            "
          >
            <div
              className="
                card flip-card
                transition-transform duration-500
                hover:scale-[1.04]
                hover:-rotate-1
                hover:shadow-2xl
                hover:shadow-[#ffffff22]
              "
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* FRONT */}
              <div
                className={`
                  front
                  flex flex-col items-center justify-center 
                  rounded-3xl p-8 text-center 
                  backdrop-blur-xl 
                  border border-white/10 
                  shadow-xl 
                  transition-all duration-500
                  ${item.dark ? "bg-[#1a1a2e]/80" : "bg-white/20"}
                `}
              >
                <div className="mb-4">{item.icon}</div>
                <h3
                  className={`
                    text-2xl font-semibold 
                    ${item.dark ? "text-white" : "text-white"}
                  `}
                >
                  {item.title}
                </h3>
              </div>

              {/* BACK */}
              <div
                className="
                  back 
                  flex items-center justify-center 
                  rounded-3xl p-6 text-center 
                  backdrop-blur-xl bg-white/20 
                  border border-white/10 
                  shadow-xl 
                  text-white/90 
                  text-lg 
                  leading-relaxed
                "
              >
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
