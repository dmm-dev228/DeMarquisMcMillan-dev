import { Link } from "react-router-dom";
import { motion } from "motion/react";

import cogniHavenScreenshot from "../assets/projects/cognihaven-dashboard.png";

/*
 * ============================================================================
 * Projects
 * ============================================================================
 *
 * Dedicated engineering project gallery.
 *
 * Responsibilities:
 * - Present DeMarquis McMillan's strongest engineering work
 * - Give recruiters a quick understanding of each project
 * - Provide technology context
 * - Route visitors into detailed project case studies
 * ============================================================================
 */

const projects = [
    {
        id: "cognihaven",
        title: "CogniHaven",
        eyebrow: "Flagship Product",
        category: "Production Full-Stack SaaS",
        description:
            "A deployed AI-powered cognitive wellness platform with secure authentication, conversational AI, reminders, analytics, cognitive games, community moderation, automated testing, and CI/CD.",
        technologies: [
            "Java",
            "Spring Boot",
            "React",
            "MySQL",
            "Docker",
            "OpenAI",
        ],
        image: cogniHavenScreenshot,
        route: "/projects/cognihaven",
        featured: true,
    },
    {
        id: "munchify",
        title: "Munchify",
        eyebrow: "Full-Stack Application",
        category: "Recipe Sharing Platform",
        description:
            "A full-stack recipe-sharing application featuring authentication, persistent user data, recipe management, and client-server communication.",
        technologies: [
            "React",
            "Node.js",
            "Express",
            "MySQL",
            "JWT",
        ],
        route: "/projects/munchify",
        featured: false,
    },
    {
        id: "weather-subscription",
        title: "Weather Subscription",
        eyebrow: "Systems Engineering",
        category: "Multithreaded TCP Application",
        description:
            "A C++ client-server weather subscription system using TCP networking, Linux sockets, concurrent clients, and multithreaded server communication.",
        technologies: [
            "C++",
            "TCP/IP",
            "Linux",
            "Sockets",
            "Multithreading",
        ],
        route: "/projects/weather-subscription",
        featured: false,
    },
    {
        id: "stock-housing",
        title: "Stock & Housing Predictor",
        eyebrow: "Data & Algorithms",
        category: "Regression-Based Prediction System",
        description:
            "A C++ prediction application using linear regression, external market data, API integration, and numerical processing to analyze stock and housing price trends.",
        technologies: [
            "C++",
            "Linear Regression",
            "REST API",
            "cURL",
            "Data Processing",
        ],
        route: "/projects/stock-housing-predictor",
        featured: false,
    },
];

function Projects() {
    return (
        <main className="relative px-6 pb-28 pt-32 sm:px-8 lg:px-12">
            <div className="mx-auto w-full max-w-7xl">
                {/* Page introduction */}
                <motion.header
                    className="max-w-4xl"
                    initial={{
                        opacity: 0,
                        y: 24,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                        Engineering Portfolio
                    </p>

                    <h1 className="mt-4 text-5xl font-black tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                        Built to solve.
                        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                            Built to ship.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                        Full-stack products, backend systems, networking
                        applications, algorithms, and data-focused software.
                        Hover over a project for the story, then open the case
                        study for the engineering behind it.
                    </p>
                </motion.header>

                {/* Project gallery */}
                <div className="mt-16 grid gap-6 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.08 * index,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={
                                project.featured
                                    ? "group relative overflow-hidden rounded-[2rem] border border-cyan-400/45 bg-[#050b18]/90 shadow-[0_0_45px_rgba(34,211,238,0.08)] backdrop-blur-xl lg:col-span-2"
                                    : "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050b18]/85 shadow-[0_1.5rem_4rem_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
                            }
                        >
                            <Link
                                to={project.route}
                                className={
                                    project.featured
                                        ? "grid min-h-[34rem] lg:grid-cols-[1.15fr_0.85fr]"
                                        : "flex min-h-[30rem] flex-col"
                                }
                                aria-label={`View ${project.title} case study`}
                            >
                                {/* Project visual */}
                                <div
                                    className={
                                        project.featured
                                            ? "relative min-h-[22rem] overflow-hidden border-b border-white/10 lg:min-h-full lg:border-b-0 lg:border-r"
                                            : "relative min-h-[18rem] overflow-hidden border-b border-white/10"
                                    }
                                >
                                    {project.image ? (
                                        <>
                                            <img
                                                src={project.image}
                                                alt={`${project.title} interface`}
                                                className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                                            />

                                            <div
                                                aria-hidden="true"
                                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050b18]/70 via-transparent to-transparent"
                                            />
                                        </>
                                    ) : (
                                        <div className="relative flex h-full min-h-[18rem] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950">
                                            <div
                                                aria-hidden="true"
                                                className="absolute inset-0 opacity-40"
                                            >
                                                <div className="absolute left-1/4 top-1/4 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
                                                <div className="absolute bottom-1/4 right-1/4 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />
                                            </div>

                                            <span className="relative text-5xl font-black tracking-[-0.05em] text-cyan-300/70 transition duration-300 group-hover:text-cyan-200">
                                                {project.title
                                                    .split(" ")
                                                    .map((word) => word[0])
                                                    .join("")
                                                    .slice(0, 3)}
                                            </span>
                                        </div>
                                    )}

                                    {/* Hover description overlay */}
                                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#020711]/95 via-[#020711]/75 to-transparent p-6 opacity-0 transition duration-300 group-hover:opacity-100 sm:p-8">
                                        <div className="translate-y-4 transition duration-300 group-hover:translate-y-0">
                                            <p className="max-w-xl text-base leading-7 text-slate-200">
                                                {project.description}
                                            </p>

                                            <span className="mt-5 inline-flex items-center gap-2 font-semibold text-cyan-300">
                                                View Case Study
                                                <span
                                                    aria-hidden="true"
                                                    className="transition-transform duration-200 group-hover:translate-x-1"
                                                >
                                                    →
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Project information */}
                                <div className="relative flex flex-1 flex-col p-6 sm:p-8">
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/[0.06] blur-3xl"
                                    />

                                    <div className="relative z-10">
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                                {project.eyebrow}
                                            </p>

                                            {project.featured && (
                                                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/[0.08] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
                                                    <span
                                                        aria-hidden="true"
                                                        className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,1)]"
                                                    />
                                                    Live
                                                </span>
                                            )}
                                        </div>

                                        <h2
                                            className={
                                                project.featured
                                                    ? "mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl"
                                                    : "mt-5 text-3xl font-black tracking-tight text-white"
                                            }
                                        >
                                            {project.title}
                                        </h2>

                                        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
                                            {project.category}
                                        </p>

                                        {project.featured && (
                                            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
                                                {project.description}
                                            </p>
                                        )}
                                    </div>

                                    {/* Technology stack */}
                                    <ul className="relative z-10 mt-auto flex flex-wrap gap-2 pt-8">
                                        {project.technologies.map(
                                            (technology) => (
                                                <li
                                                    key={technology}
                                                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-slate-300"
                                                >
                                                    {technology}
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Projects;