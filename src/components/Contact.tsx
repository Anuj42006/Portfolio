import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden">
            {/* Contact Info */}
            <div className="lg:w-2/5 bg-blue-600 text-white p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-blue-100 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/30 p-3 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-blue-200 mb-1">Email</h4>
                    <a href="anujkumar42006@gmail.com" className="hover:underline">
                      anujkumar42006@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/30 p-3 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-blue-200 mb-1">Phone</h4>
                    <a href="tel:+91XXXXXXXXXX" className="hover:underline">
                      +91 7033915575
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/30 p-3 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-blue-200 mb-1">Location</h4>
                    <p>Bihar, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-sm text-blue-200 mb-3">Connect With Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/Anuj42006" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-500/30 p-3 rounded-lg hover:bg-blue-500/50 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/yourusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-500/30 p-3 rounded-lg hover:bg-blue-500/50 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-3/5 p-8 lg:p-12">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 text-sm">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                    placeholder="Hello! I'd like to discuss a project..."
                  ></textarea>
                </div>
                
                {submitSuccess && (
                  <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 p-4 rounded-lg mb-6 animate-fade-in">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;