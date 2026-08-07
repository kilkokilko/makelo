import { Reveal } from "@/components/site/reveal";
import { SiteMock } from "@/components/site/site-mock";
import { TextAnimate } from "@/components/ui/text-animate";

const STATS = [
  { n: "39 €", l: "im Monat, alles inklusive" },
  { n: "0 €", l: "Anfangszahlung" },
  { n: "1.500 €", l: "nimmt eine Agentur mindestens" },
  { n: "6", l: "Monate Mindestlaufzeit, sonst nichts" },
];

export function Problem() {
  return (
    <section id="problem" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1024px] px-5">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="text-[13px] font-semibold tracking-wide text-brand">
              Das Problem
            </span>
            <h2 className="headline mt-3 text-[clamp(2rem,4.5vw,3.4rem)]">
              <TextAnimate as="span" by="line" animation="blurInUp" once className="block">
                {"Erst googeln sie dich.\nDann rufen sie an."}
              </TextAnimate>
            </h2>
            <p className="mt-6 text-[1.06rem] leading-relaxed text-muted">
              Kaum jemand ruft heute an, ohne vorher kurz nachzuschauen. Und was
              dabei auf dem Handy erscheint, entscheidet in wenigen Sekunden, ob
              jemand anruft oder weiterscrollt.
            </p>
            <p className="mt-4 text-[1.06rem] leading-relaxed text-muted">
              Keine Website, eine von 2014 oder eine, die auf dem Handy zerfällt:
              Das Ergebnis ist jedes Mal dasselbe. Der Auftrag geht an den, der
              online besser aussieht, nicht an den, der besser arbeitet.
            </p>
            <div className="mt-8 rounded-2xl border border-hairline bg-surface p-5 text-[0.95rem] leading-relaxed text-muted">
              <b className="font-semibold text-foreground">
                Eine Agentur nimmt dafür 1.500 bis 4.000 Euro einmalig.
              </b>{" "}
              Bei mir sind es 39 Euro im Monat, und du siehst die fertige Seite,
              bevor du dich entscheidest.
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[26px] border border-hairline shadow-[0_30px_80px_-40px_rgba(0,0,0,.55)]">
              <SiteMock className="min-h-[440px]" showPhone={false} />
            </div>
          </Reveal>
        </div>

        {/* Zahlen */}
        <div className="mt-24 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-hairline pt-14 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07} className="text-center">
              <div className="headline text-[clamp(2.4rem,5vw,3.6rem)] grad-text">
                {s.n}
              </div>
              <div className="mt-2 text-[13px] leading-snug text-muted-2">
                {s.l}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
