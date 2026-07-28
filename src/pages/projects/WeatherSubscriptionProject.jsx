import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
    ArrowDown,
    CloudSun,
    Database,
    KeyRound,
    MessageSquare,
    Network,
    Server,
    Terminal,
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
            </div>
        </main>
    );
}

export default WeatherSubscriptionProject;