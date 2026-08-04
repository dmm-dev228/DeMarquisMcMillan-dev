import { motion } from "motion/react";
import GithubLogo from "../../assets/icons/github.png";
import GmailLogo from "../../assets/icons/gmail.png";
import LinkedinLogo from "../../assets/icons/linkedin.svg";
import CogniHavenLogo from "../../assets/icons/cognihaven-logo.png";
import {
    ArrowRight,
    ArrowUpRight,
    Copy,
    FileText,
} from "lucide-react";

const contactMethods = [
    {
        id: "email",
        eyebrow: "Preferred Contact",
        title: "Email",
        value: "dmmcmillan2018@gmail.com",
        description:
            "The best way to reach me about software engineering opportunities, interviews, or collaboration.",
        href: "mailto:dmmcmillan2018@gmail.com?subject=Software%20Engineering%20Opportunity",
        action: "Start an Email",
        logo: GmailLogo,
        tone: "cyan",
    },
    {
        id: "linkedin",
        eyebrow: "Professional Network",
        title: "LinkedIn",
        value: "Connect professionally",
        description:
            "View my experience, professional updates, and connect with me directly.",
        href: "https://www.linkedin.com/in/demarquis-mcmillan/",
        action: "Open LinkedIn",
        logo: LinkedinLogo,
        tone: "blue",
    },
    {
        id: "github",
        eyebrow: "Source Code",
        title: "GitHub",
        value: "dmm-dev228",
        description:
            "Explore the repositories, code, commit history, and engineering work behind my portfolio projects.",
        href: "https://github.com/dmm-dev228",
        action: "View GitHub",
        logo: GithubLogo,
        tone: "purple",
        logoClassName: "h-9 w-9 object-contain invert",
    },
    {
        id: "resume",
        eyebrow: "Professional Summary",
        title: "Resume",
        value: "Software Engineering Resume",
        description:
            "Review my technical skills, projects, education, and professional background in one document.",
        href: "/resume.pdf",
        action: "Open Resume",
        icon: FileText,
        tone: "emerald",
    },
    {
        id: "cognihaven",
        eyebrow: "Live Production Application",
        title: "CogniHaven",
        value: "www.cognihaven.net",
        description:
            "Explore my deployed AI-powered cognitive wellness platform and see the product running in production.",
        href: "https://www.cognihaven.net",
        action: "Launch CogniHaven",
        logo: CogniHavenLogo,
        tone: "amber",
    },
];

const toneClasses = {
    cyan: {
        border: "border-cyan-400/20",
        background: "bg-cyan-400/[0.045]",
        accent: "text-cyan-300",
        icon: "border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-200",
        hover: "hover:border-cyan-300/40 hover:bg-cyan-400/[0.07]",
        glow: "shadow-[0_0_35px_rgba(34,211,238,0.06)]",
    },
    blue: {
        border: "border-blue-400/20",
        background: "bg-blue-400/[0.045]",
        accent: "text-blue-300",
        icon: "border-blue-400/20 bg-blue-400/[0.07] text-blue-200",
        hover: "hover:border-blue-300/40 hover:bg-blue-400/[0.07]",
        glow: "shadow-[0_0_35px_rgba(96,165,250,0.06)]",
    },
    purple: {
        border: "border-purple-400/20",
        background: "bg-purple-400/[0.045]",
        accent: "text-purple-300",
        icon: "border-purple-400/20 bg-purple-400/[0.07] text-purple-200",
        hover: "hover:border-purple-300/40 hover:bg-purple-400/[0.07]",
        glow: "shadow-[0_0_35px_rgba(192,132,252,0.06)]",
    },
    emerald: {
        border: "border-emerald-400/20",
        background: "bg-emerald-400/[0.045]",
        accent: "text-emerald-300",
        icon: "border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-200",
        hover: "hover:border-emerald-300/40 hover:bg-emerald-400/[0.07]",
        glow: "shadow-[0_0_35px_rgba(52,211,153,0.06)]",
    },
    amber: {
        border: "border-amber-400/20",
        background: "bg-amber-400/[0.045]",
        accent: "text-amber-300",
        icon: "border-amber-400/20 bg-amber-400/[0.07] text-amber-200",
        hover: "hover:border-amber-300/40 hover:bg-amber-400/[0.07]",
        glow: "shadow-[0_0_35px_rgba(251,191,36,0.06)]",
    },
};

