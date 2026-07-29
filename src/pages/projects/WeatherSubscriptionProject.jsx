import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
    ArrowDown,
    CloudSun,
    Database,
    KeyRound,
    LogIn,
    LogOut,
    MessageSquare,
    Network,
    RefreshCw,
    Server,
    Terminal,
    UserPlus,
    Users,
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
                "Adds, removes, and retrieves user-specific weather-location subscriptions.",
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
                                terminal-based client to a multithreaded TCP
                                server through a custom application-layer
                                protocol. The platform supports authenticated
                                user sessions, persistent account storage,
                                concurrent client handling, password management,
                                and personalized weather-location subscriptions.
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
                                        distributed client-server architecture,
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
                                text-based application protocol. The server owns
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
                                        subtitle="Stores each user's saved weather-location subscriptions for persistent retrieval and management."
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
                                        "In-memory user data and persistent text files are updated together when account or subscription information changes.",
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
                                Server-Controlled Account Access
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
                                                "A new username and password are submitted to the server, validated, added to the in-memory user collection, and written to persistent storage.",
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
                                            Account-specific features become available after
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
                                        text-based persistence format, and communication does not
                                        use transport encryption. A production version would add
                                        salted password hashing, TLS, stronger session controls,
                                        secure database storage, and request rate limiting.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default WeatherSubscriptionProject;