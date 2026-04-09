import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Services from "@/components/services";
import About from "@/components/about";
import CtaBanner from "@/components/cta-banner";
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
      </main>
      <Footer />
    </>
  );
}
