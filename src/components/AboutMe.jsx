// AboutMe.js
import "../styles/AboutMe.css";

// Ikony
import { FaMapMarkerAlt, FaLanguage, FaGraduationCap, FaCode, FaHeart, FaShareAlt, FaUser } from "react-icons/fa";
import { GiPoland } from "react-icons/gi";
import { FaGithub, FaLinkedin, FaStrava, FaFacebook, FaPhone } from "react-icons/fa";

function AboutMe() {
  // Technologie z oznaczeniem które są główne (umiem najlepiej)
  const technologies = [
    { name: "React", isMain: true },
    { name: "JavaScript", isMain: true },
    { name: "TypeScript", isMain: false },
    { name: "HTML5", isMain: true },
    { name: "CSS3", isMain: true },
    { name: "Node.js", isMain: true },
    { name: "Git", isMain: true },
    { name: "Tailwind", isMain: true },
    { name: "Next.js", isMain: false },
    { name: "Python", isMain: false },
    { name: "Java", isMain: true },
    { name: "MongoDB", isMain: false },
    { name: "Express.js", isMain: false },
    { name: "Spring", isMain: false },
    { name: "C#", isMain: true }
  ];

  return (
    <section className="about-section" id="AboutMe">
      <div className="about-container">
        {/* Nagłówek sekcji */}
        <div className="section-header">
          <h2>About Me</h2>
          <div className="header-line"></div>
        </div>

        {/* Grid 8x8 */}
        <div className="about-grid">
          {/* div1 - Zdjęcie */}
<div className="card photo-card div1">
  <div className="photo-placeholder">
    <h1>SR</h1>
  </div>
</div>

          {/* div2 - Lokalizacja (mały kafelek) */}
          <div className="card location-card div2">
            <div className="card-icon-small">
              <FaMapMarkerAlt />
            </div>
            <div className="location-compact">
              <span className="location-text">Małopolska, Brzesko</span>
              <GiPoland className="flag-icon-small" />
            </div>
          </div>

          {/* div3 - Języki z flagami jako obrazy */}
          <div className="card languages-card div3">
            <div className="card-icon">
              <FaLanguage />
            </div>
            <h3>Languages</h3>
            <div className="language-list">
              <div className="language-item">
                <div className="language-flag">
                  <img src="./polska.png" alt="Polish Flag" className="flag-image" />
                </div>
                <span className="language-name">Polish</span>
                <span className="language-level native">Native</span>
              </div>
              <div className="language-item">
                <div className="language-flag">
                  <img src="./anglia.png" alt="English Flag" className="flag-image" />
                </div>
                <span className="language-name">English</span>
                <span className="language-level c1">C1</span>
              </div>
              <div className="language-item">
                <div className="language-flag">
                  <img src="./niemcy.png" alt="German Flag" className="flag-image" />
                </div>
                <span className="language-name">German</span>
                <span className="language-level b2">B2</span>
              </div>
            </div>
          </div>

          {/* div4 - O mnie z sekcjami zainteresowań i social media */}
          <div className="card about-text-card div4">
            <div className="card-icon">
              <FaUser />
            </div>
            <h3>About Me</h3>
            <p>
             I am a 5th-year technical secondary school student in the
Programming Technician program, focused on developing as a
<b> Junior Full-Stack Developer</b>. I specialize in building modern web
applications using React, which I use in most of my projects. I
am currently expanding my skills in cybersecurity.
Programming is my passion — I constantly improve my skills
and eagerly take on new challenges.
            </p>
            
            {/* Sekcje zainteresowań i social media */}
            <div className="about-footer">
              <div className="interests-section">
                <div className="section-title">
                  <FaHeart className="section-icon" />
                  <h4>Interests</h4>
                </div>
                <div className="interests-list">
                  <span className="interest-tag">🎮 Gaming</span>
                  <span className="interest-tag">🏎️ F1</span>
                  <span className="interest-tag">🎵 Music</span>
                  <span className="interest-tag">💪 Gym</span>
                  <span className="interest-tag">🏃 Running</span>
                  <span className="interest-tag">✈️ Traveling</span>
                </div>
              </div>
              
              <div className="social-section">
                <div className="section-title">
                  <FaShareAlt className="section-icon" />
                  <h4>Connect with Me</h4>
                </div>
                <div className="social-links-mini">
                  <a href="https://github.com/SzymonRedzina" target="_blank" rel="noopener noreferrer" className="social-mini-link">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/szymon-r%C4%99dzina-5b9513387/" target="_blank" rel="noopener noreferrer" className="social-mini-link">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=100067241134025" target="_blank" rel="noopener noreferrer" className="social-mini-link">
                    <FaFacebook />
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          {/* div5 - Wykształcenie */}
          <div className="card education-card div5">
            <div className="card-icon">
              <FaGraduationCap />
            </div>
            <h3>Education</h3>
            <div className="education-details">
              <div className="school">
                <h4>ZSTiB im. Bohaterów Westerplatte</h4>
                <p className="school-field">Programming technician</p>
                <p className="school-year">Brzesko | 2021 - 2026</p>
              </div>
            </div>
          </div>

          {/* div6 - Umiejętności - badge'e technologii */}
          <div className="card skills-card div6">
            <div className="card-icon">
              <FaCode />
            </div>
            <h3>Tech Stack</h3>
            <div className="tech-badges-container">
              {technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className={`tech-badge ${tech.isMain ? 'main-tech' : ''}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;