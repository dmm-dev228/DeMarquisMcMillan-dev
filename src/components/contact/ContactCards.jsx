import { motion } from "motion/react";
import { Link } from "react-router-dom";

function ContactCards() {
    return (
        <section className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
            {/* Background effects */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-cyan-400/[0.04] blur-[130px]" />

                <div className="absolute bottom-10 right-[8%] h-80 w-80 rounded-full bg-blue-500/[0.04] blur-[150px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mx-auto max-w-5xl"
            >
                <div className="relative overflow-hidden rounded-[1.5rem] border border-cyan-400/20 bg-[#050b18]/85 px-5 py-10 text-center shadow-[0_0_50px_rgba(34,211,238,0.05)] backdrop-blur-xl sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
                    {/* Top highlight */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/75 to-transparent"
                    />

                    {/* Glow */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-0 h-60 w-60 -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-3xl"
                    />

                    <div className="relative">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
                            Start a Conversation
                        </p>

                        <h2 className="mx-auto mt-5 max-w-4xl text-[2.4rem] font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl sm:leading-[1] lg:text-6xl">
                            Let&apos;s build{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                                meaningful software
                            </span>{" "}
                            together.
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                            I&apos;m seeking a software engineering opportunity
                            where I can contribute to production systems, learn
                            from experienced engineers, and help turn challenging
                            problems into reliable software.
                        </p>

                        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base">
                            If my background or projects align with what your
                            team is building, I&apos;d be glad to connect.
                        </p>

                        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
                            <motion.a
                                href="mailto:dmmcmillan2018@gmail.com?subject=Software%20Engineering%20Opportunity"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl border border-cyan-300/35 bg-cyan-400/[0.1] px-5 py-4 font-black text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.08)] transition duration-300 hover:border-cyan-200/60 hover:bg-cyan-400/[0.16] hover:text-white sm:w-auto sm:px-7"
                            >
                                Email Me

                                <span
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </motion.a>

                            <motion.div
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto"
                            >
                                <Link
                                    to="/projects"
                                    className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 font-bold text-slate-200 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white sm:px-7"
                                >
                                    Explore My Work

                                    <span aria-hidden="true">
                                        ↗
                                    </span>
                                </Link>
                            </motion.div>
                        </div>

                        <p className="mt-7 break-all text-xs font-semibold text-slate-500 sm:break-normal sm:text-sm">
                            dmmcmillan2018@gmail.com
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default ContactCards;