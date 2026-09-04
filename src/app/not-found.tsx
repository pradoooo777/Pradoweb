import Link from "next/link";
import { Typography } from "@/components/atoms/Typography/Typography";
import { HeaderNavigation } from "@/components/organisms/HeaderNavigation/HeaderNavigation";
import { SiteFooter } from "@/components/organisms/SiteFooter/SiteFooter";

export default function NotFound() {
  return (
    <div className="arcade-grid min-h-screen">
      <HeaderNavigation />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-16">
        <div className="arcade-panel space-y-4 p-8">
          <Typography variant="display" className="text-arcade-yellow">
            Stage not found
          </Typography>
          <Typography variant="body" color="muted" className="normal-case tracking-normal">
            This heritage quest does not exist. Return to the map and pick another stage.
          </Typography>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border-4 border-black bg-arcade-cyan px-5 text-sm font-black uppercase tracking-wide text-black"
          >
            Back home
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
