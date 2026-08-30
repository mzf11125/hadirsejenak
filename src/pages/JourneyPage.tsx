import SectionHead from "../components/SectionHead.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";
import type { JourneyMonth } from "../data/site.ts";

function ImpactTable({ rows }: { rows: { category: string; total: string }[] }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "var(--s3)" }}>
      <tbody>
        {rows.map((r, i) => (
          <tr key={r.category} style={i > 0 ? { borderTop: "1px solid var(--garis)" } : undefined}>
            <td className="bodysm" style={{ padding: "8px 0", color: "var(--tinta-2)" }}>
              {r.category}
            </td>
            <td style={{ textAlign: "right", fontWeight: 700 }}>{r.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function MonthCard({ month }: { month: JourneyMonth }) {
  return (
    <article className="card hoverable">
      <span className="mono" style={{ color: "var(--sore-tekan)" }}>
        {month.month}
      </span>
      <h3 style={{ fontSize: 22, marginTop: "var(--s2)", marginBottom: "var(--s3)" }}>
        {month.title}
      </h3>
      {month.story.map((p) => (
        <p key={p.slice(0, 24)} className="bodysm" style={{ color: "var(--tinta-2)" }}>
          {p}
        </p>
      ))}
      <span className="label" style={{ display: "block", marginTop: "var(--s4)" }}>
        Impact
      </span>
      <ImpactTable rows={month.impact} />
    </article>
  );
}

export default function JourneyPage() {
  usePageMeta(`Perjalanan, ${site.org.name}`, site.journey.intro);

  const j = site.journey;

  return (
    <>
      {/* 15 OUR JOURNEY */}
      <section className="site-section">
        <div className="wrap">
          <SectionHead num="15" title={j.heading} note={j.note} />
          <p style={{ maxWidth: "62ch", fontSize: 17 }}>{j.intro}</p>
          <div className="grid g2" style={{ marginTop: "var(--s6)" }}>
            {j.months.map((m) => (
              <MonthCard key={m.month} month={m} />
            ))}
          </div>
        </div>
      </section>

      {/* 16 TOTAL IMPACT */}
      <section className="site-section band">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <SectionHead num="16" title={j.totalImpact.heading} note={j.totalImpact.note} />
          <div className="card">
            <ImpactTable rows={j.totalImpact.rows} />
          </div>
        </div>
      </section>

      {/* 17 A NOTE FROM HADIR SEJENAK */}
      <section
        className="site-section"
        style={{ background: "var(--papan)", color: "var(--kapur)" }}
      >
        <div className="wrap" style={{ maxWidth: 760 }}>
          <SectionHead num="17" title={j.noteBlock.heading} />
          {j.noteBlock.body.map((p, i) =>
            i === j.noteBlock.body.length - 1 ? (
              <p
                key={p.slice(0, 24)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(22px, 3.4vw, 32px)",
                  color: "var(--sore)",
                  lineHeight: 1.3,
                }}
              >
                {p}
              </p>
            ) : (
              <p
                key={p.slice(0, 24)}
                style={{ maxWidth: "60ch", fontSize: 17, color: "var(--papan-ink)" }}
              >
                {p}
              </p>
            )
          )}
        </div>
      </section>

      {/* 18 CONTINUING THE JOURNEY */}
      <section className="site-section">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <SectionHead num="18" title={j.continuing.heading} />
          {j.continuing.body.map((p) => (
            <p key={p.slice(0, 24)} style={{ maxWidth: "60ch", fontSize: 17 }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* 19 OUR FUTURE */}
      <section className="site-section band">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <SectionHead num="19" title={j.future.heading} note={j.future.note} />
          {j.future.body.map((p) => (
            <p key={p.slice(0, 24)} style={{ maxWidth: "60ch", fontSize: 17 }}>
              {p}
            </p>
          ))}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(24px, 3.6vw, 36px)",
              lineHeight: 1.3,
              margin: "var(--s6) 0 var(--s3)",
            }}
          >
            {j.future.closing}
          </p>
          <p style={{ maxWidth: "56ch", color: "var(--tinta-2)" }}>{j.future.closingNote}</p>
        </div>
      </section>
    </>
  );
}
