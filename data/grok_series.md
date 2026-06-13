---
models:
  - id: grok-2
    name: Grok-2
    developer: xAI
    release_date: 2024-08-12
    access: Commercial
    class: Frontier Multimodal
    benchmarks:
      mmlu: 87.5
      gpqa: 56.0
      swe_bench: 18.2
      human_eval: 88.4
      aime: 18.0
    hallucination_rate: 2.9
    ethics_rating: 6.0
    iq_lower: 98
    iq_upper: 130
    eq_bench: 77
    arena_elo: 1310
    ethics_notes: Positioned as a "wry" and less censored assistant. Initially allowed generation of controversial/copyrighted images without safety filters, leading to public debate. Governed under xAI safety cards.
    lying_rate: 3.4
    lying_notes: Can sometimes exhibit slightly higher hallucination rate on general topics because of its humorous/edgy conversational styling, occasionally "hallucinating" jokes or sarcastic premises.
    best_applications:
      - Real-time information retrieval (X platform integration)
      - Informal chat and creative brainstorming
      - Image generation (via FLUX integration)
    links:
      website: https://x.ai/blog/grok-2
      system_card: https://x.ai/grok-2-system-card

  - id: grok-3
    name: Grok-3
    developer: xAI
    release_date: 2025-02-17
    access: Commercial
    class: Frontier Reasoning
    benchmarks:
      mmlu: 92.5
      gpqa: 80.2
      swe_bench: 42.0
      human_eval: 94.6
      aime: 86.4
    hallucination_rate: 1.8
    ethics_rating: 6.8
    iq_lower: 115
    iq_upper: 144
    eq_bench: 82
    arena_elo: 1360
    ethics_notes: Features a specialized "Think" mode utilizing reinforcement learning. Safety guidelines were hardened compared to Grok-2 to prevent generation of dangerous cyber or biological instructions during thinking processes.
    lying_rate: 2.1
    lying_notes: Chain-of-thought helps verify mathematical and factual steps. Displays very low hallucination rate on code and logic tasks.
    best_applications:
      - Math and logical problem solving
      - Coding pipelines and script auditing
      - Real-time news analysis and context retrieval from X (formerly Twitter)
    links:
      website: https://x.ai/blog/grok-3
      system_card: https://x.ai/grok-3-system-card
---

# xAI Grok Series

xAI's Grok models are designed to be "fun, witty, and real-time." By integrating directly with the X platform, Grok has access to live posts and breaking news, giving it an advantage on current event timelines.

### Key Milestones:
1. **Grok-2 (2024):** A major step forward that established xAI as a direct competitor to GPT-4. It introduced integrated visual capabilities and was paired with FLUX for image generation.
2. **Grok-3 (2025):** Launched with a dedicated reasoning mode ("Think") that allowed it to compete with OpenAI's o1. It was trained on xAI's Colossus cluster in Memphis, Tennessee.
3. **Censorship Philosophy:** xAI positions Grok as a model that will answer questions other models refuse, though it maintains core guardrails against harmful content.
