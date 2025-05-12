import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: creator,
  },
  {
    title: "Java Software Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Java Developer",
    icon: mobile,
  },
  {
    title: "JavaFX and Spring Boot Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  
   {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: mobile,
  },
  {
    name: "git",
    icon: git,
  },
 
  {
    name: "docker",
    icon: docker,
  },
   {
    name: "Spring Boot",
    icon: creator,
  },
];

const experiences = [

{
  title: "Web Developer",
  company_name: "Code on GitHub",
  icon: creator,
  iconBg: "#383E56",
  date: "Jan 2021 - Feb 2022",
  points: [
    "Built responsive and interactive websites using HTML, CSS, JavaScript, and React.js.",
    "Collaborated with designers to implement user-friendly UI/UX layouts.",
    "Optimized front-end performance through efficient code and lazy loading techniques.",
    "Integrated REST APIs and ensured proper error handling and validation on the client side."
  ],
},
 {
  title: "Java FX Developer",
  company_name: "Code on GitHub",
  icon: mobile,
  iconBg: "#383E56",
  date: "March 2024 - April 2025",
  points: [
    "Developed interactive desktop applications using JavaFX and Scene Builder.",
    "Implemented dynamic UI components with FXML and CSS styling for cross-platform consistency.",
    "Integrated backend MySQL databases using JDBC for data persistence and retrieval.",
    "Debugged and optimized application performance, ensuring responsive and user-friendly interfaces."
  ],
},
{
  title: "Spring Boot Developer",
  company_name: "Code on GitHub",
  icon: creator,
  iconBg: "#383E56",
  date: "May 2025 - Present",
  points: [
    "Developed RESTful APIs and microservices using Spring Boot and Spring MVC.",
    "Implemented security features using Spring Security and JWT authentication.",
    "Worked with JPA/Hibernate for ORM and integrated PostgreSQL for database operations.",
    "Wrote unit and integration tests using JUnit and Mockito to ensure robust application logic."
  ],
},
{
  title: "Java Full Stack Developer",
  company_name: "Code on GitHub",
  icon: mobile,
  iconBg: "#383E56",
  date: "May 2025 - Present",
  points: [
    "Developing full-stack applications using Java (Spring Boot) for backend and React.js for frontend.",
    "Designing scalable APIs and integrating them with dynamic frontend components.",
    "Managing application state using Redux and handling complex form validations.",
    "Implementing CI/CD pipelines and managing deployments via GitHub Actions and Docker."
  ],
}

];

const testimonials = [
  {
    testimonial:
      "Working with Manish on the Student Attendance Management System made things so much easier. He handled the backend logic efficiently and was always ready to help debug issues.",
    name: "Amit Sharma",
    designation: "Backend Intern",
    company: "Code on GitHub",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Manish’s attention to detail during the development of our Library Management System was impressive. His JavaFX work ensured smooth navigation and a professional look.",
    name: "Priya Verma",
    designation: "UI Designer",
    company: "Code on GitHub",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "During the development of our full-stack application, Manish was always quick to solve problems. His integration between Spring Boot and React made data handling seamless.",
    name: "Rahul Sen",
    designation: "Full Stack Trainee",
    company: "Code on GitHub",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
];


const projects = [
  {
    name: "📘 School Attendance Management System",
    description:
      "A robust and feature-rich school attendance system built with JavaFX and MySQL. It supports attendance tracking for students and teachers, generates class-wise/monthly reports, and includes secure login, user roles, and real-time database integration.There is a features of changing Themes , font Name , Font Size as well.",
    tags: [
      {
        name: "JavaFX",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "gitHub",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/manishrnl/School-Attendance-Management-System.git",
  },
  {
    name: "🌐 Portfolio Website",
    description:
    "A clean, responsive personal portfolio website built using HTML, CSS, and JavaScript to showcase my projects, resume, and skills. Fully optimized for all devices with a user-friendly interface.", 
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/manishrnl/Portfolio",
  },
  {
    name: "🧮 Advanced Multi-Mode Calculator",
    description:
     "A multifunctional scientific calculator developed using JavaFX. It includes currency and unit conversion, scientific calculations, and a standard mode. Great for students and professionals alike.",     tags: [
      {
        name: "JavaFX",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "gitHub",
        color: "pink-text-gradient",
      },
    ],
    image: shopify,
    source_code_link: "https://github.com/manishrnl/Advanced-Calculator.git",
  },
   {
    name: "🏦 Bank Management System",
    description:
    " Simulates ATM functionality with secure login, deposit, withdrawal, and balance checking. Built in Java to emulate real-world banking operations with database support.",     tags: [
      {
        name: "JavaFX",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "gitHub",
        color: "pink-text-gradient",
      },
    ],
    image: typescript,
    source_code_link: "https://github.com/manishrnl/Bank_Management_System.git",
  },
     {
    name: "🎮 Tic Tac Toe (PvP + AI)",
    description:
   "A fun and interactive JavaFX game where players can play against each other or an AI. Includes win tracking and user-friendly interface to enhance gameplay experience.",     
         tags: [
      {
        name: "JavaFX",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "gitHub",
        color: "pink-text-gradient",
      },
    ],
    image: tailwind,
    source_code_link: "https://github.com/manishrnl/tic-tac-toe-Game.git",
  },
     {
    name: "✊ Rock Paper Scissors Game",
    description:
   "  A classic game built using JavaFX where users play against the system. The game logic evaluates the outcome based on selections and displays dynamic results in real-time.", 
      tags: [
      {
        name: "JavaFX",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "gitHub",
        color: "pink-text-gradient",
      },
    ],
    image: figma,
    source_code_link: "https://github.com/manishrnl/Rock-Paper-Scissor.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
