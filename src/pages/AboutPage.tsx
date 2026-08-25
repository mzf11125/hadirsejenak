import SectionHead from "../components/SectionHead.tsx";
import Button from "../components/Button.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";

export default function AboutPage() {
  usePageMeta(`${site.about.heading}, ${site.org.name}`, site.org.mission);

  return (
    <section className="site-section">
      <div className="wrap">
        <SectionHead num="01" title={site.about.heading} />

        <div className="grid g2" style={{ alignItems: "start" }}>
          <div>
            {site.about.story.map((p) => (
              <p key={p.slice(0, 32)} style={{ maxWidth: "56ch", fontSize: 17 }}>{p}</p>
            ))}
            <p style={{ maxWidth: "56ch", color: "var(--tinta-2)" }}>
              {site.about.safeguarding}
            </p>
          </div>

          <div style={{ display: "grid", gap: "var(--s5)" }}>
            <div className="card">
              <span className="label">Pengurus</span>
              <ul style={{ margin: "var(--s3) 0 0", paddingLeft: 0, listStyle: "none" }}>
                {site.about.team.map((m) => (
                  <li key={m.firstName + m.role} style={{ padding: "var(--s2) 0" }}>
                    <b>{m.firstName}</b> <span className="bodysm">{m.role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <span className="label">Mitra panti</span>
              <ul style={{ margin: "var(--s3) 0 0", paddingLeft: 18 }}>
                {site.about.partners.map((p) => (
                  <li key={p} className="bodysm" style={{ color: "var(--tinta-2)" }}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <span className="label">Identitas</span>
              <p className="bodysm" style={{ marginTop: 8, marginBottom: 0 }}>
                <b>{site.org.legal.entity}</b>, {site.org.legal.deed}
                <br />
                {site.org.legal.address}
              </p>
              <p className="bodysm" style={{ marginTop: "var(--s3)", color: "var(--tinta-2)" }}>
                {site.org.legal.permitNote}
              </p>
            </div>
          </div>
        </div>

        <div className="btn-row" style={{ marginTop: "var(--s6)" }}>
          <Button to="/perlindungan-anak" kind="secondary">
            Kebijakan perlindungan anak
          </Button>
          <Button to="/kontak" kind="quiet">
            Hubungi kami
          </Button>
        </div>
      </div>
    </section>
  );
}