/**
 * ColorWing Centralized Design System: Chat Bubbles
 *
 * Merged UI Decision:
 * - APK Shape (14-16px smooth pill with 4px tail corner)
 * - Gradient Brush (Red Crimson to Deep Crimson)
 * - Time-Based Vibe tint overlay
 */

export const bubbles = {
  geometry: {
    borderRadius: '16px',
    borderRadiusSentTail: '4px',
    borderRadiusReceivedTail: '4px',
    paddingY: '8px',
    paddingX: '12px',
    paddingBottom: '6px',
    minWidth: '60px',
    maxWidthPercentMobile: '85%',
    maxWidthPercentDesktop: '70%',
    composeCornerDp: 14,
    composeTailCornerDp: 4
  },

  sent: {
    // Red to Deep Crimson Gradient Brush
    gradient: 'linear-gradient(135deg, #D90429 0%, #C82128 40%, #9B021D 100%)',
    gradientColors: ['#D90429', '#C82128', '#9B021D'],
    color: '#FFFFFF',
    border: 'none',
    boxShadow: '0 3px 12px rgba(217, 4, 41, 0.35)',
    topHighlight: 'rgba(255, 255, 255, 0.15)',
    edgeGlowAmber: '#E65100',
    edgeGlowWidth: '3px'
  },

  received: {
    // Slate Glass / Dark Surface
    background: '#161926',
    gradient: 'linear-gradient(135deg, #161926 0%, #0F131C 100%)',
    gradientColors: ['#161926', '#0F131C'],
    color: '#F1F5F9',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
    topHighlight: 'rgba(255, 255, 255, 0.08)'
  },

  beetaAi: {
    // AI Assistant Bubble (Neon Indigo / Cyber Glow)
    gradient: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)',
    gradientColors: ['#1A1A2E', '#16213E'],
    border: '1px solid rgba(99, 102, 241, 0.30)',
    color: '#FFFFFF',
    badgeColor: '#818CF8'
  }
};

export default bubbles;
