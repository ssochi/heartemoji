import type { Locale } from '@/lib/i18n';

export type ColorGuide = {
  slug: string;
  emoji: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  keywords: string[];
  slugs: string[];
};

export const COLOR_GUIDE: ColorGuide[] = [
  {
    slug: 'red-heart-meaning',
    emoji: '❤️',
    title: {
      en: 'Red heart emoji meaning',
      zh: '红色爱心含义',
      es: 'Significado del corazón rojo'
    },
    description: {
      en: 'The red heart emoji means classic love, romance, and heartfelt appreciation. Pair it with 💋, 💌, or ❤️‍🔥 when you want to spotlight anniversaries, proposals, or thank-you notes.',
      zh: '红色爱心代表经典爱情、浪漫与真挚感谢。搭配 💋、💌、❤️‍🔥，最适合用在周年纪念、求婚或满怀谢意的讯息。',
      es: 'El corazón rojo expresa amor clásico, romance y gratitud sincera. Combínalo con 💋, 💌 o ❤️‍🔥 en aniversarios, propuestas o mensajes de agradecimiento.'
    },
    keywords: ['red heart emoji', 'red heart emoji meaning', 'meaning of red heart emoji', 'what does the red heart emoji mean'],
    slugs: ['red-heart', 'heart-on-fire', 'mending-heart']
  },
  {
    slug: 'pink-heart-meaning',
    emoji: '🩷',
    title: {
      en: 'Pink heart emoji meaning',
      zh: '粉色爱心含义',
      es: 'Significado del corazón rosa'
    },
    description: {
      en: 'The pink heart emoji leans toward softness, self-care, and blossoming crush energy. Use it alongside 💞, 💖, and 🥰 for wholesome vibes.',
      zh: '粉红爱心象征温柔体贴与初恋般的悸动，可与 💞、💖、🥰 搭配营造暖心氛围。',
      es: 'El corazón rosa transmite ternura, autocuidado y sentimientos que florecen. Úsalo con 💞, 💖 y 🥰 para un feed encantador.'
    },
    keywords: ['pink heart emoji', 'pink heart emoji meaning', 'heart emoji pink', 'pink hearts emoji'],
    slugs: ['pink-heart', 'sparkling-heart', 'growing-heart']
  },
  {
    slug: 'orange-heart-meaning',
    emoji: '🧡',
    title: {
      en: 'Orange heart emoji meaning',
      zh: '橙色爱心含义',
      es: 'Significado del corazón naranja'
    },
    description: {
      en: 'Orange hearts show warm support without romantic pressure—great for friendships, brand collabs, or autumn palettes.',
      zh: '橙色爱心代表热情但不炽烈的关怀，适合友情、品牌合作与秋季配色。',
      es: 'El corazón naranja comunica apoyo cálido sin presión romántica. Ideal para amistades, colaboraciones de marca o paletas otoñales.'
    },
    keywords: ['orange heart emoji', 'orange heart emoji meaning', 'meaning of orange heart emoji', 'what does orange heart emoji mean'],
    slugs: ['orange-heart']
  },
  {
    slug: 'yellow-heart-meaning',
    emoji: '💛',
    title: {
      en: 'Yellow heart emoji meaning',
      zh: '黄色爱心含义',
      es: 'Significado del corazón amarillo'
    },
    description: {
      en: 'Yellow heart emojis radiate sunshine, loyalty, and best-friend energy. Ideal for celebratory texts and grateful shout-outs.',
      zh: '黄色爱心散发阳光与忠诚，最适合用于庆祝、感谢与闺蜜互动。',
      es: 'El corazón amarillo irradia sol, lealtad y energía de mejores amigos. Perfecto para mensajes de celebración y agradecimiento.'
    },
    keywords: ['yellow heart emoji', 'yellow heart emoji meaning', 'what does the yellow heart emoji mean', 'yellow emoji heart meaning'],
    slugs: ['yellow-heart']
  },
  {
    slug: 'green-heart-meaning',
    emoji: '💚',
    title: {
      en: 'Green heart emoji meaning',
      zh: '绿色爱心含义',
      es: 'Significado del corazón verde'
    },
    description: {
      en: 'Green hearts connect to renewal, eco-friendly messages, and growth. Pair with 🌱 or 🍃 when highlighting sustainability.',
      zh: '绿色爱心象征重生、环保与成长。与 🌱、🍃 搭配强调永续主题。',
      es: 'El corazón verde se asocia con renovación, naturaleza y crecimiento. Combínalo con 🌱 o 🍃 para destacar la sostenibilidad.'
    },
    keywords: ['green heart emoji', 'green heart emoji meaning', 'meaning of green heart emoji', 'what does the green heart emoji mean'],
    slugs: ['green-heart']
  },
  {
    slug: 'blue-heart-meaning',
    emoji: '💙',
    title: {
      en: 'Blue heart emoji meaning',
      zh: '蓝色爱心含义',
      es: 'Significado del corazón azul'
    },
    description: {
      en: 'Blue hearts represent trust, steady support, and ocean or tech connections. Great for long-distance friendships and awareness days.',
      zh: '蓝色爱心象征信任与沉稳支持，常见于异地友情或公益宣导。',
      es: 'El corazón azul simboliza confianza y apoyo sereno, ideal para amistades a distancia y campañas de concienciación.'
    },
    keywords: ['blue heart emoji', 'blue heart emoji meaning', 'what does the blue heart emoji mean', 'blue emoji heart meaning'],
    slugs: ['blue-heart', 'light-blue-heart']
  },
  {
    slug: 'light-blue-heart-meaning',
    emoji: '🩵',
    title: {
      en: 'Light blue heart emoji meaning',
      zh: '淡蓝爱心含义',
      es: 'Significado del corazón celeste'
    },
    description: {
      en: 'Light blue hearts lean into calm encouragement, daydream skies, and platonic support.',
      zh: '淡蓝爱心展现平静的鼓励感与天空般的浪漫，也常用于友情。',
      es: 'El corazón celeste transmite apoyo tranquilo y estética de cielo soñado.'
    },
    keywords: ['light blue heart emoji', 'light blue heart emoji meaning', 'what does the light blue heart emoji mean'],
    slugs: ['light-blue-heart']
  },
  {
    slug: 'purple-heart-meaning',
    emoji: '💜',
    title: {
      en: 'Purple heart emoji meaning',
      zh: '紫色爱心含义',
      es: 'Significado del corazón morado'
    },
    description: {
      en: 'Purple hearts balance creativity, admiration, and fandom loyalty—plus a nod to the Purple Heart military honor.',
      zh: '紫色爱心融合创意、崇敬与粉丝应援，也让人联想到“紫心勋章”。',
      es: 'El corazón morado mezcla creatividad, admiración y fidelidad de fandom; también recuerda a la condecoración “Purple Heart”.'
    },
    keywords: ['purple heart emoji', 'purple heart emoji meaning', 'what does the purple heart emoji mean', 'purple heart meaning emoji'],
    slugs: ['purple-heart']
  },
  {
    slug: 'black-heart-meaning',
    emoji: '🖤',
    title: {
      en: 'Black heart emoji meaning',
      zh: '黑色爱心含义',
      es: 'Significado del corazón negro'
    },
    description: {
      en: 'Black hearts cover chic aesthetics, dark humour, and bittersweet moods. Pair with 🕶️ or 💀 for dramatic flair.',
      zh: '黑色爱心带有酷感、暗黑幽默，也能用于表达淡淡的伤感，与 🕶️、💀 搭配更戏剧。',
      es: 'El corazón negro refleja estilo gótico, humor oscuro o duelo. Úsalo con 🕶️ o 💀 para agregar dramatismo.'
    },
    keywords: ['black heart emoji', 'black heart emoji meaning', 'what does a black heart emoji mean', 'what does the black heart emoji mean'],
    slugs: ['black-heart']
  },
  {
    slug: 'white-heart-meaning',
    emoji: '🤍',
    title: {
      en: 'White heart emoji meaning',
      zh: '白色爱心含义',
      es: 'Significado del corazón blanco'
    },
    description: {
      en: 'White hearts stand for purity, remembrance, and minimalist elegance. Common in memorial posts and wedding captions.',
      zh: '白色爱心象征纯粹与追忆，也适合极简婚礼或冬季氛围。',
      es: 'El corazón blanco representa pureza, recuerdo y elegancia minimalista. Muy usado en bodas y homenajes.'
    },
    keywords: ['white heart emoji', 'white heart emoji meaning', 'what does the white heart emoji mean', 'white emoji heart'],
    slugs: ['white-heart']
  },
  {
    slug: 'brown-heart-meaning',
    emoji: '🤎',
    title: {
      en: 'Brown heart emoji meaning',
      zh: '棕色爱心含义',
      es: 'Significado del corazón marrón'
    },
    description: {
      en: 'Brown hearts feel grounded, inclusive, and cozy—think coffee, cocoa, and natural textures.',
      zh: '棕色爱心带来踏实与温暖的感受，常与咖啡、可可或木质调连结。',
      es: 'El corazón marrón transmite calidez, inclusión y un ambiente acogedor como café o cacao.'
    },
    keywords: ['brown heart emoji', 'brown heart emoji meaning'],
    slugs: ['brown-heart']
  },
  {
    slug: 'grey-heart-meaning',
    emoji: '🩶',
    title: {
      en: 'Grey heart emoji meaning',
      zh: '灰色爱心含义',
      es: 'Significado del corazón gris'
    },
    description: {
      en: 'Grey hearts hint at calm balance, bittersweet moods, or understated branding cues.',
      zh: '灰色爱心象征平衡与克制，适合简约或带点淡淡感伤的氛围。',
      es: 'El corazón gris sugiere equilibrio, nostalgia o un branding discreto.'
    },
    keywords: ['grey heart emoji', 'grey heart emoji meaning', 'gray heart emoji'],
    slugs: ['grey-heart']
  },
  {
    slug: 'rainbow-heart-meaning',
    emoji: '❤️‍🌈',
    title: {
      en: 'Rainbow heart emoji meaning',
      zh: '彩虹爱心含义',
      es: 'Significado del corazón arcoíris'
    },
    description: {
      en: 'Rainbow hearts celebrate Pride, inclusivity, and vibrant community love.',
      zh: '彩虹爱心象征 Pride、多元与社群关怀。',
      es: 'El corazón arcoíris celebra el orgullo LGBTQIA+ y el amor inclusivo.'
    },
    keywords: ['rainbow heart emoji', 'meaning of colored heart emojis', 'colored heart emoji meanings'],
    slugs: ['rainbow-heart']
  }
];

