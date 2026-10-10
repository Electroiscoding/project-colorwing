/**
 * ColorWing Centralized Design System: Core Components
 *
 * Covers:
 * - Chat Header (Web-style username + conditional call button: APK only, not web)
 * - Feed (Static pitch-black + sequential flow + post box + plus sign)
 * - Profile (Minimalist static web layout)
 * - Sequential Web Flow (skip heavy cards to eliminate fatigue)
 * - Buttons, Inputs, Avatars
 */

export const components = {
  // --- Chat Header ---
  chatHeader: {
    height: '64px',
    bg: '#000000',
    bgTranslucent: 'rgba(10, 11, 16, 0.85)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    titleColor: '#FFFFFF',
    statusOnlineColor: '#22C55E',
    statusOfflineColor: 'rgba(255, 255, 255, 0.50)',
    // Platform-specific rule:
    callButtonVisibleOnWeb: false,
    callButtonVisibleOnApk: true,
    actionIconColor: 'rgba(255, 255, 255, 0.85)'
  },

  // --- Feed UI (NTA-APK Style) ---
  feed: {
    bg: '#000000',
    maxWidth: '600px',
    containerBorder: '1px solid rgba(255, 255, 255, 0.08)',
    postBox: {
      bg: '#111111',
      innerBg: '#1A1A1A',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      placeholderColor: 'rgba(255, 255, 255, 0.50)',
      textColor: '#FFFFFF',
      plusButtonBg: '#D90429',
      plusButtonHover: '#B00321',
      plusButtonIconColor: '#FFFFFF'
    },
    // Sequential Web Flow: Flat 1px border instead of fatiguing 3D cards
    sequentialItem: {
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      paddingY: '14px',
      paddingX: '16px',
      hoverBg: 'rgba(255, 255, 255, 0.02)',
      authorColor: '#FFFFFF',
      timestampColor: 'rgba(255, 255, 255, 0.50)'
    }
  },

  // --- Profile Page (Static Like Web) ---
  profile: {
    bg: '#000000',
    headerSurface: '#12131C',
    avatarBorder: '2px solid rgba(255, 255, 255, 0.15)',
    bioTextColor: 'rgba(255, 255, 255, 0.70)',
    statLabelColor: 'rgba(255, 255, 255, 0.50)',
    statValueColor: '#FFFFFF',
    tabActiveBorder: '#D90429',
    tabInactiveColor: 'rgba(255, 255, 255, 0.50)'
  },

  // --- Interactive Buttons ---
  buttons: {
    primary: {
      bg: '#D90429',
      hover: '#B00321',
      active: '#9B021D',
      color: '#FFFFFF',
      borderRadius: '9999px',
      boxShadow: '0 4px 14px rgba(217, 4, 41, 0.35)'
    },
    secondary: {
      bg: 'transparent',
      hover: 'rgba(255, 255, 255, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.20)',
      color: '#FFFFFF',
      borderRadius: '9999px'
    },
    ghost: {
      bg: 'transparent',
      hover: 'rgba(255, 255, 255, 0.08)',
      color: 'rgba(255, 255, 255, 0.85)',
      borderRadius: '9999px'
    },
    iconFab: {
      bg: '#D90429',
      hover: '#B00321',
      color: '#FFFFFF',
      borderRadius: '50%',
      size: '48px',
      boxShadow: '0 6px 20px rgba(217, 4, 41, 0.40)'
    }
  },

  // --- Input Fields ---
  inputs: {
    bg: '#1A1A1A',
    border: '1px solid rgba(255, 255, 255, 0.10)',
    borderFocus: '1px solid #D90429',
    color: '#FFFFFF',
    placeholder: 'rgba(255, 255, 255, 0.40)',
    borderRadius: '12px',
    padding: '12px 16px'
  }
};

export default components;
