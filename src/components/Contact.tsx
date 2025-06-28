import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvynwly");

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 bg-clip-text text-transparent animate-gradient-move">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-delay-1">
            Open to internships, collaborations, and tech discussions. 
            Let's build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Contact Info */}
          <div className="flex flex-col bg-white/90 dark:bg-gray-800/90 shadow-2xl rounded-2xl overflow-hidden mb-8 lg:mb-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-8 lg:p-10 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6 animate-fade-in-delay-2">Contact Information</h3>
                <p className="text-blue-100 mb-8 animate-fade-in-delay-3">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 animate-fade-in-delay-4">
                    <div className="bg-white/20 p-3 rounded-lg animate-bounce-slow">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm text-blue-200 mb-1">Email</h4>
                      <a href="mailto:anujkumar42006@gmail.com" className="hover:underline break-all">
                        anujkumar42006@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 animate-fade-in-delay-5">
                    <div className="bg-white/20 p-3 rounded-lg animate-bounce-slow">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm text-blue-200 mb-1">Phone</h4>
                      <a href="tel:+917033915575" className="hover:underline">
                        +91 7033915575
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 animate-fade-in-delay-6">
                    <div className="bg-white/20 p-3 rounded-lg animate-bounce-slow">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm text-blue-200 mb-1">Location</h4>
                      <p>Bihar, India</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 animate-fade-in-delay-7">
                <h4 className="text-sm text-blue-200 mb-3">Connect With Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/AnujKumar42006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors animate-pop"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anuj-kumar-27864731a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors animate-pop"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col justify-center bg-white/90 dark:bg-gray-800/90 shadow-2xl rounded-2xl p-6 sm:p-8 lg:p-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {state.succeeded ? (
              <p className="text-green-600 text-center font-semibold">Thanks for joining!</p>
            ) : (
              <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg animate-fade-in-delay-6 ${
                    state.submitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>
        {`
          @media (max-width: 1024px) {
            .lg\\:mb-0 {
              margin-bottom: 0 !important;
            }
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in { animation: fade-in 0.7s both; }
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
          @keyframes pop {
            0% { transform: scale(0.8);}
            60% { transform: scale(1.1);}
            100% { transform: scale(1);}
          }
          .animate-pop { animation: pop 0.7s cubic-bezier(.4,2,.6,1) both; }
          .animate-fade-in-delay-1 { animation: fade-in 1s 0.2s both; }
          .animate-fade-in-delay-2 { animation: fade-in 1s 0.4s both; }
          .animate-fade-in-delay-3 { animation: fade-in 1s 0.6s both; }
          .animate-fade-in-delay-4 { animation: fade-in 1s 0.8s both; }
          .animate-fade-in-delay-5 { animation: fade-in 1s 1s both; }
          .animate-fade-in-delay-6 { animation: fade-in 1s 1.2s both; }
          .animate-fade-in-delay-7 { animation: fade-in 1s 1.4s both; }
        `}
      </style>
    </section>
  );
};

export default Contact;