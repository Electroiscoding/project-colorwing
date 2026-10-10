/**
 * ColorWing Centralized Design System: Master Compiler Pipeline
 * Orchestrates compilation to CSS, JS, Kotlin, Swift, Flutter, React Native, Tailwind, Figma, and JSON targets.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import tokens from '../tokens/index.js';
import {
  compileCss,
  compileColorsCss,
  compileBubblesCss,
  compileFeedCss,
  compileGlassCss
} from './cssCompiler.js';
import {
  compileKotlinTokens,
  compileKotlinTheme,
  compileKotlinComponents
} from './kotlinCompiler.js';
import { compileSwiftTokens } from './swiftCompiler.js';
import { compileFlutterTokens } from './flutterCompiler.js';
import { compileReactNativeTokens } from './reactNativeCompiler.js';
import { compileTailwindPreset } from './tailwindCompiler.js';
import { compileJsonTokens } from './jsonCompiler.js';
import { compileFigmaTokens } from './figmaCompiler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');

export function buildAll(options = {}) {
  const startTime = performance.now();
  const verbose = options.verbose ?? true;

  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR, { recursive: true });
  }

  // 1. Compile CSS (Master + Modular Sub-Bundles)
  const rawCss = compileCss({ minify: false });
  const minCss = compileCss({ minify: true });
  fs.writeFileSync(path.join(DIST_DIR, 'colorwing.css'), rawCss, 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, 'colorwing.min.css'), minCss, 'utf-8');

  // Modular CSS Sub-Bundles
  fs.writeFileSync(path.join(DIST_DIR, 'colors.css'), compileColorsCss({ minify: false }), 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, 'colors.min.css'), compileColorsCss({ minify: true }), 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, 'bubbles.css'), compileBubblesCss({ minify: false }), 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, 'bubbles.min.css'), compileBubblesCss({ minify: true }), 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, 'feed.css'), compileFeedCss({ minify: false }), 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, 'feed.min.css'), compileFeedCss({ minify: true }), 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, 'glass.css'), compileGlassCss({ minify: false }), 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, 'glass.min.css'), compileGlassCss({ minify: true }), 'utf-8');

  // 2. Compile Kotlin Jetpack Compose Artifacts
  const ktTokens = compileKotlinTokens();
  const ktTheme = compileKotlinTheme();
  const ktComponents = compileKotlinComponents();
  fs.writeFileSync(path.join(DIST_DIR, 'ColorwingTokens.kt'), ktTokens, 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, 'ColorwingTheme.kt'), ktTheme, 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, 'ColorwingComponents.kt'), ktComponents, 'utf-8');

  // 3. Compile iOS SwiftUI Tokens
  const swiftTokens = compileSwiftTokens();
  fs.writeFileSync(path.join(DIST_DIR, 'ColorwingTokens.swift'), swiftTokens, 'utf-8');

  // 4. Compile Flutter / Dart Tokens
  const flutterTokens = compileFlutterTokens();
  fs.writeFileSync(path.join(DIST_DIR, 'ColorwingTokens.dart'), flutterTokens, 'utf-8');

  // 5. Compile React Native Tokens
  const rnTokens = compileReactNativeTokens();
  fs.writeFileSync(path.join(DIST_DIR, 'ColorwingNative.js'), rnTokens, 'utf-8');

  // 6. Compile Tailwind Preset
  const tailwindPreset = compileTailwindPreset();
  fs.writeFileSync(path.join(DIST_DIR, 'tailwind-preset.js'), tailwindPreset, 'utf-8');

  // 7. Compile JSON & Figma Tokens
  const jsonTokens = compileJsonTokens();
  const figmaTokens = compileFigmaTokens();
  fs.writeFileSync(path.join(DIST_DIR, 'tokens.json'), jsonTokens, 'utf-8');
  fs.writeFileSync(path.join(DIST_DIR, 'figma-tokens.json'), figmaTokens, 'utf-8');

  // 8. Generate JavaScript & TypeScript Distribution Files
  const esmJs = `/**
 * ColorWing Design System (ESM Bundle)
 */
export const tokens = ${JSON.stringify(tokens, null, 2)};
export default tokens;
`;
  fs.writeFileSync(path.join(DIST_DIR, 'colorwing.js'), esmJs, 'utf-8');

  const dts = `/**
 * ColorWing TypeScript Declarations
 */
export interface ColorwingColors {
  primary: string;
  secondary: string;
  tertiary: string;
  tertiaryHover: string;
  tertiaryDark: string;
  tertiaryCrimson: string;
  bg: string;
  bgSoft: string;
  surface: string;
  surfaceCard: string;
  inputBg: string;
  borderDefault: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accentCyan: string;
  accentPurple: string;
  success: string;
  warning: string;
}

export interface ColorwingTimeVibe {
  id: string;
  name: string;
  startHour: number;
  endHour: number;
  ambientColor: string;
  ambientColorAlpha: string;
  gradient: string;
  bubbleGlow: string;
}

export declare const tokens: {
  colors: ColorwingColors;
  timeVibes: Record<'morning' | 'day' | 'sunset' | 'night', ColorwingTimeVibe>;
  bubbles: any;
  glass: any;
  components: any;
  motion: any;
};

export default tokens;
`;
  fs.writeFileSync(path.join(DIST_DIR, 'colorwing.d.ts'), dts, 'utf-8');

  const durationMs = (performance.now() - startTime).toFixed(2);
  if (verbose) {
    console.log(`[ColorWing] Build complete in ${durationMs}ms`);
    console.log(`  -> dist/colorwing.css & min.css (plus colors, bubbles, feed, glass sub-bundles)`);
    console.log(`  -> dist/ColorwingTokens.kt & Theme.kt & Components.kt (Android)`);
    console.log(`  -> dist/ColorwingTokens.swift (iOS SwiftUI)`);
    console.log(`  -> dist/ColorwingTokens.dart (Flutter)`);
    console.log(`  -> dist/ColorwingNative.js (React Native)`);
    console.log(`  -> dist/tailwind-preset.js`);
    console.log(`  -> dist/tokens.json & figma-tokens.json`);
    console.log(`  -> dist/colorwing.js & .d.ts`);
  }

  return { durationMs, filesGenerated: 20 };
}

export default { buildAll };
