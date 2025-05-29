import { useState } from 'react';
import { Github, ExternalLink, Filter } from 'lucide-react';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Blockchain Voting System',
      description: 'Decentralized blockchain voting system with smart contract-based vote recording, secure authentication, and real-time result tracking.',
      image: 'https://www.shutterstock.com/image-vector/blockchain-vector-icon-design-element-600nw-715544491.jpg',
      technologies: ['Solidity', 'javascript'],
      // demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com/Vedantkhairnar729/blockchain-voting',
      category: 'web3'
    },
    {
      id: 2,
      title: 'Generalcom',
      description: 'Responsive website template featuring modular frontend components, organized backend structure, and scalable architecture.',
      image: 'https://t3.ftcdn.net/jpg/01/13/12/60/360_F_113126068_vQTggf0m8T3GojwA8ruO0Ggmo8MpJky5.jpg',
      technologies: ['JavaScript','PHP', 'Less', 'Hack'],
      // demoLink: 'https://demo.example.com',
      githubLink: 'https://github.com/Vedantkhairnar729/generalcom',
      category: 'Full-Stack'
    },
    {
      id: 3,
      title: 'Book Marketing',
      description: 'Book marketing module for an online book-selling platform, designed to enhance visibility and promote book listings effectively.',
      image: 'https://st4.depositphotos.com/12780408/22918/v/450/depositphotos_229184048-stock-illustration-digital-marketing-black-icon-vector.jpg',
      technologies: ['JavaScript', 'PHP','CSS'],
      // demoLink: 'https://api.example.com/docs',
      githubLink: 'https://github.com/Vedantkhairnar729/Book-Selling-site/tree/main/Book%20Marketing',
      category: 'Full-Stack'
    },
    // {
    //   id: 4,
    //   title: 'Weather App',
    //   description: 'Mobile-responsive weather application with location-based forecasts and interactive maps.',
    //   image: '/placeholder.svg',
    //   technologies: ['React', 'OpenWeather API', 'Mapbox', 'CSS3'],
    //   // demoLink: 'https://weather.example.com',
    //   githubLink: 'https://github.com/yourusername/weather-app',
    //   category: 'Frontend'
    // },
    // {
    //   id: 5,
    //   title: 'Chat Application',
    //   description: 'Real-time chat application with rooms, file sharing, and user presence indicators.',
    //   image: '/placeholder.svg',
    //   technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    //   // demoLink: 'https://chat.example.com',
    //   githubLink: 'https://github.com/yourusername/chat-app',
    //   category: 'Full-Stack'
    // },
    // {
    //   id: 6,
    //   title: 'Data Visualization Tool',
    //   description: 'Interactive data visualization platform for analyzing complex datasets with custom charts.',
    //   image: '/placeholder.svg',
    //   technologies: ['Python', 'Django', 'D3.js', 'PostgreSQL'],
    //   // demoLink: 'https://dataviz.example.com',
    //   githubLink: 'https://github.com/yourusername/dataviz',
    //   category: 'Data Science'
    // }
  ];

  const categories = ['All', 'Full-Stack', 'Frontend', 'Backend', 'Data Science'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
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
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
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
              className="group relative bg-white dark:bg-gray-800/90 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
