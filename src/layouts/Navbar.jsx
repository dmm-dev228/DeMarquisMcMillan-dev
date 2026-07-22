/*
 * ============================================================================
 * Navbar
 * ============================================================================
 *
 * Primary navigation for the portfolio.
 *
 * Responsibilities:
 * - Display the DeMarquis McMillan personal brand
 * - Provide navigation to the main portfolio sections
 * - Provide access to the resume
 *
 * Responsive mobile behavior and active-section tracking will be added
 * incrementally as the navigation feature develops.
 * ============================================================================
 */

function Navbar() {
    return (
        <header className="portfolio-navbar">
            <nav
                className="portfolio-navbar__container"
                aria-label="Primary navigation"
            >
                <a
                    href="#home"
                    className="portfolio-navbar__brand"
                    aria-label="DeMarquis McMillan home"
                >
                    <span className="portfolio-navbar__monogram">
                        DM
                    </span>

                    <span className="portfolio-navbar__name">
                        DeMarquis McMillan
                    </span>
                </a>

                <div className="portfolio-navbar__links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </div>

                <a
                    href="/resume.pdf"
                    className="portfolio-navbar__resume"
                    target="_blank"
                    rel="noreferrer"
                >
                    Resume
                    <span aria-hidden="true">↗</span>
                </a>
            </nav>
        </header>
    );
}

export default Navbar;