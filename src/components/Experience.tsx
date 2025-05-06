import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "IoT Advanced Workshop",
      company: "Organized by Magrita Tech",
      duration: "feb 2024 - Mar 2024",
      description: "Gained hands-on experience in advanced IoT technologies, including sensor integration, microcontroller programming, and real-time data transmission.",
      
    },
    {
      title: "IEEE Nano Day Workshop",
      company: "Organized by IIT Patna",
      duration: "dec 2024",
      description: "Participated in sessions focused on nanotechnology applications in electronics and embedded systems, with exposure to cutting-edge research and innovation.",
     
    }
    ,
    {
      title: "PLC Programming Internship",
      company: "Tool Room & Training Centre (TRTC)",
      duration: "oct 2024 - Nov 2024",
      description: "Acquired practical skills in industrial automation, including PLC ladder logic design, troubleshooting, and control system development.",
      
    },
    {
      title: "National Science Day – Model Presentation Winner",
      company: "Organized by BIT Patna in Association with ISRO",
      duration: "Jan 2024 - Feb 2024",
      description: "Secured first place for an innovative project model presentation demonstrating space-tech integration with real-world problem solving.",
      
    }
    ,
    {
      title: "Smart India Hackathon – Internal Round Finalist",
      company: "Selected at Institutional Level",
      duration: "sep 2024",
description: "Shortlisted for the national-level Smart India Hackathon based on a tech solution developed in the internal selection phase."
      
    }
    ,
    {
      title: "Hackathon Participant – TECHNEX",
      company: "Organized by IIT BHU",
      duration: "mar 2024",
      description: "Contributed to the development of a tech-driven solution under competitive hackathon conditions, collaborating with peers to build rapid prototypes.",
      
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="h-7 w-7 text-blue-500" />
            <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in electronics engineering and IoT development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-12 last:pb-0 animate-slide-up"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-px bg-blue-200 dark:bg-blue-800"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 ml-6 hover:shadow-xl transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                
                <div className="space-y-2">
                  
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;