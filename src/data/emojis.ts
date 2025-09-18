import type { Locale } from '@/lib/i18n';

export type HeartEmoji = {
  id: string;
  emoji: string;
  slug: string;
  unicode: string;
  tone: 'warm' | 'cool' | 'neutral' | 'playful' | 'dark';
  meaning: string;
  usage: string;
  keywords: Record<Locale, string[]>;
  related: string[];
};

const mkKeywords = (en: string[], zh: string[], es: string[]): Record<Locale, string[]> => ({
  en,
  zh,
  es
});

export const HEART_EMOJIS: HeartEmoji[] = [
  {
    id: 'red-heart',
    emoji: '❤️',
    slug: 'red-heart',
    unicode: '2764 FE0F',
    tone: 'warm',
    meaning: 'Classic red heart',
    usage: 'Universal love, romance, and warm connections.',
    keywords: mkKeywords(
      ['love', 'romance', 'passion', 'heart emoji'],
      ['爱情', '浪漫', '热情', '爱心表情'],
      ['amor', 'romance', 'pasión', 'emoji de corazón']
    ),
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
    keywords: mkKeywords(
      ['tender', 'sweet', 'romance', 'heart'],
      ['温柔', '甜蜜', '恋爱', '爱心'],
      ['ternura', 'dulce', 'romance', 'corazón']
    ),
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
    keywords: mkKeywords(
      ['friendship', 'warmth', 'support'],
      ['友情', '温暖', '支持'],
      ['amistad', 'calidez', 'apoyo']
    ),
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
    keywords: mkKeywords(
      ['friendship', 'cheerful', 'kindness'],
      ['友情', '阳光', '善意'],
      ['amistad', 'alegría', 'amabilidad']
    ),
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
    keywords: mkKeywords(
      ['nature', 'growth', 'hope'],
      ['自然', '成长', '希望'],
      ['naturaleza', 'crecimiento', 'esperanza']
    ),
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
    keywords: mkKeywords(
      ['loyalty', 'calm', 'support'],
      ['忠诚', '平静', '支持'],
      ['lealtad', 'calma', 'apoyo']
    ),
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
    keywords: mkKeywords(
      ['gentle', 'sky', 'support'],
      ['温柔', '天空', '支持'],
      ['suave', 'cielo', 'apoyo']
    ),
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
    keywords: mkKeywords(
      ['creativity', 'compassion', 'fandom'],
      ['创意', '关怀', '粉丝'],
      ['creatividad', 'compasión', 'fandom']
    ),
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
    keywords: mkKeywords(
      ['earth', 'comfort', 'support'],
      ['土地', '温暖', '支持'],
      ['tierra', 'comodidad', 'apoyo']
    ),
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
    keywords: mkKeywords(
      ['dark', 'edgy', 'style'],
      ['暗黑', '个性', '风格'],
      ['oscuro', 'atrevido', 'estilo']
    ),
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
    keywords: mkKeywords(
      ['calm', 'neutral', 'balanced'],
      ['平静', '中性', '平衡'],
      ['calma', 'neutral', 'equilibrado']
    ),
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
    keywords: mkKeywords(
      ['pure', 'sincere', 'minimal'],
      ['纯净', '真诚', '极简'],
      ['puro', 'sincero', 'minimalista']
    ),
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
    keywords: mkKeywords(
      ['sad', 'breakup', 'hurt'],
      ['伤心', '分手', '疼痛'],
      ['triste', 'ruptura', 'dolor']
    ),
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
    keywords: mkKeywords(
      ['excitement', 'enthusiasm', 'affection'],
      ['兴奋', '热情', '爱意'],
      ['emoción', 'entusiasmo', 'afecto']
    ),
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
    keywords: mkKeywords(
      ['friendship', 'romance', 'joy'],
      ['友情', '恋爱', '喜悦'],
      ['amistad', 'romance', 'alegría']
    ),
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
    keywords: mkKeywords(
      ['romance', 'affection', 'excitement'],
      ['恋爱', '爱意', '兴奋'],
      ['romance', 'afecto', 'emoción']
    ),
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
    keywords: mkKeywords(
      ['heartbeat', 'love', 'pulse'],
      ['心跳', '爱情', '脉搏'],
      ['latido', 'amor', 'pulso']
    ),
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
    keywords: mkKeywords(
      ['growth', 'gratitude', 'warmth'],
      ['成长', '感激', '温暖'],
      ['crecimiento', 'gratitud', 'calidez']
    ),
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
    keywords: mkKeywords(
      ['glitter', 'celebration', 'special'],
      ['闪耀', '庆祝', '特别'],
      ['brillo', 'celebración', 'especial']
    ),
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
    keywords: mkKeywords(
      ['crush', 'cupid', 'romance'],
      ['心动', '丘比特', '恋爱'],
      ['enamoramiento', 'cupido', 'romance']
    ),
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
    keywords: mkKeywords(
      ['gift', 'celebration', 'present'],
      ['礼物', '庆祝', '惊喜'],
      ['regalo', 'celebración', 'detalle']
    ),
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
    keywords: mkKeywords(
      ['decoration', 'design', 'cute'],
      ['装饰', '设计', '可爱'],
      ['decoración', 'diseño', 'lindo']
    ),
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
    keywords: mkKeywords(
      ['passion', 'flame', 'intense'],
      ['激情', '火焰', '强烈'],
      ['pasión', 'llama', 'intenso']
    ),
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
    keywords: mkKeywords(
      ['healing', 'care', 'support'],
      ['疗愈', '关怀', '支持'],
      ['sanación', 'cuidado', 'apoyo']
    ),
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
    keywords: mkKeywords(
      ['gesture', 'gratitude', 'support'],
      ['手势', '感谢', '支持'],
      ['gesto', 'gratitud', 'apoyo']
    ),
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
    keywords: mkKeywords(
      ['ASL', 'sign', 'love'],
      ['手语', '符号', '爱'],
      ['ASL', 'seña', 'amor']
    ),
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
    keywords: mkKeywords(
      ['medical', 'anatomy', 'biology'],
      ['医疗', '解剖', '生物'],
      ['médico', 'anatomía', 'biología']
    ),
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
    keywords: mkKeywords(
      ['couple', 'romance', 'relationship'],
      ['情侣', '恋爱', '关系'],
      ['pareja', 'romance', 'relación']
    ),
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
    keywords: mkKeywords(
      ['kiss', 'romance', 'affection'],
      ['亲吻', '浪漫', '爱意'],
      ['beso', 'romance', 'afecto']
    ),
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
    keywords: mkKeywords(
      ['kiss', 'lipstick', 'affection'],
      ['吻痕', '口红', '爱意'],
      ['beso', 'labial', 'afecto']
    ),
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
    keywords: mkKeywords(
      ['cards', 'symbol', 'classic'],
      ['纸牌', '符号', '经典'],
      ['cartas', 'símbolo', 'clásico']
    ),
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
    keywords: mkKeywords(
      ['letter', 'valentines', 'message'],
      ['信件', '情人节', '讯息'],
      ['carta', 'san valentín', 'mensaje']
    ),
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
    keywords: mkKeywords(
      ['heart eyes emoji', 'emoji with hearts in eyes', 'love this'],
      ['爱心眼表情', '眼睛冒爱心', '太喜欢了'],
      ['emoji ojos de corazón', 'ojos enamorados', 'me encanta']
    ),
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
    keywords: mkKeywords(
      ['heart face emoji', 'face with hearts emoji', 'soft love'],
      ['爱心脸表情', '被爱包围', '温柔爱意'],
      ['emoji cara con corazones', 'cara enamorada', 'amor tierno']
    ),
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
    keywords: mkKeywords(
      ['cat heart eyes emoji', 'heart eyes cat emoji', 'cute heart emoji'],
      ['猫咪爱心眼', '爱心猫', '可爱爱心'],
      ['emoji gato ojos de corazón', 'gato enamorado', 'corazón tierno']
    ),
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
    keywords: mkKeywords(
      ['kiss emoji', 'emoji blowing heart', 'kissing heart emoji'],
      ['飞吻表情', '吹爱心', '亲吻爱心'],
      ['emoji beso', 'lanzando corazón', 'beso con corazón']
    ),
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
    keywords: mkKeywords(
      ['hug heart emoji', 'heart hug emoji', 'healing heart emoji'],
      ['拥抱爱心', '抱抱表情', '疗愈爱心'],
      ['emoji abrazo corazón', 'abrazo con corazón', 'corazón sanador']
    ),
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
    keywords: mkKeywords(
      ['finger heart emoji', 'hand heart emoji', 'mini heart'],
      ['指心手势', '手比爱心', '迷你爱心'],
      ['emoji finger heart', 'mano corazón', 'mini corazón']
    ),
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
    keywords: mkKeywords(
      ['rainbow heart emoji', 'colorful heart emoji', 'pride heart'],
      ['彩虹爱心', '多彩爱心', '彩虹骄傲'],
      ['emoji corazón arcoíris', 'corazón multicolor', 'corazón pride']
    ),
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
    keywords: mkKeywords(
      ['heart outline emoji', 'text heart emoji', 'heart symbol'],
      ['空心爱心', '文字爱心', '爱心符号'],
      ['emoji corazón delineado', 'corazón de texto', 'símbolo de corazón']
    ),
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
    keywords: mkKeywords(
      ['double heart emoji', 'two pink heart emoji', 'reverberating heart emoji'],
      ['双爱心', '粉红双心', '共鸣爱心'],
      ['emoji doble corazón', 'dos corazones rosa', 'corazones vibrantes']
    ),
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
    keywords: mkKeywords(
      ['heart eyes emoji meaning', 'heart on eyes emoji', 'emoji hearts in eyes'],
      ['星星爱心眼', '眼睛冒爱心', '超爱表情'],
      ['emoji ojos de corazón', 'estrellas enamoradas', 'corazones en los ojos']
    ),
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
