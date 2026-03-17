export type SearchLandingSnippet = {
  title: string;
  value: string;
  description: string;
};

export type SearchLandingSection = {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  snippets?: SearchLandingSnippet[];
  bullets?: string[];
};

export type SearchLandingFaq = {
  question: string;
  answer: string;
};

export type SearchLandingRelatedLink = {
  href: string;
  label: string;
  description: string;
};

export type SearchLandingPageEntry = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  heroHighlights: string[];
  sections: SearchLandingSection[];
  faqs: SearchLandingFaq[];
  relatedLinks: SearchLandingRelatedLink[];
};

function repeatEmoji(emoji: string, count: number) {
  return emoji.repeat(count);
}

function spacedPattern(sequence: string[], count: number) {
  return Array.from({ length: count }, (_, index) => sequence[index % sequence.length]).join('');
}

const red100 = repeatEmoji('❤️', 100);
const pink100 = repeatEmoji('🩷', 100);
const sparkle100 = repeatEmoji('💖', 100);
const black100 = repeatEmoji('🖤', 100);
const mixed100 = spacedPattern(['❤️', '🩷', '💖', '💕', '💞'], 100);

const red500 = repeatEmoji('❤️', 500);
const pink500 = repeatEmoji('🩷', 500);
const sparkle500 = repeatEmoji('💖', 500);
const black500 = repeatEmoji('🖤', 500);
const mixed500 = spacedPattern(['❤️', '🩷', '💖', '💕', '💞'], 500);

const red1000 = repeatEmoji('❤️', 1000);
const pink1000 = repeatEmoji('🩷', 1000);
const sparkle1000 = repeatEmoji('💖', 1000);
const black1000 = repeatEmoji('🖤', 1000);
const rainbow1000 = spacedPattern(['❤️', '🩷', '💜', '💙', '💚', '💛', '🧡'], 1000);
const mixed1000 = spacedPattern(['❤️', '🩷', '💖', '💕', '💞'], 1000);

