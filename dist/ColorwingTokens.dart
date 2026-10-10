// ColorWing Centralized Design Tokens for Flutter (Auto-generated)
// Primary: Black | Secondary: White | Tertiary: Red

import 'package:flutter/material.dart';

class ColorwingTokens {
  // --- Core Hierarchy ---
  static const Color primary = Color(0xFF000000);
  static const Color secondary = Color(0xFFFFFFFF);
  static const Color tertiary = Color(0xFFD90429);

  // Tertiary Red Palette
  static const Color tertiaryHover = Color(0xFFB00321);
  static const Color tertiaryDark = Color(0xFF9B021D);
  static const Color tertiaryCrimson = Color(0xFFC82128);

  // --- Backgrounds & Surfaces ---
  static const Color background = Color(0xFF000000);
  static const Color backgroundSoft = Color(0xFF0A0B10);
  static const Color surface = Color(0xFF12131C);
  static const Color surfaceCard = Color(0xFF111111);
  static const Color inputBackground = Color(0xFF1A1A1A);

  // --- Borders ---
  static const Color borderDefault = Color(0x14FFFFFF);
  static const Color borderStrong = Color(0x26FFFFFF);

  // --- Typography ---
  static const Color textPrimary = Color(0xFFFFFFFF);
  static const Color textSecondary = Color(0xB3FFFFFF);
  static const Color textMuted = Color(0x80FFFFFF);

  // --- Accents ---
  static const Color accentCyan = Color(0xFF818CF8);
  static const Color accentPurple = Color(0xFF6366F1);
  static const Color success = Color(0xFF22C55E);
  static const Color warning = Color(0xFFF59E0B);

  // --- Bubble Shapes ---
  static const BorderRadius bubbleSentRadius = BorderRadius.only(
    topLeft: Radius.circular(14),
    topRight: Radius.circular(14),
    bottomLeft: Radius.circular(14),
    bottomRight: Radius.circular(4),
  );

  static const BorderRadius bubbleReceivedRadius = BorderRadius.only(
    topLeft: Radius.circular(14),
    topRight: Radius.circular(14),
    bottomLeft: Radius.circular(4),
    bottomRight: Radius.circular(14),
  );

  // --- Gradient Brushes ---
  static const LinearGradient bubbleSentGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [
      Color(0xFFD90429),
      Color(0xFFC82128),
      Color(0xFF9B021D),
    ],
  );

  static const LinearGradient bubbleReceivedGradient = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [
      Color(0xFF161926),
      Color(0xFF0F131C),
    ],
  );
}
