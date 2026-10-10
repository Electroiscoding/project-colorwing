/**
 * ColorWing Automated Test Suite
 * Validates token values, compiler performance, CSS syntax, and cross-platform integrity.
 */

import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import tokens, { getTimeVibeForHour } from '../src/tokens/index.js';
import { buildAll } from '../src/compiler/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');

console.log('🧪 Running ColorWing Test Suite...');

// 1. Verify Core Hierarchy
console.log('  Testing core color hierarchy...');
assert.strictEqual(tokens.colors.primary, '#000000', 'Primary color must be pitch black #000000');
assert.strictEqual(tokens.colors.secondary, '#FFFFFF', 'Secondary color must be white #FFFFFF');
assert.strictEqual(tokens.colors.tertiary, '#D90429', 'Tertiary color must be brand red #D90429');

// 2. Verify Time-Based Vibes
console.log('  Testing time-based ambient vibes...');
assert.ok(tokens.timeVibes.morning, 'Morning vibe must exist');
assert.ok(tokens.timeVibes.day, 'Day vibe must exist');
assert.ok(tokens.timeVibes.sunset, 'Sunset vibe must exist');
assert.ok(tokens.timeVibes.night, 'Night vibe must exist');
assert.strictEqual(tokens.timeVibes.morning.ambientColor, '#381B09');
assert.strictEqual(tokens.timeVibes.day.ambientColor, '#111E2E');
assert.strictEqual(tokens.timeVibes.sunset.ambientColor, '#2E121B');
assert.strictEqual(tokens.timeVibes.night.ambientColor, '#0F0A1C');

assert.strictEqual(getTimeVibeForHour(8).id, 'morning');
assert.strictEqual(getTimeVibeForHour(13).id, 'day');
assert.strictEqual(getTimeVibeForHour(18).id, 'sunset');
assert.strictEqual(getTimeVibeForHour(23).id, 'night');

// 3. Verify Merged UI Decision Sheet Rules
console.log('  Testing merged UI decision sheet rules...');
assert.strictEqual(tokens.glass.static.enabledByDefault, true, 'Default look must be static');
assert.strictEqual(tokens.glass.liquid.enabledByDefault, false, 'Liquid glass must be off by default');
assert.strictEqual(tokens.glass.liquid.borderWidthDp, 1.5, 'Liquid glass border width must be 1.5dp matching APK');
assert.strictEqual(tokens.glass.static.borderWidthDp, 1.0, 'Static glass border width must be 1.0dp matching APK');
assert.strictEqual(tokens.glass.liquid.blurRadiusDp, 16, 'Liquid glass blur radius must be 16dp matching SafeHaze');
assert.strictEqual(tokens.components.chatHeader.callButtonVisibleOnWeb, false, 'Call button must be hidden on web');
assert.strictEqual(tokens.components.chatHeader.callButtonVisibleOnApk, true, 'Call button must be visible on APK');

// 4. Verify Compiler Benchmark
console.log('  Testing compiler execution and benchmark...');
const result = buildAll({ verbose: false });
console.log(`    Compiled in ${result.durationMs}ms (Benchmark target: <10ms)`);
assert.ok(parseFloat(result.durationMs) < 50, 'Build must be instantaneous under 50ms');

// 5. Verify Generated Artifacts Exist (Master + Modular Sub-Bundles)
const expectedFiles = [
  'colorwing.css',
  'colorwing.min.css',
  'colors.css',
  'colors.min.css',
  'bubbles.css',
  'bubbles.min.css',
  'feed.css',
  'feed.min.css',
  'glass.css',
  'glass.min.css',
  '_colorwing.scss',
  'colorwing.js',
  'colorwing.d.ts',
  'tokens.json',
  'figma-tokens.json',
  'tailwind-preset.js',
  'ColorwingTokens.kt',
  'ColorwingTheme.kt',
  'ColorwingComponents.kt',
  'ColorwingTokens.swift',
  'ColorwingTokens.dart',
  'ColorwingNative.js'
];

