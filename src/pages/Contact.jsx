import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Me - My Portfolio";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <section
        className="d-flex align-items-center text-white"
        style={{
          minHeight: "100vh",
          padding: "60px 20px",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 0% 0%, #202431 0, #050816 45%, #02010f 100%)",
        }}
      >
        {/* 🔮 Background glow + grid (IntelliJ / code editor vibes) */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `
              radial-gradient(circle at 10% 20%, rgba(124,77,255,0.20), transparent 60%),
              radial-gradient(circle at 80% 80%, rgba(41,182,246,0.18), transparent 55%),
              linear-gradient(transparent 95%, rgba(255,255,255,0.05)),
              linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.05))
            `,
            backgroundSize: "100% 100%, 100% 100%, 100% 32px, 32px 100%",
            opacity: 0.9,
            animation: "moveGlowIntellij 14s ease-in-out infinite alternate",
            zIndex: 1,
          }}
        ></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-4">
            {/* 🗺 LEFT SIDE — Map (as an IDE-like panel) */}
            <div className="col-12 col-lg-6">
              <h3
                className="fw-bold mb-3 text-center text-lg-start"
                style={{ color: "#7c4dff", letterSpacing: "0.04em" }}
              >
                📍 Find Me Here
              </h3>
              <div
                className="rounded-4 overflow-hidden shadow-lg"
                style={{
                  height: "540px",
                  borderRadius: "18px",
                  border: "1px solid rgba(124,77,255,0.6)",
                  boxShadow:
                    "0 0 25px rgba(124,77,255,0.35), 0 0 45px rgba(0, 229, 255, 0.25)",
                  background:
                    "linear-gradient(135deg, rgba(15,15,25,0.95), rgba(9,11,30,0.95))",
                }}
              >
                <iframe
                  src="https://embed.mappls.com/place/CTD6RR?token=przotensqvzqyvqdoxuclfnuednuvkywfxmi&fullscreen=true&zoom=16&pitch=45"
                  title="Loading Maps of Madhubani, Bihar , Please wait..."
                  style={{
                    width: "100%",
                    height: "100%",
                    border: 0,
                    filter: "saturate(1.1) contrast(1.05)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* 💬 RIGHT SIDE — Contact Form (like a modern IntelliJ tool window) */}
            <motion.div
              className="col-12 col-lg-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="fw-bold display-6 mb-3 text-center text-lg-start"
                style={{ color: "#e3f2fd", letterSpacing: "0.04em" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                📬 Get In Touch
              </motion.h2>

              <motion.p
                className="text-light mb-4 lead text-center text-lg-start"
                style={{ color: "rgba(226, 232, 240, 0.8)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                I&apos;d love to hear from you. Whether you have a project idea,
                a question, or a collaboration request — just drop a message
                below.
              </motion.p>

              <motion.form
                target="_blank"
                action="https://formsubmit.co/manishrajrnl@zohomail.in"
                method="POST"
                className="p-4 rounded-4 shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.94))",
                  backdropFilter: "blur(18px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(148, 163, 184, 0.45)",
                  boxShadow:
                    "0 0 22px rgba(124,77,255,0.35), 0 0 45px rgba(14,165,233,0.25)",
                }}
                whileHover={{
                  boxShadow:
                    "0 0 28px rgba(124,77,255,0.5), 0 0 55px rgba(14,165,233,0.38)",
                  scale: 1.01,
                }}
              >
                {/* Row 1: Name + Email */}
                <div className="row mb-4">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label
                      className="mb-1 small text-uppercase"
                      style={{
                        letterSpacing: "0.08em",
                        color: "rgba(203,213,225,0.8)",
                        fontSize: "0.75rem",
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control border-0 text-white"
                      placeholder="Enter your full name"
                      required
                      style={{
                        background: "rgba(15,23,42,0.95)",
                        borderRadius: "12px",
                        padding: "12px 14px",
                        border: "1px solid rgba(51,65,85,0.8)",
                        fontSize: "0.95rem",
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      className="mb-1 small text-uppercase"
                      style={{
                        letterSpacing: "0.08em",
                        color: "rgba(203,213,225,0.8)",
                        fontSize: "0.75rem",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control border-0 text-white"
                      placeholder="you@example.com"
                      required
                      style={{
                        background: "rgba(15,23,42,0.95)",
                        borderRadius: "12px",
                        padding: "12px 14px",
                        border: "1px solid rgba(51,65,85,0.8)",
                        fontSize: "0.95rem",
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label
                    className="mb-1 small text-uppercase"
                    style={{
                      letterSpacing: "0.08em",
                      color: "rgba(203,213,225,0.8)",
                      fontSize: "0.75rem",
                    }}
                  >
                    Your Message
                  </label>
                  <textarea
                    placeholder="Write your message here..."
                    className="form-control border-0 text-white"
                    name="message"
                    rows="8"
                    required
                    style={{
                      background: "rgba(15,23,42,0.95)",
                      borderRadius: "12px",
                      padding: "12px 14px",
                      resize: "none",
                      border: "1px solid rgba(51,65,85,0.8)",
                      fontSize: "0.95rem",
                    }}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn fw-semibold py-2 px-5 w-100 rounded-pill shadow-lg"
                  style={{
                    background:
                      "radial-gradient(circle at 10% 10%, #7c4dff, #5c6bc0)",
                    color: "#e3f2fd",
                    fontSize: "1.05rem",
                    border: "none",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    boxShadow:
                      "0 0 18px rgba(124,77,255,0.6), 0 0 30px rgba(3, 169, 244, 0.45)",
                  }}
                  whileHover={{
                    background:
                      "radial-gradient(circle at 10% 10%, #9575cd, #7c4dff)",
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  🚀 Submit Form
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>

        {/* 🎨 IntelliJ-like inline styles */}
        <style>{`
          ::placeholder {
            color: rgba(148, 163, 184, 0.8) !important;
          }
          input:focus, textarea:focus {
            outline: none !important;
            box-shadow:
              0 0 0 1px rgba(124,77,255,0.7),
              0 0 18px rgba(124,77,255,0.7) !important;
            border-color: rgba(124,77,255,0.9) !important;
          }
          @keyframes moveGlowIntellij {
            0% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(-18px, 22px) scale(1.02); }
            100% { transform: translate(-32px, 36px) scale(1.04); }
          }
        `}</style>
      </section>
    </>
  );
}
