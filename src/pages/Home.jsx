import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import Motto from "../components/Motto.jsx";
import {ArrowRight, Download, Loader2, LucideMails} from "lucide-react";
import {ResumeLink} from "../utils/Resume-Data.js";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState({
        projects: false,
        contact: false,
        resume: false,
    });

    useEffect(() => {
        document.title = "Manish Kumar | SDE Aspirant";
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

const openInSamePage = (type, href) => {
    setLoading(prev => ({...prev, [type]: true}));
    navigate(href);
};

const openInNewPage = (type, href) => {
    setLoading(prev => ({...prev, [type]: true}));
    window.open(href, "_blank", "noopener,noreferrer");
    setLoading(prev => ({...prev, [type]: false}));
};
    return (
        <section className="min-h-screen selection:bg-blue-200 pt-28 pb-10 bg-white text-gray-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
            <div className="max-w-[85%] mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Profile Image with Restored Glow & Animation */}
                    <motion.div
                        className="relative flex-shrink-0 transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                    >
                        <div className="absolute -inset-3 bg-gradient-to-tr
                        from-blue-100 to-indigo-100 rounded-[2.5rem] blur-2xl opacity-60"></div>
                        <motion.div
                            className="relative"
                            animate={{y: [0, -10, 0]}}
                            transition={{duration: 5, repeat: Infinity, ease: "easeInOut"}}
                        >
                            <img src="/images/Manish.png" alt="Manish Kumar" className="w-56 h-56 md:w-64 md:h-64 rounded-[2rem] object-cover shadow-2xl border-[6px] border-yellow-600" loading="eager" fetchPriority="high" decoding="async"/>
                              <div className="absolute -top-4 -left-4 bg-yellow-700 p-3 rounded-xl shadow-xl border border-yellow-950 transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1">
                                <img src="/images/om.svg" className="w-5 h-5" alt="Om
                                Images" size={30} loading="lazy" decoding="async"/>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Hero Text */}
                    <div className="text-center lg:text-left flex-grow w-full">
                        <h3 className="font-display text-xl font-semibold text-gray-600 mb-1 dark:text-zinc-300">
                            Hey, I&apos;m Manish Kumar
                        </h3>

                        <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 dark:text-zinc-50">
                            {"{Spring-Ready Backend}"}
                            <span className="bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(124,77,255,0.35)]"> Engineering Aspirant </span>
                            <span className="text-blue-600">{"</>"}</span>
                        </h1>

                        <h4 className="font-tech text-sm text-gray-700 mb-3 dark:text-zinc-300">
                            Specializing in{" "}
                            <span className="font-semibold text-gray-900 dark:text-zinc-50">Scalable Microservices</span> and{" "}
                            <span className="font-semibold text-gray-900 dark:text-zinc-50">AI-driven Backend Systems</span>.
                        </h4>

                        <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl dark:text-zinc-300">
                            Architecting distributed platforms with{" "}
                            <strong className="font-tech font-bold text-blue-500 underline decoration-blue-400 decoration-2 underline-offset-4">
                                Spring Boot
                            </strong>,{" "}
                            <strong className="font-tech font-bold text-blue-500 underline decoration-blue-400 decoration-2 underline-offset-4">
                                Docker
                            </strong>, and{" "}
                            <strong className="font-tech font-bold text-blue-500 underline decoration-blue-400 decoration-2 underline-offset-4">
                                Kubernetes
                            </strong> to optimize system reliability and performance.
                        </p>

                        <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mt-4 dark:text-zinc-300">
                            I focus on backend systems that are easy to extend, easy to deploy, and
                            clear for other developers to understand. My work combines API design,
                            database modeling, caching, authentication, and clean React interfaces so
                            projects feel complete from the first screen to the server layer.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mt-6">
                            {[
                                "REST APIs with clean service layers",
                                "Database-first thinking for real use cases",
                                "Deployment-ready Docker workflows",
                            ].map((item) => (
                                <div key={item} className="font-tech rounded-2xl border border-gray-100 bg-white/70 px-4 py-3 text-xs font-semibold text-gray-700 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 hover:bg-blue-50 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:bg-zinc-800">
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* Button Group  */}
                        <div className="flex flex-wrap gap-4 justify-center  pt-6">
                          <motion.button
                              onClick={() => openInSamePage("projects", "/projects")}
                              disabled={loading.projects}
                              whileHover={{scale: 1.05}}
                              whileTap={{scale: 0.95}}
                              className="font-brand group hover:translate-x-2 hover:-translate-y-2
                              flex items-center justify-center gap-2
                              bg-gray-900 text-white px-6 py-2.5 !rounded-full font-bold
                              text-base shadow-lg transition-all disabled:opacity-80"
                          >
                              {loading.projects ? (
                                  <>
                                      <Loader2 className="w-4 h-4 animate-spin"/>
                                      Navigating...
                                  </>
                              ) : (
                                  <>
                                      Explore Projects
                                      <ArrowRight
                                          size={18}

                                          className="group-hover:rotate-[-60deg]
                                          transition-transform duration-700"
                                      />
                                  </>
                              )}
                          </motion.button>

                            <motion.button
                                onClick={() => openInSamePage("contact", "/contact-us")}
                                disabled={loading.contact}
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="font-brand group hover:translate-x-2 hover:-translate-y-2 flex
                                items-center
                                justify-center gap-2
                                bg-white border-2 border-gray-200 text-gray-700 px-6 py-2.5 !rounded-full font-bold text-base hover:border-blue-600 hover:text-blue-600 min-w-[180px] transition-all disabled:opacity-80 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-yellow-400 dark:hover:text-yellow-300"
                            >
                                {loading.contact ? (
                                    <><Loader2 className="w-4 h-4 animate-spin"/> Navigating...</>
                                ) : (
                                    <><LucideMails
                                    className="group-hover:rotate-[360deg]
                                    transition-transform duration-700 text-red-400"
                                    size={18}/>
                                     Get
                                     in
                                    Touch</>
                                )}
                            </motion.button>

                            <motion.button
                                onClick={() => openInNewPage("resume", ResumeLink)}
                                disabled={loading.resume}
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="font-brand group hover:translate-x-2 hover:-translate-y-2
                                flex items-center justify-center gap-2 bg-blue-100 text-blue-700 hover:bg-blue-300 hover:text-green-950 px-6 py-2.5 !rounded-full font-bold text-base min-w-[180px] transition-all disabled:opacity-80"
                            >
                                {loading.resume ? (
                                    <><Loader2 className="w-4 h-4 animate-spin"/> Opening CV...</>
                                ) : (
                                    <><Download size={20}
                                    className="transition-transform
                                   group-hover:rotate-[360deg] duration-700 text-green-600"/>
                                   View CV</>
                                )}
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section - Restored Rotation and Hover Translate */}
            <div className="max-w-[80%] mx-auto px-6 mt-20 text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {value: "2026", label: "Graduation Year", icon: "🎓"},
                        {value: "70%", label: "System Uptime", icon: "⚡"},
                        {value: "Clean", label: "Architecture", icon: "🏗️"},
                        {value: "40%", label: "Perf Optimization", icon: "📈"},
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.1}}
                            whileHover={{y: -10, transition: {duration: 0.2}}}
                            className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-500 ease-out group hover:translate-x-1 hover:-translate-y-2 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-yellow-400/60"
                        >
                            <span className="text-2xl mb-3 block transition-transform group-hover:rotate-[360deg] duration-700">
                                {stat.icon}
                            </span>
                            <h3 className="font-display text-2xl font-extrabold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors dark:text-zinc-50 dark:group-hover:text-yellow-300">
                                {stat.value}
                            </h3>
                            <p className="font-tech text-gray-500 font-medium tracking-wide uppercase text-[10px] dark:text-zinc-400">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Motto Section */}
            <motion.div
                className="max-w-[85%] mx-auto px-6 mt-20"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
            >
                <div className=" rounded-[2rem] p-10 overflow-hidden relative transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1">
                    <div className="absolute top-0 right-0  rounded-full blur-3xl "></div>
                    <Motto/>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;
