import { useRef } from "react";
import Hero from "./Hero";
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contacts";
import Projects from "./Projects";
import { useSectionState } from "../context/section_context";
import { useElementDetector } from "use-detector-hook";
export default function HomeContainer() {
  const { setCurrentSection } = useSectionState();
  const hero = useRef(null);
  const projects = useRef(null);
  const about = useRef(null);
  const contacts = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  // DETECTS CURRENT SECTION FOR NAVBAR LINK HIGHLIGHT
  const heroVisible = useElementDetector(
    hero,
    { threshold: 0.6 },
    {
      onTriggerEnter: () => setCurrentSection("hero"),
    }
  );
  const aboutVisible = useElementDetector(
    about,
    { threshold: 0.6 },
    {
      onTriggerEnter: () => setCurrentSection("about"),
    }
  );
  const projectsVisible = useElementDetector(
    projects,
    { threshold: 0.6 },
    {
      onTriggerEnter: () => setCurrentSection("projects"),
    }
  );
  const contactVisible = useElementDetector(
    contacts,
    { threshold: 0.6 },
    {
      onTriggerEnter: () => setCurrentSection("contact"),
    }
  );
  return (
    <>
      <Hero hero={hero} scrollToSection={scrollToSection} about={about} />
      <Navigation
        scrollToSection={scrollToSection}
        hero={hero}
        projects={projects}
        about={about}
        contacts={contacts}
      />
      <About about={about} scrollToSection={scrollToSection} />
      <Projects projects={projects} scrollToSection={scrollToSection} />
      <Contact contacts={contacts} scrollToSection={scrollToSection} />
    </>
  );
}
