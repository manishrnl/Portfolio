import React, {useEffect, useRef, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Menu, Moon, Sun, X} from "lucide-react";
import {AnimatePresence, motion} from "framer-motion";

export default function PremiumNavBar({theme, onToggleTheme}) {
    const location = useLocation();
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredPath, setHoveredPath] = useState(location.pathname);
    const lastScrollY = useRef(0);

    const getActivePath = (path) => (path === "/home" ? "/" : path);

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

    useEffect(() => {
        setHoveredPath(getActivePath(location.pathname));
    }, [location.pathname]);

    const navLinks = [
        {to: "/", label: "Home"},
        {to: "/about-us", label: "Profile"},
        {to: "/projects", label: "My Builds"},
        {to: "/contact-us", label: "Connect"},
        {to: "/resume", label: "Resume"},
    ];

    const getDesktopLinkColor = (path) => {
        const activePath = getActivePath(location.pathname);
        const isActive = activePath === path;
        const isHighlighted = hoveredPath === path;

        if (isHighlighted || isActive) {
            return "bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(124,77,255,0.28)]";
        }

        return "text-inherit opacity-80 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-fuchsia-600 group-hover:to-yellow-500 group-hover:bg-clip-text group-hover:text-transparent group-hover:opacity-100";
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[1100] transition-all duration-500 ease-out
            ${visible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"}`}
        >
            <nav className="relative flex h-16 w-full items-center justify-between border-b border-white/70 bg-white/80 px-4 shadow-[0_12px_44px_rgba(31,38,135,0.10)] backdrop-blur-2xl transition-colors duration-300 dark:border-zinc-800/80 dark:bg-zinc-950/90 dark:shadow-black/30 md:px-8">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-80" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-yellow-400 opacity-85" />
                <Link to="/" className="group flex min-w-0 items-center gap-2 text-decoration-none sm:gap-3">
                    <span className="block min-w-0">
                        <span className="font-brand block bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 bg-clip-text text-base font-black leading-tight text-transparent drop-shadow-[0_0_10px_rgba(124,77,255,0.35)]">
                            {"Manish"}
                        </span>
                        <span className=" block bg-gradient-to-r from-emerald-500 via-blue-500 to-yellow-500 bg-clip-text text-[10px] font-bold leading-tight text-transparent">
                            Spring | React | Systems
                        </span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 bg-transparent px-5 py-1.5 md:flex">
                    {navLinks.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            onMouseEnter={() => setHoveredPath(item.to)}
                            onMouseLeave={() => setHoveredPath(location.pathname)}
                            className="group text-decoration-none relative z-10 overflow-hidden px-1 py-2 text-m tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <span className={`relative z-10 transition-all duration-300 ${getDesktopLinkColor(item.to)}`}>
                                {item.label}
                            </span>
                            {item.to === hoveredPath && (
                                <motion.span
                                    layoutId="navbar-underline"
                                    className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-yellow-400 shadow-[0_0_16px_rgba(124,77,255,0.45)]"
                                    transition={{
                                        type: "spring",
                                        bounce: 0.25,
                                        duration: 0.5
                                    }}
                                />
                            )}
                            {item.to === hoveredPath && (
                                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-yellow-300/15 to-transparent"></span>
                            )}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={onToggleTheme}
                        className="rounded-full border border-zinc-200 bg-white/80 p-2 text-zinc-900 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-yellow-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-yellow-300 dark:hover:bg-zinc-800"
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    >
                        {theme === "dark" ? <Sun size={18}/> : <Moon size={18}/>}
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        className="p-2 text-zinc-900 dark:text-zinc-100 md:hidden"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
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
                            className="absolute top-full left-0 right-0 mt-4 border-y border-zinc-100 bg-white/95 p-4 shadow-2xl backdrop-blur-2xl dark:border-zinc-800 dark:bg-zinc-950/95 md:hidden"
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
                                            className="font-brand block border-b border-zinc-100 px-6 py-4 font-black uppercase tracking-[0.14em] text-zinc-700 transition-all hover:-translate-y-1 hover:translate-x-1 hover:bg-gradient-to-r hover:from-blue-600 hover:via-fuchsia-600 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent active:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-100 dark:active:bg-zinc-800"
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
