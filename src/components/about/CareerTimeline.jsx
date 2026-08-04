import { motion } from "motion/react";
import {
    BookOpen,
    BriefcaseBusiness,
    Code2,
    GraduationCap,
    Lightbulb,
    Rocket,
    Target,
} from "lucide-react";

const milestones = [
    {
        year: "2018",
        title: "Started My Computer Science Journey",
        description:
            "Began college and started building a foundation in programming, algorithms, data structures, databases, software design, and problem solving.",
        icon: BookOpen,
        tone: "cyan",
    },
    {
        year: "2020",
        title: "Balanced Work and College",
        description:
            "Began working while continuing my degree. Managing employment, coursework, deadlines, and personal responsibilities strengthened my discipline, consistency, time management, and ability to perform under demanding schedules.",
        icon: BriefcaseBusiness,
        tone: "emerald",
    },
    {
        year: "2023",
        title: "Expanded Into Full Stack Development",
        description:
            "Moved beyond isolated programming exercises and began connecting user interfaces, backend services, databases, authentication, APIs, and application logic into complete software systems.",
        icon: Code2,
        tone: "blue",
    },
    {
        year: "2025",
        title: "Defined the CogniHaven Vision",
        description:
            "Developed the original concept, feature direction, and product purpose for CogniHaven as an AI powered cognitive wellness and daily support platform.",
        icon: Lightbulb,
        tone: "purple",
    },
    {
        year: "2025",
        title: "Earned a B.S. in Computer Science",
        description:
            "Completed my Computer Science degree at the University of West Florida while continuing to work and strengthen my practical software development skills.",
        icon: GraduationCap,
        tone: "amber",
    },
    {
        year: "2026",
        title: "Built and Deployed CogniHaven",
        description:
            "Turned the 2025 concept into a production full-stack application with secure authentication, AI integration, reminders, goals, cognitive games, analytics, community features, automated testing, Docker, CI/CD, and cloud deployment.",
        icon: Rocket,
        tone: "rose",
    },
    {
        year: "Now",
        title: "Building the Next Chapter",
        description:
            "Actively pursuing an entry-level software engineering role where I can contribute to production software, learn from experienced engineers, and continue growing through meaningful technical work.",
        icon: Target,
        tone: "cyan",
    },
];

const toneClasses = {
    cyan: {
        border: "border-cyan-400/20",
        background: "bg-cyan-400/[0.04]",
        text: "text-cyan-300",
        node: "border-cyan-400/30 bg-cyan-400/[0.1]",
        glow: "shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    },
    blue: {
        border: "border-blue-400/20",
        background: "bg-blue-400/[0.04]",
        text: "text-blue-300",
        node: "border-blue-400/30 bg-blue-400/[0.1]",
        glow: "shadow-[0_0_20px_rgba(96,165,250,0.2)]",
    },
    emerald: {
        border: "border-emerald-400/20",
        background: "bg-emerald-400/[0.04]",
        text: "text-emerald-300",
        node: "border-emerald-400/30 bg-emerald-400/[0.1]",
        glow: "shadow-[0_0_20px_rgba(52,211,153,0.2)]",
    },
    purple: {
        border: "border-purple-400/20",
        background: "bg-purple-400/[0.04]",
        text: "text-purple-300",
        node: "border-purple-400/30 bg-purple-400/[0.1]",
        glow: "shadow-[0_0_20px_rgba(192,132,252,0.2)]",
    },
    amber: {
        border: "border-amber-400/20",
        background: "bg-amber-400/[0.04]",
        text: "text-amber-300",
        node: "border-amber-400/30 bg-amber-400/[0.1]",
        glow: "shadow-[0_0_20px_rgba(251,191,36,0.2)]",
    },
    rose: {
        border: "border-rose-400/20",
        background: "bg-rose-400/[0.04]",
        text: "text-rose-300",
        node: "border-rose-400/30 bg-rose-400/[0.1]",
        glow: "shadow-[0_0_20px_rgba(251,113,133,0.2)]",
    },
};

function CareerTimeline() {
    return (
        <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-[7%] top-24 h-72 w-72 rounded-full bg-cyan-400/[0.04] blur-[140px]" />
                <div className="absolute bottom-20 right-[8%] h-80 w-80 rounded-full bg-blue-500/[0.04] blur-[150px]" />
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
                        Career Timeline
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                        A path shaped by
                        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                            learning, building, and persistence.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Each stage added new technical depth, stronger
                        discipline, and a clearer understanding of the kind of
                        engineer I want to become.
                    </p>
                </motion.div>

                <div className="relative mx-auto mt-16 max-w-5xl">
                    <div
                        aria-hidden="true"
                        className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-cyan-400/40 via-blue-400/20 to-transparent sm:left-1/2"
                    />

                    <div className="space-y-10">
                        {milestones.map((milestone, index) => {
                            const Icon = milestone.icon;
                            const tone = toneClasses[milestone.tone];
                            const isRight = index % 2 !== 0;

                            return (
                                <motion.article
                                    key={`${milestone.year}-${milestone.title}`}
                                    initial={{
                                        opacity: 0,
                                        x: isRight ? 28 : -28,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.05,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className={`relative grid gap-6 pl-16 sm:grid-cols-2 sm:pl-0 ${
                                        isRight ? "" : ""
                                    }`}
                                >
                                    <div
                                        className={`${
                                            isRight
                                                ? "sm:col-start-2 sm:pl-10"
                                                : "sm:pr-10"
                                        }`}
                                    >
                                        <motion.div
                                            whileHover={{ y: -6 }}
                                            className={`group relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-xl transition duration-300 sm:p-8 ${tone.border} ${tone.background}`}
                                        >
                                            <div
                                                aria-hidden="true"
                                                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent transition duration-300 group-hover:via-white/40"
                                            />

                                            <div className="flex items-start justify-between gap-5">
                                                <div
                                                    className={`grid h-12 w-12 place-items-center rounded-2xl border ${tone.node} ${tone.text}`}
                                                >
                                                    <Icon
                                                        size={23}
                                                        strokeWidth={2}
                                                        aria-hidden="true"
                                                    />
                                                </div>

                                                <span
                                                    className={`text-sm font-black uppercase tracking-[0.16em] ${tone.text}`}
                                                >
                                                    {milestone.year}
                                                </span>
                                            </div>

                                            <h3 className="mt-7 text-2xl font-black leading-tight text-white">
                                                {milestone.title}
                                            </h3>

                                            <p className="mt-4 leading-8 text-slate-400">
                                                {milestone.description}
                                            </p>
                                        </motion.div>
                                    </div>

                                    <div
                                        aria-hidden="true"
                                        className={`absolute left-1.5 top-7 grid h-8 w-8 place-items-center rounded-full border bg-[#050b18] sm:left-1/2 sm:-translate-x-1/2 ${tone.border} ${tone.glow}`}
                                    >
                                        <span
                                            className={`h-2.5 w-2.5 rounded-full ${tone.node}`}
                                        />
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CareerTimeline;