---
models:
  - id: glm-4-air
    name: GLM-4 Air
    developer: Zhipu AI
    release_date: 2024-08-29
    access: Commercial
    class: Fast Multimodal
    benchmarks:
      mmlu: 80.5
      gpqa: 38.2
      swe_bench: 12.0
      human_eval: 82.0
      aime: 14.5
    hallucination_rate: 2.8
    ethics_rating: 6.5
    iq_lower: 88
    iq_upper: 118
    eq_bench: 57
    arena_elo: 1170
    ethics_notes: Governed under Chinese AI regulations. High bilingual capability. Employs security checks and active keyword/semantic blocklists for regulatory alignment.
    lying_rate: 3.2
    lying_notes: Optimized for high speed and low latency, which can occasionally lead to premature factual assertions or conversational sycophancy.
    best_applications:
      - High-throughput conversational agent pipelines
      - Real-time customer service automation
      - Fast multilingual text translation
    links:
      website: https://zhipuai.com
      system_card: https://github.com/THUDM/GLM-4

  - id: glm-4-plus
    name: GLM-4 Plus
    developer: Zhipu AI
    release_date: 2024-08-29
    access: Commercial
    class: Frontier Multimodal
    benchmarks:
      mmlu: 86.0
      gpqa: 45.8
      swe_bench: 16.5
      human_eval: 85.4
      aime: 25.2
    hallucination_rate: 2.4
    ethics_rating: 6.5
    iq_lower: 94
    iq_upper: 126
    eq_bench: 65
    arena_elo: 1230
    ethics_notes: Flagship API offering. Subject to Chinese generative AI security reviews. Safety alignment includes strict toxic language filtering and sensitive topic constraints.
    lying_rate: 2.8
    lying_notes: Accurate on structured information retrieval, but can hallucinatively yield to user assumptions on niche topics.
    best_applications:
      - Enterprise bilingual search and summarization
      - Multimodal image and diagram understanding
      - Complex planning agent workflows
    links:
      website: https://zhipuai.com
      system_card: https://github.com/THUDM/GLM-4

  - id: glm-4-5-open
    name: GLM-4.5 Open
    developer: Zhipu AI
    release_date: 2025-07-28
    access: Open Weights
    class: Frontier MoE
    benchmarks:
      mmlu: 88.5
      gpqa: 79.1
      swe_bench: 64.2
      human_eval: 91.0
      aime: 91.0
    hallucination_rate: 1.8
    ethics_rating: 7.0
    iq_lower: 104
    iq_upper: 135
    eq_bench: 61
    arena_elo: 1210
    ethics_notes: Released under the open weights MIT license. Aligned using Tsinghua university safety datasets for helpfulness and harmlessness in English/Chinese.
    lying_rate: 2.0
    lying_notes: Strong reasoning chains (AIME: 91.0%) reduce basic hallucination rates by checking internal consistency before final token generation.
    best_applications:
      - Local agentic coding and math reasoning
      - Domain-specific offline fine-tuning
      - Advanced RAG systems for private enterprises
    links:
      website: https://zhipuai.com
      system_card: https://github.com/THUDM/GLM-4

  - id: glm-5-open
    name: GLM-5 Open
    developer: Zhipu AI
    release_date: 2026-02-11
    access: Open Weights
    class: Next-Gen Frontier
    benchmarks:
      mmlu: 92.4
      gpqa: 86.0
      swe_bench: 77.8
      human_eval: 95.2
      aime: 92.7
    hallucination_rate: 1.3
    ethics_rating: 7.2
    iq_lower: 115
    iq_upper: 143
    eq_bench: 69
    arena_elo: 1255
    ethics_notes: MIT licensed open weights. Developed and trained entirely on domestic Huawei Ascend chips using MindSpore. Highly aligned for safe autonomous execution.
    lying_rate: 1.4
    lying_notes: Utilizes RLHF post-training (via THUDM slime) that strongly penalizes conversational dishonesty and confabulation.
    best_applications:
      - NVIDIA-independent high-performance local AI clusters
      - Autonomous developer agents (SWE-bench: 77.8%)
      - 200k context window long-document parsing
    links:
      website: https://github.com/zai-org/GLM-5
      system_card: https://github.com/zai-org/GLM-5

  - id: glm-5-1-open
    name: GLM-5.1 Open
    developer: Zhipu AI
    release_date: 2026-04-07
    access: Open Weights
    class: Next-Gen Frontier
    benchmarks:
      mmlu: 93.5
      gpqa: 87.5
      swe_bench: 82.4
      human_eval: 96.8
      aime: 94.0
    hallucination_rate: 1.1
    ethics_rating: 7.4
    iq_lower: 118
    iq_upper: 146
    eq_bench: 72
    arena_elo: 1270
    ethics_notes: MIT licensed open weights. Highly optimized for complex agent-based workflows. Governed under Z.ai safety guardrails.
    lying_rate: 1.2
    lying_notes: Very low lying rate on coding tasks due to pre-execution reasoning and self-checking loops.
    best_applications:
      - Self-hosted full-stack engineering agents (SWE-bench: 82.4%)
      - Math-heavy quantitative data analysis
      - Local enterprise reasoning engine
    links:
      website: https://github.com/zai-org/GLM-5
      system_card: https://github.com/zai-org/GLM-5
---

# Zhipu AI GLM Series (z.ai)

Zhipu AI (formerly THUDM, originating from Tsinghua University) has established itself as one of the leading global AI research labs, developing the powerful GLM (General Language Model) family. Rebranded as **Z.ai** in 2026, the company specializes in Mixture-of-Experts (MoE) architectures and has taken a leading role in training models on non-NVIDIA (Huawei Ascend) hardware using the MindSpore framework.

### Key Milestones:
1. **GLM-4 / 4-Plus (2024):** Marked Zhipu's arrival in the frontier multimodal space, providing highly efficient API endpoints matching early GPT-4 performance.
2. **GLM-4.5 Open (2025):** The first massive open weight MoE model from Zhipu to utilize MIT licensing, offering a powerful counterweight to Meta's Llama in coding and math.
3. **GLM-5 Series (2026):** Reached a landmark milestone in agentic engineering, achieving 77.8% on SWE-bench Verified. The GLM-5 series was trained entirely on **Huawei Ascend** chips, demonstrating complete hardware independence.
