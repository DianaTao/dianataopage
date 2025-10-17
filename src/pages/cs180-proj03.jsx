import { motion } from 'framer-motion';
import '../styles/CS180Projects.css';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const CS180Proj03 = () => {
  return (
    <div className="cs180-project-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="project-title">CS180 Computer Vision</h1>
          <h2 className="project-subtitle">Proj3: [Auto]Stitching Photo Mosaics</h2>
        </motion.div>

        <motion.div
          className="project-sections"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >

          <div className="section-item">
            <h3 className="section-title">Part A.1: Shoot and Digitize Pictures</h3>
            <div className="section-content">
              <p>
                First, I needed photos to create the rectifications and mosaic stitching. I took pairs of pictures of inside a coffee shop, wheeler hall, main stack entrance that had the same center of projection. In order to create a smooth projective, I rotated my camera while capturing the photos. I also took images of signs for rectifying.
              </p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a1/original_img/img1_set3.png" alt="Set 1 - Image 1" />
                    <p className="image-caption">Set 1 - Image 1</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a1/original_img/img2_set3.png" alt="Set 1 - Image 2" />
                    <p className="image-caption">Set 1 - Image 2</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a1/original_img/img3_set3.png" alt="Set 1 - Image 3" />
                    <p className="image-caption">Set 1 - Image 3</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a1/original_img/img1_set4.png" alt="Set 2 - Image 1" />
                    <p className="image-caption">Set 2 - Image 1</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a1/original_img/img2_set4.png" alt="Set 2 - Image 2" />
                    <p className="image-caption">Set 2 - Image 2</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a1/original_img/img3_set4.png" alt="Set 2 - Image 3" />
                    <p className="image-caption">Set 2 - Image 3</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a1/original_img/img1_set5.png" alt="Set 3 - Image 1" />
                    <p className="image-caption">Set 3 - Image 1</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a1/original_img/img2_set5.png" alt="Set 3 - Image 2" />
                    <p className="image-caption">Set 3 - Image 2</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a1/original_img/img3_set5.png" alt="Set 3 - Image 3" />
                    <p className="image-caption">Set 3 - Image 3</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a1/original_img/wrap_img1.png" alt="Wrap Image 1" />
                    <p className="image-caption">Wrap Image 1</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a1/original_img/wrap_img2.png" alt="Wrap Image 2" />
                    <p className="image-caption">Wrap Image 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part A.2: Recover Homographies</h3>
            <div className="section-content">
              <p>
                Homography recovery is the core of image stitching. A homography matrix H relates corresponding 
                points between two images through a perspective transformation:
              </p>
              
              <BlockMath math={"\\begin{bmatrix} x' \\\\ y' \\\\ 1 \\end{bmatrix} = H \\begin{bmatrix} x \\\\ y \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} h_1 & h_2 & h_3 \\\\ h_4 & h_5 & h_6 \\\\ h_7 & h_8 & 1 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\\\ 1 \\end{bmatrix}"} />
              
              <p>
                <strong>Linear System Formulation:</strong>
              </p>
              <p>
                For each correspondence <InlineMath math={"\\mathbf{p} = [x, y, 1]^T \\leftrightarrow \\mathbf{p}' = [x', y', 1]^T"} />, 
                the homography relationship can be expressed as:
              </p>
              
              <BlockMath math={"\\begin{aligned} x' &= \\frac{h_1 x + h_2 y + h_3}{h_7 x + h_8 y + 1} \\\\ y' &= \\frac{h_4 x + h_5 y + h_6}{h_7 x + h_8 y + 1} \\end{aligned}"} />
              
              <p>
                Rearranging to linear equations in the 8 unknowns <InlineMath math={"\\mathbf{h} = [h_1, \\ldots, h_8]^T"} />:
              </p>
              
              <BlockMath math={"\\begin{aligned} -x\\,h_1 - y\\,h_2 - 1\\,h_3 + 0\\,h_4 + 0\\,h_5 + 0\\,h_6 + x x'\\,h_7 + y x'\\,h_8 &= -x' \\\\ 0\\,h_1 + 0\\,h_2 + 0\\,h_3 - x\\,h_4 - y\\,h_5 - 1\\,h_6 + x y'\\,h_7 + y y'\\,h_8 &= -y' \\end{aligned}"} />
              
              <p>
                Stacking all correspondences forms the linear system <InlineMath math={"A\\mathbf{h} = \\mathbf{b}"} /> 
                where <InlineMath math={"A \\in \\mathbb{R}^{2n \\times 8}"} /> and <InlineMath math={"\\mathbf{b} \\in \\mathbb{R}^{2n}"} />. 
                For <InlineMath math={"n \\geq 4"} />, the system is solvable; for <InlineMath math={"n > 4"} />, 
                it is overdetermined and solved using least squares.
              </p>

              <div className="results-box">
                <h5>Implementation Details:</h5>
                <p>
                  <strong>Method:</strong> Direct Linear Transform (DLT) using least squares. 
                  <strong>Solver:</strong> <code>numpy.linalg.lstsq</code> (SVD-based, numerically stable). 
                  <strong>Correspondences:</strong> 8+ manually selected point pairs per image pair. 
                  <strong>Scale Fixing:</strong> Set <InlineMath math={"h_9 = 1"} /> to fix projective scale.
                </p>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Recovered Homographies (Set 1)</h4>
                <p>Using 8 correspondences for each image pair:</p>
                
                <BlockMath math={"H^{(set1)}_{1\\to 2} = \\begin{bmatrix} 1.318332 & -0.000419 & -389.903226 \\\\ 0.308627 & 1.289839 & -196.136714 \\\\ 0.000368 & 0.000061 & 1.000000 \\end{bmatrix}"} />
                
                <BlockMath math={"H^{(set1)}_{2\\to 3} = \\begin{bmatrix} 1.248854 & 0.001627 & -395.011799 \\\\ 0.213989 & 1.199604 & -160.880096 \\\\ 0.000270 & 0.000039 & 1.000000 \\end{bmatrix}"} />
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Recovered Homographies (Set 2)</h4>
                <p>Using 8 correspondences for each image pair:</p>
                
                <BlockMath math={"H^{(set2)}_{1\\to 2} = \\begin{bmatrix} 1.170424 & -0.053030 & -178.788404 \\\\ 0.204747 & 1.090940 & -91.071905 \\\\ 0.000213 & -0.000006 & 1.000000 \\end{bmatrix}"} />
                
                <BlockMath math={"H^{(set2)}_{2\\to 3} = \\begin{bmatrix} 1.106075 & -0.025992 & -120.631559 \\\\ 0.118132 & 1.063430 & -49.610643 \\\\ 0.000116 & 0.000008 & 1.000000 \\end{bmatrix}"} />
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Recovered Homographies (Set 3)</h4>
                <p>Using 8 correspondences for each image pair:</p>
                
                <BlockMath math={"H^{(set3)}_{1\\to 2} = \\begin{bmatrix} 1.224584 & -0.045994 & -261.395551 \\\\ 0.234690 & 1.144018 & -138.429842 \\\\ 0.000258 & 0.000006 & 1.000000 \\end{bmatrix}"} />
                
                <BlockMath math={"H^{(set3)}_{2\\to 3} = \\begin{bmatrix} 1.239438 & -0.053528 & -347.734670 \\\\ 0.308564 & 1.192212 & -198.437111 \\\\ 0.000319 & 0.000005 & 1.000000 \\end{bmatrix}"} />
              </div>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a2/selected_correspond_img/selected_correspond_img1_set3_to_img2_set3.png" alt="Set 1: Image 1 to Image 2 correspondences" />
                    <p className="image-caption">Set 1: Image 1 → Image 2</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a2/selected_correspond_img/selected_correspond_img2_set3_to_img3_set3.png" alt="Set 1: Image 2 to Image 3 correspondences" />
                    <p className="image-caption">Set 1: Image 2 → Image 3</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a2/selected_correspond_img/selected_correspond_img1_set4_to_img2_set4.png" alt="Set 2: Image 1 to Image 2 correspondences" />
                    <p className="image-caption">Set 2: Image 1 → Image 2</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a2/selected_correspond_img/selected_correspond_img2_set4_to_img3_set4.png" alt="Set 2: Image 2 to Image 3 correspondences" />
                    <p className="image-caption">Set 2: Image 2 → Image 3</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a2/selected_correspond_img/selected_correspond_img1_set5_to_img2_set5.png" alt="Set 3: Image 1 to Image 2 correspondences" />
                    <p className="image-caption">Set 3: Image 1 → Image 2</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a2/selected_correspond_img/selected_correspond_img2_set5_to_img3_set5.png" alt="Set 3: Image 2 to Image 3 correspondences" />
                    <p className="image-caption">Set 3: Image 2 → Image 3</p>
                  </div>
                </div>
              </div>

              <div className="results-box">
                <h5>Linear System Analysis:</h5>
                <p>
                  For each image pair with 8 correspondences: <strong>System dimensions:</strong> <InlineMath math={"A \\in \\mathbb{R}^{16 \\times 8}"} />, <InlineMath math={"\\mathbf{b} \\in \\mathbb{R}^{16}"} />. 
                  <strong>Solution method:</strong> Least squares via SVD decomposition. 
                  <strong>Numerical stability:</strong> SVD-based approach avoids ill-conditioned normal equations. 
                  <strong>Scale normalization:</strong> Fixed <InlineMath math={"h_9 = 1"} /> to eliminate projective ambiguity.
                </p>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part A.3: Rectifying Images</h3>
            <div className="section-content">
              <p>
                For this part, I worked with two wrap images (wrap_img1.png and wrap_img2.png) to demonstrate 
                image rectification using homography transformations. The goal was to correct perspective distortion 
                by mapping rectangular objects in the images to proper rectangular coordinates.
              </p>
              
              <p>
                <strong>Rectification Process:</strong>
              </p>
              <p>
                I used the <code>rectify_image.py</code> script to rectify the wrap images. First, I selected four 
                corners of rectangular objects in each image using the corner selector tool, which created JSON 
                files containing the clicked points. Then I applied rectification with different output modes to 
                see how the homography transformation affects the final result.
              </p>

              <p>
                The rectification process involves computing a homography matrix H that maps the four clicked 
                corners to a target rectangle. For each correspondence <InlineMath math={"\\mathbf{p} = [x, y, 1]^T \\leftrightarrow \\mathbf{p}' = [x', y', 1]^T"} />, 
                the homography relationship is:
              </p>

              <BlockMath math={"\\begin{aligned} x' &= \\frac{h_1 x + h_2 y + h_3}{h_7 x + h_8 y + 1} \\\\ y' &= \\frac{h_4 x + h_5 y + h_6}{h_7 x + h_8 y + 1} \\end{aligned}"} />

              <p>
                Rearranging these equations gives us linear constraints in the 8 unknowns <InlineMath math={"h_1, \\ldots, h_8"} />:
              </p>

              <BlockMath math={"\\begin{aligned} -x\\,h_1 - y\\,h_2 - 1\\cdot h_3 + 0\\cdot h_4 + 0\\cdot h_5 + 0\\cdot h_6 + (x x')\\,h_7 + (y x')\\,h_8 &= -x' \\\\ 0\\cdot h_1 + 0\\cdot h_2 + 0\\cdot h_3 - x\\,h_4 - y\\,h_5 - 1\\cdot h_6 + (x y')\\,h_7 + (y y')\\,h_8 &= -y' \\end{aligned}"} />

              <div className="results-box">
                <h5>Rectification Results:</h5>
                <p>
                  Successfully rectified both wrap images with: <strong>Method:</strong> Bilinear interpolation for smooth results. 
                  <strong>Output mode:</strong> Same size as original images. 
                  <strong>Quality:</strong> High-resolution rectified outputs.
                </p>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Recovered Rectification Homographies</h4>
                <p>Using the corner selection and rectification process:</p>
                
                <BlockMath math={"H_{\\text{wrap\\_img1}} = \\begin{bmatrix} 141.025116 & 12.676435 & -49464.064343 \\\\ -1.848850 & 471.460578 & -291026.655214 \\\\ -0.001215 & 0.166842 & 1.000000 \\end{bmatrix}"} />
                
                <BlockMath math={"H_{\\text{wrap\\_img2}} = \\begin{bmatrix} 2.115209 & 0.197238 & -919.622950 \\\\ -0.072076 & 1.333411 & -739.150453 \\\\ 0.000572 & 0.000019 & 1.000000 \\end{bmatrix}"} />
              </div>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a1/original_img/wrap_img1.png" alt="Original wrap_img1" />
                    <p className="image-caption">Original wrap_img1</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a3/rectify/rectified_nn_wrap_img1.png" alt="Rectified wrap_img1 using nearest neighbor" />
                    <p className="image-caption">Rectified wrap_img1 (Nearest Neighbor)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a3/rectify/rectified_bilinear_wrap_img1.png" alt="Rectified wrap_img1 using bilinear interpolation" />
                    <p className="image-caption">Rectified wrap_img1 (Bilinear)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a1/original_img/wrap_img2.png" alt="Original wrap_img2" />
                    <p className="image-caption">Original wrap_img2</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a3/rectify/rectified_nn_wrap_img2.png" alt="Rectified wrap_img2 using nearest neighbor" />
                    <p className="image-caption">Rectified wrap_img2 (Nearest Neighbor)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a3/rectify/rectified_bilinear_wrap_img2.png" alt="Rectified wrap_img2 using bilinear interpolation" />
                    <p className="image-caption">Rectified wrap_img2 (Bilinear)</p>
                  </div>
                </div>
              </div>

              <p>
                The rectification process successfully corrected the perspective distortion in both wrap images. 
                The bilinear interpolation method produced smoother results compared to nearest neighbor, 
                though both methods effectively transformed the distorted rectangular objects into proper rectangles. 
                The homography matrices show the complex transformations needed to map the clicked corners 
                to the target rectangular coordinates.
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part A.4: Blend Images into a Mosaic</h3>
            <div className="section-content">
                <p>
                For the final step, I created panoramic mosaics by combining the aligned images using two different 
                blending approaches. I started with weighted averaging for Set 1, then moved to Laplacian pyramid 
                blending for Sets 1-3 to achieve better performance and reduce visible seams.
              </p>
              
              <p>
                <strong>Mosaic Creation Process:</strong>
              </p>
              <p>
                The mosaic creation involved several key steps. First, I computed homographies between adjacent 
                images using the correspondence points I had manually selected. Then I chose a reference image 
                (typically the middle image) and chained the homographies to align all images to this reference 
                coordinate system. The script automatically calculated the canvas size needed to fit all warped 
                images by finding the bounding box of all transformed image corners.
              </p>

              <p>
                <strong>Two Blending Approaches:</strong>
              </p>
              
              <div className="subsection">
                <h4 className="subsection-title">Weighted Averaging (Feathered Blending)</h4>
                <p>
                  For Set 1, I used the simpler weighted averaging approach. Each image gets a soft alpha mask 
                  that is 1 near the center and fades to 0 near the borders. After warping, images are combined 
                  as a weighted average:
                </p>
                <BlockMath math={"I_{blended}(x,y) = \\frac{\\sum_{i} \\alpha_i(x,y) \\cdot I_i(x,y)}{\\sum_{i} \\alpha_i(x,y)}"} />
                <p>
                  This method is simple and fast, providing good results for most scenes. However, it can 
                  sometimes leave subtle "ghosts" or blur in detailed overlap regions.
                </p>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Laplacian Pyramid Blending</h4>
                <p>
                  For better quality results, I switched to Laplacian pyramid blending for Sets 1-3. This 
                  multi-scale approach works by:
                </p>
                <p>
                  The process involves: Building Laplacian pyramids of each warped image (difference between Gaussian levels), 
                  building Gaussian pyramids of each warped alpha mask, blending at each level using weighted averaging with the level's Gaussian masks, 
                  and reconstructing the final mosaic by collapsing the blended Laplacian pyramid.
                </p>
                <p>
                  This method significantly reduces visible seams and soft ghosting of high-frequency details 
                  like edges and text in overlap regions.
                </p>
              </div>

              <div className="results-box">
                <h5>Blending Results Comparison:</h5>
                <p>
                  Successfully created mosaics using both methods: <strong>Weighted Averaging:</strong> Simple, fast, good default for most scenes. 
                  <strong>Laplacian Pyramid:</strong> Better edge continuity, reduced ghosting artifacts. 
                  <strong>Seam Quality:</strong> Laplacian method produced noticeably smoother transitions. 
                  <strong>Performance:</strong> 4-level pyramid provided excellent results with reasonable computation.
                </p>
              </div>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a4/mosaic/mosaic_set3.png" alt="Set 1 mosaic using weighted averaging" />
                    <p className="image-caption">Set 1 Mosaic (Weighted Averaging)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a4/mosaic/mosaic_set3_lap.png" alt="Set 1 mosaic using Laplacian pyramid" />
                    <p className="image-caption">Set 1 Mosaic (Laplacian Pyramid, Level 4)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a4/mosaic/mosaic_set3_inc.png" alt="Set 1 mosaic using incremental method" />
                    <p className="image-caption">Set 1 Mosaic (Incremental Method)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a4/mosaic/mosaic_set4_lap.png" alt="Set 2 mosaic using Laplacian pyramid" />
                    <p className="image-caption">Set 2 Mosaic (Laplacian Pyramid, Level 4)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/part_a4/mosaic/mosaic_set5_lap.png" alt="Set 3 mosaic using Laplacian pyramid" />
                    <p className="image-caption">Set 3 Mosaic (Laplacian Pyramid, Level 4)</p>
                  </div>
                </div>
              </div>

              <p>
                The Laplacian pyramid approach proved superior for creating seamless panoramas, especially 
                in scenes with detailed textures and varying lighting conditions. The multi-scale blending 
                effectively handled the complex overlap regions while preserving fine details and maintaining 
                natural-looking transitions between images.
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Project B: Automatic Image Stitching</h3>
            <div className="section-content">
              <p>
                For Project B, I implemented a complete automatic image stitching pipeline using Harris corner detection, 
                feature descriptors, matching, and RANSAC homography estimation. This approach eliminates the need 
                for manual correspondence selection by automatically detecting and matching features between images.
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part B.1: Harris Corner Detection (with ANMS)</h3>
            <div className="section-content">
              <p>
                I implemented Harris corner detection to automatically detect repeatable, well-distributed interest points. 
                The algorithm computes the second-moment matrix using image gradients and uses the harmonic mean of 
                eigenvalues as the corner strength measure.
              </p>
              
              <p>
                <strong>Harris Corner Detection:</strong>
              </p>
              <p>
                For each image, I computed gradients at derivative scale σ_d and built the smoothed second-moment matrix:
              </p>
              <BlockMath math={"H(x, y) = (\\nabla_{\\sigma_d} I)(\\nabla_{\\sigma_d} I)^T * g_{\\sigma_i}"} />
              
              <p>
                Corner strength uses the harmonic mean of eigenvalues:
              </p>
              <BlockMath math={"f_{HM}(x, y) = \\frac{\\det H}{\\operatorname{tr} H}"} />
              
              <p>
                I detected local maxima in 3×3 neighborhoods above a threshold and discarded a 20-pixel border to avoid edge artifacts.
              </p>

              <div className="subsection">
                <h4 className="subsection-title">Adaptive Non-Maximal Suppression (ANMS)</h4>
                <p>
                  To ensure well-distributed corner points, I implemented ANMS. For each candidate point (x_i) with score f_i, 
                  I defined the minimum radius to any stronger neighbor:
                </p>
                <BlockMath math={"r_i = \\min_j |x_i - x_j| \\text{ s.t. } f_j \\geq f_i / c_{robust}"} />
                
                <p>
                  I sorted by r_i in descending order and kept the top K points. I used c_robust=0.9 and preselected 
                  up to 5000 highest Harris responses to limit computational cost.
                </p>
              </div>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay_img1_set3.png" alt="Harris corners without ANMS - Set 1 Image 1" />
                    <p className="image-caption">Harris Corners (Set 1, Image 1)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1B/harris_overlay_anms_img1_set3.png" alt="Harris corners with ANMS - Set 1 Image 1" />
                    <p className="image-caption">Harris Corners with ANMS (Set 1, Image 1)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay300_img1_set3.png" alt="Harris corners 300 - Set 1 Image 1" />
                    <p className="image-caption">Harris Corners 300 (Set 1, Image 1)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay_img2_set3.png" alt="Harris corners without ANMS - Set 1 Image 2" />
                    <p className="image-caption">Harris Corners (Set 1, Image 2)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1B/harris_overlay_anms_img2_set3.png" alt="Harris corners with ANMS - Set 1 Image 2" />
                    <p className="image-caption">Harris Corners with ANMS (Set 1, Image 2)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay300_img2_set3.png" alt="Harris corners 300 - Set 1 Image 2" />
                    <p className="image-caption">Harris Corners 300 (Set 1, Image 2)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay_img3_set3.png" alt="Harris corners without ANMS - Set 1 Image 3" />
                    <p className="image-caption">Harris Corners (Set 1, Image 3)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1B/harris_overlay_anms_img3_set3.png" alt="Harris corners with ANMS - Set 1 Image 3" />
                    <p className="image-caption">Harris Corners with ANMS (Set 1, Image 3)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay300_img3_set3.png" alt="Harris corners 300 - Set 1 Image 3" />
                    <p className="image-caption">Harris Corners 300 (Set 1, Image 3)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay_img1_set4.png" alt="Harris corners without ANMS - Set 2 Image 1" />
                    <p className="image-caption">Harris Corners (Set 2, Image 1)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1B/harris_overlay_anms_img1_set4.png" alt="Harris corners with ANMS - Set 2 Image 1" />
                    <p className="image-caption">Harris Corners with ANMS (Set 2, Image 1)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay300_img1_set4.png" alt="Harris corners 300 - Set 2 Image 1" />
                    <p className="image-caption">Harris Corners 300 (Set 2, Image 1)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay_img2_set4.png" alt="Harris corners without ANMS - Set 2 Image 2" />
                    <p className="image-caption">Harris Corners (Set 2, Image 2)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1B/harris_overlay_anms_img2_set4.png" alt="Harris corners with ANMS - Set 2 Image 2" />
                    <p className="image-caption">Harris Corners with ANMS (Set 2, Image 2)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay300_img2_set4.png" alt="Harris corners 300 - Set 2 Image 2" />
                    <p className="image-caption">Harris Corners 300 (Set 2, Image 2)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay_img3_set4.png" alt="Harris corners without ANMS - Set 2 Image 3" />
                    <p className="image-caption">Harris Corners (Set 2, Image 3)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1B/harris_overlay_anms_img3_set4.png" alt="Harris corners with ANMS - Set 2 Image 3" />
                    <p className="image-caption">Harris Corners with ANMS (Set 2, Image 3)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay300_img3_set4.png" alt="Harris corners 300 - Set 2 Image 3" />
                    <p className="image-caption">Harris Corners 300 (Set 2, Image 3)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay_img1_set5.png" alt="Harris corners without ANMS - Set 3 Image 1" />
                    <p className="image-caption">Harris Corners (Set 3, Image 1)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1B/harris_overlay_anms_img1_set5.png" alt="Harris corners with ANMS - Set 3 Image 1" />
                    <p className="image-caption">Harris Corners with ANMS (Set 3, Image 1)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay300_img1_set5.png" alt="Harris corners 300 - Set 3 Image 1" />
                    <p className="image-caption">Harris Corners 300 (Set 3, Image 1)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay_img2_set5.png" alt="Harris corners without ANMS - Set 3 Image 2" />
                    <p className="image-caption">Harris Corners (Set 3, Image 2)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1B/harris_overlay_anms_img2_set5.png" alt="Harris corners with ANMS - Set 3 Image 2" />
                    <p className="image-caption">Harris Corners with ANMS (Set 3, Image 2)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay300_img2_set5.png" alt="Harris corners 300 - Set 3 Image 2" />
                    <p className="image-caption">Harris Corners 300 (Set 3, Image 2)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay_img3_set5.png" alt="Harris corners without ANMS - Set 3 Image 3" />
                    <p className="image-caption">Harris Corners (Set 3, Image 3)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1B/harris_overlay_anms_img3_set5.png" alt="Harris corners with ANMS - Set 3 Image 3" />
                    <p className="image-caption">Harris Corners with ANMS (Set 3, Image 3)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B1A/harris_overlay300_img3_set5.png" alt="Harris corners 300 - Set 3 Image 3" />
                    <p className="image-caption">Harris Corners 300 (Set 3, Image 3)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part B.2: Feature Descriptor Extraction</h3>
            <div className="section-content">
              <p>
                I implemented 8×8 feature descriptors extracted from 40×40 windows to create robust, normalized patches 
                for feature matching. The descriptors are designed to be axis-aligned, low-frequency, and normalized.
              </p>
              
              <p>
                <strong>Descriptor Extraction Process:</strong>
              </p>
              <p>
                The process involves: Extract a 40×40 window centered at each corner point, downsample with anti-aliasing to 8×8 (effective sample spacing ~5 pixels), 
                apply bias/gain normalization: subtract mean and divide by standard deviation, and L2-normalize the flattened 64-dimensional vector.
              </p>

              <p>
                This approach provides robustness to small localization errors while maintaining discriminative power 
                for feature matching. The 8×8 patch size offers a good balance between descriptiveness and computational efficiency.
              </p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img1_set3.png" alt="Descriptor grid for Set 1 Image 1" />
                    <p className="image-caption">Descriptor Grid (Set 1, Image 1)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img1_set3_locations.png" alt="Descriptor locations for Set 1 Image 1" />
                    <p className="image-caption">Descriptor Locations (Set 1, Image 1)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_top5_grid_img1_set3.png" alt="Top 5 descriptors for Set 1 Image 1" />
                    <p className="image-caption">Top 5 Descriptors (Set 1, Image 1)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img2_set3.png" alt="Descriptor grid for Set 1 Image 2" />
                    <p className="image-caption">Descriptor Grid (Set 1, Image 2)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img2_set3_locations.png" alt="Descriptor locations for Set 1 Image 2" />
                    <p className="image-caption">Descriptor Locations (Set 1, Image 2)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_top5_grid_img2_set3.png" alt="Top 5 descriptors for Set 1 Image 2" />
                    <p className="image-caption">Top 5 Descriptors (Set 1, Image 2)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img3_set3.png" alt="Descriptor grid for Set 1 Image 3" />
                    <p className="image-caption">Descriptor Grid (Set 1, Image 3)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img3_set3_locations.png" alt="Descriptor locations for Set 1 Image 3" />
                    <p className="image-caption">Descriptor Locations (Set 1, Image 3)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_top5_grid_img3_set3.png" alt="Top 5 descriptors for Set 1 Image 3" />
                    <p className="image-caption">Top 5 Descriptors (Set 1, Image 3)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img1_set4.png" alt="Descriptor grid for Set 2 Image 1" />
                    <p className="image-caption">Descriptor Grid (Set 2, Image 1)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img1_set4_locations.png" alt="Descriptor locations for Set 2 Image 1" />
                    <p className="image-caption">Descriptor Locations (Set 2, Image 1)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_top5_grid_img1_set4.png" alt="Top 5 descriptors for Set 2 Image 1" />
                    <p className="image-caption">Top 5 Descriptors (Set 2, Image 1)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img2_set4.png" alt="Descriptor grid for Set 2 Image 2" />
                    <p className="image-caption">Descriptor Grid (Set 2, Image 2)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img2_set4_locations.png" alt="Descriptor locations for Set 2 Image 2" />
                    <p className="image-caption">Descriptor Locations (Set 2, Image 2)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_top5_grid_img2_set4.png" alt="Top 5 descriptors for Set 2 Image 2" />
                    <p className="image-caption">Top 5 Descriptors (Set 2, Image 2)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img3_set4.png" alt="Descriptor grid for Set 2 Image 3" />
                    <p className="image-caption">Descriptor Grid (Set 2, Image 3)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img3_set4_locations.png" alt="Descriptor locations for Set 2 Image 3" />
                    <p className="image-caption">Descriptor Locations (Set 2, Image 3)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_top5_grid_img3_set4.png" alt="Top 5 descriptors for Set 2 Image 3" />
                    <p className="image-caption">Top 5 Descriptors (Set 2, Image 3)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img1_set5.png" alt="Descriptor grid for Set 3 Image 1" />
                    <p className="image-caption">Descriptor Grid (Set 3, Image 1)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img1_set5_locations.png" alt="Descriptor locations for Set 3 Image 1" />
                    <p className="image-caption">Descriptor Locations (Set 3, Image 1)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_top5_grid_img1_set5.png" alt="Top 5 descriptors for Set 3 Image 1" />
                    <p className="image-caption">Top 5 Descriptors (Set 3, Image 1)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img2_set5.png" alt="Descriptor grid for Set 3 Image 2" />
                    <p className="image-caption">Descriptor Grid (Set 3, Image 2)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img2_set5_locations.png" alt="Descriptor locations for Set 3 Image 2" />
                    <p className="image-caption">Descriptor Locations (Set 3, Image 2)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_top5_grid_img2_set5.png" alt="Top 5 descriptors for Set 3 Image 2" />
                    <p className="image-caption">Top 5 Descriptors (Set 3, Image 2)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img3_set5.png" alt="Descriptor grid for Set 3 Image 3" />
                    <p className="image-caption">Descriptor Grid (Set 3, Image 3)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_grid_img3_set5_locations.png" alt="Descriptor locations for Set 3 Image 3" />
                    <p className="image-caption">Descriptor Locations (Set 3, Image 3)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B2/descriptors_top5_grid_img3_set5.png" alt="Top 5 descriptors for Set 3 Image 3" />
                    <p className="image-caption">Top 5 Descriptors (Set 3, Image 3)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part B.3: Feature Matching (Lowe Ratio Test)</h3>
            <div className="section-content">
              <p>
                I implemented feature matching using the Lowe ratio test to select likely correspondences between image pairs. 
                This method provides robust matching by comparing the distances to the first and second nearest neighbors.
              </p>
              
              <p>
                <strong>Matching Process:</strong>
              </p>
              <p>
                The matching process involves: Compute Euclidean distance between L2-normalized descriptors using dot-product identity, 
                for each descriptor, find 1-NN and 2-NN distances (d₁, d₂), apply Lowe ratio test: accept if d₁/(d₂ + ε) &lt; τ, 
                use threshold τ ≈ 0.8 for good balance between precision and recall, and optional mutual cross-check for visualization stability.
              </p>

              <p>
                The Lowe ratio test effectively filters out ambiguous matches by ensuring that the best match is 
                significantly better than the second-best match, reducing false correspondences.
              </p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B3/matches_set3_img1_to_img2.png" alt="Feature matches between Set 1 Image 1 and Image 2" />
                    <p className="image-caption">Feature Matches (Set 1: Image 1 → Image 2)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B3/matches_set3_img1_to_img2_top25.png" alt="Top 25 feature matches between Set 1 Image 1 and Image 2" />
                    <p className="image-caption">Top 25 Matches (Set 1: Image 1 → Image 2)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B3/matches_set3_img2_to_img3.png" alt="Feature matches between Set 1 Image 2 and Image 3" />
                    <p className="image-caption">Feature Matches (Set 1: Image 2 → Image 3)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B3/matches_set3_img2_to_img3_top25.png" alt="Top 25 feature matches between Set 1 Image 2 and Image 3" />
                    <p className="image-caption">Top 25 Matches (Set 1: Image 2 → Image 3)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B3/matches_set4_img1_to_img2.png" alt="Feature matches between Set 2 Image 1 and Image 2" />
                    <p className="image-caption">Feature Matches (Set 2: Image 1 → Image 2)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B3/matches_set4_img1_to_img2_top25.png" alt="Top 25 feature matches between Set 2 Image 1 and Image 2" />
                    <p className="image-caption">Top 25 Matches (Set 2: Image 1 → Image 2)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B3/matches_set4_img2_to_img3.png" alt="Feature matches between Set 2 Image 2 and Image 3" />
                    <p className="image-caption">Feature Matches (Set 2: Image 2 → Image 3)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B3/matches_set4_img2_to_img3_top25.png" alt="Top 25 feature matches between Set 2 Image 2 and Image 3" />
                    <p className="image-caption">Top 25 Matches (Set 2: Image 2 → Image 3)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B3/matches_set5_img1_to_img2.png" alt="Feature matches between Set 3 Image 1 and Image 2" />
                    <p className="image-caption">Feature Matches (Set 3: Image 1 → Image 2)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B3/matches_set5_img1_to_img2_top25.png" alt="Top 25 feature matches between Set 3 Image 1 and Image 2" />
                    <p className="image-caption">Top 25 Matches (Set 3: Image 1 → Image 2)</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B3/matches_set5_img2_to_img3.png" alt="Feature matches between Set 3 Image 2 and Image 3" />
                    <p className="image-caption">Feature Matches (Set 3: Image 2 → Image 3)</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B3/matches_set5_img2_to_img3_top25.png" alt="Top 25 feature matches between Set 3 Image 2 and Image 3" />
                    <p className="image-caption">Top 25 Matches (Set 3: Image 2 → Image 3)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part B.4: RANSAC Homography and Automatic Mosaics</h3>
            <div className="section-content">
              <p>
                I implemented RANSAC (Random Sample Consensus) for robust homography estimation and automatic mosaic creation. 
                This approach handles outliers in feature matching and produces reliable homography matrices for image stitching.
              </p>
              
              <p>
                <strong>RANSAC Implementation:</strong>
              </p>
              <p>
                The RANSAC implementation involves: <strong>Minimal Sample:</strong> Randomly select 4 correspondences. 
                <strong>Homography Estimation:</strong> Use DLT (Direct Linear Transform) with least squares. 
                <strong>Inlier Test:</strong> Forward reprojection error |H[x,y,1]ᵀ - [x',y']|₂ &lt; T (T ≈ 3 pixels). 
                <strong>Adaptive Iterations:</strong> Update iteration bound using current inlier ratio and 99% confidence. 
                <strong>Refinement:</strong> Refit H using all inliers for final homography.
              </p>

              <p>
                <strong>Automatic Mosaic Creation:</strong>
              </p>
              <p>
                After obtaining robust homographies, I created automatic mosaics using inverse warping into a common canvas 
                with feather blending via per-image alpha ramps. The pipeline automatically handles the complete stitching process.
              </p>

              <div className="results-box">
                <h5>RANSAC Parameters:</h5>
                <p>
                  <strong>Threshold:</strong> 3 pixels reprojection error. 
                  <strong>Max Iterations:</strong> 2000 with adaptive early stopping. 
                  <strong>Confidence:</strong> 99% for robust estimation. 
                  <strong>Blending:</strong> Feather alpha based on distance to image border. 
                  <strong>Sampling:</strong> Bilinear interpolation for smooth results.
                </p>
              </div>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B4/auto_mosaic_set3_img1_to_img2.png" alt="Automatic mosaic for Set 1 Image 1 to Image 2" />
                    <p className="image-caption">Set 1: Image 1 → Image 2</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B4/auto_mosaic_set3_img2_to_img3.png" alt="Automatic mosaic for Set 1 Image 2 to Image 3" />
                    <p className="image-caption">Set 1: Image 2 → Image 3</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B4/auto_mosaic_set4_img1_to_img2.png" alt="Automatic mosaic for Set 2 Image 1 to Image 2" />
                    <p className="image-caption">Set 2: Image 1 → Image 2</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B4/auto_mosaic_set4_img2_to_img3.png" alt="Automatic mosaic for Set 2 Image 2 to Image 3" />
                    <p className="image-caption">Set 2: Image 2 → Image 3</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B4/auto_mosaic_set5_img1_to_img2.png" alt="Automatic mosaic for Set 3 Image 1 to Image 2" />
                    <p className="image-caption">Set 3: Image 1 → Image 2</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj03/res_B4/auto_mosaic_set5_img2_to_img3.png" alt="Automatic mosaic for Set 3 Image 2 to Image 3" />
                    <p className="image-caption">Set 3: Image 2 → Image 3</p>
                  </div>
                </div>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Manual vs Automatic Comparison</h4>
                <p>
                  I compared the automatic mosaics with manually created ones to evaluate the quality of the automatic pipeline. 
                  The results show that the automatic approach produces comparable quality to manual correspondence selection.
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj03/res_B4/compare_set3_img1_to_img2_manual_vs_auto.png" alt="Manual vs Automatic comparison for Set 1" />
                      <p className="image-caption">Manual vs Automatic (Set 1)</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj03/res_B4/compare_set4_img1_to_img2_manual_vs_auto.png" alt="Manual vs Automatic comparison for Set 2" />
                      <p className="image-caption">Manual vs Automatic (Set 2)</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj03/res_B4/compare_set5_img1_to_img2_manual_vs_auto.png" alt="Manual vs Automatic comparison for Set 3" />
                      <p className="image-caption">Manual vs Automatic (Set 3)</p>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                The automatic image stitching pipeline successfully demonstrates the power of computer vision techniques 
                for creating seamless panoramas without manual intervention. The combination of Harris corner detection, 
                robust feature descriptors, Lowe ratio matching, and RANSAC homography estimation produces high-quality 
                results comparable to manual methods while being fully automated.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default CS180Proj03;

