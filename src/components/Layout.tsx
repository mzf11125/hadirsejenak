import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteHeader from "./SiteHeader.tsx";
import SiteFooter from "./SiteFooter.tsx";

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change (respect reduced motion via CSS scroll-behavior).
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#konten">
        Langsung ke konten
      </a>
      <SiteHeader />
      <main id="konten">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}