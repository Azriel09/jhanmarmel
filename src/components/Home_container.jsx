import { useRef } from "react";
import Hero from "./Hero";
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contacts";
import Projects from "./Projects";

export default function HomeContainer() {
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
