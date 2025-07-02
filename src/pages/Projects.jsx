import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Projects.css';
import SeeMe from './Projects/Seeme.jsx';

// Projects data sourced from CV and resume
const projects = [
  {
    title: 'SeeMe AI Voice Assistant',
    description: 'Engineered iOS components for a voice-enabled AI assistant using OpenAI Whisper & WebRTC with sub-400ms latency.',
    image: '/assets/seeme-voice.png',
    link: '/projects/seeme-voice'
  },
  {
    title: 'Mars on the Field',
    description: 'Built a multiplayer VR tracking system in Unity for a Mars exploration exhibit, ensuring accurate player synchronization.',
    image: '/assets/mars-field.png',
    link: '/projects/mars-field'
  },
  {
    title: 'Career Xrcade',
    description: 'Led design of interactive XR career simulations with Unity Physics Engine for Verizon’s Career Xrcade.',
    image: '/assets/career-xrcade.png',
    link: 'https://meteor.ame.asu.edu/projects/careerXRcade/'
  },
  {
    title: 'AZGFD Voltage Monitoring Device',
    description: 'Designed an EPICS ASU device using Raspberry Pi to monitor hatchery voltage and alert managers to anomalies.',
    image: '/assets/azgfd-voltage.png',
    link: '/projects/voltage-monitor'
  },
  {
    title: 'Med-GEMMA DR Classifier',
    description: 'Fine-tuned a medical vision LLM (Med-GEMMA) to classify diabetic retinopathy from retinal images.',
    image: '/assets/medgemma.png',
    link: '/projects/medgemma'
  }
];
// Create a motion-enabled Link component
const MotionLink = motion(Link);

export default function Projects() {
  return (
    <main className="projects-page page">
      <h1>Featured Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <MotionLink
            to={proj.link}
            className="project-card"
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="card-image">
              <img src={proj.image} alt={proj.title} />
            </div>
            <div className="card-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          </MotionLink>
        ))}
      </div>
    </main>
  );
}
