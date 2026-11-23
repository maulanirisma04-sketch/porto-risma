# Portfolio — Risma Maulani

Personal portfolio website dengan konsep Minimalist Professional.
Dibangun dengan **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, dan **Lucide React**.

## Menjalankan di Lokal

Butuh Node.js 18.18 atau lebih baru.

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

Perintah lain:

```bash
npm run build   # build production
npm run start   # jalankan hasil build
```

## Struktur Folder

```
risma-portfolio/
├── public/
│   └── cv-risma-maulani.pdf      ← PLACEHOLDER, ganti dengan CV asli
├── src/
│   ├── app/
│   │   ├── layout.tsx            # font, SEO metadata, skip link
│   │   ├── page.tsx              # susunan section + JSON-LD
│   │   ├── globals.css           # Tailwind + animasi reveal + smooth scroll
│   │   └── icon.svg              # favicon "RM"
│   ├── components/
│   │   ├── Navbar.tsx            # sticky + menu mobile
│   │   ├── Hero.tsx
│   │   ├── About.tsx             # profil, pendidikan, 4 kompetensi
│   │   ├── Experience.tsx        # timeline
│   │   ├── Projects.tsx          # grid card
│   │   ├── ProjectModal.tsx      # modal detail project
│   │   ├── ProjectVisual.tsx     # visual placeholder (bukan screenshot palsu)
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ui/                   # Button, Reveal, SectionHeading, BrandIcons
│   └── data/
│       └── portfolio.ts          # ← SEMUA KONTEN ada di sini
├── tailwind.config.ts            # warna navy & soft blue
└── package.json
```

## Mengedit Konten

Hampir semua teks, link, pengalaman, project, dan skill ada di
`src/data/portfolio.ts`. Ubah di file itu, komponen akan mengikuti otomatis.

Menambah project baru: tambahkan satu objek di array `projects`
(`slug`, `title`, `category`, `description`, `details`, `tools`, `links`).
Kartu dan modal detail akan muncul sendiri. Tambahkan juga ikon di
`iconBySlug` pada `ProjectVisual.tsx` jika ingin ikon khusus
(jika tidak, dipakai ikon default).

## File yang Perlu Diganti / Ditambahkan

| Item | Lokasi | Keterangan |
| --- | --- | --- |
| **CV PDF** | `public/cv-risma-maulani.pdf` | File saat ini hanya placeholder. Timpa dengan CV asli, nama file harus sama. Atau ubah `cvPath` di `portfolio.ts`. |
| **Foto profil** (opsional) | `public/profile.jpg` | Lalu set `photoPath: "/profile.jpg"` di `portfolio.ts`. Jika kosong, tampil inisial RM. Disarankan rasio persegi. |
| **Screenshot project** (opsional) | `public/projects/...` | Saat ini memakai visual placeholder. Pastikan screenshot tidak memuat data klien/pasien/rahasia perusahaan. |
| **Role project 1** (opsional) | `portfolio.ts` | Role belum diberikan, jadi tidak ditampilkan. Isi field `role` jika ingin. |
| **URL situs** | `siteUrl` di `portfolio.ts` | Ganti dengan domain Vercel asli setelah deploy agar metadata SEO/Open Graph benar. |

## Deploy ke Vercel

### Lewat GitHub (disarankan)

1. Buat repository baru di GitHub, lalu push project ini:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
2. Buka https://vercel.com, login, klik **Add New → Project**.
3. Import repository tadi. Vercel otomatis mengenali Next.js, jadi tidak ada
   setting yang perlu diubah.
4. Klik **Deploy**. Setelah selesai, kamu mendapat URL `*.vercel.app`.
5. Update `siteUrl` di `src/data/portfolio.ts` dengan URL tersebut, commit, dan push.
   Vercel akan deploy ulang otomatis.

### Lewat Vercel CLI

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

## Catatan

- Semua link eksternal memakai `target="_blank"` dan `rel="noopener noreferrer"`.
- Link Google Docs/Sheets harus diatur **"Anyone with the link can view"** agar bisa dibuka recruiter.
- Project IBS Lite sengaja tidak menampilkan dokumen internal atau data klien.
- Animasi menghormati pengaturan `prefers-reduced-motion`.
