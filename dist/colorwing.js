/**
 * ColorWing Design System (ESM Bundle)
 */
export const tokens = {
  "meta": {
    "system": "ColorWing",
    "version": "1.1.0",
    "description": "Centralized Cross-Platform Design System for Web & Android"
  },
  "colors": {
    "primary": "#000000",
    "secondary": "#FFFFFF",
    "tertiary": "#D90429",
    "tertiaryHover": "#B00321",
    "tertiaryDark": "#9B021D",
    "tertiaryCrimson": "#C82128",
    "tertiaryDeepCrimson": "#7D1225",
    "tertiarySubtle": "rgba(217, 4, 41, 0.15)",
    "tertiaryGlow": "rgba(217, 4, 41, 0.35)",
    "bg": "#000000",
    "bgSoft": "#0A0B10",
    "surface": "#12131C",
    "surfaceElevated": "#161926",
    "surfaceCard": "#111111",
    "inputBg": "#1A1A1A",
    "inputBorder": "rgba(255, 255, 255, 0.12)",
    "borderSubtle": "rgba(255, 255, 255, 0.05)",
    "borderDefault": "rgba(255, 255, 255, 0.08)",
    "borderStrong": "rgba(255, 255, 255, 0.15)",
    "borderSlate": "#1E293B",
    "textPrimary": "#FFFFFF",
    "textSecondary": "rgba(255, 255, 255, 0.70)",
    "textMuted": "rgba(255, 255, 255, 0.50)",
    "textSubtle": "rgba(255, 255, 255, 0.35)",
    "textDisabled": "rgba(255, 255, 255, 0.20)",
    "accentCyan": "#818CF8",
    "accentPurple": "#6366F1",
    "accentBlue": "#4F46E5",
    "success": "#22C55E",
    "warning": "#F59E0B",
    "warningGold": "#F1C40F",
    "danger": "#EF4444"
  },
  "timeVibes": {
    "morning": {
      "id": "morning",
      "name": "Morning Deep Warm",
      "startHour": 6,
      "endHour": 10,
      "ambientColor": "#381B09",
      "ambientColorAlpha": "rgba(56, 27, 9, 0.45)",
      "gradient": "linear-gradient(135deg, #381B09 0%, #1A0D04 100%)",
      "bubbleGlow": "rgba(230, 81, 0, 0.35)"
    },
    "day": {
      "id": "day",
      "name": "Day Deep Cool",
      "startHour": 11,
      "endHour": 16,
      "ambientColor": "#111E2E",
      "ambientColorAlpha": "rgba(17, 30, 46, 0.45)",
      "gradient": "linear-gradient(135deg, #111E2E 0%, #080E17 100%)",
      "bubbleGlow": "rgba(79, 70, 229, 0.30)"
    },
    "sunset": {
      "id": "sunset",
      "name": "Sunset Deep Dusk",
      "startHour": 17,
      "endHour": 19,
      "ambientColor": "#2E121B",
      "ambientColorAlpha": "rgba(46, 18, 27, 0.45)",
      "gradient": "linear-gradient(135deg, #2E121B 0%, #15080C 100%)",
      "bubbleGlow": "rgba(217, 4, 41, 0.35)"
    },
    "night": {
      "id": "night",
      "name": "Night Cosmic Purple",
      "startHour": 20,
      "endHour": 5,
      "ambientColor": "#0F0A1C",
      "ambientColorAlpha": "rgba(15, 10, 28, 0.45)",
      "gradient": "linear-gradient(135deg, #0F0A1C 0%, #07040E 100%)",
      "bubbleGlow": "rgba(99, 102, 241, 0.30)"
    }
  },
  "bubbles": {
    "geometry": {
      "borderRadius": "16px",
      "borderRadiusSentTail": "4px",
      "borderRadiusReceivedTail": "4px",
      "paddingY": "8px",
      "paddingX": "12px",
      "paddingBottom": "6px",
      "minWidth": "60px",
      "maxWidthPercentMobile": "85%",
      "maxWidthPercentDesktop": "70%",
      "composeCornerDp": 14,
      "composeTailCornerDp": 4
    },
    "sent": {
      "gradient": "linear-gradient(135deg, #D90429 0%, #C82128 40%, #9B021D 100%)",
      "gradientColors": [
        "#D90429",
        "#C82128",
        "#9B021D"
      ],
      "color": "#FFFFFF",
      "border": "none",
      "boxShadow": "0 3px 12px rgba(217, 4, 41, 0.35)",
      "topHighlight": "rgba(255, 255, 255, 0.15)",
      "edgeGlowAmber": "#E65100",
      "edgeGlowWidth": "3px"
    },
    "received": {
      "background": "#161926",
      "gradient": "linear-gradient(135deg, #161926 0%, #0F131C 100%)",
      "gradientColors": [
        "#161926",
        "#0F131C"
      ],
      "color": "#F1F5F9",
      "border": "1px solid rgba(255, 255, 255, 0.08)",
      "boxShadow": "0 2px 10px rgba(0, 0, 0, 0.25)",
      "topHighlight": "rgba(255, 255, 255, 0.08)"
    },
    "beetaAi": {
      "gradient": "linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)",
      "gradientColors": [
        "#1A1A2E",
        "#16213E"
      ],
      "border": "1px solid rgba(99, 102, 241, 0.30)",
      "color": "#FFFFFF",
      "badgeColor": "#818CF8"
    }
  },
  "glass": {
    "static": {
      "enabledByDefault": true,
      "bg": "#000000",
      "bgTranslucent": "rgba(10, 11, 16, 0.75)",
      "surface": "#12131C",
      "surfaceTranslucent": "rgba(18, 19, 28, 0.75)",
      "border": "1px solid rgba(255, 255, 255, 0.08)",
      "boxShadow": "0 4px 20px rgba(0, 0, 0, 0.40)",
      "backdropFilter": "none",
      "specularHighlight": "rgba(255, 255, 255, 0.05)"
    },
    "liquid": {
      "enabledByDefault": false,
      "bg": "rgba(10, 11, 16, 0.55)",
      "surface": "rgba(18, 19, 28, 0.60)",
      "border": "1.5px solid rgba(255, 255, 255, 0.20)",
      "backdropFilter": "blur(24px) saturate(190%)",
      "webkitBackdropFilter": "blur(24px) saturate(190%)",
      "boxShadow": "0 8px 36px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
      "specularTopLine": "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.35) 50%, transparent 100%)",
      "composeElevationDp": 12,
      "composeBorderWidthDp": 1.5
    }
  },
  "components": {
    "chatHeader": {
      "height": "64px",
      "bg": "#000000",
      "bgTranslucent": "rgba(10, 11, 16, 0.85)",
      "borderBottom": "1px solid rgba(255, 255, 255, 0.08)",
      "titleColor": "#FFFFFF",
      "statusOnlineColor": "#22C55E",
      "statusOfflineColor": "rgba(255, 255, 255, 0.50)",
      "callButtonVisibleOnWeb": false,
      "callButtonVisibleOnApk": true,
      "actionIconColor": "rgba(255, 255, 255, 0.85)"
    },
    "feed": {
      "bg": "#000000",
      "maxWidth": "600px",
      "containerBorder": "1px solid rgba(255, 255, 255, 0.08)",
      "postBox": {
        "bg": "#111111",
        "innerBg": "#1A1A1A",
        "borderRadius": "16px",
        "border": "1px solid rgba(255, 255, 255, 0.08)",
        "placeholderColor": "rgba(255, 255, 255, 0.50)",
        "textColor": "#FFFFFF",
        "plusButtonBg": "#D90429",
        "plusButtonHover": "#B00321",
        "plusButtonIconColor": "#FFFFFF"
      },
      "sequentialItem": {
        "borderBottom": "1px solid rgba(255, 255, 255, 0.08)",
        "paddingY": "14px",
        "paddingX": "16px",
        "hoverBg": "rgba(255, 255, 255, 0.02)",
        "authorColor": "#FFFFFF",
        "timestampColor": "rgba(255, 255, 255, 0.50)"
      }
    },
    "profile": {
      "bg": "#000000",
      "headerSurface": "#12131C",
      "avatarBorder": "2px solid rgba(255, 255, 255, 0.15)",
      "bioTextColor": "rgba(255, 255, 255, 0.70)",
      "statLabelColor": "rgba(255, 255, 255, 0.50)",
      "statValueColor": "#FFFFFF",
      "tabActiveBorder": "#D90429",
      "tabInactiveColor": "rgba(255, 255, 255, 0.50)"
    },
    "reactions": {
      "barBg": "rgba(24, 24, 27, 0.94)",
      "barBorder": "1px solid rgba(255, 255, 255, 0.14)",
      "barBackdropFilter": "blur(14px)",
      "barShadow": "0 4px 18px -2px rgba(0, 0, 0, 0.45)",
      "borderRadius": "9999px",
      "pillBg": "rgba(255, 255, 255, 0.08)",
      "pillBorder": "1px solid rgba(255, 255, 255, 0.12)",
      "pillHoverBg": "rgba(255, 255, 255, 0.16)",
      "activePillBorder": "#D90429",
      "activePillBg": "rgba(217, 4, 41, 0.18)"
    },
    "replyQuote": {
      "borderLeft": "3px solid #D90429",
      "bg": "rgba(255, 255, 255, 0.05)",
      "borderRadius": "6px",
      "padding": "6px 10px",
      "titleColor": "#D90429",
      "textColor": "rgba(255, 255, 255, 0.70)",
      "fontSize": "12px"
    },
    "voicePlayer": {
      "bg": "rgba(255, 255, 255, 0.05)",
      "border": "1px solid rgba(255, 255, 255, 0.08)",
      "borderRadius": "16px",
      "playButtonBg": "#D90429",
      "playButtonColor": "#FFFFFF",
      "waveformInactive": "rgba(255, 255, 255, 0.25)",
      "waveformActive": "#D90429",
      "durationColor": "rgba(255, 255, 255, 0.60)"
    },
    "pinnedBanner": {
      "bg": "rgba(18, 19, 28, 0.96)",
      "borderBottom": "1px solid rgba(255, 255, 255, 0.08)",
      "pinIconColor": "#D90429",
      "titleColor": "#FFFFFF",
      "subtitleColor": "rgba(255, 255, 255, 0.50)"
    },
    "bottomSheet": {
      "bg": "#111111",
      "borderTop": "1px solid rgba(255, 255, 255, 0.10)",
      "borderRadius": "24px",
      "handleBg": "rgba(255, 255, 255, 0.20)",
      "handleWidth": "36px",
      "handleHeight": "4px",
      "titleColor": "#FFFFFF",
      "subtitleColor": "rgba(255, 255, 255, 0.50)"
    },
    "avatar": {
      "sizes": {
        "xs": "24px",
        "sm": "32px",
        "md": "40px",
        "lg": "56px",
        "xl": "80px"
      },
      "defaultBg": "#1F2430",
      "color": "#FFFFFF",
      "statusOnline": "#22C55E",
      "statusOffline": "rgba(255, 255, 255, 0.35)",
      "statusRingColor": "#000000",
      "statusRingWidth": "2px"
    },
    "badges": {
      "admin": {
        "color": "#D90429",
        "bg": "rgba(217, 4, 41, 0.12)",
        "border": "1px solid rgba(217, 4, 41, 0.30)"
      },
      "ai": {
        "color": "#818CF8",
        "bg": "rgba(129, 140, 248, 0.12)",
        "border": "1px solid rgba(129, 140, 248, 0.30)"
      },
      "verified": {
        "color": "#38BDF8",
        "bg": "rgba(56, 189, 248, 0.12)",
        "border": "1px solid rgba(56, 189, 248, 0.30)"
      }
    },
    "buttons": {
      "primary": {
        "bg": "#D90429",
        "hover": "#B00321",
        "active": "#9B021D",
        "color": "#FFFFFF",
        "borderRadius": "9999px",
        "boxShadow": "0 4px 14px rgba(217, 4, 41, 0.35)"
      },
      "secondary": {
        "bg": "transparent",
        "hover": "rgba(255, 255, 255, 0.08)",
        "border": "1px solid rgba(255, 255, 255, 0.20)",
        "color": "#FFFFFF",
        "borderRadius": "9999px"
      },
      "ghost": {
        "bg": "transparent",
        "hover": "rgba(255, 255, 255, 0.08)",
        "color": "rgba(255, 255, 255, 0.85)",
        "borderRadius": "9999px"
      },
      "iconFab": {
        "bg": "#D90429",
        "hover": "#B00321",
        "color": "#FFFFFF",
        "borderRadius": "50%",
        "size": "48px",
        "boxShadow": "0 6px 20px rgba(217, 4, 41, 0.40)"
      }
    },
    "inputs": {
      "bg": "#1A1A1A",
      "border": "1px solid rgba(255, 255, 255, 0.10)",
      "borderFocus": "1px solid #D90429",
      "color": "#FFFFFF",
      "placeholder": "rgba(255, 255, 255, 0.40)",
      "borderRadius": "12px",
      "padding": "12px 16px"
    }
  },
  "motion": {
    "duration": {
      "instant": "0ms",
      "fast": "150ms",
      "normal": "250ms",
      "slow": "400ms",
      "deliberate": "600ms"
    },
    "easing": {
      "standard": "cubic-bezier(0.2, 0.0, 0.0, 1.0)",
      "decelerate": "cubic-bezier(0.0, 0.0, 0.2, 1.0)",
      "accelerate": "cubic-bezier(0.4, 0.0, 1.0, 1.0)",
      "springBouncy": "cubic-bezier(0.34, 1.56, 0.64, 1.0)",
      "emphasized": "cubic-bezier(0.05, 0.7, 0.1, 1.0)"
    },
    "composeDampingRatio": {
      "lowBouncy": 0.75,
      "noBouncy": 1
    },
    "composeStiffness": {
      "mediumLow": 400,
      "medium": 800
    },
    "animations": {
      "heartPop": "cw-heart-pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1.0)",
      "pulseGlow": "cw-pulse-glow 2s infinite ease-in-out",
      "shimmer": "cw-shimmer 1.5s infinite linear",
      "fadeInScale": "cw-fade-in-scale 0.2s cubic-bezier(0.2, 0.0, 0.0, 1.0)"
    }
  }
};
export default tokens;
