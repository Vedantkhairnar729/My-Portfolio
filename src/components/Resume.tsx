
import { Download, FileText, Eye } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // This would trigger a download of your resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume PDF to the public folder
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  };

  const handlePreview = () => {
    // This would open the resume in a new tab
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Download my resume to learn more about my professional experience, 
            education, and technical skills.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  Professional Resume
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  My comprehensive resume includes detailed information about my work experience, 
                  education, technical skills, certifications, and key projects. It's regularly 
                  updated to reflect my latest achievements and capabilities.
                </p>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
                  <div>
                    <strong className="text-gray-700 dark:text-gray-300">Format:</strong> PDF
                  </div>
                  <div>
                    <strong className="text-gray-700 dark:text-gray-300">Size:</strong> 2 pages
                  </div>
                  <div>
                    <strong className="text-gray-700 dark:text-gray-300">Updated:</strong> Dec 2024
                  </div>
                  <div>
                    <strong className="text-gray-700 dark:text-gray-300">Language:</strong> English
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4 w-full md:w-auto">
                <button
                  onClick={handleDownload}
                  className="flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download Resume
                </button>
                
                <button
                  onClick={handlePreview}
                  className="flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Eye className="w-5 h-5 mr-3" />
                  Preview Online
                </button>
              </div>
            </div>
          </div>

          {/* Resume Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Years Experience</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">20+</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Projects Completed</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
              <div className="text-gray-700 dark:text-gray-300 font-medium">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
