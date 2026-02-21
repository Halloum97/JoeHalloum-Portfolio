import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Joe Halloum — Full-Stack Engineer",
  description:
    "Full-Stack Engineer building scalable web apps, AI agents, and data-backed systems. React • Node • AWS.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Joe Halloum — Full-Stack Engineer",
    description:
      "Full-Stack Engineer building scalable web apps, AI agents, and data-backed systems. React • Node • AWS.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-[var(--font-inter)] text-white/90 antialiased">
        {children}
      </body>
    </html>
  );
}
