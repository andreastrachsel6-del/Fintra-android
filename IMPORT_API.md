# Schnittstelle für Fotoimport

Die App sendet das ausgewählte Bild ausschliesslich an ein abgesichertes Backend. Ein OCR- oder KI-Schlüssel darf niemals in der mobilen App gespeichert werden.

## Ablauf

1. App fordert ein kurzlebiges Upload-Token an.
2. Bild wird per TLS übertragen und serverseitig verschlüsselt verarbeitet.
3. OCR/KI liefert strukturierte Felder inklusive Konfidenzwert und Quellenbereich.
4. Werte unter der definierten Konfidenzschwelle werden als `needs_review` markiert.
5. Die App zeigt alle Felder editierbar an.
6. Erst nach Bestätigung wird ein Kundenentwurf gespeichert.
7. Das Originalbild wird gemäss Richtlinie gelöscht oder als Kundendokument archiviert.

## Erwartete Antwort

```json
{
  "import_id": "opaque-id",
  "fields": {
    "first_name": { "value": "Martin", "confidence": 0.98, "needs_review": false },
    "last_name": { "value": "Muster", "confidence": 0.98, "needs_review": false },
    "date_of_birth": { "value": "1994-01-26", "confidence": 0.72, "needs_review": true },
    "email": { "value": "martin.muster@beispiel.ch", "confidence": 0.96, "needs_review": false },
    "phone": { "value": "+41795558975", "confidence": 0.91, "needs_review": false },
    "address": { "value": "Weidengasse 33", "confidence": 0.89, "needs_review": false },
    "postal_code": { "value": "4052", "confidence": 0.94, "needs_review": false },
    "city": { "value": "Basel", "confidence": 0.95, "needs_review": false }
  }
}
```

Das Backend muss Dateityp und Dateigrösse prüfen, Malware-Scanning anwenden, Metadaten minimieren, Zugriffe protokollieren und Mandanten strikt trennen.
