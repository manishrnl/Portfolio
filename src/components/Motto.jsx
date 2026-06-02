import React, {useMemo} from "react";
import {motion} from "framer-motion";
import {quotes} from "../utils/Home-Data.jsx"

export default function Motto() {
    const fadeUp = {
        hidden: {opacity: 0, y: 30},
        show: {
            opacity: 1,
            y: 0,
            transition: {duration: 1, ease: "easeOut"}
        },
    };

    const randomQuote = useMemo(() => {
        const index = Math.floor(Math.random() * quotes.length);
        return quotes[index];
    }, []);

    return (
        <motion.div
            className="group flex flex-col items-center text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
        >
            <div className="flex flex-col items-center">
                {/* Reduced padding and icon size */}
                <div className=" hover:translate-x-2 hover:-translate-y-2 p-2.5 bg-yellow-800
                 rounded-xl mb-3">
                    <img
                        src="/images/om.svg"
                        className="w-7 h-7 group-hover:rotate-[360deg] transition-transform

                        duration-700"
                        alt="Om Images"
                    />
                </div>
                <h2 className="font-brand pt-3 text-sm uppercase tracking-[0.2em] text-blue-800 dark:text-yellow-300">
                    Core Philosophy
                </h2>
            </div>

            <div className="space-y-4">
                <motion.p
                    className="font-subheading pt-4 text-2xl leading-relaxed text-yellow-800 dark:text-yellow-200 md:text-3xl"
                >
                    "{randomQuote.sa}"
                </motion.p>

                <div className="flex justify-center items-center gap-3">
                    <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-gray-700 dark:to-zinc-500"></div>
                    <div className="h-1 w-1 rounded-full bg-blue-500"></div>
                    <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-gray-700 dark:to-zinc-500"></div>
                </div>

                <div className="space-y-2 px-4">
                    <p className="pt-4 text-base text-gray-900 dark:text-zinc-100 md:text-lg">
                        {randomQuote.hi}
                    </p>
                    <p className="pt-2 text-base leading-snug text-shadow-red-500 dark:text-zinc-300 md:text-lg">
                        {randomQuote.en}
                    </p>
                </div>
            </div>

            <motion.div
                className="pt-6 border-t border-gray-800 w-[50%] mx-auto mt-8 dark:border-zinc-700"
                style={{originX: 0.5}}
                initial={{scaleX: 0, opacity: 0}}
                whileInView={{scaleX: 1, opacity: 1}}
                transition={{
                    duration: 1.5,
                    ease: "circOut",
                    delay: 0.2
                }}
                viewport={{once: true}}
            >
                <p className="font-brand mt-2 text-sm uppercase tracking-widest text-black dark:text-zinc-100">
                    Spring | Systems | Interfaces
                </p>
            </motion.div>
        </motion.div>
    );
}
