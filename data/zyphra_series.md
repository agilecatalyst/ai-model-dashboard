---
models:
  - id: zamba2-vl-7b
    name: Zamba2-VL 7B
    developer: Zyphra
    release_date: 2026-06-12
    access: Open Weights
    class: Midrange Multimodal
    benchmarks:
      mmlu: 78.5
      gpqa: 38.2
      swe_bench: 15.5
      human_eval: 80.0
      aime: 10.2
    hallucination_rate: 2.8
    ethics_rating: 7.2
    iq_lower: 88
    iq_upper: 114
    eq_bench: 58
    arena_elo: 1195
    ethics_notes: Released under a permissive open-weights license. A hybrid VLM model optimized for high efficiency and low-latency local execution on consumer hardware.
    lying_rate: 2.5
    lying_notes: Displays typical lightweight model hallucination rates under high visual complexity, but performs highly consistently on standard text-image retrieval.
    best_applications:
      - Low-latency visual document understanding
      - On-device multimodal classification and extraction
      - Edge RAG applications requiring visual inputs
    links:
      website: https://www.zyphra.com/blog/zamba2-vl
      system_card: https://huggingface.co/zyphra/zamba2-vl-7b
---

# Zyphra Zamba Series

Zyphra's Zamba series represents a pioneering effort in hybrid architectures, combining Mamba2 (Structured State Space Models) and Transformer blocks. This hybrid approach aims to deliver the computational efficiency and linear scaling of state-space models during inference, while retaining the strong associative memory and contextual representation of standard Transformers.

### Key Milestones:
1. **Zamba2-VL 7B (June 2026):** A vision-language model bringing state-of-the-art multimodal understanding to local edge devices with very low latency.
