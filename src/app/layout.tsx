import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { PROJECT_TITLE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PROJECT_TITLE,
    template: `%s | ${PROJECT_TITLE}`,
  },
  description:
    "A mobile-first digital showcase of Pangasinan heritage sites, including Hundred Islands, Cape Bolinao Lighthouse, and Balungao Hot Spring.",
  applicationName: PROJECT_TITLE,
  authors: [{ name: "John Recto Prado" }],
  keywords: [
    "Pangasinan",
    "heritage",
    "Hundred Islands",
    "Bolinao Lighthouse",
    "Balungao Hot Spring",
    "tourism",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: PROJECT_TITLE,
    description:
      "Explore Pangasinan heritage sites through a fast, accessible, static Next.js showcase.",
    type: "website",
    locale: "en_PH",
    url: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12082b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:border-4 focus:border-black focus:bg-arcade-yellow focus:px-4 focus:py-2 focus:font-black focus:uppercase focus:text-black"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
