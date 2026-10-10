/**
 * ColorWing Tailwind CSS Preset (Auto-generated)
 * Include in tailwind.config.js:
 *   presets: [require('@netuark/colorwing/tailwind')]
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        'cw-primary': '#000000',
        'cw-secondary': '#FFFFFF',
        'cw-tertiary': {
          DEFAULT: '#D90429',
          hover: '#B00321',
          dark: '#9B021D',
          crimson: '#C82128'
        },
        'cw-bg': '#000000',
        'cw-bg-soft': '#0A0B10',
        'cw-surface': '#12131C',
        'cw-card': '#111111',
        'cw-input': '#1A1A1A',
        'cw-accent-cyan': '#818CF8',
        'cw-accent-purple': '#6366F1',
        'cw-success': '#22C55E',
        'cw-warning': '#F59E0B'
      },
      borderRadius: {
        'cw-bubble': '14px',
        'cw-tail': '4px'
      },
      boxShadow: {
        'cw-bubble-sent': '0 4px 14px rgba(0, 0, 0, 0.35), 0 2px 6px rgba(200, 33, 40, 0.25)',
        'cw-bubble-received': '0 3px 12px rgba(0, 0, 0, 0.35)'
      }
    }
  }
};
