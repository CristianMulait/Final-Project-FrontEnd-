// main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// hydrate theme from localStorage early to avoid FOUC
(function initTheme() {
  try {
    const saved = localStorage.getItem("app_theme");
    if (saved === "dark") document.documentElement.classList.add("dark");
    else if (saved === "light") document.documentElement.classList.remove("dark");
    // if not saved, prefer system (do nothing: CSS variables handle it via prefers-color-scheme fallback)
  } catch (e) {
    // ignore
  }
})();

createRoot(document.getElementById("root")).render(<App />);
