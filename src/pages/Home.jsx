import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo, projects, publications } from '../assets/data';
import EducationTimeline from '../components/EducationTimeline';

import { FaFileArrowDown } from "react-icons/fa6";
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

import Marquee from 'react-fast-marquee';
import ProjectCard from '../components/ProjectCard';
import ExperienceTimeline from '../components/ExperienceTimeline';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const SkillCard = ({ skill }) => {
  return (
    <div className="mx-4 bg-white rounded-lg p-4 shadow-lg border border-gray-200 hover:border-blue-400 transition-all duration-300 skill-card-glow w-[150px] h-[150px] flex flex-col items-center justify-center">
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-16 h-16 object-contain"
      />
      <p className="mt-2 text-gray-800 text-center font-medium">{skill.name}</p>
    </div>
  );
};

const SkillCategory = ({ title, skills, direction = "left", speed = 50 }) => {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-4 text-gray-200 text-center">{title}</h3>
      <Marquee
        gradient={false}
        direction={direction}
        speed={speed}
        className="py-4"
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </Marquee>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-2 tracking-wide"
            {...fadeIn}
          >
            Hi, I’m
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            {...fadeIn}
          >
            {personalInfo.name}
          </motion.h1>
          <motion.div
            className="text-xl md:text-2xl text-blue-400 mb-8 h-8"
            {...fadeIn}
          >
            <TypeAnimation
              sequence={[
                ...personalInfo.taglines.flatMap(tagline => [tagline, 2000])
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block text-gray-100"
            />
          </motion.div>
          <motion.p
            className="max-w-2xl mx-auto text-gray-300 mb-8"
            {...fadeIn}
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-6"
            {...fadeIn}
          >
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg font-medium"
            >
              <FaFileArrowDown className="w-6 h-6" />
              Download Resume
            </a>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href={`mailto:${personalInfo.socialLinks.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-auto w-auto border-2 rounded-full p-2 text-gray-200 hover:bg-white hover:text-cyan-600 transition-colors"
                title="Email"
              >
                <FiMail className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-auto w-auto border-2 rounded-full p-2 text-gray-200 hover:bg-white hover:text-gray-600 transition-colors"
                title="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-auto w-auto border-2 rounded-full p-2 text-gray-200 hover:bg-white hover:text-blue-500 transition-colors"
                title="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="space-y-8">
            <SkillCategory
              title="Programming Languages"
              skills={personalInfo.skills.langs}
              direction="left"
              speed={40}
            />
            <SkillCategory
              title="Technologies & Frameworks"
              skills={personalInfo.skills.technologies}
              direction="right"
              speed={50}
            />
            <SkillCategory
              title="Tools & Platforms"
              skills={personalInfo.skills.tools}
              direction="left"
              speed={45}
            />
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Experience</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <ExperienceTimeline />
          </div>
        </div>
      </section>

      {/* Education Section (replaces Blog) */}
      <section id="education" className="py-16">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <EducationTimeline />
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <motion.div
          className="max-w-6xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-16">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Publications</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <article key={idx} className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{pub.title}</h3>
                <p className="text-gray-300">{pub.venue}</p>
                <p className="text-gray-400 text-sm">{pub.details}</p>
                <div className="text-blue-400 text-sm mt-2">{pub.date}</div>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Me Section (above Get in Touch) */}
      <section id="about" className="py-16">
        <motion.div
          className="max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Who am I?</h3>
              <p className="text-gray-300">I’m Prathamesh Walawalkar, a Data Science Master’s student at the University of Guelph, passionate about building AI dashboards, reinforcement learning agents, and quirky automation projects. When I’m not coding, I’m probably tinkering with microcontrollers or fixing something that everyone else thought was “dead.”</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What languages do I speak?</h3>
              <p className="text-gray-300">I’m a proud polyglot 🌍 — English, Hindi, Marathi, and Japanese.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">What are my hobbies?</h3>
              <p className="text-gray-300">Messing around with microcontrollers, diving into the world of semiconductors, and repairing electronics just for the joy of making things work again.</p>
            </div>
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-semibold">Favourite football team?</h3>
              <span className="text-gray-300 flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg" alt="Manchester United" className="h-6 w-6"/>
                Manchester United
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a
            href={`mailto:${personalInfo.socialLinks.email}`}
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </section>
    </div>
  );
} 