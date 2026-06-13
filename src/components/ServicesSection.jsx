import { SERVICES } from "../data/siteData";
import { Img, Pill, Reveal } from "./common";

export default function ServicesSection() {
  return (
        <section className="section" id="services">
          <div className="sec-head">
            <Reveal>
              <Pill>Critical care</Pill>
              <h2>Emergency &amp; critical care services</h2>
            </Reveal>
          </div>
          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.t} delay={(i % 2) * 100}>
                <article className="svc">
                  <Img src={s.img} alt={s.t} grad={s.grad} className="svc-img" />
                  <div className="svc-body">
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
  );
}
