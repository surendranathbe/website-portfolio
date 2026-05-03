import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Layout, Cpu, Terminal, Search, PenTool, Braces, Rocket, Users, BrainCircuit, Target, Zap } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout size={32} />,
      description: "Crafting responsive and interactive user interfaces using modern web technologies. I specialize in transforming complex designs into seamless digital experiences with a strong focus on performance and accessibility.",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Framer Motion"],
      color: "#6366f1"
    },
    {
      title: "Backend & Databases",
      icon: <Database size={32} />,
      description: "Building robust, scalable server-side architectures and managing complex databases. My focus is on creating secure APIs and maintaining high-performance backend systems for enterprise B2B applications.",
      skills: ["Java", "Node.js", "SQL", "Oracle", "XAMPP", "APIs"],
      color: "#a855f7"
    },
    {
      title: "UI/UX & Creative",
      icon: <Globe size={32} />,
      description: "Designing intuitive user interfaces and engaging creative content. From wireframing to finalizing visual assets, I integrate core design principles with modern AI tools to bring digital visions to life.",
      skills: ["Figma", "Photoshop", "Video Editing", "AI Video Gen"],
      color: "#ec4899"
    }
  ];

  const workflowSteps = [
    { title: "1. Discover & Plan", icon: <Search size={24} />, desc: "Understanding client requirements, analyzing the market, and planning the architecture." },
    { title: "2. UI/UX Design", icon: <PenTool size={24} />, desc: "Creating wireframes, prototyping in Figma, and defining the visual aesthetics." },
    { title: "3. Development", icon: <Braces size={24} />, desc: "Writing clean, scalable code using modern frontend and backend technologies." },
    { title: "4. Deployment", icon: <Rocket size={24} />, desc: "Testing thoroughly and launching the application to a live production environment." }
  ];

  const softSkills = [
    { title: "Problem Solving", icon: <BrainCircuit size={28} />, color: "#3b82f6", desc: "Finding efficient solutions to complex technical challenges." },
    { title: "Team Collaboration", icon: <Users size={28} />, color: "#10b981", desc: "Working seamlessly with cross-functional teams to achieve goals." },
    { title: "Agile Execution", icon: <Zap size={28} />, color: "#f59e0b", desc: "Adapting quickly to changes and delivering features in iterative cycles." },
    { title: "Goal-Oriented", icon: <Target size={28} />, color: "#ec4899", desc: "Maintaining a strong focus on business objectives and project deadlines." }
  ];

  return (
    <div className="skills-page">
      {/* ── Skills Banner ── */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="skills-banner"
      >
        <div className="container">
          <div className="skills-banner-content">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="banner-title text-center"
            >
              My <span className="text-gradient">Skills</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="banner-subtitle text-center"
            >
              Technical Arsenal • Development Workflow • Professional Attributes
            </motion.p>
          </div>
        </div>
      </motion.section>

      <section className="section">
        <div className="container">
          {/* Main Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title">Technical <span className="text-gradient">Arsenal</span></h2>
            <p className="section-subtitle">A detailed breakdown of the technologies and tools I use to bring ideas to life.</p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="skill-card glass-card"
              >
                <div className="skill-card-header">
                  <div className="skill-card__icon" style={{ color: category.color }}>
                    {category.icon}
                  </div>
                  <h3>{category.title}</h3>
                </div>
                <p className="skill-card-desc">{category.description}</p>
                <div className="skill-divider"></div>
                <ul className="skill-list">
                  {category.skills.map(skill => (
                    <li key={skill} style={{ borderBottomColor: category.color }}>{skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Development Workflow Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
            style={{ marginTop: '100px' }}
          >
            <h2 className="section-title">Development <span className="text-gradient">Workflow</span></h2>
            <p className="section-subtitle">My structured approach to building scalable and successful applications.</p>
          </motion.div>

          <div className="workflow-grid">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="workflow-card glass-card"
              >
                <div className="workflow-icon-wrapper">
                  {step.icon}
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills / Professional Attributes Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
            style={{ marginTop: '100px' }}
          >
            <h2 className="section-title">Professional <span className="text-gradient">Attributes</span></h2>
            <p className="section-subtitle">The essential soft skills that complement my technical expertise.</p>
          </motion.div>

          <div className="attributes-grid">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="attribute-card glass-card"
              >
                <div className="attribute-icon" style={{ backgroundColor: `${skill.color}15`, color: skill.color }}>
                  {skill.icon}
                </div>
                <div className="attribute-content">
                  <h4>{skill.title}</h4>
                  <p>{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Skills;
