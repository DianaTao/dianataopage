import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';
import GalleryPage from './pages/Gallery';
import BlogPage from './pages/Blog';
import MindBridgeDetail from './pages/MindBridgeDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects/mindbridge" element={<MindBridgeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
