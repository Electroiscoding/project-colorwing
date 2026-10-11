/**
 * ColorWing Centralized Design System: CSS Compiler
 * Compiles JavaScript tokens into high-performance, zero-runtime CSS.
 * Provides both master bundles and modular sub-bundles.
 */

import tokens from '../tokens/index.js';

export function minifyCss(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s*([{}:;,])\s*/g, '$1')
    .trim();
}

export function compileColorsCss(options = {}) {
  const { colors, timeVibes } = tokens;
  const raw = `/* ColorWing Color Tokens */
:root {
  --cw-primary: ${colors.primary};
  --cw-secondary: ${colors.secondary};
  --cw-tertiary: ${colors.tertiary};
  --cw-tertiary-hover: ${colors.tertiaryHover};
  --cw-tertiary-dark: ${colors.tertiaryDark};
  --cw-tertiary-crimson: ${colors.tertiaryCrimson};
  --cw-tertiary-deep: ${colors.tertiaryDeepCrimson};
  --cw-bg: ${colors.bg};
  --cw-bg-soft: ${colors.bgSoft};
  --cw-surface: ${colors.surface};
  --cw-surface-elevated: ${colors.surfaceElevated};
  --cw-surface-card: ${colors.surfaceCard};
  --cw-input-bg: ${colors.inputBg};
  --cw-input-border: ${colors.inputBorder};
  --cw-border-subtle: ${colors.borderSubtle};
  --cw-border: ${colors.borderDefault};
  --cw-border-strong: ${colors.borderStrong};
  --cw-text-primary: ${colors.textPrimary};
  --cw-text-secondary: ${colors.textSecondary};
  --cw-text-muted: ${colors.textMuted};
  --cw-accent-cyan: ${colors.accentCyan};
  --cw-accent-purple: ${colors.accentPurple};
  --cw-success: ${colors.success};
  --cw-warning: ${colors.warning};
  --cw-ambient-color: ${timeVibes.morning.ambientColor};
  --cw-ambient-color-alpha: ${timeVibes.morning.ambientColorAlpha};

  /* Backward Compatibility Aliases */
  --brand: var(--cw-tertiary);
  --brand-dark: var(--cw-tertiary-hover);
  --bg: var(--cw-bg);
  --card: var(--cw-surface-card);
  --input-bg: var(--cw-input-bg);
  --text: var(--cw-text-primary);
  --text-sec: var(--cw-text-secondary);
}

.cw-bg-black { background-color: var(--cw-bg) !important; }
.cw-bg-soft { background-color: var(--cw-bg-soft) !important; }
.cw-bg-surface { background-color: var(--cw-surface) !important; }
.cw-bg-card { background-color: var(--cw-surface-card) !important; }
.cw-text-primary { color: var(--cw-text-primary) !important; }
.cw-text-secondary { color: var(--cw-text-secondary) !important; }
.cw-text-muted { color: var(--cw-text-muted) !important; }
.cw-text-tertiary { color: var(--cw-tertiary) !important; }
.cw-border { border: 1px solid var(--cw-border) !important; }
.cw-border-strong { border: 1px solid var(--cw-border-strong) !important; }
`;
  return options.minify ? minifyCss(raw) : raw;
}

export function compileBubblesCss(options = {}) {
  const { bubbles } = tokens;
  const raw = `/* ColorWing Chat Bubbles */
.cw-bubble-group {
  max-width: 85%;
  width: fit-content;
  min-width: 0;
  margin: 4px 0;
}
@media (min-width: 640px) {
  .cw-bubble-group { max-width: 70%; }
}
.cw-bubble {
  position: relative;
  display: inline-block;
  max-width: 100%;
  width: fit-content;
  min-width: 60px;
  padding: 8px 12px 6px 12px;
  border-radius: ${bubbles.geometry.borderRadius};
  font-size: 14.5px;
  line-height: 1.4;
  word-break: normal;
  overflow-wrap: anywhere;
  box-sizing: border-box;
}
.cw-bubble-sent {
  background: ${bubbles.sent.gradient};
  color: #ffffff;
  border-bottom-right-radius: ${bubbles.geometry.borderRadiusSentTail};
  box-shadow: ${bubbles.sent.boxShadow};
  margin-left: auto;
}
.cw-bubble-sent::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1.5px;
  background: rgba(255, 255, 255, 0.18);
  border-radius: 14px 14px 0 0;
  pointer-events: none;
}
.cw-bubble-sent::after {
  content: "";
  position: absolute;
  top: 10px;
  bottom: 10px;
  right: 2px;
  width: 3px;
  border-radius: 9999px;
  background: ${bubbles.sent.edgeGlowAmber};
  opacity: 0.85;
  pointer-events: none;
}
.cw-bubble-received {
  background: ${bubbles.received.gradient};
  color: #f1f5f9;
  border: ${bubbles.received.border};
  border-bottom-left-radius: ${bubbles.geometry.borderRadiusReceivedTail};
  box-shadow: ${bubbles.received.boxShadow};
  margin-right: auto;
}
.cw-bubble-received::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.10);
  border-radius: 14px 14px 0 0;
  pointer-events: none;
}
.cw-bubble-ai {
  background: ${bubbles.beetaAi.gradient};
  border: ${bubbles.beetaAi.border};
  color: #ffffff;
  border-bottom-left-radius: 4px;
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.20);
  margin-right: auto;
}
.cw-call-log-bubble {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: rgba(18, 19, 28, 0.60);
  border: 1px solid var(--cw-border);
  border-radius: 9999px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 500;
  color: var(--cw-text-primary);
  margin: 6px auto;
  box-sizing: border-box;
}
.cw-call-log-bubble .cw-call-icon {
  color: var(--cw-tertiary);
  font-size: 13px;
}

/* --- Liquid Glass Bubbles (1:1 APK LiquidGlassEffect & SafeHaze) --- */
[data-liquid-glass="true"] .cw-bubble,
.cw-liquid-glass .cw-bubble,
.cw-bubble.cw-liquid-glass,
[data-liquid-glass="true"] .msg-bubble,
.cw-liquid-glass .msg-bubble,
.msg-bubble.cw-liquid-glass {
  contain: content;
}

[data-liquid-glass="true"] .cw-bubble-sent,
.cw-liquid-glass .cw-bubble-sent,
.cw-bubble-sent.cw-liquid-glass,
[data-liquid-glass="true"] .sent,
.cw-liquid-glass .sent,
.sent.cw-liquid-glass {
  background-image: ${bubbles.liquidGlass.sent.overlayBrush}, ${bubbles.liquidGlass.sent.gradient} !important;
  background-color: rgba(160, 24, 48, 0.75) !important;
  border: ${bubbles.liquidGlass.sent.border} !important;
  box-shadow: ${bubbles.liquidGlass.sent.boxShadow} !important;
}

[data-liquid-glass="true"] .cw-bubble-sent::before,
.cw-liquid-glass .cw-bubble-sent::before,
.cw-bubble-sent.cw-liquid-glass::before,
[data-liquid-glass="true"] .sent::before,
.cw-liquid-glass .sent::before,
.sent.cw-liquid-glass::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.85) 50%, transparent 100%) !important;
  height: 1.5px !important;
  border-radius: 14px 14px 0 0;
  pointer-events: none;
}

[data-liquid-glass="true"] .cw-bubble-received,
.cw-liquid-glass .cw-bubble-received,
.cw-bubble-received.cw-liquid-glass,
[data-liquid-glass="true"] .received,
.cw-liquid-glass .received,
.received.cw-liquid-glass {
  background-image: ${bubbles.liquidGlass.received.overlayBrush}, ${bubbles.liquidGlass.received.gradient} !important;
  background-color: rgba(18, 19, 28, 0.70) !important;
  border: ${bubbles.liquidGlass.received.border} !important;
  box-shadow: ${bubbles.liquidGlass.received.boxShadow} !important;
}

[data-liquid-glass="true"] .cw-bubble-received::before,
.cw-liquid-glass .cw-bubble-received::before,
.cw-bubble-received.cw-liquid-glass::before,
[data-liquid-glass="true"] .received::before,
.cw-liquid-glass .received::before,
.received.cw-liquid-glass::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.65) 50%, transparent 100%) !important;
  height: 1.5px !important;
  border-radius: 14px 14px 0 0;
  pointer-events: none;
}

[data-liquid-glass="true"] .cw-bubble-ai,
.cw-liquid-glass .cw-bubble-ai,
.cw-bubble-ai.cw-liquid-glass,
[data-liquid-glass="true"] .beeta-msg,
.cw-liquid-glass .beeta-msg,
.beeta-msg.cw-liquid-glass {
  background-image: linear-gradient(180deg, rgba(129, 140, 248, 0.25) 0%, transparent 60%), ${bubbles.liquidGlass.beetaAi.gradient} !important;
  border: ${bubbles.liquidGlass.beetaAi.border} !important;
  box-shadow: ${bubbles.liquidGlass.beetaAi.boxShadow} !important;
}

[data-liquid-glass="true"] .cw-call-log-bubble,
.cw-liquid-glass .cw-call-log-bubble {
  background-color: rgba(18, 19, 28, 0.85) !important;
  border: 1.5px solid rgba(255, 255, 255, 0.25) !important;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.50), 0 6px 20px rgba(0, 0, 0, 0.40) !important;
}
`;
  return options.minify ? minifyCss(raw) : raw;
}

