// Welcome.jsx
import { useState } from "react";
import "../styles/welcome.css";

// Ikony – importujemy wszystkie potrzebne
import { FaUser, FaHome, FaTachometerAlt, FaFolderOpen, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaThumbtack, FaMapPin } from "react-icons/fa";

function Welcome() {
  const [isNavFixed, setIsNavFixed] = useState(true);

  const toggleNavPosition = () => {
    setIsNavFixed(!isNavFixed);
  };

  return (
    <section className="hero" id="welcome">
      {/* Status badge – przesunięty lekko w lewo lub zostawiamy jak było */}
      <div className="status-badge">
        <span className="dot"></span>
        <span>Available for projects</span>
      </div>

      {/* Główna treść */}
      <div className="content">
        <h1>
          Hi, I'm Szymon.
          <br />
          A Full Stack Developer.
        </h1>

        <p className="description">
          I create beautiful, functional websites and applications.
          <br />
          Passionate about clean code, modern UI and great user experience.
        </p>

        <div className="social-buttons">
          <a href="https://github.com/SzymonRedzina" className="social-btn github" target="_blank" rel="noopener noreferrer">
            <FaGithub className="btn-icon" />
            <span className="btn-text">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/szymon-r%C4%99dzina-5b9513387/" className="social-btn linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="btn-icon" />
            <span className="btn-text">LinkedIn</span>
          </a>
          <a href="#message" className="social-btn email">
            <FaEnvelope className="btn-icon" />
            <span className="btn-text">Email</span>
          </a>
          <a href="#AboutMe" className="social-btn explore">
            <span>Explore More</span>
            <span className="arrow-icon">→</span>
          </a>
        </div>
      </div>

      {/* Nawigacja – z przyciskiem pinezki */}
      <nav id="navigation" className={isNavFixed ? 'fixed-nav' : 'absolute-nav'}>
        <button className="pin-button" onClick={toggleNavPosition} title="Toggle navigation position">
          <FaMapPin className={`pin-icon ${isNavFixed ? 'pinned' : 'unpinned'}`} />
        </button>
        <a href="#welcome" className="nav-link" title="Home">
          <FaHome className="nav-icon" />
          <span>Welcome</span>
        </a>
        <a href="#AboutMe" className="nav-link" title="About Me">
          <FaUser className="nav-icon" />
          <span>About&nbsp;Me</span>
        </a>
        <a href="#projects" className="nav-link" title="Projects">
          <FaFolderOpen className="nav-icon" />
          <span>Projects</span>
        </a>
        <a href="#message" className="nav-link" title="Contact">
          <FaEnvelope className="nav-icon" />
          <span>Message</span>
        </a>
      </nav>
    </section>
  );
}

export default Welcome;