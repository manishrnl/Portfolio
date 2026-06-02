import {useEffect} from "react";
import {Link} from "react-router-dom";
import {ArrowRight, CheckCircle2} from "lucide-react";

export default function ThankYou() {
    useEffect(() => {
        document.title = "Email Sent - Manish Kumar Portfolio";
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-100 px-6 py-28 text-center text-gray-950 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/15"></div>
                <div className="absolute right-[-8%] bottom-20 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl dark:bg-fuchsia-500/15"></div>
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
            </div>

            <div className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-[0_18px_55px_rgba(31,38,135,0.12)] backdrop-blur-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:translate-x-1 dark:border-zinc-800 dark:bg-zinc-900/85 md:p-10">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center bg-gradient-to-r from-green-500 via-blue-600 to-yellow-400 text-white shadow-lg">
                    <CheckCircle2 size={34}/>
                </div>

                <p className="font-brand mb-3 text-sm uppercase tracking-[0.18em] text-gray-500 dark:text-zinc-400">
                    Mail Delivery Confirmed
                </p>

                <h1 className="font-display mb-4 text-[40px] font-bold leading-tight text-gray-900 dark:text-zinc-50 md:text-5xl">
                    {"{Email Sent}"}
                    <span className="bg-gradient-to-r from-blue-600 via-fuchsia-600 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(124,77,255,0.35)]">
                        {" "}Successfully{" "}
                    </span>
                    <span className="text-blue-600 dark:text-yellow-300">{"</>"}</span>
                </h1>

                <p className="mx-auto mb-4 max-w-xl text-base leading-relaxed text-gray-600 dark:text-zinc-300 md:text-lg">
                    Thanks for reaching out. Your message was sent through my portfolio mail service,
                    and a confirmation email has also been sent to the address you entered.
                </p>

                <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-gray-500 dark:text-zinc-400">
                    You can continue exploring my profile, projects, resume, and backend work while I get back to you.
                </p>

                <Link
                    to="/projects"
                    className="font-brand group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7c4dff] via-blue-600 to-[#5c6bc0] px-8 py-3 uppercase tracking-wider text-white text-decoration-none shadow-lg transition-all duration-500 ease-out hover:-translate-y-1 hover:translate-x-1 hover:shadow-[#7c4dff]/40"
                >
                    Explore Projects
                    <ArrowRight size={18} className="transition-transform duration-500 group-hover:translate-x-1"/>
                </Link>
            </div>
        </section>
    );
}
