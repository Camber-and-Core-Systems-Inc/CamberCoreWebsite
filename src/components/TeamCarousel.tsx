"use client";

import { useRef } from "react";
import Link from "next/link";

export type TeamSocialType =
  | "mail"
  | "linkedin"
  | "github"
  | "twitter"
  | "website";

export interface TeamSocial {
  type: TeamSocialType;
  href: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image: string;
  imageAlt: string;
  socials: TeamSocial[];
}

// Inline SVGs keep the component self-contained (lucide dropped brand marks).
const icons: Record<TeamSocialType, React.ReactNode> = {
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.2 3.44 9.61 8.21 11.17.6.11.82-.25.82-.57v-2c-3.34.71-4.04-1.59-4.04-1.59-.55-1.37-1.34-1.74-1.34-1.74-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.22 1.84 1.22 1.07 1.8 2.81 1.28 3.5.98.11-.77.42-1.28.76-1.58-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.47-2.34 1.23-3.17-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.21a11.5 11.5 0 0 1 6 0c2.3-1.53 3.3-1.21 3.3-1.21.65 1.64.24 2.86.12 3.16.77.83 1.23 1.88 1.23 3.17 0 4.54-2.81 5.53-5.49 5.83.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.56 21.9 24 17.49 24 12.29 24 5.78 18.63.5 12 .5z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.682l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
    </svg>
  ),
  website: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
};

function TeamCard({ member }: { member: TeamMember }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    el.style.setProperty("--rx", `${(0.5 - y) * 9}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 12}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="team3d" role="listitem">
      <article
        ref={ref}
        className="team3d-card"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        <div className="team3d-card__img">
          <img src={member.image} alt={member.imageAlt} loading="lazy" />
          <span className="team3d-card__spot" aria-hidden="true" />
        </div>

        <div className="team3d-card__info">
          <div className="team3d-card__info-top">
            <div>
              <h3 className="team3d-card__name">{member.name}</h3>
              <span className="team3d-card__role">{member.role}</span>
            </div>
            <span className="team3d-card__status" aria-hidden="true" />
          </div>

          {member.bio && <p className="team3d-card__bio">{member.bio}</p>}

          {member.socials.length > 0 && (
            <div className="team3d-card__socials">
              {member.socials.map((social) => {
                const isInternal = social.href.startsWith("/");

                if (isInternal) {
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="team3d-card__icon"
                    >
                      {icons[social.type]}
                    </Link>
                  );
                }

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="team3d-card__icon"
                    target={social.type === "mail" ? undefined : "_blank"}
                    rel="noreferrer"
                  >
                    {icons[social.type]}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

export default function TeamCarousel({ members }: { members: TeamMember[] }) {
  return (
    <div className="team-carousel" role="list">
      {members.map((member) => (
        <TeamCard key={member.name} member={member} />
      ))}
    </div>
  );
}
