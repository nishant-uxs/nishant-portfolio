import { Hero } from "@/components/sections/Hero";
import { Tools } from "@/components/sections/Tools";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { OpenSource } from "@/components/sections/OpenSource";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Tools />
      <About />
      <Projects />
      <OpenSource />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
