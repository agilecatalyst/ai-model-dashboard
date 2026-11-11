---
models:
  - id: deepseek-v3
    name: DeepSeek-V3
    developer: DeepSeek
    release_date: 2024-12-26
    access: Open Weights
    class: Frontier MoE
    benchmarks:
      mmlu: 88.5
      gpqa: 59.1
      swe_bench: 23.5
      human_eval: 90.1
      aime: 14.5
    hallucination_rate: 2.7
    ethics_rating: 6.0
    iq_lower: 102
    iq_upper: 134
    eq_bench: 71
    arena_elo: 1260
    ethics_notes: Released under an open-weights license with specific commercial and safety guidelines. Governed under Chinese regulations, leading to structural censorship/filters on politically sensitive topics. 
    lying_rate: 3.2
    lying_notes: Under pressure regarding sensitive geographic or historical topics, it defaults to pre-programmed safe refusals or standard diplomatic phrasing.
    best_applications:
      - Low-cost cloud API text generation
      - Multi-turn conversational chatbots
      - Bulk text processing and coding (highly efficient token throughput)
    links:
      website: https://www.deepseek.com
      system_card: https://github.com/deepseek-ai/DeepSeek-V3/blob/main/DeepSeek_V3.pdf

  - id: deepseek-r1
    name: DeepSeek-R1
    developer: DeepSeek
    release_date: 2025-01-20
    access: Open Weights
    class: Frontier Reasoning
    benchmarks:
      mmlu: 90.0
      gpqa: 90.0
      swe_bench: 49.2
      human_eval: 96.3
      aime: 97.3
    hallucination_rate: 2.9
    ethics_rating: 6.2
    iq_lower: 115
    iq_upper: 145
    eq_bench: 83
    arena_elo: 1365
    ethics_notes: Open-weights reasoning model using reinforcement learning. First open model to match OpenAI o1 on complex reasoning. Safe on general topics, but censored on specific political topics.
    lying_rate: 2.0
    lying_notes: Reasoning chain (visible in raw outputs) allows it to cross-reference rules and math, reducing confabulation in logical fields.
    best_applications:
      - Advanced mathematical proofs and coding agents
      - Solving high-difficulty logic puzzles
      - Local reasoning pipelines
    links:
      website: https://www.deepseek.com
      system_card: https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf

  - id: deepseek-v4-pro
    name: DeepSeek-V4-Pro
    developer: DeepSeek
    release_date: 2026-04-24
    access: Open Weights
    class: Next-Gen Frontier
    benchmarks:
      mmlu: 94.0
      gpqa: 82.5
      swe_bench: 44.5
      human_eval: 95.8
      aime: 82.0
    hallucination_rate: 1.5
    ethics_rating: 6.5
    iq_lower: 122
    iq_upper: 150
    eq_bench: 87
    arena_elo: 1390
    ethics_notes: Flagship 1.6-trillion parameter MoE model. Deeply cost-disruptive (75% API price cut in May 2026). Open-weights under permissive conditions. Fails to provide details on training data origins.
    lying_rate: 1.8
    lying_notes: Chain-of-thought is integrated, but retains characteristic geopolitical bias/filters as required by Chinese regulatory compliance.
    best_applications:
      - Massive-scale data processing and extraction
      - Low-cost enterprise agent orchestrations
      - Coding copilots and private RAG pipelines
    links:
      website: https://www.deepseek.com
      system_card: https://github.com/deepseek-ai/DeepSeek-V4/blob/main/DeepSeek_V4.pdf

  - id: deepseek-v4-1-flash
    name: DeepSeek-V4.1-Flash
    developer: DeepSeek
    release_date: 2026-09-10
    access: Open Weights
    class: Efficient Open MoE
    benchmarks:
      gpqa: 90.9
    arena_elo: 1475
    ethics_notes: MIT-licensed 552B MoE with only 8B active parameters on input and 16B on output, updated by the 1017 checkpoint on 2026-10-17. Training-data provenance remains undisclosed, as with earlier DeepSeek releases.
    lying_notes: No comparable hallucination benchmark published at the time of writing.
    best_applications:
      - Self-hosted agentic coding under a permissive MIT licence
      - Very low-cost high-volume inference
      - Private RAG pipelines with a 1M-token context
    links:
      website: https://www.deepseek.com/en/news/deepseek-v4-1-flash
      system_card: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
    citations:
      - source: "DeepSeek model card (vendor-reported, instruct, max effort)"
        metric: "gpqa"
        value: 90.9
        url: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
        verified_date: "2026-10-26"
      - source: "LMArena Text leaderboard (independent)"
        metric: "arena_elo"
        value: 1475
        url: "https://lmarena.ai/leaderboard/text"
        verified_date: "2026-10-26"
---

# DeepSeek Series

DeepSeek, a Chinese AI firm, disrupted the global AI landscape in late 2024 and early 2025 by launching frontier-class models at a fraction of the training and hosting costs of U.S. competitors. They popularized massive Mixture-of-Experts (MoE) architectures with specialized routing algorithms (Multi-head Latent Attention, MLA).

### Key Features:
1. **Multi-head Latent Attention (MLA):** Dramatically reduces KV-cache sizes during inference, making long-context processing highly efficient.
2. **DeepSeek-R1:** A breakthrough reasoning model that open-sourced its training methodology (using cold-start data and direct reinforcement learning), sparking a worldwide wave of local reasoning research.
3. **DeepSeek-V4:** Released in April 2026 as a 1.6T MoE, offering top-tier performance at extremely low API pricing, putting massive pricing pressure on OpenAI and Anthropic.
4. **Ethics & Alignment Challenges:** While highly open and technically transparent, the weights are censored on specific topics due to regulatory requirements.
