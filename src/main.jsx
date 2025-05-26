import { createRoot } from "react-dom/client";
import { LangProvider } from "./context/LangProvider.jsx";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <LangProvider>
    <App />
  </LangProvider>
);
