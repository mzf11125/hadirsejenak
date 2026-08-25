import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import SectionHead from "../components/SectionHead.tsx";
import Button from "../components/Button.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site, nextEvent } from "../data/site.ts";

const CHANNELS = [
  { id: "qris", label: "QRIS" },
  { id: "va", label: "Transfer bank (VA)" },
  { id: "ewallet", label: "E-wallet" },
];

export default function DonatePage() {
  usePageMeta("Donasi, Hadir Sejenak", "Beri donasi untuk kunjungan relawan Hadir Sejenak.");

  const navigate = useNavigate();
  const ev = nextEvent();
  const presets = ev?.amountPresets ?? [];

  const [amount, setAmount] = useState(presets[1]?.amount ?? "Rp 150.000");
  const [nama, setNama] = useState("");
  const [anonim, setAnonim] = useState(false);
  const [kontak, setKontak] = useState("");
  const [channel, setChannel] = useState("qris");
  const [pesan, setPesan] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!amount) {
      setError("Pilih atau isi nominal donasi.");
      return;
    }
    if (!kontak.trim()) {
      setError("Isi nomor WhatsApp atau email untuk kuitansi.");
      return;
    }
    setError("");
    // Client-side only in v1: generate a receipt number and go to thank-you.
    const receipt = `HS-2609-${String(Math.floor(1000 + Math.random() * 9000))}`;
    navigate("/donasi/terima-kasih", {
      state: { receipt, amount, nama: anonim ? "Anonim" : nama, channel },
    });
  }

  return (
    <section className="site-section">
      <div className="wrap" style={{ maxWidth: 640 }}>
        <SectionHead
          num="01"
          title="Donasi"
          note="Setiap nominal punya arti yang bisa dicek. Tanpa akun, tanpa alamat."
        />

        {ev && (
          <p className="bodysm" style={{ color: "var(--tinta-2)" }}>
            Donasi ini dialokasikan ke kunjungan berikutnya: {ev.title}, {ev.dateMono}.
          </p>
        )}

        <form className="card" onSubmit={handleSubmit} noValidate>
          <span className="label">Nominal</span>
          <div className="amounts" style={{ marginTop: "var(--s4)", marginBottom: "var(--s4)" }} role="radiogroup" aria-label="Pilihan nominal donasi">
            {presets.map((p) => (
              <button
                key={p.amount}
                type="button"
                className={`amt${amount === p.amount ? " is-on" : ""}`}
                onClick={() => setAmount(p.amount)}
                role="radio"
                aria-checked={amount === p.amount}
              >
                <b>{p.amount}</b>
                <span>{p.equivalence}</span>
              </button>
            ))}
          </div>
          <p className="bodysm" style={{ color: "var(--tinta-2)", marginBottom: "var(--s4)" }}>
            Jika nominal tidak bisa diverifikasi, tampil tanpa keterangan.
          </p>

          <div className="field" style={{ marginBottom: "var(--s4)" }}>
            <label htmlFor="nama">Nama (opsional)</label>
            <input
              id="nama"
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder={anonim ? "Anonim" : "Nama kamu"}
              disabled={anonim}
            />
          </div>

          <label style={{ display: "flex", gap: "var(--s3)", alignItems: "center", marginBottom: "var(--s4)" }}>
            <input type="checkbox" checked={anonim} onChange={(e) => setAnonim(e.target.checked)} />
            <span className="bodysm" style={{ margin: 0 }}>Berikan secara anonim</span>
          </label>

          <div className="field" style={{ marginBottom: "var(--s4)" }}>
            <label htmlFor="kontak">Nomor WhatsApp atau email (untuk kuitansi)</label>
            <input
              id="kontak"
              type="text"
              value={kontak}
              onChange={(e) => setKontak(e.target.value)}
              placeholder="0812 3456 7890 atau kamu@email.com"
            />
          </div>

          <span className="label">Metode pembayaran</span>
          <div className="btn-row" style={{ marginTop: "var(--s3)", marginBottom: "var(--s4)" }} role="radiogroup" aria-label="Metode pembayaran">
            {CHANNELS.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`amt${channel === c.id ? " is-on" : ""}`}
                onClick={() => setChannel(c.id)}
                role="radio"
                aria-checked={channel === c.id}
              >
                <b>{c.label}</b>
              </button>
            ))}
          </div>

          <div className="field" style={{ marginBottom: "var(--s4)" }}>
            <label htmlFor="pesan">Pesan (opsional)</label>
            <textarea
              id="pesan"
              rows={2}
              maxLength={200}
              style={{ width: "100%", padding: "12px 14px", borderRadius: "var(--r-sm)", border: "1.5px solid var(--garis)" }}
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
            />
          </div>

          {error && <div className="err" style={{ marginBottom: "var(--s4)" }}>{error}</div>}

          <p className="bodysm" style={{ color: "var(--tinta-2)", marginBottom: "var(--s4)" }}>
            Dana diterima oleh <b>{site.org.legal.entity}</b>. Nomor izin pengumpulan dana
            ditampilkan di sini saat tersedia. {site.org.legal.permitNote}
          </p>

          <div className="btn-row">
            <Button type="submit" kind="primary">
              Lanjutkan pembayaran
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}