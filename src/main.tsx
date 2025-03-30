import { SessionProvider } from "./context/SessionContext.tsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App.tsx";

import "./css/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SessionProvider>
      <App />
    </SessionProvider>
  </StrictMode>
);
