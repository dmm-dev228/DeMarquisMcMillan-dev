import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    BriefcaseBusiness,
    GraduationCap,
    MapPin,
    Sparkles,
} from "lucide-react";

const highlights = [
    {
        label: "Primary Focus",
        value: "Full Stack & Backend Engineering",
        icon: BriefcaseBusiness,
    },
    {
        label: "Education",
        value: "B.S. Computer Science",
        icon: GraduationCap,
    },
    {
        label: "Location",
        value: "Pensacola, Florida",
        icon: MapPin,
    },
];

const technologies = [
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "Docker",
    "C++",
];

function AboutHero() {
    return (
        <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pb-32 lg:pt-36">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.06, 0.13, 0.06],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[7%] top-24 h-72 w-72 rounded-full bg-cyan-400 blur-[140px]"
                />

                <motion.div
                    animate={{
                        scale: [1.08, 0.96, 1.08],
                        opacity: [0.05, 0.11, 0.05],
                    }}
                    transition={{
                        duration: 11,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[7%] top-36 h-80 w-80 rounded-full bg-blue-600 blur-[160px]"
                />

                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl">
                <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="lg:pt-2"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                                About Me
                            </span>

                            <span
                                aria-hidden="true"
                                className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent"
                            />
                        </div>

                        <h1 className="mt-6 max-w-5xl text-[2.65rem] font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl sm:leading-[0.98] sm:tracking-[-0.055em] lg:text-[4.5rem]">
                            I build software that turns{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                                complex problems
                            </span>{" "}
                            into clear, reliable products.
                        </h1>

                        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-xl sm:leading-9">
                            I&apos;m DeMarquis McMillan, a software engineer
                            focused on full-stack and backend development. I
                            enjoy designing systems from the database and API
                            layer through the user experience, then deploying
                            them as working products.
                        </p>

                        <p className="mt-5 max-w-3xl text-[0.95rem] leading-7 text-slate-400 sm:text-base sm:leading-8">
                            My work spans Java, Spring Boot, React, SQL, Docker,
                            cloud deployment, testing, AI integrations, and C++.
                            I care about writing maintainable code,
                            understanding engineering tradeoffs, and building
                            software that creates meaningful value for users.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
                            <motion.div
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    to="/projects"
                             className="group inline-flex min-h-14 w-full max-w-full items-center justify-center gap-3 rounded-2xl border border-cyan-300/35 bg-cyan-400/[0.1] px-5 py-4 font-black text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.08)] transition duration-300 hover:border-cyan-200/60 hover:bg-cyan-400/[0.16] hover:text-white sm:px-7"
                                >
                                    Explore My Projects

                                    <ArrowRight
                                        size={18}
                                        strokeWidth={2}
                                        aria-hidden="true"
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </Link>
                            </motion.div>

                            <motion.a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-7 py-4 font-bold text-slate-200 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                            >
                                View Resume
                                <span aria-hidden="true">↗</span>
                            </motion.a>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            {highlights.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 18 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.45,
                                            delay: 0.25 + index * 0.08,
                                        }}
                                        whileHover={{ y: -4 }}
className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 sm:p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-cyan-400/[0.025]"
                                    >
                                        <Icon
                                            size={20}
                                            strokeWidth={2}
                                            aria-hidden="true"
                                            className="text-cyan-300"
                                        />

                                        <p className="mt-3 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-500 sm:mt-4 sm:text-[0.68rem]">
                                            {item.label}
                                        </p>

                                        <p className="mt-2 text-sm font-black leading-6 text-slate-200">
                                            {item.value}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

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

                        <div className="relative w-full max-w-full overflow-hidden rounded-[1.5rem] border border-cyan-400/25 bg-[#050b18]/90 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:rounded-[2rem] sm:p-8">
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent"
                            />

                            <div className="group relative overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-gradient-to-br from-cyan-400/[0.07] via-[#07111f] to-blue-500/[0.05]">
                                <motion.div
                                    animate={{ opacity: [0.2, 0.42, 0.2] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px z-20 rounded-[1.6rem] border border-cyan-300/25"
                                />

                               <div className="relative aspect-[4/5] min-h-[360px] overflow-hidden sm:min-h-[430px]">
                                    <img
                                        src="/photo.jpg"
                                        alt="DeMarquis McMillan, software engineer"
                                        className="h-full w-full object-cover object-[center_18%] transition duration-700 ease-out group-hover:scale-[1.025]"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050b18]/70 via-transparent to-slate-950/5"
                                    />

                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050b18]/80 to-transparent"
                                    />
                                </div>

                                <div className="absolute left-5 top-5 z-30 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-[#050b18]/85 px-3 py-2 shadow-[0_0_24px_rgba(52,211,153,0.08)] backdrop-blur-xl">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-65" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                                    </span>

                                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-emerald-300">
                                        Available
                                    </span>
                                </div>

                                <div className="absolute inset-x-5 bottom-5 z-30 rounded-2xl border border-white/[0.09] bg-[#050b18]/75 p-4 backdrop-blur-md">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                                        Software Engineer
                                    </p>

                                    <p className="mt-1 text-sm font-semibold text-slate-200">
                                        Pensacola, Florida
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.17em] text-cyan-400">
                                            Engineering Profile
                                        </p>

                                        <h3 className="mt-2 text-2xl font-black text-white">
                                            DeMarquis McMillan
                                        </h3>
                                    </div>

                                    <Sparkles
                                        size={24}
                                        strokeWidth={2}
                                        aria-hidden="true"
                                        className="text-cyan-300"
                                    />
                                </div>

                                <p className="mt-4 leading-7 text-slate-400">
                                    Full-stack and backend focused software
                                    engineer building secure, deployable, and
                                    user-centered applications.
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-bold text-slate-300"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.aside>
                </div>
            </div>
        </section>
    );
}

export default AboutHero;