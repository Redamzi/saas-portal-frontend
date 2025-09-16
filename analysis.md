# API-Konfiguration Analyse - Voyanero SaaS Portal

## Aktuelle Situation

### Backend-Services
1. **Supabase**: Verwendet für Authentifizierung
   - URL: `https://superbase.voyanero.com` (hardcodiert in `src/lib/supabase.js`)
   - Verwendet für: User Authentication, Session Management

2. **Flask-Backend**: Soll integriert werden
   - Ziel-URL: `https://api.voyanero.com`
   - Verwendung: Hauptgeschäftslogik, Lead-Management, etc.

### Aktuelle Implementierung
- Nur Supabase-Integration vorhanden
- Hardcodierte URLs in `src/lib/supabase.js`
- Dashboard verwendet Mock-Daten statt echte API-Aufrufe
- Keine Umgebungsvariablen-Konfiguration

### Erforderliche Änderungen
1. Umgebungsvariablen für beide Backend-Services einführen
2. API-Service-Layer für Flask-Backend erstellen
3. Dashboard und andere Komponenten für echte API-Aufrufe anpassen
4. .env.example-Datei erstellen

