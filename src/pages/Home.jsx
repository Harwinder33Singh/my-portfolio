import React, { useState, useEffect } from 'react';
import HomeTimeline from '../components/HomeTimeline/HomeTimeline';
import './Home.css';

export default function Home() {
  const fullText = "Hi, I’m Harwinder Singh";
  const [text, setText] = useState("");

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, ++idx));
      if (idx === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home-page">
      {/* Summary Section */}
      <section className="home-summary">
        <h1>{text}</h1>
        <p>
          I’m a software engineer specializing in iOS, XR, and AI-driven applications. 
          Graduated with honors from Arizona State University (4.0 GPA), I’ve built 
          real-time voice assistants at SeeMe LLC and multiplayer XR experiences at Meteor Studio.
        </p>
        <a href="/my-portfolio/projects" className="btn-primary">View Projects</a>
      </section>

      {/* Timeline Section */}
      <HomeTimeline />
    </main>
  );
}
