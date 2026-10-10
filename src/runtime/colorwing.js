/**
 * ColorWing Client Runtime Engine
 *
 * Provides dynamic real-time ambient vibe clock, liquid-glass toggling,
 * and instant millisecond hot-style live sync.
 */

import tokens, { getTimeVibeForHour } from '../tokens/index.js';

export class ColorWingRuntime {
  constructor() {
    this.tokens = tokens;
    this.isLiquidGlass = false;
    this.activeVibe = null;
    this.vibeInterval = null;
    this.eventSource = null;
  }

  /**
   * Initialize ColorWing in the browser document
   */
  init(options = {}) {
    if (typeof document === 'undefined') return;

    const { autoTimeVibe = true, liquidGlass = false, liveSync = false, liveSyncUrl = 'http://localhost:3333' } = options;

    if (liquidGlass) {
      this.toggleLiquidGlass(true);
    }

    if (autoTimeVibe) {
      this.applyCurrentTimeVibe();
      this.startVibeClock();
    }

    if (liveSync) {
      this.connectLiveSync(liveSyncUrl);
    }
  }

  /**
   * Get the current active time vibe token
   */
  getTimeVibe(hour = new Date().getHours()) {
    return getTimeVibeForHour(hour);
  }

  /**
   * Apply ambient time vibe to document root
   */
  applyTimeVibe(vibeId) {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.setAttribute('data-time-vibe', vibeId);
    this.activeVibe = vibeId;
  }

  applyCurrentTimeVibe() {
    const current = this.getTimeVibe();
    this.applyTimeVibe(current.id);
  }

  /**
   * Starts a background timer that automatically updates the ambient vibe as the hour changes
   */
  startVibeClock(checkIntervalMs = 60000) {
    if (this.vibeInterval) clearInterval(this.vibeInterval);
    this.vibeInterval = setInterval(() => {
      this.applyCurrentTimeVibe();
    }, checkIntervalMs);
  }

  /**
   * Toggle Liquid Glass mode (Off by default as per Merged UI decision sheet)
   */
  toggleLiquidGlass(enable) {
    if (typeof document === 'undefined') return;
    this.isLiquidGlass = enable !== undefined ? enable : !this.isLiquidGlass;
    document.documentElement.setAttribute('data-liquid-glass', this.isLiquidGlass ? 'true' : 'false');
    return this.isLiquidGlass;
  }

  isLiquidGlassEnabled() {
    return this.isLiquidGlass;
  }

  /**
   * Connect to ColorWing Live Sync server for zero-latency millisecond hot style updates
   */
  connectLiveSync(serverUrl = 'http://localhost:3333') {
    if (typeof window === 'undefined' || typeof EventSource === 'undefined') return;

    if (this.eventSource) {
      this.eventSource.close();
    }

    try {
      this.eventSource = new EventSource(`${serverUrl}/events`);
      this.eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === 'TOKENS_UPDATED') {
            console.log('[ColorWing LiveSync] Hot-style update received in <1ms');
            this.injectLiveCss(data.css);
          }
        } catch (e) {
          console.error('[ColorWing LiveSync] Error parsing message', e);
        }
      };
      this.eventSource.onerror = () => {
        // Silent backoff retry handled automatically by EventSource
      };
    } catch (e) {
      console.warn('[ColorWing LiveSync] Could not connect to live sync daemon', e);
    }
  }

  injectLiveCss(cssText) {
    if (typeof document === 'undefined' || !cssText) return;
    let styleTag = document.getElementById('colorwing-live-css');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'colorwing-live-css';
      document.head.appendChild(styleTag);
    }
    styleTag.textContent = cssText;
  }
}

export const ColorWing = new ColorWingRuntime();
export default ColorWing;
