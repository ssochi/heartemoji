import type { Locale } from '@/lib/i18n';

export type EmojiDictionaryEntry = {
  name: string;
  meaning: string;
  usage: string;
};

export type Dictionary = {
  common: {
    copy: string;
    copied: string;
    viewDetails: string;
    adPlaceholder: string;
    backToList: string;
    localeLabel: string;
    copiedToast: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroCtaPrimary: string;
    heroCtaSecondary: string;
    spotlightTitle: string;
    allHeading: string;
    usageTitle: string;
    quickTitle: string;
    quickSubtitle: string;
    seoDescription: string;
  };
  detail: {
    meaningHeading: string;
    usageHeading: string;
    metadataDescription: string;
    relatedHeading: string;
    unicodeLabel: string;
  };
  footer: {
    tagline: string;
    links: {
      about: string;
      feedback: string;
      privacy: string;
    };
  };
  emojiContent: Record<string, EmojiDictionaryEntry>;
};

const en: Dictionary = {
  common: {
    copy: 'Copy',
    copied: 'Copied!',
    viewDetails: 'Open details',
    adPlaceholder: 'Sponsored placement',
    backToList: 'Back to all heart emojis',
    localeLabel: 'Languages',
    copiedToast: 'Copied {name}! Ready to paste 💌'
  },
  home: {
    heroTitle: 'Heart emojis, curated for instant copy & deeper meaning',
    heroSubtitle:
      'Browse a multilingual library of every heart emoji, understand when to use each symbol, and copy it to your clipboard with one tap.',
    heroCtaPrimary: 'Browse the collection',
    heroCtaSecondary: 'Read the style guide',
    spotlightTitle: 'Popular this week',
    allHeading: 'All heart emojis',
    usageTitle: 'Usage tips',
    quickTitle: 'Tap to copy hearts instantly',
    quickSubtitle: 'Popular hearts at your fingertips. Tap any icon to copy it straight to your clipboard.',
    seoDescription:
      'Copy every heart emoji in seconds and learn the nuance behind each color and symbol. Optimized for SEO, speed, and multilingual audiences.'
  },
  detail: {
    meaningHeading: 'Meaning',
    usageHeading: 'How people use it',
    metadataDescription:
      'Full breakdown of meanings, use cases, and related emojis. Copy any heart emoji directly from heartemojis.org.',
    relatedHeading: 'Related hearts',
    unicodeLabel: 'Unicode'
  },
  footer: {
    tagline: 'heartemojis.org — human curated guides for every heart symbol.',
    links: {
      about: 'About',
      feedback: 'Send feedback',
      privacy: 'Privacy'
    }
  },
  emojiContent: {
    'red-heart': {
      name: 'Red Heart',
      meaning: 'The quintessential heart icon that signals true love and sincerity.',
      usage: 'Share it for romantic messages, anniversaries, or heartfelt thank-yous.'
    },
    'pink-heart': {
      name: 'Pink Heart',
      meaning: 'Soft, romantic, and sweet—perfect for tender moments.',
      usage: 'Use when you want to express puppy love, crush energy, or gentle affection.'
    },
    'orange-heart': {
      name: 'Orange Heart',
      meaning: 'Warmth and encouragement without the intensity of red.',
      usage: 'Great for close friends, community shout-outs, or to match a cozy colour palette.'
    },
    'yellow-heart': {
      name: 'Yellow Heart',
      meaning: 'Joyful and sunny, symbolising friendship and optimism.',
      usage: 'Send to celebrate good news, cheer someone up, or reflect vibrant branding.'
    },
    'green-heart': {
      name: 'Green Heart',
      meaning: 'Represents growth, nature, and mindful wellbeing.',
      usage: 'Pair with eco initiatives, self-care check-ins, or earthy aesthetics.'
    },
    'blue-heart': {
      name: 'Blue Heart',
      meaning: 'Cool, calm, and confident—a symbol of trust.',
      usage: 'Use for loyal friendships, fandom shout-outs, or ocean-inspired themes.'
    },
    'light-blue-heart': {
      name: 'Light Blue Heart',
      meaning: 'Gentle support with a calm and airy tone.',
      usage: 'Fits comforting replies, sky-inspired visuals, or peaceful encouragement.'
    },
    'purple-heart': {
      name: 'Purple Heart',
      meaning: 'Creative elegance with a hint of luxury.',
      usage: 'Beloved by fandoms and perfect for celebrating imaginative or royal vibes.'
    },
    'brown-heart': {
      name: 'Brown Heart',
      meaning: 'Grounded and warm, tied to stability and comfort.',
      usage: 'Great for autumn aesthetics, cosy messages, or inclusive celebrations.'
    },
    'black-heart': {
      name: 'Black Heart',
      meaning: 'Stylish, moody, and sometimes sarcastic.',
      usage: 'Use for dark humour, sleek branding, or to contrast vibrant palettes.'
    },
    'grey-heart': {
      name: 'Grey Heart',
      meaning: 'Balanced neutrality with understated care.',
      usage: 'Works for subtle support, brand palettes, or calm check-ins.'
    },
    'white-heart': {
      name: 'White Heart',
      meaning: 'Pure intentions, remembrance, and serenity.',
      usage: 'Share during memorials, minimalist stories, or heartfelt gratitude.'
    },
    'broken-heart': {
      name: 'Broken Heart',
      meaning: 'Cracked down the middle—classic heartbreak symbolism.',
      usage: 'Use to show sadness, bittersweet endings, or dramatic storytelling.'
    },
    'heart-exclamation': {
      name: 'Heart Exclamation',
      meaning: 'Adds affectionate emphasis to any statement.',
      usage: 'Great for hype messages, shout-outs, or love-fuelled announcements.'
    },
    'two-hearts': {
      name: 'Two Hearts',
      meaning: 'Twin hearts floating together, radiating companionship.',
      usage: 'Ideal for besties, couples, or anything that sparks joy in pairs.'
    },
    'revolving-hearts': {
      name: 'Revolving Hearts',
      meaning: 'Hearts in orbit symbolising giddy affection.',
      usage: 'Send during whirlwind romances or when emotions spin with excitement.'
    },
    'beating-heart': {
      name: 'Beating Heart',
      meaning: 'A heart in motion, pulsing with emotion.',
      usage: 'Great for workouts, medical updates, or adrenaline rush moments.'
    },
    'growing-heart': {
      name: 'Growing Heart',
      meaning: 'Layers expanding outward to show feelings growing stronger.',
      usage: 'Pair with gratitude threads, milestones, or community wins.'
    },
    'sparkling-heart': {
      name: 'Sparkling Heart',
      meaning: 'Glittering affection that feels extra special.',
      usage: 'Use for celebrations, heartfelt shout-outs, or glamorous aesthetics.'
    },
    'heart-with-arrow': {
      name: 'Heart with Arrow',
      meaning: 'Cupid struck—signalling new romantic sparks.',
      usage: 'Perfect for Valentine’s posts, meet-cutes, or crush reveals.'
    },
    'heart-with-ribbon': {
      name: 'Heart with Ribbon',
      meaning: 'Wrapped like a present to show gift-worthy love.',
      usage: 'Use for thank-you notes, surprises, or celebratory reveals.'
    },
    'heart-decoration': {
      name: 'Heart Decoration',
      meaning: 'Graphic heart designed for festive flair.',
      usage: 'Fits posters, stickers, or anywhere you want to decorate with love.'
    },
    'heart-on-fire': {
      name: 'Heart on Fire',
      meaning: 'Blazing passion with dramatic flair.',
      usage: 'Send when feelings are intense, romantic, or full of excitement.'
    },
    'mending-heart': {
      name: 'Mending Heart',
      meaning: 'Bandaged heart symbolising healing and care.',
      usage: 'Use for recovery updates, supportive replies, or self-compassion.'
    },
    'heart-hands': {
      name: 'Heart Hands',
      meaning: 'Hands forming a heart shape as a universal thank-you.',
      usage: 'Perfect for cheering audiences, gratitude posts, or fan messages.'
    },
    'love-you-gesture': {
      name: 'Love-You Gesture',
      meaning: 'ASL-inspired hand sign for “I love you.”',
      usage: 'Great for inclusive messaging, fan art, or affectionate sign-offs.'
    },
    'anatomical-heart': {
      name: 'Anatomical Heart',
      meaning: 'Detailed organ representing the literal heart.',
      usage: 'Use in science explainers, medical updates, or realistic art.'
    },
    'couple-with-heart': {
      name: 'Couple with Heart',
      meaning: 'Two people sharing a heart between them.',
      usage: 'Pair with relationship milestones, date nights, or romantic vignettes.'
    },
    kiss: {
      name: 'Kiss',
      meaning: 'Two faces leaning in with a heart between them.',
      usage: 'Use for romantic announcements, engagements, or affectionate moments.'
    },
    'kiss-mark': {
      name: 'Kiss Mark',
      meaning: 'A lipstick kiss imprint full of charm.',
      usage: 'Ideal for glam posts, flirty notes, or playful branding.'
    },
    'heart-suit': {
      name: 'Heart Suit',
      meaning: 'Classic card-suit heart symbol.',
      usage: 'Use in card game references, vintage design, or minimalist layouts.'
    },
    'love-letter': {
      name: 'Love Letter',
      meaning: 'Envelope sealed with a heart for heartfelt messages.',
      usage: 'Send when you want to symbolise handwritten affection or big announcements.'
    }
  }
};

