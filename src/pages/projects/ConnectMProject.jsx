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

const searchSteps = [
    {
        number: "01",
        title: "Try a Move",
        text: "Place the AI disk into a valid column.",
    },
    {
        number: "02",
        title: "Search Responses",
        text: "Recursively simulate alternating human and AI turns.",
    },
    {
        number: "03",
        title: "Evaluate",
        text: "Score terminal states as an AI win, human win, or neutral state.",
    },
    {
        number: "04",
        title: "Rollback",
        text: "Undo the simulated move before evaluating the next branch.",
    },
];

const directions = [
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
];

const tradeoffs = [
    {
        number: "01",
        title: "Depth-limited search",
        text: "A fixed depth keeps decision time bounded, but the AI cannot guarantee globally optimal play when important consequences exist beyond the search horizon.",
        accent: "amber",
    },
    {
        number: "02",
        title: "Terminal-only scoring",
        text: "Wins and losses receive clear values, but strategically different nonterminal positions all evaluate to zero at the depth boundary.",
        accent: "red",
    },
    {
        number: "03",
        title: "Mutate and undo",
        text: "Reusing the same board avoids copying complete states for every branch, but every simulated move must be rolled back exactly.",
        accent: "cyan",
    },
    {
        number: "04",
        title: "Dynamic board representation",
        text: "Nested vectors support runtime-configurable board sizes, though a flattened representation could improve memory locality.",
        accent: "blue",
    },
];

const futureImprovements = [
    {
        title: "Heuristic Evaluation",
        text: "Score connected sequences, developing threats, defensive positions, and strategically valuable board states.",
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
        text: "Replace raw character values with enums and validate runtime configuration before starting the game.",
    },
];

const engineeringChallenges = [
    {
        number: "01",
        title: "Generalizing Connect Four",
        problem:
            "Traditional Connect Four assumes a fixed board size and four connected disks.",
        solution:
            "The game stores N and M independently, allowing board dimensions and the required winning sequence to be configured at runtime.",
        result:
            "The same engine supports multiple game configurations without rewriting the core rules.",
    },
    {
        number: "02",
        title: "Detecting wins in every direction",
        problem:
            "Winning sequences can occur horizontally, vertically, or across two diagonal orientations.",
        solution:
            "A reusable direction checker accepts row and column offsets instead of duplicating four separate algorithms.",
        result:
            "Direction becomes data, reducing duplicated control flow and keeping win detection consistent.",
    },
    {
        number: "03",
        title: "Protecting board state during search",
        problem:
            "Minimax must explore hypothetical moves without permanently changing the live game.",
        solution:
            "Every simulated makeMove operation is paired with undoMove after its recursive branch finishes.",
        result:
            "Each branch begins from the correct parent state and remains isolated from neighboring branches.",
    },
    {
        number: "04",
        title: "Controlling combinatorial growth",
        problem:
            "The number of possible future states grows rapidly as board size and search depth increase.",
        solution:
            "The AI combines a fixed five-ply depth with Alpha-Beta pruning to skip branches that cannot change the selected outcome.",
        result:
            "Decision time stays bounded while preserving meaningful adversarial search.",
    },
];

const engineeringDecisions = [
    {
        number: "01",
        title: "Dynamic vectors over a fixed array",
        decision:
            "Represent the board with a dynamically sized two-dimensional vector.",
        why:
            "Board dimensions are provided at runtime, so compile-time dimensions would conflict with the project’s configurable design.",
        tradeoff:
            "Nested vectors are flexible and readable, but a flattened vector could provide better memory locality.",
    },
    {
        number: "02",
        title: "Mutate and undo over copying",
        decision:
            "Apply hypothetical moves to one board object and roll them back after recursion.",
        why:
            "This avoids explicitly constructing a complete board copy for every candidate branch.",
        tradeoff:
            "The approach is efficient and direct, but correctness depends on perfect makeMove and undoMove symmetry.",
    },
    {
        number: "03",
        title: "Depth-limited Minimax",
        decision:
            "Search five plies rather than traversing the complete game tree.",
        why:
            "A fixed boundary prevents configurable boards from producing unmanageable decision times.",
        tradeoff:
            "The AI may miss strategies whose consequences appear beyond the current horizon.",
    },
    {
        number: "04",
        title: "Terminal-only evaluation",
        decision:
            "Score AI wins as +1000, human wins as -1000, and other states as zero.",
        why:
            "The scoring model is transparent, easy to validate, and keeps the focus on recursive search mechanics.",
        tradeoff:
            "At the depth boundary, the AI cannot distinguish a promising nonterminal position from a weak one.",
    },
];

