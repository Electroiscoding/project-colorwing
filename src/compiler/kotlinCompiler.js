/**
 * ColorWing Centralized Design System: Kotlin / Jetpack Compose Compiler
 * Generates type-safe Kotlin design tokens, Compose themes, and components for Android.
 */

import tokens from '../tokens/index.js';

export function compileKotlinTokens() {
  const { colors, timeVibes, bubbles, glass } = tokens;

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

    // --- Glass & Liquid Glass Specifications (APK SafeHaze & LiquidGlassEffect) ---
    val GlassBorderWidthStatic = ${glass.static.borderWidthDp}.dp
    val GlassBorderWidthLiquid = ${glass.liquid.borderWidthDp}.dp
    val GlassBlurRadius = ${glass.liquid.blurRadiusDp}.dp
    val GlassRefractionHeight = ${glass.liquid.refractionHeightDp}.dp
    val GlassRefractionAmount = ${glass.liquid.refractionAmountDp}.dp
    val GlassSpecularTopAlpha = ${glass.liquid.specularAlphas.top}f
    val GlassSpecularSideAlpha = ${glass.liquid.specularAlphas.sides}f
    val GlassSpecularBottomAlpha = ${glass.liquid.specularAlphas.bottom}f

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
`;
}

export function compileKotlinComponents() {
  return `package com.netuark.colorwing

import androidx.compose.foundation.BorderStroke
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
import androidx.compose.ui.draw.drawWithCache
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.tooling.preview.Preview

/**
 * Centralized Glass Surface Composable (1:1 from APK SafeHaze + LiquidGlassEffect)
 * - isLiquidGlass = false: Standard frosted glass brush + 1.0.dp border
 * - isLiquidGlass = true: Specular top-lighting overlay brush + 1.5.dp multi-stop specular border
 */
@Composable
fun ColorwingGlassSurface(
    modifier: Modifier = Modifier,
    isLiquidGlass: Boolean = false,
    shape: androidx.compose.ui.graphics.Shape = RoundedCornerShape(20.dp),
    content: @Composable BoxScope.() -> Unit
) {
    val baseBrush = rememberStandardFrostedGlassBrush()
    val borderBrush = if (isLiquidGlass) rememberLiquidGlassBorder() else rememberStandardGlassBorder()
    val overlayBrush = if (isLiquidGlass) rememberLiquidGlassOverlayBrush() else null
    val borderWidth = if (isLiquidGlass) ColorwingTokens.GlassBorderWidthLiquid else ColorwingTokens.GlassBorderWidthStatic

    Box(
        modifier = modifier
            .clip(shape)
            .background(baseBrush, shape)
    ) {
        if (overlayBrush != null) {
            Box(
                modifier = Modifier
                    .matchParentSize()
                    .background(overlayBrush, shape)
            )
        }

        Box(
            modifier = Modifier
                .matchParentSize()
                .border(BorderStroke(borderWidth, borderBrush), shape)
        )

        content()
    }
}

/**
 * Centralized Chat Top Bar Component
 * Supports static OLED black default (zero lag) and APK Liquid Glass mode
 * Note: Call button is conditionally visible on APK (default: true for Android)
 */
@Composable
fun ColorwingChatTopBar(
    title: String,
    statusText: String,
    isOnline: Boolean,
    isLiquidGlass: Boolean = false,
    showCallButton: Boolean = true, // APK rule: true on APK, false on Web
    onBackClick: () -> Unit = {},
    onCallClick: () -> Unit = {},
    onMoreClick: () -> Unit = {},
    modifier: Modifier = Modifier
) {
    val contentRow: @Composable () -> Unit = {
        Row(
            modifier = Modifier
                .fillMaxSize()
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

    if (isLiquidGlass) {
        ColorwingGlassSurface(
            modifier = modifier
                .fillMaxWidth()
                .height(64.dp),
            isLiquidGlass = true,
            shape = RoundedCornerShape(20.dp)
        ) {
            contentRow()
        }
    } else {
        Row(
            modifier = modifier
                .fillMaxWidth()
                .height(64.dp)
                .background(ColorwingTokens.Background)
                .border(BorderStroke(1.dp, ColorwingTokens.BorderDefault)),
            verticalAlignment = Alignment.CenterVertically
        ) {
            contentRow()
        }
    }
}

/**
 * Centralized Glass Bottom Input Bar (1:1 from APK ChatBottomBarComponents.kt)
 */
@Composable
fun ColorwingGlassBottomBar(
    inputText: String,
    onInputChanged: (String) -> Unit = {},
    onSendClick: () -> Unit = {},
    isLiquidGlass: Boolean = false,
    modifier: Modifier = Modifier
) {
    ColorwingGlassSurface(
        modifier = modifier
            .fillMaxWidth()
            .height(56.dp),
        isLiquidGlass = isLiquidGlass,
        shape = RoundedCornerShape(28.dp)
    ) {
        Row(
            modifier = Modifier
                .fillMaxSize()
                .padding(horizontal = 14.dp, vertical = 6.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(modifier = Modifier.weight(1f)) {
                Text(
                    text = if (inputText.isEmpty()) "Message..." else inputText,
                    color = if (inputText.isEmpty()) ColorwingTokens.TextMuted else ColorwingTokens.TextPrimary,
                    fontSize = 14.sp
                )
            }
            IconButton(
                onClick = onSendClick,
                modifier = Modifier
                    .size(36.dp)
                    .background(ColorwingTokens.Tertiary, CircleShape)
            ) {
                Icon(
                    Icons.Default.Add,
                    contentDescription = "Send",
                    tint = Color.White
                )
            }
        }
    }
}

/**
 * Sequential Post Box with Red Plus Button
 */
@Composable
fun ColorwingPostBox(
    placeholder: String = "What's happening?",
    onPostClick: () -> Unit = {},
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

/**
 * Reply Quote Preview Box (Exact APK 1:1 Alignment)
 */
@Composable
fun ColorwingReplyQuote(
    senderName: String,
    messageSnippet: String,
    isMine: Boolean = false,
    onClick: () -> Unit = {},
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .widthIn(max = 240.dp)
            .clickable(onClick = onClick)
            .clip(RoundedCornerShape(12.dp))
            .background(Color.Black.copy(alpha = 0.45f))
            .border(
                1.dp,
                Color.White.copy(alpha = 0.12f),
                RoundedCornerShape(12.dp)
            )
            .padding(horizontal = 8.dp, vertical = 6.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        // Vertical Accent Line (APK signature)
        Box(
            modifier = Modifier
                .width(3.dp)
                .height(30.dp)
                .clip(RoundedCornerShape(2.dp))
                .background(if (isMine) Color.White.copy(alpha = 0.8f) else ColorwingTokens.Tertiary)
        )

        Spacer(modifier = Modifier.width(8.dp))

        Column {
            Text(
                text = senderName,
                color = if (isMine) Color.White.copy(alpha = 0.9f) else ColorwingTokens.Tertiary,
                fontWeight = FontWeight.Bold,
                fontSize = 11.sp
            )
            Text(
                text = messageSnippet,
                color = if (isMine) Color.White.copy(alpha = 0.7f) else ColorwingTokens.TextSecondary,
                fontSize = 11.sp,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}

/**
 * Centered Call Log Bubble (APK signature BubbleCallLogContent)
 */
@Composable
fun ColorwingCallLogBubble(
    text: String,
    modifier: Modifier = Modifier
) {
    Box(
        modifier = modifier
            .fillMaxWidth()
            .padding(vertical = 6.dp),
        contentAlignment = Alignment.Center
    ) {
        Surface(
            color = ColorwingTokens.Surface.copy(alpha = 0.6f),
            shape = RoundedCornerShape(16.dp),
            border = androidx.compose.foundation.BorderStroke(1.dp, ColorwingTokens.BorderDefault),
            modifier = Modifier.padding(horizontal = 16.dp, vertical = 4.dp)
        ) {
            Row(
                modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.Center
            ) {
                Icon(
                    imageVector = Icons.Default.Phone,
                    contentDescription = null,
                    tint = ColorwingTokens.Tertiary,
                    modifier = Modifier.size(14.dp)
                )
                Spacer(modifier = Modifier.width(6.dp))
                Text(
                    text = text,
                    color = ColorwingTokens.TextPrimary,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium
                )
            }
        }
    }
}

/**
 * Reaction Pill Component
 */
@Composable
fun ColorwingReactionPill(
    emoji: String,
    count: Int,
    isSelected: Boolean = false,
    onClick: () -> Unit = {},
    modifier: Modifier = Modifier
) {
    Surface(
        onClick = onClick,
        shape = CircleShape,
        color = if (isSelected) Color(0x2ED90429) else Color(0x14FFFFFF),
        border = androidx.compose.foundation.BorderStroke(
            1.dp,
            if (isSelected) ColorwingTokens.Tertiary else Color(0x1FFFFFFF)
        ),
        modifier = modifier
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(text = emoji, fontSize = 12.sp)
            if (count > 0) {
                Spacer(modifier = Modifier.width(4.dp))
                Text(
                    text = count.toString(),
                    color = ColorwingTokens.TextSecondary,
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Bold
                )
            }
        }
    }
}

/**
 * Centralized Avatar with Online Indicator Ring
 */
@Composable
fun ColorwingAvatar(
    name: String,
    isOnline: Boolean = false,
    size: androidx.compose.ui.unit.Dp = 40.dp,
    modifier: Modifier = Modifier
) {
    Box(
        modifier = modifier.size(size),
        contentAlignment = Alignment.BottomEnd
    ) {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(Color(0xFF1F2430), CircleShape),
            contentAlignment = Alignment.Center
        ) {
            val initials = name.take(2).uppercase()
            Text(
                text = initials,
                color = Color.White,
                fontWeight = FontWeight.Bold,
                fontSize = (size.value * 0.38f).sp
            )
        }

        if (isOnline) {
            Box(
                modifier = Modifier
                    .size(size * 0.28f)
                    .background(ColorwingTokens.Success, CircleShape)
                    .border(2.dp, Color.Black, CircleShape)
            )
        }
    }
}

/**
 * Centralized Chat Bubble Composable
 * Exact 1:1 Implementation from APK (nta-app-try1/MessageBubble.kt):
 * - APK Shape (14dp with 4dp tail)
 * - Sent: Base Red (#C82128) -> Crimson (#A01830) -> Purple Glow (#6D164A) -> Blue Glow (#501F50)
 * - Received: Slate Base (#0F131C) -> Slate Mid (#181D28) -> Slate Highlight (#1D1D2C)
 * - Top Highlight Specular Line (White alpha 0.15)
 * - Aurora Amber Edge Line (#E65100 alpha 0.85)
 */
@Composable
fun ColorwingChatBubble(
    text: String,
    isMine: Boolean,
    timestamp: String? = null,
    modifier: Modifier = Modifier
) {
    val shape = if (isMine) ColorwingTokens.BubbleShapeSent else ColorwingTokens.BubbleShapeReceived
    val brush = rememberColorwingBubbleBrush(isMine = isMine)
    val alignment = if (isMine) Alignment.CenterEnd else Alignment.CenterStart
    val textColor = if (isMine) Color.White else ColorwingTokens.TextPrimary
    val edgeColor = Color(0xFFE65100) // APK Warm Amber static line

    Box(
        modifier = modifier.fillMaxWidth(),
        contentAlignment = alignment
    ) {
        Column(
            modifier = Modifier
                .widthIn(min = 60.dp, max = 290.dp)
                .clip(shape)
                .background(brush, shape)
                .then(
                    if (!isMine) Modifier.border(1.dp, ColorwingTokens.BorderDefault, shape)
                    else Modifier
                )
                .drawWithCache {
                    onDrawWithContent {
                        drawContent()
                        // 1. Top Specular Highlight Line
                        drawLine(
                            color = Color.White.copy(alpha = if (isMine) 0.15f else 0.10f),
                            start = androidx.compose.ui.geometry.Offset(0f, 0f),
                            end = androidx.compose.ui.geometry.Offset(size.width, 0f),
                            strokeWidth = 2f
                        )
                        // 2. Aurora Amber Edge Line (APK signature)
                        if (isMine) {
                            val edgeX = size.width - 2f
                            drawLine(
                                color = edgeColor.copy(alpha = 0.85f),
                                start = androidx.compose.ui.geometry.Offset(edgeX, 10f),
                                end = androidx.compose.ui.geometry.Offset(edgeX, size.height - 10f),
                                strokeWidth = 3f,
                                cap = androidx.compose.ui.graphics.StrokeCap.Round
                            )
                        }
                    }
                }
                .padding(start = 12.dp, top = 8.dp, end = 12.dp, bottom = 6.dp)
        ) {
            Text(
                text = text,
                color = textColor,
                fontSize = 14.5.sp,
                lineHeight = 20.sp
            )

            if (timestamp != null) {
                Spacer(modifier = Modifier.height(2.dp))
                Text(
                    text = timestamp,
                    color = if (isMine) Color.White.copy(alpha = 0.70f) else ColorwingTokens.TextMuted,
                    fontSize = 10.sp,
                    modifier = Modifier.align(Alignment.End)
                )
            }
        }
    }
}

// --- Android Studio Previews ---
@Preview(showBackground = true, backgroundColor = 0xFF000000)
@Composable
fun ColorwingChatTopBarPreview() {
    ColorwingTheme {
        ColorwingChatTopBar(
            title = "Sarah Connor",
            statusText = "Online",
            isOnline = true,
            showCallButton = true
        )
    }
}

@Preview(showBackground = true, backgroundColor = 0xFF000000)
@Composable
fun ColorwingPostBoxPreview() {
    ColorwingTheme {
        ColorwingPostBox(placeholder = "What's happening?")
    }
}

@Preview(showBackground = true, backgroundColor = 0xFF000000)
@Composable
fun ColorwingChatBubbleSentPreview() {
    ColorwingTheme {
        Box(modifier = Modifier.padding(16.dp)) {
            ColorwingChatBubble(
                text = "Sent bubble with crimson gradient brush!",
                isMine = true,
                timestamp = "8:30 PM"
            )
        }
    }
}

@Preview(showBackground = true, backgroundColor = 0xFF000000)
@Composable
fun ColorwingChatBubbleReceivedPreview() {
    ColorwingTheme {
        Box(modifier = Modifier.padding(16.dp)) {
            ColorwingChatBubble(
                text = "Received bubble with slate surface & subtle border.",
                isMine = false,
                timestamp = "8:31 PM"
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
