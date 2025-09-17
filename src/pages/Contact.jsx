import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
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

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'singh.harwinderr03@gmail.com',
      link: 'mailto:singh.harwinderr03@gmail.com',
      description: 'Best way to reach me'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '(541) 704-8049',
      link: 'tel:+15417048049',
      description: 'Available for calls'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'harwinder--singh',
      link: 'https://linkedin.com/in/harwinder--singh',
      description: 'Professional network'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'Harwinder33Singh',
      link: 'https://github.com/Harwinder33Singh',
      description: 'View my code'
    }
  ];

  return (
    <motion.main
      className="contact-bento-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.section
        className="contact-hero"
        variants={cardVariants}
      >
        <div className="contact-hero-content">
          <motion.div
            className="availability-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            🟢 Available for opportunities
          </motion.div>
          <h1 className="contact-title">Let's Connect</h1>
          <p className="contact-subtitle">
            I'm actively seeking full-time Software Engineering roles starting May 2025.
            Let's discuss how I can contribute to your team!
          </p>
          <div className="contact-location">
            <FaMapMarkerAlt />
            <span>Tempe, Arizona • Open to relocation</span>
          </div>
        </div>
      </motion.section>

      {/* Contact Methods Grid */}
      <div className="contact-grid">
        {contactMethods.map((method, idx) => (
          <motion.a
            key={idx}
            href={method.link}
            target={method.link.startsWith('http') ? '_blank' : '_self'}
            rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
            className="contact-card"
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="contact-card-icon">
              {method.icon}
            </div>
            <div className="contact-card-content">
              <h3 className="contact-card-title">{method.title}</h3>
              <p className="contact-card-value">{method.value}</p>
              <span className="contact-card-description">{method.description}</span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Call to Action */}
      <motion.section
        className="contact-cta"
        variants={cardVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="contact-cta-content">
          <h2>Ready to Work Together?</h2>
          <p>
            I'm passionate about building innovative solutions and contributing to impactful projects.
            Whether you have a specific role in mind or want to explore possibilities, I'd love to hear from you.
          </p>
          <div className="contact-cta-buttons">
            <motion.a
              href="mailto:singh.harwinderr03@gmail.com"
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Send Email
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/harwinder--singh"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Connect on LinkedIn
            </motion.a>
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
}