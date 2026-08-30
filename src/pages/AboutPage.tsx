import SectionHead from "../components/SectionHead.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";
import type { NamedItem } from "../data/site.ts";

function ItemCard({ item }: { item: NamedItem }) {
  return (
    <div className="card">
      <h3 style={{ fontSize: 19, marginBottom: "var(--s2)" }}>{item.name}</h3>
      <p className="bodysm" style={{ margin: 0, color: "var(--tinta-2)" }}>
        {item.body}
      </p>
    </div>
  );
}

export default function AboutPage() {
  usePageMeta(`Tentang, ${site.org.name}`, site.org.description);

  const b = site.about.beginning;
  const f = site.about.founder;

  return (
    <>
      {/* 03 OUR BEGINNING */}
      <section className="site-section">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <SectionHead num="03" title={b.heading} note={b.note} />
          {b.story.map((p) => (
            <p key={p.slice(0, 24)} style={{ maxWidth: "62ch", fontSize: 17 }}>
              {p}
            </p>
          ))}
          <p className="mono" style={{ color: "var(--sore-tekan)", marginTop: "var(--s4)" }}>
            {b.closing}
          </p>
        </div>
      </section>

      {/* 04 FOUNDER */}
      <section className="site-section band">
        <div className="wrap">
          <SectionHead num="04" title={f.heading} note={f.note} />
          <div className="grid g2" style={{ alignItems: "start" }}>
            <div>
              <h3 style={{ fontSize: 30, marginBottom: 4 }}>{f.name}</h3>
              <p className="bodysm" style={{ marginBottom: "var(--s4)" }}>
                {f.role}
              </p>
              {f.story.map((p) => (
                <p key={p.slice(0, 24)} style={{ maxWidth: "56ch", fontSize: 17 }}>
                  {p}
                </p>
              ))}
              <p className="mono" style={{ color: "var(--sore-tekan)" }}>
                {f.closing}
              </p>
            </div>
            <div
              className="card"
              style={{ display: "grid", placeItems: "center", textAlign: "center", alignSelf: "start" }}
            >
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                  background: "var(--seragam)",
                  color: "var(--kapur)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: 40,
                  marginBottom: "var(--s4)",
                }}
                aria-hidden="true"
              >
                M
              </div>
              <b style={{ fontSize: 17 }}>{f.name}</b>
              <span className="bodysm" style={{ marginTop: 4 }}>
                {f.role}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 06 OUR PURPOSE */}
      <section className="site-section">
        <div className="wrap">
          <SectionHead num="06" title={site.about.purpose.heading} note={site.about.purpose.note} />
          <p style={{ maxWidth: "56ch", fontSize: 17 }}>{site.about.purpose.intro}</p>
          <div className="grid g2">
            {site.about.purpose.items.map((item) => (
              <ItemCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 07 OUR VISION */}
      <section className="site-section band">
        <div className="wrap" style={{ maxWidth: 820, textAlign: "center" }}>
          <SectionHead num="07" title={site.about.vision.heading} note={site.about.vision.note} />
          <p
            style={{
              fontSize: "clamp(22px, 3.4vw, 34px)",
              lineHeight: 1.35,
              maxWidth: "30ch",
              margin: "0 auto",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              letterSpacing: "-0.01em",
            }}
          >
            {site.about.vision.body}
          </p>
        </div>
      </section>

      {/* 08 OUR MISSION */}
      <section className="site-section">
        <div className="wrap">
          <SectionHead num="08" title={site.about.mission.heading} note={site.about.mission.note} />
          <div className="grid g2">
            {site.about.mission.items.map((item) => (
              <ItemCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 09 OUR VALUES */}
      <section className="site-section band">
        <div className="wrap">
          <SectionHead num="09" title={site.about.values.heading} note={site.about.values.note} />
          <div className="grid g3">
            {site.about.values.items.map((item) => (
              <ItemCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 21 FOUNDER MESSAGE */}
      <section className="site-section">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <SectionHead num="21" title={site.about.founderMessage.heading} note={site.about.founderMessage.note} />
          {site.about.founderMessage.body.map((p) => (
            <p key={p.slice(0, 24)} style={{ maxWidth: "62ch", fontSize: 17 }}>
              {p}
            </p>
          ))}
          <div style={{ marginTop: "var(--s5)" }}>
            <b style={{ fontSize: 16 }}>{site.about.founderMessage.signature}</b>
            <p className="bodysm" style={{ marginTop: 2, marginBottom: 0 }}>
              {site.about.founderMessage.signatureRole}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
