import { useState } from 'react';
import { Cpu, Code, Globe, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>('embedded');

  const skillCategories: SkillCategory[] = [
    {
      title: 'Embedded Systems & IoT',
      icon: <Cpu className="h-5 w-5" />,
      skills: [
        { name: 'Arduino', level: 90 },
        { name: 'ESP32', level: 85 },
        { name: 'Raspberry Pi', level: 60 },
        { name: 'Sensors Integration', level: 80 },
        { name: 'Circuit Design', level: 75 },
        { name: 'Power Supply Design', level: 70 },
      ]
    },
    {
      title: 'Programming Languages',
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: 'C/C++ (Arduino)', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'JavaScript', level: 70 },
      ]
    },
    {
      title: 'Web Development',
      icon: <Globe className="h-5 w-5" />,
      skills: [
        { name: 'HTML', level: 80 },
        { name: 'CSS', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'React.js', level: 60 },
      ]
    },
    {
      title: 'Tools',
      icon: <Wrench className="h-5 w-5" />,
      skills: [
        { name: 'Arduino IDE', level: 90 },
        { name: 'VS Code', level: 85 },
        { name: 'Git & GitHub', level: 70 },
        { name: 'Fritzing', level: 75 },
        { name: 'Firebase', level: 65 },
        { name: 'Tinkercad', level: 70 },
      ]
    },
  ];

  const getCategoryId = (title: string): string => {
    return title.toLowerCase().split(' ')[0];
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative SVG */}
      <svg
        className="absolute top-8 right-8 w-24 h-24 opacity-20 animate-float-slow pointer-events-none z-0"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="48" stroke="#06b6d4" strokeWidth="2" />
        <rect x="20" y="20" width="60" height="60" rx="10" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="50" cy="50" r="6" fill="#3b82f6" />
      </svg>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 bg-clip-text text-transparent animate-gradient-move">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of electronics and software development.
          </p>
        </div>
        
        {/* Skill Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-delay-1">
          {skillCategories.map((category) => {
            const categoryId = getCategoryId(category.title);
            return (
              <button
                key={categoryId}
                onClick={() => setActiveTab(categoryId)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300
                  ${activeTab === categoryId 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg scale-105'
                    : 'bg-white/70 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-600'
                  }`}
              >
                {category.icon}
                {category.title}
              </button>
            );
          })}
        </div>
        
        {/* Skills Display */}
        <div className="max-w-4xl mx-auto animate-fade-in-delay-2 transition-all duration-500">
          {skillCategories.map((category, idx) => {
            const categoryId = getCategoryId(category.title);
            if (activeTab !== categoryId) return null;
            
            return (
              <div key={categoryId} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.skills.map((skill, skillIdx) => (
                  <div 
                    key={skill.name} 
                    className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl shadow-md border border-blue-100 dark:border-blue-900/30 transition-transform hover:scale-[1.03] animate-slide-up"
                    style={{ animationDelay: `${0.1 * skillIdx}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-blue-700 dark:text-blue-300">{skill.name}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full transition-all duration-1000 skill-progress-animate"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
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
        `}
      </style>
    </section>
  );
};

export default Skills;