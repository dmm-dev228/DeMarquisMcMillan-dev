import { Link } from "react-router-dom";
import { motion } from "motion/react";
import githubIcon from "../../assets/icons/github.png";
import {
    ArrowRight,
    CircleCheck,
    Database,
    FlaskConical,
    Heart,
    KeyRound,
    Layers3,
    ListPlus,
    RefreshCw,
    Search,
    Server,
    ShieldCheck,
    TriangleAlert,
    UtensilsCrossed,
    Users,
} from "lucide-react";


const ease = [0.22, 1, 0.36, 1];

const technologies = [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MySQL",
    "JWT",
    "bcrypt",
    "Spoonacular API",
    "Jest",
    "Supertest",
];

const metrics = [
    ["5", "Core relational tables", "Users, recipes, Munchlists, relationships, and likes."],
    ["2", "Recipe data sources", "Local MySQL recipes plus Spoonacular discovery."],
    ["JWT", "Protected API access", "Verified bearer tokens protect user scoped routes."],
];

const features = [
    {
        number: "01",
        title: "Dual Source Search",
        description:
            "Users can search either the local MySQL catalog or Spoonacular. The frontend normalizes different response shapes into one recipe discovery experience.",
        icon: Search,
    },
    {
        number: "02",
        title: "Munchlist Collections",
        description:
            "Recipes are organized into personalized Munchlists, a playlist inspired collection model designed around reusable groups rather than one flat saved list.",
        icon: ListPlus,
    },
    {
        number: "03",
        title: "External Recipe Persistence",
        description:
            "Selected Spoonacular recipes are transformed, persisted into MySQL, and then connected to Munchlists through the same relational model as local recipes.",
        icon: Database,
    },
    {
        number: "04",
        title: "JWT Authentication",
        description:
            "Registration hashes passwords with bcrypt, login issues one hour JWTs, and Express middleware verifies protected requests before user scoped data is accessed.",
        icon: ShieldCheck,
    },
    {
        number: "05",
        title: "Social Likes",
        description:
            "Users can like shared Munchlists through a relational model with duplicate like prevention and backend checks that stop owners from liking their own collections.",
        icon: Heart,
    },
    {
        number: "06",
        title: "Optimistic UI",
        description:
            "React updates like state immediately, keeps it on success, and rolls it back when the backend request fails so the interface stays responsive.",
        icon: RefreshCw,
    },
];

const relationships = [
    {
        title: "Users → Munchlists",
        type: "One to Many",
        description:
            "A user can own multiple Munchlists. A unique constraint prevents duplicate playlist names for the same user.",
    },
    {
        title: "Recipes ↔ Munchlists",
        type: "Many to Many",
        description:
            "Playlist_Recipes acts as a junction table so one recipe can belong to multiple Munchlists without duplicating the recipe record.",
    },
    {
        title: "Users ↔ Likes",
        type: "Many to Many",
        description:
            "Playlist_Likes connects users and Munchlists while a unique user and playlist constraint prevents duplicate likes.",
    },
];

const authSteps = [
    ["01", "Register", "bcrypt hashes the submitted password before the account is stored in MySQL."],
    ["02", "Authenticate", "Login compares the submitted password against the stored bcrypt hash."],
    ["03", "Issue JWT", "Successful authentication returns a JWT containing the user's database ID with a one hour expiration."],
    ["04", "Protect Requests", "React sends the bearer token and Express middleware verifies it before protected routes continue."],
    ["05", "Scope User Data", "Protected operations derive user identity from the verified JWT rather than trusting a browser supplied user ID."],
];

const challenges = [
    {
        number: "01",
        title: "Unifying two recipe ecosystems",
        challenge: "Local recipes and Spoonacular recipes use different field names and structures.",
        solution: "Transform local and external data into a consistent presentation model for React.",
        result: "Users can move between both search sources without learning two different interfaces.",
    },
    {
        number: "02",
        title: "Persisting third party recipes",
        challenge: "An external result cannot join a relational Munchlist until the application has a local recipe record to reference.",
        solution: "Retrieve richer Spoonacular details, serialize the required fields, persist the recipe, then create the Playlist_Recipes relationship.",
        result: "External and user created recipes participate in the same collection system.",
    },
    {
        number: "03",
        title: "Modeling reusable collections",
        challenge: "A recipe may belong to many Munchlists while each Munchlist can contain many recipes.",
        solution: "Use a dedicated junction table instead of embedding recipe arrays or duplicating recipe rows.",
        result: "The data model stays normalized and recipes can be reused across collections.",
    },
    {
        number: "04",
        title: "Keeping social interactions responsive",
        challenge: "Waiting for every like request before changing the interface makes interactions feel slower.",
        solution: "Apply an optimistic React update immediately and roll it back when the API request fails.",
        result: "The UI feels faster while the backend remains the final source of truth.",
    },
];

