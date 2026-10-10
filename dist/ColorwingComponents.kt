package com.netuark.colorwing

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
import androidx.compose.material.icons.filled.Favorite
import androidx.compose.material.icons.filled.FavoriteBorder
import androidx.compose.material.icons.filled.MoreVert
import androidx.compose.material.icons.filled.Phone
import androidx.compose.material.icons.filled.PlayArrow
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.Share
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
 * Quoted Post Preview Data Model for Compose
 */
data class ColorwingQuotedPostData(
    val id: String,
    val authorName: String,
    val authorHandle: String,
    val text: String,
    val authorAvatarUrl: String? = null,
    val mediaUrl: String? = null,
    val isVideo: Boolean = false
)

/**
 * Complete Universal Post Card Composable (1:1 Web Feed and NTA-APK Alignment)
 * Matches all elements from web nta-post-component.js:
 * - Repost Banner: Emerald repeat icon + author
 * - Header Row: 40.dp avatar, author name, @handle, timestamp, follow button
 * - Post Body: 14.sp primary text with full line-height
 * - Media Container: 16:9 video with badge/play/mute controls or high-res image
 * - Quoted Post Card: Embedded 16.dp rounded card
 * - Action Bar: Comments, Repost, Like with crimson animation, Views, Download, More
 * - Supports both Sequential OLED Black (zero lag) and Liquid Glass mode
 */
