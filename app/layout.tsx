import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gajraj-legion.vercel.app"),
  title: "Gajraj Legion | UTPL 2026",
  description: "Official team page of Gajraj Legion for the Unnao Teachers' Premier League 2026 T25 tournament.",
  openGraph: {
    title: "Gajraj Legion | UTPL 2026",
    description: "The royal force of Unnao Teachers' Premier League 2026.",
    url: "/",
    siteName: "Gajraj Legion",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-whatsapp.png?v=2",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Gajraj Legion — The Royal Force of UTPL 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gajraj Legion | UTPL 2026",
    description: "The royal force of Unnao Teachers' Premier League 2026.",
    images: ["/og-whatsapp.png?v=2"],
  },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
