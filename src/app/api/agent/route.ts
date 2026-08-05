import { NextResponse } from 'next/server';
import { LocalMemoryCore } from '@/lib/memory';

const memory = new LocalMemoryCore();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { projectName, inputPrompt, toneOfVoice, targetAudience } = body;

    if (!projectName || !inputPrompt) {
      return NextResponse.json({ error: 'projectName and inputPrompt are required' }, { status: 400 });
    }

    const existingMemory = memory.getMemory(projectName);
    const updatedMemory = memory.updateMemory({
      projectName,
      toneOfVoice: toneOfVoice || existingMemory?.toneOfVoice,
      targetAudience: targetAudience || existingMemory?.targetAudience,
      keyInsights: [inputPrompt]
    });

    const pitchDeckSlides = [
      {
        slideNumber: 1,
        title: "Title & Vision",
        content: `• Product: ${projectName}\n• Positioning: ${inputPrompt}\n• Target: ${updatedMemory.targetAudience}`
      },
      {
        slideNumber: 2,
        title: "Value Proposition & Long-Term Memory",
        content: `• Problem: Creators waste 70% of time re-contextualizing ideas.\n• Solution: MindsEcho AI maintains persistent memory graph for ${projectName}.\n• Tone: ${updatedMemory.toneOfVoice}`
      },
      {
        slideNumber: 3,
        title: "Animoca Brands & SANDchain Ecosystem Fit",
        content: `• Multi-platform distribution (Twitter, Telegram, Pitch Decks).\n• Automated Creator Economy asset generation.\n• Continuous context loop through Stored Insights.`
      }
    ];

    const twitterThread = [
      `1/ 🚀 Introducing ${projectName} — powered by @MindsEcho_AI!\n\n${inputPrompt}`,
      `2/ Why long-term memory matters for creators? Instead of prompting from scratch, MindsEcho remembers our tone (${updatedMemory.toneOfVoice}) and project context natively.`,
      `3/ Built for the @AnimocaBrands & @TheSandboxGame ecosystem. Building the future of creator automation! 🌐✨`
    ];

    const telegramPost = `🔥 **[NEW PROJECT ANNOUNCEMENT] ${projectName}** 🔥\n\n${inputPrompt}\n\n🎯 **Audience:** ${updatedMemory.targetAudience}\n💡 **Memory Context:** Integrated with MindsEcho AI Long-Term Memory Graph.`;

    const outputs = [
      { platform: 'Interactive Pitch Deck (3 Slides)', type: 'slides', content: pitchDeckSlides },
      { platform: 'X / Twitter Thread', type: 'thread', content: twitterThread },
      { platform: 'Telegram Channel Announcement', type: 'text', content: telegramPost }
    ];

    return NextResponse.json({
      success: true,
      memory: updatedMemory,
      outputs
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Internal Error' }, { status: 500 });
  }
}
