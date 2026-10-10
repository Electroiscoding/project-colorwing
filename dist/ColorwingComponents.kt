package com.netuark.colorwing

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
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.tooling.preview.Preview

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
    onBackClick: () -> Unit = {},
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
 * Reply Quote Preview Box
 */
@Composable
fun ColorwingReplyQuote(
    senderName: String,
    messageSnippet: String,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .fillMaxWidth()
            .background(Color(0x0DFFFFFF), RoundedCornerShape(6.dp))
            .border(
                width = 3.dp,
                color = ColorwingTokens.Tertiary,
                shape = RoundedCornerShape(topStart = 6.dp, bottomStart = 6.dp)
            )
            .padding(horizontal = 10.dp, vertical = 6.dp)
    ) {
        Column {
            Text(
                text = senderName,
                color = ColorwingTokens.Tertiary,
                fontWeight = FontWeight.Bold,
                fontSize = 12.sp
            )
            Text(
                text = messageSnippet,
                color = ColorwingTokens.TextSecondary,
                fontSize = 12.sp,
                maxLines = 1,
                overflow = TextOverflow.Ellipsis
            )
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
 * Adheres to APK Shape (14dp with 4dp tail) & Gradient Brushes
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

    Box(
        modifier = modifier.fillMaxWidth(),
        contentAlignment = alignment
    ) {
        Column(
            modifier = Modifier
                .widthIn(min = 60.dp, max = 280.dp)
                .clip(shape)
                .background(brush, shape)
                .then(
                    if (!isMine) Modifier.border(1.dp, ColorwingTokens.BorderDefault, shape)
                    else Modifier
                )
                .padding(horizontal = 14.dp, vertical = 8.dp)
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
                    color = ColorwingTokens.TextMuted,
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
