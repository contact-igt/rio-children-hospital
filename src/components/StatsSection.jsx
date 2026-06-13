"use client";

import CountUpModule from "react-countup";
import { STATS } from "../data/siteData";
import { Reveal } from "./common";

const CountUp = CountUpModule.default ?? CountUpModule;

export default function StatsSection() {
  return (
        <section className="stats-band">
          <div className="stats">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 70} className="stat">
                <strong>
                  <CountUp
                    end={s.n}
                    duration={2}
                    separator=","
                    suffix={s.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </strong>
                <span>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </section>
  );
}
