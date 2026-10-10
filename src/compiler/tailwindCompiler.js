/**
 * ColorWing Centralized Design System: Tailwind CSS Preset Compiler
 * Exports a zero-configuration preset for Tailwind CSS v3 / v4.
 */

import tokens from '../tokens/index.js';

export function compileTailwindPreset() {
  const { colors, bubbles } = tokens;

  return `/**
 * ColorWing Tailwind CSS Preset (Auto-generated)
 * Include in tailwind.config.js:
 *   presets: [require('@netuark/colorwing/tailwind')]
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        'cw-primary': '${colors.primary}',
        'cw-secondary': '${colors.secondary}',
        'cw-tertiary': {
          DEFAULT: '${colors.tertiary}',
          hover: '${colors.tertiaryHover}',
          dark: '${colors.tertiaryDark}',
          crimson: '${colors.tertiaryCrimson}'
        },
        'cw-bg': '${colors.bg}',
        'cw-bg-soft': '${colors.bgSoft}',
        'cw-surface': '${colors.surface}',
        'cw-card': '${colors.surfaceCard}',
        'cw-input': '${colors.inputBg}',
        'cw-accent-cyan': '${colors.accentCyan}',
        'cw-accent-purple': '${colors.accentPurple}',
        'cw-success': '${colors.success}',
        'cw-warning': '${colors.warning}'
      },
      borderRadius: {
        'cw-bubble': '${bubbles.geometry.borderRadius}',
        'cw-tail': '${bubbles.geometry.borderRadiusSentTail}'
      },
      boxShadow: {
        'cw-bubble-sent': '${bubbles.sent.boxShadow}',
        'cw-bubble-received': '${bubbles.received.boxShadow}'
      }
    }
  }
};
`;
}

export default compileTailwindPreset;
