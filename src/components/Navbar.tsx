"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isMobileMenuOpen);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMobileMenuOpen]);

  // Keyboard support for the mobile drawer: Escape closes it, and Tab is
  // trapped within the drawer so focus can't drift to the hidden page behind.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const drawer = drawerRef.current;
    const focusable = drawer?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusable?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="container top-bar__inner">
          <p>SERVING BC LOCAL GOVERNMENTS</p>
          <a href="tel:2502798735">250-279-8735</a>
        </div>
      </div>

      <nav className="nav-shell" aria-label="Main navigation">
        <div className="container nav-shell__inner">
          <Link
            href="/"
            className="wordmark"
            aria-label="Camber and Core Systems home"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="wordmark__line">
              CAMBER <span>&amp;</span> CORE
            </span>
            <span className="wordmark__subline">SYSTEMS</span>
          </Link>

          <div className="nav-links" aria-label="Primary links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? "nav-link nav-link--active" : "nav-link"}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            className="button button-primary nav-cta"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>

          <button
            ref={toggleButtonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        ref={drawerRef}
        className={isMobileMenuOpen ? "mobile-drawer mobile-drawer--open" : "mobile-drawer"}
      >
        <div className="mobile-drawer__inner">
          <div className="mobile-drawer__links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mobile-drawer__link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="button button-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
