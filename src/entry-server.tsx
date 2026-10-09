import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "./App";
import { LanguageProvider } from "./i18n/LanguageContext";
import { getRouteMeta, headTags } from "./seo";

export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </StaticRouter>
    </StrictMode>,
  );

  return { html, head: headTags(getRouteMeta(url)) };
}
