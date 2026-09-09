/** Config extraída del <head> original; se compila una vez a site.css */
const base = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "surface-container-lowest": "#060e20",
            "on-error": "#690005",
            "surface-bright": "#31394d",
            "surface-tint": "#4edea3",
            "on-surface-variant": "#bbcabf",
            "on-primary-fixed": "#002113",
            "on-error-container": "#ffdad6",
            "on-tertiary": "#00344d",
            "surface-container-high": "#222a3d",
            "on-secondary": "#003640",
            "secondary-fixed": "#acedff",
            "error": "#ffb4ab",
            "on-tertiary-container": "#003d59",
            "tertiary-fixed": "#c9e6ff",
            "on-primary-container": "#00422b",
            "primary-fixed": "#6ffbbe",
            "surface-dim": "#0b1326",
            "on-tertiary-fixed": "#001e2f",
            "surface": "#0b1326",
            "tertiary": "#89ceff",
            "primary-fixed-dim": "#4edea3",
            "surface-container-low": "#131b2e",
            "on-tertiary-fixed-variant": "#004c6e",
            "on-secondary-container": "#00424e",
            "background": "#0b1326",
            "tertiary-container": "#23acf1",
            "surface-container-highest": "#2d3449",
            "outline": "#86948a",
            "on-background": "#dae2fd",
            "on-primary-fixed-variant": "#005236",
            "on-secondary-fixed": "#001f26",
            "surface-container": "#171f33",
            "error-container": "#93000a",
            "secondary": "#4cd7f6",
            "tertiary-fixed-dim": "#89ceff",
            "outline-variant": "#3c4a42",
            "secondary-container": "#03b5d3",
            "inverse-primary": "#006c49",
            "surface-variant": "#2d3449",
            "inverse-surface": "#dae2fd",
            "inverse-on-surface": "#283044",
            "primary-container": "#10b981",
            "on-surface": "#dae2fd",
            "on-primary": "#003824",
            "primary": "#4edea3",
            "secondary-fixed-dim": "#4cd7f6",
            "on-secondary-fixed-variant": "#004e5c"
          },
          borderRadius: {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
          },
          spacing: {
            "block-2xs": "0.25rem",
            "block-xs": "0.5rem",
            "block-sm": "0.75rem",
            "block-md": "1rem",
            "block-lg": "1.5rem",
            "block-xl": "2rem",
            "block-2xl": "3rem",
            "block-3xl": "4.5rem",
            "block-4xl": "6rem"
          },
          fontSize: {
            "headline-xl": ["clamp(28px, 4vw, 40px)", { lineHeight: "1.2", letterSpacing: "-0.03em", fontWeight: "600" }],
            "headline-lg": ["28px", { lineHeight: "36px", letterSpacing: "-0.02em", fontWeight: "600" }],
            "headline-md": ["20px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "600" }],
            "body-lg": ["18px", { lineHeight: "28px" }],
            "body-md": ["15px", { lineHeight: "24px" }],
            "body-sm": ["13px", { lineHeight: "20px" }],
            "label-caps": ["11px", { lineHeight: "16px", letterSpacing: "0.12em", fontWeight: "700" }],
            "code-telemetry": ["12px", { lineHeight: "18px", letterSpacing: "0.02em", fontWeight: "500" }]
          },
          fontFamily: {
            "code-telemetry": ["Space Grotesk", "monospace"],
            "label-caps": ["Space Grotesk", "sans-serif"],
            "body-md": ["Hanken Grotesk", "sans-serif"],
            "body-lg": ["Hanken Grotesk", "sans-serif"],
            "body-sm": ["Hanken Grotesk", "sans-serif"],
            "display-hero": ["Space Grotesk", "sans-serif"],
            "headline-xl": ["Space Grotesk", "sans-serif"],
            "headline-lg": ["Space Grotesk", "sans-serif"],
            "headline-md": ["Space Grotesk", "sans-serif"]
          }
        }
      }
    };
module.exports = { ...base, content: ['./index.html', './en/index.html'], plugins: [require('@tailwindcss/forms')] };
