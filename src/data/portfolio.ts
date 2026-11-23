/**
 * Semua konten portfolio ada di file ini.
 * Edit di sini untuk mengubah teks, link, dan data tanpa menyentuh komponen.
 */

export const profile = {
  name: "Risma Maulani",
  initials: "RISMA",
  location: "Bandung, Indonesia",
  email: "maulanirisma04@gmail.com",
  linkedin: "https://www.linkedin.com/in/risma-maulani-b021b32b1/",
  headline: "Information Systems Graduate | System Analysis | Data & Administration",
  heroDescription:
    "Bachelor's degree in Information Systems with experience in system analysis, business process documentation, data management, and digital marketing.",
  summary:
    "A graduate with a Bachelor's degree in Information Systems with internship experience in System Analysis as well as Marketing & Sales Support, and work experience in operational administration and digital marketing. Has experience in system requirement analysis, business process documentation, system testing, data management, and creating digital content.",
  /** Letakkan file CV di folder /public dengan nama ini. */
  cvPath: "/cv-risma.pdf",
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
      "The basics of developing web-based information systems with Laravel, PHP, and MySQL.",
    icon: "laptop",
  },
  {
    title: "System Analysis & Documentation",
    description:
      "Requirement analysis, preparing the SRS, flowchart, use case diagram, and manual testing.",
    icon: "file",
  },
  {
    title: "Data Processing & Administration",
    description:
      "Managing data, recording, reporting, and operational administration using Excel.",
    icon: "database",
  },
  {
    title: "Digital Marketing & Content Creation",
    description:
      "Creating digital content and promotional materials for social media using Canva and CapCut.",
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
      "A web-based information system to help manage patient data, visits, and medical records in a midwife's private practice.",
    details: [
      "SA web-based information system to help manage patient data, visits, and medical records in a midwife's private practice.",
      "Developed with Laravel, PHP, and MySQL. The source code available on GitHub",
    ],
    // Role belum disediakan — isi di sini jika ingin ditampilkan, contoh: role: "Developer",
    tools: ["Laravel", "PHP", "MySQL"],
    links: [
      {
        label: "View on GitHub",
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
      "Involved in supporting the development and digitalization of cooperative financial institution services through the IBS Lite project at PT USSI.",
    details: [
      "Involved in supporting the development and digitalization of cooperative financial institution services through the IBS Lite project at PT USSI.",
      "My contribution is on the marketing & sales support side, in line with my position as a Marketing & Sales Support Intern.",
    ],
    role: "Marketing & Sales Support Intern",
    tools: [],
    links: [],
    note: "Internal docs, client info, and confidential company data aren’t shown.",
  },
  {
    slug: "system-requirement-specification",
    title: "System Requirement Specification (SRS)",
    category: "System Analysis & Documentation",
    description:
      "System requirements documentation to support communication between user needs and the development team.",
    details: [
      "System requirements documentation to support communication between user needs and the development team.",
    ],
    tools: ["SRS", "Dokumentasi Sistem"],
    links: [
      {
        label: "Explore Documentation",
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
      "A case study on data processing using Microsoft Excel, including data management, using formulas, and organizing information for analysis purposes.",
    details: [
      "A case study on data processing using Microsoft Excel, including data management, using formulas, and organizing information for analysis purposes.",
    ],
    tools: ["Microsoft Excel"],
    links: [
      {
        label: "View Project Documentation",
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
      "Manual system testing documentation to check if the application's functions match the specified requirements.",
    details: [
      "Manual system testing documentation to check if the application's functions match the specified requirements.",
    ],
    tools: ["Manual Testing"],
    links: [
      {
        label: "View Project Documentation",
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
      "Creating English educational content, promotional content for learning programs, and visual materials for The Alpha Indonesia's social media.",
    details: [
      "Creating English educational content, promotional content for learning programs, and visual materials for The Alpha Indonesia's social media.",
    ],
    role: "Admin & Marketing Staff",
    tools: ["Konten Edukasi", "Media Sosial"],
    links: [
      {
        label: "Check Instagram",
        href: "https://www.instagram.com/the_alpha_id/",
        kind: "instagram",
      },
    ],
    note: "Managed and created Instagram content for The Alpha Indonesia, including content planning, visual design, copywriting, and post preparation. All published content from the account's initial posts through November 11, 2026, was created by me.",
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
