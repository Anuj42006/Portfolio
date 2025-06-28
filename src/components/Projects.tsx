import { useState } from 'react';
import {
  FolderCog, ChevronRight, Brain, Recycle, Rocket, Coffee, Shield, Cloud,
  ExternalLink, Github, X, Code, Cpu
} from 'lucide-react';
import waste from '../assets/Waste.png';
import sensors from '../assets/The sensors.png';

interface Project {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
  type: 'software' | 'hardware';
}

const softwareProjects: Project[] = [
  {
    id: 'The Sensors',
    title: 'The Sensors',
    description: 'A web-based platform for showcasing and uploading electronics and IoT projects at the college level. It helps students share innovative ideas, documentation, and project files in an organized and collaborative way.',
    icon: <Recycle className="h-5 w-5" />,
    image:sensors,
    technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    github: '#',
    type: 'software'
  },
  {
    id: 'Voice to Notes',
    title: 'Voice to Notes',
    description: 'A web application that converts voice input into text notes. Utilizes Web Speech API for speech recognition and allows users to save, edit, and delete notes. Features include voice commands for note-taking, text formatting, and a user-friendly interface.',
    icon: <Rocket className="h-5 w-5" />,
    image: 'https://miro.medium.com/v2/resize:fit:556/1*_kxAvQr1X5OSr8zHIjPQxQ.png',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Web Speech API'],
    github: '#',
    type: 'software'
  },
  {
    id: 'Login-system',
    title: 'Login System',
    description: 'A simple login system using HTML, CSS, and JavaScript. Features user authentication, session management, and form validation. Provides a secure way to manage user access.',
    icon: <Shield className="h-5 w-5" />,
    image: 'https://img.freepik.com/free-vector/log-concept-landing-page_23-2148269085.jpg?semt=ais_hybrid&w=740',
    technologies: [ 'JavaScript', 'HTML', 'CSS', 'Local Storage', 'Session Management'],
    github: '#',
    type: 'software'
  },
  {
    id: 'cafe-management',
    title: 'Cafe Management System',
    description: 'A Python-based billing system with GUI for item selection, order summary, and daily total. Features inventory management, receipt generation, and sales reporting functionality.',
    icon: <Coffee className="h-5 w-5" />,
    technologies: ['Python', 'Tkinter', 'SQLite', 'UI Design'],
    image: 'https://www.gofrugal.com/sites/gweb/files/gofrugal/images/restaurant/qsr-macro/cofee-shop-banner.webp',
    type: 'software',
    github: '#',
    link: '#'
  },
  {
    id: 'jarvis-virtual-assistant',
    title: 'Jarvis Virtual Assistant',
    description: 'Python-based voice assistant using speech recognition',
    icon: <Brain className="h-5 w-5" />,
    image: 'https://wallpapercave.com/wp/wp2133204.jpg',
    technologies: ['Python', 'Speech Recognition', 'AI'],
    github: '#',
    type: 'software'
  },
  {
    id: 'Weather-app',
    title: 'Weather App',
    description: ' A web application that provides real-time weather updates using OpenWeatherMap API. Features include current weather conditions, 5-day forecast, and location-based weather data.',
    icon: <Cloud className="h-5 w-5" />,
    image: 'https://images.squarespace-cdn.com/content/v1/5fa847dcd5d9331ae7254730/1641407374446-6E9MU5FCXTEYURS2HP47/ICEBERG+MEDITATION-6.png',
    technologies: [ 'JavaScript', 'HTML', 'CSS', 'OpenWeatherMap API'],
    github: '#',
    type: 'software'
  },
  
  
  
  



  // ...add more software projects here...
];

