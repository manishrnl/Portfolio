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
    }, [quotes]);

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
                {/* Reduced text size from text-xl to text-sm/base and padding */}
                <h2 className="font-black text-sm md:text-base uppercase tracking-[0.25em] text-blue-800 pt-3">
                    Core Philosophy
                </h2>
            </div>

            <div className="space-y-4">
                {/* Scaled down quote from text-3xl to text-xl/2xl */}
                <motion.p
                    className="text-xl md:text-2xl font-serif font-bold text-yellow-800 leading-relaxed pt-4"
                >
                    "{randomQuote.sa}"
                </motion.p>

                <div className="flex justify-center items-center gap-3">
                    <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-gray-700"></div>
                    <div className="h-1 w-1 rounded-full bg-blue-500"></div>
                    <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-gray-700"></div>
                </div>

                <div className="space-y-2 px-4">
                    {/* Hindi translation scaled from text-2xl to text-lg */}
                    <p className="text-base md:text-lg text-gray-900 font-medium pt-4">
                        {randomQuote.hi}
                    </p>
                    {/* English translation scaled from text-2xl to text-base/lg */}
                    <p className="text-lg md:text-xl font-semibold text-shadow-red-500 leading-snug pt-2">
                        {randomQuote.en}
                    </p>
                </div>
            </div>

            <motion.div
                className="pt-6 border-t border-gray-800 w-[50%] mx-auto mt-8"
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
                {/* Reduced footer text from text-3xl to text-lg/xl */}
                <p className="text-lg md:text-xl font-mono text-black tracking-widest uppercase mt-2">
                    Code • Create • Inspire
                </p>
            </motion.div>
        </motion.div>
    );
}