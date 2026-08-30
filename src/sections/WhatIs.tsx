import SectionHead from "../components/SectionHead.tsx";
import { site } from "../data/site.ts";

export default function WhatIs() {
  return (
    <section className="site-section" aria-labelledby="apa-itu-hadir-sejenak">
      <div className="wrap">
        <SectionHead num="02" title={site.whatIs.heading} note={site.whatIs.note} />
        {site.whatIs.story.map((p) => (
          <p key={p.slice(0, 24)} style={{ maxWidth: "62ch", fontSize: 17 }}>
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
