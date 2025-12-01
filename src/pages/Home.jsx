import {React ,useEffect}from "react";
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
                        alt="Manish"
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
                    <h5 className="hero-subtitle mb-2">
                        Hey, I'm Manish
                    </h5>

                    <h1 className="hero-title fw-bold mb-3">
                        <span className="hero-title-accent">
                            {"{Full Stack} "}
                        </span>
                        Web, Desktop & App Developer <span>{"</>"}</span>
                    </h1>

                    <p className="hero-tagline mb-2">
                        With expertise in cutting-edge technologies such as{" "}
                        <span className="hero-tagline-strong">Spring Boot</span>,{" "}
                        <span className="hero-tagline-strong">React</span>,{" "}
                        <span className="hero-tagline-strong">JavaFX</span>...
                    </p>

                    <p className="hero-tagline">
                        I deliver solutions that are scalable, performant, and
                        crafted with clean, maintainable code.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="container stats-section text-center mt-5">
                <div className="row g-4">
                    <div className="col-6 col-md-3">
                        <div className="stat-card">
                            <h3>1+</h3>
                            <p>Years Experience</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="stat-card">
                            <h3>10+</h3>
                            <p>Projects Completed</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="stat-card">
                            <h3>Still</h3>
                            <p>Learning & Improving</p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="stat-card">
                            <h3>0</h3>
                            <p>Awards (for now 😉)</p>
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
