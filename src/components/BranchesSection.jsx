import { BRANCHES, LINKS } from "../data/siteData";
import { Img, PhoneIc, Pill, Reveal } from "./common";

export default function BranchesSection() {
  return (
        <section className="section section-tint" id="branches">
          <div className="sec-head">
            <Reveal>
              <Pill>Our branches</Pill>
              <h2>Visit the nearest Rio branch</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="sec-note">
                Rio Children's Hospital provides care across{" "}
                <strong>4 branches in Tamil Nadu</strong> — each with 24/7
                emergency, NICU and PICU support.
              </p>
            </Reveal>
          </div>
          <div className="br-grid">
            {BRANCHES.map((b, i) => (
              <Reveal key={b.short} delay={i * 90}>
                <article className="br-card">
                  <Img src={b.img} alt={`${b.name} hospital building`} grad={b.grad} className="br-img" />
                  <span className="br-247">
                    <i className="dot" /> 24/7
                  </span>
                  <div className="br-body">
                    <h3>{b.short}</h3>
                    <span className="loc-tag">Emergency • NICU • PICU</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120} className="center mt-32 cta-pair">
            <a className="btn btn-pink" href={LINKS.phone}>
              <span className="btn-ic"><PhoneIc /></span>
              Call Now for Emergency Guidance
            </a>
            <a className="btn" href="#book">
              Book Appointment at Nearest Branch
            </a>
          </Reveal>
        </section>
  );
}
