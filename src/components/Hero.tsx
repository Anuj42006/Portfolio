import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpeg'

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Circuit board pattern background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-repeat" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/circuit-board.png")' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="md:w-1/3 animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl">
                <img 
                  src={profileImg}
                  alt="Anuj's Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative circle */}
              <div className="absolute -inset-4 border-2 border-blue-500/20 rounded-full animate-spin-slow"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400 animate-fade-in">
              Anuj's Portfolio
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 animate-fade-in-delay-1">
              Electronics Engineer & IoT Developer
            </h2>
            
            <div className="flex justify-center md:justify-start space-x-4 mb-12 animate-fade-in-delay-2">
              <a 
                href="https://github.com/Anuj42006" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="anujkumar42006@gmail.com"
                className="social-icon-link"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            
            <button 
              onClick={scrollToAbout} 
              className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl animate-fade-in-delay-3 mx-auto md:mx-0"
            >
              Explore My Work
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Animated dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <ArrowDown className="h-6 w-6 text-gray-500 dark:text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;