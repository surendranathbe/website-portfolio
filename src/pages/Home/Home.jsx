import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import {
  FaGithub, FaTwitter, FaLinkedin, FaHtml5, FaCss3Alt,
  FaJsSquare, FaReact, FaDatabase, FaFigma, FaVideo,
  FaArrowRight, FaImage, FaEdit, FaGlobe, FaPaintBrush, FaRocket
} from 'react-icons/fa';
import bannerImg from '../../assets/banner-1.jpeg';
import aboutImg from '../../assets/about-section.png';
import mobomoLogo from '../../assets/mobomo-logo.jpg';
import aboutPageLogo from '../../assets/about-page-2.png';
import './Home.css';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Magic effect: scale and fade for hero as we scroll
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroRotate = useTransform(scrollYProgress, [0, 0.2], [0, -5]);

  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JS", icon: <FaJsSquare /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "React", icon: <FaReact /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Oracle", icon: <FaDatabase /> },
    { name: "Video Editing", icon: <FaVideo /> },
    { name: "Photoshop", icon: <FaImage /> },
    { name: "UI/UX Designer", icon: <FaEdit /> },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="home-container" ref={containerRef}>
      {/* Hero Section */}
      <motion.section
        style={{ scale: heroScale, opacity: heroOpacity, rotateX: heroRotate }}
        className="hero"
      >
        <div className="container">
          <div className="hero__layout">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="hero__content"
            >
              <motion.h1 variants={itemVariants} className="hero__title">
                I'm <span className="text-gradient">Surendra Nath Bezawada</span>
              </motion.h1>

              <motion.h2 variants={itemVariants} className="hero__subtitle-animated">
                A Full Stack Developer
              </motion.h2>

              <motion.p variants={itemVariants} className="hero__desc">
                Building robust, scalable, and beautiful digital solutions
                from front to back.
              </motion.p>

              <motion.div variants={itemVariants} className="hero__cta-container">
                <button className="btn-primary">
                  View My Work <ChevronRight size={18} />
                </button>
                <div className="hero__socials-row">
                  <motion.a whileHover={{ y: -5, color: '#6366f1' }} href="#" className="social-icon-link"><FaGithub size={24} /></motion.a>
                  <motion.a whileHover={{ y: -5, color: '#6366f1' }} href="#" className="social-icon-link"><FaLinkedin size={24} /></motion.a>
                  <motion.a whileHover={{ y: -5, color: '#6366f1' }} href="#" className="social-icon-link"><FaTwitter size={24} /></motion.a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hero__image-container"
            >
              <div className="image-circle">
                <img src={bannerImg} alt="Surendra Nath Bezawada" className="banner-img" />
                <div className="animated-border"></div>
                <div className="animated-border secondary"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <section className="home-about section">
        <div className="container">
          <div className="about-us-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-us-image"
            >
              <div className="glass-frame">
                <img src={aboutImg} alt="About Us" className="about-main-img" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-us-content"
            >
              <h2 className="section-title text-left">About <span className="text-gradient">Us</span></h2>
              <p className="lead">
                A full stack developer and UI/UX designer based in the digital world.
              </p>
              <p>
                With a passion for creating seamless user experiences and powerful backend systems, I bridge the gap between design and technology. My expertise spans across modern frontend frameworks like React and Next.js, combined with robust backend solutions using Node.js and scalable databases.
              </p>
              <p>
                I believe in building software that not only works perfectly but also looks beautiful and feels intuitive. Whether it's a complex enterprise dashboard or a creative portfolio, I bring the same level of dedication and precision to every project.
              </p>
              <Link to="/about">
                <button className="btn-primary">
                  Read More <FaArrowRight size={16} style={{ marginLeft: '8px' }} />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Skills Marquee */}
      <div className="skills-marquee-container">
        <div className="marquee">
          <div className="marquee__group">
            {skills.concat(skills).map((skill, index) => (
              <div key={index} className="marquee__item">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Home Projects Section */}
      <section className="home-projects section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="about-banner-content"
          >
            <h1 className="banner-title text-center">
              
              My <span className="text-gradient">Latest Projects</span>
            </h1>
            <p className="banner-subtitle text-center">Full‑Stack Developer • UI/UX Designer • Innovator</p>
          </motion.div>

          <div className="projects-list-grid">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="project-info-card glass-card"
            >
              <div className="project-info-header">
                <h3>Car Driving Booking Slots</h3>
                <a href="https://surendranathbe.github.io/Car-project/" target="_blank" rel="noreferrer" className="project-git-link">
                  <FaGithub size={24} />
                </a>
              </div>
              <p className="project-info-desc">
                A comprehensive web application designed to streamline the car rental and driving lesson booking process.
                Users can view available time slots, select their preferred vehicle, and manage their bookings through
                an intuitive interface. The backend is powered by JSP and Oracle, ensuring secure data handling and
                real-time availability updates. It provides a seamless experience for both administrators and customers.
              </p>
              <div className="project-tech-stack">
                <span>HTML</span><span>CSS</span><span>JS</span><span>Oracle</span><span>JSP</span><span>Xamp Server</span>
              </div>
              <div className="project-card-actions">
                <a href="https://surendranathbe.github.io/Car-project/" target="_blank" rel="noreferrer" className="btn-small btn-outline">
                  View Demo
                </a>
                <Link to="/projects" className="btn-small btn-primary">
                  Read More
                </Link>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="project-info-card glass-card"
            >
              <div className="project-info-header">
                <h3>Efficient Fair Payment using Block Chain</h3>
                <a href="https://surendranathbe.github.io/Efficient-fair-payment-project/" target="_blank" rel="noreferrer" className="project-git-link">
                  <FaGithub size={24} />
                </a>
              </div>
              <p className="project-info-desc">
                This project explores the integration of blockchain technology to facilitate transparent and secure
                peer-to-peer payments. By leveraging decentralized ledgers, it ensures that transactions are immutable
                and verifiable, significantly reducing the risk of financial fraud. The frontend provides a clear
                visualization of transaction history and account balances, ensuring a user-friendly experience while
                maintaining high security standards.
              </p>
              <div className="project-tech-stack">
                <span>HTML</span><span>CSS</span><span>JS</span><span>Oracle</span><span>JSP</span><span>Xamp Server</span>
              </div>
              <div className="project-card-actions">
                <a href="https://surendranathbe.github.io/Efficient-fair-payment-project/" target="_blank" rel="noreferrer" className="btn-small btn-outline">
                  View Demo
                </a>
                <Link to="/projects" className="btn-small btn-primary">
                  Read More
                </Link>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="project-info-card glass-card"
            >
              <div className="project-info-header">
                <h3>Product Bills Calculation</h3>
                <a href="https://surendranathbe.github.io/product-bills-by-js/" target="_blank" rel="noreferrer" className="project-git-link">
                  <FaGithub size={24} />
                </a>
              </div>
              <p className="project-info-desc">
                A lightweight and efficient tool built using pure JavaScript for calculating detailed product bills.
                It allows users to add multiple items, specify quantities and prices, and automatically generates
                a formatted invoice with tax calculations. Ideal for small businesses or personal use, this tool
                demonstrates high-performance DOM manipulation and complex logic handling without the need
                for external libraries.
              </p>
              <div className="project-tech-stack">
                <span>HTML</span><span>CSS</span><span>JS</span>
              </div>
              <div className="project-card-actions">
                <a href="https://surendranathbe.github.io/product-bills-by-js/" target="_blank" rel="noreferrer" className="btn-small btn-outline">
                  View Demo
                </a>
                <Link to="/projects" className="btn-small btn-primary">
                  Read More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="home-experience section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Professional <span className="text-gradient">Experience</span></h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="experience-card glass-card"
          >
            <div className="experience-layout">
              <div className="experience-logo-container">
                <img src={mobomoLogo} alt="Mobomo India" className="company-logo" />
              </div>
              <div className="experience-details">
                <div className="experience-header-main">
                  <div className="experience-titles">
                    <h3 className="company-name">Mobomo India</h3>
                    <h4 className="role-title">Software Developer</h4>
                  </div>
                  <div className="experience-badge">Dec 08 2025</div>
                </div>
                <p className="experience-content">
                  I am currently working at Mobomo India as a Software Developer, where I contribute to designing 
                  and developing modern web-based applications and digital solutions. The company specializes in 
                  custom software development, web and mobile applications, digital marketing, CRM/ERP solutions, 
                  and recruitment services. Founded in 2015, Mobomo India has successfully delivered 500+ projects 
                  across various industries. Working here has given me practical exposure to real-time development, 
                  teamwork, client-focused solutions, and emerging technologies. It has been a strong platform for 
                  enhancing my technical, problem-solving, and professional skills.
                </p>
                <div className="experience-actions">
                  <Link to="#" className="btn-primary">
                    Get more details <FaArrowRight size={16} style={{ marginLeft: '10px' }} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Upcoming Goals Section */}
      <section className="home-goals section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Upcoming <span className="text-gradient">Goals & Projects</span></h2>
            <p className="section-subtitle">A glimpse into what I'm building and learning next.</p>
          </motion.div>

          <div className="goals-grid">
            {/* Goal 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="goal-card glass-card"
            >
              <div className="goal-icon-box">
                <FaGlobe className="goal-icon" />
              </div>
              <h3>Own Business Website</h3>
              <p>
                My primary upcoming goal is to establish a dedicated business platform that showcases 
                high-quality digital solutions for global clients. This website will serve as a hub for 
                innovation, offering services ranging from custom web development to strategic branding. 
                I aim to build a platform that not only attracts business but also fosters long-term 
                professional relationships through transparency and excellence.
              </p>
            </motion.div>

            {/* Goal 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="goal-card glass-card"
            >
              <div className="goal-icon-box">
                <FaPaintBrush className="goal-icon" />
              </div>
              <h3>Advanced UI/UX Design</h3>
              <p>
                I am deeply committed to mastering the art of user-centric design to create interfaces 
                that are both beautiful and highly functional. My goal is to bridge the gap between 
                complex backend logic and intuitive frontend experiences by focusing on accessibility, 
                micro-interactions, and visual storytelling. By refining my UI/UX skills, I aim to 
                deliver products that resonate with users on a deep level.
              </p>
            </motion.div>

            {/* Goal 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="goal-card glass-card"
            >
              <div className="goal-icon-box">
                <FaRocket className="goal-icon" />
              </div>
              <h3>Part-time Freelancing</h3>
              <p>
                In the coming months, I plan to expand my professional horizons by taking on challenging 
                freelance projects in my part-time. This initiative is aimed at helping startups and small 
                businesses scale their digital presence while allowing me to tackle diverse technical 
                problems across different industries. I am excited to collaborate on creative ideas and 
                provide value-driven solutions that make a real-world impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
