import { motion } from "motion/react";
import {
    BriefcaseBusiness,
    GraduationCap,
    MapPin,
    UsersRound,
} from "lucide-react";

const experienceHighlights = [
    {
        label: "Leadership",
        value: "Walmart Team Lead",
        icon: UsersRound,
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

function ExperienceHero() {
    return (
        <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.05, 0.12, 0.05],
                    }}
                    transition={{
                        duration: 9,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-[7%] top-20 h-72 w-72 rounded-full bg-cyan-400 blur-[140px]"
                />

                <motion.div
                    animate={{
                        scale: [1.08, 0.96, 1.08],
                        opacity: [0.04, 0.1, 0.04],
                    }}
                    transition={{
                        duration: 11,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-[8%] top-36 h-80 w-80 rounded-full bg-blue-600 blur-[160px]"
                />

                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl">
                <div className="grid items-start gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                                Experience
                            </span>

                            <span
                                aria-hidden="true"
                                className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent"
                            />
                        </div>

                        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.6rem]">
                            Leadership, responsibility, and
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                                experience that translates.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">
                            My professional experience has strengthened the same
                            skills I bring into software engineering:
                            communication, ownership, problem solving,
                            accountability, teamwork, and the ability to perform
                            under pressure.
                        </p>

                        <p className="mt-5 max-w-3xl leading-8 text-slate-400">
                            While building my technical foundation through
                            computer science and software projects, I also
                            developed real leadership experience managing people,
                            coordinating work, and helping teams meet operational
                            goals.
                        </p>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            {experienceHighlights.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 18 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.45,
                                            delay: 0.2 + index * 0.08,
                                        }}
                                        whileHover={{ y: -4 }}
                                        className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition duration-300 hover:border-cyan-300/20 hover:bg-cyan-400/[0.025]"
                                    >
                                        <Icon
                                            size={20}
                                            strokeWidth={2}
                                            aria-hidden="true"
                                            className="text-cyan-300"
                                        />

                                        <p className="mt-4 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-500">
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
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative"
                    >
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-8 rounded-full bg-cyan-400/[0.05] blur-3xl"
                        />

                        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#050b18]/90 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-8">
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/75 to-transparent"
                            />

                            <div className="flex items-start justify-between gap-5">
                                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                    <BriefcaseBusiness
                                        size={27}
                                        strokeWidth={2}
                                        aria-hidden="true"
                                    />
                                </div>

                                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
                                    Leadership Experience
                                </span>
                            </div>

                            <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                Professional Foundation
                            </p>

                            <h2 className="mt-3 text-3xl font-black text-white">
                                Experience beyond the codebase.
                            </h2>

                            <p className="mt-5 leading-8 text-slate-400">
                                Leading teams in a fast paced environment taught
                                me how to communicate expectations, make
                                decisions, solve problems quickly, support
                                teammates, and remain accountable for results.
                            </p>

                            <div className="mt-7 border-t border-white/[0.08] pt-6">
                                <p className="text-sm font-bold text-slate-200">
                                    Those skills now influence how I approach:
                                </p>

                                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                    {[
                                        "Team collaboration",
                                        "Technical ownership",
                                        "Clear communication",
                                        "Problem solving",
                                        "Time management",
                                        "Continuous improvement",
                                    ].map((skill) => (
                                        <div
                                            key={skill}
                                            className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-3 py-3"
                                        >
                                            <span className="h-2 w-2 rounded-full bg-cyan-400" />

                                            <span className="text-sm font-semibold text-slate-300">
                                                {skill}
                                            </span>
                                        </div>
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

export default ExperienceHero;