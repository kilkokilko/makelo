"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Lock } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Zeigt fertige Kundenseiten in einem Browserfenster, das alle paar Sekunden
 * die Branche wechselt. Steht an den Stellen, an denen die Schwercraft-Vorlage
 * Produktvideos zeigt, und pausiert aus demselben Grund ausserhalb des
 * Viewports.
 */

type Site = {
  name: string;
  domain: string;
  branche: string;
  headline: string;
  sub: string;
  cta: string;
  accent: string;
  bg: string;
};

const SITES: Site[] = [
  {
    name: "Zahnarztpraxis",
    domain: "praxis-nord.de",
    branche: "Zahnarzt",
    headline: "Zahnmedizin,\ndie sich Zeit nimmt.",
    sub: "Termin online buchen, ohne Warteschleife.",
    cta: "Termin buchen",
    accent: "#4a9eff",
    bg: "linear-gradient(135deg, #0b1c33 0%, #123a63 55%, #1d5a94 100%)",
  },
  {
    name: "Dachdeckerei",
    domain: "dach-elbe.de",
    branche: "Handwerk",
    headline: "Ihr Dach.\nIn festen Händen.",
    sub: "Meisterbetrieb seit 1998. Festpreis nach Besichtigung.",
    cta: "Angebot anfragen",
    accent: "#ff9f0a",
    bg: "linear-gradient(135deg, #2a1a08 0%, #5c3410 55%, #8a5216 100%)",
  },
  {
    name: "Fahrschule",
    domain: "fahrschule-hansa.de",
    branche: "Fahrschule",
    headline: "In 8 Wochen\nzum Führerschein.",
    sub: "Fester Fahrlehrer, planbare Termine, klare Preise.",
    cta: "Platz sichern",
    accent: "#32d74b",
    bg: "linear-gradient(135deg, #0a2415 0%, #12492a 55%, #1c7343 100%)",
  },
  {
    name: "Barbershop",
    domain: "fero-cut.de",
    branche: "Barbershop",
    headline: "Präzision\nist Handarbeit.",
    sub: "Ohne Termin geht auch. Mit Termin geht schneller.",
    cta: "Termin buchen",
    accent: "#d6b36a",
    bg: "linear-gradient(135deg, #17130b 0%, #352914 55%, #4d3a1c 100%)",
  },
];

const HOLD_MS = 3600;

/** Die Miniaturseite im Fenster. Rein aus CSS gebaut, kein Screenshot. */
function MiniSite({ site, phone = false }: { site: Site; phone?: boolean }) {
  return (
    <div className="flex h-full flex-col bg-[#08080a]">
      {/* Kopfzeile der Kundenseite */}
      <div className="flex shrink-0 items-center justify-between px-3 py-2">
        <span className="text-[8px] font-bold tracking-tight text-white">
          {site.name.toLowerCase().replace(/\s/g, "")}
        </span>
        {phone ? (
          <span className="flex flex-col gap-[2px]">
            {[0, 1, 2].map((i) => (
              <span key={i} className="block h-[1px] w-2.5 bg-white/50" />
            ))}
          </span>
        ) : (
          <span className="flex gap-2.5">
            {["Leistungen", "Team", "Kontakt"].map((l) => (
              <span key={l} className="text-[7px] text-white/45">
                {l}
              </span>
            ))}
            <span
              className="rounded-full px-1.5 py-[2px] text-[7px] font-semibold text-black"
              style={{ background: site.accent }}
            >
              {site.cta}
            </span>
          </span>
        )}
      </div>

      {/* Hero */}
      <div
        className="relative flex flex-1 flex-col justify-end p-3"
        style={{ background: site.bg }}
      >
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative">
          <span
            className="mb-1.5 inline-block rounded-full px-1.5 py-[2px] text-[6.5px] font-semibold"
            style={{ background: `${site.accent}26`, color: site.accent }}
          >
            {site.branche}
          </span>
          <h3
            className={cn(
              "font-semibold whitespace-pre-line text-white",
              phone ? "text-[11px] leading-[1.15]" : "text-[15px] leading-[1.1]",
            )}
            style={{ letterSpacing: "-0.03em" }}
          >
            {site.headline}
          </h3>
          <p className="mt-1 text-[7px] text-white/60">{site.sub}</p>
          <span
            className="mt-2 inline-block rounded-full px-2.5 py-1 text-[7px] font-semibold text-black"
            style={{ background: site.accent }}
          >
            {site.cta}
          </span>
        </div>
      </div>

      {/* Drei Kacheln darunter */}
      <div className="flex shrink-0 gap-1.5 p-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex-1 rounded-[3px] bg-white/[0.06] p-1.5">
            <span
              className="block h-[3px] w-3 rounded-full"
              style={{ background: site.accent, opacity: 0.8 }}
            />
            <span className="mt-1 block h-[2px] w-full rounded-full bg-white/20" />
            <span className="mt-[3px] block h-[2px] w-2/3 rounded-full bg-white/12" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function SiteMock({
  className,
  showPhone = true,
}: {
  className?: string;
  showPhone?: boolean;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);
  const [i, setI] = useState(0);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let onScreen = false;
    const sync = () => setLive(!document.hidden && onScreen);

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        sync();
      },
      { threshold: 0.25 },
    );
    io.observe(host);
    document.addEventListener("visibilitychange", sync);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  useEffect(() => {
    if (!live) return;
    const t = window.setTimeout(
      () => setI((n) => (n + 1) % SITES.length),
      HOLD_MS,
    );
    return () => window.clearTimeout(t);
  }, [live, i]);

  const site = SITES[i];

  return (
    <div
      ref={hostRef}
      className={cn("relative flex flex-col bg-black p-4 sm:p-6", className)}
    >
      {/* Browserfenster */}
      <div className="relative flex-1 overflow-hidden rounded-[10px] border border-white/10 bg-[#08080a]">
        <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.03] px-3 py-2">
          <span className="flex gap-1.5">
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/15" />
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={site.domain}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="ml-1 flex min-w-0 flex-1 items-center gap-1.5 rounded-full bg-white/[0.06] px-2.5 py-1 text-[9.5px] text-white/45"
            >
              <Lock className="size-2.5 shrink-0 text-[#32d74b]" />
              <span className="truncate">{site.domain}</span>
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="relative h-[calc(100%-33px)] min-h-[210px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={site.domain}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.5, ease: [0.28, 0.11, 0.32, 1] }}
              className="absolute inset-0"
            >
              <MiniSite site={site} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Handy davor, weil im Verkauf immer zuerst das Handyvideo gezeigt wird */}
      {showPhone ? (
        <div className="pointer-events-none absolute right-3 bottom-3 w-[92px] overflow-hidden rounded-[12px] border-[3px] border-[#1c1c1f] bg-black shadow-[0_18px_40px_-12px_rgba(0,0,0,.9)] sm:right-6 sm:bottom-6 sm:w-[108px]">
          <div className="flex justify-center bg-[#1c1c1f] py-[3px]">
            <span className="h-[3px] w-6 rounded-full bg-black/60" />
          </div>
          <div className="h-[168px] sm:h-[196px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={site.domain}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <MiniSite site={site} phone />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      ) : null}

      <div className="mt-3 flex shrink-0 items-center justify-between">
        <span className="text-[11px] text-white/35">
          Echte Kundenseiten, gebaut von makelo
        </span>
        <span className="flex gap-1.5">
          {SITES.map((s, n) => (
            <span
              key={s.domain}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                n === i ? "w-4 bg-white/70" : "w-1 bg-white/20",
              )}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
