import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Section } from "@/components/Section";
import {
  About,
  Achievements,
  Contact,
  Education,
  ExperienceSection,
  Footer,
  Skills,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected"
          accent="projects"
          intro="Web builds, dashboards and data pipelines from coursework, competitions, internships and my own curiosity."
        >
          <div className="blob -left-40 top-20 h-[420px] w-[460px] bg-mint" />
          <div className="blob -right-40 bottom-20 h-[420px] w-[460px] bg-lime/70" />
          <Projects />
        </Section>
        <ExperienceSection />
        <Achievements />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
