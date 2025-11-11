import { motion } from "framer-motion";
import { memo, useEffect } from "react";
import Motto from "../components/Motto.jsx";
import "../styleSheet/About.css";

// ✅ Keep these outside the component for performance

const skills = [
    "Spring Boot", "HTML", "React.js", "CSS", "JavaScript",
    "C", "C++", "Java", "Node.js", "Python", "Android Development",
    "JavaFX", "Git", "SQL", "NoSQL",
];

const skillLinks = {
    "Spring Boot": "https://spring.io/projects/spring-boot",
    "HTML": "https://developer.mozilla.org/en-US/docs/Web/HTML",
    "React.js": "https://react.dev/",
    "CSS": "https://developer.mozilla.org/en-US/docs/Web/CSS",
    "JavaScript": "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "C": "https://en.wikipedia.org/wiki/C_(programming_language)",
    "C++": "https://isocpp.org/",
    "Java": "https://www.java.com/",
    "Node.js": "https://nodejs.org/",
    "Python": "https://www.python.org/",
    "Android Development": "https://developer.android.com/",
    "JavaFX": "https://openjfx.io/",
    "Git": "https://git-scm.com/",
    "SQL": "https://dev.mysql.com/doc/",
    "NoSQL": "https://www.mongodb.com/nosql-explained",
};

// 🧠 Experiences Section
const experiences = [
    {
        title: "Web Developer",
        iconBg: "#383E56",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Built responsive and interactive websites using HTML, CSS, JavaScript, and React.js.",
            "Collaborated with designers to implement modern, user-friendly UI/UX layouts.",
            "Optimized front-end performance using lazy loading and efficient code practices.",
            "Integrated REST APIs with proper error handling and validation on the client side.",
        ],
    },
    {
        title: "JavaFX Developer",
        iconBg: "#383E56",
        date: "Mar 2024 - Apr 2025",
        points: [
            "Developed cross-platform desktop applications using JavaFX and Scene Builder.",
            "Implemented dynamic UIs with FXML and CSS for consistent design across platforms.",
            "Integrated MySQL databases via JDBC for robust data persistence.",
            "Optimized app responsiveness and performance through detailed debugging.",
        ],
    },
    {
        title: "Spring Boot Developer",
        iconBg: "#383E56",
        date: "May 2025 - Present",
        points: [
            "Built RESTful APIs and microservices using Spring Boot and Spring MVC.",
            "Implemented JWT-based authentication and Spring Security for user protection.",
            "Utilized JPA/Hibernate with PostgreSQL for seamless ORM operations.",
            "Wrote JUnit and Mockito tests ensuring reliability and scalability.",
        ],
    },
    {
        title: "Java Full Stack Developer",
        iconBg: "#383E56",
        date: "May 2025 - Present",
        points: [
            "Developing full-stack solutions using Java (Spring Boot) and React.js.",
            "Designing scalable APIs integrated with responsive front-end components.",
            "Managing state with Redux and implementing complex form validations.",
            "Automating CI/CD pipelines using GitHub Actions and Docker.",
        ],
    },
];

