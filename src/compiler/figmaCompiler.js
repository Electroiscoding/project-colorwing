/**
 * ColorWing Centralized Design System: Figma & Style Dictionary Compiler
 * Formats tokens for Figma Tokens Studio and Style Dictionary.
 */

import tokens from '../tokens/index.js';

export function compileFigmaTokens() {
  const { colors, bubbles } = tokens;

  const figmaFormat = {
    color: {
      primary: { value: colors.primary, type: 'color' },
      secondary: { value: colors.secondary, type: 'color' },
      tertiary: { value: colors.tertiary, type: 'color' },
      tertiaryDark: { value: colors.tertiaryDark, type: 'color' },
      background: { value: colors.bg, type: 'color' },
      surface: { value: colors.surface, type: 'color' },
      surfaceCard: { value: colors.surfaceCard, type: 'color' },
      border: { value: colors.borderDefault, type: 'color' },
      accentCyan: { value: colors.accentCyan, type: 'color' },
      success: { value: colors.success, type: 'color' }
    },
    borderRadius: {
      bubble: { value: `${bubbles.geometry.composeCornerDp}px`, type: 'borderRadius' },
      bubbleTail: { value: `${bubbles.geometry.composeTailCornerDp}px`, type: 'borderRadius' }
    }
  };

  return JSON.stringify(figmaFormat, null, 2);
}

export default compileFigmaTokens;