function ContactCards() {
    return (
        <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-[5%] top-24 h-72 w-72 rounded-full bg-cyan-400/[0.04] blur-[130px]" />
                <div className="absolute bottom-10 right-[8%] h-80 w-80 rounded-full bg-purple-500/[0.04] blur-[150px]" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                        Ways to Connect
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                        Choose the path that
                        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                            works best for you.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Reach out directly, review my professional background,
                        explore my source code, or launch my production
                        application.
                    </p>
                </motion.div>

                <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {contactMethods.map((method, index) => {
                        const tone = toneClasses[method.tone];
                        const IconComponent = method.icon;
                        const isExternal =
                            method.href.startsWith("http") ||
                            method.href.endsWith(".pdf");

                        return (
                            <motion.a
                                key={method.id}
                                href={method.href}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noreferrer" : undefined}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.06,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={{ y: -7 }}
                                whileTap={{ scale: 0.985 }}
                                className={`group relative overflow-hidden rounded-[1.8rem] border p-6 backdrop-blur-xl transition duration-300 sm:p-7 ${tone.border} ${tone.background} ${tone.hover} ${tone.glow}`}
                            >
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent transition duration-300 group-hover:via-white/45"
                                />

                                <div className="flex items-start justify-between gap-5">
                                    <div
                                        className={`grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border ${tone.icon}`}
                                    >
                                        {method.logo ? (
                                            <img
                                                src={method.logo}
                                                alt={`${method.title} logo`}
                                                className={
                                                    method.logoClassName ??
                                                    "h-9 w-9 object-contain"
                                                }
                                            />
                                        ) : IconComponent ? (
                                            <IconComponent
                                                size={26}
                                                strokeWidth={2}
                                                aria-hidden="true"
                                            />
                                        ) : null}
                                    </div>

                                    <ArrowUpRight
                                        size={20}
                                        strokeWidth={2}
                                        aria-hidden="true"
                                        className={`transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${tone.accent}`}
                                    />
                                </div>

                                <p
                                    className={`mt-7 text-xs font-bold uppercase tracking-[0.17em] ${tone.accent}`}
                                >
                                    {method.eyebrow}
                                </p>

                                <h3 className="mt-3 text-2xl font-black text-white">
                                    {method.title}
                                </h3>

                                <p className="mt-2 break-words text-sm font-bold leading-6 text-slate-200">
                                    {method.value}
                                </p>

                                <p className="mt-4 leading-7 text-slate-400">
                                    {method.description}
                                </p>

                                <div className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5">
                                    <span className="text-sm font-black text-slate-200 transition duration-300 group-hover:text-white">
                                        {method.action}
                                    </span>

                                    <ArrowRight
                                        size={18}
                                        strokeWidth={2}
                                        aria-hidden="true"
                                        className={`transition-transform duration-300 group-hover:translate-x-1 ${tone.accent}`}
                                    />
                                </div>
                            </motion.a>
                        );
                    })}

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.55,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#050b18]/80 p-6 backdrop-blur-xl sm:p-7"
                    >
                        <div
                            aria-hidden="true"
                            className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-400/[0.06] blur-3xl"
                        />

                        <div className="relative">
                            <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-200">
                                <Copy
                                    size={25}
                                    strokeWidth={2}
                                    aria-hidden="true"
                                />
                            </div>

                            <p className="mt-7 text-xs font-bold uppercase tracking-[0.17em] text-cyan-300">
                                Direct Contact
                            </p>

                            <h3 className="mt-3 text-2xl font-black text-white">
                                Prefer to copy the email?
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                Use the address below in any email platform or
                                recruiting system.
                            </p>

                            <div className="mt-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-4">
                                <p className="break-all font-mono text-sm font-bold text-cyan-200">
                                    dmmcmillan2018@gmail.com
                                </p>
                            </div>

                            <p className="mt-5 text-sm leading-6 text-slate-500">
                                Email is the fastest way to reach me about an
                                opportunity.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ContactCards;