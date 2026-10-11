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
      "borderRadius": "14px",
      "borderRadiusSentTail": "4px",
      "borderRadiusReceivedTail": "4px",
      "paddingY": "8px",
      "paddingX": "12px",
      "paddingBottom": "6px",
      "minWidth": "60px",
      "maxWidthPercentMobile": "82%",
      "maxWidthPercentDesktop": "70%",
      "composeCornerDp": 14,
      "composeTailCornerDp": 4
    },
    "sent": {
      "gradient": "linear-gradient(135deg, #C82128 0%, #A01830 35%, #6D164A 70%, #501F50 100%)",
      "gradientColors": [
        "#C82128",
        "#A01830",
        "#6D164A",
        "#501F50"
      ],
      "color": "#FFFFFF",
      "border": "none",
      "boxShadow": "0 4px 14px rgba(0, 0, 0, 0.35), 0 2px 6px rgba(200, 33, 40, 0.25)",
      "topHighlight": "rgba(255, 255, 255, 0.15)",
      "edgeGlowAmber": "#E65100",
      "edgeGlowWidth": "3px"
    },
    "received": {
      "background": "#0F131C",
      "gradient": "linear-gradient(135deg, #0F131C 0%, #181D28 40%, #1D1D2C 80%, #0F131C 100%)",
      "gradientColors": [
        "#0F131C",
        "#181D28",
        "#1D1D2C",
        "#0F131C"
      ],
      "color": "#F1F5F9",
      "border": "1px solid rgba(255, 255, 255, 0.08)",
      "boxShadow": "0 3px 12px rgba(0, 0, 0, 0.35)",
      "topHighlight": "rgba(255, 255, 255, 0.10)"
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
    },
    "liquidGlass": {
      "backdropFilter": "blur(16px) saturate(180%) contrast(105%)",
      "sent": {
        "gradient": "linear-gradient(135deg, rgba(200, 33, 40, 0.82) 0%, rgba(160, 24, 48, 0.74) 35%, rgba(109, 22, 74, 0.68) 70%, rgba(80, 31, 80, 0.75) 100%)",
        "overlayBrush": "linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.15) 100%)",
        "border": "1.5px solid rgba(255, 255, 255, 0.25)",
        "boxShadow": "inset 0 1.5px 0 0 rgba(255, 255, 255, 0.75), inset 0 -1.5px 0 0 rgba(255, 255, 255, 0.35), inset -3px 0 0 0 #E65100, 0 8px 32px rgba(0, 0, 0, 0.55)",
        "topHighlight": "rgba(255, 255, 255, 0.85)",
        "edgeGlowAmber": "#E65100"
      },
      "received": {
        "gradient": "linear-gradient(135deg, rgba(15, 19, 28, 0.78) 0%, rgba(24, 29, 40, 0.68) 40%, rgba(29, 29, 44, 0.72) 80%, rgba(15, 19, 28, 0.78) 100%)",
        "overlayBrush": "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 25%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.15) 100%)",
        "border": "1.5px solid rgba(255, 255, 255, 0.22)",
        "boxShadow": "inset 0 1.5px 0 0 rgba(255, 255, 255, 0.60), inset 0 -1.5px 0 0 rgba(255, 255, 255, 0.25), 0 8px 32px rgba(0, 0, 0, 0.50)",
        "topHighlight": "rgba(255, 255, 255, 0.65)"
      },
      "beetaAi": {
        "gradient": "linear-gradient(135deg, rgba(26, 26, 46, 0.80) 0%, rgba(22, 33, 62, 0.75) 100%)",
        "border": "1.5px solid rgba(129, 140, 248, 0.45)",
        "boxShadow": "inset 0 1.5px 0 0 rgba(255, 255, 255, 0.75), inset 0 -1.5px 0 0 rgba(129, 140, 248, 0.35), 0 8px 32px rgba(99, 102, 241, 0.30)",
        "topHighlight": "rgba(255, 255, 255, 0.75)"
      }
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
      "borderWidthDp": 1,
      "borderGradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.12) 100%)",
      "frostedGradient": "linear-gradient(180deg, rgba(10, 11, 16, 0.60) 0%, rgba(14, 17, 28, 0.53) 100%)",
      "boxShadow": "0 4px 20px rgba(0, 0, 0, 0.40)",
      "backdropFilter": "none",
      "specularHighlight": "rgba(255, 255, 255, 0.05)"
    },
    "liquid": {
      "enabledByDefault": false,
      "bg": "rgba(10, 11, 16, 0.55)",
      "surface": "rgba(18, 19, 28, 0.60)",
      "borderWidthDp": 1.5,
      "border": "1.5px solid rgba(255, 255, 255, 0.25)",
      "borderGradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.35) 100%)",
      "overlayGradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.15) 100%)",
      "backdropFilter": "blur(16px) saturate(180%) contrast(105%)",
      "webkitBackdropFilter": "blur(16px) saturate(180%) contrast(105%)",
      "blurRadiusDp": 16,
      "refractionHeightDp": 28,
      "refractionAmountDp": 32,
      "boxShadow": "inset 0 1.5px 0 0 rgba(255, 255, 255, 0.75), inset 0 -1.5px 0 0 rgba(255, 255, 255, 0.35), 0 8px 36px rgba(0, 0, 0, 0.65)",
      "specularTopLine": "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.75) 50%, transparent 100%)",
      "specularAlphas": {
        "top": 0.75,
        "sides": 0.25,
        "bottom": 0.35
      },
      "overlayAlphas": {
        "topDiffusion": 0.2,
        "midDiffusion": 0.05,
        "bottomShadow": 0.15
      },
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
      },
      "postCard": {
        "bg": "transparent",
        "hoverBg": "rgba(255, 255, 255, 0.02)",
        "borderBottom": "1px solid rgba(255, 255, 255, 0.08)",
        "padding": "16px",
        "repostBanner": {
          "color": "#34D399",
          "fontSize": "12px",
          "fontWeight": "700",
          "icon": "repeat",
          "iconSize": "16px",
          "marginBottom": "8px",
          "paddingBottom": "6px",
          "borderBottom": "1px solid rgba(255, 255, 255, 0.05)"
        },
        "header": {
          "avatarSize": "40px",
          "avatarBorderRadius": "50%",
          "avatarRing": "2px solid #1E293B",
          "avatarDefaultBg": "#1E293B",
          "authorNameColor": "#FFFFFF",
          "authorNameFontSize": "14px",
          "authorNameFontWeight": "600",
          "authorHandleColor": "rgba(255, 255, 255, 0.50)",
          "authorHandleFontSize": "12px",
          "timestampColor": "rgba(255, 255, 255, 0.50)",
          "timestampFontSize": "12px",
          "followBtn": {
            "activeBg": "#D90429",
            "activeColor": "#FFFFFF",
            "followingBg": "rgba(255, 255, 255, 0.10)",
            "followingColor": "rgba(255, 255, 255, 0.70)",
            "borderRadius": "9999px",
            "padding": "4px 12px",
            "fontSize": "12px",
            "fontWeight": "700"
          }
        },
        "body": {
          "color": "rgba(255, 255, 255, 0.90)",
          "fontSize": "14px",
          "lineHeight": "1.6",
          "marginTop": "12px"
        },
        "media": {
          "borderRadius": "12px",
          "overflow": "hidden",
          "marginTop": "12px",
          "boxShadow": "0 2px 8px rgba(0, 0, 0, 0.40)",
          "video": {
            "aspectRatio": "16/9",
            "bg": "#020617",
            "badgeBg": "rgba(0, 0, 0, 0.70)",
            "badgeColor": "#FFFFFF",
            "badgeBorder": "1px solid rgba(255, 255, 255, 0.10)",
            "badgeIconColor": "#D90429",
            "ctrlBtnBg": "rgba(0, 0, 0, 0.70)",
            "ctrlBtnHoverBg": "rgba(0, 0, 0, 0.90)",
            "ctrlBtnColor": "#FFFFFF",
            "playOverlayBg": "rgba(0, 0, 0, 0.60)",
            "playOverlaySize": "48px"
          },
          "image": {
            "bg": "rgba(15, 23, 42, 0.60)",
            "minHeight": "200px",
            "maxHeight": "480px",
            "objectFit": "cover"
          }
        },
        "poll": {
          "bg": "rgba(255, 255, 255, 0.04)",
          "border": "1px solid rgba(255, 255, 255, 0.08)",
          "borderRadius": "12px",
          "padding": "12px",
          "barFillBg": "rgba(217, 4, 41, 0.25)",
          "barBorder": "#D90429",
          "barBorderRadius": "8px",
          "questionColor": "#FFFFFF",
          "voteBtnBg": "#D90429"
        },
        "quotedCard": {
          "bg": "rgba(255, 255, 255, 0.05)",
          "border": "1px solid rgba(255, 255, 255, 0.15)",
          "hoverBorder": "rgba(217, 4, 41, 0.40)",
          "borderRadius": "16px",
          "padding": "14px",
          "marginTop": "12px",
          "avatarSize": "20px",
          "authorColor": "#FFFFFF",
          "handleColor": "rgba(255, 255, 255, 0.50)",
          "bodyColor": "rgba(255, 255, 255, 0.85)",
          "mediaThumbMaxHeight": "160px"
        },
        "actions": {
          "marginTop": "16px",
          "paddingTop": "12px",
          "borderTop": "1px solid rgba(255, 255, 255, 0.10)",
          "gap": "24px",
          "defaultColor": "rgba(255, 255, 255, 0.50)",
          "fontSize": "14px",
          "comment": {
            "icon": "chat_bubble_outline",
            "hoverColor": "#60A5FA"
          },
          "repost": {
            "icon": "repeat",
            "hoverColor": "#34D399",
            "activeColor": "#34D399"
          },
          "like": {
            "iconDefault": "favorite_border",
            "iconLiked": "favorite",
            "hoverColor": "#D90429",
            "likedColor": "#D90429"
          },
          "download": {
            "icon": "download",
            "hoverColor": "#34D399"
          },
          "views": {
            "icon": "visibility",
            "color": "rgba(255, 255, 255, 0.50)",
            "fontSize": "12px"
          },
          "more": {
            "icon": "more_horiz",
            "hoverColor": "#FFFFFF"
          }
        }
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
      "barBg": "rgba(24, 24, 27, 0.96)",
      "barBorder": "1px solid rgba(255, 255, 255, 0.14)",
      "barBackdropFilter": "none",
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
