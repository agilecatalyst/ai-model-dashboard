---
models:
  - id: minimax-m2-5
    name: MiniMax M2.5
    developer: MiniMax
    release_date: 2026-01-15
    access: Open Weights
    class: Frontier MoE
    benchmarks:
      mmlu: 80.2
      gpqa: 41.5
      swe_bench: 15.0
      human_eval: 82.4
      aime: 12.5
    hallucination_rate: 2.8
    ethics_rating: 6.8
    iq_lower: 88
    iq_upper: 118
    eq_bench: 58
    arena_elo: 1165
    ethics_notes: Released under open weights, allowing local inference. Subject to domestic Chinese generative AI laws (CAC security assessments).
    lying_rate: 2.6
    lying_notes: An early Mixture-of-Experts (MoE) entry that demonstrates good coding/search output, but can output sycophantic responses to user pressure.
    best_applications:
      - Cost-efficient coding assistance
      - Fast multilingual text processing
      - Basic retrieval-augmented generation (RAG)
    links:
      website: https://www.minimaxi.com/
      system_card: https://build.nvidia.com/minimax/minimax-m2-5

  - id: minimax-m2-7
    name: MiniMax M2.7
    developer: MiniMax
    release_date: 2026-03-18
    access: Commercial
    class: Frontier MoE
    benchmarks:
      mmlu: 86.4
      gpqa: 49.8
      swe_bench: 24.5
      human_eval: 89.2
      aime: 25.8
    hallucination_rate: 2.2
    ethics_rating: 6.8
    iq_lower: 94
    iq_upper: 126
    eq_bench: 64
    arena_elo: 1225
    ethics_notes: Commercial API offering. Subject to Chinese security reviews and toxic content filtering blocklists.
    lying_rate: 2.2
    lying_notes: Native Mixture-of-Experts with 230B parameters (10B active). Strong reasoning mitigates factual hallucinations, but still susceptible to niche hallucination triggers.
    best_applications:
      - Complex agentic workflows and office automation
      - Multilingual document summarization
      - General reasoning and conversational search
    links:
      website: https://www.minimaxi.com/
      system_card: https://build.nvidia.com/minimax/minimax-m2-7

  - id: minimax-m3
    name: MiniMax M3
    developer: MiniMax
    release_date: 2026-06-01
    access: Open Weights
    class: Frontier Multimodal
    benchmarks:
      mmlu: 89.5
      gpqa: 58.2
      swe_bench: 32.4
      human_eval: 92.0
      aime: 36.0
    hallucination_rate: 2.4
    ethics_rating: 7.0
    iq_lower: 104
    iq_upper: 132
    eq_bench: 70
    arena_elo: 1285
    ethics_notes: Governed under Chinese AI security regulations. Released as open weights, allowing local deployment via platforms like NVIDIA Build and Unsloth Studio.
    lying_rate: 2.1
    lying_notes: Leveraging MiniMax Sparse Attention (MSA), the model retains high factual fidelity even at the outer bounds of its 1-million-token context window.
    best_applications:
      - Long-horizon agentic planning and workflows
      - Multi-modal content creation (text, image, video integration)
      - Complex codebase and repository-wide parsing
    links:
      website: https://www.minimaxi.com/
      system_card: https://build.nvidia.com/minimax/minimax-m3
---

# MiniMax M Series

MiniMax, a leading frontier AI lab based in China, develops the powerful M-series models. Utilizing advanced Mixture-of-Experts (MoE) architectures and Sparse Attention mechanisms, these models excel at long-context processing, agentic planning, and multilinguality.

### Key Milestones:
1. **MiniMax M2.5 (January 2026):** Offered as a highly efficient open-weights MoE model, establishing MiniMax's competitive presence in developer-focused local inference pipelines.
2. **MiniMax M2.7 (March 2026):** Released as a proprietary 230-billion-parameter MoE model (10B active) optimized for complex reasoning, agentic planning, and "self-evolving" coding workflows.
3. **MiniMax M3 (June 2026):** Flagship natively multimodal model (text, image, and video) built on a Sparse Attention (MSA) architecture, enabling fast prefill and low-latency decoding over a 1-million-token context window.
