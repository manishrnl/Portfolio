import React from "react";

export const projects = [
    {
        title: "💰 Money Manager Full Stack",
        description: (
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                    A comprehensive <span className="font-bold text-gray-900">Personal Finance Management System</span> designed
                    to help users track their financial health with precision.
                </p>
                <p>
                    Built using <span
                    className="text-blue-600 font-semibold text-sm uppercase tracking-tighter">PostgreSQL • Spring Boot • React</span>,
                    the application allows for seamless tracking of incomes, expenses, and
                    custom categories.
                </p>
                <p>
                    Features a dashboard with <span className="font-bold text-gray-900">real-time visualization</span>,
                    Redis caching, and full <span className="font-bold text-gray-900">Docker containerization</span>.
                </p>
            </div>
        ),
        images: [

            "/images/money-manager/dashboard.png",
            "/images/money-manager/filter.png",
            "/images/money-manager/income.png",
            "/images/money-manager/expense.png",
            "/images/money-manager/category.png",
            "/images/money-manager/transaction-history.png",
            "/images/money-manager/add-category.png",
            "/images/money-manager/add-incomes.png",
            "/images/money-manager/add-expenses.png",

        ],
        runLink: "https://manishrnl-money-manager.netlify.app/dashboard",
        viewLink: "https://github.com/manishrnl/money-manager-full-stack.git",
        downloadLink: "https://github.com/manishrnl/money-manager-full-stack/archive/refs/heads/main.zip",
        technologies: ["Spring Boot", "React", "PostgreSQL", "Tailwind CSS", "JWT", "Redis", "Docker"],
    },
    {
        title: "🏡 Airbnb Full Stack Clone",
        description: (
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                    A fully functional <span
                    className="font-bold text-gray-900">Airbnb Clone</span> replicating
                    the modern booking experience with property listings and image uploads.
                </p>
                <p>
                    Engineered with <span
                    className="text-blue-600 font-semibold text-sm uppercase tracking-tighter">Spring Boot & React</span>,
                    it includes secure booking management and <span
                    className="font-bold text-gray-900">JWT-based authentication</span>.
                </p>
                <p>
                    The UI is built with <span
                    className="font-bold text-gray-900">Tailwind CSS</span> for
                    a premium, responsive feel across all devices.
                </p>
            </div>
        ),
        images: [
            "/images/Airbnb Clone/HomePage.png",
            "/images/Airbnb Clone/AboutUs.png",
            "/images/Airbnb Clone/ContactUs.png",
            "/images/Airbnb Clone/Services.png",
            "/images/Airbnb Clone/SignUp.png",
            "/images/Airbnb Clone/Login.png",
        ],
        runLink: "https://manishrnl-1-hotel-clone.netlify.app/",
        viewLink: "https://github.com/manishrnl/AirBnb-Full-Stack-React.git",
        downloadLink: "https://github.com/manishrnl/AirBnb-Full-Stack-React/archive/refs/heads/main.zip",
        technologies: ["Spring Boot", "React", "PostgreSQL", "Tailwind CSS", "JWT", "Docker"],
    },
    {
        title: "🔗 LinkedIn Enterprise Microservices",
        description: (
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                    An enterprise-grade <span className="font-bold text-gray-900">Microservices Architecture</span> project
                    utilizing a distributed system design.
                </p>
                <p>
                    Features <span
                    className="text-blue-600 font-semibold text-sm uppercase tracking-tighter">Kafka Event-Driven Messaging</span> and <span
                    className="text-blue-600 font-semibold text-sm uppercase tracking-tighter">Kubernetes Orchestration</span>.
                </p>
                <p>
                    Uses <span className="font-bold text-gray-900">Neo4j</span> for social
                    graph data and <span
                    className="font-bold text-gray-900">Zipkin</span> for distributed
                    tracing request flows.
                </p>
            </div>
        ),
        images: [
            "/images/LinkedIn/post-created.png",
            "/images/LinkedIn/post-like.png",
            "/images/LinkedIn/post-unlike.png",
            "/images/LinkedIn/send-connection-request.png",
            "/images/LinkedIn/get-4-degree-connection.png",
        ],
        viewLink: "https://github.com/manishrnl/Spring-Linked-In.git",
        downloadLink: "https://github.com/manishrnl/Spring-Linked-In/archive/refs/heads/main.zip",
        technologies: ["Spring Boot", "Kafka", "Kubernetes", "Docker", "Neo4J", "Zipkin"],
    },
    {
        title: "🏦 Complete University Management System",
        description: (
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                    A massive desktop solution (<span className="font-bold text-gray-900">~30,000 lines of code</span>)
                    handling multi-role university administration.
                </p>
                <p>
                    Built with <span
                    className="text-blue-600 font-semibold text-sm uppercase tracking-tighter">JavaFX & MySQL</span>,
                    featuring a modern animated interface for managing courses, fees, and
                    library records.
                </p>
                <p>
                    Provides <span
                    className="font-bold text-gray-900">secure authentication</span> for
                    6 distinct user roles with integrated analytics and reporting tools.
                </p>
            </div>
        ),
        images: [
            "/images/CUMS/login.png",
            "/images/CUMS/faculty.png",
            "/images/CUMS/adminDashboard.png",
            "/images/CUMS/studentsDashboard.png",
            "/images/CUMS/salaryDistribution.png",
            "/images/CUMS/result.png",
            "/images/CUMS/fees.png",
        ],
        viewLink: "https://github.com/manishrnl/complete_university_management_system.git",
        downloadLink: "https://github.com/manishrnl/complete_university_management_system/archive/refs/heads/main.zip",
        technologies: ["JavaFX", "FXML", "MySQL", "JDBC", "Maven"],
    },
    {
        title: "📘 School Attendance Management System",
        description: (
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                    A modular <span className="font-bold text-gray-900">Desktop Attendance System</span> designed
                    for role-based management of students and staff.
                </p>
                <p>
                    Utilizes <span
                    className="text-blue-600 font-semibold text-sm uppercase tracking-tighter">JavaFX & MySQL JDBC</span> to
                    generate comprehensive monthly and custom-range reports.
                </p>
                <p>
                    Supports <span
                    className="font-bold text-gray-900">theme switching</span> and
                    accessibility customization via a clean FXML-based UI.
                </p>
            </div>
        ),
        images: [
            "/images/SAMS/School-Login.png",
            "/images/SAMS/School-Manage-Students.png",
            "/images/SAMS/School-MarkClass-Attendance.png",
            "/images/SAMS/School-Dashboard.png",
            "/images/SAMS/School-Overall-Report.png",
        ],
        viewLink: "https://github.com/manishrnl/School-Attendance-Management-System.git",
        downloadLink: "https://github.com/manishrnl/School-Attendance-Management-System/archive/refs/heads/main.zip",
        technologies: ["JavaFX", "MySQL", "FXML", "CSS"],
    },
    {
        title: "🌐 Portfolio Website",
        description: (
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                    A high-performance <span className="font-bold text-gray-900">Interactive Portfolio</span> built
                    to showcase technical skills and project engineering.
                </p>
                <p>
                    Leverages <span
                    className="text-blue-600 font-semibold text-sm uppercase tracking-tighter">React.js & Framer Motion</span> for
                    smooth animations and a seamless browsing experience.
                </p>
                <p>
                    Fully responsive design ensuring <span
                    className="font-bold text-gray-900">pixel-perfect display</span> across
                    all modern web browsers and devices.
                </p>
            </div>
        ),
        images: [
            "/images/Portfolio/Main_screen.png",
            "/images/Portfolio/Portfolio5.png",
            "/images/Portfolio/Portfolio1.png",
            "/images/Portfolio/Portfolio4.png",
        ],
        viewLink: "https://github.com/manishrnl/Portfolio",
        downloadLink: "https://github.com/manishrnl/Portfolio/archive/refs/heads/master.zip",
        technologies: ["React.js", "Framer Motion", "Tailwind CSS", "Bootstrap"],
    },
    {
        title: "🧮 Advanced Multi-Mode Calculator",
        description: (
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                    A multifunctional <span className="font-bold text-gray-900">Scientific Calculator</span> developed
                    using Java OOP principles.
                </p>
                <p>
                    Supports <span
                    className="text-blue-600 font-semibold text-sm uppercase tracking-tighter">Standard, Scientific & Unit Conversion</span> modes
                    with a responsive FXML interface.
                </p>
                <p>
                    Features include <span
                    className="font-bold text-gray-900">memory storage</span> and
                    history tracking for efficient computational workflows.
                </p>
            </div>
        ),
        images: [
            "/images/Calculator/img1.png",
            "/images/Calculator/img2.png",
            "/images/Calculator/img3.png",
        ],
        viewLink: "https://github.com/manishrnl/Advanced-Calculator.git",
        downloadLink: "https://github.com/manishrnl/Advanced-Calculator/archive/refs/heads/main.zip",
        technologies: ["JavaFX", "OOP", "FXML", "CSS"],
    },
    {
        title: "🏦 Bank Management System",
        description: (
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                    A robust desktop banking application simulating <span
                    className="font-bold text-gray-900">ATM-style functionality</span> using
                    Java Swing.
                </p>
                <p>
                    Handles <span
                    className="text-blue-600 font-semibold text-sm uppercase tracking-tighter">Deposit, Withdrawal & Transaction Tracking</span> through
                    secure event-driven UI logic.
                </p>
                <p>
                    Designed with <span className="font-bold text-gray-900">Object-Oriented persistence</span> to
                    manage account creation and balance verification.
                </p>
            </div>
        ),
        images: [
            "/images/ATM/Login_Screen.png",
            "/images/ATM/Deposit.png",
        ],
        viewLink: "https://github.com/manishrnl/Bank_Management_System",
        downloadLink: "https://github.com/manishrnl/Bank_Management_System/archive/refs/heads/main.zip",
        technologies: ["Java", "Swing", "OOP", "Event Handling"],
    },
    {
        title: "🎮 Tic Tac Toe (PvP + AI)",
        description: (
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                    An interactive game offering <span className="font-bold text-gray-900">Player-vs-Player and AI modes</span> built
                    with JavaFX.
                </p>
                <p>
                    Features <span
                    className="text-blue-600 font-semibold text-sm uppercase tracking-tighter">Heuristic AI Logic</span> for
                    intelligent responses and real-time win-tracking.
                </p>
                <p>
                    Clean <span
                    className="font-bold text-gray-900">FXML architecture</span> with
                    visual feedback for enhanced user engagement.
                </p>
            </div>
        ),
        images: [
            "/images/Tic Tac Toe/tic-tac-toe2.png",
            "/images/Tic Tac Toe/tic-tcc-toe.png",
        ],
        viewLink: "https://github.com/manishrnl/tic-tac-toe-Game.git",
        downloadLink: "https://github.com/manishrnl/tic-tac-toe-Game/archive/refs/heads/main.zip",
        technologies: ["JavaFX", "AI Logic", "FXML", "CSS"],
    },
    {
        title: "✊ Rock Paper Scissors Game",
        description: (
            <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                <p>
                    A real-time implementation of <span
                    className="font-bold text-gray-900">Rock-Paper-Scissors</span> using
                    JavaFX animated outcomes.
                </p>
                <p>
                    Showcases <span
                    className="text-blue-600 font-semibold text-sm uppercase tracking-tighter">Event Handling & UI Design</span> with
                    a competitive score tracking system.
                </p>
            </div>
        ),
        images: [
            "/images/Rock Paper Scissor/Rock-Paper-Scissor1.png",
            "/images/Rock Paper Scissor/Rock-Paper-Scissor2.png",
            "/images/Rock Paper Scissor/Rock-Paper-Scissor3.png",
        ],
        viewLink: "https://github.com/manishrnl/Rock-Paper-Scissor.git",
        downloadLink: "https://github.com/manishrnl/Rock-Paper-Scissor/archive/refs/heads/main.zip",
        technologies: ["JavaFX", "FXML", "OOP", "UI Design"],
    },
];
