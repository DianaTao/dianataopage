import { motion } from 'framer-motion';
import '../styles/CS180Projects.css';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const CS180Proj02 = () => {
  return (
    <div className="cs180-project-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="project-title">CS180 Computer Vision</h1>
          <h2 className="project-subtitle">Proj2: Fun with Filters and Frequencies</h2>
        </motion.div>

        <motion.div
          className="project-sections"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >

          <div className="section-item">
            <h3 className="section-title">Part 1: Fun with Filters</h3>
            <div className="section-content">
              
              <div className="subsection">
                <h4 className="subsection-title">Part 1.1: Convolutions from Scratch!</h4>
                <p>
                  Implemented 2D convolution with zero-padding using three different approaches to compare performance and accuracy: Four nested loops (naive implementation for baseline comparison), Two nested loops (optimized with region multiply + sum operations), and Vectorized NumPy (using stride tricks + einsum for maximum efficiency).
                </p>
                
                <p>All methods were compared against <code>scipy.signal.convolve2d</code> using a 9×9 box filter:</p>
                
                <div className="results-box">
                  <h5>Runtime Results:</h5>
                  <p>Four loops: <strong>4.2019s</strong>, Two loops: <strong>0.7055s</strong>, Vectorized: <strong>0.0159s</strong>, SciPy: <strong>0.0243s</strong></p>
                </div>

                <div className="results-box">
                  <h5>Accuracy Verification:</h5>
                  <p>Max abs diff (4-loops vs SciPy): <strong>0.00022888184</strong>, Max abs diff (2-loops vs SciPy): <strong>9.1552734e-05</strong>, Max abs diff (vec vs SciPy): <strong>0.00010681152</strong></p>
                </div>

                <p>
                  Technical Implementation: The vectorized implementation uses NumPy's stride tricks to create overlapping windows efficiently. Zero-padding ensures consistent output dimensions, stride tricks avoid explicit loops over image regions, and einsum operations provide optimized matrix multiplication.
                </p>

                <p>
                  Key Insights: The vectorized NumPy version is orders of magnitude faster than loops, 
                  while SciPy provides similar performance with excellent accuracy. All methods use zero-padding at 
                  image boundaries, which softens edges near borders but ensures consistent output dimensions.
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/box_four.png" alt="Four loops convolution result" />
                      <p className="image-caption">Four Loops Convolution</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/box_two.png" alt="Two loops convolution result" />
                      <p className="image-caption">Two Loops Convolution</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/box_vec.png" alt="Vectorized convolution result" />
                      <p className="image-caption">Vectorized Convolution</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/box_scipy.png" alt="SciPy convolution result" />
                      <p className="image-caption">SciPy Convolution</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="subsection">
                <h4 className="section-title">Part 1.2: Finite Difference Operator</h4>
                <p>
                  Implemented finite-difference filters for edge detection:
                </p>
                <BlockMath math={"D_x = \\begin{bmatrix} -1 & 1 \\end{bmatrix}, \\quad D_y = D_x^T"} />
                
                <p>
                  The algorithm computes partial derivatives in x and y directions, calculates gradient magnitude, 
                  and creates a binarized edge map using a percentile-based threshold (default 90th percentile).
                </p>
                
                <div className="results-box">
                  <h5>Edge Detection Results:</h5>
                  <p>Edge threshold @ 90.0th pct = <strong>30.414</strong>, Edges detected: <strong>26,362/262,144 (10.06%)</strong></p>
                </div>

                <p>
                  Technical Implementation: The edge detection system uses a percentile-based thresholding approach. It computes gradient magnitude at each pixel, sorts gradient values to find percentile threshold, creates binary edge map using threshold, and allows easy adjustment of sensitivity vs. noise trade-off.
                </p>

                <p>
                  <strong>Threshold Strategy:</strong> Using a percentile-based threshold ensures that approximately 
                  10% of pixels are marked as edges, providing a good balance between noise suppression and 
                  capturing salient structures. Adjusting the percentile allows trading off recall vs. noise.
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/original.png" alt="Original image" />
                      <p className="image-caption">Original Image</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/fd_dx_scipy.png" alt="X-direction derivative" />
                      <p className="image-caption">X-direction Derivative</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/fd_dy_scipy.png" alt="Y-direction derivative" />
                      <p className="image-caption">Y-direction Derivative</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/fd_grad_mag_scipy.png" alt="Gradient magnitude" />
                      <p className="image-caption">Gradient Magnitude</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/fd_edges_binary.png" alt="Binary edge map" />
                      <p className="image-caption">Binary Edge Map</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="subsection">
                <h4 className="section-title">Part 1.3: Derivative of Gaussian (DoG) Filter</h4>
                <p>
                  Built Gaussian kernels using <code>cv2.getGaussianKernel</code> (σ=1.0, size=7) and implemented 
                  DoG filtering to reduce noise in derivative calculations.
                </p>
                
                <p>The process involves: Create Gaussian kernel G(σ) with size covering ~±3σ, Blur the image by convolving with G, Apply finite difference operators to the blurred image, Create DoG kernels by convolving G with D_x and D_y, and Apply DoG kernels in a single step for efficiency.</p>

                <div className="results-box">
                  <h5>DoG Verification Results:</h5>
                  <p>Max |dx_blur - dx_dog|: <strong>69.56906</strong>, Max |dy_blur - dy_dog|: <strong>60.0047</strong>, Max |grad_mag_blur - grad_mag_dog|: <strong>69.55367</strong></p>
                  <p><strong>Interior-crop verification:</strong> Max |dx_blur - dx_dog| (crop): <strong>1.1304512</strong>, Max |dy_blur - dy_dog| (crop): <strong>1.1302204</strong>, Max |grad_mag_blur - grad_mag_dog| (crop): <strong>1.5837097</strong></p>
                </div>

                <p>
                  Technical Implementation: The DoG filtering process involves creating Gaussian kernels using cv2.getGaussianKernel, building Gaussian kernel G(σ) with size covering ~±3σ, blurring the image by convolving with G, applying finite difference operators to the blurred image, creating DoG kernels by convolving G with D_x and D_y, and applying DoG kernels in a single step for efficiency.
                </p>

                <p>
                  <strong>Key Findings:</strong> DoG reduces noise compared to raw finite differences by smoothing first. 
                  Single-step DoG and blur→derivative agree closely away from boundaries; residual differences 
                  concentrate at image edges due to padding choices.
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/gauss_kernel.png" alt="Gaussian kernel" />
                      <p className="image-caption">Gaussian Kernel</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/dog_kernel_dx.png" alt="DoG kernel Dx" />
                      <p className="image-caption">DoG Kernel Dx</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/dog_kernel_dy.png" alt="DoG kernel Dy" />
                      <p className="image-caption">DoG Kernel Dy</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/fd_dx_dog_scipy.png" alt="DoG Dx result" />
                      <p className="image-caption">DoG Dx Result</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/fd_dy_dog_scipy.png" alt="DoG Dy result" />
                      <p className="image-caption">DoG Dy Result</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/fd_edges_dog_binary.png" alt="DoG edge detection" />
                      <p className="image-caption">DoG Edge Detection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 2: Fun with Frequencies!</h3>
            <div className="section-content">
              
              <div className="subsection">
                <h4 className="subsection-title">Part 2.1: Image "Sharpening"</h4>
                <p>
                  Implemented unsharp masking to boost high frequencies by subtracting Gaussian blur from the original image:
                </p>
                <BlockMath math={"I_{\\text{sharp}} = I + \\alpha \\cdot (I - I * G_\\sigma)"} />
                
                <p>where α is the sharpening amount and G_σ is a Gaussian kernel.</p>

                <div className="results-box">
                  <h5>Sharpening Results:</h5>
                  <ul>
                    <li>Unsharp two-step vs single-kernel max abs diff: <strong>0.000183</strong></li>
                    <li>MSE(ref, sharpened) = <strong>302.558</strong>; PSNR = <strong>23.323 dB</strong></li>
                  </ul>
                </div>

                <p>
                  <strong>Implementation Notes:</strong> As the sharpening amount increases, edges become crisper but 
                  halos/ringing can appear around strong contrasts. The single-kernel form is convenient and efficient 
                  for repeated application, matching the two-step pipeline closely with minor differences from 
                  boundaries and floating-point rounding.
                </p>

                <p>
                  Technical Implementation: The sharpening process uses unsharp masking to boost high frequencies by subtracting Gaussian blur from the original image. The single-kernel form is convenient and efficient for repeated application, matching the two-step pipeline closely with minor differences from boundaries and floating-point rounding.
                </p>

                <p>
                  For color images, applying per-channel sharpening preserves hues while clipping to [0,255] 
                  avoids global normalization shifts that would distort colors.
                </p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/taj_original.png" alt="Original Taj image" />
                      <p className="image-caption">Original Taj Image</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/taj_blur.png" alt="Blurred Taj image" />
                      <p className="image-caption">Blurred Taj Image</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/taj_sharpen_amount_0.5.png" alt="Sharpened Taj image amount 0.5" />
                      <p className="image-caption">Sharpened Taj (amount=0.5)</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/taj_sharpen_amount_1.0.png" alt="Sharpened Taj image amount 1.0" />
                      <p className="image-caption">Sharpened Taj (amount=1.0)</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/taj_sharpen_amount_1.5.png" alt="Sharpened Taj image amount 1.5" />
                      <p className="image-caption">Sharpened Taj (amount=1.5)</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/taj_sharpen_amount_2.0.png" alt="Sharpened Taj image amount 2.0" />
                      <p className="image-caption">Sharpened Taj (amount=2.0)</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/med_original.png" alt="Original Cat image" />
                      <p className="image-caption">Original Cat Image</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/med_sharpen_amount_1.0.png" alt="Sharpened Cat image" />
                      <p className="image-caption">Sharpened Cat (amount=1.0)</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/med_blur.png" alt="Cat image blurred" />
                      <p className="image-caption">Cat Image Blurred</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/med_high.png" alt="Cat image high frequency" />
                      <p className="image-caption">Cat Image High Frequency</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/med_sharpen_twostep.png" alt="Cat image sharpened two-step" />
                      <p className="image-caption">Cat Image Sharpened (Two-Step)</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/med_sharpen_single.png" alt="Cat image sharpened single kernel" />
                      <p className="image-caption">Cat Image Sharpened (Single Kernel)</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/med_sharpen_amount_0.5.png" alt="Cat image sharpened amount 0.5" />
                      <p className="image-caption">Cat Image Sharpened (Amount: 0.5)</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/med_sharpen_amount_1.5.png" alt="Cat image sharpened amount 1.5" />
                      <p className="image-caption">Cat Image Sharpened (Amount: 1.5)</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/1.1-2.1 outputs/med_sharpen_amount_2.0.png" alt="Cat image sharpened amount 2.0" />
                      <p className="image-caption">Cat Image Sharpened (Amount: 2.0)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Part 2.2: Hybrid Images</h4>
                <p>
                  Created hybrid images that exploit the frequency-dependent nature of human perception: High frequencies dominate perception up close, and at a distance, only low frequencies remain visible.
                </p>

                <p>The process involves: Low-pass filter one image (Gaussian blur), High-pass filter another image (original minus its Gaussian blur), and Add the filtered images together.</p>

                <div className="results-box">
                  <h5>Tunable Parameters:</h5>
                  <p><code>sigma_high</code>: standard deviation for high-pass filtering (image 1), <code>sigma_low</code>: standard deviation for low-pass filtering (image 2), <code>amount</code>: scaling factor for high frequencies when blending</p>
                  <p><strong>Typical values:</strong> sigma_high = 4–8, sigma_low = 4–8, amount = 1.0</p>
                </div>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/aligned_im1.png" alt="Original Derek image" />
                      <p className="image-caption">Original Derek Image</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/aligned_im2.png" alt="Original Nutmeg image" />
                      <p className="image-caption">Original Nutmeg Image</p>
                    </div>
                    
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/high_im1.png" alt="High frequency component" />
                      <p className="image-caption">High Frequency Component</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/low_im2.png" alt="Low frequency component" />
                      <p className="image-caption">Low Frequency Component</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/im1_fft.png" alt="Image 1 FFT" />
                      <p className="image-caption">Nutmeg FFT</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/im2_fft.png" alt="Image 2 FFT" />
                      <p className="image-caption">Derek FFT</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/high_fft.png" alt="High frequency FFT" />
                      <p className="image-caption">High Frequency FFT</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/low_fft.png" alt="Low frequency FFT" />
                      <p className="image-caption">Low Frequency FFT</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/hybrid_fft.png" alt="Hybrid FFT" />
                      <p className="image-caption">Hybrid FFT</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/pyramids.png" alt="Frequency pyramids" />
                      <p className="image-caption">Frequency Pyramids</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/hybrid_derek_nutmeg.png" alt="Hybrid images: Derek + Nutmeg" />
                      <p className="image-caption">Hybrid Images: Derek + Nutmeg</p>
                    </div>
                    
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/cat_original.png" alt="Original cat image" />
                      <p className="image-caption">Original Cat Image</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/dog_original.png" alt="Original dog image" />
                      <p className="image-caption">Original Dog Image</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/hybrid_cat_dog.png" alt="Hybrid images: Cat + Dog" />
                      <p className="image-caption">Hybrid Images: Cat + Dog</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/cat_original2.png" alt="Original cat image for tiger hybrid" />
                      <p className="image-caption">Original Cat Image (for Tiger Hybrid)</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/tiger_original.png" alt="Original tiger image" />
                      <p className="image-caption">Original Tiger Image</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.2 outputs/hybrid_cat_tiger.png" alt="Hybrid images: Cat + Tiger" />
                      <p className="image-caption">Hybrid Images: Cat + Tiger</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Part 2.3: Gaussian and Laplacian Stacks</h4>
                <p>
                  Implemented multiresolution image representations:
                </p>
                
                <p><strong>Gaussian Stack:</strong> Iterative Gaussian blur per level (no subsampling)</p>
                <BlockMath math={"G_i = G_{i-1} * G_\\sigma"} />
                
                <p><strong>Laplacian Stack:</strong> Band-pass representation per level</p>
                <BlockMath math={"L_i = G_i - G_{i+1}, \\quad L_{\\text{final}} = G_{\\text{last}}"} />

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/apple_stack/gaussian_level_0.png" alt="Apple Gaussian level 0" />
                      <p className="image-caption">Apple Gaussian Level 0</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/apple_stack/gaussian_level_1.png" alt="Apple Gaussian level 1" />
                      <p className="image-caption">Apple Gaussian Level 1</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/apple_stack/gaussian_level_2.png" alt="Apple Gaussian level 2" />
                      <p className="image-caption">Apple Gaussian Level 2</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/apple_stack/gaussian_level_3.png" alt="Apple Gaussian level 3" />
                      <p className="image-caption">Apple Gaussian Level 3</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/apple_stack/gaussian_level_4.png" alt="Apple Gaussian level 4" />
                      <p className="image-caption">Apple Gaussian Level 4</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/apple_stack/gaussian_level_5.png" alt="Apple Gaussian level 5" />
                      <p className="image-caption">Apple Gaussian Level 5</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/apple_stack/laplacian_level_0.png" alt="Apple Laplacian level 0" />
                      <p className="image-caption">Apple Laplacian Level 0</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/apple_stack/laplacian_level_1.png" alt="Apple Laplacian level 1" />
                      <p className="image-caption">Apple Laplacian Level 1</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/apple_stack/laplacian_level_2.png" alt="Apple Laplacian level 2" />
                      <p className="image-caption">Apple Laplacian Level 2</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/apple_stack/laplacian_level_3.png" alt="Apple Laplacian level 3" />
                      <p className="image-caption">Apple Laplacian Level 3</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/apple_stack/laplacian_level_4.png" alt="Apple Laplacian level 4" />
                      <p className="image-caption">Apple Laplacian Level 4</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/apple_stack/laplacian_level_5.png" alt="Apple Laplacian level 5" />
                      <p className="image-caption">Apple Laplacian Level 5</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/orange_stack/gaussian_level_0.png" alt="Orange Gaussian level 0" />
                      <p className="image-caption">Orange Gaussian Level 0</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/orange_stack/gaussian_level_1.png" alt="Orange Gaussian level 1" />
                      <p className="image-caption">Orange Gaussian Level 1</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/orange_stack/gaussian_level_2.png" alt="Orange Gaussian level 2" />
                      <p className="image-caption">Orange Gaussian Level 2</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/orange_stack/gaussian_level_3.png" alt="Orange Gaussian level 3" />
                      <p className="image-caption">Orange Gaussian Level 3</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/orange_stack/gaussian_level_4.png" alt="Orange Gaussian level 4" />
                      <p className="image-caption">Orange Gaussian Level 4</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/orange_stack/gaussian_level_5.png" alt="Orange Gaussian level 5" />
                      <p className="image-caption">Orange Gaussian Level 5</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/orange_stack/laplacian_level_0.png" alt="Orange Laplacian level 0" />
                      <p className="image-caption">Orange Laplacian Level 0</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/orange_stack/laplacian_level_1.png" alt="Orange Laplacian level 1" />
                      <p className="image-caption">Orange Laplacian Level 1</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/orange_stack/laplacian_level_2.png" alt="Orange Laplacian level 2" />
                      <p className="image-caption">Orange Laplacian Level 2</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/orange_stack/laplacian_level_3.png" alt="Orange Laplacian level 3" />
                      <p className="image-caption">Orange Laplacian Level 3</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/orange_stack/laplacian_level_4.png" alt="Orange Laplacian level 4" />
                      <p className="image-caption">Orange Laplacian Level 4</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/orange_stack/laplacian_level_5.png" alt="Orange Laplacian level 5" />
                      <p className="image-caption">Orange Laplacian Level 5</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Part 2.4: Multiresolution Blending (The "Oraple")</h4>
                <p>
                  Implemented seamless image blending using multiresolution techniques:
                </p>
                
                <p><strong>Process:</strong> Create Gaussian stack for mask (smooths transitions), Blend per level: M_i · L_A_i + (1-M_i) · L_B_i, and Sum over levels for final reconstruction.</p>

                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/apple_masked_level_0.png" alt="Apple masked level 0" />
                      <p className="image-caption">Apple Masked Level 0</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/apple_masked_level_1.png" alt="Apple masked level 1" />
                      <p className="image-caption">Apple Masked Level 1</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/apple_masked_level_2.png" alt="Apple masked level 2" />
                      <p className="image-caption">Apple Masked Level 2</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/apple_masked_level_3.png" alt="Apple masked level 3" />
                      <p className="image-caption">Apple Masked Level 3</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/apple_masked_level_4.png" alt="Apple masked level 4" />
                      <p className="image-caption">Apple Masked Level 4</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/apple_masked_level_5.png" alt="Apple masked level 5" />
                      <p className="image-caption">Apple Masked Level 5</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/apple_masked_level_6.png" alt="Apple masked level 6" />
                      <p className="image-caption">Apple Masked Level 6</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/apple_masked_level_7.png" alt="Apple masked level 7" />
                      <p className="image-caption">Apple Masked Level 7</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/apple_masked_level_8.png" alt="Apple masked level 8" />
                      <p className="image-caption">Apple Masked Level 8</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/apple_masked_level_9.png" alt="Apple masked level 9" />
                      <p className="image-caption">Apple Masked Level 9</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/orange_masked_level_0.png" alt="Orange masked level 0" />
                      <p className="image-caption">Orange Masked Level 0</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/orange_masked_level_1.png" alt="Orange masked level 1" />
                      <p className="image-caption">Orange Masked Level 1</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/orange_masked_level_2.png" alt="Orange masked level 2" />
                      <p className="image-caption">Orange Masked Level 2</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/orange_masked_level_3.png" alt="Orange masked level 3" />
                      <p className="image-caption">Orange Masked Level 3</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/orange_masked_level_4.png" alt="Orange masked level 4" />
                      <p className="image-caption">Orange Masked Level 4</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/orange_masked_level_5.png" alt="Orange masked level 5" />
                      <p className="image-caption">Orange Masked Level 5</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/orange_masked_level_6.png" alt="Orange masked level 6" />
                      <p className="image-caption">Orange Masked Level 6</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/orange_masked_level_7.png" alt="Orange masked level 7" />
                      <p className="image-caption">Orange Masked Level 7</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/orange_masked_level_8.png" alt="Orange masked level 8" />
                      <p className="image-caption">Orange Masked Level 8</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/masked_levels/orange_masked_level_9.png" alt="Orange masked level 9" />
                      <p className="image-caption">Orange Masked Level 9</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/mask_gaussian_level_0.png" alt="Mask Gaussian level 0" />
                      <p className="image-caption">Mask Gaussian Level 0</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/mask_gaussian_level_1.png" alt="Mask Gaussian level 1" />
                      <p className="image-caption">Mask Gaussian Level 1</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/mask_gaussian_level_2.png" alt="Mask Gaussian level 2" />
                      <p className="image-caption">Mask Gaussian Level 2</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/mask_gaussian_level_3.png" alt="Mask Gaussian level 3" />
                      <p className="image-caption">Mask Gaussian Level 3</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/mask_gaussian_level_4.png" alt="Mask Gaussian level 4" />
                      <p className="image-caption">Mask Gaussian Level 4</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/mask_gaussian_level_5.png" alt="Mask Gaussian level 5" />
                      <p className="image-caption">Mask Gaussian Level 5</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/mask_gaussian_level_6.png" alt="Mask Gaussian level 6" />
                      <p className="image-caption">Mask Gaussian Level 6</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/mask_gaussian_level_7.png" alt="Mask Gaussian level 7" />
                      <p className="image-caption">Mask Gaussian Level 7</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/mask_gaussian_level_8.png" alt="Mask Gaussian level 8" />
                      <p className="image-caption">Mask Gaussian Level 8</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/mask_gaussian_level_9.png" alt="Mask Gaussian level 9" />
                      <p className="image-caption">Mask Gaussian Level 9</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/oraple/blended.png" alt="Multiresolution blending: The Oraple" />
                      <p className="image-caption">Final Blended Result: The "Oraple"</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/mask.png" alt="Day and Night of HK mask" />
                      <p className="image-caption">Day and Night of HK Mask</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/mask_gaussian_level_0.png" alt="Day and Night of HK mask Gaussian level 0" />
                      <p className="image-caption">Day and Night of HK Mask Gaussian Level 0</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/mask_gaussian_level_1.png" alt="Day and Night of HK mask Gaussian level 1" />
                      <p className="image-caption">Day and Night of HK Mask Gaussian Level 1</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/mask_gaussian_level_2.png" alt="Day and Night of HK mask Gaussian level 2" />
                      <p className="image-caption">Day and Night of HK Mask Gaussian Level 2</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/mask_gaussian_level_3.png" alt="Day and Night of HK mask Gaussian level 3" />
                      <p className="image-caption">Day and Night of HK Mask Gaussian Level 3</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/mask_gaussian_level_4.png" alt="Day and Night of HK mask Gaussian level 4" />
                      <p className="image-caption">Day and Night of HK Mask Gaussian Level 4</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/mask_gaussian_level_5.png" alt="Day and Night of HK mask Gaussian level 5" />
                      <p className="image-caption">Day and Night of HK Mask Gaussian Level 5</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/mask_gaussian_level_6.png" alt="Day and Night of HK mask Gaussian level 6" />
                      <p className="image-caption">Day and Night of HK Mask Gaussian Level 6</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/mask_gaussian_level_7.png" alt="Day and Night of HK mask Gaussian level 7" />
                      <p className="image-caption">Day and Night of HK Mask Gaussian Level 7</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/mask_gaussian_level_8.png" alt="Day and Night of HK mask Gaussian level 8" />
                      <p className="image-caption">Day and Night of HK Mask Gaussian Level 8</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/mask_gaussian_level_9.png" alt="Day and Night of HK mask Gaussian level 9" />
                      <p className="image-caption">Day and Night of HK Mask Gaussian Level 9</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/blended_laplacian_level_0.png" alt="Day and Night of HK blended Laplacian level 0" />
                      <p className="image-caption">Day and Night of HK Blended Laplacian Level 0</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/blended_laplacian_level_1.png" alt="Day and Night of HK blended Laplacian level 1" />
                      <p className="image-caption">Day and Night of HK Blended Laplacian Level 1</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/blended_laplacian_level_2.png" alt="Day and Night of HK blended Laplacian level 2" />
                      <p className="image-caption">Day and Night of HK Blended Laplacian Level 2</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/blended_laplacian_level_3.png" alt="Day and Night of HK blended Laplacian level 3" />
                      <p className="image-caption">Day and Night of HK Blended Laplacian Level 3</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/blended_laplacian_level_4.png" alt="Day and Night of HK blended Laplacian level 4" />
                      <p className="image-caption">Day and Night of HK Blended Laplacian Level 4</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/blended_laplacian_level_5.png" alt="Day and Night of HK blended Laplacian level 5" />
                      <p className="image-caption">Day and Night of HK Blended Laplacian Level 5</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/blended_laplacian_level_6.png" alt="Day and Night of HK blended Laplacian level 6" />
                      <p className="image-caption">Day and Night of HK Blended Laplacian Level 6</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/blended_laplacian_level_7.png" alt="Day and Night of HK blended Laplacian level 7" />
                      <p className="image-caption">Day and Night of HK Blended Laplacian Level 7</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/blended_laplacian_level_8.png" alt="Day and Night of HK blended Laplacian level 8" />
                      <p className="image-caption">Day and Night of HK Blended Laplacian Level 8</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/blended_laplacian_level_9.png" alt="Day and Night of HK blended Laplacian level 9" />
                      <p className="image-caption">Day and Night of HK Blended Laplacian Level 9</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_lr/blended.png" alt="Day and Night of HK blending" />
                      <p className="image-caption">Day and Night of HK Blending</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/mask.png" alt="Eye in Palm mask" />
                      <p className="image-caption">Eye in Palm Mask</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/mask_gaussian_level_0.png" alt="Eye in Palm mask Gaussian level 0" />
                      <p className="image-caption">Eye-in-palm Gaussian Level 0</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/mask_gaussian_level_1.png" alt="Eye in Palm mask Gaussian level 1" />
                      <p className="image-caption">Eye in Palm Mask Gaussian Level 1</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/mask_gaussian_level_2.png" alt="Eye in Palm mask Gaussian level 2" />
                      <p className="image-caption">Eye in Palm Mask Gaussian Level 2</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/mask_gaussian_level_3.png" alt="Eye in Palm mask Gaussian level 3" />
                      <p className="image-caption">Eye in Palm Mask Gaussian Level 3</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/mask_gaussian_level_4.png" alt="Eye in Palm mask Gaussian level 4" />
                      <p className="image-caption">Eye in Palm Mask Gaussian Level 4</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/mask_gaussian_level_5.png" alt="Eye in Palm mask Gaussian level 5" />
                      <p className="image-caption">Eye in Palm Mask Gaussian Level 5</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/mask_gaussian_level_6.png" alt="Eye in Palm mask Gaussian level 6" />
                      <p className="image-caption">Eye in Palm Mask Gaussian Level 6</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/mask_gaussian_level_7.png" alt="Eye in Palm mask Gaussian level 7" />
                      <p className="image-caption">Eye in Palm Mask Gaussian Level 7</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/mask_gaussian_level_8.png" alt="Eye in Palm mask Gaussian level 8" />
                      <p className="image-caption">Eye in Palm Mask Gaussian Level 8</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/mask_gaussian_level_9.png" alt="Eye in Palm mask Gaussian level 9" />
                      <p className="image-caption">Eye in Palm Mask Gaussian Level 9</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/blended_laplacian_level_0.png" alt="Eye in Palm blended Laplacian level 0" />
                      <p className="image-caption">Eye in Palm Blended Laplacian Level 0</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/blended_laplacian_level_1.png" alt="Eye in Palm blended Laplacian level 1" />
                      <p className="image-caption">Eye in Palm Blended Laplacian Level 1</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/blended_laplacian_level_2.png" alt="Eye in Palm blended Laplacian level 2" />
                      <p className="image-caption">Eye in Palm Blended Laplacian Level 2</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/blended_laplacian_level_3.png" alt="Eye in Palm blended Laplacian level 3" />
                      <p className="image-caption">Eye in Palm Blended Laplacian Level 3</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/blended_laplacian_level_4.png" alt="Eye in Palm blended Laplacian level 4" />
                      <p className="image-caption">Eye in Palm Blended Laplacian Level 4</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/blended_laplacian_level_5.png" alt="Eye in Palm blended Laplacian level 5" />
                      <p className="image-caption">Eye in Palm Blended Laplacian Level 5</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/blended_laplacian_level_6.png" alt="Eye in Palm blended Laplacian level 6" />
                      <p className="image-caption">Eye in Palm Blended Laplacian Level 6</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/blended_laplacian_level_7.png" alt="Eye in Palm blended Laplacian level 7" />
                      <p className="image-caption">Eye in Palm Blended Laplacian Level 7</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/blended_laplacian_level_8.png" alt="Eye in Palm blended Laplacian level 8" />
                      <p className="image-caption">Eye in Palm Blended Laplacian Level 8</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/blended_laplacian_level_9.png" alt="Eye in Palm blended Laplacian level 9" />
                      <p className="image-caption">Eye in Palm Blended Laplacian Level 9</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/foreground_masked_level_0.png" alt="Eye in Palm foreground masked level 0" />
                      <p className="image-caption">Eye in Palm Foreground Masked Level 0</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/foreground_masked_level_1.png" alt="Eye in Palm foreground masked level 1" />
                      <p className="image-caption">Eye in Palm Foreground Masked Level 1</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/foreground_masked_level_2.png" alt="Eye in Palm foreground masked level 2" />
                      <p className="image-caption">Eye in Palm Foreground Masked Level 2</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/foreground_masked_level_3.png" alt="Eye in Palm foreground masked level 3" />
                      <p className="image-caption">Eye in Palm Foreground Masked Level 3</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/foreground_masked_level_4.png" alt="Eye in Palm foreground masked level 4" />
                      <p className="image-caption">Eye in Palm Foreground Masked Level 4</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/foreground_masked_level_5.png" alt="Eye in Palm foreground masked level 5" />
                      <p className="image-caption">Eye in Palm Foreground Masked Level 5</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/foreground_masked_level_6.png" alt="Eye in Palm foreground masked level 6" />
                      <p className="image-caption">Eye in Palm Foreground Masked Level 6</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/foreground_masked_level_7.png" alt="Eye in Palm foreground masked level 7" />
                      <p className="image-caption">Eye in Palm Foreground Masked Level 7</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/foreground_masked_level_8.png" alt="Eye in Palm foreground masked level 8" />
                      <p className="image-caption">Eye in Palm Foreground Masked Level 8</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/foreground_masked_level_9.png" alt="Eye in Palm foreground masked level 9" />
                      <p className="image-caption">Eye in Palm Foreground Masked Level 9</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/background_masked_level_0.png" alt="Eye in Palm background masked level 0" />
                      <p className="image-caption">Eye in Palm Background Masked Level 0</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/background_masked_level_1.png" alt="Eye in Palm background masked level 1" />
                      <p className="image-caption">Eye in Palm Background Masked Level 1</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/background_masked_level_2.png" alt="Eye in Palm background masked level 2" />
                      <p className="image-caption">Eye in Palm Background Masked Level 2</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/background_masked_level_3.png" alt="Eye in Palm background masked level 3" />
                      <p className="image-caption">Eye in Palm Background Masked Level 3</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/background_masked_level_4.png" alt="Eye in Palm background masked level 4" />
                      <p className="image-caption">Eye in Palm Background Masked Level 4</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/background_masked_level_5.png" alt="Eye in Palm background masked level 5" />
                      <p className="image-caption">Eye in Palm Background Masked Level 5</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/background_masked_level_6.png" alt="Eye in Palm background masked level 6" />
                      <p className="image-caption">Eye in Palm Background Masked Level 6</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/background_masked_level_7.png" alt="Eye in Palm background masked level 7" />
                      <p className="image-caption">Eye in Palm Background Masked Level 7</p>
                    </div>
                  </div>
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/background_masked_level_8.png" alt="Eye in Palm background masked level 8" />
                      <p className="image-caption">Eye in Palm Background Masked Level 8</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/masked_levels/background_masked_level_9.png" alt="Eye in Palm background masked level 9" />
                      <p className="image-caption">Eye in Palm Background Masked Level 9</p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj02/2.3-2.4%20outputs/blend_outputs/web_irregular/blended.png" alt="Eye in Palm blending" />
                      <p className="image-caption">Eye in Palm Blending</p>
                    </div>
                  </div>
                </div>

                <p>
                  The multiresolution blending process involves creating Gaussian stack for mask (smooths transitions), blending per level using the formula M_i · L_A_i + (1-M_i) · L_B_i, and summing over levels for final reconstruction. This technique creates seamless blends even with irregular masks and complex transitions.
                </p>

                <p>
                  This technique creates seamless blends even with irregular masks 
                  and complex transitions, as demonstrated by the "oraple" (orange + apple) and other custom blends.
                </p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default CS180Proj02;
