import { CHILD, IMG } from "../data/siteData";
import { Check, Img, Pill, Reveal } from "./common";

export default function ChildHealthSection() {
  return (
        <section className="section">
          <div className="split split-rev">
            <Reveal delay={120}>
              <Pill>Child health</Pill>
              <h2>Complete care for children from birth to 18 years</h2>
              <p className="sec-note mt-14">
                Expert paediatric care for newborns, infants, children and
                adolescents in a safe, child-friendly environment.
              </p>
              <ul className="tick-list">
                {CHILD.map((m) => (
                  <li key={m}>
                    <Check />
                    {m}
                  </li>
                ))}
              </ul>
              <a className="btn mt-24" href="#booking">
                Book a Paediatric Consultation <span className="arr">↗</span>
              </a>
            </Reveal>
            <Reveal className="split-media">
              <Img src={IMG.expertSpecialists2} alt="Paediatric care at Rio" grad={1} className="split-img" />
              <span className="chip chip-float">
                <i className="dot" /> Vaccination from birth to adolescence
              </span>
            </Reveal>
          </div>
        </section>
  );
}
