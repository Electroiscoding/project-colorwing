/**
 * ColorWing Client Runtime Engine
 *
 * Provides dynamic real-time ambient vibe clock, liquid-glass toggling,
 * 100% local-first preference persistence (localStorage / DataStore),
 * first-launch onboarding modal, and instant millisecond hot-style live sync.
 */

import tokens, { getTimeVibeForHour } from '../tokens/index.js';

export const STORAGE_KEYS = {
  PREFERENCES: 'cw_user_preferences',
  ONBOARDED: 'cw_has_onboarded'
};

export const DEFAULT_PREFERENCES = {
  mode: 'default', // 'default' (Static pitch black) | 'custom'
  liquidGlass: false, // Default static: zero blur lag, maximum FPS
  autoTimeVibe: true, // Sync with actual day/night clock
  manualVibe: 'morning'
};

export class ColorWingRuntime {
  constructor() {
    this.tokens = tokens;
    this.preferences = { ...DEFAULT_PREFERENCES };
    this.isLiquidGlass = false;
    this.activeVibe = null;
    this.vibeInterval = null;
    this.eventSource = null;
  }

  /**
   * Initialize ColorWing in the browser document
   * Reads from localStorage, applies preferences immediately, and handles first-launch
   */
  init(options = {}) {
    if (typeof document === 'undefined') return;

    const {
      autoOnboarding = false,
      liveSync = false,
      liveSyncUrl = 'http://localhost:3333'
    } = options;

    // 1. Load locally stored preferences
    this.loadPreferences();

    // 2. Apply preferences directly to DOM
    this.applyPreferences(this.preferences);

    // 3. Connect live sync if in local dev
    if (liveSync) {
      this.connectLiveSync(liveSyncUrl);
    }

    // 4. Trigger first-time onboarding popup if not onboarded yet
    if (autoOnboarding && this.isFirstLaunch()) {
      this.showOnboardingModal();
    }
  }

  /**
   * Check if user is launching for the first time
   */
  isFirstLaunch() {
    if (typeof window === 'undefined' || !window.localStorage) return false;
    return window.localStorage.getItem(STORAGE_KEYS.ONBOARDED) !== 'true';
  }

  /**
   * Load preferences from local storage
   */
  loadPreferences() {
    if (typeof window === 'undefined' || !window.localStorage) return this.preferences;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEYS.PREFERENCES);
      if (stored) {
        this.preferences = { ...DEFAULT_PREFERENCES, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.warn('[ColorWing] Error reading localStorage preferences:', e);
    }
    return this.preferences;
  }

  /**
   * Save preferences to local storage and update DOM
   */
  savePreferences(newPrefs) {
    this.preferences = { ...this.preferences, ...newPrefs };
    if (typeof window !== 'undefined' && window.localStorage) {
      try {
        window.localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(this.preferences));
      } catch (e) {
        console.warn('[ColorWing] Error saving to localStorage:', e);
      }
    }
    this.applyPreferences(this.preferences);

