import { Typography } from "@/components/atoms/Typography/Typography";
import { STUDENT_NAME } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-black bg-black px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl space-y-2">
        <Typography variant="body-sm" className="text-arcade-yellow">
          Pangasinan Provincial Tourism Office — Heritage Digital Showcase
        </Typography>
        <Typography variant="caption" className="block text-cyan-100">
          Built by {STUDENT_NAME} · Next.js static site · Activity 2
        </Typography>
      </div>
    </footer>
  );
}
