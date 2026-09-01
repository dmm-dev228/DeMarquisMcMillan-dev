import { motion } from "motion/react";
import {
    Braces,
    Cloud,
    Code2,
    Database,
    FlaskConical,
    ServerCog,
} from "lucide-react";

const expertiseAreas = [
    {
        title: "Backend Engineering",
        eyebrow: "Production Application Experience",
        description:
            "Built and deployed backend systems with authentication, authorization, persistence, email workflows, AI integration, scheduling, and protected REST APIs.",
        icon: ServerCog,
        tone: "cyan",
        technologies: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "REST APIs",
            "JWT",
            "Hibernate",
            "Maven",
        ],
        evidence: [
            "Designed layered controller, service, and repository architecture",
            "Implemented JWT authentication and BCrypt password security",
            "Connected MySQL persistence through Spring Data JPA",
            "Integrated OpenAI, email delivery, reminders, and background scheduling",
        ],
    },
    {
        title: "Frontend Development",
        eyebrow: "Responsive Product Interfaces",
        description:
            "Created reusable React components, protected routes, responsive layouts, interactive dashboards, and polished user flows across production and portfolio applications.",
        icon: Code2,
        tone: "blue",
        technologies: [
            "React",
            "JavaScript",
            "Vite",
            "React Router",
            "Tailwind CSS",
            "HTML",
            "CSS",
        ],
        evidence: [
            "Built reusable page and feature components",
            "Implemented responsive desktop and mobile experiences",
            "Connected frontend workflows to authenticated backend APIs",
            "Created animated portfolio case studies and application interfaces",
        ],
    },
    {
        title: "Databases & Persistence",
        eyebrow: "Relational Data Design",
        description:
            "Modeled application entities, relationships, and persistence flows for authentication, profiles, reminders, goals, achievements, analytics, community features, and application settings.",
        icon: Database,
        tone: "emerald",
        technologies: [
            "MySQL",
            "SQL",
            "Spring Data JPA",
            "Hibernate",
            "Railway",
            "Data Modeling",
        ],
        evidence: [
            "Designed relational entities and foreign key relationships",
            "Implemented repository driven persistence and querying",
            "Resolved account deletion and data integrity issues",
            "Deployed and connected a production MySQL database",
        ],
    },
    {
        title: "Cloud & Delivery",
        eyebrow: "Deployed Systems",
        description:
            "Deployed frontend, backend, and database services independently while managing environment configuration, containerization, and automated delivery workflows.",
        icon: Cloud,
        tone: "purple",
        technologies: [
            "Docker",
            "Vercel",
            "Render",
            "Railway",
            "GitHub Actions",
            "CI/CD",
        ],
        evidence: [
            "Containerized the Spring Boot backend with Docker",
            "Deployed the React frontend through Vercel",
            "Hosted backend and database services in the cloud",
            "Configured GitHub Actions for automated build and delivery workflows",
        ],
    },
    {
        title: "Testing & Quality",
        eyebrow: "Confidence Before Release",
        description:
            "Used automated tests, API validation, debugging, and manual verification to protect critical workflows and reduce regressions before deployment.",
        icon: FlaskConical,
        tone: "amber",
        technologies: [
            "JUnit",
            "Mockito",
            "MockMvc",
            "Vitest",
            "React Testing Library",
            "Postman",
        ],
        evidence: [
            "Tested backend services, controllers, and security behavior",
            "Validated API contracts and edge cases with Postman",
            "Used frontend testing tools for component behavior",
            "Verified builds and responsive behavior before commits",
        ],
    },
    {
        title: "Systems & Core Programming",
        eyebrow: "Algorithms and Low Level Foundations",
        description:
            "Built C++ projects involving client server networking, concurrency, search algorithms, board state management, data ingestion, parsing, and numerical computing.",
        icon: Braces,
        tone: "rose",
        technologies: [
            "C++",
            "Algorithms",
            "Sockets",
            "Concurrency",
            "Make",
            "Linux",
            "Data Structures",
        ],
        evidence: [
            "Implemented Minimax with Alpha Beta pruning",
            "Built a multi client socket based subscription platform",
            "Managed reversible game state and generalized win detection",
            "Implemented linear regression and CSV data pipelines from scratch",
        ],
    },
];