@Composable
fun ColorwingPostCard(
    postId: String,
    authorName: String,
    authorHandle: String,
    timestampText: String,
    postText: String,
    authorAvatarUrl: String? = null,
    mediaUrl: String? = null,
    isVideo: Boolean = false,
    isLiked: Boolean = false,
    likeCount: Int = 0,
    repostCount: Int = 0,
    isReposted: Boolean = false,
    repostedByName: String? = null,
    commentCount: Int = 0,
    viewsCount: Int = 0,
    isFollowed: Boolean = false,
    showFollowButton: Boolean = true,
    isLiquidGlass: Boolean = false,
    quotedPost: ColorwingQuotedPostData? = null,
    onPostClick: () -> Unit = {},
    onLikeClick: () -> Unit = {},
    onRepostClick: () -> Unit = {},
    onCommentClick: () -> Unit = {},
    onFollowClick: () -> Unit = {},
    onAuthorClick: () -> Unit = {},
    onMoreClick: () -> Unit = {},
    onDownloadClick: () -> Unit = {},
    modifier: Modifier = Modifier
) {
    val cardContent: @Composable () -> Unit = {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            // Repost Header Banner
            if (repostedByName != null) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(bottom = 8.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Icon(
                        Icons.Default.Refresh,
                        contentDescription = "Repost",
                        tint = Color(0xFF34D399),
                        modifier = Modifier.size(16.dp)
                    )
                    Spacer(modifier = Modifier.width(6.dp))
                    Text(
                        text = "🔄 $repostedByName reposted",
                        color = Color(0xFF34D399),
                        fontWeight = FontWeight.Bold,
                        fontSize = 12.sp
                    )
                }
            }

            // Post Header Row
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                // Avatar (40.dp circle)
                Box(
                    modifier = Modifier
                        .size(40.dp)
                        .clip(CircleShape)
                        .background(ColorwingTokens.SurfaceElevated)
                        .border(2.dp, ColorwingTokens.BorderSlate, CircleShape)
                        .clickable(onClick = onAuthorClick),
                    contentAlignment = Alignment.Center
                ) {
                    Text(
                        text = authorName.take(1).uppercase(),
                        color = Color.White,
                        fontWeight = FontWeight.Bold,
                        fontSize = 16.sp
                    )
                }

                Spacer(modifier = Modifier.width(12.dp))

                // Author Info
                Column(
                    modifier = Modifier
                        .weight(1f)
                        .clickable(onClick = onAuthorClick)
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text(
                            text = authorName,
                            color = ColorwingTokens.TextPrimary,
                            fontWeight = FontWeight.SemiBold,
                            fontSize = 14.sp,
                            maxLines = 1,
                            overflow = TextOverflow.Ellipsis
                        )
                        Spacer(modifier = Modifier.width(6.dp))
                        Text(
                            text = "@$authorHandle",
                            color = ColorwingTokens.TextMuted,
                            fontSize = 12.sp,
                            maxLines = 1,
                            overflow = TextOverflow.Ellipsis
                        )
                    }
                    Text(
                        text = timestampText,
                        color = ColorwingTokens.TextMuted,
                        fontSize = 12.sp
                    )
                }

                // Follow Button
                if (showFollowButton) {
                    Button(
                        onClick = onFollowClick,
                        colors = ButtonDefaults.buttonColors(
                            containerColor = if (isFollowed) Color.White.copy(alpha = 0.10f) else ColorwingTokens.Tertiary,
                            contentColor = if (isFollowed) Color.White.copy(alpha = 0.70f) else Color.White
                        ),
                        contentPadding = PaddingValues(horizontal = 12.dp, vertical = 4.dp),
                        modifier = Modifier.height(28.dp),
                        shape = CircleShape
                    ) {
                        Text(
                            text = if (isFollowed) "Following" else "Follow",
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold
                        )
                    }
                }
            }

            // Post Text Body
            if (postText.isNotEmpty()) {
                Spacer(modifier = Modifier.height(12.dp))
                Text(
                    text = postText,
                    color = ColorwingTokens.TextPrimary,
                    fontSize = 14.sp,
                    lineHeight = 20.sp,
                    modifier = Modifier
                        .fillMaxWidth()
                        .clickable(onClick = onPostClick)
                )
            }

            // Media Container
            if (mediaUrl != null) {
                Spacer(modifier = Modifier.height(12.dp))
                if (isVideo) {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .aspectRatio(16f / 9f)
                            .clip(RoundedCornerShape(12.dp))
                            .background(Color(0xFF020617))
                            .clickable(onClick = onPostClick),
                        contentAlignment = Alignment.Center
                    ) {
                        Box(
                            modifier = Modifier
                                .size(48.dp)
                                .clip(CircleShape)
                                .background(Color.Black.copy(alpha = 0.60f)),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(
                                Icons.Default.PlayArrow,
                                contentDescription = "Play",
                                tint = Color.White,
                                modifier = Modifier.size(28.dp)
                            )
                        }

                        Row(
                            modifier = Modifier
                                .align(Alignment.TopEnd)
                                .padding(12.dp)
                                .background(Color.Black.copy(alpha = 0.70f), CircleShape)
                                .border(1.dp, Color.White.copy(alpha = 0.10f), CircleShape)
                                .padding(horizontal = 8.dp, vertical = 2.dp),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Text(
                                text = "▶ Video",
                                color = Color.White,
                                fontSize = 10.sp,
                                fontWeight = FontWeight.Bold
                            )
                        }
                    }
                } else {
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .heightIn(min = 180.dp, max = 320.dp)
                            .clip(RoundedCornerShape(12.dp))
                            .background(Color(0xFF0F172A))
                            .clickable(onClick = onPostClick)
                    )
                }
            }

            // Quoted Post Card
            if (quotedPost != null) {
                Spacer(modifier = Modifier.height(12.dp))
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .clip(RoundedCornerShape(16.dp))
                        .background(Color.White.copy(alpha = 0.05f))
                        .border(1.dp, Color.White.copy(alpha = 0.15f), RoundedCornerShape(16.dp))
                        .clickable(onClick = onPostClick)
                        .padding(14.dp)
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Box(
                            modifier = Modifier
                                .size(20.dp)
                                .clip(CircleShape)
                            .background(ColorwingTokens.SurfaceElevated),
                            contentAlignment = Alignment.Center
                        ) {
                            Text(
                                text = quotedPost.authorName.take(1).uppercase(),
                                color = Color.White,
                                fontSize = 10.sp,
                                fontWeight = FontWeight.Bold
                            )
                        }
                        Spacer(modifier = Modifier.width(6.dp))
                        Text(
                            text = quotedPost.authorName,
                            color = Color.White,
                            fontWeight = FontWeight.Bold,
                            fontSize = 12.sp
                        )
                        Spacer(modifier = Modifier.width(4.dp))
                        Text(
                            text = "@${quotedPost.authorHandle}",
                            color = ColorwingTokens.TextMuted,
                            fontSize = 11.sp
                        )
                    }
                    Spacer(modifier = Modifier.height(6.dp))
                    Text(
                        text = quotedPost.text,
                        color = Color.White.copy(alpha = 0.85f),
                        fontSize = 12.sp,
                        maxLines = 3,
                        overflow = TextOverflow.Ellipsis
                    )
                }
            }

            // Bottom Action Bar
            Spacer(modifier = Modifier.height(16.dp))
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .height(1.dp)
                    .background(ColorwingTokens.BorderDefault)
            )
            Spacer(modifier = Modifier.height(12.dp))

            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                // Comments
                Row(
                    modifier = Modifier.clickable(onClick = onCommentClick),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Icon(
                        Icons.Default.Share,
                        contentDescription = "Comments",
                        tint = ColorwingTokens.TextMuted,
                        modifier = Modifier.size(18.dp)
                    )
                    Spacer(modifier = Modifier.width(6.dp))
                    Text(
                        text = "$commentCount",
                        color = ColorwingTokens.TextMuted,
                        fontSize = 13.sp
                    )
                }

                Spacer(modifier = Modifier.width(24.dp))

                // Repost
                Row(
                    modifier = Modifier.clickable(onClick = onRepostClick),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Icon(
                        Icons.Default.Refresh,
                        contentDescription = "Repost",
                        tint = if (isReposted) Color(0xFF34D399) else ColorwingTokens.TextMuted,
                        modifier = Modifier.size(18.dp)
                    )
                    Spacer(modifier = Modifier.width(6.dp))
                    Text(
                        text = "$repostCount",
                        color = if (isReposted) Color(0xFF34D399) else ColorwingTokens.TextMuted,
                        fontWeight = if (isReposted) FontWeight.Bold else FontWeight.Normal,
                        fontSize = 13.sp
                    )
                }

                Spacer(modifier = Modifier.width(24.dp))

                // Like
                Row(
                    modifier = Modifier.clickable(onClick = onLikeClick),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Icon(
                        if (isLiked) Icons.Default.Favorite else Icons.Default.FavoriteBorder,
                        contentDescription = "Like",
                        tint = if (isLiked) ColorwingTokens.Tertiary else ColorwingTokens.TextMuted,
                        modifier = Modifier.size(18.dp)
                    )
                    Spacer(modifier = Modifier.width(6.dp))
                    Text(
                        text = "$likeCount",
                        color = if (isLiked) ColorwingTokens.Tertiary else ColorwingTokens.TextMuted,
                        fontWeight = if (isLiked) FontWeight.Bold else FontWeight.Normal,
                        fontSize = 13.sp
                    )
                }

                Spacer(modifier = Modifier.weight(1f))

                // Download (if media present)
                if (mediaUrl != null) {
                    IconButton(
                        onClick = onDownloadClick,
                        modifier = Modifier.size(28.dp)
                    ) {
                        Icon(
                            Icons.Default.Add,
                            contentDescription = "Download",
                            tint = ColorwingTokens.TextMuted,
                            modifier = Modifier.size(18.dp)
                        )
                    }
                    Spacer(modifier = Modifier.width(8.dp))
                }

                // Views
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier.padding(end = 8.dp)
                ) {
                    Text(
                        text = "👁 $viewsCount",
                        color = ColorwingTokens.TextMuted,
                        fontSize = 12.sp
                    )
                }

                // More Options
                IconButton(
                    onClick = onMoreClick,
                    modifier = Modifier.size(28.dp)
                ) {
                    Icon(
                        Icons.Default.MoreVert,
                        contentDescription = "More",
                        tint = ColorwingTokens.TextMuted,
                        modifier = Modifier.size(18.dp)
                    )
                }
            }
        }
    }

    if (isLiquidGlass) {
        ColorwingGlassSurface(
            modifier = modifier
                .fillMaxWidth()
                .padding(vertical = 4.dp),
            isLiquidGlass = true,
            shape = RoundedCornerShape(16.dp)
        ) {
            cardContent()
        }
    } else {
        Box(
            modifier = modifier
                .fillMaxWidth()
                .background(Color.Transparent)
                .border(BorderStroke(1.dp, ColorwingTokens.BorderDefault))
        ) {
            cardContent()
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
    isLiquidGlass: Boolean = false,
    modifier: Modifier = Modifier
) {
    val shape = if (isMine) ColorwingTokens.BubbleShapeSent else ColorwingTokens.BubbleShapeReceived
    val brush = rememberColorwingBubbleBrush(isMine = isMine)
    val alignment = if (isMine) Alignment.CenterEnd else Alignment.CenterStart
    val textColor = if (isMine) Color.White else ColorwingTokens.TextPrimary
    val edgeColor = Color(0xFFE65100) // APK Warm Amber static line
    val liquidBorderBrush = if (isLiquidGlass) rememberLiquidGlassBorder() else null
    val liquidOverlayBrush = if (isLiquidGlass) rememberLiquidGlassOverlayBrush() else null

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
                    if (isLiquidGlass && liquidOverlayBrush != null) Modifier.background(liquidOverlayBrush, shape)
                    else Modifier
                )
                .then(
                    if (isLiquidGlass && liquidBorderBrush != null) Modifier.border(1.5.dp, liquidBorderBrush, shape)
                    else if (!isMine) Modifier.border(1.dp, ColorwingTokens.BorderDefault, shape)
                    else Modifier
                )
                .drawWithCache {
                    onDrawWithContent {
                        drawContent()
                        // 1. Top Specular Highlight Line
                        drawLine(
                            color = Color.White.copy(alpha = if (isLiquidGlass) 0.75f else if (isMine) 0.15f else 0.10f),
                            start = androidx.compose.ui.geometry.Offset(0f, 0f),
                            end = androidx.compose.ui.geometry.Offset(size.width, 0f),
                            strokeWidth = if (isLiquidGlass) 3f else 2f
                        )
                        // 2. Aurora Amber Edge Line (APK signature)
                        if (isMine) {
                            val edgeX = size.width - 2f
                            drawLine(
                                color = edgeColor.copy(alpha = if (isLiquidGlass) 0.95f else 0.85f),
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

@Preview(showBackground = true, backgroundColor = 0xFF000000)
@Composable
fun ColorwingPostCardPreview() {
    ColorwingTheme {
        ColorwingPostCard(
            postId = "preview_1",
            authorName = "Alex Rivera",
            authorHandle = "alex",
            timestampText = "2h ago",
            postText = "Universal post card styled with ColorWing cross-platform design tokens!",
            isLiked = true,
            likeCount = 42,
            repostCount = 12,
            commentCount = 5,
            viewsCount = 380,
            isFollowed = false
        )
    }
}
