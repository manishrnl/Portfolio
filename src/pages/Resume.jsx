import React, {useEffect} from "react";
import {motion} from "framer-motion";
import {
    CheckCircle2,
    Code2,
    Database,
    Download,
    ExternalLink,
    Layers3,
    Rocket,
    ServerCog,
    ShieldCheck,
    Sparkles,
} from "lucide-react";
import {ResumeDownloadLink, ResumeLink} from "../utils/Resume-Data.js";

const quickStats = [
    {label: "Core Stack", value: "Java + Spring"},
    {label: "Frontend", value: "React + Tailwind"},
    {label: "Systems", value: "APIs + Data"},
    {label: "Focus", value: "SDE Roles"},
];

const skillGroups = [
    {title: "Languages", detail: "Java, Python, SQL, C++, JavaScript", Icon: Code2},
    {title: "Backend", detail: "Spring Boot 3, Spring Security, Spring AI, REST APIs, JWT", Icon: ServerCog},
    {title: "Data Layer", detail: "PostgreSQL, MySQL, MongoDB, Neo4j, Redis, indexing, query tuning", Icon: Database},
    {title: "Delivery", detail: "Docker, Kafka, Kubernetes basics, Zipkin, Git, deployment workflows", Icon: Layers3},
];

const resumeHighlights = [
    "Built full-stack finance and booking systems with secure authentication, dashboards, and responsive React interfaces.",
    "Designed microservice-style backend flows using Spring Boot, Kafka, Docker, Neo4j, and distributed tracing concepts.",
    "Optimized social graph style connection queries by 40% using Cypher queries and graph database modeling.",
    "Created JavaFX desktop systems for university, attendance, banking, and calculator workflows with role-based screens.",
];

const focusAreas = [
    {
        title: "Backend Architecture",
        text: "Service boundaries, clean REST contracts, authentication, validation, and code that remains readable when features grow.",
    },
    {
        title: "Database Thinking",
        text: "Schema choices, indexes, transaction flow, query patterns, and practical performance decisions for real workflows.",
    },
    {
        title: "Product Presentation",
        text: "Responsive screens, useful documentation, fast navigation, and clear project storytelling for recruiters and reviewers.",
    },
];

const projectCards = [
    {
        title: "Money Manager",
        desc: "Full-stack finance tracking with Spring Boot, React, PostgreSQL, Redis, JWT security, Docker, and clean dashboard flows.",
    },
    {
        title: "LinkedIn Microservices",
        desc: "Distributed backend concepts using Kafka, Kubernetes, Neo4j, Docker, service communication, and tracing fundamentals.",
    },
    {
        title: "University System",
        desc: "Large JavaFX desktop platform with multi-role screens, JDBC, MySQL, attendance, fee, marks, and reporting workflows.",
    },
];

