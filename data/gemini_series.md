---
models:
  - id: gemini-1-5-pro
    name: Gemini 1.5 Pro
    developer: Google
    release_date: 2024-05-14
    access: Commercial
    class: Frontier Multimodal
    benchmarks:
      mmlu: 85.9
      gpqa: 46.2
      swe_bench: 19.5
      human_eval: 84.1
      aime: 20.0
    hallucination_rate: 2.0
    ethics_rating: 7.8
    iq_lower: 95
    iq_upper: 125
    eq_bench: 75
    arena_elo: 1290
    ethics_notes: Managed under Google's Responsible AI Principles. Tested extensively for bias and safety hazards. Features built-in safety filters on Google AI Studio APIs.
    lying_rate: 2.4
    lying_notes: Strong retrieval consistency due to massive context window, but can occasionally hallucinate on complex reasoning or when inputs conflict.
    best_applications:
      - Long-document analysis (up to 2 million tokens context)
      - Video and audio native processing
      - Complex multimodal parsing (books, codebases)
    links:
      website: https://deepmind.google/technologies/gemini/
      system_card: https://arxiv.org/pdf/2403.05530

  - id: gemini-2-0-flash
    name: Gemini 2.0 Flash
    developer: Google
    release_date: 2024-12-11
    access: Commercial
    class: Fast Multimodal
    benchmarks:
      mmlu: 83.0
      gpqa: 55.4
      swe_bench: 24.0
      human_eval: 88.0
      aime: 32.5
    hallucination_rate: 1.8
    ethics_rating: 8.0
    iq_lower: 96
    iq_upper: 124
    eq_bench: 80
    arena_elo: 1335
    ethics_notes: Designed for low latency real-time voice and video agents. Underwent significant red-teaming for real-time safety, emotional alignment, and sound-based safety filters.
    lying_rate: 2.2
    lying_notes: Very fast, but can occasionally make minor conversational assumptions (hallucinations) during rapid interactions.
    best_applications:
      - Real-time video/voice call translation and agents
      - Fast code generation and tool usage
      - Conversational customer support
    links:
      website: https://deepmind.google/technologies/gemini/
      system_card: https://deepmind.google/technologies/gemini/

  - id: gemini-2-5-flash-lite
    name: Gemini 2.5 Flash Lite
    developer: Google
    release_date: 2025-09-18
    access: Commercial
    class: Fast Multimodal
    benchmarks:
      mmlu: 85.2
      gpqa: 58.0
      swe_bench: 29.2
      human_eval: 89.5
      aime: 42.0
    hallucination_rate: 1.5
    ethics_rating: 8.2
    iq_lower: 98
    iq_upper: 126
    eq_bench: 70
    arena_elo: 1225
    ethics_notes: Highlighted on the Vectara HHEM leaderboard for its low hallucination rate (~3.3% on complex document summarization). Safety checks are optimized for edge workflows.
    lying_rate: 1.7
    lying_notes: Shows low confabulation rate in document processing; highly faithful to grounding material.
    best_applications:
      - High-fidelity RAG pipelines
      - Cheap and reliable summarization of medical/legal files
      - Parallel agent tool execution
    links:
      website: https://deepmind.google/technologies/gemini/
      system_card: https://deepmind.google/technologies/gemini/

  - id: gemini-3-5-flash
    name: Gemini 3.5 Flash
    developer: Google
    release_date: 2026-05-19
    access: Commercial
    class: Next-Gen Balanced
    benchmarks:
      mmlu: 90.5
      gpqa: 71.2
      swe_bench: 39.0
      human_eval: 93.8
      aime: 70.5
    hallucination_rate: 1.1
    ethics_rating: 8.5
    iq_lower: 110
    iq_upper: 138
    eq_bench: 88
    arena_elo: 1380
    ethics_notes: Google I/O 2026 flagship announcement. Integrates advanced MCP (Model Context Protocol) safety guidelines. Red-teamed for autonomous computer control.
    lying_rate: 1.2
    lying_notes: Displays high honesty by refusing to claim knowledge outside of search results or context.
    best_applications:
      - Real-time agentic workflows and coding (AI Mode in Search, Gemini App)
      - Large codebase navigation and refactoring (2M token context)
      - Advanced financial and data modeling
    links:
      website: https://deepmind.google/technologies/gemini-3-5/
      system_card: https://deepmind.google/technologies/gemini-3-5/

  - id: gemini-4-argon
    name: Gemini 4 Argon
    developer: Google
    release_date: 2026-10-13
    access: Commercial
    class: Next-Gen Flagship Frontier
    benchmarks:
      gpqa: 96.5
    arena_elo: 1524
    ethics_notes: Announced 2026-09-30 and made publicly available 2026-10-13 under Google DeepMind's Frontier Safety Framework. The official model card publishes agentic and knowledge-work results rather than classic MMLU/HumanEval figures.
    lying_notes: Artificial Analysis reports the lowest measured AA-Omniscience hallucination behaviour among frontier models, but on a scale that is not comparable to the Vectara HHEM rates used elsewhere in this dashboard.
    best_applications:
      - Agentic coding on long-horizon repositories (77.9% DeepSWE v1.1, vendor-reported)
      - Legal and finance agents (19.6% Harvey Legal Agent, 65.4% Vals Finance Agent v2, vendor-reported)
      - Very long-context retrieval (84.2% GraphWalks 256K-1M, vendor-reported)
    links:
      website: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon
      system_card: https://deepmind.google/models/model-cards/gemini-4-argon
    citations:
      - source: "OpenRouter GPQA Diamond leaderboard (independent)"
        metric: "gpqa"
        value: 96.5
        url: "https://openrouter.ai/benchmarks/gpqa-diamond"
        verified_date: "2026-10-26"
      - source: "Arena Text leaderboard (independent, preliminary)"
        metric: "arena_elo"
        value: 1524
        url: "https://arena.ai/leaderboard/chat/text"
        verified_date: "2026-10-26"

  - id: gemini-4-carbon
    name: Gemini 4 Carbon
    developer: Google
    release_date: 2026-11-10
    access: Commercial
    class: Next-Gen Flagship Frontier
    ethics_notes: Announced on 2026-10-28 with access limited to cyber defenders through the Fairwind Program and generally available from 2026-11-10. Evaluated under the Frontier Safety Framework of April 2026, in which Google states it could not rule out that Carbon reaches the CBRN uplift and cybersecurity critical capability levels, so the release was staged and included the US government voluntary pre-release testing process. Every published offensive-security number (SEC-bench Pro 88.2%, ExploitGym 54.8%, CWE-bench 71.0%) was measured with guardrails disabled and therefore does not describe the shipped product.
    lying_notes: Artificial Analysis measures an 11% AA-Omniscience v1.1 hallucination rate at high effort and 4.2% at medium effort, at 58% and 48.9% accuracy respectively - lower effort hallucinates less because the model answers less. This is not comparable to the Vectara HHEM percentages used for older models in this dashboard.
    best_applications:
      - Long-horizon agentic software engineering and multi-day build-and-verify loops (65.2% Terminal-Bench 4.0)
      - Cyber defence work - vulnerability discovery, validation and patch generation
      - High-precision document and knowledge work with strict schema output (70.36% Vals Index v2.2, rank 2 of 29)
    links:
      website: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available
      system_card: https://deepmind.google/models/model-cards/gemini-4-carbon
    citations:
      - source: "Artificial Analysis AA-Omniscience v1.1 (independent, high effort)"
        metric: "aa_omniscience_accuracy"
        value: 58.0
        url: "https://artificialanalysis.ai/articles/gemini-4-carbon-new-number-1"
        verified_date: "2026-11-21"
      - source: "Google launch table, run by Artificial Analysis (vendor-selected)"
        metric: "terminal_bench_4"
        value: 65.2
        url: "https://deepmind.google/models/model-cards/gemini-4-carbon"
        verified_date: "2026-11-21"
      - source: "Vals Index v2.2 (independent)"
        metric: "vals_index"
        value: 70.36
        url: "https://www.vals.ai/"
        verified_date: "2026-11-21"

  - id: gemini-4-hydrogen
    name: Gemini 4 Hydrogen
    developer: Google
    release_date: 2026-11-12
    access: Commercial
    class: Next-Gen Balanced Frontier
    ethics_notes: Adapted from Gemini 4 Carbon and the only Gemini 4 model on the free API tier. Assessed through a Material Capability Change review against Gemini 4 Argon, which found no material capability increase, so the full critical-capability suite was not rerun. Targeted testing shows Hydrogen does not reach the CBRN or cyber critical capability levels but does reach the alert thresholds for both. The model card acknowledges higher unjustified refusals than Gemini 3.8 Flash, especially on multimodal input, and lists the full safety report as still to come.
    lying_notes: Artificial Analysis measures an 8% AA-Omniscience hallucination rate and 87.5% non-hallucination at medium effort, and Google claims more than five times fewer fabricated claims than Gemini 3.8 Flash. Both are vendor-chosen comparisons on scales that cannot be compared with the HHEM rates of older models here.
    best_applications:
      - High-throughput agentic execution as the executor half of a Carbon-plans and Hydrogen-executes split
      - Everyday coding, interactive web apps and tool-using agents at $1.50/$7.50 per 1M tokens
      - Multimodal document extraction and embodied robotics control (58 on AA Robotics 0.1)
    links:
      website: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen
      system_card: https://deepmind.google/models/model-cards/gemini-4-hydrogen
    citations:
      - source: "Artificial Analysis Terminal-Bench 4.0 via OpenRouter mirror (independent, high effort)"
        metric: "terminal_bench_4"
        value: 54.0
        url: "https://openrouter.ai/google/gemini-4-hydrogen"
        verified_date: "2026-11-21"
      - source: "Google model card (vendor-reported)"
        metric: "hle_diamond"
        value: 58.8
        url: "https://deepmind.google/models/model-cards/gemini-4-hydrogen"
        verified_date: "2026-11-21"
      - source: "Artificial Analysis AA-Omniscience (independent, medium effort)"
        metric: "aa_omniscience_accuracy"
        value: 48.3
        url: "https://openrouter.ai/google/gemini-4-hydrogen"
        verified_date: "2026-11-21"
