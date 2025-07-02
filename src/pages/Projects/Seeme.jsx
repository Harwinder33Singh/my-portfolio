import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './SeeMe.css';

export default function SeeMe() {
  return (
    <main className="seeme-page page">
      {/* Hero Section */}
      <section className="seeme-hero">
        <h1>SeeMe AI Voice Assistant</h1>
        <p>
          A real-time, hands-free coaching experience powered by OpenAI Whisper & WebRTC, achieving
          sub-400ms end-to-end latency for seamless user interactions.
        </p>
      </section>

      {/* Overview */}
      <section className="seeme-section">
        <h2>Overview</h2>
        <p>
          SeeMe enables young high achievers to get instant, voice-driven feedback without typing.
          By integrating OpenAI’s Whisper for speech-to-text and WebRTC for live audio streaming,
          users can speak naturally and see coaching responses in under 400ms.
        </p>
      </section>

      {/* My Role */}
      <section className="seeme-section">
        <h2>My Role</h2>
        <ul>
          <li>Architected and implemented the iOS module for real-time audio capture & transmission.</li>
          <li>Created SwiftUI views and view models to display live transcripts and AI responses.</li>
          <li>Optimized AVAudioSession and WebRTC configuration for echo cancellation and low-latency.</li>
          <li>Integrated Framer Motion animations for smooth UI transitions between listening & speaking states.</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section className="seeme-section">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          {['Swift', 'SwiftUI', 'WebRTC', 'OpenAI Whisper', 'Combine', 'AVFoundation'].map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="seeme-section">
        <h2>Key Features</h2>
        <motion.ul
          className="feature-list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <li>Instant voice transcription displayed as live captions.</li>
          <li>AI-driven coaching responses overlaid in chat bubbles.</li>
          <li>Sub-400ms round-trip latency tuning for real-time feel.</li>
          <li>Automatic audio session handling with echo cancellation.</li>
          <li>Accessible UI states: listening, processing, and speaking.</li>
        </motion.ul>
      </section>

      {/* Challenges & Solutions */}
      <section className="seeme-section">
        <h2>Challenges & Solutions</h2>
        <ul>
          <li>
            <strong>Latency Optimization:</strong> Tuned WebRTC buffer and Whisper sampling to
            stay under 400ms total.
          </li>
          <li>
            <strong>Echo Cancellation:</strong> Configured AVAudioSession category and WebRTC
            echoControl settings for clear two-way audio.
          </li>
          <li>
            <strong>Seamless UX:</strong> Used Framer Motion to animate state changes, reducing
            perceived lag during network delays.
          </li>
        </ul>
      </section>

      {/* Back Link */}
      <section className="seeme-back">
        <Link to="/projects" className="btn-secondary">
          ← Back to Projects
        </Link>
      </section>
    </main>
  );
}
