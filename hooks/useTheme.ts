"use client";

import { useState, useEffect, useCallback } from "react";

//================================ CODE FOR LIGHT, DARK, SYSTEM CONTROL =======================

/*

export type Theme = "light" | "dark" | "system";

const THEME_KEY = "locoomo-theme";

function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return theme;
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolved, setResolved] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Apply theme class to <html>
  const applyTheme = useCallback((t: Theme) => {
    const r = resolveTheme(t);
    document.documentElement.classList.toggle("dark-mode", r === "dark");
    setResolved(r);
  }, []);

  // Init on mount
  useEffect(() => {
    const saved = (localStorage.getItem(THEME_KEY) as Theme) ?? "system";
    setThemeState(saved);
    applyTheme(saved);
    setMounted(true);

    // Watch OS preference change when in system mode
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const current = (localStorage.getItem(THEME_KEY) as Theme) ?? "system";
      if (current === "system") applyTheme("system");
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, [applyTheme]);

  const setTheme = useCallback(
    (t: Theme) => {
      localStorage.setItem(THEME_KEY, t);
      setThemeState(t);
      applyTheme(t);
    },
    [applyTheme]
  );

  return { theme, resolved, setTheme, mounted };
}

*/

// ===========================================================

// =================== JUST SYSTEM VERSION ONLY =====================
export type Theme = "light" | "dark" | "system"; // Kept for type compatibility

export function useTheme() {
  const [resolved, setResolved] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark-mode", isDark);
    setResolved(isDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    applyTheme();
    setMounted(true);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", applyTheme);

    return () => mq.removeEventListener("change", applyTheme);
  }, [applyTheme]);

  return { resolved, mounted };
}