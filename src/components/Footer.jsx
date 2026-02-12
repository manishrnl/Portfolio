import "bootstrap-icons/font/bootstrap-icons.css";
import "../Footer.css"
import {FaEnvelope} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer text-white mt-5">
            <div className="container py-5">
                <div className="row text-center text-md-start align-items-start g-4">

                    {/* Column 1 — About / Message */}
                    <div className="col-md-4">
                        <h4 className="fw-semibold mb-3">Let's Connect 🌐</h4>
                        <p className="text-light mb-4">
                            I'm always open to collaborating on exciting projects or discussing
                            new ideas.
                        </p>
                    </div>

                    {/* Column 2 — Contact Info */}
                    <div className="col-md-4">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                            Contact Me
                        </h5>

                        {/* Address — opens Mappls location */}
                        <p>
                            <a
                                href="https://www.mappls.com/ctd6rr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-light d-inline-flex align-items-center"
                            >
                                <i className="bi bi-geo-alt-fill me-2"></i>
                                Madhubani, Bihar
                            </a>
                        </p>

                        {/* Email — opens mail app */}
                        <p>
                            <a
                                href="mailto:manishrajrnl@zohomail.in"
                                className="text-light mx-2 d-inline-flex align-items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaEnvelope size={20} className="me-2" />
                                manishrajrnl@zohomail.in
                            </a>
                        </p>

                        {/* Phone — opens dialer on mobile */}
                        <p>
                            <a
                                href="tel:+919877370875"
                                className="text-light d-inline-flex align-items-center"
                            >
                                <i className="bi bi-telephone-fill me-2"></i>
                                +91 98773 70875
                            </a>
                        </p>
                    </div>



                    {/* Column 3 — Social Links */}
                    <div className="col-md-4">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
                            Follow Me
                        </h5>
                        <div
                            className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
                            <a
                                href="https://www.facebook.com/profile.php?id=100011121437261"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn btn btn-outline-light d-flex align-items-center gap-2"
                            >
                                <i className="bi bi-facebook"></i> Facebook
                            </a>

                            <a
                                href="https://www.instagram.com/manish.rnl/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn btn btn-outline-light d-flex align-items-center gap-2"
                            >
                                <i className="bi bi-instagram"></i> Instagram
                            </a>

                            <a
                                href="https://www.linkedin.com/in/manishrnl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn btn btn-outline-light d-flex align-items-center gap-2"
                            >
                                <i className="bi bi-linkedin"></i> LinkedIn
                            </a>

                            <a
                                href="https://x.com/manishrnl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn btn btn-outline-light d-flex align-items-center gap-2"
                            >
                                <i className="bi bi-twitter-x"></i> Twitter
                            </a>

                            <a
                                href="https://github.com/manishrnl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-btn btn btn-outline-light d-flex align-items-center gap-2"
                            >
                                <i className="bi bi-github"></i> GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="border-light my-4"/>

                <div className="text-center">
                    <p className="mb-1">© 2025 My Portfolio . All rights reserved.</p>
                    <p className="mb-0 small">
                        Designed with ❤️ by <strong>Manish</strong> —{" "}
                        {new Date().getFullYear()} <strong>Portfolio</strong>
                    </p>
                </div>
            </div>
        </footer>
    );
}
