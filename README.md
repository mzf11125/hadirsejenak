# Hadir Sejenak

Official website untuk **Hadir Sejenak**, sebuah ruang sosial yang dibangun di atas kehadiran, empati, dan tindakan bermakna. Didirikan oleh Maifi Setya Cahyani, Mei 2026.

> **Sejenak hadir, selamanya berarti.**
> A social space built on presence, empathy, and meaningful action.

## Stack

- **React 19** + **Vite 8**
- **TypeScript** (`.tsx`)
- Plain CSS dengan design tokens (CSS variables), tanpa CSS framework

## Struktur

```
src/
  components/   # Button, SectionHead, Stat, Badge, Eyebrow, Header, Footer
  sections/     # HomeHero, WhatIs, WhyWeExist, ImpactStrip, CtaBand
  pages/        # Home, Tentang, Kegiatan, Donasi, Kolaborasi, Perjalanan, Bergabung, FAQ, Kontak, legal
  data/         # site.ts — single source of truth untuk konten
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

Konten seluruh situs ada di `src/data/site.ts`. Aturan gaya konten: teks yang terlihat oleh pengguna tidak memakai em dash, hyphen, atau semicolon. Nama founder dinormalisasi menjadi Maifi Setya Cahyani (bentuk pendek Maifi). Rupiah memakai format titik Indonesia (contoh: Rp 5.058.000).
