import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Tools />
        <Features />
        <Showcase />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
