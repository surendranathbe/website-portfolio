import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* ── Contact Banner ── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="contact-banner"
      >
        <div className="container">
          <div className="contact-banner-content">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="banner-title text-center"
            >
              Contact <span className="text-gradient">Me</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="banner-subtitle text-center"
            >
              Let's Collaborate • Build Innovations • Scale Together
            </motion.p>
          </div>
        </div>
      </motion.section>

      <div className="container section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
          <p className="section-subtitle">Have a project in mind? Let's build something amazing together.</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <div className="contact-card glass-card">
              <h3>Contact Information</h3>
              <div className="info-list">
                <a href="mailto:surendranathbezawada@gmail.com" className="info-item">
                  <Mail className="info-icon" />
                  <div>
                    <p className="info-label">Email</p>
                    <p className="info-value">surendranathbezawada@gmail.com</p>
                  </div>
                </a>
                <a href="tel:8688119095" className="info-item">
                  <Phone className="info-icon" />
                  <div>
                    <p className="info-label">Phone</p>
                    <p className="info-value">8688119095</p>
                  </div>
                </a>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=kandukur+Andhra+Pradesh+523105" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="info-item"
                >
                  <MapPin className="info-icon" />
                  <div>
                    <p className="info-label">Location</p>
                    <p className="info-value">Kandukur, Andhra Pradesh 523105</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-wrapper"
          >
            <form className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="5" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message <Send size={18} style={{ marginLeft: '10px' }} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* ── Google Map Section ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="map-section"
        >
          <div className="map-card glass-card">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.8336043179565!2d79.89886317522054!3d15.222996396721395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b128a51252d71%3A0x8fddaeb5ccc4c62d!2s22-1-52%2F5%2C%20Rural%20Police%20Station%20Area%2C%20Santhosh%20Nagar%2C%20Kandukur%2C%20Andhra%20Pradesh%20523105!5e1!3m2!1sen!2sin!4v1777737220272!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Kandukur Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
