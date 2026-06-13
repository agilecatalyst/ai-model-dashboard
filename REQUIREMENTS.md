# Requirements - ModelMatrix AI Model Comparison Dashboard

This document details the functional and non-functional requirements for the ModelMatrix project.

---

## 1. Algemene Systeemvereisten

ModelMatrix is een statische single-page webapplicatie (SPA) gebouwd met een zero-dependency frontend design system (HTML, Vanilla CSS, Vanilla JS).

*   **Hosting & Delivery:** Moet direct kunnen draaien via een eenvoudige lokale HTTP-server (bijv. `http-server` of Python's `http.server`) zonder dat een complexe backend-build stap vereist is in de runtime.
*   **Data-compilatie:** Het compileren van de modeldata gebeurt offline via Node.js (`scripts/compile-data.js`) of Python (`scripts/compile-data.py`) om losse markdown-bestanden in `data/` en `system_cards/` samen te voegen tot één centrale `dist/data.json` database.
*   **Browsersupport:** Moet optimaal renderen in moderne browsers met ondersteuning voor CSS variables, backdrop-filter (glassmorphic UI) en flex/grid layouts.

---

## 2. Functionele Eisen

### 2.1 Model Matrix Grid & Filters
- **Model Grid:** Toon kaarten voor elk model met de belangrijkste benchmarks (MMLU, GPQA, SWE-bench) en de hallucinatieratio ("lying rate").
- **Timeline:** Toon een chronologische tijdlijn van modelreleases van H1 2024 tot H1 2026.
- **Filtering:** Gebruikers moeten kunnen filteren op toegangstype (All, Commercial, Open Weights) en sorteren op diverse benchmarks.
- **Zoeken:** Real-time text-search op modelnaam, ontwikkelaar of klasse.

### 2.2 Co-creation & Anti-sycofantie Tips
- Toon een knop en modal drawer met co-creatie tips die uitleggen hoe je effectief kunt samenwerken met LLM's (*Tango*-principe) en hoe je sycofantie (ja-knikkersgedrag) kunt omzeilen.

### 2.3 Private & Local Models (Nieuwe Sectie)
- **Private Models Knop:** Er moet een knop zijn in de control-sectie (analoog aan "Co-creation Tips") die een modal drawer opent met specifieke richtlijnen voor **Private/Local Models**.
- **Private Models Content:** Het modal moet de volgende onderdelen bevatten:
  - **Voor- en nadelen** (*Nullius in Verba*): Eerlijk overzicht van waarom je lokaal zou draaien vs. cloud API's.
  - **Use Cases:** Privacy, data-soevereiniteit en lokale governance (bijv. naleving van de EU AI Act, bescherming van intellectueel eigendom).
  - **Hardwarebeperking:** De richtlijnen specificeren dat modellen moeten kunnen draaien op een machine met **maximaal 32 GB RAM** (dit beperkt bruikbare modellen tot +/- 32B parameters in quantized vorm).
  - **Performance-drempel:** Gekwalificeerde modellen moeten een **SWE-bench score van minstens +/- 30%** hebben, zodat ze bruikbaar zijn voor complexe codeer- en agentic-taken.
- **Koppeling in Dashboard:** 
  - Als een model in de matrix voldoet aan de eisen van een lokaal model (Open Weights, max 32GB RAM en SWE-bench >= 30%), moet er een speciale banner in zijn detailmodal worden getoond met een directe link naar de Private Models richtlijnen.

---

## 3. Niet-Functionele Eisen

- **Performance:** Snelle laadtijd door data-caching en direct in-memory filteren van de `dist/data.json` database.
- **Gebruikerservaring:** Visueel premium interface met soepele animaties, glow-orbs, hover-states en duidelijke indicatoren voor modeltypen.
- **Epistemische Hygiëne:** Benchmarks en data in het dashboard moeten periodiek worden gevalideerd op basis van officiële system cards en publicaties. *Nullius in verba*.
