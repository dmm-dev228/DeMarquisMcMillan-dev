function FeaturedWork() {
    return (
        <section
            id="projects"
            aria-labelledby="featured-work-heading"
            className="relative px-6 py-24 sm:px-8 lg:px-12"
        >
            <div className="mx-auto w-full max-w-7xl">
                {/* Section intro */}
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-400">
                        Selected Work
                    </p>

                    <h2
                        id="featured-work-heading"
                        className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl"
                    >
                        Engineering beyond the demo.
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-300">
                        Production applications, backend systems, networking,
                        algorithms, and data-focused software built across
                        modern full-stack and systems engineering environments.
                    </p>
                </div>

                {/* Projects will be added here next */}
                <div className="mt-16">
                    <div className="rounded-3xl border border-cyan-400/20 bg-slate-950/60 p-8 backdrop-blur-xl">
                        <p className="text-slate-400">
                            Featured project showcase coming next.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturedWork;