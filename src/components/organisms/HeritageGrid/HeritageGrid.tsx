import { HeritageCard } from "@/components/molecules/HeritageCard/HeritageCard";
import { Typography } from "@/components/atoms/Typography/Typography";
import { HeritageSite } from "@/data/heritage-sites";

export interface HeritageGridProps {
  sites: HeritageSite[];
  title?: string;
  description?: string;
  emptyMessage?: string;
}

export function HeritageGrid({
  sites,
  title = "Stage Select",
  description = "Pick a heritage quest. Clear a stage, earn XP, and unlock Pangasinan's legendary spots.",
  emptyMessage = "No quest stages match your scan. Try another keyword!",
}: HeritageGridProps) {
  return (
    <section aria-labelledby="heritage-grid-heading" className="w-full">
      <div className="mb-6 space-y-2 sm:mb-8">
        <div className="inline-flex items-center gap-2">
          <span className="arcade-chip bg-arcade-cyan text-black">Arcade Mode</span>
          <span className="arcade-chip bg-arcade-cyan text-black">{sites.length} Stages</span>
        </div>
        <Typography id="heritage-grid-heading" variant="h2" as="h2" className="text-arcade-yellow arcade-glow">
          {title}
        </Typography>
        <Typography variant="body" color="muted" className="max-w-2xl normal-case tracking-normal">
          {description}
        </Typography>
      </div>

      {sites.length === 0 ? (
        <div className="arcade-panel p-6">
          <Typography variant="body" color="muted" role="status" className="normal-case tracking-normal">
            {emptyMessage}
          </Typography>
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((site, index) => (
            <li key={site.id}>
              <HeritageCard site={site} href={`/sites/${site.id}`} priority={index === 0} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
