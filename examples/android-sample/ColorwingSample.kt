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
            // Top Bar with APK Call Button
            ColorwingChatTopBar(
                title = "Sarah Connor",
                statusText = "Online",
                isOnline = true,
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
            }
        }
    }
}
