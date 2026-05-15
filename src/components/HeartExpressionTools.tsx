'use client';

import { useMemo, useState } from 'react';
import type { Dictionary } from '@/data/dictionaries';
import { CopyButton } from './CopyButton';

interface HeartExpressionToolsProps {
  dictionary: Dictionary;
}

type GeneratorStyle = 'romantic' | 'soft' | 'cute' | 'fandom' | 'dark' | 'aesthetic';
type LanguageKey = 'en' | 'zh' | 'es';

const styleOrder: GeneratorStyle[] = ['romantic', 'soft', 'cute', 'fandom', 'dark', 'aesthetic'];

const defaultTerms: Record<LanguageKey, { bio: string; caption: string }> = {
  en: {
    bio: 'soft heart',
    caption: 'today'
  },
  zh: {
    bio: '温柔心动',
    caption: '今天'
  },
  es: {
    bio: 'corazón suave',
    caption: 'hoy'
  }
};

const bioTemplates: Record<LanguageKey, Record<GeneratorStyle, string[]>> = {
  en: {
    romantic: ['{term} ❤️', 'always {term} 💌', '♡ {term} in my heart ♡', '{term} era, soft love only', 'made of {term} and red hearts'],
    soft: ['♡ {term} ♡', '{term} in soft focus', 'tiny heart, quiet {term}', 'slow days with {term} 🤍', 'soft notes for {term}'],
    cute: ['୨♡୧ {term} ୨♡୧', '{term} but make it cute 🩷', 'little {term} club', 'cute heart archive: {term}', 'sprinkled with {term} 💖'],
    fandom: ['{term} fan heart mode', 'streaming {term} with love', '{term} support squad 💜', 'heart hands for {term}', 'forever cheering for {term}'],
    dark: ['{term} after midnight 🖤', 'black hearts, quiet {term}', 'nocturne for {term}', 'dark mode heart: {term}', 'soft chaos, {term} edition'],
    aesthetic: ['{term}  ♡  archive', '✦ {term} heart file ✦', 'clean lines, soft {term}', 'minimal heart mood: {term}', '🤍 {term} / saved']
  },
  zh: {
    romantic: ['{term} ❤️', '把 {term} 放进心里 💌', '♡ {term} 的心动记录 ♡', '{term} 与红色爱心', '今天也喜欢 {term}'],
    soft: ['♡ {term} ♡', '{term} 的温柔存档', '一点点 {term} 🤍', '慢慢喜欢 {term}', '安静地收藏 {term}'],
    cute: ['୨♡୧ {term} ୨♡୧', '{term} 可爱模式 🩷', '小小 {term} 俱乐部', '{term} 心心补给站', '撒一点 {term} 💖'],
    fandom: ['为 {term} 比心', '{term} 应援中 💜', '把掌声和爱心都给 {term}', '{term} support squad', '一直为 {term} 发光'],
    dark: ['午夜后的 {term} 🖤', '黑色爱心与 {term}', '{term} 暗黑模式', '冷调心动：{term}', '安静又锋利的 {term}'],
    aesthetic: ['{term}  ♡  存档', '✦ {term} 心动文件 ✦', '干净线条与 {term}', '{term} 氛围感', '🤍 {term} / 已收藏']
  },
  es: {
    romantic: ['{term} ❤️', 'siempre {term} 💌', '♡ {term} en mi corazón ♡', 'modo amor: {term}', 'hecho de {term} y corazones rojos'],
    soft: ['♡ {term} ♡', '{term} en tono suave', 'corazón pequeño, {term} tranquilo', 'días suaves con {term} 🤍', 'notas suaves para {term}'],
    cute: ['୨♡୧ {term} ୨♡୧', '{term} pero cute 🩷', 'club de {term}', 'archivo cute: {term}', 'con un poco de {term} 💖'],
    fandom: ['modo fan de {term}', 'apoyando {term} con amor', 'squad de {term} 💜', 'corazones para {term}', 'siempre celebrando {term}'],
    dark: ['{term} después de medianoche 🖤', 'corazones negros, {term} suave', 'nocturno para {term}', 'modo dark: {term}', 'caos suave, edición {term}'],
    aesthetic: ['{term}  ♡  archivo', '✦ archivo de {term} ✦', 'líneas limpias, {term} suave', 'mood aesthetic: {term}', '🤍 {term} / guardado']
  }
};

