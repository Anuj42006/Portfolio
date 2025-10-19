import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loader from './components/Loader';
import ThemeToggle from './components/ThemeToggle';

// Lazy load components
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Experience = lazy(() => import('./components/Achievements & Recognition'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Certificates = lazy(() => import('./components/Certificates'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  useEffect(() => {
    // Simulate loading time (e.g., 1.2 seconds)
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navbar />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><Loader /></div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><Loader /></div>}>
        <Education />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><Loader /></div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><Loader /></div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><Loader /></div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><Loader /></div>}>
        <Certificates />
      </Suspense>
      <Suspense fallback={<div className="h-screen flex items-center justify-center"><Loader /></div>}>
        <Contact />
      </Suspense>
      <Suspense fallback={<div className="min-h-[100px] flex items-center justify-center"><Loader /></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;