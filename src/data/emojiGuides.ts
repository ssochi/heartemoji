import type { Locale } from '@/lib/i18n';

export type EmojiGuide = {
  slug: string;
  aliases: Record<Locale, string[]>;
  meaningBullets: Record<Locale, string[]>;
  usageIdeas: Record<Locale, string[]>;
  combos: string[];
};

export const EMOJI_GUIDES: Record<string, EmojiGuide> = {
  'red-heart': {
    slug: 'red-heart',
    aliases: {
      en: ['heart emoji', 'love heart emoji', 'red emoji heart'],
      zh: ['爱心表情', '红色爱心', '红心 emoji'],
      es: ['emoji de corazón', 'emoji corazón rojo', 'corazón rojo']
    },
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
    aliases: {
      en: ['black heart emoji meaning', 'dark heart emoji', 'black emoji heart'],
      zh: ['黑色爱心含义', '暗黑爱心', '黑心 emoji'],
      es: ['significado corazón negro', 'emoji corazón negro', 'corazón oscuro']
    },
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
    aliases: {
      en: ['blue heart emoji meaning', 'blue emoji heart', 'blue heart meaning emoji'],
      zh: ['蓝色爱心含义', '蓝心 emoji', '蓝色爱心代表'],
      es: ['significado corazón azul', 'emoji corazón azul', 'corazón azul significado']
    },
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
    aliases: {
      en: ['heart emoji pink', 'pink heart emoji meaning', 'pink emoji heart'],
      zh: ['粉色爱心 emoji', '粉红爱心含义', '粉心表情'],
      es: ['emoji corazón rosa', 'significado corazón rosa', 'corazón rosado emoji']
    },
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
    aliases: {
      en: ['white heart emoji meaning', 'white heart emoji copy paste', 'white emoji heart'],
      zh: ['白色爱心含义', '白心复制', '白色爱心表情'],
      es: ['significado corazón blanco', 'emoji corazón blanco', 'copiar corazón blanco']
    },
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
    aliases: {
      en: ['heart eyes emoji', 'heart eye emoji', 'heart on eyes emoji'],
      zh: ['爱心眼表情', '爱心眼 emoji', '眼睛冒爱心'],
      es: ['emoji ojos de corazón', 'ojos con corazones', 'emoji corazones en los ojos']
    },
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
    aliases: {
      en: ['cat heart eyes emoji', 'heart eyes cat emoji'],
      zh: ['猫咪爱心眼', '爱心眼猫咪'],
      es: ['emoji gato ojos de corazón', 'gato con ojos de corazón']
    },
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
    aliases: {
      en: ['finger heart emoji', 'hand heart emoji', 'mini heart emoji'],
      zh: ['指心手势', '手比爱心', '迷你爱心'],
      es: ['emoji finger heart', 'mano con corazón', 'mini corazón']
    },
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
  'sparkling-heart': {
    slug: 'sparkling-heart',
    aliases: {
      en: ['sparkling heart emoji', 'sparkly heart emoji', 'glitter heart emoji'],
      zh: ['闪亮爱心', '亮晶晶爱心', '闪闪爱心 emoji'],
      es: ['emoji corazón brillante', 'corazón con destellos', 'emoji corazón brillante']
    },
    meaningBullets: {
      en: ['Feels extra sweet, glamorous, and celebration-ready.', 'Popular in beauty content, birthday captions, and fandom edits.', 'Signals affection with a polished, high-energy finish.'],
      zh: ['带有更闪耀、更精致的甜蜜感。', '常见于美妆内容、生日贴文与粉丝剪辑。', '比一般爱心更适合表达“闪闪发亮的喜欢”。'],
      es: ['Se siente dulce, brillante y lista para celebrar.', 'Aparece mucho en contenidos de belleza, cumpleaños y edits de fandom.', 'Expresa cariño con un acabado más glamuroso y llamativo.']
    },
    usageIdeas: {
      en: ['Add it to launch posts that need a polished glow.', 'Use it in birthday wishes or glitter-heavy captions.', 'Pair it with pastel hearts for dreamy fan edits.'],
      zh: ['适合新品发布或需要高级感的贴文。', '生日祝福、闪亮风 caption 都很常用。', '和粉彩爱心一起用，特别适合梦幻应援内容。'],
      es: ['Úsalo en lanzamientos que necesiten un brillo más pulido.', 'Funciona muy bien en felicitaciones de cumpleaños o captions con glitter.', 'Combínalo con corazones pastel para edits soñadores.']
    },
    combos: ['💖✨', '💖🌟🥰', '💖🎀✨']
  },
  'love-letter': {
    slug: 'love-letter',
    aliases: {
      en: ['love letter emoji', 'heart envelope emoji', 'valentine letter emoji'],
      zh: ['情书表情', '爱心信封', '情书 emoji'],
      es: ['emoji carta de amor', 'sobre con corazón', 'emoji carta corazón']
    },
    meaningBullets: {
      en: ['Turns affection into a message, invitation, or confession.', 'Frequently used around Valentine’s Day, anniversaries, and heartfelt announcements.', 'Feels more personal than a plain heart because it implies written words.'],
      zh: ['把爱意变成一封讯息、邀请或告白。', '情人节、纪念日与重要宣布时特别常见。', '比单纯的爱心更有“认真写给你”的感觉。'],
      es: ['Convierte el cariño en un mensaje, una invitación o una confesión.', 'Se usa mucho en San Valentín, aniversarios y anuncios emotivos.', 'Se siente más personal que un corazón simple porque sugiere palabras escritas.']
    },
    usageIdeas: {
      en: ['Use it for romantic notes, save-the-dates, or soft launch captions.', 'Drop it in DMs when you want to sound intentional and heartfelt.', 'Pair it with 💋 or ❤️ for classic Valentine styling.'],
      zh: ['适合告白、婚礼邀请或恋爱官宣。', '私讯里想显得认真又温柔时很好用。', '和 💋、❤️ 搭配，就是经典情书氛围。'],
      es: ['Úsalo en notas románticas, invitaciones o captions de soft launch.', 'En DMs funciona muy bien cuando quieres sonar intencional y afectuoso.', 'Combina perfecto con 💋 o ❤️ para un look clásico de San Valentín.']
    },
    combos: ['💌❤️', '💌💋💕', '💌✨🫶']
  },
  'face-with-hearts': {
    slug: 'face-with-hearts',
    aliases: {
      en: ['face with hearts emoji', 'smiling face with hearts', 'heart face emoji'],
      zh: ['爱心环绕笑脸', '笑脸爱心表情', '被爱包围表情'],
      es: ['cara con corazones', 'emoji carita con corazones', 'smiling face with hearts emoji']
    },
    meaningBullets: {
      en: ['Shows warm affection, gratitude, and a soft “I feel loved” vibe.', 'Less dramatic than 😍 and more tender than a plain heart reaction.', 'Works especially well for wholesome updates and caring replies.'],
      zh: ['表达被爱包围的温柔、满足与感谢。', '没有 😍 那么夸张，但比普通爱心更有拥抱感。', '特别适合温暖近况与贴心回覆。'],
      es: ['Muestra afecto cálido, gratitud y una vibra suave de “me siento querido”.', 'Es menos dramático que 😍 y más tierno que una reacción con un corazón simple.', 'Funciona muy bien en respuestas cariñosas y actualizaciones wholesome.']
    },
    usageIdeas: {
      en: ['Reply to supportive messages with a softer heart-forward tone.', 'Use it in thank-you posts, friend appreciation, or cozy life updates.', 'Pair it with 🫶 or 🤍 when you want comfort more than hype.'],
      zh: ['回复鼓励讯息时，比单纯爱心更有温度。', '感谢朋友、分享日常小确幸时都很适合。', '和 🫶、🤍 一起用，会更偏安慰与陪伴。'],
      es: ['Responde a mensajes de apoyo con un tono más suave y afectuoso.', 'Va muy bien en posts de agradecimiento, amistades o updates acogedores.', 'Combínalo con 🫶 o 🤍 cuando quieras consuelo más que hype.']
    },
    combos: ['🥰🩷', '🥰🤍✨', '🥰🫶💌']
  },
  'hugging-heart': {
    slug: 'hugging-heart',
    aliases: {
      en: ['hugging heart emoji', 'virtual hug emoji', 'heart hug emoji'],
      zh: ['拥抱爱心表情', '虚拟抱抱 emoji', '抱抱爱心'],
      es: ['emoji abrazo corazón', 'abrazo virtual emoji', 'corazón abrazo']
    },
    meaningBullets: {
      en: ['Feels like sending a hug, reassurance, and emotional support from afar.', 'Common in check-ins, recovery notes, and “thinking of you” messages.', 'Softens conversations that need care without sounding overly dramatic.'],
      zh: ['像是在隔着屏幕送出一个抱抱与安慰。', '常见于关心近况、康复祝福与“想到你了”的讯息。', '适合需要温柔支持、又不想太夸张的场景。'],
      es: ['Se siente como enviar un abrazo, calma y apoyo emocional a distancia.', 'Aparece en mensajes de seguimiento, recuperación y “estoy pensando en ti”.', 'Suaviza conversaciones que necesitan cuidado sin sonar demasiado dramáticas.']
    },
    usageIdeas: {
      en: ['Use it when a friend needs comfort more than advice.', 'Add it to supportive replies after stressful weeks or sad news.', 'Pair it with ❤️‍🩹 for healing-focused messages.'],
      zh: ['朋友需要安慰时，比讲道理更有用。', '对方压力大或遇到坏消息时，加上它会更贴心。', '和 ❤️‍🩹 搭配，特别适合疗愈语境。'],
      es: ['Úsalo cuando una amistad necesite consuelo más que consejos.', 'Funciona muy bien tras semanas duras o noticias tristes.', 'Combínalo con ❤️‍🩹 en mensajes de apoyo y sanación.']
    },
    combos: ['🤗🤍', '🤗🫶💌', '🤗❤️‍🩹✨']
  },
  'love-you-gesture': {
    slug: 'love-you-gesture',
    aliases: {
      en: ['love you hand sign emoji', 'i love you gesture emoji', 'asl love you emoji'],
      zh: ['我爱你手势', '爱你手势 emoji', '手语我爱你'],
      es: ['emoji gesto te amo', 'mano te quiero emoji', 'emoji lenguaje de señas amor']
    },
    meaningBullets: {
      en: ['Represents the ASL-inspired “I love you” hand sign.', 'Carries more intention than a casual wave or thumbs-up.', 'Often used in concert culture, inclusive messaging, and affectionate sign-offs.'],
      zh: ['代表手语里“我爱你”的手势。', '比挥手或点赞更有明确爱意与心意。', '常见于演唱会文化、包容表达与温柔收尾。'],
      es: ['Representa el gesto inspirado en ASL para decir “te amo”.', 'Tiene más intención que un saludo casual o un pulgar arriba.', 'Se usa mucho en conciertos, mensajes inclusivos y despedidas cariñosas.']
    },
    usageIdeas: {
      en: ['Use it in fan posts, accessibility-aware content, or loving goodbyes.', 'Pair it with ❤️ when you want a direct “I love you” signal.', 'Works well in creator communities that rely on gesture-heavy reactions.'],
      zh: ['适合粉丝贴文、无障碍友善内容或充满爱意的道别。', '和 ❤️ 一起用时，会更像直接说“我爱你”。', '在常用手势互动的创作者社群里也很自然。'],
      es: ['Úsalo en posts de fandom, contenidos inclusivos o despedidas cariñosas.', 'Con ❤️ transmite un “te amo” mucho más directo.', 'También funciona muy bien en comunidades de creadores con reacciones gestuales.']
    },
    combos: ['🤟❤️', '🤟🫶✨', '🤟🎸💜']
  },
  'light-blue-heart': {
    slug: 'light-blue-heart',
    aliases: {
      en: ['light blue heart emoji', 'baby blue heart emoji', 'sky blue heart emoji'],
      zh: ['浅蓝爱心', '淡蓝爱心 emoji', '天空蓝爱心'],
      es: ['emoji corazón celeste', 'corazón azul claro', 'emoji corazón azul bebé']
    },
    meaningBullets: {
      en: ['Feels airy, calm, and softly supportive.', 'Often chosen for sky aesthetics, peaceful moods, and platonic care.', 'Lands gentler than 💙 while still feeling sincere.'],
      zh: ['带有天空感、平静感与轻柔支持。', '常用于晴空美学、平和情绪与朋友间的关怀。', '比 💙 更轻盈，但依然真诚。'],
      es: ['Se siente ligero, calmado y suavemente afectuoso.', 'Suele elegirse para estéticas de cielo, moods tranquilos y apoyo platónico.', 'Es más ligero que 💙, pero sigue sonando sincero.']
    },
    usageIdeas: {
      en: ['Use it in calm check-ins, dreamy edits, or gentle encouragement.', 'Pair it with 🤍 for cloud-like palettes and soft branding.', 'Works well when you want affection without romantic pressure.'],
      zh: ['适合温柔问候、做梦感剪辑或轻轻打气。', '和 🤍 一起用时，很适合云朵系配色与清淡品牌风格。', '想表达关心但不想太像恋爱语气时很好用。'],
      es: ['Úsalo en check-ins tranquilos, edits soñadores o mensajes de ánimo suave.', 'Combina con 🤍 para paletas tipo nube o branding delicado.', 'Va perfecto cuando quieres mostrar cariño sin presión romántica.']
    },
    combos: ['🩵☁️✨', '🩵🤍💙', '🩵🫧🌤️']
  },
  'purple-heart': {
    slug: 'purple-heart',
    aliases: {
      en: ['purple heart emoji', 'purple heart meaning', 'violet heart emoji'],
      zh: ['紫色爱心', '紫心 emoji', '紫色爱心含义'],
      es: ['emoji corazón morado', 'significado corazón morado', 'corazón violeta emoji']
    },
    meaningBullets: {
      en: ['Blends admiration, creativity, and fandom loyalty.', 'Can hint at luxury, mystery, or artistic taste depending on context.', 'In some contexts it also nods to the Purple Heart military honor.'],
      zh: ['融合了崇拜、创意与粉丝应援感。', '也可能带出高级感、神秘感或艺术气质。', '在特定语境下，还会让人联想到紫心勋章。'],
      es: ['Mezcla admiración, creatividad y lealtad de fandom.', 'Según el contexto puede sugerir lujo, misterio o gusto artístico.', 'En ciertos casos también alude a la condecoración Purple Heart.']
    },
    usageIdeas: {
      en: ['Use it in fan communities, music edits, or glamorous branding.', 'Pair it with ✨ when you want a regal or dreamy finish.', 'Works well for posts that need admiration more than romance.'],
      zh: ['适合饭圈应援、音乐剪辑或带一点华丽感的品牌内容。', '和 ✨ 搭配时，会更有王室或梦幻气质。', '适合表达欣赏、敬意，而不只是恋爱意味。'],
      es: ['Úsalo en comunidades de fandom, edits musicales o branding glamuroso.', 'Con ✨ consigue un acabado más regio o soñador.', 'Va muy bien en posts que buscan admiración más que romance.']
    },
    combos: ['💜✨🎤', '💜🫶💜', '💜👑✨']
  },
  'heart-exclamation': {
    slug: 'heart-exclamation',
    aliases: {
      en: ['heart exclamation emoji', 'heart punctuation emoji', 'red heart exclamation'],
      zh: ['爱心惊叹号', '感叹爱心 emoji', '爱心标点'],
      es: ['emoji corazón exclamación', 'signo de exclamación corazón', 'corazón con exclamación']
    },
    meaningBullets: {
      en: ['Adds loving emphasis, urgency, or excited punctuation.', 'Feels more expressive than a plain exclamation point and sharper than a full heart.', 'Often used in announcements, shout-outs, and playful hype.'],
      zh: ['像是把爱意和惊叹号合在一起。', '比普通感叹号更有感情，也比完整爱心更像一句强调。', '常用于公告、打 call、热情提醒与夸夸。'],
      es: ['Une cariño con énfasis y un toque de urgencia o entusiasmo.', 'Se siente más expresivo que un signo de exclamación normal y más directo que un corazón completo.', 'Se usa mucho en anuncios, shout-outs y mensajes de hype.']
    },
    usageIdeas: {
      en: ['Use it in captions where you want affection plus emphasis.', 'Great for concert reactions, launch announcements, or friend shout-outs.', 'Pair it with ❤️ or ✨ to make short lines pop harder.'],
      zh: ['适合想表达“有爱又很激动”的短句。', '演出应援、新品宣布、朋友夸夸都很好用。', '和 ❤️、✨ 搭配时，短标题会更有冲击。'],
      es: ['Úsalo cuando quieras cariño y énfasis al mismo tiempo.', 'Funciona muy bien en reacciones a conciertos, lanzamientos o shout-outs.', 'Con ❤️ o ✨ hace que las frases cortas destaquen mucho más.']
    },
    combos: ['❣️❣️❣️', '❣️✨📣', '❤️❣️💥']
  },
  'star-struck-heart': {
    slug: 'star-struck-heart',
    aliases: {
      en: ['star struck emoji', 'dazzled heart eyes emoji', 'wow love emoji'],
      zh: ['星星爱心眼', '惊艳爱心表情', '超爱 wow 表情'],
      es: ['emoji deslumbrado enamorado', 'emoji wow corazón', 'cara fascinada con amor']
    },
    meaningBullets: {
      en: ['Shows dazzled excitement when something feels bigger than a normal crush reaction.', 'Works for performances, viral drops, and moments that feel unreal.', 'Feels louder and more spectacle-driven than 😍 or 🥰.'],
      zh: ['表示被惊艳到、震撼到的喜欢。', '很适合演出、爆款发布或“太夸张了吧”的瞬间。', '比 😍、🥰 都更偏舞台感与 spectacle。'],
      es: ['Muestra emoción deslumbrada cuando algo supera la típica reacción de crush.', 'Sirve para actuaciones, lanzamientos virales y momentos casi irreales.', 'Suena más ruidoso y espectacular que 😍 o 🥰.']
    },
    usageIdeas: {
      en: ['Use it for stage photos, luxury reveals, and “I cannot believe this” replies.', 'Pair it with ✨ or 🔥 for full hype energy.', 'Great in fandom posts when admiration becomes awe.'],
      zh: ['适合舞台照、奢华发布与“我不敢相信”的回复。', '和 ✨、🔥 一起用，会更有爆发感。', '在饭圈语境里，特别适合从喜欢升级到惊叹。'],
      es: ['Úsalo en fotos de escenario, reveals de lujo y respuestas tipo “no me lo creo”.', 'Con ✨ o 🔥 consigue una energía de hype total.', 'Va genial en fandoms cuando la admiración se vuelve asombro.']
    },
    combos: ['🤩💖', '🤩✨🔥', '🤩💫🩷']
  },
  'heart-outline': {
    slug: 'heart-outline',
    aliases: {
      en: ['heart outline emoji', 'text heart emoji', 'outline of a heart emoji'],
      zh: ['空心爱心 emoji', '文字爱心', '爱心轮廓符号'],
      es: ['emoji corazón delineado', 'corazón de texto', 'contorno de corazón']
    },
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
