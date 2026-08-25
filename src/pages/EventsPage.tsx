import SectionHead from "../components/SectionHead.tsx";
import Button from "../components/Button.tsx";
import { Badge } from "../components/primitives.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site, nextEvent, pastEvents } from "../data/site.ts";

const statusLabel: Record<string, string> = {
  open: "Pendaftaran dibuka",
  full: "Kuota penuh",
  done: "Selesai",
};

export default function EventsPage() {
  usePageMeta("Events, Hadir Sejenak", "Jadwal kunjungan relawan Hadir Sejenak di Tigaraksa.");

  const upcoming = nextEvent();
  const past = pastEvents();

  return (
    <section className="site-section">
      <div className="wrap">
        <SectionHead
          num="01"
          title="Events"
          note="Kunjungan berikutnya di atas, lalu kunjungan yang sudah selesai."
        />

        {upcoming ? (
          <div className="card hoverable" style={{ marginBottom: "var(--s6)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--s4)", flexWrap: "wrap" }}>
              <div>
                <span className="label">Kunjungan berikutnya</span>
                <h3 style={{ fontSize: 26, marginTop: "var(--s2)" }}>{upcoming.title}</h3>
                <div className="mono" style={{ marginTop: "var(--s3)", color: "var(--tinta-2)" }}>
                  {upcoming.dateMono}, {upcoming.startTime}, {upcoming.district}
                </div>
              </div>
              <div className="btn-row">
                <Badge variant="quiet">Kuota {upcoming.quota} orang</Badge>
                <Badge variant={upcoming.status === "full" ? "quiet" : "yes"}>
                  {statusLabel[upcoming.status]}
                </Badge>
              </div>
            </div>
            <p className="bodysm" style={{ marginTop: "var(--s4)", color: "var(--tinta-2)", maxWidth: "60ch" }}>
              {upcoming.description}
            </p>
            <div className="btn-row" style={{ marginTop: "var(--s4)" }}>
              <Button to={`/events/${upcoming.slug}`} kind="primary">
                Lihat detail
              </Button>
              <Button to={`/events/${upcoming.slug}/daftar`} kind="quiet">
                Daftar jadi relawan
              </Button>
            </div>
          </div>
        ) : (
          <div className="empty" style={{ marginBottom: "var(--s6)" }}>
            <div className="empty-title" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
              Belum ada kegiatan bulan ini
            </div>
            <p>Kegiatan berikutnya diumumkan setiap awal bulan di Instagram.</p>
            <Button href={site.org.instagramUrl} kind="secondary" target="_blank" rel="noreferrer">
              Ikuti {site.org.instagram}
            </Button>
          </div>
        )}

        <h2 style={{ fontSize: 24, marginBottom: "var(--s5)" }}>Kunjungan yang sudah selesai</h2>
        {past.length > 0 ? (
          <div className="grid g2">
            {past.map((ev) => (
              <article className="card hoverable" key={ev.id}>
                <div className="report-meta">
                  <span>{ev.dateMono}</span>
                  <span>{ev.district}</span>
                </div>
                <h3 style={{ fontSize: 20, marginTop: "var(--s3)" }}>{ev.title}</h3>
                <div className="btn-row" style={{ marginTop: "var(--s4)" }}>
                  <Badge variant="quiet">{statusLabel[ev.status]}</Badge>
                  <Button to={`/events/${ev.slug}`} kind="quiet">
                    Lihat detail
                  </Button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="bodysm">Belum ada kunjungan yang selesai.</p>
        )}
      </div>
    </section>
  );
}