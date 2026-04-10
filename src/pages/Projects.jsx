import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Download, ExternalLink, Plus, X } from "lucide-react";
import { DiGithubBadge } from "react-icons/di";
import { projects } from "../utils/Projects-Data.jsx";

const Projects = () => {
    const [visibleCount, setVisibleCount] = useState(3);
    const [viewerImages, setViewerImages] = useState(null);
    const [viewerIndex, setViewerIndex] = useState(0);

    useEffect(() => {
        document.title = "My Projects - Manish Kumar";
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleLoadMore = () => {
        setVisibleCount(projects.length);
    };

    const openViewer = (images, index) => {
        setViewerIndex(index);
        setViewerImages(images);
        document.body.style.overflow = "hidden";
    };

    const closeViewer = () => {
        setViewerImages(null);
        document.body.style.overflow = "auto";
    };

    const nextImage = useCallback((e) => {
        e?.stopPropagation();
        setViewerIndex((prev) => (viewerImages ? (prev + 1) % viewerImages.length : prev));
    }, [viewerImages]);

    const prevImage = useCallback((e) => {
        e?.stopPropagation();
        setViewerIndex((prev) => (viewerImages ? (prev - 1 + viewerImages.length) % viewerImages.length : prev));
    }, [viewerImages]);

    // Keyboard & Scroll Logic
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!viewerImages) return;
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") closeViewer();
        };

        const handleWheel = (e) => {
            if (!viewerImages) return;
            // Threshold to prevent rapid skipping on trackpads
            if (Math.abs(e.deltaY) > 50 || Math.abs(e.deltaX) > 50) {
                if (e.deltaY > 0 || e.deltaX > 0) nextImage();
                else prevImage();
            }
        };

        if (viewerImages) {
            window.addEventListener("keydown", handleKeyDown);
            window.addEventListener("wheel", handleWheel);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("wheel", handleWheel);
        };
    }, [viewerImages, nextImage, prevImage]);
    return (
       <section id="projects" className="relative min-h-screen bg-gray-200 pt-16">
            {/* Image Viewer Overlay */}
            <AnimatePresence>
                {viewerImages && (
                    <motion.div
                        className="fixed inset-0 z-[9999] bg-gray-400/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeViewer}
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                closeViewer();
                            }}
                            className="absolute top-6 right-6 z-[10001] text-red-600 hover:rotate-90 transition-transform p-2 bg-white/20 rounded-full"
                        >
                            <X size={32} />
                        </button>

                        {viewerImages.length > 1 && (
                            <div className="absolute inset-0 flex items-center justify-between px-6 pointer-events-none">
                                <button
                                    className="pointer-events-auto transition-colors hidden md:block"
                                    onClick={prevImage}
                                >
                                    <ChevronLeft size={48} className="text-green-900 hover:text-green-600" />
                                </button>
                                <button
                                    className="pointer-events-auto transition-colors hidden md:block"
                                    onClick={nextImage}
                                >
                                    <ChevronRight size={48} className="text-green-900 hover:text-green-600" />
                                </button>
                            </div>
                        )}

                        <motion.img
                            key={viewerIndex}
                            src={viewerImages[viewerIndex]}
                            alt="Viewer"
                            className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl border-2 border-white/20 pointer-events-auto cursor-grab active:cursor-grabbing"
                            
                            // Swipe / Mobile Logic
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipeThreshold = 100;
                                if (offset.x < -swipeThreshold) nextImage();
                                else if (offset.x > swipeThreshold) prevImage();
                            }}

                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                        />
                        
                        {/* Page Indicator for Mobile */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/40 px-4 py-1 rounded-full text-white text-sm">
                            {viewerIndex + 1} / {viewerImages.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header - Reduced scale for 100% zoom */}
            <div className="py-16 px-6 max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black text-gray-950 tracking-tighter mb-4"
                >
                    Project <span className="text-blue-600">Showcase</span>
                </motion.h2>
                <p className="text-gray-500 text-lg max-w-xl mx-auto font-light italic">
                    "From system architecture to user experience—engineered for
                    scalability."
                </p>
            </div>

            {/* Project Rows */}
            <div className="flex flex-col w-full overflow-hidden">
                {projects.slice(0, visibleCount).map((p, idx) => (
                    <div
                        key={idx}
                        className={`w-full py-16 border-t border-gray-300 ${idx % 2 === 0 ? "bg-white/40" : "bg-transparent"}`}
                    >
                        <div
                            className={`max-w-[85%] mx-auto px-6 flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
                        >
                            {/* Image Showcase */}
                            <div className="w-full lg:w-1/2 space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative group cursor-zoom-in"
                                    onClick={() => openViewer(p.images, 0)}
                                >
                                    <div className="absolute inset-0 bg-blue-600/10 rounded-[1.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img
                                        src={p.images[0]}
                                        alt={p.title}
                                        className="relative w-full h-[320px] object-cover rounded-[1.5rem] shadow-xl border-2 border-white transition-all duration-500 group-hover:-translate-y-1"
                                    />
                                </motion.div>

                                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide px-1">
                                    {p.images.slice(1, 6).map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt=""
                                            onClick={() =>
                                                openViewer(p.images, i + 1)
                                            }
                                            className="h-16 w-28 flex-shrink-0 object-cover rounded-xl border border-white shadow-sm hover:border-blue-600 cursor-pointer transition-all"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-1/2">
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: idx % 2 === 0 ? 30 : -30,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="text-3xl md:text-4xl font-black text-gray-950 mb-4 tracking-tight">
                                        {p.title}
                                    </h3>

                                    <div className="mb-6 text-sm md:text-base text-gray-700 leading-relaxed">
                                        {p.description}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {p.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 bg-gray-50 border border-gray-400 text-gray-800 text-xs font-bold rounded-full uppercase transition-colors hover:bg-yellow-500"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons - Reduced padding and text size */}
                                    <div className="flex flex-wrap gap-3">
                                        {p.runLink && (
                                            <a
                                                href={p.runLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="group px-4 py-2.5 bg-blue-600
                                               text-white rounded-xl font-bold text-sm flex
                                               items-center gap-2 hover:bg-blue-700
                                               hover:translate-x-1 hover:-translate-y-1
                                               transition-all shadow-lg shadow-blue-200 text-decoration-none"
                                            >
                                                <ExternalLink
                                                    size={16}
                                                    className="group-hover:size-7
                                                transition-transform duration-700"
                                                />
                                                Live
                                            </a>
                                        )}
                                        <a
                                            href={p.viewLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group  hover:translate-x-1
                                           hover:-translate-y-1 px-4 py-2.5 bg-gray-900 text-white
                                           rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-black hover:-translate-y-1 transition-all shadow-lg shadow-gray-300 text-decoration-none"
                                        >
                                            <DiGithubBadge
                                                size={25}
                                                className="group-hover:size-9
                                            transition-transform duration-700"
                                            />{" "}
                                            Github
                                        </a>
                                        <a
                                            href={p.downloadLink}
                                            className="group  hover:translate-x-1 hover:-translate-y-1  px-4 py-2.5 bg-green-600
                                           text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-green-700 hover:-translate-y-1 transition-all shadow-lg text-decoration-none"
                                        >
                                            <Download
                                                size={20}
                                                className="group-hover:size-7
                                            transition-transform duration-700"
                                            />{" "}
                                            Source
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Explore More Button  */}
            {visibleCount < projects.length && (
                <div className="w-full py-16 flex justify-center bg-transparent">
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleLoadMore}
                        className="group relative px-8 py-3 bg-yellow-400 border-1
                        border-gray-900 !rounded-full   flex items-center gap-3
                        hover:translate-x-1 hover:-translate-y-1 transition-all"
                    >
                        <Plus
                            className="group-hover:rotate-[360deg] transition-transform duration-1000 "
                            size={20}
                        />
                        <span className="text-black font-bold uppercase ">
                            Explore More
                        </span>
                    </motion.button>
                </div>
            )}
        </section>
    );
};

export default Projects;