const tests = [
    "Successful login",
    "Failed login",
    "Protected request rejection",
    "Authenticated Munchlist retrieval",
    "Expired or invalid JWT behavior",
    "Database backed recipe insertion",
];

const improvements = [
    ["Move Spoonacular behind the backend", "Browser JavaScript exposes the supplied API credential. A stronger design would proxy external calls through Express and keep secrets server side.", KeyRound],
    ["Strengthen resource authorization", "Authentication exists, but object ownership should be checked consistently before recipe or Munchlist modifications.", ShieldCheck],
    ["Modularize the Express backend", "Split the large server file into routes, controllers, services, middleware, and data access modules.", Layers3],
    ["Align schema and API contracts", "Resolve route and table mismatches through consistent migrations, query definitions, and response shapes.", Database],
    ["Expand integration testing", "Use a dedicated test database, repeatable fixtures, and broader end to end API coverage.", FlaskConical],
];

function SectionHeading({ eyebrow, title, description }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease }}
            className="mx-auto max-w-4xl text-center"
        >
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                {eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                {title}
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {description}
            </p>
        </motion.div>
    );
}

function MunchifyProject() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#050b18]">
            {/* Hero */}
            <section className="relative overflow-hidden px-6 pb-24 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                    <motion.div
                        animate={{ scale: [1, 1.12, 1], opacity: [0.06, 0.13, 0.06] }}
                        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-[5%] top-20 h-72 w-72 rounded-full bg-cyan-400 blur-[150px]"
                    />
                    <motion.div
                        animate={{ scale: [1.08, 0.97, 1.08], opacity: [0.04, 0.1, 0.04] }}
                        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute right-[8%] top-36 h-80 w-80 rounded-full bg-blue-600 blur-[170px]"
                    />
                </div>

                <div className="relative mx-auto w-full max-w-7xl">
                    <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -32 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.75, ease }}
                        >
                            <div className="flex flex-wrap gap-3">
                                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.17em] text-cyan-300">
                                    Full Stack Application
                                </span>
                                <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-bold uppercase tracking-[0.17em] text-slate-400">
                                    Recipe Discovery & Collections
                                </span>
                            </div>

                            <h1 className="mt-7 text-6xl font-black tracking-[-0.06em] text-white sm:text-7xl lg:text-[5.8rem]">
                                Munchify
                            </h1>

                            <p className="mt-5 max-w-3xl text-2xl font-black leading-tight text-cyan-200 sm:text-3xl">
                                Discover recipes. Build Munchlists. Bring local and external food discovery into one experience.
                            </p>

                            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                                Munchify is a full stack recipe discovery and organization platform built around a custom collection concept called a <span className="font-bold text-white">Munchlist</span>. Authenticated users can create recipes, search local and Spoonacular data, and organize selected recipes into reusable collections.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-2">
                                {technologies.map((technology) => (
                                    <span key={technology} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-xs font-bold text-slate-300">
                                        {technology}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                                <a
                                    href="https://github.com/dmm-dev228/Munchify---Full-Stack-Sharing-Web-Application"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3.5 font-black text-slate-950 transition duration-300 hover:-translate-y-0.5"
                                >
                                    View GitHub
                                    <img
                                        src={githubIcon}
                                        alt=""
                                        aria-hidden="true"
                                        className="h-[18px] w-[18px] object-contain transition-transform duration-300 group-hover:scale-110"
                                    />
                                </a>
                                <Link to="/projects" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-bold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:text-white">
                                    More Projects
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 34, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.85, delay: 0.12, ease }}
                            className="relative"
                        >
                            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#050b18]/95 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                                <div className="flex items-center gap-3 border-b border-white/[0.07] pb-5">
                                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300">
                                        <UtensilsCrossed size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-[0.17em] text-cyan-300">Munchify</p>
                                        <p className="mt-1 text-sm font-semibold text-slate-400">Recipe discovery workspace</p>
                                    </div>
                                </div>

                                <div className="mt-5 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4">
                                    <div className="flex items-center gap-3">
                                        <Search size={18} className="text-slate-500" />
                                        <span className="text-sm text-slate-500">Search recipes...</span>
                                        <span className="ml-auto rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-emerald-300">2 sources</span>
                                    </div>
                                </div>

                                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                    {["Pasta", "Bowl", "Tacos"].map((recipe, index) => (
                                        <motion.div key={recipe} animate={{ y: [0, -4, 0] }} transition={{ duration: 3.2 + index * 0.4, repeat: Infinity, ease: "easeInOut" }} className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#07111f]">
                                            <div className="aspect-[4/3] bg-gradient-to-br from-cyan-400/[0.18] via-sky-400/[0.08] to-blue-600/[0.12]">
                                                <div className="flex h-full items-center justify-center">
                                                    <UtensilsCrossed size={28} className="text-cyan-200/70" />
                                                </div>
                                            </div>
                                            <p className="p-3 text-sm font-black text-white">{recipe}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.045] p-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">My Munchlist</p>
                                            <h2 className="mt-2 text-xl font-black text-white">Weeknight Favorites</h2>
                                        </div>
                                        <ListPlus size={23} className="text-cyan-300" />
                                    </div>
                                    <div className="mt-4 space-y-2">
                                        {["Creamy Pasta", "Protein Bowl", "Quick Tacos"].map((recipe) => (
                                            <div key={recipe} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-black/15 px-3 py-2.5">
                                                <CircleCheck size={15} className="text-emerald-300" />
                                                <span className="text-sm font-semibold text-slate-300">{recipe}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-16 grid gap-4 md:grid-cols-3">
                        {metrics.map(([value, label, description], index) => (
                            <motion.div key={label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
                                <p className="text-3xl font-black text-cyan-300">{value}</p>
                                <p className="mt-2 text-sm font-black text-white">{label}</p>
                                <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Key Engineering */}
            <section className="relative border-y border-white/[0.06] bg-[#07111f]/80 px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeading
                        eyebrow="Key Engineering"
                        title={<>More than <span className="bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent">recipe CRUD.</span></>}
                        description="The strongest parts of Munchify come from integrating different systems, modeling reusable relationships, and keeping authenticated interactions responsive."
                    />

                    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.article key={feature.number} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.055, ease }} whileHover={{ y: -6 }} className="rounded-[2rem] border border-cyan-400/15 bg-cyan-400/[0.03] p-7 sm:p-8">
                                    <div className="flex items-start justify-between gap-5">
                                        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300"><Icon size={23} /></div>
                                        <span className="text-xs font-black tracking-[0.16em] text-cyan-300">{feature.number}</span>
                                    </div>
                                    <h3 className="mt-7 text-2xl font-black text-white">{feature.title}</h3>
                                    <p className="mt-4 leading-8 text-slate-400">{feature.description}</p>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Architecture */}
            <section id="architecture" className="relative px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeading
                        eyebrow="System Architecture"
                        title={<>React → Express → MySQL <span className="block bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent">with Spoonacular as an external data source.</span></>}
                        description="React owns the user experience, Express handles authenticated API behavior, MySQL stores application state, and Spoonacular expands recipe discovery beyond the local database."
                    />

                    <div className="mx-auto mt-16 max-w-5xl">
                        <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
                            {[
                                ["React Frontend", "Search, forms, recipes, Munchlists, likes", Layers3],
                                ["Express REST API", "Routes, JWT middleware, validation, logic", Server],
                                ["MySQL", "Users, recipes, collections, relationships, likes", Database],
                            ].map(([label, detail, Icon], index, array) => (
                                <div key={label} className="contents">
                                    <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 text-center">
                                        <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300"><Icon size={23} /></div>
                                        <h3 className="mt-5 text-xl font-black text-white">{label}</h3>
                                        <p className="mt-3 text-sm leading-6 text-slate-400">{detail}</p>
                                    </motion.div>
                                    {index < array.length - 1 ? <ArrowRight size={20} className="mx-auto rotate-90 text-cyan-300/50 lg:rotate-0" /> : null}
                                </div>
                            ))}
                        </div>

                        <div className="mt-7 rounded-[2rem] border border-sky-400/15 bg-sky-400/[0.035] p-7 text-center">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">External Integration</p>
                            <p className="mt-3 text-xl font-black text-white">Spoonacular Recipe API</p>
                            <p className="mx-auto mt-3 max-w-3xl leading-7 text-slate-400">Selected external recipes can be persisted into MySQL so they participate in the same relational collection model as local recipes.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Integration */}
            <section className="relative border-y border-white/[0.06] bg-[#07111f]/80 px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeading
                        eyebrow="Data Integration"
                        title={<>Two recipe sources. <span className="block bg-gradient-to-r from-cyan-300 via-sky-500 to-blue-700 bg-clip-text text-transparent">One application model.</span></>}
                        description="Munchify transforms heterogeneous external data and persists selected recipes before associating them with local Munchlists."
                    />

                    <div className="mt-16 grid gap-6 lg:grid-cols-2">
                        <article className="rounded-[2rem] border border-cyan-400/15 bg-cyan-400/[0.03] p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Local MySQL Shape</p>
                            <div className="mt-5 grid gap-2 font-mono text-sm text-slate-300">{["recipe_name", "ingredients", "instructions", "prep_time", "category"].map((field) => <span key={field} className="rounded-xl border border-white/[0.06] bg-black/15 px-4 py-3">{field}</span>)}</div>
                        </article>

                        <article className="rounded-[2rem] border border-sky-400/15 bg-sky-400/[0.03] p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">Spoonacular Shape</p>
                            <div className="mt-5 grid gap-2 font-mono text-sm text-slate-300">{["title", "extendedIngredients", "analyzedInstructions", "readyInMinutes", "servings"].map((field) => <span key={field} className="rounded-xl border border-white/[0.06] bg-black/15 px-4 py-3">{field}</span>)}</div>
                        </article>
                    </div>

                    <div className="mt-8 rounded-[2rem] border border-cyan-400/15 bg-cyan-400/[0.03] p-8 text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Persistence Flow</p>
                        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                            {["Spoonacular", "Recipe Details", "Transform", "MySQL Recipe", "Playlist_Recipes", "Munchlist"].map((step, index, array) => (
                                <div key={step} className="flex items-center gap-3">
                                    <span className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm font-bold text-slate-200">{step}</span>
                                    {index < array.length - 1 ? <ArrowRight size={15} className="text-cyan-300/60" /> : null}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Model */}
            <section className="relative px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeading
                        eyebrow="Relational Data Model"
                        title={<>Collections modeled with <span className="block bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent">relationships instead of duplication.</span></>}
                        description="Foreign keys, unique constraints, and junction tables represent ownership, reusable recipe collections, and social likes."
                    />
                    <div className="mt-16 grid gap-6 lg:grid-cols-3">
                        {relationships.map((item, index) => (
                            <motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.07 }} className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7">
                                <Database size={24} className="text-cyan-300" />
                                <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">{item.type}</p>
                                <h3 className="mt-2 text-2xl font-black text-white">{item.title}</h3>
                                <p className="mt-4 leading-8 text-slate-400">{item.description}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Authentication */}
            <section className="relative border-y border-white/[0.06] bg-[#07111f]/80 px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeading
                        eyebrow="Authentication"
                        title={<>Identity is verified <span className="block bg-gradient-to-r from-blue-200 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">on the backend.</span></>}
                        description="Munchify uses bcrypt password hashing and JWT middleware for protected requests, with user scoped identity derived from the verified token."
                    />

                    <div className="mx-auto mt-16 max-w-5xl space-y-4">
                        {authSteps.map(([number, title, detail], index) => (
                            <motion.div key={number} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.055 }} className="grid gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:grid-cols-[auto_1fr]">
                                <div className="grid h-11 w-11 place-items-center rounded-xl border border-blue-400/20 bg-blue-400/[0.06] text-sm font-black text-blue-300">{number}</div>
                                <div><h3 className="text-xl font-black text-white">{title}</h3><p className="mt-2 leading-7 text-slate-400">{detail}</p></div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 rounded-[2rem] border border-amber-400/15 bg-amber-400/[0.03] p-8">
                        <div className="flex items-center gap-3"><TriangleAlert className="text-amber-300" /><h3 className="text-2xl font-black text-white">Important Security Lesson</h3></div>
                        <p className="mt-5 leading-8 text-slate-300">The supplied frontend exposes the Spoonacular credential. Because browser JavaScript is inspectable, a production version should route third party requests through Express and keep that secret server side.</p>
                    </div>
                </div>
            </section>

            {/* Testing */}
            <section className="relative px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeading
                        eyebrow="Testing & Reliability"
                        title={<>Backend API testing with <span className="block bg-gradient-to-r from-cyan-200 to-emerald-300 bg-clip-text text-transparent">Jest and Supertest.</span></>}
                        description="The project includes backend tests around authentication, protected routes, token behavior, and database backed workflows. This is implemented testing, not comprehensive coverage."
                    />

                    <div className="mt-16 grid gap-6 lg:grid-cols-2">
                        <div className="rounded-[2rem] border border-cyan-400/15 bg-cyan-400/[0.03] p-8">
                            <FlaskConical size={28} className="text-cyan-300" />
                            <h3 className="mt-6 text-2xl font-black text-white">Verified Test Areas</h3>
                            <div className="mt-6 space-y-3">{tests.map((test) => <div key={test} className="flex items-center gap-3"><CircleCheck size={17} className="text-cyan-300" /><span className="text-sm font-semibold text-slate-300">{test}</span></div>)}</div>
                        </div>
                        <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Testing Tradeoff</p>
                            <h3 className="mt-3 text-2xl font-black text-white">Useful foundation, not complete coverage.</h3>
                            <p className="mt-5 leading-8 text-slate-400">Some tests depend on a configured database and seeded account, and parts of the supplied suite are inconsistent. A stronger next version would use a dedicated test database and repeatable fixtures.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges */}
            <section className="relative border-y border-white/[0.06] bg-[#07111f]/80 px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeading
                        eyebrow="Engineering Challenges"
                        title={<>The problems that made <span className="block bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent">the project technically interesting.</span></>}
                        description="These challenges show the engineering work behind the product rather than simply listing features."
                    />
                    <div className="mt-16 grid gap-6 lg:grid-cols-2">
                        {challenges.map((challenge, index) => (
                            <motion.article key={challenge.number} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.06 }} className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-8">
                                <span className="text-xs font-black tracking-[0.16em] text-cyan-300">{challenge.number}</span>
                                <h3 className="mt-3 text-2xl font-black text-white">{challenge.title}</h3>
                                <div className="mt-6 space-y-4">
                                    <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-rose-300">Challenge</p><p className="mt-2 leading-7 text-slate-400">{challenge.challenge}</p></div>
                                    <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">Implementation</p><p className="mt-2 leading-7 text-slate-400">{challenge.solution}</p></div>
                                    <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Result</p><p className="mt-2 leading-7 text-slate-300">{challenge.result}</p></div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Growth */}
            <section className="relative px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
                <div className="mx-auto w-full max-w-7xl">
                    <SectionHeading
                        eyebrow="Engineering Growth"
                        title={<>What I would <span className="bg-gradient-to-r from-cyan-300 to-blue-600 bg-clip-text text-transparent">redesign today.</span></>}
                        description="Munchify is valuable not because every implementation decision is perfect, but because it made the next architectural improvements clear."
                    />

                    <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {improvements.map(([title, detail, Icon], index) => (
                            <motion.article key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} whileHover={{ y: -5 }} className="rounded-[2rem] border border-amber-400/15 bg-amber-400/[0.03] p-7">
                                <div className="grid h-11 w-11 place-items-center rounded-xl border border-amber-400/15 bg-amber-400/[0.05] text-amber-300"><Icon size={21} /></div>
                                <h3 className="mt-6 text-xl font-black text-white">{title}</h3>
                                <p className="mt-4 leading-7 text-slate-400">{detail}</p>
                            </motion.article>
                        ))}
                    </div>

                    <div className="mt-8 rounded-[2rem] border border-cyan-400/15 bg-gradient-to-r from-cyan-400/[0.04] via-[#050b18] to-blue-500/[0.035] p-8 text-center sm:p-10">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Project Lesson</p>
                        <p className="mx-auto mt-4 max-w-4xl text-xl font-bold leading-9 text-slate-200">Munchify taught me the difference between making a full stack feature work and designing that same feature for maintainability, stronger authorization, secret management, consistent API contracts, and production readiness.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative border-t border-white/[0.06] bg-[#07111f]/80 px-6 py-24 sm:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-7xl">
                    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease }} className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[#050b18]/95 p-8 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
                        <div className="max-w-3xl">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">Continue Exploring</p>
                            <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">Explore the rest of my engineering work.</h2>
                            <p className="mt-4 leading-7 text-slate-400">Munchify highlights full stack integration, relational modeling, authentication, external APIs, and architectural lessons that shaped my later projects.</p>
                        </div>
                        <div className="mt-7 lg:mt-0 lg:shrink-0">
                            <Link to="/projects" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-3.5 font-black text-slate-950 transition duration-300 hover:-translate-y-0.5">
                                More Projects
                                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}

export default MunchifyProject;