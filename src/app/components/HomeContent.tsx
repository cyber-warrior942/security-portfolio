'use client';

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaFileDownload, FaBriefcase, FaGraduationCap, FaAward, FaCertificate, FaTools } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function AnimatedSection({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.section>
  );
}

// Add these data arrays before the HomeContent function
const experiences = [
  {
    title: "SECURETACKLES",
    location: "Karachi, Pakistan",
    date: "AUG 2024 - Present",
    responsibilities: [
      "Conducted Penetration testing on Web App's, mobile apps & cloud environments for various clients.",
      "Handled all official work of engagements i.e., Reports, proposal and meetings etc."
    ]
  },
  {
    title: "APPRISE CYBER",
    location: "Karachi, Pakistan",
    date: "JUN 2024 - AUG 2024",
    responsibilities: [
      "Conducted Penetration testing on Web & Android Apps.",
      "Conducted API & Network Pentests.",
      "Participated in meeting with clients, prepared reports etc."
    ]
  },
  {
    title: "INTIGRITI",
    location: "Remote",
    date: "MAY 2023 - PRESENT",
    responsibilities: [
      "Reported Critical vulnerabilities to international companies earning bug bounties.",
      "Secured $$$$ (4-digit bounties)",
      "Proficient in Advance Web Application Security"
    ]
  }
];

const skills = [
  "Web App Penetration Testing",
  "Android App Penetration Testing",
  "API Penetration Testing",
  "Network Penetration Testing",
  "Cloud Penetration Testing",
  "Bug Bounty Hunting",
  "Security Research",
  "Java & Python Programming"
];

const certifications = [
  {
    name: "Certified AppSec Practitioner (CAP)",
    issuer: "SecOps Group",
    date: "2024"
  },
  {
    name: "API Penetration Testing",
    issuer: "APISEC UNIVERSITY",
    date: "2024"
  },
  {
    name: "ISO/IEC 27001 Information Security Associate",
    issuer: "SkillFront",
    date: "2023"
  }
];

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Header Section */}
      <header className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Usama Zahoor
            </h1>
            <h2 className="text-4xl font-bold text-white mb-6">
              Security Professional & Penetration Tester
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Specializing in Web Application Security, Network Security, and Bug Bounty Hunting
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <motion.a
                href="/contact"
                className="w-full sm:w-auto bg-[#1a2436] hover:bg-[#2a3446] text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-center group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2a3446] to-[#3a4456] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                href="/projects"
                className="w-full sm:w-auto bg-[#0d1525] hover:bg-[#1a2436] text-white px-8 py-3 rounded-lg border border-[#1a2436]/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:border-[#1a2436]/70 text-center group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a2436] to-[#2a3446] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              <motion.a
                href="/hall-of-fame"
                className="w-full sm:w-auto bg-[#0d1525] hover:bg-[#1a2436] text-white px-8 py-3 rounded-lg border border-[#1a2436]/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:border-[#1a2436]/70 text-center group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Recognitions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a2436] to-[#2a3446] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/usama-zahoor/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white bg-[#0077b5] hover:bg-[#0088cc] px-6 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-xl" />
                <span className="relative z-10">Connect on LinkedIn</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0088cc] to-[#0099dd] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-3xl font-bold text-white mb-12 text-center"
            variants={fadeInUp}
          >
            Professional Experience
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="bg-[#0d1525] rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#1a2436]/30 cursor-pointer transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{experience.location} | {experience.date}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-3">
                  {experience.responsibilities.map((resp, idx) => (
                    <li key={idx} className="hover:text-white transition-colors duration-200">{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 bg-[#0d1525]/50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-3xl font-bold text-white mb-12 text-center"
            variants={fadeInUp}
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(26, 36, 54, 0.8)'
                }}
                className="bg-[#0d1525] rounded-lg p-4 text-center border border-[#1a2436]/30 cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-gray-300 hover:text-white transition-colors duration-200">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            className="text-3xl font-bold text-white mb-12 text-center"
            variants={fadeInUp}
          >
            Certifications
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(26, 36, 54, 0.8)'
                }}
                className="bg-[#0d1525] rounded-lg p-6 text-center border border-[#1a2436]/30 cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-400 hover:text-gray-300 transition-colors duration-200">{cert.issuer}</p>
                <p className="text-gray-400 hover:text-gray-300 transition-colors duration-200">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Image Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <motion.div 
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/assets/profile.jpg"
              alt="Profile"
              fill
              className="object-contain transform hover:scale-105 transition-transform duration-700"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
} 