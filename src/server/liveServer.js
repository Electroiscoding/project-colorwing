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
import { compileKotlinTokens, compileKotlinTheme, compileKotlinComponents } from '../compiler/kotlinCompiler.js';
import { compileTailwindPreset } from '../compiler/tailwindCompiler.js';
import { buildAll } from '../compiler/index.js';
import tokens from '../tokens/index.js';

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
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
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

    // 4. Live Tailwind Preset Endpoint
    if (url === '/tailwind-preset.js') {
      res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' });
      res.end(compileTailwindPreset());
      return;
    }

    // 5. Live Sync Drop-in Client Script
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

    // 6. SSE Events Stream
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

    // 7. Interactive Token Studio & Living Playground
    if (url === '/' || url === '/index.html') {
      const html = `<!DOCTYPE html>
<html lang="en" data-time-vibe="morning" data-liquid-glass="false">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ColorWing Design System • Live Studio & Token Dashboard</title>
  <link rel="stylesheet" href="/tokens.css">
  <script src="/live-sync.js"></script>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", sans-serif;
      background: var(--cw-bg);
      color: var(--cw-text-primary);
      margin: 0;
      padding: 24px 20px;
      display: flex;
      justify-content: center;
    }
    .wrap { max-width: 1040px; width: 100%; }
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
    .studio-grid {
      display: grid;
      grid-template-columns: 340px 1fr;
      gap: 24px;
      margin-top: 24px;
    }
    @media (max-width: 860px) {
      .studio-grid { grid-template-columns: 1fr; }
    }
    .swatch-card {
      background: var(--cw-surface-card);
      border: 1px solid var(--cw-border);
      border-radius: 12px;
      padding: 12px;
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 10px;
    }
    .color-pill {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.15);
      flex-shrink: 0;
    }
    .code-tab {
      padding: 8px 16px;
      background: transparent;
      border: none;
      color: var(--cw-text-muted);
      font-weight: 600;
      font-size: 13px;
      cursor: pointer;
      border-bottom: 2px solid transparent;
    }
    .code-tab.active {
      color: #fff;
      border-bottom-color: var(--cw-tertiary);
    }
    pre {
      background: #08080C;
      padding: 16px;
      border-radius: 12px;
      border: 1px solid var(--cw-border);
      font-size: 12.5px;
      line-height: 1.5;
      overflow-x: auto;
      margin: 0;
      color: #E2E8F0;
    }
  </style>
</head>
<body>
  <div class="wrap">
    
    <!-- Top Bar -->
    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
      <div>
        <h1 style="margin:0; font-size:26px; font-weight:800; letter-spacing:-0.5px;">🪽 ColorWing Studio</h1>
        <p style="color:var(--cw-text-secondary); margin:4px 0 0; font-size:14px;">
          Primary: <strong style="color:#fff">Black</strong> | Secondary: <strong style="color:#fff">White</strong> | Tertiary: <strong style="color:var(--cw-tertiary)">Red (#D90429)</strong>
        </p>
      </div>
      <div style="display:flex; gap:10px; align-items:center;">
        <span class="badge">● Live Hot-Sync (Port ${port})</span>
      </div>
    </div>

    <!-- Main Studio Grid -->
    <div class="studio-grid">
      
      <!-- Left Column: Token Explorer -->
      <div>
        <h3 style="margin:0 0 14px; font-size:15px; text-transform:uppercase; letter-spacing:0.5px; color:var(--cw-text-muted);">Core Hierarchy Tokens</h3>
        
        <div class="swatch-card">
          <div class="color-pill" style="background:var(--cw-primary);"></div>
          <div>
            <strong style="display:block; font-size:14px;">Primary: Black</strong>
            <span style="font-size:12px; color:var(--cw-text-muted);">#000000 (OLED Pitch Black)</span>
          </div>
        </div>

        <div class="swatch-card">
          <div class="color-pill" style="background:var(--cw-secondary);"></div>
          <div>
            <strong style="display:block; font-size:14px;">Secondary: White</strong>
            <span style="font-size:12px; color:var(--cw-text-muted);">#FFFFFF (High-Contrast)</span>
          </div>
        </div>

        <div class="swatch-card">
          <div class="color-pill" style="background:var(--cw-tertiary);"></div>
          <div>
            <strong style="display:block; font-size:14px;">Tertiary: Red</strong>
            <span style="font-size:12px; color:var(--cw-text-muted);">#D90429 (NeTuArk Brand)</span>
          </div>
        </div>

        <div class="swatch-card">
          <div class="color-pill" style="background:var(--cw-ambient-color);"></div>
          <div>
            <strong style="display:block; font-size:14px;">Ambient Tone</strong>
            <span style="font-size:12px; color:var(--cw-text-muted);">Dynamic Time-Based Vibe</span>
          </div>
        </div>

        <h3 style="margin:20px 0 10px; font-size:15px; text-transform:uppercase; letter-spacing:0.5px; color:var(--cw-text-muted);">Live Endpoints</h3>
        <div style="background:var(--cw-surface); padding:14px; border-radius:12px; border:1px solid var(--cw-border); font-size:13px; line-height:1.8;">
          <div>• CSS: <code><a href="/tokens.css" style="color:var(--cw-tertiary);">/tokens.css</a></code></div>
          <div>• JSON: <code><a href="/tokens.json" style="color:var(--cw-tertiary);">/tokens.json</a></code></div>
          <div>• Kotlin: <code><a href="/tokens.kt" style="color:var(--cw-tertiary);">/tokens.kt</a></code></div>
          <div>• SSE Stream: <code><a href="/events" style="color:var(--cw-tertiary);">/events</a></code></div>
        </div>
      </div>

      <!-- Right Column: Interactive Component Preview & Code Export -->
      <div>
        
        <!-- Interactive Preview Box -->
        <div class="cw-glass-panel" style="padding:20px; margin-bottom:20px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
            <strong style="font-size:15px;">Live Component Preview</strong>
            <span class="badge" style="background:rgba(217,4,41,0.15); color:var(--cw-tertiary);">Twins Parity</span>
          </div>

          <!-- Chat Top Bar -->
          <div class="cw-chat-header" style="border-radius:12px; border:1px solid var(--cw-border); margin-bottom:14px;">
            <div style="display:flex; align-items:center; gap:10px;">
              <div class="cw-avatar cw-avatar-md">
                NW
                <div class="cw-avatar-status"></div>
              </div>
              <div>
                <div style="font-weight:700; font-size:14px;">NeTuArk Core</div>
                <div style="font-size:11px; color:var(--cw-success);">Online</div>
              </div>
            </div>
            <div style="display:flex; gap:8px;">
              <span class="cw-badge cw-badge-admin">ADMIN</span>
              <span class="cw-badge cw-badge-ai">AI TWINS</span>
            </div>
          </div>

          <!-- Chat Bubbles -->
          <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:14px;">
            <div class="cw-bubble cw-bubble-received" style="max-width:80%;">
              Centralized tokens prevent design drift across Web and APK.
            </div>
            <div class="cw-bubble cw-bubble-sent" style="max-width:80%; align-self:flex-end;">
              One variable update takes place everywhere in the same millisecond!
            </div>
          </div>

          <!-- Post Box -->
          <div class="cw-post-box" style="margin:0;">
            <input class="cw-post-input" placeholder="Sequential flow with red plus button...">
            <button class="cw-post-plus-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
            </button>
          </div>
        </div>

        <!-- Code Exporter Tabs -->
        <div>
          <div style="display:flex; border-bottom:1px solid var(--cw-border); margin-bottom:12px;">
            <button class="code-tab active" onclick="showTab('css')">CSS (:root)</button>
            <button class="code-tab" onclick="showTab('kotlin')">Jetpack Compose</button>
            <button class="code-tab" onclick="showTab('tailwind')">Tailwind Preset</button>
          </div>

          <div id="tab-css">
            <pre><code>:root {
  --cw-primary: #000000;
  --cw-secondary: #FFFFFF;
  --cw-tertiary: #D90429;
  --cw-bg: #000000;
  --cw-surface: #12131C;
  --cw-card: #111111;
  --cw-bubble-sent-bg: linear-gradient(135deg, #D90429, #9B021D);
}</code></pre>
          </div>

          <div id="tab-kotlin" style="display:none;">
            <pre><code>ColorwingTheme(isLiquidGlass = false) {
    ColorwingChatTopBar(
        title = "NeTuArk",
        statusText = "Online",
        isOnline = true,
        showCallButton = true
    )
    ColorwingPostBox(onPostClick = { /* create */ })
}</code></pre>
          </div>

          <div id="tab-tailwind" style="display:none;">
            <pre><code>module.exports = {
  presets: [require('@netuark/colorwing/tailwind')],
  // Use bg-cw-primary, bg-cw-tertiary, rounded-cw-bubble
};</code></pre>
          </div>
        </div>

      </div>

    </div>

  </div>

  <script>
    function showTab(name) {
      document.querySelectorAll('.code-tab').forEach(b => b.classList.remove('active'));
      event.target.classList.add('active');
      document.getElementById('tab-css').style.display = name === 'css' ? 'block' : 'none';
      document.getElementById('tab-kotlin').style.display = name === 'kotlin' ? 'block' : 'none';
      document.getElementById('tab-tailwind').style.display = name === 'tailwind' ? 'block' : 'none';
    }
  </script>
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