export type CopyBundle = {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  snippets: string[];
};

export const COPY_BUNDLES: CopyBundle[] = [
  {
    id: 'classic-copy',
    title: {
      en: 'Romance & gratitude hearts',
      zh: '浪漫感谢爱心组',
      es: 'Corazones de romance y gratitud'
    },
    description: {
      en: 'Signature hearts for love notes, anniversaries, and heartfelt thank-you messages.',
      zh: '适合情书、纪念日与真诚感谢的经典爱心组合。',
      es: 'Corazones clásicos para notas románticas, aniversarios y mensajes de agradecimiento.'
    },
    snippets: ['❤️ 💕 💖 💘 💝', '❤️ 💋 💌 💍']
  },
  {
    id: 'friendship-gradient',
    title: {
      en: 'Friendship gradients',
      zh: '友情渐层组合',
      es: 'Gradientes de amistad'
    },
    description: {
      en: 'Bright yellows, greens, blues, and whites for best-friend check-ins and community shout-outs.',
      zh: '使用亮黄色、绿色、蓝色与白色爱心，为好友打气或经营社群时最好用。',
      es: 'Amarillos, verdes, azules y blancos para mensajes entre mejores amigos y comunidades.'
    },
    snippets: ['💛 💚 💙 🩵 🤍', '💛 💚 💙 🤍']
  },
  {
    id: 'dramatic-vibes',
    title: {
      en: 'Dramatic & aesthetic hearts',
      zh: '个性戏剧风',
      es: 'Corazones dramáticos y estéticos'
    },
    description: {
      en: 'Edgy combos with black, purple, and fire hearts for bold branding or dark humor.',
      zh: '黑心、紫心与火焰爱心的酷帅组合，适合前卫品牌或暗黑幽默。',
      es: 'Combos con corazones negros, morados y en llamas para marcas atrevidas o humor oscuro.'
    },
    snippets: ['🖤 💜 ❤️‍🔥 ❤️‍🩹', '🖤 💀 🖤 ✨']
  },
  {
    id: 'minimal-symbols',
    title: {
      en: 'Minimal heart symbols',
      zh: '极简符号集合',
      es: 'Símbolos de corazón minimalistas'
    },
    description: {
      en: 'Outlined hearts and punctuation-style symbols perfect for text-only bios and headers.',
      zh: '空心爱心与符号风格的组合，适合文字版面或简介使用。',
      es: 'Corazones delineados y símbolos ideales para bios o encabezados solo con texto.'
    },
    snippets: ['♡ ❣️ ♥️ ❤', '♡♡♡', '♡﹏♡']
  },
  {
    id: 'heart-eyes-pack',
    title: {
      en: 'Heart eyes reactions',
      zh: '爱心眼反应包',
      es: 'Reacciones con ojos de corazón'
    },
    description: {
      en: 'Go-to combos for hype replies, DM reactions, and product launches.',
      zh: '最佳应援反应组合，适合在留言区或私讯表达超爱。',
      es: 'Combos ideales para reaccionar con emoción en comentarios, DMs o lanzamientos de productos.'
    },
    snippets: ['😍 😍😍 😍🥰 😍🤩', '😻 😽 💗😻 💕😻']
  }
];

