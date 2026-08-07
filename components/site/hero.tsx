"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

import { SiteMock } from "@/components/site/site-mock";
import KineticGrid from "@/components/ui/kinetic-grid";
import { TextAnimate } from "@/components/ui/text-animate";
import { MAILTO, PREIS } from "@/lib/site";

const EASE = [0.28, 0.11, 0.32, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative">
      <KineticGrid className="min-h-dvh">
        <div className="relative mx-auto flex min-h-dvh max-w-[1024px] flex-col items-center justify-center px-5 pt-24 pb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[12px] font-medium tracking-wide text-white/75 backdrop-blur-sm"
          >
            <span className="size-1.5 rounded-full bg-[#32d74b] animate-pulse-dot" />
            Websites für lokale Betriebe
          </motion.span>

          <h1 className="headline max-w-4xl text-[clamp(2.6rem,7.5vw,5.5rem)] text-white">
            <TextAnimate
              as="span"
              by="word"
              animation="blurInUp"
              once
              duration={0.9}
              className="block"
            >
              Deine neue Website
            </TextAnimate>
            {/* Ein Segment, damit der Verlauf über die ganze Zeile clippt.
                background-clip:text greift nicht in aufgesplittete Kind-Spans. */}
            <TextAnimate
              as="span"
              by="text"
              animation="blurInUp"
              once
              delay={0.35}
              duration={0.9}
              className="block"
              segmentClassName="grad-blue"
            >
              steht schon.
            </TextAnimate>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
            className="mt-6 max-w-[48ch] text-[clamp(1.05rem,1.8vw,1.3rem)] leading-[1.45] text-white/55"
          >
            Ich baue sie zuerst, dann zeige ich sie dir. Gefällt sie dir nicht,
            zahlst du nichts. Gefällt sie dir:{" "}
            <b className="font-semibold text-white/80">{PREIS} im Monat</b>,
            alles inklusive.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95, ease: EASE }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={MAILTO}
              className="rounded-full bg-white px-6 py-3 text-[15px] font-medium text-black transition-transform duration-300 hover:scale-[1.04]"
            >
              Zeig mir meine Website
            </a>
            <a
              href="#problem"
              className="rounded-full border border-white/18 bg-white/5 px-6 py-3 text-[15px] font-medium text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/12"
            >
              So läuft das ab
            </a>
          </motion.div>

          {/* Fertige Kundenseiten, im Wechsel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.05, ease: EASE }}
            className="relative mt-14 w-full max-w-[820px]"
          >
            <div className="relative overflow-hidden rounded-[22px] border border-white/12 shadow-[0_40px_120px_-30px_rgba(0,0,0,.9)]">
              <SiteMock className="min-h-[400px]" />
              <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-white/40"
          >
            <span>
              <b className="font-semibold text-white/70">Keine</b> Anfangszahlung
            </span>
            <span>
              Hosting und Domain{" "}
              <b className="font-semibold text-white/70">inklusive</b>
            </span>
            <span>
              <b className="font-semibold text-white/70">Erst sehen</b>, dann
              entscheiden
            </span>
          </motion.div>

          <motion.a
            href="#problem"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-14 text-white/30 transition-colors hover:text-white/70"
            aria-label="Weiter zum Inhalt"
          >
            <ChevronDown className="size-5 animate-float-y" />
          </motion.a>
        </div>
      </KineticGrid>
    </section>
  );
}
