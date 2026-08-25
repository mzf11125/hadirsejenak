import SectionHead from "../components/SectionHead.tsx";
import Button from "../components/Button.tsx";
import { site } from "../data/site.ts";

export default function HowToJoin() {
  return (
    <section className="site-section" aria-labelledby="cara-ikut">
      <div className="wrap">
        <SectionHead
          num="03"
          title="Cara ikut"
          note="Tiga jalan masuk: relawan, donatur, atau mitra panti. Pilih yang paling jujur untukmu."
        />
        <div className="grid g3">
          {site.howToJoin.map((item) => (
            <div className="card hoverable" key={item.step}>
              <span className="mono" style={{ color: "var(--sore-tekan)" }}>
                {item.step}
              </span>
              <h3 style={{ fontSize: 20, marginTop: "var(--s2)", marginBottom: "var(--s3)" }}>
                {item.title}
              </h3>
              <p className="bodysm" style={{ color: "var(--tinta-2)", marginBottom: "var(--s4)" }}>
                {item.body}
              </p>
              <Button
                to={item.cta.href}
                kind={item.cta.kind}
              >
                {item.cta.label}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}