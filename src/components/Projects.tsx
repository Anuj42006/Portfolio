import { useState } from 'react';
import { FolderCog, ChevronRight, Brain, Recycle, Rocket, Coffee, Shield, Cloud, ExternalLink, Github } from 'lucide-react';
import waste from '../assets/Waste.jpeg';
interface Project {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'digital-twin',
      title: 'Smart City Digital Twin',
      description: 'A real-time urban management system using IoT sensors for traffic, waste, and weather monitoring. Creates a virtual representation of city infrastructure to optimize resource allocation and improve city management.',
      icon: <Brain className="h-5 w-5" />,
      technologies: ['ESP32', 'Multiple Sensors', 'Web Dashboard', 'Firebase'],
      image: 'https://images.pexels.com/photos/2045248/pexels-photo-2045248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'waste-management',
      title: 'Smart Waste Management System',
      description: 'Automated waste bin using ultrasonic, IR, rain sensors, servo motor, and GSM module for real-time alerting. The system monitors fill levels and automatically notifies collection services when bins reach capacity.',
      icon: <Recycle className="h-5 w-5" />,
      technologies: ['Arduino', 'Ultrasonic Sensor', 'IR Sensor', 'GSM Module', 'Servo Motor'],
      image: waste
    },
    {
      id: 'space-rover',
      title: 'Space Rover',
      description: 'Obstacle-avoiding rover with IR/Ultrasonic sensors and Bluetooth control. This project demonstrates autonomous navigation and remote control capabilities using consumer-grade electronics.',
      icon: <Rocket className="h-5 w-5" />,
      technologies: ['Arduino', 'Motors', 'Bluetooth Module', 'IR/Ultrasonic Sensors'],
      image: 'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'cafe-management',
      title: 'Cafe Management System',
      description: 'A Python-based billing system with GUI for item selection, order summary, and daily total. Features inventory management, receipt generation, and sales reporting functionality.',
      icon: <Coffee className="h-5 w-5" />,
      technologies: ['Python', 'Tkinter', 'SQLite', 'UI Design'],
      image: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'women-safety',
      title: 'Women Safety Device',
      description: 'Wearable device using GSM and GPS modules to send SOS messages with location data. Triggered by a button press, the device immediately alerts emergency contacts with the wearer\'s precise location.',
      icon: <Shield className="h-5 w-5" />,
      technologies: ['Arduino Nano', 'GSM Module', 'GPS Module', 'SOS Button'],
      image: 'https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 'weather-station',
      title: 'IoT Weather Station',
      description: 'Live temperature, humidity, and gas level monitoring using Firebase dashboard and DHT11. This project uploads sensor data to the cloud for remote monitoring and analysis of environmental conditions.',
      icon: <Cloud className="h-5 w-5" />,
      technologies: ['ESP8266', 'DHT11', 'MQ Gas Sensor', 'Firebase'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ];

  const handleProjectClick = (projectId: string) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FolderCog className="h-7 w-7 text-blue-500" />
            <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my hands-on projects that demonstrate my skills and passion for electronics and IoT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-delay-1">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${
                activeProject === project.id ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-2 rounded-lg">
                    {project.icon}
                  </div>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-2 py-1 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => handleProjectClick(project.id)}
                  className="flex items-center gap-1 text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors"
                >
                  {activeProject === project.id ? 'View Less' : 'View Details'}
                  <ChevronRight className={`h-4 w-4 transition-transform ${
                    activeProject === project.id ? 'rotate-90' : ''
                  }`} />
                </button>
                
                {activeProject === project.id && (
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 animate-slide-down">
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm border border-gray-300 dark:border-gray-600 px-3 py-1.5 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;