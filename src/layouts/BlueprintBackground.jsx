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
            <div className="blueprint-background__scan-line" />

            <div className="blueprint-background__annotation blueprint-background__annotation--top-left">
                <span>SYS-01</span>
                <div className="blueprint-background__annotation-line" />
            </div>

            <div className="blueprint-background__annotation blueprint-background__annotation--bottom-right">
                <span>ARCHITECTURE / ACTIVE</span>
                <div className="blueprint-background__annotation-line" />
            </div>
        </div>
    );
}

export default BlueprintBackground;