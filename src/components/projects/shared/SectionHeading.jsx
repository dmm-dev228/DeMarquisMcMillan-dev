import { motion } from "motion/react";

function SectionHeading({
    eyebrow,
    title,
    description,
    align = "center",
    id,
    className = "",
}) {
    const isCenter = align === "center";

    return (
        <motion.div
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
                amount: 0.35,
            }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={[
                isCenter ? "mx-auto max-w-4xl text-center" : "",
                className,
            ].join(" ")}
        >
            {eyebrow && (
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                    {eyebrow}
                </p>
            )}

            <h2
                id={id}
                className="mt-4 text-4xl font-black tracking-[-0.035em] text-white sm:text-5xl"
            >
                {title}
            </h2>

            {description && (
                <p className="mt-7 text-lg leading-8 text-slate-300">
                    {description}
                </p>
            )}
        </motion.div>
    );
}

export default SectionHeading;