export function compileFeedCss(options = {}) {
  const raw = `/* ColorWing Feed UI */
.cw-feed-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--cw-bg);
  min-height: 100vh;
  border-left: 1px solid var(--cw-border);
  border-right: 1px solid var(--cw-border);
  box-sizing: border-box;
}
@media (max-width: 640px) {
  .cw-feed-container { border-left: none; border-right: none; }
}
.cw-post-box {
  background: var(--cw-surface-card);
  border: 1px solid var(--cw-border);
  border-radius: 16px;
  padding: 14px 16px;
  margin: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
}
.cw-post-input {
  flex: 1;
  background: var(--cw-input-bg);
  border: 1px solid var(--cw-input-border);
  border-radius: 9999px;
  padding: 10px 16px;
  color: var(--cw-text-primary);
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s ease;
}
.cw-post-input:focus { border-color: var(--cw-tertiary); }
.cw-post-plus-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--cw-tertiary);
  color: #ffffff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
  box-shadow: 0 3px 10px rgba(217, 4, 41, 0.35);
}
.cw-post-plus-btn:hover { background: var(--cw-tertiary-hover); transform: scale(1.05); }
.cw-post-plus-btn:active { transform: scale(0.95); }
.cw-feed-item {
  border-bottom: 1px solid var(--cw-border);
  padding: 16px;
  transition: background-color 0.15s ease;
  background: transparent;
}
.cw-feed-item:hover { background-color: rgba(255, 255, 255, 0.02); }

/* --- Complete Universal Post Card Anatomy --- */
.cw-post-card {
  padding: 16px;
  border-bottom: 1px solid var(--cw-border);
  transition: background-color 0.15s ease;
  background: transparent;
  position: relative;
  box-sizing: border-box;
}
.cw-post-card:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

/* Repost Header Banner */
.cw-post-repost-header,
.cw-post-repost-banner {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #34D399;
  font-weight: 700;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
}
.cw-post-repost-header:hover,
.cw-post-repost-banner:hover {
  text-decoration: underline;
}

/* Author Header Row */
.cw-post-header {
  display: flex;
  align-items: center;
  gap: 12px;
}
.cw-post-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  box-shadow: 0 0 0 2px #1e293b;
  background-color: #1e293b;
}
.cw-post-author-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
.cw-post-author-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.cw-post-author-name {
  font-weight: 600;
  color: #ffffff;
  font-size: 14px;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cw-post-author-name:hover {
  text-decoration: underline;
}
.cw-post-author-handle {
  color: var(--cw-text-muted, rgba(255, 255, 255, 0.50));
  font-size: 12px;
}
.cw-post-timestamp {
  color: var(--cw-text-muted, rgba(255, 255, 255, 0.50));
  font-size: 12px;
}
.cw-post-follow-btn {
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
  background: var(--cw-tertiary, #D90429);
  color: #ffffff;
}
.cw-post-follow-btn:hover {
  background: var(--cw-tertiary-hover, #B00321);
}
.cw-post-follow-btn.following {
  background: rgba(255, 255, 255, 0.10);
  color: rgba(255, 255, 255, 0.70);
}
.cw-post-follow-btn.following:hover {
  background: rgba(217, 4, 41, 0.20);
  color: #ef4444;
}

/* Post Content Body */
.cw-post-body {
  margin-top: 12px;
  color: rgba(255, 255, 255, 0.90);
  font-size: 14px;
  line-height: 1.6;
  word-break: break-word;
}

/* Media Containers (16:9 Aspect Video, Images, Controls) */
.cw-post-media-outer,
.feed-card-media-outer {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  margin-top: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.40);
  cursor: pointer;
}
.cw-post-video-container {
  aspect-ratio: 16 / 9;
  background-color: #020617;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
}
.cw-post-video-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.70);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 4px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  pointer-events: none;
  z-index: 20;
}
.cw-post-video-badge span {
  color: var(--cw-tertiary, #D90429);
}
.cw-post-video-play-ctrl {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(0, 0, 0, 0.70);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.10);
  cursor: pointer;
  z-index: 20;
  transition: background 0.15s ease;
}
.cw-post-video-play-ctrl:hover {
  background: rgba(0, 0, 0, 0.90);
}
.cw-post-video-mute-ctrl {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.70);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.10);
  cursor: pointer;
  z-index: 20;
  transition: background 0.15s ease;
}
.cw-post-video-mute-ctrl:hover {
  background: rgba(0, 0, 0, 0.90);
}
.cw-post-video-overlay {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.60);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 10;
}
.cw-post-image-container {
  background-color: rgba(15, 23, 42, 0.60);
  overflow: hidden;
  border-radius: 12px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.cw-post-image-container img {
  width: 100%;
  max-height: 480px;
  object-fit: cover;
  display: block;
}

/* Polls Container */
.cw-post-poll-box {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
}
.cw-post-poll-option {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  padding: 8px 12px;
  margin-bottom: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cw-post-poll-bar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(217, 4, 41, 0.25);
  border-right: 2px solid var(--cw-tertiary, #D90429);
  transition: width 0.3s ease;
  z-index: 0;
}

/* Quoted Post Mini-Card */
.cw-post-quoted-card {
  margin-top: 12px;
  padding: 14px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: border-color 0.15s ease;
  cursor: pointer;
}
.cw-post-quoted-card:hover {
  border-color: rgba(217, 4, 41, 0.40);
}

/* Action Bar Row */
.cw-post-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.10);
  font-size: 14px;
  color: var(--cw-text-muted, rgba(255, 255, 255, 0.50));
}
.cw-post-action-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  transition: color 0.15s ease, transform 0.1s ease;
  padding: 0;
}
.cw-post-action-btn:hover {
  color: var(--cw-text-primary, #ffffff);
}
.cw-post-comment-btn:hover {
  color: #60A5FA;
}
.cw-post-repost-btn:hover,
.cw-post-repost-btn.reposted {
  color: #34D399;
  font-weight: 700;
}
.cw-post-like-btn:hover,
.cw-post-like-btn.liked {
  color: var(--cw-tertiary, #D90429);
  font-weight: 700;
}
.cw-post-like-btn.liked {
  transform: scale(1.08);
}
.cw-post-actions-right {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 14px;
}
.cw-post-views-pill {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--cw-text-muted, rgba(255, 255, 255, 0.50));
  user-select: none;
}
`;
  return options.minify ? minifyCss(raw) : raw;
}

