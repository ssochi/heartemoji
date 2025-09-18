export type HeartEmoji = {
  id: string;
  emoji: string;
  slug: string;
  unicode: string;
  tone: 'warm' | 'cool' | 'neutral' | 'playful' | 'dark';
  meaning: string;
  usage: string;
  keywords: string[];
  related: string[];
};

export const HEART_EMOJIS: HeartEmoji[] = [
  {
    id: 'red-heart',
    emoji: '❤️',
    slug: 'red-heart',
    unicode: '2764 FE0F',
    tone: 'warm',
    meaning: 'Classic red heart',
    usage: 'Universal love, romance, and warm connections.',
    keywords: ['love', 'romance', 'passion', 'heart emoji'],
    related: ['pink-heart', 'heart-on-fire', 'sparkling-heart']
  },
  {
    id: 'pink-heart',
    emoji: '🩷',
    slug: 'pink-heart',
    unicode: '1FA77',
    tone: 'warm',
    meaning: 'Soft pink heart',
    usage: 'Affectionate, sweet, and gentle emotions.',
    keywords: ['tender', 'sweet', 'romance', 'heart'],
    related: ['sparkling-heart', 'growing-heart', 'two-hearts']
  },
  {
    id: 'orange-heart',
    emoji: '🧡',
    slug: 'orange-heart',
    unicode: '1F9E1',
    tone: 'warm',
    meaning: 'Energetic orange heart',
    usage: 'Friendly warmth and close relationships.',
    keywords: ['friendship', 'warmth', 'support'],
    related: ['yellow-heart', 'red-heart', 'heart-on-fire']
  },
  {
    id: 'yellow-heart',
    emoji: '💛',
    slug: 'yellow-heart',
    unicode: '1F49B',
    tone: 'warm',
    meaning: 'Cheerful yellow heart',
    usage: 'Optimism, sunshine, and bright support.',
    keywords: ['friendship', 'cheerful', 'kindness'],
    related: ['green-heart', 'orange-heart', 'sparkling-heart']
  },
  {
    id: 'green-heart',
    emoji: '💚',
    slug: 'green-heart',
    unicode: '1F49A',
    tone: 'cool',
    meaning: 'Fresh green heart',
    usage: 'Growth, wellbeing, eco-friendly sentiments.',
    keywords: ['nature', 'growth', 'hope'],
    related: ['yellow-heart', 'blue-heart', 'mending-heart']
  },
  {
    id: 'blue-heart',
    emoji: '💙',
    slug: 'blue-heart',
    unicode: '1F499',
    tone: 'cool',
    meaning: 'Calm blue heart',
    usage: 'Trust, loyalty, and calm support.',
    keywords: ['loyalty', 'calm', 'support'],
    related: ['light-blue-heart', 'white-heart', 'sparkling-heart']
  },
  {
    id: 'light-blue-heart',
    emoji: '🩵',
    slug: 'light-blue-heart',
    unicode: '1FA75',
    tone: 'cool',
    meaning: 'Soft light blue heart',
    usage: 'Tranquil care, gentle encouragement, or sky tones.',
    keywords: ['gentle', 'sky', 'support'],
    related: ['blue-heart', 'white-heart', 'purple-heart']
  },
  {
    id: 'purple-heart',
    emoji: '💜',
    slug: 'purple-heart',
    unicode: '1F49C',
    tone: 'cool',
    meaning: 'Majestic purple heart',
    usage: 'Creativity, compassion, admiration, or fandom love.',
    keywords: ['creativity', 'compassion', 'fandom'],
    related: ['sparkling-heart', 'growing-heart', 'pink-heart']
  },
  {
    id: 'brown-heart',
    emoji: '🤎',
    slug: 'brown-heart',
    unicode: '1F90E',
    tone: 'neutral',
    meaning: 'Grounded brown heart',
    usage: 'Comfort, grounding, and earthy affection.',
    keywords: ['earth', 'comfort', 'support'],
    related: ['mending-heart', 'white-heart', 'red-heart']
  },
  {
    id: 'black-heart',
    emoji: '🖤',
    slug: 'black-heart',
    unicode: '1F5A4',
    tone: 'dark',
    meaning: 'Bold black heart',
    usage: 'Dark humor, elegance, or bittersweet emotions.',
    keywords: ['dark', 'edgy', 'style'],
    related: ['sparkling-heart', 'broken-heart', 'heart-exclamation']
  },
  {
    id: 'gray-heart',
    emoji: '🩶',
    slug: 'grey-heart',
    unicode: '1FA76',
    tone: 'neutral',
    meaning: 'Balanced grey heart',
    usage: 'Calm support, balance, or understated care.',
    keywords: ['calm', 'neutral', 'balanced'],
    related: ['white-heart', 'black-heart', 'blue-heart']
  },
  {
    id: 'white-heart',
    emoji: '🤍',
    slug: 'white-heart',
    unicode: '1F90D',
    tone: 'neutral',
    meaning: 'Pure white heart',
    usage: 'Pure love, sincerity, remembrance, or minimal style.',
    keywords: ['pure', 'sincere', 'minimal'],
    related: ['light-blue-heart', 'sparkling-heart', 'brown-heart']
  },
  {
    id: 'broken-heart',
    emoji: '💔',
    slug: 'broken-heart',
    unicode: '1F494',
    tone: 'dark',
    meaning: 'Broken heart',
    usage: 'Heartbreak, sadness, or intense disappointment.',
    keywords: ['sad', 'breakup', 'hurt'],
    related: ['mending-heart', 'heart-on-fire', 'red-heart']
  },
  {
    id: 'heart-exclamation',
    emoji: '❣️',
    slug: 'heart-exclamation',
    unicode: '2763 FE0F',
    tone: 'playful',
    meaning: 'Heart exclamation',
    usage: 'Excited emphasis with affection.',
    keywords: ['excitement', 'enthusiasm', 'affection'],
    related: ['sparkling-heart', 'heart-on-fire', 'heart-decoration']
  },
  {
    id: 'two-hearts',
    emoji: '💕',
    slug: 'two-hearts',
    unicode: '1F495',
    tone: 'playful',
    meaning: 'Two hearts',
    usage: 'Floating love, close friendship, or romantic energy.',
    keywords: ['friendship', 'romance', 'joy'],
    related: ['growing-heart', 'revolving-hearts', 'pink-heart']
  },
  {
    id: 'revolving-hearts',
    emoji: '💞',
    slug: 'revolving-hearts',
    unicode: '1F49E',
    tone: 'playful',
    meaning: 'Orbiting hearts',
    usage: 'Whirlwind romance or affectionate excitement.',
    keywords: ['romance', 'affection', 'excitement'],
    related: ['two-hearts', 'growing-heart', 'kiss-mark']
  },
  {
    id: 'beating-heart',
    emoji: '💓',
    slug: 'beating-heart',
    unicode: '1F493',
    tone: 'warm',
    meaning: 'Beating heart',
    usage: 'Active love, pulse, or excitement.',
    keywords: ['heartbeat', 'love', 'pulse'],
    related: ['growing-heart', 'sparkling-heart', 'two-hearts']
  },
  {
    id: 'growing-heart',
    emoji: '💗',
    slug: 'growing-heart',
    unicode: '1F497',
    tone: 'warm',
    meaning: 'Growing heart',
    usage: 'Deepening feelings or expanding gratitude.',
    keywords: ['growth', 'gratitude', 'warmth'],
    related: ['two-hearts', 'sparkling-heart', 'pink-heart']
  },
  {
    id: 'sparkling-heart',
    emoji: '💖',
    slug: 'sparkling-heart',
    unicode: '1F496',
    tone: 'playful',
    meaning: 'Sparkling heart',
    usage: 'Glittery affection, celebrations, or special appreciation.',
    keywords: ['glitter', 'celebration', 'special'],
    related: ['two-hearts', 'growing-heart', 'pink-heart']
  },
  {
    id: 'heart-with-arrow',
    emoji: '💘',
    slug: 'heart-with-arrow',
    unicode: '1F498',
    tone: 'playful',
    meaning: 'Heart with arrow',
    usage: 'Crushes, new romance, or Cupid references.',
    keywords: ['crush', 'cupid', 'romance'],
    related: ['love-letter', 'kiss', 'pink-heart']
  },
  {
    id: 'heart-with-ribbon',
    emoji: '💝',
    slug: 'heart-with-ribbon',
    unicode: '1F49D',
    tone: 'playful',
    meaning: 'Heart with ribbon',
    usage: 'Gift-giving, thoughtful gestures, or celebrations.',
    keywords: ['gift', 'celebration', 'present'],
    related: ['sparkling-heart', 'love-letter', 'pink-heart']
  },
  {
    id: 'heart-decoration',
    emoji: '💟',
    slug: 'heart-decoration',
    unicode: '1F49F',
    tone: 'playful',
    meaning: 'Heart decoration',
    usage: 'Decorative love, playful emphasis, or themed designs.',
    keywords: ['decoration', 'design', 'cute'],
    related: ['sparkling-heart', 'heart-exclamation', 'two-hearts']
  },
  {
    id: 'heart-on-fire',
    emoji: '❤️‍🔥',
    slug: 'heart-on-fire',
    unicode: '2764 FE0F 200D 1F525',
    tone: 'warm',
    meaning: 'Heart on fire',
    usage: 'Passionate love, intense feelings, or dramatic moments.',
    keywords: ['passion', 'flame', 'intense'],
    related: ['red-heart', 'mending-heart', 'sparkling-heart']
  },
  {
    id: 'mending-heart',
    emoji: '❤️‍🩹',
    slug: 'mending-heart',
    unicode: '2764 FE0F 200D 1FA79',
    tone: 'warm',
    meaning: 'Mending heart',
    usage: 'Recovery, support, and emotional healing.',
    keywords: ['healing', 'care', 'support'],
    related: ['broken-heart', 'brown-heart', 'red-heart']
  },
  {
    id: 'heart-hands',
    emoji: '🫶',
    slug: 'heart-hands',
    unicode: '1FAF6',
    tone: 'warm',
    meaning: 'Heart hands',
    usage: 'Thankful gestures, fan love, or heart-shaped hands.',
    keywords: ['gesture', 'gratitude', 'support'],
    related: ['love-you-gesture', 'pink-heart', 'sparkling-heart']
  },
  {
    id: 'love-you-gesture',
    emoji: '🤟',
    slug: 'love-you-gesture',
    unicode: '1F91F',
    tone: 'playful',
    meaning: 'Love-you hand sign',
    usage: 'ASL-inspired sign meaning “I love you.”',
    keywords: ['ASL', 'sign', 'love'],
    related: ['heart-hands', 'mending-heart', 'red-heart']
  },
  {
    id: 'anatomical-heart',
    emoji: '🫀',
    slug: 'anatomical-heart',
    unicode: '1FAC0',
    tone: 'neutral',
    meaning: 'Anatomical heart',
    usage: 'Medical contexts, biology, or realistic references.',
    keywords: ['medical', 'anatomy', 'biology'],
    related: ['mending-heart', 'red-heart', 'heart-hands']
  },
  {
    id: 'couple-with-heart',
    emoji: '💑',
    slug: 'couple-with-heart',
    unicode: '1F491',
    tone: 'warm',
    meaning: 'Couple with heart',
    usage: 'Romantic partnerships or date nights.',
    keywords: ['couple', 'romance', 'relationship'],
    related: ['kiss', 'kiss-mark', 'love-letter']
  },
  {
    id: 'kiss',
    emoji: '💏',
    slug: 'kiss',
    unicode: '1F48F',
    tone: 'warm',
    meaning: 'Kissing couple',
    usage: 'Romantic affection, kisses, or love scenes.',
    keywords: ['kiss', 'romance', 'affection'],
    related: ['couple-with-heart', 'kiss-mark', 'love-letter']
  },
  {
    id: 'kiss-mark',
    emoji: '💋',
    slug: 'kiss-mark',
    unicode: '1F48B',
    tone: 'playful',
    meaning: 'Kiss mark',
    usage: 'Send kisses, flirt, or glamour tones.',
    keywords: ['kiss', 'lipstick', 'affection'],
    related: ['kiss', 'heart-with-arrow', 'love-letter']
  },
  {
    id: 'white-heart-suit',
    emoji: '♥️',
    slug: 'heart-suit',
    unicode: '2665 FE0F',
    tone: 'neutral',
    meaning: 'Heart suit',
    usage: 'Card games, classic symbols, or stylized love.',
    keywords: ['cards', 'symbol', 'classic'],
    related: ['red-heart', 'sparkling-heart', 'heart-decoration']
  },
  {
    id: 'love-letter',
    emoji: '💌',
    slug: 'love-letter',
    unicode: '1F48C',
    tone: 'playful',
    meaning: 'Love letter',
    usage: 'Messages of affection or Valentine vibes.',
    keywords: ['letter', 'valentines', 'message'],
    related: ['heart-with-arrow', 'kiss-mark', 'pink-heart']
  },
  {
    id: 'heart-eyes-face',
    emoji: '😍',
    slug: 'heart-eyes-emoji',
    unicode: '1F60D',
    tone: 'playful',
    meaning: 'Smiling face with heart eyes',
    usage: 'Over-the-top adoration, fandom moments, or wow reactions.',
    keywords: ['heart eyes emoji', 'emoji with hearts in eyes', 'love this'],
    related: ['face-with-hearts', 'cat-heart-eyes', 'sparkling-heart']
  },
  {
    id: 'face-with-hearts',
    emoji: '🥰',
    slug: 'face-with-hearts',
    unicode: '1F970',
    tone: 'warm',
    meaning: 'Smiling face with hearts',
    usage: 'Soft affection, gratitude, or wholesome replies.',
    keywords: ['heart face emoji', 'face with hearts emoji', 'soft love'],
    related: ['heart-eyes-emoji', 'pink-heart', 'heart-hands']
  },
  {
    id: 'cat-heart-eyes',
    emoji: '😻',
    slug: 'cat-heart-eyes',
    unicode: '1F63B',
    tone: 'playful',
    meaning: 'Smiling cat with heart eyes',
    usage: 'Cute overload, pet love, or kawaii aesthetics.',
    keywords: ['cat heart eyes emoji', 'heart eyes cat emoji', 'cute heart emoji'],
    related: ['heart-eyes-emoji', 'sparkling-heart', 'pink-heart']
  },
  {
    id: 'face-blowing-kiss',
    emoji: '😘',
    slug: 'face-blowing-a-kiss',
    unicode: '1F618',
    tone: 'warm',
    meaning: 'Face blowing a kiss',
    usage: 'Flirty sign-offs, thanks with love, or friendly affection.',
    keywords: ['kiss emoji', 'emoji blowing heart', 'kissing heart emoji'],
    related: ['heart-with-arrow', 'kiss-mark', 'heart-eyes-emoji']
  },
  {
    id: 'hugging-heart',
    emoji: '🤗',
    slug: 'hugging-heart',
    unicode: '1F917',
    tone: 'warm',
    meaning: 'Hugging face with heart hands',
    usage: 'Supportive hugs, thanks, or “sending love” messages.',
    keywords: ['hug heart emoji', 'heart hug emoji', 'healing heart emoji'],
    related: ['heart-hands', 'face-with-hearts', 'mending-heart']
  },
  {
    id: 'finger-heart',
    emoji: '🫰',
    slug: 'finger-heart',
    unicode: '1FAF0',
    tone: 'playful',
    meaning: 'Finger heart gesture',
    usage: 'K-pop style mini hearts, fandom love, or playful thanks.',
    keywords: ['finger heart emoji', 'hand heart emoji', 'mini heart'],
    related: ['heart-hands', 'love-you-gesture', 'pink-heart']
  },
  {
    id: 'rainbow-heart',
    emoji: '❤️‍🌈',
    slug: 'rainbow-heart',
    unicode: '2764 FE0F 200D 1F308',
    tone: 'playful',
    meaning: 'Rainbow heart',
    usage: 'Celebrate Pride, inclusivity, or colorful positivity.',
    keywords: ['rainbow heart emoji', 'colorful heart emoji', 'pride heart'],
    related: ['pink-heart', 'sparkling-heart', 'purple-heart']
  },
  {
    id: 'heart-outline',
    emoji: '♡',
    slug: 'heart-outline',
    unicode: '2661',
    tone: 'neutral',
    meaning: 'Heart outline symbol',
    usage: 'Minimalist love notes, text art, or aesthetic captions.',
    keywords: ['heart outline emoji', 'text heart emoji', 'heart symbol'],
    related: ['heart-suit', 'white-heart', 'pink-heart']
  },
  {
    id: 'double-heart',
    emoji: '💞',
    slug: 'double-heart',
    unicode: '1F49E',
    tone: 'playful',
    meaning: 'Double pink hearts',
    usage: 'Echoing affection, best friends, or reverberating excitement.',
    keywords: ['double heart emoji', 'two pink heart emoji', 'reverberating heart emoji'],
    related: ['two-hearts', 'growing-heart', 'sparkling-heart']
  },
  {
    id: 'star-struck-heart',
    emoji: '🤩',
    slug: 'star-struck-heart',
    unicode: '1F929',
    tone: 'playful',
    meaning: 'Star-struck face with hearts',
    usage: 'Obsessed excitement, fandom hype, or product reveals.',
    keywords: ['heart eyes emoji meaning', 'heart on eyes emoji', 'emoji hearts in eyes'],
    related: ['heart-eyes-emoji', 'sparkling-heart', 'face-with-hearts']
  }
];

export function getEmojiBySlug(slug: string): HeartEmoji | undefined {
  return HEART_EMOJIS.find((item) => item.slug === slug);
}

export function getRelatedEmojis(slug: string): HeartEmoji[] {
  const current = getEmojiBySlug(slug);
  if (!current) {
    return [];
  }
  return current.related
    .map((sibling) => getEmojiBySlug(sibling))
    .filter((value): value is HeartEmoji => Boolean(value));
}
