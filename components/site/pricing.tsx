"use client";

import { useRef } from "react";
import { Check, Sparkles } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { Confetti, type ConfettiRef } from "@/components/ui/confetti";
import { MAILTO } from "@/lib/site";

const PLANS = [
  {
    name: "Website",
    badge: "Gründungspreis",
    price: "39 €",
    unit: "im Monat",
    note: "6 Monate Mindestlaufzeit, keine Anfangszahlung",
    features: [
      "Komplette Website, für das Handy gebaut",
      "Hosting, Domain und SSL inklusive",
      "Zwei Überarbeitungen im Jahr",
      "Impressum und Datenschutz eingerichtet",
      "Für Google und KI optimiert",
    ],
    cta: "Meine Website ansehen",
    featured: true,
  },
  {
    name: "Jahresvoraus",
    badge: null,
    price: "auf Anfrage",
    unit: "",
    note: "Einmal im Jahr zahlen statt monatlich",
    features: [
      "Derselbe Leistungsumfang",
      "Ein Beleg statt zwölf",
      "Günstiger als monatlich",
      "Praktisch für die Buchhaltung",
    ],
    cta: "Preis anfragen",
    featured: false,
  },
  {
    name: "Extras",
    badge: null,
    price: "auf Anfrage",
    unit: "",
    note: "Wenn mehr gebraucht wird als eine Seite",
    features: [
      "Online-Terminbuchung einbinden",
      "Mehrere Standorte oder Filialen",
      "Zusätzliche Unterseiten",
      "Fotos und Texte komplett neu",
    ],
    cta: "Unverbindlich fragen",
    featured: false,
  },
];

export function Pricing() {
  const confettiRef = useRef<ConfettiRef>(null);

  return (
    <section
      id="preis"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <Confetti
        ref={confettiRef}
        manualstart
        className="pointer-events-none absolute inset-0 z-20 size-full"
      />

      <div className="relative z-10 mx-auto max-w-[1024px] px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold tracking-wide text-brand">
            Preis
          </span>
          <h2 className="headline mt-3 text-[clamp(2rem,4.5vw,3.4rem)]">
            39 Euro im Monat.
            <br />
            Sonst nichts.
          </h2>
          <p className="mt-5 text-[1.06rem] leading-relaxed text-muted">
            Kein Setup, keine versteckten Posten, keine Rechnung für Hosting.
            Und du siehst deine fertige Seite, bevor du dich entscheidest.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-[24px] border p-8 transition-all duration-500 hover:-translate-y-1 ${
                  p.featured
                    ? "border-brand/35 bg-surface shadow-[0_30px_80px_-40px_rgba(10,132,255,.5)]"
                    : "border-hairline bg-surface"
                }`}
              >
                {p.badge ? (
                  <span
                    className={`absolute -top-2.5 left-8 rounded-full px-3 py-1 text-[11px] font-semibold ${
                      p.featured
                        ? "bg-brand text-white"
                        : "bg-foreground text-background"
                    }`}
                  >
                    {p.badge}
                  </span>
                ) : null}

                <h3 className="text-[1.25rem] font-semibold tracking-tight">
                  makelo {p.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="headline text-[2.4rem]">{p.price}</span>
                  {p.unit ? (
                    <span className="text-[13px] text-muted-2">· {p.unit}</span>
                  ) : null}
                </div>
                <p className="mt-1.5 text-[12.5px] text-muted-2">{p.note}</p>

                <ul className="mt-7 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[0.93rem]">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-3" />
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={MAILTO}
                  onMouseEnter={() => {
                    if (p.featured) {
                      confettiRef.current?.fire({
                        particleCount: 60,
                        spread: 70,
                        startVelocity: 28,
                        origin: { y: 0.7 },
                        colors: ["#4a9eff", "#7d7aff", "#32d74b", "#ffffff"],
                      });
                    }
                  }}
                  className={`mt-8 block rounded-full px-6 py-3 text-center text-[15px] font-medium transition-transform duration-300 hover:scale-[1.03] ${
                    p.featured
                      ? "bg-brand text-white"
                      : "border border-hairline bg-background text-foreground"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-muted-2">
            <span>
              <b className="font-semibold text-foreground">Keine</b>{" "}
              Anfangszahlung
            </span>
            <span>
              <b className="font-semibold text-foreground">Alles</b> inklusive
            </span>
            <span>
              <b className="font-semibold text-foreground">Erst sehen</b>, dann
              zahlen
            </span>
          </div>
          <p className="mt-6 text-center text-[13.5px] text-muted-2">
            Noch unsicher?{" "}
            <a
              href={MAILTO}
              className="inline-flex items-center gap-1 font-semibold text-brand hover:underline"
            >
              Schreib mir, ich baue sie und du guckst sie dir an
              <Sparkles className="size-3.5" />
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
