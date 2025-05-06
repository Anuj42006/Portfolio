import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-7 w-7 text-blue-500" />
            <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey has equipped me with the knowledge and skills needed to excel in the field of electronics engineering.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] animate-slide-up">
            <div className="p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                Diploma in Electronics Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                State Board of Technical Education, Bihar
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-blue-700 dark:text-blue-300">Semester: IV (Revised Syllabus 1.0)</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span className="text-sm text-blue-700 dark:text-blue-300">Expected Graduation: 2026</span>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">
                Currently pursuing my diploma with a focus on embedded systems, circuit design, and IoT applications. The program provides a strong foundation in electronics theory alongside practical hands-on experience with various technologies and equipment.
              </p>
              
              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Key Areas of Study:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="text-gray-700 dark:text-gray-300">Microcontroller Programming</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="text-gray-700 dark:text-gray-300">Analog & Digital Electronics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="text-gray-700 dark:text-gray-300">Electronic Measurement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="text-gray-700 dark:text-gray-300">Power Electronics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="text-gray-700 dark:text-gray-300">Communication Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <span className="text-gray-700 dark:text-gray-300">PCB Design & Testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;