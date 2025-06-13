import { motion } from 'framer-motion';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import '../styles/Gallery.css';

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      image: '/img/portfolio/gallery_01.png',
      title: 'Gingerbread Golden Gate Bridge',
      description: 'Gingerbread Golden Gate Bridge'
    },
    {
      id: 2,
      image: '/img/portfolio/gallery_02.png',
      title: 'Seals at Pier 39',
      description: 'Seals at Pier 39'
    },
    {
      id: 3,
      image: '/img/portfolio/gallery_03.png',
      title: 'Berkeley',
      description: 'UC Berkeley at top floor of Evans Hall'
    },
    {
      id: 4,
      image: '/img/portfolio/gallery_04.png',
      title: 'Golden Gate Bridge',
      description: 'Golden Gate Bridge'
    },
    {
      id: 5,
      image: '/img/portfolio/gallery_05.png',
      title: 'Seagull in Pier 39',
      description: 'Seagull in Pier 39'
    },
    {
      id: 6,
      image: '/img/portfolio/gallery_06.png',
      title: 'Egg Waffle and Matcha Ice Cream',
      description: 'Egg Waffle and Matcha Ice Cream'
    },
    {
      id: 7,
      image: '/img/portfolio/gallery_07.png',
      title: 'Beishan Coutyard',
      description: 'Beishan Coutyard in Zhuhai'
    },
    {
      id: 8,
      image: '/img/portfolio/gallery_08.png',
      title: 'Doraemon',
      description: 'DORAEMON & FRIENDS Exhibition at K11 musea Hong Kong'
    }
  ];

  const slides = galleryItems.map(item => ({
    src: item.image,
    alt: item.title
  }));

  return (
    <section className="gallery section-padding" id="portfolio">
      <div className="container">
        <motion.h1 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Recent <span>Gallery</span>
        </motion.h1>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="gallery-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div 
                className="gallery-image"
                onClick={() => {
                  setCurrentImageIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
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
      />
    </section>
  );
};

export default Gallery; 