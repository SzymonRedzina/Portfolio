// Certificates.jsx
import "../styles/Certificates.css";

// Ikony
import { FaCalendarAlt, FaUserGraduate, FaAward } from "react-icons/fa";

function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'Internship Completion – Trenitalia',
      issuer: 'Trenitalia',
      date: 'December 2024',
      description: 'Completed internship at Trenitalia, gaining experience in IT industry and developing professional skills. (160h)',
      color: '#38b763'
    },
    {
      id: 2,
      title: 'Python',
      issuer: 'Santander Open Academy',
      date: 'May 2025',
      description: 'Python training – programming basics, data structures, and algorithms. (8h)',
      color: '#3776AB'
    },
    {
      id: 3,
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: 'September 2025',
      description: 'Cybersecurity basics – data protection, risk analysis, and securing information systems. (6h)',
      color: '#1BA0E2'
    },
    {
      id: 4,
      title: 'Professional Qualification INF.03/INF.04',
      issuer: 'Ministry of National Education',
      date: 'June 2025',
      description: 'Professional qualification in programming, confirming practical and theoretical skills.',
      color: '#FFD700'
    },
    {
      id: 5,
      title: 'Android Application Development Course',
      issuer: 'ZSTiB in Brzesko',
      date: 'June 2025',
      description: 'Completed Android app development course, gaining mobile programming skills. (30h)',
      color: '#3DDC84'
    },
    {
      id: 6,
      title: 'Network Basics',
      issuer: 'Cisco Networking Academy',
      date: 'October 2025',
      description: 'Network Basics - IPv4 Addresses, Network Media, Application Layer Services, Protocols Standards, Network Types, Wireless Access (22h)',
      color: '#1BA0E2'
    },
    {
      id: 7,
      title: 'Artificial Intelligence & Machine Learning Course',
      issuer: 'ZSTiB in Brzesko',
      date: 'October 2025',
      description: 'Completed AI and Machine Learning course, gaining skills in artificial intelligence and machine learning. (45h)',
      color: '#8B5CF6'
    }
  ];

  return (
    <section className="certificates-section">
      <div className="certificates-container">
        {/* Section Header */}
        <div className="section-header">
          <h2>Certificates & Achievements</h2>
          <div className="header-line"></div>
          <p className="section-subtitle">
            Professional certifications that validate my skills and knowledge
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-icon-wrapper">
                <FaAward className="certificate-icon" style={{ color: cert.color }} />
              </div>
              <div className="certificate-content">
                <h3>{cert.title}</h3>
                <div className="certificate-meta">
                  <span className="issuer">
                    <FaUserGraduate className="meta-icon" />
                    {cert.issuer}
                  </span>
                  <span className="date">
                    <FaCalendarAlt className="meta-icon" />
                    {cert.date}
                  </span>
                </div>
                <p className="certificate-description">{cert.description}</p>
                <div className="certificate-footer">
                  <span className="certificate-badge" style={{ backgroundColor: cert.color }}>
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;