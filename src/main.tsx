import { applyPolyfills, defineCustomElements } from "message-me/loader";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AppConfigProvider } from "./contexts/AppConfig.tsx";
import "./index.css";

applyPolyfills().then(() => {
  defineCustomElements();
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppConfigProvider>
        <App />
      </AppConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
