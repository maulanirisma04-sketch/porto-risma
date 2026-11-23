/**
 * Semua konten portfolio ada di file ini.
 * Edit di sini untuk mengubah teks, link, dan data tanpa menyentuh komponen.
 */

export const profile = {
  name: "Risma Maulani",
  initials: "RM",
  location: "Bandung, Indonesia",
  email: "maulanirisma04@gmail.com",
  linkedin: "https://www.linkedin.com/in/risma-maulani-b021b32b1/",
  headline: "Information Systems Graduate | System Analysis | Data & Administration",
  heroDescription:
    "Lulusan S1 Sistem Informasi dengan pengalaman di bidang system analysis, dokumentasi proses bisnis, pengelolaan data, dan digital marketing.",
  summary:
    "Lulusan S1 Sistem Informasi dengan pengalaman magang di bidang System Analysis serta Marketing & Sales Support, dan pengalaman kerja dalam administrasi operasional serta digital marketing. Memiliki pengalaman dalam analisis kebutuhan sistem, dokumentasi proses bisnis, pengujian sistem, pengelolaan data, dan pembuatan konten digital.",
  /** Letakkan file CV di folder /public dengan nama ini. */
  cvPath: "/cv-risma-maulani.pdf",
  /**
   * Foto profil (opsional). Letakkan foto di /public lalu isi path-nya,
   * contoh: "/profile.jpg". Jika null, tampil inisial RM.
   */
  photoPath: "/profile.jpeg" as string | null,
  siteUrl: "https://risma-maulani.vercel.app",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export type CompetencyIcon = "laptop" | "file" | "database" | "megaphone";

export const competencies: {
  title: string;
  description: string;
  icon: CompetencyIcon;
}[] = [
  {
    title: "Information Systems & Technology",
    description:
      "Dasar pengembangan sistem informasi berbasis web dengan Laravel, PHP, dan MySQL.",
    icon: "laptop",
  },
  {
    title: "System Analysis & Documentation",
    description:
      "Analisis kebutuhan, penyusunan SRS, flowchart, use case diagram, dan pengujian manual.",
    icon: "file",
  },
  {
    title: "Data Processing & Administration",
    description:
      "Pengelolaan data, pencatatan, pelaporan, dan administrasi operasional menggunakan Excel.",
    icon: "database",
  },
  {
    title: "Digital Marketing & Content Creation",
    description:
      "Pembuatan konten digital dan materi promosi untuk media sosial dengan Canva dan CapCut.",
    icon: "megaphone",
  },
];

export const education = {
  degree: "S1 Sistem Informasi",
  school: "STMIK AMIKBANDUNG",
  graduationYear: "2026",
};

export type Experience = {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
};

export const experiences: Experience[] = [
  {
    company: "The Alpha Indonesia",
    position: "Admin & Marketing Staff",
    period: "September 2026 – November 2026",
    responsibilities: [
      "Mengelola dan memperbarui data siswa.",
      "Mengelola administrasi pendaftaran siswa baru.",
      "Melakukan pencatatan dan pengelolaan data pembayaran siswa.",
      "Mendukung kegiatan administrasi operasional dan pemasaran online maupun offline.",
      "Mengelola media sosial dan membuat konten digital untuk kebutuhan pemasaran.",
    ],
  },
  {
    company: "PT USSI",
    position: "Marketing & Sales Support Intern",
    period: "September 2025 – March 2026",
    responsibilities: [
      "Mengelola dan menyiapkan dokumentasi produk serta kebutuhan customer seperti user manual, user journey, product knowledge, dan flowchart.",
      "Melakukan follow-up kepada calon customer serta mencatat informasi dan kebutuhan yang disampaikan.",
      "Membantu customer support dalam memberikan informasi terkait produk dan layanan serta mendukung penanganan laporan bug.",
      "Membuat dokumentasi dan materi promosi menggunakan tools digital.",
      "Mendukung pelaksanaan training serta koordinasi kebutuhan administrasi kegiatan.",
    ],
  },
  {
    company: "Digyta – PT Digital Agensi Nusantara",
    position: "System Analyst Intern",
    period: "February 2025 – June 2025",
    responsibilities: [
      "Menganalisis kebutuhan dan proses bisnis untuk mendukung pengembangan sistem.",
      "Menyusun dokumentasi sistem seperti Software Requirements Specification (SRS), flowchart, use case diagram, dan struktur data.",
      "Melakukan pengujian sistem secara manual untuk memastikan fungsi berjalan sesuai kebutuhan.",
      "Mendukung dokumentasi dan koordinasi informasi antara kebutuhan pengguna dan tim pengembangan.",
    ],
  },
];

export type ProjectLink = {
  label: string;
  href: string;
  kind: "github" | "document" | "spreadsheet" | "instagram";
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  /** Teks tambahan di modal detail. Hanya berisi hal yang sudah pasti benar. */
  details: string[];
  role?: string;
  tools: string[];
  links: ProjectLink[];
  /** Catatan kecil yang tampil di modal (mis. batasan konfidensialitas). */
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "patient-data-management-system",
    title: "Web-Based Patient Data Management System",
    category: "Information System Development",
    description:
      "Sistem informasi berbasis web untuk membantu pengelolaan data pasien, kunjungan, dan rekam medis pada praktik mandiri bidan.",
    details: [
      "Sistem informasi berbasis web untuk membantu pengelolaan data pasien, kunjungan, dan rekam medis pada praktik mandiri bidan.",
      "Dikembangkan dengan Laravel, PHP, dan MySQL. Source code tersedia di GitHub.",
    ],
    // Role belum disediakan — isi di sini jika ingin ditampilkan, contoh: role: "Developer",
    tools: ["Laravel", "PHP", "MySQL"],
    links: [
      {
        label: "Lihat di GitHub",
        href: "https://github.com/maulanirisma04-sketch/skripsi",
        kind: "github",
      },
    ],
  },
  {
    slug: "ibs-lite-cooperative-digitalization",
    title: "IBS Lite – Cooperative Digitalization",
    category: "Business Process & Digitalization",
    description:
      "Terlibat dalam dukungan pengembangan dan digitalisasi layanan lembaga keuangan koperasi melalui proyek IBS Lite di PT USSI.",
    details: [
      "Terlibat dalam dukungan pengembangan dan digitalisasi layanan lembaga keuangan koperasi melalui proyek IBS Lite di PT USSI.",
      "Kontribusi berada pada sisi dukungan marketing & sales, sesuai posisi sebagai Marketing & Sales Support Intern.",
    ],
    role: "Marketing & Sales Support Intern",
    tools: [],
    links: [],
    note: "Dokumen internal, informasi klien, dan data rahasia perusahaan tidak ditampilkan.",
  },
  {
    slug: "system-requirement-specification",
    title: "System Requirement Specification (SRS)",
    category: "System Analysis & Documentation",
    description:
      "Dokumentasi kebutuhan sistem untuk mendukung komunikasi antara kebutuhan pengguna dan tim pengembangan.",
    details: [
      "Dokumentasi kebutuhan sistem untuk mendukung komunikasi antara kebutuhan pengguna dan tim pengembangan.",
    ],
    tools: ["SRS", "Dokumentasi Sistem"],
    links: [
      {
        label: "Buka Dokumentasi",
        href: "https://docs.google.com/document/d/1LUrztGOtTLwDYYAaXxJh7IqJQ3yp_4260-dGmCqmDm4/edit",
        kind: "document",
      },
    ],
  },
  {
    slug: "excel-data-processing",
    title: "Excel Data Processing",
    category: "Data Processing & Reporting",
    description:
      "Studi kasus pengolahan data menggunakan Microsoft Excel, termasuk pengelolaan data, penggunaan formula, dan penyusunan informasi untuk kebutuhan analisis.",
    details: [
      "Studi kasus pengolahan data menggunakan Microsoft Excel, termasuk pengelolaan data, penggunaan formula, dan penyusunan informasi untuk kebutuhan analisis.",
    ],
    tools: ["Microsoft Excel"],
    links: [
      {
        label: "Buka Dokumentasi",
        href: "https://docs.google.com/document/d/1f23Hx5okaocVqbgetxq-m00JpdQIY_of/edit",
        kind: "document",
      },
    ],
  },
  {
    slug: "software-quality-assurance-testing",
    title: "Software Quality Assurance & Testing",
    category: "Software Testing",
    description:
      "Dokumentasi pengujian sistem secara manual untuk memeriksa kesesuaian fungsi aplikasi dengan kebutuhan yang ditentukan.",
    details: [
      "Dokumentasi pengujian sistem secara manual untuk memeriksa kesesuaian fungsi aplikasi dengan kebutuhan yang ditentukan.",
    ],
    tools: ["Manual Testing"],
    links: [
      {
        label: "Buka Dokumentasi",
        href: "https://docs.google.com/spreadsheets/d/14KdM2P66J-Obzxj9j-XXXCr4j7NJTPbsoIDoxuCeb5Y/edit",
        kind: "spreadsheet",
      },
    ],
  },
  {
    slug: "digital-marketing-social-media-content",
    title: "Digital Marketing & Social Media Content",
    category: "Digital Marketing & Content Creation",
    description:
      "Pembuatan konten edukasi bahasa Inggris, konten promosi program pembelajaran, dan materi visual untuk media sosial The Alpha Indonesia.",
    details: [
      "Pembuatan konten edukasi bahasa Inggris, konten promosi program pembelajaran, dan materi visual untuk media sosial The Alpha Indonesia.",
    ],
    role: "Admin & Marketing Staff",
    tools: ["Konten Edukasi", "Media Sosial"],
    links: [
      {
        label: "Lihat Instagram",
        href: "https://www.instagram.com/the_alpha_id/",
        kind: "instagram",
      },
    ],
  },
];

export const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "Programming & Database",
    skills: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Data & Administration",
    skills: ["Microsoft Excel", "Data Processing", "Data Management", "Reporting"],
  },
  {
    title: "System Analysis & Documentation",
    skills: [
      "System Documentation",
      "Software Requirements Specification (SRS)",
      "Flowchart",
      "Use Case Diagram",
      "Manual Software Testing",
    ],
  },
  {
    title: "Creative & Digital Tools",
    skills: ["Canva", "CapCut", "Git", "GitHub"],
  },
];
