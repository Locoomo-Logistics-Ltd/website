"use client";

// import React from "react";
// import { cn } from "@/lib/utils";
// import { useThemeContext } from "@/providers/ThemeProvider";
// import type { Theme } from "@/hooks/useTheme";

// const OPTIONS: { value: Theme; icon: string; label: string }[] = [
//   { value: "light", icon: "☀️", label: "Light mode" },
//   { value: "system", icon: "💻", label: "System preference" },
//   { value: "dark", icon: "🌙", label: "Dark mode" },
// ];


// export function ThemeToggle({ className }: { className?: string }) {
export function ThemeToggle() {
  // const { theme, setTheme, mounted } = useThemeContext();

  // Avoid hydration mismatch — render placeholder until mounted
  // if (!mounted) {
  //   return (
  //     <div
  //       className={cn(
  //         "flex items-center gap-[2px] rounded-full p-1",
  //         "bg-[var(--surface)] border border-[var(--border)]",
  //         className
  //       )}
  //       style={{ width: 104, height: 38 }}
  //       aria-hidden="true"
  //     />
  //   );
  // }

  // return (
  //   <div
  //     className={cn(
  //       "flex items-center gap-[2px] rounded-full p-1",
  //       "bg-[var(--surface)] border border-[var(--border)]",
  //       "transition-colors duration-300",
  //       className
  //     )}
  //     role="group"
  //     aria-label="Theme selector"
  //   >
  //     {OPTIONS.map(({ value, icon, label }) => (
  //       <button
  //         key={value}
  //         onClick={() => setTheme(value)}
  //         aria-label={label}
  //         aria-pressed={theme === value}
  //         className={cn(
  //           "flex items-center justify-center w-[30px] h-[30px] rounded-full text-[14px]",
  //           "transition-all duration-200",
  //           theme === value
  //             ? "bg-[var(--bg-card)] shadow-[var(--shadow)] text-[var(--brand-blue)]"
  //             : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
  //         )}
  //       >
  //         {icon}
  //       </button>
  //     ))}
  //   </div>
  // );
  return null;
}