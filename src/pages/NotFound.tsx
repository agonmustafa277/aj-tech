import { Link } from "react-router-dom";

const NotFound = () => (
  <main className="flex min-h-[70vh] items-center bg-white px-4 py-32 text-slate-950 sm:px-6">
    <section className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-black uppercase tracking-widest text-blue-600">404</p>
      <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
        Diese Seite gibt es leider nicht.
      </h1>
      <p className="mt-5 text-lg text-slate-600">
        Vielleicht hilft Ihnen die Startseite weiter – oder Sie schreiben mir direkt.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link to="/" className="rounded-full bg-blue-600 px-6 py-3 font-extrabold text-white hover:bg-blue-700">
          Zur Startseite
        </Link>
        <a href="/#kontakt" className="rounded-full border border-slate-300 px-6 py-3 font-extrabold hover:border-blue-600 hover:text-blue-700">
          Anfrage senden
        </a>
      </div>
    </section>
  </main>
);

export default NotFound;
