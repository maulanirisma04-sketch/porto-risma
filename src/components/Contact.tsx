import { Mail, MapPin } from "lucide-react";
import ButtonLink from "@/components/ui/Button";
import { LinkedinIcon } from "@/components/ui/BrandIcons";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const items = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <Mail size={20} aria-hidden="true" />,
    },
    {
      label: "LinkedIn",
      value: "Risma Maulani",
      href: profile.linkedin,
      icon: <LinkedinIcon className="h-5 w-5" />,
    },
    {
      label: "Location",
      value: profile.location,
      icon: <MapPin size={20} aria-hidden="true" />,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-pad bg-navy text-white"
    >
      <div className="container-page">
        <header className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-sky-accent">
            Contact
          </p>
          <h2
            id="contact-title"
            className="font-display text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Mari Terhubung
          </h2>
          <p className="mt-4 leading-relaxed text-white/70">
            Terbuka untuk kesempatan kerja. Silakan hubungi saya melalui email atau
            LinkedIn.
          </p>
        </header>

        <Reveal>
          <ul className="grid gap-4 sm:grid-cols-3">
            {items.map((item) => {
              const content = (
                <>
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sky-soft">
                    {item.icon}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                    {item.label}
                  </p>
                  <p className="mt-1 break-words text-sm font-medium">{item.value}</p>
                </>
              );
              const cls =
                "block h-full rounded-xl border border-white/15 p-5 transition-colors";
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`${cls} hover:border-sky-accent hover:bg-white/5`}
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {content}
                    </a>
                  ) : (
                    <div className={cls}>{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-8">
            <ButtonLink
              href={`mailto:${profile.email}`}
              className="!bg-white !text-navy hover:!bg-sky-soft"
              icon={<Mail size={16} aria-hidden="true" />}
            >
              Kirim Email
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
