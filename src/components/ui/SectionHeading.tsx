type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-sky-deep">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 leading-relaxed text-ink-muted">{description}</p>
      ) : null}
    </header>
  );
}
