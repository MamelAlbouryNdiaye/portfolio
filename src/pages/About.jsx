import "./About.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="about-page">
            <div className="about-container">

                {/* PROFILE CARD */}
                <motion.div
                    className="about-profile"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="profile-wrapper">
                        <img
                            src="/profile.jpg"
                            alt="Mamel Alboury Ndiaye"
                            className="profile-image"
                        />
                    </div>

                    <h2>Mamel Alboury Ndiaye</h2>
                    <p className="role-badge">Software Engineer • MERN • Cloud-Oriented </p>
                    {/* LANGUAGE SKILLS */}
                    <div className="language-section">
                        <h3>Languages</h3>

                        {[
                            { name: "English", level: 90 },
                            { name: "French", level: 100 },
                            { name: "Wolof", level: 100 },
                            { name: "Pular", level: 100 }
                        ].map((lang, i) => (
                            <div className="language-bar" key={i}>
                                <div className="language-info">
                                    <span>{lang.name}</span>
                                    <span>{lang.level}%</span>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-fill"
                                        style={{ width: `${lang.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}

                        
                    </div>

                </motion.div>

                {/* CONTENT */}
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h1>
                        About <span>Me</span>
                    </h1>

                    <p>
                        I hold a <strong>Master’s degree (M2) in iWOCS</strong>
                        (Web Engineering, Communicating Objects and Complex Systems)
                        from the <strong>University of Le Havre, France</strong>.
                        My academic journey focused on distributed systems,
                        backend architecture, and complex software engineering.
                    </p>

                    <p>
                        Throughout my studies, I developed strong expertise in
                        <strong> Java</strong>, <strong>React</strong>, <strong>Node.js</strong>,
                        networking, and system design. I enjoy building scalable,
                        maintainable, and production-ready applications.
                    </p>

                    <p>
                        I work confidently with <strong>SQL and NoSQL databases</strong>
                        (PostgreSQL, MySQL, MongoDB) and focus on performance,
                        data modeling, and system scalability.
                    </p>

                    {/* TIMELINE */}
                    <div className="timeline">
                        {[
                            {
                                year: "2018 – 2023",
                                title: "Master iWOCS – University of Le Havre",
                                desc: "Advanced software engineering, distributed systems, and network architectures."
                            },
                            {
                                year: "2023 – 2024",
                                title: "Project Manager & Web Developer",
                                desc: "Led digital transformation initiatives and contributed to public sector platforms."
                            },
                            {
                                year: "Today",
                                title: "Software Engineer (MERN)",
                                desc: "Designing scalable full-stack applications with modern cloud-ready architecture."
                            }
                        ].map((item, i) => (
                            <motion.div
                                className="timeline-item"
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + i * 0.2 }}
                            >
                                <span>{item.year}</span>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* BACK */}
                    <div className="back-card">
                        <Link to="/" className="back-link">
                            🎴 Back to Deck
                        </Link>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
