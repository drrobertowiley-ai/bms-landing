"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BmsLogo } from "@/components/bms-logo";

const NAV_LINKS = [
  { href: "#producto", label: "Producto" },
  { href: "#seguridad", label: "Seguridad" },
  { href: "#precios", label: "Precios" },
  { href: "#contacto", label: "Contacto" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full bg-white/90 backdrop-blur transition-shadow",
        scrolled
          ? "shadow-bms-sm border-b border-bms-slate-100"
          : "border-b border-transparent",
      ].join(" ")}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="BMS · Inicio"
          className="flex items-center focus-bms"
        >
          <BmsLogo
            variant="dark"
            withTagline={false}
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-bms-slate-600 transition-colors hover:text-bms-slate-900 focus-bms"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://app.bms.services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-bms-md border border-bms-slate-200 px-4 text-sm font-medium text-bms-slate-700 transition-colors hover:border-bms-slate-300 hover:bg-bms-slate-50 focus-bms"
          >
            Iniciar sesión
          </a>
          <Link
            href="/contacto"
            className="inline-flex h-9 items-center rounded-bms-md bg-bms-blue-600 px-4 text-sm font-semibold text-white shadow-bms-sm transition-colors hover:bg-bms-blue-700 focus-bms"
          >
            Solicitar demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-bms-md text-bms-slate-700 hover:bg-bms-slate-100 focus-bms lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-bms-slate-100 bg-white lg:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-bms-md px-3 py-2 text-base font-medium text-bms-slate-700 hover:bg-bms-slate-50 focus-bms"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 border-t border-bms-slate-100 pt-3">
              <a
                href="https://app.bms.services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-bms-md border border-bms-slate-200 px-4 text-sm font-medium text-bms-slate-700 hover:bg-bms-slate-50 focus-bms"
              >
                Iniciar sesión
              </a>
              <Link
                href="/contacto"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 items-center justify-center rounded-bms-md bg-bms-blue-600 px-4 text-sm font-semibold text-white hover:bg-bms-blue-700 focus-bms"
              >
                Solicitar demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
