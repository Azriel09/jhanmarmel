import "./styles/about.css";
import "./styles/main-styles.css";
export default function About({ about }) {
  return (
    <div className="about page" ref={about}>
      <h2 className="page-header">ABOUT</h2>
      <div className="about-content">
        <div className="about-me"></div>
        <div className="about-skills"></div>
      </div>
    </div>
  );
}
