'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'E-Commerce Backend API',
      description:
        'A comprehensive RESTful API built with Spring Boot for a modern e-commerce platform. Features include user authentication, product management, cart functionality, and order processing with JWT-based security.',
      tags: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'REST API'],
      github: '#',
      demo: '#',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Task Management System',
      description:
        'Microservices-based task management application with service discovery, API gateway, and distributed tracing. Implements CQRS pattern for efficient task handling and real-time updates.',
      tags: ['Java', 'Spring Cloud', 'PostgreSQL', 'Docker', 'Microservices'],
      github: '#',
      demo: '#',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'URL Shortener Service',
      description:
        'High-performance URL shortening service with analytics and tracking capabilities. Utilizes Redis for caching and MongoDB for data persistence, handling millions of redirects efficiently.',
      tags: ['Java', 'Redis', 'MongoDB', 'REST API', 'Analytics'],
      github: '#',
      demo: '#',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Chat Application Backend',
      description:
        'Real-time chat backend with WebSocket support for instant messaging. Features include group chats, private messages, online status tracking, and message persistence with RabbitMQ for message queuing.',
      tags: ['Java', 'Spring WebSocket', 'RabbitMQ', 'PostgreSQL', 'Real-time'],
      github: '#',
      demo: '#',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-blue-500">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing my backend development projects built with modern technologies
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative p-6">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <HiCode className="text-3xl text-blue-500" />
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt className="text-xl" />
                      </a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-gray-800 text-blue-400 rounded-full border border-gray-700 group-hover:border-blue-500/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <a
              href="https://github.com/AdditionalJatin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-blue-500 hover:text-white rounded-full font-medium transition-all transform hover:scale-105"
            >
              <FaGithub className="text-xl" />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
