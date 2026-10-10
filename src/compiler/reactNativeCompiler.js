/**
 * ColorWing Centralized Design System: React Native Token Compiler
 * Exports typed tokens and styles for React Native and StyleX mobile applications.
 */

import tokens from '../tokens/index.js';

export function compileReactNativeTokens() {
  const { colors, bubbles } = tokens;

  return `/**
 * ColorWing React Native Tokens (Auto-generated)
 * Primary: Black | Secondary: White | Tertiary: Red
 */

export const ColorwingNative = {
  colors: {
    primary: '${colors.primary}',
    secondary: '${colors.secondary}',
    tertiary: '${colors.tertiary}',
    tertiaryDark: '${colors.tertiaryDark}',
    tertiaryCrimson: '${colors.tertiaryCrimson}',
    background: '${colors.bg}',
    backgroundSoft: '${colors.bgSoft}',
    surface: '${colors.surface}',
    card: '${colors.surfaceCard}',
    input: '${colors.inputBg}',
    border: '${colors.borderDefault}',
    textPrimary: '${colors.textPrimary}',
    textSecondary: '${colors.textSecondary}',
    textMuted: '${colors.textMuted}',
    success: '${colors.success}',
    warning: '${colors.warning}'
  },
  bubbles: {
    sentStyle: {
      backgroundColor: '${colors.tertiary}',
      borderTopLeftRadius: ${bubbles.geometry.composeCornerDp},
      borderTopRightRadius: ${bubbles.geometry.composeCornerDp},
      borderBottomLeftRadius: ${bubbles.geometry.composeCornerDp},
      borderBottomRightRadius: ${bubbles.geometry.composeTailCornerDp},
      paddingHorizontal: 12,
      paddingVertical: 8
    },
    receivedStyle: {
      backgroundColor: '#161926',
      borderTopLeftRadius: ${bubbles.geometry.composeCornerDp},
      borderTopRightRadius: ${bubbles.geometry.composeCornerDp},
      borderBottomLeftRadius: ${bubbles.geometry.composeTailCornerDp},
      borderBottomRightRadius: ${bubbles.geometry.composeCornerDp},
      paddingHorizontal: 12,
      paddingVertical: 8
    }
  }
};

export default ColorwingNative;
`;
}

export default compileReactNativeTokens;
