package com.netuark.colorwing

import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.geometry.Offset
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.ui.unit.dp

/**
 * ColorWing Centralized Design Tokens (Auto-generated)
 * Primary: Black | Secondary: White | Tertiary: Red
 */
object ColorwingTokens {
    // --- Core Hierarchy ---
    val Primary = Color(0xFF000000)
    val Secondary = Color(0xFFFFFFFF)
    val Tertiary = Color(0xFFD90429)

    // Tertiary Red Palette
    val TertiaryHover = Color(0xFFB00321)
    val TertiaryDark = Color(0xFF9B021D)
    val TertiaryCrimson = Color(0xFFC82128)
    val TertiaryDeepCrimson = Color(0xFF7D1225)

    // --- Backgrounds & Surfaces ---
    val Background = Color(0xFF000000)
    val BackgroundSoft = Color(0xFF0A0B10)
    val Surface = Color(0xFF12131C)
    val SurfaceElevated = Color(0xFF161926)
    val SurfaceCard = Color(0xFF111111)
    val InputBackground = Color(0xFF1A1A1A)

    // --- Borders & Dividers ---
    val BorderSubtle = Color(0x0DFFFFFF)
    val BorderDefault = Color(0x14FFFFFF)
    val BorderStrong = Color(0x26FFFFFF)
    val BorderSlate = Color(0xFF1E293B)

    // --- Typography Alpha Scales ---
    val TextPrimary = Color(0xFFFFFFFF)
    val TextSecondary = Color(0xB3FFFFFF) // 70%
    val TextMuted = Color(0x80FFFFFF)     // 50%
    val TextSubtle = Color(0x59FFFFFF)    // 35%
    val TextDisabled = Color(0x33FFFFFF)  // 20%

    // --- Accents & Semantics ---
    val AccentCyan = Color(0xFF818CF8)
    val AccentPurple = Color(0xFF6366F1)
    val AccentBlue = Color(0xFF4F46E5)
    val Success = Color(0xFF22C55E)
    val Warning = Color(0xFFF59E0B)
    val WarningGold = Color(0xFFF1C40F)
    val Danger = Color(0xFFEF4444)

    // --- Time-Based Ambient Colors ---
    val AmbientMorning = Color(0xFF381B09)
    val AmbientDay = Color(0xFF111E2E)
    val AmbientSunset = Color(0xFF2E121B)
    val AmbientNight = Color(0xFF0F0A1C)

    // --- Glass & Liquid Glass Specifications (APK SafeHaze & LiquidGlassEffect) ---
    val GlassBorderWidthStatic = 1.dp
    val GlassBorderWidthLiquid = 1.5.dp
    val GlassBlurRadius = 16.dp
    val GlassRefractionHeight = 28.dp
    val GlassRefractionAmount = 32.dp
    val GlassSpecularTopAlpha = 0.75f
    val GlassSpecularSideAlpha = 0.25f
    val GlassSpecularBottomAlpha = 0.35f

    // --- Bubble Shapes ---
    val BubbleCornerRadius = 14.dp
    val BubbleTailCornerRadius = 4.dp
    val BubbleShapeSent = RoundedCornerShape(
        topStart = 14.dp,
        topEnd = 14.dp,
        bottomStart = 14.dp,
        bottomEnd = 4.dp
    )
    val BubbleShapeReceived = RoundedCornerShape(
        topStart = 14.dp,
        topEnd = 14.dp,
        bottomStart = 4.dp,
        bottomEnd = 14.dp
    )
}
