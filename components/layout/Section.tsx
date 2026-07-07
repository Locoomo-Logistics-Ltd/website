import React from "react";
import { cn } from "@/lib/utils";

// Define props type
export interface SectionProps {
  className?: string;
  children: Readonly<React.ReactNode>;
}

export default function Section({ className, children }: SectionProps) {
  return (
    <section className={cn("w-full overflow-hidden", className)}>
      <div className="max-w-6xl font-inter px-4 lg:px-3 w-full mx-auto">
        {children}
      </div>
    </section>
  );
}
