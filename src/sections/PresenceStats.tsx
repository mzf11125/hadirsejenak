import SectionHead from "../components/SectionHead.tsx";
import { Stat } from "../components/primitives.tsx";
import { site } from "../data/site.ts";

export default function PresenceStats() {
  const s = site.stats;
  return (
    <section className="site-section band" aria-labelledby="angka-kehadiran">
      <div className="wrap">
        <SectionHead
          num="01"
          title="Dampak kami"
          note="Kehadiran dihitung dulu. Rupiah menyusul di bawah, dalam ukuran badan teks, bukan angka pahlawan."
        />
        <div className="grid g4">
          <Stat value={s.volunteers} label={s.volunteersLabel} />
          <Stat value={s.hours} label={s.hoursLabel} />
          <Stat value={s.panti} label={s.pantiLabel} />
          <Stat value={s.children} label={s.childrenLabel} />
        </div>
        <p
          className="bodysm"
          style={{
            marginTop: "var(--s6)",
            borderTop: "1px solid var(--garis)",
            paddingTop: "var(--s5)",
            color: "var(--tinta-2)",
          }}
        >
          <span style={{ color: "var(--tinta)", fontWeight: 700 }}>{s.rupiah}</span>{" "}
          {s.rupiahLabel}. Laporan lengkap ada di halaman laporan.
        </p>
      </div>
    </section>
  );
}