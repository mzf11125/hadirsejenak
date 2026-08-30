import { Link } from "react-router-dom";
import { site } from "../data/site.ts";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-brand">{site.org.name}</div>
        <div className="foot-grid">
          <div>
            <p style={{ color: "var(--papan-ink)", fontSize: 15, maxWidth: "48ch" }}>
              {site.footer.tagline}
            </p>
            <p style={{ color: "var(--papan-ink-2)", fontSize: 13.5, margin: 0 }}>
              {site.footer.description}
            </p>
          </div>
          <nav aria-label="Navigasi footer">
            <h4>Jelajahi</h4>
            <ul className="foot-links">
              {site.footerNav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h4>Kontak</h4>
            <ul className="foot-links">
              <li>
                <a href={site.org.instagramUrl} rel="noreferrer" target="_blank">
                  {site.footer.instagramLine}
                </a>
              </li>
              <li>
                <a href={site.org.whatsappUrl} rel="noreferrer" target="_blank">
                  WhatsApp {site.org.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.org.email}`}>{site.org.email}</a>
              </li>
              <li>
                <a href={site.org.websiteUrl} rel="noreferrer" target="_blank">
                  {site.org.websiteDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <div>{site.footer.foundedLine}</div>
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
          <div style={{ marginTop: 8 }}>{site.footer.copyright}</div>
        </div>
      </div>
    </footer>
  );
}
