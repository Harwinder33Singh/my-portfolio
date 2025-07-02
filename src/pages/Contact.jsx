import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-header">
        <h1>Contact Me</h1>
        <p>
          If you'd like to get in touch, feel free to email me or connect via LinkedIn/GitHub.
        </p>
        <div className="contact-info">
          <p>
            <FaEnvelope />{' '}
            <a href="mailto:singh.harwinderr03@gmail.com">
            singh[dot]harwinderr03[at]gmail[dot]com
            </a>
          </p>
          <p>
            <FaLinkedin />{' '}
            <a
              href="https://www.linkedin.com/in/harwinder--singh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <FaGithub />{' '}
            <a
              href="https://github.com/Harwinder33Singh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
