import { motion } from "framer-motion";
import { memo, useEffect } from "react";
import Motto from "../components/Motto.jsx";
import "../styleSheet/About.css";

// ✅ Keep these outside the component for performance

const skills = [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", link: "https://dev.java/learn/" },
    { name: "JavaFX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", link: "https://openjfx.io/openjfx-docs/" },
    { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", link: "https://spring.io/projects/spring-boot" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", link: "https://react.dev/" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", link: "https://www.typescriptlang.org/docs/" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", link: "https://docs.python.org/3/" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", link: "https://nodejs.org/en/docs/" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", link: "https://www.postgresql.org/docs/" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", link: "https://www.mongodb.com/docs/" },
    { name: "Neo4j", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg", link: "https://neo4j.com/docs/" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", link: "https://docs.docker.com/" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", link: "https://kubernetes.io/docs/home/" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", link: "https://redis.io/docs/" },
    { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", link: "https://kafka.apache.org/documentation/" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", link: "https://git-scm.com/doc" },
    { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg", link: "https://developer.android.com/docs" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", link: "https://en.cppreference.com/w/" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", link: "https://en.cppreference.com/w/c" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF", link: "https://stripe.com/docs" },
    { name: "Prometheus", icon: "https://cdn.simpleicons.org/prometheus/E6522C", link: "https://prometheus.io/docs/introduction/overview/" },
    {
        name: "Zipkin",
        icon: "https://www.vectorlogo.zone/logos/zipkinio/zipkinio-icon.svg",
        link: "https://zipkin.io/"
    }
];

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
                            key={skill.name}
                            href={skill.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                scale: 1.08,
                                backgroundColor: "rgba(255, 193, 7, 0.1)", // Subtle gold tint
                                boxShadow: "0 0 20px rgba(255,193,7,0.4)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="skill-badge d-flex align-items-center gap-2 text-decoration-none"
                        >
                            <img
                                src={skill.icon}
                                alt={`${skill.name} icon`}
                                style={{ width: "24px", height: "24px", objectFit: "contain" }}
                            />
                            <span className="skill-name">{skill.name}</span>
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