const captionTemplates: Record<LanguageKey, Record<GeneratorStyle, string[]>> = {
  en: {
    romantic: ['{term} with my whole heart ❤️', 'saving this {term} feeling forever', 'red hearts for {term}', '{term}, but make it love', 'still choosing {term} 💌'],
    soft: ['soft heart, soft {term}', 'quiet little {term} moment 🤍', 'keeping {term} close', '{term} in a softer light', 'a gentle note for {term}'],
    cute: ['tiny hearts for {term} 🩷', '{term} made my day cuter', 'just a cute {term} update', 'sparkles, hearts, and {term} 💖', '{term} deserves extra hearts'],
    fandom: ['all hearts on {term} 💜', 'cheering for {term} again', '{term} support post', 'heart hands for {term} 🫶', 'no skips, just {term}'],
    dark: ['black heart mood: {term} 🖤', '{term} after dark', 'soft shadows, sharp hearts', 'night mode for {term}', 'low light, loud heart'],
    aesthetic: ['{term} / saved with a heart', 'clean mood, soft heart', 'a small archive of {term}', 'heart detail: {term}', '{term}, quietly glowing']
  },
  zh: {
    romantic: ['把整颗心给 {term} ❤️', '想把 {term} 一直收藏', '红色爱心送给 {term}', '{term}，是今天的心动', '还是会选择 {term} 💌'],
    soft: ['温柔一点，靠近 {term}', '小小的 {term} 时刻 🤍', '把 {term} 留在身边', '柔光里的 {term}', '写给 {term} 的轻轻一句'],
    cute: ['小心心送给 {term} 🩷', '{term} 让今天更可爱', '一条可爱的 {term} 更新', '闪光、爱心和 {term} 💖', '{term} 值得更多心心'],
    fandom: ['把爱心都给 {term} 💜', '继续为 {term} 应援', '{term} support post', '为 {term} 比心 🫶', '没有跳过，只有 {term}'],
    dark: ['黑色爱心心情：{term} 🖤', '夜色里的 {term}', '柔软阴影，锋利心动', '{term} 暗黑模式', '低光，也要热烈喜欢'],
    aesthetic: ['{term} / 心动存档', '干净情绪，柔软爱心', '一小份 {term} 记录', '爱心细节：{term}', '{term}，安静发光']
  },
  es: {
    romantic: ['{term} con todo mi corazón ❤️', 'guardando este {term} para siempre', 'corazones rojos para {term}', '{term}, pero con amor', 'todavía elijo {term} 💌'],
    soft: ['corazón suave, {term} suave', 'pequeño momento de {term} 🤍', 'guardando {term} cerca', '{term} con luz más suave', 'una nota tranquila para {term}'],
    cute: ['corazones pequeños para {term} 🩷', '{term} hizo el día más cute', 'update cute de {term}', 'brillos, corazones y {term} 💖', '{term} merece más corazones'],
    fandom: ['todos los corazones para {term} 💜', 'apoyando {term} otra vez', 'post de apoyo para {term}', 'corazones con las manos para {term} 🫶', 'sin saltar, solo {term}'],
    dark: ['mood de corazón negro: {term} 🖤', '{term} después de oscurecer', 'sombras suaves, corazones fuertes', 'modo noche para {term}', 'poca luz, mucho corazón'],
    aesthetic: ['{term} / guardado con corazón', 'mood limpio, corazón suave', 'pequeño archivo de {term}', 'detalle con corazón: {term}', '{term}, brillando en silencio']
  }
};

function getLanguageKey(dictionary: Dictionary): LanguageKey {
  if (dictionary.common.nav.home === '首页') {
    return 'zh';
  }
  if (dictionary.common.nav.home === 'Inicio') {
    return 'es';
  }
  return 'en';
}

