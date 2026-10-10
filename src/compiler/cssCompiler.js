/**
 * ColorWing Centralized Design System: CSS Compiler
 * Compiles JavaScript tokens into high-performance, zero-runtime CSS.
 */

import tokens from '../tokens/index.js';

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
  --cw-glass-filter: ${glass.liquid.backdropFilter} !important;
  backdrop-filter: ${glass.liquid.backdropFilter} !important;
  -webkit-backdrop-filter: ${glass.liquid.webkitBackdropFilter} !important;
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

  if (minify) {
    return rawCss
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\s+/g, ' ')
      .replace(/\s*([{}:;,])\s*/g, '$1')
      .trim();
  }

  return rawCss;
}

export default compileCss;
