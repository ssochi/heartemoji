'use client';

import { useState } from 'react';
import { FAQS } from '@/data/keywordContent';

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  return (
    <div className="faq-accordion">
      {FAQS.map((faq) => {
        const open = openId === faq.id;
        return (
          <section key={faq.id} className={`faq-item${open ? ' faq-item--open' : ''}`}>
            <button
              type="button"
              className="faq-item__toggle"
              onClick={() => setOpenId(open ? null : faq.id)}
              aria-expanded={open}
            >
              <span>{faq.question}</span>
              <span aria-hidden="true">{open ? '−' : '+'}</span>
            </button>
            {open ? (
              <div className="faq-item__content">
                <p>{faq.answer}</p>
                <div className="faq-item__keywords" aria-hidden="true">
                  {faq.keywords.map((keyword) => (
                    <span key={keyword}>#{keyword}</span>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
