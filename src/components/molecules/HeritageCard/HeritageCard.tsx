import Link from "next/link";
import { HeritageImage } from "@/components/atoms/Image/HeritageImage";
import { Icon } from "@/components/atoms/Icon/Icon";
import { Typography } from "@/components/atoms/Typography/Typography";
import { HeritageSite } from "@/data/heritage-sites";

export interface HeritageCardProps {
  site: HeritageSite;
  href?: string;
  priority?: boolean;
}

const rarityStyles: Record<HeritageSite["rarity"], string> = {
  Common: "bg-slate-300 text-black",
  Rare: "bg-arcade-cyan text-black",
  Epic: "bg-arcade-yellow text-black",
  Legendary: "bg-arcade-yellow text-black",
};

export function HeritageCard({ site, href = `/sites/${site.id}`, priority = false }: HeritageCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border-4 border-black bg-arcade-panel shadow-arcade transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_#22d3ee]">
      <div className="relative">
        <HeritageImage
          src={site.imageUrl}
          alt={`${site.name} in ${site.location}`}
          aspectRatio="16/9"
          rounded={false}
          className="rounded-none border-b-4 border-black"
          priority={priority}
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <span className={`arcade-chip ${rarityStyles[site.rarity]}`}>
            {site.rarity}
          </span>
          <span className="arcade-chip bg-black text-arcade-lime">
            Lv.{site.level}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 arcade-chip bg-arcade-cyan text-black">
          +{site.xp} XP
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <Typography variant="caption" className="text-arcade-yellow">
          {site.category}
        </Typography>
        <Typography variant="h3" as="h2" className="text-white normal-case tracking-normal">
          {site.name}
        </Typography>
        <div className="flex items-start gap-2">
          <Icon name="location" size={16} className="mt-0.5 shrink-0 text-arcade-cyan" />
          <Typography variant="body-sm" color="muted" className="normal-case tracking-normal">
            {site.location}
          </Typography>
        </div>
        <Typography
          variant="body-sm"
          color="muted"
          className="line-clamp-3 flex-1 normal-case tracking-normal font-medium"
        >
          {site.description}
        </Typography>
        <Link
          href={href}
          aria-label={`Start quest: ${site.name}`}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border-4 border-black bg-arcade-yellow px-3 py-2 text-xs font-black uppercase tracking-wide text-black shadow-arcade-sm transition-all hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arcade-cyan"
        >
          Start Quest
          <Icon name="chevron-right" size={16} />
        </Link>
      </div>
    </article>
  );
}
