import { Briefcase } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-pad"
    >
      <div className="container-page">
        <SectionHeading
          id="experience-title"
          eyebrow="Work Experience"
          title="Pengalaman Kerja & Magang"
        />

        <ol className="relative space-y-8 border-l border-ink-line pl-8 sm:pl-10">
          {experiences.map((exp, i) => (
            <li key={`${exp.company}-${exp.period}`} className="relative">
              <span
                className="absolute -left-[2.8rem] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-ink-line bg-white text-navy sm:-left-[3.3rem]"
                aria-hidden="true"
              >
                <Briefcase size={15} />
              </span>

              <Reveal delay={i * 60}>
                <article className="rounded-xl border border-ink-line bg-white p-6 transition-colors hover:border-sky-accent sm:p-7">
                  <header className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-navy">
                        {exp.position}
                      </h3>
                      <p className="text-sm font-medium text-sky-deep">{exp.company}</p>
                    </div>
                    <p className="shrink-0 rounded-full bg-sky-soft px-3 py-1 text-xs font-medium text-navy">
                      {exp.period}
                    </p>
                  </header>

                  <ul className="mt-5 space-y-2.5">
                    {exp.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-accent"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
