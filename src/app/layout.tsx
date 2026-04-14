import type { Metadata, Viewport } from "next";
import { figtree } from "@/lib/fonts";
import { HOMEPAGE_FAQS } from "@/lib/faqs";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Verge AI — AI Strategy for Small Business",
    template: "%s | Verge AI",
  },
  description:
    "Verge AI helps small business owners cut through the noise and actually use AI to save time, grow revenue, and get back to the work that matters.",
  metadataBase: new URL("https://vergeai.co"),
  alternates: {
    canonical: "https://vergeai.co",
  },
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

// JSON-LD structured data for AI platforms (ChatGPT, Claude, Perplexity, Google AI Overviews).
// Hoisted to module scope so it is built once per server start rather than on every request.
const STRUCTURED_DATA = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://vergeai.co/#organization",
    name: "Verge AI",
    alternateName: "Verge AI Strategy",
    url: "https://vergeai.co",
    logo: "https://vergeai.co/images/verge-ai-logo.png",
    description:
      "Verge AI is an AI strategy consultancy helping small business owners use AI to save time, grow revenue, and get back to the work that matters. Founded by Aubrey Perez.",
    email: "info@vergeai.co",
    founder: {
      "@type": "Person",
      "@id": "https://vergeai.co/#founder",
      name: "Aubrey Perez",
      jobTitle: "Founder and AI Strategy Consultant",
      worksFor: { "@id": "https://vergeai.co/#organization" },
      sameAs: ["https://www.linkedin.com/in/aubreyperez11"],
    },
    areaServed: [
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "United States" },
    ],
    knowsAbout: [
      "AI strategy",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "AI workflow automation",
      "Small business AI adoption",
      "Marketing technology",
    ],
    sameAs: ["https://www.linkedin.com/in/aubreyperez11"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://vergeai.co/#website",
    url: "https://vergeai.co",
    name: "Verge AI",
    description:
      "AI strategy consulting for small business owners who want to use AI to save time, grow revenue, and compete.",
    publisher: { "@id": "https://vergeai.co/#organization" },
    inLanguage: "en-CA",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://vergeai.co",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOMEPAGE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];
const STRUCTURED_DATA_JSON = JSON.stringify(STRUCTURED_DATA);

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
      <body className="font-sans min-h-full flex flex-col">
        {children}
        <StructuredData json={STRUCTURED_DATA_JSON} />
      </body>
    </html>
  );
}
