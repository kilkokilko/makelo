import { ArrowRight } from "lucide-react";

import { CheckMock } from "@/components/site/check-mock";
import { Reveal } from "@/components/site/reveal";

const VORHER_NACHHER = [
  { was: "Auf dem Handy", vorher: "muss man zoomen", nachher: "passt sofort" },
  { was: "Ladezeit", vorher: "6 Sekunden", nachher: "unter 1 Sekunde" },
  { was: "Termin machen", vorher: "nur telefonisch", nachher: "rund um die Uhr" },
  { was: "Letzte Änderung", vorher: "vor 9 Jahren", nachher: "diesen Monat" },
];

export function Report() {
  return (
    <section
      id="check"
      className="border-y border-hairline bg-surface py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1024px] px-5">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2">
            <span className="text-[13px] font-semibold tracking-wide text-brand">
              Der Check vorher
            </span>
            <h2 className="headline mt-3 text-[clamp(2rem,4.5vw,3.4rem)]">
              Ich schaue erst,
              <br />
              dann melde ich mich.
            </h2>
            <p className="mt-6 text-[1.06rem] leading-relaxed text-muted">
              Bevor ich irgendwem schreibe, sehe ich mir die vorhandene Seite an.
              Lädt sie schnell? Funktioniert sie auf dem Handy? Kann man einen
              Termin machen? Ist sie überhaupt noch aktuell?
            </p>
            <p className="mt-4 text-[1.06rem] leading-relaxed text-muted">
              Nur wenn dabei etwas herauskommt, das wirklich besser sein könnte,
              baue ich eine neue Version. Sonst wäre es Zeitverschwendung, für
              uns beide.
            </p>
            <div className="mt-8 rounded-2xl border border-hairline bg-background p-5 text-[0.95rem] leading-relaxed text-muted">
              <b className="font-semibold text-foreground">
                Du bekommst keine Vorlage mit deinem Logo drauf.
              </b>{" "}
              Ich nehme echte Fotos von deinem Profil, deine Leistungen und deine
              Preise. Sonst sieht es aus wie von der Stange.
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:order-1">
            <div className="relative overflow-hidden rounded-[26px] border border-hairline shadow-[0_30px_80px_-40px_rgba(0,0,0,.55)]">
              <CheckMock />
            </div>
          </Reveal>
        </div>

        {/* Vorher und nachher im Direktvergleich */}
        <Reveal className="mx-auto mt-24 max-w-2xl text-center">
          <span className="text-[13px] font-semibold tracking-wide text-brand">
            Vorher und nachher
          </span>
          <h3 className="headline mt-3 text-[clamp(1.7rem,3.4vw,2.5rem)]">
            Was sich konkret ändert.
          </h3>
          <p className="mt-4 text-[1rem] leading-relaxed text-muted">
            Nicht schöner um des Schönen willen. Sondern so, dass am Ende mehr
            Leute anrufen.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {VORHER_NACHHER.map((p, i) => (
            <Reveal key={p.was} delay={(i % 2) * 0.08}>
              <div className="flex h-full items-center gap-4 rounded-[20px] border border-hairline bg-background p-6">
                <div className="min-w-0 flex-1">
                  <div className="text-[0.95rem] font-semibold tracking-tight">
                    {p.was}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-[12.5px]">
                    <span className="rounded-full bg-foreground/[0.06] px-2.5 py-1 text-muted-2 line-through">
                      {p.vorher}
                    </span>
                    <ArrowRight className="size-3.5 text-muted-2" />
                    <span className="rounded-full bg-brand-3/15 px-2.5 py-1 font-semibold text-brand-3">
                      {p.nachher}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-muted-2">
          Beispielhafte Darstellung. Was bei dir konkret anders wird, siehst du
          an deiner fertigen Seite.
        </p>
      </div>
    </section>
  );
}
