"use client";

import { useState, useEffect, useCallback } from "react";

export type Theme = "light" | "dark";

const THEME_KEY = "locoomo-theme";

function applyThemeToDocument(theme: Theme) {
  document.documentElement.classList.toggle("dark-mode", theme === "dark");
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#060b17" : "#ffffff");
  }
}

/**
 * Site theme: defaults to light for every visitor, independent of OS
 * preference. Once a user toggles it, the choice is persisted and
 * restored on future visits (see the inline script in app/layout.tsx,
 * which applies the saved class before hydration to avoid a flash).
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    const initial: Theme = saved === "dark" ? "dark" : "light";
    setThemeState(initial);
    applyThemeToDocument(initial);
    setMounted(true);
  }, []);

  const setTheme = useCallback((t: Theme) => {
    localStorage.setItem(THEME_KEY, t);
    setThemeState(t);
    applyThemeToDocument(t);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return { theme, resolved: theme, setTheme, toggleTheme, mounted };
}
