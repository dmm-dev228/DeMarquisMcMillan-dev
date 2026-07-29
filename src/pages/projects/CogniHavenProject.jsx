import { Link } from "react-router-dom";
import { motion } from "motion/react";

import cogniHavenScreenshot from "../../assets/projects/cognihaven-dashboard.png";

const ease = [0.22, 1, 0.36, 1];

const technologies = [
    "Java",
    "Spring Boot",
    "Spring Security",
    "React",
    "MySQL",
    "Docker",
    "OpenAI API",
    "GitHub Actions",
];

const productModules = [
    ["01", "Authentication", "JWT, BCrypt, verification, reset, protected routes"],
    ["02", "AI Journal", "Multi-turn reflection with structured response analysis"],
    ["03", "Memory Profile", "Persistent context for meaningful personalization"],
    ["04", "Dietary Profile", "User preferences, allergies, and wellness context"],
    ["05", "Medication", "Recurring reminders with multiple daily times"],
    ["06", "Goals", "AI-generated plans, progress, reminders, and achievements"],
    ["07", "Cognitive Games", "Four interactive experiences with stored results"],
    ["08", "Analytics", "History, trends, summaries, and recommendations"],
    ["09", "Community", "Posts, comments, reactions, and safety moderation"],
    ["10", "Discovery", "External wellness content through the Guardian API"],
    ["11", "Voice", "Speech-to-text and text-to-speech accessibility"],
    ["12", "Notifications", "Unified in-app and email delivery workflows"],
    ["13", "Account Settings", "Profile, password, email, and image management"],
    ["14", "Feedback", "Authenticated product feedback through Gmail SMTP"],
    ["15", "Deployment", "Vercel, Render, Railway, Docker, and CI/CD"],
];

const aiStages = [
    ["01", "User Interaction", "The user submits journal text, a goal, game result, or community content."],
    ["02", "Authenticated Request", "React sends a JWT-protected request to the Spring Boot API."],
    ["03", "Context Assembly", "The service combines user input with relevant history, profile data, and product rules."],
    ["04", "Prompt Construction", "Backend-only prompt builders create task-specific instructions and structured output expectations."],
    ["05", "OpenAI Processing", "The selected model produces a response for the requested CogniHaven experience."],
    ["06", "Response Analysis", "The backend evaluates intent, tone, direct questions, continuation, and urgent safety signals."],
    ["07", "Validation & Safety", "Responses pass through application rules before data is persisted or returned."],
    ["08", "Persistence & UI", "Approved results are stored when needed and returned to the frontend as structured DTOs."],
];

const securityControls = [
    ["JWT Authentication", "Stateless access tokens protect authenticated API requests."],
    ["Spring Security", "Centralized authorization rules protect application routes and resources."],
    ["BCrypt", "Passwords are salted and hashed rather than stored in plain text."],
    ["Email Verification", "New accounts confirm ownership before receiving full access."],
    ["Password Recovery", "Time-limited reset workflows support safe account recovery."],
    ["Rate Limiting", "Sensitive endpoints are guarded against repeated automated requests."],
    ["Brute-Force Protection", "Repeated failed authentication attempts trigger defensive handling."],
    ["Idle Session Handling", "Inactive users are logged out to reduce unattended-session risk."],
    ["Backend API Secrets", "OpenAI, SMTP, database, and integration credentials stay outside the browser."],
];

const challenges = [
    {
        number: "01",
        title: "Keeping AI conversations useful",
        challenge: "Early responses could become repetitive, over-explain, miss direct questions, or lose conversational continuity.",
        solution: "I added backend-controlled context assembly, task-specific prompts, structured response analysis, and explicit behavior rules for tone, direct questions, continuation, and safety.",
        result: "The journal evolved from a single AI call into a context-aware conversation system with more predictable behavior.",
    },
    {
        number: "02",
        title: "Coordinating scheduled reminders",
        challenge: "Medication and goal reminders needed persistent schedules, multiple delivery channels, and protection from duplicate notifications.",
        solution: "I centralized scheduling in Spring services, stored reminder configuration in MySQL, checked due work on a recurring schedule, and tracked notification state.",
        result: "Users can configure recurring support while the backend handles delivery independently of the browser session.",
    },
    {
        number: "03",
        title: "Growing without losing structure",
        challenge: "As features expanded, tightly coupled code would have made security, testing, and product changes increasingly risky.",
        solution: "I separated controllers, services, repositories, DTOs, security concerns, and external integrations into clear layers and feature-focused packages.",
        result: "New modules could reuse shared infrastructure without placing all behavior inside components or controllers.",
    },
    {
        number: "04",
        title: "Managing distributed production systems",
        challenge: "The frontend, backend, database, email, image storage, AI, and content APIs run across different providers and failure boundaries.",
        solution: "I used environment-based configuration, Dockerized the backend, added a health endpoint, validated builds in CI, and designed API failures to degrade more safely.",
        result: "CogniHaven operates as a real cloud application rather than a local-only demonstration.",
    },
];

