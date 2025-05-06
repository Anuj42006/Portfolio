import { BrainCircuit as Circuit, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="flex items-center gap-2">
              <Circuit className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold">Anuj</span>
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Electronics Engineer & IoT Developer passionate about building innovative solutions that make a difference.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition-colors mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Anuj's Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;