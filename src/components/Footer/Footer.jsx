import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaInstagram, 
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & Bio */}
          <div className="footer-section bio">
            <h3 className="footer-title">Surendra nath bezawada</h3>
            <p className="footer-bio">
              A dedicated Full Stack Developer and UI/UX Designer passionate about crafting 
              immersive digital experiences. Specializing in modern web technologies to 
              build scalable applications with a focus on clean code and user-centric design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section links">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Icons */}
          <div className="footer-section contact">
            <h4 className="footer-subtitle">Connect With Me</h4>
            <div className="contact-icons">
              <a href="https://wa.me/918688119095" target="_blank" rel="noreferrer" className="contact-icon-btn whatsapp" title="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="mailto:surendranathbezawada@gmail.com" className="contact-icon-btn mail" title="Email">
                <FaEnvelope />
              </a>
              <a href="#" className="contact-icon-btn instagram" title="Instagram">
                <FaInstagram />
              </a>
              <a href="tel:8688119095" className="contact-icon-btn call" title="Call">
                <FaPhone />
              </a>
            </div>
          </div>
          {/* Map Location */}
          <div className="footer-section footer-map">
            <h4 className="footer-subtitle">Find Me</h4>
            <div className="footer-map-container glass-card">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.8336043179565!2d79.89886317522054!3d15.222996396721395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b128a51252d71%3A0x8fddaeb5ccc4c62d!2s22-1-52%2F5%2C%20Rural%20Police%20Station%20Area%2C%20Santhosh%20Nagar%2C%20Kandukur%2C%20Andhra%20Pradesh%20523105!5e1!3m2!1sen!2sin!4v1777737220272!5m2!1sen!2sin" 
                width="100%" 
                height="120" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Footer Location Map"
              ></iframe>
            </div>
            <div className="footer-location">
              <FaMapMarkerAlt /> <span>Kandukur, AP, India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Surendra nath bezawada. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
