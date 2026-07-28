# GOT-OP-Kosten-Rechner von Hello Hund

Der GOT-OP-Kosten-Rechner ordnet einzelne amtliche Gebührenpositionen für Operationen beim Hund ein. Er zeigt den Netto- und Bruttowert beim einfachen, zweifachen oder dreifachen Satz. Die Berechnung läuft vollständig im Browser.

[Rechner, vollständige Tabelle und Methodik bei Hello Hund](https://hello-hund.de/hunde-op-kosten/?utm_source=github&utm_medium=software_documentation&utm_campaign=got_op_kosten_widget)

## Was der Rechner leistet

- Auswahl einzelner in der Gebührenordnung für Tierärztinnen und Tierärzte aufgeführter Positionen
- Berechnung mit dem einfachen, zweifachen oder dreifachen regulären Satz
- getrennte Darstellung von Nettowert, 19 Prozent Umsatzsteuer und Bruttowert
- werbefreie und trackingfreie Einbettung per `iframe`
- keine Eingabe, Speicherung oder Übertragung von Gesundheitsdaten

## Wichtige Grenze

Der Rechner zeigt immer nur den Wert der ausgewählten Gebührenposition. Eine tatsächliche Rechnung kann zusätzlich Untersuchung, Diagnostik, Narkose, Überwachung, Medikamente, Verbrauchsmaterial, Fremdlabor, Klinikaufenthalt und Nachsorge enthalten.

Der Rechner ist kein Kostenvoranschlag und ersetzt keine tierärztliche Beratung. In einem akuten Notfall zählt die tierärztliche Versorgung und nicht die Online-Berechnung.

## Einbettung

Die vollständige Fassung liegt in [`embed-code.html`](embed-code.html). Die Kurzfassung:

```html
<iframe
  class="hello-hund-op-cost-widget"
  src="https://hello-hund.de/hunde-op-kosten-rechner-widget/"
  title="GOT-OP-Kosten-Rechner von Hello Hund"
  width="100%"
  height="860"
  loading="lazy"
  sandbox="allow-scripts allow-same-origin">
</iframe>
```

Für eine automatisch angepasste Höhe sollte der vollständige Code verwendet werden. Er akzeptiert Größenmeldungen ausschließlich vom Ursprung `https://hello-hund.de` und vom eingebetteten Frame.

## Datenbasis

Die Auswahl basiert auf der deutschen Gebührenordnung für Tierärztinnen und Tierärzte. Datenstand dieser Version: 20. Juli 2026.

- [Gebührenordnung für Tierärztinnen und Tierärzte (GOT)](https://www.gesetze-im-internet.de/got_2022/GOT.pdf)
- [Bundestierärztekammer: Gebührenordnung](https://www.bundestieraerztekammer.de/tieraerzte/beruf/got/)

Die Auswahl der dargestellten Positionen ist eine redaktionelle Zusammenstellung. Sie ist keine vollständige Abbildung aller abrechenbaren Leistungen.

## Datenschutz

Das Widget:

- setzt keine Cookies;
- lädt keine Werbung, Analyse- oder Drittanbieter-Skripte;
- fragt keine personenbezogenen oder tiermedizinischen Angaben ab;
- verarbeitet Auswahl und Berechnung nur im Browser;
- sendet lediglich seine benötigte Darstellungshöhe an die einbettende Seite.

Weitere Einzelheiten stehen in [`PRIVACY.md`](PRIVACY.md).

## Zitierhinweis

> Hello Hund Redaktion (2026): GOT-OP-Kosten-Rechner für Hunde, Version 1.0. Datenstand 20. Juli 2026. https://hello-hund.de/hunde-op-kosten/

Maschinenlesbare Angaben stehen in [`CITATION.cff`](CITATION.cff) und [`codemeta.json`](codemeta.json).

## Lizenz

Einbettungscode und Dokumentation stehen unter der MIT-Lizenz. Die amtliche GOT und die verlinkten amtlichen Quellen behalten ihre eigenen rechtlichen Bedingungen.
