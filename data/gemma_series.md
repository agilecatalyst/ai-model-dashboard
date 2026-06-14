---
models:
  - id: gemma-2-27b
    name: Gemma 2 27B
    developer: Google DeepMind
    release_date: 2024-06-27
    access: Open Weights
    class: Lightweight Dense
    benchmarks:
      mmlu: 83.2
      gpqa: 32.5
      swe_bench: 11.0
      human_eval: 78.4
      aime: 10.5
    hallucination_rate: 3.2
    ethics_rating: 7.2
    iq_lower: 88
    iq_upper: 114
    eq_bench: 55
    arena_elo: 1150
    ethics_notes: Google open model license. Restricts malicious use. Adheres to Google's safety thresholds. Refusal profile can sometimes be overly cautious.
    lying_rate: 3.8
    lying_notes: Under pressure, can yield to user assumptions (sycophancy) and hallucinate details to support them.
    best_applications:
      - Local text summarization and chat
      - Task-specific fine-tuning
      - Running on mid-tier developer machines
    links:
      website: https://ai.google.dev/gemma
      system_card: https://storage.googleapis.com/deepmind-media/gemma/gemma-2-report.pdf

  - id: gemma-3-27b
    name: Gemma 3 27B
    developer: Google DeepMind
    release_date: 2025-03-12
    access: Open Weights
    class: Lightweight Multimodal
    benchmarks:
      mmlu: 85.5
      gpqa: 44.8
      swe_bench: 18.0
      human_eval: 84.1
      aime: 20.8
    hallucination_rate: 2.6
    ethics_rating: 7.5
    iq_lower: 94
    iq_upper: 121
    eq_bench: 64
    arena_elo: 1205
    ethics_notes: Google open model license. Features native multimodal support (vision-language) and supports over 140 languages. Safety-aligned across languages.
    lying_rate: 3.1
    lying_notes: Reduced sycophancy, but multimodal parsing can lead to minor layout description errors.
    best_applications:
      - Local visual document understanding
      - Multilingual chatbots and translators
      - Retrieval-augmented generation (RAG)
    links:
      website: https://ai.google.dev/gemma/gemma3
      system_card: https://storage.googleapis.com/deepmind-media/gemma/Gemma3Report.pdf

  - id: gemma-4-31b
    name: Gemma 4 31B Dense
    developer: Google DeepMind
    release_date: 2026-04-02
    access: Open Weights
    class: Frontier Dense
    benchmarks:
      mmlu: 92.4
      gpqa: 84.3
      swe_bench: 56.5
      human_eval: 91.2
      aime: 89.2
    hallucination_rate: 1.6
    ethics_rating: 8.5
    iq_lower: 114
    iq_upper: 142
    eq_bench: 73
    arena_elo: 1280
    ethics_notes: Released under the highly permissive Apache 2.0 license. Developed using the same research as the Gemini 3 series. Highly aligned for safety, privacy, and sovereignty.
    lying_rate: 1.8
    lying_notes: Shows advanced logical self-correction. Under standard benchmarks, it has a low lying rate due to its reasoning-based alignment.
    best_applications:
      - Self-hosted coding assistants and agents (Apache 2.0)
      - Complex local mathematical and scientific reasoning
      - Private corporate knowledge engines
    links:
      website: https://ai.google.dev/gemma/gemma4
      system_card: https://huggingface.co/google/gemma-4-31b

  - id: gemma-3-4b
    name: Gemma 3 4B
    developer: Google DeepMind
    release_date: 2025-03-12
    access: Open Weights
    class: Edge Multimodal
    benchmarks:
      mmlu: 79.1
      gpqa: 36.2
      swe_bench: 8.5
      aime: 12.0
    hallucination_rate: 2.9
    ethics_rating: 7.8
    iq_lower: 85
    iq_upper: 108
    eq_bench: 58
    arena_elo: 1160
    ethics_notes: Google Gemma Terms of Use license (free commercial use under 500M monthly active users, competitive training restricted). Features native vision/text multilingual support.
    lying_rate: 3.4
    lying_notes: High susceptibility to sycophancy on edge devices.
    best_applications:
      - Mobile & Edge multimodal assistants
      - Low-latency local processing (under 4GB RAM)
      - Edge voice/vision integration
    links:
      website: https://ai.google.dev/gemma/gemma3
      system_card: https://storage.googleapis.com/deepmind-media/gemma/Gemma3Report.pdf

  - id: gemma-3-12b
    name: Gemma 3 12B
    developer: Google DeepMind
    release_date: 2025-03-12
    access: Open Weights
    class: Lightweight Multimodal
    benchmarks:
      mmlu: 82.8
      gpqa: 41.5
      swe_bench: 13.2
      aime: 16.5
    hallucination_rate: 2.7
    ethics_rating: 7.7
    iq_lower: 90
    iq_upper: 116
    eq_bench: 61
    arena_elo: 1185
    ethics_notes: Google Gemma Terms of Use license (free commercial use under 500M monthly active users, competitive training restricted). Built with multilingual visual capabilities.
    lying_rate: 3.2
    lying_notes: Slightly sycophantic, but has robust visual alignment.
    best_applications:
      - Private visual document understanding
      - Multi-agent local orchestration
      - High-throughput multilingual translation
    links:
      website: https://ai.google.dev/gemma/gemma3
      system_card: https://storage.googleapis.com/deepmind-media/gemma/Gemma3Report.pdf

  - id: gemma-4-12b
    name: Gemma 4 12B
    developer: Google DeepMind
    release_date: 2026-04-02
    access: Open Weights
    class: Lightweight Dense
    benchmarks:
      mmlu: 88.7
      gpqa: 78.8
      swe_bench: 46.5
      aime: 77.5
    hallucination_rate: 1.9
    ethics_rating: 8.2
    iq_lower: 104
    iq_upper: 130
    eq_bench: 69
    arena_elo: 1245
    ethics_notes: Released under the fully permissive Apache 2.0 open-source license. Developed with Google's latest Gemini 3 model research, optimized for reasoning.
    lying_rate: 2.1
    lying_notes: Features self-correction steps. Hallucinates significantly less than Gemma 3.
    best_applications:
      - Fully commercial agentic tools and extensions (Apache 2.0)
      - Fine-tuning for specialized enterprise tasks
      - Local code generation and debugging
    links:
      website: https://ai.google.dev/gemma/gemma4
      system_card: https://huggingface.co/google/gemma-4-12b

  - id: gemma-4-12b-qat
    name: Gemma 4 12B QAT
    developer: Google DeepMind
    release_date: 2026-06-08
    access: Open Weights
    class: Lightweight Dense QAT
    benchmarks:
      mmlu: 85.2
      gpqa: 52.5
      swe_bench: 32.4
      human_eval: 82.5
      aime: 62.0
    hallucination_rate: 2.1
    ethics_rating: 8.2
    iq_lower: 100
    iq_upper: 125
    eq_bench: 67
    arena_elo: 1230
    ethics_notes: Released under the Apache 2.0 license. Optimized using native Quantization-Aware Training (QAT) to preserve coding and reasoning capabilities on 4-bit precision.
    lying_rate: 2.3
    lying_notes: Low sycophancy, but low bitwidth quantization can trigger minor token retrieval edge cases.
    best_applications:
      - Local code completion and lightweight agents
      - Low-latency edge computing
      - Private document analysis on standard notebooks
    links:
      website: https://ai.google.dev/gemma/gemma4
      system_card: https://huggingface.co/google/gemma-4-12b-qat

  - id: gemma-4-31b-qat
    name: Gemma 4 31B QAT
    developer: Google DeepMind
    release_date: 2026-06-08
    access: Open Weights
    class: Frontier Dense QAT
    benchmarks:
      mmlu: 89.6
      gpqa: 66.0
      swe_bench: 45.2
      human_eval: 88.4
      aime: 74.0
    hallucination_rate: 1.8
    ethics_rating: 8.4
    iq_lower: 110
    iq_upper: 138
    eq_bench: 71
    arena_elo: 1265
    ethics_notes: Released under the Apache 2.0 license. Pre-aligned with 4-bit weight layout during training, enabling full frontier reasoning within 32GB RAM constraints.
    lying_rate: 2.0
    lying_notes: Demonstrates robust logical self-correction. High compliance with constraints under low bit-depth.
    best_applications:
      - Local software engineering agents and pipelines
      - Private corporate knowledge engines
      - Compliance auditing on standard workstations
    links:
      website: https://ai.google.dev/gemma/gemma4
      system_card: https://huggingface.co/google/gemma-4-31b-qat
---

# Google Gemma Series (Open Weights)

Gemma is Google's family of lightweight, state-of-the-art open models, built from the same research and technology used to create the Gemini models. Developed by Google DeepMind and other teams across Google, Gemma is designed for responsible open innovation.

### Key Milestones:
1. **Gemma 2 (2024):** Introduced a novel architecture utilizing sliding window attention and logit soft-capping, enabling the 27B model to punch well above its weight class.
2. **Gemma 3 (2025):** Added native multimodal capabilities and expanded language support to 140+ languages, bringing Google's multimodal leadership to the open-weights space.
3. **Gemma 4 (2026):** A massive performance leap utilizing Gemini 3 research, achieving state-of-the-art reasoning (89.2% on AIME) and released under a fully permissive **Apache 2.0 license** for the first time.

### Licensing Model & What It Means:
- **Gemma Terms of Use (Gemma 2, Gemma 3):** A custom open-weights agreement. While free for research and commercial operations, it restricts using the model to train competing models and enforces a 500 million monthly active user cap. It is not an OSI-approved open-source license.
- **Apache 2.0 (Gemma 4):** A fully permissive, open-source OSI license. Allows royalty-free commercial usage, modification, redistribution, and sublicensing with no user caps or competitive training restrictions.
