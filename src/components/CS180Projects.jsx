import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/CS180Projects.css';

const CS180Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/cs180-proj${projectId.toString().padStart(2, '0')}`);
  };

  const projects = [
    {
      id: 0,
      title: 'Becoming Friends with Your Camera',
      description: 'Introduction to camera fundamentals and basic image processing concepts.'
    },
    {
      id: 1,
      title: 'Colorizing Prokudin-Gorskii Photographs',
      description: 'Automatic channel alignment for historical glass plate images (.jpg and .tif).'
    },
    {
      id: 2,
      title: 'Fun with Filters and Frequencies',
      description: 'Convolution implementation, edge detection, image sharpening, hybrid images, and multiresolution blending.'
    },
    {
      id: 3,
      title: '[Auto]Stitching Photo Mosaics',
      description: 'Automatic panoramic image stitching using homography recovery, image warping, and multiresolution blending.'
    },
    {
      id: 4,
      title: 'Neural Radiance Fields (NeRF)',
      description: 'Camera calibration, 3D scanning, and neural radiance field training for novel view synthesis from multi-view images.'
    },
    {
      id: 5,
      title: 'Diffusion Models',
      description: 'DeepFloyd IF diffusion model implementation: forward/backward diffusion, classifier-free guidance, image-to-image translation, inpainting, visual anagrams, and hybrid images.'
    }
    // More projects can be added here as they're completed
  ];

  return (
    <section id="cs180-projects" className="cs180-projects">
      <div className="container">
        <h2 className="section-title">CS180<span> Computer Vision</span></h2>
        <p className="section-subtitle">Intro to Computer Vision and Computational Photography</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-item clickable"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <span className="btn">View Project</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CS180Projects;
