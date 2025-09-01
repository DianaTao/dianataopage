import { motion } from 'framer-motion';
import '../styles/CS180Projects.css';

const CS180Proj00 = () => {
  return (
    <div className="cs180-project-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="project-title">CS180 Computer Vision</h1>
          <h2 className="project-subtitle">Proj0: Becoming Friends with Your Camera</h2>
        </motion.div>
        
        <motion.div
          className="project-sections"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="section-item">
            <h3 className="section-title">Part 1: Selfie: The Wrong Way vs. The Right Way</h3>
            <div className="section-content">
              <p>
                When I take a close-up selfie, my face always looks a bit distorted—the camera is so close that my nose looks bigger, my forehead seems to push forward, and the sides of my head almost disappear, making my face look unnaturally narrow. But when I step back several feet and zoom in so my face is about the same size in the frame, the picture looks much better. The proportions feel more natural because the camera isn't exaggerating the distance between my features, so my nose and cheeks all look more balanced. It's the same face, but the extra distance makes the portrait look more flattering and true to life.
              </p>
              <div className="section-image">
                <div className="image-comparison">
                  <div className="image-item">
                    <img src="/img/cs180/proj00/part1_distort.png" alt="Close-up selfie showing distortion" />
                    <p className="image-caption">Close-up selfie with distortion</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj00/part1_normal.png" alt="Distant shot with zoom showing natural proportions" />
                    <p className="image-caption">Distant shot with zoom - natural proportions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="section-item">
            <h3 className="section-title">Part 2: Architectural Perspective Compression</h3>
            <div className="section-content">
              <p>
                Architectural photography demonstrates how perspective compression affects the visual relationship between buildings and their surroundings. When shooting architecture without zoom, the wide angle creates a sense of depth and space, making buildings appear further apart and emphasizing the environment around them. However, when zooming in from a distance, the perspective compression brings elements closer together, creating a more intimate, layered composition where buildings seem to stack against each other, reducing the perceived depth of the scene.
              </p>
              <div className="section-image">
                <div className="image-comparison">
                  <div className="image-item">
                    <img src="public/img/cs180/proj00/part2_without_zoom.png" alt="Architectural shot without zoom showing wide perspective" />
                    <p className="image-caption">Without zoom - wide perspective, more depth</p>
                  </div>
                  <div className="image-item">
                    <img src="public/img/cs180/proj00/part2_zoom_in.png" alt="Architectural shot with zoom showing perspective compression" />
                    <p className="image-caption">With zoom - perspective compression, less depth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="section-item">
            <h3 className="section-title">Part 3: The Dolly Zoom</h3>
            <div className="section-content">
              <p>
                The dolly zoom, also known as the "vertigo effect," is a cinematic technique that creates a disorienting visual effect by simultaneously moving the camera forward or backward while zooming in the opposite direction. This creates a unique perspective shift where the subject appears to stay the same size while the background dramatically changes its apparent distance and scale, producing a surreal, dreamlike quality that filmmakers use to convey psychological states, disorientation, or dramatic tension.
              </p>
              <div className="section-video">
                <video 
                  src="/img/cs180/proj00/dolly_vid.mov" 
                  controls 
                  width="100%" 
                  height="600px"
                  style={{ borderRadius: '10px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
                >
                  Your browser does not support the video tag.
                </video>
                <p className="video-caption">Dolly zoom demonstration of flowers showing the vertigo effect</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CS180Proj00;
