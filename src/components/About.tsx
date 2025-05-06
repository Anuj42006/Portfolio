import { User, PenTool as Tool } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-slide-in-left">
            <div className="relative">
              {/* Circuit overlay */}
              <div className="absolute inset-0 bg-blue-500 opacity-20 dark:opacity-30 rounded-lg bg-repeat" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/circuit-board.png")' }}></div>
              
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Electronics Engineer Working" 
                className="rounded-lg shadow-lg max-w-full h-auto relative z-10"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 animate-slide-in-right">
            <div className="flex items-center gap-3 mb-4">
              <User className="h-6 w-6 text-blue-500" />
              <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Electronics Engineering student with hands-on experience in embedded systems, IoT, and web technologies. I love building smart solutions for real-world problems using Arduino, ESP32, sensors, and automation tools.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              From waste management to safety systems, I aim to bridge technology and innovation to create impactful solutions that make a difference. My goal is to combine hardware expertise with software skills to develop integrated systems that solve complex problems.
            </p>
            
            <div className="mt-8 flex gap-4">
              <a href="#skills" className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all">
                <Tool className="h-5 w-5" />
                My Skills
              </a>
              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 border border-blue-500 text-blue-500 dark:text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;