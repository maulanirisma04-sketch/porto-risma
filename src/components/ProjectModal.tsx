"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, FileSpreadsheet, FileText, Info, X } from "lucide-react";
import ButtonLink from "@/components/ui/Button";
import { GithubIcon, InstagramIcon } from "@/components/ui/BrandIcons";
import ProjectVisual from "@/components/ProjectVisual";
import type { Project, ProjectLink } from "@/data/portfolio";

function linkIcon(kind: ProjectLink["kind"]) {
  const cls = "h-4 w-4";
  switch (kind) {
    case "github":
      return <GithubIcon className={cls} />;
    case "instagram":
      return <InstagramIcon className={cls} />;
    case "spreadsheet":
      return <FileSpreadsheet className={cls} aria-hidden="true" />;
    case "document":
      return <FileText className={cls} aria-hidden="true" />;
    default:
      return <ExternalLink className={cls} aria-hidden="true" />;
  }
}

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Focus trap sederhana
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-navy-900/50 p-0 animate-fade-in sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[92vh] w-full max-w-2xl animate-modal-in overflow-y-auto rounded-t-2xl bg-white shadow-xl sm:rounded-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Tutup detail project"
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm hover:bg-white"
        >
          <X size={18} />
        </button>

        <ProjectVisual slug={project.slug} className="h-40 w-full" />

        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-deep">
            {project.category}
          </p>
          <h3
            id="project-modal-title"
            className="mt-2 font-display text-2xl font-semibold leading-snug text-navy"
          >
            {project.title}
          </h3>

          <div className="mt-5 space-y-3 leading-relaxed text-ink-muted">
            {project.details.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-6 grid gap-5 border-t border-ink-line pt-6 sm:grid-cols-2">
            {project.role ? (
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Role
                </dt>
                <dd className="mt-1.5 text-sm font-medium text-navy">{project.role}</dd>
              </div>
            ) : null}
            {project.tools.length > 0 ? (
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                  Tools &amp; Fokus
                </dt>
                <dd className="mt-1.5 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md bg-sky-soft px-2.5 py-1 text-xs font-medium text-navy"
                    >
                      {tool}
                    </span>
                  ))}
                </dd>
              </div>
            ) : null}
          </dl>

          {project.note ? (
            <p className="mt-6 flex items-start gap-2.5 rounded-lg bg-sky-soft/60 p-3.5 text-sm text-navy">
              <Info size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
              <span>{project.note}</span>
            </p>
          ) : null}

          {project.links.length > 0 ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <ButtonLink key={link.href} href={link.href} icon={linkIcon(link.kind)}>
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
