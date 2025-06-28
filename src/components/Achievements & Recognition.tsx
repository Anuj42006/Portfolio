import React from 'react';
import { Trophy, Award, Users, BookOpen, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      id: 1,
      title: 'Winner - National Science Day Model Presentation',
      organization: 'ISRO & BIT Patna',
      date: '2024',
      type: 'Competition',
      icon: <Trophy className="w-6 h-6" />,
      description: 'Won first place in the National Science Day model presentation organized by ISRO and BIT Patna for innovative IoT project demonstration.',
      color: 'from-yellow-400 to-orange-500',
      certificate: '#', // Replace with actual certificate link if available
    },
    {
      id: 2,
      title: 'Selected - Internal Hackathon Round',
      organization: 'Smart India Hackathon',
      date: '2024',
      type: 'Hackathon',
      icon: <Users className="w-6 h-6" />,
      description: 'Successfully qualified through internal selection rounds for the prestigious Smart India Hackathon competition.',
      color: 'from-blue-400 to-purple-500',
      certificate: '#',
    },
    {
      id: 3,
      title: 'Participant - National Hackathon',
      organization: 'IIT BHU',
      date: '2024',
      type: 'Hackathon',
      icon: <Award className="w-6 h-6" />,
      description: 'Participated in the national-level hackathon at IIT BHU, showcasing innovative solutions in technology.',
      color: 'from-green-400 to-teal-500',
      certificate: '#',
    }
  ];

  const internships = [
    {
      title: 'Embedded Systems Internship',
      organization: 'NIELIT Patna',
      duration: 'June 2025',
      type: 'Technical Training',
      description: 'Comprehensive training in embedded systems design, programming, and implementation.',
      status: 'Completed',
      certificate: '#',
    },
    {
      title: 'PLC Programming Internship',
      organization: 'TRTC',
      duration: '2024',
      type: 'Industrial Training',
      description: 'Hands-on experience with Programmable Logic Controllers and industrial automation.',
      status: 'Completed',
      certificate: '#',
    },
    {
      title: 'IoT Advanced Workshop',
      organization: 'Magrita Tech',
      duration: '2024',
      type: 'Skill Development',
      description: 'Advanced IoT concepts, sensor integration, and real-world project implementation.',
      status: 'Completed',
      certificate: '#',
    },
    {
      title: 'IEEE Nano Day Workshop',
      organization: 'IIT Patna',
      duration: '2024',
      type: 'Research Workshop',
      description: 'Explored nanotechnology applications and cutting-edge research methodologies.',
      status: 'Completed',
      certificate: '#',
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-white via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Decorative SVG */}
      <svg
        className="absolute top-8 right-8 w-28 h-28 opacity-20 animate-float-slow pointer-events-none z-0"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="48" stroke="#06b6d4" strokeWidth="2" />
        <rect x="20" y="20" width="60" height="60" rx="10" stroke="#3b82f6" strokeWidth="2" />
        <circle cx="50" cy="50" r="6" fill="#3b82f6" />
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 bg-clip-text text-transparent animate-gradient-move">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of awards, competitions, internships, and trainings that showcase my journey in technology and innovation.
          </p>
        </div>

        {/* Major Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Awards & Competitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, idx) => (
              <div
                key={achievement.id}
                className="relative overflow-hidden bg-white/80 dark:bg-gray-900/80 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group animate-slide-up"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${achievement.color} text-white shadow-lg`}>
                      {achievement.icon}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      {achievement.date}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={14} className="text-gray-400" />
                    <span className="text-sm font-medium text-secondary-600 dark:text-secondary-400">
                      {achievement.organization}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 items-center">
                    <span className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                      {achievement.type}
                    </span>
                    <a
                      href={achievement.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internships & Training */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Internships & Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internships.map((internship, idx) => (
              <div
                key={idx}
                className="bg-white/80 dark:bg-gray-900/80 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg">
                      <BookOpen className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {internship.title}
                      </h4>
                      <p className="text-secondary-600 dark:text-secondary-400 font-medium">
                        {internship.organization}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    internship.status === 'Completed'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}>
                    {internship.status}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">{internship.duration}</span>
                  <span className="text-gray-300 dark:text-gray-600">•</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">{internship.type}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {internship.description}
                </p>
                <a
                  href={internship.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </div>
            ))}
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

export default Achievements;