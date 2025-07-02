import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './MarsField.css';

export default function MarsField() {
  return (
    <main className="mars-page page">
      {/* Hero Section */}
      <section className="mars-hero">
        <h1>Mars on the Field</h1>
        <p>
          A multiplayer tracking system for a VR museum based on Mars exploration, enhancing player tracking accuracy in large-scale virtual environments.
        </p>
      </section>

      {/* Overview */}
      <section className="mars-section">
        <h2>Overview</h2>
        <p>
          Mars on the Field is a multiplayer VR tracking demo developed for a Mars exploration exhibit. It showcases real-time collaboration and synchronized interactions within a vast virtual Martian landscape.
        </p>
      </section>

      {/* My Role */}
      <section className="mars-section">
        <h2>My Role</h2>
        <ul>
          <li>
            Utilized Unity and C# to build a multiplayer tracking system for a VR museum based on Mars exploration, enhancing player tracking accuracy in large-scale virtual environments.
          </li>
          <li>
            Worked extensively with Unity Netcode for GameObjects to handle state synchronization, ensuring that player actions and game object states remained consistent across clients, optimizing gameplay experience, and reducing latency in real-time interactions.
          </li>
          <li>
            Conducted testing and performance evaluations, focusing on memory management, GPU load optimization, and network bandwidth efficiency to improve multiplayer scalability.
          </li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="mars-section">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          {[
            'Unity',
            'C#',
            'Netcode with gameobjects',
            'Oculus SDK',
            'XR Interaction Toolkit',
            'Shader Graph'
          ].map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="mars-section">
        <h2>Key Features</h2>
        <motion.ul
          className="feature-list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <li>Real-time avatar position and rotation synchronization across clients.</li>
          <li>Dynamic wrist UI panels displaying health, oxygen levels, and mission stats.</li>
          <li>Gesture-driven object manipulation and data inspection.</li>
          <li>Adaptive network smoothing to handle fluctuating frame rates.</li>
          <li>Procedural terrain generation and shader-based Martian surface rendering.</li>
        </motion.ul>
      </section>

      {/* Challenges & Solutions */}
      <section className="mars-section">
        <h2>Challenges & Solutions</h2>
        <ul>
          <li>
            <strong>Network Latency:</strong> Implemented client-side interpolation and lag
            compensation to ensure smooth avatar movement under variable ping.
          </li>
          <li>
            <strong>Hand Tracking Drift:</strong> Calibrated gesture thresholds and applied
            dead zones to reduce false-positive interactions.
          </li>
          <li>
            <strong>Rendering Performance:</strong> Optimized shaders and LOD settings for
            stable 90+ FPS on standalone VR hardware.
          </li>
        </ul>
      </section>

      {/* Back Link */}
      <section className="mars-back">
        <Link to="/projects" className="btn-secondary">
          ← Back to Projects
        </Link>
      </section>
    </main>
  );
}
