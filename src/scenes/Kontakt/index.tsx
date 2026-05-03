import { useState } from "react";

function Kontakt() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://aj-tech-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setShowSuccess(true);
        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      }
    } catch (err) {
      alert("Fehler: Server nicht erreichbar.");
    }

    setLoading(false);
  };

  return (
    <section
      id="kontakt"
      className="
        relative w-full
        py-28 px-6
        bg-gradient-to-r from-[#2c5364] to-[#0f2027]
        overflow-hidden text-white
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-indigo-500 blur-[200px] rounded-full absolute -top-40 left-20"></div>
        <div className="w-[550px] h-[550px] bg-cyan-400 blur-[200px] rounded-full absolute bottom-0 right-10"></div>
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 drop-shadow-xl">
          Kontakt
        </h1>

        <form
          onSubmit={handleSubmit}
          className="
            bg-white/10 backdrop-blur-xl 
            border border-white/20 shadow-2xl
            p-10 rounded-3xl w-full
            transition-all duration-300 select-none
          "
        >
          {/* Name */}
          <label className="block text-left mb-2 text-lg cursor-pointer">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            className="
              w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300
              outline-none border border-white/20
              focus:border-white/40 hover:bg-white/30
              transition-all duration-300 cursor-text
            "
            placeholder="Ihr Name"
          />

          {/* Email */}
          <label className="block text-left mb-2 text-lg mt-6 cursor-pointer">
            E-Mail
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            className="
              w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300
              outline-none border border-white/20
              focus:border-white/40 hover:bg-white/30
              transition-all duration-300 cursor-text
            "
            placeholder="Ihre E-Mail-Adresse"
          />

          {/* Message */}
          <label className="block text-left mb-2 text-lg mt-6 cursor-pointer">
            Nachricht
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="
              w-full p-4 rounded-xl bg-white/20 text-white placeholder-gray-300
              outline-none border border-white/20
              focus:border-white/40 hover:bg-white/30
              transition-all duration-300 cursor-text
            "
            placeholder="Wie können wir Ihnen helfen?"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-4 mt-8 rounded-xl
              bg-gradient-to-r from-[#4f8ca7] to-[#0f2027]
              text-white text-lg font-bold
              transition-all duration-300
              hover:scale-[1.03] hover:shadow-xl
              disabled:opacity-50
            "
          >
            Senden
          </button>
        </form>
      </div>

      {/* LOADING SCREEN */}
      {loading && (
        <div
          className="
            fixed inset-0 bg-black/60 backdrop-blur-sm
            flex flex-col items-center justify-center z-[999]
            transition-all
          "
        >
          <div className="w-40 h-40 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>

          <div className="mt-6 w-64 h-3 bg-white/20 rounded-full overflow-hidden">
            <div className="w-full h-full bg-white animate-[loadbar_1.8s_ease-in-out_infinite]"></div>
          </div>

          <p className="text-white opacity-80 mt-4 text-lg">
            Nachricht wird gesendet...
          </p>
        </div>
      )}

      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div
          className="
            fixed inset-0 flex items-center justify-center z-999
            bg-black/50 backdrop-blur-sm
          "
        >
          <div
            className="
              bg-white/10 p-10 rounded-3xl border border-white/20 
              backdrop-blur-xl text-center
              animate-[popup_0.4s_ease-out]
            "
          >
            <h2 className="text-3xl font-bold mb-4 text-green-300">
              Erfolgreich!
            </h2>
            <p className="text-white text-lg">
              Ihre Nachricht wurde erfolgreich gesendet.
            </p>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>
        {`
        @keyframes loadbar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes popup {
          0% { transform: scale(0.6); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        `}
      </style>
    </section>
  );
}

export default Kontakt;
