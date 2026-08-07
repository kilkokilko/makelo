"use client";

import { useTheme } from "next-themes";

import { Reveal } from "@/components/site/reveal";
import { Globe } from "@/components/ui/globe";
import { Particles } from "@/components/ui/particles";

export function Reach() {
  const { resolvedTheme } = useTheme();
  // Abgeleitet, nicht gespeichert: resolvedTheme ist undefined, bis next-themes
  // sich eingependelt hat, und nur der helle Fall braucht dunkle Partikel.
  const color = resolvedTheme === "light" ? "#000000" : "#ffffff";

  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <Particles
        className="absolute inset-0 z-0"
        quantity={120}
        ease={80}
        color={color}
        refresh
      />

      <div className="relative z-10 mx-auto max-w-[1024px] px-5">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="text-[13px] font-semibold tracking-wide text-brand">
              Aus Hamburg. Für Betriebe überall.
            </span>
            <h2 className="headline mt-3 text-[clamp(2rem,4.5vw,3.4rem)]">
              Lokal arbeiten.
              <br />
              Überall gefunden werden.
            </h2>
            <p className="mt-6 text-[1.06rem] leading-relaxed text-muted">
              Dein Einzugsgebiet sind vielleicht dreißig Kilometer. Aber jeder
              darin hält ein Handy in der Hand und entscheidet damit, wen er
              anruft.
            </p>
            <p className="mt-4 text-[1.06rem] leading-relaxed text-muted">
              Wo dein Betrieb steht, ist mir egal. Alles läuft über Nachrichten,
              Videos und Mail. Wir müssen uns nie treffen, damit deine Seite
              online geht.
            </p>

            <blockquote className="mt-9 border-l-2 border-brand pl-5">
              <p className="text-[1.05rem] leading-relaxed text-foreground">
                „Ich baue die Seite fertig und stelle sie online. Gefällt sie dir
                nicht, zahlst du nichts. So einfach ist das.“
              </p>
              <footer className="mt-3 text-[13px] text-muted-2">
                Kimi Clausnitzer{" "}
                <span className="text-muted-2/70">· Gründer, makelo</span>
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative flex w-full items-center justify-center">
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(10,132,255,0.14),transparent_65%)]" />
              <Globe className="max-w-[480px]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
