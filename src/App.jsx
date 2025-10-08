import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';
import GalleryPage from './pages/Gallery';
import BlogPage from './pages/Blog';
import MindBridgeDetail from './pages/MindBridgeDetail';
import CS180Proj00 from './pages/cs180-proj00';
import CS180Proj01 from './pages/cs180-proj01';
import CS180Proj02 from './pages/cs180-proj02';
import CS180Proj03 from './pages/cs180-proj03';
import CS180ProjectsPage from './pages/CS180Projects';
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
          <Route path="/cs180-projects" element={<CS180ProjectsPage />} />
          <Route path="/cs180-proj00" element={<CS180Proj00 />} />
          <Route path="/cs180-proj01" element={<CS180Proj01 />} />
          <Route path="/cs180-proj02" element={<CS180Proj02 />} />
          <Route path="/cs180-proj03" element={<CS180Proj03 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
