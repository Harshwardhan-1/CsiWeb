import { motion } from "framer-motion";
import {  Mail, ShieldCheck } from "lucide-react";
import "./Members.css";

const team = [
  { name: "Dr. Rupali Bharti", role: "Faculty Coordinator", img: "/member1.jpg", faculty: true },
  { name: "Anushka Chouhan", role: "Student Chair", img: "/member2.jpg" },
  {name:"Harshwardhan Yadav",role:"Student Chair",img:"/member3.jpg"},
  { name: "Rahul Sharma", role: "Vice Chair", img: "/member3.jpg" },
  { name: "Priya Verma", role: "Secretary", img: "/member4.jpg" },
  { name: "Aman Gupta", role: "Treasurer", img: "/member5.jpg" },
  { name: "Sneha Patel", role: "Technical Lead", img: "/member6.jpg" },
  { name: "Karan Mehta", role: "Event Coordinator", img: "/member7.jpg" },
  { name: "Riya Jain", role: "Design Lead", img: "/member8.jpg" },
  { name: "Arjun Singh", role: "Web Developer", img: "/member9.jpg" },
  { name: "Neha Sharma", role: "Content Lead", img: "/member10.jpg" },
  { name: "Yash Patel", role: "Marketing Lead", img: "/member11.jpg" },
  { name: "Simran Kaur", role: "PR Head", img: "/member12.jpg" },
];

export default function Members() {
  return (
    <section className="members-section">
      <div className="members-bg-effects">
        <div className="glow-circle-top"></div>
      </div>

      <div className="csi-container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="section-header"
        >
          <span className="directory-tag">Directory_01</span>
          <h2 className="section-title">Core Committee</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="members-grid">
          {team.map((member, index) => (
            <motion.div 
              key={index} 
              className={`member-card ${member.faculty ? 'faculty-highlight' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="card-scanner"></div>
              
              <div className="member-img-container">
                <img src={member.img} alt={member.name} />
                {member.faculty && <div className="faculty-badge"><ShieldCheck size={14}/> Faculty</div>}
              </div>

              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>

              <div className="member-socials">
                {/* <a href="#" className="social-link">
                  <Linkedin size={18} className="social-icon" />
                </a> */}
                <a href="#" className="social-link">
                  <Mail size={18} className="social-icon" />
                </a>
              </div>

              <div className="card-corner tr"></div>
              <div className="card-corner bl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}