export function compileGlassCss(options = {}) {
  const { glass, bubbles } = tokens;
  const raw = `/* ==========================================================================
   ColorWing Modular Glass Bundle
   Static Default (Zero Lag) | Optional Toggle: Liquid Glass (1:1 APK Alignment)
   ========================================================================== */

.cw-glass-panel {
  background: var(--cw-glass-bg);
  border: var(--cw-glass-border);
  box-shadow: var(--cw-glass-shadow);
  border-radius: 18px;
  position: relative;
  overflow: hidden;
}
.cw-glass-panel::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
  pointer-events: none;
}
[data-liquid-glass="true"],
.cw-liquid-glass {
  --cw-glass-bg: ${glass.liquid.surface} !important;
  --cw-glass-border: ${glass.liquid.border} !important;
  --cw-glass-shadow: ${glass.liquid.boxShadow} !important;
  --cw-glass-filter: none;
}

/* Standalone / Dialog Card Glass (Hardware-isolated) */
[data-liquid-glass="true"] .cw-glass-panel,
.cw-liquid-glass .cw-glass-panel,
.cw-glass-panel.cw-liquid-glass,
[data-liquid-glass="true"] .card-glass,
.cw-liquid-glass .card-glass,
.card-glass.cw-liquid-glass {
  background-image: ${glass.liquid.overlayGradient} !important;
  background-color: var(--cw-glass-bg, ${glass.liquid.surface}) !important;
  border: ${glass.liquid.border} !important;
  box-shadow: ${glass.liquid.boxShadow} !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  contain: paint;
}

/* Feed Cards & Content (Hardware-isolated specular glass with zero blur overhead) */
[data-liquid-glass="true"] .cw-post-card,
.cw-liquid-glass .cw-post-card,
[data-liquid-glass="true"] .post-card,
.cw-liquid-glass .post-card,
[data-liquid-glass="true"] .feed-card,
.cw-liquid-glass .feed-card,
[data-liquid-glass="true"] .cw-feed-item,
.cw-liquid-glass .cw-feed-item,
[data-liquid-glass="true"] .cw-post-box,
.cw-liquid-glass .cw-post-box,
[data-liquid-glass="true"] .cw-post-quoted-card,
.cw-liquid-glass .cw-post-quoted-card {
  background-image: ${glass.liquid.overlayGradient} !important;
  background-color: var(--cw-glass-bg, ${glass.liquid.surface}) !important;
  border: ${glass.liquid.border} !important;
  box-shadow: ${glass.liquid.boxShadow} !important;
  contain: content;
  content-visibility: auto;
  contain-intrinsic-size: auto 180px;
}

/* Hardware-Accelerated Floating Bars */
[data-liquid-glass="true"] header,
.cw-liquid-glass header,
[data-liquid-glass="true"] .cw-chat-header,
.cw-liquid-glass .cw-chat-header {
  background-color: rgba(10, 10, 14, 0.78) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.18) !important;
  box-shadow: inset 0 -1px 0 0 rgba(255, 255, 255, 0.12), 0 8px 30px rgba(0, 0, 0, 0.6) !important;
  transform: translateZ(0);
  will-change: transform;
}

[data-liquid-glass="true"] #bottom-nav-bar,
.cw-liquid-glass #bottom-nav-bar,
[data-liquid-glass="true"] nav.fixed,
.cw-liquid-glass nav.fixed {
  background-color: rgba(10, 10, 14, 0.82) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border-top: 1.5px solid rgba(255, 255, 255, 0.20) !important;
  box-shadow: inset 0 1.5px 0 0 rgba(255, 255, 255, 0.35), 0 -8px 32px rgba(0, 0, 0, 0.7) !important;
  transform: translateZ(0);
  will-change: transform;
}

[data-liquid-glass="true"] .cw-chat-input-bar,
.cw-liquid-glass .cw-chat-input-bar,
[data-liquid-glass="true"] #chat-input-bar,
.cw-liquid-glass #chat-input-bar,
[data-liquid-glass="true"] .chat-messages-container .bg-\\[\\#141416\\],
.cw-liquid-glass .chat-messages-container .bg-\\[\\#141416\\] {
  background-color: rgba(20, 20, 26, 0.85) !important;
  border: 1.5px solid rgba(255, 255, 255, 0.22) !important;
  box-shadow: inset 0 1.5px 0 0 rgba(255, 255, 255, 0.50), 0 8px 32px rgba(0, 0, 0, 0.50) !important;
  transform: translateZ(0);
}

[data-liquid-glass="true"] .cw-bottom-sheet,
.cw-liquid-glass .cw-bottom-sheet,
[data-liquid-glass="true"] #sticker-bottom-sheet,
.cw-liquid-glass #sticker-bottom-sheet,
[data-liquid-glass="true"] #pack-selector-sheet,
.cw-liquid-glass #pack-selector-sheet,
[data-liquid-glass="true"] #se-picker-sheet,
.cw-liquid-glass #se-picker-sheet {
  background-color: rgba(18, 19, 28, 0.94) !important;
  border-top: 1.5px solid rgba(255, 255, 255, 0.25) !important;
  box-shadow: inset 0 1.5px 0 0 rgba(255, 255, 255, 0.60), 0 -8px 36px rgba(0, 0, 0, 0.70) !important;
  transform: translateZ(0);
}

[data-liquid-glass="true"] #desktop-left-nav,
.cw-liquid-glass #desktop-left-nav,
[data-liquid-glass="true"] #desktop-news-sidebar,
.cw-liquid-glass #desktop-news-sidebar {
  background-color: rgba(12, 13, 18, 0.85) !important;
  border-right: 1px solid rgba(255, 255, 255, 0.08) !important;
}

[data-liquid-glass="true"] body,
body.cw-liquid-glass {
  background: #000000 !important;
}

[data-liquid-glass="true"] .cw-glass-panel::before,
.cw-liquid-glass .cw-glass-panel::before,
.cw-glass-panel.cw-liquid-glass::before {
  background: ${glass.liquid.specularTopLine} !important;
  height: 1.5px !important;
}

/* Standalone Liquid Glass Utility Classes */
.cw-liquid-glass-border {
  border: ${glass.liquid.border} !important;
  box-shadow: inset 0 1.5px 0 0 rgba(255, 255, 255, 0.75), inset 0 -1.5px 0 0 rgba(255, 255, 255, 0.35) !important;
}

.cw-liquid-glass-overlay {
  background: ${glass.liquid.overlayGradient} !important;
}

.cw-liquid-glass-surface {
  background-image: ${glass.liquid.overlayGradient};
  background-color: ${glass.liquid.surface};
  border: ${glass.liquid.border};
  box-shadow: ${glass.liquid.boxShadow};
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}
.cw-liquid-glass-surface::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1.5px;
  background: ${glass.liquid.specularTopLine};
  pointer-events: none;
}

/* Liquid Glass Message Bubbles (100% Specular Refraction - Zero GPU Blur Thrash) */
[data-liquid-glass="true"] .cw-bubble,
.cw-liquid-glass .cw-bubble,
.cw-bubble.cw-liquid-glass,
[data-liquid-glass="true"] .msg-bubble,
.cw-liquid-glass .msg-bubble,
.msg-bubble.cw-liquid-glass {
  contain: content;
}

[data-liquid-glass="true"] .cw-bubble-sent,
.cw-liquid-glass .cw-bubble-sent,
.cw-bubble-sent.cw-liquid-glass,
[data-liquid-glass="true"] .sent,
.cw-liquid-glass .sent,
.sent.cw-liquid-glass {
  background-image: ${bubbles.liquidGlass.sent.overlayBrush}, ${bubbles.liquidGlass.sent.gradient} !important;
  background-color: rgba(160, 24, 48, 0.75) !important;
  border: ${bubbles.liquidGlass.sent.border} !important;
  box-shadow: ${bubbles.liquidGlass.sent.boxShadow} !important;
}

[data-liquid-glass="true"] .cw-bubble-sent::before,
.cw-liquid-glass .cw-bubble-sent::before,
.cw-bubble-sent.cw-liquid-glass::before,
[data-liquid-glass="true"] .sent::before,
.cw-liquid-glass .sent::before,
.sent.cw-liquid-glass::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.85) 50%, transparent 100%) !important;
  height: 1.5px !important;
  border-radius: 14px 14px 0 0;
  pointer-events: none;
}

[data-liquid-glass="true"] .cw-bubble-received,
.cw-liquid-glass .cw-bubble-received,
.cw-bubble-received.cw-liquid-glass,
[data-liquid-glass="true"] .received,
.cw-liquid-glass .received,
.received.cw-liquid-glass {
  background-image: ${bubbles.liquidGlass.received.overlayBrush}, ${bubbles.liquidGlass.received.gradient} !important;
  background-color: rgba(18, 19, 28, 0.70) !important;
  border: ${bubbles.liquidGlass.received.border} !important;
  box-shadow: ${bubbles.liquidGlass.received.boxShadow} !important;
}

[data-liquid-glass="true"] .cw-bubble-received::before,
.cw-liquid-glass .cw-bubble-received::before,
.cw-bubble-received.cw-liquid-glass::before,
[data-liquid-glass="true"] .received::before,
.cw-liquid-glass .received::before,
.received.cw-liquid-glass::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.65) 50%, transparent 100%) !important;
  height: 1.5px !important;
  border-radius: 14px 14px 0 0;
  pointer-events: none;
}

[data-liquid-glass="true"] .cw-bubble-ai,
.cw-liquid-glass .cw-bubble-ai,
.cw-bubble-ai.cw-liquid-glass,
[data-liquid-glass="true"] .beeta-msg,
.cw-liquid-glass .beeta-msg,
.beeta-msg.cw-liquid-glass {
  background-image: linear-gradient(180deg, rgba(129, 140, 248, 0.25) 0%, transparent 60%), ${bubbles.liquidGlass.beetaAi.gradient} !important;
  border: ${bubbles.liquidGlass.beetaAi.border} !important;
  box-shadow: ${bubbles.liquidGlass.beetaAi.boxShadow} !important;
}

[data-liquid-glass="true"] .cw-call-log-bubble,
.cw-liquid-glass .cw-call-log-bubble {
  background-color: rgba(18, 19, 28, 0.85) !important;
  border: 1.5px solid rgba(255, 255, 255, 0.25) !important;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.50), 0 6px 20px rgba(0, 0, 0, 0.40) !important;
}
`;
  return options.minify ? minifyCss(raw) : raw;
}

