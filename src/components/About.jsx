import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const timelineItems = [
  {
    year: 'May 2026 - Present',
    title: 'AI Engineer - Prompt Driven',
    description:
      'Palo Alto, CA. Building AI-assisted developer tooling for automated code review, requirement validation, interactive repair, structured reporting, and hosted GitHub App execution. Improving AI-agent reliability with telemetry, retry/resume logic, provider failure handling, Firebase/GitHub auth, Firestore state, CORS, staging deployments, and Terraform-managed GCP/Firebase test environments.',
  },
  {
    year: 'Jan 2026 - May 2026',
    title: 'Machine Learning Engineering Intern - C. Light Technologies',
    description:
      'Santa Clara, CA. Fine-tuned Vision Transformer models for retinal imaging classification and regression, developed VideoMAE and U-Net pipelines for clinical video analysis, and built scalable AWS EC2 GPU training and evaluation workflows.',
  },
  {
    year: 'Sep 2025 - Dec 2025',
    title: 'Software Engineering Intern - C. Light Technologies',
    description:
      'Santa Clara, CA. Designed LLM agent orchestration for retinal data analysis, built Django backend APIs across AWS S3 and SQL databases, and added Redis caching for reliable multi-step workflows.',
  },
  {
    year: 'Sep 2025 - May 2026',
    title: 'Research Software Developer - UCSF TECH Lab',
    description:
      'San Francisco, CA. Built full-stack features for SocialPlai, a research platform for cognitive and social games, including session management, data capture, mouse movement tracking, and real-time interaction events.',
  },
  {
    year: 'Mar 2025 - Aug 2025',
    title: 'Full-Stack Developer - Butterflo Inc.',
    description:
      'Built TypeScript and React features for AI-enabled product workflows using large language models, natural language processing, and Microsoft Azure.',
  },
  {
    year: 'Sep 2024 - May 2025',
    title: 'Undergraduate Research Assistant - Center for Data Science & Environment, UC Berkeley',
    description:
      'Berkeley, CA. Fine-tuned audio classification models for biodiversity monitoring, evaluated model performance with ROC-AUC and precision-recall metrics, and developed annotation and visualization tools.',
  },
  {
    year: 'Jun 2024 - Aug 2024',
    title: 'Financial Analyst Internship - Ant Group',
    description: 'Shanghai, China. Applied financial data analytics to support business and market analysis.',
  },
  {
    year: 'Aug 2023 - Dec 2023',
    title: 'DATA8 Foundations of Data Science - Academic Intern (UC Berkeley)',
    description: 'Berkeley, CA. Supported students in foundational data science concepts and Python-based analysis.',
  },
  {
    year: '2024',
    title: 'CS61A The Structure and Interpretation of Computer Programs - Academic Intern (UC Berkeley)',
    description: 'Berkeley, CA. Supported students in core computer science and programming concepts.',
  },
];

const educationItems = [
  {
    year: 'Aug 2022 - May 2026',
    title: 'University of California, Berkeley',
    description:
      'B.A. in Computer Science; Minor in Data Science. Relevant coursework includes algorithms, data structures, database systems, machine learning, computer vision, optimization models, computer security, probability and statistics, and machine structures.',
  },
];

const skillItems = [
  {
    year: 'Languages',
    title: 'Programming',
    description: 'Python, Java, C, Go, SQL, JavaScript, TypeScript',
  },
  {
    year: 'Frameworks',
    title: 'Software Engineering',
    description: 'React, Node.js, Django, GitHub Apps, CI/CD',
  },
  {
    year: 'AI / ML',
    title: 'Machine Learning and LLM Systems',
    description: 'PyTorch, TensorFlow, LLM APIs',
  },
  {
    year: 'Cloud',
    title: 'Infrastructure and Platforms',
    description: 'AWS, GCP, Firebase, Firestore, Terraform, Docker, Redis',
  },
];

const timelineListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

const timelineItemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

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
            Hi, I'm Diana Tao - a UC Berkeley Computer Science graduate with a Data Science minor.
            I'm focused on software engineering, AI engineering, and AI infrastructure, especially
            systems that make intelligent tools reliable, observable, and useful in real developer
            workflows. I enjoy building across the stack, from product-facing React experiences to
            backend services, cloud infrastructure, and ML-powered automation.

            </p>
            <p>
            Through engineering roles in AI developer tooling, medical imaging, behavioral health
            research, and biodiversity monitoring, I've worked on production software, LLM systems,
            machine learning pipelines, and cloud platforms. I'm interested in both general software
            engineering and AI Engineer / AI Infrastructure roles where strong systems thinking
            matters.
            Outside of the terminal, you'll probably find me exploring restaurants, making matcha, or enjoying Canto-pop and K-pop playlists.
            </p>
          </motion.div>

          <motion.div
            className="about-timeline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2>Experience</h2>
            <motion.ol
              className="timeline-list"
              variants={timelineListVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {timelineItems.map((item, index) => (
                <motion.li
                  key={`${item.year}-${index}`}
                  className="timeline-item"
                  variants={timelineItemVariants}
                  whileHover={{ x: 8, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="timeline-dot" aria-hidden="true"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>

          <motion.div
            className="about-timeline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            viewport={{ once: true }}
          >
            <h2>Education</h2>
            <motion.ol
              className="timeline-list"
              variants={timelineListVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {educationItems.map((item, index) => (
                <motion.li
                  key={`${item.year}-${index}`}
                  className="timeline-item"
                  variants={timelineItemVariants}
                  whileHover={{ x: 8, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="timeline-dot" aria-hidden="true"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>

          <motion.div
            className="about-timeline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2>Skills</h2>
            <motion.ol
              className="timeline-list"
              variants={timelineListVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {skillItems.map((item, index) => (
                <motion.li
                  key={`${item.year}-${index}`}
                  className="timeline-item"
                  variants={timelineItemVariants}
                  whileHover={{ x: 8, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="timeline-dot" aria-hidden="true"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
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
            <a href="/Tao__Yifei_SWE_2026_NG.pdf" className="about-btn" download>
              <i className="fa fa-download"></i>
              <span>Resume</span>
            </a>
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
