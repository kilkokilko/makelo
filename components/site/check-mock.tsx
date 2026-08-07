"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Der Website-Check, den Kim vor jedem Anschreiben macht: dieselben vier
 * Punkte, einmal für die alte Seite und einmal für die neue.
 */

const CHECKS = [
  { label: "Sieht auf dem Handy gut aus", alt: false },
  { label: "Lädt in unter 2 Sekunden", alt: false },
  { label: "Sichere Verbindung (SSL)", alt: true },
  { label: "Termin direkt buchbar", alt: false },
  { label: "Impressum und Datenschutz", alt: true },
];

export function CheckMock({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-6 bg-black p-6 text-left sm:p-8", className)}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[11.5px] font-semibold tracking-widest text-white/40 uppercase">
            Website-Check
          </div>
          <div className="mt-1 text-[1.35rem] font-semibold tracking-tight text-white">
            Deine Seite heute
          </div>
        </div>
        <div className="flex gap-2 text-[10.5px] font-semibold">
          <span className="rounded-full bg-white/8 px-2.5 py-1 text-white/45">
            alt
          </span>
          <span className="rounded-full bg-[#32d74b]/15 px-2.5 py-1 text-[#32d74b]">
            neu
          </span>
        </div>
      </div>

      <div className="space-y-2.5">
        {CHECKS.map((row, i) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{
              duration: 0.5,
              delay: i * 0.11,
              ease: [0.28, 0.11, 0.32, 1],
            }}
            className="flex items-center gap-3 border-b border-white/6 pb-2.5 text-[12.5px] last:border-0"
          >
            <span className="min-w-0 flex-1 truncate text-white/65">
              {row.label}
            </span>
            <span
              className={cn(
                "grid size-5 shrink-0 place-items-center rounded-full",
                row.alt
                  ? "bg-[#32d74b]/15 text-[#32d74b]"
                  : "bg-rose-500/15 text-rose-400",
              )}
            >
              {row.alt ? <Check className="size-3" /> : <X className="size-3" />}
            </span>
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#32d74b]/15 text-[#32d74b]">
              <Check className="size-3" />
            </span>
          </motion.div>
        ))}
      </div>

      <div className="rounded-[14px] border border-[#4a9eff]/35 bg-[#4a9eff]/10 p-4">
        <div className="text-[12px] font-semibold text-white">
          Den Check machst du nicht selbst.
        </div>
        <p className="mt-1 text-[11.5px] leading-relaxed text-white/55">
          Ich schaue mir deine Seite an, bevor ich dich überhaupt anschreibe.
          Wenn nichts zu verbessern ist, sage ich das auch.
        </p>
      </div>
    </div>
  );
}
