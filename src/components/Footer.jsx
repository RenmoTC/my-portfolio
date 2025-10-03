import { motion } from 'framer-motion';
import { personalInfo } from '../assets/data';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="py-8 text-center bg-gray-900/50 backdrop-blur-sm border-t border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <FiGithub className="w-6 h-6" />
          </a>
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            title="LinkedIn"
          >
            <FiLinkedin className="w-6 h-6" />
          </a>
        </div>
        
        <p className="text-gray-500 text-sm">
          © {currentYear} All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer; 