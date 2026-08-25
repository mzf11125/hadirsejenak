import { useEffect, useRef } from "react";
import SiteHeader from "./components/SiteHeader.tsx";
import SiteFooter from "./components/SiteFooter.tsx";
import Hero from "./sections/Hero.tsx";
import NextEvent from "./sections/NextEvent.tsx";
import PresenceStats from "./sections/PresenceStats.tsx";
import HowToJoin from "./sections/HowToJoin.tsx";
import LatestReports from "./sections/LatestReports.tsx";
import About from "./sections/About.tsx";

export default function App() {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in-view");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#konten">
        Langsung ke konten
      </a>
      <SiteHeader />
      <main id="konten">
        <Hero />
        <NextEvent revealRef={revealRef} />
        <PresenceStats />
        <HowToJoin />
        <LatestReports />
        <About />
      </main>
      <SiteFooter />
    </>
  );
}