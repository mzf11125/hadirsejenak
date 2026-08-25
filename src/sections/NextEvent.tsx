import type { Ref } from "react";
import SectionHead from "../components/SectionHead.tsx";
import JamKunjungan from "../components/JamKunjungan.tsx";
import Button from "../components/Button.tsx";
import { Badge } from "../components/primitives.tsx";
import { site, emptyState } from "../data/site.ts";

export default function NextEvent({ revealRef }: { revealRef: Ref<HTMLDivElement> }) {
  const ev = site.nextEvent;
  const remaining = ev.quota - ev.quotaTaken;
  const hasEvent = Boolean(ev);

  return (
    <section className="site-section" aria-labelledby="kegiatan-berikutnya">
      <div className="wrap">
        <SectionHead
          num="01"
          title="Kegiatan berikutnya"
          note="Jam kunjungan dulu, baru ajakan. Kehadiran lebih dulu dari ajakan."
        />

        {hasEvent ? (
          <div className="grid g2" style={{ alignItems: "start" }}>
            <div>
              <span className="label">Kunjungan berikutnya</span>
              <h3
                style={{
                  fontSize: "clamp(24px, 3.4vw, 32px)",
                  marginTop: "var(--s3)",
                  letterSpacing: "-0.02em",
                }}
              >
                {ev.title}
              </h3>
              <div className="mono" style={{ marginTop: "var(--s3)", color: "var(--tinta-2)" }}>
                {ev.dateMono}, {ev.location}
              </div>
              <div className="btn-row" style={{ marginTop: "var(--s4)" }}>
                <Badge variant="quiet">Kuota {ev.quota} orang</Badge>
                <Badge variant="yes">Sisa {remaining} slot</Badge>
                <Badge variant="quiet">Gratis</Badge>
              </div>
              <p className="bodysm" style={{ marginTop: "var(--s4)", maxWidth: "52ch" }}>
                Tanpa biaya pendaftaran. Kamu cukup datang seusai jadwal dan ikut
                sampai selesai. Kuota dijaga kecil supaya kehadiranmu berarti.
              </p>
              <div className="btn-row" style={{ marginTop: "var(--s4)" }}>
                <Button as="a" href="/kegiatan/bintaro" kind="secondary">
                  Lihat detail
                </Button>
                <Button as="a" href="/kegiatan/bintaro/daftar" kind="quiet">
                  Daftar jadi relawan
                </Button>
              </div>
            </div>

            <JamKunjungan
              title={`Jam kunjungan, ${ev.date}`}
              entries={ev.timeline}
              preview
              previewCount={3}
              revealRef={revealRef}
              detailHref="/kegiatan/bintaro"
            />
          </div>
        ) : (
          <div className="empty">
            <div className="empty-title" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
              {emptyState.title}
            </div>
            <p>{emptyState.body}</p>
            <Button as="a" href={emptyState.cta.href} kind="secondary">
              {emptyState.cta.label}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}