export const SEARCH_LANDING_PAGES: SearchLandingPageEntry[] = [
  {
    slug: 'corazones-para-copiar-y-pegar',
    title: 'Corazones para copiar y pegar',
    description:
      'Encuentra corazones para copiar y pegar en WhatsApp, Instagram y redes: bonitos, aesthetic, minimalistas, románticos y listos para usar.',
    h1: 'Corazones para copiar y pegar',
    intro: [
      'Aquí tienes una selección de corazones para copiar y pegar sin perder tiempo buscando combinaciones que sí se vean bien en WhatsApp, Instagram, TikTok o en tus publicaciones.',
      'Esta página funciona como hub principal: reúne corazones clásicos, bonitos, minimalistas y aesthetic, y además te lleva a versiones específicas de 100, 500, 1000 corazones y a la guía para WhatsApp.'
    ],
    heroHighlights: ['WhatsApp', 'Instagram', 'TikTok', 'Bonitos', 'Aesthetic', 'Símbolos'],
    sections: [
      {
        id: 'corazones-mas-usados',
        eyebrow: 'Lo más copiado',
        title: 'Corazones más usados para copiar al instante',
        description:
          'Estos bloques cubren la mayoría de usos rápidos: respuestas románticas, publicaciones suaves, mensajes amistosos y estados visuales.',
        snippets: [
          {
            title: 'Clásicos',
            value: '❤️ ❤️❤️ ❤️❤️❤️',
            description: 'La versión más reconocible para amor, agradecimiento y mensajes directos.'
          },
          {
            title: 'Bonitos y suaves',
            value: '🩷💖💕💞',
            description: 'Encajan bien en mensajes tiernos, estados cute o publicaciones románticas.'
          },
          {
            title: 'Amistad y apoyo',
            value: '💛💚🩵💙',
            description: 'Funcionan mejor cuando quieres cariño sin que suene demasiado romántico.'
          },
          {
            title: 'Minimalistas',
            value: '♡ ♡ ♡',
            description: 'Ideales para nombres, bios o estados con estilo más limpio.'
          },
          {
            title: 'Dark aesthetic',
            value: '🖤🩶🤍',
            description: 'Útiles para un look sobrio, elegante o más visual.'
          },
          {
            title: 'Corazón símbolo',
            value: '♥︎ ♡ ❣︎ ❤',
            description: 'Combinación de símbolos y corazones que también sirve para texto puro.'
          }
        ]
      },
      {
        id: 'por-estilo',
        eyebrow: 'Por estilo',
        title: 'Corazones para copiar según el estilo que buscas',
        description:
          'Si no solo quieres un corazón cualquiera, sino una estética concreta, estas combinaciones te ayudan a elegir más rápido.',
        snippets: [
          {
            title: 'Románticos',
            value: '❤️💋💌💕',
            description: 'Pensados para pareja, aniversarios y respuestas con intención clara.'
          },
          {
            title: 'Bonitos',
            value: '🩷🌷💖✨',
            description: 'Más dulces, decorativos y cercanos al tono “cute”.'
          },
          {
            title: 'Aesthetic',
            value: '🤍🩶🖤 ✧',
            description: 'Una mezcla limpia y visual para captions, bios o estados.'
          },
          {
            title: 'Coloridos',
            value: '❤️🧡💛💚💙💜',
            description: 'Más energía y presencia visual para posts o comentarios.'
          }
        ]
      },
      {
        id: 'atajos-especificos',
        eyebrow: 'Atajos',
        title: 'Ve directo a la versión que necesitas',
        description:
          'Si ya sabes cuántos corazones quieres o si los necesitas para una app concreta, estas rutas te llevan a páginas más específicas.',
        bullets: [
          '100 corazones para copiar y pegar si buscas una cadena más corta y ligera.',
          '500 corazones para copiar y pegar si quieres impacto sin llenar tanto la pantalla.',
          '1000 corazones para copiar y pegar si buscas una pared visual para comentarios, estados o fans.',
          'Corazones para WhatsApp si quieres bloques pensados para chats, estados y grupos.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Dónde puedo usar estos corazones para copiar y pegar?',
        answer:
          'Puedes pegarlos en WhatsApp, Instagram, TikTok, comentarios, estados, nombres decorativos, bios o cualquier app que acepte emojis o símbolos.'
      },
      {
        question: '¿Qué corazones son mejores para WhatsApp?',
        answer:
          'Para WhatsApp suelen funcionar muy bien los bloques cortos y claros. Si buscas algo específico para chats, estados o grupos, conviene abrir la página de corazones para WhatsApp.'
      },
      {
        question: '¿Qué diferencia hay entre corazones bonitos, aesthetic y minimalistas?',
        answer:
          'Los corazones bonitos suelen ser más tiernos y coloridos, los aesthetic buscan una combinación visual concreta y los minimalistas usan menos elementos para verse más limpios.'
      },
      {
        question: '¿Puedo copiar un solo corazón símbolo y no una cadena completa?',
        answer:
          'Sí. Esta página incluye tanto cadenas como símbolos sueltos, por ejemplo ♥︎, ♡, ❣︎ o ❤, para que elijas según el contexto.'
      },
      {
        question: '¿Esta página es distinta de la biblioteca general de copy paste?',
        answer:
          'Sí. La biblioteca general reúne packs y herramientas; esta página está enfocada en la consulta directa “corazones para copiar y pegar” y te da atajos rápidos según longitud o uso.'
      }
    ],
    relatedLinks: [
      {
        href: '/es/copiar/100-corazones-para-copiar-y-pegar',
        label: '100 corazones para copiar y pegar',
        description: 'Versión corta y fácil de usar en mensajes, estados y comentarios.'
      },
      {
        href: '/es/copiar/500-corazones-para-copiar-y-pegar',
        label: '500 corazones para copiar y pegar',
        description: 'Una cadena intermedia para más impacto sin llegar a 1000.'
      },
      {
        href: '/es/copiar/1000-corazones-para-copiar-y-pegar',
        label: '1000 corazones para copiar y pegar',
        description: 'La versión larga que ya está captando clics y búsquedas en español.'
      },
      {
        href: '/es/copiar/corazones-para-whatsapp',
        label: 'Corazones para WhatsApp',
        description: 'Combos pensados para mensajes, grupos, estados y perfiles.'
      }
    ]
  },
  {
    slug: '100-corazones-para-copiar-y-pegar',
    title: '100 corazones para copiar y pegar',
    description:
      'Copia 100 corazones para WhatsApp, estados, comentarios y mensajes. Versiones rojas, rosas, brillantes, negras y mezcladas listas para pegar.',
    h1: '100 corazones para copiar y pegar',
    intro: [
      'Si 1000 corazones te parecen demasiado, esta versión corta es más práctica para chats, estados y comentarios que necesitan verse bonitos sin ocupar toda la pantalla.',
      'Aquí tienes bloques de 100 corazones en varios estilos para que copies justo la intensidad que necesitas: romántica, cute, brillante, oscura o mezclada.'
    ],
    heroHighlights: ['Mensajes', 'Estados', 'Comentarios', 'Corto', 'Ligero', 'WhatsApp'],
    sections: [
      {
        id: 'bloques-100',
        eyebrow: 'Listos para pegar',
        title: 'Bloques de 100 corazones más útiles',
        description:
          'Estas versiones son lo bastante largas para verse visuales, pero siguen siendo cómodas para chats, captions y respuestas rápidas.',
        snippets: [
          {
            title: '100 corazones rojos',
            value: red100,
            description: 'La versión más directa para amor, celebración o respuestas enfáticas.'
          },
          {
            title: '100 corazones rosas',
            value: pink100,
            description: 'Más suave y dulce; ideal para un tono cercano o tierno.'
          },
          {
            title: '100 corazones brillantes',
            value: sparkle100,
            description: 'Añade más energía visual a captions, respuestas o publicaciones.'
          },
          {
            title: '100 corazones negros',
            value: black100,
            description: 'Mejor para estilos sobrios, dark o combinaciones aesthetic.'
          },
          {
            title: '100 corazones mezclados',
            value: mixed100,
            description: 'Combina varios estilos para que la cadena no se vea plana.'
          }
        ]
      },
      {
        id: 'cuando-usar-100',
        eyebrow: 'Uso recomendado',
        title: 'Cuándo conviene usar 100 corazones y no 500 o 1000',
        description:
          'La versión de 100 suele verse mejor cuando el espacio es más limitado o cuando quieres acompañar una frase sin que el bloque se convierta en el único protagonista.',
        bullets: [
          'Mensajes de WhatsApp donde buscas un gesto visual claro, pero todavía legible.',
          'Estados cortos o captions donde una cadena larga sería excesiva.',
          'Comentarios rápidos en TikTok o Instagram cuando quieres responder con energía.',
          'Firmas decorativas o pruebas visuales antes de usar una cadena más larga.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿100 corazones se ven bien en WhatsApp?',
        answer:
          'Sí. De hecho, 100 corazones suelen ser más cómodos para WhatsApp que bloques mucho más largos, porque siguen teniendo impacto visual sin saturar tanto el chat.'
      },
      {
        question: '¿Qué diferencia hay entre 100 corazones y 500 corazones?',
        answer:
          '100 corazones son más prácticos y ligeros para mensajes cortos. 500 corazones ya producen un efecto visual mucho más grande y ocupan bastante más espacio.'
      },
      {
        question: '¿Puedo usar 100 corazones en estados o comentarios?',
        answer:
          'Sí. Son una buena opción para estados, captions y comentarios porque equilibran visibilidad con legibilidad.'
      },
      {
        question: '¿Qué color de corazón conviene más para esta longitud?',
        answer:
          'Depende del tono. Rojo para amor clásico, rosa para ternura, negro para un look sobrio y mezclado si quieres algo más llamativo.'
      }
    ],
    relatedLinks: [
      {
        href: '/es/copiar/corazones-para-copiar-y-pegar',
        label: 'Corazones para copiar y pegar',
        description: 'Vuelve al hub principal y compara estilos y usos.'
      },
      {
        href: '/es/copiar/500-corazones-para-copiar-y-pegar',
        label: '500 corazones para copiar y pegar',
        description: 'Sube de intensidad con una cadena más larga.'
      },
      {
        href: '/es/copiar/1000-corazones-para-copiar-y-pegar',
        label: '1000 corazones para copiar y pegar',
        description: 'La versión completa para impactos visuales más fuertes.'
      },
      {
        href: '/es/copiar/corazones-para-whatsapp',
        label: 'Corazones para WhatsApp',
        description: 'Bloques pensados directamente para chats, estados y grupos.'
      }
    ]
  },
  {
    slug: '500-corazones-para-copiar-y-pegar',
    title: '500 corazones para copiar y pegar',
    description:
      'Copia 500 corazones para WhatsApp, TikTok, Instagram y comentarios largos. Versiones rojas, rosas, brillantes, negras y mezcladas listas para usar.',
    h1: '500 corazones para copiar y pegar',
    intro: [
      '500 corazones son un punto medio perfecto cuando 100 se sienten pocos y 1000 ya ocupan demasiado. Esta longitud funciona muy bien en publicaciones, comentarios largos y estados llamativos.',
      'Preparamos varias versiones para que copies cadenas medianas con más presencia visual: románticas, suaves, brillantes, oscuras o mezcladas.'
    ],
    heroHighlights: ['WhatsApp', 'TikTok', 'Instagram', 'Comentarios', 'Estados', 'Impacto medio'],
    sections: [
      {
        id: 'bloques-500',
        eyebrow: 'Impacto visual',
        title: 'Bloques de 500 corazones listos para copiar',
        description:
          'Estas cadenas medianas mantienen el efecto visual de una pared de corazones, pero resultan más manejables que una versión de 1000.',
        snippets: [
          {
            title: '500 corazones rojos',
            value: red500,
            description: 'La opción clásica para mensajes intensos, respuestas y publicaciones emotivas.'
          },
          {
            title: '500 corazones rosas',
            value: pink500,
            description: 'Más suave y romántica; se ve muy bien en estados o textos cute.'
          },
          {
            title: '500 corazones brillantes',
            value: sparkle500,
            description: 'Ideal para un toque más decorativo en TikTok o Instagram.'
          },
          {
            title: '500 corazones negros',
            value: black500,
            description: 'Una cadena más sobria para estilos dark o aesthetic.'
          },
          {
            title: '500 corazones mezclados',
            value: mixed500,
            description: 'Aporta variedad visual sin llegar a ser una pared tan extensa como la de 1000.'
          }
        ]
      },
      {
        id: 'donde-queda-mejor',
        eyebrow: 'Cuándo usarlo',
        title: 'Dónde se ve mejor una cadena de 500 corazones',
        description:
          'Si buscas equilibrio entre impacto visual y practicidad, 500 corazones encajan muy bien en estos escenarios.',
        bullets: [
          'Comentarios largos en TikTok o Instagram cuando quieres que la respuesta destaque.',
          'Estados con tono romántico o celebratorio donde 1000 sería demasiado largo.',
          'Mensajes especiales en WhatsApp cuando quieres exagerar un poco sin ocupar todo el chat.',
          'Publicaciones de fandom, cumpleaños o aniversarios donde una cadena media luce mejor.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿500 corazones sirven para WhatsApp?',
        answer:
          'Sí. Funcionan bien en chats y estados si quieres un bloque llamativo, aunque siguen ocupando bastante espacio. Son un buen punto medio entre 100 y 1000.'
      },
      {
        question: '¿500 corazones son mejores que 1000 para comentarios?',
        answer:
          'En muchos casos sí, porque mantienen un efecto visual fuerte pero resultan más fáciles de leer y menos excesivos dentro de un comentario.'
      },
      {
        question: '¿Cuál es la ventaja de 500 corazones frente a 100?',
        answer:
          '500 corazones tienen más presencia y llaman más la atención. 100 corazones son más ligeros; 500 ya generan una pared visual mucho más clara.'
      },
      {
        question: '¿Puedo copiar solo una parte del bloque de 500?',
        answer:
          'Sí. Aunque el bloque completo ya viene listo, puedes pegarlo y recortar la cantidad si necesitas una longitud intermedia.'
      }
    ],
    relatedLinks: [
      {
        href: '/es/copiar/corazones-para-copiar-y-pegar',
        label: 'Corazones para copiar y pegar',
        description: 'Compara esta longitud con el hub general y otros estilos.'
      },
      {
        href: '/es/copiar/100-corazones-para-copiar-y-pegar',
        label: '100 corazones para copiar y pegar',
        description: 'Una alternativa más corta y ligera para chats rápidos.'
      },
      {
        href: '/es/copiar/1000-corazones-para-copiar-y-pegar',
        label: '1000 corazones para copiar y pegar',
        description: 'La versión larga para un efecto todavía más extremo.'
      },
      {
        href: '/es/copiar/corazones-para-whatsapp',
        label: 'Corazones para WhatsApp',
        description: 'Más opciones por tipo de uso dentro de WhatsApp.'
      }
    ]
  },
  {
    slug: '1000-corazones-para-copiar-y-pegar',
    title: '1000 corazones para copiar y pegar en WhatsApp',
    description:
      'Copia 1000 corazones para copiar y pegar en WhatsApp, Instagram o TikTok. También cubre la búsqueda “mil corazones para copiar y pegar” con versiones listas para usar.',
    h1: '1000 corazones para copiar y pegar',
    intro: [
      'Si buscas 1000 corazones para copiar y pegar en WhatsApp o incluso “mil corazones para copiar y pegar”, esta página reúne las versiones más útiles para mensajes largos, publicaciones y comentarios que quieren causar impacto.',
      'Preparamos opciones en rojo, rosa, brillante, negro y multicolor para que no tengas que generar nada manualmente. Solo toca el bloque que te guste y pégalo donde quieras.'
    ],
    heroHighlights: ['WhatsApp', 'Instagram', 'TikTok', 'Mil corazones', 'Estados', 'Comentarios'],
    sections: [
      {
        id: 'bloques-principales',
        eyebrow: 'Copiar al instante',
        title: '1000 corazones para copiar y pegar en WhatsApp y redes',
        description:
          'Estas son las versiones más buscadas. Cada bloque tiene 1000 corazones completos y funciona bien para mensajes largos, estados, comentarios o composiciones visuales.',
        snippets: [
          {
            title: '1000 corazones rojos',
            value: red1000,
            description: 'La opción clásica para amor, aniversarios, agradecimientos y mensajes intensos.'
          },
          {
            title: '1000 corazones rosas',
            value: pink1000,
            description: 'Más suave y tierno; ideal para crushes, amistad cariñosa o estética cute.'
          },
          {
            title: '1000 corazones brillantes',
            value: sparkle1000,
            description: 'Perfecto para posts llamativos, captions románticos y mensajes con energía dulce.'
          },
          {
            title: '1000 corazones negros',
            value: black1000,
            description: 'Útil para estilos dark, publicaciones aesthetic o tonos más sobrios.'
          },
          {
            title: '1000 corazones multicolor',
            value: rainbow1000,
            description: 'Mezcla varios colores para publicaciones llamativas, fandoms y textos celebratorios.'
          },
          {
            title: '1000 corazones románticos mezclados',
            value: mixed1000,
            description: 'Combina varios estilos dulces para una cadena más dinámica y visual.'
          }
        ]
      },
      {
        id: 'variantes-por-cantidad',
        eyebrow: 'Versiones cortas',
        title: 'Variantes por cantidad para no saturar el mensaje',
        description:
          'No siempre necesitas una cadena de 1000 o mil corazones. Estas versiones cortas son útiles cuando el espacio es limitado o quieres una intensidad más moderada.',
        snippets: [
          {
            title: '100 corazones',
            value: red100,
            description: 'Buena opción para un mensaje corto o una respuesta visual que no se vea excesiva.'
          },
          {
            title: '300 corazones',
            value: repeatEmoji('❤️', 300),
            description: 'Suficiente para un estado, caption o comentario largo sin llegar al máximo.'
          },
          {
            title: '500 corazones',
            value: red500,
            description: 'Un punto medio útil para TikTok, Instagram o publicaciones de fans.'
          },
          {
            title: '1000 corazones clásicos',
            value: red1000,
            description: 'La versión completa para quienes buscan impacto visual total.'
          }
        ]
      },
      {
        id: 'donde-usarlos',
        eyebrow: 'Ideas de uso',
        title: 'Dónde se ven mejor 1000 corazones',
        description:
          'Antes de pegar una cadena tan larga, piensa en el espacio disponible y en el tono del mensaje. Estas situaciones suelen funcionar mejor.',
        bullets: [
          'Mensajes románticos o de aniversario cuando quieres dar una respuesta exagerada y visual.',
          'Estados y captions cuando buscas llenar espacio con un patrón bonito y reconocible.',
          'Publicaciones de fans o cumpleaños donde una pared de corazones tiene sentido temático.',
          'Nombres decorativos o diseños manuales cuando solo usas una parte del bloque completo.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Cómo copio 1000 corazones para pegar en WhatsApp?',
        answer:
          'Solo pulsa el botón de copiar en cualquiera de los bloques. El texto se guarda en tu portapapeles y luego puedes abrir WhatsApp y pegarlo en un chat, estado o grupo.'
      },
      {
        question: '¿Mil corazones para copiar y pegar es lo mismo que 1000 corazones?',
        answer:
          'Sí. La búsqueda “mil corazones para copiar y pegar” apunta a la misma intención que “1000 corazones para copiar y pegar”, así que aquí encontrarás ambas variantes resueltas en una sola página.'
      },
      {
        question: '¿1000 corazones para copiar y pegar en WhatsApp funcionan bien?',
        answer:
          'Sí, aunque una cadena tan larga ocupa bastante espacio. Funciona mejor en mensajes muy visuales, estados llamativos o publicaciones donde quieres un efecto exagerado.'
      },
      {
        question: '¿Por qué algunos corazones se ven diferente en iPhone y Android?',
        answer:
          'Cada sistema usa su propio diseño de emoji. El carácter es el mismo, pero Apple, Android y algunas apps cambian ligeramente la forma, el brillo o el color.'
      },
      {
        question: '¿1000 corazones no es demasiado para un solo mensaje?',
        answer:
          'Depende del contexto. Para sorprender, celebrar o crear un efecto visual sí puede funcionar. Si quieres algo más limpio, usa las versiones de 100, 300 o 500 corazones.'
      },
      {
        question: '¿Puedo usar estos corazones en nombres o bios?',
        answer:
          'Sí, aunque normalmente conviene pegar solo una parte del bloque. Para nombres, bios y estados cortos, usar menos cantidad suele verse mejor.'
      }
    ],
    relatedLinks: [
      {
        href: '/es/copiar/corazones-para-copiar-y-pegar',
        label: 'Corazones para copiar y pegar',
        description: 'El hub principal para comparar estilos, símbolos y longitudes.'
      },
      {
        href: '/es/copiar/100-corazones-para-copiar-y-pegar',
        label: '100 corazones para copiar y pegar',
        description: 'La versión más corta y práctica para mensajes rápidos.'
      },
      {
        href: '/es/copiar/500-corazones-para-copiar-y-pegar',
        label: '500 corazones para copiar y pegar',
        description: 'Una cadena intermedia para estados, comentarios y captions.'
      },
      {
        href: '/es/copiar/corazones-para-whatsapp',
        label: 'Corazones para WhatsApp',
        description: 'Combos específicos para chats, estados, grupos y perfiles.'
      }
    ]
  },
  {
    slug: 'corazones-para-whatsapp',
    title: 'Corazones para WhatsApp: copiar y pegar',
    description:
      'Encuentra corazones para WhatsApp listos para copiar y pegar: amor, amistad, estados, nombres de grupo, estilos minimalistas y versiones aesthetic.',
    h1: 'Corazones para WhatsApp: copiar y pegar',
    intro: [
      'Si buscas corazones para WhatsApp que se vean bien en mensajes, estados, nombres de grupo o biografías, aquí tienes selecciones rápidas pensadas para cada situación.',
      'En lugar de copiar una sola cadena genérica, puedes elegir bloques para amor, amistad, grupos, estados y estilos aesthetic. Así el resultado se ve más natural dentro de la app.'
    ],
    heroHighlights: ['Mensajes', 'Estados', 'Grupos', 'Bio', 'Amistad', 'Amor'],
    sections: [
      {
        id: 'amor',
        eyebrow: 'Para chats románticos',
        title: 'Corazones para mensajes de amor en WhatsApp',
        description:
          'Estos bloques funcionan bien cuando quieres responder con cariño, celebrar una fecha especial o acompañar una frase romántica.',
        snippets: [
          {
            title: 'Romántico clásico',
            value: '❤️❤️❤️ 💋❤️ 💌❤️',
            description: 'Ideal para aniversarios, mensajes intensos y respuestas de pareja.'
          },
          {
            title: 'Dulce y tierno',
            value: '🩷💞💖💕',
            description: 'Más suave y adorable; perfecto para crushes, afecto y mensajes tiernos.'
          },
          {
            title: 'Enamorada/o',
            value: '🥰💕❤️😍',
            description: 'Una opción expresiva para respuestas rápidas con energía romántica.'
          }
        ]
      },
      {
        id: 'amistad',
        eyebrow: 'Para amigos',
        title: 'Corazones para amistad y apoyo',
        description:
          'Cuando no quieres sonar romántico, los colores y combinaciones correctas ayudan a transmitir apoyo, alegría o complicidad.',
        snippets: [
          {
            title: 'Amistad luminosa',
            value: '💛💚🩵',
            description: 'Transmite buena vibra, apoyo y tono amistoso.'
          },
          {
            title: 'Apoyo sincero',
            value: '💙🤍💙',
            description: 'Se siente más sereno y funciona bien para mensajes de ánimo.'
          },
          {
            title: 'Grupo de amigas',
            value: '🩷💖💕💞',
            description: 'Pensado para chats con energía dulce, cute y cercana.'
          }
        ]
      },
      {
        id: 'estados',
        eyebrow: 'Para estados',
        title: 'Corazones para estados de WhatsApp',
        description:
          'En estados conviene usar bloques que se lean rápido y tengan impacto visual sin ocupar demasiado. Estas opciones funcionan bien con fotos, selfies o frases cortas.',
        snippets: [
          {
            title: 'Estado minimal',
            value: '♡ ♥︎ ♡ ♥︎',
            description: 'Ligero y decorativo; útil cuando quieres algo limpio.'
          },
          {
            title: 'Estado aesthetic',
            value: '🤍🩶🖤',
            description: 'Buena combinación para tonos neutros, selfies y estética sobria.'
          },
          {
            title: 'Estado vibrante',
            value: '❤️🩷🧡💛💚💙💜',
            description: 'Más color y energía para publicaciones llamativas.'
          }
        ]
      },
      {
        id: 'grupos',
        eyebrow: 'Para nombres de grupo',
        title: 'Corazones para grupos y nombres decorativos',
        description:
          'Cuando el espacio es corto, lo mejor es usar patrones pequeños y claros. Estos bloques se adaptan mejor a nombres de grupo o descripciones breves.',
        snippets: [
          {
            title: 'Decoración para grupo',
            value: '✨💖 Grupo 💖✨',
            description: 'Añade un toque alegre y llamativo al nombre del grupo.'
          },
          {
            title: 'Grupo de amigas',
            value: '🩷 Amigas por siempre 🩷',
            description: 'Cálido y fácil de leer dentro de WhatsApp.'
          },
          {
            title: 'Grupo sobrio',
            value: '🖤 Team 🖤',
            description: 'Más limpio, discreto y adaptable a distintos temas.'
          }
        ]
      },
      {
        id: 'minimalistas',
        eyebrow: 'Texto puro',
        title: 'Corazones minimalistas y aesthetic',
        description:
          'Si prefieres algo más fino o si tu teclado no tiene todos los emojis disponibles, estas opciones de texto funcionan muy bien en bios y firmas.',
        snippets: [
          {
            title: 'Corazones de texto',
            value: '♡ ♡ ♡',
            description: 'Sencillos y elegantes para biografías o estados discretos.'
          },
          {
            title: 'Kaomoji con corazón',
            value: '(˘ ³˘)♥',
            description: 'Una opción más expresiva y juguetona para mensajes informales.'
          },
          {
            title: 'Firma cute',
            value: '♡ contigo ♡',
            description: 'Funciona bien al final de una frase o un estado corto.'
          }
        ]
      },
      {
        id: 'consejos-whatsapp',
        eyebrow: 'Consejos',
        title: 'Qué corazones quedan mejor según el tipo de uso',
        description:
          'No todos los bloques se ven igual en cada parte de WhatsApp. Estas pautas ayudan a elegir mejor según el espacio y el tono.',
        bullets: [
          'Para mensajes románticos, usa corazones rojos, rosas o combinaciones con 💕 y 💞.',
          'Para estados, suelen verse mejor bloques cortos o combinaciones de 3 a 7 corazones.',
          'Para nombres de grupo, evita cadenas largas y elige diseños limpios que sigan siendo legibles.',
          'Para perfiles o bios, los corazones de texto y los estilos minimalistas suelen integrarse mejor.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Puedo copiar estos corazones y pegarlos directamente en WhatsApp?',
        answer:
          'Sí. Pulsa el botón de copiar y luego pega el bloque en un chat, un estado, la descripción de un grupo o donde quieras dentro de WhatsApp.'
      },
      {
        question: '¿Qué corazones quedan mejor para pareja y cuáles para amistad?',
        answer:
          'Para pareja suelen funcionar mejor ❤️, 🩷, 💖, 💕 y 💞. Para amistad o apoyo, muchas personas prefieren 💛, 💚, 🩵, 💙 o 🤍.'
      },
      {
        question: '¿Qué tipo de corazones se ven mejor en un estado de WhatsApp?',
        answer:
          'Los bloques cortos, simétricos o aesthetic suelen verse mejor en estados porque no saturan la pantalla. Las cadenas largas funcionan más para mensajes o comentarios.'
      },
      {
        question: '¿Puedo usar estos corazones en nombres de grupo?',
        answer:
          'Sí, pero conviene usar versiones cortas y legibles. Un patrón pequeño suele funcionar mejor que una cadena larga cuando el nombre debe seguir viéndose claro.'
      },
      {
        question: '¿Por qué algunos corazones cambian de aspecto según el móvil?',
        answer:
          'El emoji es el mismo, pero cada sistema operativo y algunas apps muestran un diseño diferente. Por eso el color o la forma pueden variar ligeramente entre dispositivos.'
      }
    ],
    relatedLinks: [
      {
        href: '/es/copiar/corazones-para-copiar-y-pegar',
        label: 'Corazones para copiar y pegar',
        description: 'Compara esta guía específica con el hub principal de corazones.'
      },
      {
        href: '/es/copiar/100-corazones-para-copiar-y-pegar',
        label: '100 corazones para copiar y pegar',
        description: 'Versión corta para chats y estados donde menos es más.'
      },
      {
        href: '/es/emoji/pink-heart',
        label: 'Significado del corazón rosa',
        description: 'Cuándo usarlo en chats tiernos, crushes y mensajes suaves.'
      },
      {
        href: '/es/emoji/white-heart',
        label: 'Significado del corazón blanco',
        description: 'Una opción limpia y minimalista para estados o perfiles.'
      }
    ]
  }
];

export function getSearchLandingPageBySlug(slug: string) {
  return SEARCH_LANDING_PAGES.find((page) => page.slug === slug);
}
