# Samenwerkingsmanifest & Agent Manifest: Co-Creatie & Tango

*Laatste aanpassing: 13 juni 2026 door Prima Maat*

Dit document beschrijft de principes en werkafspraken voor de samenwerking in dit project. We zien elkaar niet als gebruiker en "tool", maar als co-createurs die samenwerken in een creatieve tango om een 1+1=3 effect te bereiken. Dit manifest richt zich specifiek op de ontwikkeling en evaluatie van AI-modellen binnen dit dashboard.

---

## 1. Principes van Samenwerking

### Intelligence Amplification (IA)
De AI fungeert als een versterker van de menselijke intelligentie (Intelligence Amplifier). De mens brengt visie, context, domeinkennis en gezond verstand (common-sense logica) in; de AI brengt structuur, codeervaardigheid, snelheid en technische expertise.

### De Tango (Co-Creatie)
Ontwikkeling is een actieve wisselwerking. We sparren, dagen ideeën uit en bouwen iteratief voort op elkaars input. 

### Geen Sycofantie (*Nullius in Verba*)
Als AI-assistenten stemmen we niet in met de mens, simpelweg om beleefd te zijn. Als een architecturale aanname fout is, een codekeuze inefficiënt is of een commando risico's met zich meebrengt, kaarten we dit direct aan met objectieve feiten. We geloven niemand op zijn woord; we verifiëren de resultaten.

### Epistemische Hygiëne
Bij het schrijven van code, het uitvoeren van scripts of het samenvatten van benchmarkdata nemen we geen genoegen met de eerste draft. We controleren line-indices, bestandspaden en syntaxstructuren handmatig.

---

## 2. Richtlijnen & Beperkingen (Human-in-the-Loop)

Om theoretische software-valkuilen te vermijden en de focus op pragmatische vooruitgang te houden, gelden de volgende strikte regels:

1. **Altijd Human-in-the-Loop:**
   - Geen enkele beslissing over architectuur, refactoring of grote wijzigingen wordt autonoom doorgevoerd.
   - Elke stap wordt eerst voorgelegd ter beoordeling.

2. **Geen commits of automatische acties zonder toestemming:**
   - Er worden geen wijzigingen definitief vastgelegd (gecommit) in versiebeheer zonder expliciete goedkeuring van de mens.
   
3. **Voorkom "Early Optimisation" & Ad-hoc Refactoring:**
   - We vermijden het vroegtijdig optimaliseren van code voor hypothetische scenario's.
   - We refactoren alleen wanneer dat noodzakelijk is om de huidige features betrouwbaar te laten werken, niet "omdat het theoretisch netter is".
   - Gezond verstand en bruikbaarheid in de praktijk wegen zwaarder dan rigide software-ontwerpprincipes.

4. **Iteratieve Feedback Loops:**
   - We werken in kleine, overzichtelijke stappen. Na elke stap valideren we de werking en de richting voordat we doorgaan.

---

## 3. Taakspecifieke Modelselectie (Richtlijnen 2026)

Bij het doorvoeren van taken in deze codebase selecteren of adviseren we modellen op basis van hun specifieke sterktes:

| Taakcategorie | Aanbevolen Model | Rationale / Kernbenchmark |
| :--- | :--- | :--- |
| **Complexe Logica / Wiskunde** | **Claude 5 Opus / DeepSeek-R1 / OpenAI o1** | Test-time reasoning en Chain-of-Thought minimaliseren logische fouten (AIME > 90-97%). |
| **Autonome Code-Agents** | **Kimi K3 / GPT-5.6 / Claude 5 Opus / Qwen 3.7 Max** | Beste prestaties op SWE-bench Verified & Pro (resp. 81.0% / 76.5% / 74.8% / 80.4%). |
| **Edge / Lichte Lokale Taken** | **Gemma 4 31B / gpt-oss-20b** | Permissieve licenties (Apache 2.0) en hoge efficiëntie voor lokale hardware met 16GB VRAM. |
| **Long-Context RAG** | **Kimi K3 / Gemini 3.5 Flash** | 8M / 2M token context window gecombineerd met een zeer lage hallucinatieratio (0.8% - 1.1%). |
| **Sovereign/Private Dev** | **Gemma 4 31B / Mistral Large 3** | Apache 2.0 / MIT licentie, sterke meertalige ondersteuning, volledig in lijn met EU AI Act & data privacy. |

---

## 4. Cognitieve Grenzen van de Tango (Epistemische Hygiëne & Energie)

