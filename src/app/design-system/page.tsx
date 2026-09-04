import type { Metadata } from "next";
import { Button } from "@/components/atoms/Button/Button";
import { ColorTokens } from "@/components/atoms/ColorTokens/ColorTokens";
import { Icon } from "@/components/atoms/Icon/Icon";
import { HeritageImage } from "@/components/atoms/Image/HeritageImage";
import { Typography } from "@/components/atoms/Typography/Typography";
import { HeritageCard } from "@/components/molecules/HeritageCard/HeritageCard";
import { NavigationItem } from "@/components/molecules/NavigationItem/NavigationItem";
import { SearchForm } from "@/components/molecules/SearchForm/SearchForm";
import { HeaderNavigation } from "@/components/organisms/HeaderNavigation/HeaderNavigation";
import { HeritageGrid } from "@/components/organisms/HeritageGrid/HeritageGrid";
import { SiteFooter } from "@/components/organisms/SiteFooter/SiteFooter";
import { heritageSites } from "@/data/heritage-sites";

export const metadata: Metadata = {
  title: "Atomic Design System",
  description:
    "Live Atomic Design documentation for the Pangasinan Heritage Digital Showcase component library.",
};

interface DocSectionProps {
  title: string;
  level: "Atoms" | "Molecules" | "Organisms";
  preview: React.ReactNode;
  usage: string;
  responsive: string;
  code: string;
}

function DocSection({ title, level, preview, usage, responsive, code }: DocSectionProps) {
  return (
    <article className="arcade-panel p-5 sm:p-8">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="arcade-chip bg-arcade-cyan text-black">{level}</span>
        <Typography variant="h2" as="h2" className="text-arcade-cyan">
          {title}
        </Typography>
      </div>

      <div className="space-y-6">
        <section>
          <Typography variant="label" className="mb-3 block text-arcade-yellow">
            1. Visual Preview
          </Typography>
          <div className="rounded-xl border-4 border-dashed border-arcade-cyan/40 bg-arcade-navy/60 p-4 sm:p-6">
            {preview}
          </div>
        </section>

        <section>
          <Typography variant="label" className="mb-2 block text-arcade-yellow">
            2. Usage Context
          </Typography>
          <Typography variant="body-sm" color="muted" className="normal-case tracking-normal">
            {usage}
          </Typography>
        </section>

        <section>
          <Typography variant="label" className="mb-2 block text-arcade-yellow">
            3. Responsive Logic
          </Typography>
          <Typography variant="body-sm" color="muted" className="normal-case tracking-normal">
            {responsive}
          </Typography>
        </section>

        <section>
          <Typography variant="label" className="mb-2 block text-arcade-yellow">
            4. Code Reference
          </Typography>
          <pre className="overflow-x-auto rounded-xl border-4 border-black bg-black p-4 text-xs text-arcade-lime sm:text-sm">
            <code>{code}</code>
          </pre>
        </section>
      </div>
    </article>
  );
}

