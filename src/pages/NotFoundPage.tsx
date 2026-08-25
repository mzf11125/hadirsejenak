import Button from "../components/Button.tsx";
import usePageMeta from "../hooks/usePageMeta.ts";

export default function NotFoundPage() {
  usePageMeta("Halaman tidak ditemukan, Hadir Sejenak");

  return (
    <section className="site-section">
      <div className="wrap" style={{ maxWidth: 560 }}>
        <div className="empty" style={{ padding: "var(--s7) var(--s5)" }}>
          <div className="empty-title" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
            Halaman tidak ditemukan
          </div>
          <p>Alamat ini tidak ada, atau sudah dipindahkan.</p>
          <Button to="/" kind="primary">
            Kembali ke beranda
          </Button>
        </div>
      </div>
    </section>
  );
}