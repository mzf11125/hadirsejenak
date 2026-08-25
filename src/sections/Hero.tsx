import Button from "../components/Button.tsx";
import { site } from "../data/site.ts";

export default function Hero() {
  return (
    <header className="mast">
      <div className="wrap">
        <span className="eyebrow hero-rise hero-rise-1">Komunitas relawan, Bintaro</span>
        <h1 className="hero-rise hero-rise-2">{site.org.tagline}</h1>
        <p className="lede hero-rise hero-rise-3">{site.org.thesis}</p>
        <div className="btn-row hero-rise hero-rise-4" style={{ marginTop: "var(--s6)" }}>
          <Button as="a" href="/kegiatan/bintaro/daftar" kind="primary">
            Daftar jadi relawan
          </Button>
          <Button as="a" href="/donasi" kind="secondary" onDark>
            Donasi
          </Button>
        </div>
      </div>
    </header>
  );
}