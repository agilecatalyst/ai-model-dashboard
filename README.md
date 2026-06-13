# ModelMatrix: AI Model Comparison & Timeline (2024-2026)

ModelMatrix is een interactief, visueel premium dashboard ontworpen om AI-modellen uitgebracht tussen 2024 en 2026 te vergelijken op benchmarks, cognitieve prestaties (A-IQ), emotional intelligence (EQ-Bench), chatbot-arena ELO, hallucinatieratio's en ethische standaarden.

Het dashboard is gebouwd met een modern **glassmorphism-thema**, vloeiende animaties en dynamische visualisaties zoals de A-IQ schaal en de release-tijdlijn.

---

## 🚀 Snel aan de slag (Lokaal draaien)

Omdat de webapp data inlaadt via `fetch` uit een lokaal JSON-bestand (`dist/data.json`), blokkeren moderne browsers dit wegens CORS-beveiligingsrestricties als je `index.html` rechtstreeks via het bestandssysteem (`file://`) opent. 

Start daarom een lokale HTTP-server:

### Via npm scripts (aanbevolen)
1. Installeer optioneel de dev-dependencies:
   ```bash
   npm install
   ```
2. Start de server:
   ```bash
   npm run serve
   ```
3. Open **[http://localhost:8080](http://localhost:8080)** in je browser.

### Via Python (alternatief)
Als je geen Node.js geïnstalleerd hebt, kun je Python gebruiken:
```bash
python3 -m http.server 8080
```
Open vervolgens **[http://localhost:8080](http://localhost:8080)** in je browser.

---

## 🛠️ Data compileren & Systeemkaarten ophalen

De data in het dashboard wordt dynamisch gegenereerd op basis van markdown-bestanden in de mappen `data/` en `system_cards/`. Als je wijzigingen aanbrengt in deze bestanden, moet de centrale database opnieuw worden gecompileerd.

### 1. Systeemkaarten downloaden
Haal de nieuwste officiële model-systemcards en specificaties op via:
```bash
npm run download-cards
```
*(Dit draait het Node-script `scripts/download-system-cards.js`)*

### 2. Database compileren
Compileer alle losse markdown-bestanden uit `data/` en de systeemkaarten naar de centrale JSON-database (`dist/data.json`):
```bash
npm run compile
```
*(Dit draait het Node-script `scripts/compile-data.js`)*

Er zijn ook Python-equivalenten van deze scripts aanwezig in de map `scripts/` (`compile-data.py` en `download-system-cards.py`) die je handmatig kunt draaien indien gewenst.

---

## 📂 Projectstructuur

*   `index.html` – De statische HTML-structuur en layout.
*   `app.js` – De centrale JavaScript-engine (beheert filtering, sortering, Markdown-rendering en UI-modals).
*   `public/` – Bevat de CSS-styles (`style.css`) en de favicon (`favicon.svg`).
*   `dist/data.json` – De gecompileerde database met alle modeldetails en analyses.
*   `data/` – Markdown-bestanden per model-familie (o.a. `gemma_series.md`, `llama_series.md`, etc.).
*   `system_cards/` – De markdown systeemkaarten en PDF-metadata.
*   `scripts/` – Node.js & Python scripts voor het downloaden van bronbestanden en het compileren van de database.
*   `AGENTS.md` – Het samenwerkingsmanifest voor AI-ontwikkelaars die aan deze codebase bijdragen (co-creatie, *Tango* en anti-sycophancy).

---

## ⚖️ Licentie & Nullius in verba

Dit project is gebaseerd op publieke benchmarks en officiële documentatie van modelontwikkelaars. 

*Nullius in verba* — Geloof niemand op zijn woord; verifieer de prestaties altijd zelf in de praktijk.
