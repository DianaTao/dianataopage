import { motion } from 'framer-motion';
import '../styles/CS180Projects.css';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const CS180Proj04 = () => {
  return (
    <div className="cs180-project-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="project-title">CS180 Computer Vision</h1>
          <h2 className="project-subtitle">Proj4: Neural Radiance Fields (NeRF)</h2>
        </motion.div>

        <motion.div
          className="project-sections"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >

          <div className="section-item">
            <h3 className="section-title">Part 0: Camera Calibration and 3D Scanning</h3>
            <div className="section-content">
              <p>
                Before we can train a NeRF, we need to know exactly how our camera works and where it was positioned when we took each photo. 
                This part was all about setting up that foundation. I used ArUco tags—those black and white square markers you might have seen 
                in augmented reality demos—as reliable reference points. By tracking these tags across different images, I could figure out 
                both the camera's internal properties (like focal length) and its position in 3D space for each shot.
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 0.1: Calibrating Your Camera</h3>
            <div className="section-content">
              <p>
                First things first, I needed to calibrate my camera. Think of this like getting to know your camera's personality—every camera 
                has slight imperfections in its lens that cause distortion, and I needed to measure those imperfections so I could correct for 
                them later. I wrote a script called <code>calibrate_aruco.py</code> that does this automatically.
              </p>

              <p>
                The process is pretty straightforward: I set up an ArUco detector that looks for those special square markers. Each marker 
                has four corners, and since I know the real-world size of the markers (they're 2cm × 2cm), I can use them as reference points. 
                For each calibration image, the script detects the markers, extracts their corner positions, and then uses OpenCV's calibration 
                function to figure out the camera's intrinsic parameters—things like the focal length and where the optical center is.
              </p>

              <p>
                One thing I really liked about my implementation is how robust it is. If an image doesn't have any tags visible, it just 
                skips it instead of crashing. And it works with different versions of OpenCV, which was helpful since different systems might 
                have different versions installed.
              </p>

              <div className="results-box">
                <h5>What I Got:</h5>
                <p>
                  I captured 43 calibration images from various angles and distances. The calibration results were saved to a file containing 
                  the camera's intrinsic matrix <InlineMath math="K" /> (which tells us about focal length and image center), distortion 
                  coefficients <InlineMath math="D" /> (which describe the lens imperfections), and the RMS reprojection error (a measure of 
                  how accurate the calibration is). The lower the error, the better!
                </p>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 0.2: Capturing a 3D Object Scan</h3>
            <div className="section-content">
              <p>
                Now for the fun part—capturing my object! I chose a personal item and set it up on a table with a single ArUco tag next to it. 
                The tag acts as our coordinate system origin, so we know where everything is in 3D space.
              </p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj04/part0/obj.jpg" alt="Object for 3D scanning" />
                    <p className="image-caption">The object I scanned for NeRF training</p>
                  </div>
                </div>
              </div>

              <p>
                I took 48 photos from all different angles—moving around the object horizontally and vertically, making sure to cover it from 
                every side. The key was keeping things consistent: same distance (about 10-20cm away), same lighting, same camera settings. I made 
                sure the object filled about half the frame in each shot, which gives the NeRF plenty of detail to work with.
              </p>

              <p>
                It was actually kind of meditative, slowly moving around the object and taking photos. I had to be careful not to change the 
                exposure or introduce motion blur, since those would mess up the training later. But after a while, I had a nice collection of 
                48 images that captured the object from every angle.
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 0.3: Estimating Camera Pose</h3>
            <div className="section-content">
              <p>
                For each of those 48 photos, I needed to figure out exactly where the camera was and which way it was pointing. This is called 
                "pose estimation," and it's crucial because the NeRF needs to know the camera's viewpoint for each training image.
              </p>

              <p>
                My script <code>estimate_pose_aruco.py</code> does this by detecting the ArUco tag in each image. Since I know the 3D position 
                of the tag's corners (they're in a fixed position relative to the object), and I can see where those corners appear in the 2D 
                image, I can solve for the camera's position and orientation. This is a classic computer vision problem called "Perspective-n-Point" 
                or PnP, and OpenCV has a function that solves it for me.
              </p>

              <p>
                The tricky part was converting from OpenCV's coordinate system (where the camera is the origin) to the NeRF's coordinate system 
                (where the world is the origin). I had to do some matrix math to flip things around, but once that was done, I had a nice set of 
                camera poses saved to a file.
              </p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj04/part0/frustums_visualization_1.png" alt="Camera frustums visualization 1" />
                    <p className="image-caption">Camera poses visualization - View 1</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj04/part0/frustums_visualization_2.png" alt="Camera frustums visualization 2" />
                    <p className="image-caption">Camera poses visualization - View 2</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj04/part0/frustums_visualization_3.png" alt="Camera frustums visualization 3" />
                    <p className="image-caption">Camera poses visualization - View 3</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj04/part0/frustums_visualization_4.png" alt="Camera frustums visualization 4" />
                    <p className="image-caption">Camera poses visualization - View 4</p>
                  </div>
                </div>
              </div>

              <p>
                I used a visualization tool to see all my camera positions in 3D space. It's really cool to see how the cameras are arranged 
                around the object—you can see the frustums (those pyramid shapes) showing where each camera was pointing. This helped me verify 
                that the pose estimation worked correctly and that I had good coverage of the object from all angles.
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 0.4: Undistorting Images and Creating a Dataset</h3>
            <div className="section-content">
              <p>
                Before feeding everything into the NeRF, I needed to clean up the images and package them properly. The lens distortion I 
                measured during calibration? Now's the time to fix it. I used OpenCV's undistort function to straighten out those slightly 
                warped edges.
              </p>

              <p>
                I also split my 48 images into training (80%), validation (10%), and test (10%) sets. The training set is what the NeRF 
                learns from, the validation set helps me monitor training progress, and the test set is for evaluating the final quality. 
                I made sure all images were the same size and converted everything to the right format—RGB colors, proper data types, that 
                sort of thing.
              </p>

              <p>
                The final dataset is saved as a NumPy file with all the images, camera poses (converted to 4×4 matrices for convenience), 
                and the camera's focal length. Everything's ready to go for training!
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1: Fit a Neural Field to a 2D Image</h3>
            <div className="section-content">
              <p>
                This part was my introduction to neural fields—the core idea behind NeRF. Instead of storing an image as a grid of pixels, 
                what if we could represent it as a function? A neural network that takes pixel coordinates (x, y) as input and outputs the 
                RGB color at that location. It's a bit mind-bending at first, but once you see it working, it's really elegant.
              </p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj04/part1/model_arch.png" alt="Neural field model architecture" />
                    <p className="image-caption">The neural field architecture - a simple MLP that maps coordinates to colors</p>
                  </div>
                </div>
              </div>

              <div className="results-box">
                <h5>Model Architecture Report:</h5>
                <ul>
                  <li><strong>Number of Layers:</strong> 4 layers total (3 hidden layers + 1 output layer)</li>
                  <li><strong>Hidden Dimension (Width):</strong> Configurable - tested with 64 and 256 units per layer</li>
                  <li><strong>Input Dimension:</strong> Depends on positional encoding frequency L
                    <ul>
                      <li>For L=2: input_dim = 2 + 4×2 = 10</li>
                      <li>For L=10: input_dim = 2 + 4×10 = 42</li>
                    </ul>
                  </li>
                  <li><strong>Activation Function:</strong> ReLU (Rectified Linear Unit) for hidden layers</li>
                  <li><strong>Output Activation:</strong> Sigmoid to constrain RGB values to [0, 1]</li>
                  <li><strong>Learning Rate:</strong> 0.01 (1e-2) using Adam optimizer</li>
                  <li><strong>Batch Size:</strong> 10,000 pixels per iteration</li>
                  <li><strong>Number of Iterations:</strong> 2,000 iterations</li>
                  <li><strong>Loss Function:</strong> Mean Squared Error (MSE) between predicted and ground truth RGB values</li>
                </ul>
              </div>

              <p>
                The network itself is pretty simple—just a few fully connected layers. But here's the clever part: before feeding the 
                coordinates into the network, I apply something called "positional encoding." This transforms the simple (x, y) coordinates 
                into a much richer representation using sine and cosine waves at different frequencies. It's like giving the network a way to 
                "see" fine details and sharp edges, which regular coordinates can't really express.
              </p>

              <p>
                The positional encoding formula looks like this:
              </p>
              <BlockMath math={"PE(x) = [x, \\sin(2\\pi \\cdot 2^0 \\cdot x), \\cos(2\\pi \\cdot 2^0 \\cdot x), \\sin(2\\pi \\cdot 2^1 \\cdot x), \\cos(2\\pi \\cdot 2^1 \\cdot x), \\ldots, \\sin(2\\pi \\cdot 2^{L-1} \\cdot x), \\cos(2\\pi \\cdot 2^{L-1} \\cdot x)]"} />

              <p>
                Where <InlineMath math="L" /> is the number of frequency levels. More frequencies mean the network can learn finer details, 
                but it also needs more parameters and takes longer to train.
              </p>

              <div className="subsection">
                <h4 className="subsection-title">Training the Network</h4>
                <p>
                  Training was surprisingly straightforward. I'd randomly sample 10,000 pixels from the image, feed their coordinates through 
                  the network, get predicted colors, and compare them to the actual colors. The difference (the loss) tells the network 
                  how to adjust its weights. I used the Adam optimizer with a learning rate of 0.01, and trained for 2,000 iterations.
                </p>

                <p>
                  What's neat is that I don't need to load the entire image into memory at once—I just sample pixels randomly each iteration. 
                  This makes it possible to train on very high-resolution images without running out of memory.
                </p>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Experimenting with Different Configurations</h4>
                <p>
                  I tried several different configurations to see how they affected the results:
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/recon_iter_L2_W64.png" alt="L2 W64 reconstruction" />
                      <p className="image-caption">L=2, W=64 - Lower frequency, smaller network</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/recon_iter_L2_W256.png" alt="L2 W256 reconstruction" />
                      <p className="image-caption">L=2, W=256 - Lower frequency, larger network</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/recon_iter_L10_W64.png" alt="L10 W64 reconstruction" />
                      <p className="image-caption">L=10, W=64 - Higher frequency, smaller network</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/recon_iter_L10_W256.png" alt="L10 W256 reconstruction" />
                      <p className="image-caption">L=10, W=256 - Higher frequency, larger network (best quality)</p>
                    </div>
                  </div>
                </div>

                <p>
                  The results were pretty clear: using more frequencies (L=10) and a wider network (W=256) gave the best results. With L=2, 
                  the network struggled to capture fine details and textures. With a smaller width (W=64), it was faster to train but couldn't 
                  represent complex patterns as well. The L=10, W=256 configuration struck the perfect balance—it could capture both the 
                  overall structure and the fine details.
                </p>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Watching the Network Learn</h4>
                <p>
                  One of the coolest parts was watching the network gradually learn the image. At first, it's just a blurry mess of colors. 
                  Then shapes start to emerge. Finally, fine details and textures appear. It's like watching a photo develop in a darkroom, 
                  but in reverse—starting blurry and getting sharper.
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/staff_recon_iter_0001.png" alt="Iteration 1" />
                      <p className="image-caption">Iteration 1 </p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/staff_recon_iter_0050.png" alt="Iteration 50" />
                      <p className="image-caption">Iteration 50 </p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/staff_recon_iter_0150.png" alt="Iteration 150" />
                      <p className="image-caption">Iteration 150 </p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/staff_recon_iter_0500.png" alt="Iteration 500" />
                      <p className="image-caption">Iteration 500 </p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/staff_recon_iter_1000.png" alt="Iteration 1000" />
                      <p className="image-caption">Iteration 1000 </p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/staff_recon_iter_2000.png" alt="Iteration 2000" />
                      <p className="image-caption">Iteration 2000 </p>
                    </div>
                  </div>
                </div>

                <p>
                  Here are the loss and PSNR curves for training on the staff image, showing how the network improved over time:
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/staff_loss_curve.png" alt="Staff image loss curve" />
                      <p className="image-caption">Training loss curve for staff image</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/staff_psnr_curve.png" alt="Staff image PSNR curve" />
                      <p className="image-caption">PSNR curve for staff image</p>
                    </div>
                  </div>
                </div>

                <p>
                  I also tried it on a photo of a corgi, just for fun! The network learned it beautifully. Here's the complete training 
                  progression showing all the intermediate steps:
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/corgi_recon_iter_0001.png" alt="Corgi iteration 1" />
                      <p className="image-caption">Corgi - Iteration 1</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/corgi_recon_iter_0050.png" alt="Corgi iteration 50" />
                      <p className="image-caption">Corgi - Iteration 50</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/corgi_recon_iter_0150.png" alt="Corgi iteration 150" />
                      <p className="image-caption">Corgi - Iteration 150</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/corgi_recon_iter_0500.png" alt="Corgi iteration 500" />
                      <p className="image-caption">Corgi - Iteration 500</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/corgi_recon_iter_1000.png" alt="Corgi iteration 1000" />
                      <p className="image-caption">Corgi - Iteration 1000</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/corgi_recon_iter_2000.png" alt="Corgi iteration 2000" />
                      <p className="image-caption">Corgi - Iteration 2000</p>
                    </div>
                  </div>
                </div>

                <p>
                  Here are the loss and PSNR curves for training on the corgi image:
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/corgi_loss_curve.png" alt="Corgi image loss curve" />
                      <p className="image-caption">Training loss curve for corgi image</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part1/corgi_psnr_curve.png" alt="Corgi image PSNR curve" />
                      <p className="image-caption">PSNR curve for corgi image</p>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 2: Fit a Neural Radiance Field from Multi-view Images</h3>
            <div className="section-content">
              

              <div className="subsection">
                <h4 className="subsection-title">Implementation Overview</h4>
                <p>
                  Here's how I implemented each part of the NeRF pipeline:
                </p>

                <p>
                  <strong>Part 2.1: Create Rays from Cameras</strong> - I wrote functions to convert pixel coordinates to 3D rays by inverting 
                  the pinhole camera model. For each pixel in each training image, I compute the ray origin (camera position) and direction 
                  (through the pixel into the scene). I precompute all rays for all training images upfront to speed up training.
                </p>

                <p>
                  <strong>Part 2.2: Sampling</strong> - For each ray, I sample 64 points uniformly between near and far planes (near=2.0, 
                  far=6.0 for Lego). During training, I add random jitter to sample positions to prevent overfitting to fixed locations.
                </p>

                <p>
                  <strong>Part 2.3: Dataloading</strong> - I created a unified dataloader that randomly samples batches of rays from across 
                  all training images. Each ray includes its origin, direction, and ground truth pixel color. This ensures the network sees 
                  diverse viewpoints during training.
                </p>

                <p>
                  <strong>Part 2.4: Neural Radiance Field Network</strong> - The network takes a 3D position and viewing direction, applies 
                  positional encoding (L=10 for position, L=4 for direction), and passes through 8 layers (256 units wide) with a skip 
                  connection after 4 layers. It predicts density (geometry) and color (appearance) separately, with color being 
                  view-dependent.
                </p>

                <p>
                  <strong>Part 2.5: Volume Rendering</strong> - I implement the volume rendering equation to combine 64 sample points along 
                  each ray into a single pixel color. This involves computing alpha (opacity) from density, transmittance (light survival), 
                  and weights for each sample. The final color is a weighted sum of sample colors.
                </p>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">NeRF Network Architecture</h4>
                
                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2/part2 arch.png" alt="Part 2 NeRF architecture" />
                      <p className="image-caption">NeRF network architecture for 3D scene representation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Ray and Sample Visualization</h4>
                

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2/sampled_first_img.png" alt="Sampled rays from first image" />
                      <p className="image-caption">Rays sampled from the first training image</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2/Samples_100_rays_randomly_from_all_images_in_the_dataset.png" alt="100 random rays from all images" />
                      <p className="image-caption">100 randomly sampled rays from all training images with cameras</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Training Progression</h4>
                <p>
                  The network starts with a blurry approximation and gradually 
                  refines the geometry and appearance. Here's the training progression on the validation set:
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2/val_recon_iter_00001.png" alt="Iteration 1" />
                      <p className="image-caption">Iteration 1 </p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2/val_recon_iter_00100.png" alt="Iteration 100" />
                      <p className="image-caption">Iteration 100 </p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2/val_recon_iter_00500.png" alt="Iteration 500" />
                      <p className="image-caption">Iteration 500 </p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2/val_recon_iter_01000.png" alt="Iteration 1000" />
                      <p className="image-caption">Iteration 1000</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2/val_recon_iter_02000.png" alt="Iteration 2000" />
                      <p className="image-caption">Iteration 2000</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2/val_recon_iter_05000.png" alt="Iteration 5000" />
                      <p className="image-caption">Iteration 5000 </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Training Loss and PSNR Curves</h4>
                <p>
                  I monitored the training progress using both loss and PSNR (Peak Signal-to-Noise Ratio) curves. The loss shows how well the 
                  network is minimizing the error between predicted and ground truth colors, while PSNR measures the reconstruction quality. 
                  Higher PSNR values indicate better image quality:
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2/part2_nerf_lego_v2.1_loss.png" alt="Training loss curve" />
                      <p className="image-caption">Training loss curve - error decreasing over time</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2/part2_nerf_lego_v2.1_psnr.png" alt="PSNR curve" />
                      <p className="image-caption">PSNR curve on validation set - quality increases over time</p>
                    </div>
                  </div>
                </div>

                <p>
                  Both curves show steady improvement throughout training. The loss decreases smoothly, indicating the network is learning to 
                  better predict pixel colors. The PSNR increases correspondingly, showing that the reconstruction quality is improving. The 
                  curves level off as the network converges, suggesting we've reached a good balance between model capacity and training data.
                </p>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Spherical Rendering of Lego</h4>
                <p>
                  After training, I rendered novel views by positioning a virtual camera on a sphere around the Lego object. This spherical 
                  rendering demonstrates the NeRF's ability to synthesize completely new viewpoints that weren't in the training set:
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2/lego_spherical.gif" alt="Lego spherical rendering" />
                      <p className="image-caption">Spherical rendering animation of the Lego NeRF from provided test cameras</p>
                    </div>
                  </div>
                </div>

                <p>
                  The animation shows the object rotating smoothly, demonstrating that the NeRF has learned a coherent 3D representation 
                  with proper geometry, lighting, and view-dependent effects. You can see how the reflections and shadows change naturally 
                  as the viewpoint rotates.
                </p>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 2.6: Training with Your Own Data</h3>
            <div className="section-content">
              <p>
                I used the dataset I created in Part 0, with 35 training images 
                (400×400 pixels each) of my personal object captured from different angles. The training process was similar to the Lego dataset, 
                but I had to make some important adjustments to handle real-world data. I trained on an MPS device (Apple Silicon GPU) for 
                efficient computation.
              </p>

              <div className="subsection">
                <h4 className="subsection-title">Code and Hyperparameter Changes</h4>
                

                <div className="results-box">
                  <h5>Hyperparameters Used:</h5>
                  <ul>
                    <li><strong>Dataset:</strong> 35 training images at 400×400 resolution, precomputed 5,600,000 rays total</li>
                    
                    <li><strong>Near/Far Bounds:</strong> The most critical change was adjusting the sampling bounds. The Lego object was 
                    several units away from the camera (near=2.0, far=6.0), but my object was much closer—just centimeters away. I adjusted 
                    these to <strong>near=0.03</strong> and <strong>far=0.22</strong> to match the actual scale of my scene. These bounds define 
                    where along each ray we sample points, so getting them right is crucial for the network to learn the correct geometry.</li>
                    
                    <li><strong>Training Iterations:</strong> I trained for <strong>15,000 iterations</strong> to achieve high-quality results. 
                    Real-world data tends to be noisier and more challenging than synthetic data, so it needs more training time to converge 
                    properly.</li>
                    
                    <li><strong>Batch Size:</strong> I used a <strong>batch size of 2,048 rays</strong> per iteration (compared to 10,000 for 
                    Lego). This smaller batch size worked well with the MPS device and provided good training stability.</li>
                    
                    <li><strong>Samples per Ray:</strong> I kept <strong>64 samples per ray</strong>, the same as the Lego dataset, which 
                    provides a good balance between quality and computational cost.</li>
                    
                    <li><strong>Learning Rate:</strong> I used a learning rate of <strong>5e-4</strong>, which provided stable 
                    training and good convergence.</li>
                    
            
                  </ul>
                </div>

                <p>
                  The code changes were minimal—mostly just parameter adjustments in the training script. The core NeRF architecture and 
                  volume rendering code remained the same, which shows how robust the method is across different types of scenes.
                </p>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Training Loss and PSNR Over Iterations</h4>
                <p>
                  The loss shows how well the network is minimizing the error, while PSNR measures the reconstruction quality. Here are the plots:
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2.6/_loss.png" alt="Training loss curve" />
                      <p className="image-caption">Plot of training loss over iterations</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2.6/_psnr.png" alt="PSNR curve" />
                      <p className="image-caption">Plot of PSNR over iterations</p>
                    </div>
                  </div>
                </div>

                <p>
                The loss curve shows an initial rapid reduction, after which the decrease becomes more gradual and stable, reflecting a well-behaved optimization process. The small oscillations observed later in training are characteristic of stochastic sampling and do not indicate instability. Correspondingly, the PSNR curve increases sharply at the outset and continues to improve consistently throughout training. This monotonic upward trend confirms that reconstruction fidelity steadily increases, culminating in a high PSNR, indicative of a robust and accurate NeRF representation of the scene.
                </p>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Intermediate Renders During Training</h4>
                <p>
                  Watching the NeRF learn my object was incredible. At first, it's just a blurry cloud of colors. Then shapes start to emerge. 
                  Gradually, details appear—textures, shadows, reflections. It's like watching a 3D sculpture being carved out of nothing. 
                  Here are intermediate renders showing the progression:
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2.6/mine_val_recon_iter_00001.png" alt="Iteration 1" />
                      <p className="image-caption">Iteration 1 </p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2.6/mine_val_recon_iter_00100.png" alt="Iteration 100" />
                      <p className="image-caption">Iteration 100 </p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2.6/mine_val_recon_iter_00500.png" alt="Iteration 500" />
                      <p className="image-caption">Iteration 500</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2.6/mine_val_recon_iter_01000.png" alt="Iteration 1000" />
                      <p className="image-caption">Iteration 1000</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2.6/mine_val_recon_iter_05000.png" alt="Iteration 5000" />
                      <p className="image-caption">Iteration 5000</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2.6/mine_val_recon_iter_15000.png" alt="Iteration 15000" />
                      <p className="image-caption">Iteration 15000 -</p>
                    </div>
                  </div>
                </div>

                <p>
                  The progression shows how the network gradually refines its understanding of the scene. Early iterations capture only the 
                  overall color and rough shape. As training continues, the geometry becomes more defined, textures emerge, and fine details 
                  like edges and surface features become sharp. By iteration 15,000, the NeRF has learned a 3D representation that 
                  can render photorealistic novel views.
                </p>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Novel View Synthesis - Camera Circling Animation</h4>
                <p>
                  After training, I rendered novel views by positioning a virtual camera on a circular path around my object. This GIF shows 
                  the camera circling the object, demonstrating the NeRF's ability to synthesize completely new viewpoints that weren't in 
                  the training set:
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj04/part2.6/my_object_spherical.gif" alt="My object spherical rendering" />
                      <p className="image-caption">GIF of camera circling my object showing novel views</p>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default CS180Proj04;
