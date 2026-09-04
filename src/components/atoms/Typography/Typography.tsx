import { ElementType, HTMLAttributes } from "react";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "body-sm"
  | "caption"
  | "label";

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: ElementType;
  color?: "default" | "muted" | "inverse" | "accent";
}

const variantMap: Record<TypographyVariant, { tag: ElementType; className: string }> = {
  display: {
    tag: "h1",
    className: "text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase",
  },
  h1: { tag: "h1", className: "text-2xl sm:text-3xl font-black uppercase tracking-wide" },
  h2: { tag: "h2", className: "text-xl sm:text-2xl font-black uppercase tracking-wide" },
  h3: { tag: "h3", className: "text-lg sm:text-xl font-bold uppercase tracking-wide" },
  body: { tag: "p", className: "text-base leading-relaxed font-medium" },
  "body-sm": { tag: "p", className: "text-sm leading-relaxed font-medium" },
  caption: { tag: "span", className: "text-xs leading-normal font-bold uppercase tracking-wider" },
  label: { tag: "span", className: "text-sm font-black uppercase tracking-wide" },
};

const colorClasses = {
  default: "text-white",
  muted: "text-cyan-100",
  inverse: "text-arcade-navy",
  accent: "text-arcade-cyan",
};

export function Typography({
  variant = "body",
  as,
  color = "default",
  className = "",
  children,
  ...props
}: TypographyProps) {
  const config = variantMap[variant];
  const Component = as ?? config.tag;

  return (
    <Component
      className={[config.className, colorClasses[color], className].join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