const decisions = [
    ["React + Vite", "Fast iteration, component-driven UI, client-side routing, and an efficient production build."],
    ["Spring Boot", "A structured backend ecosystem for REST APIs, validation, security, scheduling, email, and persistence."],
    ["Layered Architecture", "Controllers handle HTTP, services own business behavior, and repositories own data access."],
    ["REST + DTOs", "Clear frontend/backend boundaries without exposing persistence entities directly."],
    ["MySQL", "Relational consistency for interconnected users, goals, reminders, journals, games, and community data."],
    ["JWT", "Stateless API authentication that works cleanly across independently deployed frontend and backend services."],
    ["Backend-Controlled AI", "Protects API keys and centralizes prompts, context, validation, safety, and persistence."],
    ["Docker", "Creates a reproducible backend runtime from development through cloud deployment."],
    ["Distributed Hosting", "Vercel, Render, and Railway let each part of the stack use infrastructure suited to its role."],
];

const lessons = [
    ["Architecture becomes a product feature", "Clear boundaries made it possible to add new modules without repeatedly rebuilding the foundation."],
    ["AI quality is an engineering problem", "Useful AI behavior depends on context, prompts, structured outputs, safety rules, persistence, and iteration."],
    ["Security spans the full lifecycle", "Authentication is only one part of verification, recovery, authorization, session behavior, and secret management."],
    ["Background systems need idempotency", "Schedulers must know what is due, what has already been sent, and how to recover safely."],
    ["Production exposes different problems", "CORS, environment variables, route rewrites, cold starts, health checks, and provider failures matter after deployment."],
    ["Testing protects momentum", "Automated validation lets a growing project change faster with less fear of silently breaking core workflows."],
];

const interviewQuestions = [
    "Walk me through CogniHaven from the browser to the database.",
    "How does JWT authentication work in your application?",
    "Why did you keep OpenAI requests on the backend?",
    "How do you preserve context in the conversational journal?",
    "How are medication reminders scheduled and delivered?",
    "How do controllers, services, repositories, and DTOs divide responsibility?",
    "What data is relational, and why did you choose MySQL?",
    "How does the community moderation workflow protect users?",
    "How do cognitive game results become analytics and AI recommendations?",
    "What does your GitHub Actions pipeline validate?",
    "How is the application deployed across Vercel, Render, and Railway?",
    "What was the hardest production issue you debugged?",
    "What tradeoffs did you make to finish and deploy the product?",
    "What would you redesign before supporting significantly more users?",
];

const timeline = [
    ["V1", "Foundation", "Application shell, database model, and core project structure"],
    ["V2", "Identity", "Signup, login, JWT security, verification, and password recovery"],
    ["V3", "Reflection", "Journal entries and the first AI-assisted experience"],
    ["V4", "Context", "Multi-turn conversations, response analysis, memory, and voice"],
    ["V5", "Daily Support", "Medication reminders, notifications, goals, and achievements"],
    ["V6", "Engagement", "Cognitive games, history, scoring, difficulty, and reflection"],
    ["V7", "Community", "Posts, comments, reactions, discovery, and moderation"],
    ["V8", "Intelligence", "Analytics, AI summaries, recommendations, and personalization"],
    ["V9", "Production", "Testing, Docker, CI/CD, cloud hosting, and custom domain"],
];

function SectionHeader({ eyebrow, title, accent, description }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease }}
            className="mx-auto max-w-4xl text-center"
        >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                {eyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                {title}
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                    {accent}
                </span>
            </h2>

            {description && (
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                    {description}
                </p>
            )}
        </motion.div>
    );
}

