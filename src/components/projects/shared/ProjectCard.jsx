import { motion } from "motion/react";

const accentStyles = {
    cyan: {
        line: "via-cyan-400/60",
        eyebrow: "text-cyan-400",
        badge:
            "border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300",
    },
    emerald: {
        line: "via-emerald-400/60",
        eyebrow: "text-emerald-400",
        badge:
            "border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-300",
    },
    amber: {
        line: "via-amber-400/60",
        eyebrow: "text-amber-400",
        badge:
            "border-amber-400/20 bg-amber-400/[0.08] text-amber-300",
    },
    violet: {
        line: "via-violet-400/60",
        eyebrow: "text-violet-400",
        badge:
            "border-violet-400/20 bg-violet-400/[0.08] text-violet-300",
    },
};

function ProjectCard({
    eyebrow,
    title,
    description,
    badge,
    children,
    accent = "cyan",
    delay = 0,
    className = "",
    contentClassName = "",
}) {
    const styles = accentStyles[accent] ?? accentStyles.cyan;

    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 24,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.25,
            }}
            transition={{
                duration: 0.55,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={[
                "group relative overflow-hidden rounded-3xl",
                "border border-white/[0.08] bg-white/[0.03]",
                "p-7 sm:p-8",
                className,
            ].join(" ")}
        >
            <div
                aria-hidden="true"
                className={[
                    "absolute inset-x-0 top-0 h-px",
                    "bg-gradient-to-r from-transparent to-transparent",
                    styles.line,
                    "opacity-0 transition-opacity duration-300",
                    "group-hover:opacity-100",
                ].join(" ")}
            />

            <div className="flex flex-wrap items-start justify-between gap-6">
                <div className="min-w-0">
                    {eyebrow && (
                        <p
                            className={[
                                "text-xs font-bold uppercase",
                                "tracking-[0.22em]",
                                styles.eyebrow,
                            ].join(" ")}
                        >
                            {eyebrow}
                        </p>
                    )}

                    <h3 className="mt-4 text-2xl font-black tracking-[-0.025em] text-white">
                        {title}
                    </h3>
                </div>

                {badge && (
                    <span
                        className={[
                            "shrink-0 rounded-full border px-3 py-1",
                            "text-xs font-bold",
                            styles.badge,
                        ].join(" ")}
                    >
                        {badge}
                    </span>
                )}
            </div>

            {description && (
                <p className="mt-6 leading-7 text-slate-300">
                    {description}
                </p>
            )}

            {children && (
                <div className={`mt-7 ${contentClassName}`}>
                    {children}
                </div>
            )}
        </motion.article>
    );
}

export default ProjectCard;