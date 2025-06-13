import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Technology color mapping
  const techColors = {
    'Python': '#2B5B84',
    'TensorFlow': '#E65100',
    'PyTorch': '#C62828',
    'Full Stack': '#0288D1',
    'OpenAI Integration': '#0D6B4E',
    'Multi-Agent': '#C62828',
    'Text-to-Speech (TTS)': '#1565C0',
    'Speech-to-Text (ASR)': '#4527A0',
    'AutoGen': '#F57F17',
    'Probability': '#E65100',
    'Markov Chains': '#4527A0',
    'Schema Extraction': '#00695C',
    'Text Generation': '#2E7D32',
    'React': '#0288D1',
    'MobileApp': '#C62828',
    'JavaScript': '#F9A825',
    'Machine Learning': '#E65100',
    'Transformers': '#F57F17',
    'Computer Vision': '#1565C0',
    'Image Processing': '#00695C'
  };

  const projects = [
    {
      id: 1,
      title: 'SoundHub',
      description: 'We used data from autonomous acoustic recorders across 63 locations. Custom classifiers for Google Perch, MobileNetV2, and BirdNet 2.4 were developed with sound libraries spanning seven classes, including frogs, mammals, insects, and anthropogenic sounds, and evaluated using few-shot learning with training sizes from 0 to 300 clips.',
      image: '/img/SoundHub_coyote.png',
      category: 'research',
      technologies: ['Python', 'TensorFlow', 'PyTorch'],
      links: {
        readMore: 'https://drive.google.com/file/d/1_miYENC77UiIdJWS09B0d6zt1zlj_bp3/view?usp=sharing',
        github: 'https://github.com/DianaTao/SoundHub'
      }
    },
    {
      id: 2,
      title: 'Team ReView Product CasePilot',
      description: 'CasePilot is an innovative AI-powered platform that transforms traditional case study interview preparation by simulating dynamic, industry-specific interviews through a multi-agent system utilizing technologies like OpenAI GPT-4 and Whisper. Unlike static tools, CasePilot offers interactive, adaptive conversations and real-time feedback, enhancing user engagement and effectively mirroring the complexities of real-world case interviews.',
      image: '/img/CasePilot.png',
      category: 'course',
      technologies: ['Python', 'Full Stack', 'OpenAI Integration', 'Multi-Agent', 'Text-to-Speech (TTS)', 'Speech-to-Text (ASR)','AutoGen'],
      links: {
        readMore: 'https://drive.google.com/file/d/1FefT6TR9TMLbHAnqANm-PuNHv8y2bJaN/view?usp=sharing',
        github: 'https://github.com/Max-vS/CS194-project',
        slides: 'https://drive.google.com/file/d/1FZq7Kq1PkoP8PPN75WhPOmSc6MPsNU1f/view?usp=sharing'
      }
    },
    {
      id: 3,
      title: 'Data Augmentation for Very Large Schema Extraction Testing',
      description: 'Over the Spring 2025, I partnered with InferLink Corp under the mentorship of Dr. Adrien Bibal to tackle a pervasive bottleneck in schema‐driven information extraction: the long‐tail sparsity that plagues giant JSON schemas. In this role, I designed and implemented a stochastic, coverage‐driven augmentation framework that leverages GPT-4 to synthesize richly varied, contextually coherent sentences targeting underrepresented entity–attribute slots.',
      image: '/img/DataAugmentation.png',
      category: 'research',
      technologies: ['Python', 'Probability', 'OpenAI Integration', 'Markov Chains', 'Schema Extraction', 'Text Generation'],
      links: {
        github: 'https://github.com/DianaTao/Schema-Extraction',
        readMore:'https://docs.google.com/presentation/d/1WBChSAF-3C86KdPC0Pxm6NGTzGw7IvRGuF0U7Uz10D0/edit?usp=sharing'
      }
    },
    {
      id: 4,
      title: 'Art Advisor AI',
      description: 'An innovative mobile application that enhances the art gallery and museum experience through artificial intelligence. The app allows visitors to capture images of artwork using their mobile device\'s camera and instantly receive AI-generated descriptions and insights about the pieces they\'re viewing. The project combines a React Native mobile frontend with a Python-based backend that leverages the VIT-GPT2 model for image captioning. It\'s designed to work offline, processing images locally without requiring external API calls, making it ideal for use in museums and galleries where internet connectivity might be limited.',
      image: '/img/art-advisor.png',
      category: 'personal',
      technologies: ['Full Stack', 'React', 'MobileApp', 'JavaScript', 'Python', 'Machine Learning', 'PyTorch', 'Transformers', 'Computer Vision', 'Image Processing'],
      links: {
        github: 'https://github.com/DianaTao/art-advisor-ai'
      }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My<span> Projects</span></h2>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'research' ? 'active' : ''}`}
            onClick={() => setActiveFilter('research')}
          >
            Research
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'course' ? 'active' : ''}`}
            onClick={() => setActiveFilter('course')}
          >
            Course Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'personal' ? 'active' : ''}`}
            onClick={() => setActiveFilter('personal')}
          >
            Personal Projects
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="project-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="tech-tag"
                      style={{ 
                        backgroundColor: techColors[tech] || '#666',
                        color: '#fff'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.links.readMore && (
                    <a href={project.links.readMore} target="_blank" rel="noopener noreferrer" className="btn">
                      Read More
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn">
                      GitHub
                    </a>
                  )}
                  {project.links.slides && (
                    <a href={project.links.slides} target="_blank" rel="noopener noreferrer" className="btn">
                      Slides
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 