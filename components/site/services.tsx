import {
  CalendarCheck,
  Globe2,
  PenLine,
  Scale,
  Search,
  Smartphone,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";

const SERVICES = [
  {
    icon: Smartphone,
    tint: "from-cyan-400/25 to-blue-500/10 text-cyan-400",
    title: "Gebaut fürs Handy",
    body: "Die meisten schauen unterwegs. Deshalb wird die Seite zuerst auf dem Handy entworfen und erst danach für den Rechner verbreitert.",
  },
  {
    icon: Globe2,
    tint: "from-blue-400/25 to-indigo-500/10 text-blue-400",
    title: "Hosting und Domain drin",
    body: "Keine zweite Rechnung, kein Anbieterwechsel, kein technischer Kram. Läuft, ist verschlüsselt, ist schnell. Darum kümmere ich mich.",
  },
  {
    icon: PenLine,
    tint: "from-emerald-400/25 to-teal-500/10 text-emerald-400",
    title: "Änderungen inklusive",
    body: "Neue Preise, neues Teammitglied, andere Öffnungszeiten. Zweimal im Jahr überarbeite ich die Seite, ohne dass du extra zahlst.",
  },
  {
    icon: CalendarCheck,
    tint: "from-violet-400/25 to-purple-500/10 text-violet-400",
    title: "Termine online buchbar",
    body: "Auf Wunsch mit Buchungssystem, damit Kunden auch abends um elf einen Termin machen können. Landet direkt in deinem Kalender.",
  },
  {
    icon: Search,
    tint: "from-amber-400/25 to-orange-500/10 text-amber-400",
    title: "Findbar bei Google und KI",
    body: "Saubere Struktur, echte Texte, passende Daten im Hintergrund. Damit dich nicht nur Google findet, sondern auch ChatGPT empfiehlt.",
  },
  {
    icon: Scale,
    tint: "from-pink-400/25 to-rose-500/10 text-pink-400",
    title: "Rechtlich sauber",
    body: "Impressum und Datenschutz gehören dazu, Schriften werden lokal geladen, keine Google-Karte, die vorher Daten abzieht.",
  },
];

export function Services() {
  return (
    <section id="leistungen" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1024px] px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold tracking-wide text-brand">
            Was drin ist
          </span>
          <h2 className="headline mt-3 text-[clamp(2rem,4.5vw,3.4rem)]">
            Alles inklusive.
            <br className="hidden sm:block" /> Wirklich alles.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-[22px] border border-hairline bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_24px_60px_-30px_rgba(10,132,255,.45)]">
                <div
                  className={`mb-5 grid size-11 place-items-center rounded-[14px] bg-gradient-to-br ${f.tint}`}
                >
                  <f.icon className="size-5" />
                </div>
                <h3 className="text-[1.05rem] font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