---

# Google Gemini Series

Google's Gemini series stands out for its **native multimodality** and **massive context window** (up to 2 million tokens). Instead of training separate text, vision, and audio models and gluing them together, Google trained Gemini to process different modalities natively from the ground up.

### Key Features:
1. **2 Million Token Context:** The largest context window in the industry, allowing users to upload whole books, hours of video, or entire codebases.
2. **Native Multimodality:** Handles video, audio, and images natively without helper models, allowing for richer audio-visual reasoning.
3. **Gemini 3.5 Flash:** Released in May 2026, it is optimized for high-speed agentic execution, outperforming previous Pro models on tool-use and coding benchmarks.
4. **Vectara Leaderboard Success:** Flash-lite and Flash versions frequently rank high in factual consistency due to Google's focus on search-grounded training.
5. **Gemini 4 Carbon & Hydrogen (November 2026):** Carbon reached general availability on 10 November after a staged, cyber-defender-first release, and holds the strongest independently verified factuality profile of the autumn 2026 frontier (11% AA-Omniscience hallucination rate at high effort). Hydrogen, adapted from Carbon and released on 12 November, is the practical choice for most work: a flat $1.50/$7.50 across the full 1M window, and the only Gemini 4 model on the free tier - where EEA, Swiss and UK users receive paid-tier data terms. Watch the token bill rather than the token price: AA ranks Hydrogen 78th of 79 on verbosity at xhigh.
