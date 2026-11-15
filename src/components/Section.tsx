export function Section({
  id,
  eyebrow,
  title,
  accent,
  intro,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative isolate overflow-hidden py-20 md:py-28 ${className}`}>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <p className="chip !py-1 !text-xs uppercase tracking-[0.14em] text-muted">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-display text-4xl font-light tracking-tight md:text-5xl">
          {title}{" "}
          <span className="accent-text font-extrabold italic">{accent}</span>
        </h2>
        {intro && (
          <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
            {intro}
          </p>
        )}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-accent/40 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
      {children}
    </span>
  );
}
