import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./i18n/LanguageContext";
import "@fontsource-variable/inter";
import "./index.css";
import App from "./App";

const app = (
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);

const root = document.getElementById("root")!;

// Seiten sind beim Build vorgerendert (scripts/prerender.mjs). Dann wird
// das vorhandene HTML nur "aufgeweckt", sonst normal gerendert (npm run dev).
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
