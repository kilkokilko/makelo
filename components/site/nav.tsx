"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { MAILTO } from "@/lib/site";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/#problem", label: "Das Problem" },
  { href: "/#leistungen", label: "Was drin ist" },
  { href: "/#beispiele", label: "Beispiele" },
  { href: "/#ablauf", label: "Ablauf" },
  { href: "/#preis", label: "Preis" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,border-color] duration-500",
        scrolled || open
          ? "border-b border-white/10 bg-black/55 backdrop-blur-2xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-12 max-w-[1024px] items-center justify-between px-5 text-[12px] text-white/90">
        <Link
          href="/#top"
          className="flex items-center gap-2 text-[17px] font-bold tracking-tight text-white"
        >
          makelo<span className="text-[#4a9eff]">.</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/75 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <AnimatedThemeToggler className="size-8 border-white/12 bg-white/5 text-white hover:bg-white/12" />
          <a
            href={MAILTO}
            className="hidden rounded-full bg-white px-3.5 py-1.5 text-[12px] font-medium text-black transition-transform duration-300 hover:scale-[1.04] sm:block"
          >
            Website ansehen
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className="grid size-8 place-items-center rounded-full border border-white/12 bg-white/5 text-white md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobiles Menü */}
      <div
        className={cn(
          "overflow-hidden border-t border-white/10 bg-black/85 backdrop-blur-2xl transition-[max-height,opacity] duration-500 md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-5 py-3">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/8 py-3 text-[15px] text-white/80 last:border-0"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
