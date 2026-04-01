import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt,
  FaJs, FaBootstrap, FaCode, FaFire, FaCloud, FaMobileAlt,
  FaServer, FaTools, FaBrain, FaRocket, FaDocker, FaLinux
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiPostman, SiFirebase, SiVite,
  SiTailwindcss, SiSocketdotio, SiTypescript,
  SiNextdotjs, SiGraphql
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <FaReact />,
      color: '#61dafb',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 />, level: 95},
        { name: 'CSS3', icon: <FaCss3Alt />, level: 92},
        { name: 'JavaScript', icon: <FaJs />, level: 90 },
        { name: 'React.js', icon: <FaReact />, level: 88 },
        { name: 'Bootstrap', icon: <FaBootstrap />, level: 85},
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 80}
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <FaNodeJs />,
      color: '#68c847',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
        { name: 'Express.js', icon: <SiExpress />, level: 82},
        { name: 'REST APIs', icon: <FaServer />, level: 88 }
      ]
    },
    {
      id: 'database',
      title: 'Database & Cloud',
      icon: <FaDatabase />,
      color: '#47a248',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 80},
        { name: 'Firebase', icon: <SiFirebase />, level: 75},
        { name: 'Firestore', icon: <FaFire />, level: 75 },
        { name: 'Cloud Storage', icon: <FaCloud />, level: 70},
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: <FaTools />,
      color: '#ff6b35',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 85 },
        { name: 'GitHub', icon: <FaGitAlt />, level: 85 },
        { name: 'VS Code', icon: <FaCode />, level: 90  },
        { name: 'Postman', icon: <SiPostman />, level: 80 },
        { name: 'Vite', icon: <SiVite />, level: 80 },
      ]
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: <FaBrain />,
      color: '#9c27b0',
      skills: [
        { name: 'Problem Solving', icon: <FaBrain />, level: 90},
        { name: 'Team Collaboration', icon: <FaRocket />, level: 85},
        { name: 'Communication', icon: <FaMobileAlt />, level: 88},
        { name: 'Project Management', icon: <FaTools />, level: 80},
      ]
    }
  ];

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="skills-filter mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="filter-buttons">
            <motion.button
              className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All Skills
            </motion.button>
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ '--accent-color': category.color }}
              >
                {category.icon}
                {category.title}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="row">
          {filteredCategories.map((category, categoryIndex) => (
            <div key={category.id} className="col-lg-6 col-xl-4 mb-4">
              <motion.div
                className="skill-category-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ '--category-color': category.color }}
              >
                <div className="category-header">
                  <motion.div
                    className="category-icon"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="category-title">{category.title}</h3>
                  <div className="category-stats">
                    <span className="skill-count">{category.skills.length} skills</span>
                  </div>
                </div>

                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: skillIndex * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                      }}
                    >
                      <div className="skill-header">
                        <motion.div
                          className="skill-icon"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          {skill.icon}
                        </motion.div>
                        <div className="skill-meta">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-experience">{skill.experience}</span>
                        </div>
                      </div>

                      <div className="skill-progress-container">
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.5,
                              delay: 0.3 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Skills Overview */}
        <motion.div
          className="skills-overview mt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="overview-card">
            <h3>Technical Proficiency Summary</h3>
            <div className="overview-stats">
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">3</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5</span>
                <span className="stat-label">Skill Categories</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;