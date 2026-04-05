import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, Activity } from "lucide-react";
import "./Event.css"; // Note: single dot, no 'styles'

const featuredEvents = [
  { 
    id: 1, 
    title: "KAUSHAL 2026", 
    tag: "Flagship Mega-Event",
    desc: "Our annual technical extravaganza featuring hackathons, gaming, and tech talks.",
    img: "/kaushal_banner.jpg",
    color: "#38bdf8"
  },
  { 
    id: 2, 
    title: "CODE-A-THON", 
    tag: "Competitive Programming",
    desc: "24-hour intense coding challenge to solve real-world industry problems.",
    img: "/codeathon.jpg",
    color: "#8b5cf6"
  },
  { 
    id: 3, 
    title: "TECH-XPO", 
    tag: "Project Exhibition",
    desc: "Showcasing the most innovative AI/ML and Web projects from SVVV students.",
    img: "/techxpo.jpg",
    color: "#10b981"
  }
];

const workshops = [
  { title: "React & Three.js", date: "Weekly", status: "Active" },
  { title: "Cyber Security 101", date: "Monthly", status: "Upcoming" },
  { title: "Cloud Computing", date: "Quarterly", status: "Past" },
];

export default function Events() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % featuredEvents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="events-section">
      <div className="system-grid-bg">
        
      </div>
           <motion.div 
          className="section-header flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <span className="directory-tag">LOG_04: EVENTS</span>
          <h2 className="section-title">Club Activities</h2>
          <div className="title-underline mx-auto"></div>
        </motion.div>
      <div className="csi-container">
   

        <div className="events-main-grid">
          
          {/* Left: Shifting Big Featured Cards */}
          <div className="featured-card-stack ">
            <AnimatePresence mode="wait">
              <motion.div
                key={featuredEvents[index].id}
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="big-event-card"
                style={{ '--accent': featuredEvents[index].color } as any}
              >
                <div className="event-image-area ">
                  <img src={featuredEvents[index].img} alt="Event" />
                  <div className="event-overlay"></div>
                  <div className="event-category">{featuredEvents[index].tag}</div>
                </div>
                
                <div className="event-details">
                  <h3>{featuredEvents[index].title}</h3>
                  <p>{featuredEvents[index].desc}</p>
                  <button className="event-btn">
                    Register Now <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Visual Stack Decoration */}
            <div className="stack-layer layer-1"></div>
            <div className="stack-layer layer-2"></div>
          </div>

          {/* Right: Systematic Workshop Feed */}
          <div className="workshop-feed">
            <div className="feed-header">
              <Activity size={18} className="text-sky-400" />
              <span>LIVE_WORKSHOP_FEED</span>
            </div>
            
            <div className="feed-items">
              {workshops.map((w, i) => (
                <motion.div 
                  key={i} 
                  className="feed-item"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="feed-dot"></div>
                  <div className="feed-info">
                    <h4>{w.title}</h4>
                    <div className="feed-meta">
                      <span><Calendar size={12} /> {w.date}</span>
                      <span className={`status-pill ${w.status.toLowerCase()}`}>{w.status}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}