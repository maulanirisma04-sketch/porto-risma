"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  // Bayangan tipis saat halaman di-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tandai menu aktif sesuai section yang terlihat
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Tutup menu mobile dengan Escape dan kunci scroll saat terbuka
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      active === href ? "text-navy" : "text-ink-muted hover:text-navy"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 transition-shadow ${
        scrolled ? "border-ink-line shadow-sm" : "border-transparent"
      }`}
    >
      <nav
        aria-label="Navigasi utama"
        className="container-page flex h-16 items-center justify-between"
      >
        <a
          href="#home"
          aria-label={`${profile.name} — kembali ke atas`}
          className="font-display text-xl font-bold tracking-tight text-navy"
          onClick={() => setOpen(false)}
        >
          RM<span className="text-sky-accent">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={linkClass(item.href)}
                aria-current={active === item.href ? "true" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggle mobile */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy hover:bg-sky-soft md:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div
          id="mobile-menu"
          className="animate-fade-in border-t border-ink-line bg-white md:hidden"
        >
          <ul className="container-page flex flex-col py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.href ? "true" : undefined}
                  className={`block rounded-md px-3 py-3 ${linkClass(item.href)}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
