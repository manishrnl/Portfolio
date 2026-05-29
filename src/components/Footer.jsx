import {ResumeLink} from "../utils/Resume-Data.js";
import {
    BiCurrentLocation,
    BiLogoAdobe,
    BiLogoFacebook,
    BiLogoGithub,
    BiLogoGmail,
    BiLogoInstagram,
    BiLogoLinkedin,
    BiLogoTwitter,
    BiLogoWhatsapp,
    BiPhone
} from "react-icons/bi";
import React from "react";

export default function Footer() {
    const socialLinks = [
        {href: "https://www.linkedin.com/in/manishrnl", icon: BiLogoLinkedin, color: "#0077b5", label: "LinkedIn"},
        {href: "https://github.com/manishrnl", icon: BiLogoGithub, color: "currentColor", label: "GitHub"},
        {href: "https://wa.me/919501421887", icon: BiLogoWhatsapp, color: "#25D366", label: "WhatsApp"},
        {href: "https://www.instagram.com/manishrnl/", icon: BiLogoInstagram, color: "#e4405f", label: "Instagram"},
        {href: "https://www.facebook.com/profile.php?id=100011121437261", icon: BiLogoFacebook, color: "#1877F2", label: "Facebook"},
        {href: "https://x.com/manishrnl", icon: BiLogoTwitter, color: "currentColor", label: "Twitter"}
    ];

    const contactLinks = [
        {
            href: "https://www.mappls.com/ctd6rr",
            label: "Madhubani, Bihar",
            Icon: BiCurrentLocation,
            color: "text-blue-600 dark:text-yellow-300",
            external: true,
        },
        {
            href: "mailto:manishrajrnl@zohomail.in",
            label: "manishrajrnl@zohomail.in",
            Icon: BiLogoGmail,
            color: "text-red-400",
            external: true,
        },
        {
            href: "tel:+919501421887",
            label: "+91 9501421887",
            Icon: BiPhone,
            color: "text-green-600",
        },
        {
            href: ResumeLink,
            label: "Request My Resume",
            Icon: BiLogoAdobe,
            color: "text-red-800 dark:text-red-300",
            external: true,
        },
    ];

    return (
        <footer className="relative overflow-hidden bg-gray-100 text-gray-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 bottom-8 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15"></div>
                <div className="absolute right-[-8%] top-8 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl dark:bg-fuchsia-500/15"></div>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
            </div>

            <div className="relative z-10 w-full py-0">
                <div className="w-full border-y border-white/80 bg-white/75 px-5 py-10 shadow-[0_18px_55px_rgba(31,38,135,0.12)] backdrop-blur-2xl transition-colors duration-500 dark:border-zinc-800 dark:bg-zinc-900/80 dark:shadow-black/30 md:px-8">
                    <div className="mb-8 flex flex-col gap-5 border-b border-gray-200 pb-6 dark:border-zinc-800 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center justify-center gap-3 md:justify-start">
                            <span>
                                <span className="font-brand block bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 bg-clip-text text-xl font-black text-transparent">
                                    Manish Kumar
                                </span>
                                <span className="font-tech block text-xs font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-zinc-400">
                                    Spring Boot | Hibernate JPA | MySQL | React
                                </span>
                            </span>
                        </div>

                        <div className="text-center md:text-right">
                            <p className="font-tech mb-1 text-xs font-black uppercase tracking-[0.22em] text-gray-500 dark:text-zinc-400">
                                Engineering Signal
                            </p>
                            <p className="font-display mb-0 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 bg-clip-text text-lg font-black text-transparent tracking-[0.08em]">
                                Backend Discipline, Premium UI, Practical Delivery
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-8 text-center lg:grid-cols-[1.1fr_1fr_1.1fr] lg:text-left">
                        <div className="transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1">
                            <h2 className="font-display mb-3 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 bg-clip-text text-2xl font-black text-transparent">
                                Start With Clear Engineering Context
                            </h2>
                            <p className="mb-5 text-sm font-medium leading-relaxed text-gray-700 dark:text-zinc-300">
                                I&apos;m open to backend discussions, Spring Boot reviews, REST API work,
                                SDE opportunities, collaboration, and practical product ideas that need clean execution.
                            </p>
                            <div className="font-tech inline-flex border-b border-yellow-400 pb-2 text-xs font-black uppercase tracking-[0.08em] text-gray-600 dark:text-zinc-300">
                                {"spring datasource -> hibernate jpa -> rest api -> react ui"}
                            </div>
                        </div>

                        <div className="transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1">
                            <h3 className="font-tech mb-4 text-sm font-black uppercase tracking-[0.22em] text-gray-500 dark:text-zinc-400">
                                Direct Channels
                            </h3>

                            <div className="flex flex-col gap-3">
                                {contactLinks.map(({href, label, Icon, color, external}) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target={external ? "_blank" : undefined}
                                        rel={external ? "noopener noreferrer" : undefined}
                                        className="group inline-flex items-center justify-center gap-3 border-b border-gray-200 pb-2 text-sm font-semibold text-gray-700 text-decoration-none transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1 dark:border-zinc-800 dark:text-zinc-300 lg:justify-start"
                                    >
                                        <Icon size={23} className={`${color} transition-transform duration-700 group-hover:rotate-[360deg]`}/>
                                        <span className="transition-colors group-hover:text-gray-950 dark:group-hover:text-zinc-50">
                                            {label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1">
                            <h3 className="font-tech mb-4 text-sm font-black uppercase tracking-[0.22em] text-gray-500 dark:text-zinc-400">
                                Digital Footprint
                            </h3>
                            <div className="flex flex-wrap justify-center gap-5 lg:justify-start">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group inline-flex items-center gap-2 border rounded-2xl border-gray-200 bg-white/70 px-3 py-2 text-gray-900 shadow-sm text-decoration-none transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 hover:border-yellow-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-100 dark:hover:border-yellow-400/70"
                                    >
                                        <social.icon
                                            className="transition-transform duration-700 group-hover:rotate-[360deg]"
                                            size={17}
                                            color={social.color}
                                        />
                                        <span className="font-tech text-[11px] font-black tracking-[0.12em]">
                                            {social.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-5 text-center text-xs text-gray-600 dark:border-zinc-800 dark:text-zinc-400 md:flex-row">
                        <p className="mb-0">
                            © 2026 Manish Kumar. Spring-ready SDE portfolio.
                        </p>
                        <p className="mb-0 font-semibold">
                            Built as{" "}
                            <strong className="bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 bg-clip-text text-transparent">
                                Manish
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
