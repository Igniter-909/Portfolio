import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Router and Routes
import Navbar from './components/Navbar';
import Loading from './components/Loading'; // Create this simple loading component

// Lazy load all major components
const Hero = lazy(() => import('./pages/Hero'));
const About = lazy(() => import('./pages/About'));
const Skills = lazy(() => import('./pages/Skills'));
const Experience = lazy(() => import('./pages/Experience'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  return (
    <Router>
      <div className="snap-y snap-mandatory h-screen overflow-y-auto">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={
              <Suspense fallback={<Loading />}>
              <div className="snap-start h-screen">
                <Hero />
              </div>
              <div className="snap-start h-screen">
                <About />
              </div>
              <div className="snap-start h-screen">
                <Skills />
              </div>
              <div className="snap-start h-screen">
              <Projects />
              </div>
              <div className="snap-start h-screen">
              <Experience />
              </div>
              <div className="snap-start h-screen">
                <Contact />
              </div>
            </Suspense>
            }/>
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;

