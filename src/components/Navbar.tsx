import { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit as Circuit } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md' : 'bg-transparent'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-2">
            <Circuit className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold">Anuj</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('education')} className="nav-link">Education</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('certificates')} className="nav-link">Certificates</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-4 py-2">
              <button onClick={() => scrollToSection('about')} className="nav-link py-2">About</button>
              <button onClick={() => scrollToSection('education')} className="nav-link py-2">Education</button>
              <button onClick={() => scrollToSection('experience')} className="nav-link py-2">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="nav-link py-2">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="nav-link py-2">Projects</button>
              <button onClick={() => scrollToSection('certificates')} className="nav-link py-2">Certificates</button>
              <button onClick={() => scrollToSection('contact')} className="nav-link py-2">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;