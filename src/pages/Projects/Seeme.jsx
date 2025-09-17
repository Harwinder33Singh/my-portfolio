import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaMicrophone, FaClock, FaUsers, FaRocket } from 'react-icons/fa';
import { SiSwift, SiWebrtc, SiOpenai } from 'react-icons/si';
import './SeeMe.css';

export default function SeeMe() {
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

  const techStack = [
    { name: 'Swift', icon: <SiSwift />, color: '#FA7343' },
    { name: 'SwiftUI', icon: '🎨', color: '#007AFF' },
    { name: 'WebRTC', icon: <SiWebrtc />, color: '#333333' },
    { name: 'OpenAI Whisper', icon: <SiOpenai />, color: '#10A37F' },
    { name: 'Combine', icon: '🔄', color: '#FF6B6B' },
    { name: 'AVFoundation', icon: '🎵', color: '#4ECDC4' }
  ];

  const keyMetrics = [
    { label: 'Latency', value: '<400ms', icon: <FaClock />, color: 'var(--gradient-1)' },
    { label: 'Accuracy', value: '70%', icon: <FaRocket />, color: 'var(--gradient-2)' },
    { label: 'Users', value: '1,000+', icon: <FaUsers />, color: 'var(--gradient-3)' }
  ];

  return (
    <motion.main
      className="seeme-bento-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Back Navigation */}
      <motion.div variants={cardVariants}>
        <Link to="/projects" className="seeme-back-link">
          <FaArrowLeft />
          <span>Back to Projects</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.section className="seeme-hero-card" variants={cardVariants}>
        <div className="seeme-hero-content">
          <div className="seeme-status-badge">
            🟢 Active Development - 2024-2025
          </div>
          <h1 className="seeme-hero-title">SeeMe AI Voice Assistant</h1>
          <p className="seeme-hero-subtitle">
            A real-time, hands-free coaching experience powered by OpenAI Whisper & WebRTC,
            achieving sub-400ms end-to-end latency for seamless user interactions.
          </p>
          <div className="seeme-hero-icon">
            <FaMicrophone />
          </div>
        </div>
      </motion.section>

      {/* Key Metrics Grid */}
      <div className="seeme-metrics-grid">
        {keyMetrics.map((metric, idx) => (
          <motion.div
            key={idx}
            className="seeme-metric-card"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="metric-icon" style={{ background: metric.color }}>
              {metric.icon}
            </div>
            <div className="metric-content">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Overview Card */}
      <motion.section className="seeme-overview-card" variants={cardVariants}>
        <h2 className="seeme-section-title">Project Overview</h2>
        <p className="seeme-section-content">
          SeeMe enables young high achievers to get instant, voice-driven feedback without typing.
          By integrating OpenAI's Whisper for speech-to-text and WebRTC for live audio streaming,
          users can speak naturally and see coaching responses in under 400ms.
        </p>
      </motion.section>

      {/* Tech Stack */}
      <motion.section className="seeme-tech-card" variants={cardVariants}>
        <h2 className="seeme-section-title">Tech Stack</h2>
        <div className="seeme-tech-grid">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              className="seeme-tech-item"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* My Role Card */}
      <motion.section className="seeme-role-card" variants={cardVariants}>
        <h2 className="seeme-section-title">My Contributions</h2>
        <ul className="seeme-role-list">
          <li>Architected and implemented the iOS module for real-time audio capture & transmission</li>
          <li>Created SwiftUI views and view models to display live transcripts and AI responses</li>
          <li>Optimized AVAudioSession and WebRTC configuration for echo cancellation and low-latency</li>
          <li>Integrated smooth UI transitions between listening & speaking states</li>
        </ul>
      </motion.section>

      {/* Key Features */}
      <motion.section className="seeme-features-card" variants={cardVariants}>
        <h2 className="seeme-section-title">Key Features</h2>
        <div className="seeme-features-grid">
          <div className="feature-item">
            <div className="feature-icon">🎙️</div>
            <h3>Live Transcription</h3>
            <p>Instant voice transcription displayed as live captions</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🤖</div>
            <h3>AI Coaching</h3>
            <p>AI-driven coaching responses overlaid in chat bubbles</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3>Real-time Processing</h3>
            <p>Sub-400ms round-trip latency for real-time feel</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔊</div>
            <h3>Echo Cancellation</h3>
            <p>Automatic audio session handling with echo cancellation</p>
          </div>
        </div>
      </motion.section>

      {/* Challenges & Solutions */}
      <motion.section className="seeme-challenges-card" variants={cardVariants}>
        <h2 className="seeme-section-title">Challenges & Solutions</h2>
        <div className="seeme-challenges-grid">
          <div className="challenge-item">
            <h3>Latency Optimization</h3>
            <p>Tuned WebRTC buffer and Whisper sampling to stay under 400ms total</p>
          </div>
          <div className="challenge-item">
            <h3>Echo Cancellation</h3>
            <p>Configured AVAudioSession category and WebRTC echoControl settings for clear two-way audio</p>
          </div>
          <div className="challenge-item">
            <h3>Seamless UX</h3>
            <p>Used smooth animations to reduce perceived lag during network delays</p>
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
}