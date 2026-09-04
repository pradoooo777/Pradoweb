import { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-arcade-cyan text-black hover:brightness-110 focus-visible:ring-arcade-cyan",
  secondary:
    "bg-arcade-yellow text-black hover:brightness-110 focus-visible:ring-arcade-yellow",
  outline:
    "border-4 border-arcade-cyan bg-transparent text-arcade-cyan hover:bg-arcade-cyan focus-visible:ring-arcade-cyan hover:text-black",
  ghost:
    "text-arcade-cyan hover:bg-white/10 focus-visible:ring-arcade-cyan shadow-none hover:translate-y-0 active:translate-y-0",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-xs",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      className = "",
      type = "button",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={[
          "inline-flex items-center justify-center rounded-xl border-4 border-black font-black uppercase tracking-wide transition-all",
          "shadow-arcade hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#000]",
          "active:translate-y-0.5 active:shadow-arcade-press",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-arcade-navy",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth ? "w-full" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
