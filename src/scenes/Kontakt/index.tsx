import { useState } from "react";

const Kontakt = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    nachricht: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://deine-domain.de/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Fehler beim Senden");

      setStatus("success");
      setForm({ name: "", email: "", nachricht: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#2c5364] to-[#0f2027] py-20 px-6 flex justify-center">
      
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-indigo-500 blur-[180px] rounded-full absolute -top-40 left-10"></div>
        <div className="w-[500px] h-[500px] bg-cyan-400 blur-[180px] rounded-full absolute bottom-0 right-10"></div>
      </div>
      
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-white/20">

        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Kontaktieren Sie uns
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <div>
            <label className="text-white text-sm mb-1 block">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none"
            />
          </div>

          <div>
            <label className="text-white text-sm mb-1 block">E-Mail</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none"
            />
          </div>

          <div>
            <label className="text-white text-sm mb-1 block">Nachricht</label>
            <textarea
              name="nachricht"
              value={form.nachricht}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white font-semibold"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Wird gesendet..." : "Nachricht senden"}
          </button>

          {status === "success" && (
            <p className="text-green-300 text-center font-semibold">
              Ihre Nachricht wurde erfolgreich gesendet!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-300 text-center font-semibold">
              Es ist ein Fehler aufgetreten. Bitte erneut versuchen.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Kontakt;
