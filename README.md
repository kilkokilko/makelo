# makelo. Website

Next.js 16 (App Router, statischer Export) plus Tailwind v4. Gleiches Design-System
wie die Schwercraft-Seite: Apple-Tokens in `app/globals.css`, `Reveal` und
`TextAnimate` für die Scroll-Animationen, `components/ui/*` für Kinetic Grid, Globe,
Particles, Liquid Glass und Konfetti.

Inhaltlich verkauft die Seite das aktuelle Angebot: fertige Websites für lokale
Betriebe, 39 Euro im Monat, Hosting und Domain inklusive, gebaut bevor der Kunde
zusagt.

## Entwicklung

```bash
npm install
npm run dev
```

http://localhost:3000

## Build

```bash
npm run build
```

`output: "export"`. Der Build landet als statisches Bundle in `out/`.

## Deployment

Die Seite laeuft als Cloudflare Worker mit statischen Assets, angebunden an das
GitHub-Repo `kilkokilko/makelo`. Ein Push auf `main` loest Build und Deployment aus.

`wrangler.jsonc` sagt dem Worker, dass er `out/` ausliefern soll. Im Cloudflare
Dashboard unter Build configuration muss stehen:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Root directory: `/`

Es gibt kein Worker-Skript. Der Worker ist reines Hosting fuer die exportierten
Dateien.

## Struktur

- `app/page.tsx` setzt die Sections der Startseite zusammen
- `app/impressum|datenschutz|agb` sind die Rechtstexte
- `components/site/*` sind die Sections
- `components/site/site-mock.tsx` zeigt fertige Kundenseiten im Browserfenster,
  `check-mock.tsx` den Website-Check, `showcase-card.tsx` die Branchenkacheln.
  Das sind die Stellen, an denen die Schwercraft-Vorlage Produktvideos hat
- `components/ui/*` sind die generischen Effekt-Komponenten, unverändert übernommen
- `lib/site.ts` hält Mailadresse, Instagram und den Preis an einer Stelle

## Vor dem Livegang prüfen

- Die AGB in `app/agb/page.tsx` beschreiben 6 Monate Mindestlaufzeit, keine
  Setup-Gebühr und zwei Überarbeitungen im Jahr. Das muss zu dem passen, was du
  tatsächlich verkaufst
- Der Preis steht in `lib/site.ts` und zusätzlich als Text in `pricing.tsx`,
  `problem.tsx`, `no-ads.tsx` und `hero.tsx`
- Die Beispielseiten in `site-mock.tsx` und `answers.tsx` sind erfunden. Sobald es
  echte Kundenseiten gibt, gehören die dort hinein
