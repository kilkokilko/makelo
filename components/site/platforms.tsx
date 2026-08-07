"use client";

import React, { forwardRef, useRef } from "react";
// lucide-react v1 hat die Marken-Icons entfernt, deshalb steht AtSign für das
// Social-Profil.
import {
  AtSign,
  CalendarCheck,
  Globe2,
  MapPin,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string }
>(({ className, children, label }, ref) => {
  return (
    <div
      ref={ref}
      title={label}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border border-hairline bg-surface-2 p-3 text-foreground shadow-[0_8px_28px_-14px_rgba(0,0,0,0.6)]",
        className,
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";

export function Platforms() {
  const containerRef = useRef<HTMLDivElement>(null);
  const googleRef = useRef<HTMLDivElement>(null);
  const mapsRef = useRef<HTMLDivElement>(null);
  const instaRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const domainRef = useRef<HTMLDivElement>(null);
  const terminRef = useRef<HTMLDivElement>(null);

  return (
    <section className="border-y border-hairline bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-[1024px] px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold tracking-wide text-brand">
            Alles läuft zusammen
          </span>
          <h2 className="headline mt-3 text-[clamp(2rem,4.5vw,3.4rem)]">
            Eine Seite.
            <br />
            Jeder Weg führt hin.
          </h2>
          <p className="mt-5 text-[1.06rem] leading-relaxed text-muted">
            Google, Maps, dein Instagram-Profil, die Visitenkarte: Am Ende landen
            alle an derselben Stelle. Diese Stelle baue ich so, dass daraus eine
            Anfrage wird.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="relative mx-auto mt-16 flex h-[340px] w-full max-w-[760px] items-center justify-center overflow-hidden p-6 sm:p-10"
            ref={containerRef}
          >
            <div className="flex size-full max-h-[240px] max-w-2xl flex-col items-stretch justify-between gap-10">
              <div className="flex flex-row items-center justify-between">
                <Circle ref={googleRef} label="Google-Suche">
                  <Search className="size-5" />
                </Circle>
                <Circle ref={phoneRef} label="Handy">
                  <Smartphone className="size-5" />
                </Circle>
              </div>
              <div className="flex flex-row items-center justify-between">
                <Circle ref={mapsRef} label="Google Maps">
                  <MapPin className="size-5" />
                </Circle>
                <Circle
                  ref={coreRef}
                  label="Deine Website"
                  className="size-16 border-brand/30 bg-background p-3.5"
                >
                  <span className="text-[19px] leading-none font-bold tracking-tight">
                    m<span className="text-brand">.</span>
                  </span>
                </Circle>
                <Circle ref={domainRef} label="Eigene Domain">
                  <Globe2 className="size-5" />
                </Circle>
              </div>
              <div className="flex flex-row items-center justify-between">
                <Circle ref={instaRef} label="Instagram-Profil">
                  <AtSign className="size-5" />
                </Circle>
                <Circle ref={terminRef} label="Online-Terminbuchung">
                  <CalendarCheck className="size-5" />
                </Circle>
              </div>
            </div>

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={googleRef}
              toRef={coreRef}
              curvature={-75}
              endYOffset={-10}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={mapsRef}
              toRef={coreRef}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={instaRef}
              toRef={coreRef}
              curvature={75}
              endYOffset={10}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={phoneRef}
              toRef={coreRef}
              curvature={-75}
              endYOffset={-10}
              reverse
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={domainRef}
              toRef={coreRef}
              reverse
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={terminRef}
              toRef={coreRef}
              curvature={75}
              endYOffset={10}
              reverse
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-muted-2">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-brand-3" /> Impressum und
              Datenschutz von Anfang an drauf
            </span>
            <span>Google Fonts lokal, keine Abmahnfalle</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
