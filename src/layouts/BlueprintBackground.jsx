/*
 * ============================================================================
 * BlueprintBackground
 * ============================================================================
 *
 * Persistent engineering-inspired background for the portfolio.
 *
 * Features:
 * - Blueprint grid
 * - Ambient cyan glow
 * - Animated binary rain
 * - Fixed architectural annotations
 *
 * The entire background is decorative and hidden from assistive technology.
 * ============================================================================
 */

const binaryColumns = [
    "0101101001011010",
    "1010010110100101",
    "0011010110010101",
    "1100101001101010",
    "0101011010011010",
    "1011010010100101",
    "0110100101101001",
    "1001011010010110",
    "0010110101100101",
    "1101001010011010",
    "0101101010010110",
    "1010010101101001",
    "0110010110100101",
    "1001101001011010",
    "0011010101101001",
    "1100101010010110",
];

function BlueprintBackground() {
    return (
        <div
            className="blueprint-background"
            aria-hidden="true"
        >
            {/* Ambient lighting */}
            <div className="blueprint-background__glow" />

            {/* Engineering grid */}
            <div className="blueprint-background__grid" />

            {/* Animated binary rain */}
          {/* Far binary layer */}
<div className="blueprint-background__binary blueprint-background__binary--far">
    {binaryColumns.map((binary, index) => (
        <span
            key={`far-${index}`}
            className="blueprint-background__binary-column"
            style={{
                "--column-index": index,
                "--column-delay": `${(index % 7) * -1.8}s`,
                "--column-duration": `${18 + (index % 5) * 3}s`,
            }}
        >
            {binary.split("").map((digit, digitIndex) => (
                <span key={digitIndex}>{digit}</span>
            ))}
        </span>
    ))}
</div>

{/* Mid binary layer */}
<div className="blueprint-background__binary blueprint-background__binary--mid">
    {binaryColumns.map((binary, index) => (
        <span
            key={`mid-${index}`}
            className="blueprint-background__binary-column"
            style={{
                "--column-index": index,
                "--column-delay": `${(index % 6) * -1.4}s`,
                "--column-duration": `${12 + (index % 5) * 2}s`,
            }}
        >
            {binary.split("").map((digit, digitIndex) => (
                <span key={digitIndex}>{digit}</span>
            ))}
        </span>
    ))}
</div>

{/* Near binary layer */}
<div className="blueprint-background__binary blueprint-background__binary--near">
    {binaryColumns.map((binary, index) => (
        <span
            key={`near-${index}`}
            className="blueprint-background__binary-column"
            style={{
                "--column-index": index,
                "--column-delay": `${(index % 5) * -1.1}s`,
                "--column-duration": `${8 + (index % 4) * 1.5}s`,
            }}
        >
            {binary.split("").map((digit, digitIndex) => (
                <span key={digitIndex}>{digit}</span>
            ))}
        </span>
    ))}
</div>

            {/* Fixed engineering annotations */}
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