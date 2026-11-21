# Samenwerkingsmanifest & Agent Manifest: Co-Creatie & Tango

*Laatste aanpassing: 21 november 2026 (modelselectie & retrospective bijgewerkt door een geautomatiseerde update-run)*

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
| **Complexe Logica / Wiskunde** | **Claude Fable 5.2 / Gemini 4 Carbon** | AA Intelligence Index v5 65 resp. 60 (onafhankelijk); Fable 5.2 zet 80% op HLE-Diamond. Let op: ~$26,5 per indextaak voor Fable, ~$7,76 voor Carbon. |
| **Autonome Code-Agents** | **Kimi K3.1 Pro / Gemini 4 Carbon / Claude Sonnet 5.5** | Terminal-Bench 4.0, onafhankelijk gemeten door AA: 67% / 65% / 64%. Fable 5.2 blijft hier steken op 60% - duurder is niet automatisch beter voor agentisch werk. |
| **Edge / Lichte Lokale Taken** | **Inkling 2 Mini / Gemma 4 31B / gpt-oss-20b** | Inkling 2 Mini (Apache 2.0, 26,4B/3,4B actief, ~20 GB) draait offline op 32 GB RAM. Verifieer zijn 79,2% SWE-bench Verified zelf - dat is een leverancierscijfer naast een onafhankelijke AA-index van 20. |
| **Long-Context RAG** | **Kimi K3 / Gemini 4 Hydrogen** | 8M resp. 1M tokencontext; Hydrogen meet 8% AA-Omniscience-hallucinaties aan een vlakke $1,50/$7,50. |
| **Sovereign/Private Dev** | **Inkling 2 Mini / Gemma 4 31B / Mistral Large 4** | Apache 2.0 voor de eerste twee (eigen hardware = structurele soevereiniteit); Mistral Large 4 is een EU-verwerker maar heeft nog géén open gewichten of gepubliceerde licentie. |

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

### Retrospective - 21 november 2026 (Najaarslichting 2026 & de grens van "open weights")
*   **Verifieer de releasedatum vóór je het model toevoegt.** Twee van de aannames waarmee deze run startte waren fout: Grok 4.7 dateert van 21-09-2026 (niet november) en Gemini 4 Carbon werd aangekondigd op 28-10-2026 met algemene beschikbaarheid op 10-11-2026 (niet 03-11). Een niet-gecontroleerde datum verschuift modellen op de tijdlijn én in de trendgrafiek.
*   **Benchmarkversie en harness zijn belangrijker dan het getal.** Grok 4.7 scoort 37,6% op Terminal-Bench 4.0 in xAI's eigen harness en ~26% in de neutrale harness van Artificial Analysis; LongCat-2.5 scoort 88,4 op Terminal Bench v2.1 en 38,5 op v4.0. Noteer daarom in elke citation expliciet *welke* versie en *wie* gemeten heeft, en zet AA-indexscores nooit naast elkaar over indexversies heen (v4.3 / v5.0 / v5.0.1 zijn niet vergelijkbaar).
*   **"Open weights" is geen synoniem voor "zelf te hosten".** Kimi K3.1 Pro (2,8T) en LongCat-2.5 (1,6T) zijn open maar passen op geen enkele kmo-machine; Inkling 2 Mini (26,4B, Apache 2.0, ~20 GB) wél. Enkel die laatste activeert terecht de private-models banner. Let op bij de heuristiek in `isQualifiedPrivateModel`: die filtert op id-fragmenten zoals `70b` of `ultra`, dus een triljoen-parameter model met een `swe_bench`-score zou ten onrechte als lokaal gekwalificeerd worden weergegeven.
*   **Een leeg veld is een bevinding.** Voor de volledige najaarslichting zijn MMLU, GPQA Diamond, SWE-bench Verified, HumanEval en AIME grotendeels niet gepubliceerd. Vul ze niet in met een schatting; de dashboardconventie "N/A betekent niet gemeten" blijft gelden.

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

