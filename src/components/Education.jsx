

// export default Education;
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaSchool } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      type: 'degree',
      icon: <FaGraduationCap />,
      title: 'Bachelor of Science in Information Technology (BSc IT)',
      institution: 'Vidhyadeep University, Kim, Surat, Gujarat',
      period: '2023 - Present',
      grade: 'Currently Pursuing | Second Year',
      description:
        'Currently pursuing BSc IT with focus on programming fundamentals, database management systems, web technologies, and software development concepts.',
      highlights: [
        'Programming Fundamentals',
        'Database Management',
        'Web Development',
        'Software Engineering Basics'
      ]
    },
    {
      type: 'training',
      icon: <FaCertificate />,
      title: 'Full Stack Development Training (MERN Stack)',
      institution: 'Professional Training Program',
      period: '2023 - Present',
      grade: 'Ongoing',
      description:
        'Hands-on training in MERN stack covering MongoDB, Express.js, React.js, Node.js with real-world project development including REST APIs and responsive UI applications.',
      highlights: [
        'MongoDB Database',
        'Express.js Backend',
        'React.js Frontend',
        'Node.js API Development'
      ]
    },
    {
      type: 'school',
      icon: <FaSchool />,
      title: 'Higher Secondary Education (12th – Science Stream)',
      institution: 'BJB Higher Secondary School, Odisha',
      period: 'Completed',
      grade: 'Science Stream',
      description:
        'Completed higher secondary education with Science stream focusing on analytical thinking, mathematics, and foundational computer knowledge.',
      highlights: [
        'Physics',
        'Chemistry',
        'Mathematics',
        'Biology',
        'Computer Fundamentals'
      ]
    }
  ];

  return (
    <section id="education" className="education-section py-5">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Education & Training</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`education-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="education-content">
                <div className="education-icon">
                  {edu.icon}
                </div>

                <div className="education-card">
                  <div className="card-header">
                    <h3 className="card-title">{edu.title}</h3>
                    <span className="card-institution">
                      {edu.institution}
                    </span>

                    <div className="card-meta">
                      <span className="card-period">{edu.period}</span>
                      <span className="card-grade">{edu.grade}</span>
                    </div>
                  </div>

                  <p className="card-description">
                    {edu.description}
                  </p>

                  <div className="education-highlights">
                    <h4>Key Learnings:</h4>

                    <div className="highlights-list">
                      {edu.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="highlight-tag"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
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

export default Education;