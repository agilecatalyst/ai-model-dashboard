---
models:
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

# MiniMax M3 Series

MiniMax, a leading frontier AI lab based in China, released the M3 model in June 2026. M3 is a natively multimodal model (text, image, and video) optimized for processing massive contexts and running agentic automation workflows.

### Key Milestones:
1. **MiniMax M3 (June 2026):** Built on a proprietary Sparse Attention (MSA) architecture, M3 enables fast prefill speeds and low-latency decoding over a standard 1-million-token context window.
