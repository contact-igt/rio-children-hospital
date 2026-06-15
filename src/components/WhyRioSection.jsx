"use client";

import { useState } from "react";
import { WHY } from "../data/siteData";
import { Pill, Reveal } from "./common";

export default function WhyRioSection() {
  const defaultActiveIndex = WHY.findIndex((w) => w.dark);
  const [activeIndex, setActiveIndex] = useState(
    defaultActiveIndex >= 0 ? defaultActiveIndex : null,
  );

  return (
        <section className="section section-tint">
          <div className="sec-head">
            <Reveal>
              <Pill>Why Rio</Pill>
              <h2>Why families choose Rio in emergencies</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="sec-note">
                Emergency care at Rio is supported by{" "}
                <strong>experienced doctors, advanced facilities</strong>, and a
                compassionate team trained to respond quickly during critical
                situations.
              </p>
            </Reveal>
          </div>
          <div className="why-grid">
            {WHY.map((w, i) => (
              <Reveal key={w.t} delay={(i % 3) * 90}>
                <article
                  className={`why ${w.dark ? "why-dark" : ""} ${
                    activeIndex === i ? "why-active" : ""
                  }`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveIndex(i)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveIndex(i);
                    }
                  }}
                >
                  <span className="why-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{w.t}</h3>
                  <p>{w.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
  );
}
