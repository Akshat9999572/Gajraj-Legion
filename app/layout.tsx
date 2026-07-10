import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gajraj Legion | UTPL 2026",
  description: "Official team page of Gajraj Legion for the Unnao Teachers' Premier League 2026 T25 tournament.",
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
