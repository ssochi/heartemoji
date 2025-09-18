import type { Locale } from '@/lib/i18n';

export type ColorGuide = {
  slug: string;
  emoji: string;
  title: string;
  description: Record<Locale, string>;
  keywords: string[];
};

export const COLOR_GUIDE: ColorGuide[] = [
  {
    slug: 'red-heart-meaning',
    emoji: '❤️',
    title: 'Red heart emoji meaning',
    description: {
      en: 'The red heart emoji means classic love, romance, and heartfelt appreciation. Use the red heart emoji meaning guide below to learn how to pair it with 💋, 💌, or ❤️‍🔥 for proposals, anniversary posts, or “thank you with love” notes.',
      zh: '红色爱心 emoji 代表经典的爱情与真挚感谢，可与 💋、💌、❤️‍🔥 搭配，适合求婚、纪念日或表示“满满爱意的感谢”。',
      es: 'El emoji de corazón rojo representa amor clásico, romance y gratitud sincera. Combínalo con 💋, 💌 o ❤️‍🔥 para propuestas, aniversarios o mensajes de “gracias con amor”.'
    },
    keywords: ['red heart emoji', 'red heart emoji meaning', 'meaning of red heart emoji', 'what does the red heart emoji mean']
  },
  {
    slug: 'pink-heart-meaning',
    emoji: '🩷',
    title: 'Pink heart emoji meaning',
    description: {
      en: 'The pink heart emoji meaning leans toward softness, self-care vibes, and newly blossoming feelings. Pair pink heart emoji copy and paste ideas with 💞, 💖, and 🥰 for wholesome feed aesthetics.',
      zh: '粉红爱心象征温柔、关怀与刚萌芽的情感。与 💞、💖、🥰 等 emoji 一起使用，打造暖心又梦幻的画面。',
      es: 'El corazón rosa transmite ternura, autocuidado y sentimientos que florecen. Úsalo con 💞, 💖 y 🥰 para un feed dulce y acogedor.'
    },
    keywords: ['pink heart emoji', 'pink heart emoji meaning', 'heart emoji pink', 'pink hearts emoji']
  },
  {
    slug: 'orange-heart-meaning',
    emoji: '🧡',
    title: 'Orange heart emoji meaning',
    description: {
      en: 'Orange heart emoji meaning = warm support without romantic pressure. It signals “I care about you” friendships, brand collabs, or autumn palettes.',
      zh: '橙色爱心代表温暖支持而不过分热烈，常用来表达朋友之间的关怀或秋日配色。',
      es: 'El corazón naranja muestra apoyo cálido sin presión romántica, ideal para amistades, colaboraciones de marca o paletas otoñales.'
    },
    keywords: ['orange heart emoji', 'orange heart emoji meaning', 'meaning of orange heart emoji', 'what does orange heart emoji mean']
  },
  {
    slug: 'yellow-heart-meaning',
    emoji: '💛',
    title: 'Yellow heart emoji meaning',
    description: {
      en: 'Yellow hearts radiate sunshine, loyalty, and best-friend energy. The yellow heart emoji meaning is perfect for celebratory texts, gratitude threads, and brand community spotlights.',
      zh: '黄色爱心散发阳光、忠诚与闺蜜感，非常适合庆祝、感谢或社区互动内容。',
      es: 'El corazón amarillo irradia sol, lealtad y energía de mejores amigos. Úsalo en mensajes de celebración y agradecimiento.'
    },
    keywords: ['yellow heart emoji', 'yellow heart emoji meaning', 'what does the yellow heart emoji mean', 'yellow emoji heart meaning']
  },
  {
    slug: 'green-heart-meaning',
    emoji: '💚',
    title: 'Green heart emoji meaning',
    description: {
      en: 'The green heart emoji meaning connects to renewal, nature, and growth. Perfect for wellness check-ins, sustainability campaigns, or encouragement posts.',
      zh: '绿色爱心象征更新、自然与成长，用在身心疗愈、环保行动或鼓励讯息最适合。',
      es: 'El corazón verde se asocia con renovación, naturaleza y crecimiento. Ideal en mensajes de bienestar o sostenibilidad.'
    },
    keywords: ['green heart emoji', 'green heart emoji meaning', 'meaning of green heart emoji', 'what does the green heart emoji mean']
  },
  {
    slug: 'blue-heart-meaning',
    emoji: '💙',
    title: 'Blue heart emoji meaning',
    description: {
      en: 'Blue heart emoji meaning usually reflects calm trust, oceans, or tech communities. Mix the blue heart emoji with 🤝, 🌊, or 💻 when you want to highlight loyalty and cool confidence.',
      zh: '蓝色爱心代表平静信任、海洋氛围或科技社群。与 🤝、🌊、💻 搭配时更能强调可靠与沉稳。',
      es: 'El corazón azul representa confianza serena, océanos o comunidades tecnológicas. Combínalo con 🤝, 🌊 o 💻 para enfatizar lealtad.'
    },
    keywords: ['blue heart emoji', 'blue heart emoji meaning', 'what does the blue heart emoji mean', 'blue emoji heart meaning']
  },
  {
    slug: 'light-blue-heart-meaning',
    emoji: '🩵',
    title: 'Light blue heart emoji meaning',
    description: {
      en: 'The light blue heart emoji meaning leans into calm encouragement, sky-daydream aesthetics, and platonic support.',
      zh: '淡蓝爱心象征平静鼓励、天空幻想与友情支持。',
      es: 'El corazón celeste transmite apoyo tranquilo y estética de cielo soñado.'
    },
    keywords: ['light blue heart emoji', 'light blue heart emoji meaning', 'what does the light blue heart emoji mean']
  },
  {
    slug: 'purple-heart-meaning',
    emoji: '💜',
    title: 'Purple heart emoji meaning',
    description: {
      en: 'Purple heart emoji meaning covers creativity, fandom loyalty, respect, and even military honors (Purple Heart).',
      zh: '紫色爱心兼具创意、粉丝应援与崇敬，也与“紫心勋章”有关。',
      es: 'El corazón morado mezcla creatividad, fandom y respeto; recuerda a la condecoración “Purple Heart”.'
    },
    keywords: ['purple heart emoji', 'purple heart emoji meaning', 'what does the purple heart emoji mean', 'purple heart meaning emoji']
  },
  {
    slug: 'black-heart-meaning',
    emoji: '🖤',
    title: 'Black heart emoji meaning',
    description: {
      en: 'The black heart emoji meaning spans chic aesthetics, dark humor, grief, and edgy branding. Pair 🖤 with 🕶️ or 🪦 when you need dramatic flair.',
      zh: '黑色爱心既能表达酷感、暗黑幽默，也适合哀悼或前卫品牌风格。',
      es: 'El corazón negro expresa elegancia gótica, humor oscuro o duelo. Úsalo con 🕶️ o 🪦 para dar énfasis dramático.'
    },
    keywords: ['black heart emoji', 'black heart emoji meaning', 'what does a black heart emoji mean', 'what does the black heart emoji mean']
  },
  {
    slug: 'white-heart-meaning',
    emoji: '🤍',
    title: 'White heart emoji meaning',
    description: {
      en: 'White heart emoji meaning stands for purity, sincere remembrance, minimal style, and winter aesthetics.',
      zh: '白色爱心代表纯净与追忆，常见于极简风格与冬季主题。',
      es: 'El corazón blanco simboliza pureza, recuerdo sincero y diseño minimalista.'
    },
    keywords: ['white heart emoji', 'white heart emoji meaning', 'what does the white heart emoji mean', 'white emoji heart']
  },
  {
    slug: 'brown-heart-meaning',
    emoji: '🤎',
    title: 'Brown heart emoji meaning',
    description: {
      en: 'The brown heart emoji meaning focuses on grounding comfort, inclusive representation, and cozy aesthetics (coffee, chocolate, wood).',
      zh: '棕色爱心强调扎实的安定感、包容多样，也让人想到咖啡和可可。',
      es: 'El corazón marrón transmite calidez, inclusión y vibra acogedora (café, cacao, madera).' 
    },
    keywords: ['brown heart emoji', 'brown heart emoji meaning']
  },
  {
    slug: 'grey-heart-meaning',
    emoji: '🩶',
    title: 'Grey heart emoji meaning',
    description: {
      en: 'Grey heart emoji meaning hints at calm balance, bittersweet moods, or understated branding.',
      zh: '灰色爱心带来沉稳平衡与微妙情绪，常见于低调的品牌视觉。',
      es: 'El corazón gris sugiere equilibrio, nostalgia o branding discreto.'
    },
    keywords: ['grey heart emoji', 'grey heart emoji meaning', 'gray heart emoji']
  },
  {
    slug: 'rainbow-heart-meaning',
    emoji: '❤️‍🌈',
    title: 'Rainbow heart emoji meaning',
    description: {
      en: 'Rainbow heart emoji meaning celebrates Pride, inclusivity, and vibrant community love.',
      zh: '彩虹爱心代表 Pride、多元与社群之爱。',
      es: 'El corazón arcoíris celebra el orgullo LGBTQIA+ y el amor inclusivo.'
    },
    keywords: ['rainbow heart emoji', 'meaning of colored heart emojis', 'colored heart emoji meanings']
  }
];

