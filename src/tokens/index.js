/**
 * ColorWing Centralized Design Tokens
 * Single source of truth across Web and Android
 */

import colors from './colors.js';
import timeVibes, { getTimeVibeForHour } from './timeVibe.js';
import bubbles from './bubbles.js';
import glass from './glass.js';
import components from './components.js';

export const tokens = {
  meta: {
    system: 'ColorWing',
    version: '1.0.0',
    description: 'Centralized Cross-Platform Design System for Web & Android'
  },
  colors,
  timeVibes,
  bubbles,
  glass,
  components
};

export { colors, timeVibes, getTimeVibeForHour, bubbles, glass, components };
export default tokens;
