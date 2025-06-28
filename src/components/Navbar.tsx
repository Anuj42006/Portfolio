import { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit as Circuit } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md'
      : 'bg-white/40 dark:bg-gray-900/40 backdrop-blur'
  }`;

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certificates', id: 'certificates' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto px-2 sm:px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 dark:text-cyan-400 tracking-tight"
          >
            <Circuit className="h-6 w-6 sm:h-7 sm:w-8 text-blue-500" />
            <span className="hidden xs:inline">Anuj</span>
          </a>

          {/* Desktop Nav (visible on large screens only) */}
          <nav className="hidden lg:flex items-center gap-2 md:gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="nav-link text-sm md:text-base lg:text-lg px-2 md:px-3 lg:px-4 py-1 font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Mobile & Tablet menu button (visible below lg) */}
          <button
            className="lg:hidden p-2 text-gray-600 dark:text-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile & Tablet Menu (visible below lg) */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 shadow-lg backdrop-blur-lg animate-fade-in z-50">
            <div className="py-3 flex flex-col gap-1 items-center">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-11/12 py-2 px-4 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg text-center text-base font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Animations */}
      <style>
        {`
        .animate-fade-in {
          animation: fadeInMenu 0.35s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeInMenu {
          from { opacity: 0; transform: translateY(-16px);}
          to { opacity: 1; transform: translateY(0);}
        }
        `}
      </style>
    </header>
  );
};

export default Navbar;