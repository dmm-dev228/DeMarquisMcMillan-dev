/*
 * ============================================================================
 * Projects
 * ============================================================================
 *
 * Dedicated portfolio project gallery.
 *
 * Recruiters can browse engineering projects here before opening a full
 * project case study for deeper technical details, screenshots, and demos.
 * ============================================================================
 */

function Projects() {
    return (
        <main className="px-6 pb-24 pt-32 sm:px-8 lg:px-12">
            <div className="mx-auto w-full max-w-7xl">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-400">
                    Engineering Portfolio
                </p>

                <h1 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">
                    Projects
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                    A collection of full-stack applications, backend systems,
                    networking software, and data-focused engineering work.
                </p>

                <div className="mt-16 rounded-3xl border border-cyan-400/20 bg-slate-950/60 p-8 backdrop-blur-xl">
                    <p className="text-slate-400">
                        Project gallery coming next.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Projects;