/*
 * ============================================================================
 * Section
 * ============================================================================
 *
 * Shared wrapper used for every major section of the portfolio.
 *
 * Responsibilities:
 * - Provide consistent spacing
 * - Limit content width
 * - Keep visual rhythm consistent
 *
 * Usage:
 *
 * <Section>
 *     ...
 * </Section>
 * ============================================================================
 */

function Section({ children, className = "" }) {
    return (
        <section
            className={`w-full px-6 py-24 lg:px-12 ${className}`}
        >
            <div className="mx-auto max-w-7xl">
                {children}
            </div>
        </section>
    );
}

export default Section;