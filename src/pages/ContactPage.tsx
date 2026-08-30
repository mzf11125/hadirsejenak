import { useState } from "react";
import type { FormEvent } from "react";
import SectionHead from "../components/SectionHead.tsx";
import Button from "../components/Button.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";
import { site } from "../data/site.ts";

type Topic = "umum" | "volunteer" | "kolaborasi" | "program";

const TOPICS: { id: Topic; label: string }[] = [
  { id: "umum", label: "Pertanyaan umum" },
  { id: "volunteer", label: "Ingin menjadi volunteer" },
  { id: "kolaborasi", label: "Ingin berkolaborasi" },
  { id: "program", label: "Ingin mendukung program" },
];

export default function ContactPage() {
  usePageMeta(`Kontak, ${site.org.name}`, site.contact.intro);

  const [nama, setNama] = useState("");
  const [topik, setTopik] = useState<Topic>("umum");
  const [pesan, setPesan] = useState("");
  const [error, setError] = useState("");

  function buildWaLink(): string {
    const lines = [
      `Halo Hadir Sejenak, saya ${nama.trim() || "[nama]"} (${TOPICS.find((t) => t.id === topik)?.label}).`,
      pesan.trim(),
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    return `${site.org.whatsappUrl}?text=${text}`;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!nama.trim()) {
      setError("Isi nama kamu dulu.");
      return;
    }
    if (pesan.trim().length < 10) {
      setError("Pesan terlalu singkat, tulis minimal 10 karakter.");
      return;
    }
    setError("");
    window.open(buildWaLink(), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="site-section">
      <div className="wrap" style={{ maxWidth: 720 }}>
        <SectionHead num="23" title={site.contact.heading} note={site.contact.note} />

        <p style={{ maxWidth: "56ch", fontSize: 17 }}>{site.contact.intro}</p>

        <div className="grid g2" style={{ marginTop: "var(--s6)" }}>
          {site.contact.channels.map((c) => (
            <div className="card" key={c.label}>
              <span className="label">{c.label}</span>
              <p className="bodysm" style={{ marginTop: 8, marginBottom: 0 }}>
                <a href={c.href} rel="noreferrer" target={c.href.startsWith("mailto") ? undefined : "_blank"}>
                  {c.value}
                </a>
              </p>
            </div>
          ))}
        </div>

        <form className="card" onSubmit={handleSubmit} noValidate style={{ marginTop: "var(--s6)" }}>
          <span className="label">Formulir kontak</span>

          <div className="field" style={{ marginTop: "var(--s4)", marginBottom: "var(--s4)" }}>
            <label htmlFor="nama">Nama</label>
            <input
              id="nama"
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              aria-invalid={Boolean(error && !nama.trim())}
            />
          </div>

          <div className="field" style={{ marginBottom: "var(--s4)" }}>
            <label htmlFor="topik">Topik</label>
            <select
              id="topik"
              value={topik}
              onChange={(e) => setTopik(e.target.value as Topic)}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "var(--r-sm)",
                border: "1.5px solid var(--garis)",
                fontFamily: "var(--font-body)",
                fontSize: 16,
                background: "#fff",
              }}
            >
              {TOPICS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div className="field" style={{ marginBottom: "var(--s4)" }}>
            <label htmlFor="pesan">Pesan</label>
            <textarea
              id="pesan"
              rows={4}
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "var(--r-sm)",
                border: "1.5px solid var(--garis)",
                fontFamily: "var(--font-body)",
                fontSize: 16,
              }}
            />
          </div>

          {error && <div className="err" style={{ marginBottom: "var(--s4)" }}>{error}</div>}

          <p className="bodysm" style={{ color: "var(--tinta-2)", marginBottom: "var(--s4)" }}>
            Pesan ini dibuka di WhatsApp, jadi tidak ada data yang disimpan di situs.
          </p>

          <div className="btn-row">
            <Button type="submit" kind="primary">
              Kirim lewat WhatsApp
            </Button>
            <Button href={`mailto:${site.org.email}`} kind="quiet">
              Atau lewat email
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
