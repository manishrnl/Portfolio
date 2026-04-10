import React, {useEffect} from "react";
import {motion} from "framer-motion";
import {ResumeLink} from "../utils/Resume-Data.js";

const Resume = () => {
    useEffect(() => {
        document.title = "Resume - Manish Kumar";
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    return (
        <section
            className="max-w-[100%] relative min-h-screen flex flex-col items-center
            justify-start
            overflow-hidden px-5 py-12 pt-24 bg-gray-100">
            {/* 🔮 Background glow + grid (Light Mode Theme) */}
            <div
                className="absolute inset-0 z-0 opacity-40 animate-pulse pointer-events-none"
                style={{
                    backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(124,77,255,0.15), transparent 60%),
            radial-gradient(circle at 80% 80%, rgba(41,182,246,0.12), transparent 55%),
            linear-gradient(transparent 95%, rgba(0,0,0,0.03) 95%),
            linear-gradient(90deg, transparent 95%, rgba(0,0,0,0.03) 95%)
          `,
                    backgroundSize: "100% 100%, 100% 100%, 100% 32px, 32px 100%",
                }}
            ></div>

            <div className="relative z-10 w-full max-w-4xl mx-auto">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    // Reduced padding from p-12 to p-8/10 and min-h from 700 to 600
                    className="relative p-6 md:p-10 rounded-2xl bg-gray-200 border border-white/70 shadow-[0_15px_50px_rgba(0,0,0,0.1)] min-h-[600px] overflow-hidden"
                >
                    {/* Header - Reduced from text-3xl to text-2xl */}
                    <h2 className="text-[#7c4dff] font-bold text-2xl mb-4 tracking-tight">
                        Professional Summary
                    </h2>
                    {/* Reduced from text-xl to text-base/lg */}
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        Software Development Engineer aspirant specializing in scalable
                        Microservices and AI-driven backend systems using Java and Spring
                        Boot. Proficient in architecting distributed platforms with Docker,
                        Kubernetes, and Kafka to optimize performance.
                    </p>

                    <div className="h-px w-full bg-gray-300 mb-6"></div>

                    {/* Skills Section - Standardized font sizes */}
                    <h3 className="text-gray-900 font-bold text-sm mb-3 uppercase tracking-widest">
                        Technical Skills
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 text-sm md:text-base text-gray-600">
                        <div>
                            <span className="font-bold text-gray-800">Languages:</span> Java,
                            Python, SQL, C++, JavaScript
                        </div>
                        <div>
                            <span className="font-bold text-gray-800">Frameworks:</span>{" "}
                            Spring Boot 3, Spring AI, React.js
                        </div>
                    </div>

                    {/* Projects Section */}
                    <h3 className="text-gray-900 font-bold text-sm mb-3 uppercase tracking-widest">
                        Key Projects
                    </h3>
                    <div className="mb-4">
                        <h5 className="font-bold text-base text-gray-800 mb-0.5">
                            LinkedIn Clone (Full-Stack Microservices)
                        </h5>
                        <p className="text-xs text-gray-500 mb-2 italic">Jan 2026 - Present</p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                            <li>Architected using Java, Spring Boot, and Microservices.</li>
                            <li>Optimized connection query performance by 40% using Neo4j.</li>
                        </ul>
                    </div>

                    {/* 🌫️ Masking Overlay */}
                    <div
                        className="absolute bottom-0 left-0 w-full h-[55%] bg-gradient-to-t from-gray-200 via-gray-200/95 to-transparent pointer-events-none"></div>

                    {/* 🔘 Call to Action Container */}
                    <div
                        className="absolute bottom-10 left-0 w-full flex flex-col items-center z-20 px-6">
                        <p className="text-gray-500 text-xs mb-4 bg-gray-200/80 px-3 py-1 rounded-full backdrop-blur-sm border border-gray-300">
                            Detailed text view is restricted in preview.
                        </p>

                        <motion.a
                            href={ResumeLink}
                            target="_blank"
                            rel="noreferrer"
                            // Adjusted padding and text size for the button
                            className="group relative flex items-center justify-center gap-3 w-full max-w-[260px] py-3 rounded-full bg-gradient-to-r from-[#7c4dff] to-[#5c6bc0] text-white font-bold uppercase tracking-wider text-sm shadow-lg hover:shadow-[#7c4dff]/40 transition-all overflow-hidden text-decoration-none"
                            whileHover="hover"
                            whileTap={{scale: 0.98}}
                        >
                            {/* Rocket Animation */}
                            <motion.span
                                className="inline-block"
                                variants={{
                                    hover: {
                                        x: 35,
                                        y: -35,
                                        opacity: [1, 1, 0],
                                        transition: {duration: 0.6, ease: "easeOut"},
                                    },
                                }}
                            >
                                <i className="not-italic">🚀</i>
                            </motion.span>

                            <span
                                className="relative z-10 transition-transform duration-300 group-hover:-translate-x-3 ">
                View Full Resume
              </span>

                            <motion.span
                                className="absolute left-[15%] opacity-0"
                                variants={{
                                    hover: {
                                        opacity: 1,
                                        transition: {delay: 0.4, duration: 0.3},
                                    },
                                }}
                            >
                                <i className="not-italic">🚀</i>
                            </motion.span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;