import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Download, ExternalLink, Plus, Sparkles, X } from "lucide-react";
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
       <section id="projects" className="relative min-h-screen bg-gray-200 pt-16 transition-colors duration-300 dark:bg-zinc-950">
            {/* Image Viewer Overlay */}
            <AnimatePresence>
                {viewerImages && (
                    <motion.div
                        className="fixed inset-0 z-[9999] bg-gray-400/90 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10 dark:bg-black/90"
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
                            className="absolute top-6 right-6 z-[10001] text-red-600 hover:rotate-90 transition-transform p-2 bg-white/20 rounded-full dark:text-red-300"
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
                            onDragEnd={(e, { offset }) => {
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
                    className="font-display mb-5 text-4xl font-bold leading-tight text-gray-900 dark:text-zinc-50 md:text-6xl"
                >
                    {"{Production Builds}"}
                    <span className="bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(124,77,255,0.35)]">
                        {" "}Build Showcase{" "}
                    </span>
                    <span className="text-blue-600 dark:text-yellow-300">{"</>"}</span>
                </motion.h2>
                <p className="text-gray-500 text-lg max-w-xl mx-auto font-light italic dark:text-zinc-400">
                    "From system architecture to user experience—engineered for
                    scalability."
                </p>
                <p className="text-gray-600 text-base max-w-3xl mx-auto mt-5 leading-relaxed dark:text-zinc-300">
                    These projects show the way I think through software: start with a real
                    workflow, design the data and services, secure the core actions, then polish
                    the interface with screenshots, deployment links, and source code for review.
                </p>
                <div className="mt-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-3">
                    {[
                        "Production-minded backend architecture",
                        "Real screenshots for every important workflow",
                        "Clear technology choices and source links",
                    ].map((item) => (
                        <div key={item} className="font-tech rounded-2xl border border-gray-100 bg-white/70 px-4 py-3 text-m font-semibold text-gray-700 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 hover:bg-blue-50 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:bg-zinc-800">
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Rows */}
            <div className="flex flex-col w-full overflow-hidden">
                {projects.slice(0, visibleCount).map((p, idx) => (
                    <div
                        key={idx}
                        className={`w-full py-16 border-t border-gray-300 transition-colors duration-300 dark:border-zinc-800 ${idx % 2 === 0 ? "bg-white/40 dark:bg-zinc-900/40" : "bg-transparent"}`}
                    >
                        <div
                            className={`max-w-[85%] mx-auto px-6 flex flex-col ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
                        >
                            {/* Image Showcase */}
                            <div className="w-full lg:w-1/2 space-y-4 rounded-[2rem] p-2 transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 hover:bg-white/45 dark:hover:bg-zinc-900/55">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative group cursor-zoom-in transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1"
                                    onClick={() => openViewer(p.images, 0)}
                                >
                                    <div className="absolute inset-0 bg-blue-600/10 rounded-[1.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img
                                        src={p.images[0]}
                                        alt={p.title}
                                        loading={idx === 0 ? "eager" : "lazy"}
                                        decoding="async"
                                        className="relative w-full h-[320px] object-cover rounded-[1.5rem] shadow-xl border-2 border-white transition-all duration-500 group-hover:-translate-y-1 dark:border-zinc-800"
                                    />
                                </motion.div>

                                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide px-1 rounded-2xl transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1">
                                    {p.images.slice(1, 6).map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt=""
                                            loading="lazy"
                                            decoding="async"
                                            onClick={() =>
                                                openViewer(p.images, i + 1)
                                            }
                                            className="h-16 w-28 flex-shrink-0 object-cover rounded-xl border border-white shadow-sm hover:border-blue-600 cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1 dark:border-zinc-800 dark:hover:border-yellow-400"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="w-full lg:w-1/2 rounded-[2rem] p-3 transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 hover:bg-white/45 dark:[&_.text-blue-600]:text-yellow-300 dark:[&_.text-gray-600]:text-zinc-300 dark:[&_.text-gray-900]:text-zinc-50 dark:hover:bg-zinc-900/55">
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: idx % 2 === 0 ? 30 : -30,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h3 className="font-display text-3xl md:text-4xl font-black text-gray-950 mb-4 tracking-tight dark:text-zinc-50">
                                        {p.title}
                                    </h3>

                                    <div className="mb-6 rounded-2xl text-sm md:text-base text-gray-700 leading-relaxed transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1">
                                        {p.description}
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-8 rounded-2xl transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1">
                                        {p.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="font-tech px-3 py-1.5 bg-gray-50 border border-gray-400 text-gray-800 text-xs font-bold rounded-full uppercase transition-colors hover:bg-yellow-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-yellow-400 dark:hover:text-zinc-950"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-3 rounded-2xl transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1">
                                        {p.runLink && (
                                            <a
                                                href={p.runLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="font-brand group relative isolate flex min-w-[132px] items-center justify-center gap-2 overflow-hidden rounded-full border border-white/60 bg-gradient-to-r from-blue-600 via-[#7c4dff] to-fuchsia-600 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_14px_34px_rgba(37,99,235,0.28)] transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 hover:shadow-[0_20px_48px_rgba(124,77,255,0.35)] text-decoration-none dark:border-zinc-700"
                                            >
                                                <span className="absolute inset-0 -z-10 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>
                                                <ExternalLink
                                                    size={17}
                                                    className="transition-transform duration-500 group-hover:rotate-[-35deg]"
                                                />
                                                View
                                            </a>
                                        )}
                                        <a
                                            href={p.viewLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="font-brand group relative isolate flex min-w-[132px] items-center justify-center gap-2 overflow-hidden rounded-full border border-zinc-900/10 bg-zinc-950 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_14px_34px_rgba(24,24,27,0.24)] transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 hover:bg-black hover:shadow-[0_20px_48px_rgba(24,24,27,0.32)] text-decoration-none dark:border-zinc-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
                                        >
                                            <span className="absolute inset-0 -z-10 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full dark:via-zinc-900/10"></span>
                                            <DiGithubBadge
                                                size={23}
                                                className="transition-transform duration-700 group-hover:rotate-[360deg]"
                                            />
                                            Source
                                        </a>
                                        <a
                                            href={p.downloadLink}
                                            download
                                            className="font-brand group relative isolate flex min-w-[132px] items-center justify-center gap-2 overflow-hidden rounded-full border border-white/60 bg-gradient-to-r from-emerald-600 via-green-600 to-lime-500 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_14px_34px_rgba(22,163,74,0.25)] transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 hover:shadow-[0_20px_48px_rgba(22,163,74,0.34)] text-decoration-none dark:border-zinc-700"
                                        >
                                            <span className="absolute inset-0 -z-10 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>
                                            <Download
                                                size={18}
                                                className="transition-transform duration-700 group-hover:translate-y-0.5 group-hover:rotate-[360deg]"
                                            />
                                            Download
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
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleLoadMore}
                        className="font-brand group relative flex items-center gap-3 overflow-hidden !rounded-full border border-white/70 bg-gradient-to-r from-[#7c4dff] via-blue-600 to-yellow-400 px-8 py-3.5 text-white shadow-[0_18px_45px_rgba(124,77,255,0.25)] transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 hover:shadow-[0_22px_60px_rgba(124,77,255,0.35)] dark:border-zinc-700"
                    >
                        <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></span>
                        <Sparkles
                            className="relative z-10 text-yellow-100 transition-transform duration-700 group-hover:rotate-[360deg]"
                            size={18}
                        />
                        <Plus
                            className="relative z-10 transition-transform duration-700 group-hover:rotate-[360deg]"
                            size={20}
                        />
                        <span className="relative z-10 font-bold uppercase tracking-wider">
                            Explore More Projects
                        </span>
                        <ArrowRight
                            className="relative z-10 transition-transform duration-500 group-hover:translate-x-1"
                            size={18}
                        />
                    </motion.button>
                </div>
            )}
        </section>
    );
};

export default Projects;
