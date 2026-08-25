import { Link } from "react-router-dom";
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
              {site.org.mission}
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
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/donasi">Donasi</Link>
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
            <b>{site.org.legal.entity}</b>, {site.org.legal.deed},{" "}
            {site.org.legal.address}.
          </div>
          <div style={{ marginTop: 8 }}>
            <Link
              to="/kebijakan-privasi"
              style={{ color: "var(--papan-ink-2)", marginRight: 16 }}
            >
              Kebijakan privasi
            </Link>
            <Link to="/perlindungan-anak" style={{ color: "var(--papan-ink-2)" }}>
              Perlindungan anak
            </Link>
          </div>
          <div style={{ marginTop: 8 }}>
            © {year} Hadir Sejenak. Dibuat dengan hati di Tigaraksa, Kabupaten Tangerang.
          </div>
        </div>
      </div>
    </footer>
  );
}