import Hero from "../sections/Hero.tsx";
import PresenceStats from "../sections/PresenceStats.tsx";
import HowToJoin from "../sections/HowToJoin.tsx";
import LatestReports from "../sections/LatestReports.tsx";
import About from "../sections/About.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";

export default function Home() {
  usePageMeta(
    `${site.org.name}, Komunitas Relawan di Tigaraksa`,
    site.org.mission
  );

  return (
    <>
      <Hero />
      <PresenceStats />
      <HowToJoin />
      <LatestReports />
      <About />
    </>
  );
}