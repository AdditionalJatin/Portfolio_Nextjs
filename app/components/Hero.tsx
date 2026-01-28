'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { HiDownload, HiCode, HiMail } from 'react-icons/hi';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/AdditionalJatin', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/jatingarg', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/jatingarg', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:jatingarg@example.com', label: 'Email' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-500 font-medium mb-4"
          >
            Hi, I&apos;m
          </motion.p>

          {/* Name with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent"
          >
            Jatin Garg
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl text-gray-400 mb-6"
          >
            <span className="text-white font-semibold">Java Backend Developer</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Building robust backend solutions with passion and precision
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105"
            >
              <HiCode className="text-xl" />
              View Projects
            </button>
            <a
              href="#"
              download
              className="flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-blue-600 hover:bg-blue-600/10 text-blue-500 rounded-full font-medium transition-all transform hover:scale-105"
            >
              <HiDownload className="text-xl" />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-gray-600 hover:bg-gray-800 text-white rounded-full font-medium transition-all transform hover:scale-105"
            >
              <HiMail className="text-xl" />
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="text-2xl" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
