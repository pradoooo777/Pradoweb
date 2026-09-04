import Link from "next/link";
import { Typography } from "@/components/atoms/Typography/Typography";
import { HeaderNavigation } from "@/components/organisms/HeaderNavigation/HeaderNavigation";
import { HeritageExplorer } from "@/components/organisms/HeritageExplorer/HeritageExplorer";
import { SiteFooter } from "@/components/organisms/SiteFooter/SiteFooter";
import { heritageSites } from "@/data/heritage-sites";

export default function HomePage() {
  return (
    <div className="arcade-grid min-h-screen">
      <HeaderNavigation currentPath="/" />

      <main id="main-content">
        <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14">
          <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-arcade-cyan/30 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 top-24 h-48 w-48 rounded-full bg-arcade-yellow/20 blur-3xl" />

          <div className="relative mx-auto max-w-6xl space-y-6">
            <div className="arcade-panel max-w-3xl space-y-4 p-6 sm:p-8">
              <span className="arcade-chip bg-arcade-yellow text-black">Insert Coin · Press Start</span>
              <Typography variant="display" className="text-white arcade-glow">
                Pangasinan Heritage Quest
              </Typography>
              <Typography variant="body" color="muted" className="normal-case tracking-normal">
                Jump into an arcade-style adventure across Pangasinan. Scan the map, pick a stage,
                and explore legendary heritage sites built for quick mobile play.
              </Typography>
              <div className="flex flex-wrap gap-2">
                <span className="arcade-chip bg-arcade-cyan text-black">3 Stages</span>
                <span className="arcade-chip bg-arcade-cyan text-black">Mobile Ready</span>
                <span className="arcade-chip bg-arcade-lime text-black">Earn XP</span>
              </div>
            </div>
          </div>
        </section>

        <div className="px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <HeritageExplorer sites={heritageSites} />
          </div>
        </div>

        <section className="px-4 pb-12 sm:px-6">
          <div className="arcade-panel mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <div className="space-y-1">
              <Typography variant="h3" className="text-arcade-cyan">
                Bonus Level Unlocked
              </Typography>
              <Typography variant="body-sm" color="muted" className="normal-case tracking-normal">
                Peek at the atomic design system behind this arcade showcase.
              </Typography>
            </div>
            <Link
              href="/design-system"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border-4 border-black bg-arcade-yellow px-5 text-sm font-black uppercase tracking-wide text-black shadow-arcade transition-all hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arcade-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-arcade-navy"
            >
              Open design system lab
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
