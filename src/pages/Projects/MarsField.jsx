import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaVrCardboard, FaUsers, FaRocket, FaGamepad } from 'react-icons/fa';
import { SiUnity, SiOculus } from 'react-icons/si';
import './MarsField.css';

export default function MarsField() {
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
    { name: 'Unity', icon: <SiUnity />, color: '#000000' },
    { name: 'C#', icon: '🔷', color: '#239120' },
    { name: 'Netcode', icon: '🌐', color: '#FF6B6B' },
    { name: 'Oculus SDK', icon: <SiOculus />, color: '#1C1E20' },
    { name: 'XR Toolkit', icon: '🥽', color: '#4ECDC4' },
    { name: 'Shader Graph', icon: '🎨', color: '#FF9500' }
  ];

  const keyMetrics = [
    { label: 'Frame Rate', value: '90+ FPS', icon: <FaRocket />, color: 'var(--gradient-1)' },
    { label: 'Players', value: 'Multiplayer', icon: <FaUsers />, color: 'var(--gradient-2)' },
    { label: 'Platform', value: 'VR Headsets', icon: <FaVrCardboard />, color: 'var(--gradient-3)' }
  ];

  return (
    <motion.main
      className="mars-bento-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Back Navigation */}
      <motion.div variants={cardVariants}>
        <Link to="/projects" className="mars-back-link">
          <FaArrowLeft />
          <span>Back to Projects</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.section className="mars-hero-card" variants={cardVariants}>
        <div className="mars-hero-content">
          <div className="mars-status-badge">
            🚀 Research Project - 2023-2025
          </div>
          <h1 className="mars-hero-title">Mars on the Field</h1>
          <p className="mars-hero-subtitle">
            A multiplayer VR tracking system for a Mars exploration exhibit, enhancing
            player tracking accuracy in large-scale virtual environments.
          </p>
          <div className="mars-hero-icon">
            <FaVrCardboard />
          </div>
        </div>
      </motion.section>

      {/* Key Metrics Grid */}
      <div className="mars-metrics-grid">
        {keyMetrics.map((metric, idx) => (
          <motion.div
            key={idx}
            className="mars-metric-card"
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
      <motion.section className="mars-overview-card" variants={cardVariants}>
        <h2 className="mars-section-title">Project Overview</h2>
        <p className="mars-section-content">
          Mars on the Field is a multiplayer VR tracking demo developed for a Mars exploration exhibit.
          It showcases real-time collaboration and synchronized interactions within a vast virtual
          Martian landscape, designed for museum visitors to experience Mars exploration together.
        </p>
      </motion.section>

      {/* Tech Stack */}
      <motion.section className="mars-tech-card" variants={cardVariants}>
        <h2 className="mars-section-title">Tech Stack</h2>
        <div className="mars-tech-grid">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              className="mars-tech-item"
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
      <motion.section className="mars-role-card" variants={cardVariants}>
        <h2 className="mars-section-title">My Contributions</h2>
        <ul className="mars-role-list">
          <li>Utilized Unity and C# to build a multiplayer tracking system enhancing player tracking accuracy in large-scale virtual environments</li>
          <li>Worked extensively with Unity Netcode for GameObjects to handle state synchronization, ensuring consistent player actions across clients</li>
          <li>Conducted testing and performance evaluations, focusing on memory management and GPU load optimization</li>
          <li>Implemented network bandwidth efficiency improvements to enhance multiplayer scalability</li>
        </ul>
      </motion.section>

      {/* Key Features */}
      <motion.section className="mars-features-card" variants={cardVariants}>
        <h2 className="mars-section-title">Key Features</h2>
        <div className="mars-features-grid">
          <div className="feature-item">
            <div className="feature-icon">👥</div>
            <h3>Real-time Sync</h3>
            <p>Avatar position and rotation synchronization across clients</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <h3>Dynamic UI</h3>
            <p>Wrist UI panels displaying health, oxygen levels, and mission stats</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🤏</div>
            <h3>Gesture Control</h3>
            <p>Gesture-driven object manipulation and data inspection</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🌐</div>
            <h3>Network Smoothing</h3>
            <p>Adaptive network smoothing to handle fluctuating frame rates</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🗻</div>
            <h3>Terrain Generation</h3>
            <p>Procedural terrain generation and shader-based Martian surface rendering</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🎮</div>
            <h3>VR Optimization</h3>
            <p>Optimized for standalone VR hardware with stable 90+ FPS</p>
          </div>
        </div>
      </motion.section>

      {/* Challenges & Solutions */}
      <motion.section className="mars-challenges-card" variants={cardVariants}>
        <h2 className="mars-section-title">Challenges & Solutions</h2>
        <div className="mars-challenges-grid">
          <div className="challenge-item">
            <h3>Network Latency</h3>
            <p>Implemented client-side interpolation and lag compensation to ensure smooth avatar movement under variable ping conditions</p>
          </div>
          <div className="challenge-item">
            <h3>Hand Tracking Drift</h3>
            <p>Calibrated gesture thresholds and applied dead zones to reduce false-positive interactions in VR environments</p>
          </div>
          <div className="challenge-item">
            <h3>Rendering Performance</h3>
            <p>Optimized shaders and LOD settings for stable 90+ FPS on standalone VR hardware with complex Martian landscapes</p>
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
}