    // Dispatch event so app components can react
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('colorwing:preferences-changed', {
        detail: this.preferences
      }));
    }
    return this.preferences;
  }

  /**
   * Apply user preferences to the DOM
   */
  applyPreferences(prefs = this.preferences) {
    if (typeof document === 'undefined') return;

    // A. Liquid Glass toggle
    this.toggleLiquidGlass(Boolean(prefs.liquidGlass));

    // B. Time Vibe
    if (prefs.autoTimeVibe) {
      this.applyCurrentTimeVibe();
      this.startVibeClock();
    } else {
      if (this.vibeInterval) clearInterval(this.vibeInterval);
      this.applyTimeVibe(prefs.manualVibe || 'morning');
    }
  }

  /**
   * Complete first-launch onboarding
   */
  completeOnboarding(mode = 'default', customSettings = {}) {
    if (mode === 'default') {
      this.savePreferences({
        mode: 'default',
        liquidGlass: false,
        autoTimeVibe: true
      });
    } else {
      this.savePreferences({
        mode: 'custom',
        ...customSettings
      });
    }

    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(STORAGE_KEYS.ONBOARDED, 'true');
    }
  }

  /**
   * Reset onboarding flag (useful for testing)
   */
  resetOnboarding() {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(STORAGE_KEYS.ONBOARDED);
      window.localStorage.removeItem(STORAGE_KEYS.PREFERENCES);
    }
    this.preferences = { ...DEFAULT_PREFERENCES };
    this.applyPreferences(this.preferences);
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
      if (this.preferences.autoTimeVibe) {
        this.applyCurrentTimeVibe();
      }
    }, checkIntervalMs);
  }

  /**
   * Toggle Liquid Glass mode (Off by default as per Merged UI decision sheet)
   */
  toggleLiquidGlass(enable) {
    if (typeof document === 'undefined') return;
    this.isLiquidGlass = enable !== undefined ? enable : !this.isLiquidGlass;
    this.preferences.liquidGlass = this.isLiquidGlass;
    document.documentElement.setAttribute('data-liquid-glass', this.isLiquidGlass ? 'true' : 'false');
    return this.isLiquidGlass;
  }

  isLiquidGlassEnabled() {
    return this.isLiquidGlass;
  }

  /**
   * Mounts the First-Launch Onboarding Modal
   */
  showOnboardingModal(options = {}) {
    if (typeof document === 'undefined') return;
    const existing = document.getElementById('cw-onboarding-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'cw-onboarding-overlay';
    overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 99999;
      background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px);
      display: flex; align-items: center; justify-content: center;
      padding: 16px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `;

    overlay.innerHTML = `
      <div style="background: #111116; border: 1px solid rgba(255,255,255,0.12); border-radius: 24px; max-width: 500px; width: 100%; padding: 32px 28px; box-shadow: 0 20px 50px rgba(0,0,0,0.8); color: #fff;">
        <div style="text-align: center; margin-bottom: 24px;">
          <div style="font-size: 38px; margin-bottom: 8px;">🪽</div>
          <h2 style="margin: 0; font-size: 22px; font-weight: 800;">Choose Your Experience</h2>
          <p style="margin: 8px 0 0; color: rgba(255,255,255,0.65); font-size: 13.5px; line-height: 1.5;">
            Select your preferred display mode. Stored 100% locally on your device — modify anytime in Settings.
          </p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px;">
          <!-- Option 1: Default -->
          <div id="cw-opt-default" style="border: 2px solid #D90429; background: rgba(217,4,41,0.08); border-radius: 16px; padding: 18px 20px; cursor: pointer; transition: all 0.2s ease;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-weight: 700; font-size: 16px;">1. Default Experience</span>
              <span style="background: #D90429; color: #fff; font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 9999px;">RECOMMENDED</span>
            </div>
            <p style="margin: 0; color: rgba(255,255,255,0.70); font-size: 13px; line-height: 1.4;">
              Native OLED pitch-black, clean static flow, zero liquid-glass lag, maximum battery efficiency.
            </p>
          </div>

          <!-- Option 2: Custom -->
          <div id="cw-opt-custom" style="border: 1px solid rgba(255,255,255,0.15); background: rgba(255,255,255,0.03); border-radius: 16px; padding: 18px 20px; cursor: pointer; transition: all 0.2s ease;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-weight: 700; font-size: 16px;">2. Custom Experience</span>
              <span style="color: rgba(255,255,255,0.50); font-size: 12px;">PERSONALIZE</span>
            </div>
            <p style="margin: 0; color: rgba(255,255,255,0.70); font-size: 13px; line-height: 1.4;">
              Toggle Liquid Glass blur, pick ambient vibe mode, and adjust display tuning.
            </p>
            <div id="cw-custom-controls" style="display: none; margin-top: 14px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.10);">
              <label style="display: flex; align-items: center; justify-content: space-between; font-size: 13px; margin-bottom: 10px;">
                <span>Liquid Glass Effect:</span>
                <input type="checkbox" id="cw-toggle-glass" style="transform: scale(1.2);">
              </label>
              <label style="display: flex; align-items: center; justify-content: space-between; font-size: 13px;">
                <span>Ambient Vibe:</span>
                <select id="cw-select-vibe" style="background: #1e1e24; color: #fff; border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; padding: 4px 8px; font-size: 12px;">
                  <option value="auto">Auto (Clock Sync)</option>
                  <option value="morning">Morning Warm</option>
                  <option value="day">Day Deep Blue</option>
                  <option value="sunset">Sunset Crimson</option>
                  <option value="night">Night Cyber</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <button id="cw-confirm-btn" style="width: 100%; background: #D90429; color: #fff; border: none; padding: 14px; border-radius: 9999px; font-weight: 700; font-size: 15px; cursor: pointer; transition: background 0.2s ease;">
          Continue with Default (Fast)
        </button>
      </div>
    `;

    document.body.appendChild(overlay);

    let selectedMode = 'default';
    const optDefault = overlay.querySelector('#cw-opt-default');
    const optCustom = overlay.querySelector('#cw-opt-custom');
    const customControls = overlay.querySelector('#cw-custom-controls');
    const confirmBtn = overlay.querySelector('#cw-confirm-btn');
    const toggleGlass = overlay.querySelector('#cw-toggle-glass');
    const selectVibe = overlay.querySelector('#cw-select-vibe');

    optDefault.onclick = () => {
      selectedMode = 'default';
      optDefault.style.border = '2px solid #D90429';
      optDefault.style.background = 'rgba(217,4,41,0.08)';
      optCustom.style.border = '1px solid rgba(255,255,255,0.15)';
      optCustom.style.background = 'rgba(255,255,255,0.03)';
      customControls.style.display = 'none';
      confirmBtn.textContent = 'Continue with Default (Fast)';
    };

    optCustom.onclick = () => {
      selectedMode = 'custom';
      optCustom.style.border = '2px solid #D90429';
      optCustom.style.background = 'rgba(217,4,41,0.08)';
      optDefault.style.border = '1px solid rgba(255,255,255,0.15)';
      optDefault.style.background = 'rgba(255,255,255,0.03)';
      customControls.style.display = 'block';
      confirmBtn.textContent = 'Save Custom Preferences';
    };

    confirmBtn.onclick = () => {
      if (selectedMode === 'default') {
        this.completeOnboarding('default');
      } else {
        const isGlass = toggleGlass.checked;
        const vibeVal = selectVibe.value;
        this.completeOnboarding('custom', {
          liquidGlass: isGlass,
          autoTimeVibe: vibeVal === 'auto',
          manualVibe: vibeVal === 'auto' ? 'morning' : vibeVal
        });
      }
      overlay.remove();
      if (typeof options.onComplete === 'function') {
        options.onComplete(this.preferences);
      }
    };
  }

  /**
   * Mounts the Settings Preference Sheet (Modify anytime)
   */
  showSettingsModal() {
    if (typeof document === 'undefined') return;
    const existing = document.getElementById('cw-settings-overlay');
    if (existing) existing.remove();

    const prefs = this.loadPreferences();

    const overlay = document.createElement('div');
    overlay.id = 'cw-settings-overlay';
    overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 99999;
      background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(6px);
      display: flex; align-items: center; justify-content: center;
      padding: 16px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `;

    overlay.innerHTML = `
      <div style="background: #111116; border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; max-width: 440px; width: 100%; padding: 26px; box-shadow: 0 20px 40px rgba(0,0,0,0.8); color: #fff;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <h3 style="margin: 0; font-size: 18px; font-weight: 700;">Display & Token Settings</h3>
          <button id="cw-close-settings" style="background: transparent; border: none; color: #fff; font-size: 20px; cursor: pointer;">✕</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
            <div>
              <div style="font-weight: 600; font-size: 14px;">Liquid Glass Effect</div>
              <div style="font-size: 12px; color: rgba(255,255,255,0.5);">Heavy physics blur (toggle off if lagging)</div>
            </div>
            <input type="checkbox" id="cw-settings-glass" ${prefs.liquidGlass ? 'checked' : ''} style="transform: scale(1.3);">
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: rgba(255,255,255,0.03); border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
            <div>
              <div style="font-weight: 600; font-size: 14px;">Ambient Vibe</div>
              <div style="font-size: 12px; color: rgba(255,255,255,0.5);">Dynamic background tint</div>
            </div>
            <select id="cw-settings-vibe" style="background: #1e1e24; color: #fff; border: 1px solid rgba(255,255,255,0.2); border-radius: 6px; padding: 6px 8px; font-size: 13px;">
              <option value="auto" ${prefs.autoTimeVibe ? 'selected' : ''}>Auto (Clock)</option>
              <option value="morning" ${!prefs.autoTimeVibe && prefs.manualVibe === 'morning' ? 'selected' : ''}>Morning</option>
              <option value="day" ${!prefs.autoTimeVibe && prefs.manualVibe === 'day' ? 'selected' : ''}>Day</option>
              <option value="sunset" ${!prefs.autoTimeVibe && prefs.manualVibe === 'sunset' ? 'selected' : ''}>Sunset</option>
              <option value="night" ${!prefs.autoTimeVibe && prefs.manualVibe === 'night' ? 'selected' : ''}>Night</option>
            </select>
          </div>
        </div>

        <div style="display: flex; gap: 10px;">
          <button id="cw-reset-defaults-btn" style="flex: 1; background: transparent; border: 1px solid rgba(255,255,255,0.2); color: #fff; padding: 10px; border-radius: 9999px; font-size: 13px; cursor: pointer;">
            Reset to Default
          </button>
          <button id="cw-save-settings-btn" style="flex: 1; background: #D90429; border: none; color: #fff; padding: 10px; border-radius: 9999px; font-weight: 700; font-size: 13px; cursor: pointer;">
            Apply & Save
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector('#cw-close-settings').onclick = () => overlay.remove();

    overlay.querySelector('#cw-reset-defaults-btn').onclick = () => {
      this.completeOnboarding('default');
      overlay.remove();
    };

    overlay.querySelector('#cw-save-settings-btn').onclick = () => {
      const isGlass = overlay.querySelector('#cw-settings-glass').checked;
      const vibe = overlay.querySelector('#cw-settings-vibe').value;
      this.savePreferences({
        mode: 'custom',
        liquidGlass: isGlass,
        autoTimeVibe: vibe === 'auto',
        manualVibe: vibe === 'auto' ? 'morning' : vibe
      });
      overlay.remove();
    };
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
