
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Resume', href: '#resume' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Vedantkhairnar729' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vedant-khairnar' },
    { name: 'Email', url: 'mailto:vedantkhairnar041@gmail.com' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 px-6 relative">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Vedant Khairnar
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Full-stack developer passionate about creating innovative solutions 
              with modern technologies. Always learning, always building.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>Nashik Maharashtra, IN</p>
              <p>vedantkhairnar041@gmail.com</p>
              <p>9226915201</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear} Vedant Khairnar. Made with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500" />
            <span>and lots of coffee.</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 text-sm group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
