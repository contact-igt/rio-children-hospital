"use client";

import { useState } from "react";
import { FAQS } from "../data/siteData";
import { Pill, Reveal } from "./common";

export default function FaqSection() {
  const [faqOpen, setFaqOpen] = useState(0);

  return (
        <section className="section section-tint" id="faq">
          <div className="sec-head">
            <Reveal>
              <Pill>FAQ</Pill>
              <h2>Frequently asked questions</h2>
            </Reveal>
          </div>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <article className={`faq ${faqOpen === i ? "faq-open" : ""}`}>
                  <button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)}>
                    <span>{f.q}</span>
                    <i>{faqOpen === i ? "−" : "+"}</i>
                  </button>
                  {faqOpen === i && <p>{f.a}</p>}
                </article>
              </Reveal>
            ))}
          </div>
        </section>
  );
}
