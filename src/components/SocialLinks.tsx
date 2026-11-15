import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "./icons";

type Socials = {
  email: string;
  linkedin: string;
  instagram: string;
  github: string;
};

export function SocialLinks({
  socials,
  className = "",
}: {
  socials: Socials;
  className?: string;
}) {
  const items = [
    { href: socials.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: socials.email ? `mailto:${socials.email}` : "", label: "Email", Icon: MailIcon },
    { href: socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
    { href: socials.github, label: "GitHub", Icon: GithubIcon },
  ].filter((i) => i.href);

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="text-ink transition-transform hover:-translate-y-0.5 hover:text-accent"
        >
          <Icon className="h-7 w-7" />
        </a>
      ))}
    </div>
  );
}