const lessons = [
    {
        title: "Correct recursion depends on state discipline",
        text: "The recursive algorithm is only trustworthy when every temporary state change is reversed before control returns to the parent call.",
    },
    {
        title: "Generalization changes every layer",
        text: "Making N and M configurable affects storage, validation, win detection, complexity, and the practical depth of AI search.",
    },
    {
        title: "Optimization preserves results",
        text: "Alpha-Beta pruning does not change the Minimax decision. It avoids work that has already become irrelevant to that decision.",
    },
    {
        title: "Evaluation quality limits search quality",
        text: "A deeper tree is not automatically smarter when the evaluation function cannot distinguish strategically different nonterminal states.",
    },
];

const interviewQuestions = [
    {
        question: "How does the AI choose a move?",
        answer:
            "It simulates each valid AI move, recursively explores alternating AI and human responses with Minimax, and selects the move with the highest returned score. Alpha-Beta bounds stop exploring branches that cannot improve the current decision.",
    },
    {
        question: "Is the AI always optimal?",
        answer:
            "No. The search is depth-limited to five plies and the evaluation function only scores terminal states. It can find visible tactical wins and blocks, but it cannot guarantee globally optimal play across arbitrary configurations.",
    },
    {
        question: "Why is undoMove important?",
        answer:
            "Minimax reuses one Board object. After exploring a hypothetical move, undoMove restores the exact parent state so the next candidate branch is evaluated independently.",
    },
    {
        question: "How is win detection generalized?",
        answer:
            "A shared helper scans from a board position using directional row and column increments. The same logic handles horizontal, vertical, diagonal, and reverse-diagonal sequences.",
    },
    {
        question: "What would you improve first?",
        answer:
            "I would add a positional heuristic and move ordering. That would let the AI distinguish nonterminal states and help Alpha-Beta pruning cut more branches earlier.",
    },
    {
        question: "How would you test the project?",
        answer:
            "I would unit test every win direction, full and invalid columns, full boards, configurable M values, makeMove and undoMove symmetry, immediate AI wins, immediate defensive blocks, and invalid runtime arguments.",
    },
];

const summaryItems = [
    {
        label: "Language",
        value: "C++17",
    },
    {
        label: "AI Strategy",
        value: "Depth-limited Minimax",
    },
    {
        label: "Optimization",
        value: "Alpha-Beta Pruning",
    },
    {
        label: "State Model",
        value: "Dynamic N × N Board",
    },
    {
        label: "Victory Rule",
        value: "Configurable M-in-a-row",
    },
    {
        label: "Build",
        value: "GNU Make + g++",
    },
];

