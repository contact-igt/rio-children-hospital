import { FACILITIES } from "../data/siteData";
import { Check, Pill, Reveal } from "./common";

export default function FacilitiesSection() {
  return (
        <section className="section section-navy" id="facilities">
          <div className="sec-head">
            <Reveal>
              <Pill>Facilities</Pill>
              <h2>Facilities that support faster care</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="sec-note">
                Everything an emergency needs —{" "}
                <strong>under one roof, around the clock.</strong>
              </p>
            </Reveal>
          </div>
          <div className="fac-grid">
            {FACILITIES.map((f, i) => (
              <Reveal key={f} delay={(i % 4) * 70}>
                <span className="fac">
                  <Check />
                  {f}
                </span>
              </Reveal>
            ))}
          </div>
        </section>
  );
}
