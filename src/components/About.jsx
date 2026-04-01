import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="about-image-wrapper">
                <img
                  src="/Profile.png"
                  alt="Soumyashree Nayak"
                  className="about-image"
                />
                <div className="image-overlay"></div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="about-title">Passionate MERN Stack Developer</h3>
              <p className="about-description">
                I am a dedicated MERN Stack Developer with a passion for creating innovative and efficient web applications.
                With expertise in MongoDB, Express.js, React.js, and Node.js, I build scalable solutions that deliver exceptional user experiences.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <FaCode className="highlight-icon" />
                  <div>
                    <h5>Full Stack Expertise</h5>
                    <p>Proficient in both frontend and backend development</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <FaRocket className="highlight-icon" />
                  <div>
                    <h5>Performance Focused</h5>
                    <p>Committed to building fast, responsive, and scalable applications</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <FaUsers className="highlight-icon" />
                  <div>
                    <h5>Team Player</h5>
                    <p>Collaborative approach with strong communication skills</p>
                  </div>
                </div>
              </div>

              <div className="tech-stack">
                <h4>Technologies I Work With:</h4>
                <div className="tech-tags">
                  {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Git'].map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;