/**
 * Site content, single source of truth for the beranda (landing page).
 *
 * This mirrors the CMS content model from the PRD (§8) so the page can be
 * re-wired to a real backend later without re-templating. Everything here is
 * in Bahasa Indonesia and follows the voice rules (Section 07): plain verbs,
 * no guilt, no urgency, presence before rupiah.
 */

export type TimelineEntry = {
  time: string;
  title: string;
  detail: string;
};

export type CtaKind = "primary" | "secondary" | "quiet";

export type Cta = {
  label: string;
  href: string;
  kind: CtaKind;
};

export type NextEvent = {
  title: string;
  date: string;
  dateMono: string;
  location: string;
  mapsUrl: string;
  quota: number;
  quotaTaken: number;
  status: "open" | "full" | "closed";
  timeline: TimelineEntry[];
};

export type Report = {
  slug: string;
  title: string;
  dateMono: string;
  place: string;
  excerpt: string;
  stats: { volunteers: string; hours: string; children: string };
};

export type HowToJoinStep = {
  step: string;
  title: string;
  body: string;
  cta: Cta;
};

export const site = {
  org: {
    name: "Hadir Sejenak",
    tagline: "Datang, duduk, dengarkan.",
    thesis:
      "Komunitas relawan yang mengunjungi panti asuhan dan anak-anak yang membutuhkan, lalu membawa pulang bukti kehadirannya. Uang boleh. Waktu adalah intinya.",
    instagram: "@hadirsejenakk",
    instagramUrl: "https://instagram.com/hadirsejenakk",
    whatsappUrl: "https://wa.me/6281234567890",
    email: "halo@hadirsejenak.org",
    legal: {
      entity: "Yayasan [nama]",
      deed: "akta [nomor]",
      address: "[alamat]",
      permitNote:
        "Legalitas dan izin pengumpulan dana dipublikasikan pada halaman donasi.",
    },
  },

  nav: [
    { label: "Kegiatan", href: "/kegiatan" },
    { label: "Laporan", href: "/laporan" },
    { label: "Tentang", href: "/tentang" },
  ],

  nextEvent: {
    title: "Kunjungan ke Panti Asuhan Bintaro",
    date: "19 September 2026",
    dateMono: "19 SEP 2026",
    location: "Bintaro, Tangerang Selatan",
    mapsUrl: "#maps",
    quota: 8,
    quotaTaken: 5,
    status: "open",
    timeline: [
      { time: "07.30", title: "Kumpul relawan", detail: "Titik kumpul Bintaro, briefing 20 menit" },
      { time: "09.00", title: "Tiba di panti", detail: "Salam, perkenalan, bagi kelompok kecil" },
      { time: "10.00", title: "Belajar bareng", detail: "Membaca dan berhitung, satu relawan dua anak" },
      { time: "12.00", title: "Makan siang bersama", detail: "Disiapkan bersama pengurus panti" },
      { time: "15.00", title: "Pamit", detail: "Foto bersama dengan izin pengurus" },
    ],
  } satisfies NextEvent,

  stats: {
    volunteers: "8",
    volunteersLabel: "relawan hadir pada kunjungan terakhir",
    hours: "52",
    hoursLabel: "jam kebersamaan",
    panti: "3",
    pantiLabel: "panti dikunjungi",
    rupiah: "Rp 1.400.000",
    rupiahLabel: "dana tersalurkan sejauh ini",
  },

  howToJoin: [
    {
      step: "01",
      title: "Jadi relawan",
      body: "Lihat jadwal kunjungan, daftar dalam dua menit, dan datang. Kuota kecil supaya kehadiranmu berarti.",
      cta: { label: "Daftar jadi relawan", href: "/kegiatan/bintaro/daftar", kind: "primary" },
    },
    {
      step: "02",
      title: "Beri donasi",
      body: "Setiap nominal punya arti yang bisa dicek: paket alat tulis, makan siang, atau biaya satu kunjungan.",
      cta: { label: "Beri donasi", href: "/donasi", kind: "secondary" },
    },
    {
      step: "03",
      title: "Jadi mitra panti",
      body: "Kamu pengurus panti atau yayasan? Ceritakan kebutuhanmu, kami susun kunjungan bersama.",
      cta: { label: "Hubungi kami", href: "/kontak", kind: "quiet" },
    },
  ] satisfies HowToJoinStep[],

  reports: [
    {
      slug: "bintaro-september-2026",
      title: "Kunjungan ke Bintaro, September 2026",
      dateMono: "22 SEP 2026",
      place: "Bintaro",
      excerpt:
        "Delapan relawan datang pagi itu dan pulang sore hari. Tiga puluh anak ikut belajar bareng dan makan siang bersama.",
      stats: { volunteers: "8", hours: "52", children: "30" },
    },
    {
      slug: "ciputat-agustus-2026",
      title: "Kunjungan ke Ciputat, Agustus 2026",
      dateMono: "25 AUG 2026",
      place: "Ciputat",
      excerpt:
        "Kunjungan ketiga kami. Materi membaca untuk kelompok kecil, ditutup foto bersama dengan izin pengurus.",
      stats: { volunteers: "6", hours: "36", children: "24" },
    },
  ] satisfies Report[],
};

export const emptyState = {
  title: "Belum ada kegiatan bulan ini",
  body: "Kegiatan berikutnya diumumkan setiap awal bulan di Instagram.",
  cta: { label: "Ikuti @hadirsejenakk", href: "#" },
};