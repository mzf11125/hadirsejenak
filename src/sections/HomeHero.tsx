import Button from "../components/Button.tsx";
import { site } from "../data/site.ts";

export default function HomeHero() {
  return (
    <header className="mast">
      <div className="wrap">
        <span className="eyebrow hero-rise hero-rise-1">{site.hero.eyebrow}</span>
        <h1 className="hero-rise hero-rise-2">{site.org.tagline}</h1>
        <p className="lede hero-rise hero-rise-3">{site.org.description}</p>
        <div
          className="hero-rise hero-rise-4"
          style={{ maxWidth: "62ch", marginTop: "var(--s4)" }}
        >
          {site.hero.intro.map((p) => (
            <p key={p.slice(0, 24)} style={{ color: "var(--papan-ink)", fontSize: 15.5 }}>
              {p}
            </p>
          ))}
        </div>
        <p
          className="mono hero-rise hero-rise-4"
          style={{ color: "var(--papan-ink-2)", marginTop: "var(--s4)" }}
        >
          {site.org.foundedLine}
        </p>
        <div className="btn-row hero-rise hero-rise-4" style={{ marginTop: "var(--s6)" }}>
          <Button href={site.wa.volunteer} kind="primary" target="_blank" rel="noreferrer">
            Jadi volunteer
          </Button>
          <Button to="/donasi" kind="secondary" onDark>
            Donasi
          </Button>
        </div>
      </div>
    </header>
  );
}
