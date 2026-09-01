import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FileText } from "lucide-react";

import GmailLogo from "../../assets/icons/gmail.png";
import LinkedinLogo from "../../assets/icons/linkedin.svg";
import GithubLogo from "../../assets/icons/github.png";

const contactMethods = [
    {
        id: "email",
        eyebrow: "Preferred Contact",
        title: "Email",
        value: "dmmcmillan2018@gmail.com",
        href: "mailto:dmmcmillan2018@gmail.com?subject=Software%20Engineering%20Opportunity",
        action: "Start an Email",
        logo: GmailLogo,
        border: "border-cyan-400/20",
        background: "bg-cyan-400/[0.045]",
        accent: "text-cyan-300",
        iconStyle:
            "border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-200",
        hover: "hover:border-cyan-300/40 hover:bg-cyan-400/[0.07]",
    },
    {
        id: "linkedin",
        eyebrow: "Professional Network",
        title: "LinkedIn",
        value: "Connect professionally",
        href: "https://www.linkedin.com/in/demarquis-mcmillan/",
        action: "Open LinkedIn",
        logo: LinkedinLogo,
        border: "border-blue-400/20",
        background: "bg-blue-400/[0.045]",
        accent: "text-blue-300",
        iconStyle:
            "border-blue-400/20 bg-blue-400/[0.07] text-blue-200",
        hover: "hover:border-blue-300/40 hover:bg-blue-400/[0.07]",
    },
    {
        id: "github",
        eyebrow: "Source Code",
        title: "GitHub",
        value: "dmm-dev228",
        href: "https://github.com/dmm-dev228",
        action: "View GitHub",
        logo: GithubLogo,
        logoClassName: "h-8 w-8 object-contain invert",
        border: "border-purple-400/20",
        background: "bg-purple-400/[0.045]",
        accent: "text-purple-300",
        iconStyle:
            "border-purple-400/20 bg-purple-400/[0.07] text-purple-200",
        hover:
            "hover:border-purple-300/40 hover:bg-purple-400/[0.07]",
    },
    {
        id: "resume",
        eyebrow: "Professional Summary",
        title: "Resume",
        value: "Experience, projects & skills",
        href: "/resume.pdf",
        action: "Open Resume",
        icon: FileText,
        border: "border-emerald-400/20",
        background: "bg-emerald-400/[0.045]",
        accent: "text-emerald-300",
        iconStyle:
            "border-emerald-400/20 bg-emerald-400/[0.07] text-emerald-200",
        hover:
            "hover:border-emerald-300/40 hover:bg-emerald-400/[0.07]",
    },
];

