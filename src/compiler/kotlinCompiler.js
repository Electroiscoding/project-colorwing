/**
 * ColorWing Centralized Design System: Kotlin / Jetpack Compose Compiler
 * Generates type-safe Kotlin design tokens and Compose themes for Android.
 */

import tokens from '../tokens/index.js';

export function compileKotlinTokens() {
  const { colors, timeVibes, bubbles } = tokens;

  return `package com.netuark.colorwing

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

    // --- Bubble Shapes ---
    val BubbleCornerRadius = ${bubbles.geometry.composeCornerDp}.dp
    val BubbleTailCornerRadius = ${bubbles.geometry.composeTailCornerDp}.dp
    val BubbleShapeSent = RoundedCornerShape(
        topStart = ${bubbles.geometry.composeCornerDp}.dp,
        topEnd = ${bubbles.geometry.composeCornerDp}.dp,
        bottomStart = ${bubbles.geometry.composeCornerDp}.dp,
        bottomEnd = ${bubbles.geometry.composeTailCornerDp}.dp
    )
    val BubbleShapeReceived = RoundedCornerShape(
        topStart = ${bubbles.geometry.composeCornerDp}.dp,
        topEnd = ${bubbles.geometry.composeCornerDp}.dp,
        bottomStart = ${bubbles.geometry.composeTailCornerDp}.dp,
        bottomEnd = ${bubbles.geometry.composeCornerDp}.dp
    )
}
`;
}

export function compileKotlinTheme() {
  return `package com.netuark.colorwing

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.geometry.Offset
import java.util.Calendar

private val ColorwingDarkColorScheme = darkColorScheme(
    primary = ColorwingTokens.Tertiary,
    secondary = ColorwingTokens.TextSecondary,
    tertiary = ColorwingTokens.Tertiary,
    background = ColorwingTokens.Background,
    surface = ColorwingTokens.Surface,
    onPrimary = ColorwingTokens.TextPrimary,
    onSecondary = ColorwingTokens.TextPrimary,
    onTertiary = ColorwingTokens.TextPrimary,
    onBackground = ColorwingTokens.TextPrimary,
    onSurface = ColorwingTokens.TextPrimary
)

/**
 * ColorWing Theme for Jetpack Compose
 * Default look: Web static (clean, high-performance, battery-friendly)
 * Optional Liquid Glass toggle (off by default)
 */
@Composable
fun ColorwingTheme(
    darkTheme: Boolean = true,
    isLiquidGlass: Boolean = false,
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colorScheme = ColorwingDarkColorScheme,
        content = content
    )
}

/**
 * Time-based ambient color vibe calculation.
 * Morning (6-10): Warm amber (#381B09)
 * Day (11-16): Cool ocean (#111E2E)
 * Sunset (17-19): Dusk orange/purple (#2E121B)
 * Night (20-5): Cosmic purple (#0F0A1C)
 */
@Composable
fun rememberColorwingAmbientColor(): Color {
    val hour = Calendar.getInstance().get(Calendar.HOUR_OF_DAY)
    return when (hour) {
        in 6..10 -> ColorwingTokens.AmbientMorning
        in 11..16 -> ColorwingTokens.AmbientDay
        in 17..19 -> ColorwingTokens.AmbientSunset
        else -> ColorwingTokens.AmbientNight
    }
}

/**
 * Chat Bubble Brushes adhering to APK Shape & Web Gradients
 */
@Composable
fun rememberColorwingBubbleBrush(isMine: Boolean): Brush {
    return if (isMine) {
        val colors = remember {
            listOf(
                ColorwingTokens.Tertiary,
                ColorwingTokens.TertiaryCrimson,
                ColorwingTokens.TertiaryDark
            )
        }
        remember {
            Brush.linearGradient(
                colors = colors,
                start = Offset(0f, 0f),
                end = Offset(525f, 525f)
            )
        }
    } else {
        val slateBase = remember { Color(0xFF0F131C) }
        val slateMid = remember { Color(0xFF161926) }
        val colors = remember { listOf(slateMid, slateBase) }
        remember {
            Brush.linearGradient(
                colors = colors,
                start = Offset(0f, 0f),
                end = Offset(500f, 500f)
            )
        }
    }
}

/**
 * Glass Surface Brush: Clean static transparency by default,
 * with optional Liquid Glass specular gradient.
 */
@Composable
fun rememberColorwingGlassBrush(isLiquidGlass: Boolean = false): Brush {
    return if (isLiquidGlass) {
        val colors = remember {
            listOf(
                Color(0x8C0A0B10),
                Color(0x9912131C)
            )
        }
        remember { Brush.verticalGradient(colors = colors) }
    } else {
        val colors = remember {
            listOf(
                Color(0xCC000000),
                Color(0xE60A0B10)
            )
        }
        remember { Brush.verticalGradient(colors = colors) }
    }
}
`;
}

