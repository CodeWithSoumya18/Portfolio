import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload, FaUserTie } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
 const downloadResume = () => {
  const resumePath = "/Soumyashree_Nayak_Resume.pdf";

  console.log("Attempting to download resume from:", resumePath);

  try {
    // Create a link to download the resume directly
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Soumyashree_Nayak_Resume.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    // Add to DOM and trigger click
    document.body.appendChild(link);
    link.click();

    console.log("Download initiated");

    // Clean up
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);

  } catch (error) {
    console.error("Download failed:", error);
    // Fallback: try to open in new tab
    console.log("Trying fallback: opening in new tab");
    window.open(resumePath, "_blank", "noopener,noreferrer");
  }
};

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
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                >
                  <FaUserTie className="me-2" />
                  Hire Me
                </motion.button>

                <motion.button
                  className="btn btn-outline-light"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={downloadResume}
                >
                  <FaDownload className="me-2" />
                  Download Resume
                </motion.button>
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