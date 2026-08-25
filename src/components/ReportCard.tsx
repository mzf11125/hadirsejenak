import Button from "./Button.tsx";
import type { Report } from "../data/site.ts";

export default function ReportCard({ report }: { report: Report }) {
  return (
    <article className="card report-card hoverable">
      <div>
        <div className="report-meta">
          <span>{report.dateMono}</span>
          <span>{report.place}</span>
        </div>
        <h3 style={{ marginTop: "var(--s3)" }}>{report.title}</h3>
      </div>
      <p className="bodysm" style={{ color: "var(--tinta-2)", margin: 0 }}>
        {report.excerpt}
      </p>
      <div className="report-stats" aria-label="Ringkasan kehadiran">
        <span className="stat" style={{ borderLeftWidth: 2 }}>
          <b style={{ fontSize: 28 }}>{report.stats.volunteers}</b>
          <span>relawan</span>
        </span>
        <span className="stat" style={{ borderLeftWidth: 2 }}>
          <b style={{ fontSize: 28 }}>{report.stats.hours}</b>
          <span>jam</span>
        </span>
        <span className="stat" style={{ borderLeftWidth: 2 }}>
          <b style={{ fontSize: 28 }}>{report.stats.children}</b>
          <span>anak</span>
        </span>
      </div>
      <div className="report-cta">
        <Button to={`/laporan/${report.slug}`} kind="quiet">
          Baca laporan
        </Button>
      </div>
    </article>
  );
}