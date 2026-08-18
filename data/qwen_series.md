---
models:
  - id: qwen-2-5-32b
    name: Qwen 2.5 32B
    developer: Alibaba Cloud
    release_date: 2024-09-19
    access: Open Weights
    class: Midrange Dense
    benchmarks:
      mmlu: 83.0
      gpqa: 39.5
      swe_bench: 14.0
      human_eval: 82.5
      aime: 11.2
    hallucination_rate: 3.5
    ethics_rating: 6.8
    iq_lower: 95
    iq_upper: 122
    eq_bench: 63
    arena_elo: 1215
    ethics_notes: Governed under Chinese AI regulations. Implements mandatory filters on sensitive topics. Permissive open weights license (Qwen license).
    lying_rate: 3.9
    lying_notes: Yields to user assumptions easily and can make up historical facts on specialized topics to maintain conversational flow.
    best_applications:
      - Local general text generation and assistant
      - Efficient summarization on mid-tier server hardware
      - Fine-tuning base for language tasks
    links:
      website: https://qwenlm.github.io/blog/qwen2.5/
      system_card: https://github.com/QwenLM/Qwen2.5

  - id: qwen-2-5-coder-32b
    name: Qwen 2.5 Coder 32B
    developer: Alibaba Cloud
    release_date: 2024-11-12
    access: Open Weights
    class: Midrange Coding
    benchmarks:
      mmlu: 82.0
      gpqa: 42.5
      swe_bench: 29.4
      human_eval: 93.0
      aime: 30.5
    hallucination_rate: 2.8
    ethics_rating: 7.0
    iq_lower: 98
    iq_upper: 125
    eq_bench: 70
    arena_elo: 1265
    ethics_notes: High focus on code correctness. Less prone to standard conversational safety issues due to code specialization, but inherits base Qwen filters.
    lying_rate: 3.0
    lying_notes: Can invent non-existent APIs or libraries when tasked with highly obscure developer frameworks. Highly accurate on mainstream languages.
    best_applications:
      - Local IDE coding autocomplete and chat
      - Coding agents and code repository analysis
      - Code translation and syntax debugging
    links:
      website: https://qwenlm.github.io/blog/qwen2.5-coder/
      system_card: https://github.com/QwenLM/Qwen2.5-Coder

  - id: qwen-3-72b
    name: Qwen 3 72B
    developer: Alibaba Cloud
    release_date: 2025-04-29
    access: Open Weights
    class: Frontier Dense
    benchmarks:
      mmlu: 89.2
      gpqa: 54.0
      swe_bench: 28.5
      human_eval: 90.4
      aime: 38.0
    hallucination_rate: 2.2
    ethics_rating: 7.2
    iq_lower: 104
    iq_upper: 134
    eq_bench: 78
    arena_elo: 1315
    ethics_notes: Features "hybrid reasoning" toggles. Subject to regional alignment policies. High multilingual capabilities and safety guardrails.
    lying_rate: 2.6
    lying_notes: Double-checks reasoning path when reasoning mode is active, which cuts down basic retrieval errors.
    best_applications:
      - Local multilingual enterprise chat
      - Complex agent tool integration
      - Distillation source for smaller models
    links:
      website: https://qwenlm.github.io/blog/qwen3/
      system_card: https://github.com/QwenLM/Qwen3

  - id: qwen-3-5-32b
    name: Qwen 3.5 32B
    developer: Alibaba Cloud
    release_date: 2026-03-10
    access: Open Weights
    class: Midrange Dense
    benchmarks:
      mmlu: 85.8
      gpqa: 52.0
      swe_bench: 24.5
      human_eval: 88.0
      aime: 45.0
    hallucination_rate: 2.1
    ethics_rating: 7.2
    iq_lower: 102
    iq_upper: 128
    eq_bench: 68
    arena_elo: 1250
    ethics_notes: Governed under Chinese AI regulations. Permissive open weights license (MIT license). Aligned to prevent safety violations while keeping high utility.
    lying_rate: 2.5
    lying_notes: Very reliable on direct factual questions; low sycophancy on standard tasks.
    best_applications:
      - Local coding assistant on single consumer GPU
      - Medium-scale text summarization and categorization
      - RAG backend implementations
    links:
      website: https://qwenlm.github.io/blog/qwen3.5/
      system_card: https://github.com/QwenLM/Qwen3.5

  - id: qwen-3-6-27b
    name: Qwen 3.6 27B
    developer: Alibaba Cloud
    release_date: 2026-04-22
    access: Open Weights
    class: Midrange Dense
    benchmarks:
      mmlu: 88.0
      gpqa: 87.8
      swe_bench: 77.2
      human_eval: 94.0
      aime: 72.5
    hallucination_rate: 1.5
    ethics_rating: 7.4
    iq_lower: 112
    iq_upper: 140
    eq_bench: 67
    arena_elo: 1245
    ethics_notes: Highly optimized dense open weights model. Subject to Chinese regulatory alignment. MIT-licensed. Built for private autonomous agency.
    lying_rate: 1.8
    lying_notes: Shows low confabulation rate in agentic workflows due to advanced self-verification steps.
    best_applications:
      - Private agentic coding copilots
      - Autonomous full-stack development agents
      - High-stakes local research engines
    links:
      website: https://qwenlm.github.io/blog/qwen3.6/
      system_card: https://github.com/QwenLM/Qwen3.6
    citations:
      - source: "Epoch AI"
        metric: "swe_bench"
        value: 77.2
        url: "https://epoch.ai/benchmarks/swe-bench-verified"
        verified_date: "2026-04-22"
      - source: "Alibaba Tech Report"
        metric: "gpqa"
        value: 87.8
        url: "https://qwenlm.github.io/blog/qwen3.6/"
        verified_date: "2026-04-22"
      - source: "Alibaba Tech Report"
        metric: "mmlu"
        value: 88.0
        url: "https://qwenlm.github.io/blog/qwen3.6/"
        verified_date: "2026-04-22"

  - id: qwen-3-7-max
    name: Qwen 3.7 Max
    developer: Alibaba Cloud
    release_date: 2026-05-20
    access: Commercial
    class: Next-Gen Frontier
    benchmarks:
      mmlu: 94.6
      gpqa: 80.4
      swe_bench: 80.4
      human_eval: 96.5
      aime: 82.5
    hallucination_rate: 1.4
    ethics_rating: 7.5
    iq_lower: 122
    iq_upper: 149
    eq_bench: 86
    arena_elo: 1385
    ethics_notes: Alibaba's proprietary flagship. Highly optimized for agent-centric workloads and long-horizon planning. Subject to China's generative AI security checks.
    lying_rate: 1.6
    lying_notes: High factual consistency on tool usage, but subject to diplomatic safety refusals on geopolitical queries.
    best_applications:
      - Autonomous software engineering pipelines (SWE-bench: 80.4)
      - Complex workflow automation and Model Context Protocol (MCP) agents
      - Large-scale enterprise knowledge graphs
    links:
      website: https://www.alibabacloud.com/blog/qwen3-7-max
      system_card: https://www.alibabacloud.com/blog/qwen3-7-max-system-card

  - id: qwen-2-5-moe-14b
    name: Qwen 2.5 MoE 14B
    developer: Alibaba Cloud
    release_date: 2024-09-19
    access: Open Weights
    class: Lightweight MoE
    benchmarks:
      mmlu: 78.2
      gpqa: 35.8
      swe_bench: 9.8
      aime: 10.5
    hallucination_rate: 3.2
    ethics_rating: 7.0
    iq_lower: 88
    iq_upper: 110
    eq_bench: 60
    arena_elo: 1170
    ethics_notes: Released under the highly permissive Apache 2.0 license. Features a highly efficient Mixture-of-Experts architecture with 2.5B active parameters per token.
    lying_rate: 3.6
    lying_notes: Susceptible to sycophancy when prompted with strong opinions, but holds standard factual consistency well.
    best_applications:
      - High-efficiency local execution (low compute environments)
      - Text transformation, classification, and extraction
      - Budget-friendly private deployment
    links:
      website: https://qwenlm.github.io/blog/qwen2.5-moe/
      system_card: https://github.com/QwenLM/Qwen2.5-MoE

  - id: qwen-3-5-moe-20b
    name: Qwen 3.5 MoE 20B
    developer: Alibaba Cloud
    release_date: 2026-03-10
    access: Open Weights
    class: Lightweight MoE
    benchmarks:
      mmlu: 84.5
      gpqa: 48.2
      swe_bench: 20.5
      aime: 38.0
    hallucination_rate: 2.0
    ethics_rating: 7.3
    iq_lower: 96
    iq_upper: 124
    eq_bench: 66
    arena_elo: 1225
    ethics_notes: Released under the Apache 2.0 license. Features a highly optimized MoE architecture with 4.5B active parameters. Subject to local Chinese regulatory alignment but highly functional for general utility.
    lying_rate: 2.3
    lying_notes: Strong logic paths due to updated MoE gating mechanism. Low factual confabulation rates.
    best_applications:
      - High-performance local code completion and RAG
      - Fast, multi-agent processing in sandboxes
      - Multi-language summarization pipelines
    links:
      website: https://qwenlm.github.io/blog/qwen3.5-moe/
      system_card: https://github.com/QwenLM/Qwen3.5-MoE

  - id: qwen-3-6-30b-moe-a3b
    name: Qwen 3.6 30B MoE (A3B)
    developer: Alibaba Cloud
    release_date: 2026-05-04
    access: Open Weights
    class: Lightweight MoE
    benchmarks:
      mmlu: 89.4
      gpqa: 79.2
      swe_bench: 68.5
      human_eval: 95.2
      aime: 81.0
    hallucination_rate: 1.3
    ethics_rating: 7.4
    iq_lower: 110
    iq_upper: 138
    eq_bench: 70
    arena_elo: 1260
    ethics_notes: Apache 2.0 open-weights MoE model with 30B total parameters and 3B active parameters per token. Highly optimized for high-throughput edge agents.
    lying_rate: 1.5
    lying_notes: Low confabulation rate during multi-step tool calls due to active MoE gating verification.
    best_applications:
      - High-throughput local multi-agent tool execution (3B active parameters)
      - Low-latency edge RAG pipelines and code completion
      - Resource-constrained local server deployments
    links:
      website: https://qwenlm.github.io/blog/qwen3/
      system_card: system_cards/qwen-3-6-30b-moe-a3b-system-card.md

  - id: qwen-3-8-27b
    name: Qwen 3.8 27B
    developer: Alibaba Cloud
    release_date: 2026-06-10
    access: Open Weights
    class: Midrange Dense
    benchmarks:
      mmlu: 91.2
      gpqa: 89.5
      swe_bench: 79.8
      human_eval: 96.2
      aime: 86.0
    hallucination_rate: 1.2
    ethics_rating: 7.6
    iq_lower: 115
    iq_upper: 143
    eq_bench: 73
    arena_elo: 1340
    ethics_notes: MIT-licensed open weights model. Flagship 27B dense architecture, optimized for local developer workstations (24GB-32GB RAM).
    lying_rate: 1.3
    lying_notes: Native reasoning verification passes dramatically cut confabulation in coding and tool execution.
    best_applications:
      - High-performance local IDE coding assistant (SWE-bench: 79.8%)
      - Enterprise multi-agent local orchestration
      - High-precision mathematical and logical synthesis
    links:
      website: https://qwenlm.github.io/blog/qwen3/
      system_card: system_cards/qwen-3-8-27b-system-card.md
    citations:
      - source: "Alibaba Qwen Technical Report"
        metric: "swe_bench"
        value: 79.8
        url: "https://qwenlm.github.io/blog/qwen3/"
        verified_date: "2026-06-10"

  - id: qwen-3-8-32b
    name: Qwen 3.8 32B
    developer: Alibaba Cloud
    release_date: 2026-06-10
    access: Open Weights
    class: Midrange Dense
    benchmarks:
      mmlu: 90.5
      gpqa: 89.0
      swe_bench: 79.5
      human_eval: 95.8
      aime: 84.0
    hallucination_rate: 1.2
    ethics_rating: 7.5
    iq_lower: 114
    iq_upper: 142
    eq_bench: 72
    arena_elo: 1335
    ethics_notes: MIT-licensed open weights model. Built for maximum efficiency within 32GB RAM local environments (Q4_K_M/QAT).
    lying_rate: 1.4
    lying_notes: Native reasoning verification passes dramatically cut confabulation in coding and tool execution.
    best_applications:
      - High-performance 32GB local agentic IDE assistant (SWE-bench: 79.5%)
      - Fine-tuning base for enterprise domain agents
      - Private long-context RAG pipelines
    links:
      website: https://qwenlm.github.io/blog/qwen3/
      system_card: system_cards/qwen-3-8-32b-system-card.md
    citations:
      - source: "Alibaba Qwen Technical Report"
        metric: "swe_bench"
        value: 79.5
        url: "https://qwenlm.github.io/blog/qwen3/"
        verified_date: "2026-06-10"
      - source: "Alibaba Qwen Technical Report"
        metric: "gpqa"
        value: 89.0
        url: "https://qwenlm.github.io/blog/qwen3/"
        verified_date: "2026-06-10"

  - id: qwen-4-preview
    name: Qwen 4 Preview
    developer: Alibaba Cloud
    release_date: 2026-07-01
    access: Commercial
    class: Next-Gen Frontier
    benchmarks:
      mmlu: 95.8
      gpqa: 91.0
      swe_bench: 84.2
      human_eval: 98.2
      aime: 95.0
    hallucination_rate: 0.9
    ethics_rating: 7.6
    iq_lower: 124
    iq_upper: 153
    eq_bench: 88
    arena_elo: 1405
    ethics_notes: Alibaba's next-generation flagship commercial engine. Ultra-fast hybrid reasoning MoE architecture with advanced agentic safeguards.
    lying_rate: 1.0
    lying_notes: High factual grounding with dynamic external tool execution checks.
    best_applications:
      - Autonomous enterprise engineering pipelines (SWE-bench: 84.2%)
      - Complex multimodal & agentic workflow automation
      - Massive-scale data transformation and extraction
    links:
      website: https://www.alibabacloud.com/blog/qwen4-preview
      system_card: https://www.alibabacloud.com/blog/qwen4-preview-system-card
    citations:
      - source: "Alibaba Cloud / MLQ.ai"
        metric: "swe_bench_verified"
        value: 84.2
        url: "https://www.alibabacloud.com/blog/qwen4-preview"
        verified_date: "2026-07-01"
      - source: "Qwen AI Research"
        metric: "swe_bench_pro"
        value: 64.5
        url: "https://qwenlm.github.io/blog/qwen4-preview"
        verified_date: "2026-07-01"
