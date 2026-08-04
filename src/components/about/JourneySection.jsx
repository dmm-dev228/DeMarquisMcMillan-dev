import { motion } from "motion/react";
import {
    BriefcaseBusiness,
    Code2,
    GraduationCap,
    Lightbulb,
} from "lucide-react";

const journeyPoints = [
    {
        number: "01",
        title: "Choosing Computer Science",
        description:
            "I was drawn to software engineering because it combines creativity, logic, and problem solving. I enjoy taking an idea, breaking it into smaller systems, and turning it into something people can actually use.",
        icon: Lightbulb,
        tone: "cyan",
    },
    {
        number: "02",
        title: "Learning While Working",
        description:
            "While earning my Computer Science degree, I balanced school with work and other responsibilities. That experience strengthened my discipline, time management, and ability to keep moving forward even when the schedule was demanding.",
        icon: BriefcaseBusiness,
        tone: "emerald",
    },
    {
        number: "03",
        title: "Building Beyond the Classroom",
        description:
            "I wanted more than assignments, so I started building complete applications that required architecture, debugging, testing, deployment, and real product decisions. Those projects helped me understand how separate technologies work together as one system.",
        icon: Code2,
        tone: "purple",
    },
    {
        number: "04",
        title: "Growing Into Software Engineering",
        description:
            "After graduating with a B.S. in Computer Science, I continued strengthening my skills through full-stack development, backend engineering, cloud deployment, AI integrations, data systems, algorithms, and interview preparation.",
        icon: GraduationCap,
        tone: "blue",
    },
];

const toneClasses = {
    cyan: {
        border: "border-cyan-400/20",
        background: "bg-cyan-400/[0.04]",
        text: "text-cyan-300",
        icon: "border-cyan-400/20 bg-cyan-400/[0.07]",
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
    blue: {
        border: "border-blue-400/20",
        background: "bg-blue-400/[0.04]",
        text: "text-blue-300",
        icon: "border-blue-400/20 bg-blue-400/[0.07]",
    },
};

function JourneySection() {
    return (
        <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#07111f]/75 px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-cyan-400/[0.04] blur-[130px]" />
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
                        My Journey
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                        Learning through
                        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                            building, persistence, and growth.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        My path into software engineering has been shaped by
                        curiosity, responsibility, and the decision to keep
                        building even when the next opportunity was not
                        guaranteed.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-6 lg:grid-cols-2">
                    {journeyPoints.map((item, index) => {
                        const Icon = item.icon;
                        const tone = toneClasses[item.tone];

                        return (
                            <motion.article
                                key={item.number}
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
                                        {item.number}
                                    </span>
                                </div>

                                <h3 className="mt-7 text-2xl font-black text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-8 text-slate-400">
                                    {item.description}
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
                    className="mt-8 rounded-[2rem] border border-cyan-400/15 bg-cyan-400/[0.035] p-7 text-center backdrop-blur-xl sm:p-9"
                >
                    <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-300">
                        Building CogniHaven became a major turning point. It
                        pushed me beyond individual programming exercises and
                        into authentication, security, REST APIs, databases,
                        testing, AI integration, Docker, CI/CD, production
                        deployment, and long-term product thinking.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default JourneySection;