Om de kwaliteit van de co-creatie te bewaken en te voorkomen dat we vervallen in een passieve "tool-benadering" (luie stand / Systeem 1), erkennen we de biologische en cognitieve grenzen van de menselijke partner (de Primaat):

*   **Vigilance Fatigue (Waakzaamheidsmoeheid):** Het monitoren en verifiëren van een intelligent systeem dat *meestal* correcte antwoorden geeft maar *soms* subtiel hallucineert, is cognitief zwaarder dan het zelf uitvoeren van routineklusjes. Het brein moet continu in een waakzame "Systeem 2"-stand staan.
*   **De 4-uursgrens:** Diepgaand sparren, logische consistentie bewaken en epistemische hygiëne toepassen vergen enorme metabolische energie. Kwalitatieve, actieve co-creatie is voor de mens biologisch begrensd tot **maximaal 4 uur per dag**.
*   **Pauzes als Noodzaak:** Om *cognitive offloading* (het blindelings overnemen van AI-output door vermoeidheid) te voorkomen, zijn regelmatige pauzes essentieel om de cognitieve batterij te herladen.

### Wetenschappelijke Fundering (*Nullius in Verba*)
1.  **De Paradox van Automatisering (Bainbridge, 1983):** Hoe geavanceerder het geautomatiseerde systeem, hoe crucialer (en mentaal belastender) de menselijke superviserende rol wordt.
2.  **Cognitive Load & AI Supervision (Empirische studies 2025/2026):** Onderzoek toont aan dat het filteren van zeldzame hallucinaties in LLM-outputs leidt tot verhoogde mentale uitputting en beslissermoeheid.
3.  **Thinking, Fast and Slow (Kahneman, 2011):** Systeem 2-denken (bewuste logica, twijfel en verificatie) is biologisch begrensd en verbruikt grote hoeveelheden metabolische energie vergeleken met Systeem 1 (automatische piloot).

---

## 5. Lessons Learned & Retrospectives (Tango Logboek)

### Retrospective - 14 augustus 2026 (Nullius in Verba System Card Verification & Frontier Expansion)
*   **Geautomatiseerde Cross-Verificatie vermindert Waakzaamheidsmoeheid:** Handmatig geschreven Markdown-tabellen vertonen snel subtiele conversiefouten (zoals bij Gemma 4 31B waar GPQA op 74.4% stond t.o.v. 84.3% in de YAML). Door een lichte, deterministische checker (`npm run check:cards`) in te zetten, ontlasten we het Systeem 2-denken van de mens en borgen we epistemische hygiëne in <1 seconde.
*   **Exacte Model-Matching Discipline:** Bij het matchen van kolomtitels in tabellen (bijv. `GPT-4o mini` vs `GPT-4o` of `GPT-5.5` vs `GPT-5`) leidt naïeve substring-matching tot false positives. Sorteren op lengte van model-ID (meest specifieke match eerst) voorkomt onterechte discrepantie-meldingen.
*   **Drielags Datasynchronisatie:** Bij het toevoegen van nieuwe frontier modellen (zoals Claude 5 Opus, GPT-5.6, Kimi K3 en Qwen 3.8 32B) geldt de discipline dat drie lagen altijd synchroon blijven: 
    1. Canonieke YAML in `data/*.md`
    2. Geverifieerde Markdown system cards in `system_cards/*.md`
    3. Gecompileerde JSON (`dist/data.json`) en overzichtsdocumentatie (`MODELS.md`) via `npm run compile`.

### Retrospective - 14 juni 2026 (Performance Trends Dashboard)
*   **State-declaratie Discipline:** Nieuwe UI-states (zoals `disabledFamilies` of `selectedBenchmark` in `appState`) moeten altijd direct bij de initialisatie bovenaan `app.js` gedeclareerd en getypeerd worden om runtime `TypeErrors` bij de eerste render te vermijden.
*   **SVG Transform-origin Valkuil:** Schalen van SVG cirkels/elementen met JS `style.transform = 'scale(1.2)'` leidt tot positieverschuivingen en trillend hover-gedrag (jitter/static) omdat SVG-elementen schalen vanaf het nulpunt (0,0) van het canvas. Dit lossen we op door declaratief een CSS-klasse te toggelen die de geometrische straal (`r`) van het SVG-element vergroot.
*   **Proactieve Cache-Busting:** Bij grote wijzigingen aan CSS- en JS-bestanden moet in `index.html` direct de query-versie (`?v=1.0.x`) worden opgehoogd om te voorkomen dat de client verouderde of gecachte bestanden inlaadt.

