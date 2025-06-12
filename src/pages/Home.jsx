import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Home; 