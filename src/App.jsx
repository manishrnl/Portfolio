import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {lazy, Suspense, useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.jsx";

import { Navigate } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects.jsx"));
const Contact = lazy(() => import("./pages/Contact"));
const ThankYou = lazy(() => import("./pages/ThankYou.jsx"));
const Resume = lazy(() => import("./pages/Resume.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));

const getInitialTheme = () => {
    if (typeof window === "undefined") {
        return "light";
    }

    const savedTheme = window.localStorage.getItem("portfolio-theme");
    if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

function App() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", theme === "dark");
        root.style.colorScheme = theme;
        window.localStorage.setItem("portfolio-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
    };

    return (
        <Router>
            <NavBar theme={theme} onToggleTheme={toggleTheme} />
            <main className="app-shell bg-white text-gray-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100 dark:[&_.bg-white]:bg-zinc-900 dark:[&_.bg-gray-50]:bg-zinc-900 dark:[&_.bg-gray-100]:bg-zinc-950 dark:[&_.bg-gray-200]:bg-zinc-900 dark:[&_.bg-gray-300]:bg-zinc-950 dark:[&_.text-gray-950]:text-zinc-50 dark:[&_.text-gray-900]:text-zinc-50 dark:[&_.text-gray-800]:text-zinc-100 dark:[&_.text-gray-700]:text-zinc-300 dark:[&_.text-gray-600]:text-zinc-300 dark:[&_.text-gray-500]:text-zinc-400 dark:[&_.border-gray-100]:border-zinc-800 dark:[&_.border-gray-300]:border-zinc-700 dark:[&_.border-gray-400]:border-zinc-700">
                <Suspense fallback={<div className="min-h-screen bg-white pt-28 text-center text-sm font-semibold text-gray-500 dark:bg-zinc-950 dark:text-zinc-400">Loading portfolio...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact-us" element={<Contact />} />
                        <Route path="/thank-you" element={<ThankYou />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/page-not-found" element={<PageNotFound />} />
                        <Route path="*" element={<Navigate to="/projects" replace />}
                        />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
