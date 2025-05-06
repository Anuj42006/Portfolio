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
        { name: 'Firebase', level: 65 },
        
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
      ]
    },
  ];

  const getCategoryId = (title: string): string => {
    return title.toLowerCase().split(' ')[0];
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Technical Skills</h2>
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
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm md:text-base transition-all
                  ${activeTab === categoryId 
                    ? 'bg-blue-500 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
              >
                {category.icon}
                {category.title}
              </button>
            );
          })}
        </div>
        
        {/* Skills Display */}
        <div className="max-w-4xl mx-auto animate-fade-in-delay-2">
          {skillCategories.map((category) => {
            const categoryId = getCategoryId(category.title);
            if (activeTab !== categoryId) return null;
            
            return (
              <div key={categoryId} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <div 
                        className="bg-blue-500 h-2.5 rounded-full skill-progress-animate"
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
    </section>
  );
};

export default Skills;