import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaBrain, FaRocket, FaPalette } from 'react-icons/fa';
import aboutImg from '../../assets/about-page-2.png';
import exclerLogo from '../../assets/excler-intership.png';
import collegeLogo from '../../assets/collage-logo.jpg';
import coachingLogo from '../../assets/coaching-logo.jpg';
import mobomoLogo from '../../assets/mobomo-logo.jpg';
import figmaLogo from '../../assets/figma-logo.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* ── About Banner ── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="about-banner"
      >
        <div className="container">
          <div className="about-banner-content">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="banner-title text-center"
            >
              <div className="title-logo-wrapper">
                <img src={aboutImg} alt="Logo" className="title-logo" />
              </div>
              About <span className="text-gradient">Me</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="banner-subtitle text-center"
            >
              Software Engineer • UI/UX Designer • Problem Solver
            </motion.p>
          </div>
        </div>
      </motion.section>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-image"
            >
              <div className="image-stack">
                <img src={aboutImg} alt="About Me" className="main-img" />
                <div className="img-glow"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-content"
            >
              <h2 className="section-title text-left">Who <span className="text-gradient">I Am</span></h2>

              <p className="lead">
                A passionate Full Stack Developer with hands-on experience in building modern, scalable, and user-focused web applications. I enjoy transforming creative ideas into powerful digital solutions through clean code, innovative thinking, and problem-solving.
              </p>

              <p>
                My journey in software development started with a strong curiosity about how websites and digital platforms work behind the scenes. This interest led me to explore frontend technologies like HTML, CSS, JavaScript, React.js, and modern UI frameworks, while also building expertise in backend development using technologies such as Node.js, databases, APIs, and server-side architecture.
              </p>

              <p>
                Currently, I work on developing responsive websites, business applications, and custom digital solutions that deliver both performance and exceptional user experience. I focus on writing maintainable code, optimizing application performance, and creating interfaces that are visually engaging and highly functional.
              </p>

              <p>
                Beyond coding, I continuously explore emerging technologies, software architecture patterns, and industry best practices to improve my skills. I enjoy collaborating with teams, solving real-world challenges, and contributing to projects that create meaningful impact through technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-core-values section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Core <span className="text-gradient">Principles</span></h2>
            <p className="section-subtitle">The foundation of my work ethic and creative process.</p>
          </motion.div>

          <div className="values-grid">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="value-card glass-card"
            >
              <div className="value-icon-box">
                <FaLightbulb className="value-icon" />
              </div>
              <h3>Idea on Working</h3>
              <p>
                I thrive on creative experimentation, constantly exploring new technologies and methodologies. My approach involves testing innovative concepts to discover unique solutions, allowing me to build robust, content-rich applications that push the boundaries of standard web development.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="value-card glass-card"
            >
              <div className="value-icon-box">
                <FaBrain className="value-icon" />
              </div>
              <h3>Mindset & Approach</h3>
              <p>
                I maintain a growth-oriented mindset focused on continuous learning and resilience. Embracing complex challenges as opportunities, I am committed to delivering high-quality, scalable solutions while maintaining a deep understanding of both user needs and business objectives.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="value-card glass-card"
            >
              <div className="value-icon-box">
                <FaRocket className="value-icon" />
              </div>
              <h3>Future Vision</h3>
              <p>
                Dedicated to anticipating industry trends, my goal is to architect future-proof applications. I strive to create digital experiences that not only meet today's demands but are perfectly adaptable for tomorrow's technological landscape, ensuring long-term success and relevance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section className="journey-section section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">My <span className="text-gradient">Journey</span></h2>
            <p className="section-subtitle">My professional journey in software engineering and design.</p>
          </motion.div>

          <div className="timeline-container">
            <motion.div 
              className="timeline-line"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            ></motion.div>

            {/* 1) Completed Free Internship - Left */}
            <div className="timeline-item left">
              <div className="timeline-dot"></div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="timeline-card glass-card"
              >
                <div className="timeline-card-header">
                  <div className="timeline-logo">
                    <img src={exclerLogo} alt="ExcelR Pvt Ltd" />
                  </div>
                  <div className="timeline-titles">
                    <h3>Completed Free Internship</h3>
                    <p className="timeline-company">ExcelR Pvt. Ltd.</p>
                  </div>
                </div>
                <div className="timeline-card-body">
                  <span className="timeline-badge">Academic Internship</span>
                  <p><strong>Role:</strong> Java Full Stack</p>
                  <p><strong>College:</strong> Prakasam Engineering College</p>
                  <p className="timeline-date">📅 2024</p>
                </div>
              </motion.div>
            </div>

            {/* 2) B.Tech Education - Right */}
            <div className="timeline-item right">
              <div className="timeline-dot"></div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="timeline-card glass-card"
              >
                <div className="timeline-card-header">
                  <div className="timeline-logo">
                    <img src={collegeLogo} alt="Prakasam Engineering College" />
                  </div>
                  <div className="timeline-titles">
                    <h3>B.Tech Education</h3>
                    <p className="timeline-company">Prakasam Engineering College</p>
                  </div>
                </div>
                <div className="timeline-card-body">
                  <span className="timeline-badge education">Education</span>
                  <p className="timeline-date">📅 2025</p>
                </div>
              </motion.div>
            </div>

            {/* 3) Joined 360 Digrii - Left */}
            <div className="timeline-item left">
              <div className="timeline-dot"></div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="timeline-card glass-card"
              >
                <div className="timeline-card-header">
                  <div className="timeline-logo">
                    <img src={coachingLogo} alt="360 Digrii" />
                  </div>
                  <div className="timeline-titles">
                    <h3>Joined 360 Digrii</h3>
                    <p className="timeline-company">Coaching Center</p>
                  </div>
                </div>
                <div className="timeline-card-body">
                  <span className="timeline-badge training">Training</span>
                  <p><strong>Role:</strong> Java Full Stack Developer</p>
                  <p className="timeline-date">📅 2025</p>
                </div>
              </motion.div>
            </div>

            {/* 4) Mobomo India - Right */}
            <div className="timeline-item right">
              <div className="timeline-dot"></div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="timeline-card glass-card"
              >
                <div className="timeline-card-header">
                  <div className="timeline-logo">
                    <img src={mobomoLogo} alt="Mobomo India" />
                  </div>
                  <div className="timeline-titles">
                    <h3>Software Developer</h3>
                    <p className="timeline-company">Mobomo India</p>
                  </div>
                </div>
                <div className="timeline-card-body">
                  <span className="timeline-badge working">Currently Working</span>
                  <p><strong>Joining Date:</strong> Dec 8, 2025</p>
                  <p className="timeline-date">📅 Dec 2025 - Present</p>
                </div>
              </motion.div>
            </div>

            {/* 5) UI/UX Designer - Left */}
            <div className="timeline-item left">
              <div className="timeline-dot"></div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="timeline-card glass-card"
              >
                <div className="timeline-card-header">
                  <div className="timeline-logo figma-bg">
                    <img src={figmaLogo} alt="UI/UX" />
                  </div>
                  <div className="timeline-titles">
                    <h3>UI/UX Designer</h3>
                    <p className="timeline-company">Own Practice</p>
                  </div>
                </div>
                <div className="timeline-card-body">
                  <span className="timeline-badge practice">Self-Taught</span>
                  <p>Passionate about designing intuitive interfaces and creating seamless user experiences.</p>
                  <p className="timeline-date">📅 Ongoing</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* What I Serve Section */}
      <section className="about-serve section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="serve-card-special"
          >
            <div className="serve-glow"></div>
            <div className="serve-content-wrapper">
              <h2 className="serve-title">What I <span className="text-gradient">Serve</span></h2>
              <p className="serve-desc">
                I am ready to develop robust <strong>B2B applications</strong>,<strong>UI/UX designing</strong> integrate cutting-edge <strong>AI Video generation tools</strong>, and take on dynamic <strong>freelance projects</strong> to bring your innovative ideas to life.
              </p>
              <div className="serve-actions">
                <a href="/contact" className="btn-primary">Start a Project</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