export function compileCss(options = {}) {
  const { minify = false } = options;
  const { colors, timeVibes, bubbles, glass, components } = tokens;

  const rawCss = `/* ==========================================================================
   ColorWing Design System v${tokens.meta.version}
   Primary: Black | Secondary: White | Tertiary: Red
   Unified Cross-Platform Tokens for Web and Android
   ========================================================================== */

:root {
  /* --- Core Hierarchy --- */
  --cw-primary: ${colors.primary};
  --cw-secondary: ${colors.secondary};
  --cw-tertiary: ${colors.tertiary};
  --cw-tertiary-hover: ${colors.tertiaryHover};
  --cw-tertiary-dark: ${colors.tertiaryDark};
  --cw-tertiary-crimson: ${colors.tertiaryCrimson};
  --cw-tertiary-deep: ${colors.tertiaryDeepCrimson};
  --cw-tertiary-subtle: ${colors.tertiarySubtle};
  --cw-tertiary-glow: ${colors.tertiaryGlow};

  /* --- Backgrounds & Surfaces --- */
  --cw-bg: ${colors.bg};
  --cw-bg-soft: ${colors.bgSoft};
  --cw-surface: ${colors.surface};
  --cw-surface-elevated: ${colors.surfaceElevated};
  --cw-surface-card: ${colors.surfaceCard};
  --cw-input-bg: ${colors.inputBg};
  --cw-input-border: ${colors.inputBorder};

  /* --- Borders --- */
  --cw-border-subtle: ${colors.borderSubtle};
  --cw-border: ${colors.borderDefault};
  --cw-border-strong: ${colors.borderStrong};
  --cw-border-slate: ${colors.borderSlate};

  /* --- Typography --- */
  --cw-text-primary: ${colors.textPrimary};
  --cw-text-secondary: ${colors.textSecondary};
  --cw-text-muted: ${colors.textMuted};
  --cw-text-subtle: ${colors.textSubtle};
  --cw-text-disabled: ${colors.textDisabled};

  /* --- Accents & Semantics --- */
  --cw-accent-cyan: ${colors.accentCyan};
  --cw-accent-purple: ${colors.accentPurple};
  --cw-accent-blue: ${colors.accentBlue};
  --cw-success: ${colors.success};
  --cw-warning: ${colors.warning};
  --cw-warning-gold: ${colors.warningGold};
  --cw-danger: ${colors.danger};

  /* --- Dynamic Time-Based Ambient Vibe (Default: Morning) --- */
  --cw-ambient-color: ${timeVibes.morning.ambientColor};
  --cw-ambient-color-alpha: ${timeVibes.morning.ambientColorAlpha};
  --cw-ambient-gradient: ${timeVibes.morning.gradient};
  --cw-ambient-bubble-glow: ${timeVibes.morning.bubbleGlow};

  /* --- Chat Bubbles Geometry & Brushes --- */
  --cw-bubble-radius: ${bubbles.geometry.borderRadius};
  --cw-bubble-tail-sent: ${bubbles.geometry.borderRadiusSentTail};
  --cw-bubble-tail-received: ${bubbles.geometry.borderRadiusReceivedTail};
  --cw-bubble-sent-bg: ${bubbles.sent.gradient};
  --cw-bubble-sent-shadow: ${bubbles.sent.boxShadow};
  --cw-bubble-received-bg: ${bubbles.received.gradient};
  --cw-bubble-received-border: ${bubbles.received.border};
  --cw-bubble-received-shadow: ${bubbles.received.boxShadow};

  /* --- Static Glass (Default) --- */
  --cw-glass-bg: ${glass.static.surfaceTranslucent};
  --cw-glass-border: ${glass.static.border};
  --cw-glass-shadow: ${glass.static.boxShadow};
  --cw-glass-filter: ${glass.static.backdropFilter};

  /* --- Backward Compatibility Aliases for glowing-carnival & nta web --- */
  --brand: var(--cw-tertiary);
  --brand-dark: var(--cw-tertiary-hover);
  --bg: var(--cw-bg);
  --card: var(--cw-surface-card);
  --input-bg: var(--cw-input-bg);
  --text: var(--cw-text-primary);
  --text-sec: var(--cw-text-secondary);
}

/* Time-based ambient vibe active states */
[data-time-vibe="morning"] {
  --cw-ambient-color: ${timeVibes.morning.ambientColor};
  --cw-ambient-color-alpha: ${timeVibes.morning.ambientColorAlpha};
  --cw-ambient-gradient: ${timeVibes.morning.gradient};
  --cw-ambient-bubble-glow: ${timeVibes.morning.bubbleGlow};
}
[data-time-vibe="day"] {
  --cw-ambient-color: ${timeVibes.day.ambientColor};
  --cw-ambient-color-alpha: ${timeVibes.day.ambientColorAlpha};
  --cw-ambient-gradient: ${timeVibes.day.gradient};
  --cw-ambient-bubble-glow: ${timeVibes.day.bubbleGlow};
}
[data-time-vibe="sunset"] {
  --cw-ambient-color: ${timeVibes.sunset.ambientColor};
  --cw-ambient-color-alpha: ${timeVibes.sunset.ambientColorAlpha};
  --cw-ambient-gradient: ${timeVibes.sunset.gradient};
  --cw-ambient-bubble-glow: ${timeVibes.sunset.bubbleGlow};
}
[data-time-vibe="night"] {
  --cw-ambient-color: ${timeVibes.night.ambientColor};
  --cw-ambient-color-alpha: ${timeVibes.night.ambientColorAlpha};
  --cw-ambient-gradient: ${timeVibes.night.gradient};
  --cw-ambient-bubble-glow: ${timeVibes.night.bubbleGlow};
}

/* Optional Liquid Glass Toggle (Off by default, activated via attribute or class) */
[data-liquid-glass="true"],
.cw-liquid-glass {
  --cw-glass-bg: ${glass.liquid.surface} !important;
  --cw-glass-border: ${glass.liquid.border} !important;
  --cw-glass-shadow: ${glass.liquid.boxShadow} !important;
  --cw-glass-filter: none;
}

/* Standalone / Dialog Card Glass (Hardware-isolated) */
[data-liquid-glass="true"] .cw-glass-panel,
.cw-liquid-glass .cw-glass-panel,
.cw-glass-panel.cw-liquid-glass,
[data-liquid-glass="true"] .card-glass,
.cw-liquid-glass .card-glass,
.card-glass.cw-liquid-glass {
  background-image: ${glass.liquid.overlayGradient} !important;
  background-color: var(--cw-glass-bg, ${glass.liquid.surface}) !important;
  border: ${glass.liquid.border} !important;
  box-shadow: ${glass.liquid.boxShadow} !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  contain: paint;
}

/* Feed Cards & Content (Hardware-isolated specular glass with zero blur overhead) */
[data-liquid-glass="true"] .cw-post-card,
.cw-liquid-glass .cw-post-card,
[data-liquid-glass="true"] .post-card,
.cw-liquid-glass .post-card,
[data-liquid-glass="true"] .feed-card,
.cw-liquid-glass .feed-card,
[data-liquid-glass="true"] .cw-feed-item,
.cw-liquid-glass .cw-feed-item,
[data-liquid-glass="true"] .cw-post-box,
.cw-liquid-glass .cw-post-box,
[data-liquid-glass="true"] .cw-post-quoted-card,
.cw-liquid-glass .cw-post-quoted-card {
  background-image: ${glass.liquid.overlayGradient} !important;
  background-color: var(--cw-glass-bg, ${glass.liquid.surface}) !important;
  border: ${glass.liquid.border} !important;
  box-shadow: ${glass.liquid.boxShadow} !important;
  contain: content;
  content-visibility: auto;
  contain-intrinsic-size: auto 180px;
}

/* Hardware-Accelerated Floating Bars */
[data-liquid-glass="true"] header,
.cw-liquid-glass header,
[data-liquid-glass="true"] .cw-chat-header,
.cw-liquid-glass .cw-chat-header {
  background-color: rgba(10, 10, 14, 0.78) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.18) !important;
  box-shadow: inset 0 -1px 0 0 rgba(255, 255, 255, 0.12), 0 8px 30px rgba(0, 0, 0, 0.6) !important;
  transform: translateZ(0);
  will-change: transform;
}

[data-liquid-glass="true"] #bottom-nav-bar,
.cw-liquid-glass #bottom-nav-bar,
[data-liquid-glass="true"] nav.fixed,
.cw-liquid-glass nav.fixed {
  background-color: rgba(10, 10, 14, 0.82) !important;
  backdrop-filter: blur(12px) !important;
  -webkit-backdrop-filter: blur(12px) !important;
  border-top: 1.5px solid rgba(255, 255, 255, 0.20) !important;
  box-shadow: inset 0 1.5px 0 0 rgba(255, 255, 255, 0.35), 0 -8px 32px rgba(0, 0, 0, 0.7) !important;
  transform: translateZ(0);
  will-change: transform;
}

[data-liquid-glass="true"] .cw-chat-input-bar,
.cw-liquid-glass .cw-chat-input-bar,
[data-liquid-glass="true"] #chat-input-bar,
.cw-liquid-glass #chat-input-bar,
[data-liquid-glass="true"] .chat-messages-container .bg-\\[\\#141416\\],
.cw-liquid-glass .chat-messages-container .bg-\\[\\#141416\\] {
  background-color: rgba(20, 20, 26, 0.85) !important;
  border: 1.5px solid rgba(255, 255, 255, 0.22) !important;
  box-shadow: inset 0 1.5px 0 0 rgba(255, 255, 255, 0.50), 0 8px 32px rgba(0, 0, 0, 0.50) !important;
  transform: translateZ(0);
}

[data-liquid-glass="true"] .cw-bottom-sheet,
.cw-liquid-glass .cw-bottom-sheet,
[data-liquid-glass="true"] #sticker-bottom-sheet,
.cw-liquid-glass #sticker-bottom-sheet,
[data-liquid-glass="true"] #pack-selector-sheet,
.cw-liquid-glass #pack-selector-sheet,
[data-liquid-glass="true"] #se-picker-sheet,
.cw-liquid-glass #se-picker-sheet {
  background-color: rgba(18, 19, 28, 0.94) !important;
  border-top: 1.5px solid rgba(255, 255, 255, 0.25) !important;
  box-shadow: inset 0 1.5px 0 0 rgba(255, 255, 255, 0.60), 0 -8px 36px rgba(0, 0, 0, 0.70) !important;
  transform: translateZ(0);
}

[data-liquid-glass="true"] #desktop-left-nav,
.cw-liquid-glass #desktop-left-nav,
[data-liquid-glass="true"] #desktop-news-sidebar,
.cw-liquid-glass #desktop-news-sidebar {
  background-color: rgba(12, 13, 18, 0.85) !important;
  border-right: 1px solid rgba(255, 255, 255, 0.08) !important;
}

[data-liquid-glass="true"] body,
body.cw-liquid-glass {
  background: #000000 !important;
}

[data-liquid-glass="true"] .cw-glass-panel::before,
.cw-liquid-glass .cw-glass-panel::before,
.cw-glass-panel.cw-liquid-glass::before {
  background: ${glass.liquid.specularTopLine} !important;
  height: 1.5px !important;
}

/* Standalone Liquid Glass Utility Classes */
.cw-liquid-glass-border {
  border: ${glass.liquid.border} !important;
  box-shadow: inset 0 1.5px 0 0 rgba(255, 255, 255, 0.75), inset 0 -1.5px 0 0 rgba(255, 255, 255, 0.35) !important;
}

.cw-liquid-glass-overlay {
  background: ${glass.liquid.overlayGradient} !important;
}

.cw-liquid-glass-surface {
  background-image: ${glass.liquid.overlayGradient};
  background-color: ${glass.liquid.surface};
  border: ${glass.liquid.border};
  box-shadow: ${glass.liquid.boxShadow};
  backdrop-filter: ${glass.liquid.backdropFilter};
  -webkit-backdrop-filter: ${glass.liquid.webkitBackdropFilter};
  border-radius: 20px;
  position: relative;
  overflow: hidden;
}
.cw-liquid-glass-surface::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1.5px;
  background: ${glass.liquid.specularTopLine};
  pointer-events: none;
}

/* ==========================================================================
   Utility Classes & Components
   ========================================================================== */

/* Layout & Backgrounds */
.cw-bg-black { background-color: var(--cw-bg) !important; }
.cw-bg-soft { background-color: var(--cw-bg-soft) !important; }
.cw-bg-surface { background-color: var(--cw-surface) !important; }
.cw-bg-card { background-color: var(--cw-surface-card) !important; }
.cw-bg-elevated { background-color: var(--cw-surface-elevated) !important; }
.cw-text-primary { color: var(--cw-text-primary) !important; }
.cw-text-secondary { color: var(--cw-text-secondary) !important; }
.cw-text-muted { color: var(--cw-text-muted) !important; }
.cw-text-tertiary { color: var(--cw-tertiary) !important; }
.cw-border { border: 1px solid var(--cw-border) !important; }
.cw-border-strong { border: 1px solid var(--cw-border-strong) !important; }

/* Glass Panel (Web Static by default) */
.cw-glass-panel {
  background: var(--cw-glass-bg);
  border: var(--cw-glass-border);
  box-shadow: var(--cw-glass-shadow);
  border-radius: 18px;
  position: relative;
  overflow: hidden;
}

.cw-glass-panel::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
  pointer-events: none;
}

/* Chat Header (Web Style Layout) */
.cw-chat-header {
  height: 64px;
  background-color: var(--cw-bg);
  border-bottom: 1px solid var(--cw-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
}

/* Call Button Rule: Only shown on APK, hidden on Web */
.cw-chat-header .cw-call-btn {
  display: none;
}
[data-platform="apk"] .cw-chat-header .cw-call-btn,
.cw-platform-apk .cw-chat-header .cw-call-btn {
  display: inline-flex !important;
}

/* Chat Bubbles (APK shape + gradient brush + time vibe) */
.cw-bubble-group {
  max-width: 85%;
  width: fit-content;
  min-width: 0;
  margin: 4px 0;
}

@media (min-width: 640px) {
  .cw-bubble-group {
    max-width: 70%;
  }
}

.cw-bubble {
  position: relative;
  display: inline-block;
  max-width: 100%;
  width: fit-content;
  min-width: 60px;
  padding: 8px 12px 6px 12px;
  border-radius: 16px;
  font-size: 14.5px;
  line-height: 1.4;
  word-break: normal;
  overflow-wrap: anywhere;
  box-sizing: border-box;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

/* Sent message: Red Crimson Gradient + Tail + Aurora Edge */
.cw-bubble-sent {
  background: var(--cw-bubble-sent-bg);
  color: #ffffff;
  border-bottom-right-radius: 4px;
  box-shadow: var(--cw-bubble-sent-shadow);
  margin-left: auto;
}
.cw-bubble-sent::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px 16px 0 0;
  pointer-events: none;
}
.cw-bubble-sent::after {
  content: "";
  position: absolute;
  top: 8px;
  bottom: 8px;
  right: 2px;
  width: 3px;
  border-radius: 9999px;
  background: var(--cw-ambient-bubble-glow, #e65100);
  opacity: 0.85;
  pointer-events: none;
}

/* Received message: Slate Glass / Dark Surface + Tail */
.cw-bubble-received {
  background: var(--cw-bubble-received-bg);
  color: #f1f5f9;
  border: var(--cw-bubble-received-border);
  border-bottom-left-radius: 4px;
  box-shadow: var(--cw-bubble-received-shadow);
  margin-right: auto;
}
.cw-bubble-received::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px 16px 0 0;
  pointer-events: none;
}

/* AI Assistant Bubble */
.cw-bubble-ai {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  border: 1px solid rgba(99, 102, 241, 0.35);
  color: #ffffff;
  border-bottom-left-radius: 4px;
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.20);
  margin-right: auto;
}

/* Centered Call Log Bubble (APK signature BubbleCallLogContent) */
.cw-call-log-bubble {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: rgba(18, 19, 28, 0.60);
  border: 1px solid var(--cw-border);
  border-radius: 9999px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 500;
  color: var(--cw-text-primary);
  margin: 6px auto;
  box-sizing: border-box;
}
.cw-call-log-bubble .cw-call-icon {
  color: var(--cw-tertiary);
  font-size: 13px;
}

/* --- Liquid Glass Bubbles (1:1 APK LiquidGlassEffect & SafeHaze) --- */
[data-liquid-glass="true"] .cw-bubble,
.cw-liquid-glass .cw-bubble,
.cw-bubble.cw-liquid-glass,
[data-liquid-glass="true"] .msg-bubble,
.cw-liquid-glass .msg-bubble,
.msg-bubble.cw-liquid-glass {
  contain: content;
}

[data-liquid-glass="true"] .cw-bubble-sent,
.cw-liquid-glass .cw-bubble-sent,
.cw-bubble-sent.cw-liquid-glass,
[data-liquid-glass="true"] .sent,
.cw-liquid-glass .sent,
.sent.cw-liquid-glass {
  background-image: ${bubbles.liquidGlass.sent.overlayBrush}, ${bubbles.liquidGlass.sent.gradient} !important;
  background-color: rgba(160, 24, 48, 0.75) !important;
  border: ${bubbles.liquidGlass.sent.border} !important;
  box-shadow: ${bubbles.liquidGlass.sent.boxShadow} !important;
}

[data-liquid-glass="true"] .cw-bubble-sent::before,
.cw-liquid-glass .cw-bubble-sent::before,
.cw-bubble-sent.cw-liquid-glass::before,
[data-liquid-glass="true"] .sent::before,
.cw-liquid-glass .sent::before,
.sent.cw-liquid-glass::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.85) 50%, transparent 100%) !important;
  height: 1.5px !important;
  border-radius: 14px 14px 0 0;
  pointer-events: none;
}

[data-liquid-glass="true"] .cw-bubble-received,
.cw-liquid-glass .cw-bubble-received,
.cw-bubble-received.cw-liquid-glass,
[data-liquid-glass="true"] .received,
.cw-liquid-glass .received,
.received.cw-liquid-glass {
  background-image: ${bubbles.liquidGlass.received.overlayBrush}, ${bubbles.liquidGlass.received.gradient} !important;
  background-color: rgba(18, 19, 28, 0.70) !important;
  border: ${bubbles.liquidGlass.received.border} !important;
  box-shadow: ${bubbles.liquidGlass.received.boxShadow} !important;
}

[data-liquid-glass="true"] .cw-bubble-received::before,
.cw-liquid-glass .cw-bubble-received::before,
.cw-bubble-received.cw-liquid-glass::before,
[data-liquid-glass="true"] .received::before,
.cw-liquid-glass .received::before,
.received.cw-liquid-glass::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.65) 50%, transparent 100%) !important;
  height: 1.5px !important;
  border-radius: 14px 14px 0 0;
  pointer-events: none;
}

[data-liquid-glass="true"] .cw-bubble-ai,
.cw-liquid-glass .cw-bubble-ai,
.cw-bubble-ai.cw-liquid-glass,
[data-liquid-glass="true"] .beeta-msg,
.cw-liquid-glass .beeta-msg,
.beeta-msg.cw-liquid-glass {
  background-image: linear-gradient(180deg, rgba(129, 140, 248, 0.25) 0%, transparent 60%), ${bubbles.liquidGlass.beetaAi.gradient} !important;
  border: ${bubbles.liquidGlass.beetaAi.border} !important;
  box-shadow: ${bubbles.liquidGlass.beetaAi.boxShadow} !important;
}

[data-liquid-glass="true"] .cw-call-log-bubble,
.cw-liquid-glass .cw-call-log-bubble {
  background-color: rgba(18, 19, 28, 0.85) !important;
  border: 1.5px solid rgba(255, 255, 255, 0.25) !important;
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.50), 0 6px 20px rgba(0, 0, 0, 0.40) !important;
}

/* Reactions Bar & Reaction Pills */
.cw-reactions-row {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 6px;
  background: ${components.reactions.barBg};
  border: ${components.reactions.barBorder};
  border-radius: ${components.reactions.borderRadius};
  box-shadow: ${components.reactions.barShadow};
  backdrop-filter: ${components.reactions.barBackdropFilter};
  -webkit-backdrop-filter: ${components.reactions.barBackdropFilter};
}

.cw-reaction-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: 12px;
  background: ${components.reactions.pillBg};
  border: ${components.reactions.pillBorder};
  color: var(--cw-text-secondary);
  cursor: pointer;
  transition: all 0.15s ease;
}
.cw-reaction-pill:hover {
  background: ${components.reactions.pillHoverBg};
  color: #ffffff;
}
.cw-reaction-pill.active {
  background: ${components.reactions.activePillBg};
  border-color: ${components.reactions.activePillBorder};
  color: #ffffff;
}

/* Reply Quote Box */
.cw-reply-quote {
  border-left: ${components.replyQuote.borderLeft};
  background: ${components.replyQuote.bg};
  border-radius: ${components.replyQuote.borderRadius};
  padding: ${components.replyQuote.padding};
  margin-bottom: 6px;
  font-size: ${components.replyQuote.fontSize};
  box-sizing: border-box;
}
.cw-reply-quote-title {
  color: ${components.replyQuote.titleColor};
  font-weight: 700;
  margin-bottom: 2px;
}
.cw-reply-quote-text {
  color: ${components.replyQuote.textColor};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Voice Message Player */
.cw-voice-player {
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${components.voicePlayer.bg};
  border: ${components.voicePlayer.border};
  border-radius: ${components.voicePlayer.borderRadius};
  padding: 8px 14px;
  box-sizing: border-box;
}
.cw-voice-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${components.voicePlayer.playButtonBg};
  color: ${components.voicePlayer.playButtonColor};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.15s ease;
}
.cw-voice-btn:hover {
  transform: scale(1.06);
}
.cw-voice-waveform {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 3px;
  height: 24px;
}
.cw-voice-bar {
  width: 3px;
  border-radius: 9999px;
  background: ${components.voicePlayer.waveformInactive};
  transition: height 0.1s ease, background-color 0.15s ease;
}
.cw-voice-bar.active {
  background: ${components.voicePlayer.waveformActive};
}

/* Pinned Message Banner */
.cw-pinned-banner {
  background: ${components.pinnedBanner.bg};
  border-bottom: ${components.pinnedBanner.borderBottom};
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
}

/* Bottom Sheet / Action Drawer */
.cw-bottom-sheet {
  background: ${components.bottomSheet.bg};
  border-top: ${components.bottomSheet.borderTop};
  border-top-left-radius: ${components.bottomSheet.borderRadius};
  border-top-right-radius: ${components.bottomSheet.borderRadius};
  padding: 16px 20px 24px;
  box-sizing: border-box;
}
.cw-bottom-sheet-handle {
  width: ${components.bottomSheet.handleWidth};
  height: ${components.bottomSheet.handleHeight};
  background: ${components.bottomSheet.handleBg};
  border-radius: 9999px;
  margin: 0 auto 14px;
}

/* Avatars & Online Indicators */
.cw-avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${components.avatar.defaultBg};
  color: ${components.avatar.color};
  font-weight: 700;
  flex-shrink: 0;
  overflow: visible;
}
.cw-avatar-sm { width: 32px; height: 32px; font-size: 13px; }
.cw-avatar-md { width: 40px; height: 40px; font-size: 15px; }
.cw-avatar-lg { width: 56px; height: 56px; font-size: 20px; }
.cw-avatar-status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${components.avatar.statusOnline};
  border: 2px solid #000000;
}

/* Badges */
.cw-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.3px;
}
.cw-badge-admin {
  color: ${components.badges.admin.color};
  background: ${components.badges.admin.bg};
  border: ${components.badges.admin.border};
}
.cw-badge-ai {
  color: ${components.badges.ai.color};
  background: ${components.badges.ai.bg};
  border: ${components.badges.ai.border};
}
.cw-badge-verified {
  color: ${components.badges.verified.color};
  background: ${components.badges.verified.bg};
  border: ${components.badges.verified.border};
}

/* Feed UI: Static Black + Post Box + Plus Sign + Sequential Flow */
.cw-feed-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--cw-bg);
  min-height: 100vh;
  border-left: 1px solid var(--cw-border);
  border-right: 1px solid var(--cw-border);
  box-sizing: border-box;
}

@media (max-width: 640px) {
  .cw-feed-container {
    border-left: none;
    border-right: none;
  }
}

.cw-post-box {
  background: var(--cw-surface-card);
  border: 1px solid var(--cw-border);
  border-radius: 16px;
  padding: 14px 16px;
  margin: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
}

.cw-post-input {
  flex: 1;
  background: var(--cw-input-bg);
  border: 1px solid var(--cw-input-border);
  border-radius: 9999px;
  padding: 10px 16px;
  color: var(--cw-text-primary);
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s ease;
}
.cw-post-input:focus {
  border-color: var(--cw-tertiary);
}
.cw-post-input::placeholder {
  color: var(--cw-text-muted);
}

.cw-post-plus-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--cw-tertiary);
  color: #ffffff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
  box-shadow: 0 3px 10px rgba(217, 4, 41, 0.35);
}
.cw-post-plus-btn:hover {
  background: var(--cw-tertiary-hover);
  transform: scale(1.05);
}
.cw-post-plus-btn:active {
  transform: scale(0.95);
}

/* Sequential Feed Item (Skip full-card UI, reduce fatigue) */
.cw-feed-item {
  border-bottom: 1px solid var(--cw-border);
  padding: 16px;
  transition: background-color 0.15s ease;
  background: transparent;
}
.cw-feed-item:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

/* --- Complete Universal Post Card Anatomy --- */
.cw-post-card {
  padding: 16px;
  border-bottom: 1px solid var(--cw-border);
  transition: background-color 0.15s ease;
  background: transparent;
  position: relative;
  box-sizing: border-box;
}
.cw-post-card:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

/* Repost Header Banner */
.cw-post-repost-header,
.cw-post-repost-banner {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #34D399;
  font-weight: 700;
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
}
.cw-post-repost-header:hover,
.cw-post-repost-banner:hover {
  text-decoration: underline;
}

/* Author Header Row */
.cw-post-header {
  display: flex;
  align-items: center;
  gap: 12px;
}
.cw-post-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  box-shadow: 0 0 0 2px #1e293b;
  background-color: #1e293b;
}
.cw-post-author-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}
.cw-post-author-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.cw-post-author-name {
  font-weight: 600;
  color: #ffffff;
  font-size: 14px;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cw-post-author-name:hover {
  text-decoration: underline;
}
.cw-post-author-handle {
  color: var(--cw-text-muted, rgba(255, 255, 255, 0.50));
  font-size: 12px;
}
.cw-post-timestamp {
  color: var(--cw-text-muted, rgba(255, 255, 255, 0.50));
  font-size: 12px;
}
.cw-post-follow-btn {
  font-size: 12px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
  background: var(--cw-tertiary, #D90429);
  color: #ffffff;
}
.cw-post-follow-btn:hover {
  background: var(--cw-tertiary-hover, #B00321);
}
.cw-post-follow-btn.following {
  background: rgba(255, 255, 255, 0.10);
  color: rgba(255, 255, 255, 0.70);
}
.cw-post-follow-btn.following:hover {
  background: rgba(217, 4, 41, 0.20);
  color: #ef4444;
}

/* Post Content Body */
.cw-post-body {
  margin-top: 12px;
  color: rgba(255, 255, 255, 0.90);
  font-size: 14px;
  line-height: 1.6;
  word-break: break-word;
}

/* Media Containers (16:9 Aspect Video, Images, Controls) */
.cw-post-media-outer,
.feed-card-media-outer {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  margin-top: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.40);
  cursor: pointer;
}
.cw-post-video-container {
  aspect-ratio: 16 / 9;
  background-color: #020617;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
}
.cw-post-video-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.70);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  gap: 4px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  pointer-events: none;
  z-index: 20;
}
.cw-post-video-badge span {
  color: var(--cw-tertiary, #D90429);
}
.cw-post-video-play-ctrl {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(0, 0, 0, 0.70);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.10);
  cursor: pointer;
  z-index: 20;
  transition: background 0.15s ease;
}
.cw-post-video-play-ctrl:hover {
  background: rgba(0, 0, 0, 0.90);
}
.cw-post-video-mute-ctrl {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.70);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #ffffff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.10);
  cursor: pointer;
  z-index: 20;
  transition: background 0.15s ease;
}
.cw-post-video-mute-ctrl:hover {
  background: rgba(0, 0, 0, 0.90);
}
.cw-post-video-overlay {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.60);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 10;
}
.cw-post-image-container {
  background-color: rgba(15, 23, 42, 0.60);
  overflow: hidden;
  border-radius: 12px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.cw-post-image-container img {
  width: 100%;
  max-height: 480px;
  object-fit: cover;
  display: block;
}

/* Polls Container */
.cw-post-poll-box {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px;
  margin-top: 12px;
}
.cw-post-poll-option {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  padding: 8px 12px;
  margin-bottom: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cw-post-poll-bar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(217, 4, 41, 0.25);
  border-right: 2px solid var(--cw-tertiary, #D90429);
  transition: width 0.3s ease;
  z-index: 0;
}

/* Quoted Post Mini-Card */
.cw-post-quoted-card {
  margin-top: 12px;
  padding: 14px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: border-color 0.15s ease;
  cursor: pointer;
}
.cw-post-quoted-card:hover {
  border-color: rgba(217, 4, 41, 0.40);
}

/* Action Bar Row */
.cw-post-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.10);
  font-size: 14px;
  color: var(--cw-text-muted, rgba(255, 255, 255, 0.50));
}
.cw-post-action-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  transition: color 0.15s ease, transform 0.1s ease;
  padding: 0;
}
.cw-post-action-btn:hover {
  color: var(--cw-text-primary, #ffffff);
}
.cw-post-comment-btn:hover {
  color: #60A5FA;
}
.cw-post-repost-btn:hover,
.cw-post-repost-btn.reposted {
  color: #34D399;
  font-weight: 700;
}
.cw-post-like-btn:hover,
.cw-post-like-btn.liked {
  color: var(--cw-tertiary, #D90429);
  font-weight: 700;
}
.cw-post-like-btn.liked {
  transform: scale(1.08);
}
.cw-post-actions-right {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 14px;
}
.cw-post-views-pill {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--cw-text-muted, rgba(255, 255, 255, 0.50));
  user-select: none;
}

/* Buttons */
.cw-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.15s ease;
  text-decoration: none;
  box-sizing: border-box;
}

.cw-btn-tertiary,
.cw-btn-primary {
  background: var(--cw-tertiary);
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 14px rgba(217, 4, 41, 0.35);
}
.cw-btn-tertiary:hover,
.cw-btn-primary:hover {
  background: var(--cw-tertiary-hover);
  transform: translateY(-1px);
}
.cw-btn-tertiary:active,
.cw-btn-primary:active {
  background: var(--cw-tertiary-dark);
  transform: translateY(0);
}

.cw-btn-secondary {
  background: transparent;
  color: #ffffff;
  border: 1px solid var(--cw-border-strong);
}
.cw-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
}

.cw-btn-ghost {
  background: transparent;
  color: var(--cw-text-secondary);
  border: none;
}
.cw-btn-ghost:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

/* Tabs & Navigation */
.cw-tab-bar {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--cw-border);
  background: var(--cw-bg);
}
.cw-tab-item {
  flex: 1;
  text-align: center;
  padding: 12px 16px;
  color: var(--cw-text-muted);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  transition: color 0.15s ease;
}
.cw-tab-item:hover {
  color: var(--cw-text-primary);
}
.cw-tab-item.active {
  color: var(--cw-text-primary);
}
.cw-tab-item.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 20%;
  right: 20%;
  height: 2px;
  background: var(--cw-tertiary);
  border-radius: 9999px;
}

/* Scrollbars */
.cw-scrollbar-thin::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
.cw-scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}
.cw-scrollbar-thin::-webkit-scrollbar-thumb {
  background: #333333;
  border-radius: 2px;
}
.cw-scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #555555;
}
`;

  return minify ? minifyCss(rawCss) : rawCss;
}

export default compileCss;
