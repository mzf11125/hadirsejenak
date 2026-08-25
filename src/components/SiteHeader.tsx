import Button from "./Button.tsx";
import { site } from "../data/site.ts";

export default function SiteHeader() {
  return (
    <div className="site-nav" role="banner">
      <div className="nav-inner">
        <a className="brand" href="/" aria-label={`${site.org.name}, beranda`}>
          <span className="brand-mark" aria-hidden="true" />
          {site.org.name}
        </a>
        <nav aria-label="Navigasi utama">
          <ul className="nav-links">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <Button as="a" href="/donasi" kind="primary">
            Donasi
          </Button>
        </nav>
      </div>
    </div>
  );
}