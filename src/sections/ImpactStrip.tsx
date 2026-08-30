import { Stat } from "../components/primitives.tsx";
import Button from "../components/Button.tsx";
import { site } from "../data/site.ts";

export default function ImpactStrip() {
  return (
    <section className="site-section" aria-labelledby="dampak-sejauh-ini">
      <div className="wrap">
        <div className="label" style={{ marginBottom: "var(--s4)" }}>
          Dampak, Mei hingga Agustus 2026
        </div>
        <div className="grid g3">
          {site.impactTeaser.stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
        <div className="btn-row" style={{ marginTop: "var(--s5)" }}>
          <Button to={site.impactTeaser.cta.href} kind="secondary">
            {site.impactTeaser.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
