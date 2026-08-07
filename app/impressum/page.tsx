import type { Metadata } from "next";

import { Legal, LegalSection } from "@/components/site/legal";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von makelo. Mika Clausnitzer, Am Raakmoorgraben 29, 22335 Hamburg.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <Legal title="Impressum">
      <LegalSection heading="Angaben gemäß § 5 TMG">
        <p>
          Mika Clausnitzer
          <br />
          Am Raakmoorgraben 29
          <br />
          22335 Hamburg
        </p>
      </LegalSection>

      <LegalSection heading="Kontakt">
        <p>E-Mail: kimi@makelo-agency.de</p>
      </LegalSection>

      <LegalSection heading="Umsatzsteuer-ID">
        <p>
          Umsatzsteueridentifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          folgt
        </p>
      </LegalSection>

      <LegalSection heading="Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV">
        <p>
          Mika Clausnitzer
          <br />
          Am Raakmoorgraben 29
          <br />
          22335 Hamburg
        </p>
      </LegalSection>

      <LegalSection heading="Haftung für Inhalte">
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
          Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </LegalSection>

      <LegalSection heading="Haftung für Links">
        <p>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
          Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
          waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
      </LegalSection>

      <LegalSection heading="Urheberrecht">
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>
      </LegalSection>
    </Legal>
  );
}
