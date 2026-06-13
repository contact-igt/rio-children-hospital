import { BRANCHES } from "../data/siteData";
import { PhoneIc, Pill, PinIc, Reveal } from "./common";

export default function DirectionsSection() {
  return (
        <section className="section" id="directions">
          <div className="sec-head">
            <Reveal>
              <Pill>Find us</Pill>
              <h2>Locations &amp; directions</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="sec-note">
                Save the address of your nearest branch — and tap{" "}
                <strong>Get directions</strong> to open it in Google Maps.
              </p>
            </Reveal>
          </div>
          <div className="dir-grid">
            {BRANCHES.map((b, i) => (
              <Reveal key={b.short} delay={i * 90}>
                <article className="dir-card">
                  <div className="dir-head">
                    <span className="dir-pin"><PinIc /></span>
                    <h3>{b.name}</h3>
                  </div>
                  <p className="dir-addr">{b.address}</p>
                  <ul className="dir-meta">
                    <li><i>🕐</i> Emergency, NICU &amp; PICU — 24/7</li>
                    <li><i>📞</i> {b?.phoneNumber}</li>
                  </ul>
                  <div className="dir-cta">
                    <a className="btn btn-sm" href={b.maps} target="_blank" rel="noreferrer">
                      <span className="btn-ic"><PinIc /></span>
                      Get directions
                    </a>
                    <a className="btn btn-sm btn-line" href={b.phone}>
                      <span className="btn-ic"><PhoneIc /></span>
                      Call branch
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
  );
}
