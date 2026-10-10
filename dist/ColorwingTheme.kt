package com.netuark.colorwing

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
        val redBase = remember { Color(0xFFC82128) }
        val crimson = remember { Color(0xFFA01830) }
        val purpleGlow = remember { Color(0xFF6D164A) }
        val blueGlow = remember { Color(0xFF501F50) }
        val colors = remember { listOf(redBase, crimson, purpleGlow, blueGlow) }
        remember {
            Brush.linearGradient(
                colors = colors,
                start = Offset(0f, 0f),
                end = Offset(525f, 525f)
            )
        }
    } else {
        val slateBase = remember { Color(0xFF0F131C) }
        val slateMid = remember { Color(0xFF181D28) }
        val slateHighlight = remember { Color(0xFF1D1D2C) }
        val colors = remember { listOf(slateBase, slateMid, slateHighlight, slateBase) }
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

/**
 * Edge border brush for liquid glass surfaces (1:1 from APK LiquidGlassEffect.kt).
 * A crisp white outline that defines the glass shape.
 * Top edge is bright white (0.75f specular highlight), sides are 0.25f, bottom is 0.35f reflection.
 */
@Composable
fun rememberLiquidGlassBorder(): Brush {
    return remember {
        Brush.verticalGradient(
            colors = listOf(
                Color.White.copy(alpha = 0.75f), // Top specular highlight
                Color.White.copy(alpha = 0.25f), // Sides
                Color.White.copy(alpha = 0.35f)  // Bottom reflection
            )
        )
    }
}

/**
 * Overlay brush that adds specular top-lighting and depth shadow (1:1 from APK LiquidGlassEffect.kt).
 * Apply to the background of a glass component over the blur/background.
 */
@Composable
fun rememberLiquidGlassOverlayBrush(): Brush {
    return remember {
        Brush.verticalGradient(
            colors = listOf(
                Color.White.copy(alpha = 0.20f), // Top light diffusion
                Color.White.copy(alpha = 0.05f),
                Color.Transparent,
                Color.Transparent,
                Color.Black.copy(alpha = 0.15f)  // Bottom depth shadow
            )
        )
    }
}

/**
 * Standard frosted glass border brush (1:1 from APK Theme.kt).
 */
@Composable
fun rememberStandardGlassBorder(): Brush {
    val colors = remember { listOf(Color.White.copy(alpha = 0.35f), Color.White.copy(alpha = 0.12f)) }
    return remember { Brush.verticalGradient(colors = colors) }
}

@Composable
fun rememberTelegramGlassBorder(): Brush = rememberStandardGlassBorder()

/**
 * Standard frosted glass background brush (1:1 from APK Theme.kt).
 */
@Composable
fun rememberStandardFrostedGlassBrush(): Brush {
    val colors = remember { listOf(Color(0x990A0B10), Color(0x880E111C)) }
    return remember { Brush.verticalGradient(colors = colors) }
}

@Composable
fun rememberTelegramFrostedGlassBrush(): Brush = rememberStandardFrostedGlassBrush()

/**
 * Feed frosted glass background brush (1:1 from APK FeedScreen.kt).
 */
@Composable
fun rememberFeedFrostedGlassBrush(): Brush {
    val colors = remember { listOf(Color(0x990D111D), Color(0x88090B14)) }
    return remember { Brush.verticalGradient(colors = colors) }
}
