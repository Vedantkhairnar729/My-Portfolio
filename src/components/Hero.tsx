import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

const Hero = () => {
  const fullTexts = [
    "Software Engineer",
    "MERN Stack Developer",
    "Tech Enthusiast"
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    let textIndex = 0;
    let timer: NodeJS.Timeout;
    let erase = false;

    const type = () => {
      const currentText = fullTexts[textIndex];
      if (!erase) {
        if (index <= currentText.length) {
          setDisplayText(currentText.slice(0, index));
          index++;
          timer = setTimeout(type, 100);
        } else {
          erase = true;
          timer = setTimeout(type, 1200);
        }
      } else {
        if (index > 0) {
          setDisplayText(currentText.slice(0, index - 1));
          index--;
          timer = setTimeout(type, 40);
        } else {
          erase = false;
          textIndex = (textIndex + 1) % fullTexts.length;
          setCurrentIndex(textIndex);
          timer = setTimeout(type, 400);
        }
      }
    };
    type();
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Vedantkhairnar729', color: 'hover:text-gray-800 dark:hover:text-gray-200' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/vedant-khairnar', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { name: 'Email', icon: Mail, url: 'mailto:vedantkhairnar041@gmail.com', color: 'hover:text-red-500 dark:hover:text-red-400' },
    
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${(i * 5) % 100}%`,
              top: `${(i * 13) % 100}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${4 + (i % 4)}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Profile Photo */}
          <div className="mb-12 animate-fade-in">
            <div className="relative w-56 h-56 mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full p-1 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                  <img 
                    src="https://avatars.githubusercontent.com/u/146806970?v=4" 
                    alt="Vedant Khairnar - Professional Portrait" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Enhanced Name and Title */}
          <div className="space-y-6 mb-12">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent animate-fade-in leading-tight">
              Vedant Khairnar
            </h1>
            
            <div className="text-3xl md:text-4xl font-light text-gray-600 dark:text-gray-300 mb-8 h-16 flex items-center justify-center">
              <span className="border-r-2 border-blue-500 pr-2 font-mono">
                {displayText}
              </span>
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Passionate about creating <span className="text-blue-600 dark:text-blue-400 font-semibold">innovative solutions</span> with modern technologies. 
              Specialized in <span className="text-purple-600 dark:text-purple-400 font-semibold">MERN stack development</span> with a focus on 
              user experience and scalable architecture.
            </p>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center space-x-3 px-8 py-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 ${link.color} transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600`}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <link.icon size={22} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="space-y-6 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center mb-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <button 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>View My Work</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-5 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <div className="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-500">
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
