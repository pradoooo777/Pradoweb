"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/atoms/Button/Button";
import { Icon } from "@/components/atoms/Icon/Icon";
import { Typography } from "@/components/atoms/Typography/Typography";
import { NavigationItem } from "@/components/molecules/NavigationItem/NavigationItem";

export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderNavigationProps {
  brandName?: string;
  links?: NavLink[];
  currentPath?: string;
}

const defaultLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Quest Map", href: "/#sites" },
  { label: "Design System", href: "/design-system" },
];

export function HeaderNavigation({
  brandName = "Pangasinan Quest",
  links = defaultLinks,
  currentPath = "/",
}: HeaderNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-black bg-arcade-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-transparent px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arcade-cyan"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border-4 border-black bg-arcade-cyan text-black shadow-arcade-sm">
            <Icon name="heritage" size={22} />
          </span>
          <div>
            <Typography variant="h3" as="span" className="block text-sm text-arcade-cyan sm:text-base arcade-glow">
              {brandName}
            </Typography>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-arcade-yellow">
              Player HUD
            </span>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavigationItem
              key={link.href}
              label={link.label}
              href={link.href}
              isActive={currentPath === link.href}
            />
          ))}
          <span className="arcade-chip ml-2 bg-arcade-lime text-black">HP 100</span>
          <span className="arcade-chip bg-arcade-yellow text-black">Coins 640</span>
        </nav>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="border-4 border-black bg-arcade-panel text-white shadow-arcade-sm md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          <Icon name={isOpen ? "close" : "menu"} size={22} label={isOpen ? "Close menu" : "Open menu"} />
        </Button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t-4 border-black bg-arcade-panel px-4 py-3 md:hidden"
        >
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <NavigationItem
                  label={link.label}
                  href={link.href}
                  isActive={currentPath === link.href}
                  onClick={() => setIsOpen(false)}
                />
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
