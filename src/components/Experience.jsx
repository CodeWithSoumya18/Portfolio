import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaProjectDiagram, FaCode } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'learning',
      icon: <FaGraduationCap />,
      title: 'Self-Taught MERN Stack Developer',
      company: 'Continuous Learning Journey',
      period: '2023 - Present',
      description: 'Dedicated self-learning journey mastering modern web development technologies through online courses, documentation, and hands-on practice.',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express']
    },
    // {
    //   type: 'education',
    //   icon: <FaGraduationCap />,
    //   title: 'Computer Science Degree',
    //   company: 'Your University Name',
    //   period: '2020 - 2024',
    //   description: 'Bachelor\'s degree in Computer Science with focus on software development, algorithms, and web technologies.',
    //   technologies: ['Data Structures', 'Algorithms', 'Web Development', 'Database Management']
    // },
    {
      type: 'project',
      icon: <FaProjectDiagram />,
      title: 'Personal Development Projects',
      company: 'Portfolio & Learning',
      period: '2023 - Present',
      description: 'Building real-world projects to apply theoretical knowledge and demonstrate practical skills in full-stack development.',
      technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Authentication']
    },
    {
      type: 'skill',
      icon: <FaCode />,
      title: 'Technical Skills Development',
      company: 'Ongoing Practice',
      period: '2023 - Present',
      description: 'Continuous improvement of technical skills through coding challenges, open-source contributions, and modern development practices.',
      technologies: ['Git', 'GitHub', 'VS Code', 'Problem Solving', 'Clean Code']
    }
  ];

  return (
    <section id="experience" className="experience-section py-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Journey & Learning</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            As a passionate fresher in web development, I'm building my foundation through continuous learning,
            hands-on projects, and dedication to mastering modern technologies.
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  {exp.icon}
                </div>
                <div className="timeline-card">
                  <div className="card-header">
                    <h3 className="card-title">{exp.title}</h3>
                    <span className="card-company">{exp.company}</span>
                    <span className="card-period">{exp.period}</span>
                  </div>
                  <p className="card-description">{exp.description}</p>
                  <div className="card-tech">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;