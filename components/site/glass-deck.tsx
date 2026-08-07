"use client";

import {
  CalendarCheck,
  Globe2,
  PenLine,
  Scale,
  Search,
  Smartphone,
} from "lucide-react";

import {
  GlassButton,
  GlassDock,
  GlassFilter,
  type DockIcon,
} from "@/components/ui/liquid-glass";
import { MAILTO } from "@/lib/site";

/**
 * Die Kontrollfläche: ein Liquid-Glass-Dock über einem langsam driftenden
 * Hintergrund. Alles, was bei 39 Euro im Monat dabei ist, auf einer Leiste.
 */
export function GlassDeck() {
  const dockIcons: DockIcon[] = [
    { alt: "Für das Handy gebaut", node: <Smartphone className="size-7" /> },
    { alt: "Hosting und Domain", node: <Globe2 className="size-7" /> },
    { alt: "Änderungen inklusive", node: <PenLine className="size-7" /> },
    { alt: "Online-Terminbuchung", node: <CalendarCheck className="size-7" /> },
    { alt: "Bei Google findbar", node: <Search className="size-7" /> },
    { alt: "Rechtlich sauber", node: <Scale className="size-7" /> },
  ];

  return (
    <section className="relative">
      <div
        className="relative flex min-h-[620px] w-full items-center justify-center overflow-hidden font-light"
        style={{
          background: `url("https://images.unsplash.com/photo-1432251407527-504a6b4174a2?q=80&w=1480&auto=format&fit=crop") center center`,
          backgroundSize: "cover",
          animation: "moveBackground 60s linear infinite",
        }}
      >
        <div className="absolute inset-0 bg-black/35" />

        <GlassFilter />

        <div className="relative z-10 flex w-full flex-col items-center justify-center gap-8 px-5 text-center">
          <div className="max-w-2xl">
            <span className="text-[13px] font-semibold tracking-wide text-white/70">
              Ein Preis, keine Nachträge
            </span>
            <h2 className="headline mt-3 text-[clamp(2rem,4.5vw,3.4rem)] text-white">
              Du kümmerst dich um deine Kunden. Ich um den Rest.
            </h2>
            <p className="mx-auto mt-4 max-w-[46ch] text-[1.02rem] leading-relaxed text-white/65">
              Keine Rechnung für Hosting, keine für die Domain, keine für kleine
              Änderungen. Ein Betrag im Monat, und die Seite läuft einfach.
            </p>
          </div>

          <GlassDock icons={dockIcons} />

          <GlassButton href={MAILTO}>
            <div className="text-xl text-white">
              <p>Zeig mir meine Website</p>
            </div>
          </GlassButton>
        </div>
      </div>
    </section>
  );
}
