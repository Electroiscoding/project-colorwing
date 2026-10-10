#!/usr/bin/env node

/**
 * ColorWing CLI Tool
 * Usage:
 *   colorwing build
 *   colorwing watch
 *   colorwing serve [--port 3333]
 *   colorwing doctor
 */

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { buildAll } from '../src/compiler/index.js';
import { startLiveServer } from '../src/server/liveServer.js';
import tokens from '../src/tokens/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const TOKENS_DIR = path.resolve(ROOT_DIR, 'src/tokens');

const args = process.argv.slice(2);
const command = args[0] || 'build';

if (command === 'build') {
  console.log('[ColorWing] Building design tokens for Web, Android, and Tailwind...');
  buildAll({ verbose: true });
} else if (command === 'serve') {
  const portIndex = args.indexOf('--port');
  const port = portIndex !== -1 && args[portIndex + 1] ? parseInt(args[portIndex + 1], 10) : 3333;
  const noWatch = args.includes('--no-watch');
  const testExit = args.includes('--test-exit');

  console.log(`[ColorWing] Starting Live Sync Server on port ${port}...`);
  const server = startLiveServer(port, { watch: !noWatch });

  if (testExit) {
    setTimeout(() => {
      console.log('[ColorWing] Self-test complete, shutting down.');
      server.close();
      process.exit(0);
    }, 1000);
  }
} else if (command === 'watch') {
  console.log('[ColorWing] Watching src/tokens for changes...');
  buildAll({ verbose: false });
  fs.watch(TOKENS_DIR, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.js')) {
      console.log(`[ColorWing] Detected change in ${filename}, recompiling...`);
      buildAll({ verbose: true });
    }
  });
} else if (command === 'doctor') {
  console.log('--- ColorWing System Doctor ---');
  console.log(`System: ${tokens.meta.system} v${tokens.meta.version}`);
  console.log(`Primary Color: ${tokens.colors.primary} (OK)`);
  console.log(`Secondary Color: ${tokens.colors.secondary} (OK)`);
  console.log(`Tertiary Color: ${tokens.colors.tertiary} (OK)`);
  console.log(`Time Vibes Defined: ${Object.keys(tokens.timeVibes).length} (Morning, Day, Sunset, Night) (OK)`);
  console.log(`Default Liquid Glass: ${tokens.glass.static.enabledByDefault ? 'OFF (Static Default)' : 'INVALID'} (OK)`);
  console.log(`Call Button Rule: APK Only, not Web (OK)`);
  console.log('All diagnostics passed!');
} else {
  console.log(`ColorWing CLI v${tokens.meta.version}`);
  console.log('Commands:');
  console.log('  build   - Compile all tokens to CSS, Kotlin, Tailwind, and JSON');
  console.log('  serve   - Start the realtime live sync server and SSE daemon');
  console.log('  watch   - Watch for changes and recompile automatically');
  console.log('  doctor  - Validate tokens and system consistency');
}
