import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    if (project.id === 5) { // MindBridge project
      navigate('/projects/mindbridge');
    }
  };

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
    'Image Processing': '#00695C',
    'AWS Lambda': '#FF9900',
    'Serverless': '#FD7E14',
    'AWS': '#FF9900',
    'DynamoDB': '#1976D2',
    'API Gateway': '#00ACC1',
    'Amazon Rekognition': '#E91E63',
    'Amazon Comprehend': '#9C27B0',
    'Amazon Bedrock': '#FF5722',
    'Real-time Processing': '#4CAF50',
    'Event-driven': '#795548',
    'Next.js': '#000000',
    'React Native': '#61DAFB',
    'FastAPI': '#009688',
    'Supabase': '#3ECF8E',
    'PostgreSQL': '#336791',
    'Claude AI': '#7B1FA2',
    'Tailwind CSS': '#06B6D4',
    'Expo': '#000020',
    'JWT Auth': '#00BCD4',
    'Vite': '#646CFF',
    'Netlify': '#00C7B7',
    'Real-time': '#4CAF50',
    'Authentication': '#FF5722',
    'Row Level Security': '#795548'
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
      id: 5,
      title: 'MindBridge: Multi-Modal Emotion Intelligence Platform',
      description: 'A comprehensive emotion intelligence platform that leverages AWS serverless architecture to provide real-time emotion analysis across multiple modalities. The platform serves three key areas: Corporate Wellness Monitoring, Call Center Agent Support, and Digital Mental Health Coaching. Features include real-time video emotion detection using Amazon Rekognition, text sentiment analysis with Amazon Comprehend, live call analysis with Amazon Transcribe, and mental health check-ins powered by Amazon Bedrock. The system uses a sophisticated serverless architecture with Lambda functions for scalable, event-driven processing of emotional data.',
      image: '/img/mindbridge.svg',
      category: 'personal',
      technologies: ['Python', 'AWS Lambda', 'Serverless', 'AWS', 'DynamoDB', 'API Gateway', 'Amazon Rekognition', 'Amazon Comprehend', 'Amazon Bedrock', 'Real-time Processing', 'Event-driven'],
      links: {
        github: 'https://github.com/DianaTao/MindBridge',
        devpost: 'https://devpost.com/software/mindbridge-sow81y',
        demo: 'https://youtu.be/92xVVM9TcDk',
        link: 'https://d8zwp3hg28702.cloudfront.net/'
      }
    },
    {
      id: 6,
      title: 'SOLACE: Social Work Operations Assistant',
      description: 'An innovative AI-powered platform designed to empower social workers in the San Francisco Bay Area with advanced tools for case management, documentation, and collaboration. SOLACE features a cross-platform solution with web and mobile apps, offering voice-to-text case notes, AI-powered task generation, intelligent report analysis, and real-time data synchronization. Built with a modern tech stack including Next.js, React Native, Python FastAPI, and Supabase, the platform prioritizes security and HIPAA compliance while streamlining social work operations.',
      image: '/img/solace.svg',
      category: 'personal',
      technologies: ['Next.js', 'React Native', 'Python', 'FastAPI', 'Supabase', 'PostgreSQL', 'Claude sonnet AI', 'Tailwind CSS', 'Expo', 'Vapi'],
      links: {
        github: 'https://github.com/DianaTao/solace',
        devpost: 'https://devpost.com/software/solace-yqirtb',
        link: 'https://solace-nu.vercel.app'
      }
    },
    {
      id: 7,
      title: 'StudyBuddy Hub',
      description: 'A React-based web application that allows students to create, share, and interact with course-related posts. The platform provides a comprehensive solution for students to share study tips, course reviews, and academic experiences. Built with React 18, Vite, Tailwind CSS, and Supabase, featuring real-time updates, authentication, and a modern UI with external Reddit API integration for additional study content.',
      image: '/img/StudyBuddy_Hub_demo.mp4',
      category: 'personal',
      technologies: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Authentication', 'Real-time', 'Row Level Security', 'Netlify'],
      links: {
        github: 'https://github.com/DianaTao/StudyBuddy-hub',
        link: 'https://singular-duckanoo-974e8f.netlify.app/'
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
              className={`project-item ${project.id === 5 ? 'clickable' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-image">
                {project.image.endsWith('.mp4') ? (
                  <video 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    style={{ width: '100%', height: 'auto' }}
                  />
                ) : (
                  <img src={project.image} alt={project.title} loading="lazy" />
                )}
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
                  {project.links.devpost && (
                    <a href={project.links.devpost} target="_blank" rel="noopener noreferrer" className="btn">
                      Devpost
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn">
                      Demo
                    </a>
                  )}
                  {project.links.link && (
                    <a href={project.links.link} target="_blank" rel="noopener noreferrer" className="btn">
                      Link
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