'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaServer, FaShieldAlt, FaCode, FaBug } from 'react-icons/fa';
import { fadeInUp, staggerContainer, scaleIn, slideInFromLeft, slideInFromRight } from '../../components/animations';

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

export default function About() {
  const expertise = [
    {
      icon: <FaShieldAlt className="text-4xl text-white" />,
      title: "Penetration Testing",
      description: "Comprehensive security assessments of web applications, mobile apps, and network infrastructure."
    },
    {
      icon: <FaServer className="text-4xl text-white" />,
      title: "Infrastructure Security",
      description: "Evaluating and securing cloud environments, networks, and server configurations."
    },
    {
      icon: <FaCode className="text-4xl text-white" />,
      title: "Secure Development",
      description: "Implementing security best practices in software development and code review."
    },
    {
      icon: <FaBug className="text-4xl text-white" />,
      title: "Bug Bounty Hunting",
      description: "Active participation in bug bounty programs with proven track record."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold mb-8 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h1>
          
          {/* Introduction */}
          <AnimatedSection className="mb-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p 
                variants={slideInFromLeft}
                className="text-gray-300 text-lg leading-relaxed mb-6"
              >
                I am a dedicated Security Professional with a passion for identifying and solving complex security challenges. 
                My journey in cybersecurity began during my university years and has evolved into a career focused on helping 
                organizations strengthen their security posture.
              </motion.p>
              <motion.p 
                variants={slideInFromRight}
                className="text-gray-300 text-lg leading-relaxed"
              >
                With expertise in penetration testing, vulnerability assessment, and security research, I work to identify 
                potential security risks before they can be exploited by malicious actors.
              </motion.p>
            </motion.div>
          </AnimatedSection>

          {/* Expertise */}
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white">Areas of Expertise</h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {expertise.map((item, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#0d1525] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all border border-[#1a2436]/30"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatedSection>

          {/* Professional Philosophy */}
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-6 text-white">Professional Philosophy</h2>
            <motion.div 
              className="bg-[#0d1525] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all border border-[#1a2436]/30"
              whileHover={{ scale: 1.02 }}
            >
              <motion.p 
                variants={fadeInUp}
                className="text-gray-300 mb-4"
              >
                I believe in a proactive approach to security, where identifying and addressing vulnerabilities 
                before they can be exploited is crucial. My work is guided by three core principles:
              </motion.p>
              <motion.ul 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="list-disc list-inside text-gray-300 space-y-2"
              >
                {[
                  "Thorough and methodical assessment of security risks",
                  "Clear communication of findings and recommendations",
                  "Continuous learning and staying updated with security trends"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={fadeInUp}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection className="mt-12">
            <motion.div 
              className="bg-[#0d1525] rounded-lg p-8 text-center shadow-xl border border-[#1a2436]/30"
              whileHover={{ scale: 1.02 }}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-2xl font-bold mb-4 text-white"
              >
                Let's Work Together
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-gray-300 mb-6"
              >
                Looking for a security professional to help secure your systems? Let's discuss how I can help.
              </motion.p>
              <motion.a
                href="/contact"
                className="inline-block bg-[#1a2436] hover:bg-[#2a3446] text-white font-medium py-2 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
} 