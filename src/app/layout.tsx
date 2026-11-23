import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import { profile } from "@/data/portfolio";
import "./globals.css";

const title = `${profile.name} — Information Systems Graduate`;
const description =
  "Portfolio Risma Maulani, lulusan S1 Sistem Informasi dengan pengalaman di system analysis, dokumentasi sistem, pengelolaan data, administrasi, dan digital marketing.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s | ${profile.name}`,
  },
  description,
  keywords: [
    "Risma Maulani",
    "Sistem Informasi",
    "System Analyst",
    "Data Administration",
    "Digital Marketing",
    "Portfolio",
    "Bandung",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: profile.siteUrl,
    siteName: `${profile.name} Portfolio`,
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0f1f3d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
