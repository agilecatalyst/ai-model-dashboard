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

  - id: kimi-k2-7
    name: Kimi K2.7
    developer: Moonshot AI
    release_date: 2026-05-18
    access: Open Weights
    class: Next-Gen Frontier
    benchmarks:
      mmlu: 93.8
      gpqa: 88.9
      swe_bench: 68.2
      human_eval: 96.8
      aime: 91.5
    hallucination_rate: 1.1
    ethics_rating: 7.3
    iq_lower: 110
    iq_upper: 140
    eq_bench: 87
    arena_elo: 1385
    ethics_notes: Released under Moonshot Modified MIT License. Expanded context length (4M tokens) with linear memory complexity and native agentic tool verification.
    lying_rate: 1.3
    lying_notes: Very reliable on long-context document synthesis and codebase execution loops.
    best_applications:
      - 4-Million token repository-wide context analysis
      - Swarm coding agents and automated refactoring
      - Long-horizon research synthesis
    links:
      website: https://www.moonshot.cn
      system_card: https://github.com/moonshot-ai/Kimi-K2.7

  - id: kimi-k3
    name: Kimi K3
    developer: Moonshot AI
    release_date: 2026-07-05
    access: Open Weights
    class: Frontier Multimodal Reasoning
    benchmarks:
      mmlu: 95.2
      gpqa: 91.5
      swe_bench: 81.0
      human_eval: 98.0
      aime: 96.5
    hallucination_rate: 0.8
    ethics_rating: 7.5
    iq_lower: 122
    iq_upper: 152
    eq_bench: 90
    arena_elo: 1410
    ethics_notes: Flagship open weights model. Implements "Infinite-Context Swarm MoE" architecture (8M multimodal context) with verifiable tool execution sandboxes.
    lying_rate: 0.9
    lying_notes: Native Monte Carlo Tree Search (MCTS) CoT verification eliminates step-by-step logic errors.
    best_applications:
      - Autonomous software engineering swarms (SWE-bench: 81.0%)
      - 8-Million token multimodal codebase & video analysis
      - Zero-shot enterprise agentic workflow automation
    links:
      website: https://www.moonshot.cn
      system_card: https://github.com/moonshot-ai/Kimi-K3
    citations:
      - source: "Moonshot AI Official Launch Report"
        metric: "swe_bench_frontier"
        value: 81.2
        url: "https://www.moonshot.cn/blog/kimi-k3"
        verified_date: "2026-07-05"
      - source: "AI Arena Leaderboard"
        metric: "arena_frontend_code"
        value: 1
        url: "https://lmarena.ai/"
        verified_date: "2026-07-05"

  - id: kimi-k3-1-pro
    name: Kimi K3.1 Pro
    developer: Moonshot AI
    release_date: 2026-11-04
    access: Open Weights
    class: Next-Gen Frontier MoE
    benchmarks:
      gpqa: 94.2
    ethics_notes: Announced 2026-10-24 and published as open weights on 2026-11-04. A 2.8T total / 104B active MoE under a custom Kimi K3.1-Pro License, which is not an OSI-approved licence - read it before building a commercial product on it. Subject to Chinese generative AI regulation (CAC security assessments). Despite the open weights this is not a self-hosting option for an SME - hundreds of gigabytes even at 4-bit, so in practice it is API or NVIDIA NIM only.
    lying_notes: Moonshot reports 5.4% on its own Kimi Hallu Bench without tools, which is an in-house benchmark with no independent replication. No HHEM or AA-Omniscience measurement published, so it cannot be compared with the other rates in this dashboard.
    best_applications:
      - Long-horizon agentic coding and terminal automation (65.7% Terminal-Bench 4.0, vendor-reported - and 67% as independently measured by Artificial Analysis, ahead of Fable 5.2)
      - Million-token document and codebase analysis such as due diligence and repo-wide Q&A
      - Teams that want an exit option from closed vendors but accept hosted inference
    links:
      website: https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart
      system_card: https://huggingface.co/moonshotai/Kimi-K3.1-Pro
    citations:
      - source: "BenchLM aggregated GPQA Diamond (third-party aggregator, vendor-reported figure)"
        metric: "gpqa"
        value: 94.2
        url: "https://benchlm.ai/models/kimi-3-1-pro"
        verified_date: "2026-11-21"
      - source: "Moonshot AI launch documentation (vendor-reported)"
        metric: "terminal_bench_4"
        value: 65.7
        url: "https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart"
        verified_date: "2026-11-21"
      - source: "Moonshot AI launch documentation (vendor-reported)"
        metric: "deepswe_v1_1"
        value: 75.5
        url: "https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart"
        verified_date: "2026-11-21"
---

# Moonshot AI Kimi Series

Moonshot AI's Kimi family of models has established a reputation for **pioneering long-context capabilities** and **advanced agentic reasoning**. Starting with a massive 2 million token context in early 2024, Moonshot transitioned to open-weights Mixture-of-Experts (MoE) architectures in 2025/2026, delivering frontier performance locally.

### Key Milestones:
1. **Long Context Pioneer (2024):** Led the industry by supporting 200k, then 2 million tokens of Chinese character context, proving long-context stability.
2. **Kimi K2 MoE (2025):** Switched to a 1T total parameter MoE model (with 32B active parameters), providing state-of-the-art weights to the open developer ecosystem.
3. **Kimi K2.6 & K2.7 (2026):** Native integration of "Agent Swarm" orchestration, enabling up to 100 autonomous sub-agents to collaborate on software development with 4M token context.
4. **Kimi K3 (July 2026):** Breakthrough 8M token multimodal MoE with MCTS-guided reasoning, matching top frontier closed models on SWE-bench (81.0%) while providing open weights.
5. **Kimi K3.1 Pro (November 2026):** A 2.8T total / 104B active MoE whose weights went public on 4 November 2026. It beats Claude Fable 5.2 on Terminal-Bench 4.0 as independently measured by Artificial Analysis (67% against 60%), which is a genuine milestone for open weights. But read the small print: the licence is a bespoke "Kimi K3.1-Pro License" rather than MIT or Apache, and at 2.8T parameters nobody is self-hosting this in an office. Open weights here means auditability and an exit option, not data sovereignty.

