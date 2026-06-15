import { IMG } from "../data/siteData";
import { Img, Pill, Reveal } from "./common";

export default function TeamSection() {
  return (
        <section className="section">
          <div className="team-banner">
            <Reveal>
              <Pill>Our team</Pill>
              <h2>Specialist-led emergency care</h2>
              <p className="sec-note mt-14">
                Rio brings together experienced paediatricians, neonatologists,
                paediatric intensivists, gynaecologists, fetal medicine
                specialists, emergency doctors and super-speciality consultants
                to provide coordinated care for women and children.
              </p>
              <a className="btn mt-24" href="#booking">
                Speak to Our Care Team <span className="arr">↗</span>
              </a>
            </Reveal>
            <Reveal delay={120} className="team-media">
              <Img src={IMG.emergency2} alt="Rio specialist team" grad={0} className="team-img" />
              <div className="chip chip-float chip-team">
                <strong>100+ SPECIALISTS</strong>
                <span>Coordinated care for mother &amp; child</span>
              </div>
            </Reveal>
          </div>
        </section>
  );
}
