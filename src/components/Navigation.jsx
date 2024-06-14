import { Outlet } from "react-router-dom";
import "./styles/navigation.css";
import Hero from "./Hero";
import { useState, useEffect, useRef } from "react";
export default function Navigation({
  hero,
  projects,
  about,
  contacts,
  scrollToSection,
}) {
  const navigation = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
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
          <a onClick={() => scrollToSection(hero)} className="nav-link">
            HOME
          </a>
        </div>
        <div className="link-container">
          <a onClick={() => scrollToSection(about)} className="nav-link">
            ABOUT
          </a>
        </div>
        <div className="link-container">
          <a onClick={() => scrollToSection(projects)} className="nav-link">
            PROJECTS
          </a>
        </div>
        <div className="link-container">
          <a onClick={() => scrollToSection(contacts)} className="nav-link">
            CONTACTS
          </a>
        </div>
      </div>
    </div>
  );
}
