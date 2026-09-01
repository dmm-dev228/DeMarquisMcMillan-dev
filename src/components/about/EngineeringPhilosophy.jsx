import { motion } from "motion/react";
import {
    Blocks,
    Gauge,
    Lightbulb,
    ShieldCheck,
    Users,
    Wrench,
} from "lucide-react";

const principles = [
    {
        number: "01",
        title: "Understand the problem first",
        description:
            "Strong solutions begin with clarity. Before writing code, I try to understand the user need, technical constraints, data flow, and the real problem the software is expected to solve.",
        icon: Lightbulb,
        tone: "cyan",
    },
    {
        number: "02",
        title: "Design for maintainability",
        description:
            "I value clear responsibilities, readable code, reusable components, and architecture that can grow without forcing every new feature into the same file or layer.",
        icon: Blocks,
        tone: "blue",
    },
    {
        number: "03",
        title: "Build security into the system",
        description:
            "Authentication, authorization, validation, protected secrets, and safe data handling should be considered during design rather than added only after a feature is complete.",
        icon: ShieldCheck,
        tone: "emerald",
    },
    {
        number: "04",
        title: "Measure before optimizing",
        description:
            "Performance decisions should be guided by actual bottlenecks, realistic usage, and system behavior. I prefer evidence over premature complexity.",
        icon: Gauge,
        tone: "amber",
    },
    {
        number: "05",
        title: "Treat feedback as part of engineering",
        description:
            "Code reviews, testing results, user feedback, and production issues all reveal ways to improve the product and the thinking behind it.",
        icon: Users,
        tone: "purple",
    },
    {
        number: "06",
        title: "Finish what reaches the user",
        description:
            "A feature is not complete because the code compiles. It should be tested, connected to the rest of the system, understandable, deployable, and useful.",
        icon: Wrench,
        tone: "cyan",
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

function EngineeringPhilosophy() {
    return (
        <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-[6%] top-20 h-72 w-72 rounded-full bg-cyan-400/[0.04] blur-[140px]" />
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
                        Engineering Philosophy
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                        Good software requires
                        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                            more than working code.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        I approach engineering as a balance of problem solving,
                        architecture, security, maintainability, collaboration,
                        and responsibility to the people using the product.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {principles.map((principle, index) => {
                        const Icon = principle.icon;
                        const tone = toneClasses[principle.tone];

                        return (
                            <motion.article
                                key={principle.number}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.055,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={{ y: -7 }}
                                className={`group relative overflow-hidden rounded-[2rem] border p-7 backdrop-blur-xl transition duration-300 ${tone.border} ${tone.background}`}
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
                                        {principle.number}
                                    </span>
                                </div>

                                <h3 className="mt-7 text-2xl font-black leading-tight text-white">
                                    {principle.title}
                                </h3>

                                <p className="mt-4 leading-8 text-slate-400">
                                    {principle.description}
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
                        delay: 0.1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-gradient-to-r from-cyan-400/[0.045] via-[#050b18]/90 to-blue-400/[0.035] p-8 text-center backdrop-blur-xl sm:p-10"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                        My Standard
                    </p>

                    <p className="mx-auto mt-4 max-w-4xl text-xl font-bold leading-9 text-slate-200">
                        Build with purpose, understand the tradeoffs, test the
                        important paths, and leave the system clearer than it
                        was before.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default EngineeringPhilosophy;