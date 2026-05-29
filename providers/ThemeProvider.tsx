"use client";

import React, { createContext, useContext } from "react";
import { useTheme, type Theme } from "@/hooks/useTheme";

interface ThemeContextValue {
  // theme: Theme;
  resolved: "light" | "dark";
  // setTheme: (t: Theme) => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue>({
  // theme: "system",
  resolved: "light",
  // setTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const value = useTheme();
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}