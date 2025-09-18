import type { Locale } from '@/lib/i18n';

export type ColorGuide = {
  slug: string;
  emoji: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  keywords: Record<Locale, string[]>;
  slugs: string[];
};

const kw = (en: string[], zh: string[], es: string[]): Record<Locale, string[]> => ({ en, zh, es });

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
      zh: '红色爱心代表经典爱情、浪漫与真挚感谢。可与 💋、💌、❤️‍🔥 搭配，强调纪念日、求婚或感谢讯息。',
      es: 'El corazón rojo expresa amor clásico, romance y gratitud sincera. Combínalo con 💋, 💌 o ❤️‍🔥 para aniversarios, propuestas o notas de agradecimiento.'
    },
    keywords: kw(
      ['red heart emoji', 'red heart emoji meaning', 'meaning of red heart emoji', 'what does the red heart emoji mean'],
      ['红色爱心', '红心含义', '红心代表什么', '红色爱心 emoji'],
      ['emoji corazón rojo', 'significado corazón rojo', 'qué significa corazón rojo', 'emoji de corazón rojo']
    ),
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
      zh: '粉红爱心象征温柔、关怀与初恋心动。可与 💞、💖、🥰 一起使用，营造暖心氛围。',
      es: 'El corazón rosa transmite ternura, autocuidado y sentimientos que florecen. Úsalo con 💞, 💖 y 🥰 para lograr un feed acogedor.'
    },
    keywords: kw(
      ['pink heart emoji', 'pink heart emoji meaning', 'heart emoji pink', 'pink hearts emoji'],
      ['粉色爱心', '粉红爱心含义', '粉心 emoji', '粉色心形'],
      ['emoji corazón rosa', 'significado corazón rosa', 'emoji corazón rosado', 'corazones rosas']
    ),
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
      zh: '橙色爱心代表温暖却不过分热烈的关怀，适合友情或秋季风格。',
      es: 'El corazón naranja muestra apoyo cálido sin presión romántica. Ideal para amistades o paletas otoñales.'
    },
    keywords: kw(
      ['orange heart emoji', 'orange heart emoji meaning', 'meaning of orange heart emoji', 'what does orange heart emoji mean'],
      ['橙色爱心', '橙心含义', '橙色爱心什么意思', '橙心 emoji'],
      ['emoji corazón naranja', 'significado corazón naranja', 'qué significa corazón naranja', 'emoji naranja corazón']
    ),
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
      zh: '黄色爱心散发阳光、忠诚与闺蜜能量，适合庆祝与感谢。',
      es: 'El corazón amarillo irradia sol, lealtad y energía de mejores amigos. Perfecto para agradecimientos y celebraciones.'
    },
    keywords: kw(
      ['yellow heart emoji', 'yellow heart emoji meaning', 'what does the yellow heart emoji mean', 'yellow emoji heart meaning'],
      ['黄色爱心', '黄心含义', '黄色爱心代表什么', '黄色心形 emoji'],
      ['emoji corazón amarillo', 'significado corazón amarillo', 'qué significa corazón amarillo', 'emoji amarillo corazón']
    ),
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
      zh: '绿色爱心象征更新、环保与成长，常与 🌱、🍃 组合。',
      es: 'El corazón verde se relaciona con renovación, ecología y crecimiento. Combínalo con 🌱 o 🍃 para enfatizar sostenibilidad.'
    },
    keywords: kw(
      ['green heart emoji', 'green heart emoji meaning', 'meaning of green heart emoji', 'what does the green heart emoji mean'],
      ['绿色爱心', '绿心含义', '绿色爱心代表什么', '绿色心形 emoji'],
      ['emoji corazón verde', 'significado corazón verde', 'qué significa corazón verde', 'emoji verde corazón']
    ),
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
      zh: '蓝色爱心象征信任与沉稳支持，常见于异地友情与公益日。',
      es: 'El corazón azul simboliza confianza y apoyo sereno, ideal para amistades a distancia o campañas de concienciación.'
    },
    keywords: kw(
      ['blue heart emoji', 'blue heart emoji meaning', 'what does the blue heart emoji mean', 'blue emoji heart meaning'],
      ['蓝色爱心', '蓝心含义', '蓝色爱心代表什么', '蓝色心形 emoji'],
      ['emoji corazón azul', 'significado corazón azul', 'qué significa corazón azul', 'emoji azul corazón']
    ),
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
      zh: '淡蓝爱心带来平静鼓励与天空般的浪漫，常用于友情。',
      es: 'El corazón celeste transmite apoyo tranquilo y estética soñadora de cielo.'
    },
    keywords: kw(
      ['light blue heart emoji', 'light blue heart emoji meaning', 'what does the light blue heart emoji mean'],
      ['淡蓝爱心', '浅蓝爱心含义', '淡蓝爱心代表什么'],
      ['emoji corazón celeste', 'significado corazón celeste', 'qué significa corazón celeste']
    ),
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
      zh: '紫色爱心融合创意、崇敬与粉丝应援，也让人想到紫心勋章。',
      es: 'El corazón morado mezcla creatividad, admiración y fidelidad de fandom, además de aludir a la condecoración Purple Heart.'
    },
    keywords: kw(
      ['purple heart emoji', 'purple heart emoji meaning', 'what does the purple heart emoji mean', 'purple heart meaning emoji'],
      ['紫色爱心', '紫心含义', '紫色爱心代表什么', '紫心 emoji'],
      ['emoji corazón morado', 'significado corazón morado', 'qué significa corazón morado', 'emoji morado corazón']
    ),
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
      zh: '黑色爱心兼具酷感、暗黑幽默与淡淡的哀伤，和 🕶️、💀 搭配更戏剧。',
      es: 'El corazón negro expresa estética gótica, humor oscuro o duelo. Acompáñalo con 🕶️ o 💀 para dar dramatismo.'
    },
    keywords: kw(
      ['black heart emoji', 'black heart emoji meaning', 'what does a black heart emoji mean', 'what does the black heart emoji mean'],
      ['黑色爱心', '黑心含义', '黑色爱心代表什么', '黑心 emoji'],
      ['emoji corazón negro', 'significado corazón negro', 'qué significa corazón negro', 'emoji negro corazón']
    ),
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
      zh: '白色爱心象征纯粹与追忆，常见于婚礼或纪念贴文。',
      es: 'El corazón blanco simboliza pureza, recuerdo y elegancia minimalista. Muy usado en bodas y homenajes.'
    },
    keywords: kw(
      ['white heart emoji', 'white heart emoji meaning', 'what does the white heart emoji mean', 'white emoji heart'],
      ['白色爱心', '白心含义', '白色爱心代表什么', '白色心形 emoji'],
      ['emoji corazón blanco', 'significado corazón blanco', 'qué significa corazón blanco', 'emoji blanco corazón']
    ),
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
      zh: '棕色爱心给人踏实、包容与温暖感，令人想到咖啡与可可。',
      es: 'El corazón marrón transmite calidez e inclusión, como café o cacao.'
    },
    keywords: kw(
      ['brown heart emoji', 'brown heart emoji meaning'],
      ['棕色爱心', '棕色爱心含义'],
      ['emoji corazón marrón', 'significado corazón marrón']
    ),
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
      en: 'Grey hearts hint at calm balance, bittersweet moods, or understated branding.',
      zh: '灰色爱心传达平衡、淡淡的感伤与低调质感。',
      es: 'El corazón gris sugiere equilibrio, nostalgia o branding discreto.'
    },
    keywords: kw(
      ['grey heart emoji', 'grey heart emoji meaning', 'gray heart emoji'],
      ['灰色爱心', '灰心含义', '灰色心形 emoji'],
      ['emoji corazón gris', 'significado corazón gris', 'emoji gris corazón']
    ),
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
      zh: '彩虹爱心代表 Pride、多元与绚丽的社群之爱。',
      es: 'El corazón arcoíris celebra el orgullo LGBTQIA+ y el amor inclusivo.'
    },
    keywords: kw(
      ['rainbow heart emoji', 'meaning of colored heart emojis', 'colored heart emoji meanings'],
      ['彩虹爱心', '彩虹爱心含义', '彩色爱心含义'],
      ['emoji corazón arcoíris', 'significado corazones de colores', 'emoji corazones multicolor']
    ),
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
      es: 'Corazones clásicos para notas románticas, aniversarios y agradecimientos.'
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
      zh: '亮黄色、绿色、蓝色与白色的组合，适合闺蜜打气与社群互动。',
      es: 'Amarillos, verdes, azules y blancos para amistades y comunidades.'
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
      es: 'Combos con corazones negros, morados y en llamas para estilos atrevidos.'
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
      zh: '空心爱心与符号风格组合，适合文字版简介或标题。',
      es: 'Corazones delineados y símbolos ideales para bios y encabezados de texto.'
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
      zh: '最适合留言应援、私讯回复或新品开箱的爱心眼组合。',
      es: 'Combos ideales para reacciones emocionadas en comentarios, DMs y lanzamientos.'
    },
    snippets: ['😍 😍😍 😍🥰 😍🤩', '😻 😽 💗😻 💕😻']
  }
];

