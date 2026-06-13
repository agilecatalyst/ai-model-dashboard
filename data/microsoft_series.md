---
models:
  - id: mai-thinking-1
    name: MAI-Thinking-1
    developer: Microsoft AI
    release_date: 2026-06-02
    access: Commercial
    class: Frontier Reasoning
    benchmarks:
      mmlu: 95.5
      gpqa: 87.5
      swe_bench: 72.8
      human_eval: 97.0
      aime: 89.2
    hallucination_rate: 1.3
    ethics_rating: 8.0
    iq_lower: 124
    iq_upper: 150
    eq_bench: 88
    arena_elo: 1415
    ethics_notes: Microsoft's flagship reasoning engine. Employs a reinforcement learning chain-of-thought strategy. Developed under Microsoft's Responsible AI guidelines.
    lying_rate: 1.1
    lying_notes: Active internal validation loops significantly lower hallucination frequency compared to legacy dense architectures.
    best_applications:
      - Scientific computation and research
      - Complex regulatory and legal parsing
      - Quantitative logic validation
    links:
      website: https://azure.microsoft.com/blog/mai-thinking-1
      system_card: https://azure.microsoft.com/blog/mai-thinking-1-system-card

  - id: mai-code-1-flash
    name: MAI-Code-1-Flash
    developer: Microsoft AI
    release_date: 2026-06-02
    access: Commercial
    class: Fast Agentic
    benchmarks:
      mmlu: 86.4
      gpqa: 52.0
      swe_bench: 58.4
      human_eval: 94.2
      aime: 48.0
    hallucination_rate: 2.4
    ethics_rating: 7.8
    iq_lower: 100
    iq_upper: 128
    eq_bench: 72
    arena_elo: 1290
    ethics_notes: Specialized fast-inference model tuned for coding assistance and automated agent loops. Heavily integrated with GitHub Copilot API boundaries.
    lying_rate: 2.1
    lying_notes: Fast generation speeds can cause occasional syntax misses or dependency references to older library versions.
    best_applications:
      - Real-time inline code autocomplete
      - Fast debugging loops
      - Lightweight agentic workspace tasks
    links:
      website: https://azure.microsoft.com/blog/mai-code-1-flash
      system_card: https://azure.microsoft.com/blog/mai-code-1-flash-system-card
---

# Microsoft MAI Series

Microsoft's MAI (Microsoft AI) series represents Microsoft's strategic shift toward developing in-house foundation models alongside their partnerships with OpenAI. Announced at Build 2026, the MAI series targets specific enterprise operational categories—primarily deep reasoning (MAI-Thinking) and agentic code automation (MAI-Code) integrated directly into developer environments.

### Key Milestones:
1. **MAI-Thinking-1 (June 2026):** A flagship reasoning engine utilizing reinforcement learning at inference time to solve multi-step math, science, and coding problems.
2. **MAI-Code-1-Flash (June 2026):** A fast-inference model specifically optimized for low-latency coding tasks and seamless VS Code integration.
