import SectionHead from "../components/SectionHead.tsx";
import { site } from "../data/site.ts";

export default function WhyWeExist() {
  return (
    <section className="site-section band" aria-labelledby="why-we-exist">
      <div className="wrap">
        <SectionHead num="05" title={site.whyWeExist.heading} note={site.whyWeExist.note} />
        <div className="grid g2" style={{ alignItems: "start" }}>
          <div>
            {site.whyWeExist.intro.map((p) => (
              <p key={p.slice(0, 24)} style={{ maxWidth: "56ch", fontSize: 17 }}>
                {p}
              </p>
            ))}
            <p style={{ maxWidth: "56ch", color: "var(--tinta-2)" }}>
              {site.whyWeExist.closing}
            </p>
          </div>
          <ul
            className="card"
            style={{
              margin: 0,
              padding: "var(--s5)",
              listStyle: "none",
              display: "grid",
              gap: "var(--s3)",
            }}
          >
            {site.whyWeExist.bullets.map((b) => (
              <li key={b} style={{ fontSize: 19, fontWeight: 700 }}>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
