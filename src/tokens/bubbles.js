/**
 * ColorWing Centralized Design System: Chat Bubbles
 *
 * Exact 1:1 Implementation from APK (nta-app-try1/MessageBubble.kt & Theme.kt):
 * - APK Shape (14dp rounded corners with 4dp tail)
 * - Sent: Base Red (#C82128) -> Crimson (#A01830) -> Purple Glow (#6D164A) -> Blue Glow (#501F50)
 * - Received: Slate Base (#0F131C) -> Slate Mid (#181D28) -> Slate Highlight (#1D1D2C)
 * - Aurora Amber Edge line (#E65100)
 * - White 15% Top Highlight specular line
 */

export const bubbles = {
  geometry: {
    borderRadius: '14px',
    borderRadiusSentTail: '4px',
    borderRadiusReceivedTail: '4px',
    paddingY: '8px',
    paddingX: '12px',
    paddingBottom: '6px',
    minWidth: '60px',
    maxWidthPercentMobile: '82%',
    maxWidthPercentDesktop: '70%',
    composeCornerDp: 14,
    composeTailCornerDp: 4
  },

  sent: {
    // Exact APK Base Red -> Crimson -> Purple Glow -> Blue Glow
    gradient: 'linear-gradient(135deg, #C82128 0%, #A01830 35%, #6D164A 70%, #501F50 100%)',
    gradientColors: ['#C82128', '#A01830', '#6D164A', '#501F50'],
    color: '#FFFFFF',
    border: 'none',
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.35), 0 2px 6px rgba(200, 33, 40, 0.25)',
    topHighlight: 'rgba(255, 255, 255, 0.15)',
    edgeGlowAmber: '#E65100',
    edgeGlowWidth: '3px'
  },

  received: {
    // Exact APK Slate Base -> Slate Mid -> Slate Highlight
    background: '#0F131C',
    gradient: 'linear-gradient(135deg, #0F131C 0%, #181D28 40%, #1D1D2C 80%, #0F131C 100%)',
    gradientColors: ['#0F131C', '#181D28', '#1D1D2C', '#0F131C'],
    color: '#F1F5F9',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    boxShadow: '0 3px 12px rgba(0, 0, 0, 0.35)',
    topHighlight: 'rgba(255, 255, 255, 0.10)'
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
