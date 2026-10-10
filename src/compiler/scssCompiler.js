/**
 * ColorWing Centralized Design System: SCSS / SASS Compiler
 * Generates modular SCSS variables, functions, and mixins.
 */

import tokens from '../tokens/index.js';

export function compileScss() {
  const { colors, bubbles, glass, components } = tokens;

  return `// =============================================================================
// ColorWing Design System: SCSS Bundle
// Single source of truth variables & mixins
// =============================================================================

// --- Color Tokens ---
$cw-primary: ${colors.primary};
$cw-secondary: ${colors.secondary};
$cw-tertiary: ${colors.tertiary};
$cw-tertiary-hover: ${colors.tertiaryHover};
$cw-tertiary-dark: ${colors.tertiaryDark};
$cw-tertiary-crimson: ${colors.tertiaryCrimson};
$cw-tertiary-deep: ${colors.tertiaryDeepCrimson};

$cw-bg: ${colors.bg};
$cw-bg-soft: ${colors.bgSoft};
$cw-surface: ${colors.surface};
$cw-surface-elevated: ${colors.surfaceElevated};
$cw-surface-card: ${colors.surfaceCard};
$cw-input-bg: ${colors.inputBg};
$cw-border: ${colors.borderDefault};
$cw-border-strong: ${colors.borderStrong};

$cw-text-primary: ${colors.textPrimary};
$cw-text-secondary: ${colors.textSecondary};
$cw-text-muted: ${colors.textMuted};

$cw-accent-cyan: ${colors.accentCyan};
$cw-accent-purple: ${colors.accentPurple};
$cw-success: ${colors.success};
$cw-warning: ${colors.warning};

// --- Geometry & Layout ---
$cw-bubble-radius: ${bubbles.geometry.borderRadius};
$cw-bubble-tail-radius: ${bubbles.geometry.borderRadiusSentTail};
$cw-feed-max-width: ${components.feed.maxWidth};

// --- Glass Tokens ---
$cw-glass-bg: ${glass.static.surfaceTranslucent};
$cw-glass-border: ${glass.static.border};
$cw-glass-shadow: ${glass.static.boxShadow};
$cw-glass-border-liquid: ${glass.liquid.border};
$cw-glass-shadow-liquid: ${glass.liquid.boxShadow};
$cw-glass-filter-liquid: ${glass.liquid.backdropFilter};

// --- Mixins ---
@mixin cw-bubble-base {
  position: relative;
  display: inline-block;
  max-width: 100%;
  width: fit-content;
  min-width: ${bubbles.geometry.minWidth};
  padding: ${bubbles.geometry.paddingY} ${bubbles.geometry.paddingX} ${bubbles.geometry.paddingBottom} ${bubbles.geometry.paddingX};
  border-radius: $cw-bubble-radius;
  font-size: 14.5px;
  line-height: 1.4;
  word-break: normal;
  overflow-wrap: anywhere;
  box-sizing: border-box;
}

@mixin cw-bubble-sent {
  @include cw-bubble-base;
  background: ${bubbles.sent.gradient};
  color: #ffffff;
  border-bottom-right-radius: $cw-bubble-tail-radius;
  box-shadow: ${bubbles.sent.boxShadow};
  margin-left: auto;
}

@mixin cw-bubble-received {
  @include cw-bubble-base;
  background: ${bubbles.received.gradient};
  color: #f1f5f9;
  border: ${bubbles.received.border};
  border-bottom-left-radius: $cw-bubble-tail-radius;
  box-shadow: ${bubbles.received.boxShadow};
  margin-right: auto;
}

@mixin cw-glass-panel($is-liquid: false) {
  @if $is-liquid {
    background-image: ${glass.liquid.overlayGradient};
    background-color: ${glass.liquid.surface};
    border: $cw-glass-border-liquid;
    box-shadow: $cw-glass-shadow-liquid;
    backdrop-filter: $cw-glass-filter-liquid;
    -webkit-backdrop-filter: $cw-glass-filter-liquid;
  } @else {
    background: $cw-glass-bg;
    border: $cw-glass-border;
    box-shadow: $cw-glass-shadow;
  }
  border-radius: 18px;
  position: relative;
  overflow: hidden;
}

@mixin cw-liquid-glass {
  background-image: ${glass.liquid.overlayGradient} !important;
  background-color: ${glass.liquid.surface} !important;
  border: $cw-glass-border-liquid !important;
  box-shadow: $cw-glass-shadow-liquid !important;
  backdrop-filter: $cw-glass-filter-liquid !important;
  -webkit-backdrop-filter: $cw-glass-filter-liquid !important;
}

@mixin cw-post-box {
  background: $cw-surface-card;
  border: 1px solid $cw-border;
  border-radius: 16px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
}
`;
}

export default { compileScss };