const toneClasses = {
    cyan: {
        border: "border-cyan-400/20",
        background: "bg-cyan-400/[0.04]",
        text: "text-cyan-300",
        icon: "border-cyan-400/20 bg-cyan-400/[0.07]",
        check: "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300",
    },
    blue: {
        border: "border-blue-400/20",
        background: "bg-blue-400/[0.04]",
        text: "text-blue-300",
        icon: "border-blue-400/20 bg-blue-400/[0.07]",
        check: "border-blue-400/20 bg-blue-400/[0.06] text-blue-300",
    },
    emerald: {
        border: "border-emerald-400/20",
        background: "bg-emerald-400/[0.04]",
        text: "text-emerald-300",
        icon: "border-emerald-400/20 bg-emerald-400/[0.07]",
        check: "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300",
    },
    purple: {
        border: "border-purple-400/20",
        background: "bg-purple-400/[0.04]",
        text: "text-purple-300",
        icon: "border-purple-400/20 bg-purple-400/[0.07]",
        check: "border-purple-400/20 bg-purple-400/[0.06] text-purple-300",
    },
    amber: {
        border: "border-amber-400/20",
        background: "bg-amber-400/[0.04]",
        text: "text-amber-300",
        icon: "border-amber-400/20 bg-amber-400/[0.07]",
        check: "border-amber-400/20 bg-amber-400/[0.06] text-amber-300",
    },
    rose: {
        border: "border-rose-400/20",
        background: "bg-rose-400/[0.04]",
        text: "text-rose-300",
        icon: "border-rose-400/20 bg-rose-400/[0.07]",
        check: "border-rose-400/20 bg-rose-400/[0.06] text-rose-300",
    },
};

function TechnicalExpertise() {
    return (
        <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#07111f]/75 px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div className="absolute left-[5%] top-24 h-72 w-72 rounded-full bg-cyan-400/[0.04] blur-[140px]" />

                <div className="absolute bottom-16 right-[8%] h-80 w-80 rounded-full bg-purple-500/[0.04] blur-[150px]" />
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
                        Engineering Experience
                    </p>

                    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                        Technologies backed by
                        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">
                            projects, deployment, and evidence.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Rather than grading my skills with arbitrary percentages,
                        this section shows where I have applied each technology
                        and the engineering work those tools supported.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-6 lg:grid-cols-2">
                    {expertiseAreas.map((area, index) => {
                        const Icon = area.icon;
                        const tone = toneClasses[area.tone];

                        return (
                            <motion.article
                                key={area.title}
                                initial={{ opacity: 0, y: 28 }}
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

                                <div className="flex items-start gap-4">
                                    <div
                                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border ${tone.icon} ${tone.text}`}
                                    >
                                        <Icon
                                            size={23}
                                            strokeWidth={2}
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <div>
                                        <p
                                            className={`text-xs font-bold uppercase tracking-[0.16em] ${tone.text}`}
                                        >
                                            {area.eyebrow}
                                        </p>

                                        <h3 className="mt-2 text-2xl font-black text-white">
                                            {area.title}
                                        </h3>
                                    </div>
                                </div>

                                <p className="mt-5 leading-8 text-slate-400">
                                    {area.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {area.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs font-bold text-slate-300 transition duration-300 hover:border-cyan-300/20 hover:bg-white/[0.05] hover:text-white"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-7 border-t border-white/[0.08] pt-6">
                                    <p
                                        className={`text-xs font-bold uppercase tracking-[0.16em] ${tone.text}`}
                                    >
                                        Applied Experience
                                    </p>

                                    <div className="mt-4 space-y-3">
                                        {area.evidence.map(
                                            (evidenceItem, evidenceIndex) => (
                                                <motion.div
                                                    key={evidenceItem}
                                                    initial={{
                                                        opacity: 0,
                                                        x: -12,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 0.4,
                                                        delay:
                                                            0.12 +
                                                            evidenceIndex *
                                                                0.045,
                                                    }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <span
                                                        className={`mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg border text-xs font-black ${tone.check}`}
                                                    >
                                                        ✓
                                                    </span>

                                                    <p className="text-sm leading-6 text-slate-300">
                                                        {evidenceItem}
                                                    </p>
                                                </motion.div>
                                            ),
                                        )}
                                    </div>
                                </div>
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
                    className="mt-8 rounded-[2rem] border border-cyan-400/15 bg-gradient-to-r from-cyan-400/[0.045] via-[#050b18]/90 to-purple-400/[0.035] p-8 text-center backdrop-blur-xl sm:p-10"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                        How I Build Depth
                    </p>

                    <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-slate-300">
                        I strengthen these capabilities by building complete
                        systems, reading documentation, debugging integration
                        problems, testing critical workflows, and revisiting
                        architectural decisions as each project grows.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default TechnicalExpertise;