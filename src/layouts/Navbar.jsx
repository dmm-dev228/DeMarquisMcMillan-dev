import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/*
 * ============================================================================
 * Navbar
 * ============================================================================
 *
 * Primary navigation for the portfolio.
 *
 * Responsibilities:
 * - Display the DeMarquis McMillan personal brand
 * - Provide desktop and mobile navigation
 * - Provide access to the resume
 * - Adjust presentation when the page is scrolled
 * - Manage accessible mobile navigation behavior
 * - Support navigation between portfolio routes
 * ============================================================================
 */

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth > 800) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <header
                className={`portfolio-navbar ${
                    isScrolled ? "portfolio-navbar--scrolled" : ""
                }`}
            >
                <nav
                    className="portfolio-navbar__container"
                    aria-label="Primary navigation"
                >
                    {/* Brand / Home */}
                    <Link
                        to="/"
                        className="portfolio-navbar__brand"
                        aria-label="DeMarquis McMillan home"
                        onClick={closeMenu}
                    >
                        <img
                            src="/favicon.png"
                            alt=""
                            aria-hidden="true"
                            className="portfolio-navbar__logo"
                        />

                        <span className="portfolio-navbar__name">
                            DeMarquis McMillan
                        </span>
                    </Link>

                    {/* Desktop navigation */}
                    <div className="portfolio-navbar__links">
                        <Link to="/">
                            Home
                        </Link>

                        <Link to="/about">
                            About
                        </Link>

                        <Link to="/projects">
                            Projects
                        </Link>

                        <Link to="/experience">
                            Experience
                        </Link>

                        <Link to="/contact">
                            Contact
                        </Link>
                    </div>

                    {/* Desktop resume action */}
                    <a
                        href="/resume.pdf"
                        className="portfolio-navbar__resume"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume
                        <span aria-hidden="true">↗</span>
                    </a>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className={`portfolio-navbar__menu-button ${
                            isMenuOpen
                                ? "portfolio-navbar__menu-button--open"
                                : ""
                        }`}
                        aria-label={
                            isMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() =>
                            setIsMenuOpen((current) => !current)
                        }
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </nav>

                {/* Mobile navigation */}
                <div
                    id="mobile-navigation"
                    className={`portfolio-navbar__mobile-menu ${
                        isMenuOpen
                            ? "portfolio-navbar__mobile-menu--open"
                            : ""
                    }`}
                    aria-hidden={!isMenuOpen}
                >
                    <Link
                        to="/"
                        onClick={closeMenu}
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        onClick={closeMenu}
                    >
                        About
                    </Link>

                    <Link
                        to="/projects"
                        onClick={closeMenu}
                    >
                        Projects
                    </Link>

                    <Link
                        to="/experience"
                        onClick={closeMenu}
                    >
                        Experience
                    </Link>

                    <Link
                        to="/contact"
                        onClick={closeMenu}
                    >
                        Contact
                    </Link>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        onClick={closeMenu}
                    >
                        Resume
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </header>

            {/* Mobile menu backdrop */}
            <button
                type="button"
                className={`portfolio-navbar__overlay ${
                    isMenuOpen
                        ? "portfolio-navbar__overlay--visible"
                        : ""
                }`}
                aria-label="Close navigation menu"
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
            />
        </>
    );
}

export default Navbar;