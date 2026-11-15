"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const els = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="glass hidden items-center gap-1 rounded-full px-3 py-2 md:flex">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`rounded-full px-4 py-1.5 font-display text-[0.95rem] font-medium transition-colors ${
              active === l.id
                ? "text-accent underline decoration-2 underline-offset-[6px]"
                : "text-ink/80 hover:text-ink"
            }`}
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* Mobile */}
      <div className="flex w-full justify-end md:hidden">
        <button
          onClick={() => setOpen((o) => !o)}
          className="glass flex h-11 w-11 items-center justify-center rounded-full"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        {open && (
          <div className="glass absolute right-4 top-14 flex flex-col rounded-2xl p-2">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-5 py-2.5 font-display font-medium ${
                  active === l.id ? "text-accent" : "text-ink/80"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
