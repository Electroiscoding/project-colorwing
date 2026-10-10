/**
 * ColorWing TypeScript Declarations
 */
export interface ColorwingColors {
  primary: string;
  secondary: string;
  tertiary: string;
  tertiaryHover: string;
  tertiaryDark: string;
  tertiaryCrimson: string;
  bg: string;
  bgSoft: string;
  surface: string;
  surfaceCard: string;
  inputBg: string;
  borderDefault: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accentCyan: string;
  accentPurple: string;
  success: string;
  warning: string;
}

export interface ColorwingTimeVibe {
  id: string;
  name: string;
  startHour: number;
  endHour: number;
  ambientColor: string;
  ambientColorAlpha: string;
  gradient: string;
  bubbleGlow: string;
}

export declare const tokens: {
  colors: ColorwingColors;
  timeVibes: Record<'morning' | 'day' | 'sunset' | 'night', ColorwingTimeVibe>;
  bubbles: any;
  glass: any;
  components: any;
  motion: any;
};

export default tokens;
