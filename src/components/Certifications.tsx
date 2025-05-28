import { Award, ExternalLink, Calendar, Shield, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Introduction to Generative AI',
      issuer: 'Google Cloud skills Boost',
      date: 'December 2023',
      credentialId: 'VW9N-X2NN-L6A9',
      description: 'Demonstrated expertise in leveraging Generative AI to create, optimize, and scale content generation, including text, images, and audio, while focusing on ethical AI practices and real-world applications. Proficient in applying state-of-the-art models and fine-tuning techniques to build innovative, human-like solutions..',
      verifyLink: 'https://coursera.org/share/19f0d512a9f065540e77569075071ea0',
      badgeColor: 'from-orange-400 to-orange-600',
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
      level: 'Associate',
      skills: ['OpenAI GPT', 'Vertex AI', 'Google Cloud AI'],
      featured: true
    },
    {
      id: 2,
      title: 'Get Started with Python',
      issuer: 'Microsoft Learn',
      date: 'October 2024',
      credentialId: '1445-AB89-53BD-5C75',
      description: 'Demonstrated expertise in foundational Python programming, covering essential concepts such as data types, control flow, functions, and modules. Proficient in leveraging Python for problem-solving, automation, and basic data manipulation tasks, while adhering to industry-standard coding practices. Skilled in utilizing Microsoft tools and platforms, including Visual Studio Code and Azure integration, to build, test, and deploy Python applications in real-world scenarios..',
      verifyLink: 'https://learn.microsoft.com/api/achievements/share/en-us/VEDANTSUDESHKHAIRNAR-9612/ESLJDX8P?sharingId=1445AB8953BD5C75',
      badgeColor: 'from-blue-400 to-blue-600',
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      level: 'Professional',
      skills: ['Python', 'Data Structures', 'Algorithms', 'Web Development'],
      featured: true
    },
    {
      id: 3,
      title: 'Azure Fundamentals',
      issuer: 'Microsoft learn',
      date: 'October  2024',
      credentialId: '1445-AB89-53BD-5C75',
      description: 'Demonstrated expertise in foundational cloud concepts, including core principles of cloud computing, scalability, elasticity, and high availability. Proficient in leveraging Azure services such as virtual machines, storage, networking, and databases, while understanding the shared responsibility model and cloud security fundamentals. Skilled in navigating Azure Portal and utilizing core Azure services like Azure Resource Manager (ARM), Azure Active Directory (Azure AD), and Azure Compute. Adept at applying foundational knowledge of pricing, SLA, and lifecycle of services, aligning cloud capabilities with business needs to drive innovation and efficiency in real-world scenarios.',
      verifyLink: 'https://learn.microsoft.com/api/achievements/share/en-us/VEDANTSUDESHKHAIRNAR-9612/9XNHW7GU?sharingId=1445AB8953BD5C75',
      badgeColor: 'nane',
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      level: 'Professional',
      skills: ['Azure', 'Cloud Computing', 'Virtual Machines', 'Networking'],
      featured: false
    },
    {
      id: 4,
      title: 'Java (Basic)',
      issuer: 'HackerRank', 
      date: 'August 2023',
      credentialId: 'DCE1-A7D8-5BD2',
      description: 'It will cover basic topics in Java language such as classes, data structures, inheritance, exception handling, etc. You are expected to be proficient in either Java 7 or Java 8..',
      verifyLink: 'https://www.hackerrank.com/certificates/iframe/dce1a7d85bd2',
      badgeColor: 'nane',
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      level: 'Associate',
      skills: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
      featured: false
    },
    {
      id: 5,
      title: 'C Programming Basic',
      issuer: 'Simplilearn',
      date: 'November 2024',
      credentialId: '75-53-408',
      description: '"C Programming Basics” certificate from Simplilearn demonstrates proficiency in foundational C programming concepts, including data types, control structures, functions, arrays, and pointers. Equips learners with a strong grasp of core programming principles and problem-solving skills essential for further exploration of advanced programming topics.',
      verifyLink: 'https://simpli-web.app.link/e/aeE6itd8sOb',
      badgeColor: 'nane',
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      level: 'Certified',
      skills: ['C Programming', 'Data Structures', 'Algorithms', 'Problem Solving'],
      featured: false
    },
    {
      id: 6,
      title: 'Python Development Essentials',
      issuer: 'Udemy',
      date: 'November 2024',
      credentialId: 'UC86-D1EC-EB7D-DA94',
      description: 'Expertise in designing, building, and deploying applications on Google Cloud Platform with microservices architecture.',
      verifyLink: 'https://www.udemy.com/certificate/UC-86d1eceb-7da9-43a8-b1a0-0ef6b09cb3a0/',
      badgeColor: 'nane',
      imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      level: 'Associate',
      skills: ['Python', 'Data Structures', 'Algorithms', 'Web Development'],
      featured: false
    }
  ];

  const featuredCerts = certifications.filter(cert => cert.featured);
  const otherCerts = certifications.filter(cert => !cert.featured);

  const stats = [
    { label: 'Active Certifications', value: '20', icon: CheckCircle, color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Cloud Platforms', value: '3', icon: Star, color: 'text-green-600 dark:text-green-400' },
    { label: 'Pass Rate', value: '85%', icon: TrendingUp, color: 'text-purple-600 dark:text-purple-400' },
    { label: 'Latest Achievement', value: '2025', icon: Award, color: 'text-orange-600 dark:text-orange-400' }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            Professional Certifications
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Professional certifications that validate my expertise in various technologies 
            and methodologies in the software development industry.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center">
            <Star className="w-6 h-6 mr-3 text-yellow-500" />
            Featured Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredCerts.map((cert, index) => (
              <Card
                key={cert.id}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white dark:bg-gray-800"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Certificate Badge */}
                <div className={`h-40 bg-gradient-to-br ${cert.badgeColor} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {cert.level}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-center h-full relative z-10">
                    <img src={cert.imageUrl} alt={cert.title + ' logo'} className="w-20 h-20 object-contain" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/30 to-transparent"></div>
                </div>

                <CardContent className="p-8">
                  <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h4>
                  
                  <div className="flex items-center text-blue-600 dark:text-blue-400 mb-4">
                    <span className="font-semibold">{cert.issuer}</span>
                  </div>

                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {cert.date}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                      <strong>ID:</strong> {cert.credentialId}
                    </div>
                    
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify Certificate
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Additional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {otherCerts.map((cert, index) => (
              <Card
                key={cert.id}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${cert.badgeColor} bg-opacity-10`}>
                      <img src={cert.imageUrl} alt={cert.title + ' logo'} className="w-8 h-8 object-contain" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {cert.level}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white line-clamp-2">
                    {cert.title}
                  </h4>
                  
                  <div className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">
                    {cert.issuer}
                  </div>

                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {cert.date}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {cert.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{cert.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Verify
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
