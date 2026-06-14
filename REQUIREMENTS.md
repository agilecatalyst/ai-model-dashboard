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

### 2.4 Performance Evolution Chart
- **Interactieve Trendgrafiek:** Voeg een sectie of weergavemodus toe die de prestaties van modellen over tijd toont (X-as: Release Date, Y-as: Benchmark score).
- **Y-as Selectie:** Gebruikers kunnen via een dropdown of segmented control kiezen welke benchmark op de Y-as getoond wordt (MMLU, GPQA of SWE-bench).
- **Modellencategorieën:** Modellen moeten visueel onderscheidbaar zijn in de grafiek op basis van hun type:
  - *Commercial / Closed Source:* Gekenmerkt met een specifieke kleur (bijv. paars).
  - *Open Weights:* Gekenmerkt met een specifieke kleur (bijv. cyaan).
  - *Local / Private Models:* Modellen die voldoen aan de private models eisen (Open Weights, max 32GB RAM, SWE-bench >= 30%) moeten een duidelijke extra markering/badge of unieke kleur krijgen om ze direct herkenbaar te maken.
- **Modelfiltering & Toggles:** 
  - Er moet een filtermenu of dropdown zijn waarmee gebruikers specifieke model-families (bijv. Claude, GPT, Llama, Qwen) of individuele modellen aan/uit kunnen vinken in de grafiek om visuele drukte te beheersen.
  - Snel-toggles om in één klik alle "Commercial", "Open Weights" of "Local Qualified" modellen te selecteren of te de-selecteren.
- **Interactiviteit:** Hoveren over een datapunt (model) toont een tooltip met de exacte specificaties (Modelnaam, release datum, score) en klikken op het datapunt opent direct het detailmodal van dat model.

### 2.5 Model Data Verification & Citations (Nieuwe Sectie)
Om de data-integriteit te waarborgen en te voldoen aan het *Nullius in Verba* principe, moeten modelbenchmarks worden onderbouwd met controleerbare bronnen (citaten).

*   **Geautoriseerde Benchmark-bronnen:**
    *   *SWE-bench Verified / FrontierMath:* [Epoch AI](https://epoch.ai/)
    *   *MMLU / GPQA:* [LiveBench](https://livebench.ai/) of [Hugging Face Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
    *   *Arena Elo:* [LMSYS Chatbot Arena](https://chat.lmsys.org/)
    *   *Snelheid / Pricing:* [Artificial Analysis](https://artificialanalysis.ai/)
    *   *Algemene publicaties:* Officiële system cards en technical reports van de modelontwikkelaars.
*   **Datastructuur (Citations Schema):**
    Het model YAML-frontmatter schema in `data/*.md` wordt uitgebreid met een `citations` list:
    ```yaml
    citations:
      - source: "Epoch AI"
        metric: "swe_bench"
        value: 77.2
        url: "https://epoch.ai/benchmarks/swe-bench-verified"
        verified_date: 2026-04-22
    ```
    *Opmerking:* De custom parsers (`compile-data.js` en `compile-data.py`) moeten worden uitgebreid om deze gestructureerde lijst te parseren en op te nemen in `dist/data.json`.
*   **UI Integratie (Interactive UX Flow):**
    *   *Subtiele Indicatoren:* Naast elke benchmark score bovenaan in het model-detaildrawer wordt een subtiele verificatie-indicator (bijv. een klein vinkje of info-icoon) getoond.
    *   *Interactieve navigatie:* Klikken op deze indicator scrollt de detaildrawer soepel omlaag naar de specifieke bron in de "Geverifieerde Bronnen & Citaten"-sectie en licht dit citaat tijdelijk op (via een CSS-animatie/highlight).
    *   *Citatielijst:* Onderaan het detaildrawer wordt een kaart getoond met alle bronnen, met duidelijke hyperlinks en de verificatiedatum.

---

## 3. Niet-Functionele Eisen

- **Performance:** Snelle laadtijd door data-caching en direct in-memory filteren van de `dist/data.json` database.
- **Gebruikerservaring:** Visueel premium interface met soepele animaties, glow-orbs, hover-states en duidelijke indicatoren voor modeltypen.
- **Epistemische Hygiëne:** Benchmarks en data in het dashboard moeten periodiek worden gevalideerd op basis van officiële system cards en publicaties. *Nullius in verba*.
