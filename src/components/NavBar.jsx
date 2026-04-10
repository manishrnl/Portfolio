import React, {useEffect, useRef, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Menu, X} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";

export default function PremiumNavBar() {
    const location = useLocation();
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState(location.pathname);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            if (current > lastScrollY.current && current > 100) {
                setVisible(false);
                setMenuOpen(false);
            } else {
                setVisible(true);
            }
            lastScrollY.current = current;
        };
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        {to: "/", label: "Home"},
        {to: "/about-us", label: "About"},
        {to: "/projects", label: "Projects"},
        {to: "/contact-us", label: "Contact"},
        { to: "/resume", label: "Resume" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[1100] flex justify-center transition-all duration-500 ease-out px-4
            ${visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}
        >
            <nav
                className="relative w-full max-w-[40%] rounded-full backdrop-blur-xl  shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] px-4 py-2">
                <div className=" flex items-center justify-between h-12">


                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1 relative">
                        {navLinks.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                onMouseEnter={() => setHoveredPath(item.to)}
                                onMouseLeave={() => setHoveredPath(location.pathname)}
                                className={`text-decoration-none relative px-4 py-2.5 text-l font-medium transition-colors duration-300 z-10
                                ${location.pathname === item.to ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-800"}`}
                            >
                                {item.label}
                                {item.to === hoveredPath && (
                                    <motion.div
                                        layoutId="navbar-hover"
                                        className="absolute inset-0 bg-yellow-400 rounded-full -z-10  "
                                        transition={{
                                            type: "spring",
                                            bounce: 0.25,
                                            duration: 0.5
                                        }}
                                    />
                                )}
                            </Link>
                        ))}


                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-zinc-900 mr-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={20} strokeWidth={1.5}/> :
                            <Menu size={20} strokeWidth={1.5}/>}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{opacity: 0, y: -10, scale: 0.95}}
                            animate={{opacity: 1, y: 10, scale: 1}}
                            exit={{opacity: 0, y: -10, scale: 0.95}}
                            className="absolute top-full left-0 right-0 mt-4 bg-white/90 backdrop-blur-2xl border border-zinc-100 rounded-[2rem] p-4 shadow-2xl md:hidden"
                        >
                            <div className="flex flex-col gap-1">
                                {navLinks.map((item, idx) => (
                                    <motion.div
                                        key={item.to}
                                        initial={{opacity: 0, x: -10}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{delay: idx * 0.05}}
                                    >
                                        <Link
                                            to={item.to}
                                            onClick={() => setMenuOpen(false)}
                                            className="block py-4 px-6 rounded-2xl  font-medium text-zinc-800 active:bg-zinc-100 transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}