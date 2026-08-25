import { site } from "../data/site.ts";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-brand">{site.org.name}</div>
        <div className="foot-grid">
          <div>
            <p style={{ color: "var(--papan-ink)", fontSize: 15, maxWidth: "48ch" }}>
              {site.org.thesis}
            </p>
            <p style={{ color: "var(--papan-ink-2)", fontSize: 13.5, margin: 0 }}>
              Kehadiran dihitung dalam jam, bukan hanya rupiah.
            </p>
          </div>
          <nav aria-label="Navigasi footer">
            <h4>Jelajahi</h4>
            <ul className="foot-links">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li>
                <a href="/donasi">Donasi</a>
              </li>
            </ul>
          </nav>
          <div>
            <h4>Kontak</h4>
            <ul className="foot-links">
              <li>
                <a href={site.org.instagramUrl} rel="noreferrer" target="_blank">
                  Instagram {site.org.instagram}
                </a>
              </li>
              <li>
                <a href={site.org.whatsappUrl} rel="noreferrer" target="_blank">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${site.org.email}`}>{site.org.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <div>
            <b>{site.org.legal.entity}</b>, {site.org.legal.deed}, {site.org.legal.address}.
          </div>
          <div style={{ marginTop: 8 }}>
            <a
              href="/kebijakan-privasi"
              style={{ color: "var(--papan-ink-2)", marginRight: 16 }}
            >
              Kebijakan privasi
            </a>
            <a href="/perlindungan-anak" style={{ color: "var(--papan-ink-2)" }}>
              Perlindungan anak
            </a>
          </div>
          <div style={{ marginTop: 8 }}>© {year} Hadir Sejenak. Made with care in Bintaro.</div>
        </div>
      </div>
    </footer>
  );
}