function normalizeTerm(value: string, fallback: string) {
  return value.trim().replace(/\s+/g, ' ') || fallback;
}

function renderTemplates(templates: string[], term: string) {
  return templates.map((template) => template.replaceAll('{term}', term));
}

export function HeartExpressionTools({ dictionary }: HeartExpressionToolsProps) {
  const config = dictionary.pages.generator;
  const language = getLanguageKey(dictionary);
  const [style, setStyle] = useState<GeneratorStyle>('soft');
  const [bioTerm, setBioTerm] = useState('');
  const [captionTerm, setCaptionTerm] = useState('');

  const bioIdeas = useMemo(() => {
    const term = normalizeTerm(bioTerm, defaultTerms[language].bio);
    return renderTemplates(bioTemplates[language][style], term);
  }, [bioTerm, language, style]);

  const captionIdeas = useMemo(() => {
    const term = normalizeTerm(captionTerm, defaultTerms[language].caption);
    return renderTemplates(captionTemplates[language][style], term);
  }, [captionTerm, language, style]);

  return (
    <section className="expression-tools section-frame" aria-labelledby="heart-expression-tools">
      <div className="section-intro">
        <span className="section-kicker">{config.toolsKicker}</span>
        <h2 className="section-heading" id="heart-expression-tools">
          {config.bio.title} / {config.caption.title}
        </h2>
        <p className="section-copy">
          {config.bio.description} {config.caption.description}
        </p>
      </div>

      <fieldset className="expression-tools__styles">
        <legend>
          {config.bio.styleLabel} / {config.caption.styleLabel}
        </legend>
        <div className="expression-tools__style-grid">
          {styleOrder.map((option) => (
            <label key={option} className="expression-tools__style">
              <input
                type="radio"
                name="generator-style"
                value={option}
                checked={style === option}
                onChange={() => setStyle(option)}
              />
              <span>{config.styles[option]}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="expression-tools__grid">
        <article className="expression-tool-card">
          <div className="expression-tool-card__header">
            <h3>{config.bio.title}</h3>
            <p>{config.bio.description}</p>
          </div>
          <label className="expression-tools__input-label" htmlFor="heart-bio-generator-input">
            {config.bio.inputLabel}
          </label>
          <input
            id="heart-bio-generator-input"
            className="expression-tools__input"
            value={bioTerm}
            onChange={(event) => setBioTerm(event.target.value)}
            placeholder={config.bio.inputPlaceholder}
          />
          <div className="expression-tools__outputs" aria-live="polite">
            <h4>{config.bio.outputHeading}</h4>
            <ol>
              {bioIdeas.map((idea) => (
                <li key={idea}>
                  <span>{idea}</span>
                  <CopyButton
                    value={idea}
                    label={dictionary.common.copy}
                    copiedLabel={dictionary.common.copied}
                    size="small"
                    hideValue
                    staticLabel
                  />
                </li>
              ))}
            </ol>
          </div>
          <p className="expression-tools__helper">{config.bio.helperText}</p>
        </article>

        <article className="expression-tool-card">
          <div className="expression-tool-card__header">
            <h3>{config.caption.title}</h3>
            <p>{config.caption.description}</p>
          </div>
          <label className="expression-tools__input-label" htmlFor="heart-caption-generator-input">
            {config.caption.inputLabel}
          </label>
          <input
            id="heart-caption-generator-input"
            className="expression-tools__input"
            value={captionTerm}
            onChange={(event) => setCaptionTerm(event.target.value)}
            placeholder={config.caption.inputPlaceholder}
          />
          <div className="expression-tools__outputs" aria-live="polite">
            <h4>{config.caption.outputHeading}</h4>
            <ol>
              {captionIdeas.map((idea) => (
                <li key={idea}>
                  <span>{idea}</span>
                  <CopyButton
                    value={idea}
                    label={dictionary.common.copy}
                    copiedLabel={dictionary.common.copied}
                    size="small"
                    hideValue
                    staticLabel
                  />
                </li>
              ))}
            </ol>
          </div>
          <p className="expression-tools__helper">{config.caption.helperText}</p>
        </article>
      </div>
    </section>
  );
}
