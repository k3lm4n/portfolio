import localStorageKeys from "@/contants/local-storage-keys";
import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const stored = localStorage.getItem(localStorageKeys.THEME);
    if (!stored) return window.matchMedia("(prefers-color-scheme: dark)").matches;
    return stored === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Only an explicit choice is persisted, so the system preference applies until then
  const toggleDarkMode = () => {
    const next = !darkMode;
    localStorage.setItem(localStorageKeys.THEME, next ? "dark" : "light");
    setDarkMode(next);
  };

  return { darkMode, toggleDarkMode };
}
