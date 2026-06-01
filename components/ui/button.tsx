import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Core Button primitive.
 * Variants: primary | ghost | outline | link
 * Sizes: default | sm | lg | icon
 *
 * All brand-specific colours flow from CSS vars, so light/dark theme
 * is handled automatically without variant overrides.
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px]",
    "font-semibold font-sans transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[var(--brand-blue)] text-white",
          "shadow-[0_2px_12px_rgba(0,108,223,0.35)]",
          "hover:bg-[#0060cc] hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(0,108,223,0.45)]",
        ],
        ghost: [
          "bg-transparent text-[var(--text-secondary)]",
          "border border-[var(--border)]",
          "hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)] hover:bg-[rgba(0,108,223,0.04)]",
        ],
        outline: [
          "bg-transparent text-[var(--text-primary)]",
          "border border-[var(--border-strong)]",
          "hover:bg-[var(--bg-subtle)]",
        ],
        link: [
          "bg-transparent text-[var(--brand-blue)] underline-offset-4 hover:underline",
          "rounded-none shadow-none",
        ],
        // White variant — used inside coloured CTA banners
        white: [
          "bg-white text-[var(--brand-blue)]",
          "hover:bg-white/90 hover:-translate-y-px",
        ],
      },
      size: {
        default: "h-10 px-[22px] py-[10px] text-[14px]",
        sm: "h-8 px-[14px] text-[13px] rounded-[8px]",
        lg: "h-12 px-[28px] py-[14px] text-[15px] rounded-[12px]",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };