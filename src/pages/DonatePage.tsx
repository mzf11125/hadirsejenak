import SectionHead from "../components/SectionHead.tsx";
import Button from "../components/Button.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";

export default function DonatePage() {
  usePageMeta("Donasi, Hadir Sejenak", site.donation.intro);

  return (
    <section className="site-section">
      <div className="wrap" style={{ maxWidth: 720 }}>
        <SectionHead num="13" title={site.donation.heading} note={site.donation.note} />

        <p style={{ maxWidth: "56ch", fontSize: 17 }}>{site.donation.intro}</p>

        <span className="label" style={{ display: "block", margin: "var(--s6) 0 var(--s4)" }}>
          How to Donate
        </span>
        <div className="grid g2">
          {site.donation.steps.map((s) => (
            <div className="card" key={s.step}>
              <span className="mono" style={{ color: "var(--sore-tekan)" }}>
                {s.step}
              </span>
              <h3 style={{ fontSize: 19, marginTop: "var(--s2)", marginBottom: "var(--s2)" }}>
                {s.title}
              </h3>
              <p className="bodysm" style={{ margin: 0, color: "var(--tinta-2)" }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div
          className="card"
          style={{ marginTop: "var(--s6)", background: "var(--kapur-2)", borderColor: "var(--garis)" }}
        >
          <span className="label">Important</span>
          <p className="bodysm" style={{ marginTop: 8, marginBottom: 0, color: "var(--tinta)" }}>
            {site.donation.important}
          </p>
        </div>

        <div className="btn-row" style={{ marginTop: "var(--s6)" }}>
          <Button href={site.wa.support} kind="primary" target="_blank" rel="noreferrer">
            Tanya lewat WhatsApp
          </Button>
          <Button to="/kontak" kind="quiet">
            Hubungi kami
          </Button>
        </div>
      </div>
    </section>
  );
}
