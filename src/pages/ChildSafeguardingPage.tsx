import SectionHead from "../components/SectionHead.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";

export default function ChildSafeguardingPage() {
  usePageMeta("Perlindungan anak, Hadir Sejenak");

  return (
    <section className="site-section">
      <div className="wrap" style={{ maxWidth: 720 }}>
        <SectionHead
          num="01"
          title={site.safeguarding.heading}
          note="Ini adalah kebijakan, bukan selera. Berlaku untuk setiap foto dan teks yang tayang."
        />
        <div style={{ display: "grid", gap: "var(--s5)" }}>
          {site.safeguarding.sections.map((s) => (
            <div className="card" key={s.title}>
              <h3 style={{ fontSize: 18, marginBottom: "var(--s2)" }}>{s.title}</h3>
              <p className="bodysm" style={{ color: "var(--tinta)", margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}