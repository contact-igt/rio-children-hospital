import { HIGHLIGHTS, IMG, LINKS } from "../data/siteData";
import { Check, Img, PhoneIc, Pill, Reveal } from "./common";
import HeroForm from "./HeroForm";

export default function HeroSection() {
  return (
        <section className="hero">
          <div className="hero-photo">
            <Img src={IMG.hero} alt="Mother holding her newborn at Rio Children's Hospital" grad={0} className="hero-img" />
            <div className="hero-shade" />

            <span className="chip chip-tl">
              <i className="dot" /> 24/7 Service Available
            </span>

            <div className="hero-inner">
              <div className="hero-copy">
                <Pill>Rio Children's Hospital</Pill>
                <h1>
                  24/7 Emergency Care for Newborns, Children &amp; Women
                </h1>
                <p className="lede">
                  From neonatal emergencies and paediatric critical care to
                  pregnancy-related concerns and women's health support, Rio
                  provides immediate, specialist-led care when every minute
                  matters.
                </p>
                <div className="hero-cta">
                  <a className="btn btn-pink btn-lg" href={LINKS.phone}>
                    <span className="btn-ic"><PhoneIc /></span>
                    Call Emergency Care Now
                  </a>
                  <a className="btn btn-ghost btn-lg" href="#booking">
                    Book an Appointment
                  </a>
                </div>

                {/* photo-stack trust chip */}
                <div className="hero-trust">
                  <span className="tstack">
                    <Img src={IMG.g4} grad={1} className="tava" />
                    <Img src={IMG.g3} grad={0} className="tava" />
                    <Img src={IMG.g1} grad={2} className="tava" />
                  </span>
                  <span className="ttext">
                    Trusted by <strong>1 Lac+ families</strong>{" "} across
                    Tamil&nbsp;Nadu for women &amp; child healthcare
                  </span>
                </div>
              </div>

              {/* embedded quick lead form */}
              <HeroForm />
            </div>

            <div className="chip chip-bl">
              <strong>4 BRANCHES</strong>
              <span>Madurai • Southwing • Dindigul • Thanjavur</span>
            </div>
          </div>

          {/* quick highlights */}
          <div className="hl-row">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h} delay={i * 70} className="hl">
                <Check />
                <span>{h}</span>
              </Reveal>
            ))}
          </div>

          {/* image strip */}
          <div className="strip">
            {[
              { img: IMG.advancedNICU, cap: "Advanced NICU", grad: 0 },
              { img: IMG.emergency, cap: "24/7 Emergency", grad: 1 },
              { img: IMG.maternityCare, cap: "Maternity care", grad: 2 },
              { img: IMG.newbornCare, cap: "Newborn care", grad: 0 },
              { img: IMG.expertSpecialists, cap: "Expert specialists", grad: 1 },
            ].map((s, i) => (
              <Reveal key={s.cap} delay={i * 80} className="strip-card">
                <Img src={s.img} alt={s.cap} grad={s.grad} className="strip-img" />
                <span className="strip-cap">{s.cap}</span>
              </Reveal>
            ))}
          </div>
        </section>
  );
}
