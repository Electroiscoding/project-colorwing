/**
 * ColorWing Centralized Design System: Glassmorphism & Liquid Glass Tokens
 *
 * Merged UI Decision:
 * - Default look: Web static (clean, high performance, zero liquid-glass lag)
 * - Liquid glass: Optional toggle, OFF by default
 * - Transparency: Preferred over solid glass (clean translucency)
 */

export const glass = {
  // --- DEFAULT LOOK: Web Static (clean, high performance, zero liquid-glass lag) ---
  static: {
    enabledByDefault: true,
    bg: '#000000',
    bgTranslucent: 'rgba(10, 11, 16, 0.75)',
    surface: '#12131C',
    surfaceTranslucent: 'rgba(18, 19, 28, 0.75)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderWidthDp: 1.0,
    borderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.12) 100%)',
    frostedGradient: 'linear-gradient(180deg, rgba(10, 11, 16, 0.60) 0%, rgba(14, 17, 28, 0.53) 100%)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.40)',
    backdropFilter: 'none',
    specularHighlight: 'rgba(255, 255, 255, 0.05)'
  },

  // --- OPTIONAL TOGGLE: Liquid Glass (Off by default, 1:1 APK alignment) ---
  liquid: {
    enabledByDefault: false,
    bg: 'rgba(10, 11, 16, 0.55)',
    surface: 'rgba(18, 19, 28, 0.60)',
    // Multi-stop specular border (1.5dp) matching APK rememberLiquidGlassBorder()
    // Top specular highlight: 0.75, Sides: 0.25, Bottom reflection: 0.35
    borderWidthDp: 1.5,
    border: '1.5px solid rgba(255, 255, 255, 0.25)',
    borderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.35) 100%)',
    // Top-lighting diffusion + bottom depth shadow overlay matching APK rememberLiquidGlassOverlayBrush()
    // 0%: 0.20, 25%: 0.05, 50%: transparent, 75%: transparent, 100%: rgba(0, 0, 0, 0.15)
    overlayGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.15) 100%)',
    // Blur & lens refraction matching SafeHaze.kt (16.dp blur with vibrancy)
    backdropFilter: 'blur(16px) saturate(180%) contrast(105%)',
    webkitBackdropFilter: 'blur(16px) saturate(180%) contrast(105%)',
    blurRadiusDp: 16,
    refractionHeightDp: 28,
    refractionAmountDp: 32,
    boxShadow: 'inset 0 1.5px 0 0 rgba(255, 255, 255, 0.75), inset 0 -1.5px 0 0 rgba(255, 255, 255, 0.35), 0 8px 36px rgba(0, 0, 0, 0.65)',
    specularTopLine: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.75) 50%, transparent 100%)',
    specularAlphas: {
      top: 0.75,
      sides: 0.25,
      bottom: 0.35
    },
    overlayAlphas: {
      topDiffusion: 0.20,
      midDiffusion: 0.05,
      bottomShadow: 0.15
    },
    composeElevationDp: 12,
    composeBorderWidthDp: 1.5
  }
};

export default glass;
