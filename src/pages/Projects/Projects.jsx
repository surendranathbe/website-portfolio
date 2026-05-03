import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Brush, Rocket, Clock, Zap, Target, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Car Driving Booking Slots",
      description: "A comprehensive web application designed to streamline the car rental and driving lesson booking process. Users can view available time slots, select their preferred vehicle, and manage their bookings through an intuitive interface. The backend is powered by JSP and Oracle.",
      tags: ["HTML", "CSS", "JS", "Oracle", "JSP", "Xamp Server"],
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
      github: "https://surendranathbe.github.io/Car-project/",
      demo: "https://surendranathbe.github.io/Car-project/",
      number: "01"
    },
    {
      title: "Efficient Fair Payment using Block Chain",
      description: "This project explores the integration of blockchain technology to facilitate transparent and secure peer-to-peer payments. By leveraging decentralized ledgers, it ensures that transactions are immutable and verifiable, significantly reducing the risk of financial fraud.",
      tags: ["HTML", "CSS", "JS", "Oracle", "JSP", "Xamp Server"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
      github: "https://surendranathbe.github.io/Efficient-fair-payment-project/",
      demo: "https://surendranathbe.github.io/Efficient-fair-payment-project/",
      number: "02"
    },
    {
      title: "Product Bills Calculation",
      description: "A lightweight and efficient tool built using pure JavaScript for calculating detailed product bills. It allows users to add multiple items, specify quantities and prices, and automatically generates a formatted invoice with tax calculations.",
      tags: ["HTML", "CSS", "JS"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600",
      github: "https://surendranathbe.github.io/product-bills-by-js/",
      demo: "https://surendranathbe.github.io/product-bills-by-js/",
      number: "03"
    }
  ];

  const upcomingProjects = [
    {
      icon: <Globe size={28} />,
      label: "Business Platform",
      status: "Planning",
      statusColor: "#f59e0b",
      title: "Own Business Website",
      subtitle: "A full-scale digital solutions platform for global clients",
      description: "My primary upcoming goal is to establish a dedicated business platform that showcases high-quality digital solutions for global clients. This website will serve as a hub for innovation, offering services ranging from custom web development to strategic branding.",
      features: [
        "Custom web & mobile development services",
        "Strategic branding & digital marketing",
        "Client portfolio & case studies showcase",
        "Real-time project inquiry & consultation system",
        "Integrated CRM for client relationship management"
      ],
      techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
      timeline: "Q3 2026",
      progress: 15
    },
    {
      icon: <Brush size={28} />,
      label: "Design System",
      status: "In Research",
      statusColor: "#6366f1",
      title: "Advanced UI/UX Design Studio",
      subtitle: "A comprehensive design system & component library",
      description: "Deeply committed to mastering user-centric design to create interfaces that are both beautiful and highly functional. This project aims to build a reusable, open-source design system bridging complex backend logic with intuitive frontend experiences.",
      features: [
        "Open-source component library with 50+ components",
        "Accessibility-first design principles (WCAG 2.1)",
        "Advanced micro-animation & interaction patterns",
        "Dark/light mode with dynamic theming engine",
        "Figma-to-code automated workflow integration"
      ],
      techStack: ["React", "Figma", "Storybook", "CSS Variables", "Framer Motion"],
      timeline: "Q4 2026",
      progress: 8
    },
    {
      icon: <Rocket size={28} />,
      label: "Freelance Platform",
      status: "Coming Soon",
      statusColor: "#10b981",
      title: "Part-time Freelancing Hub",
      subtitle: "Helping startups scale their digital presence",
      description: "Planning to expand professional horizons by taking on challenging freelance projects part-time. This initiative aims at helping startups and small businesses scale their digital presence while tackling diverse technical problems.",
      features: [
        "End-to-end web application development",
        "Performance optimization & SEO consulting",
        "UI/UX redesign & brand identity services",
        "API integration & third-party services setup",
        "Ongoing maintenance & technical support packages"
      ],
      techStack: ["React", "Node.js", "MongoDB", "AWS", "Stripe"],
      timeline: "Q2 2026",
      progress: 5
    }
  ];

  return (
    <div className="projects-page">
      {/* ── Projects Banner ── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="projects-banner"
      >
        <div className="container">
          <div className="projects-banner-content">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="banner-title text-center"
            >
              My <span className="text-gradient">Projects</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="banner-subtitle text-center"
            >
              Full‑Stack Development • UI/UX Design • Innovation
            </motion.p>
          </div>
        </div>
      </motion.section>

      <div className="container">
        {/* ── Selected Works ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">Selected <span className="text-gradient">Works</span></h2>
          <p className="section-subtitle">A showcase of my recent work in web development and technology.</p>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="project-row glass-card"
            >
              <div className="project-row__number">{project.number}</div>
              <div className="project-row__image-wrap">
                <img src={project.image} alt={project.title} className="project-row__image" />
                <div className="project-row__img-overlay">
                  <div className="project-row__img-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-row__content">
                <div className="project-row__tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                <h3 className="project-row__title">{project.title}</h3>
                <p className="project-row__desc">{project.description}</p>
                <div className="project-row__actions">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn-small btn-outline">
                    View Demo <ExternalLink size={13} />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-small btn-primary">
                    GitHub <FaGithub size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Upcoming Projects ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header upcoming-header"
        >
          <div className="upcoming-badge">
            <Zap size={14} />
            <span>What's Next</span>
          </div>
          <h2 className="section-title">Upcoming <span className="text-gradient">Projects</span></h2>
          <p className="section-subtitle">A glimpse into what I'm building next — fueled by ambition, research, and a passion for innovation.</p>
        </motion.div>

        <div className="upcoming-list">
          {upcomingProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="upcoming-row glass-card"
            >
              {/* Left panel */}
              <div className="upcoming-row__left">
                <div className="upcoming-row__icon-box">{project.icon}</div>
                <span className="upcoming-label">{project.label}</span>
                <span
                  className="upcoming-status"
                  style={{
                    color: project.statusColor,
                    borderColor: project.statusColor,
                    background: `${project.statusColor}18`
                  }}
                >
                  <span className="status-dot" style={{ background: project.statusColor }} />
                  {project.status}
                </span>
                <div className="upcoming-row__progress">
                  <div className="progress-info">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.12 + 0.4, duration: 1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
                <div className="upcoming-timeline">
                  <Clock size={13} />
                  <span>Target: {project.timeline}</span>
                </div>
              </div>

              {/* Right panel */}
              <div className="upcoming-row__right">
                <h3 className="upcoming-card__title">{project.title}</h3>
                <p className="upcoming-card__subtitle">{project.subtitle}</p>
                <p className="upcoming-card__desc">{project.description}</p>

                <div className="upcoming-row__bottom">
                  <div className="upcoming-card__features">
                    <div className="features-label">
                      <Target size={13} />
                      <span>Key Goals</span>
                    </div>
                    <ul>
                      {project.features.map((f, i) => (
                        <li key={i}>
                          <ArrowRight size={12} className="feature-arrow" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="upcoming-card__tech">
                    {project.techStack.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
