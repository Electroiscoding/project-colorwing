/**
 * ColorWing TypeScript Declarations
 * Exhaustive Type Safety for Cross-Platform Design System
 */

export interface ColorwingMeta {
  system: string;
  version: string;
  description: string;
}

export interface ColorwingColors {
  primary: string;
  secondary: string;
  tertiary: string;
  tertiaryHover: string;
  tertiaryDark: string;
  tertiaryCrimson: string;
  tertiaryDeepCrimson: string;
  bg: string;
  bgSoft: string;
  surface: string;
  surfaceElevated: string;
  surfaceCard: string;
  inputBg: string;
  inputBorder: string;
  borderSubtle: string;
  borderDefault: string;
  borderStrong: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accentCyan: string;
  accentPurple: string;
  success: string;
  warning: string;
}

export interface ColorwingTimeVibe {
  id: 'morning' | 'day' | 'sunset' | 'night';
  name: string;
  startHour: number;
  endHour: number;
  ambientColor: string;
  ambientColorAlpha: string;
  gradient: string;
  bubbleGlow: string;
}

export interface ColorwingBubbleGeometry {
  borderRadius: string;
  borderRadiusSentTail: string;
  borderRadiusReceivedTail: string;
  paddingY: string;
  paddingX: string;
  paddingBottom: string;
  minWidth: string;
  maxWidthPercentMobile: string;
  maxWidthPercentDesktop: string;
  composeCornerDp: number;
  composeTailCornerDp: number;
}

export interface ColorwingBubbleSent {
  gradient: string;
  gradientColors: string[];
  color: string;
  border: string;
  boxShadow: string;
  topHighlight: string;
  edgeGlowAmber: string;
  edgeGlowWidth: string;
}

export interface ColorwingBubbleReceived {
  background: string;
  gradient: string;
  gradientColors: string[];
  color: string;
  border: string;
  boxShadow: string;
  topHighlight: string;
}

export interface ColorwingBubbles {
  geometry: ColorwingBubbleGeometry;
  sent: ColorwingBubbleSent;
  received: ColorwingBubbleReceived;
  beetaAi: {
    gradient: string;
    gradientColors: string[];
    border: string;
    color: string;
    badgeColor: string;
  };
}

export interface ColorwingGlassStatic {
  enabledByDefault: boolean;
  bg: string;
  bgTranslucent: string;
  surface: string;
  surfaceTranslucent: string;
  border: string;
  boxShadow: string;
  backdropFilter: string;
  specularHighlight: string;
}

export interface ColorwingGlassLiquid {
  enabledByDefault: boolean;
  bg: string;
  surface: string;
  border: string;
  backdropFilter: string;
  webkitBackdropFilter: string;
  boxShadow: string;
  specularTopLine: string;
  composeElevationDp: number;
  composeBorderWidthDp: number;
}

export interface ColorwingGlass {
  static: ColorwingGlassStatic;
  liquid: ColorwingGlassLiquid;
}

export interface ColorwingMotion {
  durations: {
    instant: string;
    fast: string;
    normal: string;
    slow: string;
  };
  easings: {
    standard: string;
    decelerate: string;
    accelerate: string;
    spring: string;
  };
}

export interface ColorwingDesignSystem {
  meta: ColorwingMeta;
  colors: ColorwingColors;
  timeVibes: Record<'morning' | 'day' | 'sunset' | 'night', ColorwingTimeVibe>;
  bubbles: ColorwingBubbles;
  glass: ColorwingGlass;
  components: any;
  motion: ColorwingMotion;
}

export declare const tokens: ColorwingDesignSystem;
export declare function getTimeVibeForHour(hour: number): ColorwingTimeVibe;
export default tokens;
