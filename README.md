# Hadir Sejenak

Landing page (beranda) untuk **Hadir Sejenak**, komunitas relawan yang mengunjungi panti asuhan dan anak-anak yang membutuhkan.

> **Datang, duduk, dengarkan.** Kehadiran dihitung dalam jam, bukan hanya rupiah.

Situs dibangun mengikuti [Style Guideline v0.1](./styleguide) dan [PRD](./docs) Hadir Sejenak: kehadiran diutamakan di atas donasi, tanpa salinan rasa bersalah, tanpa citra anak yang meresahkan.

## Stack

- **React 19** + **Vite 8**
- **TypeScript** (`.tsx`)
- Plain CSS dengan design tokens (CSS variables) — tanpa CSS framework, sesuai token yang tertera di style guide.

## Struktur

```
src/
  components/   # Button, JamKunjungan, Stat, Badge, ReportCard, Header, Footer
  sections/     # Hero, NextEvent, PresenceStats, HowToJoin, LatestReports, About
  data/         # site.ts — single source of truth untuk konten (meniru model CMS di PRD §8)
  styles/       # tokens.css, global.css, components.css
```

## Menjalankan lokal

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build produksi ke dist/
npm run preview   # pratinjau build produksi
```

## Catatan

Konten saat ini berupa data tiruan (mock) di `src/data/site.ts`. Formulir donasi, pendaftaran, dan CMS belum ada pada rilis ini — tombol menautkan ke rute yang direncanakan di PRD.