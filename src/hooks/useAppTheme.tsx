import { create } from "zustand";

type AppThemeStateType = {
  appTheme: "light" | "dark";
  setAppTheme: (appTheme: "light" | "dark") => void;
};

export const useAppTheme = create<AppThemeStateType>((set) => {
  return {
    appTheme: "light",
    setAppTheme: (appTheme) => set(() => ({ appTheme })),
  };
});
