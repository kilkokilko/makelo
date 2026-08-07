import type { Metadata } from "next";
import Link from "next/link";

import { Legal, LegalSection } from "@/components/site/legal";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen von makelo.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/agb" },
};

export default function AgbPage() {
  return (
    <Legal title="Allgemeine Geschäftsbedingungen" updated="August 2026">
      <LegalSection heading="§ 1 Geltungsbereich">
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle
          Geschäftsbeziehungen zwischen Mika Clausnitzer, Am Raakmoorgraben 29,
          22335 Hamburg (nachfolgend „Makelo“) und dem Kunden. Abweichende
          Bedingungen des Kunden werden nicht anerkannt, es sei denn, Makelo
          stimmt ihrer Geltung ausdrücklich schriftlich zu.
        </p>
      </LegalSection>

      <LegalSection heading="§ 2 Leistungsbeschreibung">
        <p>
          Makelo erstellt und betreibt Websites für Gewerbetreibende,
          insbesondere:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Konzeption und Erstellung einer für mobile Endgeräte optimierten
            Website
          </li>
          <li>Bereitstellung von Hosting und einer Domain für die Laufzeit</li>
          <li>
            Einrichtung von Impressum und Datenschutzerklärung nach Angaben des
            Kunden
          </li>
          <li>
            Suchmaschinenoptimierung im Rahmen der Seitenstruktur und Inhalte
          </li>
          <li>
            Auf Wunsch Einbindung einer Online-Terminbuchung eines
            Drittanbieters
          </li>
        </ul>
        <p>
          Der genaue Leistungsumfang ergibt sich aus dem individuellen Angebot.
        </p>
      </LegalSection>

      <LegalSection heading="§ 3 Vertragsschluss">
        <p>
          Makelo erstellt einen Entwurf der Website, bevor ein Vertrag
          zustandekommt. Der Kunde ist zu diesem Zeitpunkt zu keiner Zahlung
          verpflichtet. Ein Vertrag kommt erst durch die ausdrückliche Annahme
          des Angebots durch den Kunden in Textform zustande. Die Darstellung der
          Leistungen auf dieser Website stellt kein rechtlich bindendes Angebot
          dar.
        </p>
      </LegalSection>

      <LegalSection heading="§ 4 Vergütung und Zahlungsbedingungen">
        <p>
          Die Vergütung ergibt sich aus dem jeweiligen Angebot und wird als
          monatliche Pauschale abgerechnet. Eine Anfangs- oder Setup-Gebühr fällt
          nicht an. In der Pauschale enthalten sind Hosting, Domain, technischer
          Betrieb und die in § 5 genannten Überarbeitungen. Rechnungen sind
          innerhalb von 7 Tagen nach Rechnungsstellung ohne Abzug fällig.
        </p>
        <p>
          Alternativ kann eine jährliche Vorauszahlung vereinbart werden. Die
          Höhe ergibt sich aus dem individuellen Angebot.
        </p>
      </LegalSection>

      <LegalSection heading="§ 5 Änderungen und Pflege">
        <p>
          Im Leistungsumfang enthalten sind zwei Überarbeitungen der Website pro
          Vertragsjahr, etwa für geänderte Preise, Öffnungszeiten,
          Teammitglieder oder Leistungen. Umfangreichere Umbauten, zusätzliche
          Unterseiten oder eine vollständige Neugestaltung sind nicht enthalten
          und werden gesondert angeboten.
        </p>
      </LegalSection>

      <LegalSection heading="§ 6 Mitwirkungspflichten des Kunden">
        <p>
          Der Kunde stellt Makelo alle für die Leistungserbringung erforderlichen
          Informationen und Materialien rechtzeitig zur Verfügung. Dazu gehören
          insbesondere:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Angaben für Impressum und Datenschutzerklärung</li>
          <li>Leistungen, Preise, Öffnungszeiten und Kontaktdaten</li>
          <li>Bildmaterial, soweit eigene Fotos verwendet werden sollen</li>
          <li>Rückmeldung zu Entwürfen in angemessener Frist</li>
        </ul>
        <p>
          Der Kunde versichert, dass er an den überlassenen Texten und Bildern
          die erforderlichen Rechte besitzt.
        </p>
      </LegalSection>

      <LegalSection heading="§ 7 Laufzeit und Kündigung">
        <p>
          Die Mindestvertragslaufzeit beträgt 6 Monate ab Veröffentlichung der
          Website. Nach Ablauf der Mindestlaufzeit verlängert sich der Vertrag
          jeweils um einen weiteren Monat, sofern er nicht mit einer Frist von 30
          Tagen zum Ende des jeweiligen Verlängerungszeitraums gekündigt wird.
          Die Kündigung bedarf der Textform (E-Mail genügt).
        </p>
      </LegalSection>

      <LegalSection heading="§ 8 Domain und Nutzungsrechte">
        <p>
          Für die Dauer des Vertrags erhält der Kunde das Recht, die von Makelo
          erstellte Website für seinen Geschäftsbetrieb zu nutzen. Wird eine
          Domain über Makelo bereitgestellt, kann der Kunde nach Ende der
          Mindestlaufzeit deren Übertragung auf sich verlangen. Die dabei
          anfallenden Gebühren des Registrars trägt der Kunde.
        </p>
      </LegalSection>

      <LegalSection heading="§ 9 Haftung">
        <p>
          Makelo haftet unbeschränkt für Schäden aus der Verletzung des Lebens,
          des Körpers oder der Gesundheit sowie für vorsätzlich oder grob
          fahrlässig verursachte Schäden. Im Übrigen ist die Haftung auf den
          vorhersehbaren, vertragstypischen Schaden begrenzt. Makelo schuldet
          keinen bestimmten wirtschaftlichen Erfolg, insbesondere keine bestimmte
          Anzahl an Anfragen oder eine bestimmte Platzierung bei Suchmaschinen,
          da diese von Faktoren außerhalb des Einflussbereichs von Makelo
          abhängen.
        </p>
      </LegalSection>

      <LegalSection heading="§ 10 Verfügbarkeit">
        <p>
          Makelo bemüht sich um eine möglichst durchgängige Erreichbarkeit der
          Website. Kurzzeitige Unterbrechungen durch Wartung, technische
          Störungen beim Hostinganbieter oder höhere Gewalt begründen keinen
          Anspruch auf Minderung.
        </p>
      </LegalSection>

      <LegalSection heading="§ 11 Datenschutz">
        <p>
          Makelo verarbeitet personenbezogene Daten des Kunden ausschließlich zur
          Vertragserfüllung und im Einklang mit der DSGVO. Weitere Informationen
          entnehmen Sie unserer{" "}
          <Link href="/datenschutz" className="text-brand hover:underline">
            Datenschutzerklärung
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection heading="§ 12 Vertraulichkeit">
        <p>
          Beide Parteien verpflichten sich, vertrauliche Informationen der
          jeweils anderen Partei nicht an Dritte weiterzugeben und nur im Rahmen
          der Vertragserfüllung zu verwenden. Diese Pflicht besteht auch nach
          Beendigung des Vertragsverhältnisses fort.
        </p>
      </LegalSection>

      <LegalSection heading="§ 13 Schlussbestimmungen">
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist
          Hamburg, sofern der Kunde Kaufmann, juristische Person des öffentlichen
          Rechts oder öffentlich-rechtliches Sondervermögen ist. Sollten einzelne
          Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der
          übrigen Bestimmungen unberührt.
        </p>
      </LegalSection>
    </Legal>
  );
}
