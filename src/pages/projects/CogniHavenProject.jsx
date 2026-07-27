import { Link } from "react-router-dom";
import { motion } from "motion/react";

import cogniHavenScreenshot from "../../assets/projects/cognihaven-dashboard.png";

/*
 * ============================================================================
 * CogniHavenProject
 * ============================================================================
 *
 * Detailed engineering case study for CogniHaven.
 *
 * This page explains the product, architecture, major systems, engineering
 * decisions, testing strategy, deployment, demos, and lessons learned.
 * ============================================================================
 */

const technologies = [
    "Java",
    "Spring Boot",
    "Spring Security",
    "React",
    "MySQL",
    "Docker",
    "OpenAI",
];

function CogniHavenProject() {
    return (
        <main className="relative pb-28">
            {/* ================================================================
                Project Hero
            ================================================================= */}
            <section className="px-6 pb-20 pt-32 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    {/* Back navigation */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                        }}
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

                    <div className="mt-10 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                        {/* ====================================================
                            Project introduction
                        ===================================================== */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -30,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="inline-flex min-h-10 items-center rounded-full border border-cyan-400/30 bg-cyan-400/[0.06] px-4 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                                    Flagship Project
                                </span>

                                <span className="inline-flex min-h-10 items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/[0.08] px-4 text-xs font-bold uppercase tracking-[0.15em] text-emerald-300">
                                    <span
                                        aria-hidden="true"
                                        className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,1)]"
                                    />

                                    Live
                                </span>
                            </div>

                            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                                Production Full-Stack SaaS
                            </p>

                            <h1 className="mt-3 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                                CogniHaven
                            </h1>

                            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-300">
                                A calm, AI-powered cognitive wellness and daily
                                support platform built as a complete production
                                system rather than an isolated application demo.
                            </p>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                                CogniHaven combines secure authentication,
                                conversational AI, cognitive games, reminders,
                                goals, analytics, community interaction, voice
                                features, automated testing, and cloud deployment
                                into one full-stack platform.
                            </p>

                            {/* Project actions */}
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <a
                                    href="https://cognihaven.net"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.16)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(56,189,248,0.28)]"
                                >
                                    Live Application

                                    <span
                                        aria-hidden="true"
                                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    >
                                        ↗
                                    </span>
                                </a>
                                <a
                                    href="https://github.com/dmm-dev228/ai-cognitive-health-app"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-slate-200 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:text-white"
                                >
                                    GitHub Repository

                                    <span
                                        aria-hidden="true"
                                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    >
                                        ↗
                                    </span>
                                </a>
                            </div>

                            {/* Technology stack */}
                            <div className="mt-10">
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                                    Core Technology
                                </p>

                                <ul className="flex flex-wrap gap-2">
                                    {technologies.map((technology) => (
                                        <li
                                            key={technology}
                                            className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-slate-300 backdrop-blur-sm"
                                        >
                                            {technology}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* ====================================================
                            Product showcase
                        ===================================================== */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 35,
                                scale: 0.97,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.85,
                                delay: 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative"
                        >
                            {/* Ambient glow */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-10 rounded-full bg-cyan-500/[0.07] blur-3xl"
                            />

                            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/45 bg-[#050b18]/90 p-3 shadow-[0_0_55px_rgba(34,211,238,0.10)] backdrop-blur-xl sm:p-4">
                                {/* Browser chrome */}
                                <div className="flex items-center gap-2 px-2 pb-3 pt-1">
                                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />

                                    <div className="ml-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.65rem] text-slate-500">
                                        cognihaven.net
                                    </div>
                                </div>

                                <div className="overflow-hidden rounded-2xl border border-white/10">
                                    <img
                                        src={cogniHavenScreenshot}
                                        alt="CogniHaven production application interface"
                                        className="block h-auto w-full"
                                    />
                                </div>
                            </div>

                            {/* Engineering proof */}
                            <div className="relative mt-5 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-[#050b18]/80 backdrop-blur-xl">
                                <div className="px-3 py-5 text-center">
                                    <p className="text-2xl font-black text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.22)] sm:text-3xl">
                                        15+
                                    </p>

                                    <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-slate-500">
                                        Systems
                                    </p>
                                </div>

                                <div className="border-x border-white/10 px-3 py-5 text-center">
                                    <p className="text-2xl font-black text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.22)] sm:text-3xl">
                                        30
                                    </p>

                                    <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-slate-500">
                                        Tests
                                    </p>
                                </div>

                                <div className="px-3 py-5 text-center">
                                    <p className="text-xl font-black text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.22)] sm:text-2xl">
                                        CLOUD
                                    </p>

                                    <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.17em] text-slate-500">
                                        Deployed
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* ========================================================================
    Project Overview
========================================================================= */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                            Project Overview
                        </p>

                        <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            Built as a complete product,
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                not just a feature demo.
                            </span>
                        </h2>
                    </motion.div>

                    <div className="mt-14 grid gap-6 lg:grid-cols-3">
                        {/* What it is */}
                        <motion.article
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.05,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <div
                                aria-hidden="true"
                                className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-cyan-400/[0.07] blur-3xl"
                            />

                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                01 / Product
                            </p>

                            <h3 className="mt-5 text-2xl font-black text-white">
                                What CogniHaven is
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                CogniHaven is a deployed AI-powered cognitive wellness and
                                daily support platform designed around reflection, healthy
                                routines, cognitive engagement, memory reinforcement,
                                reminders, analytics, and emotionally safe AI-assisted
                                interaction.
                            </p>
                        </motion.article>

                        {/* What you built */}
                        <motion.article
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.12,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <div
                                aria-hidden="true"
                                className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-500/[0.07] blur-3xl"
                            />

                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                02 / Engineering
                            </p>

                            <h3 className="mt-5 text-2xl font-black text-white">
                                What I engineered
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                I designed and built the application across the frontend,
                                backend, database, authentication, AI workflows,
                                notifications, testing, deployment, and CI pipeline using
                                React, Java, Spring Boot, MySQL, Docker, and cloud-hosted
                                infrastructure.
                            </p>
                        </motion.article>

                        {/* Why it matters */}
                        <motion.article
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.19,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative overflow-hidden rounded-[1.75rem] border border-emerald-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <div
                                aria-hidden="true"
                                className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-emerald-400/[0.07] blur-3xl"
                            />

                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                                03 / Significance
                            </p>

                            <h3 className="mt-5 text-2xl font-black text-white">
                                Why it matters
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                The project forced me to solve problems that appear in
                                production systems: security, persistent user data,
                                background scheduling, API integration, AI context
                                management, automated testing, cloud deployment, and
                                maintaining reliability as the product grew.
                            </p>
                        </motion.article>
                    </div>

                    {/* Product positioning statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.65,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 rounded-[1.75rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/[0.05] via-blue-500/[0.03] to-transparent p-7 sm:p-8"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                            Product Positioning
                        </p>

                        <p className="mt-4 max-w-5xl text-xl font-semibold leading-9 text-slate-200 sm:text-2xl">
                            “A calm, AI-powered cognitive wellness and daily support
                            platform.”
                        </p>

                        <p className="mt-4 max-w-4xl leading-7 text-slate-400">
                            CogniHaven is intentionally positioned around cognitive
                            wellness and daily support rather than medical diagnosis or
                            medical advice.
                        </p>
                    </motion.div>
                </div>
            </section>
            {/* ========================================================================
    System Architecture
========================================================================= */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-4xl"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                            System Architecture
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            Structured in layers.
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                Built to keep responsibilities clear.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            CogniHaven separates presentation, API handling, business logic,
                            persistence, and external integrations so each part of the
                            system has a clear responsibility.
                        </p>
                    </motion.div>

                    {/* Architecture diagram */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.08,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative mt-14 overflow-hidden rounded-[2rem] border border-cyan-400/25 bg-[#050b18]/85 p-6 shadow-[0_0_55px_rgba(34,211,238,0.06)] backdrop-blur-xl sm:p-8 lg:p-10"
                    >
                        {/* Ambient architecture glow */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.06] blur-3xl"
                        />

                        <div className="relative z-10">
                            {/* Frontend */}
                            <div className="mx-auto max-w-sm rounded-2xl border border-cyan-400/35 bg-cyan-400/[0.05] p-5 text-center">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                    Presentation Layer
                                </p>

                                <h3 className="mt-3 text-xl font-black text-white">
                                    React Frontend
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    React • Vite • React Router • Tailwind CSS
                                </p>
                            </div>

                            {/* Connector */}
                            <div className="mx-auto flex h-16 w-px items-center justify-center bg-gradient-to-b from-cyan-400/70 to-blue-500/30">
                                <span className="rounded-full bg-[#050b18] px-2 text-cyan-300">
                                    ↓
                                </span>
                            </div>

                            {/* REST API */}
                            <div className="mx-auto max-w-sm rounded-2xl border border-blue-400/30 bg-blue-400/[0.05] p-5 text-center">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                                    API Boundary
                                </p>

                                <h3 className="mt-3 text-xl font-black text-white">
                                    REST API
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    Authenticated HTTP requests and structured DTOs
                                </p>
                            </div>

                            <div className="mx-auto flex h-16 w-px items-center justify-center bg-gradient-to-b from-blue-400/60 to-cyan-400/30">
                                <span className="rounded-full bg-[#050b18] px-2 text-cyan-300">
                                    ↓
                                </span>
                            </div>

                            {/* Backend layers */}
                            <div className="grid gap-4 lg:grid-cols-3">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                                        Layer 01
                                    </p>

                                    <h3 className="mt-3 text-lg font-black text-white">
                                        Controllers
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-400">
                                        Receive requests, validate input, and expose API
                                        endpoints.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-5 text-center">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-500">
                                        Layer 02
                                    </p>

                                    <h3 className="mt-3 text-lg font-black text-white">
                                        Services
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-400">
                                        Own business rules, orchestration, scheduling, and
                                        integration logic.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                                        Layer 03
                                    </p>

                                    <h3 className="mt-3 text-lg font-black text-white">
                                        Repositories
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-400">
                                        Access persisted user and application data through
                                        Spring Data JPA.
                                    </p>
                                </div>
                            </div>

                            <div className="mx-auto flex h-16 w-px items-center justify-center bg-gradient-to-b from-cyan-400/40 to-emerald-400/30">
                                <span className="rounded-full bg-[#050b18] px-2 text-emerald-300">
                                    ↓
                                </span>
                            </div>

                            {/* Database */}
                            <div className="mx-auto max-w-sm rounded-2xl border border-emerald-400/30 bg-emerald-400/[0.05] p-5 text-center">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                                    Persistence
                                </p>

                                <h3 className="mt-3 text-xl font-black text-white">
                                    MySQL
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    Persistent user, journal, goal, reminder, analytics,
                                    community, and application data.
                                </p>
                            </div>

                            {/* External services */}
                            <div className="mt-14 border-t border-white/10 pt-10">
                                <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                                    External Integrations
                                </p>

                                <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                                    <div className="rounded-2xl border border-purple-400/20 bg-purple-400/[0.04] p-5 text-center">
                                        <p className="text-lg font-black text-white">
                                            OpenAI API
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Conversational AI, reflections, stories,
                                            moderation, and analytics insights.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-red-400/20 bg-red-400/[0.04] p-5 text-center">
                                        <p className="text-lg font-black text-white">
                                            Gmail SMTP
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Verification, password reset, reminders, and
                                            authenticated feedback delivery.
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-sky-400/20 bg-sky-400/[0.04] p-5 text-center">
                                        <p className="text-lg font-black text-white">
                                            Guardian API
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Curated discovery content for the community
                                            experience.
                                        </p>
                                    </div>
                                    <div className="rounded-2xl border border-blue-400/20 bg-blue-400/[0.04] p-5 text-center">
                                        <p className="text-lg font-black text-white">
                                            Cloudinary API
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Cloud based image upload and storage for user profile pictures.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Why this architecture */}
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        <motion.article
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/75 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                Separation of Concerns
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                Why use layers?
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                Controllers stay focused on HTTP concerns while services
                                handle business logic and repositories handle persistence.
                                This makes individual parts of the application easier to
                                reason about, test, change, and maintain.
                            </p>
                        </motion.article>

                        <motion.article
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/75 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                                Secure Integrations
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                Why keep AI on the backend?
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                AI requests pass through Spring Boot rather than calling
                                external AI services directly from the browser. This keeps
                                API credentials out of frontend code and centralizes prompt
                                construction, validation, and application-specific AI
                                behavior.
                            </p>
                        </motion.article>
                    </div>
                </div>
            </section>
            {/* ========================================================================
    Major Systems / Engineering Highlights
========================================================================= */}
<section className="px-6 py-24 sm:px-8 lg:px-12">
    <div className="mx-auto w-full max-w-7xl">
        {/* Section heading */}
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl"
        >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Engineering Highlights
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                One platform.
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                    Multiple integrated systems.
                </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                CogniHaven grew into a collection of interconnected systems
                spanning security, AI, personalization, engagement,
                notifications, analytics, and community features.
            </p>
        </motion.div>

        {/* Engineering system grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Authentication */}
            <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
                <span className="text-xs font-black uppercase tracking-[0.18em] text-cyan-400">
                    SYS / 01
                </span>

                <h3 className="mt-5 text-2xl font-black text-white">
                    Authentication & Security
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                    Secure account lifecycle and protected application access
                    built around Spring Security and JWT authentication.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    <li>→ JWT authentication</li>
                    <li>→ BCrypt password hashing</li>
                    <li>→ Protected REST endpoints</li>
                    <li>→ Email verification</li>
                    <li>→ Password reset</li>
                    <li>→ Rate limiting & brute-force protection</li>
                </ul>
            </motion.article>

            {/* AI */}
            <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.55,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-purple-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/30"
            >
                <span className="text-xs font-black uppercase tracking-[0.18em] text-purple-400">
                    SYS / 02
                </span>

                <h3 className="mt-5 text-2xl font-black text-white">
                    Contextual AI Systems
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                    Backend-controlled OpenAI workflows power multiple
                    experiences while keeping prompts, API credentials, and
                    application context out of the browser.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    <li>→ Multi-turn journal conversations</li>
                    <li>→ AI-generated reflections</li>
                    <li>→ Goal planning</li>
                    <li>→ Game feedback</li>
                    <li>→ Analytics insights</li>
                    <li>→ Community moderation assistance</li>
                </ul>
            </motion.article>

            {/* Personalization */}
            <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.55,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-blue-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
            >
                <span className="text-xs font-black uppercase tracking-[0.18em] text-blue-400">
                    SYS / 03
                </span>

                <h3 className="mt-5 text-2xl font-black text-white">
                    Personalization & Profiles
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                    Persistent user profiles allow CogniHaven to provide a more
                    personalized experience across multiple product areas.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    <li>→ Memory profile</li>
                    <li>→ Dietary profile</li>
                    <li>→ Account settings</li>
                    <li>→ Profile image uploads</li>
                    <li>→ Cloudinary image storage</li>
                    <li>→ Persistent user preferences</li>
                </ul>
            </motion.article>

            {/* Goals, reminders */}
            <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.55,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-emerald-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30"
            >
                <span className="text-xs font-black uppercase tracking-[0.18em] text-emerald-400">
                    SYS / 04
                </span>

                <h3 className="mt-5 text-2xl font-black text-white">
                    Goals & Daily Support
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                    Scheduling and progress systems support recurring
                    activities while coordinating persistent state,
                    notifications, and background processing.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    <li>→ AI-generated goal plans</li>
                    <li>→ Goal progress tracking</li>
                    <li>→ Achievement system</li>
                    <li>→ Medication reminders</li>
                    <li>→ Multiple reminder times</li>
                    <li>→ In-app & email notifications</li>
                </ul>
            </motion.article>

            {/* Cognitive games */}
            <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.55,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-amber-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-400/30"
            >
                <span className="text-xs font-black uppercase tracking-[0.18em] text-amber-400">
                    SYS / 05
                </span>

                <h3 className="mt-5 text-2xl font-black text-white">
                    Cognitive Games & Analytics
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                    Interactive cognitive games generate structured performance
                    data that feeds history, analytics, and AI-assisted
                    feedback.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    <li>→ Pattern Recall</li>
                    <li>→ Story Recall</li>
                    <li>→ Memory Match</li>
                    <li>→ Word Bloom</li>
                    <li>→ Score & accuracy history</li>
                    <li>→ AI performance summaries</li>
                </ul>
            </motion.article>

            {/* Community */}
            <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.55,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-sky-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/30"
            >
                <span className="text-xs font-black uppercase tracking-[0.18em] text-sky-400">
                    SYS / 06
                </span>

                <h3 className="mt-5 text-2xl font-black text-white">
                    Community & Discovery
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                    Social interaction and external discovery content are
                    combined with moderation workflows designed for a wellness
                    environment.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    <li>→ Community posts</li>
                    <li>→ Comments & reactions</li>
                    <li>→ Content moderation</li>
                    <li>→ Crisis-aware handling</li>
                    <li>→ Guardian API discovery</li>
                    <li>→ Community guidelines</li>
                </ul>
            </motion.article>
        </div>

        {/* Scale summary */}
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 sm:grid-cols-3"
        >
            <div className="p-7 text-center">
                <p className="text-4xl font-black text-emerald-400">
                    15+
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Integrated Modules
                </p>
            </div>

            <div className="border-y border-white/10 p-7 text-center sm:border-x sm:border-y-0">
                <p className="text-4xl font-black text-cyan-400">
                    4
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    External Integrations
                </p>
            </div>

            <div className="p-7 text-center">
                <p className="text-4xl font-black text-blue-400">
                    Full
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Product Lifecycle
                </p>
            </div>
        </motion.div>
    </div>
</section>
{/* ========================================================================
    Demo Gallery
========================================================================= */}
<section className="px-6 py-24 sm:px-8 lg:px-12">
    <div className="mx-auto w-full max-w-7xl">
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl"
        >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Product Demos
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                See the system
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                    in action.
                </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                These demos show how CogniHaven evolved from individual
                features into a connected production platform spanning AI,
                authentication, cognitive experiences, reminders, analytics,
                and community interaction.
            </p>
        </motion.div>

        {/* ================================================================
            Journal Evolution
        ================================================================= */}
        <motion.article
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-14 overflow-hidden rounded-[2rem] border border-purple-400/20 bg-[#050b18]/85 backdrop-blur-xl"
        >
            <div className="border-b border-white/10 p-7 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                            Feature Evolution
                        </p>

                        <h3 className="mt-3 text-3xl font-black text-white">
                            Conversational AI Journal
                        </h3>
                    </div>

                    <span className="rounded-full border border-purple-400/30 bg-purple-400/[0.07] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-purple-300">
                        Before / After
                    </span>
                </div>

                <p className="mt-4 max-w-4xl leading-7 text-slate-400">
                    The journal was one of the earliest CogniHaven features and
                    later evolved into a much deeper conversational system with
                    improved context handling, more natural responses, stronger
                    continuity, voice features, and extensive AI response
                    tuning.
                </p>
            </div>

            <div className="grid lg:grid-cols-2">
                {/* Original Journal */}
                <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                    <div className="mb-5">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                            Earlier Version
                        </p>

                        <h4 className="mt-2 text-xl font-black text-white">
                            Original AI Journal
                        </h4>
                    </div>

                    <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
                        <iframe
                            className="h-full w-full"
                            src="https://www.youtube.com/embed/wLBaWi6hfa8"
                            title="Original CogniHaven AI Journal Demo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>

                    <p className="mt-5 text-sm leading-6 text-slate-500">
                        The original implementation established AI-assisted
                        journal interaction and became the foundation for the
                        more advanced conversational system.
                    </p>
                </div>

                {/* Updated Journal */}
                <div className="p-6 sm:p-8">
                    <div className="mb-5">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                            Current Version
                        </p>

                        <h4 className="mt-2 text-xl font-black text-white">
                            Context-Aware Conversational Journal
                        </h4>
                    </div>

                    <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-emerald-400/15 bg-gradient-to-br from-slate-950 via-emerald-950/20 to-slate-950">
                        <div
                            aria-hidden="true"
                            className="absolute h-48 w-48 rounded-full bg-emerald-400/[0.06] blur-3xl"
                        />

                        <div className="relative text-center">
                            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] text-2xl text-emerald-300">
                                ◉
                            </div>

                            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                                Updated Demo Incoming
                            </p>

                            <p className="mt-2 text-sm text-slate-500">
                                Current journal walkthrough will be added here.
                            </p>
                        </div>
                    </div>

                    <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-400">
                        <li>→ Improved multi-turn context</li>
                        <li>→ More natural response behavior</li>
                        <li>→ Reduced repetition</li>
                        <li>→ Better direct-question handling</li>
                        <li>→ Speech-to-text and text-to-speech</li>
                        <li>→ Memory-aware responses when relevant</li>
                    </ul>
                </div>
            </div>
        </motion.article>

        {/* ================================================================
            Existing Demo Videos
        ================================================================= */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Authentication */}
            <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
                <div className="aspect-video overflow-hidden border-b border-white/10 bg-black">
                    <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/Ng3uUpbvEks"
                        title="CogniHaven Secure Authentication and Email Verification Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>

                <div className="p-7">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                            Demo 02
                        </p>

                        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/[0.07] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-emerald-300">
                            Available
                        </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-white">
                        Authentication & Email Verification
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                        Signup, secure authentication, verification emails,
                        protected access, and automatic login after successful
                        account verification.
                    </p>
                </div>
            </motion.article>

            {/* Medication */}
            <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.55,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
                <div className="aspect-video overflow-hidden border-b border-white/10 bg-black">
                    <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/fY1184p3D3Y"
                        title="CogniHaven Smart Medication Reminders and Notifications Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>

                <div className="p-7">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                            Demo 03
                        </p>

                        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/[0.07] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-emerald-300">
                            Available
                        </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-white">
                        Smart Medication Reminders
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                        Medication scheduling with multiple reminder times,
                        persistent configuration, in-app notifications, email
                        delivery, and reminder management.
                    </p>
                </div>
            </motion.article>

            {/* Cognitive Games */}
            <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.55,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
                <div className="aspect-video overflow-hidden border-b border-white/10 bg-black">
                    <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/ChKPjOAyg5I"
                        title="CogniHaven Cognitive Games Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />
                </div>

                <div className="p-7">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                            Demo 04
                        </p>

                        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/[0.07] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-emerald-300">
                            Available
                        </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-white">
                        Cognitive Games
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                        Interactive cognitive experiences including memory,
                        recall, pattern, word, scoring, difficulty, voice, and
                        AI-assisted reflection systems.
                    </p>
                </div>
            </motion.article>

            {/* Community */}
            <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.55,
                    delay: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden rounded-[1.75rem] border border-sky-400/15 bg-[#050b18]/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-400/30"
            >
                <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-sky-950/25 to-slate-950">
                    <div
                        aria-hidden="true"
                        className="absolute h-48 w-48 rounded-full bg-sky-400/[0.06] blur-3xl"
                    />

                    <div className="relative text-center">
                        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-sky-400/20 bg-sky-400/[0.05] text-2xl text-sky-300">
                            ◉
                        </div>

                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-sky-400">
                            Demo Incoming
                        </p>

                        <p className="mt-2 text-sm text-slate-500">
                            Community walkthrough will be added here.
                        </p>
                    </div>
                </div>

                <div className="p-7">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                            Demo 05
                        </p>

                        <span className="rounded-full border border-slate-600/30 bg-white/[0.02] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-slate-500">
                            Planned
                        </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-white">
                        Community Experience
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                        Community posts, comments, reactions, onboarding
                        guidelines, discovery content, live trends, and
                        moderation workflows designed around supportive
                        interaction.
                    </p>
                </div>
            </motion.article>

            {/* Goals */}
            <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.55,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 backdrop-blur-xl"
            >
                <div className="relative flex aspect-video items-center justify-center border-b border-white/10 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
                    <div className="text-center">
                        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-2xl text-slate-500">
                            ◉
                        </div>

                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                            Demo Incoming
                        </p>
                    </div>
                </div>

                <div className="p-7">
                    <h3 className="text-2xl font-black text-white">
                        Goals & AI Planning
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                        Goal creation, AI-generated step-by-step planning,
                        progress tracking, reminders, and achievements.
                    </p>
                </div>
            </motion.article>

            {/* Analytics */}
            <motion.article
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.55,
                    delay: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 backdrop-blur-xl"
            >
                <div className="relative flex aspect-video items-center justify-center border-b border-white/10 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
                    <div className="text-center">
                        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-2xl text-slate-500">
                            ◉
                        </div>

                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                            Demo Incoming
                        </p>
                    </div>
                </div>

                <div className="p-7">
                    <h3 className="text-2xl font-black text-white">
                        Analytics Dashboard
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                        Cognitive activity history, score and accuracy trends,
                        game-specific statistics, visualizations, and
                        AI-generated recommendations.
                    </p>
                </div>
            </motion.article>
        </div>
    </div>
</section>
{/* ========================================================================
    Testing, CI/CD, and Deployment
========================================================================= */}
<section className="px-6 py-24 sm:px-8 lg:px-12">
    <div className="mx-auto w-full max-w-7xl">
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl"
        >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Quality & Delivery
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                Built to be tested.
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                    Built to be deployed.
                </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                CogniHaven uses automated testing, containerization, continuous
                integration, and cloud deployment workflows to reduce regressions
                and keep the production application stable as the codebase grows.
            </p>
        </motion.div>

        {/* Quality metrics */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
            <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55 }}
                className="rounded-[1.75rem] border border-emerald-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
            >
                <p className="text-4xl font-black text-emerald-400">
                    24
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Backend Tests
                </p>

                <p className="mt-5 leading-7 text-slate-400">
                    Automated Java tests cover authentication, user operations,
                    goals, notifications, repository interactions, and critical
                    business rules.
                </p>
            </motion.article>

            <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.06 }}
                className="rounded-[1.75rem] border border-cyan-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
            >
                <p className="text-4xl font-black text-cyan-400">
                    6
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Frontend Tests
                </p>

                <p className="mt-5 leading-7 text-slate-400">
                    Vitest and React Testing Library validate authentication
                    forms, password workflows, component rendering, and user
                    interactions.
                </p>
            </motion.article>

            <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="rounded-[1.75rem] border border-blue-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
            >
                <p className="text-4xl font-black text-blue-400">
                    CI
                </p>

                <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Automated Validation
                </p>

                <p className="mt-5 leading-7 text-slate-400">
                    GitHub Actions runs backend tests, frontend tests, and build
                    validation before changes are considered ready for release.
                </p>
            </motion.article>
        </div>

        {/* CI pipeline */}
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#050b18]/85 p-7 backdrop-blur-xl sm:p-8"
        >
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                        Continuous Integration
                    </p>

                    <h3 className="mt-3 text-3xl font-black text-white">
                        Validation before release
                    </h3>
                </div>

                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
                    GitHub Actions
                </span>
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
                            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                                {number}
                            </p>

                            <p className="mt-3 font-bold text-white">
                                {label}
                            </p>
                        </div>

                        {index < 3 && (
                            <span
                                aria-hidden="true"
                                className="hidden text-xl text-cyan-400 lg:block"
                            >
                                →
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-7 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-5">
                <p className="font-bold text-emerald-300">
                    PASS → ready for deployment
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                    Failed tests or build validation stop the workflow from
                    being treated as release-ready.
                </p>
            </div>
        </motion.div>

        {/* Deployment architecture */}
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 rounded-[2rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl sm:p-8"
        >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                Production Deployment
            </p>

            <h3 className="mt-3 text-3xl font-black text-white">
                Distributed cloud architecture
            </h3>

            <div className="mt-9 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                        Frontend
                    </p>

                    <h4 className="mt-3 text-2xl font-black text-white">
                        Vercel
                    </h4>

                    <p className="mt-3 leading-7 text-slate-400">
                        Hosts the React/Vite frontend and handles production
                        routing through rewrite configuration.
                    </p>
                </div>

                <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.03] p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-500">
                        Backend
                    </p>

                    <h4 className="mt-3 text-2xl font-black text-white">
                        Render + Docker
                    </h4>

                    <p className="mt-3 leading-7 text-slate-400">
                        Runs the containerized Spring Boot application, REST API,
                        schedulers, security, AI workflows, and integrations.
                    </p>
                </div>

                <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.03] p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-500">
                        Database
                    </p>

                    <h4 className="mt-3 text-2xl font-black text-white">
                        Railway MySQL
                    </h4>

                    <p className="mt-3 leading-7 text-slate-400">
                        Provides persistent relational storage for application
                        and user data.
                    </p>
                </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="font-bold text-white">
                        Custom Domain
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                        cognihaven.net
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="font-bold text-white">
                        Environment Configuration
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                        Production secrets and configuration stay outside the
                        source code.
                    </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <p className="font-bold text-white">
                        Health Monitoring
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                        Backend health endpoint provides a simple production
                        availability check.
                    </p>
                </div>
            </div>
        </motion.div>
    </div>
</section>
{/* ========================================================================
    Engineering Challenges & Decisions
========================================================================= */}
<section className="px-6 py-24 sm:px-8 lg:px-12">
    <div className="mx-auto w-full max-w-7xl">
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-4xl"
        >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Engineering Decisions
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                The hardest parts were not
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                    the visible features.
                </span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Building CogniHaven required solving problems around security,
                background behavior, AI response quality, state synchronization,
                and product growth rather than only implementing screens.
            </p>
        </motion.div>

        <div className="mt-14 space-y-6">
            {/* ============================================================
                Challenge 01
            ============================================================= */}
            <motion.article
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#050b18]/85 backdrop-blur-xl lg:grid-cols-[0.42fr_0.58fr]"
            >
                <div className="border-b border-white/10 p-7 sm:p-8 lg:border-b-0 lg:border-r">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-red-400">
                        Challenge / 01
                    </p>

                    <h3 className="mt-4 text-3xl font-black text-white">
                        Session timeout was not actually protecting inactive sessions.
                    </h3>

                    <p className="mt-5 leading-7 text-slate-400">
                        The original implementation depended too heavily on
                        browser activity events. If a user walked away from an
                        open session, the warning flow did not behave correctly
                        until activity resumed.
                    </p>
                </div>

                <div className="p-7 sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                        Engineering Response
                    </p>

                    <h4 className="mt-4 text-2xl font-black text-white">
                        Track time, not just events.
                    </h4>

                    <p className="mt-4 leading-7 text-slate-400">
                        I changed the session model to persist the last activity
                        timestamp and continuously calculate elapsed inactivity.
                        The application can now show the warning countdown and
                        automatically log the user out even when no new browser
                        event occurs.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {[
                            "Last activity timestamp",
                            "Continuous idle checks",
                            "Automatic logout",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.04] p-4 text-sm font-semibold text-slate-300"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.article>

            {/* ============================================================
                Challenge 02
            ============================================================= */}
            <motion.article
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#050b18]/85 backdrop-blur-xl lg:grid-cols-[0.42fr_0.58fr]"
            >
                <div className="border-b border-white/10 p-7 sm:p-8 lg:border-b-0 lg:border-r">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-400">
                        Challenge / 02
                    </p>

                    <h3 className="mt-4 text-3xl font-black text-white">
                        AI responses needed continuity without becoming repetitive.
                    </h3>

                    <p className="mt-5 leading-7 text-slate-400">
                        A basic prompt-response loop was not enough for the
                        journal. Conversations needed to remember recent context,
                        react to emotional tone, answer direct questions, and
                        avoid repeatedly forcing the same wellness language.
                    </p>
                </div>

                <div className="p-7 sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                        Engineering Response
                    </p>

                    <h4 className="mt-4 text-2xl font-black text-white">
                        Treat AI behavior like application logic.
                    </h4>

                    <p className="mt-4 leading-7 text-slate-400">
                        I moved AI orchestration into backend services and
                        iterated on context construction, conversation analysis,
                        prompt priorities, memory relevance, direct-question
                        handling, and response rules until the journal behaved
                        more like a continuing conversation than isolated AI
                        completions.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {[
                            "Recent conversation context",
                            "Intent and tone analysis",
                            "Reduced repetition",
                            "Memory only when relevant",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-xl border border-purple-400/15 bg-purple-400/[0.04] p-4 text-sm font-semibold text-slate-300"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.article>

            {/* ============================================================
                Challenge 03
            ============================================================= */}
            <motion.article
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#050b18]/85 backdrop-blur-xl lg:grid-cols-[0.42fr_0.58fr]"
            >
                <div className="border-b border-white/10 p-7 sm:p-8 lg:border-b-0 lg:border-r">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-400">
                        Challenge / 03
                    </p>

                    <h3 className="mt-4 text-3xl font-black text-white">
                        Sensitive account changes needed stronger verification.
                    </h3>

                    <p className="mt-5 leading-7 text-slate-400">
                        Allowing a user to immediately replace their email could
                        create account lockouts, typos, or unauthorized account
                        changes if a session were compromised.
                    </p>
                </div>

                <div className="p-7 sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                        Engineering Response
                    </p>

                    <h4 className="mt-4 text-2xl font-black text-white">
                        Verify ownership before committing the change.
                    </h4>

                    <p className="mt-4 leading-7 text-slate-400">
                        The email-change workflow requires the current password,
                        sends verification to the proposed new address, and only
                        updates the account after the verification token is
                        confirmed.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {[
                            "Current password",
                            "Pending email",
                            "Verification token",
                            "Confirmed ownership",
                        ].map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.04] px-3 py-2 text-xs font-bold text-slate-300"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.article>

            {/* ============================================================
                Challenge 04
            ============================================================= */}
            <motion.article
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#050b18]/85 backdrop-blur-xl lg:grid-cols-[0.42fr_0.58fr]"
            >
                <div className="border-b border-white/10 p-7 sm:p-8 lg:border-b-0 lg:border-r">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-400">
                        Challenge / 04
                    </p>

                    <h3 className="mt-4 text-3xl font-black text-white">
                        Reminder systems had to be useful without becoming noisy.
                    </h3>

                    <p className="mt-5 leading-7 text-slate-400">
                        Medication, goal, journal, and community notifications
                        all have different timing rules and user preferences.
                        Treating every notification the same would create spam
                        and a poor experience.
                    </p>
                </div>

                <div className="p-7 sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                        Engineering Response
                    </p>

                    <h4 className="mt-4 text-2xl font-black text-white">
                        Separate scheduling rules from user preferences.
                    </h4>

                    <p className="mt-4 leading-7 text-slate-400">
                        Backend schedulers evaluate reminder timing while
                        persisted user settings determine which notification
                        channels are allowed. Goal reminders also use cooldown
                        rules to avoid repeatedly emailing users who have not
                        interacted.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {[
                            "Scheduled backend checks",
                            "Per-user preferences",
                            "Reminder cooldowns",
                        ].map((item) => (
                            <div
                                key={item}
                                className="rounded-xl border border-amber-400/15 bg-amber-400/[0.04] p-4 text-sm font-semibold text-slate-300"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.article>
        </div>

        {/* Engineering takeaway */}
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 rounded-[2rem] border border-emerald-400/15 bg-gradient-to-r from-emerald-400/[0.05] via-cyan-400/[0.03] to-transparent p-7 sm:p-8"
        >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                Engineering Takeaway
            </p>

            <p className="mt-4 max-w-5xl text-xl font-semibold leading-9 text-slate-200 sm:text-2xl">
                The project became less about adding features and more about
                designing behavior that remained secure, understandable, and
                maintainable as those features began interacting with one another.
            </p>
        </motion.div>
    </div>
</section>
        </main>
    );
}

export default CogniHavenProject;