import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          A little <span>about</span> me
        </motion.h1>
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
            Hi, I'm Diana Tao — a fourth-year Computer Science and Data Science major at UC Berkeley. 
            I'm deeply driven by the intersection of software engineering and machine learning, 
            where code can evolve into intelligent systems that make a real-world impact. 
            Whether it’s building full-stack applications or developing AI-powered tools, 
            I love turning abstract ideas into scalable, meaningful solutions.
            
            </p>
            <p>
            At Berkeley, I've honed my skills across software development, data analysis, and machine learning, 
            and I'm excited to apply them in collaborative, mission-driven environments. 
            Outside of the terminal, you’ll probably find me exploring restaurants, making matcha, or enjoying Canto-pop and K-pop playlists.
            </p>
          </motion.div>
          <motion.div
            className="about-buttons"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/projects" className="about-btn">
              <i className="fa fa-globe"></i>
              <span>View Projects</span>
            </Link>
            <Link to="/gallery" className="about-btn">
              <i className="fa fa-picture-o"></i>
              <span>View Gallery</span>
            </Link>
            <Link to="/blog" className="about-btn">
              <i className="fa fa-rss"></i>
              <span>Read Blog</span>
            </Link>
            <Link to="/cs180-projects" className="about-btn">
              <i className="fa fa-eye"></i>
              <span>CS180</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 