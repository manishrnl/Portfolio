import React, {useEffect} from "react";
import {motion} from "framer-motion";

export default function Contact() {
    useEffect(() => {
        document.title = "Contact Me - My Portfolio";
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden px-5 py-12 pt-24 bg-gray-100">
            {/* 🔮 Background glow + grid */}
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

            {/* 🗺 TOP DIV — Map (Adjusted height for 100% zoom) */}
            <div className="relative z-10 w-[95vw] lg:w-[90%] mx-auto mb-12">
                <h3 className="font-bold text-xl mb-4 tracking-wider text-center lg:text-left text-gray-800">
                    📍 Find Me Here
                </h3>
                <div
                    className="h-[350px] md:h-[400px] w-full rounded-2xl overflow-hidden border border-[#7c4dff]/40 shadow-xl bg-white">
                    <iframe
                        src="https://embed.mappls.com/place/CTD6RR?token=przotensqvzqyvqdoxuclfnuednuvkywfxmi&fullscreen=true&zoom=16&pitch=45"
                        title="Map of Madhubani"
                        className="w-full h-full border-0 saturate-[1.1]"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>

            {/* 💬 CONTACT FORM SECTION */}
            <div className="relative z-10 w-full max-w-4xl mx-auto">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="flex flex-col"
                >
                    <div className="text-center lg:text-left">
                        <motion.h2
                            className="text-gray-900 font-bold text-3xl lg:text-4xl mb-3 tracking-tight"
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                        >
                            📬 Get In Touch
                        </motion.h2>

                        <motion.p
                            className="text-gray-600 text-base mb-6 mx-auto lg:mx-0 max-w-xl"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.2, duration: 0.6}}
                        >
                            I&apos;d love to hear from you. Whether you have a project idea, a
                            question, or a collaboration request — just drop a message below.
                        </motion.p>
                    </div>

                    <motion.form
                        target="_blank"
                        action="https://formsubmit.co/manishrajrnl@zohomail.in"
                        method="POST"
                        className="w-full p-6 md:p-8 rounded-2xl bg-gray-200 border border-white/70 shadow-lg"
                        whileHover={{
                            boxShadow: "0 20px 50px rgba(124,77,255,0.1)",
                            scale: 1.002,
                        }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label
                                    className="block mb-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full border-none bg-gray-100 text-gray-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c4dff]/50 transition-all placeholder:text-gray-400 shadow-inner"
                                />
                            </div>
                            <div>
                                <label
                                    className="block mb-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="you@example.com"
                                    className="w-full border-none bg-gray-100 text-gray-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c4dff]/50 transition-all placeholder:text-gray-400 shadow-inner"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label
                                className="block mb-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-700">
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                required
                                rows="5"
                                placeholder="How can I help you?"
                                className="w-full border-none bg-gray-100 text-gray-900 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7c4dff]/50 transition-all resize-none placeholder:text-gray-400 shadow-inner"
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            className="group relative w-full py-3.5 !rounded-full bg-gradient-to-r from-[#7c4dff] to-[#5c6bc0] text-white font-bold uppercase tracking-widest text-xs shadow-lg hover:shadow-[#7c4dff]/30 transition-all overflow-hidden"
                            whileHover={{scale: 1.01}}
                            whileTap={{scale: 0.99}}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <motion.span
                                    className="group inline-block"
                                    initial={{x: 0, y: 0, opacity: 1}}
                                    variants={{
                                        hover: {
                                            x: 40,
                                            y: -40,
                                            opacity: [1, 1, 0],
                                            transition: {duration: 0.6, ease: "easeOut"}
                                        }
                                    }}
                                >
                                    <i className="not-italic text-base">🚀</i>
                                </motion.span>

                                <span
                                    className="relative z-10 transition-transform duration-300 group-hover:-translate-x-2 text-base">
                                     Send Message
                                </span>
                            </div>
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
}