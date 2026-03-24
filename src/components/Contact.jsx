// Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

// Ikony
import { FaPhone, FaEnvelope, FaUser, FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaClock, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_19lmpig",
        "template_fkb2he9", 
        form.current,
        "jsFLy_-DM0S1y-Poq" 
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
          setIsSubmitting(false);
          setTimeout(() => setStatus(""), 5000);
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Error sending message. Please try again.");
          setIsSubmitting(false);
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <div className="header-line"></div>
          <p className="section-subtitle">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <a href="mailto:szymonredzina0@gmail.com">szymonredzina0@gmail.com</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <a href="tel:577963672">577 963 672</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-content">
                <h3>Response Time</h3>
                <p>Usually within 24 hours</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaCheckCircle />
              </div>
              <div className="info-content">
                <h3>Availability</h3>
                <p>Available for freelance & full-time</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="user_name">
                <FaUser className="input-icon" />
                Your Name
              </label>
              <input 
                type="text" 
                name="user_name" 
                id="user_name" 
                required 
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="user_email">
                <FaEnvelope className="input-icon" />
                Your Email
              </label>
              <input 
                type="email" 
                name="user_email" 
                id="user_email" 
                required 
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Your Message
              </label>
              <textarea 
                name="message" 
                id="message" 
                rows="6" 
                required 
                placeholder="Hi Szymon, I'd like to discuss..."
              />
            </div>

            <button 
              id="submit-button" 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending... <FaPaperPlane className="btn-icon" /></>
              ) : (
                <>Send Message <FaPaperPlane className="btn-icon" /></>
              )}
            </button>
            
            {status && (
              <div className={`status-message ${status.includes('✅') ? 'success' : 'error'}`}>
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;