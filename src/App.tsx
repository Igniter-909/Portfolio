import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Router and Routes
import Navbar from './components/Navbar';
import Loading from './components/Loading'; // Create this simple loading component
import { HomeTransition } from './components/Hometransition';
import { PageLoader } from './components/PageLoader';
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
        
        <Suspense fallback={<Loading />}>
          
          <Routes>
            <Route path="/" element={
              <Suspense>
                
              <div className="snap-start h-screen">
                <HomeTransition >
                <Navbar />
                <Hero />
                </HomeTransition>
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
            <Route path="/about" element={
              <Suspense fallback={<PageLoader pageName="About" color="#8740ea" />}>
                <Navbar />
                <About />
              </Suspense>
            } />
            <Route path="/skills" element={
              <Suspense fallback={<PageLoader pageName="Skills" color="#8740ea" />}>
                <Navbar />
                <Skills />
              </Suspense>
            } />
            <Route path="/projects" element={
              <Suspense fallback={<PageLoader pageName="Projects" color="#8740ea" />}>
                <Navbar />
                <Projects />
              </Suspense>
            } />
            <Route path="/experience" element={
              <Suspense fallback={<PageLoader pageName="Experience" color="#8740ea" />}>
                <Navbar />
                <Experience />
              </Suspense>
            } />
            <Route path="/contact" element={
              <Suspense fallback={<PageLoader pageName="Contact" color="#8740ea" />}>
                <Navbar />
                <Contact />
              </Suspense>
            } />
            <Route path="*" element={
              <HomeTransition>
                <Navigate to="/" />
              </HomeTransition>
            } />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;

