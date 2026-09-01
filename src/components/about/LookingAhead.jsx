import { motion } from "motion/react";
import { ArrowRight, Rocket, Target } from "lucide-react";
import { Link } from "react-router-dom";

function LookingAhead() {
    return (
        <section className="relative overflow-hidden px-6 py-28 sm:px-8 lg:px-12">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-[180px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-cyan-400/20 bg-[#050b18]/90 p-10 text-center backdrop-blur-xl sm:p-14"
            >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.08]">
                    <Rocket
                        className="text-cyan-300"
                        size={30}
                    />
                </div>

                <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                    Looking Ahead
                </p>

                <h2 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white">
                    Building software
                    <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                        that creates real impact.
                    </span>
                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-300">
                    I'm looking for an opportunity to contribute to a team
                    where I can continue learning from experienced engineers,
                    solve meaningful technical problems, and help build software
                    that improves people's lives.
                </p>

                <p className="mx-auto mt-6 max-w-3xl leading-8 text-slate-400">
                    My goal isn't simply to write code. I want to understand
                    systems, improve products, collaborate with talented teams,
                    and continuously grow into an engineer who creates software
                    people genuinely rely on.
                </p>

                <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
                    <motion.div
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-3 rounded-2xl border border-cyan-300/30 bg-cyan-400/[0.08] px-8 py-4 font-black text-cyan-100 transition hover:bg-cyan-400/[0.14]"
                        >
                            <Target size={18} />
                            View My Projects
                        </Link>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 font-bold text-slate-200 transition hover:bg-white/[0.06]"
                        >
                            Let's Connect
                            <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default LookingAhead;