expectedFiles.forEach((file) => {
  const filePath = path.join(DIST_DIR, file);
  assert.ok(fs.existsSync(filePath), `Generated file ${file} must exist`);
  const content = fs.readFileSync(filePath, 'utf-8');
  assert.ok(content.length > 50, `File ${file} must not be empty`);
});

// 6. Verify CSS Variables and Classes
console.log('  Testing CSS compilation output...');
const css = fs.readFileSync(path.join(DIST_DIR, 'colorwing.css'), 'utf-8');
assert.ok(css.includes('--cw-primary: #000000;'), 'CSS must include --cw-primary');
assert.ok(css.includes('--cw-secondary: #FFFFFF;'), 'CSS must include --cw-secondary');
assert.ok(css.includes('--cw-tertiary: #D90429;'), 'CSS must include --cw-tertiary');
assert.ok(css.includes('.cw-bubble-sent'), 'CSS must include .cw-bubble-sent');
assert.ok(css.includes('.cw-bubble-received'), 'CSS must include .cw-bubble-received');
assert.ok(css.includes('.cw-feed-item'), 'CSS must include .cw-feed-item');
assert.ok(css.includes('.cw-call-btn'), 'CSS must include .cw-call-btn');
assert.ok(css.includes('[data-platform="apk"]'), 'CSS must include APK platform selector');
assert.ok(css.includes('.cw-reactions-row'), 'CSS must include .cw-reactions-row');
assert.ok(css.includes('.cw-reply-quote'), 'CSS must include .cw-reply-quote');
assert.ok(css.includes('.cw-voice-player'), 'CSS must include .cw-voice-player');
assert.ok(css.includes('.cw-bottom-sheet'), 'CSS must include .cw-bottom-sheet');
assert.ok(css.includes('.cw-badge-admin'), 'CSS must include .cw-badge-admin');
assert.ok(css.includes('.cw-liquid-glass-border'), 'CSS must include .cw-liquid-glass-border');
assert.ok(css.includes('.cw-liquid-glass-surface'), 'CSS must include .cw-liquid-glass-surface');
assert.ok(css.includes('.cw-call-log-bubble'), 'CSS must include .cw-call-log-bubble');

// Modular CSS checks
const colorsCss = fs.readFileSync(path.join(DIST_DIR, 'colors.css'), 'utf-8');
assert.ok(colorsCss.includes('--cw-primary: #000000;'), 'colors.css must contain primary');
const bubblesCss = fs.readFileSync(path.join(DIST_DIR, 'bubbles.css'), 'utf-8');
assert.ok(bubblesCss.includes('.cw-bubble-sent'), 'bubbles.css must contain bubble sent');
assert.ok(bubblesCss.includes('.cw-call-log-bubble'), 'bubbles.css must contain call log bubble');
const feedCss = fs.readFileSync(path.join(DIST_DIR, 'feed.css'), 'utf-8');
assert.ok(feedCss.includes('.cw-post-plus-btn'), 'feed.css must contain post plus button');
const glassCss = fs.readFileSync(path.join(DIST_DIR, 'glass.css'), 'utf-8');
assert.ok(glassCss.includes('.cw-glass-panel'), 'glass.css must contain glass panel');
assert.ok(glassCss.includes('.cw-liquid-glass-surface'), 'glass.css must contain liquid glass surface');

// SCSS checks
const scss = fs.readFileSync(path.join(DIST_DIR, '_colorwing.scss'), 'utf-8');
assert.ok(scss.includes('$cw-primary: #000000;'), '_colorwing.scss must contain $cw-primary');
assert.ok(scss.includes('$cw-tertiary: #D90429;'), '_colorwing.scss must contain $cw-tertiary');
assert.ok(scss.includes('@mixin cw-bubble-sent'), '_colorwing.scss must contain @mixin cw-bubble-sent');
assert.ok(scss.includes('@mixin cw-liquid-glass'), '_colorwing.scss must contain @mixin cw-liquid-glass');

