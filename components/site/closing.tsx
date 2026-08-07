"use client";

import { useTheme } from "next-themes";

import { Reveal } from "@/components/site/reveal";
import { SiteMock } from "@/components/site/site-mock";
import { Particles } from "@/components/ui/particles";
import { TextAnimate } from "@/components/ui/text-animate";
import { INSTAGRAM, MAILTO } from "@/lib/site";

export function Closing() {
  const { resolvedTheme } = useTheme();
  // Abgeleitet, nicht gespeichert. Gleiche Begründung wie in Reach.
  const color = resolvedTheme === "light" ? "#000000" : "#ffffff";

  return (
    <section className="relative overflow-hidden border-t border-hairline bg-surface py-28 sm:py-36">
      <Particles
        className="absolute inset-0 z-0"
        quantity={90}
        ease={70}
        color={color}
        refresh
      />

      <div className="relative z-10 mx-auto max-w-[1024px] px-5 text-center">
        <Reveal>
          <h2 className="headline mx-auto max-w-3xl text-[clamp(2.2rem,5.5vw,4rem)]">
            <TextAnimate as="span" by="word" animation="blurInUp" once>
              Soll ich sie dir zeigen?
            </TextAnimate>
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-[1.08rem] leading-relaxed text-muted">
            Schreib mir kurz, welcher Betrieb es ist. Ich baue die Seite und
            schicke dir ein Video davon. Gefällt sie dir nicht, war es das, ganz
            ohne Kosten.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={MAILTO}
              className="rounded-full bg-brand px-7 py-3.5 text-[15px] font-medium text-white transition-transform duration-300 hover:scale-[1.04]"
            >
              Zeig mir meine Website
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-hairline bg-background px-7 py-3.5 text-[15px] font-medium text-foreground transition-transform duration-300 hover:scale-[1.04]"
            >
              Lieber auf Instagram
            </a>
          </div>
        </Reveal>

        {/* Letzter Blick auf fertige Seiten */}
        <Reveal delay={0.12}>
          <div className="mx-auto mt-16 max-w-[820px] overflow-hidden rounded-[26px] border border-hairline shadow-[0_40px_100px_-50px_rgba(0,0,0,.7)]">
            <SiteMock className="min-h-[400px]" />
          </div>
          <p className="mt-5 text-[13px] text-muted-2">
            Beispielhafte Darstellung. Deine Seite bekommt eigene Farben, eigene
            Schrift und echte Fotos aus deinem Betrieb.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
