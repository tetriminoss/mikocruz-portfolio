import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Achievements />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
