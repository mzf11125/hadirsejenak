import HomeHero from "../sections/HomeHero.tsx";
import WhatIs from "../sections/WhatIs.tsx";
import ImpactStrip from "../sections/ImpactStrip.tsx";
import WhyWeExist from "../sections/WhyWeExist.tsx";
import CtaBand from "../sections/CtaBand.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";

export default function Home() {
  usePageMeta(
    `${site.org.name}, Official Website`,
    `${site.org.tagline} ${site.org.description}`
  );

  return (
    <>
      <HomeHero />
      <WhatIs />
      <ImpactStrip />
      <WhyWeExist />
      <CtaBand />
    </>
  );
}
