/**
 * Site content — single source of truth for the whole site.
 *
 * Mirrors the CMS content model from the PRD (§8) so the site can be re-wired
 * to a real backend later without re-templating. Everything is in Bahasa
 * Indonesia and follows the voice rules (Section 07): plain verbs, no guilt,
 * no urgency, presence before rupiah.
 *
 * Base location: Tigaraksa, Kabupaten Tangerang.
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

export type AmountPreset = {
  amount: string;
  equivalence: string;
  verified: boolean;
};

export type EventStatus = "open" | "full" | "done";

export type CommunityEvent = {
  id: string;
  slug: string;
  title: string;
  date: string;
  dateMono: string;
  startTime: string;
  endTime: string;
  location: string;
  district: string;
  mapsUrl: string;
  quota: number;
  quotaTaken: number;
  status: EventStatus;
  description: string;
  tasks: string[];
  requirements: string[];
  benefits: string[];
  partnerPanti: string;
  partnerDisplayed: boolean;
  timeline: TimelineEntry[];
  amountPresets: AmountPreset[];
};

export type Report = {
  slug: string;
  eventId: string;
  title: string;
  dateMono: string;
  place: string;
  excerpt: string;
  narrative: string;
  stats: { volunteers: string; hours: string; children: string };
  funds: {
    received: string;
    items: { label: string; amount: string }[];
    remainder: string;
    remainderLocation: string;
  };
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
    mission:
      "Kami hadir, lalu kami pulang membawa catatan. Hadir Sejenak adalah komunitas relawan yang mengunjungi panti asuhan dan anak-anak yang membutuhkan di Tigaraksa, dan membagikan bukti kehadirannya jam per jam.",
    impact:
      "Kehadiran yang bisa dibaca siapa pun: berapa relawan datang, berapa jam mereka duduk bersama, dan apa yang terjadi hari itu. Uang boleh. Waktu adalah intinya.",
    region: "Tigaraksa, Kabupaten Tangerang",
    regionShort: "Tigaraksa",
    instagram: "@hadirsejenakk",
    instagramUrl: "https://instagram.com/hadirsejenakk",
    whatsappUrl: "https://wa.me/6281234567890",
    email: "halo@hadirsejenak.org",
    legal: {
      entity: "Yayasan [nama]",
      deed: "akta [nomor]",
      address: "[alamat], Tigaraksa, Kabupaten Tangerang",
      permitNote:
        "Legalitas dan izin pengumpulan dana dipublikasikan pada halaman donasi.",
    },
  },

  nav: [
    { label: "Events", href: "/events" },
    { label: "Laporan", href: "/laporan" },
    { label: "Tentang", href: "/tentang" },
    { label: "Kontak", href: "/kontak" },
  ],

  events: [
    {
      id: "evt-20260919",
      slug: "tigaraksa-september-2026",
      title: "Kunjungan ke Panti Asuhan Tigaraksa",
      date: "19 September 2026",
      dateMono: "19 SEP 2026",
      startTime: "07.30",
      endTime: "15.00",
      location: "Panti Asuhan [nama] Tigaraksa",
      district: "Tigaraksa, Kabupaten Tangerang",
      mapsUrl: "https://maps.google.com/?q=Tigaraksa,Tangerang",
      quota: 8,
      quotaTaken: 5,
      status: "open",
      description:
        "Satu hari penuh bersama anak-anak di Tigaraksa. Membaca, berhitung, makan siang bersama, dan ditutup dengan foto bersama atas izin pengurus.",
      tasks: [
        "Membaca dan berhitung bersama, satu relawan mendampingi dua anak",
        "Menyiapkan dan makan siang bersama pengurus panti",
        "Membersihkan dan merapikan ruang belajar setelah kegiatan",
      ],
      requirements: [
        "Usia minimal 18 tahun",
        "Hadir tepat waktu di titik kumpul Tigaraksa jam 07.30",
        "Berpakaian sopan dan nyaman, tanpa atribut berlebihan",
        "Tidak perlu membawa apa pun, alat belajar disiapkan komunitas",
      ],
      benefits: [
        "e-sertifikat setelah kegiatan",
        "Kartu identitas relawan selama kegiatan",
        "Dokumentasi kegiatan yang diunggah setelah acara",
      ],
      partnerPanti: "Panti Asuhan [nama] Tigaraksa",
      partnerDisplayed: true,
      timeline: [
        { time: "07.30", title: "Kumpul relawan", detail: "Titik kumpul Tigaraksa, briefing 20 menit" },
        { time: "09.00", title: "Tiba di panti", detail: "Salam, perkenalan, bagi kelompok kecil" },
        { time: "10.00", title: "Belajar bareng", detail: "Membaca dan berhitung, satu relawan dua anak" },
        { time: "12.00", title: "Makan siang bersama", detail: "Disiapkan bersama pengurus panti" },
        { time: "15.00", title: "Pamit", detail: "Foto bersama dengan izin pengurus" },
      ],
      amountPresets: [
        { amount: "Rp 50.000", equivalence: "Satu paket alat tulis", verified: true },
        { amount: "Rp 150.000", equivalence: "Makan siang untuk 10 anak", verified: true },
        { amount: "Rp 500.000", equivalence: "Biaya satu kunjungan", verified: true },
      ],
    } satisfies CommunityEvent,
    {
      id: "evt-20260823",
      slug: "tigaraksa-agustus-2026",
      title: "Kunjungan ke Tigaraksa, Agustus 2026",
      date: "23 Agustus 2026",
      dateMono: "23 AUG 2026",
      startTime: "08.00",
      endTime: "14.00",
      location: "Panti Asuhan [nama] Tigaraksa",
      district: "Tigaraksa, Kabupaten Tangerang",
      mapsUrl: "https://maps.google.com/?q=Tigaraksa,Tangerang",
      quota: 6,
      quotaTaken: 6,
      status: "done",
      description: "Kunjungan ketiga komunitas. Materi membaca untuk kelompok kecil.",
      tasks: [],
      requirements: [],
      benefits: [],
      partnerPanti: "Panti Asuhan [nama] Tigaraksa",
      partnerDisplayed: true,
      timeline: [
        { time: "08.00", title: "Kumpul relawan", detail: "Titik kumpul Tigaraksa" },
        { time: "09.30", title: "Tiba di panti", detail: "Salam dan bagi kelompok" },
        { time: "10.30", title: "Belajar bareng", detail: "Membaca untuk kelompok kecil" },
        { time: "12.00", title: "Makan siang", detail: "Bersama pengurus panti" },
        { time: "14.00", title: "Pamit", detail: "Foto bersama dengan izin pengurus" },
      ],
      amountPresets: [],
    } satisfies CommunityEvent,
  ],

  stats: {
    volunteers: "8",
    volunteersLabel: "relawan hadir pada kunjungan terakhir",
    hours: "52",
    hoursLabel: "jam kebersamaan",
    panti: "3",
    pantiLabel: "panti dikunjungi",
    children: "30",
    childrenLabel: "anak ikut serta",
    rupiah: "Rp 1.400.000",
    rupiahLabel: "dana tersalurkan sejauh ini",
  },

  howToJoin: [
    {
      step: "01",
      title: "Jadi relawan",
      body: "Lihat jadwal kunjungan, daftar dalam dua menit, dan datang. Kuota kecil supaya kehadiranmu berarti.",
      cta: { label: "Lihat events", href: "/events", kind: "primary" },
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
      slug: "tigaraksa-agustus-2026",
      eventId: "evt-20260823",
      title: "Kunjungan ke Tigaraksa, Agustus 2026",
      dateMono: "25 AUG 2026",
      place: "Tigaraksa",
      excerpt:
        "Enam relawan datang pagi itu dan pulang siang hari. Dua puluh empat anak ikut membaca dalam kelompok kecil.",
      narrative:
        "Kunjungan ketiga komunitas berlangsung di Tigaraksa. Enam relawan hadir, dan dua puluh empat anak ikut serta dalam kelompok membaca kecil. Kami memulai dengan perkenalan singkat, lalu membagi anak ke kelompok kecil dengan satu relawan untuk beberapa anak. Siang harinya kami makan bersama pengurus panti, lalu menutup hari dengan foto bersama atas izin pengurus.",
      stats: { volunteers: "6", hours: "36", children: "24" },
      funds: {
        received: "Rp 600.000",
        items: [
          { label: "Alat tulis dan buku bacaan", amount: "Rp 350.000" },
          { label: "Makan siang bersama", amount: "Rp 250.000" },
        ],
        remainder: "Rp 0",
        remainderLocation: "Tidak ada sisa dana",
      },
    },
    {
      slug: "tigaraksa-juli-2026",
      eventId: "evt-0000",
      title: "Kunjungan ke Tigaraksa, Juli 2026",
      dateMono: "28 JUL 2026",
      place: "Tigaraksa",
      excerpt:
        "Kunjungan kedua kami. Delapan relawan, lima puluh dua jam kebersamaan, dan tiga puluh anak ikut belajar bareng.",
      narrative:
        "Kunjungan kedua komunitas di Tigaraksa. Delapan relawan hadir dan tiga puluh anak ikut belajar bareng, mulai dari membaca, berhitung, hingga makan siang bersama. Hari ditutup dengan foto bersama atas izin pengurus.",
      stats: { volunteers: "8", hours: "52", children: "30" },
      funds: {
        received: "Rp 800.000",
        items: [
          { label: "Alat tulis", amount: "Rp 400.000" },
          { label: "Makan siang untuk 30 anak", amount: "Rp 400.000" },
        ],
        remainder: "Rp 0",
        remainderLocation: "Tidak ada sisa dana",
      },
    },
  ] satisfies Report[],

  about: {
    heading: "Tentang Hadir Sejenak",
    story: [
      "Hadir Sejenak lahir dari satu kekecewaan yang sederhana: banyak kunjungan ke panti berakhir tanpa bekas. Foto, lalu pulang. Kami memilih cara yang lain, datang, duduk, dengarkan, dan pulang membawa catatan yang bisa dibaca siapa pun.",
      "Kami komunitas, bukan platform. Relawan kami datang dari Kabupaten Tangerang dan sekitarnya, dan setiap kunjungan terdokumentasi jam per jamnya. Kehadiran dihitung dalam jam, bukan hanya rupiah.",
    ],
    team: [
      { firstName: "Zidan", role: "Penggerak" },
      { firstName: "[nama]", role: "Koordinator relawan" },
      { firstName: "[nama]", role: "Bendahara" },
    ],
    partners: ["Panti Asuhan [nama] Tigaraksa", "Panti Asuhan [nama] (proses)"],
    safeguarding:
      "Kami tidak menyimpan data pribadi anak, tidak menampilkan wajah anak di konteks komersial, dan setiap foto yang diunggah memerlukan izin tertulis dari pengurus panti.",
  },

  contact: {
    heading: "Kontak dan kerja sama",
    intro:
      "Untuk pertanyaan umum, kerja sama panti, atau penawaran sponsor, kirim pesan lewat salah satu kanal di bawah.",
  },

  privacy: {
    heading: "Kebijakan privasi",
    updated: "Diperbarui Agustus 2026",
    sections: [
      {
        title: "Data yang kami kumpulkan",
        body: "Data relawan (nama, nomor WhatsApp, email, umur, domisili) dan data donatur (nama, kontak untuk kuitansi). Kami tidak mengumpulkan data pribadi anak dalam bentuk apa pun.",
      },
      {
        title: "Tujuan penggunaan",
        body: "Data dipakai untuk koordinasi kegiatan, penerbitan e-sertifikat, dan pengiriman kuitansi donasi.",
      },
      {
        title: "Masa penyimpanan",
        body: "Data relawan dan donatur disimpan selama satu tahun setelah kegiatan, lalu dihapus.",
      },
      {
        title: "Permintaan penghapusan",
        body: "Kamu bisa meminta penghapusan data kapan saja lewat email halo@hadirsejenak.org. Kami proses dalam 30 hari.",
      },
      {
        title: "Notifikasi pelanggaran",
        body: "Jika terjadi pelanggaran data, kami memberi tahu pihak yang terdampak sesuai ketentuan yang berlaku.",
      },
    ],
  },

  safeguarding: {
    heading: "Perlindungan anak",
    sections: [
      {
        title: "Tanpa data anak",
        body: "Sistem tidak menyimpan nama, usia, metadata foto, atau lokasi yang terhubung ke anak tertentu.",
      },
      {
        title: "Izin sebelum tayang",
        body: "Setiap set foto yang diunggah harus memiliki izin tertulis dari pengurus panti sebelum dipublikasikan.",
      },
      {
        title: "Tanpa identitas gabungan",
        body: "Nama lengkap, wajah, dan lokasi tidak pernah tampil bersamaan. Laporan memakai nama depan saja, atau tanpa nama.",
      },
      {
        title: "Penarikan foto",
        body: "Pengurus panti atau wali bisa meminta penghapusan foto, dan penghapusan berlaku dalam 48 jam di seluruh kanal.",
      },
      {
        title: "Standar citra",
        body: "Tidak ada citra yang menyedihkan, kemiskinan yang dipentaskan, atau penyuntingan gelap. Ditinjau sebelum tayang.",
      },
    ],
  },
};

export const emptyState = {
  title: "Belum ada kegiatan bulan ini",
  body: "Kegiatan berikutnya diumumkan setiap awal bulan di Instagram.",
  cta: { label: "Ikuti @hadirsejenakk", href: "https://instagram.com/hadirsejenakk" },
};

/** Next upcoming event (first non-"done" event), or null. */
export function nextEvent(): CommunityEvent | null {
  const upcoming = site.events.filter((e) => e.status !== "done");
  return upcoming.length > 0 ? upcoming[0] : null;
}

/** Past events (status "done"), newest first. */
export function pastEvents(): CommunityEvent[] {
  return site.events.filter((e) => e.status === "done");
}

export function eventBySlug(slug: string): CommunityEvent | undefined {
  return site.events.find((e) => e.slug === slug);
}

export function reportBySlug(slug: string): Report | undefined {
  return site.reports.find((r) => r.slug === slug);
}