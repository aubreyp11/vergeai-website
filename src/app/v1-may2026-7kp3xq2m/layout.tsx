import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "v1 May 2026 Snapshot",
  description: "Frozen snapshot of vergeai.co prior to May 2026 copy revisions.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  alternates: { canonical: undefined },
};

export default function SnapshotLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
