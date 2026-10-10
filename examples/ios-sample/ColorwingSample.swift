//
// ColorwingSample.swift
// ColorWing Design System SwiftUI Sample
//

import SwiftUI

struct ColorwingSampleView: View {
    @State private var messageText: String = ""
    @State private var isLiquidGlass: Boolean = false

    var body: some View {
        ZStack {
            ColorwingTokens.background
                .ignoresSafeArea()

            VStack(spacing: 0) {
                // Chat Header
                HStack(spacing: 12) {
                    Circle()
                        .fill(ColorwingTokens.surface)
                        .frame(width: 40, height: 40)
                        .overlay(
                            Text("NW")
                                .font(.system(size: 14, weight: .bold))
                                .foregroundColor(ColorwingTokens.textPrimary)
                        )

                    VStack(alignment: .leading, spacing: 2) {
                        Text("Sarah Connor")
                            .font(.system(size: 15, weight: .bold))
                            .foregroundColor(ColorwingTokens.textPrimary)
                        Text("Online")
                            .font(.system(size: 12))
                            .foregroundColor(ColorwingTokens.success)
                    }

                    Spacer()

                    Button(action: {}) {
                        Image(systemName: "ellipsis")
                            .foregroundColor(ColorwingTokens.textPrimary)
                    }
                }
                .padding(.horizontal, 16)
                .padding(.vertical, 12)
                .background(ColorwingTokens.background)

                Divider()
                    .background(ColorwingTokens.borderDefault)

                // Message Stream
                ScrollView {
                    VStack(spacing: 12) {
                        // Received Bubble
                        HStack {
                            Text("ColorWing tokens imported into iOS SwiftUI!")
                                .font(.system(size: 14.5))
                                .foregroundColor(ColorwingTokens.textPrimary)
                                .padding(.horizontal, 14)
                                .padding(.vertical, 8)
                                .background(ColorwingTokens.bubbleReceivedGradient)
                                .clipShape(RoundedRectangle(cornerRadius: 16))
                            Spacer()
                        }

                        // Sent Bubble
                        HStack {
                            Spacer()
                            Text("Pure OLED pitch black, high contrast white, NeTuArk red.")
                                .font(.system(size: 14.5))
                                .foregroundColor(.white)
                                .padding(.horizontal, 14)
                                .padding(.vertical, 8)
                                .background(ColorwingTokens.bubbleSentGradient)
                                .clipShape(RoundedRectangle(cornerRadius: 16))
                        }
                    }
                    .padding(16)
                }

                // Input Box
                HStack(spacing: 10) {
                    TextField("Type a message...", text: $messageText)
                        .padding(10)
                        .background(ColorwingTokens.inputBackground)
                        .foregroundColor(ColorwingTokens.textPrimary)
                        .cornerRadius(20)

                    Button(action: {}) {
                        Image(systemName: "plus")
                            .font(.system(size: 16, weight: .bold))
                            .foregroundColor(.white)
                            .frame(width: 38, height: 38)
                            .background(ColorwingTokens.tertiary)
                            .clipShape(Circle())
                    }
                }
                .padding(16)
                .background(ColorwingTokens.surfaceCard)
            }
        }
    }
}
