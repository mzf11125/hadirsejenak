import SectionHead from "../components/SectionHead.tsx";
import Button from "../components/Button.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";

export default function JoinPage() {
  usePageMeta(`Bergabung, ${site.org.name}`, site.join.intro.join(" "));

  return (
    <section className="site-section" style={{ background: "var(--papan)", color: "var(--kapur)" }}>
      <div className="wrap" style={{ maxWidth: 760 }}>
        <SectionHead num="20" title={site.join.heading} note={site.join.note} />
        {site.join.intro.map((p) => (
          <p key={p.slice(0, 24)} style={{ maxWidth: "58ch", fontSize: 18, color: "var(--papan-ink)" }}>
            {p}
          </p>
        ))}
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(22px, 3.4vw, 32px)",
            lineHeight: 1.35,
            color: "var(--sore)",
            maxWidth: "24ch",
            marginTop: "var(--s6)",
          }}
        >
          {site.join.closing}
        </p>
        <div className="btn-row" style={{ marginTop: "var(--s6)" }}>
          {site.join.ctas.map((cta) =>
            cta.href.startsWith("http") || cta.href.startsWith("mailto") ? (
              <Button key={cta.label} href={cta.href} kind={cta.kind} target="_blank" rel="noreferrer">
                {cta.label}
              </Button>
            ) : (
              <Button key={cta.label} to={cta.href} kind={cta.kind}>
                {cta.label}
              </Button>
            )
          )}
        </div>
      </div>
    </section>
  );
}
