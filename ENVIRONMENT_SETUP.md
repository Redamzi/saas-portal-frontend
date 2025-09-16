# Umgebungsvariablen-Konfiguration - Voyanero SaaS Portal

## Übersicht

Das Voyanero SaaS Portal wurde für die flexible Konfiguration von Backend-Services über Umgebungsvariablen eingerichtet. Dies ermöglicht eine einfache Anpassung zwischen verschiedenen Umgebungen (Entwicklung, Staging, Produktion).

## Erforderliche Umgebungsvariablen

### Supabase-Konfiguration
```bash
VITE_SUPABASE_URL=https://superbase.voyanero.com
VITE_SUPABASE_ANON_KEY=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc1NDY2NDg0MCwiZXhwIjo0OTEwMzM4NDQwLCJyb2xlIjoiYW5vbiJ9.8eGew97HBhfKFe_8AlatMZtWM28f20INxx9Ez51pm90
```

### Flask API-Konfiguration
```bash
VITE_API_BASE_URL=https://api.voyanero.com
```

### Optionale Konfiguration
```bash
VITE_NODE_ENV=production
VITE_ENABLE_REALTIME=false
VITE_ENABLE_ANALYTICS=true
VITE_DEBUG_MODE=false
```

## Coolify-Deployment-Konfiguration

Für das Deployment in Coolify müssen Sie die folgenden Umgebungsvariablen in den Frontend-Einstellungen setzen:

### Produktions-Umgebung
```
VITE_SUPABASE_URL=https://superbase.voyanero.com
VITE_SUPABASE_ANON_KEY=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc1NDY2NDg0MCwiZXhwIjo0OTEwMzM4NDQwLCJyb2xlIjoiYW5vbiJ9.8eGew97HBhfKFe_8AlatMZtWM28f20INxx9Ez51pm90
VITE_API_BASE_URL=https://api.voyanero.com
VITE_NODE_ENV=production
```

## Lokale Entwicklung

1. Kopieren Sie `.env.example` zu `.env`:
   ```bash
   cp .env.example .env
   ```

2. Passen Sie die Werte in der `.env`-Datei nach Bedarf an.

3. Starten Sie den Entwicklungsserver:
   ```bash
   npm run dev
   ```

## Backend-Integration

Das Frontend ist jetzt so konfiguriert, dass es sowohl mit Supabase (für Authentifizierung) als auch mit dem Flask-Backend (für Geschäftslogik) kommuniziert:

### Supabase (Authentifizierung)
- Benutzeranmeldung und -registrierung
- Session-Management
- Passwort-Reset

### Flask API (Geschäftslogik)
- Lead-Management
- Dashboard-Statistiken
- Kampagnen-Management
- Benutzerprofile

## API-Service-Verwendung

Das Frontend verwendet einen zentralen API-Service (`src/lib/api.js`) für alle Flask-Backend-Kommunikation:

```javascript
import { apiService } from '../lib/api'

// Leads abrufen
const leads = await apiService.getLeads()

// Neuen Lead erstellen
const newLead = await apiService.createLead(leadData)

// Dashboard-Statistiken abrufen
const stats = await apiService.getDashboardStats()
```

## Fallback-Verhalten

Falls das Flask-Backend nicht verfügbar ist, verwendet das Frontend automatisch Mock-Daten, um die Funktionalität aufrechtzuerhalten. Dies gewährleistet eine bessere Benutzererfahrung während Wartungsarbeiten oder bei Netzwerkproblemen.

## Fehlerbehebung

### API-Verbindungsprobleme
1. Überprüfen Sie die `VITE_API_BASE_URL`-Konfiguration
2. Stellen Sie sicher, dass das Flask-Backend läuft und erreichbar ist
3. Überprüfen Sie die Browser-Konsole auf CORS-Fehler

### Authentifizierungsprobleme
1. Überprüfen Sie die Supabase-Konfiguration
2. Stellen Sie sicher, dass die Supabase-URL und der Anon-Key korrekt sind
3. Überprüfen Sie die Netzwerkverbindung zu Supabase

