package com.netuark.app.sample

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.netuark.colorwing.*

/**
 * Android Jetpack Compose Sample utilizing ColorWing Centralized Design Tokens
 * Demonstrates:
 * - ColorwingTheme (Web static default with optional isLiquidGlass toggle)
 * - Dynamic Time-based Ambient Vibe
 * - ColorwingChatTopBar (showCallButton = true for APK)
 * - ColorwingPostBox with Tertiary Red Plus Icon
 */
@Composable
fun ColorwingSampleScreen() {
    var isLiquidGlass by remember { mutableStateOf(false) }

    ColorwingTheme(isLiquidGlass = isLiquidGlass) {
        val ambientColor = rememberColorwingAmbientColor()

        Column(
            modifier = Modifier
                .fillMaxSize()
                .background(ColorwingTokens.Background)
        ) {
            // Top Bar with APK Call Button & Liquid Glass Support
            ColorwingChatTopBar(
                title = "Sarah Connor",
                statusText = "Online",
                isOnline = true,
                isLiquidGlass = isLiquidGlass,
                showCallButton = true, // APK Decision: Only visible on APK, not on web
                onBackClick = { /* Navigate back */ },
                onCallClick = { /* Launch voice call */ }
            )

            // Feed Post Box with Red Plus Button
            ColorwingPostBox(
                placeholder = "What's happening?",
                onPostClick = { /* Create post */ }
            )

            // Chat Bubble Demo using ColorwingChatBubble
            LazyColumn(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxWidth()
                    .padding(16.dp),
                verticalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                item {
                    ColorwingChatBubble(
                        text = "Received message with slate surface & subtle border.",
                        isMine = false,
                        timestamp = "8:30 PM"
                    )
                }
                item {
                    ColorwingChatBubble(
                        text = "ColorWing powers Android Compose & Web seamlessly with crimson gradient!",
                        isMine = true,
                        timestamp = "8:31 PM"
                    )
                }
                item {
                    // Glass Surface Card Demo
                    ColorwingGlassSurface(
                        modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
                        isLiquidGlass = isLiquidGlass
                    ) {
                        Text(
                            text = if (isLiquidGlass) "✨ Fiercest Liquid Glass: 1.5dp specular border + overlay brush enabled!" else "Clean static OLED glass default (zero lag, max FPS)",
                            color = ColorwingTokens.TextSecondary,
                            modifier = Modifier.padding(16.dp)
                        )
                    }
                }
            }

            // Liquid Glass Bottom Bar (1:1 from APK ChatBottomBarComponents.kt)
            var messageInput by remember { mutableStateOf("") }
            ColorwingGlassBottomBar(
                inputText = messageInput,
                onInputChanged = { messageInput = it },
                onSendClick = { messageInput = "" },
                isLiquidGlass = isLiquidGlass,
                modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)
            )
        }
    }
}
