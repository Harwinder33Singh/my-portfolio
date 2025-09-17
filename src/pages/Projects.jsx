import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Projects.css';
import SeeMeLogo from '../assets/SeeMeLogo.png'
import MOTF from '../assets/interplanetary-MARS_on_the_field-martian_landscape-asu-1920-1.jpg'
import Career from '../assets/mqdefault.jpg'
import Epics from '../assets/epics.png'

// Projects data sourced from CV and resume
const projects = [
  {
    title: 'SeeMe AI Voice Assistant',
    description: 'Engineered iOS components for a voice-enabled AI assistant using OpenAI Whisper & WebRTC with sub-400ms latency.',
    image: SeeMeLogo,
    link: '/projects/seeme-voice'
  },
  {
    title: 'Mars on the Field',
    description: 'Built a multiplayer VR tracking system in Unity for a Mars exploration exhibit, ensuring accurate player synchronization.',
    image: MOTF,
    link: '/projects/mars-field'
  },
  {
    title: 'Career Xrcade',
    description: 'Led design of interactive XR career simulations with Unity Physics Engine for Verizon\'s Career Xrcade.',
    image: Career,
    link: 'https://meteor.ame.asu.edu/projects/careerXRcade/'
  },
  {
    title: 'AZGFD Voltage Monitoring Device',
    description: 'Designed an EPICS ASU device using Raspberry Pi to monitor hatchery voltage and alert managers to anomalies.',
    image: Epics,
    link: 'https://epics.engineering.asu.edu/2023/10/az-game-fish-azgfd-voltage-monitoring-device/'
  },
  {
    title: 'Med-GEMMA DR Classifier',
    description: 'Fine-tuned a medical vision LLM (Med-GEMMA) to classify diabetic retinopathy from retinal images.',
    image: null, // Placeholder for missing image
    link: '/projects/medgemma',
    isPlaceholder: true
  }
];

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.main
      className="projects-bento-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="projects-bento-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h1>

      <div className="projects-bento-grid">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to={proj.link}
              className="projects-bento-card"
            >
            <div className="projects-thumb">
              {proj.image ? (
                <img src={proj.image} alt={proj.title} />
              ) : (
                <div className="projects-placeholder">
                  <div className="placeholder-icon">🏥</div>
                  <span className="placeholder-text">Med AI</span>
                </div>
              )}
            </div>
            <div className="projects-meta">
              <h3 className="projects-title">{proj.title}</h3>
              <p className="projects-desc">{proj.description}</p>
              <span className="projects-cta">View details →</span>
            </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
