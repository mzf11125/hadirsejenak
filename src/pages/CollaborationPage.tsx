import SectionHead from "../components/SectionHead.tsx";
import Button from "../components/Button.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";

export default function CollaborationPage() {
  usePageMeta(`Kolaborasi, ${site.org.name}`, site.collaboration.intro);

  return (
    <section className="site-section">
      <div className="wrap">
        <SectionHead
          num="14"
          title={site.collaboration.heading}
          note={site.collaboration.note}
        />
        <p style={{ maxWidth: "56ch", fontSize: 17 }}>{site.collaboration.intro}</p>

        <div className="grid g2" style={{ marginTop: "var(--s6)", alignItems: "start" }}>
          <div className="card">
            <span className="label">Dengan siapa kami terbuka untuk berkolaborasi</span>
            <ul style={{ margin: "var(--s4) 0 0", paddingLeft: 18 }} className="bodysm">
              {site.collaboration.partners.map((p) => (
                <li key={p} style={{ color: "var(--tinta)", padding: "4px 0" }}>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <span className="label">Bentuk kolaborasi</span>
            <ul style={{ margin: "var(--s4) 0 0", paddingLeft: 18 }} className="bodysm">
              {site.collaboration.forms.map((f) => (
                <li key={f} style={{ color: "var(--tinta)", padding: "4px 0" }}>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="btn-row" style={{ marginTop: "var(--s6)" }}>
          <Button href={site.collaboration.cta.href} kind="primary" target="_blank" rel="noreferrer">
            {site.collaboration.cta.label}
          </Button>
          <Button to="/kontak" kind="quiet">
            Hubungi kami
          </Button>
        </div>
      </div>
    </section>
  );
}
