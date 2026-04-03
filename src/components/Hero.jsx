import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaEye } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  // No function needed for download - direct href is faster

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
      </div>

      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Soumyashree Nayak</span>
              </h1>
              <h2 className="hero-subtitle">
                <TypeAnimation
                  sequence={[
                    'MERN Stack Developer',
                    2000,
                    'I build scalable web applications',
                    2000,
                    'I create responsive UI',
                    2000,
                    'I develop full stack solutions',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
              <p className="hero-description">
                Passionate about creating innovative web solutions with modern technologies.
                Specialized in MERN stack development with a focus on user experience and performance.
              </p>

              <div className="hero-buttons">
                <motion.button
                  className="btn btn-primary me-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('/Soumyashree_Nayak_Resume.pdf', '_blank')}
                >
                  <FaEye className="me-2" />
                  View Resume
                </motion.button>

                <motion.a
                  href="/Soumyashree_Nayak_Resume.pdf"
                  download="Soumyashree_Nayak_Resume.pdf"
                  className="btn btn-outline-light"
                  style={{ textDecoration: 'none' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="me-2" />
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-image-wrapper">
                <img
                  src="/Profile.png"
                  alt="Soumyashree Nayak"
                  className="hero-image"
                />
                {/* <div className="image-glow"></div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;