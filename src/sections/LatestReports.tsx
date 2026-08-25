import SectionHead from "../components/SectionHead.tsx";
import ReportCard from "../components/ReportCard.tsx";
import Button from "../components/Button.tsx";
import { site } from "../data/site.ts";

export default function LatestReports() {
  return (
    <section className="site-section band" aria-labelledby="laporan-terakhir">
      <div className="wrap">
        <SectionHead
          num="04"
          title="Laporan terakhir"
          note="Setiap kunjungan ditutup dengan laporan terbuka. Terbit tiga hari kerja setelah acara."
        />
        <div className="grid g2">
          {site.reports.map((r) => (
            <ReportCard key={r.slug} report={r} />
          ))}
        </div>
        <div className="btn-row" style={{ marginTop: "var(--s5)" }}>
          <Button as="a" href="/laporan" kind="secondary">
            Lihat semua laporan
          </Button>
        </div>
      </div>
    </section>
  );
}