import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// apply saved theme before first paint
const savedTheme = localStorage.getItem("nizamos-theme");
if (savedTheme && savedTheme !== "green") {
  document.documentElement.dataset.theme = savedTheme;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
