import { motion } from 'framer-motion';
import '../styles/CS180Projects.css';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const CS180Proj01 = () => {
  return (
    <div className="cs180-project-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="project-title">CS180 Computer Vision</h1>
          <h2 className="project-subtitle">Proj1: Images of the Russian Empire</h2>
        </motion.div>

        <motion.div
          className="project-sections"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="section-item">
            <h3 className="section-title">Overview</h3>
            <div className="section-content">
              <p>
                This project implements the automatic colorization of Prokudin-Gorskii glass plate photographs. Each historical image consists of three vertically stacked grayscale channels (blue, green, red). The task is to align these channels properly and reconstruct a single RGB color image.
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Approach</h3>
            <div className="section-content">
              <div className="approach-items">
                <p>
                  All inputs (<code>.tif</code> and <code>.jpg</code>) are first converted to floating point using <code>img_as_float</code> so downstream operations are consistent in scale. Each glass plate is split into blue (B), green (G), and red (R) grayscale channels by thirds along the vertical axis. Before alignment, I emphasize structure and dampen illumination effects by applying the Sobel magnitude on each channel and cropping 10% off every border to avoid torn/noisy edges.
                </p>
                <BlockMath math={"S = \\sqrt{(I * G_x)^2 + (I * G_y)^2}"} />
                <p>
                  where <InlineMath math={"G_x"} /> and <InlineMath math={"G_y"} /> are Sobel kernels.
                </p>
                <p>
                  To align a moving channel <InlineMath math={"X \\in \\{G, R\\}"} /> to the reference <InlineMath math={"B"} />, I evaluate two scores on the cropped Sobel images and use the better at each candidate shift <InlineMath math={"(\\Delta x, \\Delta y)"} />.
                </p>
                <BlockMath math={"\\mathrm{NCC}(A,B) = \\sum_i \\frac{A_i - \\mu_A}{\\sigma_A + \\epsilon} \\cdot \\frac{B_i - \\mu_B}{\\sigma_B + \\epsilon}"} />
                <p>which is contrast-invariant; and</p>
                <BlockMath math={"\\mathrm{SSD}(A,B) = \\sum_i (A_i - B_i)^2"} />
                <p>we maximize <InlineMath math={"-\\mathrm{SSD}"} />. The best shift is</p>
                <BlockMath math={"(\\Delta x^*,\\Delta y^*) = \\arg\\max_{\\Delta x, \\Delta y} \\max\\{\\mathrm{NCC}, -\\mathrm{SSD}\\}"} />
                <p>
                  For small <code>.jpg</code> images I use a single-scale window search of ±15 pixels in both directions. For large <code>.tif</code> images I use a Gaussian pyramid.
                </p>
                <BlockMath math={"I_{\\ell+1} = \\mathrm{downsample}(I_\\ell, s=\\tfrac{1}{2})"} />
                <p>
                  Align at the coarsest level to obtain <InlineMath math={"(\\Delta x, \\Delta y)"} />, then upscale by 2 per level and refine within a local ±15 window.
                </p>
                <p>
                  After finding shifts <InlineMath math={"(\\Delta x_G, \\Delta y_G)"} /> and <InlineMath math={"(\\Delta x_R, \\Delta y_R)"} />, I roll channels so G and R align to B using <code>np.roll</code> and stack into RGB order:
                </p>
                <BlockMath math={"I_{\\mathrm{RGB}}(i,j) = [R'(i,j),\\; G'(i,j),\\; B(i,j)]"} />
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Small .jpg Images (Single-Scale Alignment)</h3>
            <div className="section-content">
              <p>These images aligned cleanly with sharp edges and minimal ghosting.</p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (-3, 2)</span>
                      <span className="badge badge-red">R (3, 2)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out_jpg/monastery_out.jpg" alt="Aligned monastery.jpg" />
                    <p className="image-caption">monastery.jpg (aligned)</p>
                  </div>
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (3, 3)</span>
                      <span className="badge badge-red">R (6, 3)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out_jpg/tobolsk_out.jpg" alt="Aligned tobolsk.jpg" />
                    <p className="image-caption">tobolsk.jpg (aligned)</p>
                  </div>
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (5, 2)</span>
                      <span className="badge badge-red">R (12, 3)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out_jpg/cathedral_out.jpg" alt="Aligned cathedral.jpg" />
                    <p className="image-caption">cathedral.jpg (aligned)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Large .tif Images (Multi-Scale Pyramid Alignment)</h3>
            <div className="section-content">
              <p>Most <code>.tif</code> results are very sharp. A few challenging images (like <code>self_portrait</code> and <code>harvesters</code>) showed slight misalignment due to fine textures and illumination differences.</p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (49, 24)</span>
                      <span className="badge badge-red">R (107, 40)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out/emir_out.jpg" alt="Aligned emir.tif result" />
                    <p className="image-caption">emir.tif → RGB result</p>
                  </div>
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (38, 22)</span>
                      <span className="badge badge-red">R (77, 36)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out/italil_out.jpg" alt="Aligned italil.tif result" />
                    <p className="image-caption">italil.tif → RGB result</p>
                  </div>
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (25, 4)</span>
                      <span className="badge badge-red">R (58, -4)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out/church_out.jpg" alt="Aligned church.tif result" />
                    <p className="image-caption">church.tif → RGB result</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (54, 12)</span>
                      <span className="badge badge-red">R (111, 9)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out/three_generations_out.jpg" alt="Aligned three_generations.tif result" />
                    <p className="image-caption">three_generations.tif → RGB result</p>
                  </div>
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (41, -17)</span>
                      <span className="badge badge-red">R (92, -29)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out/lugano_out.jpg" alt="Aligned lugano.tif result" />
                    <p className="image-caption">lugano.tif → RGB result</p>
                  </div>
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (80, 10)</span>
                      <span className="badge badge-red">R (177, 13)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out/melons_out.jpg" alt="Aligned melons.tif result" />
                    <p className="image-caption">melons.tif → RGB result</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (-3, -2)</span>
                      <span className="badge badge-red">R (76, -8)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out/lastochikino_out.jpg" alt="Aligned lastochikino.tif result" />
                    <p className="image-caption">lastochikino.tif → RGB result</p>
                  </div>
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (42, 17)</span>
                      <span className="badge badge-red">R (90, 23)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out/icon_out.jpg" alt="Aligned icon.tif result" />
                    <p className="image-caption">icon.tif → RGB result</p>
                  </div>
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (49, -6)</span>
                      <span className="badge badge-red">R (96, -24)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out/siren_out.jpg" alt="Aligned siren.tif result" />
                    <p className="image-caption">siren.tif → RGB result</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (78, 29)</span>
                      <span className="badge badge-red">R (176, 37)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out/self_portrait_out.jpg" alt="Aligned self_portrait.tif result" />
                    <p className="image-caption">self_portrait.tif → RGB result</p>
                  </div>
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (60, 17)</span>
                      <span className="badge badge-red">R (124, 14)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out/harvesters_out.jpg" alt="Aligned harvesters.tif result" />
                    <p className="image-caption">harvesters.tif → RGB result</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Chosen Image from Prokudin-Gorskii</h3>
            <div className="section-content">
              <p>Extra examples downloaded from the Prokudin-Gorskii collection.</p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (6, 1)</span>
                      <span className="badge badge-red">R (13, 3)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out_jpg/milan_cathedral_out.jpg" alt="Aligned milan_cathedral.jpg (Prokudin-Gorskii extra)" />
                    <p className="image-caption">Milan Cathedral (extra example from Prokudin-Gorskii)</p>
                  </div>
                  <div className="image-item">
                    <div className="shift-badges">
                      <span className="badge badge-green">G (8, 2)</span>
                      <span className="badge badge-red">R (15, 3)</span>
                    </div>
                    <img src="/img/cs180/proj01/aligned_out_jpg/Piony_out.jpg" alt="Aligned Piony.jpg (Prokudin-Gorskii extra)" />
                    <p className="image-caption">Piony (extra example from Prokudin-Gorskii)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Problems Encountered</h3>
            <div className="section-content">
              <p>
                <strong>Large .tif files</strong>: On the big scans, a flat ±15 window at the original resolution meant scoring tens of thousands of shift pairs over megapixels of data. In practice this felt like pushing a rock uphill—accurate, but painfully slow. The pyramid search solves this by aligning tiny versions first, then only refining around that guess at higher resolutions. Because the coarse level quickly locks onto the right neighborhood, the fine-level search is small and fast. That change alone brought the runtime down to under a minute per image while keeping alignment quality.
              </p>
              <p>
                <strong>Borders</strong>: Many plates have torn edges, scratches, or uneven exposure along the frame. If you let the matcher “see” those areas, it happily aligns to damage instead of content. Cropping 10% off every side removes most of that junk before we score candidates. Combined with using Sobel edges (which emphasize structure over brightness), the search focuses on stable features like building edges and tree trunks instead of ragged borders.
              </p>
              <p>
                <strong>Lighting variation</strong>: Channel intensities don’t always match—sometimes the red layer is brighter or the blue is hazier. Pure SSD punishes those differences, while NCC handles contrast better but can still get confused by soft gradients. Using the Sobel magnitude (edge maps) reduces the influence of illumination, and evaluating both NCC and SSD per candidate (then taking whichever is stronger) makes the score more forgiving when lighting shifts but still sensitive to geometric alignment.
              </p>
            </div>
          </div>

          
        </motion.div>
      </div>
    </div>
  );
};

export default CS180Proj01;



