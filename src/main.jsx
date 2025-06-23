import { createRoot } from "react-dom/client";
import { LangProvider } from "./context/LangProvider.jsx";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <LangProvider>
      <App />
    </LangProvider>
  </ThemeProvider>
);
