import { IMG, MATERNITY } from "../data/siteData";
import { Check, Img, Pill, Reveal } from "./common";

export default function MaternitySection() {
  return (
        <section className="section section-tint" id="maternity">
          <div className="split">
            <Reveal className="split-media">
              <Img src={IMG.maternity} alt="Maternity care at Rio" grad={2} className="split-img" />
              <span className="chip chip-float">
                <i className="dot" /> 5,000+ high-risk pregnancies supported
              </span>
            </Reveal>
            <Reveal delay={120}>
              <Pill>Women &amp; maternity care</Pill>
              <h2>Care for every stage of pregnancy &amp; motherhood</h2>
              <p className="sec-note mt-14">
                Rio supports mothers from early pregnancy to delivery and
                postnatal care with experienced gynaecologists, obstetric care,
                scans, emergency support and personalised guidance.
              </p>
              <ul className="tick-list">
                {MATERNITY.map((m) => (
                  <li key={m}>
                    <Check />
                    {m}
                  </li>
                ))}
              </ul>
              <a className="btn mt-24" href="#book">
                Book a Women's Health Consultation <span className="arr">↗</span>
              </a>
            </Reveal>
          </div>
        </section>
  );
}
