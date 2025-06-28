import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../assets/profile.jpg'
import { useEffect, useRef, useState } from 'react';

const typewriterTexts = [
  "Electronics Engineer ",
  "IOT & Embedded Systems Enthusiast",
  
];

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Typewriter animation state
  const [typeIndex, setTypeIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 80;
  const pause = 1200;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const fullText = typewriterTexts[typeIndex];

    if (!deleting && displayed.length < fullText.length) {
      timeout = setTimeout(() => setDisplayed(fullText.slice(0, displayed.length + 1)), typingSpeed);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(fullText.slice(0, displayed.length - 1)), typingSpeed / 2);
    } else if (!deleting && displayed.length === fullText.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTypeIndex((prev) => (prev + 1) % typewriterTexts.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, typeIndex]);

  // Social icon staggered animation
  const [showIcons, setShowIcons] = useState([false, false, false]);
  useEffect(() => {
    setTimeout(() => setShowIcons([true, false, false]), 400);
    setTimeout(() => setShowIcons([true, true, false]), 600);
    setTimeout(() => setShowIcons([true, true, true]), 800);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Decorative SVG circuit floating */}
      <svg
        className="absolute top-10 left-10 w-32 h-32 opacity-30 animate-float-slow pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="48" stroke="#06b6d4" strokeWidth="2" />
        <rect x="20" y="20" width="60" height="60" rx="10" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="50" cy="50" r="6" fill="#3b82f6" />
      </svg>

      {/* Circuit board pattern background */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-20 bg-repeat pointer-events-none"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/circuit-board.png")',
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24 pt-10 md:pt-0">
          {/* Profile Image with animated border and glow */}
          <div className="w-full flex justify-center mb-8 md:mb-0 md:w-1/3 animate-fade-in">
            <div className="relative group">
              {/* Rotating SVG background behind the profile image */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <svg
                  className="w-[120%] h-[120%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-rotate-bg"
                  viewBox="0 0 400 400"
                  fill="none"
                >
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="180"
                    ry="180"
                    stroke="#2563eb"
                    strokeWidth="2"
                    opacity="0.18"
                  />
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="150"
                    ry="170"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    opacity="0.13"
                  />
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="120"
                    ry="160"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    opacity="0.10"
                  />
                </svg>
              </div>
              {/* Rotating border ring */}
              <div className="absolute -inset-4 border-2 border-blue-500/20 rounded-full animate-spin-slow z-0"></div>
              {/* Animated border with gradient and glow */}
              <div className="absolute inset-0 z-0 rounded-full pointer-events-none animate-border-spin">
                <svg className="w-full h-full" viewBox="0 0 320 320" fill="none">
                  <defs>
                    <linearGradient id="borderGradient" x1="0" y1="0" x2="320" y2="320" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#06b6d4" />
                      <stop offset="0.5" stopColor="#3b82f6" />
                      <stop offset="1" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="160"
                    cy="160"
                    r="150"
                    stroke="url(#borderGradient)"
                    strokeWidth="10"
                    fill="none"
                    opacity="0.7"
                    filter="url(#glow)"
                  />
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </svg>
              </div>
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl bg-white/10 backdrop-blur-lg ring-8 ring-cyan-300/30 animate-profile-glow relative z-10">
                <img
                  src={profileImg}
                  alt="Anuj's Profile"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out animate-img-pop"
                  draggable={false}
                />
                {/* Floating sparkles */}
                <span className="absolute top-8 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-80 animate-floatDot"></span>
                <span className="absolute bottom-10 right-12 w-3 h-3 bg-blue-300 rounded-full opacity-70 animate-floatDot delay-300"></span>
                <span className="absolute top-16 right-16 w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-floatDot delay-700"></span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="w-full md:w-3/5 text-center md:text-left">
            <div className="inline-block px-6 py-8 md:px-12 md:py-12 rounded-3xl bg-white/70 dark:bg-gray-900/70 shadow-2xl backdrop-blur-2xl border border-white/30 dark:border-gray-800/60 animate-fade-in-delay-1 w-full max-w-3xl">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 animate-gradient-move drop-shadow-lg">
                Hi, I'm Anuj Kumar
              </h1>
              <h2 className="text-lg md:text-2xl mb-8 font-medium text-gray-700 dark:text-gray-200 animate-fade-in-delay-2 min-h-[2.5rem]">
                <span className="typewriter">{displayed}</span>
                <span className="typewriter-cursor">|</span>
              </h2>

              <div className="flex justify-center md:justify-start space-x-6 mb-10">
                <a
                  href="https://github.com/Anuj42006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon-link transition-transform hover:scale-125 hover:text-blue-600 dark:hover:text-cyan-400 ${
                    showIcons[0] ? 'animate-social-in' : 'opacity-0'
                  }`}
                  aria-label="GitHub"
                  style={{ transitionDelay: '0.1s' }}
                >
                  <Github className="h-7 w-7" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anuj-kumar-27864731a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-icon-link transition-transform hover:scale-125 hover:text-blue-700 dark:hover:text-cyan-300 ${
                    showIcons[1] ? 'animate-social-in' : 'opacity-0'
                  }`}
                  aria-label="LinkedIn"
                  style={{ transitionDelay: '0.2s' }}
                >
                  <Linkedin className="h-7 w-7" />
                </a>
                <a
                  href="mailto:anujkumar42006@gmail.com"
                  className={`social-icon-link transition-transform hover:scale-125 hover:text-rose-500 dark:hover:text-rose-400 ${
                    showIcons[2] ? 'animate-social-in' : 'opacity-0'
                  }`}
                  aria-label="Email"
                  style={{ transitionDelay: '0.3s' }}
                >
                  <Mail className="h-7 w-7" />
                </a>
              </div>

              <button
                onClick={scrollToAbout}
                className="flex items-center gap-2 px-8 py-4 md:px-10 md:py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-full font-semibold shadow-xl hover:from-cyan-400 hover:to-blue-500 hover:scale-105 transition-all duration-300 animate-fade-in-delay-4 mx-auto md:mx-0 ring-2 ring-cyan-300/30"
              >
                Explore My Work
                <ArrowDown className="h-5 w-5 animate-bounce-slow" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated arrow at bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <ArrowDown className="h-8 w-8 text-blue-400 dark:text-cyan-300 drop-shadow-lg" />
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 24px 8px rgba(34,211,238,0.3); }
            50% { box-shadow: 0 0 48px 16px rgba(34,211,238,0.6); }
          }
          .animate-glow {
            animation: glow 2.5s infinite alternate;
          }
          @keyframes profile-glow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(34,211,238,0.15); }
            50% { box-shadow: 0 0 40px 10px rgba(34,211,238,0.25); }
          }
          .animate-profile-glow {
            animation: profile-glow 3s infinite alternate;
          }
          @keyframes gradient-move {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-move {
            background-size: 200% 200%;
            animation: gradient-move 4s ease-in-out infinite;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: none;}
          }
          .animate-fade-in { animation: fade-in 1s both; }
          .animate-fade-in-delay-1 { animation: fade-in 1s 0.3s both; }
          .animate-fade-in-delay-2 { animation: fade-in 1s 0.6s both; }
          .animate-fade-in-delay-3 { animation: fade-in 1s 0.9s both; }
          .animate-fade-in-delay-4 { animation: fade-in 1s 1.2s both; }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(10px);}
          }
          .animate-bounce-slow { animation: bounce-slow 2s infinite; }
          @keyframes social-in {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: none;}
          }
          .animate-social-in { animation: social-in 0.7s cubic-bezier(.68,-0.55,.27,1.55) both; }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) rotate(0deg);}
            50% { transform: translateY(-16px) rotate(6deg);}
          }
          .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
          @keyframes border-spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .animate-border-spin {
            animation: border-spin 8s linear infinite;
          }
          @keyframes img-pop {
            0% { transform: scale(0.95);}
            60% { transform: scale(1.08);}
            100% { transform: scale(1.05);}
          }
          .animate-img-pop {
            animation: img-pop 1.2s cubic-bezier(.4,2,.6,1) both;
          }
          @keyframes floatDot {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-14px);}
          }
          .animate-floatDot { animation: floatDot 3s ease-in-out infinite; }
          @keyframes blink {
            0%, 100% { opacity: 1;}
            50% { opacity: 0;}
          }
          .typewriter-cursor {
            display: inline-block;
            width: 1ch;
            color: #06b6d4;
            animation: blink 1s steps(1) infinite;
          }
          @keyframes rotate-bg {
            0% { transform: translate(-50%, -50%) rotate(0deg);}
            100% { transform: translate(-50%, -50%) rotate(360deg);}
          }
          .animate-rotate-bg {
            animation: rotate-bg 18s linear infinite;
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .animate-spin-slow {
            animation: spin-slow 14s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;