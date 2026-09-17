# Fintra CRM Mobile

Eigenständiger Android-App-Prototyp auf Basis von Expo/React Native. Die App enthält ein mobiles Dashboard, die vollständige Fachnavigation, eine filterbare Kundenliste, eine Kundenakte mit Aufgaben, Dokumenten und Verlauf sowie einen Fotoimport für Kundendaten. Alle enthaltenen Personen und Daten sind fiktiv.

Der Fotoimport bildet bereits den vollständigen Bedienablauf ab: Kamera/Galerie, Erkennung, editierbare Kontrollmaske und bestätigtes Speichern. Die produktive OCR-/KI-Erkennung wird bewusst erst über ein abgesichertes Backend angebunden; ein API-Schlüssel darf nie in der App hinterlegt werden.

## Lokal starten

1. Node.js installieren.
2. Im Projektordner `npm install` ausführen.
3. Mit `npm run start` starten und über Expo Go testen.

## Interne Android-Testversion

1. Kostenloses Expo-Konto erstellen und `npx eas login` ausführen.
2. Mit `npm run build:android` eine installierbare APK für geschlossene Tests erstellen.

## Google Play

1. Die Paket-ID `ch.fintra.crm` im Google-Play-Konto reservieren.
2. Google-Play-Entwicklerkonto und Store-Eintrag einrichten.
3. Datenschutzerklärung, Datensicherheitsformular, App-Icon und Screenshots finalisieren.
4. Mit `npm run build:playstore` das signierte Android App Bundle erstellen.
5. Das `.aab` zunächst in den internen Testkanal der Play Console hochladen.

## Vor echten Kundendaten zwingend

- Backend und Datenbank in einer freigegebenen Schweizer/EU-Infrastruktur
- individuelle Benutzerkonten, 2FA und Rollen/Berechtigungen
- TLS, Verschlüsselung gespeicherter Daten und sichere Schlüsselverwaltung
- Audit-Log, Backups, Aufbewahrungs- und Löschkonzept
- Session-Sperre und biometrische Entsperrung
- Penetrationstest, Datenschutz-Folgenprüfung und Freigabe durch Datenschutz/Compliance
- keine Kundendaten in App-Logs, Analytics oder unverschlüsselten lokalen Speichern

Der aktuelle Stand ist bewusst ein Demo-Frontend ohne produktive Datenanbindung.
