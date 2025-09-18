import type { HeartEmoji } from '@/data/emojis';
import type { Locale } from './i18n';

export const toneLabels: Record<Locale, Record<HeartEmoji['tone'], string>> = {
  en: {
    warm: 'Warm',
    cool: 'Cool',
    neutral: 'Neutral',
    playful: 'Playful',
    dark: 'Bold'
  },
  zh: {
    warm: '暖调',
    cool: '冷调',
    neutral: '中性',
    playful: '俏皮',
    dark: '酷感'
  },
  es: {
    warm: 'Cálido',
    cool: 'Frío',
    neutral: 'Neutro',
    playful: 'Divertido',
    dark: 'Intenso'
  }
};

export const toneDescriptions: Record<Locale, Record<HeartEmoji['tone'], string>> = {
  en: {
    warm: 'Warm & heartfelt energy.',
    cool: 'Cool, composed, and calm.',
    neutral: 'Neutral balance with understated charm.',
    playful: 'Playful and vibrant emotions.',
    dark: 'Bold symbolism with a dramatic edge.'
  },
  zh: {
    warm: '暖暖的能量，真挚而热情。',
    cool: '沉静清爽，带来安心感。',
    neutral: '中性平衡，含蓄又细腻。',
    playful: '俏皮活泼，充满节奏感。',
    dark: '酷感十足，带点戏剧冲击。'
  },
  es: {
    warm: 'Energía cálida y afectuosa.',
    cool: 'Serenidad fresca y equilibrada.',
    neutral: 'Equilibrio neutro con encanto sutil.',
    playful: 'Emociones alegres y divertidas.',
    dark: 'Simbolismo intenso con un toque dramático.'
  }
};
