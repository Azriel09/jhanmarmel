import "./styles/about.css";
import "./styles/main-styles.css";
import ProfilePNG from "../assets/profile-icon.png";
import JavascriptPNG from "../assets/javascript.png";
import HtmlPNG from "../assets/html.png";
import CssPNG from "../assets/css.png";
import MongoDBPNG from "../assets/mongodb.png";
import NodeJSPNG from "../assets/nodejs.png";
import SassPNG from "../assets/sass.png";
import ReactPNG from "../assets/react.png";
import MuiPNG from "../assets/mui.png";
import AWSPNG from "../assets/aws.png";
import GitPNG from "../assets/git.png";
export default function About({ about }) {
  return (
    <div className="about page">
      <h2 className="page-header">About</h2>
      <div className="about-content" ref={about}>
        <div className="about-me">
          <img src={ProfilePNG} className="profile-icon" />
          <div className="about-me-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="about-skills">
          <div className="1st skill-column">
            <div className="skill-container">
              <img src={HtmlPNG} alt="html-icon" className="skill-icon" />
              <div className="skill-name">HTML</div>
            </div>
            <div className="skill-container">
              <img src={CssPNG} alt="css-icon" className="skill-icon" />
              <div className="skill-name">CSS</div>
            </div>
            <div className="skill-container">
              <img src={GitPNG} alt="git-icon" className="skill-icon" />
              <div className="skill-name">GIT</div>
            </div>
          </div>
          <div className="2nd skill-column">
            <div className="skill-container">
              <img
                src={JavascriptPNG}
                alt="javascript-icon"
                className="skill-icon"
              />
              <div className="skill-name">JAVASCRIPT</div>
            </div>
            <div className="skill-container">
              <img src={ReactPNG} alt="react-icon" className="skill-icon" />
              <div className="skill-name">REACT</div>
            </div>
            <div className="skill-container">
              <img src={AWSPNG} alt="aws-icon" className="skill-icon" />
              <div className="skill-name">AWS</div>
            </div>
            <div className="skill-container">
              <img src={MongoDBPNG} alt="mongodb-icon" className="skill-icon" />
              <div className="skill-name">MONGODB</div>
            </div>
          </div>
          <div className="3rd skill-column">
            <div className="skill-container">
              <img src={NodeJSPNG} alt="nodejs-icon" className="skill-icon" />
              <div className="skill-name">NODE.JS</div>
            </div>
            <div className="skill-container">
              <img src={SassPNG} alt="sass-icon" className="skill-icon" />
              <div className="skill-name">SASS</div>
            </div>
            <div className="skill-container">
              <img src={MuiPNG} alt="mui-icon" className="skill-icon" />
              <div className="skill-name">MUI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
