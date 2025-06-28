import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative SVG */}
      <svg
        className="absolute top-8 left-8 w-24 h-24 opacity-20 animate-float-slow pointer-events-none z-0"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="48" stroke="#06b6d4" strokeWidth="2" />
        <rect x="20" y="20" width="60" height="60" rx="10" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="50" cy="50" r="6" fill="#3b82f6" />
      </svg>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-8 w-8 text-blue-500 animate-bounce-slow" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 bg-clip-text text-transparent animate-gradient-move">
              Education
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey has equipped me with the knowledge and skills needed to excel in the field of electronics engineering.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-transform hover:scale-[1.03] animate-slide-up group border border-blue-100 dark:border-blue-900/30">
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-blue-600 dark:text-blue-400 group-hover:text-cyan-500 transition-colors">
                Diploma in Electronics Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                State Board of Technical Education, Bihar
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full animate-fade-in-delay-1">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-blue-700 dark:text-blue-300">Semester: IV (Revised Syllabus 1.0)</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full animate-fade-in-delay-2">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-blue-700 dark:text-blue-300">Expected Graduation: 2026</span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 animate-fade-in-delay-3">
                Currently pursuing my diploma with a focus on embedded systems, circuit design, and IoT applications. The program provides a strong foundation in electronics theory alongside practical hands-on experience with various technologies and equipment.
              </p>
              
              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg animate-fade-in-delay-4">
                <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Key Areas of Study:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    <span className="text-gray-700 dark:text-gray-300">Embedded Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    <span className="text-gray-700 dark:text-gray-300">Analog & Digital Electronics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    <span className="text-gray-700 dark:text-gray-300">Electronic Measurement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    <span className="text-gray-700 dark:text-gray-300">Power Electronics & Control Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    <span className="text-gray-700 dark:text-gray-300">Digital & Analog Communication Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    <span className="text-gray-700 dark:text-gray-300">Microcontroller Programming (Arduino, ESP, 8051)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    <span className="text-gray-700 dark:text-gray-300">IoT Integration & Applications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    <span className="text-gray-700 dark:text-gray-300">PCB Design & Testing</span>
                  </li>
                </ul>
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
          @keyframes slide-up {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: none;}
          }
          .animate-slide-up { animation: slide-up 1.1s both; }
          .animate-fade-in-delay-1 { animation: fade-in-down 1s 0.2s both; }
          .animate-fade-in-delay-2 { animation: fade-in-down 1s 0.4s both; }
          .animate-fade-in-delay-3 { animation: fade-in-down 1s 0.6s both; }
          .animate-fade-in-delay-4 { animation: fade-in-down 1s 0.8s both; }
          @keyframes gradient-move {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-move {
            background-size: 200% 200%;
            animation: gradient-move 4s ease-in-out infinite;
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) rotate(0deg);}
            50% { transform: translateY(-16px) rotate(6deg);}
          }
          .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
          @keyframes bounce-slow {
            0%,100% { transform: translateY(0);}
            50% { transform: translateY(-10px);}
          }
          .animate-bounce-slow { animation: bounce-slow 2.2s cubic-bezier(.4,2,.6,1) infinite; }
        `}
      </style>
    </section>
  );
};

export default Education;