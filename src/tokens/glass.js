/**
 * ColorWing Centralized Design System: Glassmorphism & Liquid Glass Tokens
 *
 * Merged UI Decision:
 * - Default look: Web static (clean, high performance, zero liquid-glass lag)
 * - Liquid glass: Optional toggle, OFF by default
 * - Transparency: Preferred over solid glass (clean translucency)
 */

export const glass = {
  // --- DEFAULT LOOK: Web Static ---
  static: {
    enabledByDefault: true,
    bg: '#000000',
    bgTranslucent: 'rgba(10, 11, 16, 0.75)',
    surface: '#12131C',
    surfaceTranslucent: 'rgba(18, 19, 28, 0.75)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.40)',
    backdropFilter: 'none',
    specularHighlight: 'rgba(255, 255, 255, 0.05)'
  },

  // --- OPTIONAL TOGGLE: Liquid Glass (Off by default) ---
  liquid: {
    enabledByDefault: false,
    bg: 'rgba(10, 11, 16, 0.55)',
    surface: 'rgba(18, 19, 28, 0.60)',
    border: '1.5px solid rgba(255, 255, 255, 0.20)',
    backdropFilter: 'blur(24px) saturate(190%)',
    webkitBackdropFilter: 'blur(24px) saturate(190%)',
    boxShadow: '0 8px 36px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
    specularTopLine: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.35) 50%, transparent 100%)',
    composeElevationDp: 12,
    composeBorderWidthDp: 1.5
  }
};

export default glass;
