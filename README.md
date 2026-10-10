# 🪽 ColorWing

> **Centralized Cross-Platform Design & Styling Token Architecture for Web & Android**  
> *Production-Grade. Single Source of Truth. Sub-Millisecond Realtime Sync. Zero-Bloat.*

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Android%20Compose%20%7C%20Tailwind%20%7C%20Flutter-black.svg)](#)
[![Speed](https://img.shields.io/badge/Compile%20Speed-%3C%206ms-22c55e.svg)](#)
[![Tokens](https://img.shields.io/badge/Tokens-W3C%20Design%20Tokens-818cf8.svg)](#)

---

## 📑 Table of Contents

1. [Core Architecture & Philosophy](#-core-architecture--philosophy)
2. [The 5 Core Rules (How NOT to Mess Up)](#-the-5-core-rules-how-not-to-mess-up)
3. [Direct Import From Exact GitHub Repository Link](#-direct-import-from-exact-github-repository-link)
4. [Web Developers Guide (Vanilla HTML, Vite, Next.js, SPAs)](#-web-developers-guide)
5. [Tailwind CSS Developers Guide](#-tailwind-css-developers-guide)
6. [Android Compose Developers Guide (Kotlin / APK)](#-android-compose-developers-guide)
7. [Flutter & React Native Guides](#-flutter--react-native-guides)
8. [The Millisecond Live-Sync Workflow](#-the-millisecond-live-sync-workflow)
9. [Common Developer Pitfalls & Quick Fixes](#-common-developer-pitfalls--quick-fixes)
10. [CLI Command Reference](#-cli-command-reference)

---

## ⚡ Core Architecture & Philosophy

High-scale distributed applications should never hard-code hex colors, CSS snippets, or bubble shapes inside individual feature repositories. Doing so causes design drift, broken styling twins, and endless maintenance overhead.

**ColorWing** is the **centralized single source of truth**. You define your tokens and UI rules once in ColorWing, and it compiles in **< 6ms** into:
- **Web**: Standard CSS Variables (`:root`) + Modular Utility Classes (`colorwing.css` & `colorwing.min.css`)
- **Tailwind**: Zero-config preset (`tailwind-preset.js`)
- **Android**: Type-safe Jetpack Compose tokens, themes, and composables (`ColorwingTokens.kt`, `ColorwingTheme.kt`, `ColorwingComponents.kt`)
- **Flutter**: Dart token package (`ColorwingTokens.dart`)
- **React Native**: Typed native styles (`ColorwingNative.js`)
- **JSON**: W3C Design Tokens Community Group specification (`tokens.json`)

---

## 🛑 The 5 Core Rules (How NOT to Mess Up)

Before writing any UI code, memorize these 5 foundational rules from the **Merged UI Decision Sheet**:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│  RULE 1: NEVER HARDCODE HEX CODES.                                                     │
│          Always use var(--cw-*) on Web, ColorwingTokens.* on Android.                  │
│                                                                                        │
│  RULE 2: WEB STATIC IS DEFAULT (LIQUID GLASS IS OFF BY DEFAULT).                       │
│          Do NOT force backdrop blur or liquid glass unless the user toggles it.        │
│                                                                                        │
│  RULE 3: CALL BUTTON IS APK ONLY — NEVER PUT A CALL BUTTON ON WEB.                     │
│          The top header call button is strictly mobile APK only.                       │
│                                                                                        │
│  RULE 4: SEQUENTIAL WEB FLOW IN FEEDS (NO HEAVY 3D CARDS).                             │
│          Feed posts use flat, sequential 1px dividers to eliminate visual eye fatigue. │
│                                                                                        │
│  RULE 5: PRIMARY IS NATIVE OLED BLACK (#000000).                                       │
│          Do NOT substitute dark grey for the primary background.                       │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🔗 Direct Import From Exact GitHub Repository Link

Developers can import ColorWing directly from the exact repository link (`github.com/Electroiscoding/project-colorwing`) across Web, Android, and NPM with **zero local repository dependencies or third-party wrappers**:

### 1. Web HTML (Direct CDN Link — Zero Install)
Drop this directly into your HTML `<head>`:

```html
<!-- Production Minified CSS directly from GitHub -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Electroiscoding/project-colorwing@master/dist/colorwing.min.css">

<!-- Or JavaScript ESM Runtime directly from GitHub -->
<script type="module" src="https://cdn.jsdelivr.net/gh/Electroiscoding/project-colorwing@master/dist/colorwing.js"></script>
```

Or inside any CSS file:
```css
@import url("https://cdn.jsdelivr.net/gh/Electroiscoding/project-colorwing@master/dist/colorwing.min.css");
```

---

### 2. NPM / Node / React / Vite / Next.js (Direct GitHub Repo Dependency)
Install directly from the GitHub repository URL:

```bash
npm install github:Electroiscoding/project-colorwing
```

In your `package.json`:
```json
{
  "dependencies": {
    "@netuark/colorwing": "github:Electroiscoding/project-colorwing"
  }
}
```

Then simply import in JavaScript / TypeScript:
```javascript
import { tokens } from '@netuark/colorwing';
import '@netuark/colorwing/css';
```

---

### 3. Android Studio (Direct 1-Liner Terminal Importer)
From your Android project directory (`app/`), run:

```bash
curl -fsSL https://raw.githubusercontent.com/Electroiscoding/project-colorwing/master/install.sh | bash -s android
```

This immediately pulls `ColorwingTokens.kt`, `ColorwingTheme.kt`, and `ColorwingComponents.kt` directly from `raw.githubusercontent.com/Electroiscoding/project-colorwing/master/dist/` into your Compose package!

---

### 4. Direct 1-Liner for Web / Flutter / iOS
```bash
# Web Assets:
curl -fsSL https://raw.githubusercontent.com/Electroiscoding/project-colorwing/master/install.sh | bash -s web

# Flutter:
curl -fsSL https://raw.githubusercontent.com/Electroiscoding/project-colorwing/master/install.sh | bash -s flutter

# iOS SwiftUI:
curl -fsSL https://raw.githubusercontent.com/Electroiscoding/project-colorwing/master/install.sh | bash -s ios
```

---

## 🌐 Web Developers Guide

### Step 1: Import ColorWing CSS

Add this single line inside your HTML `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Electroiscoding/project-colorwing@master/dist/colorwing.min.css">
```

Or in a modern bundler (Vite, Webpack, Next.js):

```javascript
import 'project-colorwing/dist/colorwing.css';
```

---

### Step 2: Use CSS Custom Properties

Never type `#000000`, `#FFFFFF`, or `#D90429` manually. Use the official variables:

```css
.my-custom-box {
  background-color: var(--cw-bg);             /* Native OLED Black (#000000) */
  color: var(--cw-text-primary);               /* White (#FFFFFF) */
  border: 1px solid var(--cw-border);         /* rgba(255, 255, 255, 0.08) */
}

.my-brand-button {
  background-color: var(--cw-tertiary);       /* NeTuArk Red (#D90429) */
  color: var(--cw-text-primary);               /* White */
  border-radius: 9999px;
  box-shadow: 0 4px 14px var(--cw-tertiary-glow);
}

.my-brand-button:hover {
  background-color: var(--cw-tertiary-hover); /* Crimson Dark (#B00321) */
}
```

#### Core Color Variable Reference

| Variable | Hex / Value | Purpose |
| :--- | :--- | :--- |
| `var(--cw-primary)` | `#000000` | Full native OLED black |
| `var(--cw-secondary)` | `#FFFFFF` | High-contrast white |
| `var(--cw-tertiary)` | `#D90429` | NeTuArk brand red |
| `var(--cw-tertiary-hover)`| `#B00321` | Active / Hover red |
| `var(--cw-tertiary-dark)` | `#9B021D` | Deep gradient stop red |
| `var(--cw-bg)` | `#000000` | Main application background |
| `var(--cw-bg-soft)` | `#0A0B10` | Secondary soft background |
| `var(--cw-surface)` | `#12131C` | Elevated panel / dropdown surface |
| `var(--cw-surface-card)` | `#111111` | Card / post box background |
| `var(--cw-input-bg)` | `#1A1A1A` | Input field background |
| `var(--cw-border)` | `rgba(255,255,255,0.08)` | Standard 1px divider |
| `var(--cw-border-strong)` | `rgba(255,255,255,0.15)` | Focus / high-contrast border |
| `var(--cw-text-primary)` | `#FFFFFF` | 100% white body & title text |
| `var(--cw-text-secondary)`| `rgba(255,255,255,0.70)`| 70% white captions & subtitles |
| `var(--cw-text-muted)` | `rgba(255,255,255,0.50)`| 50% white timestamps |

---

### Step 3: Use Pre-Built Component Utility Classes

ColorWing ships ready-to-use classes that enforce the exact twin specifications:

#### 1. Chat Header
```html
<div class="cw-chat-header">
  <div style="display:flex; align-items:center; gap:12px;">
    <div class="cw-avatar cw-avatar-md">
      JD
      <div class="cw-avatar-status"></div>
    </div>
    <div>
      <div style="font-weight:700;">John Doe</div>
      <div style="font-size:12px; color:var(--cw-success);">Online</div>
    </div>
  </div>

  <div style="display:flex; align-items:center; gap:8px;">
    <!-- Call button automatically hides on Web, shows on APK -->
    <button class="cw-call-btn" title="Call">📞</button>
    <button title="More">⋮</button>
  </div>
</div>
```

#### 2. Chat Bubbles (APK Asymmetric Shape + Red Crimson Gradient)
```html
<!-- Received Bubble (Dark Slate Glass) -->
<div class="cw-bubble-group" style="align-self: flex-start;">
  <div class="cw-bubble cw-bubble-received">
    Are the tokens working on your end?
    <div style="font-size:10px; color:var(--cw-text-muted); text-align:right;">10:30 AM</div>
  </div>
</div>

<!-- Sent Bubble (Red-to-Crimson Gradient + Amber Aurora Edge) -->
<div class="cw-bubble-group" style="align-self: flex-end;">
  <div class="cw-bubble cw-bubble-sent">
    Yes! Twins consistency is 100% pixel-perfect.
    <div style="font-size:10px; color:rgba(255,255,255,0.7); text-align:right;">10:31 AM ✓✓</div>
  </div>
</div>
```

#### 3. Feed (Post Box + Plus Sign + Sequential Flat Flow)
```html
<div class="cw-feed-container">
  
  <!-- Post Box -->
  <div class="cw-post-box">
    <input class="cw-post-input" type="text" placeholder="What's happening?">
    <button class="cw-post-plus-btn" title="Create Post">+</button>
  </div>

  <!-- Sequential Flow Item (No 3D card boxes!) -->
  <div class="cw-feed-item">
    <div style="display:flex; gap:12px;">
      <div class="cw-avatar cw-avatar-sm">NW</div>
      <div>
        <span style="font-weight:700;">NeTuArk</span>
        <p style="margin:4px 0;">Clean sequential flow reduces cognitive eye fatigue.</p>
      </div>
    </div>
  </div>

</div>
```

#### 4. Interactive Components
- **Reactions Bar**:
  ```html
  <div class="cw-reactions-row">
    <button class="cw-reaction-pill active">❤️ 12</button>
    <button class="cw-reaction-pill">🔥 5</button>
  </div>
  ```
- **Reply Quote Box**:
  ```html
  <div class="cw-reply-quote">
    <div class="cw-reply-quote-title">Sarah Connor</div>
    <div class="cw-reply-quote-text">See you at the meeting!</div>
  </div>
  ```
- **Voice Player**:
  ```html
  <div class="cw-voice-player">
    <button class="cw-voice-btn">▶</button>
    <div class="cw-voice-waveform">
      <div class="cw-voice-bar active" style="height:12px;"></div>
      <div class="cw-voice-bar active" style="height:20px;"></div>
      <div class="cw-voice-bar" style="height:14px;"></div>
    </div>
    <span style="font-size:11px; color:var(--cw-text-secondary);">0:24</span>
  </div>
  ```

---

### Step 4: Time-Based Ambient Vibe System

The atmosphere shifts dynamically according to the hour:
- **Morning (06:00 – 10:59)**: `[data-time-vibe="morning"]` → Deep Warm Amber (`#381B09`)
- **Day (11:00 – 16:59)**: `[data-time-vibe="day"]` → Deep Cool Slate Ocean (`#111E2E`)
- **Sunset (17:00 – 19:59)**: `[data-time-vibe="sunset"]` → Dusk Crimson Violet (`#2E121B`)
- **Night (20:00 – 05:59)**: `[data-time-vibe="night"]` → Cosmic Purple Onyx (`#0F0A1C`)

To enable automatic hourly shifting with 1 line of JS:
```html
<script type="module">
  import { ColorWing } from './dist/colorwing.js';
  ColorWing.init({ autoTimeVibe: true });
</script>
```

---

### Step 5: Liquid Glass Toggle (Off by Default)

Liquid Glass is strictly **off by default**. To let users toggle it:
```javascript
import { ColorWing } from './dist/colorwing.js';

// Toggle liquid glass on or off
const isNowEnabled = ColorWing.toggleLiquidGlass();
console.log('Liquid glass active:', isNowEnabled);
```
Or in HTML, simply set:
```html
<html data-liquid-glass="true"> <!-- ONLY when enabled by user -->
```

---

## 🎨 Tailwind CSS Developers Guide

### Step 1: Add the Preset

In your `tailwind.config.js`:

```javascript
module.exports = {
  presets: [
    require('project-colorwing/dist/tailwind-preset')
  ],
  content: ['./src/**/*.{html,js,jsx,ts,tsx}']
};
```

### Step 2: Use ColorWing Tailwind Utilities

All ColorWing tokens are prefixed with `cw-`:

```html
<!-- Backgrounds -->
<div class="bg-cw-primary text-cw-primary">
  <div class="bg-cw-surface border border-white/10 rounded-2xl p-4">
    
    <!-- Tertiary Red Button -->
    <button class="bg-cw-tertiary hover:bg-cw-tertiary-hover text-white rounded-full px-5 py-2 font-bold shadow-lg">
      Click Me
    </button>

    <!-- Sent Message Bubble -->
    <div class="bg-cw-tertiary rounded-cw-bubble rounded-br-cw-tail text-white p-3 shadow-cw-bubble-sent">
      Message text here!
    </div>

  </div>
</div>
```

---

## 📱 Android Compose Developers Guide

### Step 1: Import ColorWing into Android Studio

Copy or symlink these 3 files from `project-colorwing/dist/` into your Android package (e.g., `com.netuark.colorwing`):
1. `ColorwingTokens.kt`
2. `ColorwingTheme.kt`
3. `ColorwingComponents.kt`

### Step 2: Wrap Screens with `ColorwingTheme`

```kotlin
package com.netuark.app.ui

import androidx.compose.runtime.Composable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.background
import com.netuark.colorwing.*

@Composable
fun MainChatScreen() {
    // Web static by default. Pass isLiquidGlass = true only if user toggled in settings.
    ColorwingTheme(isLiquidGlass = false) {
        Column(modifier = Modifier.background(ColorwingTokens.Background)) {
            
            // Centralized Chat Top Bar (Call button visible on APK!)
            ColorwingChatTopBar(
                title = "Sarah Connor",
                statusText = "Online",
                isOnline = true,
                showCallButton = true, // Rule 3: Only visible on APK!
                onBackClick = { /* back */ },
                onCallClick = { /* launch voice call */ }
            )

            // Feed Post Box with Red Plus Icon
            ColorwingPostBox(
                placeholder = "What's happening?",
                onPostClick = { /* create post */ }
            )

        }
    }
}
```

### Step 3: Use Token Brushes & Colors Directly

```kotlin
// Time-based dynamic atmospheric vibe:
val ambientVibeColor = rememberColorwingAmbientColor()

// Sent & Received Message Bubbles:
val sentBrush = rememberColorwingBubbleBrush(isMine = true)
val receivedBrush = rememberColorwingBubbleBrush(isMine = false)

Box(
    modifier = Modifier
        .background(sentBrush, ColorwingTokens.BubbleShapeSent)
        .padding(horizontal = 12.dp, vertical = 8.dp)
) {
    Text(text = "Hello from Android Compose!", color = ColorwingTokens.TextPrimary)
}
```

---

## 📱 Flutter & React Native Guides

### Flutter (Dart)

Copy `dist/ColorwingTokens.dart` to your Flutter `lib/theme/` directory:

```dart
import 'package:flutter/material.dart';
import 'ColorwingTokens.dart';

Container(
  decoration: BoxDecoration(
    gradient: ColorwingTokens.bubbleSentGradient,
    borderRadius: ColorwingTokens.bubbleSentRadius,
  ),
  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
  child: const Text('Hello Flutter!', style: TextStyle(color: ColorwingTokens.textPrimary)),
);
```

### React Native / StyleX

Import `dist/ColorwingNative.js`:

```javascript
import { ColorwingNative } from 'project-colorwing/dist/ColorwingNative';

const styles = StyleSheet.create({
  bubble: {
    ...ColorwingNative.bubbles.sentStyle,
  },
  text: {
    color: ColorwingNative.colors.textPrimary,
  }
});
```

---

## ⚡ The Millisecond Live-Sync Workflow

When building apps locally, developers can see token changes reflected across all running Web tabs **in real time without reloading the page**:

1. Start the ColorWing daemon:
   ```bash
   node bin/colorwing.js serve --port 3333
   ```
2. In your web application's HTML, add:
   ```html
   <link rel="stylesheet" href="http://localhost:3333/tokens.css">
   <script src="http://localhost:3333/live-sync.js"></script>
   ```
3. Now, whenever anyone modifies `src/tokens/colors.js` (for example, tweaking `--cw-tertiary`), the daemon recompiles the tokens in **< 2ms** and broadcasts an SSE event. All open browser windows instantly update their styles with zero refresh!

---

## ⚠️ Common Developer Pitfalls & Quick Fixes

| ❌ What Devs Do Wrong | 💥 Why It Breaks the System | ✅ The Proper Fix |
| :--- | :--- | :--- |
| Writing `color: #D90429;` | Hard-coding breaks centralized re-branding and dark themes. | Use `color: var(--cw-tertiary);` (Web) or `ColorwingTokens.Tertiary` (Android). |
| Setting `backdrop-filter: blur(20px)` globally | Violates Rule 2 (causes battery drain and blur jitter on low-end devices). | Keep static default. Use `.cw-liquid-glass` only behind a user toggle. |
| Adding a Call icon to the Web Header | Violates Rule 3 (Web headers do not have a top call button; only APK does). | Use `.cw-call-btn` (hidden on web by default, shown on APK via `data-platform="apk"`). |
| Wrapping feed items in `box-shadow` card boxes | Violates Rule 4 (causes visual fatigue in social feeds). | Use `.cw-feed-item` with flat 1px bottom divider `var(--cw-border)`. |
| Using `#1A1A1A` for the page background | Violates Rule 5 (breaks pitch-black OLED aesthetic). | Use `var(--cw-bg)` (`#000000`). Use `#1A1A1A` only for inputs (`--cw-input-bg`). |

---

## 🛠️ CLI Command Reference

Execute from the `project-colorwing` root:

```bash
# 1. Compile all targets to dist/ (CSS, Kotlin, Flutter, React Native, Tailwind, JSON)
node bin/colorwing.js build

# 2. Watch tokens directory and recompile automatically on file change (< 6ms)
node bin/colorwing.js watch

# 3. Start Live Sync HTTP & SSE Daemon on port 3333
node bin/colorwing.js serve

# 4. Run automated WCAG contrast and accessibility check
node bin/colorwing.js check

# 5. Export compiled tokens to stdout
node bin/colorwing.js export --format css
node bin/colorwing.js export --format kotlin
node bin/colorwing.js export --format tailwind
node bin/colorwing.js export --format json

# 6. Run system diagnostics
node bin/colorwing.js doctor

# 7. Run automated test suite
node tests/tokens.test.js
```

---

## 📄 Open Source License

Released under the [MIT License](LICENSE). Free for open-source and commercial use.
