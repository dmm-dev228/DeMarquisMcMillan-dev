import { motion } from "motion/react";

function ProjectSection({
    id,
    children,
    className = "",
    containerClassName = "",
    background = "",
}) {
    return (
        <section
            id={id}
            className={`relative px-6 py-24 sm:px-8 lg:px-12 ${background} ${className}`}
        >
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
                    amount: 0.15,
                }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className={`mx-auto w-full max-w-7xl ${containerClassName}`}
            >
                {children}
            </motion.div>
        </section>
    );
}

export default ProjectSection;