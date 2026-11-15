"use client";

import { useState } from "react";

/** Shows an org logo; falls back to initials (or an icon) if the file is missing. */
export function Logo({
  src,
  name,
  fallback,
  className = "h-11 w-11",
}: {
  src?: string;
  name: string;
  fallback?: React.ReactNode;
  className?: string;
}) {
  const [broken, setBroken] = useState(false);
  if (src && !broken) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt=""
        onError={() => setBroken(true)}
        className={`${className} shrink-0 rounded-xl border border-ink/5 bg-white object-contain p-1.5`}
      />
    );
  }
  const initials = name
    .replace(/\(.*?\)/g, "")
    .split(/[\s,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
  return (
    <span
      className={`${className} flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky to-mint font-display text-sm font-bold text-accent-deep`}
    >
      {fallback ?? initials}
    </span>
  );
}
