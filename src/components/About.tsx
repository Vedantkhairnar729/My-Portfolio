
import { Code, GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB',
    'PostgreSQL', 'Python', 'Java', 'Git', 'Docker', 'AWS', 'Tailwind CSS', 'Next.js'
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Introduction to Generative AI',
      company: 'Google Cloud Skills Boost',
      description: 'Completed a course on Generative AI fundamentals and applications',
      icon: Award,
      type: 'achievement'
    },
    {
      year: '2024',
      title: 'Azure Fundamentals',
      company: 'Microsoft Learn',
      description: 'Gained foundational knowledge of Microsoft Azure cloud services',
      icon: Award,
      type: 'achievement'
    },
    {
      year: '2024',
      title: 'Python Devolopement Esential',
      company: 'Udemy',
      description: 'Completed a comprehensive course on Python development fundamentals',
      icon: Award,
      type: 'achievement'
    },
    {
      year: '2023',
      title: 'Bachelor of Computer Science and Engineering',
      company: 'Dr. Babasaheb Ambedkar Technological University',
      description: 'Graduated with honors, specialized in software engineering and algorithms',
      icon: GraduationCap,
      type: 'education'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            I love creating efficient, scalable solutions that make a real impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Skills & Description */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                What I Do
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I specialize in building full-stack web applications with a focus on 
                  user experience and performance. My expertise includes both frontend 
                  and backend development, database design, and cloud deployment.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or solving algorithmic challenges 
                  on competitive programming platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
              Journey is Continue
            </h3>
            <div className="relative">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center relative z-10">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {index !== timeline.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-300 dark:bg-gray-600"></div>
                  )}
                  
                  <div className="ml-6 flex-1">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                        {item.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
