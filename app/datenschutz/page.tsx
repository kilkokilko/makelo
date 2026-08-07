import type { Metadata } from "next";

import { Legal, LegalSection } from "@/components/site/legal";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von makelo gemäß DSGVO.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  return (
    <Legal title="Datenschutzerklärung" updated="August 2026">
      <LegalSection heading="1. Verantwortlicher">
        <p>
          Mika Clausnitzer
          <br />
          Am Raakmoorgraben 29
          <br />
          22335 Hamburg
          <br />
          E-Mail: kimi@makelo-agency.de
        </p>
      </LegalSection>

      <LegalSection heading="2. Erhebung und Speicherung personenbezogener Daten">
        <p>
          Beim Besuch unserer Website werden automatisch Informationen durch den
          Browser übermittelt und in sogenannten Server-Log-Dateien gespeichert.
          Dies sind:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Browsertyp und Browserversion</li>
          <li>Verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>
          Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
          vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art.
          6 Abs. 1 lit. f DSGVO.
        </p>
      </LegalSection>

      <LegalSection heading="3. Kontaktaufnahme">
        <p>
          Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren,
          werden Ihre Angaben (Name, E-Mail-Adresse, Nachrichteninhalt) zur
          Bearbeitung Ihrer Anfrage bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf
          Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
        </p>
      </LegalSection>

      <LegalSection heading="4. Hosting">
        <p>
          Diese Website wird bei einem externen Dienstleister gehostet. Der
          Anbieter verarbeitet die oben genannten Server-Log-Daten in unserem
          Auftrag auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Mit dem Anbieter
          besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28 DSGVO.
        </p>
      </LegalSection>

      <LegalSection heading="5. Schriftarten">
        <p>
          Diese Website nutzt die Schriftart Inter. Sie wird beim Build in die
          Seite eingebettet und lokal ausgeliefert, es findet also keine
          Verbindung zu Servern Dritter statt.
        </p>
      </LegalSection>

      <LegalSection heading="6. Tracking">
        <p>
          Auf dieser Website setzen wir keine Tracking-Tools, Analyse-Dienste
          oder Werbe-Pixel ein. Es werden keine Cookies gesetzt, die einer
          Einwilligung bedürfen.
        </p>
      </LegalSection>

      <LegalSection heading="7. Ihre Rechte">
        <p>Sie haben jederzeit das Recht auf:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten
            (Art. 15 DSGVO)
          </li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:
          kimi@makelo-agency.de
        </p>
      </LegalSection>

      <LegalSection heading="8. SSL-Verschlüsselung">
        <p>
          Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine
          verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des
          Browsers von „http://“ auf „https://“ wechselt und an dem
          Schloss-Symbol in Ihrer Browserzeile.
        </p>
      </LegalSection>

      <LegalSection heading="9. Änderungen dieser Datenschutzerklärung">
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung gelegentlich
          anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen
          entspricht. Die jeweils aktuelle Fassung gilt für Ihren erneuten
          Besuch.
        </p>
      </LegalSection>
    </Legal>
  );
}
