//
// ColorwingSample.dart
// ColorWing Design System Flutter Sample
//

import 'package:flutter/material.dart';
import '../../dist/ColorwingTokens.dart';

class ColorwingSampleApp extends StatelessWidget {
  const ColorwingSampleApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        scaffoldBackgroundColor: ColorwingTokens.background,
        colorScheme: const ColorScheme.dark(
          primary: ColorwingTokens.primary,
          secondary: ColorwingTokens.secondary,
          surface: ColorwingTokens.surface,
        ),
      ),
      home: const ColorwingChatScreen(),
    );
  }
}

class ColorwingChatScreen extends StatefulWidget {
  const ColorwingChatScreen({Key? key}) : super(key: key);

  @override
  State<ColorwingChatScreen> createState() => _ColorwingChatScreenState();
}

class _ColorwingChatScreenState extends State<ColorwingChatScreen> {
  final TextEditingController _controller = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ColorwingTokens.background,
      appBar: AppBar(
        backgroundColor: ColorwingTokens.background,
        elevation: 0,
        title: Row(
          children: [
            CircleAvatar(
              backgroundColor: ColorwingTokens.surface,
              child: const Text('NW', style: TextStyle(color: ColorwingTokens.textPrimary)),
            ),
            const SizedBox(width: 12),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: const [
                Text('Sarah Connor', style: TextStyle(fontSize: 15, fontWeight: FontWeight.bold)),
                Text('Online', style: TextStyle(fontSize: 12, color: ColorwingTokens.success)),
              ],
            ),
          ],
        ),
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView(
              padding: const EdgeInsets.all(16),
              children: [
                // Received Bubble
                Align(
                  alignment: Alignment.centerLeft,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                    decoration: BoxDecoration(
                      gradient: ColorwingTokens.bubbleReceivedGradient,
                      borderRadius: ColorwingTokens.bubbleReceivedRadius,
                      border: Border.all(color: ColorwingTokens.borderDefault),
                    ),
                    child: const Text(
                      'ColorWing Flutter tokens imported cleanly!',
                      style: TextStyle(color: ColorwingTokens.textPrimary),
                    ),
                  ),
                ),
                const SizedBox(height: 12),
                // Sent Bubble
                Align(
                  alignment: Alignment.centerRight,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                    decoration: BoxDecoration(
                      gradient: ColorwingTokens.bubbleSentGradient,
                      borderRadius: ColorwingTokens.bubbleSentRadius,
                    ),
                    child: const Text(
                      'Primary OLED Black, Secondary White, Tertiary Red.',
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                ),
              ],
            ),
          ),
          // Input Bar
          Container(
            padding: const EdgeInsets.all(12),
            color: ColorwingTokens.surfaceCard,
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _controller,
                    style: const TextStyle(color: ColorwingTokens.textPrimary),
                    decoration: InputDecoration(
                      hintText: 'Type a message...',
                      hintStyle: const TextStyle(color: ColorwingTokens.textMuted),
                      filled: true,
                      fillColor: ColorwingTokens.inputBackground,
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(24),
                        borderSide: BorderSide.none,
                      ),
                      contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                    ),
                  ),
                ),
                const SizedBox(width: 8),
                FloatingActionButton.small(
                  backgroundColor: ColorwingTokens.tertiary,
                  onPressed: () {},
                  child: const Icon(Icons.add, color: Colors.white),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