const Resume = () => {
    useEffect(() => {
        document.title = "Resume - Manish Kumar";
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-gray-100 px-0 py-12 pt-28 text-gray-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15"></div>
                <div className="absolute right-[-8%] top-44 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl dark:bg-fuchsia-500/15"></div>
                <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl dark:bg-yellow-400/15"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:34px_34px] opacity-45 dark:bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)]"></div>
            </div>

            <div className="relative z-10 mx-auto w-[90%] max-w-[1500px]">
                <div className="mb-10 text-center">
                    <h1 className="font-display mx-auto mb-5 max-w-5xl text-4xl font-bold leading-tight text-gray-900 dark:text-zinc-50 md:text-6xl">
                        {"{Career Profile}"}
                        <span className="bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(124,77,255,0.35)]">
                            {" "}Resume Snapshot{" "}
                        </span>
                        <span className="text-blue-600 dark:text-yellow-300">{"</>"}</span>
                    </h1>
                    <p className="mx-auto max-w-4xl text-base leading-relaxed text-gray-600 dark:text-zinc-300 md:text-lg">
                        A recruiter-friendly overview of my software engineering profile: backend systems,
                        Spring Boot APIs, database design, React interfaces, and deployment-minded project work.
                    </p>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {quickStats.map((item) => (
                        <div
                            key={item.label}
                            className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1 hover:bg-blue-50 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/75 dark:hover:bg-zinc-800"
                        >
                            <p className="font-tech mb-1 text-[10px] font-black uppercase tracking-[0.22em] text-gray-500 dark:text-zinc-400">
                                {item.label}
                            </p>
                            <p className="font-display mb-0 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 bg-clip-text text-lg font-black text-transparent">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-[0.82fr_1.25fr_0.95fr]">
                    <motion.aside
                        initial={{opacity: 0, y: 26}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.65}}
                        className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 dark:border-zinc-800 dark:bg-zinc-900/85 dark:hover:bg-zinc-800"
                    >
                        <div className="mb-6 flex items-center gap-4">
                            <span className="rounded-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-yellow-400 p-[3px] shadow-lg">
                                <img
                                    src="/images/Manish.png"
                                    alt="Manish Kumar"
                                    className="h-20 w-20 rounded-full object-cover"
                                    loading="eager"
                                    decoding="async"
                                />
                            </span>
                            <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-bold text-green-700 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-300">
                                Open to Backend SDE roles
                            </span>
                        </div>

                        <h2 className="font-display mb-3 text-3xl font-black tracking-tight text-gray-950 dark:text-zinc-50">
                            Manish Kumar
                        </h2>
                        <p className="font-tech mb-5 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 bg-clip-text text-sm font-black text-transparent">
                            Software Development Engineer Aspirant
                        </p>
                        <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-zinc-300">
                            Backend-focused full-stack developer who turns learning into shipped projects.
                            I care about clean APIs, reliable data flow, readable code, and interfaces that
                            make the technical work easy to understand.
                        </p>

                        <div className="space-y-3">
                            {["Java ecosystem", "Spring Boot APIs", "React dashboards", "Database-backed systems"].map((item) => (
                                <div
                                    key={item}
                                    className="font-tech flex items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-xs font-bold text-gray-700 transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1 hover:bg-blue-50 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-200 dark:hover:bg-zinc-900"
                                >
                                    <CheckCircle2 size={17} className="shrink-0 text-green-600 dark:text-green-400"/>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.aside>

                    <motion.article
                        initial={{opacity: 0, y: 26}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.65, delay: 0.08}}
                        className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 dark:border-zinc-800 dark:bg-zinc-900/85 dark:hover:bg-zinc-800 md:p-8"
                    >
                        <div className="font-tech mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-800 dark:border-yellow-500/30 dark:bg-yellow-500/10 dark:text-yellow-300">
                            <Sparkles size={15}/>
                            Professional Summary
                        </div>
                        <h2 className="font-display mb-5 text-3xl font-black leading-tight text-gray-950 dark:text-zinc-50 md:text-4xl">
                            Backend systems, clean interfaces, and project execution in one profile.
                        </h2>
                        <p className="mb-5 text-base leading-relaxed text-gray-700 dark:text-zinc-300 md:text-lg">
                            My resume is built around practical software delivery. I work with Java,
                            Spring Boot, databases, authentication, React, and Tailwind CSS to create
                            projects that show complete workflows rather than isolated demos.
                        </p>
                        <p className="mb-8 text-base leading-relaxed text-gray-700 dark:text-zinc-300">
                            I focus on understanding the full path of a feature: request design,
                            validation, service logic, persistence, security, deployment readiness,
                            documentation, and the final screen a user interacts with.
                        </p>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            {focusAreas.map((area) => (
                                <div
                                    key={area.title}
                                    className="rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1 hover:bg-blue-50 dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:bg-zinc-900"
                                >
                                    <h3 className="font-display mb-2 text-base font-black text-blue-700 dark:text-yellow-300">
                                        {area.title}
                                    </h3>
                                    <p className="mb-0 text-sm leading-relaxed text-gray-600 dark:text-zinc-300">
                                        {area.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.article>

                    <motion.aside
                        initial={{opacity: 0, y: 26}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.65, delay: 0.16}}
                        className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 dark:border-zinc-800 dark:bg-zinc-900/85 dark:hover:bg-zinc-800"
                    >
                        <div className="mb-5 flex items-center gap-2">
                            <Rocket className="text-blue-600 dark:text-yellow-300" size={22}/>
                                <h2 className="font-display mb-0 text-2xl font-black text-gray-950 dark:text-zinc-50">
                                Impact Signals
                            </h2>
                        </div>
                        <ul className="space-y-4">
                            {resumeHighlights.map((item) => (
                                <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-600 dark:text-zinc-300">
                                    <ShieldCheck size={18} className="mt-0.5 shrink-0 text-green-600 dark:text-green-400"/>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.aside>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {skillGroups.map(({title, detail, Icon}) => (
                        <article
                            key={title}
                            className="group rounded-[1.5rem] border border-white/80 bg-white/75 p-5 shadow-sm backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 hover:bg-blue-50 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/75 dark:hover:bg-zinc-800"
                        >
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 text-white shadow-lg transition-transform duration-500 group-hover:rotate-6">
                                <Icon size={22}/>
                            </div>
                            <h3 className="font-display mb-2 text-lg font-black text-gray-950 dark:text-zinc-50">{title}</h3>
                            <p className="mb-0 text-sm leading-relaxed text-gray-600 dark:text-zinc-300">{detail}</p>
                        </article>
                    ))}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {projectCards.map((project) => (
                        <article
                            key={project.title}
                            className="rounded-[1.5rem] border border-white/80 bg-white/75 p-5 shadow-sm backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 hover:bg-blue-50 dark:border-zinc-800 dark:bg-zinc-900/75 dark:hover:bg-zinc-800"
                        >
                            <p className="font-tech mb-2 text-[10px] font-black uppercase tracking-[0.22em] text-gray-500 dark:text-zinc-400">
                                Project Evidence
                            </p>
                            <h3 className="font-display mb-2 text-xl font-black text-[#7c4dff] dark:text-yellow-300">
                                {project.title}
                            </h3>
                            <p className="mb-0 text-sm leading-relaxed text-gray-600 dark:text-zinc-300">
                                {project.desc}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-xl backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 dark:border-zinc-800 dark:bg-zinc-900/85 dark:hover:bg-zinc-800 md:flex-row md:p-6">
                    <div>
                        <p className="mb-1 text-[10px] font-black uppercase tracking-[0.22em] text-gray-500 dark:text-zinc-400">
                            Full Document
                        </p>
                        <h2 className="mb-1 text-2xl font-black text-gray-950 dark:text-zinc-50">
                            View online or download the PDF version.
                        </h2>
                        <p className="mb-0 text-sm leading-relaxed text-gray-600 dark:text-zinc-300">
                            The preview opens in a new tab. The download button uses the direct Google Drive file download link.
                        </p>
                    </div>

                    <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                        <motion.a
                            href={ResumeLink}
                            target="_blank"
                            rel="noreferrer"
                            className="font-brand group relative flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#7c4dff] via-blue-600 to-[#5c6bc0] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:shadow-[#7c4dff]/40 text-decoration-none sm:w-auto"
                            whileHover={{scale: 1.02, y: -2}}
                            whileTap={{scale: 0.98}}
                        >
                            <ExternalLink size={18}/>
                            View Full Resume
                        </motion.a>
                        <a
                            href={ResumeDownloadLink}
                            download="Manish-Kumar-Resume.pdf"
                            className="font-brand group flex w-full items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-gray-700 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 text-decoration-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-yellow-400 dark:hover:text-yellow-300 sm:w-auto"
                        >
                            <Download size={18}/>
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