function ContactHero() {
    return (
        <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pb-32 lg:pt-36">
            {/* Ambient background effects */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.08, 0.14, 0.08],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-cyan-400 blur-[130px]"
                />

                <motion.div
                    animate={{
                        scale: [1.08, 0.96, 1.08],
                        opacity: [0.06, 0.12, 0.06],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[6%] top-40 h-80 w-80 rounded-full bg-blue-600 blur-[150px]"
                />

                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl">
                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Ways to Connect */}
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="min-w-0 lg:pt-1"
                    >
                        {/* Availability */}
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.55,
                                delay: 0.1,
                            }}
                            className="inline-flex max-w-full items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] px-3 py-2 sm:px-4"
                        >
                            <span className="relative flex h-2.5 w-2.5 shrink-0">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />

                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                            </span>

                            <span className="text-[0.62rem] font-bold uppercase tracking-[0.13em] text-emerald-300 sm:text-xs sm:tracking-[0.18em]">
                                Available for Software Engineering Roles
                            </span>
                        </motion.div>

                        {/* Section label */}
                        <div className="mt-8 flex items-center gap-4 sm:mt-9">
                            <span className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                                Ways to Connect
                            </span>

                            <span
                                aria-hidden="true"
                                className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent"
                            />
                        </div>

                        {/* Heading */}
                        <h1 className="mt-5 max-w-4xl text-[2.65rem] font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl sm:leading-[0.98] sm:tracking-[-0.055em] lg:text-[4.6rem]">
                            The easiest ways to{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                                reach me.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-xl sm:leading-9">
                            Whether you&apos;re reaching out about a
                            software engineering opportunity, interview,
                            collaboration, or my work, you can connect
                            with me directly below.
                        </p>

                        {/* Contact cards */}
                        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;

                                const isExternal =
                                    method.href.startsWith("http") ||
                                    method.href.endsWith(".pdf");

                                return (
                                    <motion.a
                                        key={method.id}
                                        href={method.href}
                                        target={
                                            isExternal
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel={
                                            isExternal
                                                ? "noreferrer"
                                                : undefined
                                        }
                                        initial={{
                                            opacity: 0,
                                            y: 18,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            delay: 0.18 + index * 0.07,
                                        }}
                                        whileHover={{ y: -5 }}
                                        whileTap={{ scale: 0.985 }}
                                        className={`group relative min-w-0 overflow-hidden rounded-2xl border p-4 transition duration-300 sm:p-5 ${method.border} ${method.background} ${method.hover}`}
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div
                                                className={`grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border ${method.iconStyle}`}
                                            >
                                                {method.logo ? (
                                                    <img
                                                        src={
                                                            method.logo
                                                        }
                                                        alt={`${method.title} logo`}
                                                        className={
                                                            method.logoClassName ??
                                                            "h-8 w-8 object-contain"
                                                        }
                                                    />
                                                ) : Icon ? (
                                                    <Icon
                                                        size={23}
                                                        strokeWidth={2}
                                                        aria-hidden="true"
                                                    />
                                                ) : null}
                                            </div>

                                            <span
                                                aria-hidden="true"
                                                className={`text-lg transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${method.accent}`}
                                            >
                                                ↗
                                            </span>
                                        </div>

                                        <p
                                            className={`mt-5 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${method.accent}`}
                                        >
                                            {method.eyebrow}
                                        </p>

                                        <h2 className="mt-2 text-xl font-black text-white">
                                            {method.title}
                                        </h2>

                                        <p
                                            className={`mt-1 text-sm font-semibold leading-6 text-slate-400 ${
                                                method.id === "email"
                                                    ? "break-all sm:break-normal"
                                                    : ""
                                            }`}
                                        >
                                            {method.value}
                                        </p>

                                        <div className="mt-5 border-t border-white/[0.08] pt-4">
                                            <span
                                                className={`inline-flex items-center gap-2 text-sm font-black ${method.accent}`}
                                            >
                                                {method.action}

                                                <span
                                                    aria-hidden="true"
                                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                                >
                                                    →
                                                </span>
                                            </span>
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Work information */}
                        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/[0.08] pt-6">
                            {[
                                "U.S. Work Authorized",
                                "Open to Relocation",
                                "Remote or Onsite",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2.5 text-sm font-semibold text-slate-400"
                                >
                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Engineering Snapshot */}
                    <motion.aside
                        initial={{
                            opacity: 0,
                            y: 34,
                            scale: 0.97,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.85,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative min-w-0"
                    >
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-8 rounded-full bg-cyan-400/[0.05] blur-3xl"
                        />

                        <div className="group relative overflow-hidden rounded-[1.5rem] border border-cyan-400/25 bg-[#050b18]/90 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:rounded-[2rem] sm:p-8">
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent"
                            />

                            {/* Snapshot Header */}
                            <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5 sm:gap-5 sm:pb-6">
                                <div className="min-w-0">
                                    <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cyan-400 sm:text-xs sm:tracking-[0.18em]">
                                        Engineering Snapshot
                                    </p>

                                    <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                                        DeMarquis McMillan
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-slate-400">
                                        Full-stack and backend focused
                                        software engineer building secure,
                                        deployable, and user-centered
                                        applications.
                                    </p>
                                </div>

                                <motion.div
                                    animate={{
                                        filter: [
                                            "drop-shadow(0 0 4px rgba(34,211,238,0.20))",
                                            "drop-shadow(0 0 14px rgba(34,211,238,0.55))",
                                            "drop-shadow(0 0 4px rgba(34,211,238,0.20))",
                                        ],
                                    }}
                                    transition={{
                                        duration: 3.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="h-12 w-16 shrink-0 sm:h-16 sm:w-20"
                                >
                                    <img
                                        src="/favicon.png"
                                        alt=""
                                        aria-hidden="true"
                                        className="h-full w-full object-contain"
                                    />
                                </motion.div>
                            </div>

                            {/* Current Status */}
                            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-4 sm:mt-7">
                                <span className="relative flex h-2.5 w-2.5 shrink-0">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-65" />

                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                </span>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                                        Current Status
                                    </p>

                                    <p className="mt-1 text-sm font-bold text-slate-200">
                                        Available for entry-level software
                                        engineering roles
                                    </p>
                                </div>
                            </div>

                            {/* Recruiter facts */}
                            <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4">
                                {[
                                    {
                                        label: "Engineering Focus",
                                        value: "Full Stack & Backend",
                                        symbol: "01",
                                    },
                                    {
                                        label: "Education",
                                        value: "B.S. Computer Science",
                                        symbol: "02",
                                    },
                                    {
                                        label: "Location",
                                        value: "Pensacola, Florida",
                                        symbol: "03",
                                    },
                                    {
                                        label: "Work Preference",
                                        value:
                                            "Remote, Onsite, or Relocation",
                                        symbol: "04",
                                    },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{
                                            opacity: 0,
                                            y: 14,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            delay:
                                                0.32 +
                                                index * 0.07,
                                        }}
                                        whileHover={{ y: -4 }}
                                        className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-cyan-400/[0.025]"
                                    >
                                        <span className="grid h-8 w-8 place-items-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] text-[0.65rem] font-black text-cyan-300">
                                            {item.symbol}
                                        </span>

                                        <p className="mt-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-slate-500 sm:mt-4 sm:text-xs sm:tracking-[0.14em]">
                                            {item.label}
                                        </p>

                                        <p className="mt-2 text-sm font-black leading-6 text-slate-200">
                                            {item.value}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Core Languages */}
                            <div className="mt-5 rounded-2xl border border-purple-400/15 bg-purple-400/[0.035] p-4 sm:p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-300">
                                    Core Languages
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {[
                                        "Java",
                                        "JavaScript",
                                        "SQL",
                                        "C++",
                                        "Python",
                                    ].map((language) => (
                                        <span
                                            key={language}
                                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-bold text-slate-300"
                                        >
                                            {language}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Core Stack */}
                            <div className="mt-5 rounded-2xl border border-blue-400/15 bg-blue-400/[0.035] p-4 sm:p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                                    Core Stack
                                </p>

                                <div className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
                                    {[
                                        "Spring Boot",
                                        "React",
                                        "MySQL",
                                        "Docker",
                                        "REST APIs",
                                        "GitHub Actions",
                                    ].map((technology) => (
                                        <div
                                            key={technology}
                                            className="flex min-w-0 items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-2.5 py-3 sm:px-3"
                                        >
                                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />

                                            <span className="min-w-0 text-[0.7rem] font-bold text-slate-300 sm:text-xs">
                                                {technology}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Flagship Project */}
                            <motion.a
                                href="https://www.cognihaven.net"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.985 }}
                                className="mt-5 block rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/[0.07] via-blue-500/[0.04] to-purple-400/[0.05] p-4 transition duration-300 hover:border-cyan-300/40 sm:p-5"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="min-w-0">
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                                            Flagship Project
                                        </p>

                                        <h3 className="mt-2 text-xl font-black text-white">
                                            CogniHaven
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Production AI-powered
                                            cognitive wellness platform
                                            built with Spring Boot,
                                            React, MySQL, Docker, and
                                            cloud deployment.
                                        </p>
                                    </div>

                                    <span
                                        aria-hidden="true"
                                        className="shrink-0 text-lg text-cyan-300"
                                    >
                                        ↗
                                    </span>
                                </div>
                            </motion.a>

                            {/* Looking For */}
                            <div className="mt-5 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4 sm:p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                                    What I&apos;m Looking For
                                </p>

                                <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                                    I&apos;m seeking an entry-level
                                    software engineering role where I
                                    can contribute to production
                                    systems, learn from experienced
                                    engineers, and help turn challenging
                                    problems into reliable software.
                                </p>
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}

export default ContactHero;