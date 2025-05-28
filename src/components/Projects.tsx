
import { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com/yourusername/ecommerce',
      category: 'Full-Stack'
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with real-time data visualization.',
      image: '/placeholder.svg',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Express.js'],
      demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com/yourusername/dashboard',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication, file uploads, and email notifications.',
      image: '/placeholder.svg',
      technologies: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
      demoLink: 'https://api.example.com/docs',
      githubLink: 'https://github.com/yourusername/task-api',
      category: 'Backend'
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Mobile-responsive weather application with location-based forecasts and interactive maps.',
      image: '/placeholder.svg',
      technologies: ['React', 'OpenWeather API', 'Mapbox', 'CSS3'],
      demoLink: 'https://weather.example.com',
      githubLink: 'https://github.com/yourusername/weather-app',
      category: 'Frontend'
    },
    {
      id: 5,
      title: 'Chat Application',
      description: 'Real-time chat application with rooms, file sharing, and user presence indicators.',
      image: '/placeholder.svg',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      demoLink: 'https://chat.example.com',
      githubLink: 'https://github.com/yourusername/chat-app',
      category: 'Full-Stack'
    },
    {
      id: 6,
      title: 'Data Visualization Tool',
      description: 'Interactive data visualization platform for analyzing complex datasets with custom charts.',
      image: '/placeholder.svg',
      technologies: ['Python', 'Django', 'D3.js', 'PostgreSQL'],
      demoLink: 'https://dataviz.example.com',
      githubLink: 'https://github.com/yourusername/dataviz',
      category: 'Data Science'
    }
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Data Science'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedFilter === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-md'
              }`}
            >
              <Filter className="inline-block w-4 h-4 mr-2" />
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