---

# Alibaba Qwen Series

Alibaba's Qwen (Tongyi Qianwen) series has emerged as one of the most powerful model families globally. Offering a massive array of model sizes, specialized Coder and Math editions, and transitioning to reasoning-oriented hybrid architectures in 2025/2026, Qwen provides a direct open-weights counterweight to Meta's LLaMA.

### Key Milestones:
1. **Qwen 2.5 Coder (2024):** A major milestone, showing that a 32B open model could outperform GPT-4 on code generation (HumanEval 93.0%).
2. **Qwen 3 (2025):** Introduced hybrid reasoning architectures (toggling between thinking/non-thinking token outputs) to match Western reasoning developments.
3. **Qwen 3.7 Max & Qwen 3.8 32B (2026):** Reached massive milestones in agentic intelligence (SWE-bench Verified: 80.4% commercial / 79.5% 32B open weights), standing as leading models for local and cloud autonomous software development.
4. **Qwen 4 Preview (July 2026):** Alibaba's flagship next-gen MoE engine with 84.2% SWE-bench score and state-of-the-art multimodal reasoning.

### Licensing Model & What It Means:
- **Qwen License Agreement (Qwen 2.5 32B):** Alibaba's custom open-weights agreement. Permissive for research and commercial use, but triggers a commercial license request if monthly active users exceed 100 million.
- **MIT License (Qwen 3.5, Qwen 3.6, Qwen 3.8):** A highly permissive, lightweight open-source license. Allows commercial use, modification, and distribution with no user caps.
- **Apache 2.0 (Qwen 2.5 MoE, Qwen 3.5 MoE):** Fully permissive, open-source OSI license with no user caps or proprietary restrictions.