export type CopyBundle = {
  id: string;
  title: string;
  description: string;
  snippets: string[];
};

export const COPY_BUNDLES: CopyBundle[] = [
  {
    id: 'classic-copy',
    title: 'Heart emoji copy & paste sets',
    description:
      'One-tap bundles covering heart emoji copy and paste favourites: romantic, friendship, aesthetic, and minimalist packs.',
    snippets: ['❤️ 💕 💖 💘 💝', '💛 💚 💙 🩵 🤍', '🖤 💜 ❤️‍🔥 ❤️‍🩹', '♡ ❣️ ♥️ ❤']
  },
  {
    id: 'rainbow-line',
    title: 'Gradient heart lines',
    description:
      'Use this rainbow of hearts in bios, captions, or bullet dividers to hit “emoji heart symbol meaning” and “emoji heart color meaning” queries at once.',
    snippets: ['❤️ 🧡 💛 💚 💙 💜 🖤 🤍', '🩵 💙 💜 💗 💖 💘 💞', '🤎 🧡 💛 🩷 🤍 🖤']
  },
  {
    id: 'heart-eyes-pack',
    title: 'Heart eyes reactions',
    description:
      'Copy and paste heart eyes emoji combos for instant hype replies and DM reactions.',
    snippets: ['😍 😍😍 😍🥰 😍🤩', '😻 😽 💗😻 💕😻']
  }
];

