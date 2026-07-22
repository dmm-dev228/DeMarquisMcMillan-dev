/*
 * ============================================================================
 * Portfolio Design System
 * ============================================================================
 *
 * Central design tokens used throughout the application.
 *
 * This file defines reusable colors, spacing, typography, shadows,
 * border radii, animation timing, and responsive breakpoints.
 *
 * Components should reference this file instead of hardcoding values.
 * ============================================================================
 */

export const theme = {
    colors: {
        background: "#07111F",
        surface: "#0E1A2B",
        surfaceLight: "#162538",

        primary: "#4DA8FF",
        secondary: "#61D9FF",

        text: "#F5F7FA",
        textMuted: "#AAB6C5",

        border: "#23364F",

        success: "#22C55E",
        warning: "#FACC15",
        danger: "#EF4444"
    },

    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
        xl: "4rem",
        xxl: "8rem"
    },

    borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "18px",
        xl: "28px"
    },

    shadows: {
        soft: "0 8px 24px rgba(0,0,0,.25)",
        glow: "0 0 30px rgba(77,168,255,.25)"
    },

    transition: {
        fast: "150ms",
        normal: "300ms",
        slow: "500ms"
    }
};