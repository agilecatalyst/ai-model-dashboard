---
models:
  - id: llama-3-1-nemotron-70b
    name: Llama 3.1 Nemotron 70B
    developer: NVIDIA
    release_date: 2024-10-15
    access: Open Weights
    class: Midrange Dense
    benchmarks:
      mmlu: 86.2
      gpqa: 46.5
      swe_bench: 32.5
      aime: 18.5
    hallucination_rate: 1.8
    ethics_rating: 8.0
    iq_lower: 98
    iq_upper: 126
    eq_bench: 85
    arena_elo: 1276
    ethics_notes: Released under the Llama 3 Community License. Fine-tuned with NVIDIA's Nemotron-Reward models to maximize helpfulness and reduce bias.
    lying_rate: 2.1
    lying_notes: Very low hallucination rates under conversational benchmarks. Can occasionally be sycophantic due to high alignment goals.
    best_applications:
      - Conversational virtual assistants and chatbots
      - Local search-grounded workflows (RAG)
      - Synthetic preference alignment generation
    links:
      website: https://build.nvidia.com/nvidia/llama-3-nemotron-70b-instruct
      system_card: https://huggingface.co/nvidia/Llama-3-Nemotron-70B-Instruct

  - id: nemotron-3-ultra-550b
    name: Nemotron 3 Ultra 550B
    developer: NVIDIA
    release_date: 2026-06-03
    access: Commercial
    class: Next-Gen Frontier
    benchmarks:
      mmlu: 94.8
      gpqa: 86.7
      swe_bench: 71.0
      aime: 82.5
    hallucination_rate: 1.2
    ethics_rating: 8.2
    iq_lower: 124
    iq_upper: 151
    eq_bench: 91
    arena_elo: 1420
    ethics_notes: Subject to NVIDIA Open Model License (permissive for research and commercial usage, but contains distribution constraints). Fully aligned for enterprise agency.
    lying_rate: 1.4
    lying_notes: Uses advanced test-time reasoning and internal preference filters, leading to highly consistent answers.
    best_applications:
      - High-stakes quantitative research and analytics
      - Autonomous multi-step software agent execution
      - Complex corporate knowledge systems
    links:
      website: https://build.nvidia.com/nvidia/nemotron-3-ultra-550b
      system_card: https://huggingface.co/nvidia/nemotron-3-ultra-550b
---

# NVIDIA Nemotron Series

NVIDIA's Nemotron family represents the hardware giant's push into software-level AI reasoning and alignment. Using advanced Reinforcement Learning from Artificial Intelligence Feedback (RLAIF) and reward models (HelpSteer2), NVIDIA transforms standard dense architectures (such as Meta's Llama) into highly preferred, low-hallucination conversational models.

### Key Milestones:
1. **Llama 3.1 Nemotron 70B (2024):** A major breakthrough in preference alignment, achieving an Arena Elo of 1276 and rivaling proprietary models on conversational benchmarks using specialized RLHF models.
2. **Nemotron-4 340B (2024):** A massive open weights model focused on high-throughput synthetic data generation to train downstream reasoning models.
3. **Nemotron 3 Ultra 550B (2026):** A flagship enterprise-grade model boasting 86.7% GPQA Diamond, indicating state-of-the-art graduate-level reasoning and coding abilities.

### Licensing Model & What It Means:
- **Llama 3 Community License (Llama 3.1 Nemotron 70B):** Permissive open weights usage for research and commercial deployment up to 700 million monthly active users. Restricts competitive training on Meta-derived weights.
- **NVIDIA Open Model License (Nemotron-3 Ultra 550B):** Permissive for research and commercial deployment, but enforces distribution restrictions (you cannot redistribute the weights under different names or license terms) and forbids using the model to develop competing commercial foundation models.
