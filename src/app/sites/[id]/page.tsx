import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { HeritageImage } from "@/components/atoms/Image/HeritageImage";
import { Icon } from "@/components/atoms/Icon/Icon";
import { Typography } from "@/components/atoms/Typography/Typography";
import { HeritageCard } from "@/components/molecules/HeritageCard/HeritageCard";
import { HeaderNavigation } from "@/components/organisms/HeaderNavigation/HeaderNavigation";
import { SiteFooter } from "@/components/organisms/SiteFooter/SiteFooter";
import { getHeritageSite, heritageSites } from "@/data/heritage-sites";

interface SitePageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return heritageSites.map((site) => ({ id: site.id }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: SitePageProps): Metadata {
  const site = getHeritageSite(params.id);

  if (!site) {
    return { title: "Heritage site not found" };
  }

  return {
    title: site.name,
    description: site.description,
    openGraph: {
      title: site.name,
      description: site.description,
    },
  };
}

export default function HeritageSitePage({ params }: SitePageProps) {
  const site = getHeritageSite(params.id);

  if (!site) {
    notFound();
  }

  const relatedSites = heritageSites.filter((item) => item.id !== site.id);

  return (
    <div className="arcade-grid min-h-screen">
      <HeaderNavigation currentPath="/" />

      <main id="main-content" className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
        <Link
          href="/#sites"
          className="inline-flex min-h-11 items-center gap-2 rounded-xl border-4 border-black bg-white/10 px-4 text-sm font-black uppercase tracking-wide text-arcade-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arcade-cyan"
        >
          <Icon name="chevron-right" size={16} className="rotate-180" />
          Back to quest map
        </Link>

        <article className="arcade-panel overflow-hidden">
          <HeritageImage
            src={site.imageUrl}
            alt={`${site.name} in ${site.location}`}
            aspectRatio="16/9"
            rounded={false}
            priority
            className="rounded-none border-b-4 border-black"
            sizes="100vw"
          />
          <div className="space-y-4 p-6 sm:p-8">
            <div className="flex flex-wrap gap-2">
              <span className="arcade-chip bg-arcade-yellow text-black">{site.rarity}</span>
              <span className="arcade-chip bg-arcade-cyan text-black">{site.category}</span>
              <span className="arcade-chip bg-arcade-lime text-black">+{site.xp} XP</span>
            </div>
            <Typography variant="display" className="text-white arcade-glow">
              {site.name}
            </Typography>
            <div className="flex items-start gap-2">
              <Icon name="location" size={18} className="mt-1 text-arcade-cyan" />
              <Typography variant="body" color="muted" className="normal-case tracking-normal">
                {site.location}
              </Typography>
            </div>
            <Typography variant="body" color="muted" className="normal-case tracking-normal">
              {site.description}
            </Typography>
          </div>
        </article>

        <section className="grid gap-6 lg:grid-cols-2" aria-labelledby="visit-heading">
          <div className="arcade-panel space-y-3 p-6">
            <Typography id="visit-heading" variant="h2" className="text-arcade-cyan">
              Highlights
            </Typography>
            <ul className="list-disc space-y-2 pl-5 text-cyan-100">
              {site.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
          <div className="arcade-panel space-y-3 p-6">
            <Typography variant="h2" className="text-arcade-yellow">
              Plan the visit
            </Typography>
            <Typography variant="body" color="muted" className="normal-case tracking-normal">
              Best time: {site.bestTime}
            </Typography>
            <Typography variant="body" color="muted" className="normal-case tracking-normal">
              {site.travelTip}
            </Typography>
          </div>
        </section>

        <section aria-labelledby="more-stages-heading" className="space-y-4">
          <Typography id="more-stages-heading" variant="h2" className="text-arcade-yellow">
            More stages
          </Typography>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {relatedSites.map((related) => (
              <li key={related.id}>
                <HeritageCard site={related} href={`/sites/${related.id}`} />
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
