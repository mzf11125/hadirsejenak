import SectionHead from "../components/SectionHead.tsx";
import Button from "../components/Button.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";

export default function FaqPage() {
  usePageMeta("FAQ, Hadir Sejenak", "Pertanyaan yang sering diajukan tentang Hadir Sejenak.");

  return (
    <section className="site-section">
      <div className="wrap" style={{ maxWidth: 720 }}>
        <SectionHead num="22" title={site.faq.heading} note={site.faq.note} />
        <div style={{ display: "grid", gap: "var(--s4)" }}>
          {site.faq.items.map((item) => (
            <div className="card" key={item.q}>
              <b style={{ display: "block", fontSize: 16, marginBottom: "var(--s2)" }}>
                {item.q}
              </b>
              <p className="bodysm" style={{ margin: 0, color: "var(--tinta)" }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
        <div className="btn-row" style={{ marginTop: "var(--s6)" }}>
          <Button to="/kontak" kind="secondary">
            Masih ada pertanyaan? Hubungi kami
          </Button>
        </div>
      </div>
    </section>
  );
}