const zh: Dictionary = {
  common: {
    copy: '复制',
    copied: '已复制！',
    viewDetails: '查看详情',
    adPlaceholder: '广告位招租',
    backToList: '返回心形表情总览',
    localeLabel: '语言',
    copiedToast: '已复制 {name}！尽情粘贴 💌'
  },
  home: {
    heroTitle: '心形表情一站式收藏，快速复制又懂含义',
    heroSubtitle: '浏览所有心形表情符号，了解每种颜色的使用场景，并且一键复制到剪贴板。',
    heroCtaPrimary: '浏览全部表情',
    heroCtaSecondary: '查看使用指南',
    spotlightTitle: '本周人气',
    allHeading: '全部心形表情',
    usageTitle: '使用建议',
    quickTitle: '快速复制心形表情',
    quickSubtitle: '热门爱心一键复制，立即发送给你的朋友。',
    seoDescription: 'heartemojis.org 为多语言用户打造的心形表情资料库，支持快速复制、SEO 友好且内容完善。'
  },
  detail: {
    meaningHeading: '含义解析',
    usageHeading: '常见用法',
    metadataDescription: '了解每一个心形表情的含义、情绪温度与相关搭配，并可直接复制使用。',
    relatedHeading: '相关表情',
    unicodeLabel: 'Unicode 编码'
  },
  footer: {
    tagline: 'heartemojis.org — 用心整理每一种心形符号的故事。',
    links: {
      about: '关于我们',
      feedback: '意见反馈',
      privacy: '隐私政策'
    }
  },
  emojiContent: {
    'red-heart': {
      name: '红心 ❤️',
      meaning: '经典的爱心符号，代表真挚与热烈的感情。',
      usage: '用于告白、纪念日、感谢信息或任何充满爱的时刻。'
    },
    'pink-heart': {
      name: '粉红心 🩷',
      meaning: '温柔甜蜜，带着初恋般的心动感。',
      usage: '适合表达暧昧、悸动或想说“你好可爱”。'
    },
    'orange-heart': {
      name: '橙色心 🧡',
      meaning: '温暖有活力，却不过分炽热。',
      usage: '用来支持好友、鼓励伙伴或搭配暖色系内容。'
    },
    'yellow-heart': {
      name: '黄色心 💛',
      meaning: '阳光、友谊与真诚的好心情。',
      usage: '分享喜讯、祝福他人或传递活力。'
    },
    'green-heart': {
      name: '绿色心 💚',
      meaning: '象征成长、环保与身心的疗愈。',
      usage: '适合绿色行动、健康打卡或自然系美学。'
    },
    'blue-heart': {
      name: '蓝色心 💙',
      meaning: '冷静沉稳，代表信任与陪伴。',
      usage: '粉丝互动、海洋主题或想表达“我一直在”。'
    },
    'light-blue-heart': {
      name: '淡蓝心 🩵',
      meaning: '柔和宁静，带来安心与包容。',
      usage: '安慰、鼓励或营造轻盈的天空感。'
    },
    'purple-heart': {
      name: '紫色心 💜',
      meaning: '创意与优雅兼具，也常代表粉丝应援。',
      usage: '适合艺术、偶像应援或带点神秘的内容。'
    },
    'brown-heart': {
      name: '棕色心 🤎',
      meaning: '踏实温暖，联想到木头与可可色。',
      usage: '秋季氛围、咖啡生活或表达拥抱般的安定感。'
    },
    'black-heart': {
      name: '黑色心 🖤',
      meaning: '带点酷味与反差的爱心。',
      usage: '用在暗黑幽默、时尚感或想强调个性的时候。'
    },
    'grey-heart': {
      name: '灰色心 🩶',
      meaning: '低调却温柔，象征平衡与克制。',
      usage: '适合安静的关怀、品牌配色或简洁风格。'
    },
    'white-heart': {
      name: '白色心 🤍',
      meaning: '纯粹、纪念与祝福。',
      usage: '用在怀念、婚礼或极简设计中，都十分合适。'
    },
    'broken-heart': {
      name: '碎心 💔',
      meaning: '心被裂开，直白表达伤心。',
      usage: '失恋、难过或戏剧化的情绪宣泄。'
    },
    'heart-exclamation': {
      name: '感叹号爱心 ❣️',
      meaning: '充满热情的惊叹号。',
      usage: '为重点文字加戏、表达激动或爱的告白。'
    },
    'two-hearts': {
      name: '双心 💕',
      meaning: '两颗爱心一起漂浮，象征心意相连。',
      usage: '闺蜜、情侣或任何需要“我们在一起”的场景。'
    },
    'revolving-hearts': {
      name: '旋转心 💞',
      meaning: '围绕打转的小心心，散发幸福气泡。',
      usage: '表达恋爱旋风、兴奋到飘起来的心情。'
    },
    'beating-heart': {
      name: '跳动的心 💓',
      meaning: '心脏扑通扑通地跳动。',
      usage: '运动、紧张或怦然心动都能使用。'
    },
    'growing-heart': {
      name: '扩张心 💗',
      meaning: '层层外扩，代表感情逐渐变深。',
      usage: '感谢、成长故事或社区里暖心的时刻。'
    },
    'sparkling-heart': {
      name: '闪耀心 💖',
      meaning: '闪光特效让爱心更特别。',
      usage: '庆祝、应援或想让对方知道“你很棒”。'
    },
    'heart-with-arrow': {
      name: '丘比特之心 💘',
      meaning: '被箭射中的爱心，代表刚萌芽的爱情。',
      usage: '情人节、表白或想说“我被你吸引”。'
    },
    'heart-with-ribbon': {
      name: '礼物爱心 💝',
      meaning: '打上蝴蝶结的心，像是精心包装的礼物。',
      usage: '生日、周年庆或准备惊喜的时刻。'
    },
    'heart-decoration': {
      name: '装饰爱心 💟',
      meaning: '偏图形化的爱心图案。',
      usage: '适合贴纸、海报或任何需要点缀的版面。'
    },
    'heart-on-fire': {
      name: '燃烧的心 ❤️‍🔥',
      meaning: '火焰包裹着心，激情澎湃。',
      usage: '热恋、热血或极度兴奋的瞬间。'
    },
    'mending-heart': {
      name: '疗伤心 ❤️‍🩹',
      meaning: '包着绷带的心，象征修复与照顾。',
      usage: '鼓励朋友疗愈、表达关怀或自我修复。'
    },
    'heart-hands': {
      name: '比心手势 🫶',
      meaning: '用双手比出一个爱心。',
      usage: '粉丝应援、感谢支持或传达温暖的互动。'
    },
    'love-you-gesture': {
      name: '爱你手势 🤟',
      meaning: '源自手语的“我爱你”手势。',
      usage: '强调包容、多元或真心的表达。'
    },
    'anatomical-heart': {
      name: '解剖学心脏 🫀',
      meaning: '真实器官的描绘。',
      usage: '医学、科普或写实风格的设计。'
    },
    'couple-with-heart': {
      name: '情侣与爱心 💑',
      meaning: '两人之间漂浮着爱心。',
      usage: '恋人日常、纪念日或甜蜜瞬间。'
    },
    kiss: {
      name: '亲吻 💏',
      meaning: '两张脸在爱心见证下吻在一起。',
      usage: '求婚、婚礼或公开放闪时使用。'
    },
    'kiss-mark': {
      name: '唇印 💋',
      meaning: '带有口红印记的吻痕。',
      usage: '适合时尚、美妆或俏皮表达。'
    },
    'heart-suit': {
      name: '扑克牌红心 ♥️',
      meaning: '扑克牌花色中的红心符号。',
      usage: '桌游聚会、纸牌主题或复古设计。'
    },
    'love-letter': {
      name: '情书 💌',
      meaning: '带着爱心封印的信。',
      usage: '象征纸本告白、重要讯息或浪漫公告。'
    }
  }
};

const dictionaries: Record<Locale, Dictionary> = {
  en,
  zh
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
