"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * 16:9 image carousel. Wide images fill the frame; tall or squarish ones
 * (dashboards, phone screens) are shown whole instead of cropped.
 */
export function Carousel({
  images,
  alt,
  className = "",
}: {
  images: string[];
  alt: string;
  className?: string;
}) {
  const [i, setI] = useState(0);
  const [contain, setContain] = useState<Record<number, boolean>>({});
  const n = images.length;
  return (
    <div
      className={`group relative aspect-[16/9] overflow-hidden rounded-2xl border border-ink/5 bg-[#eef2f9] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={images[i]}
        src={images[i]}
        alt={`${alt} ${i + 1}`}
        loading="lazy"
        onLoad={(e) => {
          const el = e.currentTarget;
          const ratio = el.naturalWidth / el.naturalHeight;
          setContain((c) => ({ ...c, [i]: ratio < 1.5 }));
        }}
        className={`h-full w-full transition-transform duration-500 ${
          contain[i] ? "object-contain" : "object-cover object-top group-hover:scale-[1.02]"
        }`}
      />
      {n > 1 && (
        <>
          <button
            onClick={() => setI((i - 1 + n) % n)}
            aria-label="Previous image"
            className="glass absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full opacity-80 transition-opacity md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setI((i + 1) % n)}
            aria-label="Next image"
            className="glass absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full opacity-80 transition-opacity md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronRight size={18} />
          </button>
          <div className="glass absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full px-2 py-1.5">
            {images.map((_, k) => (
              <button
                key={k}
                onClick={() => setI(k)}
                aria-label={`Image ${k + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  k === i ? "w-5 bg-ink" : "w-1.5 bg-ink/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
