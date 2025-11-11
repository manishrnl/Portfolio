import React, {useEffect} from "react";
import {motion} from "framer-motion";

export default function Contact() {
    useEffect(() => {
        document.title = "Contact Me - My Portfolio";
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    return (
        <>
            <section
                className="d-flex align-items-center text-white"
                style={{
                    minHeight: "100vh",
                    //background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
                    padding: "60px 20px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* ✅ Background glow effect */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        background:
                            "radial-gradient(circle at 20% 40%, rgba(255,255,255,0.06), transparent 70%)",
                        animation: "moveGlow 10s ease-in-out infinite alternate",
                        zIndex: 1,
                    }}
                ></div>

                <div className="container position-relative" style={{zIndex: 2}}>
                    <div className="row align-items-center g-4">
                        {/* ✅ LEFT SIDE — Map */}
                        <div className="col-12 col-lg-6">
                            <h3 className="fw-bold text-warning mb-3 text-center text-lg-start">
                                📍 Find Me Here
                            </h3>
                            <div
                                className="rounded-4 overflow-hidden shadow-lg"
                                style={{
                                    height: "540px",
                                    border: "2px solid #ffc107",
                                }}
                            >
                                <iframe
                                    src="https://embed.mappls.com/place/CTD6RR?token=przotensqvzqyvqdoxuclfnuednuvkywfxmi&fullscreen=true&zoom=16&pitch=45"
                                    title="Loading Maps of Madhubani, Bihar , Please wait..."
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        border: 0,
                                    }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"

                                >Loading map of Madhubani, Bihar...
                                    If the map doesn’t load, please <a href="https://maps.mappls.com/place/CTD6RR">click here</a>.
                                </iframe>
                            </div>
                        </div>

                        {/* ✅ RIGHT SIDE — Contact Form */}
                        <motion.div
                            className="col-12 col-lg-6"
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8}}
                        >
                            <motion.h2
                                className="fw-bold text-warning display-6 mb-3 text-center text-lg-start"
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.6}}
                            >
                                📬 Get In Touch
                            </motion.h2>

                            <motion.p
                                className="text-light mb-4 lead text-center text-lg-start"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.2, duration: 0.6}}
                            >
                                I'd love to hear from you! Whether you have a project idea, a
                                question, or a collaboration request — just drop a message
                                below.
                            </motion.p>

                            <motion.form
                                target="_blank"
                                action="https://formsubmit.co/manishrajrnl@zohomail.in"
                                method="POST"
                                className="p-4 rounded-4 shadow-lg"
                                style={{
                                    background: "rgba(255, 255, 255, 0.08)",
                                    backdropFilter: "blur(12px)",
                                    border: "1px solid rgba(255, 255, 255, 0.25)",
                                }}
                                whileHover={{
                                    boxShadow: "0 0 30px rgba(255, 255, 255, 0.15)",
                                    scale: 1.01,
                                }}
                            >
                                {/* Row 1: Name + Email */}
                                <div className="row mb-4">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control border-0 text-white"
                                            placeholder="Full Name"
                                            required
                                            style={{
                                                background: "rgba(255,255,255,0.1)",
                                                borderRadius: "12px",
                                                padding: "14px",
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control border-0 text-white"
                                            placeholder="Email Address"
                                            required
                                            style={{
                                                background: "rgba(255,255,255,0.1)",
                                                borderRadius: "12px",
                                                padding: "14px",
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="mb-4">
                  <textarea
                      placeholder="Your Message"
                      className="form-control border-0 text-white"
                      name="message"
                      rows="8"
                      required
                      style={{
                          background: "rgba(255,255,255,0.1)",
                          borderRadius: "12px",
                          padding: "14px",
                          resize: "none",
                      }}
                  ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn btn-warning fw-semibold py-2 px-5 w-100 rounded-pill shadow-lg"
                                    style={{
                                        color: "#000",
                                        fontSize: "1.1rem",
                                        transition: "all 0.3s ease",
                                    }}
                                    whileHover={{
                                        backgroundColor: "#fff",
                                        color: "#0f3460",
                                        scale: 1.05,
                                    }}
                                    whileTap={{scale: 0.98}}
                                >
                                    🚀 Submit Form
                                </motion.button>
                            </motion.form>
                        </motion.div>
                    </div>
                </div>

                {/* ✅ Inline styles */}
                <style>{`
          ::placeholder {
            color: rgba(255, 255, 255, 0.7) !important;
          }
          input:focus, textarea:focus {
            outline: none !important;
            box-shadow: 0 0 10px rgba(255,255,255,0.3) !important;
          }
          @keyframes moveGlow {
            0% { transform: translate(0px, 0px); }
            100% { transform: translate(-25px, 25px); }
          }
        `}</style>
            </section>
        </>
    );
}
