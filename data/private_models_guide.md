---
# Private & Local Models Guide
---

# Richtlijnen voor Private & Lokale Modellen (Max 32GB RAM)

Het draaien van AI-modellen op eigen hardware (lokaal en privaat) wint snel aan terrein. Deze gids beschrijft de vereisten, use cases, en de voor- en nadelen (*Nullius in Verba*) van deze aanpak binnen onze gestelde hardware- en performance-grenzen.

---

## ⚖️ Voor- en nadelen (*Nullius in Verba*)

Geloof geen marketingbeloftes op hun woord. Lokale modellen bieden enorme voordelen, maar brengen ook duidelijke beperkingen met zich mee vergeleken met frontier cloud API's.

### Voordelen (Pros)
1. **Volledige Privacy & Data-Soevereiniteit:** Geen enkele token verlaat je lokale machine of netwerk. Dit voorkomt dat gevoelige broncode of bedrijfsdata wordt blootgesteld aan externe cloudproviders.
2. **Geen Vendor Lock-in & Kostencontrole:** Geen maandelijkse API-kosten, tarieflimieten of abonnementsvormen. Eenmaal aangeschaft, draait de hardware gratis.
3. **Aanpasbare Alignment:** Open weights modellen kunnen lokaal worden gefinetuned of via systeem-prompts worden ingesteld om sycofantie (ja-knikkersgedrag) tegen te gaan en juist kritische feedback te geven.
4. **Offline Beschikbaarheid:** Volledig functioneel zonder internetverbinding.

### Nadelen (Cons)
1. **Hardwarebeperkingen:** Je bent gebonden aan de VRAM/RAM van je machine. Grote modellen (zoals 70B+ of 1T+) vereisen extreem dure enterprise-hardware.
2. **Hogere Latency:** Zonder high-end GPU's kan de generatiesnelheid (tokens per seconde) significant lager liggen dan bij geoptimaliseerde cloud API's.
3. **Setup & Onderhoud:** Het vereist technische kennis om runtimes zoals Ollama, Llama.cpp of LM Studio in te richten en te onderhouden.

---

## 🔒 Use Cases & Lokale Governance

Lokaal draaien is niet alleen een technische keuze, maar vaak een compliance-vereiste:
*   **IP-Bescherming:** Ontwikkelen op propriëtaire codebases of het analyseren van geheime patenten/contracten.
*   **Lokale Governance & EU AI Act:** Voldoen aan strikte Europese regelgeving rondom datalocatie, privacy en auditability. Geen risico op datalekken naar landen buiten de EU.
*   **Gevoelige sectoren:** Ideaal voor de medische sector, financiële instellingen, juridische dienstverlening en het onderwijs, waar strikte geheimhouding vereist is.

---

## 💻 Hardware-eisen (Max 32 GB RAM)

Om lokale modellen toegankelijk te houden voor standaard ontwikkelaars, hanteren we een grens van **maximaal 32 GB RAM/VRAM** (bijvoorbeeld een MacBook met 32GB Unified Memory of een PC met een 24GB VRAM GPU + systeembuffer).

Dit betekent dat we ons richten op:
*   **Modelgrootte:** Modellen tussen de **7B (7 miljard) en 32B (32 miljard) parameters**.
*   **Quantisatie:** Gebruik van quantized formaten (zoals GGUF of EXL2 op 4-bit of 8-bit precisie) om het model in het geheugen te laten passen zonder noemenswaardig kwaliteitsverlies:
    *   Een **32B model** op 4-bit quantisatie (Q4_K_M) vereist ongeveer **20-22 GB** geheugen.
    *   Een **12B/14B model** op 8-bit quantisatie (Q8_0) vereist ongeveer **13-15 GB** geheugen.

---

## 📈 Performance-eisen (SWE-bench >= 30%)

Een lokaal model is pas echt bruikbaar voor softwareontwikkeling en autonome agentic workflows als het complexe taken betrouwbaar kan uitvoeren. We hanteren daarom een **minimale SWE-bench (Verified/Pro) score van minstens +/- 30%**. 

SWE-bench meet het vermogen van een model om echte GitHub-issues in complexe repositories op te lossen. Modellen onder de 30% zijn prima als eenvoudige chat-assistenten, maar schieten tekort als autonome codeer-agents.

### Gekwalificeerde lokale modellen in onze database:
*   **Qwen 3.6 27B** (SWE-bench: **77.2%**) - *Uitzonderlijke lokale agent-prestaties.*
*   **Gemma 4 31B Dense** (SWE-bench: **56.5%**) - *Uitstekend redeneervermogen en Apache 2.0 licentie.*
*   **Gemma 4 12B** (SWE-bench: **46.5%**) - *Lichtgewicht, snel en uiterst capabel op 16GB/32GB systemen.*
*   **Codestral 22b** (SWE-bench: **32.8%**) - *Tuned voor codeer-efficiëntie.*
*   **Qwen 2.5 Coder 32B** (SWE-bench: **29.4%**) - *De benchmark-standaard voor on-device IDE-aanvulling.*
