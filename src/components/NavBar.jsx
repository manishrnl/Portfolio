import React, {useEffect, useRef, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import "../styleSheet/NavBar.css"

export default function NavBar() {
    const location = useLocation();
    const [visible, setVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const lastScrollY = useRef(0);

    // Hide/show navbar on scroll
    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            if (current > lastScrollY.current && current > 80) setVisible(false);
            else setVisible(true);
            lastScrollY.current = current;
        };
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on navigation
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    // close menu when clicking a link (safe fallback)
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <nav
          className={`nav-root ${visible ? "nav-visible" : "nav-hidden"}`}

            style={{
                zIndex: 1100,
                transition: "transform 0.36s ease, opacity 0.36s ease",
                backdropFilter: "blur(8px)",
            }}
        >
            <div className="container d-flex align-items-center justify-content-end py-2">
 

                {/* mobile toggle */}
                <button
                    className="menu-toggle d-md-none btn"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen((s) => !s)}
                    style={{
                        background: "transparent",
                        border: "1px solid rgba(255,255,255,0.08)",
                        padding: "6px 8px",
                        borderRadius: 8,
                    }}
                >
                    <div style={{width: 22, height: 2, background: "white", marginBottom: 4}}/>
                    <div style={{width: 16, height: 2, background: "white", marginBottom: 4}}/>
                    <div style={{width: 22, height: 2, background: "white"}}/>
                </button>

                {/* desktop/nav links */}
                <div
                    className={`nav-links d-${menuOpen ? "block" : "none"} d-md-flex align-items-center`}
                    style={{gap: 12}}>
                    <ul className="list-unstyled  d-flex flex-column flex-md-row align-items-center mb-0"
                        style={{gap: 8}}>
                        {[
                            {to: "/", label: "Home"},
                            {to: "/about-us", label: "About Me"},
                            {to: "/projects", label: "My Projects"},
                            {to: "/contact-us", label: "Contact Me"},
                        ].map((item) => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    onClick={handleLinkClick}
                                    className={`nav-link d-inline-block text-white px-3 py-2`}
                                    style={{
                                        borderRadius: 20,
                                        textDecoration: "none",
                                        transition: "background 0.2s",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <style jsx>{`

            `}</style>
        </nav>
    );
}
