/**
 * ColorWing Centralized Design System: iOS SwiftUI Compiler
 * Compiles JavaScript tokens into type-safe Swift structures and extensions for iOS & macOS.
 */

import tokens from '../tokens/index.js';

export function compileSwiftTokens() {
  const { colors, bubbles } = tokens;

  return `// ColorWing Centralized Design Tokens for iOS / SwiftUI (Auto-generated)
// Primary: Black | Secondary: White | Tertiary: Red

import SwiftUI

public enum ColorwingTokens {
    // --- Core Hierarchy ---
    public static let primary = Color(red: 0.0, green: 0.0, blue: 0.0)
    public static let secondary = Color(red: 1.0, green: 1.0, blue: 1.0)
    public static let tertiary = Color(red: 0.851, green: 0.016, blue: 0.161) // #D90429

    // Tertiary Red Palette
    public static let tertiaryHover = Color(red: 0.690, green: 0.012, blue: 0.129) // #B00321
    public static let tertiaryDark = Color(red: 0.608, green: 0.008, blue: 0.114)  // #9B021D
    public static let tertiaryCrimson = Color(red: 0.784, green: 0.129, blue: 0.157) // #C82128

    // --- Backgrounds & Surfaces ---
    public static let background = Color(red: 0.0, green: 0.0, blue: 0.0)
    public static let backgroundSoft = Color(red: 0.039, green: 0.043, blue: 0.063) // #0A0B10
    public static let surface = Color(red: 0.071, green: 0.075, blue: 0.110) // #12131C
    public static let surfaceCard = Color(red: 0.067, green: 0.067, blue: 0.067) // #111111
    public static let inputBackground = Color(red: 0.102, green: 0.102, blue: 0.102) // #1A1A1A

    // --- Borders & Dividers ---
    public static let borderDefault = Color.white.opacity(0.08)
    public static let borderStrong = Color.white.opacity(0.15)

    // --- Typography ---
    public static let textPrimary = Color.white
    public static let textSecondary = Color.white.opacity(0.70)
    public static let textMuted = Color.white.opacity(0.50)

    // --- Accents ---
    public static let accentCyan = Color(red: 0.506, green: 0.549, blue: 0.973) // #818CF8
    public static let accentPurple = Color(red: 0.388, green: 0.400, blue: 0.945) // #6366F1
    public static let success = Color(red: 0.133, green: 0.773, blue: 0.369) // #22C55E
    public static let warning = Color(red: 0.961, green: 0.620, blue: 0.043) // #F59E0B

    // --- Time-Based Ambient Vibe ---
    public static let ambientMorning = Color(red: 0.220, green: 0.106, blue: 0.035) // #381B09
    public static let ambientDay = Color(red: 0.067, green: 0.118, blue: 0.180)     // #111E2E
    public static let ambientSunset = Color(red: 0.180, green: 0.071, blue: 0.106)  // #2E121B
    public static let ambientNight = Color(red: 0.059, green: 0.039, blue: 0.110)   // #0F0A1C

    // --- Bubble Gradients ---
    public static let bubbleSentGradient = LinearGradient(
        colors: [tertiary, tertiaryCrimson, tertiaryDark],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )

    public static let bubbleReceivedGradient = LinearGradient(
        colors: [Color(red: 0.086, green: 0.098, blue: 0.149), Color(red: 0.059, green: 0.075, blue: 0.110)],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )

    // --- Liquid Glass Tokens (APK Alignment) ---
    public static let glassBorderWidthLiquid: CGFloat = 1.5
    public static let glassBorderWidthStatic: CGFloat = 1.0
    public static let glassBlurRadius: CGFloat = 16.0
    public static let liquidGlassBorderGradient = LinearGradient(
        colors: [Color.white.opacity(0.75), Color.white.opacity(0.25), Color.white.opacity(0.35)],
        startPoint: .top,
        endPoint: .bottom
    )
    public static let liquidGlassOverlayGradient = LinearGradient(
        colors: [Color.white.opacity(0.20), Color.white.opacity(0.05), Color.clear, Color.clear, Color.black.opacity(0.15)],
        startPoint: .top,
        endPoint: .bottom
    )
}
`;
}

export default compileSwiftTokens;
