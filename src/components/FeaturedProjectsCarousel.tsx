"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

export interface FeaturedProject {
  /** Anchor slug on the /projects page */
  slug: string;
  client: string;
  title: string;
  description: string;
  tags: string[];
  /** Optional mini-metadata row (service area, deliverable, system type, …) */
  meta?: { label: string; value: string }[];
  image: string;
  imageAlt: string;
  /** Real route for the "View project" CTA */
  href: string;
}

const AUTOPLAY_MS = 6500;
const SWIPE_THRESHOLD = 45;

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function FeaturedProjectsCarousel({
  projects,
}: {
  projects: FeaturedProject[];
}) {
  const count = projects.length;
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const paused = hovering || focused;

  const goTo = useCallback(
    (index: number) => setActive(((index % count) + count) % count),
    [count],
  );
  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Auto-advance, paused on hover/focus and disabled for reduced motion.
  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setTimeout(
      () => setActive((a) => (a + 1) % count),
      AUTOPLAY_MS,
    );
    return () => window.clearTimeout(id);
  }, [active, paused, count]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const handleBlur = (event: React.FocusEvent) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      setFocused(false);
    }
  };

  return (
    <div
      className="fpc"
      role="group"
      aria-roledescription="carousel"
      aria-label="Featured projects"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setFocused(true)}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="fpc__viewport">
        {projects.map((project, i) => {
          const isActive = i === active;
          return (
            <article
              key={project.slug}
              className={
                isActive ? "project-split-card is-active" : "project-split-card"
              }
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${project.title}`}
              inert={!isActive}
            >
              <div className="project-split-card__media">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="project-split-card__panel">
                <span className="eyebrow-mono">Client · {project.client}</span>
                <h3 className="project-split-card__title">{project.title}</h3>
                <p className="project-split-card__desc">{project.description}</p>

                <ul className="project-split-card__tags">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>

                {project.meta && project.meta.length > 0 && (
                  <dl className="project-split-card__meta">
                    {project.meta.map((item) => (
                      <div key={item.label}>
                        <dt>{item.label}</dt>
                        <dd>{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <Link href={project.href} className="project-split-card__cta">
                  View project <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="fpc__controls">
        <div className="fpc__dots" role="group" aria-label="Select a project">
          {projects.map((project, i) => (
            <button
              key={project.slug}
              type="button"
              className={i === active ? "fpc__dot is-active" : "fpc__dot"}
              aria-label={`Show project ${i + 1}: ${project.title}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => goTo(i)}
            >
              <span aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className="fpc__arrows">
          <button
            type="button"
            className="fpc__arrow"
            aria-label="Previous project"
            onClick={prev}
          >
            <ChevronLeft />
          </button>
          <button
            type="button"
            className="fpc__arrow"
            aria-label="Next project"
            onClick={next}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
