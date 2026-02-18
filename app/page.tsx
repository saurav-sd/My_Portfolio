import Hero from "@/components/Hero"
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Contact/>
    </>
  );
}
