import SectionHead from "../components/SectionHead.tsx";
import Button from "../components/Button.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";
import type { ContributeItem, NamedItem } from "../data/site.ts";

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

function ContributeCard({ item }: { item: ContributeItem }) {
  const cta = item.cta;
  const external = Boolean(cta && (cta.href.startsWith("http") || cta.href.startsWith("mailto")));
  return (
    <div className="card hoverable" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: 19, marginBottom: "var(--s2)" }}>{item.name}</h3>
        <p className="bodysm" style={{ margin: 0, color: "var(--tinta-2)" }}>
          {item.body}
        </p>
      </div>
      {cta && (
        <div style={{ marginTop: "var(--s4)" }}>
          {external ? (
            <Button href={cta.href} kind={cta.kind} target="_blank" rel="noreferrer">
              {cta.label}
            </Button>
          ) : (
            <Button to={cta.href} kind={cta.kind}>
              {cta.label}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default function ActivitiesPage() {
  usePageMeta(`Kegiatan, ${site.org.name}`, site.whatWeDo.intro);

  return (
    <>
      {/* 10 WHAT WE DO */}
      <section className="site-section">
        <div className="wrap">
          <SectionHead num="10" title={site.whatWeDo.heading} note={site.whatWeDo.note} />
          <p style={{ maxWidth: "56ch", fontSize: 17 }}>{site.whatWeDo.intro}</p>
          <div className="grid g3">
            {site.whatWeDo.items.map((item) => (
              <ItemCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 11 WHO CAN BE PART OF HADIR SEJENAK? */}
      <section className="site-section band">
        <div className="wrap">
          <SectionHead num="11" title={site.whoCanBePart.heading} note={site.whoCanBePart.note} />
          <p style={{ maxWidth: "56ch", fontSize: 17 }}>{site.whoCanBePart.intro}</p>
          <div className="grid g3">
            {site.whoCanBePart.items.map((item) => (
              <ItemCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 12 HOW TO CONTRIBUTE */}
      <section className="site-section">
        <div className="wrap">
          <SectionHead num="12" title={site.howToContribute.heading} note={site.howToContribute.note} />
          <p style={{ maxWidth: "56ch", fontSize: 17 }}>{site.howToContribute.intro}</p>
          <div className="grid g2">
            {site.howToContribute.items.map((item) => (
              <ContributeCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
