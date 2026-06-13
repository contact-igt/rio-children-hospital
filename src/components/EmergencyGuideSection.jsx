import { EMERGENCY } from "../data/siteData";
import { Check, Img, PhoneIc, Pill, Reveal } from "./common";

export default function EmergencyGuideSection() {
  return (
        <section className="section" id="emergency">
          <div className="sec-head">
            <Reveal>
              <Pill>Emergency guide</Pill>
              <h2>When should you visit Rio immediately?</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="sec-note">
                Do not wait if your <strong>newborn, child, or mother</strong>{" "}
                needs urgent medical attention. Visit Rio Children's Hospital
                immediately for:
              </p>
            </Reveal>
          </div>

          <div className="em-grid">
            {EMERGENCY.map((g, i) => (
              <Reveal key={g.who} delay={i * 110}>
                <article className="em-card">
                  <Img src={g.img} alt={g.who} grad={g.grad} className="em-img" />
                  <div className="em-body">
                    <h3>{g.who}</h3>
                    <ul>
                      {g.items.map((it) => (
                        <li key={it}>
                          <Check />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} className="center mt-32">
            <a className="btn btn-pink btn-lg" href="tel:+917708318222">
              <span className="btn-ic"><PhoneIc /></span>
              Need urgent help? Call Rio Emergency Care Now
            </a>
          </Reveal>
        </section>
  );
}
