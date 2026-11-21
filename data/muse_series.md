---
models:
  - id: muse-spark-1-2
    name: Muse Spark 1.2
    developer: Meta
    release_date: 2026-08-05
    access: Commercial
    class: Frontier Agentic Reasoning
    benchmarks:
      mmlu: 96.1
      gpqa: 92.4
      swe_bench: 82.9
      human_eval: 94.5
      aime: 95.8
    hallucination_rate: 0.8
    ethics_rating: 8.5
    iq_lower: 118
    iq_upper: 146
    eq_bench: 88
    arena_elo: 1410
    ethics_notes: Meta's flagship commercial agentic reasoning engine. Governed by Meta AI Safety Principles, featuring real-time CoT safety alignment, advanced multi-agent guardrails, and privacy protection protocols for enterprise function calling.
    lying_rate: 0.8
    lying_notes: Exceptionally low hallucination rate during long-horizon tool execution and multi-step reasoning, enforced through active CoT self-verification loops.
    best_applications:
      - Multi-agent workflow orchestration and enterprise automation
      - Long-horizon system debugging and code generation (1M context window)
      - Complex tool-use and autonomous API function calling
    links:
      website: https://ai.meta.com/muse
      system_card: system_cards/muse-spark-system-card.md

  - id: muse-glimmer-30b
    name: Muse Glimmer 30B
    developer: Meta
    release_date: 2026-08-10
    access: Open Weights
    class: Midrange Multimodal Agentic
    benchmarks:
      mmlu: 91.2
      gpqa: 83.5
      swe_bench: 76.0
      human_eval: 88.5
      aime: 94.7
    hallucination_rate: 1.3
    ethics_rating: 8.3
    iq_lower: 105
    iq_upper: 134
    eq_bench: 78
    arena_elo: 1345
    ethics_notes: Released under the Apache 2.0 license. Dense 29.6B parameter model paired with a ~1.8B vision encoder, distilled from Muse Spark teacher models. Evaluated under Meta's AI safety framework with moderate risk classification, suitable for local deployment with standard system guardrails.
    lying_rate: 1.3
    lying_notes: Highly consistent performance on tool-use and coding benchmarks. Low hallucination rate on text-based agentic tasks, though extreme visual noise or illegible chart text can occasionally induce mild visual misinterpretations.
    best_applications:
      - Always-on local agentic workflows (e.g. OpenClaw, local coding assistants)
      - On-device document, screenshot, and visual tool-calling extraction
      - Edge developer pipelines requiring 128K context window within 24-32GB VRAM
    links:
      website: https://huggingface.co/meta-llama/Muse-Glimmer-30B
      system_card: system_cards/muse-glimmer-30b-system-card.md

  - id: muse-wonder-full
    name: Muse Wonder Full
    developer: Meta
    release_date: 2026-10-12
    access: Commercial (Limited)
    class: Frontier Agentic Reasoning
    ethics_notes: Despite the Muse family's open-weight reputation this model is closed and subscription-only - it is reachable exclusively through the Muse Code plans (reported at $50 and $200 per month) and has no API, while the sibling Muse Wonder does have an API at $4/$20 per 1M tokens. Meta publishes no parameter count and no training detail. For an SME with data-sovereignty requirements this combination (US vendor, subscription-only, no API contract, no weights) is the weakest governance position of the autumn 2026 releases.
    lying_notes: Artificial Analysis measures a 23% AA-Omniscience hallucination rate (Muse Wonder 27%) and an AA-Omniscience score of only 30, against 46 for Claude Opus 5.5 - it hallucinates less than its sibling but also knows markedly less. Not comparable to the HHEM rates of older models here.
    best_applications:
      - Long-running multi-step agent work inside Meta's own Muse Code terminal agent, its only delivery channel
      - Coding agent workloads where it matches Claude Code on the AA Coding Agents Index (68)
      - Multimodal intake of audio, video and PDF for teams already committed to Meta's stack
    links:
      website: https://ai.meta.com/muse
      system_card: https://ai.meta.com/muse/wonder-model-card
    citations:
      - source: "Artificial Analysis Intelligence Index v4.3 (independent)"
        metric: "aa_intelligence_index"
        value: 56
        url: "https://artificialanalysis.ai/articles/muse-wonder"
        verified_date: "2026-11-21"
      - source: "Artificial Analysis Coding Agents Index, max effort in Muse Code (independent)"
        metric: "aa_coding_agents_index"
        value: 68
        url: "https://artificialanalysis.ai/articles/muse-wonder"
        verified_date: "2026-11-21"
      - source: "Meta launch table (vendor-reported)"
        metric: "swe_marathon"
        value: 57.5
        url: "https://ai.meta.com/muse"
        verified_date: "2026-11-21"
---

# Meta Muse Series (Commercial & Open Weights)

The Meta Muse series represents Meta's next-generation multimodal reasoning and agentic model lineup introduced in August 2026. The family spans flagship commercial API models designed for enterprise multi-agent orchestration (**Muse Spark**) as well as highly efficient, open-weight dense models optimized for on-device and local developer workflows (**Muse Glimmer 30B**).

### Key Milestones:
1. **Muse Spark 1.2 (August 2026):** Meta's flagship proprietary agentic model featuring a 1M token context window, state-of-the-art SWE-bench / TerminalBench coding capabilities, and deep multi-agent coordination support.
2. **Muse Glimmer 30B (August 2026):** An open-weight (Apache 2.0) 29.6B multimodal model distilled from Muse Spark, equipped with DFlash speculative decoding for ultra-fast local execution on consumer hardware with 24–32GB VRAM.
3. **Muse Wonder Full (October 2026):** Meta Superintelligence Labs' frontier agentic model, notable mainly for how it is *not* delivered - subscription-only inside Muse Code, with no API, no weights and no published parameter count. It matches Claude Code on the independent AA Coding Agents Index (68) but scores only 30 on AA-Omniscience, far behind Opus 5.5 (46). For an EU SME it is the weakest governance position of the autumn 2026 releases, which is precisely why it is documented here.
