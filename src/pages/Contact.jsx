import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {
    AlertCircle,
    BriefcaseBusiness,
    CheckCircle2,
    Clock3,
    Loader2,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
    ShieldCheck,
    Sparkles,
    UserRoundCheck,
} from "lucide-react";
import {useNavigate} from "react-router-dom";

const contactStats = [
    {label: "Primary Email", value: "Zoho Mail"},
    {label: "Location", value: "Madhubani"},
    {label: "Best Fit", value: "SDE Roles"},
    {label: "Response", value: "Focused Reply"},
];

const contactLinks = [
    {
        label: "Email",
        value: "manishrajrnl@zohomail.in",
        meta: "Best for roles, project briefs, and formal discussion.",
        href: "mailto:manishrajrnl@zohomail.in",
        Icon: Mail,
        color: "text-red-500",
    },
    {
        label: "Phone",
        value: "+91 9501421887",
        meta: "Useful when the requirement is already clear.",
        href: "tel:+919501421887",
        Icon: Phone,
        color: "text-green-600",
    },
    {
        label: "WhatsApp",
        value: "Quick project discussion",
        meta: "Fastest channel for short context and next steps.",
        href: "https://wa.me/919501421887",
        Icon: MessageCircle,
        color: "text-emerald-500",
    },
];

const collaborationCards = [
    {
        title: "Backend Engineering",
        text: "Spring Boot APIs, authentication, database-backed workflows, performance-aware service logic, and clean project structure.",
        Icon: BriefcaseBusiness,
    },
    {
        title: "Full-Stack Projects",
        text: "React dashboards connected to real backend flows, practical documentation, responsive pages, and portfolio-grade presentation.",
        Icon: UserRoundCheck,
    },
    {
        title: "Review Context",
        text: "Send the goal, stack, timeline, and current blockers so the conversation starts with useful technical detail.",
        Icon: ShieldCheck,
    },
];

