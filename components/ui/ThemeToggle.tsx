"use client";

import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useThemeContext } from "@/providers/ThemeProvider";
import { Button } from "@/components/ui/button";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useThemeContext();

  // Avoid hydration mismatch — render a same-sized placeholder until mounted.
  if (!mounted) {
    return (
      <div
        className={cn("h-9 w-9 rounded-[10px]", className)}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={className}
    >
      {isDark ? (
        <Sun className="h-[18px] w-[18px]" />
      ) : (
        <Moon className="h-[18px] w-[18px]" />
      )}
    </Button>
  );
}
