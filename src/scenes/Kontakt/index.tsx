import { useState } from "react";

function Kontakt() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch(
        "https://aj-tech-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMsg("Nachricht erfolgreich gesendet!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setErrorMsg(data.error || "Fehler beim Senden.");
      }
    } catch (err) {
      setErrorMsg("Server nicht erreichbar.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-[1980px] mx-auto px-5 py-20 text-white">

      <h1 className="text-4xl font-bold mb-8 text-center">Kontakt</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-[#1a2a2f] p-8 rounded-2xl shadow-lg border border-white/10"
      >
        {/* Name */}
        <label className="block text-lg mb-2">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          type="text"
          className="w-full p-3 rounded-xl bg-white/10 text-white outline-none mb-5"
        />

        {/* Email */}
        <label className="block text-lg mb-2">E-Mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          className="w-full p-3 rounded-xl bg-white/10 text-white outline-none mb-5"
        />

        {/* Message */}
        <label className="block text-lg mb-2">Nachricht</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="w-full p-3 rounded-xl bg-white/10 text-white outline-none mb-5"
        ></textarea>

        {/* Loading / Error / Success */}
        {loading && (
          <p className="text-yellow-300 text-center mb-3">
            Wird gesendet...
          </p>
        )}

        {successMsg && (
          <p className="text-green-400 text-center mb-3">{successMsg}</p>
        )}

        {errorMsg && (
          <p className="text-red-400 text-center mb-3">{errorMsg}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 mt-4 rounded-xl bg-gradient-to-r from-[#2c5364] to-[#0f2027] text-white font-bold hover:opacity-90 transition"
        >
          Senden
        </button>
      </form>
    </div>
  );
}

export default Kontakt;
