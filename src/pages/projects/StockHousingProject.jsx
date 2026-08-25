import { Link } from "react-router-dom";
import { motion } from "motion/react";
import githubIcon from "../../assets/icons/github.png";
import stockHousingVisual from "../../assets/projects/stockhousing.png";

/*
 * ============================================================================
 * StockHousingProject
 * ============================================================================
 *
 * Detailed engineering case study for the Stock & Housing Regression Engine.
 *
 * This page focuses on:
 * - Real-world data acquisition
 * - CSV preprocessing
 * - Typed C++ data structures
 * - Linear regression implemented from scratch
 * - Numerical validation
 * - Model limitations and engineering tradeoffs
 * ============================================================================
 */

const technologies = [
    "C++17",
    "Linear Regression",
    "libcurl",
    "CSV Processing",
    "Alpha Vantage",
    "Public Data APIs",
];

function StockHousingProject() {
    return (
        <main className="relative pb-28">
            {/* ==================================================================
                Project Hero
            =================================================================== */}
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
                            <div className="inline-flex min-h-10 items-center rounded-full border border-cyan-400/30 bg-cyan-400/[0.06] px-4 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                                Data Engineering / Numerical Computing
                            </div>

                            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                                C++ Predictive Analytics Pipeline
                            </p>

                            <h1 className="mt-3 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                                Predictive Data
                                <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                    Regression Engine
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-300">
                                A C++ predictive analytics pipeline built from first principles,
                                powered by real-world public data.
                            </p>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                                A complete C++ workflow that acquires housing and market data,
                                establishes a reproducible CSV boundary, validates and
                                transforms records into typed model inputs, and trains
                                ordinary least-squares regression without depending on a
                                machine-learning framework.
                            </p>

                            {/* Project actions */}
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <a
                                    href="https://github.com/dmm-dev228/Stock-Housing-Price-Predictor"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/[0.06] px-6 py-3.5 font-semibold text-cyan-300 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-400/[0.1] hover:text-white"
                                >
                                    View GitHub

                                    <span
                                        aria-hidden="true"
                                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    >
                                        ↗
                                    </span>
                                </a>

                                <Link
                                    to="/projects"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-slate-300 transition duration-200 hover:border-white/20 hover:text-white"
                                >
                                    ← All Projects
                                </Link>
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
                                            className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-slate-300"
                                        >
                                            {technology}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Metrics */}
                            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                {[
                                    ["2", "Regression Models"],
                                    ["2", "Data Sources"],
                                    ["4", "Executable Programs"],
                                    ["6", "Stock Fields"],
                                ].map(([value, label]) => (
                                    <div
                                        key={label}
                                        className="rounded-2xl border border-white/10 bg-[#050b18]/70 p-4"
                                    >
                                        <p className="text-2xl font-black text-cyan-300">
                                            {value}
                                        </p>

                                        <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                                            {label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* ====================================================
                            Data Pipeline Visual
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
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-10 rounded-full bg-cyan-500/[0.07] blur-3xl"
                            />

                            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/40 bg-[#050b18]/90 p-6 shadow-[0_0_55px_rgba(34,211,238,0.08)] backdrop-blur-xl sm:p-8">
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                            Data Pipeline
                                        </p>

                                        <h2 className="mt-2 text-2xl font-black text-white">
                                            External Data → Prediction
                                        </h2>
                                    </div>

                                    <span className="rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
                                        OLS From Scratch
                                    </span>
                                </div>

                                {/* Sources */}
                                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-blue-400/20 bg-blue-400/[0.04] p-5 text-center">
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-400">
                                            Housing Source
                                        </p>

                                        <p className="mt-2 font-black text-white">
                                            Connecticut Open Data
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-purple-400/20 bg-purple-400/[0.04] p-5 text-center">
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-purple-400">
                                            Stock Source
                                        </p>

                                        <p className="mt-2 font-black text-white">
                                            Alpha Vantage API
                                        </p>
                                    </div>
                                </div>

                                <div className="mx-auto flex h-12 w-px items-center justify-center bg-cyan-400/25">
                                    <span className="bg-[#050b18] px-2 text-cyan-300">
                                        ↓
                                    </span>
                                </div>

                                {/* Acquisition */}
                                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-5 text-center">
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-400">
                                        Data Acquisition
                                    </p>

                                    <p className="mt-2 text-xl font-black text-white">
                                        libcurl
                                    </p>
                                </div>

                                <div className="mx-auto flex h-12 w-px items-center justify-center bg-cyan-400/25">
                                    <span className="bg-[#050b18] px-2 text-cyan-300">
                                        ↓
                                    </span>
                                </div>

                                {/* CSV */}
                                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center">
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                        Intermediate Storage
                                    </p>

                                    <p className="mt-2 text-xl font-black text-white">
                                        CSV Files
                                    </p>
                                </div>

                                <div className="mx-auto flex h-12 w-px items-center justify-center bg-cyan-400/25">
                                    <span className="bg-[#050b18] px-2 text-cyan-300">
                                        ↓
                                    </span>
                                </div>

                                {/* Preprocessing */}
                                <div className="rounded-2xl border border-amber-400/20 bg-amber-400/[0.04] p-5 text-center">
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-400">
                                        Preprocessing
                                    </p>

                                    <p className="mt-2 text-xl font-black text-white">
                                        CSV → Typed C++ Structures
                                    </p>
                                </div>

                                <div className="mx-auto flex h-12 w-px items-center justify-center bg-cyan-400/25">
                                    <span className="bg-[#050b18] px-2 text-cyan-300">
                                        ↓
                                    </span>
                                </div>

                                {/* Regression */}
                                <div className="rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.05] p-5 text-center">
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-400">
                                        Modeling
                                    </p>

                                    <p className="mt-2 text-xl font-black text-white">
                                        Linear Regression
                                    </p>

                                    <p className="mt-2 text-sm text-slate-400">
                                        Mean → Slope → Intercept → Prediction
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ==================================================================
                Concept Visual
            =================================================================== */}
            <section className="px-6 py-16 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="mx-auto mb-8 max-w-4xl text-center">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                                Visual Overview
                            </p>

                            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                                Real-world data.
                                <span className="bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                    {" "}Regression from first principles.
                                </span>
                            </h2>
                        </div>

                        <div className="relative">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-10 rounded-full bg-blue-500/[0.07] blur-3xl"
                            />

                            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-[#050b18]/90 p-2 shadow-[0_0_55px_rgba(34,211,238,0.08)] backdrop-blur-xl sm:p-3">
                                <img
                                    src={stockHousingVisual}
                                    alt="Concept artwork representing the Stock and Housing Regression Engine data pipeline and linear regression workflow"
                                    className="block h-auto w-full rounded-[1.5rem]"
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#050b18]/70 p-5 sm:flex-row sm:items-center sm:justify-between">
                            <p className="max-w-3xl text-sm leading-6 text-slate-400">
                                Concept artwork representing the project's
                                external-data pipeline, regression workflow, and
                                two modeling domains.
                            </p>

                            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                                AI-Generated Visualization
                            </span>
                        </div>
                    </motion.div>
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
                        className="mx-auto max-w-4xl text-center"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                            Project Overview
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            One mathematical engine.
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                Two independent data domains.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            The project applies the same ordinary least-squares regression
                            idea to two different domains: historical stock-market records
                            and Connecticut real-estate data.
                        </p>
                    </motion.div>

                    <div className="mt-14 grid gap-6 lg:grid-cols-3">
                        <motion.article
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.55 }}
                            className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-[#071022]/90"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                01 / Data
                            </p>

                            <h3 className="mt-5 text-2xl font-black text-white">
                                External datasets
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                Housing data is retrieved from Connecticut Open Data while
                                stock data comes from the Alpha Vantage daily time-series
                                endpoint.
                            </p>
                        </motion.article>

                        <motion.article
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.55, delay: 0.06 }}
                            className="rounded-[1.75rem] border border-purple-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                                02 / Modeling
                            </p>

                            <h3 className="mt-5 text-2xl font-black text-white">
                                Regression from scratch
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                The model calculates means, slope, and intercept directly
                                in C++ instead of relying on a machine-learning framework.
                            </p>
                        </motion.article>

                        <motion.article
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.55, delay: 0.12 }}
                            className="rounded-[1.75rem] border border-emerald-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                                03 / Engineering
                            </p>

                            <h3 className="mt-5 text-2xl font-black text-white">
                                End-to-end pipeline
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                HTTP acquisition, file persistence, parsing, validation,
                                typed structures, feature extraction, model training, and
                                prediction all live within the same C++ project.
                            </p>
                        </motion.article>
                    </div>
                </div>
            </section>

            {/* ========================================================================
    Two Model Paths
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
                        className="mx-auto max-w-4xl text-center"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                            Model Paths
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            Shared regression logic.
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                Domain-specific preprocessing.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Both pipelines end in simple linear regression, but the source
                            schemas, preprocessing, and model inputs are different.
                        </p>
                    </motion.div>

                    <div className="mt-14 grid gap-6 lg:grid-cols-2">
                        {/* Stock model */}
                        <motion.article
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-[#050b18]/85 backdrop-blur-xl"
                        >
                            <div className="border-b border-white/10 p-7 sm:p-8">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                                            Stock Pipeline
                                        </p>

                                        <h3 className="mt-3 text-3xl font-black text-white">
                                            Opening Price → Closing Price
                                        </h3>
                                    </div>

                                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
                                        Cleaner Path
                                    </span>
                                </div>

                                <p className="mt-4 leading-7 text-slate-400">
                                    Historical stock data is retrieved from Alpha Vantage,
                                    converted into typed records, and reduced into opening
                                    prices as the feature and closing prices as the target.
                                </p>
                            </div>

                            <div className="p-7 sm:p-8">
                                <div className="space-y-3">
                                    {[
                                        "Ticker Symbol",
                                        "Alpha Vantage",
                                        "CSV Response",
                                        "StockData",
                                        "Open Prices → X",
                                        "Close Prices → Y",
                                        "Normalize / 100",
                                        "Linear Regression",
                                        "Closing-Price Estimate",
                                    ].map((step, index) => (
                                        <div
                                            key={step}
                                            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4"
                                        >
                                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-emerald-400/15 bg-emerald-400/[0.04] text-xs font-black text-emerald-400">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <p className="font-semibold text-slate-300">
                                                {step}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-5">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
                                        Important distinction
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-slate-400">
                                        This model estimates a same-day closing price from
                                        an opening price. It is not presented as a future
                                        stock-market forecasting system.
                                    </p>
                                </div>
                            </div>
                        </motion.article>

                        {/* Housing model */}
                        <motion.article
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.06,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden rounded-[2rem] border border-amber-400/20 bg-[#050b18]/85 backdrop-blur-xl"
                        >
                            <div className="border-b border-white/10 p-7 sm:p-8">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                                            Housing Pipeline
                                        </p>

                                        <h3 className="mt-3 text-3xl font-black text-white">
                                            Property Value → Sale Price
                                        </h3>
                                    </div>

                                    <span className="rounded-full border border-amber-400/30 bg-amber-400/[0.07] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
                                        Known Constraint
                                    </span>
                                </div>

                                <p className="mt-4 leading-7 text-slate-400">
                                    Connecticut real-estate records are downloaded and
                                    parsed into housing data before selected numeric values
                                    are passed into the regression model.
                                </p>
                            </div>

                            <div className="p-7 sm:p-8">
                                <div className="space-y-3">
                                    {[
                                        "Connecticut Open Data",
                                        "CSV Download",
                                        "HousingData",
                                        "Property Assessment → X",
                                        "Sale Price → Y",
                                        "Normalization",
                                        "Linear Regression",
                                        "Sale-Price Estimate",
                                    ].map((step, index) => (
                                        <div
                                            key={step}
                                            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-4"
                                        >
                                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-amber-400/15 bg-amber-400/[0.04] text-xs font-black text-amber-400">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <p className="font-semibold text-slate-300">
                                                {step}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] p-5">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400">
                                        Implementation note
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-slate-400">
                                        The current parser assigns property-assessment data
                                        into a field named for living area, and housing
                                        normalization is not applied consistently between
                                        training and prediction. Those issues should be
                                        corrected before presenting housing outputs as
                                        validated results.
                                    </p>
                                </div>
                            </div>
                        </motion.article>
                    </div>
                </div>
            </section>
            {/* ========================================================================
    Linear Regression From Scratch
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
                        className="mx-auto max-w-4xl text-center"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                            Linear Regression From Scratch
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            No model.fit().
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                The math lives in the code.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Instead of relying on a machine-learning framework, the project
                            directly implements the ordinary least-squares calculations
                            needed to train a simple linear regression model.
                        </p>
                    </motion.div>

                    {/* Regression flow */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-14 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#050b18]/85 p-7 backdrop-blur-xl sm:p-8"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                            Training Flow
                        </p>

                        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
                            {[
                                {
                                    number: "01",
                                    title: "Normalize",
                                    text: "Scale feature and target values before training.",
                                },
                                {
                                    number: "02",
                                    title: "Calculate Means",
                                    text: "Compute the average X and Y values.",
                                },
                                {
                                    number: "03",
                                    title: "Calculate Slope",
                                    text: "Use covariance and variance terms to determine the line's slope.",
                                },
                                {
                                    number: "04",
                                    title: "Calculate Intercept",
                                    text: "Use the slope and dataset means to position the regression line.",
                                },
                                {
                                    number: "05",
                                    title: "Predict",
                                    text: "Apply the trained line to a new feature value.",
                                },
                            ].map((step) => (
                                <div
                                    key={step.number}
                                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                                >
                                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-400">
                                        {step.number}
                                    </p>

                                    <h3 className="mt-3 text-xl font-black text-white">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-400">
                                        {step.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Mathematical breakdown */}
                    <div className="mt-8 grid gap-6 lg:grid-cols-2">
                        <motion.article
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="rounded-[1.75rem] border border-purple-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                                Model Training
                            </p>

                            <h3 className="mt-4 text-3xl font-black text-white">
                                Find the best-fit line
                            </h3>

                            <p className="mt-5 leading-7 text-slate-400">
                                The implementation first calculates the feature and target
                                means. It then measures how the values vary together
                                compared with how much the feature itself varies.
                            </p>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                    Slope
                                </p>

                                <p className="mt-3 overflow-x-auto font-mono text-sm leading-7 text-purple-300">
                                    Σ((xᵢ - x̄)(yᵢ - ȳ))
                                    <br />
                                    ───────────────────
                                    <br />
                                    Σ((xᵢ - x̄)²)
                                </p>
                            </div>

                            <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                    Intercept
                                </p>

                                <p className="mt-3 font-mono text-lg text-cyan-300">
                                    b = ȳ - m × x̄
                                </p>
                            </div>
                        </motion.article>

                        <motion.article
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.06,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="rounded-[1.75rem] border border-emerald-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                                Inference
                            </p>

                            <h3 className="mt-4 text-3xl font-black text-white">
                                Turn the trained line into a prediction
                            </h3>

                            <p className="mt-5 leading-7 text-slate-400">
                                Once slope and intercept are known, prediction becomes a
                                direct mathematical operation using the standard linear
                                equation.
                            </p>

                            <div className="mt-6 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-400">
                                    Prediction
                                </p>

                                <p className="mt-4 font-mono text-3xl font-black text-white">
                                    ŷ = mx + b
                                </p>

                                <p className="mt-4 text-sm leading-6 text-slate-400">
                                    The incoming feature value is transformed using the same
                                    preprocessing assumptions as training, passed through the
                                    regression equation, and then converted back to the
                                    original scale.
                                </p>
                            </div>

                            <div className="mt-5 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.04] p-5">
                                <p className="text-sm font-semibold leading-6 text-slate-300">
                                    This implementation turns the mathematical definition of
                                    simple linear regression directly into executable C++.
                                </p>
                            </div>
                        </motion.article>
                    </div>

                    {/* Defensive math */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 rounded-[2rem] border border-amber-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl sm:p-8"
                    >
                        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                                    Numerical Validation
                                </p>

                                <h3 className="mt-4 text-3xl font-black text-white">
                                    The formula is only valid when the data is valid.
                                </h3>

                                <p className="mt-5 leading-7 text-slate-400">
                                    Training includes explicit checks for several invalid
                                    conditions that would otherwise produce meaningless or
                                    undefined model parameters.
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                {[
                                    "Empty dataset",
                                    "Mismatched X / Y sizes",
                                    "Single training observation",
                                    "Near-zero predictor variance",
                                    "NaN slope",
                                    "NaN intercept",
                                ].map((check) => (
                                    <div
                                        key={check}
                                        className="rounded-xl border border-amber-400/15 bg-amber-400/[0.04] p-4 text-sm font-semibold text-slate-300"
                                    >
                                        {check}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Why manual implementation */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/[0.05] via-blue-500/[0.03] to-transparent p-7 sm:p-8"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                            Why Implement It Manually?
                        </p>

                        <p className="mt-4 max-w-5xl text-xl font-semibold leading-9 text-slate-200 sm:text-2xl">
                            The goal was not to build the most sophisticated model. It was
                            to understand how a mathematical model becomes working software:
                            data in, assumptions validated, parameters calculated, and a
                            prediction produced.
                        </p>
                    </motion.div>
                </div>
            </section>
            {/* ========================================================================
    Data Acquisition & Preprocessing
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
                        className="mx-auto max-w-4xl text-center"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                            Data Acquisition & Preprocessing
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            Raw external data
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                into model-ready C++ structures.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Before regression can happen, the project has to retrieve remote
                            datasets, persist them locally, parse CSV records, validate values,
                            and convert text-based data into typed numerical inputs.
                        </p>
                    </motion.div>

                    {/* Acquisition */}
                    <div className="mt-14 grid gap-6 lg:grid-cols-2">
                        <motion.article
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="rounded-[1.75rem] border border-blue-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                                Housing Data
                            </p>

                            <h3 className="mt-4 text-3xl font-black text-white">
                                Connecticut Open Data
                            </h3>

                            <p className="mt-5 leading-7 text-slate-400">
                                The housing pipeline performs an HTTP request against a
                                Connecticut public-data source, collects the response through
                                libcurl, and persists it locally before parsing.
                            </p>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                                <p className="font-mono text-sm text-blue-300">
                                    HTTP → libcurl → housing_by_state.csv
                                </p>
                            </div>
                        </motion.article>

                        <motion.article
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.06,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="rounded-[1.75rem] border border-purple-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                                Stock Data
                            </p>

                            <h3 className="mt-4 text-3xl font-black text-white">
                                Alpha Vantage
                            </h3>

                            <p className="mt-5 leading-7 text-slate-400">
                                The stock fetcher builds a daily time-series request from a
                                ticker symbol, retrieves CSV data through libcurl, and stores
                                the response locally for later model processing.
                            </p>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                                <p className="font-mono text-sm text-purple-300">
                                    Ticker → API Request → historical_stock_prices.csv
                                </p>
                            </div>
                        </motion.article>
                    </div>

                    {/* Why CSV boundary matters */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 rounded-[2rem] border border-cyan-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl sm:p-8"
                    >
                        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                    Data Boundary
                                </p>

                                <h3 className="mt-4 text-3xl font-black text-white">
                                    Network acquisition and modeling are separated.
                                </h3>

                                <p className="mt-5 leading-7 text-slate-400">
                                    Persisting API responses as CSV creates a simple boundary
                                    between downloading data and running the regression model.
                                    Previously downloaded data can be processed again without
                                    requiring another network request.
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-5">
                                {[
                                    "External Source",
                                    "HTTP",
                                    "CSV",
                                    "Parser",
                                    "Model",
                                ].map((step, index) => (
                                    <div
                                        key={step}
                                        className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-center"
                                    >
                                        <p className="text-xs font-black text-cyan-400">
                                            {String(index + 1).padStart(2, "0")}
                                        </p>

                                        <p className="mt-2 text-sm font-semibold text-slate-300">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Typed structures */}
                    <div className="mt-8 grid gap-6 lg:grid-cols-2">
                        <motion.article
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6 }}
                            className="rounded-[1.75rem] border border-emerald-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                                StockData
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                Six parsed market fields
                            </h3>

                            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {[
                                    "date",
                                    "open",
                                    "high",
                                    "low",
                                    "close",
                                    "volume",
                                ].map((field) => (
                                    <div
                                        key={field}
                                        className="rounded-xl border border-emerald-400/10 bg-emerald-400/[0.03] p-4"
                                    >
                                        <p className="font-mono text-sm text-emerald-300">
                                            {field}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-6 text-sm leading-6 text-slate-400">
                                Raw CSV rows become strongly typed C++ records before feature
                                and target extraction begins.
                            </p>
                        </motion.article>

                        <motion.article
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.06 }}
                            className="rounded-[1.75rem] border border-amber-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                                HousingData
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                Two numerical model fields
                            </h3>

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                {[
                                    "grLivArea",
                                    "salePrice",
                                ].map((field) => (
                                    <div
                                        key={field}
                                        className="rounded-xl border border-amber-400/10 bg-amber-400/[0.03] p-4"
                                    >
                                        <p className="font-mono text-sm text-amber-300">
                                            {field}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/[0.05] p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-400">
                                    Naming mismatch
                                </p>

                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                    The current parser assigns property-assessment data to
                                    the field named <span className="font-mono text-slate-300">grLivArea</span>,
                                    so the field name does not accurately describe the value
                                    currently stored in it.
                                </p>
                            </div>
                        </motion.article>
                    </div>

                    {/* Parsing and validation */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 rounded-[2rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl sm:p-8"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                            Preprocessing & Validation
                        </p>

                        <h3 className="mt-4 text-3xl font-black text-white">
                            Convert text into safe numerical inputs.
                        </h3>

                        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    title: "Header Removal",
                                    text: "CSV headers are skipped before record processing begins.",
                                },
                                {
                                    title: "Numeric Conversion",
                                    text: "Text fields are converted into doubles before entering the model.",
                                },
                                {
                                    title: "Invalid Values",
                                    text: "Housing conversion failures and NaN values are rejected.",
                                },
                                {
                                    title: "Typed Storage",
                                    text: "Valid records are stored in vectors of domain-specific structs.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                                >
                                    <h4 className="font-black text-white">
                                        {item.title}
                                    </h4>

                                    <p className="mt-3 text-sm leading-6 text-slate-400">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CSV limitation */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 rounded-[2rem] border border-red-400/15 bg-red-400/[0.025] p-7 sm:p-8"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">
                            Parsing Limitation
                        </p>

                        <h3 className="mt-4 text-3xl font-black text-white">
                            The CSV parser is intentionally lightweight.
                        </h3>

                        <p className="mt-5 max-w-4xl leading-7 text-slate-400">
                            The current parsing logic assumes simple comma-delimited fields
                            and does not fully support quoted CSV values containing embedded
                            commas. A production version should use a robust CSV parser or
                            implement proper quote-aware parsing.
                        </p>
                    </motion.div>
                </div>
            </section>
            {/* ========================================================================
    Defensive Engineering & Reliability
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
                        className="mx-auto max-w-4xl text-center"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                            Defensive Engineering
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            Validate assumptions
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                before trusting the math.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Regression code can fail silently if the dataset is malformed,
                            undersized, numerically degenerate, or missing entirely. The
                            implementation includes explicit checks around both data
                            acquisition and model training.
                        </p>
                    </motion.div>

                    {/* Reliability grid */}
                    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                label: "FILE / 01",
                                title: "Missing files",
                                text: "CSV readers verify that input files can be opened before parsing begins.",
                                tone: "cyan",
                            },
                            {
                                label: "DATA / 02",
                                title: "Empty datasets",
                                text: "Model training rejects empty feature or target collections.",
                                tone: "emerald",
                            },
                            {
                                label: "DATA / 03",
                                title: "Mismatched vectors",
                                text: "Feature and target arrays must contain the same number of observations.",
                                tone: "blue",
                            },
                            {
                                label: "MATH / 04",
                                title: "Single observation",
                                text: "Training rejects one-point datasets because a meaningful regression line cannot be fit.",
                                tone: "purple",
                            },
                            {
                                label: "MATH / 05",
                                title: "Near-zero variance",
                                text: "The denominator is checked before division to avoid invalid slope calculations.",
                                tone: "amber",
                            },
                            {
                                label: "MATH / 06",
                                title: "NaN parameters",
                                text: "Calculated slope and intercept values are validated before predictions are trusted.",
                                tone: "red",
                            },
                        ].map((item, index) => (
                            <motion.article
                                key={item.label}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.04,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-[#071022]/90"
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                    {item.label}
                                </p>

                                <h3 className="mt-4 text-2xl font-black text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-400">
                                    {item.text}
                                </p>
                            </motion.article>
                        ))}
                    </div>

                    {/* Network reliability */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-[#050b18]/85 p-7 backdrop-blur-xl sm:p-8"
                    >
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                    Network Reliability
                                </p>

                                <h3 className="mt-4 text-3xl font-black text-white">
                                    Basic safeguards exist,
                                    but production handling would go further.
                                </h3>

                                <p className="mt-5 leading-7 text-slate-400">
                                    The project checks libcurl initialization and request
                                    failure conditions, but it does not yet implement the
                                    full network reliability behavior expected in a
                                    production data-ingestion service.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-5">
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-400">
                                        Current Handling
                                    </p>

                                    <ul className="mt-4 space-y-3 text-sm text-slate-300">
                                        <li>→ CURL initialization checks</li>
                                        <li>→ Request failure detection</li>
                                        <li>→ Output-file creation checks</li>
                                        <li>→ Empty-data handling</li>
                                    </ul>
                                </div>

                                <div className="rounded-2xl border border-amber-400/15 bg-amber-400/[0.04] p-5">
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-400">
                                        Future Reliability
                                    </p>

                                    <ul className="mt-4 space-y-3 text-sm text-slate-300">
                                        <li>→ HTTP status validation</li>
                                        <li>→ Explicit request timeouts</li>
                                        <li>→ Retry strategy</li>
                                        <li>→ Rate-limit handling</li>
                                        <li>→ Response-content validation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Security / API key */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 rounded-[2rem] border border-red-400/15 bg-red-400/[0.025] p-7 sm:p-8"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">
                            Credential Management
                        </p>

                        <h3 className="mt-4 text-3xl font-black text-white">
                            One implementation detail should be corrected before publication.
                        </h3>

                        <p className="mt-5 max-w-4xl leading-7 text-slate-400">
                            The reviewed implementation contains an Alpha Vantage API key
                            directly in source code. A production-ready version should load
                            the credential from an environment variable or secret-management
                            system instead.
                        </p>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl border border-red-400/15 bg-red-400/[0.04] p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-red-400">
                                    Current Risk
                                </p>

                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                    A secret committed to a public repository should be
                                    considered exposed, even if it is removed from the latest
                                    version later.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-5">
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-400">
                                    Better Design
                                </p>

                                <p className="mt-3 font-mono text-sm text-emerald-300">
                                    std::getenv("ALPHAVANTAGE_API_KEY")
                                </p>

                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                    The exposed credential should be rotated and the
                                    replacement loaded outside source control.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Reliability takeaway */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
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
                            Numerical code is only as trustworthy as the assumptions around
                            it. File handling, dataset validation, variance checks, and
                            model-parameter validation are part of the algorithm’s
                            correctness, not separate concerns.
                        </p>
                    </motion.div>
                </div>
            </section>
{/* ========================================================================
    Engineering Decisions, Limitations & Future Improvements
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
            className="mx-auto max-w-4xl text-center"
        >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Engineering Decisions
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                Simple choices.
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                    Real tradeoffs.
                </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The project was intentionally scoped around understanding the
                mechanics of regression and data pipelines, so several design
                choices favor clarity and learning over production complexity.
            </p>
        </motion.div>

        {/* Engineering decisions */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
            <motion.article
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-[1.75rem] border border-purple-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
            >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                    Decision / 01
                </p>

                <h3 className="mt-4 text-2xl font-black text-white">
                    Implement regression manually
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                    Rather than relying on a mature ML library, the project
                    calculates the model parameters directly. This makes the
                    mathematics visible and understandable, but also increases
                    the chance of implementation and numerical mistakes.
                </p>
            </motion.article>

            <motion.article
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.6,
                    delay: 0.06,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-[1.75rem] border border-cyan-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
            >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                    Decision / 02
                </p>

                <h3 className="mt-4 text-2xl font-black text-white">
                    Persist API responses as CSV
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                    Saving downloaded data locally creates a clean boundary
                    between network acquisition and model execution. The tradeoff
                    is that file-based workflows introduce stale-data and parsing
                    concerns.
                </p>
            </motion.article>

            <motion.article
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-[1.75rem] border border-emerald-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
            >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                    Decision / 03
                </p>

                <h3 className="mt-4 text-2xl font-black text-white">
                    Normalize numerical inputs
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                    Scaling values keeps the numerical range easier to work with.
                    The stock pipeline applies the same transformation during
                    training and prediction, while the housing path currently
                    needs that consistency corrected.
                </p>
            </motion.article>

            <motion.article
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.6,
                    delay: 0.06,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-[1.75rem] border border-amber-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
            >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                    Decision / 04
                </p>

                <h3 className="mt-4 text-2xl font-black text-white">
                    Use simple linear regression
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                    A single-feature linear model is easy to interpret and
                    implement from scratch. The tradeoff is that it cannot capture
                    nonlinear behavior or interactions between multiple
                    predictors.
                </p>
            </motion.article>
        </div>

        {/* Current limitations */}
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 rounded-[2rem] border border-red-400/15 bg-red-400/[0.025] p-7 sm:p-8"
        >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">
                Current Limitations
            </p>

            <h3 className="mt-4 text-3xl font-black text-white">
                What this project does not claim
            </h3>

            <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                    {
                        title: "No validated accuracy",
                        text: "The project does not include R², MAE, RMSE, residual analysis, or a train/test split.",
                    },
                    {
                        title: "Not stock forecasting",
                        text: "The stock model estimates a same-day closing price from an opening price rather than predicting a future trading day.",
                    },
                    {
                        title: "Housing mapping issue",
                        text: "The current housing parser uses property assessment where the field name suggests living area.",
                    },
                    {
                        title: "Housing normalization mismatch",
                        text: "Training and prediction currently use different scaling factors and should be aligned.",
                    },
                    {
                        title: "No automated tests",
                        text: "No unit or integration test suite was supplied with the implementation.",
                    },
                    {
                        title: "Basic CSV parser",
                        text: "The parser assumes simple comma-delimited rows and is not fully quote-aware.",
                    },
                ].map((item) => (
                    <div
                        key={item.title}
                        className="rounded-2xl border border-white/10 bg-[#050b18]/60 p-5"
                    >
                        <h4 className="font-black text-white">
                            {item.title}
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>

        {/* Architecture improvement */}
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 overflow-hidden rounded-[2rem] border border-blue-400/15 bg-[#050b18]/85 p-7 backdrop-blur-xl sm:p-8"
        >
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                        Refactoring Opportunity
                    </p>

                    <h3 className="mt-4 text-3xl font-black text-white">
                        One reusable regression class
                    </h3>

                    <p className="mt-5 leading-7 text-slate-400">
                        The housing and stock regression implementations contain
                        overlapping training logic. A cleaner architecture would
                        extract the shared mathematics into one reusable model
                        abstraction.
                    </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
                    <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                        <div className="rounded-xl border border-blue-400/15 bg-blue-400/[0.04] p-5 text-center">
                            <p className="font-black text-white">
                                Housing Pipeline
                            </p>
                        </div>

                        <span
                            aria-hidden="true"
                            className="hidden text-xl text-cyan-400 sm:block"
                        >
                            →
                        </span>

                        <div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] p-5 text-center">
                            <p className="font-black text-white">
                                LinearRegression
                            </p>
                        </div>
                    </div>

                    <div className="my-4 flex justify-center">
                        <span className="text-cyan-400">↑</span>
                    </div>

                    <div className="mx-auto max-w-[14rem] rounded-xl border border-purple-400/15 bg-purple-400/[0.04] p-5 text-center">
                        <p className="font-black text-white">
                            Stock Pipeline
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Future improvements */}
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 rounded-[2rem] border border-emerald-400/20 bg-[#050b18]/85 p-7 backdrop-blur-xl sm:p-8"
        >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                Future Engineering
            </p>

            <h3 className="mt-4 text-3xl font-black text-white">
                What I would build next
            </h3>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                    {
                        title: "Correct Housing Feature Mapping",
                        text: "Align the dataset, structure, parser, documentation, and model around the intended housing predictor.",
                    },
                    {
                        title: "Consistent Normalization",
                        text: "Apply the exact same transformations during model training and inference.",
                    },
                    {
                        title: "Model Evaluation",
                        text: "Introduce train/test splitting and calculate R², MAE, and RMSE.",
                    },
                    {
                        title: "Automated Testing",
                        text: "Test regression math, known datasets, parsers, invalid inputs, and numerical edge cases.",
                    },
                    {
                        title: "Robust Data Ingestion",
                        text: "Use quote-aware CSV parsing, status-code checks, retries, timeouts, and API response validation.",
                    },
                    {
                        title: "Secure Configuration",
                        text: "Rotate exposed credentials and load API secrets through environment configuration.",
                    },
                    {
                        title: "Reusable Model Abstraction",
                        text: "Extract duplicated training logic into a shared LinearRegression class with stored preprocessing metadata.",
                    },
                    {
                        title: "Multiple Regression",
                        text: "Expand beyond one feature so housing and stock models can represent interactions among several predictors.",
                    },
                    {
                        title: "Model Persistence",
                        text: "Serialize trained parameters and preprocessing configuration so inference does not require retraining.",
                    },
                    {
                        title: "Service Layer",
                        text: "Expose prediction and model metadata through a small REST API backed by the C++ engine.",
                    },
                    {
                        title: "Interactive Dashboard",
                        text: "Visualize datasets, regression lines, residuals, metrics, and predictions in a responsive frontend.",
                    },
                    {
                        title: "Containerized Delivery",
                        text: "Package the data pipeline and prediction service with Docker for repeatable local and cloud execution.",
                    },
                ].map((item) => (
                    <div
                        key={item.title}
                        className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.025] p-5"
                    >
                        <h4 className="font-black text-white">
                            {item.title}
                        </h4>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>

        {/* Growth takeaway */}
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/[0.05] via-blue-500/[0.03] to-transparent p-7 sm:p-8"
        >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                Engineering Growth
            </p>

            <p className="mt-4 max-w-5xl text-xl font-semibold leading-9 text-slate-200 sm:text-2xl">
                Reviewing this project reinforced that building the model is only
                one part of the problem. Data schemas, preprocessing consistency,
                validation, evaluation, secure configuration, and testability all
                determine whether the final result can be trusted.
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
                        className="mx-auto max-w-4xl text-center"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                            System Architecture
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            Domain-specific ingestion.
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                Shared numerical foundation.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            The stock and housing paths begin with different schemas,
                            but both follow the same engineering lifecycle: acquire,
                            persist, parse, validate, transform, train, and predict.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-14 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#050b18]/85 p-6 backdrop-blur-xl sm:p-8"
                    >
                        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
                            <div className="space-y-4">
                                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-5">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
                                        Market Domain
                                    </p>
                                    <h3 className="mt-3 text-xl font-black text-white">
                                        Alpha Vantage Daily Records
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-400">
                                        Date, open, high, low, close, and volume are parsed
                                        into typed stock records before feature extraction.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-blue-400/20 bg-blue-400/[0.04] p-5">
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-400">
                                        Housing Domain
                                    </p>
                                    <h3 className="mt-3 text-xl font-black text-white">
                                        Connecticut Property Records
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-400">
                                        Public real-estate rows are filtered and converted
                                        into the numerical feature and target pair used by
                                        the housing model.
                                    </p>
                                </div>
                            </div>

                            <div className="hidden items-center justify-center px-2 lg:flex">
                                <span className="text-3xl text-cyan-400">→</span>
                            </div>

                            <div className="rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.04] p-5 sm:p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
                                    Shared Processing Lifecycle
                                </p>

                                <div className="mt-5 space-y-3">
                                    {[
                                        "HTTP acquisition with libcurl",
                                        "Local CSV persistence",
                                        "Schema-aware parsing",
                                        "Typed C++ record construction",
                                        "Input and numerical validation",
                                        "Feature and target extraction",
                                        "Consistent normalization",
                                        "OLS parameter calculation",
                                        "Command-line prediction",
                                    ].map((step, index) => (
                                        <motion.div
                                            key={step}
                                            initial={{ opacity: 0, x: 14 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.035 }}
                                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-3.5"
                                        >
                                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-cyan-400/[0.07] text-[0.65rem] font-black text-cyan-300">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <p className="text-sm font-semibold text-slate-300">
                                                {step}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ========================================================================
                Why Linear Regression
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
                        className="mx-auto max-w-4xl text-center"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                            Why Linear Regression?
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            A transparent baseline
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                before model complexity.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Simple linear regression was selected because every
                            transformation and parameter remains explainable. That made it
                            appropriate for studying the boundary between mathematics,
                            data quality, and working software.
                        </p>
                    </motion.div>

                    <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                label: "Interpretability",
                                text: "Slope and intercept provide a direct explanation of how the selected feature relates to the target.",
                            },
                            {
                                label: "Implementation Depth",
                                text: "The complete training process can be implemented and validated directly in C++.",
                            },
                            {
                                label: "Baseline Value",
                                text: "A simple model establishes a reference point before introducing more complex algorithms.",
                            },
                            {
                                label: "Visible Assumptions",
                                text: "Linearity, variance, preprocessing consistency, and data quality cannot be hidden behind a framework.",
                            },
                        ].map((item, index) => (
                            <motion.article
                                key={item.label}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20"
                            >
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
                                    {String(index + 1).padStart(2, "0")}
                                </p>
                                <h3 className="mt-4 text-xl font-black text-white">
                                    {item.label}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                    {item.text}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================================
                Engineering Insights
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
                        className="mx-auto max-w-4xl text-center"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                            Engineering Insights
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            What the project revealed
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                beyond the regression formula.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            The most important lessons came from the boundaries around the
                            model: data contracts, repeatable preprocessing, numerical
                            safeguards, and honest evaluation.
                        </p>
                    </motion.div>

                    <div className="mt-14 grid gap-5 lg:grid-cols-3">
                        {[
                            {
                                title: "Data contracts matter",
                                text: "A misleading field name or incorrect column mapping can invalidate a mathematically correct model. Schema meaning must stay aligned from source to prediction.",
                            },
                            {
                                title: "Training and inference are one system",
                                text: "The transformation used during training must be preserved and reused during prediction. Preprocessing is part of the model contract.",
                            },
                            {
                                title: "Correct output is not validated output",
                                text: "A program producing a number is not enough. Holdout evaluation, error metrics, residual inspection, and repeatable tests are required to establish trust.",
                            },
                            {
                                title: "Persistence creates reproducibility",
                                text: "Saving source responses creates a stable input boundary that supports repeated experiments and isolates model work from network availability.",
                            },
                            {
                                title: "Manual math improves understanding",
                                text: "Implementing OLS directly exposes every assumption, denominator, transformation, and failure mode that a framework might otherwise conceal.",
                            },
                            {
                                title: "Security belongs in small projects",
                                text: "API credentials should remain outside source control from the beginning. Project size does not remove the need for secure configuration.",
                            },
                        ].map((item, index) => (
                            <motion.article
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.55, delay: index * 0.045 }}
                                whileHover={{ y: -6 }}
                                className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                            >
                                <span className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] text-sm font-black text-cyan-300">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 className="mt-5 text-2xl font-black text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-4 leading-7 text-slate-400">
                                    {item.text}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================================
                Project Evolution
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
                        className="mx-auto max-w-4xl text-center"
                    >
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                            Project Evolution
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            From formula
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                to complete data workflow.
                            </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            The project grew from implementing a regression equation into a
                            broader exercise in ingestion, parsing, domain modeling,
                            numerical validation, and engineering review.
                        </p>
                    </motion.div>

                    <div className="mx-auto mt-14 max-w-5xl">
                        {[
                            {
                                phase: "01",
                                title: "Implement the mathematical core",
                                text: "Translate means, covariance, variance, slope, intercept, and prediction into C++.",
                            },
                            {
                                phase: "02",
                                title: "Connect real-world datasets",
                                text: "Use libcurl to retrieve housing and market records instead of relying only on hardcoded samples.",
                            },
                            {
                                phase: "03",
                                title: "Build typed preprocessing paths",
                                text: "Parse source-specific schemas and convert CSV text into domain records and numerical vectors.",
                            },
                            {
                                phase: "04",
                                title: "Add validation around the model",
                                text: "Reject missing, mismatched, undersized, and numerically degenerate training data.",
                            },
                            {
                                phase: "05",
                                title: "Review assumptions and limitations",
                                text: "Identify schema mismatch, normalization inconsistency, evaluation gaps, parser limits, and credential risk.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.phase}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -22 : 22 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.25 }}
                                transition={{ duration: 0.55, delay: index * 0.04 }}
                                className="relative grid gap-4 border-l border-cyan-400/20 pb-10 pl-8 last:pb-0 sm:grid-cols-[auto_1fr]"
                            >
                                <span className="absolute -left-4 top-0 grid h-8 w-8 place-items-center rounded-full border border-cyan-400/30 bg-[#050b18] text-[0.65rem] font-black text-cyan-300">
                                    {item.phase}
                                </span>
                                <div>
                                    <h3 className="text-xl font-black text-white">
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 leading-7 text-slate-400">
                                        {item.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

{/* ========================================================================
    Technology Stack, Build & Run
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
            className="mx-auto max-w-4xl text-center"
        >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Technology & Build
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                Native C++.
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                    External data. Manual modeling.
                </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                The project combines standard-library C++, native HTTP
                integration, file-based preprocessing, and manually implemented
                regression logic without a machine-learning framework.
            </p>
        </motion.div>

        {/* Technology stack */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
                {
                    title: "C++17",
                    label: "Core Language",
                    text: "Used for regression logic, data structures, file processing, networking integration, validation, and command-line programs.",
                },
                {
                    title: "libcurl",
                    label: "HTTP Integration",
                    text: "Retrieves housing and stock datasets from external public-data services.",
                },
                {
                    title: "Alpha Vantage",
                    label: "Market Data",
                    text: "Supplies historical daily stock records including open, high, low, close, and volume.",
                },
                {
                    title: "Connecticut Open Data",
                    label: "Housing Data",
                    text: "Provides the public real-estate records consumed by the housing pipeline.",
                },
                {
                    title: "CSV",
                    label: "Data Boundary",
                    text: "Acts as the intermediate format between remote data acquisition and model preprocessing.",
                },
                {
                    title: "GNU Make / g++",
                    label: "Build Tooling",
                    text: "Defines the intended compilation workflow, C++17 flags, native linking, and cleanup targets.",
                },
            ].map((technology, index) => (
                <motion.article
                    key={technology.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.55,
                        delay: index * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-[#071022]/90"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                        {technology.label}
                    </p>

                    <h3 className="mt-4 text-2xl font-black text-white">
                        {technology.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-400">
                        {technology.text}
                    </p>
                </motion.article>
            ))}
        </div>

        {/* Build information */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <motion.article
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-[1.75rem] border border-cyan-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
            >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                    Compilation
                </p>

                <h3 className="mt-4 text-2xl font-black text-white">
                    Makefile-based build
                </h3>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 font-mono text-sm">
                    <p className="text-emerald-300">
                        $ make
                    </p>
                </div>

                <p className="mt-5 leading-7 text-slate-400">
                    The intended build compiles the C++ programs and links
                    libcurl for native HTTP support.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {[
                        "-std=c++17",
                        "-Wall",
                        "-Wextra",
                        "-lcurl",
                    ].map((flag) => (
                        <span
                            key={flag}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-300"
                        >
                            {flag}
                        </span>
                    ))}
                </div>
            </motion.article>

            <motion.article
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.6,
                    delay: 0.06,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-[1.75rem] border border-purple-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
            >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                    Intended Programs
                </p>

                <h3 className="mt-4 text-2xl font-black text-white">
                    Four command-line targets
                </h3>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                        "linear_regression",
                        "housing_data_fetcher",
                        "stock_price_predictor",
                        "stock_regression",
                    ].map((program) => (
                        <div
                            key={program}
                            className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                        >
                            <p className="font-mono text-sm text-purple-300">
                                {program}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 rounded-2xl border border-amber-400/15 bg-amber-400/[0.04] p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-400">
                        Build-system note
                    </p>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                        The reviewed Makefile contains filename and dependency
                        inconsistencies that should be cleaned up before
                        claiming a fully reproducible build.
                    </p>
                </div>
            </motion.article>
        </div>
    </div>
</section>

{/* ========================================================================
    Case Study Closing CTA
========================================================================= */}
<section className="px-6 pb-10 pt-10 sm:px-8 lg:px-12">
    <div className="mx-auto w-full max-w-7xl">
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-[#050b18]/90 p-8 shadow-[0_0_50px_rgba(34,211,238,0.08)] backdrop-blur-xl sm:p-10"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-500/[0.09] blur-3xl"
            />

            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                        Stock & Housing Regression Engine
                    </p>

                    <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                        From external data
                        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                            to a model built by hand.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                        This project demonstrates C++ programming, mathematical
                        algorithm implementation, API integration, CSV
                        preprocessing, typed data modeling, numerical validation,
                        and the complete flow from data acquisition to prediction.
                    </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                    <a
                        href="https://github.com/dmm-dev228/Stock-Housing-Price-Predictor"
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/[0.06] px-6 py-3.5 font-semibold text-cyan-300 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-400/[0.1] hover:text-white"
                    >
                        View GitHub

                        <span
                            aria-hidden="true"
                            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                            ↗
                        </span>
                    </a>

                    <Link
                        to="/projects"
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-slate-300 transition duration-200 hover:border-cyan-300/30 hover:text-white"
                    >
                        <span aria-hidden="true">
                            ←
                        </span>

                        All Projects
                    </Link>
                </div>
            </div>
        </motion.div>
    </div>
</section>
        </main>
    );
}

export default StockHousingProject;