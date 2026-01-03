'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiJavascript,
  SiMysql,
  SiSpring,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiPostman,
  SiPython,
  SiCplusplus,
} from 'react-icons/si';
import { BiCode } from 'react-icons/bi';
import { FaJava } from 'react-icons/fa';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      title: 'Languages',
      icon: BiCode,
      skills: [
        { name: 'Java', icon: FaJava, color: 'text-orange-500' },
        { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
        { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-300' },
        { name: 'SQL', icon: SiMysql, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Backend',
      icon: SiSpring,
      skills: [
        { name: 'Spring Boot', icon: SiSpring, color: 'text-green-500' },
        { name: 'REST APIs', icon: BiCode, color: 'text-blue-400' },
        { name: 'Microservices', icon: BiCode, color: 'text-purple-400' },
        { name: 'Hibernate', icon: BiCode, color: 'text-yellow-600' },
        { name: 'JDBC', icon: BiCode, color: 'text-red-500' },
      ],
    },
    {
      title: 'Databases',
      icon: SiMysql,
      skills: [
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      ],
    },
    {
      title: 'Tools & Others',
      icon: SiGit,
      skills: [
        { name: 'Git', icon: SiGit, color: 'text-orange-600' },
        { name: 'GitHub', icon: SiGithub, color: 'text-white' },
        { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
        { name: 'Linux', icon: SiLinux, color: 'text-yellow-400' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 bg-black">
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
              My <span className="text-blue-500">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive set of technologies and tools I work with
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <category.icon className="text-2xl text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.3,
                      }}
                      className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all cursor-pointer group"
                    >
                      <skill.icon className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform`} />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-lg">
              Always learning and exploring new technologies 🚀
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
