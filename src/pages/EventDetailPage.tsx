import { Link, Navigate, useParams } from "react-router-dom";
import SectionHead from "../components/SectionHead.tsx";
import JamKunjungan from "../components/JamKunjungan.tsx";
import Button from "../components/Button.tsx";
import { Badge } from "../components/primitives.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { eventBySlug } from "../data/site.ts";

export default function EventDetailPage() {
  const { slug } = useParams();
  const ev = slug ? eventBySlug(slug) : undefined;

  usePageMeta(ev ? `${ev.title}, Hadir Sejenak` : "Events, Hadir Sejenak");

  if (!ev) return <Navigate to="/events" replace />;

  const isFull = ev.status === "full";
  const isDone = ev.status === "done";
  const remaining = ev.quota - ev.quotaTaken;

  return (
    <section className="site-section">
      <div className="wrap">
        <Link to="/events" className="mono" style={{ color: "var(--seragam)" }}>
          ← Semua events
        </Link>

        <SectionHead
          num="01"
          title={ev.title}
          note={ev.description}
        />

        <div className="grid g2" style={{ alignItems: "start" }}>
          <div>
            <div className="mono" style={{ color: "var(--tinta-2)" }}>
              {ev.dateMono}, {ev.startTime} sampai {ev.endTime}
              <br />
              {ev.location}, {ev.district}
            </div>
            <div className="btn-row" style={{ marginTop: "var(--s4)" }}>
              <Badge variant="quiet">Kuota {ev.quota} orang</Badge>
              {!isDone && (
                <Badge variant={isFull ? "quiet" : "yes"}>
                  {isFull ? "Kuota penuh" : `Sisa ${remaining} slot`}
                </Badge>
              )}
              {isDone && <Badge variant="quiet">Selesai</Badge>}
              <Badge variant="quiet">Gratis</Badge>
            </div>

            <div style={{ marginTop: "var(--s5)" }}>
              <span className="label">Lokasi</span>
              <p className="bodysm" style={{ marginTop: 8 }}>
                {ev.location}, {ev.district}
              </p>
              <Button href={ev.mapsUrl} kind="secondary" target="_blank" rel="noreferrer">
                Buka di peta
              </Button>
            </div>

            <div style={{ marginTop: "var(--s5)" }}>
              <span className="label">Yang akan kamu lakukan</span>
              <ul className="bodysm" style={{ marginTop: 8, paddingLeft: 18 }}>
                {ev.tasks.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: "var(--s5)" }}>
              <span className="label">Syarat</span>
              <ul className="bodysm" style={{ marginTop: 8, paddingLeft: 18 }}>
                {ev.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: "var(--s5)" }}>
              <span className="label">Manfaat</span>
              <ul className="bodysm" style={{ marginTop: 8, paddingLeft: 18 }}>
                {ev.benefits.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            {ev.partnerDisplayed && (
              <p className="bodysm" style={{ marginTop: "var(--s5)", color: "var(--tinta-2)" }}>
                Mitra panti: <b>{ev.partnerPanti}</b> (ditampilkan atas izin tertulis)
              </p>
            )}

            <div className="btn-row" style={{ marginTop: "var(--s6)" }}>
              {isDone ? (
                <Button to="/laporan" kind="secondary">
                  Lihat laporan
                </Button>
              ) : isFull ? (
                <Button kind="secondary" disabled>
                  Kuota penuh, masuk daftar tunggu
                </Button>
              ) : (
                <Button to={`/events/${ev.slug}/daftar`} kind="primary">
                  Daftar jadi relawan
                </Button>
              )}
            </div>
          </div>

          <JamKunjungan
            title={`Jam kunjungan, ${ev.date}`}
            entries={ev.timeline}
            detailTo="/events"
          />
        </div>
      </div>
    </section>
  );
}