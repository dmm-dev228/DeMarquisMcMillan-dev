import { Link } from "react-router-dom";
import { motion } from "motion/react";

function ContactHero() {
    return (
        <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:px-8 lg:px-12 lg:pb-32 lg:pt-36">
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
                <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16">
                    {/* Main introduction */}
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="lg:pt-1"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.55,
                                delay: 0.1,
                            }}
                            className="inline-flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] px-4 py-2"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />

                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                            </span>

                            <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                                Available for Software Engineering Roles
                            </span>
                        </motion.div>

                        <div className="mt-9 flex items-center gap-4">
                            <span className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                                Start a Conversation
                            </span>

                            <span
                                aria-hidden="true"
                                className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent"
                            />
                        </div>

                        <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.6rem]">
                            Let&apos;s build{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                                meaningful software
                            </span>{" "}
                            together.
                        </h1>

                        <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">
                            Thank you for taking the time to explore my work. I
                            am seeking an entry-level software engineering
                            opportunity where I can contribute, learn from
                            experienced engineers, and help build software that
                            creates real value.
                        </p>

                        <p className="mt-5 max-w-3xl leading-8 text-slate-400">
                            Whether your team needs a full-stack engineer,
                            backend developer, or adaptable problem solver, I
                            would welcome the opportunity to discuss how my
                            experience with Java, Spring Boot, React, SQL,
                            Docker, cloud deployment, and C++ can contribute to
                            your organization.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                            <motion.a
                                href="mailto:dmmcmillan2018@gmail.com?subject=Software%20Engineering%20Opportunity"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                aria-label="Email DeMarquis McMillan at dmmcmillan2018@gmail.com"
                                className="group inline-flex min-h-16 flex-col items-start justify-center rounded-2xl border border-cyan-300/35 bg-cyan-400/[0.1] px-7 py-3.5 text-left shadow-[0_0_30px_rgba(34,211,238,0.08)] transition duration-300 hover:border-cyan-200/60 hover:bg-cyan-400/[0.16]"
                            >
                                <span className="flex items-center gap-3 font-black text-cyan-100 transition duration-300 group-hover:text-white">
                                    Email Me

                                    <span
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </span>

                                <span className="mt-1 text-xs font-semibold text-cyan-200/75 transition duration-300 group-hover:text-cyan-100">
                                    dmmcmillan2018@gmail.com
                                </span>
                            </motion.a>

                            <motion.div
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    to="/projects"
                                    className="inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 font-bold text-slate-200 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                                >
                                    Explore My Work
                                    <span aria-hidden="true">↗</span>
                                </Link>
                            </motion.div>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.08] pt-7">
                            {[
                                "U.S. Work Authorized",
                                "Open to Relocation",
                                "Remote or Onsite",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2.5 text-sm font-semibold text-slate-400"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Recruiter summary panel */}
                    <motion.aside
                        initial={{ opacity: 0, y: 34, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.85,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative"
                    >
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-8 rounded-full bg-cyan-400/[0.05] blur-3xl"
                        />

                        <div className="group relative overflow-hidden rounded-[2rem] border border-cyan-400/25 bg-[#050b18]/90 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-8">
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent"
                            />

                            <div className="flex items-start justify-between gap-5 border-b border-white/[0.08] pb-6">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                        Engineering Snapshot
                                    </p>

                                    <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                                        DeMarquis McMillan
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-slate-400">
                                        Full-stack and backend focused software engineer building
                                        secure, deployable, and user-centered applications.
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
                                    className="h-16 w-20 shrink-0"
                                >
                                    <img
                                        src="/favicon.png"
                                        alt=""
                                        aria-hidden="true"
                                        className="h-full w-full object-contain"
                                    />
                                </motion.div>
                            </div>

                            <div className="mt-7 flex items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-4">
                                <span className="relative flex h-2.5 w-2.5 shrink-0">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-65" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                </span>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                                        Current Status
                                    </p>

                                    <p className="mt-1 text-sm font-bold text-slate-200">
                                        Available for entry-level software engineering roles
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
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
                                        value: "Remote, Onsite, or Relocation",
                                        symbol: "04",
                                    },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.45,
                                            delay: 0.32 + index * 0.07,
                                        }}
                                        whileHover={{ y: -4 }}
                                        className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-cyan-400/[0.025]"
                                    >
                                        <span className="grid h-8 w-8 place-items-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] text-[0.65rem] font-black text-cyan-300">
                                            {item.symbol}
                                        </span>

                                        <p className="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                                            {item.label}
                                        </p>

                                        <p className="mt-2 text-sm font-black leading-6 text-slate-200">
                                            {item.value}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-5 rounded-2xl border border-purple-400/15 bg-purple-400/[0.035] p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-300">
                                    Core Languages
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {["Java", "JavaScript", "SQL", "C++", "Python"].map(
                                        (language) => (
                                            <span
                                                key={language}
                                                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-bold text-slate-300"
                                            >
                                                {language}
                                            </span>
                                        ),
                                    )}
                                </div>
                            </div>

                            <div className="mt-5 rounded-2xl border border-blue-400/15 bg-blue-400/[0.035] p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                                    Core Stack
                                </p>

                                <div className="mt-4 grid grid-cols-2 gap-3">
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
                                            className="flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-3"
                                        >
                                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />

                                            <span className="text-xs font-bold text-slate-300">
                                                {technology}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <motion.a
                                href="https://www.cognihaven.net"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ y: -4 }}
                                whileTap={{ scale: 0.985 }}
                                className="mt-5 block rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/[0.07] via-blue-500/[0.04] to-purple-400/[0.05] p-5 transition duration-300 hover:border-cyan-300/40"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                                            Flagship Project
                                        </p>

                                        <h3 className="mt-2 text-xl font-black text-white">
                                            CogniHaven
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Production AI-powered cognitive wellness platform built
                                            with Spring Boot, React, MySQL, Docker, and cloud
                                            deployment.
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

                            <div className="mt-5 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                                    What I&apos;m Looking For
                                </p>

                                <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">
                                    I&apos;m seeking an entry-level software engineering role where I can
                                    contribute to production systems, learn from experienced engineers, and
                                    help turn challenging problems into reliable software.
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