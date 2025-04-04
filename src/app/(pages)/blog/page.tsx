'use client';
import { useState } from 'react';
import { FaCalendar, FaTags, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn, slideInFromLeft } from '../../components/animations';

const posts = [
  {
    title: "Understanding Cross-Site Scripting (XSS) Attacks",
    excerpt: "A comprehensive guide to XSS vulnerabilities, including prevention techniques and real-world examples.",
    date: "2024-02-15",
    category: "Web Security",
    tags: ["XSS", "Web Security", "OWASP Top 10"],
    slug: "understanding-xss-attacks"
  },
  {
    title: "Mobile App Security Best Practices",
    excerpt: "Essential security considerations and implementation guidelines for mobile application development.",
    date: "2024-02-10",
    category: "Mobile Security",
    tags: ["Mobile", "Android", "iOS", "Best Practices"],
    slug: "mobile-app-security-best-practices"
  },
  {
    title: "Cloud Security Architecture",
    excerpt: "Designing secure cloud infrastructure with focus on AWS security features and compliance.",
    date: "2024-02-05",
    category: "Cloud Security",
    tags: ["Cloud", "AWS", "Architecture"],
    slug: "cloud-security-architecture"
  },
  {
    title: "API Security Testing Guide",
    excerpt: "Methodologies and tools for comprehensive API security testing and vulnerability assessment.",
    date: "2024-01-30",
    category: "API Security",
    tags: ["API", "Testing", "Security"],
    slug: "api-security-testing-guide"
  }
];

const categories = ["All", "Web Security", "Mobile Security", "Cloud Security", "API Security"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-navy-800 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Security Blog & Insights
        </motion.h1>

        {/* Categories */}
        <motion.div 
          className="flex flex-wrap gap-4 mb-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedCategory === category
                  ? 'bg-navy-800 text-white dark:bg-navy-600'
                  : 'bg-white dark:bg-navy-800/50 text-navy-800 dark:text-black hover:bg-navy-100 dark:hover:bg-navy-700'
              }`}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.map((post, index) => (
            <motion.article 
              key={index} 
              className="bg-navy-600/30 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-navy-500/30"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-navy-700/30 px-3 py-1 rounded-full text-navy-200 text-sm">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-2 text-white">{post.title}</h2>
                <p className="text-navy-200 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-navy-300 text-sm">{post.date}</span>
                  <motion.button
                    className="text-white hover:text-navy-300 transition-colors inline-flex items-center gap-1"
                    whileHover={{ x: 5 }}
                  >
                    Read More <FaArrowRight className="text-sm" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 