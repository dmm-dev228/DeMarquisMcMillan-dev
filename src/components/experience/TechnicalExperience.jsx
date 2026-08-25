import { motion } from "motion/react";
import {
    BrainCircuit,
    Code2,
    Container,
    Database,
    GraduationCap,
    Layers3,
    ServerCog,
    TestTube2,
} from "lucide-react";

const engineeringAreas = [
    {
        title: "Full Stack Development",
        description:
            "Built applications across the complete request lifecycle, connecting responsive interfaces to backend services, application logic, databases, authentication, and external APIs.",
        icon: Layers3,
        technologies: ["React", "JavaScript", "Java", "Spring Boot", "REST APIs"],
    },
    {
        title: "Backend Engineering",
        description:
            "Designed layered backend systems with controllers, services, repositories, DTOs, authentication, authorization, validation, scheduling, and external service integrations.",
        icon: ServerCog,
        technologies: [
            "Spring Boot",
            "Spring Security",
            "JWT",
            "JPA",
            "Hibernate",
        ],
    },
    {
        title: "Data & Persistence",
        description:
            "Worked with relational data modeling, entity relationships, repository queries, persistence workflows, SQL, and production database integration.",
        icon: Database,
        technologies: ["MySQL", "SQL", "JPA", "Hibernate", "Railway"],
    },
    {
        title: "Testing & Validation",
        description:
            "Used automated testing and API validation to verify application behavior, security workflows, service logic, controller behavior, and frontend components.",
        icon: TestTube2,
        technologies: [
            "JUnit",
            "Mockito",
            "MockMvc",
            "Vitest",
            "Postman",
        ],
    },
    {
        title: "Deployment & Delivery",
        description:
            "Moved applications beyond local development by containerizing services, configuring environments, connecting cloud infrastructure, and deploying production systems.",
        icon: Container,
        technologies: [
            "Docker",
            "Vercel",
            "Render",
            "Railway",
            "GitHub Actions",
        ],
    },
    {
        title: "Algorithms & Systems",
        description:
            "Developed lower level C++ projects involving networking, concurrency, search algorithms, board state management, numerical computing, and data processing.",
        icon: Code2,
        technologies: [
            "C++",
            "Sockets",
            "Algorithms",
            "Data Structures",
            "Linux",
        ],
    },
];

const educationTopics = [
    "Algorithms & Data Structures",
    "Software Engineering",
    "Database Systems",
    "Computer Systems",
    "Object Oriented Programming",
    "Problem Solving",
];

function TechnicalExperience() {
    return (
        <section className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-blue-500/[0.04] blur-[150px]" />

                <div className="absolute bottom-20 right-[7%] h-80 w-80 rounded-full bg-cyan-400/[0.04] blur-[150px]" />
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
                        Technical Experience
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                        Computer science foundations
                        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                            applied through real software.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        My technical experience combines formal computer science
                        education with hands on engineering across full stack
                        applications, backend systems, databases, algorithms,
                        testing, and production deployment.
                    </p>
                </motion.div>

                {/* Education */}
                <motion.article
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.65,
                        delay: 0.08,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative mt-16 overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-[#050b18]/85 p-7 backdrop-blur-xl sm:p-9"
                >
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"
                    />

                    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                        <div>
                            <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                <GraduationCap
                                    size={27}
                                    strokeWidth={2}
                                    aria-hidden="true"
                                />
                            </div>

                            <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                University of West Florida
                            </p>

                            <h3 className="mt-3 text-3xl font-black text-white">
                                B.S. Computer Science
                            </h3>

                            <p className="mt-2 font-semibold text-slate-300">
                                Graduated December 2025
                            </p>

                            <p className="mt-5 max-w-xl leading-8 text-slate-400">
                                My degree established the theoretical foundation
                                behind the systems I now build, while independent
                                software projects gave me opportunities to apply
                                those concepts beyond individual assignments.
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {educationTopics.map((topic, index) => (
                                <motion.div
                                    key={topic}
                                    initial={{ opacity: 0, x: 12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.045,
                                    }}
                                    className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4"
                                >
                                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300">
                                        <BrainCircuit
                                            size={16}
                                            aria-hidden="true"
                                        />
                                    </span>

                                    <span className="text-sm font-bold text-slate-300">
                                        {topic}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.article>

                {/* Applied engineering */}
                <div className="mt-10">
                    <div className="mb-7">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                            Applied Engineering
                        </p>

                        <h3 className="mt-3 text-3xl font-black text-white">
                            Where I've put those foundations to work.
                        </h3>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {engineeringAreas.map((area, index) => {
                            const Icon = area.icon;

                            return (
                                <motion.article
                                    key={area.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.055,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    whileHover={{ y: -6 }}
                                    className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.025]"
                                >
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/0 to-transparent transition duration-300 group-hover:via-cyan-300/50"
                                    />

                                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300">
                                        <Icon
                                            size={23}
                                            strokeWidth={2}
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <h4 className="mt-6 text-xl font-black text-white">
                                        {area.title}
                                    </h4>

                                    <p className="mt-4 leading-7 text-slate-400">
                                        {area.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {area.technologies.map(
                                            (technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs font-bold text-slate-300"
                                                >
                                                    {technology}
                                                </span>
                                            ),
                                        )}
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

export default TechnicalExperience;