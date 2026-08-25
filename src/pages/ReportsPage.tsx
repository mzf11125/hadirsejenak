import SectionHead from "../components/SectionHead.tsx";
import ReportCard from "../components/ReportCard.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";

export default function ReportsPage() {
  usePageMeta("Laporan, Hadir Sejenak", "Laporan kegiatan relawan Hadir Sejenak di Tigaraksa.");

  return (
    <section className="site-section">
      <div className="wrap">
        <SectionHead
          num="01"
          title="Laporan"
          note="Setiap kunjungan ditutup dengan laporan terbuka. Terbit tiga hari kerja setelah acara."
        />
        <div className="grid g2">
          {site.reports.map((r) => (
            <ReportCard key={r.slug} report={r} />
          ))}
        </div>
        <p className="bodysm" style={{ marginTop: "var(--s5)", color: "var(--tinta-2)" }}>
          Laporan bersifat permanen di URL stabil dan tidak dihapus, hanya dikoreksi dengan
          catatan koreksi yang terlihat.
        </p>
      </div>
    </section>
  );
}