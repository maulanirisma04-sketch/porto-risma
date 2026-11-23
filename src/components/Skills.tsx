import { Code2, FileText, Palette, Table2, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/portfolio";

const groupIcons: Record<string, LucideIcon> = {
  "Programming & Database": Code2,
  "Data & Administration": Table2,
  "System Analysis & Documentation": FileText,
  "Creative & Digital Tools": Palette,
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-pad">
      <div className="container-page">
        <SectionHeading id="skills-title" eyebrow="Skills" title="Keahlian & Tools" />

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[group.title] ?? Code2;
            return (
              <Reveal key={group.title} delay={(i % 2) * 70} className="h-full">
                <article className="h-full rounded-xl border border-ink-line bg-white p-6">
                  <header className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-soft text-navy">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h3 className="font-display font-semibold text-navy">{group.title}</h3>
                  </header>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-ink-line bg-white px-3 py-1.5 text-sm text-ink transition-colors hover:border-sky-accent hover:bg-sky-soft/60"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
