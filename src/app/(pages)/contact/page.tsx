'use client';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn, slideInFromLeft, slideInFromRight } from '../../components/animations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 py-12">
        <motion.div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Get in Touch</h1>
          <p className="text-navy-200 text-lg">Have a question or want to work together?</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-navy-600/30 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-navy-500/30"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-navy-300" />
                <span className="text-navy-200">Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-navy-300" />
                <span className="text-navy-200">usamazahoor942@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-navy-300" />
                <a href="https://www.linkedin.com/in/usama-zahoor/" className="text-navy-200 hover:text-white transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Available For</h3>
              <ul className="space-y-2 text-navy-200">
                <li>• Security Consulting</li>
                <li>• Penetration Testing</li>
                <li>• Security Training</li>
                <li>• Code Review</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="bg-navy-600/30 backdrop-blur-sm rounded-lg shadow-lg p-8 border border-navy-500/30"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-navy-200 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-navy-700/30 border border-navy-500/30 text-white placeholder-navy-400 focus:outline-none focus:border-navy-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-navy-200 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-navy-700/30 border border-navy-500/30 text-white placeholder-navy-400 focus:outline-none focus:border-navy-400"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-navy-200 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-lg bg-navy-700/30 border border-navy-500/30 text-white placeholder-navy-400 focus:outline-none focus:border-navy-400"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-navy-200 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg bg-navy-700/30 border border-navy-500/30 text-white placeholder-navy-400 focus:outline-none focus:border-navy-400"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-navy-700 hover:bg-navy-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 