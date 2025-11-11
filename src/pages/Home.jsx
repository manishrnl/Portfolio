import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {motion} from "framer-motion";
import Motto from "../components/Motto.jsx";

const Home = () => {
    const imageStyle = {
        borderRadius: "20px"
    }
    return (
        <div className="home-container bg-dark text-light py-5 mt-lg-5">

            {/* Hero Section */}
            <div
                className="container text-center text-md-start d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="profile-img mb-4 mb-md-0">
                    <motion.img
                        src="/images/Manish.png"
                        alt="Manish"
                        className="rounded-circle shadow-lg mb-4 hero-img border border-3 border-light"
                        style={{
                            width: "180px",
                            height: "180px",
                            objectFit: "cover",
                        }}
                        initial={{opacity: 0, scale: 0.8, y: -20}}
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

                <div className="hero-text ms-md-5  text-md-start">
                    <h5 className="text-secondary">Hey, I'm Manish </h5>
                    <h1 className="fw-bold  ">
                        <span className="text-success">{'{Full Stack}'} </span> Web , Desktop &
                        App Developer <span>{'</>'}</span>


                    </h1>
                    <h5 className="mt-3 text-light-50 text-center ">
                        With expertise in cutting-edge technologies such as Spring Boot , React
                        , JavaFX . . . </h5>
                    <h5 className="text-center"> I deliver web solutions that are both
                        innovative and robust.
                    </h5>

                </div>
            </div>

            {/* Stats Section */}
            <div className="container text-center my-5 mt-5">
                <div className="row g-4">
                    <div className="col-6 col-md-3">
                        <h3 className="text-success fw-bold">1+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <h3 className="text-success fw-bold">10+</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <h3 className="text-success fw-bold">Still Learning</h3>
                        <p>Satisfied Clients</p>
                    </div>
                    <div className="col-6 col-md-3">
                        <h3 className="text-success fw-bold">0</h3>
                        <p>Awards Won</p>
                    </div>
                </div>
            </div>

            <Motto/>
        </div>
    );
};

export default Home;
