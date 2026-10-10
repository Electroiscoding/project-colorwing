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
assert.strictEqual(tokens.components.chatHeader.callButtonVisibleOnWeb, false, 'Call button must be hidden on web');
assert.strictEqual(tokens.components.chatHeader.callButtonVisibleOnApk, true, 'Call button must be visible on APK');

// 4. Verify Compiler Benchmark
console.log('  Testing compiler execution and benchmark...');
const result = buildAll({ verbose: false });
console.log(`    Compiled in ${result.durationMs}ms (Benchmark target: <10ms)`);
assert.ok(parseFloat(result.durationMs) < 50, 'Build must be instantaneous under 50ms');

// 5. Verify Generated Artifacts Exist
const expectedFiles = [
  'colorwing.css',
  'colorwing.min.css',
  'colorwing.js',
  'colorwing.d.ts',
  'tokens.json',
  'tailwind-preset.js',
  'ColorwingTokens.kt',
  'ColorwingTheme.kt',
  'ColorwingComponents.kt'
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

// 7. Verify Kotlin File Output
console.log('  Testing Kotlin Compose compilation output...');
const ktTokens = fs.readFileSync(path.join(DIST_DIR, 'ColorwingTokens.kt'), 'utf-8');
assert.ok(ktTokens.includes('val Primary = Color(0xFF000000)'), 'Kotlin must include Primary black');
assert.ok(ktTokens.includes('val Secondary = Color(0xFFFFFFFF)'), 'Kotlin must include Secondary white');
assert.ok(ktTokens.includes('val Tertiary = Color(0xFFD90429)'), 'Kotlin must include Tertiary red');

const ktTheme = fs.readFileSync(path.join(DIST_DIR, 'ColorwingTheme.kt'), 'utf-8');
assert.ok(ktTheme.includes('fun ColorwingTheme'), 'Kotlin theme composable must be defined');
assert.ok(ktTheme.includes('rememberColorwingAmbientColor'), 'Kotlin ambient color helper must be defined');

const ktComponents = fs.readFileSync(path.join(DIST_DIR, 'ColorwingComponents.kt'), 'utf-8');
assert.ok(ktComponents.includes('fun ColorwingChatTopBar'), 'Kotlin ChatTopBar must be defined');
assert.ok(ktComponents.includes('fun ColorwingReplyQuote'), 'Kotlin ReplyQuote must be defined');
assert.ok(ktComponents.includes('fun ColorwingReactionPill'), 'Kotlin ReactionPill must be defined');
assert.ok(ktComponents.includes('fun ColorwingAvatar'), 'Kotlin Avatar must be defined');

console.log('✅ ALL TESTS PASSED SUCCESSFULLY!');
