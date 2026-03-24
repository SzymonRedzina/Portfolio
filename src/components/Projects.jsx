// Projects.jsx
import { useState } from "react";
import "../styles/projects.css";

// Icons
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Projects - updated data
const projectsData = [
  {
    id: 0,
    title: "InvAI",
    domain: "invai.pl",
    technologies: ["React", "Node.js", "Supabase", "JavaScript", "CSS"],
    description: "AI-powered inventory system for small and medium businesses. Combines classic warehouse functions with advanced artificial intelligence support.",
    longDescription: "InvAI is a system designed primarily for small and medium businesses with warehouses. It operates at invai.pl and combines classic warehouse and inventory functions with advanced artificial intelligence support in an intuitive, dark interface. The system uses React for frontend development, Node.js as the backend, and Supabase for database management and user authentication. With AI integration, the application offers intelligent recommendations, demand forecasting, and warehouse process optimization.",
    images: [
      "./invai1.png",
      "./invai2.png",
      "./invai3.png",
      "./invai4.png",
      "./invai5.png",
    ],
    github: "",
    liveUrl: "https://invai.pl",
    isBiggest: true
  },
  {
    id: 1,
    title: "Parafia Borzęcin Dolny",
    domain: "parafiaborzecindolny.pl",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    description: "Parish website with admin panel, photo gallery, dynamic announcements, and interactive cemetery map.",
    longDescription: "The website for the parish of Borzęcin Dolny built primarily with PHP using MySQL database. The project includes an admin panel for managing announcements and posts, as well as a dynamic JavaScript photo gallery. The site is fully responsive and currently published online, accessible to users. The system allows easy content management without requiring programming knowledge.",
    images: [
      "./parafia1.png",
      "./dane.png",
      "./parafia2.png",
      "./parafia3.png",
      "./parafia4.png",
      "./parafia5.png",
      "./parafia6.png",
      "./parafia7.png",
      "./parafia8.png",
    ],
    github: "",
    liveUrl: "https://parafiaborzecindolny.pl"
  },
  {
    id: 2,
    title: "Sylwia Golińska",
    domain: "sylwiagolinska.pl",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description: "Responsive website built with pure HTML, CSS, and JavaScript.",
    longDescription: "A website created using HTML, CSS, and JavaScript. The project is fully responsive and currently published online, accessible to users. It features modern design and smooth animations, providing an excellent user experience across all devices.",
    images: [
      "./sylwia.png"
    ],
    github: "",
    liveUrl: "https://sylwiagolinska.pl"
  },
  {
    id: 3,
    title: "Calculator",
    domain: "React Calculator",
    technologies: ["React", "CSS3", "JavaScript"],
    description: "Simple calculator built using the React library.",
    longDescription: "A simple calculator built using the React library. It enables basic mathematical operations and serves as an example of an interactive frontend application. The project demonstrates state management in React and the creation of functional components using hooks.",
    images: [
      "./calc.png"
    ],
    github: "https://szymonredzina.github.io/Calculator/",
    liveUrl: "https://szymonredzina.github.io/Calculator/"
  },
  {
    id: 4,
    title: "Quiz App",
    domain: "React Quiz Application",
    technologies: ["React", "CSS3", "JavaScript"],
    description: "Quiz application allowing users to test their knowledge through a series of questions.",
    longDescription: "A quiz application built in React, allowing users to test their knowledge through a series of questions. The project illustrates state management and application logic in React. It includes a scoring system, result display, and the ability to restart the quiz.",
    images: [
      "./quiz.png"
    ],
    github: "https://github.com/SzymonRedzina/Quiz-app",
    liveUrl: "https://github.com/SzymonRedzina/Quiz-app"
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="projects-section" id="projects">
        <div className="projects-container">
          {/* Section Header */}
          <div className="section-header">
            <h2>My Projects</h2>
            <div className="header-line"></div>
            <p className="section-subtitle">
              Here are some of my recent works. Click on any project to see more details.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card project-${index + 1} ${project.isBiggest ? 'biggest-project' : ''}`}
                onClick={() => openModal(project)}
              >
                {/* Badge "My Biggest Project" only for InvAI */}
                {project.isBiggest && (
                  <div className="biggest-badge">
                    My Biggest Project
                  </div>
                )}
                <div className="project-image">
                  <img src={project.images[0]} alt={project.title} />
                  <div className="project-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-domain">{project.domain}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            
            <div className="modal-content">
              {/* Image Gallery */}
              <div className="modal-gallery">
                <div className="gallery-main">
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button className="gallery-nav prev" onClick={prevImage}>
                        <FaChevronLeft />
                      </button>
                      <button className="gallery-nav next" onClick={nextImage}>
                        <FaChevronRight />
                      </button>
                    </>
                  )}
                </div>
                
                {selectedProject.images.length > 1 && (
                  <div className="gallery-thumbnails">
                    {selectedProject.images.map((img, idx) => (
                      <div 
                        key={idx} 
                        className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(idx)}
                      >
                        <img src={img} alt={`Thumbnail ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Information */}
              <div className="modal-info">
                <h2>{selectedProject.title}</h2>
                <p className="modal-domain">{selectedProject.domain}</p>
                
                <div className="modal-tech">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="modal-description">
                  <h3>About the Project</h3>
                  <p>{selectedProject.longDescription}</p>
                </div>
                
                <div className="modal-links">
                  {selectedProject.github && (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-link github"
                    >
                      <FaGithub /> View on GitHub
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="modal-link live"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;