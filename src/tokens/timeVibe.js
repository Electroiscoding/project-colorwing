/**
 * ColorWing Centralized Design System: Time-Based Ambient Vibe
 *
 * Provides the dynamic atmospheric color schedule extracted from Android Theme.kt
 * and aligned for Web CSS Custom Properties.
 */

export const timeVibes = {
  morning: {
    id: 'morning',
    name: 'Morning Deep Warm',
    startHour: 6,
    endHour: 10,
    ambientColor: '#381B09',
    ambientColorAlpha: 'rgba(56, 27, 9, 0.45)',
    gradient: 'linear-gradient(135deg, #381B09 0%, #1A0D04 100%)',
    bubbleGlow: 'rgba(230, 81, 0, 0.35)'
  },
  day: {
    id: 'day',
    name: 'Day Deep Cool',
    startHour: 11,
    endHour: 16,
    ambientColor: '#111E2E',
    ambientColorAlpha: 'rgba(17, 30, 46, 0.45)',
    gradient: 'linear-gradient(135deg, #111E2E 0%, #080E17 100%)',
    bubbleGlow: 'rgba(79, 70, 229, 0.30)'
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset Deep Dusk',
    startHour: 17,
    endHour: 19,
    ambientColor: '#2E121B',
    ambientColorAlpha: 'rgba(46, 18, 27, 0.45)',
    gradient: 'linear-gradient(135deg, #2E121B 0%, #15080C 100%)',
    bubbleGlow: 'rgba(217, 4, 41, 0.35)'
  },
  night: {
    id: 'night',
    name: 'Night Cosmic Purple',
    startHour: 20,
    endHour: 5,
    ambientColor: '#0F0A1C',
    ambientColorAlpha: 'rgba(15, 10, 28, 0.45)',
    gradient: 'linear-gradient(135deg, #0F0A1C 0%, #07040E 100%)',
    bubbleGlow: 'rgba(99, 102, 241, 0.30)'
  }
};

/**
 * Returns the active time vibe token for a given hour (0-23).
 * Defaults to current local hour if not passed.
 */
export function getTimeVibeForHour(hour = new Date().getHours()) {
  if (hour >= 6 && hour <= 10) return timeVibes.morning;
  if (hour >= 11 && hour <= 16) return timeVibes.day;
  if (hour >= 17 && hour <= 19) return timeVibes.sunset;
  return timeVibes.night;
}

export default timeVibes;
