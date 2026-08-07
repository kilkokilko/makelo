import { Reveal } from "@/components/site/reveal";

const STEPS = [
  {
    kw: "Schritt 1",
    title: "Ich baue sie",
    body: "Ich schaue mir deinen Betrieb an, nehme echte Fotos und deine Leistungen und baue die Seite fertig. Ohne dass du etwas tun musst.",
  },
  {
    kw: "Schritt 2",
    title: "Du siehst sie",
    body: "Du bekommst ein kurzes Video: einmal auf dem Handy, einmal am Rechner. Angucken kannst du das, wann du Zeit hast.",
  },
  {
    kw: "Schritt 3",
    title: "Wir ändern, was stört",
    body: "Andere Farbe, anderer Text, ein Bild raus. Sag einfach was, ich passe es an. Das gehört noch dazu und kostet nichts.",
  },
  {
    kw: "Schritt 4",
    title: "Sie geht online",
    body: "Domain, Hosting, Impressum, alles fertig eingerichtet. Ab dann 39 Euro im Monat, und ich halte sie aktuell.",
  },
];

export function Process() {
  return (
    <section
      id="ablauf"
      className="border-y border-hairline bg-surface py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1024px] px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-semibold tracking-wide text-brand">
            So läuft es ab
          </span>
          <h2 className="headline mt-3 text-[clamp(2rem,4.5vw,3.4rem)]">
            Vier Schritte. Kein Risiko.
          </h2>
          <p className="mt-5 text-[1.06rem] text-muted">
            Bis zum letzten Schritt hast du keinen Cent gezahlt.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.kw} delay={i * 0.09}>
              <div className="relative h-full overflow-hidden rounded-[22px] border border-hairline bg-background p-8">
                <span className="pointer-events-none absolute -top-3 right-5 select-none text-[5rem] font-bold tracking-tighter text-foreground/[0.045]">
                  {i + 1}
                </span>
                <span className="text-[12px] font-semibold tracking-widest text-brand uppercase">
                  {s.kw}
                </span>
                <h3 className="mt-3 text-[1.35rem] font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
