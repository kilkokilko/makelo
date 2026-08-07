"use client";

import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Eine Branchenkachel im Bento-Raster. Im Ruhezustand nur die Branche, beim
 * Überfahren fährt die Schlagzeile hoch, die auf so einer Seite stehen würde.
 * Ersetzt die Hover-Videos der Vorlage.
 */
export function ShowcaseCard({
  branche,
  headline,
  detail,
  bg,
  accent,
  className,
}: {
  branche: string;
  headline: string;
  detail: string;
  bg: string;
  accent: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-[20px] border border-hairline p-5 text-left",
        className,
      )}
      style={{ background: bg }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10 transition-opacity duration-700 group-hover:from-black/85" />

      <span
        className="absolute top-4 left-4 rounded-full px-2 py-[3px] text-[10px] font-semibold"
        style={{ background: `${accent}26`, color: accent }}
      >
        {branche}
      </span>

      <span className="absolute top-4 right-4 grid size-6 place-items-center rounded-full bg-white/10 text-white/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <ArrowUpRight className="size-3.5" />
      </span>

      <div className="relative">
        <h3
          className="text-[15px] leading-[1.15] font-semibold text-white transition-transform duration-700 group-hover:-translate-y-1"
          style={{ letterSpacing: "-0.03em" }}
        >
          {headline}
        </h3>

        {/* Detail bleibt eingeklappt, bis jemand die Kachel berührt */}
        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.28,0.11,0.32,1)] group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="pt-1.5 text-[11.5px] leading-snug text-white/65">
              {detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
