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
            <h3 className="section-title">Part 2: Berkeley Campanile - Perspective Compression in Architecture</h3>
            <div className="section-content">
              <p>
                The iconic Berkeley Campanile demonstrates perspective compression beautifully—when shot without zoom from a closer distance, the wide-angle perspective creates dramatic depth and scale, making the tower soar into the sky while capturing the full campus context. However, when photographed from a greater distance with telephoto zoom, perspective compression brings the Campanile and nearby structures closer together, creating an intimate layered composition where the tower appears to stand shoulder-to-shoulder with adjacent buildings rather than towering above them. This compression effect reduces perceived depth, making architectural elements appear on a flatter plane—perfectly illustrating how focal length fundamentally changes our perception of spatial relationships in computer vision.
              </p>
              <div className="section-image">
                <div className="image-comparison">
                  <div className="image-item">
                    <img src="/img/cs180/proj00/part2_without_zoom.png" alt="Berkeley Campanile without zoom showing wide perspective" />
                    <p className="image-caption">Without zoom - wide perspective captures full campus context</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj00/part2_zoom_in.png" alt="Berkeley Campanile with zoom showing perspective compression" />
                    <p className="image-caption">With zoom - perspective compression creates intimate layering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="section-item">
            <h3 className="section-title">Part 3: Flower Dolly Zoom - The Vertigo Effect in Nature</h3>
            <div className="section-content">
              <p>
                The dolly zoom creates a paradoxical visual phenomenon where the camera simultaneously moves forward while zooming out, maintaining the flower's apparent size while dramatically shifting the background's scale and perspective. This technique reveals how our visual system processes conflicting depth cues—as the camera approaches the flower, the background appears to rush toward the viewer while maintaining spatial relationships, creating a surreal effect that challenges our brain's depth perception algorithms.
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
                <p className="video-caption">Flower dolly zoom demonstrating the vertigo effect and depth perception challenges</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CS180Proj00;