const hobbies = [
    {
        title: "💻 Coding & Innovation",
        description:
            "Building full-stack projects with Spring Boot, React, and JavaFX excites me — I love turning complex logic into clean, elegant solutions.",
    },
    {
        title: "📖 Bhagavad Gita & Philosophy",
        description:
            "Studying timeless wisdom from the Bhagavad Gita keeps me grounded. It inspires balance, clarity, and purpose in both code and life.",
    },
    {
        title: "🏏 Cricket & Team Spirit",
        description:
            "Cricket teaches me discipline, strategy, and teamwork — just like development, it’s all about timing, focus, and collaboration.",
    },
    {
        title: "🎮 Gaming & Strategy",
        description:
            "Strategic games challenge my analytical mind and decision-making — they mirror debugging: every problem has a hidden pattern.",
    },
    {
        title: "🎧 Music & Calm Focus",
        description:
            "Listening to instrumental and lo-fi tracks helps me focus while coding. It’s my way of syncing logic with creativity.",
    },
    {
        title: "🌍 Exploration & Learning",
        description:
            "Whether it's exploring new frameworks or new places, I’m driven by curiosity — every experience adds a new perspective to my craft.",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function About() {
    useEffect(() => {
        document.title = "About Me - Manish Kumar | Portfolio";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <section
            id="about"
            className="d-flex align-items-center text-center text-white position-relative"
            style={{
                minHeight: "100vh",
                padding: "80px 0",
                overflowX: "hidden",
                overflowY: "auto",
            }}
        >
            <div className="container position-relative" style={{ zIndex: 2 }}>
                {/* Header */}
                <motion.h2
                    className="fw-bold mb-4 display-5 text-warning"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    About Me
                </motion.h2>

                {/* Intro */}
                <motion.p
                    className="lead mx-auto mb-5 text-light"
                    style={{ maxWidth: "900px", lineHeight: "1.8" }}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    Hello there! 👋 I'm <strong>Manish Kumar</strong> — a passionate
                    full-stack developer dedicated to transforming ideas into scalable,
                    interactive digital experiences.
                </motion.p>

                {/* Journey */}
                <motion.div
                    className="mx-auto mb-5"
                    style={{ maxWidth: "850px" }}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <h3 className="fw-semibold mb-4 text-warning" style={{ fontSize: "1.8rem" }}>
                        My Journey 🚀
                    </h3>
                    <p className="text-light" style={{ lineHeight: "1.8" }}>
                        My journey began with curiosity — a fascination for how software
                        shapes everyday life. From writing my first “Hello World” to
                        deploying full-stack systems, every project fuels my drive to
                        innovate, learn, and deliver meaningful digital experiences.
                    </p>
                </motion.div>

                {/* Professional Experience */}
                <motion.h3
                    className="fw-semibold mb-4 text-warning"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    Professional Experience 💼
                </motion.h3>

                <div className="row justify-content-center g-4 mb-5">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="col-md-6 col-lg-5"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <div className="experience-card p-4 text-start text-light border rounded-4 shadow-sm h-100">
                                <h5 className="text-warning mb-1">{exp.title}</h5>
                                {/*<p className="mb-1"><strong>{exp.company_name}</strong></p>*/}
                                <small className="text-secondary d-block mb-2">{exp.date}</small>
                                <ul className="mb-0 ps-3" style={{ lineHeight: "1.6" }}>
                                    {exp.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Skills */}
                <motion.h3
                    className="fw-semibold mb-4 text-warning"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    Technical Arsenal ⚡
                </motion.h3>

                <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
                    {skills.map((skill) => (
                        <motion.a
                            key={skill}
                            href={skillLinks[skill]}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                scale: 1.1,
                                color: "#000",
                                boxShadow: "0 0 15px rgba(255,193,7,0.6)",
                            }}
                            whileTap={{ scale: 1.05 }}
                            className="skill-badge text-decoration-none"
                        >
                            {skill}
                        </motion.a>
                    ))}
                </div>

                {/* Beyond Code */}
                <motion.div
                    className="mx-auto text-light mb-5"
                    style={{ maxWidth: "850px" }}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <h3 className="fw-semibold mb-4 text-warning" style={{ fontSize: "1.8rem" }}>
                        Beyond the Code 💡
                    </h3>
                    <p style={{ lineHeight: "1.8" }}>
                        I see technology as a bridge to creativity and impact. My goal is to
                        craft experiences that merge innovation with purpose — code that
                        serves people, not just pixels.
                    </p>
                </motion.div>

                {/* Hobbies */}
                <motion.h3
                    className="fw-semibold mb-4 text-warning"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    Fun Facts & Hobbies 🎯
                </motion.h3>

                <div className="row justify-content-center g-4 mb-5">
                    {hobbies.map((hobby, index) => (
                        <motion.div
                            key={index}
                            className="col-md-5 col-lg-4"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <div className="hobby-card p-4 text-start text-light rounded-4 shadow-sm h-100">
                                <h5 className="text-warning mb-2">{hobby.title}</h5>
                                <p style={{ lineHeight: "1.6" }}>{hobby.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Motto />
            </div>

            {/* Background layer */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ zIndex: 1 }}
            ></div>
        </section>
    );
}

export default memo(About);
