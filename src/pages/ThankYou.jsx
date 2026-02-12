import {useEffect} from "react";
import {Link} from "react-router-dom";

export default function ThankYou() {
    useEffect(() => {
        document.title = "Thank You - My PortFolio";
    }, []);
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "2rem",
                backdropFilter: "blur(10px)",
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <h1
                style={{
                    fontSize: "2.5rem",
                    marginBottom: "1rem",
                    color: "white", // or your --primary-color
                }}
            >
                Thank You!
            </h1>
            <p
                style={{
                    fontSize: "1.2rem",
                    marginBottom: "2rem",
                    color: "white",
                }}
            >
                Your message has been sent successfully. I'll get back to you soon!
            </p>
            <Link
                to="/"
                style={{
                    padding: "0.8rem 2rem",
                    background: "linear-gradient(45deg, #007bff, #6610f2)",
                    color: "white",
                    border: "none",
                    borderRadius: "25px",
                    textDecoration: "none",
                    fontWeight: "500",
                    transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.transform = "translateY(-3px)")}
                onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
                Back to Portfolio
            </Link>
        </div>
    );
}
