import Link from "next/link";
import { Icon, IconName } from "@/components/atoms/Icon/Icon";

export interface NavigationItemProps {
  label: string;
  href: string;
  icon?: IconName;
  isActive?: boolean;
  onClick?: () => void;
}

export function NavigationItem({
  label,
  href,
  icon,
  isActive = false,
  onClick,
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={[
        "inline-flex min-h-11 items-center gap-2 rounded-xl border-4 px-3 py-2 text-xs font-black uppercase tracking-wide transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arcade-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-arcade-navy",
        isActive
          ? "border-black bg-arcade-cyan text-black shadow-arcade-sm"
          : "border-black/40 bg-white/5 text-cyan-100 hover:border-black hover:bg-arcade-yellow hover:text-black hover:shadow-arcade-sm",
      ].join(" ")}
    >
      {icon ? <Icon name={icon} size={18} aria-hidden /> : null}
      <span>{label}</span>
    </Link>
  );
}
