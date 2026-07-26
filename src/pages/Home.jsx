import Hero from "../components/home/Hero";
import FeaturedWork from "../components/home/FeaturedWork";

/*
 * ============================================================================
 * Home
 * ============================================================================
 *
 * Landing page for the portfolio.
 *
 * This page introduces DeMarquis McMillan and guides recruiters through
 * featured engineering projects, technical experience, and contact information.
 * ============================================================================
 */

function Home() {
    return (
        <main id="home">
            <Hero />
            <FeaturedWork />
        </main>
    );
}

export default Home;