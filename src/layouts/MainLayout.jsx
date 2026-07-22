/*
 * MainLayout
 * ----------
 * Provides the shared application structure.
 *
 * Responsibilities:
 * - Render the global navigation
 * - Render the blueprint background
 * - Render page content
 * - Render the global footer
 *
 * Every public page should use this layout.
 */

function MainLayout({ children }) {
    return (
        <>
            {children}
        </>
    );
}

export default MainLayout;