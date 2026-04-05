import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, ShieldCheck, Zap, Users, Code } from "lucide-react";
import "./About.css";

// Add your multiple team images here
const teamImages = [
  { id: 1, src: "/workshop.png", label: "Workshops" },
  { id: 2, src: "/hack.png", label: "Hackathons" },
  { id: 3, src: "/about_csi.png", label: "CSI Team" },
];

export default function About() {
  const [index, setIndex] = useState(0);    

  // Auto-shift logic
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % teamImages.length);
    }, 4000); // Shifts every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about-section">
      <div className="system-grid-overlay"></div>
      <div className="blob-1"></div>
      <div className="blob-2"></div>

      <div className="csi-container">
        <div className="about-grid">
          
          {/* Left Side: Text Content (Remains the same) */}
          <motion.div 
            className="about-glass-card"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="status-indicator">
              <span className="dot"></span> SYSTEM_ACTIVE / VERSION_2.0
            </div>

            <div className="content-wrapper">
              <div className="title-group">
                <Target className="section-icon" />
                <h2>Our Vision</h2>
              </div>
              <p className="vision-text">
                To be the leading community for computer professionals and students at SVVV, 
                fostering innovation and excellence in the field of Information Technology.
              </p>

              <div className="mission-terminal">
                <div className="terminal-header">
                  <div className="dots"><span></span><span></span><span></span></div>
                  <span className="terminal-title">mission_logs.exe</span>
                </div>
                <ul className="mission-items">
                  <li><Code size={18} /> <span>Facilitate knowledge sharing...</span></li>
                  <li><Users size={18} /> <span>Networking with industry experts...</span></li>
                  <li><ShieldCheck size={18} /> <span>National level hackathons...</span></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Shifting Multi-Card Stack */}
          <div className="about-image-frame">
            <div className="image-accent-border"></div>
            
            <div className="card-stack-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={teamImages[index].id}
                  initial={{ x: 100, opacity: 0, rotate: 10 }}
                  animate={{ x: 0, opacity: 1, rotate: 0 }}
                  exit={{ x: -100, opacity: 0, rotate: -10 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="image-container"
                >
                  <img src={teamImages[index].src} alt={teamImages[index].label} />
                  <div className="image-overlay-gradient"></div>
                  
                  {/* Local Data Tag for each image */}
                  <div className="image-data-tag">
                    {teamImages[index].label}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative Background Cards (Static) */}
              <div className="bg-card card-1"></div>
              <div className="bg-card card-2"></div>
            </div>

            <motion.div 
              className="tech-badge"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Zap fill="#38bdf8" size={20} />
              <div>
                <strong>Top Tier</strong>
                <small>SVVV Chapter</small>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}