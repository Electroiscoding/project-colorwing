/**
 * ColorWing Centralized Design System: Core Colors
 * Single source of truth for Web, Android, and cross-platform clients.
 *
 * Core Hierarchy:
 * - Primary: Black (Native OLED pitch black)
 * - Secondary: White (Crisp high-contrast secondary)
 * - Tertiary: Red (#D90429 / NeTuArk Brand Identity)
 */

export const colors = {
  // --- Core Hierarchy ---
  primary: '#000000',
  secondary: '#FFFFFF',
  tertiary: '#D90429',

  // Tertiary Red Palette (Branding, Accents, Gradients)
  tertiaryHover: '#B00321',
  tertiaryDark: '#9B021D',
  tertiaryCrimson: '#C82128',
  tertiaryDeepCrimson: '#7D1225',
  tertiarySubtle: 'rgba(217, 4, 41, 0.15)',
  tertiaryGlow: 'rgba(217, 4, 41, 0.35)',

  // --- Backgrounds & Dark Surfaces (Native & Soft Black) ---
  bg: '#000000',
  bgSoft: '#0A0B10',
  surface: '#12131C',
  surfaceElevated: '#161926',
  surfaceCard: '#111111',
  inputBg: '#1A1A1A',
  inputBorder: 'rgba(255, 255, 255, 0.12)',

  // --- Borders & Dividers ---
  borderSubtle: 'rgba(255, 255, 255, 0.05)',
  borderDefault: 'rgba(255, 255, 255, 0.08)',
  borderStrong: 'rgba(255, 255, 255, 0.15)',
  borderSlate: '#1E293B',

  // --- Typography / Alpha Scales on Secondary White ---
  textPrimary: '#FFFFFF',
  textSecondary: 'rgba(255, 255, 255, 0.70)',
  textMuted: 'rgba(255, 255, 255, 0.50)',
  textSubtle: 'rgba(255, 255, 255, 0.35)',
  textDisabled: 'rgba(255, 255, 255, 0.20)',

  // --- Semantic & Neon Glow Accents ---
  accentCyan: '#818CF8',
  accentPurple: '#6366F1',
  accentBlue: '#4F46E5',
  success: '#22C55E',
  warning: '#F59E0B',
  warningGold: '#F1C40F',
  danger: '#EF4444'
};

export default colors;
