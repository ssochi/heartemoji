export type EmojiGuide = {
  slug: string;
  aliases: string[];
  meaningBullets: string[];
  usageIdeas: string[];
  combos: string[];
};

export const EMOJI_GUIDES: Record<string, EmojiGuide> = {
  'red-heart': {
    slug: 'red-heart',
    aliases: ['heart emoji', 'love heart emoji', 'red emoji heart'],
    meaningBullets: [
      'Represents romantic love, gratitude, and heartfelt appreciation.',
      'Commonly used in captions about proposals, anniversaries, and milestones.',
      'Pairs well with 💍, 💋, 💐 when you want to create a love-forward message.'
    ],
    usageIdeas: [
      'Anniversary posts or wedding galleries.',
      'Customer love notes or testimonials.',
      'Thank-you messages that need extra warmth.'
    ],
    combos: ['❤️💍💐', '❤️‍🔥❤️‍🩹❤️', '❤️💋💌']
  },
  'black-heart': {
    slug: 'black-heart',
    aliases: ['black heart emoji meaning', 'dark heart emoji', 'black emoji heart'],
    meaningBullets: [
      'Signals gothic aesthetics, dry humor, or bittersweet emotion.',
      'Frequently seen in fashion editorials, metal music fandoms, or memorial posts.',
      'Contrasts brightly colored emojis for dramatic effect.'
    ],
    usageIdeas: ['Paired with 🖤🕶️ for edgy brand drops.', 'With 💀 or 🪦 to acknowledge grief tactfully.', 'As a stylish accent for monochrome feeds.'],
    combos: ['🖤🕶️💀', '🖤✨🖤', '🖤🤍🖤']
  },
  'blue-heart': {
    slug: 'blue-heart',
    aliases: ['blue heart emoji meaning', 'blue emoji heart', 'blue heart meaning emoji'],
    meaningBullets: [
      'Communicates loyalty, support, and calm care.',
      'Often used for awareness campaigns, tech launches, or ocean-related storytelling.',
      'Matches corporate branding with cooler palettes.'
    ],
    usageIdeas: ['Pair with 🌊 for marine conservation messaging.', 'Use in DM replies to reassure long-distance friends.', 'Add 💙🤝 to show collaborative spirit.'],
    combos: ['💙🤝', '💙🌊🐬', '💙💻✨']
  },
  'pink-heart': {
    slug: 'pink-heart',
    aliases: ['heart emoji pink', 'pink heart emoji meaning', 'pink emoji heart'],
    meaningBullets: [
      'Represents sweet affection, gentle support, and self-care reminders.',
      'Dominates pastel aesthetics, journaling communities, and K-pop fandom posts.',
      'Great for bestie shout-outs or mental health check-ins.'
    ],
    usageIdeas: ['Combine with 💆‍♀️🫖 for self-care reminders.', 'Add to friend appreciation threads.', 'Use in brand content featuring pastels or beauty looks.'],
    combos: ['🩷💞💖', '🩷✨🧋', '🩷🥰🫶']
  },
  'white-heart': {
    slug: 'white-heart',
    aliases: ['white heart emoji meaning', 'white heart emoji copy paste', 'white emoji heart'],
    meaningBullets: [
      'Embodies pure intentions, memorial tributes, and minimalist design.',
      'Frequently paired with wedding or winter aesthetics.',
      'Shows soft support without overwhelming color.'
    ],
    usageIdeas: ['Add to memorial posts as a gentle sign of respect.', 'Use with 🤍❄️ for wintery designs.', 'Combine with neutral product shoots.'],
    combos: ['🤍❄️✨', '🤍🕯️🤍', '🤍🌨️🤍']
  },
  'heart-eyes-emoji': {
    slug: 'heart-eyes-emoji',
    aliases: ['heart eyes emoji', 'heart eye emoji', 'heart on eyes emoji'],
    meaningBullets: [
      'Expresses instant infatuation and excitement.',
      'The fastest way to react to jaw-dropping outfits, performances, or pet photos.',
      'Provides dramatic positive feedback in comment sections.'
    ],
    usageIdeas: ['Drop under product reveals with 😍🔥.', 'React to selfies or OOTDs with full heart eyes combos.', 'Use in fandom live-tweet threads.'],
    combos: ['😍🔥', '😍💖', '😍😍😍']
  },
  'cat-heart-eyes': {
    slug: 'cat-heart-eyes',
    aliases: ['cat heart eyes emoji', 'heart eyes cat emoji'],
    meaningBullets: [
      'A kawaii alternative to 😍, perfect for pet parents.',
      'Gives your reaction a playful, feline spin.',
      'Transforms cute content into extra-adorable moments.'
    ],
    usageIdeas: ['Use in pet adoption posts.', 'React to plushie hauls or kawaii aesthetics.', 'Include in animal rescue success stories.'],
    combos: ['😻💖', '😻🐾', '😻✨']
  },
  'finger-heart': {
    slug: 'finger-heart',
    aliases: ['finger heart emoji', 'hand heart emoji', 'mini heart emoji'],
    meaningBullets: [
      'Inspired by Korean finger hearts that symbolize tiny yet meaningful love.',
      'Signals fandom gratitude, backstage selfies, or supportive shout-outs.',
      'Visually pairs with sparkles and pastel hearts.'
    ],
    usageIdeas: ['Add to K-pop fancams or comeback tweets.', 'Use for creator shout-outs or donation thank-yous.', 'Pair with 🫶 to show “big + small” hearts.'],
    combos: ['🫰🫶', '🫰✨', '🫰🩷💖']
  },
  'heart-outline': {
    slug: 'heart-outline',
    aliases: ['heart outline emoji', 'text heart emoji', 'outline of a heart emoji'],
    meaningBullets: [
      'A text-style heart used for minimalist love notes or typography.',
      'Perfect for aesthetic bios, captions, and playlist names.',
      'References heart emoji text art and outlined heart emoji queries.'
    ],
    usageIdeas: ['Add to vaporwave or monochrome edits.', 'Use as bullet points in love letters.', 'Combine with ASCII faces for text art.'],
    combos: ['♡(˃͈ દ ˂͈ ༶ )', '♡♡♡', '♡✧♡✧♡']
  }
};

export function getEmojiGuide(slug: string) {
  return EMOJI_GUIDES[slug];
}
