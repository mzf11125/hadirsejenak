import { useLocation } from "react-router-dom";
import SectionHead from "../components/SectionHead.tsx";
import Button from "../components/Button.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";

export default function ThankYouPage() {
  usePageMeta("Terima kasih, Hadir Sejenak");

  const location = useLocation();
  const state = (location.state ?? {}) as {
    receipt?: string;
    amount?: string;
    nama?: string;
    channel?: string;
  };

  const channelLabel: Record<string, string> = {
    qris: "QRIS",
    va: "Transfer bank (VA)",
    ewallet: "E-wallet",
  };

  return (
    <section className="site-section">
      <div className="wrap" style={{ maxWidth: 560 }}>
        <SectionHead num="01" title="Terima kasih" />
        <div className="card">
          <p>
            Terima kasih. Nomor kuitansi{" "}
            <b className="mono">{state.receipt ?? "HS-2609-0000"}</b>.
          </p>
          <div style={{ marginTop: "var(--s4)" }}>
            <div className="mono" style={{ color: "var(--tinta-2)" }}>Rincian</div>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "var(--s3)" }}>
              <tbody>
                <tr><td className="bodysm" style={{ padding: "4px 0", color: "var(--tinta-2)" }}>Nominal</td><td style={{ textAlign: "right", fontWeight: 700 }}>{state.amount ?? "-"}</td></tr>
                <tr><td className="bodysm" style={{ padding: "4px 0", color: "var(--tinta-2)" }}>Nama</td><td style={{ textAlign: "right" }}>{state.nama ?? "Anonim"}</td></tr>
                <tr><td className="bodysm" style={{ padding: "4px 0", color: "var(--tinta-2)" }}>Metode</td><td style={{ textAlign: "right" }}>{channelLabel[state.channel ?? ""] ?? state.channel}</td></tr>
                <tr><td className="bodysm" style={{ padding: "4px 0", color: "var(--tinta-2)" }}>Penerima</td><td style={{ textAlign: "right" }}>{site.org.legal.entity}</td></tr>
              </tbody>
            </table>
          </div>
          <p className="bodysm" style={{ color: "var(--tinta-2)", marginTop: "var(--s4)" }}>
            Kuitansi dikirim ke kontak yang kamu isi. Laporan penggunaan dana terbit setelah
            kunjungan selesai.
          </p>
          <div className="btn-row" style={{ marginTop: "var(--s4)" }}>
            <Button to="/laporan" kind="secondary">
              Lihat laporan
            </Button>
            <Button to="/" kind="quiet">
              Beranda
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}