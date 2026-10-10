/**
 * ColorWing Centralized Design System: Motion & Animation Tokens
 *
 * Defines standardized timing, easing curves, and keyframe animations
 * consistent across Web CSS and Android Compose AnimationSpecs.
 */

export const motion = {
  duration: {
    instant: '0ms',
    fast: '150ms',
    normal: '250ms',
    slow: '400ms',
    deliberate: '600ms'
  },

  easing: {
    standard: 'cubic-bezier(0.2, 0.0, 0.0, 1.0)',
    decelerate: 'cubic-bezier(0.0, 0.0, 0.2, 1.0)',
    accelerate: 'cubic-bezier(0.4, 0.0, 1.0, 1.0)',
    springBouncy: 'cubic-bezier(0.34, 1.56, 0.64, 1.0)',
    emphasized: 'cubic-bezier(0.05, 0.7, 0.1, 1.0)'
  },

  composeDampingRatio: {
    lowBouncy: 0.75,
    noBouncy: 1.0
  },

  composeStiffness: {
    mediumLow: 400.0,
    medium: 800.0
  },

  animations: {
    heartPop: 'cw-heart-pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1.0)',
    pulseGlow: 'cw-pulse-glow 2s infinite ease-in-out',
    shimmer: 'cw-shimmer 1.5s infinite linear',
    fadeInScale: 'cw-fade-in-scale 0.2s cubic-bezier(0.2, 0.0, 0.0, 1.0)'
  }
};

export default motion;
