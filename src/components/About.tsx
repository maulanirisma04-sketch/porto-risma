import { Database, FileText, GraduationCap, Laptop, Megaphone } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { competencies, education, profile, type CompetencyIcon } from "@/data/portfolio";

const icons: Record<CompetencyIcon, typeof Laptop> = {
  laptop: Laptop,
  file: FileText,
  database: Database,
  megaphone: Megaphone,
};

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section-pad bg-sky-soft/40"
    >
      <div className="container-page">
        <SectionHeading id="about-title" eyebrow="About Me" title="Profil Profesional" />

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="leading-relaxed text-ink-muted">{profile.summary}</p>

            <div className="mt-8 flex items-start gap-4 rounded-xl border border-ink-line bg-white p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-soft text-navy">
                <GraduationCap size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display font-semibold text-navy">
                  {education.degree}
                </h3>
                <p className="text-sm text-ink-muted">{education.school}</p>
                <p className="mt-1 text-xs text-ink-muted">
                  Graduation Year: {education.graduationYear}
                </p>
              </div>
            </div>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {competencies.map((item, i) => {
              const Icon = icons[item.icon];
              return (
                <li key={item.title}>
                  <Reveal delay={i * 70} className="h-full">
                    <article className="h-full rounded-xl border border-ink-line bg-white p-5 transition-colors hover:border-sky-accent">
                      <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-sky-soft">
                        <Icon size={20} aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-base font-semibold leading-snug text-navy">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                        {item.description}
                      </p>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
