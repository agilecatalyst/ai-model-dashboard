---
models:
  - id: kimi-k1-5
    name: Kimi K1.5
    developer: Moonshot AI
    release_date: 2025-01-20
    access: Commercial
    class: Frontier Reasoning
    benchmarks:
      mmlu: 88.2
      gpqa: 70.0
      swe_bench: 29.5
      human_eval: 91.0
      aime: 74.0
    hallucination_rate: 2.2
    ethics_rating: 6.8
    iq_lower: 94
    iq_upper: 125
    eq_bench: 66
    arena_elo: 1240
    ethics_notes: Governed under Chinese AI regulations (CAC regulations). Implements safety checks on sensitive topics. Focuses on helpfulness and honesty.
    lying_rate: 2.5
    lying_notes: Chain-of-thought helps check calculations and quotes, minimizing standard hallucinations on factual text.
    best_applications:
      - Long-context reasoning and summarization
      - Highly complex mathematical computations
      - Document QA requiring step-by-step logic
    links:
      website: https://www.moonshot.cn
      system_card: https://github.com/moonshot-ai/Kimi-K1.5

  - id: kimi-k2
    name: Kimi K2
    developer: Moonshot AI
    release_date: 2025-07-11
    access: Open Weights
    class: Frontier MoE
    benchmarks:
      mmlu: 90.1
      gpqa: 75.0
      swe_bench: 36.8
      human_eval: 93.2
      aime: 80.0
    hallucination_rate: 1.8
    ethics_rating: 7.0
    iq_lower: 102
    iq_upper: 132
    eq_bench: 76
    arena_elo: 1300
    ethics_notes: Released under Moonshot Modified MIT License. Allows free commercial use under specific parameters. Aligned via RLHF.
    lying_rate: 2.2
    lying_notes: Excellent grounding, but on open conversational topics without references it can exhibit mild sycophancy.
    best_applications:
      - Local coding agents
      - Large-scale document processing (up to 2M token context window)
      - Complex data extraction pipelines
    links:
      website: https://www.moonshot.cn
      system_card: https://github.com/moonshot-ai/Kimi-K2

  - id: kimi-k2-6
    name: Kimi K2.6
    developer: Moonshot AI
    release_date: 2026-04-20
    access: Open Weights
    class: Next-Gen Frontier
    benchmarks:
      mmlu: 92.5
      gpqa: 87.6
      swe_bench: 60.4
      human_eval: 96.0
      aime: 89.0
    hallucination_rate: 1.2
    ethics_rating: 7.2
    iq_lower: 108
    iq_upper: 138
    eq_bench: 85
    arena_elo: 1375
    ethics_notes: Released under Moonshot Modified MIT License. Employs "Agent Swarm" technology. Tested extensively for agent safety and sandboxing boundary safety.
    lying_rate: 1.4
    lying_notes: Low hallucination rate on code and text due to native tool checks and self-correction loops.
    best_applications:
      - Autonomous multi-agent coding (SWE-bench: 60.4)
      - Full-stack codebase generation and migration
      - Complex multimodal agent workflows using MoonViT
    links:
      website: https://www.moonshot.cn
      system_card: https://github.com/moonshot-ai/Kimi-K2.6
---

# Moonshot AI Kimi Series

Moonshot AI's Kimi family of models has established a reputation for **pioneering long-context capabilities** and **advanced agentic reasoning**. Starting with a massive 2 million token context in early 2024, Moonshot transitioned to open-weights Mixture-of-Experts (MoE) architectures in 2025/2026, delivering frontier performance locally.

### Key Milestones:
1. **Long Context Pioneer (2024):** Led the industry by supporting 200k, then 2 million tokens of Chinese character context, proving long-context stability.
2. **Kimi K2 MoE (2025):** Switched to a 1T total parameter MoE model (with 32B active parameters), providing state-of-the-art weights to the open developer ecosystem.
3. **Kimi K2.6 Swarm (2026):** Native integration of "Agent Swarm" orchestration, enabling up to 100 autonomous sub-agents to collaborate on software development and web research.
