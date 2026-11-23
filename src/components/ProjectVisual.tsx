import {
  BarChart3,
  ClipboardCheck,
  FileText,
  Layers,
  Megaphone,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

/**
 * Visual placeholder netral untuk project yang belum punya screenshot.
 * Sengaja berupa ikon + pola garis, bukan gambar yang menyerupai hasil project asli.
 */
const iconBySlug: Record<string, LucideIcon> = {
  "patient-data-management-system": Stethoscope,
  "ibs-lite-cooperative-digitalization": Layers,
  "system-requirement-specification": FileText,
  "excel-data-processing": BarChart3,
  "software-quality-assurance-testing": ClipboardCheck,
  "digital-marketing-social-media-content": Megaphone,
};

type ProjectVisualProps = {
  slug: string;
  className?: string;
};

export default function ProjectVisual({ slug, className = "" }: ProjectVisualProps) {
  const Icon = iconBySlug[slug] ?? Layers;
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-sky-soft ${className}`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full text-sky-accent/25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`grid-${slug}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${slug})`} />
      </svg>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-sky-soft">
        <Icon size={26} />
      </span>
    </div>
  );
}
