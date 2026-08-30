import Button from "../components/Button.tsx";
import { site } from "../data/site.ts";

export default function CtaBand() {
  return (
    <section className="site-section" style={{ background: "var(--papan)", color: "var(--kapur)" }}>
      <div className="wrap">
        <span className="label" style={{ color: "var(--sore)", marginBottom: "var(--s4)" }}>
          Be Part of Hadir Sejenak
        </span>
        <h2
          style={{
            fontSize: "clamp(26px, 4vw, 40px)",
            color: "var(--kapur)",
            maxWidth: "20ch",
            letterSpacing: "-0.02em",
          }}
        >
          Sejenak hadir, selamanya berarti.
        </h2>
        <div className="btn-row" style={{ marginTop: "var(--s6)" }}>
          <Button href={site.wa.volunteer} kind="primary" target="_blank" rel="noreferrer">
            Jadi volunteer
          </Button>
          <Button href={site.wa.collaborate} kind="secondary" onDark target="_blank" rel="noreferrer">
            Kolaborasi
          </Button>
          <Button to="/donasi" kind="quiet" style={{ color: "var(--kapur)" }}>
            Donasi
          </Button>
        </div>
      </div>
    </section>
  );
}
