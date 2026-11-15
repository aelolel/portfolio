"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Carousel } from "./Carousel";
import { projects, projectCategories, type Project } from "@/data/portfolio";
import { Placeholder } from "./Section";

const tints: Record<string, string> = {
  "Web Development": "from-sky via-white to-mint",
  "Data Analytics": "from-lime via-white to-sky",
  "UI/UX": "from-mint via-white to-lime",
};

function Cover({ p }: { p: Project }) {
  if (p.images.length === 0) {
    return (
      <div
        className={`relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${tints[p.category]}`}
      >
        <span className="line-clamp-2 px-8 text-center font-display text-3xl font-extrabold italic leading-tight tracking-tight text-ink/20 md:text-4xl">
          {p.title}
        </span>
        <span className="absolute bottom-3 right-3">
          <Placeholder>Screenshot coming soon</Placeholder>
        </span>
      </div>
    );
  }
  return <Carousel images={p.images} alt={`${p.title} screenshot`} />;
}

function ProjectCard({ p }: { p: Project }) {
  const incomplete = p.points.length === 0;
  return (
    <article className="glass flex flex-col rounded-3xl p-4 md:p-5">
      <Cover p={p} />
      <div className="flex flex-1 flex-col px-1 pt-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-wider text-muted">
          <span className="text-accent">{p.category}</span>
          {p.date && <span>· {p.date}</span>}
        </div>
        <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
          {p.title}
        </h3>
        {p.context && (
          <p className="mt-0.5 text-sm text-muted">{p.context}</p>
        )}
        {p.tagline && (
          <p className="mt-3 leading-relaxed text-ink/85">{p.tagline}</p>
        )}

        {incomplete ? (
          <div className="mt-4">
            <Placeholder>Project details coming soon</Placeholder>
          </div>
        ) : (
          <ul className="mt-4 space-y-2 text-[0.94rem] leading-relaxed text-ink/80">
            {p.points.map((pt) => (
              <li key={pt} className="flex gap-2.5">
                <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-5">
          {p.tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-ink/[0.05] px-2.5 py-1 font-display text-xs font-semibold text-ink/75"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
          {p.links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {p.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 font-display text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  {l.label} <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

const INITIAL = 6;

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [showAll, setShowAll] = useState(false);
  const tabs = ["All", ...projectCategories];
  const list =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const visible = showAll ? list : list.slice(0, INITIAL);

  return (
    <>
      <div className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 pb-2">
        {tabs.map((t) => {
          const count =
            t === "All"
              ? projects.length
              : projects.filter((p) => p.category === t).length;
          const on = filter === t;
          return (
            <button
              key={t}
              onClick={() => {
                setFilter(t);
                setShowAll(false);
              }}
              className={`shrink-0 rounded-full px-4 py-2 font-display text-sm font-semibold transition-colors ${
                on ? "bg-ink text-white" : "chip hover:text-accent"
              }`}
            >
              {t}<span className={`ml-1.5 ${on ? "text-white/60" : "text-muted"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {visible.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>

      {list.length > INITIAL && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="chip !px-6 !py-2.5 hover:text-accent"
          >
            {showAll ? "Show fewer" : `Show all ${list.length} projects`}
          </button>
        </div>
      )}
    </>
  );
}
