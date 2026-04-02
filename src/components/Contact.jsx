// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
// import './Contact.css';

// const Contact = () => {
//   const contactInfo = [
//     {
//       icon: <FaEnvelope />,
//       title: 'Email',
//       value: '8391soumyanayak@gmail.com',
//       link: 'mailto:8391soumyanayak@gmail.com'
//     },
//     {
//       icon: <FaPhone />,
//       title: 'Phone',
//       value: '+91 9692707237',
//       link: 'tel:+919692707237'
//     },
//     {
//       icon: <FaMapMarkerAlt />,
//       title: 'Location',
//       value: 'Surat, India',
//       link: '#'
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: <FaLinkedin />,
//       name: 'LinkedIn',
//       link: 'https://linkedin.com/in/soumyashree',
//       color: '#0077b5'
//     },
//     {
//       icon: <FaGithub />,
//       name: 'GitHub',
//       link: 'https://github.com/soumyashree',
//       color: '#333'
//     }
//     // {
//     //   icon: <FaTwitter />,
//     //   name: 'Twitter',
//     //   link: 'https://twitter.com/soumyashree',
//     //   color: '#1da1f2'
//     // }
//   ];

//   return (
//     <section id="contact" className="contact-section py-5">
//       <div className="container">
//         <motion.div
//           className="text-center mb-5"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="section-title">Get In Touch</h2>
//           <div className="section-divider"></div>
//           <p className="section-subtitle">
//             I'm always open to discussing new opportunities and interesting projects.
//             Let's connect and create something amazing together!
//           </p>
//         </motion.div>

//         <div className="row">
//           <div className="col-lg-6 mb-4">
//             <motion.div
//               className="contact-info-card"
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="contact-title">Contact Information</h3>
//               <div className="contact-info-list">
//                 {contactInfo.map((info, index) => (
//                   <motion.div
//                     key={index}
//                     className="contact-info-item"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     <div className="contact-icon">
//                       {info.icon}
//                     </div>
//                     <div className="contact-details">
//                       <h4>{info.title}</h4>
//                       <a href={info.link} className="contact-value">
//                         {info.value}
//                       </a>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

              // <div className="social-links mt-4">
              //   <h4>Follow Me</h4>
              //   <div className="social-icons">
              //     {socialLinks.map((social, index) => (
              //       <motion.a
              //         key={index}
              //         href={social.link}
              //         target="_blank"
              //         rel="noopener noreferrer"
              //         className="social-link"
              //         style={{ '--hover-color': social.color }}
              //         initial={{ opacity: 0, scale: 0 }}
              //         whileInView={{ opacity: 1, scale: 1 }}
              //         transition={{ duration: 0.4, delay: index * 0.1 }}
              //         viewport={{ once: true }}
              //         whileHover={{ scale: 1.1 }}
              //         whileTap={{ scale: 0.95 }}
              //       >
              //         {social.icon}
              //       </motion.a>
              //     ))}
              //   </div>
//               </div>
//             </motion.div>
//           </div>

//           <div className="col-lg-6">
//             <motion.div
//               className="contact-form-card"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="contact-title">Send a Message</h3>
//               <form className="contact-form">
//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <motion.input
//                       type="text"
//                       className="form-control"
//                       placeholder="Your Name"
//                       required
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.4, delay: 0.1 }}
//                       viewport={{ once: true }}
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3">
//                     <motion.input
//                       type="email"
//                       className="form-control"
//                       placeholder="Your Email"
//                       required
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.4, delay: 0.2 }}
//                       viewport={{ once: true }}
//                     />
//                   </div>
//                 </div>
//                 <div className="mb-3">
//                   <motion.input
//                     type="text"
//                     className="form-control"
//                     placeholder="Subject"
//                     required
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: 0.3 }}
//                     viewport={{ once: true }}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <motion.textarea
//                     className="form-control"
//                     rows="5"
//                     placeholder="Your Message"
//                     required
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: 0.4 }}
//                     viewport={{ once: true }}
//                   ></motion.textarea>
//                 </div>
//                 <motion.button
//                   type="submit"
//                   className="btn btn-primary w-100"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: 0.5 }}
//                   viewport={{ once: true }}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Send Message
//                 </motion.button>
//               </form>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {

  // STATE

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });


  // HANDLE INPUT CHANGE

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  // HANDLE FORM SUBMIT

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch('/api/contact/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        // RESET FORM
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }

    } catch (error) {

      console.error('Contact form error:', error);

      // Fallback: Open email client
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Hi Soumyashree,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
      );
      window.open(`mailto:8391soumyanayak@gmail.com?subject=${subject}&body=${body}`);

      alert("Opening your email client as fallback... If it doesn't open, please contact me directly at 8391soumyanayak@gmail.com");

      // RESET FORM even on error
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    }

  };


  // CONTACT INFO DATA

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "8391soumyanayak@gmail.com",
      link: "mailto:8391soumyanayak@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 9692707237",
      link: "tel:+919692707237"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Surat, India",
      link: "#"
    }
  ];
  


  return (
    <section id="contact" className="contact-section py-5">

      <div className="container">

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
        </motion.div>


        <div className="row">

          {/* LEFT SIDE CONTACT INFO */}

          <div className="col-lg-6 mb-4">

            <motion.div
              className="contact-info-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              <h3 className="contact-title">
                Contact Information
              </h3>

              <div className="contact-info-list">

                {contactInfo.map((info, index) => (

                  <motion.div
                    key={index}
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1
                    }}
                    viewport={{ once: true }}
                  >

                    <div className="contact-icon">
                      {info.icon}
                    </div>

                    <div className="contact-details">

                      <h4>{info.title}</h4>

                      <a
                        href={info.link}
                        className="contact-value"
                      >
                        {info.value}
                      </a>

                    </div>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </div>


          {/* RIGHT SIDE FORM */}

          <div className="col-lg-6">

            <motion.div
              className="contact-form-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              <h3 className="contact-title">
                Send a Message
              </h3>


              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />

                  </div>


                  <div className="col-md-6 mb-3">

                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />

                  </div>

                </div>


                <div className="mb-3">

                  <motion.input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Subject"
                    required
                  />

                </div>


                <div className="mb-3">

                  <motion.textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Your Message"
                    required
                  />

                </div>


                <motion.button
                  type="submit"
                  className="btn btn-primary w-100"
                  whileHover={{ scale: 1.05 }}
                >
                  Send Message
                </motion.button>

              </form>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;