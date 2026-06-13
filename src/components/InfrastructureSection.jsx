import { INFRA } from "../data/siteData";
import { Img, Pill, Reveal } from "./common";

export default function InfrastructureSection() {
  return (
        <section className="section" id="infrastructure">
          <div className="sec-head">
            <Reveal>
              <Pill>Infrastructure</Pill>
              <h2>World-class infrastructure, built for emergencies</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="sec-note">
                A look inside Rio — <strong>advanced NICU &amp; PICU wards,
                modular operation theatres, 24-hour lab and imaging</strong>,
                all designed around mother and child.
              </p>
            </Reveal>
          </div>
          <div className="infra-grid">
            {INFRA.map((f, i) => (
              <Reveal key={f.cap} delay={(i % 4) * 80} className={f.big ? "infra-big" : ""}>
                <figure className="infra">
                  <Img src={f.img} alt={f.cap} grad={f.grad} className="infra-img" />
                  <figcaption>{f.cap}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
  );
}
