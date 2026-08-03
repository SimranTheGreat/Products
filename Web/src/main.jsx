import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { useThemeStore } from "./store";

const applyTheme = (theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
};

applyTheme(useThemeStore.getState().theme);
useThemeStore.subscribe((state) => {
  applyTheme(state.theme);
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
