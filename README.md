# TC Oberpöring Website

Moderne, responsive Website für den Tennisclub Oberpöring e.V.

## Über diese Website

Diese Website ist eine moderne, mobilfreundliche Version der TC Oberpöring Homepage. Sie wurde von einer einzelnen, Xara-generierten HTML-Datei in eine strukturierte, wartbare Website umgewandelt.

## Struktur

```
/
├── index.html                      # Startseite
├── aktuelles.html                  # Neuigkeiten
├── termine.html                    # Termine und Veranstaltungen
├── training.html                   # Trainingsplan und Betreuerteam
├── spielbetrieb-jugend.html        # Jugendspielbetrieb
├── spielbetrieb-erwachsene.html    # Erwachsenenspielbetrieb (Sommer)
├── spielbetrieb-winterrunde.html   # Erwachsenenspielbetrieb (Winter)
├── vereinsmeister.html             # Vereinsmeisterschaften
├── dorfmeisterschaft.html          # Dorfmeisterschaften
├── jugendfoerderung.html           # Jugendförderung
├── beitraege.html                  # Mitgliedsbeiträge
├── dokumente.html                  # Downloads und Dokumente
├── impressum.html                  # Impressum
├── vorstand.html                   # Vorstand und Kontakt
├── datenschutz.html                # Datenschutzerklärung
├── css/
│   ├── main.css                    # Haupt-Stylesheet
│   └── responsive.css              # Responsive Design
├── js/
│   ├── navigation.js               # Navigation und Menü
│   └── main.js                     # Allgemeine Funktionen
├── images/                         # Bilder und Logos
├── documents/                      # PDF-Dokumente
├── index_htm_files/                # Original-Assets (Bilder, PDFs)
├── CNAME                           # Domain-Konfiguration
├── robots.txt                      # Suchmaschinen-Einstellungen
└── sitemap.xml                     # Sitemap
```

## Inhalte aktualisieren

### Texte ändern

1. Öffnen Sie die entsprechende HTML-Datei (z.B. `aktuelles.html` für Neuigkeiten)
2. Suchen Sie den zu ändernden Text
3. Ändern Sie den Text zwischen den HTML-Tags
4. Speichern Sie die Datei

**Beispiel:**
```html
<h3>Neue Nachricht</h3>
<p>Hier steht der Text der Nachricht.</p>
```

### Neue Nachricht auf der Aktuelles-Seite hinzufügen

1. Öffnen Sie `aktuelles.html`
2. Fügen Sie einen neuen Block ein:

```html
<div class="news-item">
    <h3>Titel der Nachricht</h3>
    <p class="news-date">Datum</p>
    <p>Text der Nachricht...</p>
</div>
```

3. Speichern Sie die Datei

### Dokumente (PDFs) hinzufügen

1. Laden Sie das PDF in den `documents/` Ordner hoch
2. Öffnen Sie `dokumente.html`
3. Fügen Sie einen neuen Link hinzu:

```html
<li><a href="documents/dateiname.pdf">Beschreibung des Dokuments</a></li>
```

4. Speichern Sie die Datei

### Spielergebnisse aktualisieren

1. Öffnen Sie die entsprechende Datei:
   - `spielbetrieb-jugend.html` für Jugendergebnisse
   - `spielbetrieb-erwachsene.html` für Erwachsenenergebnisse (Sommer)
   - `spielbetrieb-winterrunde.html` für Winterrundenergebnisse

2. Ändern Sie die Ergebnisse im entsprechenden Abschnitt
3. Speichern Sie die Datei

### Vorstandsinformationen aktualisieren

1. Öffnen Sie `vorstand.html`
2. Ändern Sie die Namen und Kontaktdaten
3. Speichern Sie die Datei

## Design anpassen

### Farben ändern

Öffnen Sie `css/main.css` und ändern Sie die Werte in der `:root` Sektion:

```css
:root {
    --primary-blue: #489CD6;      /* Hauptfarbe (Blau) */
    --secondary-gold: #DF9E1F;    /* Sekundärfarbe (Gold) */
    --dark-gray: #424242;         /* Dunkelgrau */
    --accent-red: #2B0909;        /* Akzentfarbe (Rot) */
    --background: #FFFFFF;        /* Hintergrundfarbe */
}
```

### Schriftarten ändern

In `css/main.css`, ändern Sie die `font-family` Eigenschaft im `body` Element:

```css
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
```

## Neue Seite hinzufügen

1. Kopieren Sie eine bestehende HTML-Datei (z.B. `template.html`)
2. Benennen Sie sie um (z.B. `neue-seite.html`)
3. Ändern Sie den Inhalt:
   - `<title>` im `<head>` Bereich
   - Hauptüberschrift in `.page-header`
   - Inhalt im `<main>` Bereich
   - Markieren Sie den entsprechenden Menüpunkt mit `class="active"`
4. Fügen Sie die neue Seite zur Navigation hinzu:
   - Öffnen Sie alle HTML-Dateien
   - Fügen Sie einen Link im `<nav>` Bereich hinzu

## GitHub Pages Deployment

Diese Website wird automatisch von GitHub Pages gehostet. Jede Änderung, die auf den `main` Branch gepusht wird, wird automatisch veröffentlicht.

### Änderungen veröffentlichen

1. Bearbeiten Sie die Dateien lokal oder direkt auf GitHub
2. Committen Sie die Änderungen
3. Pushen Sie zum `main` Branch
4. Die Website wird automatisch aktualisiert (kann 1-2 Minuten dauern)

## Technische Details

### Browser-Kompatibilität

Die Website ist kompatibel mit:
- Chrome (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Edge (letzte 2 Versionen)
- Mobile Browser (iOS Safari, Chrome Android)

### Responsive Design

Die Website passt sich automatisch an verschiedene Bildschirmgrößen an:
- **Desktop**: Volle Breite bis 1200px, horizontales Menü
- **Tablet**: Angepasstes Layout, Hamburger-Menü
- **Mobile**: Einspaltiges Layout, Touch-optimiert

### Performance

- Optimierte CSS und JavaScript
- Lazy Loading für Bilder (wo implementiert)
- Minimale externe Abhängigkeiten

## Wartung

### Regelmäßige Aufgaben

- **Aktuelles**: Regelmäßig neue Nachrichten hinzufügen
- **Termine**: Spieltermine aktualisieren
- **Dokumente**: Neue Dokumente hochladen, alte entfernen
- **Spielergebnisse**: Nach jedem Spieltag aktualisieren

### Backup

Es wird empfohlen, regelmäßig Backups der Website zu erstellen:
1. Klonen Sie das Repository lokal
2. Oder nutzen Sie die GitHub Export-Funktion

## Hilfe und Support

Bei Fragen oder Problemen:
1. Prüfen Sie diese README-Datei
2. Schauen Sie sich ähnliche Seiten als Beispiel an
3. Kontaktieren Sie einen Administrator mit HTML-Kenntnissen

## Wichtige Hinweise

- **Niemals löschen**: `CNAME`, `robots.txt`, `sitemap.xml`
- **Keine Änderungen**: In `index_htm_files/` (Original-Assets)
- **Vorsicht bei**: CSS und JavaScript Dateien (können die ganze Website beeinflussen)

## Technischer Stack

- **HTML5**: Semantisches Markup
- **CSS3**: Flexbox, Grid, Media Queries
- **JavaScript (ES6+)**: Vanilla JS, keine externen Frameworks
- **GitHub Pages**: Static Site Hosting

## Lizenz

© 2025 TC Oberpöring e.V. Alle Rechte vorbehalten.
