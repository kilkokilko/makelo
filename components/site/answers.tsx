"use client";

import { motion } from "motion/react";

import { Reveal } from "@/components/site/reveal";
import { ShowcaseCard } from "@/components/site/showcase-card";
import { Pointer } from "@/components/ui/pointer";

const SHOWCASE = [
  {
    branche: "Zahnarztpraxis",
    headline: "Zahnmedizin, die sich Zeit nimmt.",
    detail:
      "Termin online buchen, Behandlungen verständlich erklärt, Team mit echten Fotos. Ein Implantat bringt 2.000 bis 3.000 Euro, da zahlt sich eine gute Seite nach einem Patienten aus.",
    bg: "linear-gradient(140deg, #0b1c33 0%, #123a63 55%, #1d5a94 100%)",
    accent: "#4a9eff",
    span: "sm:col-span-2 sm:row-span-2",
  },
  {
    branche: "Dachdecker",
    headline: "Ihr Dach. In festen Händen.",
    detail: "Referenzen, Notdienst und Festpreis nach Besichtigung.",
    bg: "linear-gradient(140deg, #2a1a08 0%, #5c3410 55%, #8a5216 100%)",
    accent: "#ff9f0a",
    span: "",
  },
  {
    branche: "Fahrschule",
    headline: "In 8 Wochen zum Führerschein.",
    detail: "Klare Preise und Anmeldung direkt über die Seite.",
    bg: "linear-gradient(140deg, #0a2415 0%, #12492a 55%, #1c7343 100%)",
    accent: "#32d74b",
    span: "",
  },
  {
    branche: "Photovoltaik",
    headline: "Strom vom eigenen Dach.",
    detail: "Rechner für die Ersparnis, Förderung erklärt, Anfrage in zwei Klicks.",
    bg: "linear-gradient(140deg, #1a1030 0%, #33205c 55%, #4f3090 100%)",
    accent: "#a78bfa",
    span: "",
  },
  {
    branche: "Barbershop",
    headline: "Präzision ist Handarbeit.",
    detail:
      "Dunkles Editorial, echte Fotos aus dem Laden, Buchung ohne Umweg. Der Stil, den seit August alle neuen Kundenseiten bekommen.",
    bg: "linear-gradient(140deg, #17130b 0%, #352914 55%, #4d3a1c 100%)",
    accent: "#d6b36a",
    span: "sm:col-span-2",
  },
  {
    branche: "Sanitär",
    headline: "Ihr neues Bad, aus einer Hand.",
    detail: "Vorher und nachher, Ablauf erklärt, Termin zur Besichtigung.",
    bg: "linear-gradient(140deg, #08222a 0%, #0f4453 55%, #166b80 100%)",
    accent: "#32d1e0",
    span: "",
  },
];

export function Answers() {
  return (
    <section id="beispiele" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1024px] px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold tracking-wide text-brand">
            Beispiele
          </span>
          <h2 className="headline mt-3 text-[clamp(2rem,4.5vw,3.4rem)]">
            Ein Stil.
            <br />
            Für jede Branche anders.
          </h2>
          <p className="mt-5 text-[1.06rem] leading-relaxed text-muted">
            Jede Seite bekommt eigene Farben, eigene Schrift und echte Fotos aus
            deinem Betrieb. Damit sie nach dir aussieht und nicht nach Vorlage.
          </p>
        </Reveal>

        {/* Bento. Jede Kachel überfahren, um mehr zu sehen */}
        <div className="relative mt-14">
          <div className="grid auto-rows-[190px] grid-cols-2 gap-4 sm:grid-cols-4">
            {SHOWCASE.map((s, i) => (
              <Reveal
                key={s.branche}
                delay={(i % 3) * 0.07}
                className={`${s.span} h-full`}
              >
                <ShowcaseCard
                  className="h-full"
                  branche={s.branche}
                  headline={s.headline}
                  detail={s.detail}
                  bg={s.bg}
                  accent={s.accent}
                />
              </Reveal>
            ))}
          </div>

          {/* Eigener Cursor, solange man durch die Beispiele fährt */}
          <Pointer>
            <motion.div
              animate={{ scale: [0.9, 1, 0.9] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-black shadow-lg"
            >
              <span className="size-1.5 rounded-full bg-red-500" />
              Ansehen
            </motion.div>
          </Pointer>
        </div>

        <p className="mt-8 text-center text-[13px] text-muted-2">
          Kachel überfahren für Details. Deine eigene Seite baue ich, bevor wir
          über Geld reden.
        </p>
      </div>
    </section>
  );
}
