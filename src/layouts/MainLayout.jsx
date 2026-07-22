import BlueprintBackground from "../components/common/BlueprintBackground";

/*
 * ============================================================================
 * MainLayout
 * ============================================================================
 *
 * Shared layout used across the portfolio.
 *
 * Responsibilities:
 * - Render the global blueprint background
 * - Render navigation
 * - Render page content
 * - Render the footer
 *
 * All public pages should be wrapped with this layout.
 * ============================================================================
 */

function MainLayout({ children }) {
    return (
        <div className="relative min-h-screen overflow-x-hidden">
            <BlueprintBackground />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
export default MainLayout;