import { Link, NavLink } from "react-router-dom";
import Button from "./Button.tsx";
import { site } from "../data/site.ts";

export default function SiteHeader() {
  return (
    <div className="site-nav" role="banner">
      <div className="nav-inner">
        <Link className="brand" to="/" aria-label={`${site.org.name}, beranda`}>
          <img
            className="brand-mark"
            src="/logo-mark.png"
            alt=""
            width={78}
            height={78}
          />
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
