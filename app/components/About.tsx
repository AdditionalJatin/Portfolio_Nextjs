'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiCode, HiSparkles } from 'react-icons/hi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-[#111111]">
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
              About <span className="text-blue-500">Me</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Placeholder */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-gray-800 rounded-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    <HiSparkles className="text-blue-500" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Java Backend Developer & Student
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  I am a 3rd year B.Tech student from Ajay Kumar Garg Engineering College. 
                  I have a strong command in C++, Java, and Python, with a passion for building 
                  robust and scalable backend solutions.
                </p>
              </div>

              {/* Education */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <HiAcademicCap className="text-3xl text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Education</h4>
                    <p className="text-gray-300 font-medium">
                      B.Tech in Computer Science
                    </p>
                    <p className="text-gray-400">
                      Ajay Kumar Garg Engineering College, Ghaziabad
                    </p>
                    <p className="text-blue-500 text-sm mt-1">3rd Year</p>
                  </div>
                </div>
              </motion.div>

              {/* Expertise */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <HiCode className="text-3xl text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Expertise</h4>
                    <p className="text-gray-400 leading-relaxed">
                      Specialized in Java backend development with strong skills in 
                      Spring Boot, REST APIs, Microservices, and database management. 
                      Proficient in building scalable and efficient server-side applications.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  variants={itemVariants}
                  className="text-center p-4 bg-gray-800/50 rounded-lg"
                >
                  <p className="text-3xl font-bold text-blue-500">3+</p>
                  <p className="text-sm text-gray-400">Languages</p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="text-center p-4 bg-gray-800/50 rounded-lg"
                >
                  <p className="text-3xl font-bold text-blue-500">10+</p>
                  <p className="text-sm text-gray-400">Technologies</p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="text-center p-4 bg-gray-800/50 rounded-lg"
                >
                  <p className="text-3xl font-bold text-blue-500">4+</p>
                  <p className="text-sm text-gray-400">Projects</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