// 7. Verify Kotlin File Output
console.log('  Testing Kotlin Compose compilation output...');
const ktTokens = fs.readFileSync(path.join(DIST_DIR, 'ColorwingTokens.kt'), 'utf-8');
assert.ok(ktTokens.includes('val Primary = Color(0xFF000000)'), 'Kotlin must include Primary black');
assert.ok(ktTokens.includes('val Secondary = Color(0xFFFFFFFF)'), 'Kotlin must include Secondary white');
assert.ok(ktTokens.includes('val Tertiary = Color(0xFFD90429)'), 'Kotlin must include Tertiary red');
assert.ok(ktTokens.includes('val GlassBorderWidthLiquid = 1.5.dp'), 'Kotlin must include GlassBorderWidthLiquid');

const ktTheme = fs.readFileSync(path.join(DIST_DIR, 'ColorwingTheme.kt'), 'utf-8');
assert.ok(ktTheme.includes('fun ColorwingTheme'), 'Kotlin theme composable must be defined');
assert.ok(ktTheme.includes('rememberColorwingAmbientColor'), 'Kotlin ambient color helper must be defined');
assert.ok(ktTheme.includes('fun rememberLiquidGlassBorder(): Brush'), 'Kotlin must include rememberLiquidGlassBorder');
assert.ok(ktTheme.includes('fun rememberLiquidGlassOverlayBrush(): Brush'), 'Kotlin must include rememberLiquidGlassOverlayBrush');
assert.ok(ktTheme.includes('fun rememberStandardFrostedGlassBrush(): Brush'), 'Kotlin must include rememberStandardFrostedGlassBrush');
assert.ok(ktTheme.includes('fun rememberStandardGlassBorder(): Brush'), 'Kotlin must include rememberStandardGlassBorder');

const ktComponents = fs.readFileSync(path.join(DIST_DIR, 'ColorwingComponents.kt'), 'utf-8');
assert.ok(ktComponents.includes('fun ColorwingChatTopBar'), 'Kotlin ChatTopBar must be defined');
assert.ok(ktComponents.includes('fun ColorwingChatBubble'), 'Kotlin ChatBubble must be defined');
assert.ok(ktComponents.includes('fun ColorwingReplyQuote'), 'Kotlin ReplyQuote must be defined');
assert.ok(ktComponents.includes('fun ColorwingReactionPill'), 'Kotlin ReactionPill must be defined');
assert.ok(ktComponents.includes('fun ColorwingAvatar'), 'Kotlin Avatar must be defined');
assert.ok(ktComponents.includes('fun ColorwingCallLogBubble'), 'Kotlin CallLogBubble must be defined');
assert.ok(ktComponents.includes('fun ColorwingGlassSurface'), 'Kotlin GlassSurface must be defined');
assert.ok(ktComponents.includes('fun ColorwingGlassBottomBar'), 'Kotlin GlassBottomBar must be defined');

// 8. Verify Swift File Output
console.log('  Testing Swift iOS compilation output...');
const swiftTokens = fs.readFileSync(path.join(DIST_DIR, 'ColorwingTokens.swift'), 'utf-8');
assert.ok(swiftTokens.includes('public static let primary'), 'Swift must include primary color');
assert.ok(swiftTokens.includes('public static let tertiary'), 'Swift must include tertiary color');

// 9. Verify Flutter File Output
console.log('  Testing Flutter Dart compilation output...');
const dartTokens = fs.readFileSync(path.join(DIST_DIR, 'ColorwingTokens.dart'), 'utf-8');
assert.ok(dartTokens.includes('static const Color primary'), 'Dart must include primary color');
assert.ok(dartTokens.includes('static const Color tertiary'), 'Dart must include tertiary color');

// 10. Verify React Native File Output
console.log('  Testing React Native compilation output...');
const rnTokens = fs.readFileSync(path.join(DIST_DIR, 'ColorwingNative.js'), 'utf-8');
assert.ok(rnTokens.includes("primary: '#000000'"), 'RN must include primary color');

console.log('✅ ALL 10 TEST SUITES PASSED SUCCESSFULLY!');
