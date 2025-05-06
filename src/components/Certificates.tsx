import { Award, ExternalLink } from 'lucide-react';
import Arduino from '../assets/Arduino.jpeg';
import Python from '../assets/Python.jpeg';
import CyberSecurity from '../assets/CyberSecurity.jpeg';
const Certificates = () => {
  const certificates = [
    {
      title: "Arduino Basics Certification",
      issuer: "The Spoken Tutorial Project, IIT Bombay",
      date: "2025",
      credential: "3572132SJV",
      skills: ["Arduino Programming", "Sensor Integration", "Circuit Design"],
      image: Arduino,
      url: "#"
    },
    {
      title: "Programming Essentials in Python",
      issuer: "Cisco Networking Academy® - NetAcad",
      date: "2024",
      credential: "",
      skills: ["Python", "Data Structures", "Algorithms"],
      image:Python,
      url: "#"
    },
    {
      title: " Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy® - NetAcad",
      date: "2024",
      credential: "",
      skills: ["Protect, Detect, Analyze, Respond, Prevent."],
      image: CyberSecurity,
      url: "#"
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-7 w-7 text-blue-500" />
            <h2 className="text-2xl md:text-3xl font-bold">Certificates & Achievements</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 text-blue-600 dark:text-blue-400">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{cert.issuer} • {cert.date}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Credential: {cert.credential}
                  </span>
                  <a 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <span className="text-sm">View</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;