const hardwareProjects: Project[] = [
  {
    id: 'Space Rover',
    title: 'Space Rover',
    description: 'A robotic rover designed for planetary exploration. Features include obstacle avoidance, remote control via a mobile app, and real-time video streaming using an ESP32-CAM module.',
    icon: <Cpu className="h-5 w-5" />,
    technologies: [ 'ESP32-CAM', 'Ultrasonic Sensors', 'Mobile App', 'Firebase'],
    image: 'https://i.ytimg.com/vi/ITcerP7rSqI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBf3Cq4d7njKKwqicUQe6tmkryNwQ',
    type: 'hardware',
    github: '#',
    link: '#'
  },
  {
    id: 'Women Safety Device',
    title: 'Women Safety Device',
    description: 'ESP32-CAM emergency alert system with real-time location tracking and live video streaming. Designed for personal safety, it sends alerts to emergency contacts with GPS coordinates and captures images of the surroundings.',
    icon: <Shield className="h-5 w-5" />,
    technologies: [ 'ESP32-CAM', 'GPS Module', 'Mobile App', 'Firebase'],
    image: 'https://psiborg.in/wp-content/uploads/2025/02/safety-devices-for-women.webp',
    type: 'hardware',
    github: '#',
    link: '#'
  },
 
   
  {
    id: 'Waste Management',
    title: 'Smart Waste Management System',
    description: 'An IoT-based waste management solution that monitors bin levels and optimizes collection routes. Uses ultrasonic sensors to detect fill levels and provides real-time data to waste management authorities.',
    icon: <Recycle className="h-5 w-5" />,
    technologies: ['ESP32', 'Ultrasonic Sensors', 'Web Dashboard', 'Firebase'],
    image: waste,
    type: 'hardware',
    github: '#',
    link: '#'
  },
  {
    id: 'Home Automation',
    title: 'Home Automation System',
    description: 'A smart home system that allows users to control appliances, lighting, and security through a mobile app. Features include remote access, scheduling, and energy monitoring using IoT devices.',
    icon: <Cpu className="h-5 w-5" />,
    technologies: ['ESP32', 'Relay Modules', 'Mobile App', 'Firebase'],
    image:'https://5.imimg.com/data5/SELLER/Default/2024/7/434005196/CO/LF/EI/879167/home-automation-system.jpg',
    type: 'hardware',
    github: '#',
    link: '#'
  },
  {
    id: 'IOT Weather Station',
    title: 'IoT Weather Station',
    description: 'A weather monitoring system that collects real-time data on temperature, humidity, and air quality using IoT sensors. Data is displayed on a web dashboard for easy access and analysis.',
    icon: <Cloud className="h-5 w-5" />,
    technologies: ['ESP32', 'DHT11 Sensor', 'MQ-135 Sensor', 'Web Dashboard','thingspeak'],
    image: 'https://i0.wp.com/srituhobby.com/wp-content/uploads/2021/06/191.jpg?fit=1280%2C720&ssl=1',
    type: 'hardware',
    github: '#',
    link: '#'
  },
  
  {
    id: 'Smart Agriculture',
    title: 'Smart Agriculture System',
    description: 'An IoT-based agriculture solution that monitors soil moisture, temperature, and humidity. Provides real-time data to farmers for better crop management and irrigation control.',
    icon: <Cpu className="h-5 w-5" />,
    technologies: ['ESP32', 'Soil Moisture Sensor', 'DHT11 Sensor', 'Web Dashboard'],
    image: 'https://dreamztech.com/blog/wp-content/uploads/2018/09/iot-agriculture-1.jpg',
    type: 'hardware',
    github: '#',
    link: '#'
  }
  // ...add more hardware projects here...
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | 'software' | 'hardware'>('all');

  const filteredSoftware = filter === 'all' || filter === 'software' ? softwareProjects : [];
  const filteredHardware = filter === 'all' || filter === 'hardware' ? hardwareProjects : [];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
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
        <div className="text-center mb-12 animate-fade-in-down">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FolderCog className="h-7 w-7 text-blue-500" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 bg-clip-text text-transparent animate-gradient-move">
              Projects
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my hands-on projects that demonstrate my skills and passion for electronics and IoT.
          </p>
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-[#6366f1] text-white shadow-md'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('software')}
              className={`px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition-all duration-200 ${
                filter === 'software'
                  ? 'bg-[#6366f1] text-white shadow-md'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              <Code size={16} /> Software
            </button>
            <button
              onClick={() => setFilter('hardware')}
              className={`px-6 py-2 rounded-full font-semibold flex items-center gap-2 transition-all duration-200 ${
                filter === 'hardware'
                  ? 'bg-[#6366f1] text-white shadow-md'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              <Cpu size={16} /> Hardware & IoT
            </button>
          </div>
        </div>

        {/* Software Projects Section */}
        {filteredSoftware.length > 0 && (
          <div className="mb-16">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400 flex items-center gap-2">
              <Code size={20} /> Software Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSoftware.map((project) => (
                <div
                  key={project.id}
                  className="bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-lg overflow-hidden flex flex-col border border-blue-100 dark:border-blue-900/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-2 rounded-lg">
                        {project.icon}
                      </div>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
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
                      onClick={() => setActiveProject(project)}
                      className="flex items-center gap-1 text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors"
                    >
                      View Details
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hardware Projects Section */}
        {filteredHardware.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400 flex items-center gap-2">
              <Cpu size={20} /> Hardware & IoT Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHardware.map((project) => (
                <div
                  key={project.id}
                  className="bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-lg overflow-hidden flex flex-col border border-blue-100 dark:border-blue-900/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-2 rounded-lg">
                        {project.icon}
                      </div>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
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
                      onClick={() => setActiveProject(project)}
                      className="flex items-center gap-1 text-blue-500 text-sm font-medium hover:text-blue-600 transition-colors"
                    >
                      View Details
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Popup Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in-fast">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6 relative animate-slide-up-modal border border-blue-100 dark:border-blue-900/30">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 flex-shrink-0">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-40 object-cover rounded-xl shadow-md"
                />
              </div>
              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-2 rounded-lg">
                      {activeProject.icon}
                    </span>
                    <h3 className="text-xl font-bold">{activeProject.title}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    {activeProject.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  {activeProject.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  )}
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
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
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) scale(1);}
            50% { transform: translateY(-18px) scale(1.04);}
          }
          .animate-float-slow { animation: float-slow 7s ease-in-out infinite; }
          @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-40px);}
            to { opacity: 1; transform: none;}
          }
          .animate-fade-in-down { animation: fade-in-down 1s both; }
          @keyframes fade-in-fast {
            from { opacity: 0;}
            to { opacity: 1;}
          }
          .animate-fade-in-fast { animation: fade-in-fast 0.3s both; }
          @keyframes slide-up-modal {
            from { transform: translateY(40px); opacity: 0;}
            to { transform: translateY(0); opacity: 1;}
          }
          .animate-slide-up-modal { animation: slide-up-modal 0.4s cubic-bezier(.4,2,.6,1) both; }
        `}
      </style>
    </section>
  );
};

export default Projects;