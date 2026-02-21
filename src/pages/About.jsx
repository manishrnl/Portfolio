import {motion} from "framer-motion";
import {memo, useEffect} from "react";
import Motto from "../components/Motto.jsx";
import "../styleSheet/About.css";

const skills = [
    {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        link: "https://dev.java/learn/"
    },
    {
        name: "JavaFX",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        link: "https://openjfx.io/openjfx-docs/"
    },
    {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        link: "https://spring.io/projects/spring-boot"
    },
    {
        name: "React.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        link: "https://react.dev/"
    },
    {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        link: "https://www.typescriptlang.org/docs/"
    },
    {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },
    {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        link: "https://docs.python.org/3/"
    },
    {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        link: "https://nodejs.org/en/docs/"
    },
    {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        link: "https://www.postgresql.org/docs/"
    },
    {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original-wordmark.svg",
        link: "https://dev.mysql.com/doc/"
    },
    {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        link: "https://www.mongodb.com/docs/"
    },
    {
        name: "Neo4j",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neo4j/neo4j-original.svg",
        link: "https://neo4j.com/docs/"
    },
    {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        link: "https://docs.docker.com/"
    },
    {
        name: "Kubernetes",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        link: "https://kubernetes.io/docs/home/"
    },
    {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        link: "https://redis.io/docs/"
    },
    {
        name: "Kafka",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
        link: "https://kafka.apache.org/documentation/"
    },
    {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        link: "https://git-scm.com/doc"
    },
    {
        name: "Android",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        link: "https://developer.android.com/docs"
    },
    {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        link: "https://en.cppreference.com/w/"
    },
    {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        link: "https://en.cppreference.com/w/c"
    },
    {
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    {
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
    },
    {
        name: "Stripe",
        icon: "https://cdn.simpleicons.org/stripe/635BFF",
        link: "https://stripe.com/docs"
    },
    {
        name: "Zipkin",
        icon: "https://www.vectorlogo.zone/logos/zipkinio/zipkinio-icon.svg",
        link: "https://zipkin.io/"
    }
];

const experiences = [
    {
        title: "Software Development Engineer (Microservices)",
        iconBg: "#383E56",
        date: "Jan 2026 - Present",
        points: [
            "Architecting a high-scale LinkedIn clone using Java, Spring Boot, and Microservices architecture ",
            "Optimized connection query performance by 40% using Cypher queries in Neo4j compared to traditional SQL ",
            "Achieved 99.9% service uptime across 5 microservices via self-healing Kubernetes clusters ",
            "Leveraging Kafka for asynchronous messaging and AWS CI/CD for automated deployment pipelines ",
        ],
    },
    {
        title: "Spring Boot & AI Developer",
        iconBg: "#383E56",
        date: "Nov 2025 - Jan 2026",
        points: [
            "Engineered a full-stack booking engine featuring an AI-driven pricing model to simulate market fluctuations",
            "Developed a pricing algorithm processing 1,000+ data points per second, reducing manual overhead by 30% ",
            "Implemented secure authentication via Spring Security (JWT) and integrated Stripe API for payments ",
            "Completed intensive certification in production-grade backend development, including Spring AI (RAG/LLM) ",
        ],
    },
    {
        title: "Java Systems Developer",
        iconBg: "#383E56",
        date: "June 2025 - Sept 2025",
        points: [
            "Created a centralized University Management System handling 5,000+ records with zero lag ",
            "Improved data retrieval speed by 25% through custom SQL indexing and JDBC connectivity ",
            "Built an advanced financial calculator handling nested expressions (10 levels deep) with <10ms response time ",
            "Utilized Stacks and HashSets for complex expression parsing and real-time currency conversion via APIs ",
        ],
    },
];

const hobbies = [
    {
        title: "💻 Scalable Engineering",
        description: "I'm passionate about architecting distributed systems. Whether it's optimizing Neo4j graph queries or deploying Kubernetes clusters, I love building software that scales",
    },
    {
        title: "🤖 AI & Automation",
        description: "I enjoy exploring the intersection of AI and backend logic, such as integrating LLMs with Spring AI to automate complex consumer-facing tasks",
    },
    {
        title: "📖 Philosophy & Perspective",
        description: "Studying timeless wisdom like the Bhagavad Gita helps me maintain clarity and purpose, keeping me grounded while I navigate the fast-paced world of technology.",
    },
    {
        title: "🏏 Strategy & Teamwork",
        description: "Playing chess , cricket sharpens my ability to strategize and collaborate—skills that are just as vital in a high-pressure development sprint as they are on the field.",
    },
    {
        title: "🌍 Continuous Learning",
        description: "From mastering Spring Boot 3 to exploring cloud infrastructure, I am driven by a constant curiosity to expand my technical horizon",
    },
];
const fadeUp = {
    hidden: {opacity: 0, y: 40},
    show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}},
};

