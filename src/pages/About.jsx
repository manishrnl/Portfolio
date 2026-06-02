import {motion} from "framer-motion";
import {memo, useEffect} from "react";
import Motto from "../components/Motto.jsx";
import {experiences, hobbies, skills} from "../utils/About-Data.js"

const About = () => {
    useEffect(() => {
        document.title = "About Me - Manish Kumar | Portfolio";
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    const fadeUp = {
        hidden: {opacity: 0, y: 30},
        show: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}}
    };

    return (
        <section
            // Adjusted padding-top from pt-40 to pt-28 and py-24 to py-16
            className="relative min-h-screen flex items-center justify-center text-gray-950 py-16 px-6 overflow-hidden pt-28 bg-white transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100"
        >
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-purple-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-[85%] mx-auto relative z-10">

                {/* Section Header - Scaled down from 7xl to 5xl */}
                <div className="text-center mb-12">
                    <motion.h2
                        className="font-display mb-5 text-[40px] font-bold leading-tight text-gray-900 dark:text-zinc-50 md:text-5xl"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true}}
                    >
                        {"{Backend Systems}"}
                        <span className="bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(124,77,255,0.35)]">
                            {" "}Engineer Profile{" "}
                        </span>
                        <span className="text-blue-600 dark:text-yellow-300">{"</>"}</span>
                    </motion.h2>
                    <p className="mx-auto max-w-4xl text-base md:text-lg leading-relaxed text-gray-600 dark:text-zinc-300">
                        I build Java and Spring Boot systems that are not only functional, but understandable,
                        testable, and ready to scale. My work connects backend architecture, database thinking,
                        cloud tooling, and clean React interfaces into complete portfolio-grade products.
                    </p>
                    <motion.div
                        className="h-1 w-16 bg-blue-600 mx-auto rounded-full mt-6"
                        initial={{width: 0}}
                        whileInView={{width: 64}}
                        viewport={{once: true}}
                    />
                </div>

                {/* Hero Intro - Scaled text from 2xl to lg/xl */}
                <motion.div
                    className="bg-gray-200/5 backdrop-blur-md mb-12 transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 dark:bg-zinc-900/20"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                >
                    <p className="text-center text-base leading-relaxed italic md:text-lg">
                        "Hello there! 👋 I'm <span className="text-gray-950 font-semibold dark:text-zinc-50">Manish Kumar</span> —
                        a Software Development Engineer aspirant specializing in <span
                        className="text-gray-950 border-b border-blue-500 dark:text-zinc-50">scalable Microservices</span> and
                        AI-driven backend systems. I enjoy understanding the complete flow of a product:
                        request handling, database design, security, deployment, and the final UI that users actually touch."
                    </p>
                </motion.div>

                {/* Journey & Experience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 mb-16 w-full max-w-full">

                    {/* Journey Card - Adjusted padding from p-8 to p-6 */}
                    <motion.div
                         className="cursor-pointer hover:translate-x-3
                                                    hover:-translate-y-3
                                                    transition-all duration-500 ease-out hover:bg-blue-200 p-5
                                                    rounded-3xl
                                                    border
                                                    border-gray-200/10 bg-gray-100/50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:bg-zinc-800"
                                                      variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true}}
                    >
                        <h3 className="font-subheading mb-3 flex items-center gap-2 text-2xl text-gray-950 dark:text-zinc-50">
                            My Engineering Arc <span className="group-hover:rotate-12 transition-transform">🚀</span>
                        </h3>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-zinc-300 md:text-lg">
                            Currently pursuing B.Tech (C.S.E) with a focus on System Design, my
                            path evolved from simple logic to distributed platforms. I am
                            dedicated to building high-performance systems.
                        </p>
                        <p className="text-base leading-relaxed text-gray-700 dark:text-zinc-300 md:text-lg">
                            I learn by shipping complete projects: desktop systems for fundamentals,
                            Spring Boot APIs for backend depth, and React dashboards for presentation.
                            That mix helps me reason about tradeoffs across the whole stack.
                        </p>
                    </motion.div>

                    {/* Professional Exp Card - Adjusted padding and spacing */}
                    <motion.div
                       className="cursor-pointer hover:translate-x-3
                            hover:-translate-y-3
                            transition-all duration-500 ease-out hover:bg-blue-200 p-5
                            rounded-3xl
                            border
                            border-gray-200/10 bg-gray-100/50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:bg-zinc-800"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"

                        viewport={{once: true}}
                    >
                        <h3 className="font-subheading mb-4 text-2xl text-gray-950 dark:text-zinc-50">Experience Timeline 💼</h3>
                        <div className="space-y-5">
                            {experiences.map((exp, index) => (
                                <div key={index} className="border-l-2 border-blue-500/50 pl-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1">
                                    <h5 className="text-base font-bold text-gray-900 dark:text-zinc-100">{exp.title}</h5>
                                    <span className="font-brand text-sm uppercase tracking-widest text-blue-800">{exp.date}</span>
                                    <ul className="mt-1 text-sm text-gray-600 space-y-0.5 dark:text-zinc-300">
                                        {exp.points.map((p, i) => <li key={i}>• {p}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Technical Arsenal */}
                <motion.div
                    className="text-center mb-16 rounded-[2rem] border border-gray-100 bg-white/70 p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 hover:bg-blue-50 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:bg-zinc-800 md:p-8"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                >
                    <h3 className="font-subheading mb-3 bg-gradient-to-r from-blue-600 via-violet-600 to-green-500 bg-clip-text text-2xl text-transparent md:text-3xl">Spring-To-UI Toolchain ⚡</h3>
                    <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 dark:text-zinc-300 md:text-lg">
                        A practical stack for building real products: backend APIs, authentication,
                        databases, message queues, deployment tools, and responsive frontend presentation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-10 rounded-2xl transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1">
                        {skills.map((skill) => (
                            <motion.a
                                key={skill.name}
                                href={skill.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none group flex items-center
                                gap-2 px-5 py-2.5 rounded-full transition-all duration-500 ease-out bg-gray-100 hover:bg-yellow-400 hover:translate-x-1 hover:-translate-y-1 shadow-sm dark:bg-zinc-900 dark:hover:bg-yellow-400"
                            >
                                <img
                                    src={skill.icon} alt=""
                                    className="w-5 h-5 transition-transform group-hover:rotate-[360deg] duration-700 "/>
                                <span className="font-brand text-sm text-gray-700 dark:text-zinc-200 dark:group-hover:text-zinc-950">{skill
                                    .name}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                >
                    {[
                        {
                            title: "💻 Scalable Engineering",
                            desc: "I'm passionate about architecting distributed systems. Whether it's optimizing Neo4j graph queries or deploying Kubernetes clusters, I love building software that scales."
                        },
                        {
                            title: "Data Awareness",
                            desc: "I pay attention to indexing, query patterns, transactions, and schema decisions because performance starts in the data layer."
                        },
                        {
                            title: "Product Polish",
                            desc: "A project should not only run; it should communicate well, load quickly, and feel comfortable on mobile and desktop."
                        },
                    ].map((item) => (
                        <div key={item.title} className="rounded-3xl border border-gray-200/10 bg-gray-100/50 p-5 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 hover:bg-blue-200 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:bg-zinc-800">
                            <h4 className="font-display mb-2 text-base font-bold text-gray-950 dark:text-zinc-50">{item.title}</h4>
                            <p className="mb-0 text-sm leading-relaxed text-gray-600 dark:text-zinc-300">{item.desc}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Hobbies & Beyond */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <motion.div
                        className="cursor-pointer hover:translate-x-3
                                hover:-translate-y-3
                                transition-all duration-500 ease-out hover:bg-blue-200 p-5
                                rounded-3xl
                                border
                                border-gray-200/10 bg-gray-100/50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:bg-zinc-800"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"

                    >
                        <h3 className="font-subheading mb-3 text-2xl">Beyond Code 💡</h3>
                        <p className="text-gray-700 text-sm leading-relaxed dark:text-zinc-300">
                            I believe great engineering is rooted in clarity and strategy,
                            inspired by timeless philosophy and competitive sports.
                        </p>
                    </motion.div>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1">
                        {hobbies.map((hobby, index) => (
                            <motion.div
                                key={index}
                                className="cursor-pointer hover:translate-x-3
                                hover:-translate-y-3
                                transition-all duration-500 ease-out hover:bg-blue-200 p-5
                                rounded-3xl
                                border
                                border-gray-200/10 bg-gray-100/50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:bg-zinc-800"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                            >
                                <h5 className="font-brand mb-1 text-sm font-semibold text-yellow-800">{hobby.title}</h5>
                                <p className="text-gray-600 text-sm leading-relaxed dark:text-zinc-300">{hobby.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-16 transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1">
                    <Motto/>
                </div>
            </div>
        </section>
    );
}

export default memo(About);