export type FaqEntry = {
  id: string;
  content: Record<Locale, { question: string; answer: string }>;
  keywords: Record<Locale, string[]>;
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
    keywords: kw(
      ['what does the blue heart emoji mean', 'blue heart emoji meaning', 'blue emoji heart meaning', 'what does a blue heart emoji mean'],
      ['蓝色爱心什么意思', '蓝色爱心含义', '蓝心 emoji 含义'],
      ['qué significa el corazón azul', 'significado corazón azul', 'emoji corazón azul significado']
    )
  },
  {
    id: 'white-heart-meaning',
    content: {
      en: {
        question: 'What does the white heart emoji mean?',
        answer:
          'White hearts represent pure love, remembrance, and minimalist elegance. Use 🤍 in memorial posts, winter aesthetics, or neutral branding palettes.'
      },
      zh: {
        question: '白色爱心 emoji 代表什么？',
        answer: '白色爱心象征纯净、纪念与极简风格，常用于婚礼、冬季主题或怀念贴文。'
      },
      es: {
        question: '¿Qué significa el emoji de corazón blanco?',
        answer:
          'El corazón blanco expresa amor puro, recuerdo y elegancia minimalista. Es común en homenajes, bodas y diseños neutros.'
      }
    },
    keywords: kw(
      ['what does the white heart emoji mean', 'white heart emoji meaning', 'meaning of white heart emoji'],
      ['白色爱心什么意思', '白心 emoji 含义', '白色爱心含义'],
      ['qué significa corazón blanco', 'significado corazón blanco', 'emoji corazón blanco significado']
    )
  },
  {
    id: 'purple-heart-meaning',
    content: {
      en: {
        question: 'What does the purple heart emoji mean?',
        answer:
          'Purple heart emojis balance creativity, admiration, and fandom energy. In the U.S. it can reference the Purple Heart military honor as well.'
      },
      zh: {
        question: '紫色爱心 emoji 有什么含义？',
        answer: '紫色爱心结合创意、应援与尊重，在美国也象征紫心勋章。'
      },
      es: {
        question: '¿Qué significa el emoji de corazón morado?',
        answer:
          'El corazón morado combina creatividad, admiración y energía de fandom. En EE. UU. también alude a la condecoración Purple Heart.'
      }
    },
    keywords: kw(
      ['what does the purple heart emoji mean', 'what does purple heart emoji mean', 'purple heart emoji meaning'],
      ['紫色爱心什么意思', '紫心 emoji 含义', '紫色爱心含义'],
      ['qué significa corazón morado', 'significado corazón morado', 'emoji corazón morado significado']
    )
  },
  {
    id: 'black-heart-meaning',
    content: {
      en: {
        question: 'What does the black heart emoji mean?',
        answer:
          'Black heart emojis can show stylish aesthetics, dark humor, or grief. Use 🖤 with caution in sensitive contexts, and combine it with 💀 or 🕶️ when you are deliberately going for gothic or sarcastic vibes.'
      },
      zh: {
        question: '黑色爱心 emoji 代表什么？',
        answer: '黑色爱心常用于酷感美学、黑色幽默或哀伤语境，敏感场合要斟酌使用，搭配 💀、🕶️ 会更戏剧。'
      },
      es: {
        question: '¿Qué significa el emoji de corazón negro?',
        answer:
          'El corazón negro puede mostrar estética sofisticada, humor oscuro o duelo. Úsalo con cuidado y combínalo con 💀 o 🕶️ para un toque gótico.'
      }
    },
    keywords: kw(
      ['what does the black heart emoji mean', 'black heart emoji meaning', 'what does a black heart emoji mean'],
      ['黑色爱心含义', '黑心 emoji', '黑色爱心什么意思'],
      ['qué significa corazón negro', 'significado corazón negro', 'emoji corazón negro significado']
    )
  },
  {
    id: 'pink-heart-meaning',
    content: {
      en: {
        question: 'What does the pink heart emoji mean?',
        answer:
          'Pink hearts are all about crush energy, self-care, and kind intentions. Stack 🩷, 💞, and 💖 together to create a dreamy gradient.'
      },
      zh: {
        question: '粉红爱心 emoji 有什么意义？',
        answer: '粉红爱心象征暧昧悸动、自我照顾与温柔好意。组合 🩷、💞、💖 可以营造梦幻渐层。'
      },
      es: {
        question: '¿Qué significa el emoji de corazón rosa?',
        answer:
          'Los corazones rosa transmiten emoción romántica, autocuidado e intenciones amables. Combínalos con 🩷, 💞 y 💖 para un degradado soñado.'
      }
    },
    keywords: kw(
      ['pink heart emoji meaning', 'what does a pink heart emoji mean', 'what does pink heart emoji mean'],
      ['粉红爱心含义', '粉色爱心什么意思', '粉心 emoji'],
      ['significado corazón rosa', 'qué significa corazón rosa', 'emoji corazón rosa significado']
    )
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
        answer: '绿色爱心常见于环保、重生或稍带嫉妒的语境。搭配 🌱、🍀 更清楚。'
      },
      es: {
        question: '¿Qué significa el emoji de corazón verde?',
        answer:
          'El corazón verde destaca historias ecológicas, renovación o incluso celos divertidos. Acompáñalo con 🌱 o 🍀 para dar contexto.'
      }
    },
    keywords: kw(
      ['green heart emoji meaning', 'what does the green heart emoji mean', 'meaning of green heart emoji'],
      ['绿色爱心含义', '绿色爱心什么意思', '绿心 emoji 含义'],
      ['significado corazón verde', 'qué significa corazón verde', 'emoji corazón verde significado']
    )
  },
  {
    id: 'emoji-copy',
    content: {
      en: {
        question: 'How do I copy and paste heart emojis quickly?',
        answer:
          'Use the quick-copy grid on the homepage or visit the dedicated copy packs page to grab curated strings like ❤️ 💕 💖 💘 💝 or 💛 💚 💙 🩵 🤍. Every button copies instantly.'
      },
      zh: {
        question: '如何快速复制心形表情？',
        answer: '利用首页的快速复制区块，或进入复制合集页面取得 ❤️ 💕 💖 💘 💝、💛 💚 💙 🩵 🤍 等组合，点一下立即复制。'
      },
      es: {
        question: '¿Cómo copio y pego emojis de corazón rápidamente?',
        answer:
          'Usa la cuadrícula de copia rápida en la página principal o visita la biblioteca de packs para obtener cadenas como ❤️ 💕 💖 💘 💝 o 💛 💚 💙 🩵 🤍 al instante.'
      }
    },
    keywords: kw(
      ['heart emoji copy and paste', 'heart emoji copy paste', '1000 heart emojis copy and paste'],
      ['爱心表情复制', '爱心复制粘贴', '1000 个爱心复制'],
      ['copiar pegar emojis corazón', 'emoji corazón copiar', '1000 corazones copiar y pegar']
    )
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
        answer: '像 😍、😻 这样的爱心眼代表“我太爱了”，最适合穿搭、演出或萌宠贴文。'
      },
      es: {
        question: '¿Qué significa el emoji con ojos de corazón?',
        answer:
          'Emojis como 😍 o 😻 expresan enamoramiento instantáneo. Son perfectos para reaccionar a looks, actuaciones, lanzamientos o mascotas.'
      }
    },
    keywords: kw(
      ['heart eyes emoji meaning', 'what does heart eyes emoji mean', 'emoji hearts in eyes'],
      ['爱心眼表情含义', '爱心眼 emoji', '眼睛冒爱心'],
      ['significado emoji ojos de corazón', 'qué significa ojos de corazón', 'emoji corazones en los ojos']
    )
  }
];

export const TEXT_ART = ['❤❤❤❤❤', '♡﹏♡', '(づ｡◕‿‿◕｡)づ ♥', 'ღゝ◡╹)ノ♡', '♡(˃͈ দ ˂͈ ༶ )'];
