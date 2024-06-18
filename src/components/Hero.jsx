import "./styles/hero.css";
export default function Hero({ hero, about, scrollToSection }) {
  return (
    <div className="hero" ref={hero}>
      <div className="header">
        <div className="heading line1">
          Hello, I&#39;m <span className="name">Jhan</span>
        </div>
        <div className="heading line2">I&#39;m a Front-end Developer</div>
        <div className="heading line3" onClick={() => scrollToSection(about)}>
          View My Work ↓
        </div>
      </div>
    </div>
  );
}
