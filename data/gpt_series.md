---
models:
  - id: gpt-4o
    name: GPT-4o
    developer: OpenAI
    release_date: 2024-05-13
    access: Commercial
    class: Frontier Multimodal
    benchmarks:
      mmlu: 88.7
      gpqa: 53.6
      swe_bench: 38.8
      human_eval: 90.2
      aime: 13.4
    hallucination_rate: 2.5
    ethics_rating: 7.0
    iq_lower: 98
    iq_upper: 133
    eq_bench: 82
    arena_elo: 1330
    ethics_notes: Employs standard RLHF and centralized safety mechanisms. Faced controversy over voice-actor mimicry (Sky voice) and departures of high-profile safety researchers.
    lying_rate: 3.5
    lying_notes: Displays a confidence bias, asserting false statements as absolute truths in conversational settings when context is sparse.
    best_applications:
      - Real-time voice conversation and translations
      - Fast multimodal analysis (images, charts)
      - Standard conversational API applications
    links:
      website: https://openai.com/gpt-4o
      system_card: https://assets.ctfassets.net/kftzwdyau1h5/13W659M7xWkRt2f7W9Hspg/fb373ca9db86fa6443c5ee9659b8c04f/gpt-4o-system-card.pdf
    citations:
      - source: "OpenAI System Card"
        metric: "swe_bench"
        value: 38.8
        url: "https://assets.ctfassets.net/kftzwdyau1h5/13W659M7xWkRt2f7W9Hspg/fb373ca9db86fa6443c5ee9659b8c04f/gpt-4o-system-card.pdf"
        verified_date: "2024-05-13"
      - source: "LMSYS Chatbot Arena"
        metric: "arena_elo"
        value: 1330
        url: "https://chat.lmsys.org"
        verified_date: "2024-05-13"

  - id: openai-o1
    name: OpenAI o1
    developer: OpenAI
    release_date: 2024-09-12
    access: Commercial
    class: Frontier Reasoning
    benchmarks:
      mmlu: 91.8
      gpqa: 78.3
      swe_bench: 48.9
      human_eval: 92.6
      aime: 83.3
    hallucination_rate: 3.0
    ethics_rating: 7.5
    iq_lower: 112
    iq_upper: 142
    eq_bench: 81
    arena_elo: 1350
    ethics_notes: Tested under OpenAI's Preparedness Framework. Shows increased jailbreak resistance due to test-time reasoning aligning safety rules before answering.
    lying_rate: 2.2
    lying_notes: The chain-of-thought helps it double-check facts, reducing silly hallucinations, but it can still over-extrapolate logic.
    best_applications:
      - Complex math problem solving
      - Advanced code logic and debugging
      - Scientific and medical research analysis
    links:
      website: https://openai.com/o1
      system_card: https://assets.ctfassets.net/kftzwdyau1h5/6984eb8a-c603-4c90-9c2b-426b38c2134a/o1-system-card.pdf

  - id: gpt-oss-20b
    name: GPT-OSS-20B
    developer: OpenAI
    release_date: 2025-08-05
    access: Open Weights
    class: Lightweight MoE
    benchmarks:
      mmlu: 82.5
      gpqa: 45.2
      swe_bench: 28.5
      human_eval: 84.8
      aime: 24.1
    hallucination_rate: 3.6
    ethics_rating: 6.8
    iq_lower: 85
    iq_upper: 112
    eq_bench: 42
    arena_elo: 1080
    ethics_notes: OpenAI's first open-weight model family. Released under Apache 2.0. Base weights are aligned, but lack the runtime API guardrails of OpenAI's closed endpoints.
    lying_rate: 4.2
    lying_notes: Shows higher hallucination rate on specific domain retrieval, but is highly honest under direct pressure (low sycophancy).
    best_applications:
      - On-device lightweight reasoning (runs on 16GB VRAM)
      - Privacy-centric local enterprise agents
      - Educational fine-tuning base
    links:
      website: https://openai.com/blog/gpt-oss
      system_card: https://huggingface.co/openai/gpt-oss-20b

  - id: gpt-5
    name: GPT-5
    developer: OpenAI
    release_date: 2025-10-15
    access: Commercial
    class: Next-Gen Frontier
    benchmarks:
      mmlu: 94.2
      gpqa: 85.0
      swe_bench: 62.5
      human_eval: 96.0
      aime: 88.5
    hallucination_rate: 1.5
    ethics_rating: 7.8
    iq_lower: 120
    iq_upper: 148
    eq_bench: 93
    arena_elo: 1410
    ethics_notes: Deep integration of agentic safety protocols and strict bias filtering. The Preparedness Team implemented active red-teaming for autonomous agency risks.
    lying_rate: 1.8
    lying_notes: Chain-of-thought and verification loops run in the background, significantly reducing confidence in false claims.
    best_applications:
      - Autonomous multi-step software engineering agents
      - Complex strategic decision support
      - Universal translation and tutoring systems
    links:
      website: https://openai.com/gpt-5
      system_card: https://assets.ctfassets.net/kftzwdyau1h5/gpt-5-system-card.pdf

  - id: gpt-5-5
    name: GPT-5.5
    developer: OpenAI
    release_date: 2026-03-24
    access: Commercial
    class: Next-Gen Frontier
    benchmarks:
      mmlu: 95.8
      gpqa: 89.2
      swe_bench: 74.0
      human_eval: 97.5
      aime: 92.1
    hallucination_rate: 1.1
    ethics_rating: 8.0
    iq_lower: 125
    iq_upper: 152
    eq_bench: 95
    arena_elo: 1430
    ethics_notes: Evaluated for long-term safety, power-seeking behaviors, and persuasion capacity. Implements advanced RLHF with truthfulness feedback.
    lying_rate: 1.3
    lying_notes: Employs self-correction steps that actively flag uncertain claims in real-time.
    best_applications:
      - Enterprise-grade autonomous workflows
      - High-stakes quantitative modeling
      - Multi-modal agent coordination
    links:
      website: https://openai.com/gpt-5-5
      system_card: https://assets.ctfassets.net/kftzwdyau1h5/gpt-5-5-system-card.pdf

  - id: gpt-5-6
    name: GPT-5.6
    developer: OpenAI
    release_date: 2026-07-28
    access: Commercial
    class: Next-Gen Flagship Frontier
    benchmarks:
      mmlu: 97.8
      gpqa: 93.8
      swe_bench: 76.5
      human_eval: 98.4
      aime: 95.5
    hallucination_rate: 0.7
    ethics_rating: 8.5
    iq_lower: 130
    iq_upper: 156
    eq_bench: 96
    arena_elo: 1450
    ethics_notes: Next-generation agentic flagship model with dynamic test-time compute scaling. Tested under OpenAI's updated Preparedness Framework for high-capability autonomous software operations.
    lying_rate: 0.6
    lying_notes: Background verification loops actively prevent over-confident assertions, showing high calibration on complex mathematical and code benchmarks.
    best_applications:
      - Complex multi-agent software engineering & autonomous repository management
      - Advanced quantitative research and financial modeling
      - Multimodal real-time vision, audio and interactive tool execution
    links:
      website: https://openai.com/gpt-5-6
      system_card: https://assets.ctfassets.net/kftzwdyau1h5/gpt-5-6-system-card.pdf
---

# OpenAI GPT Series

OpenAI's strategy shifted in late 2024 from pure conversational intelligence to reasoning-driven models (o1/o3) and eventually next-gen multimodal agentic models (GPT-5/5.5) in 2025-2026. 

Notably, in August 2025, OpenAI surprised the market by releasing `gpt-oss-20b`, its first open-weight Mixture of Experts model, to compete with Meta's Llama and Alibaba's Qwen in the self-hosted ecosystem.

### Key Innovations:
1. **Reinforcement Learning at Test-Time:** The o1 series introduced Chain-of-Thought (CoT) reasoning before responding, transforming how math and coding problems are approached.
2. **GPT-OSS Series:** The release of Apache 2.0 open-weights allowed developers to run OpenAI models locally on consumer devices.
3. **Agentic Capabilities:** GPT-5 and GPT-5.5 focused on reliable tool use, long-horizon planning, and agentic autonomy, enabling them to complete complex software tasks with minimal supervision.
