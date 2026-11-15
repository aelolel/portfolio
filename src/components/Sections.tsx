import { ArrowUpRight, Award, GraduationCap, MapPin, Trophy } from "lucide-react";
import {
  achievements,
  certifications,
  education,
  languages,
  leadership,
  profile,
  skillGroups,
  socials,
  stats,
  workExperience,
  type Experience,
} from "@/data/portfolio";
import { Placeholder, Section } from "./Section";
import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, WhatsappIcon } from "./icons";
import { CvButton } from "./Hero";
import { Logo } from "./Logo";

/* ---------------- ABOUT ---------------- */

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A quick" accent="snapshot">
      <div className="blob -right-40 top-0 h-[360px] w-[420px] bg-sky/50" />
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <p className="text-lg leading-relaxed text-ink/85 md:text-xl md:leading-relaxed">
            {profile.bio}
          </p>
          <p className="mt-5 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} /> {profile.location}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-3xl p-6">
              <p className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                {s.value}
                <span className="text-lg font-semibold text-muted">{s.suffix}</span>
              </p>
              <p className="mt-2 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- EXPERIENCE ---------------- */

function Timeline({ title, items }: { title: string; items: Experience[] }) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold">{title}</h3>
      <ol className="relative mt-6 space-y-5 border-l border-ink/10 pl-6">
        {items.map((e) => (
          <li key={e.org + e.role} className="relative">
            <span className="absolute -left-[29.5px] top-6 h-3 w-3 rounded-full border-2 border-white bg-accent shadow" />
            <div className="glass rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <Logo src={e.logo} name={e.org} />
                <div className="min-w-0">
                  <p className="font-display text-lg font-bold leading-snug">{e.role}</p>
                  <p className="text-sm text-ink/75">{e.org}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                    {e.date || <Placeholder>Date TBA</Placeholder>}
                  </p>
                </div>
              </div>
              <ul className="mt-3 space-y-1.5 text-[0.93rem] leading-relaxed text-ink/80">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <span className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've"
      accent="worked & led"
      intro="Hands-on work across web development, client relations and running a business, plus leadership roles in student organizations."
    >
      <div className="blob -left-40 top-40 h-[400px] w-[420px] bg-lime/60" />
      <div className="grid gap-12 lg:grid-cols-2">
        <Timeline title="Work & Internship" items={workExperience} />
        <Timeline title="Leadership & Organizations" items={leadership} />
      </div>
    </Section>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Business case"
      accent="competitions"
      intro="Where I practice the business side of data: diagnosing a real company's problem, sizing the opportunity, and pitching a strategy with the numbers behind it."
    >
      <div className="blob -right-32 top-24 h-[380px] w-[420px] bg-mint" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {achievements.filter((a) => a.title).map((a) => {
          const big = a.highlight;
          return (
            <article
              key={a.event}
              className={`glass flex flex-col rounded-3xl p-6 ${
                big ? "md:col-span-2 lg:col-span-2 lg:row-span-2 lg:p-8" : ""
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-display text-sm font-bold ${
                    big ? "bg-ink text-white" : "bg-accent/10 text-accent-deep"
                  }`}
                >
                  {big ? <Trophy size={15} /> : <Award size={15} />}
                  {a.rank}
                </span>
                {a.date && <span className="text-xs text-muted">{a.date}</span>}
              </div>
              <p className="mt-4 text-sm font-medium text-muted">{a.event}</p>
              {a.title && (
                <h3
                  className={`mt-1 font-display font-bold tracking-tight ${
                    big ? "text-3xl md:text-4xl" : "text-xl"
                  }`}
                >
                  {a.title}
                </h3>
              )}
              {a.description && (
                <p className={`mt-3 leading-relaxed text-ink/80 ${big ? "text-lg" : "text-[0.94rem]"}`}>
                  {a.description}
                </p>
              )}
              <div className={`${big ? "" : "mt-auto"} flex flex-wrap items-center gap-3 pt-5`}>
                {a.team && <span className="text-xs text-muted">{a.team}</span>}
                {a.deckUrl && (
                  <a
                    href={a.deckUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 font-display text-sm font-medium text-white"
                  >
                    View deck <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
              {big && (
                <div className="mt-auto grid grid-cols-3 gap-3 border-t border-ink/10 pt-6 text-center">
                  {[
                    ["Get", "#FirstPaycheck"],
                    ["Activate", "Starter Hub"],
                    ["Stay → Scale", "B2B2C"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <p className="font-display text-lg font-extrabold italic accent-text">{k}</p>
                      <p className="text-xs text-muted">{v}</p>
                    </div>
                  ))}
                </div>
              )}
            </article>
          );
        })}
        {achievements.some((a) => !a.title) && (
          <article className="glass rounded-3xl p-6">
            <p className="font-display text-lg font-bold">Also reached</p>
            <ul className="mt-4 space-y-3">
              {achievements
                .filter((a) => !a.title)
                .map((a) => (
                  <li key={a.event} className="flex items-start justify-between gap-3">
                    <span className="text-[0.94rem] leading-snug text-ink/85">{a.event}</span>
                    <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-0.5 font-display text-xs font-bold text-accent-deep">
                      {a.rank}
                    </span>
                  </li>
                ))}
            </ul>
          </article>
        )}
      </div>
    </Section>
  );
}

/* ---------------- SKILLS + CERTS ---------------- */

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I" accent="work with">
      <div className="blob -left-32 top-10 h-[360px] w-[420px] bg-sky/60" />
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.title} className="glass rounded-3xl p-6">
            <h3 className="font-display text-lg font-bold">{g.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="font-display text-2xl font-bold">Certifications</h3>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {certifications.map((c) => (
              <li key={c.name} className="glass flex items-start gap-3 rounded-2xl p-4">
                <Award size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-[0.94rem] font-semibold leading-snug">{c.name}</p>
                  {c.issuer && <p className="mt-0.5 text-xs text-muted">{c.issuer}</p>}
                  {c.url && (
                    <a href={c.url} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                      Credential <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold">Languages</h3>
          <ul className="mt-5 space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="glass flex items-center justify-between gap-4 rounded-2xl px-5 py-4">
                <span className="font-display text-lg font-bold">{l.name}</span>
                <span className="text-right text-sm text-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- EDUCATION ---------------- */

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I" accent="study">
      <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        {education.map((ed) => (
          <article key={ed.school} className="glass rounded-3xl p-6 md:p-7">
            <div className="flex items-start gap-4">
              <Logo src={ed.logo} name={ed.school} className="h-12 w-12" fallback={<GraduationCap size={22} />} />
              <div>
                <h3 className="font-display text-xl font-bold">{ed.school}</h3>
                <p className="text-ink/80">{ed.degree}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                  {ed.date} · {ed.location}
                </p>
              </div>
            </div>
            {ed.detail && <p className="mt-4 font-semibold">{ed.detail}</p>}
            {ed.coursework.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {ed.coursework.map((c) => (
                  <span key={c} className="rounded-full bg-ink/[0.05] px-2.5 py-1 text-xs font-medium text-ink/75">
                    {c}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- CONTACT + FOOTER ---------------- */

export function Contact() {
  const rows = [
    { Icon: MailIcon, label: "Email", value: socials.email, href: `mailto:${socials.email}` },
    { Icon: WhatsappIcon, label: "WhatsApp", value: socials.whatsapp, href: socials.whatsappUrl },
    { Icon: LinkedinIcon, label: "LinkedIn", value: "sebastian-rafael-bevan", href: socials.linkedin },
    { Icon: InstagramIcon, label: "Instagram", value: "@rafaelbevans", href: socials.instagram },
    { Icon: GithubIcon, label: "GitHub", value: socials.github.replace("https://github.com/", "@"), href: socials.github },
  ].filter((r) => r.href);

  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 md:py-32">
      <div className="blob -left-24 top-0 h-[380px] w-[480px] bg-lime" />
      <div className="blob bottom-0 left-1/2 h-[380px] w-[520px] -translate-x-1/2 bg-sky" />
      <div className="blob -right-24 top-10 h-[360px] w-[420px] bg-mint" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="font-display text-lg font-medium">Got a project or an opening?</p>
        <h2 className="mt-2 font-display text-5xl font-light tracking-tight md:text-7xl">
          Let&rsquo;s <span className="accent-text font-extrabold italic">talk</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink/75">
          I&rsquo;m open to internships and projects in frontend development and data analytics.
        </p>
        <div className="mx-auto mt-10 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
          {rows.map(({ Icon, label, value, href }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={`glass group flex items-center gap-4 rounded-2xl px-5 py-4 transition-transform hover:-translate-y-0.5 ${i === 0 ? "sm:col-span-2" : ""}`}
            >
              <Icon className="h-6 w-6 shrink-0" />
              <span className="min-w-0">
                <span className="block text-xs text-muted">{label}</span>
                <span className="block truncate font-semibold group-hover:text-accent">{value}</span>
              </span>
            </a>
          ))}
        </div>
        <div className="mt-10">
          <CvButton />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-ink/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-muted md:flex-row">
        <p>
          <span className="font-display font-bold text-ink">{profile.fullName}</span> ·{" "}
          {profile.role.replace(/\.$/, "")}
        </p>
        <p>© {new Date().getFullYear()} · Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
