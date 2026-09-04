import { SVGAttributes } from "react";

export type IconName =
  | "search"
  | "menu"
  | "close"
  | "location"
  | "chevron-right"
  | "heritage";

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  name: IconName;
  size?: number;
  label?: string;
}

const paths: Record<IconName, JSX.Element> = {
  search: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.2-5.2M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
    />
  ),
  menu: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
  ),
  close: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6 6 18" />
  ),
  location: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s7-4.5 7-10a7 7 0 1 0-14 0c0 5.5 7 10 7 10Z"
    />
  ),
  "chevron-right": (
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
  ),
  heritage: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 20V8l8-4 8 4v12M9 20v-6h6v6"
    />
  ),
};

export function Icon({ name, size = 20, label, className = "", ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
