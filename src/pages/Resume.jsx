import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const Resume = () => {
    useEffect(() => {
        document.title = "Resume - Manish Kumar";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const darkCardStyle = {
        backgroundColor: "#1e1e1e",
        color: "#e0e0e0",
        border: "1px solid #333",
        position: "relative",
        overflow: "hidden",
    };

    const previewOverlayStyle = {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "70%", // Adjusted height for better visibility on wide screens
        background: "linear-gradient(to bottom, rgba(30, 30, 30, 0) 0%, rgba(30, 30, 30, 1) 100%)",
        pointerEvents: "none"
    };

    return (
        <section className="resume-page py-5"
                 style={{ backgroundColor: "#121212", minHeight: "100vh" }}>
            <div className="container">
                <div className="row justify-content-center">
                    {/* Changed col-lg-7 to col-12 for Full Width */}
                    <div className="col-12 mb-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 p-md-5 shadow-lg rounded" // Added responsive padding
                            style={{ ...darkCardStyle, minHeight: "600px" }}
                        >
                            <h2 className="fw-bold mb-4"
                                style={{ color: "#00d4ff" }}>Professional Summary</h2>
                            <p className="lead" style={{ fontSize: "1.2rem", color: "#bbb" }}>
                                Software Development Engineer aspirant specializing in scalable
                                Microservices and AI-driven backend systems using Java and
                                Spring Boot.
                                Proficient in architecting distributed platforms with Docker,
                                Kubernetes, and Kafka to optimize performance.
                            </p>

                            <hr style={{ borderColor: "#444" }} />

                            <h3 className="h4 fw-bold mt-4"
                                style={{ color: "#00d4ff" }}>Technical Skills</h3>
                            <div className="row mt-3">
                                <div className="col-md-6 mb-2">
                                    <strong>Languages:</strong> <span style={{ color: "#bbb" }}>Java, Python, SQL, C++, JavaScript</span>
                                </div>
                                <div className="col-md-6 mb-2">
                                    <strong>Frameworks:</strong> <span style={{ color: "#bbb" }}>Spring Boot 3, Spring AI, React.js</span>
                                </div>
                            </div>

                            <h3 className="h4 fw-bold mt-4" style={{ color: "#00d4ff" }}>Key
                                Projects</h3>
                            <div className="mb-4">
                                <h5 className="fw-bold mb-1 text-white">LinkedIn Clone
                                    (Full-Stack Microservices)</h5>
                                <p className="small mb-2" style={{ color: "#888" }}>Jan 2026 -
                                    Present</p>
                                <ul style={{ color: "#bbb" }}>
                                    <li>Architected using Java, Spring Boot, and
                                        Microservices.
                                    </li>
                                    <li>Optimized connection query performance by 40% using
                                        Neo4j.
                                    </li>
                                </ul>
                            </div>

                            {/* Masking Overlay */}
                            <div style={previewOverlayStyle}></div>

                            <div style={{
                                position: "absolute",
                                bottom: "40px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                textAlign: "center",
                                width: "100%",
                                zIndex: 2
                            }}>
                                <p style={{ color: "#888", marginBottom: "15px" }}>
                                    Detailed text view is restricted in preview.
                                </p>

                                <a href="https://workdrive.zoho.in/file/wtnfrbfcd16d2c0b946c0ae6db013b64b35c4"
                                   className="btn btn-lg btn-info px-5 shadow"
                                   target="_blank"
                                   rel="noreferrer">
                                    View Resume
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;