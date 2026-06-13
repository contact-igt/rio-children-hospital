import Link from "next/link";
import Header from "../../components/Header";

export const metadata = {
  title: "Thank You - Rio Children's Hospital",
  description: "Thank you for contacting Rio Children's Hospital.",
};

const nextSteps = [
  "Our care coordinator will call you shortly.",
  "Keep the submitted mobile number reachable.",
  "For emergency cases, call Rio directly instead of waiting.",
];

const summaryItems = [
  { label: "Response", value: "Care team callback" },
  { label: "Support", value: "Emergency, NICU & PICU" },
  { label: "Branches", value: "Madurai, Southwing, Dindigul, Thanjavur" },
];

export default function ThankYouPage() {
  return (
    <div className="rio">
      <div className="estrip">
        <span className="estrip-dot" />
        <span>
          24/7 Emergency - NICU - PICU&nbsp;-&nbsp;
          <a href="tel:+917708318222">Call now: +91 77083 18222</a>
        </span>
      </div>
      <Header />

      <main className="thank-you-page">
        <section className="thank-you-shell">
          <div className="thank-you-card">
            <span className="thank-you-icon">✓</span>
            <p className="pill">Request received</p>
            <h1>Thank you. Your callback request is confirmed.</h1>
            <p>
              Our Rio care team has received your details and will contact you
              shortly to guide you with the right branch, specialist, or
              emergency care support.
            </p>
            <div className="cta-pair center">
              <a className="btn btn-pink btn-lg" href="tel:+917708318222">
                Call Emergency Care
              </a>
              <Link className="btn btn-lg" href="/#book">
                Submit Another Request
              </Link>
            </div>
          </div>

          <aside className="thank-you-panel">
            <div className="thank-you-alert">
              <strong>Need urgent help?</strong>
              <span>Do not wait for a callback. Call Rio now.</span>
              <a href="tel:+917708318222">+91 77083 18222</a>
            </div>

            <div className="thank-you-summary">
              {summaryItems.map((item) => (
                <article key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </article>
              ))}
            </div>

            <div className="thank-you-steps">
              <h2>What happens next?</h2>
              <ol>
                {nextSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="thank-you-actions">
              <a
                className="btn btn-sm"
                href="https://maps.google.com/?q=Rio+Children's+Hospital+Madurai"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
              <Link className="btn btn-sm btn-line" href="/">
                Back to Home
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
