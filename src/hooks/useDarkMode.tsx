import { create } from "zustand";
import localStorageKeys from "@/contants/local-storage-keys"
import { useEffect, useState } from "react";

type AppThemeStateType = {
  appTheme: boolean;
  setAppTheme: (appTheme: boolean) => void;
};


export const useAppTheme = create<AppThemeStateType>((set) => {
  return {
    appTheme: false,
    setAppTheme: (appTheme) => set(() => ({ appTheme })),
  };
});



export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const darkMode = localStorage.getItem(localStorageKeys.THEME);
    const systemPreferable = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (!darkMode) return systemPreferable;
    return darkMode === "dark";
  });

  const {setAppTheme} = useAppTheme();
 
  useEffect(() => {
    localStorage.setItem(localStorageKeys.THEME, darkMode ? "dark" : "light");
    setAppTheme(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return { darkMode, setDarkMode };
}


