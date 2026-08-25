import { Link, Navigate, useParams } from "react-router-dom";
import SectionHead from "../components/SectionHead.tsx";
import JamKunjungan from "../components/JamKunjungan.tsx";
import { Stat } from "../components/primitives.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { reportBySlug } from "../data/site.ts";
import { site } from "../data/site.ts";

export default function ReportDetailPage() {
  const { slug } = useParams();
  const report = slug ? reportBySlug(slug) : undefined;

  usePageMeta(report ? `${report.title}, Laporan Hadir Sejenak` : "Laporan, Hadir Sejenak");

  if (!report) return <Navigate to="/laporan" replace />;

  const ev = site.events.find((e) => e.id === report.eventId);

  return (
    <section className="site-section">
      <div className="wrap">
        <Link to="/laporan" className="mono" style={{ color: "var(--seragam)" }}>
          ← Semua laporan
        </Link>

        <SectionHead
          num="01"
          title={report.title}
          note={`${report.dateMono}, ${report.place}`}
        />

        <div className="grid g3" style={{ marginBottom: "var(--s6)" }}>
          <Stat value={report.stats.volunteers} label="relawan hadir" />
          <Stat value={report.stats.hours} label="jam kebersamaan" />
          <Stat value={report.stats.children} label="anak ikut serta" />
        </div>

        <div className="grid g2" style={{ alignItems: "start" }}>
          <div>
            <span className="label">Catatan kegiatan</span>
            <p style={{ marginTop: "var(--s3)" }}>{report.narrative}</p>
          </div>

          {ev && (
            <JamKunjungan
              title={`Jam kunjungan, ${ev.date}`}
              entries={ev.timeline}
              detailTo={`/events/${ev.slug}`}
            />
          )}
        </div>

        <div style={{ marginTop: "var(--s6)" }} className="card">
          <span className="label">Dana diterima dan digunakan</span>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "var(--s4)" }}>
            <tbody>
              <tr>
                <td className="bodysm" style={{ padding: "6px 0" }}>Total diterima</td>
                <td style={{ textAlign: "right", fontWeight: 700 }}>{report.funds.received}</td>
              </tr>
              {report.funds.items.map((it) => (
                <tr key={it.label}>
                  <td className="bodysm" style={{ padding: "6px 0", color: "var(--tinta-2)" }}>{it.label}</td>
                  <td style={{ textAlign: "right" }}>{it.amount}</td>
                </tr>
              ))}
              <tr style={{ borderTop: "1px solid var(--garis)" }}>
                <td className="bodysm" style={{ padding: "6px 0", fontWeight: 700, color: "var(--tinta)" }}>Sisa</td>
                <td style={{ textAlign: "right", fontWeight: 700 }}>{report.funds.remainder}</td>
              </tr>
            </tbody>
          </table>
          <p className="bodysm" style={{ color: "var(--tinta-2)", marginTop: "var(--s3)" }}>
            {report.funds.remainderLocation}
          </p>
        </div>
      </div>
    </section>
  );
}