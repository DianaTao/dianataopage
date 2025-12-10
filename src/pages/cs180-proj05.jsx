import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import '../styles/CS180Projects.css';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const CS180Proj05 = () => {
  const navigate = useNavigate();

  const scrollToPartA = () => {
    const partAElement = document.getElementById('part-a');
    if (partAElement) {
      partAElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToPartB = () => {
    const partBElement = document.getElementById('part-b');
    if (partBElement) {
      partBElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="cs180-project-page">
      <div 
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <button 
          onClick={() => navigate('/cs180-projects')}
          style={{
            padding: '10px 20px',
            backgroundColor: 'var(--primary-color)',
            color: 'var(--bg-color)',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--text-color)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'var(--primary-color)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          ←CS180 Projects
        </button>
        <button 
          onClick={scrollToPartA}
          style={{
            padding: '10px 20px',
            backgroundColor: 'var(--primary-color)',
            color: 'var(--bg-color)',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--text-color)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'var(--primary-color)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Part A
        </button>
        <button 
          onClick={scrollToPartB}
          style={{
            padding: '10px 20px',
            backgroundColor: 'var(--primary-color)',
            color: 'var(--bg-color)',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'all 0.3s ease',
            fontFamily: 'Arial, sans-serif',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--text-color)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'var(--primary-color)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Part B
        </button>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="project-title">CS180 Computer Vision</h1>
          <h2 className="project-subtitle">Proj5: Diffusion Models</h2>
        </motion.div>

        <motion.div
          className="project-sections"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >

          <div className="section-item" id="part-a">
            <h3 className="section-title">Part A: The Power of Diffusion Models!</h3>
            <div className="section-content">
              
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 0: Setup</h3>
            <div className="section-content">
              <div className="subsection">
                <h4 className="subsection-title">Text Prompt Embeddings</h4>
                <p>
                  Generated custom prompt embeddings using the Hugging Face cluster, including prompts for various artistic and photographic styles:
                </p>
                <div className="text-list">
                  <p>"a watercolor painting of ancient Japanese temples in the mountains"</p>
                  <p>"a photo of a modern kitchen with soft natural light"</p>
                  <p>"a photorealistic image of a luxury sports car parked on a wet street"</p>
                  <p>"an illustration of a robot exploring an alien jungle"</p>
                  <p>"a pencil sketch of an old European cathedral"</p>
                  <p>"a photo of a glass of iced coffee on a wooden table"</p>
                  <p>"a fantasy painting of a dragon flying over a castle"</p>
                  <p>"a photo of a person hiking in a dense forest"</p>
                  <p>"a studio photograph of colorful fruit on a black background"</p>
                  <p>"an impressionist painting of a bustling city market"</p>
                  <p>"a photo of a cat sitting on a windowsill watching the rain"</p>
                  <p>"a high quality photo"</p>
                  <p>"a digital painting of a spacecraft above a glowing planet"</p>
                  <p>"a stylized 3D render of geometric shapes on a reflective floor"</p>
                </div>
                <p>
                  <strong>Parameters tested:</strong> num_inference_steps: 20, 200
                </p>
                <p>
                  <strong>Three main prompts used:</strong>
                </p>
                <div className="text-list">
                  <p>'a watercolor painting of ancient Japanese temples in the mountains'</p>
                  <p>'a studio photograph of colorful fruit on a black background'</p>
                  <p>'a digital painting of a spacecraft above a glowing planet'</p>
                </div>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Random Seed</h4>
                <p>
                  Used a consistent random seed throughout the project for reproducibility. My seed is <strong>100</strong>.
                </p>
              </div>

              <div className="subsection">
                <h4 className="subsection-title">Inference Steps Comparison</h4>
                <p>
                  Generated images using different numbers of inference steps to observe the impact on image quality. 
                  More inference steps generally produce higher quality images but require more computation time.
                </p>
                <div className="image-gallery">
                  <div className="image-row">
                    <div className="image-item">
                      <img src="/img/cs180/proj05/part_a/part0_num_inference_steps_20.png" alt="Inference steps 20" />
                      <p className="image-caption"><strong>num_inference_steps = 20</strong></p>
                    </div>
                    <div className="image-item">
                      <img src="/img/cs180/proj05/part_a/part0_num_inference_steps_200.png" alt="Inference steps 200" />
                      <p className="image-caption"><strong>num_inference_steps = 200</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1: Sampling Loops</h3>
            <div className="section-content">
              <p>
                This section explores the core mechanisms of diffusion models, from the forward process that adds noise to images, 
                to various denoising strategies, and finally to advanced techniques like classifier-free guidance and image editing.
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.1: Implementing the Forward Process</h3>
            <div className="section-content">
              <p>
                <strong>Objective:</strong> Implement the forward diffusion process that adds noise to a clean image.
              </p>
              <p>
                The forward process follows the equation:
              </p>
              <BlockMath math={"x_t = \\sqrt{\\bar\\alpha_t} x_0 + \\sqrt{1 - \\bar\\alpha_t} \\epsilon"} />
              <p>
                where <InlineMath math="\epsilon \sim N(0, 1)" />.
              </p>
              <div className="results-box">
                <h5>Implementation:</h5>
                <pre><code>{`def forward(im, t):
    alpha_bar = alphas_cumprod[t].view(1, 1, 1, 1)
    noise = torch.randn_like(im)
    noisy_im = torch.sqrt(alpha_bar) * im + torch.sqrt(1 - alpha_bar) * noise
    return noisy_im`}</code></pre>
              </div>
              <p>
                <strong>Results:</strong> Successfully generated progressively noisier versions of the Campanile test image at timesteps t = 250, 500, and 750.
              </p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.1.png" alt="Forward process results" />
                    <p className="image-caption">Forward diffusion process showing increasing noise levels</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.2: Classical Denoising</h3>
            <div className="section-content">
              <p>
                <strong>Objective:</strong> Attempt to denoise images using classical Gaussian blur filtering.
              </p>
              <p>
                <strong>Approach:</strong> Applied Gaussian blur with kernel size 5 and sigma 2.0 to the noisy images from Part 1.1.
              </p>
              <p>
                <strong>Observation:</strong> As expected, classical denoising methods struggled to recover meaningful image details, especially at higher noise levels (t=500, t=750). This demonstrates the limitations of traditional filtering approaches compared to learned diffusion models.
              </p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.2.png" alt="Classical denoising results" />
                    <p className="image-caption">Classical Gaussian blur denoising - limited effectiveness</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.3: One-Step Denoising</h3>
            <div className="section-content">
              <p>
                <strong>Objective:</strong> Use the pretrained DeepFloyd UNet to perform single-step denoising.
              </p>
              <p>
                <strong>Implementation:</strong> Used the UNet to estimate noise <InlineMath math="\epsilon" /> and recover <InlineMath math="x_0" /> using:
              </p>
              <BlockMath math={"x_0 = \\frac{x_t - \\sqrt{1-\\bar\\alpha_t}\\epsilon}{\\sqrt{\\bar\\alpha_t}}"} />
              <p>
                <strong>Results:</strong> Significantly better results than Gaussian blur. Quality degraded with higher noise levels, demonstrating the power of learned diffusion denoisers.
              </p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.3_t_250.png" alt="One-step denoising t=250" />
                    <p className="image-caption">One-step denoising at t=250</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.3_t_500.png" alt="One-step denoising t=500" />
                    <p className="image-caption">One-step denoising at t=500</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.3_t_750.png" alt="One-step denoising t=750" />
                    <p className="image-caption">One-step denoising at t=750</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.4: Iterative Denoising</h3>
            <div className="section-content">
              <p>
                <strong>Objective:</strong> Implement iterative denoising following the DDPM algorithm.
              </p>
              <p>
                <strong>Key Implementation Details:</strong>
              </p>
              <div className="text-list">
                <p>Created <code>strided_timesteps</code> from 990 to 0 with stride of 30.</p>
                <p>Implemented iterative denoising loop with proper noise scheduling.</p>
                <p>Applied variance addition at each step.</p>
              </div>
              <p>
                <strong>Denoising Formula:</strong>
              </p>
              <BlockMath math={"x_{t'} = \\frac{\\sqrt{\\bar\\alpha_{t'}}\\beta_t}{1 - \\bar\\alpha_t} x_0 + \\frac{\\sqrt{\\alpha_t}(1 - \\bar\\alpha_{t'})}{1 - \\bar\\alpha_t} x_t + v_\\sigma"} />
              <div className="results-box">
                <h5>Implementation Details:</h5>
                <pre><code>{`strided_timesteps = list(range(990, -1, -30))
stage_1.scheduler.set_timesteps(timesteps=strided_timesteps)

def add_variance(predicted_variance, t, image):
    """
    Args:
        predicted_variance: (1, 3, 64, 64) tensor
        t: scale tensor indicating timestep
        image: (1, 3, 64, 64) tensor
    Returns:
        Image with the correct amount of variance added
    """
    variance = stage_1.scheduler._get_variance(t, predicted_variance=predicted_variance)
    variance_noise = torch.randn_like(image)
    variance = torch.exp(0.5 * variance) * variance_noise
    return image + variance

def iterative_denoise(im_noisy, i_start, prompt_embeds, timesteps, display=True):
    image = im_noisy
    with torch.no_grad():
        for i in range(i_start, len(timesteps) - 1):
            t = timesteps[i]
            prev_t = timesteps[i + 1]
            alpha_cumprod = alphas_cumprod[t].view(1, 1, 1, 1).to(image.device, dtype=image.dtype)
            alpha_cumprod_prev = alphas_cumprod[prev_t].view(1, 1, 1, 1).to(image.device, dtype=image.dtype)
            alpha = alpha_cumprod / alpha_cumprod_prev
            beta = 1 - alpha
            prompt_embeds = prompt_embeds.to(image.device).half()

            model_output = stage_1.unet(
                image,
                t,
                encoder_hidden_states=prompt_embeds,
                return_dict=False
            )[0]

            noise_est, predicted_variance = torch.split(model_output, image.shape[1], dim=1)
            x0 = (image - torch.sqrt(1.0 - alpha_cumprod) * noise_est) / torch.sqrt(alpha_cumprod)
            x0 = x0.clamp(-1.0, 1.0)
            pred_prev_image = (
                torch.sqrt(alpha_cumprod_prev) * beta / (1 - alpha_cumprod) * x0 +
                torch.sqrt(alpha) * (1 - alpha_cumprod_prev) / (1 - alpha_cumprod) * image
            )
            pred_prev_image_cpu = add_variance(
                predicted_variance.float().cpu(),
                torch.tensor([t]),
                pred_prev_image.float().cpu()
            )
            pred_prev_image = pred_prev_image_cpu.to(image.device, dtype=image.dtype)
            image = pred_prev_image
        clean = image.cpu().detach().numpy()
    return clean

prompt_embeds = prompt_embeds_dict["a high quality photo"]
i_start = 10
t = strided_timesteps[i_start]
im_noisy = forward(test_im, t).half().to(device)
clean = iterative_denoise(
    im_noisy,
    i_start=i_start,
    prompt_embeds=prompt_embeds,
    timesteps=strided_timesteps
)

alpha_bar = alphas_cumprod[t].view(1, 1, 1, 1).to(im_noisy.device, dtype=im_noisy.dtype)
prompt_embeds = prompt_embeds.to(im_noisy.device).half()
model_output = stage_1.unet(
    im_noisy,
    t,
    encoder_hidden_states=prompt_embeds,
    return_dict=False
)[0]
noise_est, _ = torch.split(model_output, im_noisy.shape[1], dim=1)
clean_one_step = (
    (im_noisy - torch.sqrt(1 - alpha_bar) * noise_est) / torch.sqrt(alpha_bar)
).clamp(-1.0, 1.0).cpu().detach().numpy()

blur_filtered = TF.gaussian_blur(im_noisy.float().cpu(), kernel_size=(5, 5), sigma=2.0)
blur_filtered = blur_filtered.clamp(-1.0, 1.0).numpy()`}</code></pre>
              </div>
              <p>
                <strong>Results:</strong> Iterative denoising significantly outperformed both Gaussian blur and one-step denoising. Images showed gradual improvement through the denoising process, with the final result being much cleaner and more coherent.
              </p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.4_img1.png" alt="Iterative denoising result 1" />
                    <p className="image-caption">Iterative denoising result 1</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.4_img2.png" alt="Iterative denoising result 2" />
                    <p className="image-caption">Iterative denoising result 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.5: Diffusion Model Sampling</h3>
            <div className="section-content">
              <p>
                <strong>Objective:</strong> Generate images from scratch by denoising pure random noise.
              </p>
              <p>
                <strong>Method:</strong> Started with random Gaussian noise and applied iterative denoising from i_start = 0 using the prompt "a high quality photo".
              </p>
              <p>
                <strong>Results:</strong> Generated 5 unique images from pure noise. Image quality was reasonable but varied, demonstrating the stochastic nature of the diffusion process.
              </p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.5.png" alt="Diffusion model sampling" />
                    <p className="image-caption">Images generated from pure noise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.6: Classifier-Free Guidance (CFG)</h3>
            <div className="section-content">
              <p>
                <strong>Objective:</strong> Improve image quality using Classifier-Free Guidance.
              </p>
              <p>
                <strong>Implementation:</strong> Applied CFG with scale γ = 7 using the formula:
              </p>
              <BlockMath math={"\\epsilon = \\epsilon_u + \\gamma (\\epsilon_c - \\epsilon_u)"} />
              <p>
                where:
              </p>
              <div className="text-list">
                <p><InlineMath math="\epsilon_c" /> = conditional noise estimate (with prompt).</p>
                <p><InlineMath math="\epsilon_u" /> = unconditional noise estimate (empty prompt).</p>
              </div>
              <p>
                <strong>Key Difference:</strong> Used the actual empty string <code>""</code> as the null prompt for unconditional guidance, replacing the previous "a high quality photo" approach.
              </p>
              <div className="results-box">
                <h5>Implementing CFG Sampling:</h5>
                <pre><code>{`# The conditional prompt embedding
prompt_embeds = prompt_embeds_dict['a high quality photo']
# The unconditional prompt embedding
uncond_prompt_embeds = prompt_embeds_dict['']

def iterative_denoise_cfg(im_noisy, i_start, prompt_embeds, uncond_prompt_embeds, timesteps, scale=7, display=True):
    image = im_noisy
    with torch.no_grad():
        for i in range(i_start, len(timesteps) - 1):
            # Get timesteps
            t = timesteps[i]
            prev_t = timesteps[i + 1]

            # Get alpha_cumprod, alpha_cumprod_prev, alpha, beta
            alpha_cumprod = alphas_cumprod[t].view(1, 1, 1, 1).to(image.device, dtype=image.dtype)
            alpha_cumprod_prev = alphas_cumprod[prev_t].view(1, 1, 1, 1).to(image.device, dtype=image.dtype)
            alpha = alpha_cumprod / alpha_cumprod_prev
            beta = 1 - alpha
            prompt_embeds = prompt_embeds.to(image.device).half()
            uncond_prompt_embeds = uncond_prompt_embeds.to(image.device).half()

            # Get cond noise estimate
            model_output = stage_1.unet(
                image,
                t,
                encoder_hidden_states=prompt_embeds,
                return_dict=False
            )[0]

            # Get uncond noise estimate
            uncond_model_output = stage_1.unet(
                image,
                t,
                encoder_hidden_states=uncond_prompt_embeds,
                return_dict=False
            )[0]

            # Split estimate into noise and variance estimate
            noise_est, predicted_variance = torch.split(model_output, image.shape[1], dim=1)
            uncond_noise_est, _ = torch.split(uncond_model_output, image.shape[1], dim=1)

            # Compute the CFG noise estimate (Eq. 4)
            eps_cfg = uncond_noise_est + scale * (noise_est - uncond_noise_est)

            # Get pred_prev_image, the next less noisy image
            x0 = (image - torch.sqrt(1.0 - alpha_cumprod) * eps_cfg) / torch.sqrt(alpha_cumprod)
            x0 = x0.clamp(-1.0, 1.0)
            pred_prev_image = (
                torch.sqrt(alpha_cumprod_prev) * beta / (1 - alpha_cumprod) * x0 +
                torch.sqrt(alpha) * (1 - alpha_cumprod_prev) / (1 - alpha_cumprod) * image
            )
            pred_prev_image_cpu = add_variance(
                predicted_variance.float().cpu(),
                torch.tensor([t]),
                pred_prev_image.float().cpu()
            )
            pred_prev_image = pred_prev_image_cpu.to(image.device, dtype=image.dtype)
            image = pred_prev_image
        clean = image.cpu().detach().numpy()
    return clean

num_images = 5
samples = []
with torch.no_grad():
    for _ in range(num_images):
        im_noisy = torch.randn_like(test_im).half().to(device)
        clean = iterative_denoise_cfg(
            im_noisy,
            i_start=0,
            prompt_embeds=prompt_embeds,
            uncond_prompt_embeds=uncond_prompt_embeds,
            timesteps=strided_timesteps,
            scale=7,
            display=False,
        )
        img = clean[0].transpose(1, 2, 0)
        img = img / 2.0 + 0.5
        img = np.clip(img, 0, 1).astype(np.float32)
        samples.append(img)
`}</code></pre>
              </div>
              <p>
                <strong>Results:</strong> Dramatic improvement in image quality compared to non-CFG sampling. Images were more coherent, detailed, and aligned with the prompt. This demonstrates the power of CFG in trading diversity for quality.
              </p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.6.png" alt="Classifier-Free Guidance results" />
                    <p className="image-caption">CFG results showing improved image quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.7: Image-to-image Translation</h3>
            <div className="section-content">
              <p>
                <strong>Objective:</strong> Edit existing images by adding noise and denoising with CFG.
              </p>
              <p>
                <strong>Method (SDEdit):</strong>
              </p>
              <div className="text-list">
                <p>1. Add noise to original image at various levels (i_start = 1, 3, 5, 7, 10, 20).</p>
                <p>2. Denoise using CFG with prompt "a high quality photo".</p>
                <p>3. Lower i_start values produce images closer to the original.</p>
              </div>
              <p>
                <strong>Results:</strong>
              </p>
              <div className="text-list">
                <p><strong>Campanile edits:</strong> Showed gradual transformation from highly modified (i_start=1) to nearly original (i_start=20).</p>
                <p><strong>Custom test images:</strong> Applied the same procedure to a croissant image and a corgi dog photo from the web.</p>
              </div>
              <p>
                <strong>Observation:</strong> The technique successfully projects images onto the natural image manifold while preserving increasing amounts of the original structure as i_start increases.
              </p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7_img_campanile.png" alt="Campanile image-to-image" />
                    <p className="image-caption">Campanile image-to-image translation</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7_img_my1.png" alt="Custom image 1" />
                    <p className="image-caption">Custom test image 1</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7_img_my2.png" alt="Custom image 2" />
                    <p className="image-caption">Custom test image 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.7.1: Editing Hand-Drawn and Web Images</h3>
            <div className="section-content">
              <p>
                <strong>Objective:</strong> Project non-realistic images onto the natural image manifold.
              </p>
              <p>
                <strong>Test Images:</strong>
              </p>
              <div className="text-list">
                <p><strong>Web image:</strong> Bear illustration (edited at noise levels 1, 3, 5, 7, 10, 20).</p>
                <p><strong>Hand-drawn image 1:</strong> Simple sketch (edited at the same noise levels).</p>
                <p><strong>Hand-drawn image 2:</strong> Another sketch (edited at the same noise levels).</p>
              </div>
              <p>
                <strong>Results:</strong> The procedure worked particularly well for non-realistic inputs. Simple sketches and stylized images were successfully transformed into photorealistic outputs while maintaining the general composition and structure. Lower noise levels (i_start=1,3) produced more creative interpretations, while higher noise levels (i_start=10,20) stayed closer to the original drawing.
              </p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.1_web.png" alt="Web image original" />
                    <p className="image-caption">Web image - Original</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.1_web_result.png" alt="Web image result" />
                    <p className="image-caption">Web image - After SDEdit</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.1_draw1.png" alt="Hand-drawn image 1 original" />
                    <p className="image-caption">Hand-drawn image 1 - Original</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.1_draw1_result.png" alt="Hand-drawn image 1 result" />
                    <p className="image-caption">Hand-drawn image 1 - After SDEdit</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.1_draw2.png" alt="Hand-drawn image 2 original" />
                    <p className="image-caption">Hand-drawn image 2 - Original</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.1_draw2_result.png" alt="Hand-drawn image 2 result" />
                    <p className="image-caption">Hand-drawn image 2 - After SDEdit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.7.2: Inpainting</h3>
            <div className="section-content">
              <p>
                <strong>Objective:</strong> Implement image inpainting using the RePaint algorithm.
              </p>
              <p>
                <strong>Method:</strong> At each denoising step, force pixels outside the mask to match the original image:
              </p>
              <BlockMath math={"x_t \\leftarrow \\mathbf{m} x_t + (1 - \\mathbf{m}) \\text{forward}(x_{orig}, t)"} />
              <div className="results-box">
                <h5>Implementation:</h5>
                <pre><code>{`def inpaint(original_image, mask, prompt_embeds, ...):
    # At each step:
    noisy_orig_t = forward(original_image, t)
    image = mask * image + (1 - mask) * noisy_orig_t
    # Continue with CFG denoising...`}</code></pre>
              </div>
              <div className="results-box">
                <h5>CFG Inpainting Code:</h5>
                <pre><code>{`def inpaint(original_image, mask, prompt_embeds, uncond_prompt_embeds, timesteps, scale=7, display=True):
    image = torch.randn_like(original_image).to(device).half()
    mask = mask.to(device).half()
    with torch.no_grad():
        for i in range(len(timesteps) - 1):
            t = timesteps[i]
            prev_t = timesteps[i + 1]

            noisy_orig_t = forward(original_image, t).to(device).half()
            image = mask * image + (1 - mask) * noisy_orig_t

            alpha_cumprod = alphas_cumprod[t].view(1, 1, 1, 1).to(image.device, dtype=image.dtype)
            alpha_cumprod_prev = alphas_cumprod[prev_t].view(1, 1, 1, 1).to(image.device, dtype=image.dtype)
            alpha = alpha_cumprod / alpha_cumprod_prev
            beta = 1 - alpha
            cond_embeds = prompt_embeds.to(image.device).half()
            uncond_embeds = uncond_prompt_embeds.to(image.device).half()

            model_output = stage_1.unet(
                image,
                t,
                encoder_hidden_states=cond_embeds,
                return_dict=False
            )[0]
            uncond_output = stage_1.unet(
                image,
                t,
                encoder_hidden_states=uncond_embeds,
                return_dict=False
            )[0]

            noise_est, predicted_variance = torch.split(model_output, image.shape[1], dim=1)
            uncond_noise_est, _ = torch.split(uncond_output, image.shape[1], dim=1)

            eps_cfg = uncond_noise_est + scale * (noise_est - uncond_noise_est)
            x0 = (image - torch.sqrt(1.0 - alpha_cumprod) * eps_cfg) / torch.sqrt(alpha_cumprod)
            x0 = x0.clamp(-1.0, 1.0)
            pred_prev_image = (
                torch.sqrt(alpha_cumprod_prev) * beta / (1 - alpha_cumprod) * x0 +
                torch.sqrt(alpha) * (1 - alpha_cumprod_prev) / (1 - alpha_cumprod) * image
            )
            pred_prev_image_cpu = add_variance(
                predicted_variance.float().cpu(),
                torch.tensor([t]),
                pred_prev_image.float().cpu()
            )
            image = pred_prev_image_cpu.to(image.device, dtype=image.dtype)
    clean = image.cpu().detach().numpy()
    return clean

prompt_embeds = prompt_embeds_dict['a high quality photo']
uncond_prompt_embeds = prompt_embeds_dict['']
clean = inpaint(
    original_image=test_im.to(device),
    mask=mask,
    prompt_embeds=prompt_embeds,
    uncond_prompt_embeds=uncond_prompt_embeds,
    timesteps=strided_timesteps,
    scale=7,
    display=False,
)

orig_np = test_im[0].permute(1, 2, 0).cpu().numpy()
orig_np = np.clip(orig_np / 2.0 + 0.5, 0, 1)
inpaint_np = clean[0].transpose(1, 2, 0)
inpaint_np = np.clip(inpaint_np / 2.0 + 0.5, 0, 1).astype(np.float32)

plt.figure(figsize=(6, 3))
plt.subplot(1, 2, 1)
plt.imshow(orig_np)
plt.title("Original Campanile")
plt.axis("off")
plt.subplot(1, 2, 2)
plt.imshow(inpaint_np)
plt.title("Campanile Inpainted")
plt.axis("off")
plt.tight_layout()
plt.show()`}</code></pre>
              </div>
              <p>
                <strong>Results:</strong> Successfully completed three inpainting tasks:
              </p>
              <div className="text-list">
                <p><strong>Campanile:</strong> Inpainted the top portion of the tower.</p>
                <p><strong>Palm sunset:</strong> Inpainted a central square region.</p>
                <p><strong>City view:</strong> Inpainted the bottom half.</p>
              </div>
              <p>
                The inpainting algorithm successfully preserved the unmasked regions while generating plausible content in the masked areas, seamlessly blending with the original image.
              </p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.2_1.png" alt="Inpainting result 1" />
                    <p className="image-caption">Inpainting result 1</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.2_mask1.png" alt="Inpainting mask 1" />
                    <p className="image-caption">Mask 1</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.2_2.png" alt="Inpainting result 2" />
                    <p className="image-caption">Inpainting result 2</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.2_mask2.png" alt="Inpainting mask 2" />
                    <p className="image-caption">Mask 2</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.2_my1.png" alt="Custom inpainting 1" />
                    <p className="image-caption">Custom inpainting 1</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.2_my2.png" alt="Custom inpainting 2" />
                    <p className="image-caption">Custom inpainting 2</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.7.3: Text-Conditional Image-to-image Translation</h3>
            <div className="section-content">
              <p>
                <strong>Objective:</strong> Guide image editing with specific text prompts instead of generic "high quality photo".
              </p>
              <p>
                <strong>Prompts Used:</strong>
              </p>
              <div className="text-list">
                <p><strong>Prompt 1:</strong> "a fantasy painting of a dragon flying over a castle".</p>
                <p><strong>Prompt 2:</strong> "a photo of a glass of iced coffee on a wooden table".</p>
              </div>
              <p>
                <strong>Test Images:</strong>
              </p>
              <div className="text-list">
                <p>Campanile (with both prompts).</p>
                <p>City view (with both prompts).</p>
                <p>Palm sunset (with both prompts).</p>
              </div>
              <p>
                <strong>Results:</strong> Images gradually transformed to match the text prompt while retaining structural elements from the original. At lower noise levels (i_start=1,3), the prompt had stronger influence. At higher noise levels (i_start=10,20), the original image structure dominated. This demonstrates the balance between prompt guidance and image preservation controlled by the noise level.
              </p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.3_campanile_prompt1.png" alt="Campanile with prompt 1" />
                    <p className="image-caption">Campanile with prompt 1</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.3_campanile_prompt2.png" alt="Campanile with prompt 2" />
                    <p className="image-caption">Campanile with prompt 2</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.3_my1.png" alt="Custom text-conditional 1" />
                    <p className="image-caption">Custom image with text prompts</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.7.3_my2.png" alt="Custom text-conditional 2" />
                    <p className="image-caption">Custom image with text prompts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.8: Visual Anagrams</h3>
            <div className="section-content">
              <p>
                <strong>Objective:</strong> Create optical illusions that reveal different images when flipped upside down.
              </p>
              <p>
                <strong>Algorithm:</strong>
              </p>
              <BlockMath math={"\\epsilon_1 = \\text{CFG}(x_t, t, p_1)"} />
              <BlockMath math={"\\epsilon_2 = \\text{flip}(\\text{CFG}(\\text{flip}(x_t), t, p_2))"} />
              <BlockMath math={"\\epsilon = \\frac{\\epsilon_1 + \\epsilon_2}{2}"} />
              <p>
                <strong>Implementation Details:</strong>
              </p>
              <div className="text-list">
                <p>Used vertical flip (torch.flip with dims=[2]).</p>
                <p>Averaged noise estimates from both orientations.</p>
                <p>Applied CFG with scale=7.</p>
              </div>
              <div className="results-box">
                <h5>Flip Illusion Implementation:</h5>
                <pre><code>{`def make_flip_illusion(image, i_start, prompt_embeds, uncond_prompt_embeds, timesteps, scale=7, display=True):
    x = image.clone()
    p1_embeds = prompt_embeds["p1"].to(x.device).half()
    p2_embeds = prompt_embeds["p2"].to(x.device).half()
    uncond_embeds = uncond_prompt_embeds.to(x.device).half()

    with torch.no_grad():
        for i in range(i_start, len(timesteps) - 1):
            t = timesteps[i]
            prev_t = timesteps[i + 1]

            alpha_cumprod = alphas_cumprod[t].view(1, 1, 1, 1).to(x.device, dtype=x.dtype)
            alpha_cumprod_prev = alphas_cumprod[prev_t].view(1, 1, 1, 1).to(x.device, dtype=x.dtype)
            alpha = alpha_cumprod / alpha_cumprod_prev
            beta = 1 - alpha

            model_out_1 = stage_1.unet(
                x,
                t,
                encoder_hidden_states=p1_embeds,
                return_dict=False
            )[0]
            uncond_out_1 = stage_1.unet(
                x,
                t,
                encoder_hidden_states=uncond_embeds,
                return_dict=False
            )[0]
            noise_1, var_1 = torch.split(model_out_1, x.shape[1], dim=1)
            uncond_noise_1, _ = torch.split(uncond_out_1, x.shape[1], dim=1)
            eps_1 = uncond_noise_1 + scale * (noise_1 - uncond_noise_1)

            x_flipped = torch.flip(x, dims=[2])
            model_out_2 = stage_1.unet(
                x_flipped,
                t,
                encoder_hidden_states=p2_embeds,
                return_dict=False
            )[0]
            uncond_out_2 = stage_1.unet(
                x_flipped,
                t,
                encoder_hidden_states=uncond_embeds,
                return_dict=False
            )[0]
            noise_2, var_2 = torch.split(model_out_2, x_flipped.shape[1], dim=1)
            uncond_noise_2, _ = torch.split(uncond_out_2, x_flipped.shape[1], dim=1)
            eps_2_flipped = uncond_noise_2 + scale * (noise_2 - uncond_noise_2)
            eps_2 = torch.flip(eps_2_flipped, dims=[2])

            eps = 0.5 * (eps_1 + eps_2)
            x0 = (x - torch.sqrt(1.0 - alpha_cumprod) * eps) / torch.sqrt(alpha_cumprod)
            x0 = x0.clamp(-1.0, 1.0)
            pred_prev = (
                torch.sqrt(alpha_cumprod_prev) * beta / (1 - alpha_cumprod) * x0 +
                torch.sqrt(alpha) * (1 - alpha_cumprod_prev) / (1 - alpha_cumprod) * x
            )
            pred_prev_cpu = add_variance(
                var_1.float().cpu(),
                torch.tensor([t]),
                pred_prev.float().cpu()
            )
            x = pred_prev_cpu.to(x.device, dtype=x.dtype)

    return x.cpu().detach().numpy()

i_start = 10
t = strided_timesteps[i_start]
im_noisy = forward(test_im, t).half().to(device)
illusion = make_flip_illusion(
    im_noisy,
    i_start=i_start,
    prompt_embeds=prompt_embeds,
    uncond_prompt_embeds=uncond_prompt_embeds,
    timesteps=strided_timesteps,
    scale=7,
    display=False
)`}</code></pre>
              </div>
              <p>
                <strong>Created Illusions:</strong>
              </p>
              <div className="results-box">
                <h5>Prompt Pairings:</h5>
                <div className="text-list">
                  <p><strong>Illusion 1:</strong> Upright prompt was "a fantasy painting of a dragon flying over a castle" and the flipped view matched "a photo of a glass of iced coffee on a wooden table".</p>
                  <p><strong>Illusion 2:</strong> Upright prompt was "a photo of a person hiking in a dense forest" while the flipped interpretation became "a watercolor painting of ancient Japanese temples in the mountains".</p>
                  <p><strong>Illusion 3:</strong> Upright prompt was "a pencil sketch of an old European cathedral" and the flipped prompt was "an impressionist painting of a bustling city market".</p>
                </div>
              </div>
              <p>
                <strong>Results:</strong> Successfully created visual anagrams that reveal distinctly different scenes when flipped. The averaging of noise estimates allows the diffusion model to satisfy both prompt constraints simultaneously, resulting in creative optical illusions.
              </p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.8_1.png" alt="Visual anagram 1" />
                    <p className="image-caption">Visual anagram 1 - Upright and flipped views</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.8_2.png" alt="Visual anagram 2" />
                    <p className="image-caption">Visual anagram 2 - Upright and flipped views</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.8_3.png" alt="Visual anagram 3" />
                    <p className="image-caption">Visual anagram 3 - Additional view</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.9: Hybrid Images</h3>
            <div className="section-content">
              <p>
                <strong>Objective:</strong> Create hybrid images that appear different at various viewing distances, following the Factorized Diffusion paper.
              </p>
              <p>
                <strong>Algorithm:</strong>
              </p>
              <BlockMath math={"\\epsilon_1 = \\text{CFG}(x_t, t, p_1)"} />
              <BlockMath math={"\\epsilon_2 = \\text{CFG}(x_t, t, p_2)"} />
              <BlockMath math={"\\epsilon = f_{\\text{lowpass}}(\\epsilon_1) + f_{\\text{highpass}}(\\epsilon_2)"} />
              <p>
                <strong>Implementation:</strong>
              </p>
              <div className="text-list">
                <p>Used Gaussian blur with kernel size 33 and sigma 2.0.</p>
                <p>Extracted low frequencies from <InlineMath math="\epsilon_1" /> and high frequencies from <InlineMath math="\epsilon_2" />.</p>
                <p>Combined the filtered estimates for the final noise prediction.</p>
              </div>
              <div className="results-box">
                <h5>Hybrid Generation Code:</h5>
                <pre><code>{`def make_hybrids(image, i_start, prompt_embeds, uncond_prompt_embeds, timesteps, scale=7, display=True):
    prompt1_embeds = prompt_embeds['p1'].to(image.device).half()
    prompt2_embeds = prompt_embeds['p2'].to(image.device).half()
    uncond_embeds = uncond_prompt_embeds.to(image.device).half()
    x = image.clone()

    with torch.no_grad():
        for i in range(i_start, len(timesteps) - 1):
            t = timesteps[i]
            prev_t = timesteps[i + 1]

            alpha_cumprod = alphas_cumprod[t].view(1, 1, 1, 1).to(x.device, dtype=x.dtype)
            alpha_cumprod_prev = alphas_cumprod[prev_t].view(1, 1, 1, 1).to(x.device, dtype=x.dtype)
            alpha = alpha_cumprod / alpha_cumprod_prev
            beta = 1 - alpha

            model_out_a = stage_1.unet(
                x,
                t,
                encoder_hidden_states=prompt1_embeds,
                return_dict=False
            )[0]
            uncond_out_a = stage_1.unet(
                x,
                t,
                encoder_hidden_states=uncond_embeds,
                return_dict=False
            )[0]
            noise_1, predicted_variance = torch.split(model_out_a, x.shape[1], dim=1)
            uncond_noise_1, _ = torch.split(uncond_out_a, x.shape[1], dim=1)
            eps_1 = uncond_noise_1 + scale * (noise_1 - uncond_noise_1)

            model_out_b = stage_1.unet(
                x,
                t,
                encoder_hidden_states=prompt2_embeds,
                return_dict=False
            )[0]
            uncond_out_b = stage_1.unet(
                x,
                t,
                encoder_hidden_states=uncond_embeds,
                return_dict=False
            )[0]
            noise_2, _ = torch.split(model_out_b, x.shape[1], dim=1)
            uncond_noise_2, _ = torch.split(uncond_out_b, x.shape[1], dim=1)
            eps_2 = uncond_noise_2 + scale * (noise_2 - uncond_noise_2)

            lp_eps1 = TF.gaussian_blur(eps_1.float(), kernel_size=33, sigma=2.0)
            lp_eps2 = TF.gaussian_blur(eps_2.float(), kernel_size=33, sigma=2.0)
            hp_eps2 = eps_2.float() - lp_eps2
            eps = (lp_eps1 + hp_eps2).to(x.device, dtype=x.dtype)

            x0 = (x - torch.sqrt(1 - alpha_cumprod) * eps) / torch.sqrt(alpha_cumprod)
            x0 = x0.clamp(-1., 1.)
            pred_prev_image = (
                torch.sqrt(alpha_cumprod_prev) * beta / (1 - alpha_cumprod) * x0 +
                torch.sqrt(alpha) * (1 - alpha_cumprod_prev) / (1 - alpha_cumprod) * x
            )

            pred_prev_image_cpu = add_variance(
                predicted_variance.float().cpu(),
                torch.tensor([t]),
                pred_prev_image.float().cpu()
            )
            x = pred_prev_image_cpu.to(x.device, dtype=x.dtype)

    return x.cpu().detach().numpy()

uncond_embeds = prompt_embeds_dict[""]
hybrid_prompts = {
    "p1": prompt1_embeds,
    "p2": prompt2_embeds,
}
i_start = 10
t = strided_timesteps[i_start]
im_noisy = forward(test_im, t).half().to(device)
hybrid = make_hybrids(
    im_noisy,
    i_start=i_start,
    prompt_embeds=hybrid_prompts,
    uncond_prompt_embeds=uncond_embeds,
    timesteps=strided_timesteps,
    scale=7,
)
img = hybrid[0].transpose(1, 2, 0) / 2. + 0.5
media.show_image(img)`}</code></pre>
              </div>
              <p>
                <strong>Hybrid Images Created:</strong>
              </p>
              <div className="results-box">
                <h5>Hybrid Viewpoints:</h5>
                <div className="text-list">
                  <p><strong>Hybrid 1:</strong> Low-frequency content captured "a fantasy painting of a dragon flying over a castle" while the high-frequency details shifted to "a photo of a glass of iced coffee on a wooden table".</p>
                  <p><strong>Hybrid 2:</strong> Low frequencies encoded "a photo of a person hiking in a dense forest" and the high frequencies layered "a watercolor painting of ancient Japanese temples in the mountains" on top.</p>
                  <p><strong>Hybrid 3:</strong> Low-frequency structure rendered "a pencil sketch of an old European cathedral" and the high-frequency pass emphasized "an impressionist painting of a bustling city market".</p>
                </div>
              </div>
              <p>
                <strong>Results:</strong> Successfully created hybrid images that reveal different content at different viewing distances. The low-frequency components dominate when viewed from far away, while high-frequency details become visible up close.
              </p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.9_1.png" alt="Hybrid image 1" />
                    <p className="image-caption">Hybrid image 1 - Different views at different distances</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.9_2.png" alt="Hybrid image 2" />
                    <p className="image-caption">Hybrid image 2</p>
                  </div>
                </div>
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_a/part1.9_3.png" alt="Hybrid image 3" />
                    <p className="image-caption">Hybrid image 3</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item" id="part-b">
            <h3 className="section-title">Part B: Flow Matching from Scratch!</h3>
            <div className="section-content">
              <p>
                In this part, I trained my own flow matching model on MNIST digits. This was a really exciting hands-on experience with generative modeling! The goal was to build and train a UNet from scratch that could generate realistic handwritten digits.
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1: Training a Single-Step Denoising UNet</h3>
            <div className="section-content">
              <p>
                Given a noisy image <InlineMath math="z" />, I train a denoiser <InlineMath math="D_\theta" /> to map it back to a clean image <InlineMath math="x" />. I optimize this using an L2 loss:
              </p>
              <BlockMath math={"L = \\mathbb{E}_{z,x} \\|D_{\\theta}(z) - x\\|^2"} />
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.1: Implementing the UNet</h3>
            <div className="section-content">
              <p>
                The UNet architecture I implemented consists of an encoder-decoder structure with skip connections. This design is really clever because it allows the network to preserve fine details while still having a wide receptive field. I built it from several basic building blocks:
              </p>

              <p><strong>Simple Operations:</strong></p>
              <div className="text-list">
                <p><strong>Conv:</strong> A convolutional layer with BatchNorm and GELU activation that keeps the spatial dimensions the same (kernel=3, stride=1, padding=1).</p>
                <p><strong>DownConv:</strong> Downsampling convolution that cuts spatial dimensions in half (kernel=3, stride=2, padding=1).</p>
                <p><strong>UpConv:</strong> Upsampling transpose convolution that doubles spatial dimensions (kernel=4, stride=2, padding=1).</p>
                <p><strong>Flatten:</strong> Average pooling that squashes 7×7 feature maps down to 1×1 (kernel=7).</p>
                <p><strong>Unflatten:</strong> Transpose convolution that expands 1×1 back to 7×7 (kernel=7, stride=7).</p>
              </div>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part1.1_standard_unet_operation.png" alt="Standard UNet operations" />
                    <p className="image-caption">Standard UNet operations diagram</p>
                  </div>
                </div>
              </div>

              <p><strong>Composed Operations:</strong></p>
              <div className="text-list">
                <p><strong>ConvBlock:</strong> Two Conv layers stacked together for extra depth.</p>
                <p><strong>DownBlock:</strong> DownConv followed by ConvBlock for the downsampling path.</p>
                <p><strong>UpBlock:</strong> UpConv followed by ConvBlock for the upsampling path.</p>
              </div>

              <p>
                The unconditional UNet follows this architecture with hidden dimension D=128. The input (1×28×28) goes through ConvBlocks and DownBlocks, gets flattened at the bottleneck, then unflattened and upsampled back through UpBlocks. Skip connections concatenate features from the encoder to the decoder, which helps preserve spatial information.
              </p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part1.1_unconditional_unet.png" alt="Unconditional UNet architecture" />
                    <p className="image-caption">Unconditional UNet architecture diagram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.2: Using the UNet to Train a Denoiser</h3>
            <div className="section-content">
              <p>
                Before training, I wanted to visualize what the noising process actually looks like. I used the formula:
              </p>
              <BlockMath math={"z = x + \\sigma \\epsilon, \\quad \\epsilon \\sim N(0, I)"} />
              <p>
                where <InlineMath math="\sigma \in [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" /> and <InlineMath math="x \in [0,1]" /> (normalized MNIST digit).
              </p>
              <p>
                images get progressively noisier as <InlineMath math="\sigma" /> increases. At <InlineMath math="\sigma=0.0" />, the digit is perfectly clean. At <InlineMath math="\sigma=1.0" />, it's heavily corrupted by Gaussian noise and barely recognizable.
              </p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part1.2.png" alt="Noising process visualization" />
                    <p className="image-caption">Noising process with different σ values</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.2.1: Training</h3>
            <div className="section-content">
              <p>
                Now for the actual training! My objective was to train a denoiser <InlineMath math="D_\theta(z)" /> to recover clean images <InlineMath math="x" /> from noisy images <InlineMath math="z" /> with <InlineMath math="\sigma=0.5" />.
              </p>

              <p><strong>Training Configuration:</strong></p>
              <div className="text-list">
                <p><strong>Loss Function:</strong> MSE Loss <InlineMath math="L = \mathbb{E}_{z,x} \|D_{\theta}(z) - x\|^2" /></p>
                <p><strong>Dataset:</strong> MNIST training set (60,000 images)</p>
                <p><strong>Batch Size:</strong> 256</p>
                <p><strong>Epochs:</strong> 5</p>
                <p><strong>Optimizer:</strong> Adam with learning rate 1e-4</p>
                <p><strong>Model:</strong> UnconditionalUNet with D=128 hidden channels</p>
                <p><strong>Noise Level:</strong> <InlineMath math="\sigma = 0.5" /> (fixed)</p>
              </div>

              <p><strong>Training Procedure:</strong></p>
              <p>
                For each batch, I loaded clean images <InlineMath math="x" /> from the dataloader, generated noise <InlineMath math="\epsilon \sim N(0, I)" />, created noisy images <InlineMath math="z = x + 0.5 \cdot \epsilon" />, predicted denoised images <InlineMath math="\hat{x} = D_\theta(z)" />, and computed the loss to backpropagate.
              </p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part1.2.2_mse_loss.png" alt="Training loss curve" />
                    <p className="image-caption">Training loss decreased steadily from ~0.03 to ~0.015 over 5 epochs</p>
                  </div>
                </div>
              </div>

              <p><strong>Results:</strong></p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part1.2.1_epoch1.png" alt="Denoising after epoch 1" />
                    <p className="image-caption">After Epoch 1 - Denoising works but outputs are somewhat blurry</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part1.2.2_epoch5.png" alt="Denoising after epoch 5" />
                    <p className="image-caption">After Epoch 5 - Much better! Digits are sharp and recognizable</p>
                  </div>
                </div>
              </div>

              <p>
                The denoiser successfully learned to remove Gaussian noise from MNIST digits! The improvement from epoch 1 to epoch 5 was really impressive - the final results are clean reconstructions that closely match the original images.
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.2.2: Out-of-Distribution Testing</h3>
            <div className="section-content">
              <p>
                I wanted to see how well my denoiser (trained on <InlineMath math="\sigma=0.5" />) would handle different noise levels. So I evaluated it on the same test image with <InlineMath math="\sigma \in [0.0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0]" />.
              </p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part1.2.2.png" alt="Out-of-distribution testing" />
                    <p className="image-caption">Denoising performance across different noise levels</p>
                  </div>
                </div>
              </div>

              <p><strong>What I Observed:</strong></p>
              <div className="text-list">
                <p><strong>σ = 0.0 (no noise):</strong> The model just passes through the clean input unchanged, which makes sense.</p>
                <p><strong>σ = 0.2:</strong> Excellent denoising - nearly perfect reconstruction.</p>
                <p><strong>σ = 0.4:</strong> Very good denoising with only slight artifacts.</p>
                <p><strong>σ = 0.5:</strong> Best performance, as expected since this is what it was trained on.</p>
                <p><strong>σ = 0.6:</strong> Still good but you can see some quality degradation.</p>
                <p><strong>σ = 0.8:</strong> Noticeable degradation with some structure loss.</p>
                <p><strong>σ = 1.0:</strong> Pretty poor performance with significant artifacts and blurriness.</p>
              </div>

              <p>
                <strong>Takeaway:</strong> The denoiser generalizes reasonably well to nearby noise levels (<InlineMath math="\sigma \in [0.4, 0.6]" />) but really struggles when the noise is significantly different from what it saw during training. This really highlights the importance of matching test and training distributions!
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 1.2.3: Denoising Pure Noise</h3>
            <div className="section-content">
              <p>
                Here's where things get interesting. I tried to train a denoiser to map pure Gaussian noise to clean MNIST digits. Instead of noising clean images, I used pure random noise <InlineMath math="\epsilon \sim N(0, I)" /> as input and clean MNIST digits <InlineMath math="x" /> as targets.
              </p>

              <p><strong>Training Configuration:</strong> Same as 1.2.1 but the input is pure noise instead of <InlineMath math="x + \sigma\epsilon" />. I trained for 5 epochs with batch size 256 and Adam optimizer (lr=1e-4).</p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part1.2.3_training_loss.png" alt="Pure noise training loss" />
                    <p className="image-caption">Training loss started higher (~0.08) and converged more slowly</p>
                  </div>
                </div>
              </div>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part1.2.3_epoch1.png" alt="Pure noise epoch 1" />
                    <p className="image-caption">Epoch 1 - Vague digit-like structures but very blurry</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part1.2.3_epoch5.png" alt="Pure noise epoch 5" />
                    <p className="image-caption">Epoch 5 - Clearer but still showing averaging effects</p>
                  </div>
                </div>
              </div>

              <p><strong>Pattern Observations:</strong></p>
              <p>
                The generated outputs showed some really interesting patterns that made me think about what's actually happening:
              </p>

              <div className="text-list">
                <p><strong>Averaging Effect:</strong> The denoised images look like blurred "average" digits rather than crisp, specific ones. This makes sense because with MSE loss, the model learns to predict the mean of the training distribution to minimize squared error.</p>
                <p><strong>Dominant Digits:</strong> Some digit shapes (like '1', '0', and '8') show up more frequently in the outputs. This probably reflects either their higher frequency in the MNIST training set or their simpler geometric structure.</p>
                <p><strong>Lack of Diversity:</strong> Multiple pure noise inputs produce really similar-looking outputs. The model seems to have learned a single "prototype" or "centroid" for each digit class rather than capturing the full distribution.</p>
              </div>

              <p><strong>Why This Happens:</strong></p>
              <p>
                With MSE loss, the optimal prediction for random input is actually the <strong>mean</strong> (centroid) of the training data distribution. Mathematically:
              </p>
              <BlockMath math={"\\arg\\min_{\\hat{x}} \\mathbb{E}_{x \\sim p_{\\text{data}}} \\|\\hat{x} - x\\|^2 = \\mathbb{E}_{x \\sim p_{\\text{data}}}[x]"} />
              <p>
                This means the model learns to output an average MNIST digit - basically a superposition of all digits it has seen. That's why the outputs are blurry (averaging sharp edges from many examples), why multiple noise inputs produce similar outputs (collapsing to the same mean), and why we see "prototypical" digit shapes rather than diverse, crisp digits.
              </p>
            
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 2: Training a Flow Matching Model</h3>
            <div className="section-content">
              <p>
                Single-step denoising fails for generative tasks because it collapses to the data mean. Flow matching solves this by learning to iteratively denoise through a sequence of timesteps.
              </p>

              <p><strong>Theory: Flow Matching</strong></p>
              <p>
                Flow matching defines a trajectory from noise <InlineMath math="x_0" /> to data <InlineMath math="x_1" /> using linear interpolation:
              </p>
              <BlockMath math={"x_t = (1-t)x_0 + tx_1, \\quad t \\in [0,1]"} />
              <p>
                The <strong>flow</strong> (velocity field) describes how to move along this trajectory:
              </p>
              <BlockMath math={"v_t = \\frac{dx_t}{dt} = x_1 - x_0"} />
              <p>
                I train a UNet <InlineMath math="u_\theta(x_t, t)" /> to predict this flow:
              </p>
              <BlockMath math={"\\mathcal{L} = \\mathbb{E}_{x_0, x_1, t} \\|u_\\theta(x_t, t) - (x_1 - x_0)\\|^2"} />
              <p>
                <strong>Sampling:</strong> Start from pure noise <InlineMath math="x_0 \sim N(0,I)" /> and integrate:
              </p>
              <BlockMath math={"x_{t+\\Delta t} = x_t + \\Delta t \\cdot u_\\theta(x_t, t)"} />
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 2.1: Adding Time Conditioning to UNet</h3>
            <div className="section-content">
              <p>
                To make the UNet aware of which timestep it's at, I needed to condition it on <InlineMath math="t" />. I implemented this using fully-connected blocks (FCBlocks).
              </p>

              <p><strong>FCBlock (Fully-Connected Block):</strong></p>
              <p>
                Linear(F_in, F_out) → GELU → BatchNorm1d
              </p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.1_FCBlock_for_conditioning.png" alt="FCBlock for conditioning" />
                    <p className="image-caption">FCBlock architecture for time conditioning</p>
                  </div>
                </div>
              </div>

              <div className="results-box">
                <h5>Time Conditioning Implementation:</h5>
                <pre><code>{`fc1_t = FCBlock(1, 2D)  # For bottleneck conditioning
fc2_t = FCBlock(1, D)   # For first upsampling conditioning

# In forward pass:
t1 = fc1_t(t)  # (N, 2D)
t2 = fc2_t(t)  # (N, D)

# Apply multiplicative conditioning:
unflatten = unflatten * t1[:, :, None, None]  # After bottleneck
up1 = up1 * t2[:, :, None, None]              # After first upsampling`}</code></pre>
              </div>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.1_conditioned_unet.png" alt="Conditioned UNet architecture" />
                    <p className="image-caption">Time-conditioned UNet architecture</p>
                  </div>
                </div>
              </div>

              <p><strong>Key Design Choices:</strong></p>
              <div className="text-list">
                <p>Normalize <InlineMath math="t \in [0, 1]" /> before embedding</p>
                <p>Use multiplicative conditioning (element-wise multiplication) rather than additive</p>
                <p>Condition at two strategic locations: bottleneck (unflatten) and first upsampling (up1)</p>
              </div>
              <p>
                This lets the network modulate its features differently based on the current timestep in the flow, which is crucial for iterative denoising.
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 2.2: Training the Time-Conditioned UNet</h3>
            <div className="section-content">
              <p><strong>Training Configuration:</strong></p>
              <div className="text-list">
                <p><strong>Dataset:</strong> MNIST training set</p>
                <p><strong>Batch Size:</strong> 64</p>
                <p><strong>Epochs:</strong> 10</p>
                <p><strong>Hidden Dimension:</strong> D = 64</p>
                <p><strong>Number of Timesteps:</strong> 50</p>
                <p><strong>Optimizer:</strong> Adam with learning rate 1e-2</p>
                <p><strong>Learning Rate Scheduler:</strong> Exponential decay with <InlineMath math="\gamma = 0.1^{1/10}" /></p>
              </div>

              <p><strong>Training Procedure:</strong></p>
              <p>
                I sampled clean images <InlineMath math="x_1" /> and random timesteps <InlineMath math="t \in [0,1]" />, generated noise <InlineMath math="x_0 \sim N(0,I)" />, computed the interpolated state <InlineMath math="x_t = (1-t)x_0 + tx_1" />, and trained to predict the flow <InlineMath math="v = x_1 - x_0" />. After each epoch, I stepped the scheduler.
              </p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.2_algo.png" alt="Training algorithm" />
                    <p className="image-caption">Algorithm B.1: Training time-conditioned UNet</p>
                  </div>
                </div>
              </div>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.3_training_loss.png" alt="Time-conditioned training loss" />
                  </div>
                </div>
              </div>

              <p>
                The loss decreased steadily with the learning rate decay helping convergence. A final loss of ~0.10 indicates good flow prediction!
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 2.3: Sampling from the Time-Conditioned UNet</h3>
            <div className="section-content">
              <p>
                Time to see if this actually works! I used Euler integration to sample from the model, starting with pure noise and iteratively denoising through 50 timesteps.
              </p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.3_algo.png" alt="Sampling algorithm" />
                    <p className="image-caption">Algorithm B.2: Sampling from time-conditioned UNet</p>
                  </div>
                </div>
              </div>

              <p><strong>Sampling Results:</strong></p>
              <p>
                I generated 25 samples (5×5 grid) at epochs 1, 5, and 10:
              </p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.3_epoch1.png" alt="Sampling epoch 1" />
                    <p className="image-caption">Epoch 1</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.3_epoch5.png" alt="Sampling epoch 5" />
                    <p className="image-caption">Epoch 5</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.3_epoch10.png" alt="Sampling epoch 10" />
                    <p className="image-caption">Epoch 10</p>
                  </div>
                </div>
              </div>

              <p><strong>Observations:</strong></p>
              <p>
                The time-conditioned model successfully generates diverse MNIST digits from pure noise! Unlike the pure noise denoiser from Part 1, flow matching produces <strong>crisp, individual digits</strong> rather than blurry averages, shows great <strong>diversity</strong> in outputs (different digits from different noise seeds), and achieves <strong>reasonable quality</strong> even without class conditioning.
              </p>
              <p>
                However, the quality isn't perfect - some samples show artifacts or unclear shapes. This motivated me to add class conditioning in the next section!
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 2.4: Adding Class-Conditioning to UNet</h3>
            <div className="section-content">
              <p>
                To control which digit (0-9) the model generates, I added class conditioning with <strong>classifier-free guidance</strong> (CFG).
              </p>

              <div className="results-box">
                <h5>Class Conditioning Implementation:</h5>
                <pre><code>{`fc1_c = FCBlock(num_classes, 2D)  # For bottleneck
fc2_c = FCBlock(num_classes, D)   # For upsampling

# In forward pass with one-hot class vector c:
c1 = fc1_c(c)
c2 = fc2_c(c)

# Combined conditioning (additive for class, then scale with time):
unflatten = c1 * unflatten + t1  # c modulates, t shifts
up1 = c2 * up1 + t2`}</code></pre>
              </div>

              <p><strong>Conditional Dropout:</strong></p>
              <p>
                During training, I randomly drop class conditioning 10% of the time (<InlineMath math="p_{\text{uncond}} = 0.1" />). This enables classifier-free guidance at sampling time by computing both conditional and unconditional flows.
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 2.5: Training the Class-Conditioned UNet</h3>
            <div className="section-content">
              <p><strong>Training Configuration:</strong></p>
              <div className="text-list">
                <p><strong>Epochs:</strong> 10</p>
                <p><strong>Batch Size:</strong> 64</p>
                <p><strong>Hidden Dimension:</strong> D = 64</p>
                <p><strong>Number of Timesteps:</strong> 300 (increased for better quality)</p>
                <p><strong>Unconditional Probability:</strong> <InlineMath math="p_{\text{uncond}} = 0.1" /></p>
                <p><strong>Learning Rate:</strong> 1e-2 with exponential decay</p>
              </div>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.5_algo.png" alt="Class-conditioned training algorithm" />
                  </div>
                </div>
              </div>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.5_flow_matching_loss_with_scheduler.png" alt="Class-conditioned training loss" />

                  </div>
                </div>
              </div>

              <p>
                The model converged faster than the time-only model! Class conditioning provides a stronger learning signal.
              </p>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 2.6: Sampling from the Class-Conditioned UNet</h3>
            <div className="section-content">
              <p>
                I used classifier-free guidance with <InlineMath math="\gamma=5.0" /> to sample from the model.
              </p>

              <p><strong>CFG Formula:</strong></p>
              <BlockMath math={"u = u_{\text{uncond}} + \\gamma (u_{\text{cond}} - u_{\text{uncond}})"} />

              <p><strong>Training Loss Comparison:</strong></p>
              <p>
                Below are the training loss curves for the class-conditioned UNet trained with and without a learning rate scheduler:
              </p>
              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.6_flow_matching_loss_with_scheduler.png" alt="Training loss with scheduler" />
                    <p className="image-caption">Training Loss with Scheduler</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.6_flow_matching_loss_scheduler.png.png" alt="Training loss without scheduler" />
                    <p className="image-caption">Training Loss without Scheduler</p>
                  </div>
                </div>
              </div>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.6_algo.png" alt="Class-conditioned sampling algorithm" />
                  </div>
                </div>
              </div>

              <p><strong>Sampling Results:</strong></p>
              <p>
                I generated 4 instances of each digit (0-9) at epochs 1, 5, and 10:
              </p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.5_epoch1.png" alt="Class-conditioned epoch 1" />
                    <p className="image-caption">Epoch 1</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.5_epoch5.png" alt="Class-conditioned epoch 5" />
                    <p className="image-caption">Epoch 5</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.5_epoch10.png" alt="Class-conditioned epoch 10" />
                    <p className="image-caption">Epoch 10</p>
                  </div>
                </div>
              </div>

              <p><strong>CFG Benefits:</strong></p>
              <div className="text-list">
                <p><strong>Quality:</strong> <InlineMath math="\gamma=5.0" /> significantly improves sharpness and clarity</p>
                <p><strong>Control:</strong> Each column consistently generates the correct digit</p>
                <p><strong>Diversity:</strong> Multiple samples of the same class show natural variations</p>
                <p><strong>Fast Convergence:</strong> Class conditioning accelerates learning</p>
              </div>
            </div>
          </div>

          <div className="section-item">
            <h3 className="section-title">Part 2.6.2: Removing the Learning Rate Scheduler</h3>
            <div className="section-content">
              

              <p>
                I trained a new model from scratch <strong>without</strong> the scheduler to see if I could maintain performance through alternative strategies.
              </p>

              <p><strong>My Approach:</strong></p>
              <p>
                I used Adam with a <strong>constant</strong> learning rate = 3e-3 (no scheduler). This was a moderate fixed learning rate that balances fast initial learning (higher than the final scheduled LR of ~1e-3) with stable convergence (lower than the initial scheduled LR of 1e-2).
              </p>

              <p><strong>Results:</strong></p>

              <div className="image-gallery">
                <div className="image-row">
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.5_epoch1_no_scheduler.png" alt="No scheduler epoch 1" />
                    <p className="image-caption">Epoch 1 - Comparable quality to scheduled version</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.5_epoch5_no_scheduler.png" alt="No scheduler epoch 5" />
                    <p className="image-caption">Epoch 5 - Very similar results with clear digits</p>
                  </div>
                  <div className="image-item">
                    <img src="/img/cs180/proj05/part_b/part2.5_epoch10_no_scheduler.png" alt="No scheduler epoch 10" />
                    <p className="image-caption">Epoch 10 - Excellent quality matching scheduled training!</p>
                  </div>
                </div>
              </div>

              <p><strong>What I Did to Compensate:</strong></p>
              <div className="text-list">
                <p><strong>Carefully chosen fixed LR (3e-3):</strong> Not too high (would cause instability), not too low (would slow convergence) - I found a sweet spot through experimentation.</p>
                <p><strong>Extended training could help:</strong> If quality was insufficient, I could train for more epochs. Since I matched performance in 10 epochs, this wasn't needed.</p>
                <p><strong>Batch size remains 64:</strong> Larger batches could stabilize training without a scheduler, but the current batch size was already sufficient.</p>
              </div>

              <p>
                Learning rate schedules help but aren't strictly necessary if you choose an appropriate fixed learning rate, are willing to train slightly longer if needed, and accept slightly noisier training curves. The constant LR = 3e-3 achieved the same final quality as exponential decay, demonstrating that <strong>simplicity can work</strong> - sometimes the "annoying" learning rate scheduler is optional!
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default CS180Proj05;

