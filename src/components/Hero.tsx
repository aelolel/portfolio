import { Download } from "lucide-react";
import { profile, socials } from "@/data/portfolio";
import { SocialLinks } from "./SocialLinks";

function RichQuote({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("**") ? (
          <strong key={i} className="font-bold italic text-ink">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export function CvButton({ className = "" }: { className?: string }) {
  const ready = profile.cvUrl !== "";
  return (
    <a
      href={ready ? profile.cvUrl : undefined}
      target={ready ? "_blank" : undefined}
      rel="noreferrer"
      aria-disabled={!ready}
      title={ready ? "Download CV" : "CV coming soon"}
      className={`inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 font-display text-[0.95rem] font-medium text-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.6)] transition-transform ${
        ready ? "hover:-translate-y-0.5" : "cursor-not-allowed opacity-80"
      } ${className}`}
    >
      <Download size={16} />
      {ready ? "Download CV" : "CV coming soon"}
    </a>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Figma background blobs */}
      <div className="blob -left-32 -top-24 h-[420px] w-[520px] bg-lime opacity-90" />
      <div className="blob left-1/2 top-[30%] h-[520px] w-[560px] -translate-x-1/2 bg-sky opacity-90" />
      <div className="blob -bottom-32 -right-24 h-[420px] w-[520px] bg-mint opacity-90" />
      <div className="blob -right-40 top-10 h-[300px] w-[360px] bg-sky/60" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-28 text-center md:pt-32">
        <p className="font-display text-lg font-medium">{profile.greeting}</p>
        <h1 className="mt-1 font-display text-6xl font-light tracking-tight sm:text-7xl lg:text-[5.5rem] lg:leading-[1.05]">
          I&rsquo;m{" "}
          <span className="accent-text pr-2 font-extrabold italic underline decoration-accent decoration-[3px] underline-offset-[10px]">
            {profile.nickname}
          </span>
        </h1>
        <p className="mt-4 text-lg text-ink/80 sm:text-xl">{profile.role}</p>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-end gap-8 px-6 lg:grid-cols-[1fr_minmax(300px,380px)_1fr]">
        {/* Left: quote + CV */}
        <div className="order-2 flex flex-col items-center gap-8 pb-4 text-center lg:order-1 lg:h-full lg:items-start lg:justify-between lg:pb-14 lg:pt-16 lg:text-left">
          <div className="max-w-sm">
            <svg
              aria-hidden
              viewBox="0 0 56 40"
              className="mx-auto h-9 w-auto lg:mx-0"
              fill="currentColor"
            >
              <path d="M0 40V25.6C0 11.9 6.2 3.3 18.6 0l2.6 5.3C14.6 7.7 11.2 12 10.6 18.2H22V40H0Zm32 0V25.6C32 11.9 38.2 3.3 50.6 0l2.6 5.3C46.6 7.7 43.2 12 42.6 18.2H54V40H32Z" />
            </svg>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-ink/80 lg:text-justify">
              &ldquo;<RichQuote text={profile.quote} />&rdquo;
            </p>
          </div>
          <CvButton />
        </div>

        {/* Center: photo */}
        <div className="order-1 flex justify-center lg:order-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.photo}
            alt={profile.fullName}
            className="h-[46svh] max-h-[560px] min-h-[300px] w-auto object-contain object-bottom drop-shadow-[0_20px_30px_rgba(30,40,80,0.18)]"
          />
        </div>

        {/* Right: skills + socials */}
        <div className="order-3 flex flex-col items-center gap-8 pb-10 lg:h-full lg:items-end lg:justify-between lg:pb-14 lg:pt-16">
          <div className="flex max-w-sm flex-wrap justify-center gap-2.5 lg:justify-end">
            {profile.heroSkills.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 lg:items-start lg:self-center lg:pl-6">
            <p className="font-display text-sm font-medium">My socials:</p>
            <SocialLinks socials={socials} />
          </div>
        </div>
      </div>
    </section>
  );
}
