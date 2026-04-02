import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Movie Management System',
      description: 'A comprehensive movie management system built with Node.js, featuring movie cataloging, search functionality, and user reviews. Includes CRUD operations for managing movie collections.',
      image: '/project1.jpg',
      technologies: ['Node.js', 'Express', 'MongoDB', 'React.js', 'Bootstrap'],
      github: 'https://github.com/CodeWithSoumya18/Node_JS/tree/main/Movie_Management_system',
      live: '#'
    },
    {
      title: 'Twitter Clone',
      description: 'A Twitter-like social media platform built with Node.js, featuring user authentication, tweet posting, following system, and real-time updates.',
      image: '/project2.jpg',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Passport.js'],
      github: 'https://github.com/CodeWithSoumya18/Node_JS/tree/main/Twitter',
      live: '#'
    },
    {
      title: 'Todo App with Express',
      description: 'A robust todo application built with Express.js, featuring task management, categories, due dates, and user authentication for personal productivity.',
      image: '/project3.jpg',
      technologies: ['Node.js', 'Express', 'React.js', 'Bootstrap'],
      github: 'https://github.com/CodeWithSoumya18/Node_JS/tree/main/TODO_using_Express',
      live: '#'
    },
    {
      title: 'WhatsApp Clone',
      description: 'A real-time messaging application built with Firebase, featuring instant messaging, user authentication, and cloud storage for media files.',
      image: '/project6.jpg',
      technologies: ['React', 'Firebase', 'Firestore', 'Authentication', 'Storage'],
      github: 'https://github.com/CodeWithSoumya18/Firebase-Project/tree/main/whatsapp-clone',
      live: '#'
    },
    {
      title: 'Active',
      description: 'A dynamic web application showcasing interactive features and modern UI/UX design with responsive layouts and engaging user experiences.',
      image: '/project7.jpg',
      technologies: [ 'CSS3', 'HTML5', 'Bootstrap'],
      github: 'https://github.com/CodeWithSoumya18/Active',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="row">
          {projects.map((project, index) => (
            <div key={project.title} className="col-lg-4 col-md-6 mb-4">
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image-wrapper">
                  <div
                    className="project-image-placeholder"
                    style={{
                      background: project.image.includes('project1') ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' :
                                 project.image.includes('project2') ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' :
                                 project.image.includes('project3') ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' :
                                 project.image.includes('project6') ? 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' :
                                 project.image.includes('project7') ? 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' :
                                 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
                    }}
                  >
                    <div className="project-placeholder-content">
                      <h4>{project.title}</h4>
                      <p>{project.technologies.slice(0, 2).join(' • ')}</p>
                    </div>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.github}
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;