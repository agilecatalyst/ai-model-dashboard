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
---

# Meta Muse Series (Commercial & Open Weights)

The Meta Muse series represents Meta's next-generation multimodal reasoning and agentic model lineup introduced in August 2026. The family spans flagship commercial API models designed for enterprise multi-agent orchestration (**Muse Spark**) as well as highly efficient, open-weight dense models optimized for on-device and local developer workflows (**Muse Glimmer 30B**).

### Key Milestones:
1. **Muse Spark 1.2 (August 2026):** Meta's flagship proprietary agentic model featuring a 1M token context window, state-of-the-art SWE-bench / TerminalBench coding capabilities, and deep multi-agent coordination support.
2. **Muse Glimmer 30B (August 2026):** An open-weight (Apache 2.0) 29.6B multimodal model distilled from Muse Spark, equipped with DFlash speculative decoding for ultra-fast local execution on consumer hardware with 24–32GB VRAM.