function ConnectMProject() {
    return (
        <main className="relative pb-28">
            {/* ====================================================================
                Hero
            ===================================================================== */}
            <section className="px-6 pb-20 pt-32 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
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
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
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
                                The core engineering work centers on adversarial
                                search, reversible board simulation, and
                                generalized win detection.
                            </p>

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

                        <motion.div
                            initial={{ opacity: 0, y: 35, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
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
                                        <span className="text-red-400">✕</span>
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

            {/* ====================================================================
                Visual Overview
            ===================================================================== */}
            <section className="px-6 py-20 sm:px-8 lg:px-12">
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
                        <div className="mx-auto mb-8 max-w-3xl text-center">
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
        Visual Overview
    </p>

    <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
        Gameplay meets
        <span className="bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
            {" "}
            adversarial search.
        </span>
    </h2>

    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        A conceptual visualization of the configurable
        board, recursive search tree, Minimax evaluation,
        and Alpha-Beta pruning used to select the
        computer&apos;s next move.
    </p>
</div>

                        <figure className="group relative overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-[#050b18]/90 shadow-[0_0_55px_rgba(34,211,238,0.08)] backdrop-blur-xl">
                            <div
                                aria-hidden="true"
                                className="absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent"
                            />

                            <div className="relative overflow-hidden border-b border-white/10 bg-[#020611] p-2 sm:p-3">
                                <img
                                    src={connectMScreenshot}
                                    alt="Concept artwork visualizing ConnectM gameplay, Minimax search, Alpha-Beta pruning, backtracking, configurable board size, and AI search depth"
                                    className="block h-auto w-full rounded-[1.5rem] object-contain"
                                />
                            </div>

                            <figcaption className="p-6 sm:p-8">
                                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="max-w-3xl">
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                            Conceptual Game Architecture
                                        </p>

                                        <h3 className="mt-3 text-xl font-black text-white sm:text-2xl">
                                            AI-Generated Project Visualization
                                        </h3>

                                        <p className="mt-4 leading-7 text-slate-400">
                                            An artistic representation of
                                            ConnectM&apos;s configurable
                                            gameplay, recursive decision tree,
                                            reversible board simulation, and
                                            depth-limited adversarial search.
                                        </p>
                                    </div>

                                    <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                                        Concept Artwork
                                    </span>
                                </div>
                            </figcaption>
                        </figure>
                    </motion.div>
                </div>
            </section>

            {/* ====================================================================
                How the AI Thinks
            ===================================================================== */}
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
        How the AI Thinks
    </p>

    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
        Simulate the future.
        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
            Choose the strongest branch.
        </span>
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        Every valid AI move becomes the starting point for a
        recursive search. The computer tries to maximize the
        resulting score while assuming the human will always
        choose the response that minimizes it.
    </p>
</motion.div>

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
                            {searchSteps.map((step) => (
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
                                On AI turns, Minimax compares the available child
                                states and keeps the largest value. A computer
                                victory evaluates to +1000, so branches leading
                                to a visible win are preferred.
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
                                On simulated human turns, the algorithm assumes
                                the player will choose the move that produces the
                                lowest score for the computer.
                            </p>
                        </motion.article>
                    </div>

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
                                    The current evaluation function only
                                    distinguishes terminal outcomes. That keeps
                                    the implementation easy to reason about, but
                                    different nonterminal states can receive the
                                    same score at the depth boundary.
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-3">
                                {[
                                    ["+1000", "AI Victory", "emerald"],
                                    ["-1000", "Human Victory", "red"],
                                    ["0", "Other State", "slate"],
                                ].map(([score, label, tone]) => (
                                    <div
                                        key={label}
                                        className={`rounded-2xl border p-5 text-center ${
                                            tone === "emerald"
                                                ? "border-emerald-400/20 bg-emerald-400/[0.05]"
                                                : tone === "red"
                                                  ? "border-red-400/20 bg-red-400/[0.05]"
                                                  : "border-white/10 bg-white/[0.025]"
                                        }`}
                                    >
                                        <p
                                            className={`text-3xl font-black ${
                                                tone === "emerald"
                                                    ? "text-emerald-400"
                                                    : tone === "red"
                                                      ? "text-red-400"
                                                      : "text-slate-300"
                                            }`}
                                        >
                                            {score}
                                        </p>
                                        <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                            {label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ====================================================================
                Search Optimization
            ===================================================================== */}
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
        Search Optimization
    </p>

    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
        Search deeper.
        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
            Skip what cannot matter.
        </span>
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        ConnectM combines Alpha-Beta pruning with reversible
        board updates so the AI can avoid unnecessary
        branches while safely exploring hypothetical moves.
    </p>
</motion.div>

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
                                    Stop exploring branches that cannot change
                                    the decision.
                                </h3>
                                <p className="mt-5 leading-7 text-slate-400">
                                    Alpha tracks the best score available to the
                                    maximizing AI, while Beta tracks the best
                                    score available to the minimizing human.
                                    When Beta becomes less than or equal to
                                    Alpha, the remaining states in that branch
                                    are skipped.
                                </p>

                                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl border border-purple-400/15 bg-purple-400/[0.04] p-4">
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-purple-300">
                                            Alpha
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Best score currently available to
                                            the maximizing player.
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.04] p-4">
                                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-cyan-300">
                                            Beta
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Best score currently available to
                                            the minimizing player.
                                        </p>
                                    </div>
                                </div>
                            </div>

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
                                        {
                                            label: "Branch A",
                                            score: "+4",
                                            pruned: false,
                                        },
                                        {
                                            label: "Branch B",
                                            score: "+8",
                                            pruned: false,
                                        },
                                        {
                                            label: "Branch C",
                                            score: "✕",
                                            pruned: true,
                                        },
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
                                        When{" "}
                                        <span className="text-red-400">
                                            β ≤ α
                                        </span>
                                        , remaining moves in that branch are no
                                        longer explored.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.article>

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
                                    Reuse the same board without corrupting the
                                    real game.
                                </h3>
                                <p className="mt-5 leading-7 text-slate-400">
                                    Each hypothetical move temporarily changes
                                    the board. After recursion finishes exploring
                                    that branch, the move is undone before the
                                    next candidate is tested.
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-4">
                                {[
                                    ["01", "Current State"],
                                    ["02", "Make Move"],
                                    ["03", "Search"],
                                    ["04", "Undo Move"],
                                ].map(([number, title]) => (
                                    <div
                                        key={number}
                                        className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center"
                                    >
                                        <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                                            {number}
                                        </p>
                                        <p className="mt-3 font-black text-white">
                                            {title}
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
                                After every simulated branch, the board must
                                return to the exact state it had before the
                                hypothetical move was applied.
                            </p>
                        </div>
                    </motion.article>
                </div>
            </section>

            {/* ====================================================================
                Game Architecture
            ===================================================================== */}
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
        Game Architecture
    </p>

    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
        Generalized rules.
        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
            Reusable game logic.
        </span>
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        Board size and the required winning sequence are
        runtime parameters, so move handling and victory
        detection must work across different configurations.
    </p>
</motion.div>

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
                                The board is stored dynamically rather than
                                using a fixed compile-time array, allowing the
                                same logic to support different dimensions.
                            </p>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                                <p className="font-mono text-sm text-cyan-300">
                                    vector&lt;vector&lt;char&gt;&gt;
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    A dynamically sized two-dimensional grid
                                    represents the current board state.
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
                                The number of connected disks required for
                                victory is independent from board size.
                            </p>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                                <p className="font-mono text-sm text-purple-300">
                                    ./connectM 6 4 1
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    6 × 6 board • 4-in-a-row victory • human
                                    starts first
                                </p>
                            </div>
                        </motion.article>
                    </div>

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
                                    One directional algorithm. Four
                                    orientations.
                                </h3>
                                <p className="mt-5 leading-7 text-slate-400">
                                    Instead of four separate checking
                                    algorithms, ConnectM parameterizes direction
                                    using row and column increments.
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {directions.map((direction) => (
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
                    </motion.article>

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
                            {[
                                {
                                    eyebrow: "Entry Point",
                                    title: "main.cpp",
                                    text: "Parses runtime configuration and initializes the game.",
                                    tone: "white",
                                },
                                {
                                    eyebrow: "Orchestration",
                                    title: "Game",
                                    text: "Controls turns, input, AI search, evaluation, and the game lifecycle.",
                                    tone: "purple",
                                },
                                {
                                    eyebrow: "State Model",
                                    title: "Board",
                                    text: "Owns grid state, validation, placement, rollback, rendering, and winner detection.",
                                    tone: "emerald",
                                },
                            ].map((item, index) => (
                                <div
                                    key={item.title}
                                    className="contents"
                                >
                                    <div
                                        className={`rounded-2xl border p-5 text-center ${
                                            item.tone === "purple"
                                                ? "border-purple-400/20 bg-purple-400/[0.04]"
                                                : item.tone === "emerald"
                                                  ? "border-emerald-400/20 bg-emerald-400/[0.04]"
                                                  : "border-white/10 bg-white/[0.025]"
                                        }`}
                                    >
                                        <p
                                            className={`text-xs font-bold uppercase tracking-[0.15em] ${
                                                item.tone === "purple"
                                                    ? "text-purple-400"
                                                    : item.tone === "emerald"
                                                      ? "text-emerald-400"
                                                      : "text-slate-500"
                                            }`}
                                        >
                                            {item.eyebrow}
                                        </p>
                                        <h4 className="mt-3 text-xl font-black text-white">
                                            {item.title}
                                        </h4>
                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            {item.text}
                                        </p>
                                    </div>

                                    {index < 2 && (
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
                    </motion.div>
                </div>
            </section>

            {/* ====================================================================
                Complexity and Future Engineering
            ===================================================================== */}
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
        Complexity & Tradeoffs
    </p>

    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
        Stronger search has
        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
            a computational cost.
        </span>
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        ConnectM limits search depth to keep decisions
        computationally manageable as configurable board
        sizes increase the number of possible future states.
    </p>
</motion.div>

                    <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                        <div className="rounded-[1.75rem] border border-cyan-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                Search Growth
                            </p>
                            <h3 className="mt-4 text-3xl font-black text-white">
                                O(bᵈ)
                            </h3>
                            <p className="mt-5 leading-7 text-slate-400">
                                If each state has roughly{" "}
                                <span className="text-white">b</span> legal moves
                                and the algorithm searches to depth{" "}
                                <span className="text-white">d</span>, the number
                                of states grows exponentially in the general
                                Minimax case.
                            </p>
                        </div>

                        <div className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                                Current Search Boundary
                            </p>
                            <h3 className="mt-4 text-3xl font-black text-white">
                                Five plies ahead
                            </h3>
                            <p className="mt-5 leading-7 text-slate-400">
                                The implementation searches to a fixed depth of
                                five plies. This bounds computation, but
                                important outcomes beyond that horizon may remain
                                invisible.
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
                    </div>

                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        {tradeoffs.map((tradeoff) => (
                            <motion.article
                                key={tradeoff.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.55,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                            >
                                <p
                                    className={`text-xs font-bold uppercase tracking-[0.18em] ${
                                        tradeoff.accent === "amber"
                                            ? "text-amber-400"
                                            : tradeoff.accent === "red"
                                              ? "text-red-400"
                                              : tradeoff.accent === "blue"
                                                ? "text-blue-400"
                                                : "text-cyan-400"
                                    }`}
                                >
                                    Tradeoff / {tradeoff.number}
                                </p>
                                <h3 className="mt-4 text-2xl font-black text-white">
                                    {tradeoff.title}
                                </h3>
                                <p className="mt-4 leading-7 text-slate-400">
                                    {tradeoff.text}
                                </p>
                            </motion.article>
                        ))}
                    </div>

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
                            {futureImprovements.map((improvement) => (
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
                </div>
            </section>

            {/* ====================================================================
                Engineering Challenges
            ===================================================================== */}
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
        Engineering Challenges
    </p>

    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
        The hard parts were
        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
            deeper than the game board.
        </span>
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        The project required generalized rule design,
        recursive state management, adversarial reasoning,
        and careful control of search complexity.
    </p>
</motion.div>

                    <div className="mt-14 grid gap-6 lg:grid-cols-2">
                        {engineeringChallenges.map((challenge) => (
                            <motion.article
                                key={challenge.number}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.18 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 transition duration-300 hover:border-cyan-400/30"
                            >
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/0 to-transparent transition duration-300 group-hover:via-cyan-300/80"
                                />

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-400">
                                    Challenge {challenge.number}
                                </p>
                                <h3 className="mt-4 text-2xl font-black text-white">
                                    {challenge.title}
                                </h3>

                                <div className="mt-6 space-y-5">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-400">
                                            Problem
                                        </p>
                                        <p className="mt-2 leading-7 text-slate-400">
                                            {challenge.problem}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-purple-400">
                                            Implementation
                                        </p>
                                        <p className="mt-2 leading-7 text-slate-400">
                                            {challenge.solution}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
                                            Result
                                        </p>
                                        <p className="mt-2 leading-7 text-slate-300">
                                            {challenge.result}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====================================================================
                Engineering Decisions
            ===================================================================== */}
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
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-400">
        Engineering Decisions & Tradeoffs
    </p>

    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
        Every clean decision
        <span className="block bg-gradient-to-r from-purple-300 via-cyan-400 to-blue-700 bg-clip-text text-transparent">
            carries a consequence.
        </span>
    </h2>
</motion.div>
                    <div className="mt-14 grid gap-6 lg:grid-cols-2">
                        {engineeringDecisions.map((item) => (
                            <motion.article
                                key={item.number}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.18 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7 transition duration-300 hover:border-purple-400/35"
                            >
                                <div
                                    aria-hidden="true"
                                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/0 to-transparent transition duration-300 group-hover:via-purple-300/80"
                                />

                                <p className="text-xs font-black uppercase tracking-[0.18em] text-purple-400">
                                    Decision {item.number}
                                </p>
                                <h3 className="mt-4 text-2xl font-black text-white">
                                    {item.title}
                                </h3>

                                <div className="mt-6 space-y-5">
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
                                            Decision
                                        </p>
                                        <p className="mt-2 leading-7 text-slate-300">
                                            {item.decision}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-400">
                                            Why
                                        </p>
                                        <p className="mt-2 leading-7 text-slate-400">
                                            {item.why}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-400">
                                            Tradeoff
                                        </p>
                                        <p className="mt-2 leading-7 text-slate-400">
                                            {item.tradeoff}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====================================================================
                Lessons Learned
            ===================================================================== */}
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
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
        Lessons Learned
    </p>

    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
        What the implementation
        <span className="block bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-700 bg-clip-text text-transparent">
            taught me about algorithms.
        </span>
    </h2>
</motion.div>

                    <div className="mt-14 grid gap-5 md:grid-cols-2">
                        {lessons.map((lesson, index) => (
                            <motion.article
                                key={lesson.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.04,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="rounded-[1.75rem] border border-emerald-400/15 bg-[#050b18]/80 p-7"
                            >
                                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-400">
                                    0{index + 1}
                                </p>
                                <h3 className="mt-4 text-2xl font-black text-white">
                                    {lesson.title}
                                </h3>
                                <p className="mt-4 leading-7 text-slate-400">
                                    {lesson.text}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====================================================================
                Interview Questions
            ===================================================================== */}
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
        Interview Questions
    </p>

    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
        The questions behind
        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
            the engineering decisions.
        </span>
    </h2>
</motion.div>

                    <div className="mt-14 grid gap-5 lg:grid-cols-2">
                        {interviewQuestions.map((item, index) => (
                            <motion.article
                                key={item.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.55,
                                    delay: index * 0.03,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="rounded-[1.75rem] border border-white/10 bg-[#050b18]/80 p-7"
                            >
                                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-400">
                                    Question {String(index + 1).padStart(2, "0")}
                                </p>
                                <h3 className="mt-4 text-xl font-black leading-8 text-white">
                                    {item.question}
                                </h3>
                                <p className="mt-4 leading-7 text-slate-400">
                                    {item.answer}
                                </p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ====================================================================
                Final Reflection
            ===================================================================== */}
            <section className="px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.07] via-[#050b18]/95 to-cyan-400/[0.04] p-8 sm:p-10"
                    >
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-3xl"
                        />

                        <div className="relative max-w-5xl">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                                Final Reflection
                            </p>
                            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                                A compact game became a practical study of
                                algorithm design.
                            </h2>

                            <div className="mt-7 space-y-5 text-lg leading-8 text-slate-300">
                                <p>
                                    ConnectM strengthened my understanding of how
                                    recursive algorithms depend on state
                                    correctness, how optimization can reduce work
                                    without changing results, and how a seemingly
                                    small configuration requirement can affect an
                                    entire design.
                                </p>
                                <p>
                                    The project also taught me to describe
                                    algorithmic limitations honestly. Because the
                                    search is depth-limited and uses terminal-only
                                    scoring, I present the AI as a practical
                                    adversarial-search implementation rather than
                                    claiming it is universally optimal.
                                </p>
                                <p>
                                    The next meaningful step would be adding
                                    heuristic evaluation, move ordering, and
                                    automated tests so the AI becomes both
                                    strategically stronger and easier to verify.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ====================================================================
                Project Summary
            ===================================================================== */}
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
        Project Summary
    </p>

    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
        What ConnectM
        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
            demonstrates.
        </span>
    </h2>
</motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.65,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mt-14 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#050b18]/85 p-7 sm:p-8"
                    >
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {summaryItems.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                                >
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                                        {item.label}
                                    </p>
                                    <p className="mt-3 text-lg font-black text-white">
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 grid gap-5 lg:grid-cols-3">
                            {[
                                {
                                    title: "Algorithmic Reasoning",
                                    text: "Recursive Minimax, maximizing and minimizing turns, terminal evaluation, and bounded search.",
                                },
                                {
                                    title: "State Management",
                                    text: "Gravity-based moves, reversible simulation, board invariants, and isolated recursive branches.",
                                },
                                {
                                    title: "Reusable Design",
                                    text: "Runtime configuration, generalized direction scanning, encapsulated Board state, and separated orchestration.",
                                },
                            ].map((capability) => (
                                <div
                                    key={capability.title}
                                    className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-6"
                                >
                                    <h3 className="text-xl font-black text-white">
                                        {capability.title}
                                    </h3>
                                    <p className="mt-3 leading-7 text-slate-400">
                                        {capability.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ====================================================================
                Build and Run
            ===================================================================== */}
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
        Build & Run
    </p>

    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
        Small runtime.
        <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
            Algorithm-heavy core.
        </span>
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        ConnectM has no external services, database, or
        runtime dependencies beyond a C++17-compatible
        compiler and GNU Make.
    </p>
</motion.div>

                    <div className="mt-14 grid gap-6 lg:grid-cols-2">
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
                                <p className="text-emerald-300">$ make</p>
                                <p className="mt-2 text-slate-500">
                                    Compiles board.cpp, game.cpp, and main.cpp
                                </p>
                            </div>

                            <p className="mt-5 leading-7 text-slate-400">
                                The Makefile uses C++17 and strict warning flags,
                                including <code>-Wall</code>,{" "}
                                <code>-Wextra</code>, <code>-Werror</code>, and{" "}
                                <code>-pedantic</code>.
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
                            className="rounded-[1.75rem] border border-purple-400/15 bg-[#050b18]/80 p-7 backdrop-blur-xl"
                        >
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-400">
                                Runtime Configuration
                            </p>
                            <h3 className="mt-4 text-2xl font-black text-white">
                                Board size, win condition, first player
                            </h3>

                            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-5 font-mono text-sm">
                                <p className="text-purple-300">
                                    $ ./connectM 6 4 1
                                </p>
                                <p className="mt-2 text-slate-500">
                                    boardSize=6 • winCondition=4 • human first
                                </p>
                            </div>

                            <div className="mt-5 grid grid-cols-3 gap-3">
                                {[
                                    ["6", "Board"],
                                    ["4", "Connect"],
                                    ["1", "First Player"],
                                ].map(([value, label]) => (
                                    <div
                                        key={label}
                                        className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-center"
                                    >
                                        <p className="text-xl font-black text-white">
                                            {value}
                                        </p>
                                        <p className="mt-1 text-[0.6rem] font-bold uppercase tracking-[0.13em] text-slate-500">
                                            {label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.article>
                    </div>
                </div>
            </section>

            {/* ====================================================================
                Closing CTA
            ===================================================================== */}
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
                                    ConnectM demonstrates recursive search,
                                    adversarial decision making, backtracking,
                                    optimization, runtime configuration, and
                                    reusable game-state design in a compact C++
                                    application.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
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