function CogniHavenProject() {
    return (
        <main className="relative overflow-hidden pb-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-32 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-3xl"
            />

            {/* Hero */}
            <section className="relative px-6 pb-24 pt-32 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease }}
                    >
                        <Link
                            to="/projects"
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition duration-200 hover:text-cyan-300"
                        >
                            <span
                                aria-hidden="true"
                                className="transition-transform duration-200 group-hover:-translate-x-1"
                            >
                                ←
                            </span>
                            Back to Projects
                        </Link>
                    </motion.div>

                    <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -32 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75, ease }}
                        >
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="inline-flex min-h-10 items-center rounded-full border border-cyan-400/30 bg-cyan-400/[0.06] px-4 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                                    Flagship Project
                                </span>
                                <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/[0.08] px-4 text-xs font-bold uppercase tracking-[0.15em] text-emerald-300">
                                    <motion.span
                                        aria-hidden="true"
                                        className="h-2.5 w-2.5 rounded-full bg-emerald-400"
                                        animate={{
                                            opacity: [0.55, 1, 0.55],
                                            boxShadow: [
                                                "0 0 8px rgba(52,211,153,.45)",
                                                "0 0 18px rgba(52,211,153,1)",
                                                "0 0 8px rgba(52,211,153,.45)",
                                            ],
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    Live Production System
                                </span>
                            </div>

                            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                                Full-Stack SaaS · AI · Cloud · Security
                            </p>

                            <h1 className="mt-3 text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                                CogniHaven
                            </h1>

                            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-300">
                                A calm, AI-powered cognitive wellness and daily support platform engineered as a complete production product.
                            </p>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                                I designed and built the frontend, backend, database, security, AI workflows, background scheduling, automated testing, CI/CD, and cloud deployment behind one connected user experience.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <a
                                    href="https://www.cognihaven.net"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.16)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_38px_rgba(56,189,248,0.3)]"
                                >
                                    Explore Live Application
                                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                                </a>

                                <a
                                    href="https://github.com/dmm-dev228/ai-cognitive-health-app"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-slate-200 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:text-white"
                                >
                                    View Source Code
                                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                                </a>
                            </div>

                            <div className="mt-10">
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                                    Core Technology
                                </p>
                                <ul className="flex flex-wrap gap-2">
                                    {technologies.map((technology) => (
                                        <li
                                            key={technology}
                                            className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-slate-300 backdrop-blur-sm transition duration-200 hover:border-cyan-400/30 hover:text-cyan-200"
                                        >
                                            {technology}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 36, scale: 0.965 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.9, delay: 0.12, ease }}
                            className="relative"
                        >
                            <motion.div
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-10 rounded-full bg-cyan-500/[0.08] blur-3xl"
                                animate={{ scale: [0.94, 1.05, 0.94], opacity: [0.45, 0.8, 0.45] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            />

                            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/45 bg-[#050b18]/90 p-3 shadow-[0_0_60px_rgba(34,211,238,0.11)] backdrop-blur-xl sm:p-4">
                                <div className="flex items-center gap-2 px-2 pb-3 pt-1">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                                    <div className="ml-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.65rem] text-slate-500">
                                        www.cognihaven.net
                                    </div>
                                </div>

                                <div className="overflow-hidden rounded-2xl border border-white/10">
                                    <motion.img
                                        src={cogniHavenScreenshot}
                                        alt="CogniHaven production application dashboard"
                                        className="block h-auto w-full"
                                        whileHover={{ scale: 1.015 }}
                                        transition={{ duration: 0.45, ease }}
                                    />
                                </div>
                            </div>

                            <div className="relative mt-5 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-[#050b18]/80 backdrop-blur-xl">
                                {[
                                    ["15+", "Integrated Systems"],
                                    ["30", "Automated Tests"],
                                    ["LIVE", "Cloud Deployed"],
                                ].map(([value, label], index) => (
                                    <div
                                        key={label}
                                        className={`px-3 py-5 text-center ${index === 1 ? "border-x border-white/10" : ""}`}
                                    >
                                        <p className="text-2xl font-black text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.22)] sm:text-3xl">
                                            {value}
                                        </p>
                                        <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-slate-500 sm:text-[0.65rem]">
                                            {label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Project Overview"
                        title="Built as a complete product."
                        accent="Not an isolated feature demo."
                        description="CogniHaven combines product thinking and production engineering across security, AI, personalization, background processing, analytics, testing, and deployment."
                    />

                    <div className="mt-14 grid gap-6 lg:grid-cols-3">
                        {[
                            ["01 / Product", "What it is", "A non-medical cognitive wellness platform centered on reflection, healthy routines, cognitive engagement, memory reinforcement, and supportive daily experiences."],
                            ["02 / Ownership", "What I built", "I engineered the React frontend, Spring Boot backend, MySQL data model, security, integrations, automated tests, deployment workflow, and production infrastructure."],
                            ["03 / Significance", "Why it matters", "The project required solving real software problems: persistent state, background scheduling, secure identity, AI consistency, cloud reliability, and cross-feature architecture."],
                        ].map(([label, title, body], index) => (
                            <motion.article
                                key={title}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.6, delay: index * 0.07, ease }}
                                whileHover={{ y: -6 }}
                                className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                            >
                                <div aria-hidden="true" className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-cyan-400/[0.06] blur-3xl" />
                                <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">{label}</p>
                                <h3 className="relative mt-5 text-2xl font-black text-white">{title}</h3>
                                <p className="relative mt-4 leading-7 text-slate-400">{body}</p>
                            </motion.article>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.65, ease }}
                        className="mt-8 rounded-[1.75rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/[0.06] via-blue-500/[0.03] to-transparent p-7 text-center sm:p-8"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Product Positioning</p>
                        <p className="mx-auto mt-4 max-w-5xl text-xl font-semibold leading-9 text-slate-200 sm:text-2xl">
                            “A calm, AI-powered cognitive wellness and daily support platform.”
                        </p>
                        <p className="mx-auto mt-4 max-w-4xl leading-7 text-slate-400">
                            CogniHaven supports wellness and daily routines. It is intentionally not positioned as a medical diagnosis or medical advice product.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Product Scale */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Product Scale"
                        title="Many systems."
                        accent="One connected experience."
                        description="Each module has its own UI, API behavior, persistence needs, and edge cases, but they share the same identity, security, notification, and data foundations."
                    />

                    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {productModules.map(([number, title, body], index) => (
                            <motion.article
                                key={title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.52, delay: (index % 3) * 0.05, ease }}
                                whileHover={{ y: -5, scale: 1.01 }}
                                className="group rounded-2xl border border-white/10 bg-[#050b18]/78 p-5 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/30"
                            >
                                <div className="flex items-start gap-4">
                                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] text-xs font-black text-cyan-300">
                                        {number}
                                    </span>
                                    <div>
                                        <h3 className="font-black text-white">{title}</h3>
                                        <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* System Architecture */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="System Architecture"
                        title="Separated by responsibility."
                        accent="Connected through clear boundaries."
                        description="The application divides presentation, request handling, business logic, persistence, and integrations so each layer can evolve without owning every concern."
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.12 }}
                        transition={{ duration: 0.75, ease }}
                        className="relative mt-14 overflow-hidden rounded-[2rem] border border-cyan-400/25 bg-[#050b18]/85 p-6 shadow-[0_0_55px_rgba(34,211,238,0.06)] backdrop-blur-xl sm:p-8 lg:p-10"
                    >
                        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.07] blur-3xl" />

                        <div className="relative z-10">
                            <div className="mx-auto max-w-md rounded-2xl border border-cyan-400/35 bg-cyan-400/[0.05] p-5 text-center">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">Presentation Layer</p>
                                <h3 className="mt-3 text-xl font-black text-white">React Frontend</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-400">Vite · React Router · Tailwind CSS · Browser Voice APIs</p>
                            </div>

                            <div className="mx-auto flex h-16 w-px items-center justify-center bg-gradient-to-b from-cyan-400/70 to-blue-500/30">
                                <span className="rounded-full bg-[#050b18] px-2 text-cyan-300">↓</span>
                            </div>

                            <div className="mx-auto max-w-md rounded-2xl border border-blue-400/30 bg-blue-400/[0.05] p-5 text-center">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">API Boundary</p>
                                <h3 className="mt-3 text-xl font-black text-white">Authenticated REST API</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-400">JWT · Validation · Request/response DTOs · Exception handling</p>
                            </div>

                            <div className="mx-auto flex h-16 w-px items-center justify-center bg-gradient-to-b from-blue-400/60 to-cyan-400/30">
                                <span className="rounded-full bg-[#050b18] px-2 text-cyan-300">↓</span>
                            </div>

                            <div className="grid gap-4 lg:grid-cols-3">
                                {[
                                    ["Layer 01", "Controllers", "Receive requests, validate boundaries, identify the user, and return HTTP responses."],
                                    ["Layer 02", "Services", "Own business rules, transactions, scheduling, AI orchestration, and integrations."],
                                    ["Layer 03", "Repositories", "Query and persist relational application data through Spring Data JPA."],
                                ].map(([label, title, body], index) => (
                                    <div key={title} className={`rounded-2xl border p-5 text-center ${index === 1 ? "border-cyan-400/20 bg-cyan-400/[0.04]" : "border-white/10 bg-white/[0.025]"}`}>
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</p>
                                        <h3 className="mt-3 text-lg font-black text-white">{title}</h3>
                                        <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mx-auto flex h-16 w-px items-center justify-center bg-gradient-to-b from-cyan-400/40 to-emerald-400/30">
                                <span className="rounded-full bg-[#050b18] px-2 text-emerald-300">↓</span>
                            </div>

                            <div className="mx-auto max-w-md rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.05] p-5 text-center">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">Persistence</p>
                                <h3 className="mt-3 text-xl font-black text-white">Railway MySQL</h3>
                                <p className="mt-2 text-sm leading-6 text-slate-400">Users, journal, goals, reminders, profiles, games, analytics, achievements, and community data</p>
                            </div>

                            <div className="mt-14 border-t border-white/10 pt-10">
                                <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">External Integrations</p>
                                <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    {[
                                        ["OpenAI API", "AI conversations, reflections, plans, moderation, and insights"],
                                        ["Gmail SMTP", "Verification, recovery, reminders, and feedback delivery"],
                                        ["Guardian API", "Curated discovery content for the community experience"],
                                        ["Cloudinary", "Cloud-hosted profile image upload and delivery"],
                                    ].map(([title, body]) => (
                                        <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center">
                                            <p className="text-lg font-black text-white">{title}</p>
                                            <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Request Lifecycle */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Request Lifecycle"
                        title="A click becomes"
                        accent="a controlled system operation."
                        description="A protected feature request moves through authentication, validation, business rules, persistence, and a structured response before the interface updates."
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.7, ease }}
                        className="mt-14 rounded-[2rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl sm:p-8"
                    >
                        <div className="grid gap-4 lg:grid-cols-4">
                            {[
                                ["01", "React UI", "Collects input and sends the request."],
                                ["02", "JWT Filter", "Authenticates the token and resolves identity."],
                                ["03", "Controller", "Validates the API boundary and delegates work."],
                                ["04", "Service", "Applies business rules and orchestration."],
                                ["05", "Repository", "Reads or writes relational data."],
                                ["06", "Integration", "Calls AI, email, content, or image services when required."],
                                ["07", "DTO Response", "Returns only the fields needed by the client."],
                                ["08", "UI State", "Updates the experience and communicates success or failure."],
                            ].map(([number, title, body], index) => (
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.48, delay: (index % 4) * 0.05, ease }}
                                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                                >
                                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-400">{number}</p>
                                    <h3 className="mt-3 text-lg font-black text-white">{title}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* AI Architecture */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="AI System Architecture"
                        title="AI is not a button."
                        accent="It is a governed backend workflow."
                        description="CogniHaven treats AI as an application subsystem with context assembly, task-specific prompts, structured analysis, safety handling, persistence, and predictable frontend contracts."
                    />

                    <div className="mt-14 grid gap-5 lg:grid-cols-2">
                        {aiStages.map(([number, title, body], index) => (
                            <motion.article
                                key={title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -22 : 22 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.55, delay: (index % 2) * 0.05, ease }}
                                className="group relative overflow-hidden rounded-[1.5rem] border border-purple-400/15 bg-[#050b18]/80 p-6 backdrop-blur-xl transition duration-300 hover:border-purple-400/35"
                            >
                                <div aria-hidden="true" className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-purple-400/[0.06] blur-3xl" />
                                <div className="relative flex gap-4">
                                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-purple-400/25 bg-purple-400/[0.06] text-xs font-black text-purple-300">{number}</span>
                                    <div>
                                        <h3 className="text-xl font-black text-white">{title}</h3>
                                        <p className="mt-3 leading-7 text-slate-400">{body}</p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.65, ease }}
                        className="mt-8 grid gap-5 md:grid-cols-3"
                    >
                        {[
                            ["Protected Credentials", "OpenAI credentials remain server-side and never ship in the frontend bundle."],
                            ["Structured Analysis", "Intent, tone, direct-question, continuation, and urgent-safety fields support predictable decisions."],
                            ["Feature-Specific Behavior", "Journal, goals, games, moderation, and analytics use different prompts and response contracts."],
                        ].map(([title, body]) => (
                            <div key={title} className="rounded-[1.5rem] border border-cyan-400/15 bg-cyan-400/[0.035] p-6">
                                <h3 className="text-lg font-black text-white">{title}</h3>
                                <p className="mt-3 leading-7 text-slate-400">{body}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Security */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Authentication & Security"
                        title="Security is layered"
                        accent="across the account lifecycle."
                        description="CogniHaven protects more than the login form. Identity, authorization, recovery, session behavior, abuse prevention, and secret management work together."
                    />

                    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {securityControls.map(([title, body], index) => (
                            <motion.article
                                key={title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.52, delay: (index % 3) * 0.05, ease }}
                                whileHover={{ y: -5 }}
                                className="rounded-[1.5rem] border border-emerald-400/15 bg-[#050b18]/80 p-6 backdrop-blur-xl"
                            >
                                <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-400" />
                                <h3 className="text-xl font-black text-white">{title}</h3>
                                <p className="mt-3 leading-7 text-slate-400">{body}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Data + Background Systems */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Data & Background Systems"
                        title="Persistent data meets"
                        accent="time-driven application behavior."
                        description="Relational models preserve user state while scheduled services perform work even when the user is not actively using the browser."
                    />

                    <div className="mt-14 grid gap-6 lg:grid-cols-2">
                        <motion.article
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.62, ease }}
                            className="rounded-[2rem] border border-emerald-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl sm:p-8"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">Relational Data Model</p>
                            <h3 className="mt-4 text-3xl font-black text-white">MySQL as the product memory</h3>
                            <p className="mt-4 leading-7 text-slate-400">
                                Users connect to journals, goals, reminders, profiles, game history, achievements, community content, and notification state. Relational storage supports ownership, consistency, querying, and lifecycle operations across those relationships.
                            </p>
                            <div className="mt-7 flex flex-wrap gap-2">
                                {["Users", "Journal", "Goals", "Reminders", "Memory", "Dietary", "Games", "Analytics", "Community", "Achievements"].map((item) => (
                                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-slate-300">{item}</span>
                                ))}
                            </div>
                        </motion.article>

                        <motion.article
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.62, delay: 0.06, ease }}
                            className="rounded-[2rem] border border-cyan-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl sm:p-8"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">Background Scheduling</p>
                            <h3 className="mt-4 text-3xl font-black text-white">Support that does not depend on an open tab</h3>
                            <p className="mt-4 leading-7 text-slate-400">
                                Spring scheduling checks persisted reminder and goal data, determines what is due, sends configured in-app or email notifications, and records state so recurring work remains controlled.
                            </p>
                            <ul className="mt-7 space-y-3 text-sm text-slate-300">
                                <li>→ Multiple medication times per day</li>
                                <li>→ Active/inactive reminder control</li>
                                <li>→ In-app and email channel preferences</li>
                                <li>→ Last-reminded tracking for goal notifications</li>
                                <li>→ Persisted schedules that survive browser sessions</li>
                            </ul>
                        </motion.article>
                    </div>
                </div>
            </section>

            {/* Engineering Highlights */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Engineering Highlights"
                        title="Independent subsystems."
                        accent="Shared production foundations."
                        description="The strongest part of CogniHaven is not one feature. It is the integration of identity, AI, persistence, background work, analytics, and cloud services into a coherent platform."
                    />

                    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            ["SYS / 01", "Authentication & Security", ["JWT authentication", "BCrypt hashing", "Verification and recovery", "Rate limiting", "Protected routes"]],
                            ["SYS / 02", "Contextual AI", ["Multi-turn journal", "Goal plans", "Game reflection", "Analytics insights", "Moderation assistance"]],
                            ["SYS / 03", "Personalization", ["Memory profile", "Dietary profile", "Settings", "Cloudinary images", "Persistent preferences"]],
                            ["SYS / 04", "Daily Support", ["Medication schedules", "Multiple reminder times", "Goal reminders", "Achievements", "Email and in-app delivery"]],
                            ["SYS / 05", "Games & Analytics", ["Pattern Recall", "Story Recall", "Memory Match", "Word Bloom", "Stored performance history"]],
                            ["SYS / 06", "Community & Discovery", ["Posts and comments", "Reactions", "Guidelines", "Moderation states", "Guardian API content"]],
                        ].map(([label, title, items], index) => (
                            <motion.article
                                key={title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.55, delay: (index % 3) * 0.05, ease }}
                                whileHover={{ y: -6 }}
                                className="group rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/30"
                            >
                                <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan-400">{label}</span>
                                <h3 className="mt-5 text-2xl font-black text-white">{title}</h3>
                                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                                    {items.map((item) => <li key={item}>→ {item}</li>)}
                                </ul>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Evolution */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Product Evolution"
                        title="Built iteratively."
                        accent="Strengthened through each release."
                        description="CogniHaven grew from a focused application foundation into a production platform through repeated cycles of implementation, testing, debugging, integration, and refinement."
                    />

                    <div className="relative mt-14">
                        <div aria-hidden="true" className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-400/70 via-blue-500/40 to-transparent sm:block" />
                        <div className="space-y-4">
                            {timeline.map(([version, title, body], index) => (
                                <motion.article
                                    key={version}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.5, delay: Math.min(index * 0.035, 0.2), ease }}
                                    className="relative grid gap-4 rounded-2xl border border-white/10 bg-[#050b18]/78 p-5 backdrop-blur-xl sm:ml-12 sm:grid-cols-[5rem_10rem_1fr] sm:items-center"
                                >
                                    <span className="font-black text-cyan-300">{version}</span>
                                    <h3 className="font-black text-white">{title}</h3>
                                    <p className="text-sm leading-6 text-slate-400">{body}</p>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Demos */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Product Demos"
                        title="See the platform"
                        accent="working as a real product."
                        description="These walkthroughs demonstrate secure identity, AI-assisted reflection, cognitive experiences, and scheduled support inside the deployed application."
                    />

                    <div className="mt-14 grid gap-6 lg:grid-cols-2">
                        {[
                            ["Conversational AI Journal", "https://www.youtube.com/embed/wLBaWi6hfa8", "The original journal implementation that established AI-assisted reflection and became the foundation for the current multi-turn, context-aware experience."],
                            ["Authentication & Verification", "https://www.youtube.com/embed/Ng3uUpbvEks", "Signup, JWT authentication, email verification, protected access, and automatic login after successful account verification."],
                            ["Medication & Notifications", "https://www.youtube.com/embed/fY1184p3D3Y", "Persistent medication scheduling with multiple reminder times, in-app delivery, email delivery, and reminder management."],
                            ["Cognitive Games", "https://www.youtube.com/embed/ChKPjOAyg5I", "Memory, pattern, story, and word experiences with difficulty, scoring, history, voice, and AI-assisted reflection."],
                        ].map(([title, src, body], index) => (
                            <motion.article
                                key={title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.58, delay: (index % 2) * 0.06, ease }}
                                whileHover={{ y: -5 }}
                                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/30"
                            >
                                <div className="aspect-video overflow-hidden border-b border-white/10 bg-black">
                                    <iframe
                                        className="h-full w-full"
                                        src={src}
                                        title={`CogniHaven ${title} demo`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                </div>
                                <div className="p-7">
                                    <div className="flex items-center justify-between gap-3">
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Demo {String(index + 1).padStart(2, "0")}</p>
                                        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/[0.07] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-emerald-300">Available</span>
                                    </div>
                                    <h3 className="mt-4 text-2xl font-black text-white">{title}</h3>
                                    <p className="mt-4 leading-7 text-slate-400">{body}</p>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality & Delivery */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Quality & Delivery"
                        title="Built to be tested."
                        accent="Built to reach production."
                        description="Automated tests, build validation, containerization, environment configuration, and cloud infrastructure reduce regressions and make the system repeatable."
                    />

                    <div className="mt-14 grid gap-5 md:grid-cols-3">
                        {[
                            ["24", "Backend Tests", "JUnit and Spring tests cover authentication, users, goals, notifications, repositories, and business behavior."],
                            ["6", "Frontend Tests", "Vitest and React Testing Library validate authentication flows, form behavior, rendering, and interactions."],
                            ["CI", "Automated Validation", "GitHub Actions runs backend tests, frontend tests, and production build checks before release."],
                        ].map(([value, label, body], index) => (
                            <motion.article
                                key={label}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.55, delay: index * 0.06, ease }}
                                className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 text-center backdrop-blur-xl"
                            >
                                <p className="text-4xl font-black text-emerald-400">{value}</p>
                                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p>
                                <p className="mt-5 leading-7 text-slate-400">{body}</p>
                            </motion.article>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.68, ease }}
                        className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#050b18]/85 p-7 backdrop-blur-xl sm:p-8"
                    >
                        <div className="text-center">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">Continuous Integration</p>
                            <h3 className="mt-3 text-3xl font-black text-white">Validation before release</h3>
                        </div>

                        <div className="mt-10 grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
                            {[
                                ["01", "Push / Pull Request"],
                                ["02", "Backend Tests"],
                                ["03", "Frontend Tests"],
                                ["04", "Build Validation"],
                            ].map(([number, label], index) => (
                                <div key={label} className="contents">
                                    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center">
                                        <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{number}</p>
                                        <p className="mt-3 font-bold text-white">{label}</p>
                                    </div>
                                    {index < 3 && <span aria-hidden="true" className="hidden text-xl text-cyan-400 lg:block">→</span>}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Deployment */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Production Deployment"
                        title="One product."
                        accent="A distributed cloud runtime."
                        description="The browser, API, relational database, email delivery, media storage, AI processing, and content services operate across separate infrastructure boundaries."
                    />

                    <div className="mt-14 grid gap-5 md:grid-cols-3">
                        {[
                            ["Frontend", "Vercel", "Hosts the React/Vite client, custom domain, production assets, and SPA routing behavior."],
                            ["Backend", "Render + Docker", "Runs the containerized Spring Boot API, security filters, schedulers, email, AI workflows, and integrations."],
                            ["Database", "Railway MySQL", "Provides persistent relational storage independently from backend container lifecycle."],
                        ].map(([label, title, body], index) => (
                            <motion.article
                                key={title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.55, delay: index * 0.06, ease }}
                                whileHover={{ y: -5 }}
                                className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">{label}</p>
                                <h3 className="mt-3 text-2xl font-black text-white">{title}</h3>
                                <p className="mt-4 leading-7 text-slate-400">{body}</p>
                            </motion.article>
                        ))}
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        {[
                            ["Custom Domain", "www.cognihaven.net"],
                            ["Environment Configuration", "Production secrets and provider configuration remain outside source control."],
                            ["Health Monitoring", "A backend health endpoint provides a lightweight availability check."],
                        ].map(([title, body]) => (
                            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
                                <p className="font-bold text-white">{title}</p>
                                <p className="mt-2 text-sm leading-6 text-slate-500">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering Challenges */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Engineering Challenges"
                        title="The hardest work happened"
                        accent="behind the visible interface."
                        description="The most valuable problems involved AI behavior, scheduling, architecture growth, and production reliability rather than simply rendering new screens."
                    />

                    <div className="mt-14 space-y-6">
                        {challenges.map((challenge, index) => (
                            <motion.article
                                key={challenge.title}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.18 }}
                                transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.15), ease }}
                                className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#050b18]/80 backdrop-blur-xl"
                            >
                                <div className="grid lg:grid-cols-[0.18fr_0.82fr]">
                                    <div className="border-b border-white/10 bg-cyan-400/[0.04] p-7 lg:border-b-0 lg:border-r">
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">Challenge</p>
                                        <p className="mt-3 text-5xl font-black text-white/15">{challenge.number}</p>
                                    </div>
                                    <div className="p-7 sm:p-8">
                                        <h3 className="text-3xl font-black text-white">{challenge.title}</h3>
                                        <div className="mt-7 grid gap-5 md:grid-cols-3">
                                            {[
                                                ["Problem", challenge.challenge],
                                                ["Engineering Response", challenge.solution],
                                                ["Outcome", challenge.result],
                                            ].map(([label, body]) => (
                                                <div key={label}>
                                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</p>
                                                    <p className="mt-3 leading-7 text-slate-400">{body}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Decisions */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Engineering Decisions & Tradeoffs"
                        title="Every technology choice"
                        accent="solved a specific problem."
                        description="The stack was selected to create clear boundaries, secure integrations, relational consistency, repeatable deployment, and practical development velocity."
                    />

                    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {decisions.map(([title, body], index) => (
                            <motion.article
                                key={title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.52, delay: (index % 3) * 0.05, ease }}
                                whileHover={{ y: -5 }}
                                className="rounded-[1.5rem] border border-purple-400/15 bg-[#050b18]/80 p-6 backdrop-blur-xl"
                            >
                                <h3 className="text-xl font-black text-white">{title}</h3>
                                <p className="mt-3 leading-7 text-slate-400">{body}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lessons */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Lessons Learned"
                        title="What building CogniHaven"
                        accent="taught me about production software."
                        description="The project strengthened more than framework knowledge. It changed how I think about boundaries, reliability, AI behavior, security, and shipping complete systems."
                    />

                    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {lessons.map(([title, body], index) => (
                            <motion.article
                                key={title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.52, delay: (index % 3) * 0.05, ease }}
                                className="rounded-[1.5rem] border border-emerald-400/15 bg-[#050b18]/80 p-6 backdrop-blur-xl"
                            >
                                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-400">Lesson {String(index + 1).padStart(2, "0")}</p>
                                <h3 className="mt-4 text-xl font-black text-white">{title}</h3>
                                <p className="mt-3 leading-7 text-slate-400">{body}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interview Questions */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Interview Questions"
                        title="The engineering story"
                        accent="behind the implementation."
                        description="These are the questions I prepared to answer because they reveal architecture, ownership, tradeoffs, debugging ability, and depth beyond the feature list."
                    />

                    <div className="mt-14 grid gap-4 md:grid-cols-2">
                        {interviewQuestions.map((question, index) => (
                            <motion.article
                                key={question}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -18 : 18 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.22 }}
                                transition={{ duration: 0.48, delay: (index % 2) * 0.04, ease }}
                                className="flex gap-4 rounded-2xl border border-white/10 bg-[#050b18]/78 p-5 backdrop-blur-xl"
                            >
                                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.05] text-xs font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                                <p className="font-semibold leading-7 text-slate-200">{question}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future Engineering */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Future Engineering"
                        title="The next version would focus on"
                        accent="scale, observability, and resilience."
                        description="The current system proves the product and architecture. A larger user base would require stronger operational tooling and infrastructure controls."
                    />

                    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            ["Observability", "Centralized logs, metrics, traces, dashboards, and alerting across providers."],
                            ["Async Processing", "A queue-backed worker model for email, AI tasks, moderation, and long-running jobs."],
                            ["Caching", "Selective caching for read-heavy content, profile context, and external API responses."],
                            ["Deployment Maturity", "Staging environments, migrations, release promotion, rollback, and stronger health checks."],
                        ].map(([title, body], index) => (
                            <motion.article
                                key={title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.52, delay: index * 0.05, ease }}
                                className="rounded-[1.5rem] border border-blue-400/15 bg-[#050b18]/80 p-6 backdrop-blur-xl"
                            >
                                <h3 className="text-xl font-black text-white">{title}</h3>
                                <p className="mt-3 leading-7 text-slate-400">{body}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Reflection */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease }}
                        className="relative overflow-hidden rounded-[2rem] border border-cyan-400/25 bg-gradient-to-br from-cyan-400/[0.07] via-[#050b18]/92 to-blue-500/[0.05] p-8 text-center shadow-[0_0_60px_rgba(34,211,238,0.06)] sm:p-12"
                    >
                        <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-cyan-400/[0.08] blur-3xl" />
                        <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-blue-500/[0.08] blur-3xl" />

                        <div className="relative">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Final Reflection</p>
                            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                                CogniHaven changed how I think about building software.
                            </h2>
                            <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-300">
                                It began as an application idea and became a long-running engineering system. Building it required me to move beyond implementing individual features and think about architecture, authentication, data ownership, failure handling, background work, AI quality, testing, deployment, and the experience of real users.
                            </p>
                            <p className="mx-auto mt-5 max-w-4xl leading-8 text-slate-400">
                                The most important result is not the number of pages or modules. It is the ability to explain why the system is designed this way, how its parts interact, where its limits are, and what I would improve next.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Project Summary */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeader
                        eyebrow="Project Summary"
                        title="What CogniHaven"
                        accent="demonstrates as an engineering project."
                    />

                    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            ["Full-Stack Ownership", "Frontend, backend, data, security, testing, deployment, and product behavior."],
                            ["Production Architecture", "Layered services, distributed hosting, external integrations, and persistent state."],
                            ["Applied AI Engineering", "Context, prompts, structured analysis, safety rules, and feature-specific workflows."],
                            ["Delivery Discipline", "Automated tests, CI validation, Docker, environment configuration, and live deployment."],
                        ].map(([title, body], index) => (
                            <motion.article
                                key={title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.52, delay: index * 0.05, ease }}
                                className="rounded-[1.5rem] border border-white/10 bg-[#050b18]/80 p-6 text-center backdrop-blur-xl"
                            >
                                <h3 className="text-xl font-black text-white">{title}</h3>
                                <p className="mt-3 leading-7 text-slate-400">{body}</p>
                            </motion.article>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.65, ease }}
                        className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#050b18]/85"
                    >
                        <div className="grid md:grid-cols-3">
                            {[
                                ["Product", "AI-powered cognitive wellness and daily support platform"],
                                ["Architecture", "React · Spring Boot · REST · MySQL · External APIs"],
                                ["Delivery", "Docker · GitHub Actions · Vercel · Render · Railway"],
                            ].map(([label, body], index) => (
                                <div key={label} className={`p-7 text-center ${index === 1 ? "border-y border-white/10 md:border-x md:border-y-0" : ""}`}>
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">{label}</p>
                                    <p className="mt-3 font-semibold leading-7 text-slate-200">{body}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Closing CTA */}
            <section className="px-6 pt-16 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, ease }}
                        className="relative overflow-hidden rounded-[2rem] border border-cyan-400/25 bg-[#050b18]/90 p-8 shadow-[0_0_60px_rgba(34,211,238,0.07)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10"
                    >
                        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/[0.08] blur-3xl" />
                        <div className="relative max-w-3xl">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">Explore the Project</p>
                            <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">See the live platform or review the implementation.</h2>
                            <p className="mt-4 leading-7 text-slate-400">CogniHaven is deployed, testable, and available for a deeper architecture discussion.</p>
                        </div>

                        <div className="relative mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
                            <a
                                href="https://www.cognihaven.net"
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3.5 font-semibold text-slate-950 transition duration-200 hover:-translate-y-0.5"
                            >
                                Launch CogniHaven
                                <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                            </a>
                            <Link
                                to="/projects"
                                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-slate-200 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:text-white"
                            >
                                More Projects
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default CogniHavenProject;