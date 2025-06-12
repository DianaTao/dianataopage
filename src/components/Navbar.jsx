import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home', type: 'section' },
    { id: 'about', label: 'About', icon: 'fas fa-user', type: 'section' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-code', type: 'page' },
    { id: 'gallery', label: 'Gallery', icon: 'fas fa-images', type: 'page' },
    { id: 'blog', label: 'Blog', icon: 'fas fa-blog', type: 'page' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope', type: 'section' }
  ];

  const handleNavClick = (item) => {
    setIsOpen(false);
    
    if (item.type === 'page') {
      // For pages (Projects, Gallery, Blog), navigate directly
      navigate(`/${item.id}`);
    } else {
      // For sections (Home, About, Contact), handle scrolling
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          scrollToSection(item.id);
        }, 100);
      } else {
        scrollToSection(item.id);
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="menu-wrap">
      <button 
        className={`menu-button ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <motion.nav 
        className={`menu ${isOpen ? 'active' : ''}`}
        initial={{ x: 300 }}
        animate={{ x: isOpen ? 0 : 300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <ul className="icon-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
              >
                <i className={item.icon}></i>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
};

export default Navbar; 