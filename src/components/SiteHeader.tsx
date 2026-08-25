import { Link, NavLink } from "react-router-dom";
import Button from "./Button.tsx";
import { site } from "../data/site.ts";

export default function SiteHeader() {
  return (
    <div className="site-nav" role="banner">
      <div className="nav-inner">
        <Link className="brand" to="/" aria-label={`${site.org.name}, beranda`}>
          <span className="brand-mark" aria-hidden="true" />
          {site.org.name}
        </Link>
        <nav aria-label="Navigasi utama">
          <ul className="nav-links">
            {site.nav.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) => (isActive ? "is-active" : undefined)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/donasi" kind="primary">
            Donasi
          </Button>
        </nav>
      </div>
    </div>
  );
}