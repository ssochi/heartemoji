import type { Metadata } from 'next';
import Link from 'next/link';
import { CopyBundles } from '@/components/CopyBundles';
import { getDictionary } from '@/data/dictionaries';
import { COLOR_GUIDE } from '@/data/keywordContent';
import { buildLanguageAlternates, getLocaleFromParam, locales } from '@/lib/i18n';

const siteUrl = 'https://heartemojis.org';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = getLocaleFromParam(params.locale);
  const dictionary = getDictionary(locale);
  const canonical = `/${locale}/copy-paste`;

  return {
    title: dictionary.pages.copy.title,
    description: dictionary.pages.copy.description,
    alternates: {
      canonical,
      languages: buildLanguageAlternates('/copy-paste')
    },
    openGraph: {
      title: dictionary.pages.copy.title,
      description: dictionary.pages.copy.description,
      url: `${siteUrl}${canonical}`,
      type: 'article'
    }
  };
}

type CopyPageProps = {
  params: {
    locale: string;
  };
};

export default function CopyPage({ params }: CopyPageProps) {
  const locale = getLocaleFromParam(params.locale);
  const dictionary = getDictionary(locale);

  return (
    <div className="page-layout">
      <header className="page-hero">
        <h1>{dictionary.pages.copy.title}</h1>
        <p>{dictionary.pages.copy.description}</p>
        <Link className="cta-button" href={`/${locale}/text-art`}>
          {dictionary.pages.textArt.title}
        </Link>
      </header>

      <section aria-labelledby="bundles-intro">
        <h2 className="section-heading" id="bundles-intro">
          {dictionary.pages.copy.bundlesIntro}
        </h2>
        <CopyBundles dictionary={dictionary} locale={locale} className="bundle-grid bundle-grid--spacious" />
      </section>

      <section aria-labelledby="color-guide-ref" id="color-guide-ref">
        <h2 className="section-heading" id="color-guide-ref">
          {dictionary.home.colorHeading}
        </h2>
        <p className="card-description">{dictionary.home.colorDescription}</p>
        <ul className="inline-color-list" aria-label="Color heart emojis quick view">
          {COLOR_GUIDE.map((item) => (
            <li key={item.slug}>
              <Link href={`/${locale}/emoji/${item.slugs[0]}`}>
                <span aria-hidden="true">{item.emoji}</span> {item.title[locale]}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {locale === 'es' ? (
        <section className="section-frame section-frame--soft" aria-labelledby="popular-searches-es">
          <div className="section-intro">
            <span className="section-kicker">SEO</span>
            <h2 className="section-heading" id="popular-searches-es">
              Búsquedas populares en español
            </h2>
            <p className="section-copy">
              Estas páginas responden consultas reales con intención clara de copiar y pegar, desde el término
              genérico hasta longitudes concretas.
            </p>
          </div>
          <div className="search-related-grid">
            <Link href="/es/copiar/corazones-para-copiar-y-pegar" className="search-related-card">
              <strong>Corazones para copiar y pegar</strong>
              <span>El hub principal para estilos, símbolos, longitudes y rutas rápidas.</span>
            </Link>
            <Link href="/es/copiar/100-corazones-para-copiar-y-pegar" className="search-related-card">
              <strong>100 corazones para copiar y pegar</strong>
              <span>Una versión corta, ligera y práctica para chats, estados y comentarios.</span>
            </Link>
            <Link href="/es/copiar/500-corazones-para-copiar-y-pegar" className="search-related-card">
              <strong>500 corazones para copiar y pegar</strong>
              <span>Una cadena intermedia que ya encaja mejor en estados y captions largos.</span>
            </Link>
            <Link href="/es/copiar/1000-corazones-para-copiar-y-pegar" className="search-related-card">
              <strong>1000 corazones para copiar y pegar</strong>
              <span>Bloques largos listos para mensajes, publicaciones y comentarios.</span>
            </Link>
            <Link href="/es/copiar/corazones-para-whatsapp" className="search-related-card">
              <strong>Corazones para WhatsApp</strong>
              <span>Selecciones por amor, amistad, estados, grupos y estilos minimalistas.</span>
            </Link>
          </div>
        </section>
      ) : null}

      <section className="cta-panel" aria-label="Related tools">
        <div className="cta-card">
          <h3>{dictionary.pages.textArt.title}</h3>
          <p>{dictionary.pages.textArt.description}</p>
          <Link className="cta-button" href={`/${locale}/text-art`}>
            {dictionary.common.nav.textArt}
          </Link>
        </div>
        <div className="cta-card">
          <h3>{dictionary.pages.generator.title}</h3>
          <p>{dictionary.pages.generator.description}</p>
          <Link className="cta-button" href={`/${locale}/generator/200`}>
            {dictionary.common.nav.generator}
          </Link>
        </div>
      </section>
    </div>
  );
}
