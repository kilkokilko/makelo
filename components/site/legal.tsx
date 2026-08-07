import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";

import { Footer } from "@/components/site/footer";

/**
 * Rahmen für die Rechtstexte. Gleiche Tokens wie der Rest der Seite,
 * aber ohne Effekte, damit die Texte gut lesbar bleiben.
 */
export function Legal({
  title,
  children,
  updated,
}: {
  title: string;
  children: ReactNode;
  updated?: string;
}) {
  return (
    <>
      <header className="border-b border-hairline bg-background">
        <div className="mx-auto flex h-14 max-w-[720px] items-center justify-between px-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Zurück zur Startseite
          </Link>
          <Link href="/" className="text-[16px] font-bold tracking-tight">
            makelo<span className="text-brand">.</span>
          </Link>
        </div>
      </header>

      <main className="bg-background">
        <div className="mx-auto max-w-[720px] px-5 pt-16 pb-24">
          <h1 className="headline text-[clamp(2rem,5vw,2.75rem)]">{title}</h1>
          <div className="mt-10">{children}</div>
          {updated ? (
            <p className="mt-12 text-[13px] text-muted-2">Stand: {updated}</p>
          ) : null}
        </div>
      </main>

      <Footer />
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="text-[1.05rem] font-semibold tracking-tight">{heading}</h2>
      <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-muted">
        {children}
      </div>
    </section>
  );
}
