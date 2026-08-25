import { motion } from "motion/react";
import {
    BriefcaseBusiness,
    Car,
    GraduationCap,
    Layers3,
} from "lucide-react";

const responsibilities = [
    {
        title: "Walmart",
        subtitle: "Professional Responsibility",
        description:
            "Maintained consistent employment while taking on increasing responsibility, including leadership experience as a Team Lead.",
        icon: BriefcaseBusiness,
    },
    {
        title: "DoorDash",
        subtitle: "Additional Work",
        description:
            "Worked additional hours through DoorDash while continuing to manage responsibilities at Walmart and progress toward my degree.",
        icon: Car,
    },
    {
        title: "Computer Science",
        subtitle: "University of West Florida",
        description:
            "Continued coursework, projects, exams, and long term degree requirements while balancing multiple sources of employment.",
        icon: GraduationCap,
    },
];

function BalancingResponsibilities() {
    return (
        <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.04] blur-[160px]" />
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
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                        <Layers3
                            size={26}
                            strokeWidth={2}
                            aria-hidden="true"
                        />
                    </div>

                    <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                        Discipline & Time Management
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                        Working while earning
                        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                            my Computer Science degree.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Earning my degree was only one part of my schedule. I
                        balanced college with employment at Walmart and
                        additional work through DoorDash, often managing
                        professional responsibilities, academic deadlines, and
                        personal commitments at the same time.
                    </p>
                </motion.div>

                <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
                    {responsibilities.map((responsibility, index) => {
                        const Icon = responsibility.icon;

                        return (
                            <motion.article
                                key={responsibility.title}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.08,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={{ y: -6 }}
                                className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.025] sm:p-8"
                            >
                                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                    <Icon
                                        size={23}
                                        strokeWidth={2}
                                        aria-hidden="true"
                                    />
                                </div>

                                <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
                                    {responsibility.subtitle}
                                </p>

                                <h3 className="mt-2 text-2xl font-black text-white">
                                    {responsibility.title}
                                </h3>

                                <p className="mt-4 leading-8 text-slate-400">
                                    {responsibility.description}
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
                    className="mt-8 rounded-[2rem] border border-cyan-400/15 bg-gradient-to-r from-cyan-400/[0.04] via-[#050b18]/90 to-blue-500/[0.04] p-8 text-center backdrop-blur-xl sm:p-10"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                        What It Developed
                    </p>

                    <p className="mx-auto mt-4 max-w-4xl text-xl font-bold leading-9 text-slate-200">
                        Managing all three strengthened my discipline, time
                        management, prioritization, reliability, and ability to
                        keep moving toward long term goals even when the
                        workload was demanding.
                    </p>

                    <div className="mt-7 flex flex-wrap justify-center gap-3">
                        {[
                            "Discipline",
                            "Prioritization",
                            "Reliability",
                            "Time Management",
                            "Adaptability",
                            "Persistence",
                        ].map((quality) => (
                            <span
                                key={quality}
                                className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-4 py-2 text-sm font-bold text-cyan-100"
                            >
                                {quality}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default BalancingResponsibilities;