export type FaqEntry = {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
};

export const FAQS: FaqEntry[] = [
  {
    id: 'blue-heart-meaning',
    question: 'What does the blue heart emoji mean?',
    answer:
      'Blue heart emojis mean trust, loyalty, oceans, and cool-headed support. Many people use the blue heart emoji meaning for long-distance friendships, awareness days, or tech community shout-outs. Pair 💙 with 🤝 or 🌊 for extra context.',
    keywords: ['what does the blue heart emoji mean', 'blue heart emoji meaning', 'blue emoji heart meaning', 'what does a blue heart emoji mean']
  },
  {
    id: 'white-heart-meaning',
    question: 'What does the white heart emoji mean?',
    answer:
      'The white heart emoji means pure love, remembrance, and minimal elegance. It shows up in memorial posts, wedding captions, and neutral branding palettes. Use 🤍 when you want a softer alternative to ❤️.',
    keywords: ['what does the white heart emoji mean', 'white heart emoji meaning', 'meaning of white heart emoji']
  },
  {
    id: 'purple-heart-meaning',
    question: 'What does the purple heart emoji mean?',
    answer:
      'Purple heart emojis balance creativity, admiration, and fandom energy. In the U.S., a “Purple Heart” also references military honors. For everyday texting, 💜 says “I respect you” or “my inner artist loves this.”',
    keywords: ['what does the purple heart emoji mean', 'what does purple heart emoji mean', 'purple heart emoji meaning']
  },
  {
    id: 'black-heart-meaning',
    question: 'What does the black heart emoji mean?',
    answer:
      'Black heart emojis can show stylish aesthetics, dark humor, or grief. Use 🖤 with caution in sensitive contexts, and combine it with 💀 or 🕶️ when you are deliberately going for gothic or sarcastic vibes.',
    keywords: ['what does the black heart emoji mean', 'black heart emoji meaning', 'what does a black heart emoji mean']
  },
  {
    id: 'pink-heart-meaning',
    question: 'What does the pink heart emoji mean?',
    answer:
      'Pink heart emojis lean into crush energy, self-care, and kind intentions. Stack 🩷, 💞, and 💖 together to create a dreamy gradient. It is the go-to answer for “what does a pink heart emoji mean?” and “pink heart emoji meaning.”',
    keywords: ['pink heart emoji meaning', 'what does a pink heart emoji mean', 'what does pink heart emoji mean']
  },
  {
    id: 'green-heart-meaning',
    question: 'What does the green heart emoji mean?',
    answer:
      'Green heart emojis can symbolize eco-conscious messages, growth, or jealousy contradicting context. Pair 💚 with 🌱 for sustainability or with 😏 when you want a playful “green with envy.”',
    keywords: ['green heart emoji meaning', 'what does the green heart emoji mean', 'meaning of green heart emoji']
  },
  {
    id: 'emoji-copy',
    question: 'How do I copy and paste heart emojis quickly?',
    answer:
      'Use the quick-copy grid above or the bundles below for heart emoji copy and paste combos. Tap any tile to copy hearts like ❤️ 💕 💖 💞, or press the “1000 heart emojis copy and paste” generator to spam a whole paragraph of hearts.',
    keywords: ['heart emoji copy and paste', 'heart emoji copy paste', '1000 heart emojis copy and paste']
  },
  {
    id: 'heart-eyes-meaning',
    question: 'What does the heart eyes emoji mean?',
    answer:
      'Heart eyes emojis such as 😍 or 😻 mean you are obsessed with what you see. They are perfect reactions for outfits, performances, product drops, and pet pictures. Add them alongside 💕 or ✨ for dramatic emphasis.',
    keywords: ['heart eyes emoji meaning', 'what does heart eyes emoji mean', 'emoji hearts in eyes']
  },
  {
    id: 'heart-color-differences',
    question: 'What do the different color heart emojis mean?',
    answer:
      'Each color heart emoji has a nuance: ❤️ romantic, 💛 friendly, 💚 growth, 💙 loyal, 💜 creative, 🖤 dramatic, 🤍 pure, 🩷 tender, 🧡 supportive, 🤎 grounded, 🩶 calm. Jump to the color guide to see every shade and how people interpret it.',
    keywords: ['what do different color heart emojis mean', 'what do the different color heart emojis mean', 'what do the color heart emojis mean']
  }
];

export const TEXT_ART = [
  '❤❤❤❤❤',
  '♡﹏♡',
  '(づ｡◕‿‿◕｡)づ ♥',
  'ღゝ◡╹)ノ♡',
  '♡(˃͈ દ ˂͈ ༶ )'
];
