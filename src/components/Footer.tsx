import React from 'react';
import { BrainCircuit as Circuit, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/AnujKumar42006',
      icon: <Github size={20} />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anuj-kumar-27864731a/',
      icon: <Linkedin size={20} />
    },
    {
      name: 'Email',
      href: 'mailto:anujkumar42006@gmail.com',
      icon: <Mail size={20} />
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-50 via-cyan-100 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Circuit className="h-7 w-7 text-blue-500" />
              <span className="text-2xl font-bold text-blue-700 dark:text-white">Anuj</span>
            </div>
            <p className="text-black dark:text-gray-300 mb-6 leading-relaxed max-w-md">
              Electronics Engineer and IoT Developer passionate about creating innovative 
              solutions that bridge the digital and physical worlds through technology.
            </p>
            <div className="flex items-center gap-2 text-black dark:text-gray-400">
              <span>Open to</span>
              <span className="px-2 py-1 bg-secondary-100 dark:bg-secondary-500/20 text-secondary-700 dark:text-secondary-400 rounded text-sm">
                Internships
              </span>
              <span className="px-2 py-1 bg-accent-100 dark:bg-accent-500/20 text-accent-700 dark:text-accent-400 rounded text-sm">
                Collaborations
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-700 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-secondary-400 transition-colors font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-700 dark:text-white">Connect</h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:anujkumar42006@gmail.com"
                className="block text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-secondary-400 transition-colors font-medium"
              >
                anujkumar42006@gmail.com
              </a>
              <a
                href="tel:+917033915575"
                className="block text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-secondary-400 transition-colors font-medium"
              >
                +91-7033915575
              </a>
              <span className="block text-gray-600 dark:text-gray-400">Patna, Bihar, India</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-100 dark:bg-white/10 hover:bg-blue-200 dark:hover:bg-white/20 rounded-lg text-blue-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-300 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-black dark:text-gray-400">
              <span>© {currentYear} Anuj's Portfolio. All rights reserved.</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-secondary-500/20 hover:bg-blue-200 dark:hover:bg-secondary-500/30 text-blue-700 dark:text-secondary-400 hover:text-blue-900 dark:hover:text-secondary-300 rounded-lg transition-all duration-300 hover:scale-105 font-medium"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
          .bg-primary-900 { background: #0f172a; }
          .bg-secondary-100 { background: #e0f2fe; }
          .text-secondary-700 { color: #0369a1; }
          .bg-accent-100 { background: #fef9c3; }
          .text-accent-700 { color: #b45309; }
        `}
      </style>
    </footer>
  );
};

export default Footer;