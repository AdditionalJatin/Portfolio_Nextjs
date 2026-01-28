'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { HiMail, HiUser, HiPencilAlt } from 'react-icons/hi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/AdditionalJatin', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/jatingarg', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/jatingarg', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:jatingarg@example.com', label: 'Email' },
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
    <section id="contact" className="py-20 bg-black">
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
              Get In <span className="text-blue-500">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <HiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <HiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <HiPencilAlt className="absolute left-4 top-4 text-gray-400 text-xl" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <FaEnvelope className="text-xl text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a
                        href="mailto:jatingarg@example.com"
                        className="text-white hover:text-blue-500 transition-colors"
                      >
                        jatingarg@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <FaMapMarkerAlt className="text-xl text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white">Ghaziabad, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="p-4 bg-gray-800 hover:bg-blue-500/20 rounded-lg text-gray-400 hover:text-blue-500 transition-all border border-gray-700 hover:border-blue-500"
                      aria-label={social.label}
                    >
                      <social.icon className="text-2xl" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-xl border border-blue-500/30">
                <h3 className="text-xl font-bold mb-3">Open to Opportunities</h3>
                <p className="text-gray-400">
                  I&apos;m currently looking for internship opportunities and freelance projects. 
                  Let&apos;s build something amazing together!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
