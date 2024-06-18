import { Outlet } from "react-router-dom";
import "./styles/navigation.css";
import Hero from "./Hero";
import { useState, useEffect, useRef } from "react";
import { useSectionState } from "../context/section_context";
export default function Navigation({
  hero,
  projects,
  about,
  contacts,
  scrollToSection,
}) {
  const navigation = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const { currentSection } = useSectionState();
  const handleScroll = () => {
    const navContainer = document.getElementById("nav-container");
    const origPost = navContainer.getBoundingClientRect();

    if (origPost.top <= 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return;
  }, []);

  return (
    <div id="nav-container">
      <div
        className={isSticky ? "sticky" : "notSticky"}
        id="navbar"
        ref={navigation}
      >
        <div className="link-container">
          <a
            onClick={() => scrollToSection(hero)}
            className={`nav-link ${
              currentSection == "hero" ? "highlight" : ""
            } `}
          >
            Home
          </a>
        </div>
        <div className="link-container">
          <a
            onClick={() => scrollToSection(about)}
            className={`nav-link ${
              currentSection == "about" ? "highlight" : ""
            } `}
          >
            About
          </a>
        </div>
        <div className="link-container">
          <a
            onClick={() => scrollToSection(projects)}
            className={`nav-link ${
              currentSection == "projects" ? "highlight" : ""
            } `}
          >
            Projects
          </a>
        </div>
        <div className="link-container">
          <a
            onClick={() => scrollToSection(contacts)}
            className={`nav-link ${
              currentSection == "contact" ? "highlight" : ""
            } `}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
