---
models:
  - id: mistral-large-2
    name: Mistral Large 2
    developer: Mistral AI
    release_date: 2024-07-24
    access: Open Weights
    class: Midrange Dense
    benchmarks:
      mmlu: 84.0
      gpqa: 38.0
      swe_bench: 35.0
      human_eval: 80.0
      aime: 10.0
    hallucination_rate: 3.0
    ethics_rating: 7.5
    iq_lower: 92
    iq_upper: 122
    eq_bench: 62
    arena_elo: 1220
    ethics_notes: Released under Mistral Research License (free for non-commercial/research, paid for commercial). Formulated with a focus on European multilingual alignment and strict formatting compliance.
    lying_rate: 3.3
    lying_notes: Very honest about formatting constraints. Will refuse to make up structured outputs when data is missing, but can hallucinate general knowledge under standard prompt setups.
    best_applications:
      - Multilingual chatbots (strong in French, German, Spanish, Italian)
      - Structured JSON and function calling pipelines
      - Academic research tasks
    links:
      website: https://mistral.ai/news/mistral-large-2407/
      system_card: https://mistral.ai/large-2-system-card

  - id: codestral-22b
    name: Codestral 22B
    developer: Mistral AI
    release_date: 2024-05-29
    access: Open Weights
    class: Lightweight Coding
    benchmarks:
      mmlu: 73.0
      gpqa: 31.0
      swe_bench: 42.0
      human_eval: 81.1
      aime: 18.5
    hallucination_rate: 3.4
    ethics_rating: 7.2
    iq_lower: 88
    iq_upper: 118
    eq_bench: 58
    arena_elo: 1190
    ethics_notes: Specialized for coding under Mistral AI Non-Production License. Safety guardrails are centered on software use cases, with limited general dialogue safety filters.
    lying_rate: 3.6
    lying_notes: Can make up non-existent libraries or python function arguments when faced with highly specific developer prompts.
    best_applications:
      - Local coding autocomplete and inline editing (FIM - Fill In the Middle support)
      - Quick scripting and test suite generation
      - Lightweight developer copilot integrations
    links:
      website: https://mistral.ai/news/codestral/
      system_card: https://mistral.ai/codestral-system-card

  - id: mistral-large-3
    name: Mistral Large 3
    developer: Mistral AI
    release_date: 2025-12-02
    access: Open Weights
    class: Frontier MoE
    benchmarks:
      mmlu: 88.0
      gpqa: 52.0
      swe_bench: 58.5
      human_eval: 91.0
      aime: 35.0
    hallucination_rate: 2.1
    ethics_rating: 8.0
    iq_lower: 100
    iq_upper: 130
    eq_bench: 74
    arena_elo: 1285
    ethics_notes: Released under the highly permissive Apache 2.0 license. Sparse MoE architecture (675B total, 41B active). Highly aligned to European privacy and safety mandates (GDPR, EU AI Act).
    lying_rate: 2.5
    lying_notes: Strictly adheres to formatting instructions and grounded texts, showing low confabulation on summarization.
    best_applications:
      - Private enterprise search-grounded workflows (RAG)
      - Complex multilingual structured data generation
      - Open-source self-hosted agent pipelines
    links:
      website: https://mistral.ai/news/mistral-large-3/
      system_card: https://mistral.ai/large-3-system-card

  - id: mistral-large-4
    name: Mistral Large 4
    developer: Mistral AI
    release_date: 2026-10-06
    access: Commercial
    class: Frontier MoE (API preview)
    arena_elo: 1432
    ethics_notes: EU-domiciled provider, relevant for Belgian and other EU SMEs that need an EU-controlled processor rather than only an EU hosting region. Unlike Mistral Large 3 this is an API preview - as of 2026-10-26 no open weights and no licence have been published, so Apache 2.0 must not be assumed.
    lying_notes: No hallucination measurement published at the time of writing.
    best_applications:
      - EU-controlled API inference for GDPR-sensitive SME workloads
      - Long-context document processing (1,048,576 tokens)
      - Cost-efficient multilingual generation (Dutch, French, German)
    links:
      website: https://mistral.ai/news/mistral-large-4
      system_card: https://docs.mistral.ai/models/mistral-large-4-0
    citations:
      - source: "LMArena Text leaderboard (independent, preview listing)"
        metric: "arena_elo"
        value: 1432
        url: "https://lmarena.ai/leaderboard/text"
        verified_date: "2026-10-26"

  - id: mixtral-8x22b
    name: Mixtral 8x22B
    developer: Mistral AI
    release_date: 2024-04-10
    access: Open Weights
    class: Midrange MoE
    benchmarks:
      mmlu: 77.8
      gpqa: 32.2
      swe_bench: 30.5
      aime: 10.0
    hallucination_rate: 3.2
    ethics_rating: 7.4
    iq_lower: 88
    iq_upper: 114
    eq_bench: 58
    arena_elo: 1195
    ethics_notes: Released under the fully permissive Apache 2.0 license. Sparse MoE architecture allows high reasoning-per-token efficiency.
    lying_rate: 3.6
    lying_notes: Can display standard hallucinations when faced with complex multi-step logical tasks, but remains honest about its confidence limits.
    best_applications:
      - Enterprise multilingual chatbots
      - Local RAG backends on dual-GPU setups
      - General reasoning and structured data extraction
    links:
      website: https://mistral.ai/news/mixtral-8x22b/
      system_card: https://mistral.ai/mixtral-8x22b-system-card

  - id: mistral-nemo-12b
    name: Mistral NeMo 12B
    developer: Mistral AI / NVIDIA
    release_date: 2024-07-18
    access: Open Weights
    class: Lightweight Dense
    benchmarks:
      mmlu: 74.0
      gpqa: 28.5
      swe_bench: 16.5
      aime: 8.5
    hallucination_rate: 3.6
    ethics_rating: 7.2
    iq_lower: 82
    iq_upper: 106
    eq_bench: 56
    arena_elo: 1175
    ethics_notes: Released under the Apache 2.0 license. Built in collaboration with NVIDIA, featuring an advanced tokenizer (Tekken) with high multilingual efficiency.
    lying_rate: 4.1
    lying_notes: Tends to yield to user assumptions on edge queries.
    best_applications:
      - Low-latency local multilingual assistant
      - Fine-tuning for domain-specific tasks
      - Desktop-based edge AI applications
    links:
      website: https://mistral.ai/news/mistral-nemo/
      system_card: https://huggingface.co/mistralai/Mistral-Nemo-Instruct-2407
---

# Mistral AI Series

Mistral AI, based in France, represents Europe's primary contributor to the frontier AI landscape. Emphasizing open weight access, high multilingual capacity (English, French, German, Spanish, Italian), and strict adherence to instruction formatting, Mistral models are widely hosted in sovereign European environments.

### Key Milestones:
1. **Mistral Large 2 (2024):** A 123B model that established Mistral's capacity to deliver GPT-4-class reasoning and advanced function calling.
2. **Codestral (2024):** Introduced Fill-in-the-Middle (FIM) optimization, making it a favorite for local IDE completions.
3. **Mistral Large 3 (2025):** Transitioned to a massive 675B MoE under the permissive **Apache 2.0 license**, offering an open enterprise-grade model fully aligned with the EU AI Act.

### Licensing Model & What It Means:
- **Mistral Research License (Mistral Large 2, Codestral 22B):** Mistral's custom open-weights agreement. Permissive for academic research and non-commercial tasks, but requires a paid license for commercial deployment.
- **Apache 2.0 (Mistral Large 3, Mixtral 8x22B, Mistral NeMo 12B):** A fully permissive, open-source OSI license allowing free commercial utilization, modification, redistribution, and sublicensing with no user caps.
