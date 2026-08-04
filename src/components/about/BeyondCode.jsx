import { motion } from "motion/react";
import {
    BookOpenCheck,
    Dumbbell,
    HandHeart,
    RefreshCw,
    UsersRound,
} from "lucide-react";

const personalFoundations = [
    {
        number: "01",
        title: "Discipline Through Fitness",
        description:
            "Fitness has taught me that meaningful progress comes from consistency, patience, and showing up even when motivation is low. I bring that same mindset to learning and software development.",
        icon: Dumbbell,
        tone: "cyan",
    },
    {
        number: "02",
        title: "Continuous Learning",
        description:
            "I regularly strengthen my skills through documentation, project development, algorithms, SQL practice, interview preparation, debugging, and reviewing the decisions behind the software I build.",
        icon: BookOpenCheck,
        tone: "blue",
    },
    {
        number: "03",
        title: "Service and Community",
        description:
            "Volunteer experiences such as Operation Santa Claus, Backpack Buddies, animal shelter support, and youth football mentoring have reinforced the importance of reliability, empathy, and contributing beyond myself.",
        icon: HandHeart,
        tone: "emerald",
    },
    {
        number: "04",
        title: "Leadership Through Action",
        description:
            "As a Walmart Team Lead, I was entrusted with leading associates, coordinating daily operations, solving problems under pressure, and helping the team meet performance goals. That experience strengthened my communication, accountability, decision making, and ability to lead by example. Those same leadership principles now influence how I approach software projects, collaborate with teammates, and take ownership of the systems I build.",
        icon: UsersRound,
        tone: "amber",
    },
    {
        number: "05",
        title: "Improvement Over Perfection",
        description:
            "I believe strong results come from building, reviewing, learning, and improving. I am comfortable receiving feedback, revisiting earlier decisions, and making the next version stronger than the last.",
        icon: RefreshCw,
        tone: "purple",
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
    purple: {
        border: "border-purple-400/20",
        background: "bg-purple-400/[0.04]",
        text: "text-purple-300",
        icon: "border-purple-400/20 bg-purple-400/[0.07]",
    },
    amber: {
        border: "border-amber-400/20",
        background: "bg-amber-400/[0.04]",
        text: "text-amber-300",
        icon: "border-amber-400/20 bg-amber-400/[0.07]",
    },
};

function BeyondCode() {
    return (
        <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#07111f]/75 px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-[7%] top-24 h-72 w-72 rounded-full bg-cyan-400/[0.04] blur-[140px]" />

                <div className="absolute bottom-16 right-[8%] h-80 w-80 rounded-full bg-purple-500/[0.04] blur-[150px]" />
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
                        Beyond Code
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                        The habits behind
                        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                            how I work and grow.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Software engineering is a major part of my life, but the
                        discipline, empathy, and persistence I bring to it were
                        strengthened through experiences outside the codebase.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-6 md:grid-cols-2">
                    {personalFoundations.map((foundation, index) => {
                        const Icon = foundation.icon;
                        const tone = toneClasses[foundation.tone];

                        return (
                            <motion.article
                                key={foundation.number}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.07,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={{ y: -6 }}
                                className={`group relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-xl transition duration-300 sm:p-8 ${index === personalFoundations.length - 1
                                        ? "md:col-span-2"
                                        : ""
                                    } ${tone.border} ${tone.background}`}
                            >
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent transition duration-300 group-hover:via-white/40"
                                />

                                <div className="flex items-start justify-between gap-5">
                                    <div
                                        className={`grid h-12 w-12 place-items-center rounded-2xl border ${tone.icon} ${tone.text}`}
                                    >
                                        <Icon
                                            size={23}
                                            strokeWidth={2}
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <span
                                        className={`text-xs font-black tracking-[0.16em] ${tone.text}`}
                                    >
                                        {foundation.number}
                                    </span>
                                </div>

                                <h3 className="mt-7 text-2xl font-black text-white">
                                    {foundation.title}
                                </h3>

                                <p className="mt-4 leading-8 text-slate-400">
                                    {foundation.description}
                                </p>
                            </motion.article>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.65,
                        delay: 0.12,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-r from-cyan-400/[0.045] via-[#050b18]/90 to-emerald-400/[0.035] p-8 text-center backdrop-blur-xl sm:p-10"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                        Personal Standard
                    </p>

                    <p className="mx-auto mt-4 max-w-4xl text-xl font-bold leading-9 text-slate-200">
                        Stay consistent, remain open to feedback, keep learning,
                        and take responsibility for the quality of the work.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default BeyondCode;