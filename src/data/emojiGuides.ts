import type { Locale } from '@/lib/i18n';

export type EmojiGuide = {
  slug: string;
  aliases: string[];
  meaningBullets: Record<Locale, string[]>;
  usageIdeas: Record<Locale, string[]>;
  combos: string[];
};

export const EMOJI_GUIDES: Record<string, EmojiGuide> = {
  'red-heart': {
    slug: 'red-heart',
    aliases: ['heart emoji', 'love heart emoji', 'red emoji heart'],
    meaningBullets: {
      en: [
        'Represents romantic love, gratitude, and heartfelt appreciation.',
        'Commonly used in captions about proposals, anniversaries, and milestones.',
        'Pairs well with 💍, 💋, 💐 when you want to create a love-forward message.'
      ],
      zh: ['象征浪漫爱情、真挚感谢与满满爱意。', '常见于求婚、周年纪念与重要里程碑的贴文。', '可与 💍、💋、💐 搭配，让告白或感谢更有氛围。'],
      es: [
        'Simboliza amor romántico, gratitud y aprecio sincero.',
        'Se ve con frecuencia en publicaciones de propuestas, aniversarios y hitos.',
        'Combina bien con 💍, 💋, 💐 cuando quieres un mensaje totalmente romántico.'
      ]
    },
    usageIdeas: {
      en: ['Anniversary posts or wedding galleries.', 'Customer love notes or testimonials.', 'Thank-you messages that need extra warmth.'],
      zh: ['周年纪念或婚礼记录。', '顾客感谢或品牌好评内容。', '想表达深深谢意的讯息。'],
      es: ['Publicaciones de aniversario o álbumes de boda.', 'Testimonios o reseñas llenas de cariño.', 'Mensajes de agradecimiento con un toque extra de amor.']
    },
    combos: ['❤️💍💐', '❤️‍🔥❤️‍🩹❤️', '❤️💋💌']
  },
  'black-heart': {
    slug: 'black-heart',
    aliases: ['black heart emoji meaning', 'dark heart emoji', 'black emoji heart'],
    meaningBullets: {
      en: [
        'Signals gothic aesthetics, dry humor, or bittersweet emotion.',
        'Frequently seen in fashion editorials, metal music fandoms, or memorial posts.',
        'Contrasts brightly colored emojis for dramatic effect.'
      ],
      zh: ['展现哥德风格、冷幽默或带点苦乐参半的情绪。', '常出现于潮流时尚、摇滚金属或追忆贴文。', '与亮色爱心对比能营造戏剧张力。'],
      es: ['Refleja estética gótica, humor negro o emociones agridulces.', 'Aparece en moda alternativa, fandoms de metal o publicaciones de duelo.', 'Contrasta con emojis brillantes para lograr impacto dramático.']
    },
    usageIdeas: {
      en: ['Pair with 🖤🕶️ for edgy brand drops.', 'Combine with 💀 or 🪦 to acknowledge grief tactfully.', 'Use as a stylish accent for monochrome feeds.'],
      zh: ['搭配 🖤🕶️ 打造酷感形象。', '与 💀 或 🪦 一起使用，表达哀悼但不过于沉重。', '作为黑白配色的点缀。'],
      es: ['Úsalo con 🖤🕶️ en lanzamientos de marca atrevidos.', 'Acompáñalo con 💀 o 🪦 para expresar luto con respeto.', 'Perfecto como acento en feeds monocromáticos.']
    },
    combos: ['🖤🕶️💀', '🖤✨🖤', '🖤🤍🖤']
  },
  'blue-heart': {
    slug: 'blue-heart',
    aliases: ['blue heart emoji meaning', 'blue emoji heart', 'blue heart meaning emoji'],
    meaningBullets: {
      en: [
        'Communicates loyalty, support, and calm care.',
        'Often used for awareness campaigns, tech launches, or ocean-related storytelling.',
        'Matches corporate branding with cooler palettes.'
      ],
      zh: ['传递忠诚、支持与沉稳的关怀。', '常用于公益活动、科技新品或海洋主题。', '与蓝色调品牌视觉非常契合。'],
      es: ['Comunica lealtad, apoyo y calma.', 'Se usa en campañas de concienciación, lanzamientos tecnológicos o historias relacionadas con el mar.', 'Combina con branding corporativo de tonos fríos.']
    },
    usageIdeas: {
      en: ['Pair with 🌊 for marine conservation messaging.', 'Use in DM replies to reassure long-distance friends.', 'Add 💙🤝 to show collaborative spirit.'],
      zh: ['搭配 🌊 宣传海洋保育。', '在私讯中向远方朋友传递安心。', '用 💙🤝 表达合作与互助。'],
      es: ['Combínalo con 🌊 para hablar de conservación marina.', 'Envíalo en mensajes a amigos a distancia.', 'Añade 💙🤝 para mostrar trabajo en equipo.']
    },
    combos: ['💙🤝', '💙🌊🐬', '💙💻✨']
  },
  'pink-heart': {
    slug: 'pink-heart',
    aliases: ['heart emoji pink', 'pink heart emoji meaning', 'pink emoji heart'],
    meaningBullets: {
      en: [
        'Represents sweet affection, gentle support, and self-care reminders.',
        'Dominates pastel aesthetics, journaling communities, and K-pop fandom posts.',
        'Great for bestie shout-outs or mental health check-ins.'
      ],
      zh: ['象征温柔关怀与自我疗愈的小提醒。', '粉彩美学、手帐社群与韩流应援最常见。', '适合闺蜜加油与身心状况问候。'],
      es: ['Representa cariño dulce, apoyo suave y recordatorios de autocuidado.', 'Domina estéticas pastel, journaling y fandoms de K-pop.', 'Ideal para destacar a tus mejores amigas o hablar de bienestar.']
    },
    usageIdeas: {
      en: ['Combine with 💆‍♀️🫖 for self-care reminders.', 'Add to friend appreciation threads.', 'Use in brand content featuring pastels or beauty looks.'],
      zh: ['与 💆‍♀️🫖 搭配提醒对方好好休息。', '发闺蜜感恩文时加上。', '粉彩品牌或美妆内容的最佳配件。'],
      es: ['Úsalo con 💆‍♀️🫖 para hablar de autocuidado.', 'Añádelo en hilos de agradecimiento a amistades.', 'Perfecto para contenidos de marcas pastel o belleza.']
    },
    combos: ['🩷💞💖', '🩷✨🧋', '🩷🥰🫶']
  },
  'white-heart': {
    slug: 'white-heart',
    aliases: ['white heart emoji meaning', 'white heart emoji copy paste', 'white emoji heart'],
    meaningBullets: {
      en: [
        'Embodies pure intentions, memorial tributes, and minimalist design.',
        'Frequently paired with wedding or winter aesthetics.',
        'Shows soft support without overwhelming color.'
      ],
      zh: ['代表纯粹心意、追忆与极简风格。', '常见于婚礼、冬季或白色系视觉。', '想传达温柔支持时又不想太绚烂。'],
      es: ['Refleja intenciones puras, homenajes y diseño minimalista.', 'Se usa en bodas, estéticas invernales o feeds neutrales.', 'Aporta apoyo suave sin recurrir a colores fuertes.']
    },
    usageIdeas: {
      en: ['Add to memorial posts as a gentle sign of respect.', 'Use with 🤍❄️ for wintery designs.', 'Combine with neutral product shoots.'],
      zh: ['用于纪念贴文表达敬意。', '与 🤍❄️ 搭配营造冬日气氛。', '搭配中性色商品摄影也很适合。'],
      es: ['Inclúyelo en homenajes para mostrar respeto.', 'Combínalo con 🤍❄️ en diseños invernales.', 'Úsalo con fotos de productos de tonos neutros.']
    },
    combos: ['🤍❄️✨', '🤍🕯️🤍', '🤍🌨️🤍']
  },
  'heart-eyes-emoji': {
    slug: 'heart-eyes-emoji',
    aliases: ['heart eyes emoji', 'heart eye emoji', 'heart on eyes emoji'],
    meaningBullets: {
      en: ['Expresses instant infatuation and excitement.', 'Fastest way to react to jaw-dropping outfits, performances, or pet photos.', 'Provides dramatic positive feedback in comment sections.'],
      zh: ['表示瞬间爱上或超级喜欢。', '最适合回覆惊艳的穿搭、演出或宠物贴文。', '在留言区能快速传达高度喜爱。'],
      es: ['Expresa enamoramiento y emoción al instante.', 'La reacción más rápida para outfits, espectáculos o mascotas increíbles.', 'Da retroalimentación positiva y llamativa en comentarios.']
    },
    usageIdeas: {
      en: ['Drop under product reveals with 😍🔥.', 'React to selfies or OOTDs with full heart eyes combos.', 'Use in fandom live-tweet threads.'],
      zh: ['新品揭露时用 😍🔥 回覆。', '自拍或今日穿搭贴文可用整串爱心眼。', '粉丝直播或活动串文时增加热度。'],
      es: ['Úsalo en lanzamientos de productos junto a 😍🔥.', 'Reacciona a selfies u OOTDs con combos de ojos de corazón.', 'Añádelo en hilos de fandom en vivo.']
    },
    combos: ['😍🔥', '😍💖', '😍😍😍']
  },
  'cat-heart-eyes': {
    slug: 'cat-heart-eyes',
    aliases: ['cat heart eyes emoji', 'heart eyes cat emoji'],
    meaningBullets: {
      en: ['A kawaii alternative to 😍, perfect for pet parents.', 'Gives your reaction a playful, feline spin.', 'Transforms cute content into extra-adorable moments.'],
      zh: ['比 😍 更可爱的猫咪版本，特别适合宠物爸妈。', '让你的回应多一点俏皮猫系风格。', '看到超萌事物时加倍可爱。'],
      es: ['Una alternativa kawaii a 😍, perfecta para amantes de mascotas.', 'Le da a tu reacción un giro felino y divertido.', 'Convierte el contenido tierno en algo aún más adorable.']
    },
    usageIdeas: {
      en: ['Use in pet adoption posts.', 'React to plushie hauls or kawaii aesthetics.', 'Include in animal rescue success stories.'],
      zh: ['动物认养或宠物活跃贴文的最佳选择。', '适合回复玩偶开箱或可爱风格分享。', '动物救援成功案例也可以加上。'],
      es: ['Úsalo en publicaciones de adopción de mascotas.', 'Reacciona a haul de peluches o estéticas kawaii.', 'Inclúyelo en historias de rescate animal exitoso.']
    },
    combos: ['😻💖', '😻🐾', '😻✨']
  },
  'finger-heart': {
    slug: 'finger-heart',
    aliases: ['finger heart emoji', 'hand heart emoji', 'mini heart emoji'],
    meaningBullets: {
      en: ['Inspired by Korean finger hearts that symbolize tiny yet meaningful love.', 'Signals fandom gratitude, backstage selfies, or supportive shout-outs.', 'Visually pairs with sparkles and pastel hearts.'],
      zh: ['源自韩国指心手势，小巧却充满心意。', '常见于粉丝感谢、后台合照或打气留言。', '与闪亮或粉彩爱心搭配最可爱。'],
      es: ['Inspirado en el gesto coreano del finger heart: amor pequeño pero significativo.', 'Muestra agradecimiento de fandom, selfies backstage o mensajes de apoyo.', 'Combina con destellos y corazones pastel.']
    },
    usageIdeas: {
      en: ['Add to K-pop fancams or comeback tweets.', 'Use for creator shout-outs or donation thank-yous.', 'Pair with 🫶 to show “big + small” hearts.'],
      zh: ['K-pop 饭拍、回归推文必备。', '用于创作者鸣谢或募资感谢。', '和 🫶 搭配，呈现大心加小心的可爱画面。'],
      es: ['Úsalo en fancams o tweets de comeback de K-pop.', 'Inclúyelo en agradecimientos a creadores o donaciones.', 'Combínalo con 🫶 para mostrar corazones grande + pequeño.']
    },
    combos: ['🫰🫶', '🫰✨', '🫰🩷💖']
  },
  'heart-outline': {
    slug: 'heart-outline',
    aliases: ['heart outline emoji', 'text heart emoji', 'outline of a heart emoji'],
    meaningBullets: {
      en: ['A text-style heart used for minimalist love notes or typography.', 'Perfect for aesthetic bios, captions, and playlist names.', 'References heart emoji text art and outlined heart emoji queries.'],
      zh: ['文字风格的空心爱心，适合极简告白或排版。', '用在简介、标题或歌单名称都很合适。', '呼应“文字爱心符号”“空心爱心”的搜寻需求。'],
      es: ['Un corazón estilo texto para notas minimalistas o tipografía.', 'Perfecto para bios estéticas, subtítulos y nombres de playlists.', 'Responde a búsquedas como “emoji corazón de texto” o “corazón delineado”.']
    },
    usageIdeas: {
      en: ['Add to vaporwave or monochrome edits.', 'Use as bullet points in love letters.', 'Combine with ASCII faces for text art.'],
      zh: ['搭配蒸汽波或黑白设计。', '在情书里当成段落符号。', '与颜文字组合成文字艺术。'],
      es: ['Añádelo a ediciones vaporwave o monocromáticas.', 'Úsalo como viñetas en cartas de amor.', 'Mézclalo con kaomoji para crear arte de texto.']
    },
    combos: ['♡(˃͈ দ ˂͈ ༶ )', '♡♡♡', '♡✧♡✧♡']
  }
};

export function getEmojiGuide(slug: string) {
  return EMOJI_GUIDES[slug];
}
