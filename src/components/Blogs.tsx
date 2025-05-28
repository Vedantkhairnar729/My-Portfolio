import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn best practices for structuring large React applications using TypeScript, including component patterns, state management, and performance optimization techniques.',
      publishDate: 'December 15, 2024',
      readTime: '8 min read',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80', // React/TypeScript (laptop, code)
      slug: 'building-scalable-react-applications-typescript'
    },
    {
      id: 2,
      title: 'Microservices Architecture with Node.js and Docker',
      excerpt: 'A comprehensive guide to implementing microservices architecture using Node.js, Express, and Docker containers for improved scalability and maintainability.',
      publishDate: 'December 10, 2024',
      readTime: '12 min read',
      category: 'Backend',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D', // Node.js/server code
      slug: 'microservices-architecture-nodejs-docker'
    },
    {
      id: 3,
      title: 'Database Design Patterns for Modern Web Applications',
      excerpt: 'Explore advanced database design patterns including normalization, indexing strategies, and choosing between SQL and NoSQL databases for your projects.',
      publishDate: 'December 5, 2024',
      readTime: '10 min read',
      category: 'Database',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', // Database (database server)
      slug: 'database-design-patterns-modern-web-applications'
    },
    {
      id: 4,
      title: 'AWS Deployment Strategies for Full-Stack Applications',
      excerpt: 'Step-by-step guide to deploying full-stack applications on AWS using services like EC2, RDS, S3, and CloudFront for optimal performance and security.',
      publishDate: 'November 28, 2024',
      readTime: '15 min read',
      category: 'DevOps',
      image: 'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D', // AWS/DevOps (cloud)
      slug: 'aws-deployment-strategies-fullstack-applications'
    },
    {
      id: 5,
      title: 'Advanced JavaScript Concepts Every Developer Should Know',
      excerpt: 'Deep dive into closures, prototypes, async/await patterns, and other advanced JavaScript concepts that will make you a more effective developer.',
      publishDate: 'November 20, 2024',
      readTime: '7 min read',
      category: 'JavaScript',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', // JavaScript (code on screen)
      slug: 'advanced-javascript-concepts-developers'
    },
    {
      id: 6,
      title: 'Building RESTful APIs with Express.js and MongoDB',
      excerpt: 'Complete tutorial on creating robust RESTful APIs using Express.js and MongoDB, including authentication, validation, and error handling best practices.',
      publishDate: 'November 15, 2024',
      readTime: '11 min read',
      category: 'API',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', // API/Express/MongoDB (API concept)
      slug: 'building-restful-apis-express-mongodb'
    },
    {
      id: 7,
      title: 'Mastering TypeScript Generics for Scalable Code',
      excerpt: 'Unlock the power of TypeScript generics to write reusable, scalable, and type-safe code for large applications. Includes practical patterns and real-world examples.',
      publishDate: 'May 20, 2025',
      readTime: '9 min read',
      category: 'TypeScript',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80', // TypeScript (code, generics)
      slug: 'mastering-typescript-generics-scalable-code'
    },
    {
      id: 8,
      title: 'Deploying React Apps with Vite and Netlify',
      excerpt: 'A step-by-step guide to deploying blazing-fast React applications using Vite and Netlify, covering build optimization and continuous deployment.',
      publishDate: 'May 10, 2025',
      readTime: '7 min read',
      category: 'Deployment',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80', // Deployment (cloud, deploy)
      slug: 'deploying-react-apps-vite-netlify'
    },
    {
      id: 9,
      title: 'Integrating OpenAI APIs in Full-Stack Projects',
      excerpt: 'Learn how to integrate OpenAI APIs into your full-stack projects for advanced AI-powered features, including authentication, rate limiting, and best practices.',
      publishDate: 'April 28, 2025',
      readTime: '10 min read',
      category: 'AI',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // AI (AI/ML concept)
      slug: 'integrating-openai-apis-fullstack-projects'
    }
  ];

  const categories = ['All', 'React', 'Backend', 'Database', 'DevOps', 'JavaScript', 'API'];

  const handleReadMore = (slug: string) => {
    // This would navigate to the individual blog post
    console.log(`Navigate to blog post: ${slug}`);
    // In a real application, you would use React Router here
    // navigate(`/blog/${slug}`);
  };

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I share my insights, tutorials, and experiences in web development. 
            Stay updated with the latest trends and best practices in technology.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleReadMore(post.slug)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.publishDate}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-300 group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Blog Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">9+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Blog Posts</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">1K+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Total Reads</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8z"></path><polyline points="17 21 12 17 7 21"></polyline></svg>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">50+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Comments</div>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 17l4 4 4-4m-4-5v9"></path><path d="M20.39 18.39A9 9 0 1 0 21 12"></path></svg>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Weekly</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Publishing Schedule</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
