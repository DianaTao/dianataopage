import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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
      technologies: ['Python', 'Full Stack', 'OpenAI API', 'Multi-Agent'],
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
      technologies: ['Python', 'Probability', 'OpenAI API'],
      links: {
        github: 'https://github.com/DianaTao/Data-Augmentation',
        readMore:'https://docs.google.com/presentation/d/1WBChSAF-3C86KdPC0Pxm6NGTzGw7IvRGuF0U7Uz10D0/edit?usp=sharing'
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
                    <span key={index} className="tech-tag">{tech}</span>
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