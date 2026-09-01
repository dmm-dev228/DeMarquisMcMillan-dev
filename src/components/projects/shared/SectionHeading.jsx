import { motion } from "motion/react";

const alignmentStyles = {
    left: "text-left",
    center: "mx-auto text-center",
    right: "ml-auto text-right",
};

const widthStyles = {
    narrow: "max-w-3xl",
    default: "max-w-4xl",
    wide: "max-w-5xl",
    full: "max-w-none",
};

function SectionHeading({
    id,
    eyebrow,
    title,
    description,
    align = "center",
    width = "default",
    className = "",
    eyebrowClassName = "",
    titleClassName = "",
    descriptionClassName = "",
}) {
    const alignmentClass =
        alignmentStyles[align] ?? alignmentStyles.center;

    const widthClass =
        widthStyles[width] ?? widthStyles.default;

    return (
        <motion.header
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
            className={`${widthClass} ${alignmentClass} ${className}`}
        >
            {eyebrow && (
                <p
                    className={`text-sm font-bold uppercase tracking-[0.22em] text-cyan-400 ${eyebrowClassName}`}
                >
                    {eyebrow}
                </p>
            )}

            <h2
                id={id}
                className={`mt-4 text-4xl font-black tracking-[-0.035em] text-white sm:text-5xl ${titleClassName}`}
            >
                {title}
            </h2>

            {description && (
                <p
                    className={`mt-7 text-lg leading-8 text-slate-300 ${descriptionClassName}`}
                >
                    {description}
                </p>
            )}
        </motion.header>
    );
}

export default SectionHeading;