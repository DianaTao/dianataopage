import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get in<span> Touch</span></h2>
        <div className="contact-grid">
          <motion.div
            className="contact-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="https://github.com/dianatao" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
            </a>
          </motion.div>
          <motion.div
            className="contact-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="https://linkedin.com/in/yifei-tao66" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
              <span>LinkedIn</span>
            </a>
          </motion.div>
          <motion.div
            className="contact-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a href="yifei66@berkeley.edu">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 