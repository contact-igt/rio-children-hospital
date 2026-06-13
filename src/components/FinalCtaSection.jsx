import { PhoneIc, Reveal } from "./common";

export default function FinalCtaSection() {
  return (
        <section className="final">
          <Reveal className="final-in">
            <h2>Need immediate care for your baby, child, or mother?</h2>
            <p>
              Rio Children's Hospital is ready with 24/7 emergency care,
              specialist doctors, advanced NICU and PICU support, maternity
              care, and complete women and child healthcare services.
            </p>
            <div className="cta-pair center">
              <a className="btn btn-pink btn-lg" href="tel:+917708318222">
                <span className="btn-ic"><PhoneIc /></span>
                Call Emergency Care Now
              </a>
              <a className="btn btn-ghost btn-lg" href="#book">
                Book an Appointment
              </a>
            </div>
          </Reveal>
        </section>
  );
}
