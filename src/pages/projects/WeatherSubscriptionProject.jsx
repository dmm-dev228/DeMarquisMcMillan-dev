import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
    AlertTriangle,
    ArrowDown,
    Braces,
    CloudSun,
    Cpu,
    Database,
    FileText,
    HardDrive,
    KeyRound,
    Layers3,
    LockKeyhole,
    LogIn,
    LogOut,
    MessageSquare,
    Network,
    RefreshCw,
    Save,
    Send,
    Server,
    Terminal,
    UserPlus,
    Users,
    Workflow,
} from "lucide-react";

import WeatherSubPlatform from "../../assets/projects/WeatherSubPlatform.png";

function ArchitectureCard({
    icon: Icon,
    title,
    subtitle,
    delay = 0,
    className = "",
}) {
    return (
        <motion.article
            initial={{
                opacity: 0,
                y: 22,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.35,
            }}
            transition={{
                duration: 0.5,
                delay,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
                y: -5,
                scale: 1.015,
            }}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#07101f]/90 p-5 shadow-[0_18px_60px_rgba(2,6,17,0.35)] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-400/30 ${className}`}
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-blue-500/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <div className="relative z-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                    <Icon size={21} aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                    {subtitle}
                </p>
            </div>
        </motion.article>
    );
}

function FlowConnector({ label }) {
    return (
        <div
            aria-hidden="true"
            className="flex flex-col items-center justify-center py-3"
        >
            {label && (
                <span className="mb-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-cyan-300">
                    {label}
                </span>
            )}

            <div className="relative flex h-14 w-px justify-center bg-gradient-to-b from-cyan-400/20 via-cyan-300/80 to-cyan-400/20">
                <motion.span
                    animate={{
                        y: [0, 38, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-0 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]"
                />
            </div>

            <ArrowDown
                size={18}
                className="-mt-1 text-cyan-300"
                aria-hidden="true"
            />
        </div>
    );
}

function WeatherSubscriptionProject() {
    const technologies = [
        "C++17",
        "TCP/IP",
        "POSIX Sockets",
        "Multithreading",
        "Client-Server",
        "Make",
    ];

    const metrics = [
        {
            value: "2",
            label: "Executables",
        },
        {
            value: "TCP",
            label: "Client / Server",
        },
        {
            value: "9",
            label: "Client Operations",
        },
        {
            value: "1",
            label: "Thread Per Client",
        },
        {
            value: "2",
            label: "Persistence Files",
        },
        {
            value: "Custom",
            label: "TCP Protocol",
        },
    ];

    const serverServices = [
        {
            icon: KeyRound,
            title: "Authentication",
            subtitle:
                "Processes registration, login, password changes, and authenticated session access.",
        },
        {
            icon: CloudSun,
            title: "Subscriptions",
            subtitle:
                "Adds, removes, and retrieves user-specific weather location subscriptions.",
        },
        {
            icon: MessageSquare,
            title: "Messaging Foundation",
            subtitle:
                "Supports direct and location-based group messaging operations between users.",
        },
    ];

    return (
        <main className="min-h-screen overflow-hidden bg-[#020611] text-white">
            {/* ================================================================
                Background Effects
            ================================================================= */}
            <div
                aria-hidden="true"
                className="pointer-events-none fixed inset-0 overflow-hidden"
            >
                <div className="absolute left-[-12rem] top-24 h-[28rem] w-[28rem] rounded-full bg-cyan-500/[0.06] blur-[120px]" />

                <div className="absolute right-[-10rem] top-[28rem] h-[30rem] w-[30rem] rounded-full bg-blue-600/[0.06] blur-[130px]" />

                <div className="absolute bottom-[-15rem] left-1/3 h-[32rem] w-[32rem] rounded-full bg-sky-500/[0.04] blur-[140px]" />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:64px_64px]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#020611_90%)]" />
            </div>

            <div className="relative z-10">
                {/* ============================================================
                    Hero
                ============================================================= */}
                <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:px-8 lg:px-12">
                    <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 28,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                                Systems Programming • Networking • Concurrent
                                Computing
                            </p>

                            <h1 className="mt-5 text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                                Weather Subscription

                                <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-800 bg-clip-text text-transparent">
                                    Platform
                                </span>
                            </h1>

                            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
                                A distributed C++ application that connects a
                                terminal based client to a multithreaded TCP
                                server through a custom application layer
                                protocol. The platform supports authenticated
                                user sessions, persistent account storage,
                                concurrent client handling, password management,
                                and personalized weather location subscriptions.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-3">
                                {technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2 text-sm font-semibold text-cyan-300"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-12 flex flex-wrap gap-4">
                                <a
                                    href="https://github.com/dmm-dev228/Weather-Subscription-System---Client-Server-TCP-Application"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="View the Weather Subscription Platform source code on GitHub"
                                    className="group inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/[0.06] px-6 py-3.5 font-semibold text-cyan-300 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-400/[0.12] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
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
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                                >
                                    <span aria-hidden="true">←</span>
                                    All Projects
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 30,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.75,
                                delay: 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative"
                        >
                            <div
                                aria-hidden="true"
                                className="absolute -inset-6 rounded-[2.5rem] bg-cyan-400/[0.04] blur-2xl"
                            />

                            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-[#050b18]/85 shadow-[0_0_60px_rgba(34,211,238,0.08)] backdrop-blur-xl">
                                <img
                                    src={WeatherSubPlatform}
                                    alt="AI-generated visualization of the Weather Subscription Platform client-server architecture"
                                    className="aspect-video w-full object-cover"
                                />

                                <div className="border-t border-white/10 bg-slate-950/80 px-6 py-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                                        Conceptual Architecture Visualization
                                        (AI-Generated)
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-slate-400">
                                        An artistic representation of the
                                        distributed client server architecture,
                                        concurrent networking model, and
                                        centralized subscription management
                                        implemented by the platform.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ============================================================
                    Engineering Metrics
                ============================================================= */}
                <section
                    aria-labelledby="weather-platform-metrics"
                    className="px-6 pb-24 sm:px-8 lg:px-12"
                >
                    <div className="mx-auto w-full max-w-7xl">
                        <h2
                            id="weather-platform-metrics"
                            className="sr-only"
                        >
                            Weather Subscription Platform engineering metrics
                        </h2>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                            {metrics.map((metric, index) => (
                                <motion.article
                                    key={metric.label}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.3,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.05,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="rounded-[1.6rem] border border-white/10 bg-[#050b18]/80 p-6 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25"
                                >
                                    <p className="text-3xl font-black text-cyan-300 sm:text-4xl">
                                        {metric.value}
                                    </p>

                                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                                        {metric.label}
                                    </p>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    Distributed System Architecture
                ============================================================= */}
                <section
                    aria-labelledby="distributed-architecture-heading"
                    className="border-y border-white/[0.06] bg-[#030816]/70 px-6 py-24 sm:px-8 lg:px-12"
                >
                    <div className="mx-auto w-full max-w-7xl">
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
                                amount: 0.4,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mx-auto max-w-4xl text-center"
                        >
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                                Distributed Architecture
                            </p>

                            <h2
                                id="distributed-architecture-heading"
                                className="mt-4 text-4xl font-black tracking-[-0.035em] text-white sm:text-5xl"
                            >
                                Designed Around a True Client-Server Model
                            </h2>

                            <p className="mt-7 text-lg leading-8 text-slate-300">
                                Unlike a traditional standalone console program,
                                this project separates responsibilities into
                                independent client and server executables. They
                                communicate through TCP sockets using a custom
                                text based application protocol. The server owns
                                authentication, subscriptions, persistence, and
                                concurrent session processing while terminal
                                clients submit structured requests and display
                                server responses.
                            </p>
                        </motion.div>

                        <div className="relative mx-auto mt-16 max-w-5xl">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-[2.5rem] bg-cyan-400/[0.03] blur-3xl"
                            />

                            <div className="relative rounded-[2rem] border border-white/10 bg-[#040a17]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-10">
                                {/* Client layer */}
                                <div className="grid gap-5 md:grid-cols-3">
                                    {[
                                        {
                                            title: "Client Session 01",
                                            subtitle:
                                                "Terminal-based user interface",
                                        },
                                        {
                                            title: "Client Session 02",
                                            subtitle:
                                                "Independent authenticated user",
                                        },
                                        {
                                            title: "Client Session N",
                                            subtitle:
                                                "Additional concurrent connection",
                                        },
                                    ].map((client, index) => (
                                        <ArchitectureCard
                                            key={client.title}
                                            icon={Terminal}
                                            title={client.title}
                                            subtitle={client.subtitle}
                                            delay={index * 0.08}
                                        />
                                    ))}
                                </div>

                                <FlowConnector label="TCP/IP Socket Connections" />

                                {/* Server layer */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.97,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.35,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        delay: 0.15,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="relative overflow-hidden rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-cyan-400/[0.09] via-[#07101f] to-blue-500/[0.07] p-6 shadow-[0_0_45px_rgba(34,211,238,0.08)] sm:p-8"
                                >
                                    <div
                                        aria-hidden="true"
                                        className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-300/[0.08] blur-3xl"
                                    />

                                    <div className="relative z-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.09] text-cyan-200">
                                                <Server
                                                    size={27}
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                                                    Central Processing Layer
                                                </p>

                                                <h3 className="mt-2 text-2xl font-black text-white">
                                                    Multithreaded TCP Server
                                                </h3>

                                                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                                                    Listens for incoming
                                                    connections, accepts client
                                                    sockets, and delegates each
                                                    active session to a
                                                    dedicated worker thread.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300">
                                                Port 8080
                                            </span>

                                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300">
                                                std::thread
                                            </span>

                                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300">
                                                std::mutex
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>

                                <FlowConnector label="Command Routing" />

                                {/* Service layer */}
                                <div className="grid gap-5 md:grid-cols-3">
                                    {serverServices.map((service, index) => (
                                        <ArchitectureCard
                                            key={service.title}
                                            icon={service.icon}
                                            title={service.title}
                                            subtitle={service.subtitle}
                                            delay={0.12 + index * 0.08}
                                        />
                                    ))}
                                </div>

                                <FlowConnector label="Persistent State" />

                                {/* Persistence layer */}
                                <div className="grid gap-5 md:grid-cols-2">
                                    <ArchitectureCard
                                        icon={Users}
                                        title="users.txt"
                                        subtitle="Stores registered usernames and passwords so account data remains available across server restarts."
                                        delay={0.15}
                                        className="border-emerald-400/15"
                                    />

                                    <ArchitectureCard
                                        icon={Database}
                                        title="subscriptions.txt"
                                        subtitle="Stores each user's saved weather location subscriptions for persistent retrieval and management."
                                        delay={0.23}
                                        className="border-emerald-400/15"
                                    />
                                </div>

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.35,
                                    }}
                                    className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 text-center"
                                >
                                    <Network
                                        size={19}
                                        className="shrink-0 text-cyan-300"
                                        aria-hidden="true"
                                    />

                                    <p className="text-sm leading-6 text-slate-400">
                                        Each layer has a focused responsibility:
                                        clients manage interaction, the server
                                        coordinates application logic, and text
                                        files preserve durable account and
                                        subscription state.
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                        {/* Architecture explanation */}
                        <div className="mt-14 grid gap-6 lg:grid-cols-3">
                            {[
                                {
                                    number: "01",
                                    title: "Independent Clients",
                                    description:
                                        "Each user runs a separate terminal client that connects to the same centralized server over a TCP socket.",
                                },
                                {
                                    number: "02",
                                    title: "Concurrent Processing",
                                    description:
                                        "The server accepts multiple connections and assigns each active client to a dedicated execution thread.",
                                },
                                {
                                    number: "03",
                                    title: "Centralized State",
                                    description:
                                        "Authentication records and subscription data are managed by the server and restored from persistent files.",
                                },
                            ].map((item, index) => (
                                <motion.article
                                    key={item.number}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.35,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.08,
                                    }}
                                    className="rounded-2xl border border-white/[0.08] bg-[#050b18]/75 p-6"
                                >
                                    <p className="text-sm font-black tracking-[0.18em] text-cyan-400">
                                        {item.number}
                                    </p>

                                    <h3 className="mt-3 text-xl font-bold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-400">
                                        {item.description}
                                    </p>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>
                {/* ============================================================
    Distributed Request Lifecycle
============================================================= */}
                <section
                    aria-labelledby="request-lifecycle-heading"
                    className="px-6 py-24 sm:px-8 lg:px-12"
                >
                    <div className="mx-auto w-full max-w-7xl">
                        {/* Section heading */}
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
                                amount: 0.4,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mx-auto max-w-4xl text-center"
                        >
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                                Request Lifecycle
                            </p>

                            <h2
                                id="request-lifecycle-heading"
                                className="mt-4 text-4xl font-black tracking-[-0.035em] text-white sm:text-5xl"
                            >
                                From Terminal Input to Server Response
                            </h2>

                            <p className="mt-7 text-lg leading-8 text-slate-300">
                                Every action follows a structured network lifecycle. The client
                                translates a menu selection into a protocol command, sends it
                                through the TCP connection, and waits for the server to process
                                the request. The server validates the command, executes the
                                corresponding operation, updates persistent state when needed,
                                and returns a formatted response.
                            </p>
                        </motion.div>

                        {/* Lifecycle diagram */}
                        <div className="relative mx-auto mt-16 max-w-6xl">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-[3rem] bg-blue-500/[0.035] blur-3xl"
                            />

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#040a17]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-10">
                                {/* Example request label */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.96,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    className="mx-auto mb-10 flex max-w-xl flex-col items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] px-6 py-5 text-center"
                                >
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                        Example Operation
                                    </p>

                                    <p className="mt-2 font-mono text-sm text-cyan-200 sm:text-base">
                                        SUBSCRIBE username Pensacola
                                    </p>

                                    <p className="mt-3 text-sm leading-6 text-slate-400">
                                        A user requests that a new weather location be attached
                                        to their authenticated account.
                                    </p>
                                </motion.div>

                                {/* Desktop horizontal lifecycle */}
                                <div className="hidden lg:block">
                                    <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] items-center gap-3">
                                        {[
                                            {
                                                number: "01",
                                                icon: Terminal,
                                                title: "User Action",
                                                description:
                                                    "The user selects Subscribe and enters a location through the terminal menu.",
                                            },
                                            {
                                                number: "02",
                                                icon: Network,
                                                title: "Protocol Message",
                                                description:
                                                    "The client serializes the operation into a structured text command.",
                                            },
                                            {
                                                number: "03",
                                                icon: Server,
                                                title: "Server Routing",
                                                description:
                                                    "The assigned worker thread receives and identifies the requested command.",
                                            },
                                            {
                                                number: "04",
                                                icon: Database,
                                                title: "State Update",
                                                description:
                                                    "The server updates the user object and saves the subscription to storage.",
                                            },
                                            {
                                                number: "05",
                                                icon: MessageSquare,
                                                title: "Client Response",
                                                description:
                                                    "A success or error message is returned through the active TCP socket.",
                                            },
                                        ].map((step, index, steps) => (
                                            <div
                                                key={step.number}
                                                className="contents"
                                            >
                                                <motion.article
                                                    initial={{
                                                        opacity: 0,
                                                        y: 22,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    viewport={{
                                                        once: true,
                                                        amount: 0.35,
                                                    }}
                                                    transition={{
                                                        duration: 0.5,
                                                        delay: index * 0.1,
                                                        ease: [0.22, 1, 0.36, 1],
                                                    }}
                                                    whileHover={{
                                                        y: -6,
                                                    }}
                                                    className="group h-full min-h-64 rounded-2xl border border-white/[0.09] bg-[#07101f]/90 p-5 transition-colors duration-300 hover:border-cyan-400/30"
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                                            <step.icon
                                                                size={21}
                                                                aria-hidden="true"
                                                            />
                                                        </div>

                                                        <span className="font-mono text-xs font-bold tracking-[0.16em] text-cyan-400/70">
                                                            {step.number}
                                                        </span>
                                                    </div>

                                                    <h3 className="mt-5 text-lg font-bold text-white">
                                                        {step.title}
                                                    </h3>

                                                    <p className="mt-3 text-sm leading-6 text-slate-400">
                                                        {step.description}
                                                    </p>
                                                </motion.article>

                                                {index < steps.length - 1 && (
                                                    <div
                                                        aria-hidden="true"
                                                        className="relative flex w-10 items-center justify-center"
                                                    >
                                                        <div className="h-px w-full bg-gradient-to-r from-cyan-400/20 via-cyan-300/80 to-cyan-400/20" />

                                                        <motion.span
                                                            animate={{
                                                                x: [-12, 12, -12],
                                                                opacity: [0, 1, 0],
                                                            }}
                                                            transition={{
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                delay: index * 0.2,
                                                                ease: "easeInOut",
                                                            }}
                                                            className="absolute h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Mobile and tablet vertical lifecycle */}
                                <div className="lg:hidden">
                                    {[
                                        {
                                            number: "01",
                                            icon: Terminal,
                                            title: "User Action",
                                            description:
                                                "The user selects Subscribe and enters a location through the terminal menu.",
                                        },
                                        {
                                            number: "02",
                                            icon: Network,
                                            title: "Protocol Message",
                                            description:
                                                "The client serializes the operation into a structured text command.",
                                        },
                                        {
                                            number: "03",
                                            icon: Server,
                                            title: "Server Routing",
                                            description:
                                                "The assigned worker thread receives and identifies the requested command.",
                                        },
                                        {
                                            number: "04",
                                            icon: Database,
                                            title: "State Update",
                                            description:
                                                "The server updates the user object and saves the subscription to storage.",
                                        },
                                        {
                                            number: "05",
                                            icon: MessageSquare,
                                            title: "Client Response",
                                            description:
                                                "A success or error message is returned through the active TCP socket.",
                                        },
                                    ].map((step, index, steps) => (
                                        <div key={step.number}>
                                            <motion.article
                                                initial={{
                                                    opacity: 0,
                                                    x: index % 2 === 0 ? -20 : 20,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.35,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: index * 0.06,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                                className="rounded-2xl border border-white/[0.09] bg-[#07101f]/90 p-5"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                                        <step.icon
                                                            size={21}
                                                            aria-hidden="true"
                                                        />
                                                    </div>

                                                    <div>
                                                        <p className="font-mono text-xs font-bold tracking-[0.16em] text-cyan-400/70">
                                                            STEP {step.number}
                                                        </p>

                                                        <h3 className="mt-2 text-lg font-bold text-white">
                                                            {step.title}
                                                        </h3>

                                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                                            {step.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.article>

                                            {index < steps.length - 1 && (
                                                <div
                                                    aria-hidden="true"
                                                    className="flex h-12 justify-center"
                                                >
                                                    <div className="relative w-px bg-gradient-to-b from-cyan-400/20 via-cyan-300/70 to-cyan-400/20">
                                                        <motion.span
                                                            animate={{
                                                                y: [0, 35, 0],
                                                                opacity: [0, 1, 0],
                                                            }}
                                                            transition={{
                                                                duration: 1.8,
                                                                repeat: Infinity,
                                                                delay: index * 0.15,
                                                            }}
                                                            className="absolute h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Response example */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 18,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.25,
                                    }}
                                    className="mt-10 grid gap-4 md:grid-cols-2"
                                >
                                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.045] p-5">
                                        <p className="text-xs font-bold uppercase tracking-[0.17em] text-emerald-300">
                                            Success Response
                                        </p>

                                        <code className="mt-3 block font-mono text-sm text-emerald-200">
                                            SUCCESS Subscribed to Pensacola
                                        </code>
                                    </div>

                                    <div className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.04] p-5">
                                        <p className="text-xs font-bold uppercase tracking-[0.17em] text-rose-300">
                                            Error Response
                                        </p>

                                        <code className="mt-3 block font-mono text-sm text-rose-200">
                                            ERROR Location already subscribed
                                        </code>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Lifecycle details */}
                        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {[
                                {
                                    title: "Structured Commands",
                                    description:
                                        "Client operations are translated into recognizable command strings that the server can route to the appropriate handler.",
                                },
                                {
                                    title: "Central Validation",
                                    description:
                                        "The server validates user identity, request arguments, and application state before performing protected operations.",
                                },
                                {
                                    title: "State Synchronization",
                                    description:
                                        "In memory user data and persistent text files are updated together when account or subscription information changes.",
                                },
                                {
                                    title: "Explicit Responses",
                                    description:
                                        "Every request produces a server response that communicates whether the operation succeeded or why it failed.",
                                },
                            ].map((item, index) => (
                                <motion.article
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.35,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.07,
                                    }}
                                    className="rounded-2xl border border-white/[0.08] bg-[#050b18]/75 p-6"
                                >
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] font-mono text-xs font-black text-cyan-300">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <h3 className="mt-4 text-xl font-bold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-400">
                                        {item.description}
                                    </p>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>
                {/* ============================================================
    Authentication & User Management
============================================================= */}
                <section
                    aria-labelledby="authentication-heading"
                    className="border-y border-white/[0.06] bg-[#030816]/70 px-6 py-24 sm:px-8 lg:px-12"
                >
                    <div className="mx-auto w-full max-w-7xl">
                        {/* Section heading */}
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
                                amount: 0.4,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mx-auto max-w-4xl text-center"
                        >
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                                Authentication & User Management
                            </p>

                            <h2
                                id="authentication-heading"
                                className="mt-4 text-4xl font-black tracking-[-0.035em] text-white sm:text-5xl"
                            >
                                Server Controlled Account Access
                            </h2>

                            <p className="mt-7 text-lg leading-8 text-slate-300">
                                User identity is managed centrally by the server rather than
                                trusted to the terminal client. Registration, login, password
                                changes, and logout requests are transmitted through the TCP
                                connection and processed against the server’s account records.
                                Successful authentication allows the client to access protected
                                subscription and messaging operations.
                            </p>
                        </motion.div>

                        {/* Authentication lifecycle */}
                        <div className="relative mx-auto mt-16 max-w-6xl">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-[3rem] bg-cyan-500/[0.03] blur-3xl"
                            />

                            <div className="relative rounded-[2rem] border border-white/10 bg-[#040a17]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-10">
                                <div className="grid gap-6 lg:grid-cols-4">
                                    {[
                                        {
                                            icon: UserPlus,
                                            number: "01",
                                            title: "Register",
                                            description:
                                                "A new username and password are submitted to the server, validated, added to the in memory user collection, and written to persistent storage.",
                                            detail: "Creates a persistent account",
                                        },
                                        {
                                            icon: LogIn,
                                            number: "02",
                                            title: "Login",
                                            description:
                                                "The server compares submitted credentials with existing account records before allowing access to authenticated client operations.",
                                            detail: "Validates account credentials",
                                        },
                                        {
                                            icon: RefreshCw,
                                            number: "03",
                                            title: "Change Password",
                                            description:
                                                "An authenticated user can replace the password associated with their account, and the updated account state is saved to disk.",
                                            detail: "Updates stored credentials",
                                        },
                                        {
                                            icon: LogOut,
                                            number: "04",
                                            title: "Logout",
                                            description:
                                                "The client leaves the authenticated menu and ends the active application session without deleting the persistent account.",
                                            detail: "Ends authenticated access",
                                        },
                                    ].map((operation, index) => (
                                        <motion.article
                                            key={operation.title}
                                            initial={{
                                                opacity: 0,
                                                y: 22,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.35,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.08,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            whileHover={{
                                                y: -6,
                                            }}
                                            className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#07101f]/90 p-6 transition-colors duration-300 hover:border-cyan-400/30"
                                        >
                                            <div
                                                aria-hidden="true"
                                                className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-blue-500/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            />

                                            <div className="relative z-10">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                                        <operation.icon
                                                            size={23}
                                                            aria-hidden="true"
                                                        />
                                                    </div>

                                                    <span className="font-mono text-xs font-bold tracking-[0.16em] text-cyan-400/60">
                                                        {operation.number}
                                                    </span>
                                                </div>

                                                <h3 className="mt-5 text-xl font-bold text-white">
                                                    {operation.title}
                                                </h3>

                                                <p className="mt-3 text-sm leading-7 text-slate-400">
                                                    {operation.description}
                                                </p>

                                                <div className="mt-5 border-t border-white/[0.07] pt-4">
                                                    <p className="text-xs font-semibold uppercase tracking-[0.13em] text-cyan-300">
                                                        {operation.detail}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.article>
                                    ))}
                                </div>

                                {/* Authentication flow */}
                                <div className="mt-10 rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.025] p-6 sm:p-8">
                                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                                        <div className="max-w-2xl">
                                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                                Login Request Flow
                                            </p>

                                            <h3 className="mt-3 text-2xl font-black text-white">
                                                Credentials Are Evaluated on the Server
                                            </h3>

                                            <p className="mt-4 text-sm leading-7 text-slate-400">
                                                The terminal client collects the username and
                                                password, formats the login request, and sends it
                                                over the existing socket. The server searches its
                                                loaded user records, compares the credentials,
                                                and returns either a successful authentication
                                                response or an error.
                                            </p>
                                        </div>

                                        <div className="flex shrink-0 flex-wrap gap-2">
                                            {[
                                                "Client Input",
                                                "TCP Request",
                                                "Server Validation",
                                                "Access Result",
                                            ].map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-300"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                                        <div className="rounded-2xl border border-white/[0.08] bg-[#07101f]/90 p-5">
                                            <div className="flex items-center gap-3">
                                                <Terminal
                                                    size={20}
                                                    className="text-cyan-300"
                                                    aria-hidden="true"
                                                />

                                                <p className="font-bold text-white">
                                                    Terminal Client
                                                </p>
                                            </div>

                                            <p className="mt-3 font-mono text-xs leading-6 text-slate-400">
                                                Username: John
                                                <br />
                                                Password: •••
                                            </p>
                                        </div>

                                        <div
                                            aria-hidden="true"
                                            className="hidden h-px w-12 bg-gradient-to-r from-cyan-400/20 to-cyan-300/80 md:block"
                                        />

                                        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] p-5">
                                            <div className="flex items-center gap-3">
                                                <Server
                                                    size={20}
                                                    className="text-cyan-300"
                                                    aria-hidden="true"
                                                />

                                                <p className="font-bold text-white">
                                                    Server Validation
                                                </p>
                                            </div>

                                            <p className="mt-3 text-xs leading-6 text-slate-400">
                                                Find the username, compare the submitted
                                                password, and return the authentication result.
                                            </p>
                                        </div>

                                        <div
                                            aria-hidden="true"
                                            className="hidden h-px w-12 bg-gradient-to-r from-cyan-400/20 to-cyan-300/80 md:block"
                                        />

                                        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.045] p-5">
                                            <div className="flex items-center gap-3">
                                                <KeyRound
                                                    size={20}
                                                    className="text-emerald-300"
                                                    aria-hidden="true"
                                                />

                                                <p className="font-bold text-white">
                                                    Authenticated Access
                                                </p>
                                            </div>

                                            <p className="mt-3 text-xs leading-6 text-slate-400">
                                                The client enters the protected menu and may
                                                manage subscriptions, messages, and account
                                                settings.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Protected operations */}
                                <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                                    <motion.article
                                        initial={{
                                            opacity: 0,
                                            x: -20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.35,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                        }}
                                        className="rounded-2xl border border-white/[0.08] bg-[#07101f]/80 p-6"
                                    >
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                            <KeyRound size={21} aria-hidden="true" />
                                        </div>

                                        <h3 className="mt-4 text-xl font-bold text-white">
                                            Protected Operations
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-400">
                                            Account specific features become available after
                                            login. These operations rely on the authenticated
                                            username to determine which subscriptions, messages,
                                            and account data should be accessed.
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {[
                                                "Subscribe",
                                                "Unsubscribe",
                                                "View Locations",
                                                "Direct Message",
                                                "Group Message",
                                                "Change Password",
                                            ].map((operation) => (
                                                <span
                                                    key={operation}
                                                    className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-semibold text-slate-300"
                                                >
                                                    {operation}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.article>

                                    <motion.article
                                        initial={{
                                            opacity: 0,
                                            x: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.35,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.08,
                                        }}
                                        className="rounded-2xl border border-white/[0.08] bg-[#07101f]/80 p-6"
                                    >
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                            <Database size={21} aria-hidden="true" />
                                        </div>

                                        <h3 className="mt-4 text-xl font-bold text-white">
                                            Persistent Account Records
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-400">
                                            Registered accounts are loaded from{" "}
                                            <code className="rounded bg-white/[0.05] px-1.5 py-0.5 font-mono text-cyan-300">
                                                users.txt
                                            </code>{" "}
                                            when the server starts. Registration and password
                                            changes update the persistent account file so those
                                            changes remain available after the process stops and
                                            restarts.
                                        </p>

                                        <div className="mt-5 rounded-xl border border-white/[0.07] bg-[#030816] p-4">
                                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                                Stored Account Shape
                                            </p>

                                            <code className="mt-3 block font-mono text-sm text-cyan-200">
                                                username password subscriptions
                                            </code>
                                        </div>
                                    </motion.article>
                                </div>
                            </div>
                        </div>

                        {/* Security assessment */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.35,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="mt-14 rounded-[1.75rem] border border-amber-400/20 bg-amber-400/[0.035] p-6 sm:p-8"
                        >
                            <div className="flex flex-col gap-5 md:flex-row md:items-start">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/[0.07] text-amber-300">
                                    <KeyRound size={23} aria-hidden="true" />
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                                        Security Assessment
                                    </p>

                                    <h3 className="mt-2 text-2xl font-black text-white">
                                        Functional Authentication With Clear Production
                                        Limitations
                                    </h3>

                                    <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-300">
                                        The implementation demonstrates account lifecycle,
                                        credential validation, authenticated feature access, and
                                        persistent account management. It is not presented as a
                                        production security system: credentials are stored in a
                                        text based persistence format, and communication does not
                                        use transport encryption. A production version would add
                                        salted password hashing, TLS, stronger session controls,
                                        secure database storage, and request rate limiting.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
                {/* ============================================================
    Concurrent Client Handling
============================================================= */}
                <section
                    aria-labelledby="concurrency-heading"
                    className="px-6 py-24 sm:px-8 lg:px-12"
                >
                    <div className="mx-auto w-full max-w-7xl">
                        {/* Section heading */}
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
                                amount: 0.4,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mx-auto max-w-4xl text-center"
                        >
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                                Concurrent Client Handling
                            </p>

                            <h2
                                id="concurrency-heading"
                                className="mt-4 text-4xl font-black tracking-[-0.035em] text-white sm:text-5xl"
                            >
                                One Server, Multiple Active Sessions
                            </h2>

                            <p className="mt-7 text-lg leading-8 text-slate-300">
                                The server uses a thread per client model so multiple terminal
                                clients can remain connected and submit requests independently.
                                Each accepted socket is assigned to a dedicated worker thread,
                                allowing one user’s authentication, subscription, or messaging
                                operation to be processed without blocking every other client.
                            </p>
                        </motion.div>

                        {/* Main concurrency visualization */}
                        <div className="relative mx-auto mt-16 max-w-6xl">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-[3rem] bg-cyan-500/[0.035] blur-3xl"
                            />

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#040a17]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-10">
                                {/* Listening server */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.97,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.35,
                                    }}
                                    transition={{
                                        duration: 0.55,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="mx-auto max-w-3xl rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-cyan-400/[0.09] via-[#07101f] to-blue-500/[0.07] p-6 shadow-[0_0_45px_rgba(34,211,238,0.08)] sm:p-8"
                                >
                                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.09] text-cyan-200">
                                                <Server size={27} aria-hidden="true" />
                                            </div>

                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                                                    Connection Entry Point
                                                </p>

                                                <h3 className="mt-2 text-2xl font-black text-white">
                                                    Listening Server Socket
                                                </h3>

                                                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                                                    The server binds to port 8080, listens for
                                                    incoming TCP connections, and accepts each
                                                    client socket as a separate communication
                                                    channel.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300">
                                                bind()
                                            </span>

                                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300">
                                                listen()
                                            </span>

                                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300">
                                                accept()
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Animated branching */}
                                <div
                                    aria-hidden="true"
                                    className="relative mx-auto mt-8 hidden h-24 max-w-4xl lg:block"
                                >
                                    <div className="absolute left-1/2 top-0 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/80 to-cyan-400/20" />

                                    <div className="absolute left-[16.66%] right-[16.66%] top-10 h-px bg-gradient-to-r from-cyan-400/20 via-cyan-300/80 to-cyan-400/20" />

                                    {[16.66, 50, 83.33].map((position, index) => (
                                        <div
                                            key={position}
                                            className="absolute top-10 h-14 w-px bg-gradient-to-b from-cyan-300/80 to-cyan-400/20"
                                            style={{
                                                left: `${position}%`,
                                            }}
                                        >
                                            <motion.span
                                                animate={{
                                                    y: [0, 42, 0],
                                                    opacity: [0, 1, 0],
                                                }}
                                                transition={{
                                                    duration: 1.8,
                                                    repeat: Infinity,
                                                    delay: index * 0.25,
                                                    ease: "easeInOut",
                                                }}
                                                className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)]"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Worker threads */}
                                <div className="mt-8 grid gap-6 lg:mt-0 lg:grid-cols-3">
                                    {[
                                        {
                                            number: "01",
                                            title: "Worker Thread 01",
                                            user: "Authenticated Client A",
                                            operation: "Subscription request",
                                        },
                                        {
                                            number: "02",
                                            title: "Worker Thread 02",
                                            user: "Authenticated Client B",
                                            operation: "Direct message request",
                                        },
                                        {
                                            number: "N",
                                            title: "Worker Thread N",
                                            user: "Additional Client",
                                            operation: "Independent request flow",
                                        },
                                    ].map((thread, index) => (
                                        <motion.article
                                            key={thread.title}
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
                                                amount: 0.35,
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.1,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            whileHover={{
                                                y: -6,
                                            }}
                                            className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#07101f]/90 p-6 transition-colors duration-300 hover:border-cyan-400/30"
                                        >
                                            <div
                                                aria-hidden="true"
                                                className="absolute inset-0 bg-gradient-to-br from-cyan-400/[0.06] via-transparent to-blue-500/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            />

                                            <div className="relative z-10">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                                        <Cpu size={23} aria-hidden="true" />
                                                    </div>

                                                    <span className="font-mono text-xs font-bold tracking-[0.16em] text-cyan-400/60">
                                                        THREAD {thread.number}
                                                    </span>
                                                </div>

                                                <h3 className="mt-5 text-xl font-bold text-white">
                                                    {thread.title}
                                                </h3>

                                                <div className="mt-5 space-y-3">
                                                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                                                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                                                            Connected Session
                                                        </p>

                                                        <p className="mt-2 text-sm font-semibold text-slate-300">
                                                            {thread.user}
                                                        </p>
                                                    </div>

                                                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                                                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                                                            Example Workload
                                                        </p>

                                                        <p className="mt-2 text-sm font-semibold text-cyan-300">
                                                            {thread.operation}
                                                        </p>
                                                    </div>
                                                </div>

                                                <p className="mt-5 text-sm leading-7 text-slate-400">
                                                    This thread reads requests from its assigned
                                                    socket, invokes server operations, sends
                                                    responses, and continues until the client
                                                    disconnects.
                                                </p>
                                            </div>
                                        </motion.article>
                                    ))}
                                </div>

                                {/* Shared state */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.35,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2,
                                    }}
                                    className="mt-10 rounded-3xl border border-amber-400/20 bg-amber-400/[0.035] p-6 sm:p-8"
                                >
                                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                                        <div>
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/[0.07] text-amber-300">
                                                <LockKeyhole size={23} aria-hidden="true" />
                                            </div>

                                            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                                                Shared State Coordination
                                            </p>

                                            <h3 className="mt-3 text-2xl font-black text-white">
                                                Protecting Shared Server Data
                                            </h3>

                                            <p className="mt-4 text-sm leading-7 text-slate-300">
                                                Worker threads may access shared user records,
                                                subscription data, online user state, and
                                                persistence files. A mutex provides a
                                                synchronization boundary so critical operations
                                                do not modify shared data at the same time.
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-white/[0.08] bg-[#050b18]/80 p-5 sm:p-6">
                                            <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                                                <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.04] p-4 text-center">
                                                    <p className="font-mono text-xs font-bold text-cyan-300">
                                                        THREAD A
                                                    </p>

                                                    <p className="mt-2 text-sm text-slate-400">
                                                        Update subscription
                                                    </p>
                                                </div>

                                                <div className="flex justify-center">
                                                    <LockKeyhole
                                                        size={22}
                                                        className="text-amber-300"
                                                        aria-hidden="true"
                                                    />
                                                </div>

                                                <div className="rounded-xl border border-blue-400/15 bg-blue-400/[0.04] p-4 text-center">
                                                    <p className="font-mono text-xs font-bold text-blue-300">
                                                        THREAD B
                                                    </p>

                                                    <p className="mt-2 text-sm text-slate-400">
                                                        Read shared user state
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-5 rounded-xl border border-amber-400/15 bg-amber-400/[0.03] p-4 text-center">
                                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-300">
                                                    Mutual Exclusion Boundary
                                                </p>

                                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                                    Only one protected critical section executes
                                                    at a time while other threads wait.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Engineering explanation cards */}
                        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {[
                                {
                                    icon: Workflow,
                                    title: "Thread Per Client",
                                    description:
                                        "Each accepted socket is handled by a separate execution path, keeping client sessions independent.",
                                },
                                {
                                    icon: Layers3,
                                    title: "Concurrent Workloads",
                                    description:
                                        "Authentication, subscription, and messaging requests can be processed across multiple active sessions.",
                                },
                                {
                                    icon: LockKeyhole,
                                    title: "Mutex Coordination",
                                    description:
                                        "Shared state is protected during critical operations to reduce race-condition risk.",
                                },
                                {
                                    icon: Network,
                                    title: "Persistent Connections",
                                    description:
                                        "The client and server continue exchanging commands through the same socket until logout or disconnection.",
                                },
                            ].map((item, index) => (
                                <motion.article
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.35,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.07,
                                    }}
                                    className="rounded-2xl border border-white/[0.08] bg-[#050b18]/75 p-6"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300">
                                        <item.icon size={20} aria-hidden="true" />
                                    </div>

                                    <h3 className="mt-4 text-xl font-bold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-400">
                                        {item.description}
                                    </p>
                                </motion.article>
                            ))}
                        </div>

                        {/* Tradeoff explanation */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.35,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="mt-14 grid gap-6 lg:grid-cols-2"
                        >
                            <article className="rounded-[1.75rem] border border-emerald-400/20 bg-emerald-400/[0.035] p-6 sm:p-8">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                                    Why This Model Works
                                </p>

                                <h3 className="mt-3 text-2xl font-black text-white">
                                    Straightforward Session Isolation
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-300">
                                    A thread per client design is easy to understand and maps
                                    naturally to the application’s long lived terminal
                                    sessions. Each thread owns one client socket and can process
                                    that user’s requests sequentially without blocking unrelated
                                    connections.
                                </p>
                            </article>

                            <article className="rounded-[1.75rem] border border-amber-400/20 bg-amber-400/[0.035] p-6 sm:p-8">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                                    Scalability Tradeoff
                                </p>

                                <h3 className="mt-3 text-2xl font-black text-white">
                                    Simple, but Not Unlimited
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-300">
                                    Creating one operating system thread for every connection is
                                    appropriate for a learning scale system but consumes more
                                    memory and scheduling overhead as client counts grow. A
                                    larger production system could use a fixed thread pool,
                                    non blocking sockets, or an event driven I/O model.
                                </p>
                            </article>
                        </motion.div>
                    </div>
                </section>
                {/* ============================================================
    Custom TCP Protocol
============================================================= */}
                <section
                    aria-labelledby="tcp-protocol-heading"
                    className="border-y border-white/[0.06] bg-[#030816]/70 px-6 py-24 sm:px-8 lg:px-12"
                >
                    <div className="mx-auto w-full max-w-7xl">
                        {/* Section heading */}
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
                                amount: 0.4,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mx-auto max-w-4xl text-center"
                        >
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                                Custom TCP Protocol
                            </p>

                            <h2
                                id="tcp-protocol-heading"
                                className="mt-4 text-4xl font-black tracking-[-0.035em] text-white sm:text-5xl"
                            >
                                Structured Commands Over Raw Sockets
                            </h2>

                            <p className="mt-7 text-lg leading-8 text-slate-300">
                                The client and server communicate through a custom
                                application layer protocol built on top of TCP. Instead of
                                exchanging objects directly, the client converts user actions
                                into structured text messages. The server parses each message,
                                identifies the requested operation, executes the matching
                                handler, and sends a text response through the same socket.
                            </p>
                        </motion.div>

                        {/* Protocol overview */}
                        <div className="relative mx-auto mt-16 max-w-6xl">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-[3rem] bg-cyan-500/[0.035] blur-3xl"
                            />

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#040a17]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-10">
                                <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
                                    {/* Client encoder */}
                                    <motion.article
                                        initial={{
                                            opacity: 0,
                                            x: -24,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.35,
                                        }}
                                        transition={{
                                            duration: 0.55,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="rounded-3xl border border-white/[0.09] bg-[#07101f]/90 p-6 sm:p-8"
                                    >
                                        <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                            <Terminal size={25} aria-hidden="true" />
                                        </div>

                                        <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                            Client Responsibility
                                        </p>

                                        <h3 className="mt-3 text-2xl font-black text-white">
                                            Encode the User Request
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-slate-400">
                                            The client gathers values from the terminal menu and
                                            packages them into a command string that contains the
                                            operation name and required arguments.
                                        </p>

                                        <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#030816] p-5">
                                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                                Conceptual Command Shape
                                            </p>

                                            <code className="mt-4 block overflow-x-auto font-mono text-sm leading-7 text-cyan-200">
                                                OPERATION username argument
                                            </code>
                                        </div>
                                    </motion.article>

                                    {/* Connection flow */}
                                    <div
                                        aria-hidden="true"
                                        className="flex items-center justify-center py-2 lg:w-28"
                                    >
                                        <div className="relative flex h-20 w-px items-center justify-center bg-gradient-to-b from-cyan-400/20 via-cyan-300/80 to-cyan-400/20 lg:h-px lg:w-full lg:bg-gradient-to-r">
                                            <motion.span
                                                animate={{
                                                    y: [-24, 24, -24],
                                                    opacity: [0, 1, 0],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                                className="absolute h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)] lg:hidden"
                                            />

                                            <motion.span
                                                animate={{
                                                    x: [-36, 36, -36],
                                                    opacity: [0, 1, 0],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                                className="absolute hidden h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)] lg:block"
                                            />
                                        </div>
                                    </div>

                                    {/* Server decoder */}
                                    <motion.article
                                        initial={{
                                            opacity: 0,
                                            x: 24,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.35,
                                        }}
                                        transition={{
                                            duration: 0.55,
                                            delay: 0.08,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.07] via-[#07101f] to-blue-500/[0.04] p-6 sm:p-8"
                                    >
                                        <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/[0.09] text-cyan-200">
                                            <Server size={25} aria-hidden="true" />
                                        </div>

                                        <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                            Server Responsibility
                                        </p>

                                        <h3 className="mt-3 text-2xl font-black text-white">
                                            Parse and Route the Command
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-slate-400">
                                            The server reads bytes from the socket, converts the
                                            received data into a command string, separates the
                                            operation from its arguments, and routes the request
                                            to the correct server function.
                                        </p>

                                        <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#030816] p-5">
                                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                                Server Decision
                                            </p>

                                            <code className="mt-4 block overflow-x-auto font-mono text-sm leading-7 text-cyan-200">
                                                command → handler → response
                                            </code>
                                        </div>
                                    </motion.article>
                                </div>

                                {/* Request envelope */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.35,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.15,
                                    }}
                                    className="mt-10 rounded-3xl border border-white/[0.08] bg-[#050b18]/80 p-6 sm:p-8"
                                >
                                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                                        <div className="max-w-2xl">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                                <Braces size={23} aria-hidden="true" />
                                            </div>

                                            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                                Message Structure
                                            </p>

                                            <h3 className="mt-3 text-2xl font-black text-white">
                                                A Lightweight Text Based Request Envelope
                                            </h3>

                                            <p className="mt-4 text-sm leading-7 text-slate-400">
                                                Each request contains enough information for the
                                                server to determine what operation should run and
                                                which user or location values are involved. This
                                                keeps communication human readable and easy to
                                                inspect while developing and debugging.
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
                                            {[
                                                "Operation",
                                                "Username",
                                                "Location",
                                                "Recipient",
                                                "Message",
                                                "Password",
                                            ].map((field) => (
                                                <span
                                                    key={field}
                                                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-slate-300"
                                                >
                                                    {field}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mt-8 grid gap-5 md:grid-cols-3">
                                        {[
                                            {
                                                label: "Command",
                                                value: "SUBSCRIBE",
                                                description:
                                                    "Identifies which server operation should execute.",
                                            },
                                            {
                                                label: "Identity",
                                                value: "John",
                                                description:
                                                    "Associates the request with a specific account.",
                                            },
                                            {
                                                label: "Argument",
                                                value: "Pensacola",
                                                description:
                                                    "Provides the location required by the operation.",
                                            },
                                        ].map((field, index) => (
                                            <motion.article
                                                key={field.label}
                                                initial={{
                                                    opacity: 0,
                                                    y: 18,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.35,
                                                }}
                                                transition={{
                                                    duration: 0.45,
                                                    delay: index * 0.08,
                                                }}
                                                className="rounded-2xl border border-white/[0.08] bg-[#030816] p-5"
                                            >
                                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                                    {field.label}
                                                </p>

                                                <code className="mt-3 block font-mono text-base font-bold text-cyan-200">
                                                    {field.value}
                                                </code>

                                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                                    {field.description}
                                                </p>
                                            </motion.article>
                                        ))}
                                    </div>

                                    <div className="mt-5 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.035] p-5">
                                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
                                            Combined Request
                                        </p>

                                        <code className="mt-3 block overflow-x-auto font-mono text-sm text-cyan-100 sm:text-base">
                                            SUBSCRIBE John Pensacola
                                        </code>
                                    </div>
                                </motion.div>

                                {/* Command routing matrix */}
                                <div className="mt-10">
                                    <div className="mx-auto max-w-3xl text-center">
                                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                            Command Routing
                                        </p>

                                        <h3 className="mt-3 text-3xl font-black text-white">
                                            One Protocol, Multiple Server Operations
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-slate-400">
                                            Different command identifiers are mapped to focused
                                            server methods. The protocol acts as the boundary
                                            between the terminal interface and the server’s
                                            business logic.
                                        </p>
                                    </div>

                                    <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                                        {[
                                            {
                                                command: "REGISTER",
                                                handler: "registerUser()",
                                                description:
                                                    "Creates and persists a new account.",
                                            },
                                            {
                                                command: "LOGIN",
                                                handler: "loginUser()",
                                                description:
                                                    "Validates submitted account credentials.",
                                            },
                                            {
                                                command: "SUBSCRIBE",
                                                handler: "subscribe()",
                                                description:
                                                    "Adds a weather location to a user account.",
                                            },
                                            {
                                                command: "UNSUBSCRIBE",
                                                handler: "unsubscribe()",
                                                description:
                                                    "Removes a saved location subscription.",
                                            },
                                            {
                                                command: "DIRECT MESSAGE",
                                                handler: "sendDirectMessage()",
                                                description:
                                                    "Routes a message to a specific user.",
                                            },
                                            {
                                                command: "GROUP MESSAGE",
                                                handler: "sendGroupMessage()",
                                                description:
                                                    "Sends a message to users associated with a location.",
                                            },
                                        ].map((route, index) => (
                                            <motion.article
                                                key={route.command}
                                                initial={{
                                                    opacity: 0,
                                                    y: 20,
                                                }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.35,
                                                }}
                                                transition={{
                                                    duration: 0.45,
                                                    delay: index * 0.06,
                                                }}
                                                whileHover={{
                                                    y: -5,
                                                }}
                                                className="group rounded-2xl border border-white/[0.08] bg-[#07101f]/85 p-5 transition-colors duration-300 hover:border-cyan-400/25"
                                            >
                                                <div className="flex items-center justify-between gap-4">
                                                    <code className="font-mono text-sm font-black text-cyan-300">
                                                        {route.command}
                                                    </code>

                                                    <Send
                                                        size={17}
                                                        className="shrink-0 text-cyan-400/60"
                                                        aria-hidden="true"
                                                    />
                                                </div>

                                                <div className="mt-4 border-t border-white/[0.07] pt-4">
                                                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                                                        Server Handler
                                                    </p>

                                                    <code className="mt-2 block font-mono text-sm text-slate-300">
                                                        {route.handler}
                                                    </code>
                                                </div>

                                                <p className="mt-4 text-sm leading-6 text-slate-400">
                                                    {route.description}
                                                </p>
                                            </motion.article>
                                        ))}
                                    </div>
                                </div>

                                {/* Response handling */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.35,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    className="mt-10 rounded-3xl border border-white/[0.08] bg-[#050b18]/80 p-6 sm:p-8"
                                >
                                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                                        <div>
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                                <MessageSquare size={23} aria-hidden="true" />
                                            </div>

                                            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                                Response Handling
                                            </p>

                                            <h3 className="mt-3 text-2xl font-black text-white">
                                                Every Request Returns an Outcome
                                            </h3>

                                            <p className="mt-4 text-sm leading-7 text-slate-400">
                                                After processing a command, the server sends a
                                                response back through the client’s socket. The
                                                terminal client reads that response and displays
                                                it to the user as confirmation, application
                                                data, or an error message.
                                            </p>
                                        </div>

                                        <div className="grid gap-4">
                                            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-5">
                                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                                                    Success
                                                </p>

                                                <code className="mt-3 block font-mono text-sm text-emerald-200">
                                                    Subscription added successfully
                                                </code>
                                            </div>

                                            <div className="rounded-2xl border border-rose-400/20 bg-rose-400/[0.04] p-5">
                                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose-300">
                                                    Failure
                                                </p>

                                                <code className="mt-3 block font-mono text-sm text-rose-200">
                                                    User or location could not be found
                                                </code>
                                            </div>

                                            <div className="rounded-2xl border border-blue-400/20 bg-blue-400/[0.04] p-5">
                                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                                                    Data Response
                                                </p>

                                                <code className="mt-3 block font-mono text-sm text-blue-200">
                                                    Pensacola, New York, Brewton
                                                </code>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Protocol strengths */}
                        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {[
                                {
                                    icon: Braces,
                                    title: "Human Readable",
                                    description:
                                        "Text commands are easy to inspect in logs and reason about while debugging client-server behavior.",
                                },
                                {
                                    icon: Workflow,
                                    title: "Central Routing",
                                    description:
                                        "A command identifier allows the server to dispatch each request to a focused operation handler.",
                                },
                                {
                                    icon: Network,
                                    title: "Transport Independent Logic",
                                    description:
                                        "Application operations remain separate from the terminal interface that originally created the request.",
                                },
                                {
                                    icon: MessageSquare,
                                    title: "Explicit Outcomes",
                                    description:
                                        "The server returns clear responses so the client can communicate success, data, or failure.",
                                },
                            ].map((item, index) => (
                                <motion.article
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.35,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.07,
                                    }}
                                    className="rounded-2xl border border-white/[0.08] bg-[#050b18]/75 p-6"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300">
                                        <item.icon size={20} aria-hidden="true" />
                                    </div>

                                    <h3 className="mt-4 text-xl font-bold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-400">
                                        {item.description}
                                    </p>
                                </motion.article>
                            ))}
                        </div>

                        {/* TCP limitations */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.35,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="mt-14 rounded-[1.75rem] border border-amber-400/20 bg-amber-400/[0.035] p-6 sm:p-8"
                        >
                            <div className="flex flex-col gap-5 md:flex-row md:items-start">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/[0.07] text-amber-300">
                                    <AlertTriangle size={23} aria-hidden="true" />
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                                        Protocol Design Consideration
                                    </p>

                                    <h3 className="mt-2 text-2xl font-black text-white">
                                        TCP Delivers Bytes, Not Complete Messages
                                    </h3>

                                    <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-300">
                                        TCP preserves byte order and reliable delivery, but it
                                        does not preserve application message boundaries. A
                                        single call to send does not guarantee that the receiver
                                        obtains the entire command in one read. A production
                                        protocol should define explicit framing through message
                                        lengths, delimiters, or a serialization format so the
                                        receiver can reliably reconstruct complete requests.
                                    </p>

                                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                                        {[
                                            {
                                                title: "Current Approach",
                                                value: "Text commands",
                                            },
                                            {
                                                title: "Improved Framing",
                                                value: "Length prefix",
                                            },
                                            {
                                                title: "Structured Format",
                                                value: "JSON or binary",
                                            },
                                        ].map((item) => (
                                            <div
                                                key={item.title}
                                                className="rounded-xl border border-white/[0.08] bg-[#050b18]/65 p-4"
                                            >
                                                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                                                    {item.title}
                                                </p>

                                                <p className="mt-2 text-sm font-semibold text-slate-300">
                                                    {item.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
                {/* ============================================================
    Persistent Storage
============================================================= */}
                <section
                    aria-labelledby="persistent-storage-heading"
                    className="px-6 py-24 sm:px-8 lg:px-12"
                >
                    <div className="mx-auto w-full max-w-7xl">
                        {/* Section heading */}
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
                                amount: 0.4,
                            }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mx-auto max-w-4xl text-center"
                        >
                            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                                Persistent Storage
                            </p>

                            <h2
                                id="persistent-storage-heading"
                                className="mt-4 text-4xl font-black tracking-[-0.035em] text-white sm:text-5xl"
                            >
                                Preserving State Across Server Restarts
                            </h2>

                            <p className="mt-7 text-lg leading-8 text-slate-300">
                                The platform separates active in memory application state from
                                durable file-based storage. When the server starts, saved user
                                accounts and location subscriptions are loaded into runtime
                                objects. When account or subscription data changes, the server
                                rewrites the corresponding persistence file so the updated state
                                remains available after shutdown.
                            </p>
                        </motion.div>

                        {/* Persistence lifecycle */}
                        <div className="relative mx-auto mt-16 max-w-6xl">
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 rounded-[3rem] bg-cyan-500/[0.03] blur-3xl"
                            />

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#040a17]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8 lg:p-10">
                                <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
                                    {/* Startup files */}
                                    <motion.article
                                        initial={{
                                            opacity: 0,
                                            x: -24,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.35,
                                        }}
                                        transition={{
                                            duration: 0.55,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="rounded-3xl border border-white/[0.09] bg-[#07101f]/90 p-6"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                            <HardDrive size={23} aria-hidden="true" />
                                        </div>

                                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                            Step 01
                                        </p>

                                        <h3 className="mt-3 text-xl font-bold text-white">
                                            Read Saved Files
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-400">
                                            The server opens the account and subscription files
                                            during initialization and reads each stored record.
                                        </p>

                                        <div className="mt-5 space-y-3">
                                            <div className="rounded-xl border border-white/[0.07] bg-[#030816] p-4">
                                                <code className="font-mono text-sm text-cyan-200">
                                                    users.txt
                                                </code>
                                            </div>

                                            <div className="rounded-xl border border-white/[0.07] bg-[#030816] p-4">
                                                <code className="font-mono text-sm text-cyan-200">
                                                    subscriptions.txt
                                                </code>
                                            </div>
                                        </div>
                                    </motion.article>

                                    <div
                                        aria-hidden="true"
                                        className="flex items-center justify-center py-2 lg:w-14"
                                    >
                                        <div className="relative h-16 w-px bg-gradient-to-b from-cyan-400/20 via-cyan-300/80 to-cyan-400/20 lg:h-px lg:w-full lg:bg-gradient-to-r">
                                            <motion.span
                                                animate={{
                                                    y: [-18, 18, -18],
                                                    opacity: [0, 1, 0],
                                                }}
                                                transition={{
                                                    duration: 1.8,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                                className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)] lg:hidden"
                                            />

                                            <motion.span
                                                animate={{
                                                    x: [-16, 16, -16],
                                                    opacity: [0, 1, 0],
                                                }}
                                                transition={{
                                                    duration: 1.8,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                                className="absolute top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)] lg:block"
                                            />
                                        </div>
                                    </div>

                                    {/* Runtime state */}
                                    <motion.article
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
                                            amount: 0.35,
                                        }}
                                        transition={{
                                            duration: 0.55,
                                            delay: 0.08,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] via-[#07101f] to-blue-500/[0.04] p-6"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/[0.09] text-cyan-200">
                                            <Server size={23} aria-hidden="true" />
                                        </div>

                                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                            Step 02
                                        </p>

                                        <h3 className="mt-3 text-xl font-bold text-white">
                                            Build In-Memory State
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-400">
                                            Parsed records are converted into runtime user
                                            objects and server-managed collections for fast
                                            access during active sessions.
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {[
                                                "User objects",
                                                "Passwords",
                                                "Locations",
                                                "Messages",
                                                "Online state",
                                            ].map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-semibold text-slate-300"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.article>

                                    <div
                                        aria-hidden="true"
                                        className="flex items-center justify-center py-2 lg:w-14"
                                    >
                                        <div className="relative h-16 w-px bg-gradient-to-b from-cyan-400/20 via-cyan-300/80 to-cyan-400/20 lg:h-px lg:w-full lg:bg-gradient-to-r">
                                            <motion.span
                                                animate={{
                                                    y: [-18, 18, -18],
                                                    opacity: [0, 1, 0],
                                                }}
                                                transition={{
                                                    duration: 1.8,
                                                    repeat: Infinity,
                                                    delay: 0.2,
                                                    ease: "easeInOut",
                                                }}
                                                className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)] lg:hidden"
                                            />

                                            <motion.span
                                                animate={{
                                                    x: [-16, 16, -16],
                                                    opacity: [0, 1, 0],
                                                }}
                                                transition={{
                                                    duration: 1.8,
                                                    repeat: Infinity,
                                                    delay: 0.2,
                                                    ease: "easeInOut",
                                                }}
                                                className="absolute top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.9)] lg:block"
                                            />
                                        </div>
                                    </div>

                                    {/* Save changes */}
                                    <motion.article
                                        initial={{
                                            opacity: 0,
                                            x: 24,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.35,
                                        }}
                                        transition={{
                                            duration: 0.55,
                                            delay: 0.16,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="rounded-3xl border border-white/[0.09] bg-[#07101f]/90 p-6"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300">
                                            <Save size={23} aria-hidden="true" />
                                        </div>

                                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                                            Step 03
                                        </p>

                                        <h3 className="mt-3 text-xl font-bold text-white">
                                            Persist Updated State
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-400">
                                            Registration, password changes, subscriptions, and
                                            unsubscriptions trigger save operations that update
                                            durable storage.
                                        </p>

                                        <div className="mt-5 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.035] p-4">
                                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
                                                Result
                                            </p>

                                            <p className="mt-2 text-sm leading-6 text-slate-300">
                                                State survives process shutdown and restart.
                                            </p>
                                        </div>
                                    </motion.article>
                                </div>

                                {/* File responsibilities */}
                                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                                    <motion.article
                                        initial={{
                                            opacity: 0,
                                            x: -20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.35,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                        }}
                                        className="rounded-3xl border border-white/[0.08] bg-[#050b18]/80 p-6 sm:p-8"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                                <Users size={23} aria-hidden="true" />
                                            </div>

                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-400">
                                                    Account Persistence
                                                </p>

                                                <h3 className="mt-1 text-2xl font-black text-white">
                                                    users.txt
                                                </h3>
                                            </div>
                                        </div>

                                        <p className="mt-6 text-sm leading-7 text-slate-400">
                                            Stores registered user account information that the
                                            server reconstructs when the application launches.
                                            Account registration and password updates are written
                                            back to this file.
                                        </p>

                                        <div className="mt-6 rounded-2xl border border-white/[0.07] bg-[#030816] p-5">
                                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                                Example Record
                                            </p>

                                            <code className="mt-3 block overflow-x-auto font-mono text-sm text-cyan-200">
                                                John 111 United_States
                                            </code>
                                        </div>

                                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                            {[
                                                "Username",
                                                "Password",
                                                "Saved locations",
                                                "Account reconstruction",
                                            ].map((item) => (
                                                <div
                                                    key={item}
                                                    className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-slate-300"
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.article>

                                    <motion.article
                                        initial={{
                                            opacity: 0,
                                            x: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.35,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.08,
                                        }}
                                        className="rounded-3xl border border-white/[0.08] bg-[#050b18]/80 p-6 sm:p-8"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/[0.06] text-blue-300">
                                                <Database size={23} aria-hidden="true" />
                                            </div>

                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-300">
                                                    Subscription Persistence
                                                </p>

                                                <h3 className="mt-1 text-2xl font-black text-white">
                                                    subscriptions.txt
                                                </h3>
                                            </div>
                                        </div>

                                        <p className="mt-6 text-sm leading-7 text-slate-400">
                                            Maintains the relationship between usernames and
                                            subscribed weather locations. The server reads this
                                            data during startup and updates it whenever users
                                            subscribe or unsubscribe.
                                        </p>

                                        <div className="mt-6 rounded-2xl border border-white/[0.07] bg-[#030816] p-5">
                                            <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                                                Example Record
                                            </p>

                                            <code className="mt-3 block overflow-x-auto font-mono text-sm text-blue-200">
                                                asdf new_york
                                            </code>
                                        </div>

                                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                            {[
                                                "Username",
                                                "Location",
                                                "Subscription lookup",
                                                "Restart recovery",
                                            ].map((item) => (
                                                <div
                                                    key={item}
                                                    className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-slate-300"
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </motion.article>
                                </div>

                                {/* Mutation flow */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.35,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    className="mt-10 rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.025] p-6 sm:p-8"
                                >
                                    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                                        <div>
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                                <RefreshCw size={23} aria-hidden="true" />
                                            </div>

                                            <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
                                                State Mutation
                                            </p>

                                            <h3 className="mt-3 text-2xl font-black text-white">
                                                Runtime Changes Become Durable Records
                                            </h3>

                                            <p className="mt-4 text-sm leading-7 text-slate-400">
                                                A user action first changes the server’s
                                                in-memory representation. The server then saves
                                                the updated collection so runtime state and disk
                                                state remain aligned.
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            {[
                                                {
                                                    number: "01",
                                                    title: "Receive request",
                                                    description:
                                                        "The client submits a registration, password, subscribe, or unsubscribe command.",
                                                },
                                                {
                                                    number: "02",
                                                    title: "Validate operation",
                                                    description:
                                                        "The server verifies the user and confirms that the requested state change is valid.",
                                                },
                                                {
                                                    number: "03",
                                                    title: "Update memory",
                                                    description:
                                                        "The matching user object or subscription collection is modified.",
                                                },
                                                {
                                                    number: "04",
                                                    title: "Rewrite storage",
                                                    description:
                                                        "The current state is serialized back into the appropriate text file.",
                                                },
                                            ].map((step) => (
                                                <div
                                                    key={step.number}
                                                    className="flex gap-4 rounded-2xl border border-white/[0.07] bg-[#050b18]/75 p-4"
                                                >
                                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.06] font-mono text-xs font-black text-cyan-300">
                                                        {step.number}
                                                    </div>

                                                    <div>
                                                        <p className="font-bold text-white">
                                                            {step.title}
                                                        </p>

                                                        <p className="mt-1 text-sm leading-6 text-slate-400">
                                                            {step.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Persistence characteristics */}
                        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {[
                                {
                                    icon: FileText,
                                    title: "Human-Readable Records",
                                    description:
                                        "Plain text storage makes saved accounts and subscriptions easy to inspect during development.",
                                },
                                {
                                    icon: HardDrive,
                                    title: "Restart Recovery",
                                    description:
                                        "The server rebuilds application state from disk whenever the process starts.",
                                },
                                {
                                    icon: Save,
                                    title: "Explicit Save Operations",
                                    description:
                                        "State-changing commands trigger persistence updates instead of relying only on memory.",
                                },
                                {
                                    icon: Database,
                                    title: "Separated Data Concerns",
                                    description:
                                        "Account information and subscription relationships are maintained through dedicated files.",
                                },
                            ].map((item, index) => (
                                <motion.article
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.35,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.07,
                                    }}
                                    className="rounded-2xl border border-white/[0.08] bg-[#050b18]/75 p-6"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300">
                                        <item.icon size={20} aria-hidden="true" />
                                    </div>

                                    <h3 className="mt-4 text-xl font-bold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-slate-400">
                                        {item.description}
                                    </p>
                                </motion.article>
                            ))}
                        </div>

                        {/* Tradeoffs */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.35,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="mt-14 grid gap-6 lg:grid-cols-2"
                        >
                            <article className="rounded-[1.75rem] border border-emerald-400/20 bg-emerald-400/[0.035] p-6 sm:p-8">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
                                    Why It Fits the Project
                                </p>

                                <h3 className="mt-3 text-2xl font-black text-white">
                                    Simple Persistence With Low Setup Cost
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-300">
                                    File-based storage keeps the application self-contained and
                                    demonstrates serialization, deserialization, startup loading,
                                    and state recovery without requiring an external database
                                    server.
                                </p>
                            </article>

                            <article className="rounded-[1.75rem] border border-amber-400/20 bg-amber-400/[0.035] p-6 sm:p-8">
                                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                                    Production Limitation
                                </p>

                                <h3 className="mt-3 text-2xl font-black text-white">
                                    Files Do Not Provide Database Guarantees
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-300">
                                    Plain text files do not provide transactions, indexed
                                    queries, schema enforcement, automatic concurrency control,
                                    or reliable crash recovery. Simultaneous writes and partial
                                    failures can also create inconsistent or corrupted records.
                                </p>
                            </article>
                        </motion.div>

                        {/* Improvement path */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.35,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="mt-6 rounded-[1.75rem] border border-blue-400/20 bg-blue-400/[0.035] p-6 sm:p-8"
                        >
                            <div className="flex flex-col gap-5 md:flex-row md:items-start">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-300/[0.07] text-blue-300">
                                    <Database size={23} aria-hidden="true" />
                                </div>

                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                                        Future Persistence Layer
                                    </p>

                                    <h3 className="mt-2 text-2xl font-black text-white">
                                        Replace Text Files With a Structured Database
                                    </h3>

                                    <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-300">
                                        A production evolution could move accounts,
                                        subscriptions, messages, and session records into
                                        SQLite, PostgreSQL, or MySQL. This would enable unique
                                        constraints, normalized relationships, transactional
                                        updates, indexed lookups, and safer concurrent access.
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {[
                                            "Users table",
                                            "Subscriptions table",
                                            "Messages table",
                                            "Foreign keys",
                                            "Transactions",
                                            "Indexed queries",
                                        ].map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border border-blue-400/15 bg-blue-400/[0.035] px-3 py-1.5 text-xs font-semibold text-blue-200"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
                {/* ============================================================
    Object-Oriented Design
============================================================= */}
<section
    aria-labelledby="object-oriented-heading"
    className="border-y border-white/[0.06] bg-[#030816]/70 px-6 py-24 sm:px-8 lg:px-12"
>
    <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
        >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                Object-Oriented Design
            </p>

            <h2
                id="object-oriented-heading"
                className="mt-4 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl"
            >
                Clear Separation of Responsibilities
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-300">
                The application is organized around three primary classes that
                each own a specific responsibility. Rather than placing all
                networking, account management, and data handling inside one
                large file, responsibilities are divided between independent
                components that communicate through well defined interfaces.
            </p>
        </motion.div>

        {/* Main diagram */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr] items-center">

            {/* Client */}
            <motion.article
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-[#07101f] p-8"
            >
                <div className="flex justify-between items-center">
                    <Terminal className="text-cyan-300" size={28}/>
                    <span className="font-mono text-cyan-400">CLIENT</span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                    Client
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                    Handles terminal interaction, gathers user input,
                    communicates with the server through TCP sockets,
                    displays responses, and maintains the active connection.
                </p>

                <div className="mt-6 space-y-2">
                    {[
                        "Menu system",
                        "Socket communication",
                        "Command creation",
                        "Response display"
                    ].map(item=>(
                        <div
                            key={item}
                            className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </motion.article>

            <Network
                className="hidden lg:block text-cyan-300"
                size={36}
            />

            {/* Server */}
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .1 }}
                className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] via-[#07101f] to-blue-500/[0.04] p-8"
            >
                <div className="flex justify-between items-center">
                    <Server className="text-cyan-300" size={28}/>
                    <span className="font-mono text-cyan-400">SERVER</span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                    Server
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                    Acts as the application's control center. It accepts client
                    connections, validates requests, manages users,
                    coordinates messaging, processes subscriptions,
                    and saves persistent data.
                </p>

                <div className="mt-6 space-y-2">
                    {[
                        "Authentication",
                        "Subscriptions",
                        "Messaging",
                        "Persistence",
                        "Concurrency"
                    ].map(item=>(
                        <div
                            key={item}
                            className="rounded-lg border border-cyan-400/15 bg-cyan-400/[0.04] px-4 py-3 text-sm text-slate-300"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </motion.article>

            <Network
                className="hidden lg:block text-cyan-300"
                size={36}
            />

            {/* User */}
            <motion.article
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .2 }}
                className="rounded-3xl border border-white/10 bg-[#07101f] p-8"
            >
                <div className="flex justify-between items-center">
                    <Users
                        className="text-cyan-300"
                        size={28}
                    />

                    <span className="font-mono text-cyan-400">
                        USER
                    </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                    User
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                    Represents an authenticated account. The object stores the
                    information associated with one user including credentials,
                    active socket information, subscriptions, and saved
                    messages.
                </p>

                <div className="mt-6 space-y-2">
                    {[
                        "Username",
                        "Password",
                        "Socket",
                        "Subscriptions",
                        "Messages"
                    ].map(item=>(
                        <div
                            key={item}
                            className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </motion.article>

        </div>

        {/* Design Principles */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
                {
                    title:"Single Responsibility",
                    desc:"Each class focuses on one major responsibility instead of combining networking, persistence, and user management together."
                },
                {
                    title:"Encapsulation",
                    desc:"Internal data is managed by the owning class through member functions rather than being modified directly throughout the application."
                },
                {
                    title:"Maintainability",
                    desc:"Adding new functionality becomes easier because changes are usually isolated to one class instead of affecting the entire project."
                },
                {
                    title:"Reusability",
                    desc:"Individual components can be reused or extended without redesigning the complete networking system."
                }
            ].map(card=>(
                <motion.article
                    key={card.title}
                    initial={{opacity:0,y:20}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    className="rounded-2xl border border-white/10 bg-[#050b18] p-6"
                >
                    <h3 className="text-xl font-bold text-white">
                        {card.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                        {card.desc}
                    </p>
                </motion.article>
            ))}

        </div>

        {/* Bottom explanation */}
        <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            className="mt-16 rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.03] p-8"
        >
            <h3 className="text-2xl font-black text-white">
                Why This Design Matters
            </h3>

            <p className="mt-6 max-w-5xl text-sm leading-8 text-slate-300">
                Although this project was built for a systems programming
                course, the architecture follows many of the same principles
                used in larger software systems. Separating networking,
                business logic, persistence, and user state into dedicated
                classes makes the code easier to understand, easier to test,
                and easier to extend. Future improvements such as replacing
                text files with a database or introducing encrypted network
                communication could be added with minimal changes to the
                surrounding components because responsibilities are already
                well organized.
            </p>
        </motion.div>
    </div>
</section>
            </div>
        </main>
    );
}

export default WeatherSubscriptionProject;