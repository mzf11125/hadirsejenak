import SectionHead from "../components/SectionHead.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";

export default function PrivacyPolicyPage() {
  usePageMeta("Kebijakan privasi, Hadir Sejenak");

  return (
    <section className="site-section">
      <div className="wrap" style={{ maxWidth: 720 }}>
        <SectionHead num="01" title={site.privacy.heading} note={site.privacy.updated} />
        <div style={{ display: "grid", gap: "var(--s5)" }}>
          {site.privacy.sections.map((s) => (
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