"use client";

import { useCallback, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import ProjectModal from "@/components/ProjectModal";
import ProjectVisual from "@/components/ProjectVisual";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects, type Project } from "@/data/portfolio";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section-pad bg-sky-soft/40"
    >
      <div className="container-page">
        <SectionHeading
          id="projects-title"
          eyebrow="Featured Projects"
          title="Project Pilihan"
          description="Kumpulan project di bidang pengembangan sistem, analisis dan dokumentasi, pengolahan data, serta konten digital."
        />

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <Reveal delay={(i % 3) * 70} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-line bg-white transition-colors hover:border-sky-accent">
                  <ProjectVisual slug={project.slug} className="h-32 w-full" />

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-deep">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-navy">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                      {project.description}
                    </p>

                    {project.role ? (
                      <p className="mt-4 text-xs text-ink-muted">
                        <span className="font-semibold text-navy">Role:</span>{" "}
                        {project.role}
                      </p>
                    ) : null}

                    {project.tools.length > 0 ? (
                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tools">
                        {project.tools.map((tool) => (
                          <li
                            key={tool}
                            className="rounded-md bg-sky-soft px-2.5 py-1 text-xs font-medium text-navy"
                          >
                            {tool}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    <button
                      type="button"
                      onClick={() => setSelected(project)}
                      aria-haspopup="dialog"
                      aria-label={`Lihat detail: ${project.title}`}
                      className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-navy transition-colors hover:text-sky-deep"
                    >
                      Lihat Detail
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <ProjectModal project={selected} onClose={close} />
    </section>
  );
}
