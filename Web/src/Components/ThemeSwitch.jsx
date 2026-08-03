import { useEffect } from "react";
import { useThemeStore } from "../store";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  console.log(theme);

  return (
    <button onClick={toggleTheme} className="rounded-lg border px-4 py-2">
      {theme === "dark" ? " Dark" : " Light"}
    </button>
  );
}
