import { Link, Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import type { FormEvent } from "react";
import SectionHead from "../components/SectionHead.tsx";
import Button from "../components/Button.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { eventBySlug } from "../data/site.ts";

type Errors = Record<string, string>;

export default function VolunteerSignupPage() {
  const { slug } = useParams();
  const ev = slug ? eventBySlug(slug) : undefined;

  usePageMeta(ev ? `Daftar relawan, ${ev.title}` : "Daftar relawan, Hadir Sejenak");

  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    email: "",
    umur: "",
    domisili: "",
    alasan: "",
    consentDokumentasi: false,
    consentData: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState<null | { position: number; total: number } | { waitlist: number }>(null);

  if (!ev) return <Navigate to="/events" replace />;

  const remaining = ev.quota - ev.quotaTaken;
  const isFull = ev.status === "full" || remaining <= 0;
  const quota = ev.quota;

  function set<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): Errors {
    const e: Errors = {};
    const nama = form.nama.trim();
    if (nama.length < 3 || nama.length > 80) e.nama = "Nama harus 3 sampai 80 karakter.";
    const wa = form.whatsapp.replace(/\D/g, "");
    if (wa.length < 10 || wa.length > 13) e.whatsapp = "Nomor kurang lengkap. Masukkan 10 sampai 13 angka.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = "Format email belum benar.";
    const umur = Number(form.umur);
    if (!form.umur || Number.isNaN(umur) || umur < 18) e.umur = "Usia minimal 18 tahun.";
    if (!form.domisili.trim()) e.domisili = "Tulis kota atau kecamatan domisilimu.";
    if (form.alasan.length > 300) e.alasan = "Maksimal 300 karakter.";
    if (!form.consentDokumentasi) e.consentDokumentasi = "Persetujuan dokumentasi wajib.";
    if (!form.consentData) e.consentData = "Persetujuan data wajib.";
    return e;
  }

  function handleSubmit(evForm: FormEvent) {
    evForm.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    // Client-side only: simulate quota position. No backend in v1.
    if (isFull) {
      setResult({ waitlist: 2 });
    } else {
      setResult({ position: remaining + 1, total: quota });
    }
  }

  if (result) {
    const onWaitlist = "waitlist" in result;
    return (
      <section className="site-section">
        <div className="wrap" style={{ maxWidth: 560 }}>
          <SectionHead num="01" title={onWaitlist ? "Kamu masuk daftar tunggu" : "Kamu terdaftar"} />
          <div className="card">
            {onWaitlist ? (
              <p>
                Kamu masuk daftar tunggu di nomor {(result as { waitlist: number }).waitlist}.
                Kami kabari kalau ada slot kosong.
              </p>
            ) : (
              <p>
                Kamu terdaftar. Nomor urut {(result as { position: number }).position} dari{" "}
                {(result as { total: number }).total}. Langkah berikutnya: bergabung ke grup
                WhatsApp koordinasi.
              </p>
            )}
            <p className="bodysm" style={{ color: "var(--tinta-2)" }}>
              Konfirmasi juga dikirim lewat WhatsApp atau email yang kamu isi.
            </p>
            <div className="btn-row">
              <Button to="/events" kind="secondary">
                Kembali ke events
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

  return (
    <section className="site-section">
      <div className="wrap" style={{ maxWidth: 560 }}>
        <Link to={`/events/${ev.slug}`} className="mono" style={{ color: "var(--seragam)" }}>
          ← Kembali ke detail
        </Link>
        <SectionHead
          num="01"
          title="Daftar jadi relawan"
          note={`${ev.title}, ${ev.dateMono}. Kuota ${ev.quota} orang.`}
        />

        {isFull && (
          <p className="bodysm" style={{ color: "var(--hati)" }}>
            Kuota penuh. Kamu tetap bisa mengisi formulir untuk masuk daftar tunggu.
          </p>
        )}

        <form className="card" onSubmit={handleSubmit} noValidate>
          <div className="field" style={{ marginBottom: "var(--s4)" }}>
            <label htmlFor="nama">Nama lengkap</label>
            <input
              id="nama"
              type="text"
              value={form.nama}
              onChange={(e) => set("nama", e.target.value)}
              aria-invalid={Boolean(errors.nama)}
            />
            {errors.nama && <div className="err">{errors.nama}</div>}
          </div>

          <div className="field" style={{ marginBottom: "var(--s4)" }}>
            <label htmlFor="whatsapp">Nomor WhatsApp</label>
            <input
              id="whatsapp"
              type="tel"
              placeholder="0812 3456 7890"
              value={form.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
              aria-invalid={Boolean(errors.whatsapp)}
            />
            {errors.whatsapp && <div className="err">{errors.whatsapp}</div>}
          </div>

          <div className="field" style={{ marginBottom: "var(--s4)" }}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              aria-invalid={Boolean(errors.email)}
            />
            <div className="help">Dipakai untuk e-sertifikat.</div>
            {errors.email && <div className="err">{errors.email}</div>}
          </div>

          <div className="field" style={{ marginBottom: "var(--s4)" }}>
            <label htmlFor="umur">Umur</label>
            <input
              id="umur"
              type="number"
              inputMode="numeric"
              value={form.umur}
              onChange={(e) => set("umur", e.target.value)}
              aria-invalid={Boolean(errors.umur)}
            />
            {errors.umur && <div className="err">{errors.umur}</div>}
          </div>

          <div className="field" style={{ marginBottom: "var(--s4)" }}>
            <label htmlFor="domisili">Domisili</label>
            <input
              id="domisili"
              type="text"
              placeholder="Kota atau kecamatan"
              value={form.domisili}
              onChange={(e) => set("domisili", e.target.value)}
              aria-invalid={Boolean(errors.domisili)}
            />
            {errors.domisili && <div className="err">{errors.domisili}</div>}
          </div>

          <div className="field" style={{ marginBottom: "var(--s4)" }}>
            <label htmlFor="alasan">Alasan ikut (opsional)</label>
            <textarea
              id="alasan"
              rows={3}
              maxLength={300}
              style={{ width: "100%", padding: "12px 14px", borderRadius: "var(--r-sm)", border: "1.5px solid var(--garis)" }}
              value={form.alasan}
              onChange={(e) => set("alasan", e.target.value)}
            />
            {errors.alasan && <div className="err">{errors.alasan}</div>}
          </div>

          <label style={{ display: "flex", gap: "var(--s3)", alignItems: "flex-start", marginBottom: "var(--s3)" }}>
            <input
              type="checkbox"
              style={{ marginTop: 4 }}
              checked={form.consentDokumentasi}
              onChange={(e) => set("consentDokumentasi", e.target.checked)}
            />
            <span className="bodysm" style={{ margin: 0 }}>
              Saya setuju difoto dan didokumentasikan selama kegiatan.
            </span>
          </label>
          {errors.consentDokumentasi && <div className="err" style={{ marginBottom: "var(--s3)" }}>{errors.consentDokumentasi}</div>}

          <label style={{ display: "flex", gap: "var(--s3)", alignItems: "flex-start", marginBottom: "var(--s4)" }}>
            <input
              type="checkbox"
              style={{ marginTop: 4 }}
              checked={form.consentData}
              onChange={(e) => set("consentData", e.target.checked)}
            />
            <span className="bodysm" style={{ margin: 0 }}>
              Saya setuju data saya diproses sesuai{" "}
              <Link to="/kebijakan-privasi">kebijakan privasi</Link>.
            </span>
          </label>
          {errors.consentData && <div className="err" style={{ marginBottom: "var(--s3)" }}>{errors.consentData}</div>}

          <div className="btn-row">
            <Button type="submit" kind="primary">
              Kirim pendaftaran
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}