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
    nav: {
      home: string;
      colors: string;
      copy: string;
      textArt: string;
      generator: string;
    };
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
    colorHeading: string;
    colorDescription: string;
    copyHeading: string;
    copyDescription: string;
    textArtHeading: string;
    textArtDescription: string;
    faqHeading: string;
    usageBody: string;
    seoDescription: string;
  };
  detail: {
    meaningHeading: string;
    usageHeading: string;
    metadataDescription: string;
    relatedHeading: string;
    unicodeLabel: string;
    guideHeading: string;
    usageListHeading: string;
    combosHeading: string;
    alsoSearched: string;
  };
  footer: {
    tagline: string;
    links: {
      about: string;
      feedback: string;
      privacy: string;
    };
  };
  pages: {
    copy: {
      title: string;
      description: string;
      bundlesIntro: string;
      toast: string;
    };
    textArt: {
      title: string;
      description: string;
      toast: string;
    };
    generator: {
      title: string;
      description: string;
      countLabel: string;
      helperText: string;
      emojiLabel: string;
      emojiHelper: string;
      previewLabel: string;
      toast: string;
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
    copiedToast: 'Copied {name}! Ready to paste.',
    nav: {
      home: 'Home',
      colors: 'Color meanings',
      copy: 'Copy packs',
      textArt: 'Text art',
      generator: 'Heart generator'
    }
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
    colorHeading: 'Heart emoji color meanings',
    colorDescription:
      'Compare what different color heart emojis mean. From red to rainbow hearts, understand how each shade lands in chats, captions, and campaigns.',
    copyHeading: 'Heart emoji copy and paste packs',
    copyDescription:
      'Build your own heart emoji copy paste stash—romance strings, friendship gradients, minimalist hearts, and fandom reactions.',
    textArtHeading: 'Heart text emoji & ASCII art',
    textArtDescription:
      'Need text-only heart symbols or kaomoji? Grab outlined hearts, emoticons, and typography art ready to copy.',
    faqHeading: 'Heart emoji meanings & FAQs',
    usageBody:
      'Need brand-guided assets? Build your own collection by remixing these hearts with gradients, stickers, and fonts.',
    seoDescription:
      'Copy every heart emoji in seconds and learn the nuance behind each color and symbol. Optimized for SEO, speed, and multilingual audiences.'
  },
  detail: {
    meaningHeading: 'Meaning',
    usageHeading: 'How people use it',
    metadataDescription:
      'Full breakdown of meanings, use cases, and related emojis. Copy any heart emoji directly from heartemojis.org.',
    relatedHeading: 'Related hearts',
    unicodeLabel: 'Unicode',
    guideHeading: 'Meanings at a glance',
    usageListHeading: 'How people use it',
    combosHeading: 'Copy trending combos',
    alsoSearched: 'Also searched as'
  },
  footer: {
    tagline: 'heartemojis.org — human curated guides for every heart symbol.',
    links: {
      about: 'About',
      feedback: 'Send feedback',
      privacy: 'Privacy'
    }
  },
  pages: {
    copy: {
      title: 'Heart emoji copy and paste library',
      description:
        'Curated heart emoji copy and paste collections for romance, friendship, gradients, fandoms, and minimalist designs.',
      bundlesIntro:
        'Choose a pack below to instantly copy emoji hearts tailored for different moods and storytelling styles.',
      toast: 'Copied! Heart combo ready to paste.'
    },
    textArt: {
      title: 'Heart text emoji & ASCII art',
      description:
        'Copy text-based heart symbols, kaomoji, and decorative ASCII combos for bios, captions, or no-emoji keyboards.',
      toast: 'Copied! Your text art is ready to paste.'
    },
    generator: {
      title: 'Heart emoji generator',
      description:
        'Create massive strings of ❤️ emojis. Perfect for fan projects, typography art, or celebratory comment storms.',
      countLabel: 'Number of hearts',
      helperText: 'Adjust the count (10–1000) to refresh the preview and copy your custom heart line.',
      emojiLabel: 'Choose heart style',
      emojiHelper: 'Tap a different heart to change the vibe of your string.',
      previewLabel: 'Live preview',
      toast: 'Copied! {count} × {emoji} ready to paste.'
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
    },
    'heart-eyes-emoji': {
      name: 'Heart Eyes Emoji',
      meaning: 'Eyes replaced with hearts to show you are obsessed or in love.',
      usage: 'React to jaw-dropping news, fandom reveals, pets, or people you adore.'
    },
    'face-with-hearts': {
      name: 'Smiling Face with Hearts',
      meaning: 'A soft smile surrounded by floating hearts for wholesome affection.',
      usage: 'Send to comfort friends, celebrate kind deeds, or share cozy gratitude vibes.'
    },
    'cat-heart-eyes': {
      name: 'Heart Eyes Cat Emoji',
      meaning: 'A feline with heart-shaped eyes that screams “too cute!”.',
      usage: 'Perfect for pet photos, kawaii aesthetics, or adorable product drops.'
    },
    'face-blowing-a-kiss': {
      name: 'Face Blowing a Kiss',
      meaning: 'Puckered lips and a floating heart to show flirty or friendly affection.',
      usage: 'Use for goodnight texts, thank-yous with love, or playful replies.'
    },
    'hugging-heart': {
      name: 'Hugging Heart Emoji',
      meaning: 'Open hands and hearts radiating support and comfort.',
      usage: 'Send as a virtual hug, emotional support, or “thinking of you” message.'
    },
    'finger-heart': {
      name: 'Finger Heart Emoji',
      meaning: 'Hand gesture forming a mini heart, inspired by Korean pop culture.',
      usage: 'Great for fandom shout-outs, backstage selfies, or grateful thank-you posts.'
    },
    'rainbow-heart': {
      name: 'Rainbow Heart',
      meaning: 'A heart with a rainbow trail celebrating inclusion and pride.',
      usage: 'Use for LGBTQIA+ pride, colorful campaigns, or messages about diversity.'
    },
    'heart-outline': {
      name: 'Heart Outline',
      meaning: 'A hollow heart used widely in text art and minimal aesthetics.',
      usage: 'Great for captions, mood boards, or when you want a softer love symbol.'
    },
    'double-heart': {
      name: 'Double Heart Emoji',
      meaning: 'Two hearts together showing affection that keeps echoing outward.',
      usage: 'Share with best friends, fandom mutuals, or whenever feelings keep growing.'
    },
    'star-struck-heart': {
      name: 'Star-Struck Heart Eyes',
      meaning: 'Sparkly heart eyes showing you are dazzled and impressed.',
      usage: 'Respond to epic performances, new drops, or anything that deserves a wow.'
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
    copiedToast: '已复制 {name}，马上粘贴。',
    nav: {
      home: '首页',
      colors: '颜色含义',
      copy: '复制合集',
      textArt: '字符艺术',
      generator: '心形生成器'
    }
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
    colorHeading: '心形表情的颜色含义',
    colorDescription: '整理常见问题：不同颜色的爱心 emoji 意味着什么？从红心到彩虹心，一次看懂聊天与社群贴文的使用方式。',
    copyHeading: '心形表情复制合集',
    copyDescription: '精选恋爱、友情、渐层、极简与应援风格的爱心组合，一键复制、随处贴上。',
    textArtHeading: '心形字符与文字图案',
    textArtDescription: '没有 emoji 键盘也能用！这里提供空心爱心、颜文字与 ASCII 小作品，复制就能用在简介或贴文。',
    faqHeading: '心形表情常见问题',
    usageBody: '需要更多素材？将这些爱心搭配渐层、贴纸或字体，就能延伸出符合品牌风格的视觉内容。',
    seoDescription: 'heartemojis.org 为多语言用户打造的心形表情资料库，支持快速复制、SEO 友好且内容完善。'
  },
  detail: {
    meaningHeading: '含义解析',
    usageHeading: '常见用法',
    metadataDescription: '了解每一个心形表情的含义、情绪温度与相关搭配，并可直接复制使用。',
    relatedHeading: '相关表情',
    unicodeLabel: 'Unicode 编码',
    guideHeading: '重点速览',
    usageListHeading: '常见用法',
    combosHeading: '热门组合',
    alsoSearched: '常见搜索关键字'
  },
  footer: {
    tagline: 'heartemojis.org — 用心整理每一种心形符号的故事。',
    links: {
      about: '关于我们',
      feedback: '意见反馈',
      privacy: '隐私政策'
    }
  },
  pages: {
    copy: {
      title: '心形表情复制大全',
      description: '收集适合恋爱告白、友情支持、渐层风格、粉丝应援与极简设计的爱心组合，一键复制随时使用。',
      bundlesIntro: '从以下分类挑选喜欢的爱心串，点一下就能复制到剪贴板。',
      toast: '爱心组合已复制，马上粘贴。'
    },
    textArt: {
      title: '心形字符与 ASCII 艺术',
      description: '提供空心爱心、颜文字、文字画等多款字符设计，适合用在无表情符号的环境或打造特别的标题。',
      toast: '已复制文本爱心，马上粘贴。'
    },
    generator: {
      title: '心形表情生成器',
      description: '自订数量最多 1000 个 ❤️，生成属于你的爱心长条，用于粉丝应援、排版或庆祝留言。',
      countLabel: '爱心数量',
      helperText: '设定 10–1000 之间的数值，预览会即时更新，复制后即可使用。',
      emojiLabel: '选择心形样式',
      emojiHelper: '点击不同的爱心，就能快速切换成喜欢的风格。',
      previewLabel: '即时预览',
      toast: '{count} 个 {emoji} 已复制，马上粘贴。'
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
    },
    'heart-eyes-emoji': {
      name: '爱心眼表情 😍',
      meaning: '双眼变成爱心，表示彻底爱上或超强喜欢。',
      usage: '看到超棒的消息、偶像或宠物时发送，表示“我太爱了”。'
    },
    'face-with-hearts': {
      name: '环绕爱心笑脸 🥰',
      meaning: '脸庞被爱心包围，散发温柔与感激。',
      usage: '感谢朋友、回应暖心关怀或分享幸福时最适合。'
    },
    'cat-heart-eyes': {
      name: '爱心眼猫咪 😻',
      meaning: '猫咪露出爱心双眼，可爱到不行。',
      usage: '晒宠物、分享萌物或强调“超可爱”时使用。'
    },
    'face-blowing-a-kiss': {
      name: '飞吻表情 😘',
      meaning: '嘟嘴送出爱心，用来表达暧昧或感谢。',
      usage: '睡前、告白或友好的感谢讯息都很适合。'
    },
    'hugging-heart': {
      name: '拥抱小心心 🤗',
      meaning: '张开双手拥抱，释放关怀与支持。',
      usage: '想给对方鼓励、安慰或说“给你一个抱抱”时发送。'
    },
    'finger-heart': {
      name: '指心手势 🫰',
      meaning: '韩流最爱的迷你爱心手势，代表“爱你”。',
      usage: '粉丝应援、打招呼或表达感谢时非常可爱。'
    },
    'rainbow-heart': {
      name: '彩虹爱心 ❤️‍🌈',
      meaning: '拖着彩虹的爱心，象征多元与包容。',
      usage: '庆祝 Pride、支持多元社群或传达多彩能量时使用。'
    },
    'heart-outline': {
      name: '空心爱心 ♡',
      meaning: '线条爱心，常见于文字艺术与极简风格。',
      usage: '用于排版、签名或想要低调表达爱意时最适合。'
    },
    'double-heart': {
      name: '双粉红心 💞',
      meaning: '两颗心一前一后，感情不断扩散。',
      usage: '送给闺蜜、情侣或任何感情持续升温的对象。'
    },
    'star-struck-heart': {
      name: '星星爱心眼 🤩',
      meaning: '闪亮的爱心眼，代表被惊艳到的喜欢。',
      usage: '看到精彩演出、新品或任何“一秒圈粉”的东西时使用。'
    }
  }
};

const dictionaries: Record<Locale, Dictionary> = {
  en,
  zh,
  es: {
    common: {
      copy: 'Copiar',
      copied: '¡Copiado!',
      viewDetails: 'Ver detalles',
      adPlaceholder: 'Espacio patrocinado',
      backToList: 'Volver a todos los emojis de corazón',
      localeLabel: 'Idiomas',
      copiedToast: '¡Copiaste {name}! Lista para pegar.',
      nav: {
        home: 'Inicio',
        colors: 'Significados de color',
        copy: 'Packs para copiar',
        textArt: 'Arte de texto',
        generator: 'Generador de corazones'
      }
    },
    home: {
      heroTitle: 'Emojis de corazón listos para copiar y entender al instante',
      heroSubtitle:
        'Explora una biblioteca multilingüe con cada emoji de corazón, aprende sus significados y cópialos al portapapeles con un toque.',
      heroCtaPrimary: 'Ver la colección',
    heroCtaSecondary: 'Guía de significados',
    spotlightTitle: 'Tendencia esta semana',
    allHeading: 'Todos los emojis de corazón',
    usageTitle: 'Consejos de uso',
    quickTitle: 'Toca para copiar corazones al instante',
    quickSubtitle: 'Los corazones más usados, listos para copiar y pegar donde quieras.',
    colorHeading: 'Significado de los colores del corazón',
    colorDescription:
      'Compara qué significa cada color de corazón emoji. Del rojo al arcoíris, descubre cómo se interpreta cada tono en chats y campañas.',
    copyHeading: 'Packs de emojis de corazón para copiar y pegar',
    copyDescription:
      'Arma tu propio repertorio: cadenas románticas, gradientes de amistad, corazones minimalistas y reacciones para fandoms.',
    textArtHeading: 'Emojis de corazón en texto y arte ASCII',
    textArtDescription:
      '¿Sin teclado de emojis? Copia corazones delineados, kaomoji y figuras de texto listas para tus bios o publicaciones.',
    faqHeading: 'Preguntas frecuentes sobre emojis de corazón',
    usageBody:
      '¿Buscas más recursos? Mezcla estos corazones con degradados, stickers o tipografías y crea visuales coherentes con tu marca.',
    seoDescription:
      'Copia cualquier emoji de corazón en segundos y descubre el significado de cada color. Optimizado para SEO, velocidad y audiencias globales.'
  },
    detail: {
      meaningHeading: 'Significado',
      usageHeading: 'Cómo se usa',
      metadataDescription:
        'Descripción completa de los significados, usos y emojis relacionados. Copia cualquier emoji de corazón desde heartemojis.org.',
      relatedHeading: 'Corazones relacionados',
      unicodeLabel: 'Unicode',
      guideHeading: 'Resumen rápido',
      usageListHeading: 'Usos habituales',
      combosHeading: 'Combos destacados',
      alsoSearched: 'También se busca como'
    },
    footer: {
      tagline: 'heartemojis.org — Guías cuidadas para cada símbolo de corazón.',
      links: {
        about: 'Nosotros',
        feedback: 'Enviar comentarios',
        privacy: 'Privacidad'
      }
    },
    pages: {
      copy: {
        title: 'Biblioteca para copiar emojis de corazón',
        description:
          'Colecciones listas para copiar: corazones románticos, gradientes de amistad, minimalistas y reacciones para fandoms.',
        bundlesIntro: 'Elige un paquete y toca el botón de copiar para llevarte la combinación directamente al portapapeles.',
        toast: '¡Combo copiado! Listo para pegar.'
      },
      textArt: {
        title: 'Emojis de corazón en texto y arte ASCII',
        description:
          'Corazones delineados, kaomoji y diseños de caracteres listos para bios, subtítulos o cuando no tienes teclado de emoji.',
        toast: 'Arte de texto copiado. Pégalo cuando quieras.'
      },
      generator: {
        title: 'Generador de emojis de corazón',
        description:
          'Crea cadenas de hasta 1000 corazones ❤️ para proyectos de fans, arte tipográfico o comentarios festivos.',
        countLabel: 'Cantidad de corazones',
        helperText: 'Elige un número entre 10 y 1000. El previo se actualizará y podrás copiarlo al instante.',
        emojiLabel: 'Elige el estilo de corazón',
        emojiHelper: 'Toca cualquier corazón para ajustar el tono de tu cadena.',
        previewLabel: 'Vista previa en vivo',
        toast: '¡Copiaste {count} × {emoji}! Pégalo cuando quieras.'
      }
    },
    emojiContent: {
      'red-heart': {
        name: 'Corazón rojo ❤️',
        meaning: 'El corazón más clásico: amor romántico y agradecimiento sincero.',
        usage: 'Envíalo en aniversarios, propuestas o mensajes cariñosos.'
      },
      'pink-heart': {
        name: 'Corazón rosa 🩷',
        meaning: 'Ternura, autocuidado y sentimientos que florecen.',
        usage: 'Perfecto para besties, crushes o publicaciones pastel.'
      },
      'orange-heart': {
        name: 'Corazón naranja 🧡',
        meaning: 'Apoyo cálido sin presión romántica.',
        usage: 'Ideal para amistades cercanas o campañas colaborativas.'
      },
      'yellow-heart': {
        name: 'Corazón amarillo 💛',
        meaning: 'Luz, lealtad y energía de mejores amigos.',
        usage: 'Úsalo al celebrar buenas noticias o agradecer a tu comunidad.'
      },
      'green-heart': {
        name: 'Corazón verde 💚',
        meaning: 'Renovación, naturaleza y crecimiento.',
        usage: 'Acompaña mensajes de bienestar, sostenibilidad o apoyo amistoso.'
      },
      'blue-heart': {
        name: 'Corazón azul 💙',
        meaning: 'Confianza serena y apoyo constante.',
        usage: 'Funciona bien en amistades a distancia o causas solidarias.'
      },
      'light-blue-heart': {
        name: 'Corazón celeste 🩵',
        meaning: 'Apoyo tranquilo, cielos soñadores y cariño platónico.',
        usage: 'Añádelo a mensajes de ánimo o diseños suaves.'
      },
      'purple-heart': {
        name: 'Corazón morado 💜',
        meaning: 'Creatividad, admiración y fandom leal.',
        usage: 'Úsalo en contenidos artísticos o para apoyar a tus ídolos.'
      },
      'brown-heart': {
        name: 'Corazón marrón 🤎',
        meaning: 'Calidez, inclusión y estética acogedora.',
        usage: 'Perfecto para contenidos de café, chocolate o tonos tierra.'
      },
      'black-heart': {
        name: 'Corazón negro 🖤',
        meaning: 'Estilo gótico, humor oscuro o emociones intensas.',
        usage: 'Combínalo con 💀 o 🕶️ para crear contraste dramático.'
      },
      'grey-heart': {
        name: 'Corazón gris 🩶',
        meaning: 'Equilibrio discreto y emociones suaves.',
        usage: 'Ideal para branding minimalista o mensajes serenos.'
      },
      'white-heart': {
        name: 'Corazón blanco 🤍',
        meaning: 'Pureza, recuerdo y elegancia minimalista.',
        usage: 'Se usa en bodas, homenajes o diseños invernales.'
      },
      'broken-heart': {
        name: 'Corazón roto 💔',
        meaning: 'Dolor, separación o decepción intensa.',
        usage: 'Compártelo cuando quieras expresar tristeza o dramas románticos.'
      },
      'heart-exclamation': {
        name: 'Signo de exclamación corazón ❣️',
        meaning: 'Añade énfasis afectuoso a cualquier frase.',
        usage: 'Perfecto para destacar noticias emocionantes o agradecimientos.'
      },
      'two-hearts': {
        name: 'Dos corazones 💕',
        meaning: 'Cariño compartido, amistad cercana o romance ligero.',
        usage: 'Úsalos con tu persona favorita o mejores amigas.'
      },
      'revolving-hearts': {
        name: 'Corazones girando 💞',
        meaning: 'Amor que crece y gira de emoción.',
        usage: 'Excelente para momentos felices o anuncios románticos.'
      },
      'beating-heart': {
        name: 'Corazón latiendo 💓',
        meaning: 'Emociones fuertes, adrenalina o salud cardiaca.',
        usage: 'Añade ritmo a publicaciones de ejercicio o confesiones emocionantes.'
      },
      'growing-heart': {
        name: 'Corazón en expansión 💗',
        meaning: 'Sentimientos que crecen capa por capa.',
        usage: 'Útil para agradecer apoyo o celebrar logros comunitarios.'
      },
      'sparkling-heart': {
        name: 'Corazón brillante 💖',
        meaning: 'Carisma, celebración y aprecio especial.',
        usage: 'Úsalo en felicitaciones, fanart o éxitos personales.'
      },
      'heart-on-fire': {
        name: 'Corazón en llamas ❤️‍🔥',
        meaning: 'Pasión intensa y emociones ardientes.',
        usage: 'Perfecto para amores intensos o momentos épicos.'
      },
      'mending-heart': {
        name: 'Corazón vendado ❤️‍🩹',
        meaning: 'Sanación emocional y cuidados sinceros.',
        usage: 'Envíalo cuando apoyas a alguien en recuperación o te reconcilias contigo misma.'
      },
      'heart-hands': {
        name: 'Manos corazón 🫶',
        meaning: 'Gestos de gratitud y amor visible.',
        usage: 'Ideal para fandoms, comunidades y agradecimientos públicos.'
      },
      'love-you-gesture': {
        name: 'Señal “te amo” 🤟',
        meaning: 'Signo inspirado en la lengua de señas que dice “I love you”.',
        usage: 'Muestra apoyo inclusivo, cariño o energía de fandom.'
      },
      'anatomical-heart': {
        name: 'Corazón anatómico 🫀',
        meaning: 'Representación realista del órgano.',
        usage: 'Úsalo en contextos médicos, educativos o artísticos.'
      },
      'couple-with-heart': {
        name: 'Pareja con corazón 💑',
        meaning: 'Pareja enamorada compartiendo un corazón.',
        usage: 'Ideal para historias románticas, viajes en pareja o celebraciones.'
      },
      kiss: {
        name: 'Beso 💏',
        meaning: 'Dos personas besándose con un corazón flotante.',
        usage: 'Acompaña anuncios de compromiso, bodas o momentos románticos.'
      },
      'kiss-mark': {
        name: 'Marca de beso 💋',
        meaning: 'Huella de labial con mucha actitud.',
        usage: 'Úsalo en mensajes coquetos, moda o beauty.'
      },
      'heart-suit': {
        name: 'Corazón de naipes ♥️',
        meaning: 'Símbolo clásico de cartas y juegos.',
        usage: 'Perfecto para noches de juego o diseños vintage.'
      },
      'love-letter': {
        name: 'Carta de amor 💌',
        meaning: 'Carta sellada con corazón que lleva buenas noticias.',
        usage: 'Acompaña invitaciones románticas, sorpresas o fan mail.'
      },
      'heart-eyes-emoji': {
        name: 'Emoji con ojos de corazón 😍',
        meaning: 'Enamoramiento instantáneo y emoción total.',
        usage: 'Reacciona a outfits, presentaciones o mascotas adorables.'
      },
      'face-with-hearts': {
        name: 'Carita con corazones 🥰',
        meaning: 'Sonrisa dulce rodeada de corazones.',
        usage: 'Expresa cariño, empatía o gratitud sincera.'
      },
      'cat-heart-eyes': {
        name: 'Gato con ojos de corazón 😻',
        meaning: 'Versión felina y kawaii del clásico emoji enamorado.',
        usage: 'Ideal para contenido de mascotas, plushies o estéticas cute.'
      },
      'face-blowing-a-kiss': {
        name: 'Carita enviando beso 😘',
        meaning: 'Un beso amistoso o coqueto con mini corazón.',
        usage: 'Perfecto para despedidas cariñosas o agradecimientos con cariño.'
      },
      'hugging-heart': {
        name: 'Carita abrazando corazón 🤗',
        meaning: 'Abrazos digitales llenos de apoyo.',
        usage: 'Envíalo a quien necesita ánimo o para decir “gracias por estar”.'
      },
      'finger-heart': {
        name: 'Finger heart 🫰',
        meaning: 'Mini corazón coreano que dice “love you”.',
        usage: 'Útil en mensajes de fandom, agradecimientos o selfies backstage.'
      },
      'rainbow-heart': {
        name: 'Corazón arcoíris ❤️‍🌈',
        meaning: 'Celebración Pride y amor inclusivo.',
        usage: 'Úsalo en mensajes de diversidad, eventos LGBTQIA+ o campañas coloridas.'
      },
      'heart-outline': {
        name: 'Corazón delineado ♡',
        meaning: 'Corazón estilo texto perfecto para diseños minimalistas.',
        usage: 'Colócalo en bios, firmas o arte tipográfico.'
      },
      'double-heart': {
        name: 'Corazones dobles 💞',
        meaning: 'Amor que resuena y va en aumento.',
        usage: 'Ideal para mejores amigas, parejas y celebraciones felices.'
      },
      'star-struck-heart': {
        name: 'Carita deslumbrada 🤩',
        meaning: 'Ojos brillantes de corazón que muestran fascinación.',
        usage: 'Reacciona a shows, lanzamientos o cualquier cosa que te deje sin palabras.'
      }
    }
  }
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
