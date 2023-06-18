import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AppConfigProvider } from "./contexts/AppConfig.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppConfigProvider>
        <App />
      </AppConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
