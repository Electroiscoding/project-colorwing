/**
 * ColorWing Centralized Design System: JSON / W3C Tokens Compiler
 */

import tokens from '../tokens/index.js';

export function compileJsonTokens() {
  return JSON.stringify(tokens, null, 2);
}

export default compileJsonTokens;
