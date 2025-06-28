import { Award, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Certificates = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const certificates = [
    {
      title: "Multiple Certifications in Programming",
      issuer: "Cisco Networking Academy® - NetAcad",
      date: "2023-2025",
      skills: ["Programming", "Networking", "Cybersecurity", "IoT","C/C++"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Jw1FC1nnELheCk4l5h-1RfzcaaSdEqak2w&s",
      url: "https://drive.google.com/drive/folders/1ZBfvvcCWFN8tGqhl0QWkT2BzkHmSU3bP?usp=drive_link"
    },
    {
      title: "Multiple Training Programs",
      issuer: "The Spoken Tutorial Project, IIT Bombay",
      date: "2023-2025",
      skills: ["Arduino", "QCAD", "Python", "Kturtle", "Computer"],
      image: "https://bbsbec.edu.in/wp-content/uploads/2019/11/iitbspokentutorial.png",
      url: "https://drive.google.com/drive/folders/1ZBfvvcCWFN8tGqhl0QWkT2BzkHmSU3bP?usp=drive_link"
    },
    {
      title: "Students’ Chapter Certificate of Membership",
      issuer: "The Institution of Engineers (India) [IEI]",
      date: "2023",
      skills: [ "Membership", "Networking", "Professional Development"],
      image:"https://www.bizdirectory.co.in/agnis/images/company-logo/296-1731653414.jpg",
      url: "https://drive.google.com/file/d/1-dHVwACw7NwkoFR6OW65ZWpv_DuC4OH7/view?usp=drive_link"
    },
    
    
  ];

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-7 w-7 text-blue-500 animate-bounce-slow" />
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 bg-clip-text text-transparent animate-gradient-move">
              Certificates & Achievements
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-delay-1">
            Professional certifications and achievements that validate my expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className={`group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-blue-900/30 animate-slide-up ${hovered === index ? 'scale-[1.03]' : ''}`}
              style={{ animationDelay: `${0.1 * index}s` }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
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
                <h3 className="text-lg font-bold mb-2 text-blue-600 dark:text-blue-400 group-hover:text-cyan-500 transition-colors animate-fade-in-delay-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 animate-fade-in-delay-3">
                  {cert.issuer} • {cert.date}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 rounded-full animate-fade-in-delay-4"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-end">
                  <a 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center gap-2"
                    style={{ minWidth: 150, justifyContent: 'center' }}
                  >
                    View All Certificates
                  </a>
                </div>
              </div>
            </div>
          ))}
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
          @keyframes gradient-move {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-move {
            background-size: 200% 200%;
            animation: gradient-move 4s ease-in-out infinite;
          }
          @keyframes bounce-slow {
            0%,100% { transform: translateY(0);}
            50% { transform: translateY(-10px);}
          }
          .animate-bounce-slow { animation: bounce-slow 2.2s cubic-bezier(.4,2,.6,1) infinite; }
          .animate-fade-in-delay-1 { animation: fade-in-down 1s 0.2s both; }
          .animate-fade-in-delay-2 { animation: fade-in-down 1s 0.4s both; }
          .animate-fade-in-delay-3 { animation: fade-in-down 1s 0.6s both; }
          .animate-fade-in-delay-4 { animation: fade-in-down 1s 0.8s both; }
          .animate-fade-in-delay-5 { animation: fade-in-down 1s 1s both; }
          @keyframes pop {
            0% { transform: scale(0.8);}
            60% { transform: scale(1.1);}
            100% { transform: scale(1);}
          }
          .animate-pop { animation: pop 0.7s cubic-bezier(.4,2,.6,1) both; }
        `}
      </style>
    </section>
  );
};

export default Certificates;