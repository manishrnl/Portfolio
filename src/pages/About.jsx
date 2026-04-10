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
            className="relative min-h-screen flex items-center justify-center text-gray-950 py-16 px-6 overflow-hidden pt-28"
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
                        className="text-4xl md:text-5xl font-black mb-4 tracking-tighter text-gray-950"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true}}
                    >
                        About Me
                    </motion.h2>
                    <motion.div
                        className="h-1 w-16 bg-blue-600 mx-auto rounded-full"
                        initial={{width: 0}}
                        whileInView={{width: 64}}
                        viewport={{once: true}}
                    />
                </div>

                {/* Hero Intro - Scaled text from 2xl to lg/xl */}
                <motion.div
                    className="bg-gray-200/5 backdrop-blur-md mb-12"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                >
                    <p className="text-lg md:text-xl leading-relaxed text-center italic">
                        "Hello there! 👋 I'm <span className="text-gray-950 font-semibold">Manish Kumar</span> —
                        a Software Development Engineer aspirant specializing in <span
                        className="text-gray-950 border-b border-blue-500">scalable Microservices</span> and
                        AI-driven backend systems."
                    </p>
                </motion.div>

                {/* Journey & Experience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 mb-16 w-full max-w-full">

                    {/* Journey Card - Adjusted padding from p-8 to p-6 */}
                    <motion.div
                         className="cursor-pointer hover:translate-x-3
                                                    hover:-translate-y-3
                                                    duration-800 hover:bg-blue-200 p-5
                                                    rounded-3xl
                                                    border
                                                    border-gray-200/10 bg-gray-100/50 shadow-sm"
                                                      variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true}}
                    >
                        <h3 className="text-xl font-bold mb-3 text-gray-950 flex items-center gap-2">
                            My Journey <span className="group-hover:rotate-12 transition-transform">🚀</span>
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed text-gray-700">
                            Currently pursuing B.Tech (C.S.E) with a focus on System Design, my
                            path evolved from simple logic to distributed platforms. I am
                            dedicated to building high-performance systems.
                        </p>
                    </motion.div>

                    {/* Professional Exp Card - Adjusted padding and spacing */}
                    <motion.div
                       className="cursor-pointer hover:translate-x-3
                            hover:-translate-y-3
                            duration-800 hover:bg-blue-200 p-5
                            rounded-3xl
                            border
                            border-gray-200/10 bg-gray-100/50 shadow-sm"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"

                        viewport={{once: true}}
                    >
                        <h3 className="text-xl font-bold mb-4 text-gray-950">Experience 💼</h3>
                        <div className="space-y-5">
                            {experiences.map((exp, index) => (
                                <div key={index} className="border-l-2 border-blue-500/50 pl-4">
                                    <h5 className="text-base font-bold text-gray-900">{exp.title}</h5>
                                    <span className="text-xs font-mono text-blue-800 uppercase tracking-widest">{exp.date}</span>
                                    <ul className="mt-1 text-sm text-gray-600 space-y-0.5">
                                        {exp.points.map((p, i) => <li key={i}>• {p}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Technical Arsenal */}
                <motion.div
                    className="text-center mb-16 "
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                >
                    <h3 className="text-2xl font-bold mb-6 text-gray-950">Technical Arsenal ⚡</h3>
                    <div className="flex flex-wrap justify-center gap-3 mt-10">
                        {skills.map((skill) => (
                            <motion.a
                                key={skill.name}
                                href={skill.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none group flex items-center
                                gap-2 px-5 py-2.5 rounded-full transition-all bg-gray-100 hover:bg-yellow-400 hover:translate-x-1 hover:-translate-y-1 shadow-sm"
                            >
                                <img
                                    src={skill.icon} alt=""
                                    className="w-5 h-5 transition-transform group-hover:rotate-[360deg] duration-700 "/>
                                <span className="text-sm font-medium text-gray-700">{skill
                                    .name}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Hobbies & Beyond */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                    <motion.div
                        className="lg:col-span-1 p-6 rounded-3xl bg-blue-200 text-gray-950"

                        className="cursor-pointer hover:translate-x-3
                                hover:-translate-y-3
                                duration-800 hover:bg-blue-200 p-5
                                rounded-3xl
                                border
                                border-gray-200/10 bg-gray-100/50 shadow-sm"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"

                    >
                        <h3 className="text-xl font-bold mb-3">Beyond Code 💡</h3>
                        <p className="text-gray-700 text-sm leading-relaxed ">
                            I believe great engineering is rooted in clarity and strategy,
                            inspired by timeless philosophy and competitive sports.
                        </p>
                    </motion.div>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {hobbies.map((hobby, index) => (
                            <motion.div
                                key={index}
                                className="cursor-pointer hover:translate-x-3
                                hover:-translate-y-3
                                duration-800 hover:bg-blue-200 p-5
                                rounded-3xl
                                border
                                border-gray-200/10 bg-gray-100/50 shadow-sm"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                            >
                                <h5 className="text-yellow-800 font-bold mb-1 text-sm">{hobby.title}</h5>
                                <p className="text-gray-600 text-sm leading-relaxed">{hobby.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-16">
                    <Motto/>
                </div>
            </div>
        </section>
    );
}

export default memo(About);