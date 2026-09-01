import { motion } from "motion/react";
import {
    CheckCircle2,
    Clock3,
    MessageSquareText,
    ShieldCheck,
    Target,
    UsersRound,
} from "lucide-react";

const leadershipAreas = [
    {
        title: "Team Leadership",
        description:
            "Led associates during day to day operations, helped coordinate priorities, communicated expectations, and supported the team in completing work efficiently.",
        icon: UsersRound,
        tone: "cyan",
    },
    {
        title: "Operational Ownership",
        description:
            "Took responsibility for assigned areas, monitored progress, responded to changing priorities, and helped keep work moving during demanding shifts.",
        icon: Target,
        tone: "blue",
    },
    {
        title: "Clear Communication",
        description:
            "Communicated priorities, instructions, and feedback across the team while helping resolve confusion and keep everyone aligned.",
        icon: MessageSquareText,
        tone: "emerald",
    },
    {
        title: "Problem Solving Under Pressure",
        description:
            "Handled unexpected operational problems, adjusted plans when conditions changed, and made decisions while balancing speed, quality, and team needs.",
        icon: ShieldCheck,
        tone: "amber",
    },
    {
        title: "Time Management",
        description:
            "Balanced multiple responsibilities and deadlines while helping the team prioritize the work that had the greatest operational impact.",
        icon: Clock3,
        tone: "purple",
    },
];

const engineeringTranslations = [
    {
        workplace: "Coordinating associates and daily priorities",
        engineering: "Coordinating tasks, dependencies, and team communication",
    },
    {
        workplace: "Responding to unexpected operational issues",
        engineering: "Debugging problems and adapting implementation plans",
    },
    {
        workplace: "Being accountable for team outcomes",
        engineering: "Taking ownership of features, defects, and deliverables",
    },
    {
        workplace: "Communicating expectations clearly",
        engineering: "Explaining technical decisions and collaborating effectively",
    },
    {
        workplace: "Balancing speed with quality",
        engineering: "Shipping reliable software without ignoring maintainability",
    },
];

const toneClasses = {
    cyan: {
        border: "border-cyan-400/20",
        background: "bg-cyan-400/[0.04]",
        text: "text-cyan-300",
        icon: "border-cyan-400/20 bg-cyan-400/[0.07]",
    },
    blue: {
        border: "border-blue-400/20",
        background: "bg-blue-400/[0.04]",
        text: "text-blue-300",
        icon: "border-blue-400/20 bg-blue-400/[0.07]",
    },
    emerald: {
        border: "border-emerald-400/20",
        background: "bg-emerald-400/[0.04]",
        text: "text-emerald-300",
        icon: "border-emerald-400/20 bg-emerald-400/[0.07]",
    },
    amber: {
        border: "border-amber-400/20",
        background: "bg-amber-400/[0.04]",
        text: "text-amber-300",
        icon: "border-amber-400/20 bg-amber-400/[0.07]",
    },
    purple: {
        border: "border-purple-400/20",
        background: "bg-purple-400/[0.04]",
        text: "text-purple-300",
        icon: "border-purple-400/20 bg-purple-400/[0.07]",
    },
};

function WalmartExperience() {
    return (
        <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#07111f]/75 px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-[6%] top-24 h-72 w-72 rounded-full bg-cyan-400/[0.04] blur-[140px]" />
                <div className="absolute bottom-16 right-[8%] h-80 w-80 rounded-full bg-blue-500/[0.04] blur-[150px]" />
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
                        Leadership Experience
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                        Walmart Team Lead
                        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                            leadership that carries into engineering.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        My time as a Walmart Team Lead gave me practical
                        leadership experience in a fast paced environment where
                        communication, accountability, judgment, and consistency
                        directly affected team performance.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {leadershipAreas.map((area, index) => {
                        const Icon = area.icon;
                        const tone = toneClasses[area.tone];

                        return (
                            <motion.article
                                key={area.title}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.06,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={{ y: -6 }}
                                className={`group relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-xl transition duration-300 sm:p-8 ${tone.border} ${tone.background}`}
                            >
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent transition duration-300 group-hover:via-white/40"
                                />

                                <div
                                    className={`grid h-12 w-12 place-items-center rounded-2xl border ${tone.icon} ${tone.text}`}
                                >
                                    <Icon
                                        size={23}
                                        strokeWidth={2}
                                        aria-hidden="true"
                                    />
                                </div>

                                <h3 className="mt-7 text-2xl font-black text-white">
                                    {area.title}
                                </h3>

                                <p className="mt-4 leading-8 text-slate-400">
                                    {area.description}
                                </p>
                            </motion.article>
                        );
                    })}

                    <motion.article
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.55,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{ y: -6 }}
                        className="group relative overflow-hidden rounded-[2rem] border border-rose-400/20 bg-rose-400/[0.04] p-7 backdrop-blur-xl transition duration-300 sm:p-8"
                    >
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent transition duration-300 group-hover:via-white/40"
                        />

                        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-rose-400/20 bg-rose-400/[0.07] text-rose-300">
                            <CheckCircle2
                                size={23}
                                strokeWidth={2}
                                aria-hidden="true"
                            />
                        </div>

                        <h3 className="mt-7 text-2xl font-black text-white">
                            Leading by Example
                        </h3>

                        <p className="mt-4 leading-8 text-slate-400">
                            I learned that leadership is not only giving
                            direction. It also means being dependable, stepping
                            in when the team needs support, accepting
                            responsibility, and demonstrating the standard you
                            expect from others.
                        </p>
                    </motion.article>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.65,
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-10 overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-[#050b18]/85 p-7 backdrop-blur-xl sm:p-9"
                >
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                            How It Translates
                        </p>

                        <h3 className="mt-3 text-3xl font-black text-white">
                            Leadership skills that strengthen engineering work.
                        </h3>

                        <p className="mt-4 leading-8 text-slate-400">
                            The environment is different, but many of the core
                            responsibilities are directly relevant to working on
                            an engineering team.
                        </p>
                    </div>

                    <div className="mt-8 space-y-3">
                        {engineeringTranslations.map((item, index) => (
                            <motion.div
                                key={item.workplace}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.05,
                                }}
                                className="grid gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6"
                            >
                                <p className="text-sm font-semibold leading-6 text-slate-300">
                                    {item.workplace}
                                </p>

                                <ArrowConnector />

                                <p className="text-sm font-bold leading-6 text-cyan-200 md:text-right">
                                    {item.engineering}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ArrowConnector() {
    return (
        <span
            aria-hidden="true"
            className="hidden text-lg font-black text-cyan-400 md:block"
        >
            →
        </span>
    );
}

export default WalmartExperience;