export function compileKotlinComponents() {
  return `package com.netuark.colorwing

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.MoreVert
import androidx.compose.material.icons.filled.Phone
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

/**
 * Centralized Chat Top Bar Component
 * Note: Call button is conditionally visible on APK (default: true for Android)
 */
@Composable
fun ColorwingChatTopBar(
    title: String,
    statusText: String,
    isOnline: Boolean,
    showCallButton: Boolean = true, // APK rule: true on APK, false on Web
    onBackClick: () -> Unit,
    onCallClick: () -> Unit = {},
    onMoreClick: () -> Unit = {},
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .height(64.dp)
            .background(ColorwingTokens.Background)
            .padding(horizontal = 12.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        IconButton(onClick = onBackClick) {
            Icon(
                Icons.AutoMirrored.Filled.ArrowBack,
                contentDescription = "Back",
                tint = ColorwingTokens.Tertiary
            )
        }

        Spacer(modifier = Modifier.width(8.dp))

        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = title,
                color = ColorwingTokens.TextPrimary,
                fontSize = 16.sp,
                fontWeight = FontWeight.Bold
            )
            Text(
                text = statusText,
                color = if (isOnline) ColorwingTokens.Success else ColorwingTokens.TextMuted,
                fontSize = 12.sp
            )
        }

        // Call button: Rendered on APK, hidden on Web
        if (showCallButton) {
            IconButton(onClick = onCallClick) {
                Icon(
                    Icons.Default.Phone,
                    contentDescription = "Voice Call",
                    tint = ColorwingTokens.TextPrimary
                )
            }
        }

        IconButton(onClick = onMoreClick) {
            Icon(
                Icons.Default.MoreVert,
                contentDescription = "More Options",
                tint = ColorwingTokens.TextSecondary
            )
        }
    }
}

/**
 * Sequential Post Box with Red Plus Button
 */
@Composable
fun ColorwingPostBox(
    placeholder: String = "What's happening?",
    onPostClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .padding(16.dp)
            .background(ColorwingTokens.SurfaceCard, RoundedCornerShape(16.dp))
            .border(1.dp, ColorwingTokens.BorderDefault, RoundedCornerShape(16.dp))
            .padding(12.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Box(
            modifier = Modifier
                .weight(1f)
                .background(ColorwingTokens.InputBackground, CircleShape)
                .padding(horizontal = 16.dp, vertical = 10.dp)
        ) {
            Text(
                text = placeholder,
                color = ColorwingTokens.TextMuted,
                fontSize = 14.sp
            )
        }

        Spacer(modifier = Modifier.width(10.dp))

        IconButton(
            onClick = onPostClick,
            modifier = Modifier
                .size(40.dp)
                .background(ColorwingTokens.Tertiary, CircleShape)
        ) {
            Icon(
                Icons.Default.Add,
                contentDescription = "Create Post",
                tint = Color.White
            )
        }
    }
}
`;
}

export default {
  compileKotlinTokens,
  compileKotlinTheme,
  compileKotlinComponents
};
