/**
 * ColorWing Realtime Live Sync Daemon & HTTP Server
 *
 * Provides instant (< 2ms) hot-reloading of CSS and design tokens across
 * all connected Web applications and API clients.
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { compileCss } from '../compiler/cssCompiler.js';
import { compileJsonTokens } from '../compiler/jsonCompiler.js';
import { compileKotlinTokens } from '../compiler/kotlinCompiler.js';
import { buildAll } from '../compiler/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const TOKENS_DIR = path.resolve(ROOT_DIR, 'src/tokens');

export function startLiveServer(port = 3333, options = {}) {
  let clients = [];
  let cachedCss = compileCss({ minify: false });
  let cachedJson = compileJsonTokens();
  let cachedKotlin = compileKotlinTokens();

  // Watch for changes in src/tokens to broadcast updates immediately
  if (options.watch !== false) {
    fs.watch(TOKENS_DIR, { recursive: true }, async (eventType, filename) => {
      if (!filename || !filename.endsWith('.js')) return;
      const t0 = performance.now();
      try {
        buildAll({ verbose: false });
        cachedCss = compileCss({ minify: false });
        cachedJson = compileJsonTokens();
        cachedKotlin = compileKotlinTokens();
        const duration = (performance.now() - t0).toFixed(2);
        console.log(`[ColorWing LiveSync] Recompiled in ${duration}ms, broadcasting to ${clients.length} clients`);

        const payload = JSON.stringify({
          type: 'TOKENS_UPDATED',
          timestamp: Date.now(),
          css: cachedCss
        });

        clients.forEach((res) => {
          res.write(`data: ${payload}\n\n`);
        });
      } catch (err) {
        console.error('[ColorWing LiveSync] Compilation error:', err);
      }
    });
  }

  const server = http.createServer((req, res) => {
    // Enable full CORS for any web app / local dev origin
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }

    const url = req.url?.split('?')[0];

    // 1. Live CSS Endpoint
    if (url === '/tokens.css' || url === '/colorwing.css') {
      res.writeHead(200, { 'Content-Type': 'text/css; charset=utf-8' });
      res.end(cachedCss);
      return;
    }

    // 2. Live JSON Endpoint
    if (url === '/tokens.json') {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(cachedJson);
      return;
    }

    // 3. Live Kotlin Tokens Endpoint
    if (url === '/tokens.kt' || url === '/ColorwingTokens.kt') {
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(cachedKotlin);
      return;
    }

    // 4. Live Sync Drop-in Client Script
    if (url === '/live-sync.js') {
      const clientScript = `
(function() {
  console.log('[ColorWing LiveSync] Connecting to ${req.headers.host || 'localhost:3333'}...');
  const es = new EventSource('http://${req.headers.host || 'localhost:' + port}/events');
  es.onmessage = function(e) {
    try {
      const data = JSON.parse(e.data);
      if (data.type === 'TOKENS_UPDATED') {
        let tag = document.getElementById('cw-live-styles');
        if (!tag) {
          tag = document.createElement('style');
          tag.id = 'cw-live-styles';
          document.head.appendChild(tag);
        }
        tag.textContent = data.css;
        console.log('[ColorWing LiveSync] Styles hot-swapped in real-time');
      }
    } catch(err) { console.error(err); }
  };
})();
`;
      res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' });
      res.end(clientScript);
      return;
    }

    // 5. SSE Events Stream
    if (url === '/events') {
      res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      });
      res.write('\n');
      clients.push(res);
      req.on('close', () => {
        clients = clients.filter((c) => c !== res);
      });
      return;
    }

    // 6. Interactive Token Dashboard & Playground
    if (url === '/' || url === '/index.html') {
      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ColorWing Design System • Live Dashboard</title>
  <link rel="stylesheet" href="/tokens.css">
  <script src="/live-sync.js"></script>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background: var(--cw-bg);
      color: var(--cw-text-primary);
      margin: 0;
      padding: 32px 20px;
      display: flex;
      justify-content: center;
    }
    .wrap { max-width: 800px; width: 100%; }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      border-radius: 9999px;
      background: rgba(34, 197, 94, 0.15);
      color: #22C55E;
      font-size: 12px;
      font-weight: 700;
    }
    .swatch-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 16px;
      margin: 24px 0;
    }
    .swatch {
      background: var(--cw-surface-card);
      border: 1px solid var(--cw-border);
      border-radius: 12px;
      padding: 12px;
    }
    .color-box {
      height: 48px;
      border-radius: 8px;
      margin-bottom: 8px;
      border: 1px solid rgba(255,255,255,0.1);
    }
  </style>
</head>
<body>
  <div class="wrap">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <div>
        <h1 style="margin:0; font-size:28px;">ColorWing Design System</h1>
        <p style="color:var(--cw-text-secondary); margin:4px 0 0;">Centralized Cross-Platform Styling Engine</p>
      </div>
      <span class="badge">● Live Sync Active (Port ${port})</span>
    </div>

    <div class="swatch-grid">
      <div class="swatch">
        <div class="color-box" style="background:var(--cw-primary);"></div>
        <strong style="display:block; font-size:13px;">Primary: Black</strong>
        <span style="font-size:12px; color:var(--cw-text-muted);">#000000 (OLED Native)</span>
      </div>
      <div class="swatch">
        <div class="color-box" style="background:var(--cw-secondary);"></div>
        <strong style="display:block; font-size:13px; color:#111;">Secondary: White</strong>
        <span style="font-size:12px; color:var(--cw-text-muted);">#FFFFFF</span>
      </div>
      <div class="swatch">
        <div class="color-box" style="background:var(--cw-tertiary);"></div>
        <strong style="display:block; font-size:13px;">Tertiary: Red</strong>
        <span style="font-size:12px; color:var(--cw-text-muted);">#D90429 (NeTuArk Brand)</span>
      </div>
      <div class="swatch">
        <div class="color-box" style="background:var(--cw-ambient-color);"></div>
        <strong style="display:block; font-size:13px;">Time Vibe</strong>
        <span style="font-size:12px; color:var(--cw-text-muted);">Dynamic Ambient Tone</span>
      </div>
    </div>

    <div style="background:var(--cw-surface); padding:20px; border-radius:16px; border:1px solid var(--cw-border);">
      <h3 style="margin-top:0;">Endpoints</h3>
      <ul style="line-height:1.8; color:var(--cw-text-secondary); padding-left:20px;">
        <li>CSS: <code><a href="/tokens.css" style="color:var(--cw-tertiary);">/tokens.css</a></code></li>
        <li>JSON: <code><a href="/tokens.json" style="color:var(--cw-tertiary);">/tokens.json</a></code></li>
        <li>Kotlin (Android): <code><a href="/tokens.kt" style="color:var(--cw-tertiary);">/tokens.kt</a></code></li>
        <li>Realtime SSE: <code><a href="/events" style="color:var(--cw-tertiary);">/events</a></code></li>
      </ul>
    </div>
  </div>
</body>
</html>`;
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(html);
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  });

  server.listen(port, () => {
    console.log(`[ColorWing LiveSync] Server listening on http://localhost:${port}`);
    console.log(`  -> CSS:    http://localhost:${port}/tokens.css`);
    console.log(`  -> JSON:   http://localhost:${port}/tokens.json`);
    console.log(`  -> Kotlin: http://localhost:${port}/tokens.kt`);
    console.log(`  -> Script: http://localhost:${port}/live-sync.js`);
  });

  return server;
}

export default { startLiveServer };
