'use client';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../../components/animations';

const projects = [
  {
    title: "Web Application Security Scanner",
    description: "Automated security scanner for detecting common web vulnerabilities including XSS, SQLi, and CSRF.",
    type: "Security Assessment",
    tags: ["Python", "Web Security", "Automation"],
    github: "#",
    demo: "#"
  },
  {
    title: "Network Traffic Analyzer",
    description: "Real-time network traffic analysis tool for detecting suspicious patterns and potential threats.",
    type: "Security Research",
    tags: ["Python", "Network Security", "Machine Learning"],
    github: "#",
    demo: "#"
  },
  {
    title: "Mobile App Security Framework",
    description: "Framework for analyzing Android app security, including static and dynamic analysis capabilities.",
    type: "Security Assessment",
    tags: ["Java", "Android", "Security Testing"],
    github: "#",
    demo: "#"
  },
  {
    title: "Security Vulnerability Database",
    description: "Comprehensive database of security vulnerabilities with detailed analysis and mitigation strategies.",
    type: "Security Research",
    tags: ["Research", "Documentation", "Best Practices"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type === filter);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-navy-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Security Projects & Research
        </motion.h1>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex gap-4 mb-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {['all', 'Security Assessment', 'Security Research'].map((type) => (
            <motion.button 
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-lg transition-all ${
                filter === type 
                ? 'bg-navy-800 text-white dark:bg-navy-600'
                : 'bg-white dark:bg-navy-800/50 text-navy-800 dark:text-black hover:bg-navy-100 dark:hover:bg-navy-700'              }`}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type === 'all' ? 'All Projects' : type}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-navy-600/30 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-navy-500/30"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h2>
                <p className="text-navy-200 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-navy-700/30 px-3 py-1 rounded-full text-navy-200 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a 
                    href={project.github} 
                    className="text-white hover:text-navy-300 transition-colors"
                  >
                    <FaGithub /> View Code
                  </motion.a>
                  <motion.a 
                    href={project.demo} 
                    className="text-white hover:text-navy-300 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 