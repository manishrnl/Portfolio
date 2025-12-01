import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styleSheet/Project.css";

export default function Projects() {
    useEffect(() => {
        document.title = "My Projects - Manish Kumar";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
    const projects = [
        {
            title: "🏡 Airbnb Full Stack Clone",
            description: (
                <>
                    A fully functional{" "}
                    <strong>
                        Airbnb Full Stack Web Application (Under Development)
                    </strong>{" "}
                    built with
                    <span className="text-success">
                        {" "}
                        PostgreSQL, Spring Boot, and React
                    </span>
                    . It replicates the modern Airbnb experience with user
                    authentication, property listings, image uploads, advanced
                    search and filtering, and secure booking management. The app
                    features a responsive and elegant UI built with{" "}
                    <strong>React, Tailwind CSS, and React Router</strong>,
                    along with a <strong>Spring Boot backend</strong> connected
                    to <strong>PostgreSQL</strong>
                    for robust data storage. It includes{" "}
                    <span className="text-success">
                        JWT-based authentication
                    </span>
                    ,<span className="text-success">RESTful APIs</span>, and
                    real-time data updates for a smooth UX. Perfect for learning
                    and demonstrating full-stack development, CRUD operations,
                    and API integration with clean architecture and reusable
                    components.{" "}
                    <a
                        href="https://manishrnl-1-hotel-clone.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Run Project
                    </a>
                </>
            ),
            images: [
                "/images/Airbnb Clone/HomePage.png",
                "/images/Airbnb Clone/AboutUs.png",
                "/images/Airbnb Clone/ContactUs.png",
                "/images/Airbnb Clone/Services.png",
                "/images/Airbnb Clone/SignUp.png",
                "/images/Airbnb Clone/Login.png",
            ],
            viewLink:
                "https://github.com/manishrnl/AirBnb-Full-Stack-React.git",
            downloadLink:
                "https://github.com/manishrnl/AirBnb-Full-Stack-React/archive/refs/heads/main.zip",
            technologies: [
                "Spring Boot",
                "React",
                "PostgreSQL",
                "Tailwind CSS",
                "JWT Authentication",
                "Render",
                "Docker",
            ],
        },

        {
            title: "🏦 Complete University Management System",
            description: (
                <>
                    A full-scale <strong>University Management System</strong>{" "}
                    (~30,000 lines of code) developed in
                    <strong> JavaFX</strong> with a <strong>MySQL</strong>{" "}
                    backend. It provides secure multi-role authentication for{" "}
                    <span className="text-success">
                        ( Admin, Teacher, Student, Librarians, Accountants &
                        Ground Staff )
                    </span>
                    , enabling seamless management of courses, departments,
                    attendance, fees, results, and library records. The
                    application offers a modern, animated JavaFX interface built
                    with FXML and CSS, supporting theme customization and
                    responsive layouts. It integrates tightly with a MySQL
                    database using JDBC for efficient data handling and includes
                    dashboards, analytics, and reporting tools for comprehensive
                    university administration. Designed as a complete desktop
                    solution for educational institutions, it delivers polished
                    usability, modular code structure, and reliable performance.
                </>
            ),
            images: [
                "/images/CUMS/login.png",
                "/images/CUMS/forgetPassword.png",
                "/images/CUMS/changePassword.png",
                "/images/CUMS/signup.png",
                "/images/CUMS/faculty.png",
                "/images/CUMS/adminDashboard.png",
                "/images/CUMS/viewAttendance.png",
                "/images/CUMS/studentsDashboard.png",
                "/images/CUMS/staffsDashboard.png",
                "/images/CUMS/salaryDistribution.png",
                "/images/CUMS/result.png",
                "/images/CUMS/profileView.png",
                "/images/CUMS/notifications.png",
                "/images/CUMS/markAttendance.png",
                "/images/CUMS/fees.png",
            ],
            viewLink:
                "https://github.com/manishrnl/complete_university_management_system.git",
            downloadLink:
                "https://github.com/manishrnl/complete_university_management_system/archive/refs/heads/main.zip",
            technologies: ["JavaFX", "FXML", "CSS", "MySQL", "JDBC", "Maven"],
        },
        {
            title: "📘 School Attendance Management System",
            description: (
                <>
                    A modern, modular{" "}
                    <strong> School Attendance Management System </strong>{" "}
                    developed in JavaFX with MySQL backend. It provides secure
                    role-based authentication{" "}
                    <span className="text-success">
                        {" "}
                        (Admin, Teachers, Staff), easy student and teacher
                        management, class-wise and individual attendance
                        marking, and comprehensive reporting (monthly, overall,
                        and custom date ranges)
                    </span>
                    . The app uses FXML/CSS for a clean, responsive UI and
                    supports theme switching and font customization for improved
                    accessibility. Built with JDBC for reliable MySQL
                    connectivity and shipped with database schema and optimized
                    queries for quick setup. Ideal for schools wanting a
                    polished desktop solution with exportable reports and a
                    minimal deployment footprint.
                </>
            ),
            images: [
                "/images/SAMS/School-Login.png",
                "/images/SAMS/School-Manage-Students.png",
                "/images/SAMS/School-Manage-Teachers.png",
                "/images/SAMS/School-MarkClass-Attendance.png",
                "/images/SAMS/School-Dashboard.png",
                "/images/SAMS/School-Monthly-Attendance-Report.png",
                "/images/SAMS/School-Overall-Report.png",
                "/images/SAMS/School-View-Attendance.png",
            ],
            viewLink:
                "https://github.com/manishrnl/School-Attendance-Management-System.git",
            downloadLink:
                "https://github.com/manishrnl/School-Attendance-Management-System/archive/refs/heads/main.zip",
            technologies: ["JavaFX", "MySQL", "FXML", "CSS", "Scene Builder"],
        },
        {
            title: "🌐 Portfolio Website",
            description: (
                <>
                    A fully responsive and interactive portfolio website{" "}
                    <span className="text-success">
                        {" "}
                        built with React.js, HTML, and CSS to present my
                        projects, technical skills, personal achievements & lots
                        more . It features a modern UI with smooth animations,
                        dynamic routing, and modular components for a seamless
                        browsing experience. Designed with performance,
                        accessibility, and responsiveness in mind, the site
                        adapts beautifully across all devices{" "}
                    </span>
                    . It includes dedicated sections for project showcases,
                    skill highlights, career timeline, and a contact form for
                    easy communication. This portfolio reflects my passion for
                    clean design, efficient coding, and continuous learning in
                    modern web development.
                </>
            ),
            images: [
                "/images/Portfolio/Main_screen.png",
                "/images/Portfolio/Portfolio5.png",
                "/images/Portfolio/Portfolio1.png",
                "/images/Portfolio/Portfolio4.png",
                "/images/Portfolio/Portfolio3.png",
                "/images/Portfolio/Portfolio2.png",
            ],
            viewLink: "https://github.com/manishrnl/Portfolio",
            downloadLink:
                "https://github.com/manishrnl/Portfolio/archive/refs/heads/master.zip",
            technologies: [
                "React.js",
                "HTML",
                "CSS",
                "Framer Motion",
                "Bootstrap",
            ],
        },
        {
            title: "🧮 Advanced Multi-Mode Calculator",
            description: (
                <>
                    <bold>
                        {" "}
                        A powerful, multifunctional scientific calculator
                    </bold>
                    developed using JavaFX with FXML/CSS and Java OOP
                    principles. It{" "}
                    <span className="text-success">
                        {" "}
                        supports both standard and scientific modes, features
                        unit-conversion tools, memory/history storage, and a
                        sleek, responsive interface{" "}
                    </span>{" "}
                    that adapts to user workflows. With modular design for
                    extendability and clean separation of logic and UI, it
                    enables efficient computation and an improved user
                    experience in desktop environments.
                </>
            ),
            images: [
                "/images/Calculator/img1.png",
                "/images/Calculator/img2.png",
                "/images/Calculator/img3.png",
            ],
            viewLink: "https://github.com/manishrnl/Advanced-Calculator.git",
            downloadLink:
                "https://github.com/manishrnl/Advanced-Calculator/archive/refs/heads/main.zip",
            technologies: ["JavaFX", "OOP", "FXML", "CSS", "Math Logic"],
        },
        {
            title: "🏦 Bank Management System",
            description: (
                <>
                    A comprehensive banking desktop application built in Java
                    using Swing that simulates{" "}
                    <span className="text-success">
                        {" "}
                        ATM-style functionality — from secure login and account
                        creation to deposit/withdrawal operations, balance
                        checking, and transaction history tracking{" "}
                    </span>
                    . Designed with file-based or simple persistence and
                    event-driven UI elements, the system delivers both usability
                    and foundational banking logic for educational projects or
                    lightweight institutional use.
                </>
            ),
            images: [
                "/images/ATM/Login_Screen.png",
                "/images/ATM/Deposit.png",
                "/images/ATM/Login_Screen.png",
            ],
            viewLink: "https://github.com/manishrnl/Bank_Management_System",
            downloadLink:
                "https://github.com/manishrnl/Bank_Management_System/archive/refs/heads/main.zip",
            technologies: [
                "Java",
                "OOP",
                "File Handling",
                "Swing",
                "Event Handling",
            ],
        },
        {
            title: "🎮 Tic Tac Toe (PvP + AI)",
            description: (
                <>
                    An engaging JavaFX game offering both{" "}
                    <span className="text-success">
                        {" "}
                        Player-vs-Player and Player-vs-AI gameplay modes,
                        featuring win-tracking, heuristics for AI responses, and
                        a smooth UI built with FXML and CSS for styling{" "}
                    </span>
                    . The project emphasises clean architecture, interactive
                    game flows, replayability and user engagement via visual
                    feedback and intuitive controls.
                </>
            ),
            images: [
                "/images/Tic Tac Toe/tic-tac-toe2.png",
                "/images/Tic Tac Toe/tic-tcc-toe.png",
            ],
            viewLink: "https://github.com/manishrnl/tic-tac-toe-Game.git",
            downloadLink:
                "https://github.com/manishrnl/tic-tac-toe-Game/archive/refs/heads/main.zip",
            technologies: ["JavaFX", "AI Logic", "FXML", "CSS"],
        },
        {
            title: "✊ Rock Paper Scissors Game",
            description: (
                <>
                    A fun and interactive JavaFX implementation of the classic
                    Rock-Paper-Scissors game where{" "}
                    <span className="text-success">
                        {" "}
                        users compete against the computer in real-time. Built
                        with FXML and CSS, the UI features animated outcomes,
                        score tracking, and a user-centric design for
                        straightforward yet polished gameplay{" "}
                    </span>
                    . An ideal mini-project for showcasing UI design, event
                    handling, and object-oriented game logic.
                </>
            ),
            images: [
                "/images/Rock Paper Scissor/Rock-Paper-Scissor1.png",
                "/images/Rock Paper Scissor/Rock-Paper-Scissor2.png",
                "/images/Rock Paper Scissor/Rock-Paper-Scissor3.png",
            ],
            viewLink: "https://github.com/manishrnl/Rock-Paper-Scissor.git",
            downloadLink:
                "https://github.com/manishrnl/Rock-Paper-Scissor/archive/refs/heads/main.zip",
            technologies: ["JavaFX", "FXML", "OOP", "UI Design"],
        },
    ];
    const [visibleCount, setVisibleCount] = useState(3);
    const [viewerImages, setViewerImages] = useState(null);
    const [viewerIndex, setViewerIndex] = useState(0);
    const openViewer = (images, index) => {
        setViewerImages(images);
        setViewerIndex(index);
        document.body.style.overflow = "hidden";
    };
    const closeViewer = () => {
        setViewerImages(null);
        document.body.style.overflow = "auto";
    };
    const nextImage = useCallback(() => {
        setViewerIndex((prev) =>
            viewerImages ? (prev + 1) % viewerImages.length : prev
        );
    }, [viewerImages]);

    const prevImage = useCallback(() => {
        setViewerIndex((prev) =>
            viewerImages
                ? (prev - 1 + viewerImages.length) % viewerImages.length
                : prev
        );
    }, [viewerImages]);

    useEffect(() => {
        const handleKey = (e) => {
            if (!viewerImages) return;
            if (e.key === "Escape") closeViewer();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [viewerImages, nextImage, prevImage]);

    const onDragEnd = (offset, velocity) => {
        const swipe = offset + velocity * 50;
        if (swipe < -120) nextImage();
        else if (swipe > 120) prevImage();
    };

    const loadMore = () =>
        setVisibleCount((prev) => Math.min(projects.length, prev + 3));

    return (
        <section
            id="projects"
            className="text-white py-5"
            style={{
                // background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
                minHeight: "100vh",
                overflowX: "hidden",
            }}
        >
            <div className="container py-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center fw-bold text-warning mb-3"
                    style={{ fontSize: "2.2rem" }}
                >
                    💼 Featured Projects
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center mb-5"
                    style={{
                        color: "rgba(255,255,255,0.85)",
                        maxWidth: "700px",
                        margin: "0 auto",
                    }}
                >
                    Explore my collection of software projects — from full-stack
                    web apps to desktop tools — built with passion and
                    precision.
                </motion.p>

                {/* Responsive Grid */}
                <div className="project-grid">
                    {projects.slice(0, visibleCount).map((p, idx) => (
                        <motion.div
                            key={idx}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <div className="image-strip">
                                {p.images.map((src, i) => (
                                    <img
                                        title="Click to Open Image in a Bigger Screen"
                                        key={i}
                                        src={src}
                                        alt={p.title}
                                        onClick={() => openViewer(p.images, i)}
                                    />
                                ))}
                            </div>

                            <h3 className="fw-bold text-warning mt-3">
                                {p.title}
                            </h3>
                            <p className="text-light small mb-3">
                                {p.description}
                            </p>

                            <div className="bottom-section mt-auto">
                                <div className="tech-list text-warning flex flex-col gap-2 mb-3">
                                    <span className="font-semibold">
                                        Technologies Used:
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {p.technologies.map((t, i) => (
                                            <span
                                                key={i}
                                                className="border border-green-400 text-green-300 rounded-full px-3 py-1 text-sm font-medium hover:bg-green-900/30 transition-colors"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="btns">
                                    <a
                                        href={p.viewLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        🔗 View
                                    </a>
                                    <a
                                        href={p.downloadLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        ⬇ Download
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {visibleCount < projects.length && (
                    <div className="text-center mt-5">
                        <button
                            onClick={loadMore}
                            className="btn btn-warning fw-semibold px-4 py-2"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>

            {/* Image Viewer Overlay */}
            <AnimatePresence>
                {viewerImages && (
                    <motion.div
                        key="viewer"
                        className="viewer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeViewer}
                    >
                        <motion.img
                            key={viewerIndex}
                            src={viewerImages[viewerIndex]}
                            alt="viewer"
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.6}
                            onDragEnd={(e, { offset, velocity }) =>
                                onDragEnd(offset.x, velocity.x)
                            }
                            onClick={(e) => e.stopPropagation()}
                        />

                        {viewerImages.length > 1 && (
                            <>
                                <button
                                    className="nav left"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prevImage();
                                    }}
                                >
                                    ‹
                                </button>
                                <button
                                    className="nav right"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextImage();
                                    }}
                                >
                                    ›
                                </button>
                            </>
                        )}

                        <button
                            className="close"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeViewer();
                            }}
                        >
                            ✕
                        </button>

                        <div className="counter">
                            {viewerIndex + 1} / {viewerImages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
