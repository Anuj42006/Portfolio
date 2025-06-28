import React from 'react';
import { User, MapPin, Calendar, Award } from 'lucide-react';
import Anuj from '../assets/Anujprofile.jpg';

const About: React.FC = () => {
  const skills = [
    { category: 'Programming', items: ['C', 'Python', 'Embedded C', 'JavaScript'] },
    { category: 'IoT & Embedded', items: ['Arduino', 'ESP32', 'Raspberry Pi', 'GSM', 'Wi-Fi (ESP8266)'] },
    { category: 'Sensors', items: ['IR', 'DHT11', 'Gas', 'Ultrasonic', 'PIR'] },
    { category: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'Firebase'] },
    { category: 'Tools', items: ['Arduino IDE', 'VS Code', 'Git', 'GitHub', 'Figma'] },
  ];

  return (
    <section
      id="about"
      className="py-20 min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      {/* Animated SVG shapes in the background */}
      <svg
        className="absolute top-10 left-10 w-32 h-32 opacity-30 animate-float-slow pointer-events-none"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="48" stroke="#06b6d4" strokeWidth="2" />
        <rect x="20" y="20" width="60" height="60" rx="10" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="50" cy="50" r="6" fill="#3b82f6" />
      </svg>
      <svg
        className="absolute bottom-10 right-10 w-40 h-40 opacity-20 animate-float-reverse pointer-events-none"
        viewBox="0 0 120 120"
        fill="none"
      >
        <ellipse cx="60" cy="60" rx="55" ry="55" stroke="#2563eb" strokeWidth="2" />
        <ellipse cx="60" cy="60" rx="40" ry="50" stroke="#06b6d4" strokeWidth="2" opacity="0.5" />
      </svg>
      {/* Circuit board pattern background */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-20 bg-repeat pointer-events-none"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/circuit-board.png")',
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-down">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl mx-auto animate-fade-in-delay-1">
            Passionate Electronics Engineering student with hands-on experience in IoT, 
            Embedded Systems, and Software Development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Profile Image with floating cards and glow */}
          <div className="relative flex justify-center animate-fade-in-delay-1 mb-10 md:mb-0">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto group">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl p-1 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center overflow-hidden relative">
                  <img 
                    src={Anuj}
                    alt="Electronics Engineer Working" 
                    className="w-full h-auto object-cover rounded-2xl scale-105 group-hover:scale-110 transition-transform duration-700 ease-in-out animate-img-pop"
                  />
                  {/* Glow effect */}
                  <span className="absolute inset-0 rounded-2xl pointer-events-none border-4 border-cyan-300/40 blur-[2px] opacity-60 group-hover:opacity-80 transition-all duration-700"></span>
                  {/* Floating sparkles */}
                  <span className="absolute top-8 left-10 w-4 h-4 bg-cyan-400 rounded-full opacity-80 animate-floatDot"></span>
                  <span className="absolute bottom-10 right-12 w-3 h-3 bg-blue-300 rounded-full opacity-70 animate-floatDot delay-300"></span>
                  <span className="absolute top-16 right-16 w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-floatDot delay-700"></span>
                </div>
              </div>
            </div>
            
            {/* Floating Info Cards */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-delay-2 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <Award className="text-blue-500" size={18} />
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">ANUJ KUMAR</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in-delay-3 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <Calendar className="text-cyan-500" size={18} />
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">2023-2026</span>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">Electronics Engineering</p>
            </div>
          </div>

          {/* About Content */}
          <div className="animate-fade-in-delay-2">
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Electronics Engineer & IoT Enthusiast
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base sm:text-lg">
                I’m passionate about building innovative solutions that solve real-world 
                challenges using IoT and embedded systems. With expertise in circuit design,
                sensor integration, and rapid prototyping, I turn ideas into functional,
                practical technologies. I thrive on blending creativity with engineering 
                to make technology work smarter for everyday life.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-6">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-blue-500" />
                  <span className="text-sm sm:text-base">Patna, Bihar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-blue-500" />
                  <span className="text-sm sm:text-base">Available for Internships</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">Education</h4>
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <h5 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Diploma in Electronics Engineering</h5>
                <p className="text-blue-500 font-medium text-sm sm:text-base">New Government Polytechnic, Patna-13</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">SBTE Bihar | 2023 - 2026</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-blue-500">8+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Projects</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-cyan-500">2+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Internships</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-blue-700">3+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-40px);}
            to { opacity: 1; transform: none;}
          }
          .animate-fade-in-down { animation: fade-in-down 1s both; }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: none;}
          }
          .animate-fade-in-delay-1 { animation: fade-in 1s 0.3s both; }
          .animate-fade-in-delay-2 { animation: fade-in 1s 0.6s both; }
          .animate-fade-in-delay-3 { animation: fade-in 1s 0.9s both; }
          .animate-fade-in-delay-4 { animation: fade-in 1s 1.2s both; }
          .animate-fade-in-delay-5 { animation: fade-in 1s 1.5s both; }
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
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) scale(1);}
            50% { transform: translateY(-18px) scale(1.04);}
          }
          .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
          @keyframes float-reverse {
            0%, 100% { transform: translateY(0) scale(1);}
            50% { transform: translateY(18px) scale(1.03);}
          }
          .animate-float-reverse { animation: float-reverse 8s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
};

export default About;