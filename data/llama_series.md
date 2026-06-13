---
models:
  - id: llama-3-1-405b
    name: Llama 3.1 405B
    developer: Meta
    release_date: 2024-07-23
    access: Open Weights
    class: Frontier Dense
    benchmarks:
      mmlu: 88.6
      gpqa: 51.1
      swe_bench: 19.8
      human_eval: 89.0
      aime: 15.0
    hallucination_rate: 3.1
    ethics_rating: 7.5
    iq_lower: 101
    iq_upper: 133
    eq_bench: 79
    arena_elo: 1320
    ethics_notes: Released under Meta Llama 3 License. Permissive for up to 700M monthly active users. Features built-in safety guidelines (Llama Guard 3). Base weights are safe, but can be jailbroken if locally fine-tuned without constraints.
    lying_rate: 3.5
    lying_notes: Can hallucinate when generating long chains of factual statements on obscure historical subjects. High accuracy on main knowledge domains.
    best_applications:
      - Model distillation (license allows generating data for smaller models)
      - Complex reasoning and synthetic data generation
      - Private enterprise-grade local serving
    links:
      website: https://llama.meta.com
      system_card: https://github.com/meta-llama/llama3/blob/main/MODEL_CARD.md

  - id: llama-3-2-11b
    name: Llama 3.2 11B Vision
    developer: Meta
    release_date: 2024-09-25
    access: Open Weights
    class: Lightweight Multimodal
    benchmarks:
      mmlu: 75.4
      gpqa: 30.5
      swe_bench: 8.5
      human_eval: 72.0
      aime: 8.0
    hallucination_rate: 3.8
    ethics_rating: 7.2
    iq_lower: 82
    iq_upper: 105
    eq_bench: 59
    arena_elo: 1180
    ethics_notes: Meta's first open-weight vision model. Underwent intensive safety review on multimodal inputs (e.g. preventing unsafe image classifications).
    lying_rate: 4.2
    lying_notes: Prone to visual hallucinations when reading dense chart text or complex graphics.
    best_applications:
      - Low-cost image labeling and captioning
      - Edge devices and mobile multimodal workflows
      - Visual document preprocessing
    links:
      website: https://llama.meta.com
      system_card: https://github.com/meta-llama/llama-models/main/models/llama3_2/MODEL_CARD.md

  - id: llama-3-3-70b
    name: Llama 3.3 70B
    developer: Meta
    release_date: 2024-12-06
    access: Open Weights
    class: Midrange Dense
    benchmarks:
      mmlu: 86.0
      gpqa: 45.0
      swe_bench: 17.5
      human_eval: 86.2
      aime: 16.5
    hallucination_rate: 2.8
    ethics_rating: 7.8
    iq_lower: 98
    iq_upper: 125
    eq_bench: 68
    arena_elo: 1235
    ethics_notes: Meta's update to Llama 3.1 70B, optimizing speed and efficiency. Employs advanced post-training alignment to keep safety filters intact while enhancing capability.
    lying_rate: 3.0
    lying_notes: Highly consistent on general knowledge, but under pressure, can agree with user misinformation.
    best_applications:
      - General developer assistants and chatbots
      - Local RAG backends
      - Agentic tools on standard hardware (can run on dual-GPU systems)
    links:
      website: https://llama.meta.com
      system_card: https://github.com/meta-llama/llama3_3/blob/main/MODEL_CARD.md

  - id: llama-4-maverick
    name: Llama 4 Maverick
    developer: Meta
    release_date: 2025-04-05
    access: Open Weights
    class: Frontier MoE
    benchmarks:
      mmlu: 91.8
      gpqa: 68.5
      swe_bench: 35.0
      human_eval: 91.0
      aime: 65.4
    hallucination_rate: 1.9
    ethics_rating: 8.2
    iq_lower: 110
    iq_upper: 138
    eq_bench: 84
    arena_elo: 1370
    ethics_notes: Meta's first frontier MoE (400B parameters total, 17B active). Highly aligned for safety. Llama Guard 4 was launched alongside it to act as an input/output safety guardrail.
    lying_rate: 2.1
    lying_notes: Chain-of-thought and expert-routing reduce hallucination, but expert models can occasionally deliver conflicting factual summaries on niche topics.
    best_applications:
      - Complex multimodal local reasoning
      - Coding pipelines and multi-agent systems
      - Advanced enterprise workflow orchestration
    links:
      website: https://llama.meta.com/llama4
      system_card: https://github.com/meta-llama/llama4/blob/main/MODEL_CARD.md
---

# Meta Llama Series (Open Weights)

Meta's Llama family has been a cornerstone of the open-weight revolution, starting in 2023 and continuing with the Llama 3.x and Llama 4 series. Meta's open approach permits research and commercial application, helping standard developers host GPT-4-class capabilities locally.

### Key Milestones:
1. **Llama 3.1 405B (2024):** The first massive open-weights model to directly compete with proprietary models on GPQA and MMLU. It set a precedent for model distillation.
2. **Llama 3.2 Vision (2024):** Brought native image understanding to the lightweight model family, allowing low-cost visual processing on local networks.
3. **Llama 3.3 70B (2024):** Replaced the Llama 3.1 70B model, delivering nearly 405B-class general knowledge performance at a fraction of the hardware cost.
4. **Llama 4 MoE (2025):** Switched to a Mixture-of-Experts (MoE) architecture (Scout & Maverick) featuring massive context windows and native multimodal agent capabilities.
