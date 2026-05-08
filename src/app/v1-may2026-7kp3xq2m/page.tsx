import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import HowItWorks from "./_components/how-it-works";
import Services from "./_components/services";
import About from "./_components/about";
import FAQ from "./_components/faq";
import CtaBanner from "./_components/cta-banner";
import ProfessionalsWaitlist from "./_components/professionals-waitlist";
import Footer from "./_components/footer";

export default function SnapshotV1May2026() {
  return (
    <>
      <Navbar />
      <main>
        <div className="bg-navy/95 text-white text-center text-xs font-medium tracking-wide py-2 px-4">
          Frozen snapshot · vergeai.co as of May 8, 2026 · noindex
        </div>
        <Hero />
        <HowItWorks />
        <Services />
        <About />
        <CtaBanner />
        <ProfessionalsWaitlist />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
