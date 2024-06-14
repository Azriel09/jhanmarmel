import "./styles/about.css";
import "./styles/main-styles.css";
import { InView } from "react-intersection-observer";
export default function About({ about }) {
  return (
    <div className="about page" ref={about}>
      <InView
        as="div"
        onChange={(inView, entry) => console.log("Inview:", inView)}
      >
        <h2 className="page-header">About</h2>
        <div className="about-content">
          <div className="about-me"></div>
          <div className="about-skills"></div>
        </div>
      </InView>
    </div>
  );
}
