import { Outlet } from "react-router-dom";
import "./styles/navigation.css";
import Hero from "./Hero";
export default function Navigation({
  hero,
  projects,
  about,
  contacts,
  scrollToSection,
}) {
  return (
    <>
      <div className="nav-bar">
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
    </>
  );
}
