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

const red1000 = repeatEmoji('❤️', 1000);
const pink1000 = repeatEmoji('🩷', 1000);
const sparkle1000 = repeatEmoji('💖', 1000);
const black1000 = repeatEmoji('🖤', 1000);
const rainbow1000 = spacedPattern(['❤️', '🩷', '💜', '💙', '💚', '💛', '🧡'], 1000);
const mixed1000 = spacedPattern(['❤️', '🩷', '💖', '💕', '💞'], 1000);

export const SEARCH_LANDING_PAGES: SearchLandingPageEntry[] = [
  {
    slug: '1000-corazones-para-copiar-y-pegar',
    title: '1000 corazones para copiar y pegar',
    description:
      'Copia 1000 corazones para WhatsApp, Instagram, TikTok o mensajes largos. Encuentra versiones en rojo, rosa, negro y mezclas listas para pegar.',
    h1: '1000 corazones para copiar y pegar',
    intro: [
      'Si necesitas una cadena larga de corazones para sorprender en WhatsApp, decorar una publicación o llenar un comentario especial, aquí tienes versiones listas para copiar al instante.',
      'Preparamos opciones en rojo, rosa, brillante, negro y multicolor para que no tengas que generar nada manualmente. Solo toca el bloque que te guste y pégalo donde quieras.'
    ],
    heroHighlights: ['WhatsApp', 'Instagram', 'TikTok', 'Estados', 'Comentarios', 'Nombres decorativos'],
    sections: [
      {
        id: 'bloques-principales',
        eyebrow: 'Copiar al instante',
        title: 'Bloques de 1000 corazones listos para pegar',
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
          'No siempre necesitas una cadena de 1000. Estas versiones cortas son útiles cuando el espacio es limitado o quieres una intensidad más moderada.',
        snippets: [
          {
            title: '100 corazones',
            value: repeatEmoji('❤️', 100),
            description: 'Buena opción para un mensaje corto o una respuesta visual que no se vea excesiva.'
          },
          {
            title: '300 corazones',
            value: repeatEmoji('❤️', 300),
            description: 'Suficiente para un estado, caption o comentario largo sin llegar al máximo.'
          },
          {
            title: '500 corazones',
            value: repeatEmoji('❤️', 500),
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
        question: '¿1000 corazones funcionan en WhatsApp, Instagram y TikTok?',
        answer:
          'Sí, pero el resultado visual puede variar según la app y el dispositivo. WhatsApp y la mayoría de redes los muestran bien, aunque una cadena tan larga puede ocupar mucho espacio en pantalla.'
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
        href: '/es/copy-paste',
        label: 'Más packs de corazones para copiar',
        description: 'Explora más combinaciones listas para pegar.'
      },
      {
        href: '/es/generator/1000',
        label: 'Generador de 1000 corazones',
        description: 'Crea tu propia versión larga con otro estilo de corazón.'
      },
      {
        href: '/es/emoji/red-heart',
        label: 'Significado del corazón rojo',
        description: 'Consulta cuándo usar el corazón rojo clásico.'
      },
      {
        href: '/es/text-art',
        label: 'Corazones de texto y ASCII',
        description: 'Opciones para bios, nombres y publicaciones sin emoji gráfico.'
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
        href: '/es/emoji/pink-heart',
        label: 'Significado del corazón rosa',
        description: 'Cuándo usarlo en chats tiernos, crushes y mensajes suaves.'
      },
      {
        href: '/es/emoji/white-heart',
        label: 'Significado del corazón blanco',
        description: 'Una opción limpia y minimalista para estados o perfiles.'
      },
      {
        href: '/es/copy-paste',
        label: 'Biblioteca completa para copiar y pegar',
        description: 'Más paquetes y combinaciones listas para WhatsApp y redes.'
      },
      {
        href: '/es/text-art',
        label: 'Símbolos y corazones de texto',
        description: 'Perfectos para bios, nombres o estados con menos saturación visual.'
      }
    ]
  }
];

export function getSearchLandingPageBySlug(slug: string) {
  return SEARCH_LANDING_PAGES.find((page) => page.slug === slug);
}
