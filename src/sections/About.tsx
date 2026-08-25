import SectionHead from "../components/SectionHead.tsx";
import Button from "../components/Button.tsx";
import { site } from "../data/site.ts";

export default function About() {
  return (
    <section className="site-section" aria-labelledby="tentang-singkat">
      <div className="wrap">
        <SectionHead
          num="05"
          title="Tentang kami"
          note="Singkat, dan dengan nama yang bisa dipertanggungjawabkan."
        />
        <div className="grid g2" style={{ alignItems: "start" }}>
          <div>
            <p style={{ maxWidth: "56ch", fontSize: 17 }}>
              Hadir Sejenak lahir dari satu kekecewaan yang sederhana: banyak
              kunjungan ke panti berakhir tanpa bekas. Foto, lalu pulang. Kami
              memilih cara yang lain, datang, duduk, dengarkan, dan pulang
              membawa catatan yang bisa dibaca siapa pun.
            </p>
            <p style={{ maxWidth: "56ch", color: "var(--tinta-2)" }}>
              Kami komunitas, bukan platform. Relawan kami datang dari
              Jabodetabek, dan setiap kunjungan yang kami buat terdokumentasi
              jam per jamnya.
            </p>
          </div>
          <div className="card">
            <span className="label">Identitas</span>
            <p className="bodysm" style={{ marginTop: 8, marginBottom: 0 }}>
              <b>{site.org.legal.entity}</b>, {site.org.legal.deed}
              <br />
              {site.org.legal.address}
            </p>
            <p className="bodysm" style={{ marginTop: "var(--s3)", color: "var(--tinta-2)" }}>
              {site.org.legal.permitNote}
            </p>
            <div className="btn-row" style={{ marginTop: "var(--s4)" }}>
              <Button as="a" href="/tentang" kind="secondary">
                Baca selengkapnya
              </Button>
              <Button as="a" href={site.org.instagramUrl} kind="quiet" target="_blank" rel="noreferrer">
                {site.org.instagram}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}