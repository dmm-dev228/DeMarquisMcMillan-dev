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
                        {/* Primary CTA: guides recruiters directly to featured engineering work. */}
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

                        {/* Secondary CTA: provides quick access to the downloadable resume. */}
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
    className="flex flex-wrap gap-3"
  >
    {["Java", "Spring Boot", "React", "MySQL", "Docker", "OpenAI"].map(
      (technology) => (
        <li
          key={technology}
          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-cyan-300/5 hover:text-cyan-100"
        >
          {technology}
        </li>
      )
    )}
  </ul>
</div>
                </div>

                {/* Right side: flagship product showcase */}
                <article
                    aria-labelledby="cognihaven-title"
                    className="relative z-10 rounded-3xl border border-cyan-300/15 bg-slate-950/55 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
                >
                    <div>
                        <div>
                            <p>Flagship Project</p>

                            <div>
                                <h2 id="cognihaven-title">CogniHaven</h2>

                                <span>
                                    Live
                                </span>
                            </div>

                            <p>
                                A calm, AI-powered cognitive wellness and daily support
                                platform.
                            </p>
                        </div>

                        <div>
                            <p>CogniHaven application preview coming next.</p>
                        </div>

                        <dl>
                            <div>
                                <dt>Integrated systems</dt>
                                <dd>15+</dd>
                            </div>

                            <div>
                                <dt>Automated tests</dt>
                                <dd>30</dd>
                            </div>

                            <div>
                                <dt>Deployment</dt>
                                <dd>Cloud</dd>
                            </div>
                        </dl>
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Hero;