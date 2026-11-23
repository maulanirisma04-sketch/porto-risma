import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import ButtonLink from "@/components/ui/Button";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const [role, ...focus] = profile.headline.split("|").map((s) => s.trim());

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      <div className="container-page grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:py-28">
        <div className="animate-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-soft px-3.5 py-1.5 text-xs font-medium text-navy">
            <MapPin size={14} aria-hidden="true" />
            {profile.location}
          </p>

          <h1
            id="hero-title"
            className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </h1>

          <p className="mt-5 text-base font-medium text-sky-deep sm:text-lg">
            {[role, ...focus].join("  ·  ")}
          </p>

          <p className="mt-5 max-w-xl leading-relaxed text-ink-muted">
            {profile.heroDescription}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink
              href="#projects"
              icon={<ArrowRight size={16} aria-hidden="true" />}
            >
              View My Projects
            </ButtonLink>
            <ButtonLink
              href={profile.cvPath}
              variant="secondary"
              download
              icon={<Download size={16} aria-hidden="true" />}
            >
              Download CV
            </ButtonLink>
            <ButtonLink
              href="#contact"
              variant="ghost"
              icon={<Mail size={16} aria-hidden="true" />}
            >
              Contact Me
            </ButtonLink>
          </div>
        </div>

        {/* Visual profil: foto jika tersedia, jika tidak tipografi inisial */}
        <div
          className="mx-auto w-full max-w-xs animate-fade-up lg:max-w-sm"
          style={{ animationDelay: "0.12s" }}
        >
          <div className="relative aspect-square">
            <div
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-sky-accent/50"
              aria-hidden="true"
            />
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-navy">
              {profile.photoPath ? (
                <Image
                  src={profile.photoPath}
                  alt={`Foto profil ${profile.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 320px, 384px"
                  className="object-cover"
                />
              ) : (
                <>
                  <span
                    className="select-none font-display text-8xl font-bold tracking-tight text-sky-soft sm:text-9xl"
                    aria-hidden="true"
                  >
                    RM
                  </span>
                  <span className="sr-only">Inisial {profile.name}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
