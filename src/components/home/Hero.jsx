import javaLogo from "../../assets/technologies/java.png";
import springBootLogo from "../../assets/technologies/spring-boot.png";
import mysqlLogo from "../../assets/technologies/mysql.png";
import dockerLogo from "../../assets/technologies/docker.png";
import openaiLogo from "../../assets/technologies/openai.png";

function Hero() {
    return (
        <section
            id="about"
            aria-labelledby="hero-heading"
            className="relative min-h-screen overflow-hidden px-6 pb-16 pt-32 sm:px-8 lg:px-12"
        >
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                {/* Left side: professional introduction */}
                <div className="relative z-10">
                    <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 backdrop-blur-sm">
                        <span
                            className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]"
                            aria-hidden="true"
                        />

                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80 sm:text-sm">
                            Available for software engineering opportunities
                        </p>
                    </div>

                    <h1
                        id="hero-heading"
                        className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
                    >
                        Building software
                        <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                            that ships.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                        Software Engineer building production ready full-stack applications
                        with <span className="font-semibold text-white">Java</span>,{" "}
                        <span className="font-semibold text-white">Spring Boot</span>,{" "}
                        <span className="font-semibold text-white">React</span>, secure APIs,
                        cloud deployment, and AI-powered systems.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                        {/* Primary CTA */}
                        <a
                            href="#projects"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3.5 font-semibold text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.18)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(56,189,248,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                        >
                            Explore My Work

                            <span
                                aria-hidden="true"
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            >
                                →
                            </span>
                        </a>

                        {/* Secondary CTA */}
                        <a
                            href="/DeMarquis-McMillan-Resume.pdf"
                            download
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-white/5 px-6 py-3.5 font-semibold text-slate-200 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                        >
                            Download Resume
                            <span aria-hidden="true">↓</span>
                        </a>
                    </div>
<div className="mt-10">
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
        Core Stack
    </p>

    <ul
        aria-label="Primary technologies"
        className="grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3"
    >
        {[
            { name: "Java", logo: javaLogo },
            { name: "Spring Boot", logo: springBootLogo },
            { name: "React", symbol: "⚛" },
            { name: "MySQL", logo: mysqlLogo },
            { name: "Docker", logo: dockerLogo },
            { name: "OpenAI", logo: openaiLogo },
        ].map((technology) => (
            <li
                key={technology.name}
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:shadow-[0_0_20px_rgba(34,211,238,0.08)]"
            >
                <span
                    aria-hidden="true"
                    className="grid h-8 w-8 shrink-0 place-items-center"
                >
                    {technology.logo ? (
                        <img
                            src={technology.logo}
                            alt=""
                            className="h-7 w-7 object-contain"
                        />
                    ) : (
                        <span className="text-2xl text-cyan-300">
                            {technology.symbol}
                        </span>
                    )}
                </span>

                <span>{technology.name}</span>
            </li>
        ))}
    </ul>
</div>
                </div>

                {/* Right side: flagship product showcase */}
                <article
                    aria-labelledby="cognihaven-title"
                    className="
                        relative z-10
                        overflow-hidden
                        rounded-[1.75rem]
                        border border-cyan-400/70
                        bg-[#050b18]/90
                        p-8
                        shadow-[0_0_45px_rgba(34,211,238,0.10)]
                        backdrop-blur-xl
                        lg:p-10
                    "
                >
                    {/* Ambient cyan glow */}
                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute
                            -right-16
                            top-8
                            h-64
                            w-64
                            rounded-full
                            bg-cyan-400/15
                            blur-[80px]
                        "
                    />

                    <div className="relative z-10">
                        {/* Showcase header */}
                        <div className="flex items-start justify-between gap-6">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-400">
                                    Flagship Project
                                </p>

                                <h2
                                    id="cognihaven-title"
                                    className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
                                >
                                    CogniHaven
                                </h2>
                            </div>

                            <div
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border border-emerald-400/50
                                    bg-emerald-400/10
                                    px-4
                                    py-2
                                    shadow-[0_0_24px_rgba(52,211,153,0.16)]
                                "
                            >
                                <span
                                    aria-hidden="true"
                                    className="
                                        h-2.5
                                        w-2.5
                                        rounded-full
                                        bg-emerald-400
                                        shadow-[0_0_14px_rgba(52,211,153,1)]
                                    "
                                />

                                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300">
                                    Live
                                </span>
                            </div>
                        </div>

                        {/* Product description */}
                        <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                            A deployed AI-powered cognitive wellness platform built with Java,
                            Spring Boot, React, MySQL, Docker, secure authentication, cloud
                            infrastructure, and production focused engineering practices.
                        </p>

                        {/* Temporary product preview */}
                        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
                            <div className="flex min-h-64 items-center justify-center px-6 text-center">
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                                        Product Preview
                                    </p>

                                    <p className="mt-3 text-lg font-medium text-slate-300">
                                        CogniHaven interface preview coming next
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Engineering proof */}
                        <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-7">
                            <div>
                                <dd className="text-2xl font-bold text-white sm:text-3xl">
                                    15+
                                </dd>
                                <dt className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-500">
                                    Systems
                                </dt>
                            </div>

                            <div>
                                <dd className="text-2xl font-bold text-white sm:text-3xl">
                                    30
                                </dd>
                                <dt className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-500">
                                    Tests
                                </dt>
                            </div>

                            <div>
                                <dd className="text-2xl font-bold text-white sm:text-3xl">
                                    Cloud
                                </dd>
                                <dt className="mt-2 text-xs uppercase tracking-[0.12em] text-slate-500">
                                    Deployed
                                </dt>
                            </div>
                        </dl>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Hero;