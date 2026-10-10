/**
 * ColorWing Centralized Design System: JSON Schema Compiler
 * Generates JSON Schema specification for tokens.json validation and editor autocompletion.
 */

export function compileJsonSchema() {
  const schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "ColorWing Design System Schema",
    description: "Validation schema for ColorWing cross-platform tokens.json",
    type: "object",
    required: ["meta", "colors", "timeVibes", "bubbles", "glass", "components", "motion"],
    properties: {
      meta: {
        type: "object",
        required: ["system", "version", "description"],
        properties: {
          system: { type: "string" },
          version: { type: "string" },
          description: { type: "string" }
        }
      },
      colors: {
        type: "object",
        required: ["primary", "secondary", "tertiary", "bg", "surface", "textPrimary"],
        properties: {
          primary: { type: "string", pattern: "^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$" },
          secondary: { type: "string", pattern: "^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$" },
          tertiary: { type: "string", pattern: "^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$" },
          bg: { type: "string" },
          surface: { type: "string" },
          textPrimary: { type: "string" },
          textSecondary: { type: "string" },
          textMuted: { type: "string" },
          accentCyan: { type: "string" },
          success: { type: "string" },
          warning: { type: "string" }
        }
      },
      timeVibes: {
        type: "object",
        required: ["morning", "day", "sunset", "night"],
        properties: {
          morning: { $ref: "#/definitions/timeVibeItem" },
          day: { $ref: "#/definitions/timeVibeItem" },
          sunset: { $ref: "#/definitions/timeVibeItem" },
          night: { $ref: "#/definitions/timeVibeItem" }
        }
      },
      bubbles: {
        type: "object",
        required: ["geometry", "sent", "received"],
        properties: {
          geometry: {
            type: "object",
            required: ["borderRadius", "borderRadiusSentTail", "composeCornerDp", "composeTailCornerDp"],
            properties: {
              borderRadius: { type: "string" },
              borderRadiusSentTail: { type: "string" },
              composeCornerDp: { type: "number" },
              composeTailCornerDp: { type: "number" }
            }
          },
          sent: {
            type: "object",
            required: ["gradient", "gradientColors", "color"],
            properties: {
              gradient: { type: "string" },
              gradientColors: { type: "array", items: { type: "string" } },
              color: { type: "string" }
            }
          },
          received: {
            type: "object",
            required: ["gradient", "color", "border"],
            properties: {
              gradient: { type: "string" },
              color: { type: "string" },
              border: { type: "string" }
            }
          }
        }
      },
      glass: {
        type: "object",
        required: ["static", "liquid"],
        properties: {
          static: {
            type: "object",
            required: ["enabledByDefault", "bg", "surface"],
            properties: {
              enabledByDefault: { type: "boolean", enum: [true] },
              bg: { type: "string" },
              surface: { type: "string" }
            }
          },
          liquid: {
            type: "object",
            required: ["enabledByDefault", "backdropFilter"],
            properties: {
              enabledByDefault: { type: "boolean", enum: [false] },
              backdropFilter: { type: "string" }
            }
          }
        }
      }
    },
    definitions: {
      timeVibeItem: {
        type: "object",
        required: ["id", "name", "startHour", "endHour", "ambientColor"],
        properties: {
          id: { type: "string" },
          name: { type: "string" },
          startHour: { type: "number" },
          endHour: { type: "number" },
          ambientColor: { type: "string" },
          ambientColorAlpha: { type: "string" },
          gradient: { type: "string" },
          bubbleGlow: { type: "string" }
        }
      }
    }
  };

  return JSON.stringify(schema, null, 2);
}

export default { compileJsonSchema };
