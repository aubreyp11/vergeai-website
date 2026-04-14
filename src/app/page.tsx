import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Services from "@/components/services";
import About from "@/components/about";
import FAQ from "@/components/faq";
import CtaBanner from "@/components/cta-banner";
import ProfessionalsWaitlist from "@/components/professionals-waitlist";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
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
