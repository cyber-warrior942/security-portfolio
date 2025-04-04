'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const hallOfFameEntries = [
  {
    title: "Appreciation From INE",
    issuer: "INE",
    date: "Nov 2024",
    description: "Recognition for identifying and reporting security vulnerabilities.",
    link: null
  },
  {
    title: "Recognition From WHO",
    issuer: "World Health Organization",
    date: "Aug 2024",
    description: "Listed in WHO's ethical hacker list for responsible vulnerability disclosure.",
    link: "https://www.who.int/about/cybersecurity/vulnerability-hall-of-fame/ethical-hacker-list"
  },
  {
    title: "Recognition From Proton",
    issuer: "Proton",
    date: "Jun 2024",
    description: "Acknowledged for security contributions and vulnerability reporting.",
    link: null
  },
  {
    title: "Hall Of Fame - Unilever",
    issuer: "Unilever",
    date: "Jul 2023",
    description: "Recognition for responsible security vulnerability disclosure.",
    link: "https://bugcrowd.com/unilever-vdp/hall-of-fame"
  },
  {
    title: "Hall Of Fame - APNIC",
    issuer: "APNIC",
    date: "Mar 2023",
    description: "Acknowledged in APNIC's vulnerability reporting program.",
    link: "https://www.apnic.net/community/security/apnic-vulnerability-reporting-program/"
  }
];

export default function HallOfFame() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recognitions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition and acknowledgments from various organizations for identifying and responsibly disclosing security vulnerabilities.
          </p>
        </motion.div>

        {/* Hall of Fame Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hallOfFameEntries.map((entry, index) => (
            <motion.div
              key={index}
              className="bg-[#0d1525] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#1a2436]/30"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaTrophy className="text-2xl text-yellow-500" />
                  <h3 className="text-xl font-semibold text-white">{entry.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{entry.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <p className="text-gray-400 text-sm">{entry.issuer}</p>
                    <p className="text-gray-500 text-sm">{entry.date}</p>
                  </div>
                  {entry.link && (
                    <a 
                      href={entry.link}
                      className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Proof <FaExternalLinkAlt className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div 
          className="mt-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-gray-300">
            These acknowledgments represent a commitment to responsible disclosure and contributing to a more secure digital environment.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 