const Contact = () => {
    const navigate = useNavigate();
    const [isSending, setIsSending] = useState(false);
    const [formStatus, setFormStatus] = useState({
        type: "idle",
        message: "",
    });

    useEffect(() => {
        document.title = "Contact Me - Manish Kumar";
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        setIsSending(true);
        setFormStatus({type: "idle", message: ""});

        try {
            const response = await fetch("/.netlify/functions/send-contact-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.get("name"),
                    email: formData.get("email"),
                    message: formData.get("message"),
                    company: formData.get("company"),
                }),
            });

            const data = await response.json().catch(() => ({}));

            if (!response.ok || data.ok === false) {
                throw new Error(data.message || "Message could not be sent right now.");
            }

            form.reset();
            setFormStatus({
                type: "success",
                message: data.message || "Message sent successfully. I will get back to you soon.",
            });
            window.setTimeout(() => navigate("/thank-you"), 700);
        } catch (error) {
            setFormStatus({
                type: "error",
                message: error.message || "Email service is unavailable right now. Please try again later.",
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-gray-100 px-0 py-12 pt-28 text-gray-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15"></div>
                <div className="absolute right-[-8%] top-44 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl dark:bg-fuchsia-500/15"></div>
                <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl dark:bg-yellow-400/15"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:34px_34px] opacity-45 dark:bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)]"></div>
            </div>

            <div className="relative z-10 mx-auto w-[90%] max-w-[1500px]">
                <div className="mb-10 text-center">
                    <h1 className="font-display mx-auto mb-5 max-w-5xl text-[40px] font-bold leading-tight text-gray-900 dark:text-zinc-50 md:text-5xl">
                        {"{Let's Build}"}
                        <span className="bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(124,77,255,0.35)]">
                            {" "}Connect With Me{" "}
                        </span>
                        <span className="text-blue-600 dark:text-yellow-300">{"</>"}</span>
                    </h1>
                    <p className="mx-auto max-w-4xl text-base leading-relaxed text-gray-600 dark:text-zinc-300 md:text-lg">
                        Share the role, project goal, timeline, and technical context. I’m most interested
                        in backend engineering, Spring Boot systems, full-stack dashboards, and practical
                        product ideas that need clean execution.
                    </p>
                </div>

                <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {contactStats.map((item) => (
                        <div
                            key={item.label}
                            className="rounded-2xl border border-white/80 bg-white/75 p-4 shadow-sm backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1 dark:border-zinc-800 dark:bg-zinc-900/75"
                        >
                            <p className="font-brand mb-1 text-sm uppercase tracking-[0.18em] text-gray-500 dark:text-zinc-400">
                                {item.label}
                            </p>
                            <p className="font-subheading mb-0 bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 bg-clip-text text-lg text-transparent">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-[0.9fr_1.18fr_0.92fr]">
                    <motion.aside
                        initial={{opacity: 0, y: 26}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.65}}
                        className="space-y-6"
                    >
                        <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 dark:border-zinc-800 dark:bg-zinc-900/85">
                            <div className="font-brand mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-2 text-sm uppercase tracking-[0.16em] text-yellow-800 dark:border-yellow-500/30 dark:bg-yellow-500/10 dark:text-yellow-300">
                                <Sparkles size={15}/>
                                Contact Hub
                            </div>
                            <h2 className="font-subheading mb-3 text-2xl tracking-tight text-gray-950 dark:text-zinc-50">
                                Direct channels for focused conversations.
                            </h2>
                            <p className="mb-6 text-base leading-relaxed text-gray-600 dark:text-zinc-300">
                                I respond best when the message includes the purpose, expected outcome,
                                current stack, and what decision needs to be made next.
                            </p>

                            <div className="space-y-3">
                                {contactLinks.map(({label, value, meta, href, Icon, color}) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target={href.startsWith("http") ? "_blank" : undefined}
                                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                                        className="group flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4 text-decoration-none shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1 hover:bg-blue-50 dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:bg-zinc-900"
                                    >
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-zinc-900">
                                            <Icon className={`${color} transition-transform duration-700 group-hover:rotate-[360deg]`} size={22}/>
                                        </span>
                                        <span>
                                            <span className="font-subheading block text-base text-gray-950 dark:text-zinc-50">
                                                {label}
                                            </span>
                                            <span className="block text-sm font-semibold text-gray-700 dark:text-zinc-200">
                                                {value}
                                            </span>
                                            <span className="mt-1 block text-sm leading-relaxed text-gray-500 dark:text-zinc-400">
                                                {meta}
                                            </span>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-white/80 bg-white/80 p-5 shadow-xl backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 dark:border-zinc-800 dark:bg-zinc-900/85">
                            <div className="mb-3 flex items-center gap-2">
                                <Clock3 className="text-blue-600 dark:text-yellow-300" size={20}/>
                                <h3 className="font-subheading mb-0 text-2xl text-gray-950 dark:text-zinc-50">
                                    Message Checklist
                                </h3>
                            </div>
                            <p className="mb-0 text-sm leading-relaxed text-gray-600 dark:text-zinc-300">
                                Include the role or project type, expected timeline, key technologies,
                                and links to any existing code, design, or requirement document.
                            </p>
                        </div>
                    </motion.aside>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{opacity: 0, y: 26}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.65, delay: 0.08}}
                        className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 dark:border-zinc-800 dark:bg-zinc-900/85 md:p-8"
                    >
                        <input
                            type="text"
                            name="company"
                            className="hidden"
                            tabIndex="-1"
                            autoComplete="off"
                        />

                        <div className="mb-7">
                            <div className="font-brand mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm uppercase tracking-[0.16em] text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
                                <Send size={15}/>
                                Send Details
                            </div>
                            <h2 className="font-subheading mb-3 text-2xl leading-tight text-gray-950 dark:text-zinc-50 md:text-3xl">
                                Write a clear message and I’ll take it from there.
                            </h2>
                            <p className="mb-0 text-base leading-relaxed text-gray-600 dark:text-zinc-300">
                                Mention whether this is a project, role, review, collaboration, or
                                technical discussion. Clear requirements help me respond faster and more usefully.
                            </p>
                        </div>

                        <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div className="transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1">
                                <label className="font-brand mb-1.5 block text-sm uppercase tracking-[0.16em] text-gray-700 dark:text-zinc-300">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    disabled={isSending}
                                    placeholder="Enter your full name"
                                    className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-900 shadow-inner transition-all duration-300 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-100"
                                />
                            </div>
                            <div className="transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1">
                                <label className="font-brand mb-1.5 block text-sm uppercase tracking-[0.16em] text-gray-700 dark:text-zinc-300">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    disabled={isSending}
                                    placeholder="you@example.com"
                                    className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-900 shadow-inner transition-all duration-300 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-100"
                                />
                            </div>
                        </div>

                        <div className="mb-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1">
                            <label className="font-brand mb-1.5 block text-sm uppercase tracking-[0.16em] text-gray-700 dark:text-zinc-300">
                                Message Context
                            </label>
                            <textarea
                                name="message"
                                required
                                rows="9"
                                disabled={isSending}
                                placeholder="Tell me the project goal, role details, stack, timeline, current blocker, or opportunity context."
                                className="w-full resize-none rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-900 shadow-inner transition-all duration-300 placeholder:text-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 dark:border-zinc-800 dark:bg-zinc-950/70 dark:text-zinc-100"
                            ></textarea>
                        </div>

                        {formStatus.type !== "idle" && (
                            <div
                                className={`mb-5 flex items-start gap-3 rounded-2xl border p-4 text-sm font-semibold leading-relaxed ${
                                    formStatus.type === "success"
                                        ? "border-green-200 bg-green-50 text-green-800 dark:border-green-500/30 dark:bg-green-500/10 dark:text-green-300"
                                        : "border-red-200 bg-red-50 text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
                                }`}
                            >
                                {formStatus.type === "success" ? (
                                    <CheckCircle2 size={20} className="mt-0.5 shrink-0"/>
                                ) : (
                                    <AlertCircle size={20} className="mt-0.5 shrink-0"/>
                                )}
                                <span>{formStatus.message}</span>
                            </div>
                        )}

                        <motion.button
                            type="submit"
                            disabled={isSending}
                            className="font-brand group relative flex w-full items-center justify-center gap-3 overflow-hidden !rounded-full bg-gradient-to-r from-[#7c4dff] via-blue-600 to-[#5c6bc0] px-6 py-3.5 text-base uppercase tracking-widest text-white shadow-lg transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[#7c4dff]/40 disabled:cursor-not-allowed disabled:opacity-75"
                            whileTap={{scale: 0.99}}
                        >
                            {isSending ? (
                                <>
                                    <Loader2 size={18} className="animate-spin"/>
                                    Sending Message
                                </>
                            ) : (
                                <>
                                    <Send size={18} className="transition-transform duration-500 group-hover:translate-x-1"/>
                                    Send Message
                                </>
                            )}
                        </motion.button>
                    </motion.form>

                    <motion.aside
                        initial={{opacity: 0, y: 26}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.65, delay: 0.16}}
                        className="space-y-6"
                    >
                        <div className="rounded-[2rem] border border-white/80 bg-white/80 p-6 shadow-xl backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 dark:border-zinc-800 dark:bg-zinc-900/85">
                            <div className="mb-5 flex items-center gap-2">
                                <BriefcaseBusiness className="text-blue-600 dark:text-yellow-300" size={22}/>
                                <h2 className="font-subheading mb-0 text-2xl text-gray-950 dark:text-zinc-50">
                                    Best Reasons to Reach Out
                                </h2>
                            </div>
                            <div className="space-y-4">
                                {collaborationCards.map(({title, text, Icon}) => (
                                    <div
                                        key={title}
                                        className="rounded-2xl border border-gray-100 bg-gray-50 p-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1 hover:bg-blue-50 dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:bg-zinc-900"
                                    >
                                        <div className="mb-2 flex items-center gap-2">
                                            <Icon size={18} className="text-green-600 dark:text-green-400"/>
                                            <h3 className="font-subheading mb-0 text-base text-gray-950 dark:text-zinc-50">
                                                {title}
                                            </h3>
                                        </div>
                                        <p className="mb-0 text-sm leading-relaxed text-gray-600 dark:text-zinc-300">
                                            {text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 shadow-xl backdrop-blur-md transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 dark:border-zinc-800 dark:bg-zinc-900/85">
                            <div className="font-brand flex items-center gap-2 px-5 py-4 text-sm text-gray-900 transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1 dark:text-zinc-100">
                                <MapPin className="text-blue-600 dark:text-yellow-300" size={22}/>
                                Madhubani, Bihar
                            </div>
                            <div className="h-[320px] overflow-hidden md:h-[380px] xl:h-[330px]">
                                <iframe
                                    src="https://embed.mappls.com/place/CTD6RR?token=przotensqvzqyvqdoxuclfnuednuvkywfxmi&fullscreen=true&zoom=16&pitch=45"
                                    title="Map of Madhubani"
                                    className="h-full w-full border-0 saturate-[1.1]"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
};

export default Contact;
