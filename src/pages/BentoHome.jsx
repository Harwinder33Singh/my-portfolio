import { motion } from 'framer-motion';
import {
  FaReact, FaPython, FaGithub, FaLinkedin,
  FaJava, FaAws, FaDocker,
  FaTrophy, FaStar, FaMedal, FaGitAlt
} from 'react-icons/fa';
import {
  SiSwift, SiUnity, SiSpringboot, SiKubernetes,
  SiTypescript, SiCplusplus, SiWebrtc,
  SiNodedotjs, SiPostgresql, SiMongodb,
  SiRedis, SiGraphql
} from 'react-icons/si';
import './BentoHome.css';

const BentoHome = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className="bento-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bento-grid">

        {/* Hero Introduction - Large Card */}
        <motion.div
          className="bento-card bento-hero"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="card-content">
            <div className="hero-badge">Available for opportunities</div>
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Harwinder</span>
            </h1>
            <p className="hero-subtitle">
              Software Engineer with 4.0 GPA specializing in SaaS, cloud solutions,
              and real-time systems across AI, iOS, and XR domains
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">4.0</div>
                <div className="stat-label">GPA</div>
              </div>
              <div className="stat">
                <div className="stat-value">3+</div>
                <div className="stat-label">Years Exp</div>
              </div>
              <div className="stat">
                <div className="stat-value">May 2025</div>
                <div className="stat-label">Graduating</div>
              </div>
            </div>
          </div>
        </motion.div>


        {/* Skills Grid - Programming Languages */}
        <motion.div
          className="bento-card bento-skills"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="card-title">Languages & Frameworks</h3>
          <div className="skills-grid">
            {[
              { icon: <FaJava />, name: 'Java', color: '#007396' },
              { icon: <SiSwift />, name: 'Swift', color: '#FA7343' },
              { icon: <FaPython />, name: 'Python', color: '#3776AB' },
              { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
              { icon: <SiCplusplus />, name: 'C++', color: '#00599C' },
              { icon: <FaReact />, name: 'React', color: '#61DAFB' },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                className="skill-item"
                style={{ color: skill.color }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.2 }}
              >
                {skill.icon}
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Project - SeeMe */}
        <motion.div
          className="bento-card bento-featured"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="featured-badge">Current Project</div>
          <h3 className="featured-title">SeeMe AI Voice Assistant</h3>
          <p className="featured-desc">
            Engineered iOS components with OpenAI Whisper API achieving 70% faster transcription
            and &lt;400ms WebRTC latency for 1,000+ concurrent sessions
          </p>
          <div className="featured-tech">
            <span className="tech-tag">Swift</span>
            <span className="tech-tag">WebRTC</span>
            <span className="tech-tag">AVFoundation</span>
            <span className="tech-tag">OpenAI</span>
          </div>
          <motion.button
            className="featured-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            View Details →
          </motion.button>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="bento-card bento-achievements"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="card-title">Key Achievements</h3>
          <div className="achievement-item">
            <FaTrophy className="achievement-icon" />
            <div className="achievement-text">
              <div className="achievement-title">4.0 GPA</div>
              <div className="achievement-desc">Computer Science, ASU</div>
            </div>
          </div>
          <div className="achievement-item">
            <FaStar className="achievement-icon" />
            <div className="achievement-text">
              <div className="achievement-title">70% Performance Boost</div>
              <div className="achievement-desc">Real-time transcription</div>
            </div>
          </div>
          <div className="achievement-item">
            <FaMedal className="achievement-icon" />
            <div className="achievement-text">
              <div className="achievement-title">1000+ Sessions</div>
              <div className="achievement-desc">Concurrent handling</div>
            </div>
          </div>
        </motion.div>

        {/* Extended Tech Stack */}
        <motion.div
          className="bento-card bento-techstack"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="card-title">Full Stack Technologies</h3>
          <div className="techstack-grid">
            {[
              { icon: <SiNodedotjs />, name: 'Node.js', color: '#339933' },
              { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
              { icon: <SiUnity />, name: 'Unity', color: '#000000' },
              { icon: <SiKubernetes />, name: 'Kubernetes', color: '#326CE5' },
              { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
              { icon: <SiRedis />, name: 'Redis', color: '#DC382D' },
              { icon: <SiGraphql />, name: 'GraphQL', color: '#E10098' },
              { icon: <FaGitAlt />, name: 'Git', color: '#F05032' },
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                className="tech-item"
                style={{ color: tech.color }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.2 }}
              >
                {tech.icon}
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="bento-card bento-experience"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="card-title">Experience</h3>
          <div className="timeline">
            {[
              { year: '2024-25', role: 'Software Engineer (iOS)', company: 'SeeMe' },
              { year: '2023-25', role: 'XR Developer', company: 'Meteor Lab ASU' },
              { year: '2022-24', role: 'Teaching Assistant', company: 'ASU CSE' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <div className="timeline-role">{item.role}</div>
                  <div className="timeline-company">{item.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cloud & DevOps */}
        <motion.div
          className="bento-card bento-specializations"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="card-title">Cloud & DevOps</h3>
          <div className="spec-grid">
            <motion.div
              className="spec-item"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <FaAws className="spec-icon" />
              <span>AWS Cloud</span>
            </motion.div>
            <motion.div
              className="spec-item"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <FaDocker className="spec-icon" />
              <span>Docker</span>
            </motion.div>
            <motion.div
              className="spec-item"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <SiSpringboot className="spec-icon" />
              <span>Spring Boot</span>
            </motion.div>
            <motion.div
              className="spec-item"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <SiWebrtc className="spec-icon" />
              <span>WebRTC</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="bento-card bento-social"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="card-title">Connect</h3>
          <div className="social-links">
            <motion.a
              href="https://github.com/Harwinder33Singh"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/harwinder--singh"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bento-card bento-cta"
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="cta-content">
            <h3>Open to New Opportunities</h3>
            <p>Seeking full-time SWE roles starting May 2025</p>
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.location.href = 'mailto:singh.harwinderr03@gmail.com'}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default BentoHome;