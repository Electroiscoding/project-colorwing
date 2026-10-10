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
  },

  liquidGlass: {
    backdropFilter: 'blur(16px) saturate(180%) contrast(105%)',
    sent: {
      gradient: 'linear-gradient(135deg, rgba(200, 33, 40, 0.82) 0%, rgba(160, 24, 48, 0.74) 35%, rgba(109, 22, 74, 0.68) 70%, rgba(80, 31, 80, 0.75) 100%)',
      overlayBrush: 'linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.15) 100%)',
      border: '1.5px solid rgba(255, 255, 255, 0.25)',
      boxShadow: 'inset 0 1.5px 0 0 rgba(255, 255, 255, 0.75), inset 0 -1.5px 0 0 rgba(255, 255, 255, 0.35), inset -3px 0 0 0 #E65100, 0 8px 32px rgba(0, 0, 0, 0.55)',
      topHighlight: 'rgba(255, 255, 255, 0.85)',
      edgeGlowAmber: '#E65100'
    },
    received: {
      gradient: 'linear-gradient(135deg, rgba(15, 19, 28, 0.78) 0%, rgba(24, 29, 40, 0.68) 40%, rgba(29, 29, 44, 0.72) 80%, rgba(15, 19, 28, 0.78) 100%)',
      overlayBrush: 'linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 25%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.15) 100%)',
      border: '1.5px solid rgba(255, 255, 255, 0.22)',
      boxShadow: 'inset 0 1.5px 0 0 rgba(255, 255, 255, 0.60), inset 0 -1.5px 0 0 rgba(255, 255, 255, 0.25), 0 8px 32px rgba(0, 0, 0, 0.50)',
      topHighlight: 'rgba(255, 255, 255, 0.65)'
    },
    beetaAi: {
      gradient: 'linear-gradient(135deg, rgba(26, 26, 46, 0.80) 0%, rgba(22, 33, 62, 0.75) 100%)',
      border: '1.5px solid rgba(129, 140, 248, 0.45)',
      boxShadow: 'inset 0 1.5px 0 0 rgba(255, 255, 255, 0.75), inset 0 -1.5px 0 0 rgba(129, 140, 248, 0.35), 0 8px 32px rgba(99, 102, 241, 0.30)',
      topHighlight: 'rgba(255, 255, 255, 0.75)'
    }
  }
};

export default bubbles;
