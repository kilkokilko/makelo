import { Check, X } from "lucide-react";

import { Reveal } from "@/components/site/reveal";

const BAD = [
  "1.500 bis 4.000 Euro, bevor irgendwas steht",
  "Wochen Vorlauf, Termine, Abstimmungsrunden",
  "Jede spätere Änderung kostet extra",
  "Hosting und Domain kommen obendrauf",
];

const GOOD = [
  "39 Euro im Monat, keine Anfangszahlung",
  "Die Seite steht, bevor du zusagst",
  "Zwei Überarbeitungen im Jahr inklusive",
  "Hosting, Domain und Technik sind dabei",
];

export function NoAds() {
  return (
    <section
      id="warum"
      className="border-y border-hairline bg-surface py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1024px] px-5">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="text-[13px] font-semibold tracking-wide text-brand">
              Warum so günstig
            </span>
            <h2 className="headline mt-3 text-[clamp(2rem,4.5vw,3.4rem)]">
              Kein Büro.
              <br />
              Keine Zwischenschicht.
            </h2>
            <p className="mt-6 text-[1.06rem] leading-relaxed text-muted">
              Bei einer Agentur zahlst du Projektleitung, Miete und drei Meetings
              mit, bevor jemand die erste Zeile schreibt. Bei mir gibt es das
              alles nicht.
            </p>
            <p className="mt-4 text-[1.06rem] leading-relaxed text-muted">
              Ich baue selbst, schicke dir ein Video statt einen Termin zu
              suchen, und du entscheidest in Ruhe. Deshalb funktionieren 39 Euro
              im Monat, ohne dass an der Seite gespart wird.
            </p>

            <dl className="mt-9 grid grid-cols-2 gap-6 border-t border-hairline pt-8">
              <div>
                <dt className="headline text-[2rem] grad-text">39 €</dt>
                <dd className="mt-1 text-[13px] text-muted-2">
                  im Monat, alles inklusive
                </dd>
              </div>
              <div>
                <dt className="headline text-[2rem] grad-text">1.500 €</dt>
                <dd className="mt-1 text-[13px] text-muted-2">
                  nimmt eine Agentur mindestens, einmalig
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4">
              <div className="rounded-[26px] border border-hairline bg-background p-7">
                <span className="text-[11.5px] font-semibold tracking-widest text-muted-2 uppercase">
                  Bei einer Agentur
                </span>
                <h3 className="mt-2 text-[1.2rem] font-semibold tracking-tight">
                  Der teure Weg
                </h3>
                <ul className="mt-5 space-y-3">
                  {BAD.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[0.93rem]">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-rose-500/15 text-rose-400">
                        <X className="size-2.5" strokeWidth={3} />
                      </span>
                      <span className="text-muted">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[26px] border border-brand/35 bg-background p-7 shadow-[0_30px_80px_-40px_rgba(10,132,255,.5)]">
                <span className="text-[11.5px] font-semibold tracking-widest text-brand uppercase">
                  Bei makelo
                </span>
                <h3 className="mt-2 text-[1.2rem] font-semibold tracking-tight">
                  Der einfache Weg
                </h3>
                <ul className="mt-5 space-y-3">
                  {GOOD.map((g) => (
                    <li key={g} className="flex items-start gap-2.5 text-[0.93rem]">
                      <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-brand-3/15 text-brand-3">
                        <Check className="size-2.5" strokeWidth={3} />
                      </span>
                      <span className="text-muted">{g}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
