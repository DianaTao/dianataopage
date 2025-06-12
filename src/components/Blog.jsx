import { motion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import '../styles/Blog.css';

const Blog = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const blogPosts = [
    {
      id: 1,
      image: '/img/blog1.jpg',
      title: 'Barcelona',
      description: 'Home to Gaudí\'s awe-inspiring architecture and a long history of vibrant street art, its colorful facades and intricate details make every street corner a photographer\'s dream. Beyond the buildings, local markets and tapas bars invite you to capture the warmth of Catalan cuisine—fresh seafood, aromatic spices, and rich Mediterranean flavors. From the bustling avenues of Las Ramblas to the peaceful alleys of the Gothic Quarter, Barcelona\'s soul is in the fusion of art, culture, and culinary delights, waiting to be explored through every lens.'
    },
    {
      id: 2,
      image: '/img/blog2.jpg',
      title: 'Hong Kong',
      description: 'Towering skyscrapers coexist with traditional temples, blending modern innovations with centuries-old customs. In the bustling street markets, you\'ll find everything from sizzling dim sum stalls to colorful produce stands, reflecting a rich culinary heritage that merges East and West. Meanwhile, Michelin-starred restaurants line neon-lit avenues, proving the city\'s reputation for world-class dining. Beyond the food, Hong Kong\'s music scene pulses with the rhythms of Canton pop, uniting locals and visitors alike in a celebration of vibrant sound. Whether you\'re capturing the city\'s iconic skyline or the hidden corners where cultural traditions thrive, Hong Kong offers a tapestry of experiences that celebrates both its past and its inclusive, forward-facing energy.'
    },
    {
      id: 3,
      image: '/img/blog3.png',
      title: 'San Francisco',
      description: 'From the bustling heart of Chinatown and the colorful murals of the Mission to the waterfront views of the Golden Gate, San Francisco\'s diverse neighborhoods pulse with creativity and a welcoming energy. For UC Berkeley students, the city is both an artistic playground and a living classroom, where social movements and forward-thinking ideas have shaped generations. Whether it\'s the fog rolling in over the bay or the hustle and bustle of lively street fairs, San Francisco offers endless perspectives that capture the evolving story of the Bay Area.'
    },
    {
      id: 4,
      image: '/img/blog4.png',
      title: 'Hawaii',
      description: 'Waikiki is the crown jewel of Honolulu, where vibrant urban energy meets the tranquil waters of the Pacific. The iconic Diamond Head crater presides over white-sand beaches, and gentle waves carry surfers and outrigger canoes alike. Bright city lights and high-rise hotels line the shoreline, adding an urban contrast to the lush backdrop of Oahu\'s mountain ranges.'
    },
    {
      id: 5,
      image: '/img/blog5.png',
      title: 'Zhuhai',
      description: 'Stroll along its pristine seaside promenades, where lush palm trees sway to gentle ocean breezes, and you\'ll see families, friends, and visitors alike soaking in the city\'s relaxed energy. Whether it\'s the modern skyline reflecting on tranquil water or the vibrant local markets buzzing with fresh produce and laughter, Zhuhai reveals a spirit of contentment around every corner.'
    },
    {
      id: 6,
      image: '/img/blog6.png',
      title: 'Los Angeles',
      description: 'Los Angeles was home to me for four unforgettable years of high school, shaping both my creative spirit and my view of the world. Beyond the famed Hollywood sign and glitzy red carpets, the city\'s cultural mosaic thrives in neighborhoods rich with flavor and history—Koreatown\'s sizzling BBQ spots, Olvera Street\'s festive aromas, and the bohemian cool of Venice Beach. Whether capturing sunlit murals in the Arts District or the hazy glow of a Pacific sunset, LA offers a relentless energy that\'s as diverse as its people. For me, it\'s a place where teenage dreams and a lifelong love.'
    }
  ];

  const slides = blogPosts.map(post => ({
    src: post.image,
    alt: post.title
  }));

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title">My little Travel blog</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="blog-post"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div 
                className="blog-image"
                onClick={() => {
                  setCurrentImageIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={currentImageIndex}
        carousel={{ finite: true }}
        controller={{ closeOnBackdropClick: true }}
      />
    </section>
  );
};

export default Blog; 