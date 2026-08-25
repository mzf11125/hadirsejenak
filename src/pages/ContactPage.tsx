import SectionHead from "../components/SectionHead.tsx";
import Button from "../components/Button.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";

export default function ContactPage() {
  usePageMeta("Kontak, Hadir Sejenak", site.contact.intro);

  return (
    <section className="site-section">
      <div className="wrap" style={{ maxWidth: 640 }}>
        <SectionHead num="01" title={site.contact.heading} note={site.contact.intro} />

        <div className="grid g2" style={{ marginBottom: "var(--s6)" }}>
          <div className="card">
            <span className="label">WhatsApp</span>
            <p className="bodysm" style={{ marginTop: 8 }}>
              <a href={site.org.whatsappUrl} rel="noreferrer" target="_blank">
                Chat kami di WhatsApp
              </a>
            </p>
          </div>
          <div className="card">
            <span className="label">Email</span>
            <p className="bodysm" style={{ marginTop: 8 }}>
              <a href={`mailto:${site.org.email}`}>{site.org.email}</a>
            </p>
          </div>
          <div className="card">
            <span className="label">Instagram</span>
            <p className="bodysm" style={{ marginTop: 8 }}>
              <a href={site.org.instagramUrl} rel="noreferrer" target="_blank">
                {site.org.instagram}
              </a>
            </p>
          </div>
          <div className="card">
            <span className="label">Kerja sama dan sponsor</span>
            <p className="bodysm" style={{ marginTop: 8, color: "var(--tinta-2)" }}>
              Kirim pertanyaan kerja sama lewat email dengan subjek "Kerja sama",
              kami rutekan ke inbox terpisah.
            </p>
          </div>
        </div>

        <div className="card">
          <span className="label">Formulir kontak</span>
          <p className="bodysm" style={{ marginTop: 8, color: "var(--tinta-2)" }}>
            Formulir web akan tersedia di rilis berikutnya. Untuk sekarang, silakan pakai
            WhatsApp atau email di atas.
          </p>
        </div>

        <div className="btn-row" style={{ marginTop: "var(--s5)" }}>
          <Button to="/tentang" kind="quiet">
            Tentang kami
          </Button>
        </div>
      </div>
    </section>
  );
}