export default function DesignSystemPage() {
  const sampleSite = heritageSites[0];

  return (
    <div className="arcade-grid min-h-screen">
      <HeaderNavigation currentPath="/design-system" />

      <main id="main-content" className="mx-auto max-w-5xl space-y-8 px-4 py-10 sm:px-6 sm:py-14">
        <header className="arcade-panel space-y-3 p-6">
          <Typography variant="display" className="text-arcade-yellow arcade-glow">
            Atomic Design System Manual
          </Typography>
          <Typography variant="body" color="muted" className="normal-case tracking-normal">
            Component library for the Pangasinan Heritage Quest, organized using Brad Frost&apos;s Atomic Design methodology — now in arcade mode.
          </Typography>
        </header>

        <DocSection
          title="Button"
          level="Atoms"
          preview={
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost" className="border-4 border-black bg-arcade-panel text-white shadow-arcade-sm">
                Ghost
              </Button>
            </div>
          }
          usage="Primary call-to-action control for quests, scan actions, and heritage stage exploration."
          responsive="Maintains a minimum touch target of 44px (min-h-11) on all breakpoints. On mobile, full-width buttons can be applied via the fullWidth prop."
          code={`import { Button } from "@/components/atoms/Button/Button";

<Button variant="primary" size="md">Start Quest</Button>`}
        />

        <DocSection
          title="Typography"
          level="Atoms"
          preview={
            <div className="space-y-2">
              <Typography variant="display" as="p">Display Heading</Typography>
              <Typography variant="h2" className="text-arcade-cyan">Section Heading</Typography>
              <Typography variant="body" color="muted" className="normal-case tracking-normal">
                Body text for heritage descriptions.
              </Typography>
              <Typography variant="caption" className="text-arcade-yellow">Caption text</Typography>
            </div>
          }
          usage="Semantic text styles for headings, body copy, labels, and captions across all heritage pages."
          responsive="Display scales from text-3xl (mobile) to text-5xl (desktop). Headings step up one size at sm: breakpoint."
          code={`import { Typography } from "@/components/atoms/Typography/Typography";

<Typography variant="h2" as="h2">Stage Select</Typography>`}
        />

        <DocSection
          title="Color Tokens"
          level="Atoms"
          preview={<ColorTokens />}
          usage="Centralized color palette reflecting Pangasinan's coastal, cultural, and natural identity."
          responsive="Token swatches reflow from 1 column (mobile) to 3 columns (lg) for documentation previews."
          code={`import { colorTokens } from "@/tokens/colors";

// ocean-500: #1B4B7A
// sand-500: #C9A227
// forest-500: #2D5A27`}
        />

        <DocSection
          title="Icon"
          level="Atoms"
          preview={
            <div className="flex flex-wrap gap-4 text-arcade-cyan">
              <Icon name="search" />
              <Icon name="menu" />
              <Icon name="location" />
              <Icon name="heritage" />
              <Icon name="chevron-right" />
            </div>
          }
          usage="Inline SVG icons for navigation, search, and location indicators without external icon font dependencies."
          responsive="Icon size defaults to 20px but accepts a size prop. Scales proportionally within flex layouts."
          code={`import { Icon } from "@/components/atoms/Icon/Icon";

<Icon name="location" size={16} className="text-arcade-cyan" />`}
        />

        <DocSection
          title="Image"
          level="Atoms"
          preview={
            <div className="max-w-sm overflow-hidden rounded-xl border-4 border-black">
              <HeritageImage
                src={sampleSite.imageUrl}
                alt={sampleSite.name}
                aspectRatio="16/9"
                rounded={false}
              />
            </div>
          }
          usage="Optimized heritage imagery wrapper using Next.js Image for automatic lazy loading and responsive sizing."
          responsive="Aspect ratio locked via aspect-video (16/9). sizes attribute serves 100vw on mobile, 50vw on tablet, 33vw on desktop."
          code={`import { HeritageImage } from "@/components/atoms/Image/HeritageImage";

<HeritageImage
  src="/images/hundred-islands.jpg"
  alt="Hundred Islands National Park"
  aspectRatio="16/9"
/>`}
        />

        <DocSection
          title="Heritage Card"
          level="Molecules"
          preview={
            <div className="max-w-sm">
              <HeritageCard site={sampleSite} />
            </div>
          }
          usage="The Heritage Card is used exclusively for displaying tourist site previews in a responsive heritage-site grid."
          responsive="Card is full-width on mobile. Description truncates to 3 lines (line-clamp-3). Padding increases from p-4 to p-5 at sm:."
          code={`import { HeritageCard } from "@/components/molecules/HeritageCard/HeritageCard";

<HeritageCard site={heritageSite} href="/sites/hundred-islands" />`}
        />

        <DocSection
          title="Search Form"
          level="Molecules"
          preview={<SearchForm />}
          usage="Site-wide heritage search input with submit button, used in the hero section for filtering destinations."
          responsive="Stacks vertically on mobile (flex-col), switches to horizontal row (sm:flex-row) on tablet and above."
          code={`import { SearchForm } from "@/components/molecules/SearchForm/SearchForm";

<SearchForm onSearch={(query) => filterSites(query)} />`}
        />

        <DocSection
          title="Navigation Item"
          level="Molecules"
          preview={
            <div className="flex flex-wrap gap-2">
              <NavigationItem label="Home" href="/" isActive />
              <NavigationItem label="Quest Map" href="/#sites" />
            </div>
          }
          usage="Individual navigation link used inside header menus for primary site sections."
          responsive="Touch-friendly min-h-11 tap target. Active state uses arcade cyan for clear wayfinding."
          code={`import { NavigationItem } from "@/components/molecules/NavigationItem/NavigationItem";

<NavigationItem label="Design System" href="/design-system" isActive />`}
        />

        <DocSection
          title="Heritage Grid"
          level="Organisms"
          preview={<HeritageGrid sites={heritageSites.slice(0, 3)} />}
          usage="Responsive grid organism that composes Heritage Cards for the main heritage sites listing page."
          responsive="1 column (default) → 2 columns (sm) → 3 columns (lg). Gap increases from gap-5 to gap-6 at sm:."
          code={`import { HeritageGrid } from "@/components/organisms/HeritageGrid/HeritageGrid";

<HeritageGrid sites={filteredSites} title="Stage Select" />`}
        />

        <DocSection
          title="Header Navigation"
          level="Organisms"
          preview={
            <div className="-mx-4 -mt-4 overflow-hidden rounded-xl border-4 border-black">
              <HeaderNavigation currentPath="/design-system" />
            </div>
          }
          usage="Sticky site header with brand, desktop nav, and collapsible mobile menu for primary navigation."
          responsive="Desktop nav visible at md:+. Mobile hamburger toggles a slide-down menu below the header bar."
          code={`import { HeaderNavigation } from "@/components/organisms/HeaderNavigation/HeaderNavigation";

<HeaderNavigation currentPath="/" />`}
        />
      </main>
      <SiteFooter />
    </div>
  );
}
