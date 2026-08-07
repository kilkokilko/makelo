import Link from "next/link";

import { EMAIL, INSTAGRAM, MAILTO, TIKTOK } from "@/lib/site";

const COLUMNS = [
  {
    title: "Website",
    links: [
      { label: "Das Problem", href: "/#problem" },
      { label: "Was drin ist", href: "/#leistungen" },
      { label: "Der Check vorher", href: "/#check" },
      { label: "Beispiele", href: "/#beispiele" },
      { label: "Warum so günstig", href: "/#warum" },
      { label: "Ablauf", href: "/#ablauf" },
      { label: "Preis", href: "/#preis" },
    ],
  },
  {
    title: "makelo",
    links: [
      { label: EMAIL, href: MAILTO },
      { label: "Instagram", href: INSTAGRAM, external: true },
      { label: "TikTok", href: TIKTOK, external: true },
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-background py-16">
      <div className="mx-auto max-w-[1024px] px-5">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Link
              href="/#top"
              className="flex items-center gap-2 text-[19px] font-bold tracking-tight"
            >
              makelo<span className="text-brand">.</span>
            </Link>
            <p className="mt-4 max-w-[42ch] text-[0.92rem] leading-relaxed text-muted">
              Websites für lokale Betriebe. Fertig gebaut, bevor du dich
              entscheidest. 39 Euro im Monat, Hosting und Domain inklusive.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={MAILTO}
                className="rounded-full bg-brand px-5 py-2.5 text-[13.5px] font-medium text-white transition-transform duration-300 hover:scale-[1.04]"
              >
                Website ansehen
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-hairline px-5 py-2.5 text-[13.5px] font-medium transition-colors duration-300 hover:bg-surface"
              >
                Auf Instagram schreiben
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[12px] font-semibold tracking-widest text-muted-2 uppercase">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => {
                  const external = "external" in l && l.external;
                  const className =
                    "text-[0.9rem] text-muted transition-colors hover:text-foreground";

                  return (
                    <li key={l.label}>
                      {external || l.href.startsWith("mailto:") ? (
                        <a
                          href={l.href}
                          {...(external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className={className}
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href} className={className}>
                          {l.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-hairline pt-8 text-[12px] leading-relaxed text-muted-2">
          <p>© {new Date().getFullYear()} makelo. Alle Rechte vorbehalten.</p>
          <p className="mt-1">
            Mika Clausnitzer · Am Raakmoorgraben 29 · 22335 Hamburg ·{" "}
            <a href={MAILTO} className="text-brand hover:underline">
              {EMAIL}
            </a>
          </p>
          <p className="mt-1">
            Die gezeigten Beispielseiten dienen der Veranschaulichung. Alle
            Preise verstehen sich zuzüglich Umsatzsteuer, sofern ausgewiesen.
          </p>
        </div>
      </div>
    </footer>
  );
}