function About() {
    useEffect(() => {
        document.title = "About Me - Manish Kumar | Portfolio";
        window.scrollTo({top: 0, behavior: "smooth"});
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
            <div className="container position-relative" style={{zIndex: 2}}>
                {/* Header */}
                <motion.h2
                    className="fw-bold mb-4 display-5 text-warning"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                >
                    About Me
                </motion.h2>

                {/* Intro */}
                <motion.p
                    className="lead mx-auto mb-5 text-light"
                    style={{maxWidth: "900px", lineHeight: "1.8"}}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                >
                    Hello there! 👋 I'm <strong>Manish Kumar</strong> — a Software Development
                    Engineer aspirant
                    specializing in <strong>scalable Microservices</strong> and <strong>AI-driven
                    backend systems</strong>.
                </motion.p>

                {/* Journey */}
                <motion.div
                    className="mx-auto mb-5"
                    style={{maxWidth: "850px"}}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                >
                    <h3 className="fw-semibold mb-4 text-warning" style={{fontSize: "1.8rem"}}>
                        My Journey 🚀
                    </h3>
                    <p className="text-light" style={{lineHeight: "1.8"}}>
                        Currently pursuing my B.Tech (C.S.E) with a focus on <strong>System
                        Design and AI</strong>,
                        my path has evolved from writing simple logic to architecting
                        distributed platforms.
                        From optimizing Neo4j graph queries to managing <strong>self-healing
                        Kubernetes clusters</strong>,
                        I am dedicated to building high-performance systems that solve
                        real-world challenges.
                    </p>
                </motion.div>

                {/* Professional Experience */}
                <motion.h3
                    className="fw-semibold mb-4 text-warning"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
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
                            viewport={{once: true}}
                        >
                            <div
                                className="experience-card p-4 text-start text-light border rounded-4 shadow-sm h-100">
                                <h5 className="text-warning mb-1">{exp.title}</h5>
                                {/*<p className="mb-1"><strong>{exp.company_name}</strong></p>*/}
                                <small
                                    className="text-secondary d-block mb-2">{exp.date}</small>
                                <ul className="mb-0 ps-3" style={{lineHeight: "1.6"}}>
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
                    viewport={{once: true}}
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
                            whileTap={{scale: 0.95}}
                            className="skill-badge d-flex align-items-center gap-2 text-decoration-none"
                        >
                            <img
                                src={skill.icon}
                                alt={`${skill.name} icon`}
                                style={{width: "24px", height: "24px", objectFit: "contain"}}
                            />
                            <span className="skill-name">{skill.name}</span>
                        </motion.a>
                    ))}
                </div>
                {/* Beyond Code */}
                <motion.div
                    className="mx-auto text-light mb-5"
                    style={{maxWidth: "850px"}}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                >
                    <h3 className="fw-semibold mb-4 text-warning" style={{fontSize: "1.8rem"}}>
                        Beyond the Code 💡
                    </h3>
                    <p style={{lineHeight: "1.8"}}>
                        I believe great engineering is rooted in clarity and strategy. Inspired
                        by timeless
                        philosophy and the discipline of competitive sports, I aim to build
                        resilient
                        backend architectures that offer both technical excellence and
                        meaningful impact.
                    </p>
                </motion.div>

                {/* Hobbies */}
                <motion.h3
                    className="fw-semibold mb-4 text-warning"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
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
                            viewport={{once: true}}
                        >
                            <div
                                className="hobby-card p-4 text-start text-light rounded-4 shadow-sm h-100">
                                <h5 className="text-warning mb-2">{hobby.title}</h5>
                                <p style={{lineHeight: "1.6"}}>{hobby.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Motto/>
            </div>

            {/* Background layer */}
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{zIndex: 1}}
            ></div>
        </section>
    );
}

export default memo(About);
