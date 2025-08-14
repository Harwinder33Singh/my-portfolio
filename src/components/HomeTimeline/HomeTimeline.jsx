import React from 'react';
import './HomeTimeline.css';

// Timeline steps data

const educationData = [
    {
      period: 'Aug 2021 – May 2025',
      role: 'B.S. Computer Science',
      company: 'Arizona State University',
      details: [
        'Cumulative GPA: 4.0/4.0 — Dean’s List all semesters',
        'Undergraduate Scholarship (Academic Excellence Award)',
        'Relevant Coursework: AI, Machine Learning, Data Structures & Algorithms, Operating Systems'
      ]
    }
  ];
  
const timelineData = [
    {
        period: 'Present',
        role: 'Portfolio & Med-GEMMA Research',
        company: 'Personal Projects'
      },
    {
        period: '2024–2025',
        role: 'Software Developer (iOS)',
        company: 'SeeMe LLC'
    },
    {
        period: '2023–2025',
        role: 'XR Developer',
        company: 'Meteor Studio (Prof. LiKamWa)',
    },
    {
        period: '2022–2024',
        role: 'Undergraduate Teaching Assistant',
        company: 'Arizona State University'
    }
];

export default function HomeTimeline() {
    return (
      <>
     
        {/* Journey Section */}
        <div className="timeline-container">
          <aside className="timeline-sidebar">
            <h2>My Journey</h2>
          </aside>
          <section className="timeline-content">
            {timelineData.map((item, idx) => (
              <motion.div
                className="timeline-item"
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="timeline-marker" />
                <div className="timeline-card">
                  <span className="timeline-period">{item.period}</span>
                  <h3 className="timeline-role">{item.role}</h3>
                  <h4 className="timeline-company">{item.company}</h4>
                </div>
              </motion.div>
            ))}
          </section>
        </div>

         {/* Education Section */}
         <div className="timeline-container">
          <aside className="timeline-sidebar">
            <h2>Education</h2>
          </aside>
          <section className="timeline-content">
            {educationData.map((item, idx) => (
              <motion.div
                className="timeline-item"
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="timeline-marker" />
                <div className="timeline-card">
                  <span className="timeline-period">{item.period}</span>
                  <h3 className="timeline-role">{item.role}</h3>
                  <h4 className="timeline-company">{item.company}</h4>
                  <ul className="timeline-details">
                    {item.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

<div className="timeline-cta">
              <p>🚀 Ready to build together?</p>
              <a href="/contact" className="btn-primary">Let’s Chat</a>
            </div>
          </section>
        </div>
      </>
    );
  }