export type FaqEntry = {
  id: string;
  content: Record<Locale, { question: string; answer: string }>;
  keywords: string[];
};

export const FAQS: FaqEntry[] = [
  {
    id: 'blue-heart-meaning',
    content: {
      en: {
        question: 'What does the blue heart emoji mean?',
        answer:
          'Blue heart emojis mean trust, loyalty, oceans, and cool-headed support. Many people use 💙 for long-distance friendships, awareness days, or tech community shout-outs.'
      },
      zh: {
        question: '蓝色爱心 emoji 代表什么？',
        answer: '蓝色爱心通常象征信任、支持与海洋意象，也常用于异地友谊、公益日或科技社群。'
      },
      es: {
        question: '¿Qué significa el emoji de corazón azul?',
        answer:
          'El corazón azul simboliza confianza, lealtad y apoyo sereno. Se usa en amistades a distancia, días de concienciación o comunidades tecnológicas.'
      }
    },
    keywords: ['what does the blue heart emoji mean', 'blue heart emoji meaning', 'blue emoji heart meaning', 'what does a blue heart emoji mean']
  },
  {
    id: 'white-heart-meaning',
    content: {
      en: {
        question: 'What does the white heart emoji mean?',
        answer:
          'White hearts represent pure love, remembrance, and minimalist elegance. Use 🤍 in memorial posts, winter aesthetics, or neutral branding.'
      },
      zh: {
        question: '白色爱心 emoji 代表什么？',
        answer: '白色爱心象征纯净与怀念，常用于纪念贴文、冬季主题或极简视觉。'
      },
      es: {
        question: '¿Qué significa el emoji de corazón blanco?',
        answer:
          'El corazón blanco expresa amor puro, recuerdo y elegancia minimalista. Es común en homenajes, bodas y diseños neutros.'
      }
    },
    keywords: ['what does the white heart emoji mean', 'white heart emoji meaning', 'meaning of white heart emoji']
  },
  {
    id: 'purple-heart-meaning',
    content: {
      en: {
        question: 'What does the purple heart emoji mean?',
        answer:
          'Purple hearts balance creativity, admiration, and fandom energy. In the U.S. it can reference the Purple Heart military honor as well.'
      },
      zh: {
        question: '紫色爱心 emoji 有什么含义？',
        answer: '紫色爱心结合创意、应援与尊重，在美国也象征“紫心勋章”。'
      },
      es: {
        question: '¿Qué significa el emoji de corazón morado?',
        answer:
          'El corazón morado combina creatividad, admiración y energía de fandom. En EE. UU. también alude a la condecoración Purple Heart.'
      }
    },
    keywords: ['what does the purple heart emoji mean', 'what does purple heart emoji mean', 'purple heart emoji meaning']
  },
  {
    id: 'black-heart-meaning',
    content: {
      en: {
        question: 'What does the black heart emoji mean?',
        answer:
          'Black hearts can signal chic aesthetics, dark humor, or grief. Combine 🖤 with 💀 or 🕶️ when you intentionally want dramatic contrast.'
      },
      zh: {
        question: '黑色爱心 emoji 代表什么？',
        answer: '黑色爱心带有个性、暗黑幽默或哀伤语气，常与 💀、🕶️ 搭配营造强烈对比。'
      },
      es: {
        question: '¿Qué significa el emoji de corazón negro?',
        answer:
          'El corazón negro expresa estilo gótico, humor oscuro o duelo. Acompáñalo con 💀 o 🕶️ para lograr contraste dramático.'
      }
    },
    keywords: ['what does the black heart emoji mean', 'black heart emoji meaning', 'what does a black heart emoji mean']
  },
  {
    id: 'pink-heart-meaning',
    content: {
      en: {
        question: 'What does the pink heart emoji mean?',
        answer:
          'Pink hearts are all about crush energy, self-care, and kind intentions. Stack 🩷, 💞, and 💖 to answer “what does a pink heart emoji mean?” with a dreamy gradient.'
      },
      zh: {
        question: '粉红爱心 emoji 有什么意义？',
        answer: '粉红爱心代表暧昧悸动、温柔关怀，也常与 💞、💖 组合呈现梦幻渐层。'
      },
      es: {
        question: '¿Qué significa el emoji de corazón rosa?',
        answer:
          'El corazón rosa expresa emoción romántica, autocuidado e intenciones amables. Combínalo con 💞 y 💖 para un efecto soñado.'
      }
    },
    keywords: ['pink heart emoji meaning', 'what does a pink heart emoji mean', 'what does pink heart emoji mean']
  },
  {
    id: 'green-heart-meaning',
    content: {
      en: {
        question: 'What does the green heart emoji mean?',
        answer:
          'Green hearts highlight eco-conscious stories, renewal, or even playful jealousy depending on context. Add 🌱 or 🍀 for clarity.'
      },
      zh: {
        question: '绿色爱心 emoji 代表什么？',
        answer: '绿色爱心与环保、成长有关，也可能带点小小嫉妒的语气，搭配 🌱、🍀 更明确。'
      },
      es: {
        question: '¿Qué significa el emoji de corazón verde?',
        answer:
          'El corazón verde resalta historias ecológicas, renovación o incluso celos divertidos. Acompáñalo con 🌱 o 🍀 para dar contexto.'
      }
    },
    keywords: ['green heart emoji meaning', 'what does the green heart emoji mean', 'meaning of green heart emoji']
  },
  {
    id: 'emoji-copy',
    content: {
      en: {
        question: 'How do I copy and paste heart emojis quickly?',
        answer:
          'Use the quick-copy grid or visit the dedicated copy packs page to grab curated strings like ❤️ 💕 💖 💘 💝 or 💛 💚 💙 🩵 🤍. Every button copies instantly.'
      },
      zh: {
        question: '如何快速复制心形表情？',
        answer: '利用首页的快速复制区块，或进入复制合集页面即可一键取得诸如 ❤️ 💕 💖 💘 💝、💛 💚 💙 🩵 🤍 等组合。'
      },
      es: {
        question: '¿Cómo copio y pego emojis de corazón rápidamente?',
        answer:
          'Usa la cuadrícula de copia rápida o visita la página de packs para copiar cadenas como ❤️ 💕 💖 💘 💝 o 💛 💚 💙 🩵 🤍 con un toque.'
      }
    },
    keywords: ['heart emoji copy and paste', 'heart emoji copy paste', '1000 heart emojis copy and paste']
  },
  {
    id: 'heart-eyes-meaning',
    content: {
      en: {
        question: 'What does the heart eyes emoji mean?',
        answer:
          'Heart eyes emojis such as 😍 or 😻 show instant infatuation. They are perfect reactions for outfits, performances, product drops, and pet photos.'
      },
      zh: {
        question: '爱心眼表情什么意思？',
        answer: '像 😍、😻 这样的爱心眼表情表示“我太爱了”，最适合用在新品、演出或萌宠贴文下。'
      },
      es: {
        question: '¿Qué significa el emoji con ojos de corazón?',
        answer:
          'Emojis como 😍 o 😻 expresan fascinación instantánea. Son reacciones perfectas para outfits, espectáculos, lanzamientos y fotos de mascotas.'
      }
    },
    keywords: ['heart eyes emoji meaning', 'what does heart eyes emoji mean', 'emoji hearts in eyes']
  }
];

export const TEXT_ART = ['❤❤❤❤❤', '♡﹏♡', '(づ｡◕‿‿◕｡)づ ♥', 'ღゝ◡╹)ノ♡', '♡(˃͈ দ ˂͈ ༶ )'];
