import { Link } from "react-router-dom";
import { motion } from "motion/react";

import cogniHavenScreenshot from "../assets/projects/cognihaven-dashboard.png";
import connectMScreenshot from "../assets/projects/ConnectM.png";
import stockHousingVisual from "../assets/projects/stockhousing.png";
import weatherSubPlatformVisual from "../assets/projects/WeatherSubPlatform.png";

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
 * - Preserve an image-first desktop hover experience
 * - Provide accessible project information on touch/mobile devices
 * - Route visitors into detailed engineering case studies
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
        wide: false,
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
        wide: false,
    },
{
    id: "weather-subscription",
    title: "Weather Subscription Platform",
    eyebrow: "Systems Programming",
    category: "Distributed Client-Server Architecture",
    description:
        "A multithreaded C++ client-server platform that uses a custom TCP protocol to provide authenticated user sessions, persistent account management, concurrent client handling, and location-based weather subscriptions.",
    technologies: [
        "C++17",
        "TCP/IP",
        "POSIX Sockets",
        "Multithreading",
        "Client-Server",
        "Make",
    ],
    image: weatherSubPlatformVisual,
    route: "/projects/weather-subscription-platform",
    featured: false,
    wide: false,
},
    {
        id: "stock-housing",
        title: "Stock & Housing Regression Engine",
        eyebrow: "Data & Algorithms",
        category: "C++ Regression & Data Pipeline",
        description:
            "An end-to-end C++ data pipeline that retrieves real-world housing and stock-market data, preprocesses CSV datasets, and applies manually implemented ordinary least-squares linear regression.",
        technologies: [
            "C++17",
            "Linear Regression",
            "libcurl",
            "CSV Processing",
            "Alpha Vantage",
        ],
        image: stockHousingVisual,
        route: "/projects/stock-housing-regression",
        featured: false,
        wide: false,
    },
    {
        id: "connectm",
        title: "ConnectM",
        eyebrow: "Algorithms & AI",
        category: "Adversarial Search Strategy Game",
        description:
            "A configurable C++ strategy game with an AI opponent powered by depth-limited Minimax search and Alpha-Beta pruning, using recursive game-state simulation, backtracking, and generalized win detection.",
        technologies: [
            "C++17",
            "Minimax",
            "Alpha-Beta",
            "Recursion",
            "Backtracking",
        ],
        image: connectMScreenshot,
        route: "/projects/connectm",
        featured: false,
        wide: false,
    },
];

function Projects() {
    return (
        <main className="relative px-6 pb-28 pt-32 sm:px-8 lg:px-12">
            <div className="mx-auto w-full max-w-7xl">
                {/* ============================================================
                    Page Introduction
                ============================================================= */}
                <motion.header
    className="mx-auto max-w-6xl"
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
    {/* Eyebrow */}
    <div className="flex items-center justify-center gap-4">
        <span
            aria-hidden="true"
            className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/70 sm:w-20"
        />

        <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-400 sm:text-sm">
            Engineering Portfolio
        </p>

        <span
            aria-hidden="true"
            className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/70 sm:w-20"
        />
    </div>

    {/* Main headline */}
    <h1 className="mx-auto mt-7 max-w-5xl text-center text-5xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
        Built to solve.
        <span className="ml-3 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-600 bg-clip-text text-transparent sm:ml-4">
            Built to ship.
        </span>
    </h1>

    {/* Supporting copy */}
    <p className="mx-auto mt-7 max-w-3xl text-center text-base leading-8 text-slate-400 sm:text-lg">
        Full-stack products, backend systems, networking applications,
        algorithms, and data-focused software.
        <span className="text-slate-300">
            {" "}
            Explore the engineering decisions behind each implementation.
        </span>
    </p>

    {/* Bottom accent */}
    <div className="mx-auto mt-10 flex max-w-5xl items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/10" />

        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/10" />
    </div>
</motion.header>

                {/* ============================================================
                    Project Gallery
                ============================================================= */}
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
                                    : `group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050b18]/85 shadow-[0_1.5rem_4rem_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)] ${project.wide
                                        ? "lg:col-span-2"
                                        : ""
                                    }`
                            }
                        >
                            <Link
                                to={project.route}
                                className={
                                    project.featured
                                        ? "grid min-h-[34rem] lg:grid-cols-[1.15fr_0.85fr]"
                                        : project.wide
                                            ? "flex min-h-[30rem] flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr]"
                                            : "flex min-h-[30rem] flex-col"
                                }
                                aria-label={`View ${project.title} case study`}
                            >
                                {/* ====================================================
                                    Project Visual
                                ===================================================== */}
                                <div
                                    className={
                                        project.featured
                                            ? "relative min-h-[22rem] overflow-hidden border-b border-white/10 lg:min-h-full lg:border-b-0 lg:border-r"
                                            : project.wide
                                                ? "relative min-h-[18rem] overflow-hidden border-b border-white/10 lg:min-h-full lg:border-b-0 lg:border-r"
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

                                    {/*
                                     * Desktop hover overlay.
                                     *
                                     * This preserves the image-first interaction:
                                     * image -> hover -> description -> case study.
                                     *
                                     * Hidden below the md breakpoint because touch
                                     * devices receive dedicated project information.
                                     */}
                                    <div className="absolute inset-0 hidden items-end bg-gradient-to-t from-[#020711]/95 via-[#020711]/75 to-transparent p-6 opacity-0 transition duration-300 group-hover:opacity-100 md:flex sm:p-8">
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

                                {/* ====================================================
                                    Project Information
                                ===================================================== */}
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

                                        {/*
                                         * Mobile / touch-friendly description.
                                         *
                                         * Visitors should never need hover in order
                                         * to understand or open a project.
                                         */}
                                        {!project.featured && (
                                            <div className="md:hidden">
                                                <p className="mt-5 text-sm leading-7 text-slate-400">
                                                    {project.description}
                                                </p>

                                                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                                                    View Case Study
                                                    <span aria-hidden="true">
                                                        →
                                                    </span>
                                                </span>
                                            </div>
                                        )}

                                        {project.featured && (
                                            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 md:hidden">
                                                View Case Study
                                                <span aria-hidden="true">
                                                    →
                                                </span>
                                            </span>
                                        )}
                                    </div>

                                    {/* ====================================================
                                        Technology Stack
                                    ===================================================== */}
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