import { useEffect, useState } from "react";
import "./HomePage.css";
import About from "./About";
import Members from "./Members";
import Events from "./Events";
import {Mail } from "lucide-react";
const images = [
  "/csi1.jpg",
  "/csi2.jpg",
  "/csi3.png"
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Increased to 3s for better readability

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 1. HEADER WITH FUNCTIONAL LINKS */}
      <header className="csi-header">
        <div className="csi-container">
          <div className="csi-logo">
            <img src="/csi_logo.png" alt="CSI Logo" />
            <span>CSI SVVV</span>
          </div>

          <nav className="csi-nav">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#members">Members</a>
            <a href="#events">Events</a>
            <a href="#footer">Contact</a>
          </nav>
        </div>
      </header>

      {/* 2. HERO SLIDER */}
      <section className="hero-slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`slide ${index === current ? "active" : ""}`}
            alt="CSI Background"
          />
        ))}

        <div className="hero-overlay">
          <h1>Computer Society of India</h1>
          <p>Empowering Students Through Technology</p>
          <a href="#events">
            <button className="btn-fill">Explore Events</button>
          </a>
        </div>
      </section>

      {/* 3. NEW SECTIONS INTEGRATED WITH IDs */}
      
      <div id="about">
        <About />
      </div>

      <section className="csi-info-section">
        <div className="csi-info-container">
          <div className="csi-box">
            <h2>About CSI</h2>
            <p>
              Computer Society of India (CSI) is the first and largest body of
              computer professionals in India, founded in 1965.
            </p>
          </div>
          <div className="csi-box">
            <h2>What We Do</h2>
            <p>
              Spreading knowledge through 488 student branches, providing 
              opportunities to tech enthusiasts nationwide.
            </p>
          </div>
          <div className="csi-box">
            <h2>CSI Awards</h2>
            <p>
              Recognizing excellence in ICT and motivating individuals 
              to innovate within the Indian IT field.
            </p>
          </div>
        </div>
      </section>

      <div id="members">
        <Members />
      </div>

      <div id="events">
        <Events />
      </div>

      {/* 4. FOOTER */}
    // ... inside your footer
<div className="footer-bottom-container">
  <div className="designers-box">
    <div className="designer-item">
      <img src="/anushka.jpg" alt="Anushka" className="footer-avatar" />
      <div className="designer-text">
        <span className="name">Anushka Chouhan</span>
        <div className="links">
          {/* <a href="https://linkedin.com/in/anushka"><Linkedin size={14} /></a> */}
          <a href="mailto:anushka@example.com"><Mail size={14} /></a>
        </div>
      </div>
    </div>

    <div className="divider"></div>
    <div className="designer-item">
      <img src="/harsh.jpg" alt="Harshwardhan" className="footer-avatar" />
      <div className="designer-text">
        <span className="name">Harshwardhan Yadav</span>
        <div className="links">
          {/* <a href="https://linkedin.com/in/"><Linkedin size={14} /></a> */}
          <a href="mailto:harshwardhan@example.com"><Mail size={14} /></a>
        </div>
      </div>
    </div>
  </div>

  <p className="copyright-text">
    © {new Date().getFullYear()} CSI SVVV | All Rights Reserved
  </p>
</div>
    </>
  );
}