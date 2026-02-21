import { React, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Motto from "../components/Motto.jsx";

const Home = () => {
    useEffect(() => {
        document.title = "Home - Manish Kumar";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <section className="hero-section home-container py-5">
            {/* Hero Section */}
            <div className="container text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
                <div className="profile-img mb-4 mb-md-0 d-flex justify-content-center justify-content-md-start">
                    <motion.img
                        src="/images/Manish.png"
                        alt="Manish Kumar"
                        className="hero-img"
                        style={{
                            width: "180px",
                            height: "180px",
                            objectFit: "cover",
                        }}
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        animate={{
                            opacity: 1,
                            y: [0, -10, 0],
                            scale: 1,
                        }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeatType: "mirror",
                        }}
                    />
                </div>

                <div className="hero-text ms-md-5 text-md-start">
                    <h3 className="hero-subtitle mb-2">
                        Hey, I'm Manish
                    </h3>

                    <h1 className="hero-title fw-bold mb-3">
                        <span className="hero-title-accent">
                            {"{Software Development} "}
                        </span>
                        Engineering Aspirant <span>{"</>"}</span>
                    </h1>

                    <h4 className="hero-tagline mb-2">
                        Specializing in <span className="hero-tagline-strong">Scalable Microservices</span> and{" "}
                        <span className="hero-tagline-strong">AI-driven Backend Systems</span>.
                    </h4>

                    <h5 className="hero-tagline">
                        Architecting distributed platforms with <strong>Spring Boot</strong>, <strong>Docker</strong>,
                        and <strong>Kubernetes</strong> to optimize system reliability and performance.
                    </h5>
                </div>
            </div>

            {/* Stats Section */}
            <div className="container stats-section text-center mt-5">
                <div className="row g-4 justify-content-end">
                    <div className="col-6 col-md-3">
                        <div className="stat-card">
                            <h3>May 2026</h3>
                            <p>Expected Graduation </p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="stat-card">
                            <h3>99.9%</h3>
                            <p>Service Uptime </p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="stat-card">
                            <h3>40%</h3>
                            <p>Query Optimization </p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="stat-card">
                            <h3>Microservices</h3>
                            <p>Architecture Focus </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <Motto />
            </div>
        </section>
    );
};

export default Home;