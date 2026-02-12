import React from "react";
import Downloads from "../../public/images/downloads.png";
import View from "../../public/images/view.png";
import "../styleSheet/SingleCard.css"

export default function SingleCard({
                                       title,
                                       description,
                                       images = [],
                                       viewLink,
                                       downloadLink,
                                       technologies = [],
                                       onImageClick, // function(imagesArray, index)
                                   }) {
    return (
        <div
            className="project-card rounded-4 shadow-sm d-flex flex-column h-100"
            style={{
                background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
                color: "white",
                transition: "transform 0.24s ease",
                overflow: "hidden",
            }}
        >
            {/* Image strip */}
            <div
                className="d-flex gap-2 mb-3 px-2"
                style={{
                    overflowX: "auto",
                    scrollSnapType: "x mandatory",
                    scrollbarWidth: "none",
                    WebkitOverflowScrolling: "touch",
                }}
            >
                {images.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`${title}-${idx + 1}`}
                        loading="lazy"
                        onClick={() => onImageClick?.(images, idx)}
                        style={{
                            width: "100%",
                            maxWidth: "180px",
                            height: "140px",
                            borderRadius: 10,
                            objectFit: "cover",
                            cursor: "pointer",
                            flex: "0 0 auto",
                            scrollSnapAlign: "start",
                            transition: "transform 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                    />
                ))}
            </div>

            {/* Title */}
            <h5
                className="text-warning text-center fw-bold px-2"
                style={{fontSize: "1.1rem"}}
            >
                {title}
            </h5>

            {/* Description */}
            <p
                className="text-center small px-3 flex-grow-1"
                style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.9rem",
                    wordBreak: "break-word",
                }}
            >
                {description}
            </p>

            {/* Technologies */}
            <div
                className="d-flex flex-wrap justify-content-center gap-2 mb-3 px-2"
                style={{rowGap: "0.4rem"}}
            >
                {technologies.map((t, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 rounded-pill border border-light text-light small"
                        style={{fontSize: "0.8rem"}}
                    >
            {t}
          </span>
                ))}
            </div>

            {/* Buttons */}
            <div className="d-flex gap-2 mt-auto px-2 pb-2">
                <a
                    href={viewLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-light flex-fill d-flex align-items-center justify-content-center"
                    style={{
                        borderRadius: 25,
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        transition: "all 0.2s ease",
                    }}
                >
                    <img
                        src={View}
                        alt="view"
                        style={{width: 16, filter: "invert(1)", marginRight: 6}}
                    />{" "}
                    View
                </a>
                <a
                    href={downloadLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-warning flex-fill d-flex align-items-center justify-content-center text-dark"
                    style={{
                        borderRadius: 25,
                        fontWeight: 600,
                        fontSize: "0.9rem",
                    }}
                >
                    <img
                        src={Downloads}
                        alt="download"
                        style={{width: 16, marginRight: 6}}
                    />{" "}
                    Download
                </a>
            </div>

        </div>
    );
}
