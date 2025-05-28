
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Certifications from '@/components/Certifications';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 text-gray-900 dark:text-white">
        {/* Enhanced background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Content sections with improved spacing and transitions */}
        <div className="relative z-10">
          <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          
          <section className="relative">
            <Hero />
          </section>
          
          <section className="relative py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent dark:via-gray-700/30"></div>
            <div className="relative z-10">
              <About />
            </div>
          </section>
          
          {/* <section className="relative py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-gray-800/30 dark:to-slate-800/30"></div>
            <div className="relative z-10">
              <Projects />
            </div>
          </section> */}
          
          {/* <section className="relative py-20 bg-gradient-to-r from-slate-50/80 to-blue-50/80 dark:from-gray-900/80 dark:to-slate-800/80 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-50/30 to-transparent dark:via-gray-700/30"></div>
            <div className="relative z-10">
              <Resume />
            </div>
          </section> */}
          
          <section className="relative py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-cyan-50/30 dark:from-slate-800/30 dark:to-gray-800/30"></div>
            <div className="relative z-10">
              <Certifications />
            </div>
          </section>
          
          <section className="relative py-20 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-gray-800/50 dark:to-slate-900/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent dark:via-gray-700/30"></div>
            <div className="relative z-10">
              <Blogs />
            </div>
          </section>
          
          <section className="relative py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-transparent to-purple-50/30 dark:from-gray-800/30 dark:to-slate-800/30"></div>
            <div className="relative z-10">
              <Contact />
            </div>
          </section>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
