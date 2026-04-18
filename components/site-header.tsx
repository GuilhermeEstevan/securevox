"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const links = [
    { label: "Soluções", href: "#solucoes" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Segurança", href: "#seguranca" },
    { label: "Casos de uso", href: "#casos" },
    { label: "Implantação", href: "#implantacao" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 4);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        isAtTop
          ? "border-slate-200/70 bg-white/55"
          : "border-white/10 bg-[color:var(--navy-deep)]/80"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className={`flex items-center gap-4 transition-colors ${
            isAtTop ? "text-[color:var(--navy-deep)]" : "text-white"
          }`}
        >
          <Image
            src="/images/logo-secure-vox.png"
            alt="SecureVox"
            width={220}
            height={62}
            priority
            className="h-10 w-auto shrink-0"
          />
          <div
            className={`hidden h-9 w-px min-[1180px]:block ${
              isAtTop ? "bg-slate-300/80" : "bg-white/15"
            }`}
          />
          <div className="hidden min-[1180px]:block pl-1">
            <div
              className={`text-sm font-black uppercase tracking-[0.16em] ${
                isAtTop ? "text-[color:var(--navy-deep)]" : "text-white"
              }`}
            >
              SecureVox
            </div>
            <div
              className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                isAtTop ? "text-slate-500" : "text-white/65"
              }`}
            >
              Telefonia IP e Segurança
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors hover:text-[color:var(--cyan-glow)] ${
                isAtTop ? "text-slate-600" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/558181312506?text=Quero%20conhecer%20a%20SecureVox"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-10 items-center justify-center rounded-full bg-gradient-cyan px-5 text-sm font-semibold text-[color:var(--navy-deep)] shadow-glow transition-transform hover:scale-105 md:inline-flex"
        >
          Falar com especialista
        </a>

        <button
          type="button"
          className={`lg:hidden ${isAtTop ? "text-[color:var(--navy-deep)]" : "text-white"}`}
          onClick={() => setOpen((value) => !value)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open ? (
        <div
          className={`flex flex-col gap-3 border-t px-6 py-4 lg:hidden ${
            isAtTop
              ? "border-slate-200/70 bg-white/95"
              : "border-white/10 bg-[color:var(--navy-deep)]"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`py-2 ${isAtTop ? "text-slate-700" : "text-white/80"}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/558181312506"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-gradient-cyan px-5 py-3 text-center font-semibold text-[color:var(--navy-deep)]"
          >
            Falar com especialista
          </a>
        </div>
      ) : null}
    </header>
  );
}
