import { Link } from "react-router-dom";
import { motion } from "motion/react";

import connectMScreenshot from "../../assets/projects/ConnectM.png";

/*
 * ============================================================================
 * ConnectMProject
 * ============================================================================
 *
 * Detailed engineering case study for ConnectM.
 *
 * This page focuses on:
 * - Configurable N x N gameplay
 * - M-in-a-row victory conditions
 * - Minimax search
 * - Alpha-Beta pruning
 * - Recursive backtracking
 * - Generalized win detection
 * ============================================================================
 */

const technologies = [
    "C++17",
    "Minimax",
    "Alpha-Beta Pruning",
    "Recursion",
    "Backtracking",
];

const board = [
    [".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "."],
    [".", ".", "X", ".", ".", "."],
    [".", "O", "X", "O", ".", "."],
    ["X", "O", "X", "X", "O", "."],
    ["O", "X", "O", "O", "X", "."],
];

function ConnectMProject() {
    return (
        <main className="relative pb-28">
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
                                Algorithms & Artificial Intelligence
                            </div>

                            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                                Configurable Strategy Game
                            </p>

                            <h1 className="mt-3 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                                ConnectM
                            </h1>

                            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-300">
                                A configurable C++ strategy game where a human
                                competes against an AI powered by depth-limited
                                Minimax search and Alpha-Beta pruning.
                            </p>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
                                Rather than hard-coding traditional Connect Four
                                rules, ConnectM supports runtime-configurable
                                N × N boards and M-in-a-row victory conditions.
                                The main engineering focus is recursive
                                adversarial search, reversible board simulation,
                                and generalized win detection.
                            </p>

                            {/* Core stack */}
                            <div className="mt-10">
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                                    Core Concepts
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
                                    ["5", "Search Depth"],
                                    ["4", "Win Directions"],
                                    ["N×N", "Board"],
                                    ["M", "Win Condition"],
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
                            Algorithm Visual
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
                                {/* Header */}
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                            AI Decision Engine
                                        </p>

                                        <h2 className="mt-2 text-2xl font-black text-white">
                                            Minimax Search
                                        </h2>
                                    </div>

                                    <span className="rounded-full border border-purple-400/25 bg-purple-400/[0.06] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-purple-300">
                                        Depth 5
                                    </span>
                                </div>

                                {/* Board */}
                                {/* Real ConnectM application preview */}
                                {/* ========================================================================
    Project Visual Overview
========================================================================= */}
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
                                            <div className="mb-8 max-w-3xl">
                                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                                                    Visual Overview
                                                </p>

                                                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                                                    Gameplay meets
                                                    <span className="bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                                        {" "}adversarial search.
                                                    </span>
                                                </h2>
                                            </div>

                                            <div className="relative">
                                                {/* Ambient glow behind artwork */}
                                                <div
                                                    aria-hidden="true"
                                                    className="pointer-events-none absolute -inset-10 rounded-full bg-blue-500/[0.07] blur-3xl"
                                                />

                                                <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-[#050b18]/90 p-2 shadow-[0_0_55px_rgba(34,211,238,0.08)] backdrop-blur-xl sm:p-3">
                                                    <img
                                                        src={connectMScreenshot}
                                                        alt="Concept artwork visualizing ConnectM gameplay, Minimax search, Alpha-Beta pruning, backtracking, configurable board size, and AI search depth"
                                                        className="block h-auto w-full rounded-[1.5rem]"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#050b18]/70 p-5 sm:flex-row sm:items-center sm:justify-between">
                                                <p className="max-w-3xl text-sm leading-6 text-slate-400">
                                                    Concept artwork representing ConnectM's configurable game
                                                    mechanics and adversarial-search architecture.
                                                </p>

                                                <span className="shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                                                    AI-Generated Visualization
                                                </span>
                                            </div>
                                        </motion.div>
                                    </div>
                                </section>

                                {/* Search tree */}
                                {/* Search tree */}
<div className="mt-6 border-t border-white/10 pt-6">
                                    <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                                        Candidate Move Search
                                    </p>

                                    <div className="mt-7 flex justify-center">
                                        <div className="rounded-xl border border-purple-400/25 bg-purple-400/[0.07] px-5 py-3 text-center">
                                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-purple-300">
                                                AI
                                            </p>
                                            <p className="mt-1 text-sm font-bold text-white">
                                                Maximize
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mx-auto h-8 w-px bg-cyan-400/30" />

                                    <div className="grid grid-cols-3 gap-3">
                                        {["+0", "+1000", "+0"].map(
                                            (score, index) => (
                                                <div
                                                    key={`${score}-${index}`}
                                                    className={
                                                        score === "+1000"
                                                            ? "rounded-xl border border-emerald-400/30 bg-emerald-400/[0.06] p-4 text-center"
                                                            : "rounded-xl border border-white/10 bg-white/[0.025] p-4 text-center"
                                                    }
                                                >
                                                    <p
                                                        className={
                                                            score === "+1000"
                                                                ? "text-xl font-black text-emerald-400"
                                                                : "text-xl font-black text-slate-300"
                                                        }
                                                    >
                                                        {score}
                                                    </p>

                                                    <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                                                        Move {index + 1}
                                                    </p>
                                                </div>
                                            ),
                                        )}
                                    </div>

                                    <div className="mt-6 flex items-center justify-center gap-3 rounded-xl border border-red-400/15 bg-red-400/[0.04] p-4">
                                        <span className="text-red-400">
                                            ✕
                                        </span>

                                        <p className="text-sm font-semibold text-slate-300">
                                            Alpha-Beta pruning skips branches
                                            that cannot change the selected
                                            outcome.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* ========================================================================
    How the AI Thinks
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
                            How the AI Thinks
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            Simulate the future.
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                Choose the strongest branch.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Every valid AI move becomes the starting point for a recursive
                            search. The computer tries to maximize the resulting score while
                            assuming the human will always choose the response that minimizes
                            it.
                        </p>
                    </motion.div>

                    {/* Search flow */}
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
                            Search Flow
                        </p>

                        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                {
                                    number: "01",
                                    title: "Try a Move",
                                    text: "Place the AI disk into a valid column.",
                                },
                                {
                                    number: "02",
                                    title: "Search Responses",
                                    text: "Recursively simulate human and AI turns.",
                                },
                                {
                                    number: "03",
                                    title: "Evaluate",
                                    text: "Score terminal states as win, loss, or neutral.",
                                },
                                {
                                    number: "04",
                                    title: "Rollback",
                                    text: "Undo the move and evaluate the next branch.",
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

                    {/* Max / Min explanation */}
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
                                Maximizing Player
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                The AI searches for the highest score.
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                On AI turns, Minimax compares the available child states and
                                keeps the largest value. A computer victory evaluates to
                                +1000, so branches leading to a visible win are preferred.
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
                                Minimizing Player
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                The human is modeled as the strongest opponent.
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                On simulated human turns, the algorithm assumes the player
                                will choose the move that produces the lowest score for the
                                computer. This forces the AI to reason against strong
                                responses instead of optimistic ones.
                            </p>
                        </motion.article>
                    </div>

                    {/* Evaluation function */}
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
                        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                                    Evaluation Function
                                </p>

                                <h3 className="mt-4 text-3xl font-black text-white">
                                    Simple scoring. Clear tradeoff.
                                </h3>

                                <p className="mt-5 leading-7 text-slate-400">
                                    The current evaluation function only distinguishes
                                    terminal outcomes. That keeps the implementation easy to
                                    reason about, but strategically different nonterminal
                                    states can receive the same score at the search-depth
                                    boundary.
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-3">
                                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] p-5 text-center">
                                    <p className="text-3xl font-black text-emerald-400">
                                        +1000
                                    </p>

                                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                        AI Victory
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-red-400/20 bg-red-400/[0.05] p-5 text-center">
                                    <p className="text-3xl font-black text-red-400">
                                        -1000
                                    </p>

                                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                        Human Victory
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center">
                                    <p className="text-3xl font-black text-slate-300">
                                        0
                                    </p>

                                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                        Other State
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* ========================================================================
    Alpha-Beta Pruning & Backtracking
========================================================================= */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    {/* Section intro */}
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
                            Search Optimization
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            Search deeper.
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                Skip what cannot matter.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Minimax can generate a rapidly expanding game tree. ConnectM
                            combines Alpha-Beta pruning with reversible board updates so the
                            AI can avoid unnecessary branches while safely exploring
                            hypothetical moves.
                        </p>
                    </motion.div>

                    {/* Alpha-Beta section */}
                    <motion.article
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-14 overflow-hidden rounded-[2rem] border border-purple-400/20 bg-[#050b18]/85 p-7 backdrop-blur-xl sm:p-8"
                    >
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                                    Alpha-Beta Pruning
                                </p>

                                <h3 className="mt-4 text-3xl font-black text-white">
                                    Stop exploring branches that cannot change the decision.
                                </h3>

                                <p className="mt-5 leading-7 text-slate-400">
                                    Alpha tracks the best score currently available to the
                                    maximizing AI, while Beta tracks the best score currently
                                    available to the minimizing human. When Beta becomes less
                                    than or equal to Alpha, the remaining states in that
                                    branch cannot improve the result and are skipped.
                                </p>

                                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl border border-purple-400/15 bg-purple-400/[0.04] p-4">
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-purple-300">
                                            Alpha
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Best score currently available to the maximizing
                                            player.
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.04] p-4">
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-300">
                                            Beta
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Best score currently available to the minimizing
                                            player.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Pruning visual */}
                            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
                                <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                                    Simplified Search Tree
                                </p>

                                <div className="mt-7 flex justify-center">
                                    <div className="rounded-xl border border-purple-400/25 bg-purple-400/[0.07] px-5 py-3 text-center">
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-purple-300">
                                            AI
                                        </p>

                                        <p className="mt-1 text-sm font-bold text-white">
                                            Maximize
                                        </p>
                                    </div>
                                </div>

                                <div className="mx-auto h-8 w-px bg-purple-400/25" />

                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { label: "Branch A", score: "+4", pruned: false },
                                        { label: "Branch B", score: "+8", pruned: false },
                                        { label: "Branch C", score: "✕", pruned: true },
                                    ].map((branch) => (
                                        <div
                                            key={branch.label}
                                            className={
                                                branch.pruned
                                                    ? "rounded-xl border border-red-400/20 bg-red-400/[0.05] p-4 text-center opacity-70"
                                                    : "rounded-xl border border-white/10 bg-white/[0.025] p-4 text-center"
                                            }
                                        >
                                            <p
                                                className={
                                                    branch.pruned
                                                        ? "text-2xl font-black text-red-400"
                                                        : "text-2xl font-black text-slate-200"
                                                }
                                            >
                                                {branch.score}
                                            </p>

                                            <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                                                {branch.label}
                                            </p>

                                            {branch.pruned && (
                                                <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-red-400">
                                                    Pruned
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 rounded-xl border border-red-400/15 bg-red-400/[0.04] p-4">
                                    <p className="text-sm font-semibold text-slate-300">
                                        When <span className="text-red-400">β ≤ α</span>,
                                        remaining moves in that branch are no longer explored.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.article>

                    {/* Backtracking section */}
                    <motion.article
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.65,
                            delay: 0.08,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#050b18]/85 p-7 backdrop-blur-xl sm:p-8"
                    >
                        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                    Backtracking
                                </p>

                                <h3 className="mt-4 text-3xl font-black text-white">
                                    Reuse the same board without corrupting the real game.
                                </h3>

                                <p className="mt-5 leading-7 text-slate-400">
                                    Each hypothetical move temporarily changes the board.
                                    After the recursive search finishes exploring that
                                    branch, the move is undone before the next candidate is
                                    tested. This lets Minimax reuse one board state instead
                                    of permanently carrying simulated moves forward.
                                </p>
                            </div>

                            {/* Backtracking flow */}
                            <div className="grid gap-3 sm:grid-cols-4">
                                {[
                                    {
                                        number: "01",
                                        title: "Current State",
                                        tone: "slate",
                                    },
                                    {
                                        number: "02",
                                        title: "Make Move",
                                        tone: "cyan",
                                    },
                                    {
                                        number: "03",
                                        title: "Search",
                                        tone: "purple",
                                    },
                                    {
                                        number: "04",
                                        title: "Undo Move",
                                        tone: "emerald",
                                    },
                                ].map((step) => (
                                    <div
                                        key={step.number}
                                        className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center"
                                    >
                                        <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                                            {step.number}
                                        </p>

                                        <p className="mt-3 font-black text-white">
                                            {step.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                                State Invariant
                            </p>

                            <p className="mt-3 text-lg font-semibold leading-8 text-slate-200">
                                After every simulated branch, the board must return to the
                                exact state it had before the hypothetical move was applied.
                            </p>
                        </div>
                    </motion.article>

                    {/* Why both matter */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 grid gap-5 md:grid-cols-2"
                    >
                        <div className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/75 p-7 backdrop-blur-xl">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                                Search Efficiency
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                Alpha-Beta reduces unnecessary exploration.
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                It does not remove the combinatorial nature of the game
                                tree, but it can significantly reduce the number of states
                                visited when branches can be ruled out early.
                            </p>
                        </div>

                        <div className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/75 p-7 backdrop-blur-xl">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                State Correctness
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                Backtracking keeps hypothetical moves isolated.
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                Because the search mutates the same Board object, every
                                `makeMove()` must be paired with a matching `undoMove()` so
                                one branch does not affect another.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* ========================================================================
    Alpha-Beta Pruning & Backtracking
========================================================================= */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    {/* Section intro */}
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
                            Search Optimization
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            Search deeper.
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                Skip what cannot matter.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Minimax can generate a rapidly expanding game tree. ConnectM
                            combines Alpha-Beta pruning with reversible board updates so the
                            AI can avoid unnecessary branches while safely exploring
                            hypothetical moves.
                        </p>
                    </motion.div>

                    {/* Alpha-Beta section */}
                    <motion.article
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-14 overflow-hidden rounded-[2rem] border border-purple-400/20 bg-[#050b18]/85 p-7 backdrop-blur-xl sm:p-8"
                    >
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                                    Alpha-Beta Pruning
                                </p>

                                <h3 className="mt-4 text-3xl font-black text-white">
                                    Stop exploring branches that cannot change the decision.
                                </h3>

                                <p className="mt-5 leading-7 text-slate-400">
                                    Alpha tracks the best score currently available to the
                                    maximizing AI, while Beta tracks the best score currently
                                    available to the minimizing human. When Beta becomes less
                                    than or equal to Alpha, the remaining states in that
                                    branch cannot improve the result and are skipped.
                                </p>

                                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl border border-purple-400/15 bg-purple-400/[0.04] p-4">
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-purple-300">
                                            Alpha
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Best score currently available to the maximizing
                                            player.
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.04] p-4">
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-300">
                                            Beta
                                        </p>

                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Best score currently available to the minimizing
                                            player.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Pruning visual */}
                            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
                                <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                                    Simplified Search Tree
                                </p>

                                <div className="mt-7 flex justify-center">
                                    <div className="rounded-xl border border-purple-400/25 bg-purple-400/[0.07] px-5 py-3 text-center">
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-purple-300">
                                            AI
                                        </p>

                                        <p className="mt-1 text-sm font-bold text-white">
                                            Maximize
                                        </p>
                                    </div>
                                </div>

                                <div className="mx-auto h-8 w-px bg-purple-400/25" />

                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { label: "Branch A", score: "+4", pruned: false },
                                        { label: "Branch B", score: "+8", pruned: false },
                                        { label: "Branch C", score: "✕", pruned: true },
                                    ].map((branch) => (
                                        <div
                                            key={branch.label}
                                            className={
                                                branch.pruned
                                                    ? "rounded-xl border border-red-400/20 bg-red-400/[0.05] p-4 text-center opacity-70"
                                                    : "rounded-xl border border-white/10 bg-white/[0.025] p-4 text-center"
                                            }
                                        >
                                            <p
                                                className={
                                                    branch.pruned
                                                        ? "text-2xl font-black text-red-400"
                                                        : "text-2xl font-black text-slate-200"
                                                }
                                            >
                                                {branch.score}
                                            </p>

                                            <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-500">
                                                {branch.label}
                                            </p>

                                            {branch.pruned && (
                                                <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-red-400">
                                                    Pruned
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 rounded-xl border border-red-400/15 bg-red-400/[0.04] p-4">
                                    <p className="text-sm font-semibold text-slate-300">
                                        When <span className="text-red-400">β ≤ α</span>,
                                        remaining moves in that branch are no longer explored.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.article>

                    {/* Backtracking section */}
                    <motion.article
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.65,
                            delay: 0.08,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#050b18]/85 p-7 backdrop-blur-xl sm:p-8"
                    >
                        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                    Backtracking
                                </p>

                                <h3 className="mt-4 text-3xl font-black text-white">
                                    Reuse the same board without corrupting the real game.
                                </h3>

                                <p className="mt-5 leading-7 text-slate-400">
                                    Each hypothetical move temporarily changes the board.
                                    After the recursive search finishes exploring that
                                    branch, the move is undone before the next candidate is
                                    tested. This lets Minimax reuse one board state instead
                                    of permanently carrying simulated moves forward.
                                </p>
                            </div>

                            {/* Backtracking flow */}
                            <div className="grid gap-3 sm:grid-cols-4">
                                {[
                                    {
                                        number: "01",
                                        title: "Current State",
                                        tone: "slate",
                                    },
                                    {
                                        number: "02",
                                        title: "Make Move",
                                        tone: "cyan",
                                    },
                                    {
                                        number: "03",
                                        title: "Search",
                                        tone: "purple",
                                    },
                                    {
                                        number: "04",
                                        title: "Undo Move",
                                        tone: "emerald",
                                    },
                                ].map((step) => (
                                    <div
                                        key={step.number}
                                        className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center"
                                    >
                                        <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                                            {step.number}
                                        </p>

                                        <p className="mt-3 font-black text-white">
                                            {step.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                                State Invariant
                            </p>

                            <p className="mt-3 text-lg font-semibold leading-8 text-slate-200">
                                After every simulated branch, the board must return to the
                                exact state it had before the hypothetical move was applied.
                            </p>
                        </div>
                    </motion.article>

                    {/* Why both matter */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 grid gap-5 md:grid-cols-2"
                    >
                        <div className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/75 p-7 backdrop-blur-xl">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                                Search Efficiency
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                Alpha-Beta reduces unnecessary exploration.
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                It does not remove the combinatorial nature of the game
                                tree, but it can significantly reduce the number of states
                                visited when branches can be ruled out early.
                            </p>
                        </div>

                        <div className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/75 p-7 backdrop-blur-xl">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                State Correctness
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                Backtracking keeps hypothetical moves isolated.
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                Because the search mutates the same Board object, every
                                `makeMove()` must be paired with a matching `undoMove()` so
                                one branch does not affect another.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* ========================================================================
    Generalized Win Detection & Game Architecture
========================================================================= */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    {/* Section intro */}
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
                            Game Architecture
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            Generalized rules.
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                Reusable game logic.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            ConnectM does not assume a traditional Connect Four board.
                            Board size and the required winning sequence are runtime
                            parameters, so move handling and victory detection must work
                            across different configurations.
                        </p>
                    </motion.div>

                    {/* Configurable rules */}
                    <div className="mt-14 grid gap-6 lg:grid-cols-2">
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
                                Configurable Board
                            </p>

                            <h3 className="mt-4 text-3xl font-black text-white">
                                N × N board dimensions
                            </h3>

                            <p className="mt-5 leading-7 text-slate-400">
                                The board is stored dynamically rather than using a fixed
                                compile-time array. This allows the same game logic to
                                support different board sizes provided at runtime.
                            </p>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                                <p className="font-mono text-sm text-cyan-300">
                                    vector&lt;vector&lt;char&gt;&gt;
                                </p>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    A dynamically sized two-dimensional grid represents the
                                    current board state.
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
                                Configurable Victory
                            </p>

                            <h3 className="mt-4 text-3xl font-black text-white">
                                M-in-a-row win condition
                            </h3>

                            <p className="mt-5 leading-7 text-slate-400">
                                The number of connected disks required for victory is
                                independent from the board size. A 6 × 6 board can require
                                four connected disks, while other configurations can use a
                                different value of M.
                            </p>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                                <p className="font-mono text-sm text-purple-300">
                                    ./connectM 6 4 1
                                </p>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    6 × 6 board • 4-in-a-row victory • human starts first
                                </p>
                            </div>
                        </motion.article>
                    </div>

                    {/* Directional win detection */}
                    <motion.article
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-[#050b18]/85 p-7 backdrop-blur-xl sm:p-8"
                    >
                        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                                    Generalized Win Detection
                                </p>

                                <h3 className="mt-4 text-3xl font-black text-white">
                                    One directional algorithm.
                                    Four orientations.
                                </h3>

                                <p className="mt-5 leading-7 text-slate-400">
                                    Instead of writing four separate win-checking
                                    algorithms, ConnectM parameterizes direction using row
                                    and column increments. The same helper can then scan
                                    horizontally, vertically, and across both diagonal
                                    orientations.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    {
                                        symbol: "→",
                                        title: "Horizontal",
                                        offset: "(0, +1)",
                                    },
                                    {
                                        symbol: "↓",
                                        title: "Vertical",
                                        offset: "(+1, 0)",
                                    },
                                    {
                                        symbol: "↘",
                                        title: "Diagonal",
                                        offset: "(+1, +1)",
                                    },
                                    {
                                        symbol: "↗",
                                        title: "Reverse Diagonal",
                                        offset: "(-1, +1)",
                                    },
                                ].map((direction) => (
                                    <div
                                        key={direction.title}
                                        className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            <span className="text-3xl font-black text-emerald-400">
                                                {direction.symbol}
                                            </span>

                                            <span className="font-mono text-xs text-slate-500">
                                                {direction.offset}
                                            </span>
                                        </div>

                                        <p className="mt-4 font-black text-white">
                                            {direction.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-6">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                                Reusable Algorithm Design
                            </p>

                            <p className="mt-3 text-lg font-semibold leading-8 text-slate-200">
                                Direction becomes data instead of duplicated control flow,
                                allowing the same checking logic to handle every winning
                                orientation.
                            </p>
                        </div>
                    </motion.article>

                    {/* Architecture */}
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
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                            Object-Oriented Design
                        </p>

                        <h3 className="mt-4 text-3xl font-black text-white">
                            Separate game orchestration from board state.
                        </h3>

                        <div className="mt-9 grid gap-4 lg:grid-cols-[0.7fr_auto_1fr_auto_1fr] lg:items-center">
                            {/* CLI */}
                            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center">
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                    Entry Point
                                </p>

                                <h4 className="mt-3 text-xl font-black text-white">
                                    main.cpp
                                </h4>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    Parses runtime configuration and initializes the game.
                                </p>
                            </div>

                            <span
                                aria-hidden="true"
                                className="hidden text-xl text-cyan-400 lg:block"
                            >
                                →
                            </span>

                            {/* Game */}
                            <div className="rounded-2xl border border-purple-400/20 bg-purple-400/[0.04] p-5 text-center">
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-purple-400">
                                    Orchestration
                                </p>

                                <h4 className="mt-3 text-xl font-black text-white">
                                    Game
                                </h4>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    Controls turns, player input, AI search, evaluation, and
                                    the overall game lifecycle.
                                </p>
                            </div>

                            <span
                                aria-hidden="true"
                                className="hidden text-xl text-cyan-400 lg:block"
                            >
                                →
                            </span>

                            {/* Board */}
                            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-5 text-center">
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-emerald-400">
                                    State Model
                                </p>

                                <h4 className="mt-3 text-xl font-black text-white">
                                    Board
                                </h4>

                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    Owns grid state, validation, disk placement, rollback,
                                    draw detection, rendering, and winner detection.
                                </p>
                            </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="mt-8 grid gap-5 md:grid-cols-2">
                            <div className="rounded-2xl border border-purple-400/15 bg-purple-400/[0.03] p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                                    Game Responsibilities
                                </p>

                                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                                    <li>→ Human turn handling</li>
                                    <li>→ AI turn handling</li>
                                    <li>→ Minimax recursion</li>
                                    <li>→ Alpha-Beta pruning</li>
                                    <li>→ Board evaluation</li>
                                    <li>→ Player switching</li>
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.03] p-6">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                                    Board Responsibilities
                                </p>

                                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                                    <li>→ Validate columns</li>
                                    <li>→ Apply gravity-based moves</li>
                                    <li>→ Undo simulated moves</li>
                                    <li>→ Detect full board</li>
                                    <li>→ Detect victories</li>
                                    <li>→ Display current state</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Design takeaway */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 rounded-[2rem] border border-blue-400/15 bg-gradient-to-r from-blue-400/[0.05] via-cyan-400/[0.03] to-transparent p-7 sm:p-8"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                            Design Takeaway
                        </p>

                        <p className="mt-4 max-w-5xl text-xl font-semibold leading-9 text-slate-200 sm:text-2xl">
                            ConnectM is small enough to stay understandable, but structured
                            so the AI can operate against a clean board abstraction instead
                            of directly managing raw grid state throughout the search code.
                        </p>
                    </motion.div>
                </div>
            </section>
            {/* ========================================================================
    Complexity, Tradeoffs & Future Improvements
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
                            Complexity & Tradeoffs
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            Stronger search has
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                a computational cost.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            ConnectM deliberately limits search depth to keep AI decisions
                            computationally manageable as configurable board sizes increase
                            the number of possible future states.
                        </p>
                    </motion.div>

                    {/* Complexity overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"
                    >
                        <div className="rounded-[1.75rem] border border-cyan-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                Search Growth
                            </p>

                            <h3 className="mt-4 text-3xl font-black text-white">
                                O(bᵈ)
                            </h3>

                            <p className="mt-5 leading-7 text-slate-400">
                                If each state has roughly <span className="text-white">b</span>
                                legal moves and the algorithm searches to depth{" "}
                                <span className="text-white">d</span>, the number of states
                                explored grows exponentially in the general Minimax case.
                            </p>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                                <p className="text-sm font-semibold text-slate-300">
                                    Larger board
                                    <span className="mx-2 text-cyan-400">→</span>
                                    more candidate columns
                                    <span className="mx-2 text-cyan-400">→</span>
                                    larger search tree
                                </p>
                            </div>
                        </div>

                        <div className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                                Current Search Boundary
                            </p>

                            <h3 className="mt-4 text-3xl font-black text-white">
                                Five plies ahead
                            </h3>

                            <p className="mt-5 leading-7 text-slate-400">
                                The implementation searches to a fixed depth of five plies.
                                This bounds computation, but strategically important outcomes
                                beyond that horizon may remain invisible to the AI.
                            </p>

                            <div className="mt-6 grid grid-cols-5 gap-2">
                                {[1, 2, 3, 4, 5].map((depth) => (
                                    <div
                                        key={depth}
                                        className="rounded-xl border border-purple-400/15 bg-purple-400/[0.04] p-3 text-center"
                                    >
                                        <p className="text-lg font-black text-purple-300">
                                            {depth}
                                        </p>

                                        <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-slate-500">
                                            Ply
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Tradeoffs */}
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        <motion.article
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="rounded-[1.75rem] border border-amber-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                                Tradeoff / 01
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                Depth-limited search
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                A fixed depth keeps decision time bounded, but the AI cannot
                                guarantee globally optimal play when important consequences
                                occur outside the current search horizon.
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
                            className="rounded-[1.75rem] border border-red-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">
                                Tradeoff / 02
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                Terminal-only scoring
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                Wins and losses receive clear values, but strategically
                                different nonterminal positions all evaluate to zero at the
                                depth boundary.
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
                            className="rounded-[1.75rem] border border-cyan-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                Tradeoff / 03
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                Mutate and undo
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                Reusing the same board avoids explicitly copying the entire
                                state for each branch, but correctness depends on every
                                simulated move being rolled back exactly.
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
                            className="rounded-[1.75rem] border border-blue-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                                Tradeoff / 04
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                Dynamic board representation
                            </h3>

                            <p className="mt-4 leading-7 text-slate-400">
                                A nested vector supports runtime-configurable board sizes,
                                though a flattened contiguous representation could improve
                                memory locality in a future version.
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
                            What the current implementation does not claim
                        </h3>

                        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                "No positional heuristic evaluation",
                                "No automated test suite",
                                "No iterative deepening",
                                "No transposition-table caching",
                            ].map((limitation) => (
                                <div
                                    key={limitation}
                                    className="rounded-2xl border border-white/10 bg-[#050b18]/60 p-5"
                                >
                                    <p className="text-sm font-semibold leading-6 text-slate-300">
                                        {limitation}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Future engineering */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-8 overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-[#050b18]/85 p-7 backdrop-blur-xl sm:p-8"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
                            Future Engineering
                        </p>

                        <h3 className="mt-4 text-3xl font-black text-white">
                            How I would make the AI stronger
                        </h3>

                        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: "Heuristic Evaluation",
                                    text: "Score developing threats, connected sequences, defensive positions, and strategically valuable board states.",
                                },
                                {
                                    title: "Move Ordering",
                                    text: "Evaluate promising moves first so Alpha-Beta pruning can eliminate more branches earlier.",
                                },
                                {
                                    title: "Iterative Deepening",
                                    text: "Search progressively deeper while respecting a defined computation or time budget.",
                                },
                                {
                                    title: "Transposition Table",
                                    text: "Cache previously evaluated states so repeated positions do not require duplicate search work.",
                                },
                                {
                                    title: "Automated Tests",
                                    text: "Add unit coverage for win detection, move rollback, invalid configurations, and tactical AI decisions.",
                                },
                                {
                                    title: "Stronger Types",
                                    text: "Replace raw character/player values with enums and validate runtime configuration before starting the game.",
                                },
                            ].map((improvement) => (
                                <div
                                    key={improvement.title}
                                    className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.025] p-5"
                                >
                                    <h4 className="font-black text-white">
                                        {improvement.title}
                                    </h4>

                                    <p className="mt-3 text-sm leading-6 text-slate-400">
                                        {improvement.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Engineering takeaway */}
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
                            Engineering Takeaway
                        </p>

                        <p className="mt-4 max-w-5xl text-xl font-semibold leading-9 text-slate-200 sm:text-2xl">
                            ConnectM demonstrates that algorithm design is often a balance
                            between decision quality, computational cost, state correctness,
                            and how much information the evaluation function can extract
                            from a partially explored search tree.
                        </p>
                    </motion.div>
                </div>
            </section>
            {/* ========================================================================
    Build, Run & Project Links
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
                            Build & Run
                        </p>

                        <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                            Small runtime.
                            <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                Algorithm-heavy core.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            ConnectM has no external services, database, or runtime
                            dependencies beyond a C++17-compatible compiler and GNU Make.
                        </p>
                    </motion.div>

                    <div className="mt-14 grid gap-6 lg:grid-cols-2">
                        {/* Build */}
                        <motion.article
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                Compilation
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                GNU Make + g++
                            </h3>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 font-mono text-sm">
                                <p className="text-emerald-300">
                                    $ make
                                </p>
                            </div>

                            <p className="mt-5 leading-7 text-slate-400">
                                The Makefile compiles individual translation units before
                                linking them into the final ConnectM executable.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {[
                                    "-std=c++17",
                                    "-Wall",
                                    "-Wextra",
                                    "-Werror",
                                    "-pedantic",
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

                        {/* Run */}
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
                                Runtime Configuration
                            </p>

                            <h3 className="mt-4 text-2xl font-black text-white">
                                Configure the game from the command line
                            </h3>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 font-mono text-sm">
                                <p className="text-purple-300">
                                    $ ./connectM 6 4 1
                                </p>
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-3">
                                <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                                    <p className="text-xl font-black text-white">
                                        6
                                    </p>

                                    <p className="mt-1 text-xs uppercase tracking-[0.13em] text-slate-500">
                                        Board Size
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                                    <p className="text-xl font-black text-white">
                                        4
                                    </p>

                                    <p className="mt-1 text-xs uppercase tracking-[0.13em] text-slate-500">
                                        Win Length
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
                                    <p className="text-xl font-black text-white">
                                        1
                                    </p>

                                    <p className="mt-1 text-xs uppercase tracking-[0.13em] text-slate-500">
                                        First Player
                                    </p>
                                </div>
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
                                    ConnectM
                                </p>

                                <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                                    Algorithms made
                                    <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                        visible through gameplay.
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                                    ConnectM demonstrates recursive search, adversarial
                                    decision-making, backtracking, optimization, runtime
                                    configuration, and reusable game-state design in a
                                    compact C++ application.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
    {/* Opens the public ConnectM source repository in a new tab. */}
    <a
        href="https://github.com/dmm-dev228/ConnectM---AI-Powered-Connect-Four-Game"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/[0.06] px-6 py-3.5 font-semibold text-cyan-300 transition duration-200 hover:border-cyan-300/60 hover:bg-cyan-400/[0.1] hover:text-white"
    >
        View GitHub
        <span aria-hidden="true">↗</span>
    </a>

    <Link
        to="/projects"
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-slate-300 transition duration-200 hover:border-cyan-300/30 hover:text-white"
    >
        ← All Projects
    </Link>
</div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default ConnectMProject;