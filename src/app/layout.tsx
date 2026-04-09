import type { Metadata, Viewport } from "next";
import { figtree } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Verge AI — AI Strategy for Small Business",
    template: "%s | Verge AI",
  },
  description:
    "Verge AI helps small business owners cut through the noise and actually use AI to save time, grow revenue, and get back to the work that matters.",
  metadataBase: new URL("https://vergeai.co"),
  openGraph: {
    title: "Verge AI — AI Strategy for Small Business",
    description:
      "Verge AI helps small business owners cut through the noise and actually use AI to save time, grow revenue, and get back to the work that matters.",
    url: "https://vergeai.co",
    siteName: "Verge AI",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verge AI — AI Strategy for Small Business",
    description:
      "AI strategy consulting for small businesses ready to save time, grow revenue, and compete.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2B4C7E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} h-full antialiased`}>
      <body className="font-sans min-h-full flex flex-col">{children}</body>
    </html>
  );
}
