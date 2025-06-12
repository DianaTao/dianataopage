import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Web Designer', 'Software Engineer', 'Data Scientist'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Diana Tao
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {roles[currentRole]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Welcome to my portfolio website
          </motion.p>
        </motion.div>
        <motion.a
          href="#about"
          className="scroll-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span>Scroll Down</span>
          <img src="/img/scroll-down.png" alt="Scroll Down" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero; 