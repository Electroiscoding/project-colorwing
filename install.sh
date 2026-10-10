#!/usr/bin/env bash
set -e

# ColorWing Direct GitHub Installer
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/Electroiscoding/project-colorwing/master/install.sh | bash -s web [dest_dir]
#   curl -fsSL https://raw.githubusercontent.com/Electroiscoding/project-colorwing/master/install.sh | bash -s android [dest_dir]

REPO_RAW="https://raw.githubusercontent.com/Electroiscoding/project-colorwing/master"
PLATFORM="${1:-web}"
DEST_DIR="${2}"

echo "🪽 ColorWing Direct Importer"
echo "Fetching from: github.com/Electroiscoding/project-colorwing"
echo "Platform: ${PLATFORM}"

if [ "$PLATFORM" = "web" ]; then
  DEST="${DEST_DIR:-./css}"
  mkdir -p "$DEST"
  echo "Downloading colorwing.min.css -> ${DEST}/colorwing.min.css..."
  curl -fsSL "${REPO_RAW}/dist/colorwing.min.css" -o "${DEST}/colorwing.min.css"
  echo "Downloading colorwing.js -> ${DEST}/colorwing.js..."
  curl -fsSL "${REPO_RAW}/dist/colorwing.js" -o "${DEST}/colorwing.js"
  echo "✓ Web tokens imported successfully to ${DEST}!"
  echo "Add to your HTML: <link rel=\"stylesheet\" href=\"${DEST}/colorwing.min.css\">"

elif [ "$PLATFORM" = "android" ]; then
  DEST="${DEST_DIR:-./app/src/main/kotlin/com/netuark/colorwing}"
  mkdir -p "$DEST"
  echo "Downloading ColorwingTokens.kt -> ${DEST}/ColorwingTokens.kt..."
  curl -fsSL "${REPO_RAW}/dist/ColorwingTokens.kt" -o "${DEST}/ColorwingTokens.kt"
  echo "Downloading ColorwingTheme.kt -> ${DEST}/ColorwingTheme.kt..."
  curl -fsSL "${REPO_RAW}/dist/ColorwingTheme.kt" -o "${DEST}/ColorwingTheme.kt"
  echo "Downloading ColorwingComponents.kt -> ${DEST}/ColorwingComponents.kt..."
  curl -fsSL "${REPO_RAW}/dist/ColorwingComponents.kt" -o "${DEST}/ColorwingComponents.kt"
  echo "✓ Android Jetpack Compose tokens imported successfully to ${DEST}!"
  echo "Use in your Compose screens: ColorwingTheme { ... }"

elif [ "$PLATFORM" = "flutter" ]; then
  DEST="${DEST_DIR:-./lib/theme}"
  mkdir -p "$DEST"
  echo "Downloading ColorwingTokens.dart -> ${DEST}/ColorwingTokens.dart..."
  curl -fsSL "${REPO_RAW}/dist/ColorwingTokens.dart" -o "${DEST}/ColorwingTokens.dart"
  echo "✓ Flutter tokens imported successfully to ${DEST}!"

elif [ "$PLATFORM" = "ios" ]; then
  DEST="${DEST_DIR:-./Colorwing}"
  mkdir -p "$DEST"
  echo "Downloading ColorwingTokens.swift -> ${DEST}/ColorwingTokens.swift..."
  curl -fsSL "${REPO_RAW}/dist/ColorwingTokens.swift" -o "${DEST}/ColorwingTokens.swift"
  echo "✓ iOS SwiftUI tokens imported successfully to ${DEST}!"

else
  echo "Error: Unknown platform '${PLATFORM}'. Available options: web, android, flutter, ios"
  exit 1
fi
