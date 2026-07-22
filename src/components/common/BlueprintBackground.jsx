/*
 * ============================================================================
 * BlueprintBackground
 * ============================================================================
 *
 * Provides the portfolio's persistent architectural background.
 *
 * The background is decorative and intentionally separated from page content
 * so visual effects can evolve without affecting layout or accessibility.
 * ============================================================================
 */

function BlueprintBackground() {
    return (
        <div
            className="blueprint-background"
            aria-hidden="true"
        >
            <div className="blueprint-background__glow" />
            <div className="blueprint-background__grid" />
        </div>
    );
}

export default BlueprintBackground;