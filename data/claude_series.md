---
models:
  - id: claude-3-opus
    name: Claude 3 Opus
    developer: Anthropic
    release_date: 2024-03-04
    access: Commercial
    class: Frontier Heavyweight
    benchmarks:
      mmlu: 86.8
      gpqa: 50.4
      swe_bench: 21.0
      human_eval: 84.9
      aime: 18.9
    hallucination_rate: 3.5
    ethics_rating: 8.2
    iq_lower: 100
    iq_upper: 130
    eq_bench: 78
    arena_elo: 1255
    ethics_notes: Trained using Constitutional AI. High safety profile and conversational helpfulness.
    lying_rate: 2.8
    lying_notes: Conversational training makes it polite but sometimes prone to sycophancy or admitting false errors to please the user.
    best_applications:
      - Complex reasoning and research planning
      - Multi-step software synthesis and analysis
      - Detailed writing and translation
    links:
      website: https://www.anthropic.com/news/claude-3-family
      system_card: https://www.anthropic.com/claude/system-card

  - id: claude-3-5-sonnet
    name: Claude 3.5 Sonnet
    developer: Anthropic
    release_date: 2024-06-20
    access: Commercial
    class: Frontier Balanced
    benchmarks:
      mmlu: 88.7
      gpqa: 59.4
      swe_bench: 49.0
      human_eval: 92.0
      aime: 35.0
    hallucination_rate: 2.2
    ethics_rating: 8.5
    iq_lower: 102
    iq_upper: 135
    eq_bench: 83
    arena_elo: 1345
    ethics_notes: Developed using Constitutional AI. High safety adherence. Often praised for its professional tone and detailed coding outputs.
    lying_rate: 2.0
    lying_notes: Cautious refusal profile. Often prefers to refuse a prompt or state "I cannot verify this" rather than hallucinate, reducing its lying rate but increasing refusals on edgy prompts.
    best_applications:
      - Advanced software engineering and refactoring
      - High-quality content generation and document analysis
      - Visual data extraction and UI mockup generation
    links:
      website: https://www.anthropic.com/claude/3-5-sonnet
      system_card: https://www.anthropic.com/claude/system-card
    citations:
      - source: "Anthropic System Card"
        metric: "swe_bench"
        value: 49.0
        url: "https://www.anthropic.com/claude/system-card"
        verified_date: "2024-06-20"
      - source: "LMSYS Chatbot Arena"
        metric: "arena_elo"
        value: 1345
        url: "https://chat.lmsys.org"
        verified_date: "2024-06-20"

  - id: claude-3-7-sonnet
    name: Claude 3.7 Sonnet
    developer: Anthropic
    release_date: 2025-02-24
    access: Commercial
    class: Frontier Hybrid Reasoning
    benchmarks:
      mmlu: 92.1
      gpqa: 75.4
      swe_bench: 62.1
      human_eval: 94.5
      aime: 78.0
    hallucination_rate: 1.6
    ethics_rating: 8.8
    iq_lower: 115
    iq_upper: 145
    eq_bench: 92
    arena_elo: 1400
    ethics_notes: First model with an integrated "extended thinking" mode. The safety alignment runs through the reasoning token path, allowing the model to actively self-police its outputs before they are generated.
    lying_rate: 1.5
    lying_notes: The model's visible reasoning steps help identify logical discrepancies, making it more honest about its knowledge limits.
    best_applications:
      - Software development with complex requirements
      - Interactive debugging and reasoning tasks
      - Detailed logical analysis
    links:
      website: https://www.anthropic.com/news/claude-3-7-sonnet
      system_card: https://www.anthropic.com/claude/system-card-3-7

  - id: claude-haiku-4-5
    name: Claude Haiku 4.5
    developer: Anthropic
    release_date: 2025-10-15
    access: Commercial
    class: Fast Agentic
    benchmarks:
      mmlu: 84.2
      gpqa: 49.8
      swe_bench: 28.5
      human_eval: 87.0
      aime: 22.0
    hallucination_rate: 2.8
    ethics_rating: 8.0
    iq_lower: 95
    iq_upper: 122
    eq_bench: 68
    arena_elo: 1200
    ethics_notes: Optimized for speed and low cost. First Haiku model supporting "Computer Use" API actions, meaning extensive safety evaluations were done on action boundary escapes.
    lying_rate: 3.0
    lying_notes: Shows low rate of fabrications on standard tasks, but under high speed constraints, it can make slight retrieval errors.
    best_applications:
      - High-volume customer support automation
      - Fast code autocomplete and script writing
      - Low-latency visual analysis and scraping
    links:
      website: https://www.anthropic.com/news/claude-haiku-4-5
      system_card: https://www.anthropic.com/claude/system-card-haiku-4-5

  - id: claude-4-5-sonnet
    name: Claude 4.5 Sonnet
    developer: Anthropic
    release_date: 2025-11-20
    access: Commercial
    class: Frontier Hybrid Reasoning
    benchmarks:
      mmlu: 93.8
      gpqa: 81.2
      swe_bench: 64.0
      human_eval: 95.8
      aime: 82.0
    hallucination_rate: 1.4
    ethics_rating: 8.9
    iq_lower: 118
    iq_upper: 146
    eq_bench: 91
    arena_elo: 1408
    ethics_notes: Uses constitutional reasoning vectors to verify output validity before generation completes.
    lying_rate: 1.2
    lying_notes: Very low rate of fabrications on reasoning tasks.
    best_applications:
      - Advanced software development and compliance auditing
      - Secure multi-step regulatory validation
      - Precision coding autocomplete
    links:
      website: https://www.anthropic.com/news/claude-4-5-sonnet
      system_card: https://www.anthropic.com/claude/system-card-4-5

  - id: claude-4-5-opus
    name: Claude 4.5 Opus
    developer: Anthropic
    release_date: 2025-12-18
    access: Commercial
    class: Frontier Heavyweight
    benchmarks:
      mmlu: 95.1
      gpqa: 86.8
      swe_bench: 66.8
      human_eval: 97.2
      aime: 88.0
    hallucination_rate: 1.2
    ethics_rating: 9.1
    iq_lower: 124
    iq_upper: 151
    eq_bench: 93
    arena_elo: 1415
    ethics_notes: Outfitted with state of the art safety controls and enhanced self-verification loops.
    lying_rate: 0.9
    lying_notes: High adherence to factual data, explicitly self-corrects during live execution.
    best_applications:
      - Enterprise multi-agent orchestration
      - Safe code-generation agents in production
      - Quantitative finance and logic synthesis
    links:
      website: https://www.anthropic.com/news/claude-4-5-opus
      system_card: https://www.anthropic.com/claude/system-card-4-5

  - id: claude-opus-4-8
    name: Claude Opus 4.8
    developer: Anthropic
    release_date: 2026-05-28
    access: Commercial
    class: Next-Gen Flagship
    benchmarks:
      mmlu: 96.2
      gpqa: 91.0
      swe_bench: 69.2
      human_eval: 98.2
      aime: 94.0
    hallucination_rate: 1.0
    ethics_rating: 9.2
    iq_lower: 128
    iq_upper: 154
    eq_bench: 94
    arena_elo: 1420
    ethics_notes: State-of-the-art ethical alignment using refined Constitutional AI. Demonstrates strong safety adherence and a low rate of safety bypasses.
    lying_rate: 0.8
    lying_notes: Engineered specifically for high truthfulness and "honesty". It is 4x less likely than previous models to let flaws in its outputs or code go unremarked.
    best_applications:
      - High-stakes coding agents (e.g. Claude Code integration)
      - Complex regulatory compliance and legal analysis
      - Multi-agent coordination with high reliability
    links:
      website: https://www.anthropic.com/news/claude-opus-4-8
      system_card: https://www.anthropic.com/claude/system-card-opus-4-8

  - id: claude-fable-5
    name: Claude Fable 5
    developer: Anthropic
    release_date: 2026-06-09
    access: Commercial
    class: Next-Gen Frontier
    benchmarks:
      mmlu: 97.4
      gpqa: 93.0
      swe_bench: 71.5
      human_eval: 99.0
      aime: 96.0
    hallucination_rate: 0.9
    ethics_rating: 9.3
    iq_lower: 130
    iq_upper: 156
    eq_bench: 96
    arena_elo: 1438
    ethics_notes: Built using constitutional Fable-alignment. High compliance with policy instructions, making it the standard for enterprise deployments.
    lying_rate: 0.7
    lying_notes: Highly advanced internal self-policing; prefers direct refusal to fabrication under ambiguous context.
    best_applications:
      - High-stakes corporate automation and decision engines
      - Safe agentic operations in production environments
      - Highly compliant customer interaction services
    links:
      website: https://www.anthropic.com/news/claude-fable-5
      system_card: https://www.anthropic.com/claude/system-card-fable-5

  - id: claude-mythos-5
    name: Claude Mythos 5
    developer: Anthropic
    release_date: 2026-06-09
    access: Commercial (Limited)
    class: Next-Gen Opus Frontier
    benchmarks:
      mmlu: 97.2
      gpqa: 92.5
      swe_bench: 72.4
      human_eval: 98.8
      aime: 95.8
    hallucination_rate: 1.1
    ethics_rating: 8.2
    iq_lower: 128
    iq_upper: 155
    eq_bench: 94
    arena_elo: 1435
    ethics_notes: Anthropic's flagship Opus-tier frontier research model (Project Glasswing). Offered in limited preview with relaxed conversational refusals for advanced cybersecurity, complex code auditing, and quantitative logic.
    lying_rate: 0.9
    lying_notes: Lacks the extensive conversational refusals of Fable 5, allowing unrestricted edge-case analysis while maintaining high factual reasoning consistency.
    best_applications:
      - Advanced cybersecurity vulnerability research (Project Glasswing)
      - Complex software auditing and high-stakes agentic operations
      - Uncensored alignment research and advanced quantitative logic
    links:
      website: https://www.anthropic.com/news/claude-mythos-5
      system_card: https://www.anthropic.com/claude/system-card-mythos-5

  - id: claude-5-sonnet
    name: Claude 5 Sonnet
    developer: Anthropic
    release_date: 2026-07-15
    access: Commercial
    class: Next-Gen Balanced Frontier
    benchmarks:
      mmlu: 96.5
      gpqa: 91.8
      swe_bench: 72.0
      human_eval: 98.5
      aime: 93.5
    hallucination_rate: 0.8
    ethics_rating: 9.3
    iq_lower: 128
    iq_upper: 154
    eq_bench: 95
    arena_elo: 1442
    ethics_notes: Engineered using 5th-generation Constitutional AI with real-time vector alignment. Provides high security for autonomous coding agents.
    lying_rate: 0.6
    lying_notes: Very low sycophancy rate; actively refuses ambiguous context assertions rather than guessing.
    best_applications:
      - High-speed software engineering and autonomous agent workflows
      - Complex visual document parsing and UI synthesis
      - Enterprise compliance and secure API integrations
    links:
      website: https://www.anthropic.com/news/claude-5-sonnet
      system_card: https://www.anthropic.com/claude/system-card-5-sonnet

  - id: claude-5-opus
    name: Claude 5 Opus
    developer: Anthropic
    release_date: 2026-08-04
    access: Commercial
    class: Next-Gen Heavyweight Frontier
    benchmarks:
      mmlu: 98.1
      gpqa: 94.5
      swe_bench: 74.8
      human_eval: 99.2
      aime: 97.2
    hallucination_rate: 0.6
    ethics_rating: 9.5
    iq_lower: 132
    iq_upper: 158
    eq_bench: 97
    arena_elo: 1455
    ethics_notes: Anthropic's flagship 5th-generation model. Implements deep test-time constitutional self-verification with minimal false refusals.
    lying_rate: 0.4
    lying_notes: Demonstrates exceptional factual honesty; achieves industry-best truthfulness scores on multi-hop reasoning.
    best_applications:
      - Frontier scientific research and mathematical proof generation
      - End-to-end multi-repo software architecture and deployment
      - Strategic corporate risk analysis and regulatory auditing
    links:
      website: https://www.anthropic.com/news/claude-5-opus
      system_card: https://www.anthropic.com/claude/system-card-5-opus

  - id: claude-opus-5-5
    name: Claude Opus 5.5
    developer: Anthropic
    release_date: 2026-09-22
    access: Commercial
    class: Next-Gen Heavyweight Frontier
    benchmarks:
      gpqa: 90.2
    arena_elo: 1508
    ethics_notes: Released under Anthropic's Responsible Scaling Policy with an ASL-3 deployment standard. Anthropic has not published a Vectara-style hallucination rate; Artificial Analysis measures 64.6% AA-Omniscience accuracy, which is not directly comparable to the HHEM rates used elsewhere in this dashboard.
    lying_notes: No comparable HHEM hallucination measurement published at the time of writing. Independent AA-Omniscience results indicate strong but not perfect abstention behaviour on unanswerable questions.
    best_applications:
      - Long-horizon agentic coding on real repositories (89.9% SWE-bench Pro, vendor-reported)
      - Computer use and desktop automation (81.8% OSWorld, vendor-reported)
      - High-stakes knowledge work and regulatory analysis
    links:
      website: https://www.anthropic.com/news/claude-opus-5-5
      system_card: https://www.anthropic.com/news/claude-opus-5-5
    citations:
      - source: "OpenRouter GPQA Diamond leaderboard (independent)"
        metric: "gpqa"
        value: 90.2
        url: "https://openrouter.ai/benchmarks/gpqa-diamond"
        verified_date: "2026-10-26"
      - source: "Arena Text leaderboard (independent)"
        metric: "arena_elo"
        value: 1508
        url: "https://arena.ai/leaderboard/chat/text"
        verified_date: "2026-10-26"

  - id: claude-sonnet-5-5
    name: Claude Sonnet 5.5
    developer: Anthropic
    release_date: 2026-09-28
    access: Commercial
    class: Next-Gen Balanced Frontier
    benchmarks:
      gpqa: 92.4
    arena_elo: 1475
    ethics_notes: Sonnet-class successor to Claude Sonnet 5 with always-on thinking. Covered by the Claude Sonnet 5.5 system card; no independent HHEM hallucination rate published.
    lying_notes: Not independently measured on a comparable hallucination benchmark at the time of writing.
    best_applications:
      - Everyday feature building and bug fixing at $2/$10 per 1M tokens
      - Document, slide and spreadsheet generation
      - Responsive agentic loops at lower effort settings
    links:
      website: https://www.anthropic.com/news/claude-sonnet-5-5
      system_card: https://www.anthropic.com/claude-sonnet-5-5-system-card
    citations:
      - source: "OpenRouter GPQA Diamond leaderboard (independent)"
        metric: "gpqa"
        value: 92.4
        url: "https://openrouter.ai/benchmarks/gpqa-diamond"
        verified_date: "2026-10-26"
      - source: "Arena Text leaderboard (independent)"
        metric: "arena_elo"
        value: 1475
        url: "https://arena.ai/leaderboard/chat/text"
        verified_date: "2026-10-26"

  - id: claude-haiku-5-5
    name: Claude Haiku 5.5
    developer: Anthropic
    release_date: 2026-10-07
    access: Commercial
    class: Fast Agentic
    benchmarks:
      gpqa: 86.2
    ethics_notes: Small, fast Haiku-class model with adjustable effort and a 1M-token context. No comparable HHEM hallucination rate published.
    lying_notes: Not independently measured on a comparable hallucination benchmark at the time of writing.
    best_applications:
      - High-volume summarisation and classification at $0.10/$0.50 per 1M tokens
      - Sub-agents and browser/computer use in agent swarms
      - Latency-sensitive SME workflows where cost per task dominates
    links:
      website: https://www.anthropic.com/news/claude-haiku-5-5
      system_card: https://www.anthropic.com/document/claude-haiku-5-5-system-card
    citations:
      - source: "OpenRouter GPQA Diamond leaderboard (independent)"
        metric: "gpqa"
        value: 86.2
        url: "https://openrouter.ai/benchmarks/gpqa-diamond"
        verified_date: "2026-10-26"
---

# Anthropic Claude Series

Anthropic's Claude series has consistently prioritized **safety, factual consistency, and deep comprehension** over raw speed. By utilizing **Constitutional AI**, Anthropic trains models to critique their own responses based on a set of ethical principles (rules and values) rather than relying solely on human feedback (which can lead to sycophancy or pleasing false answers).

### Key Features:
1. **Constitutional AI:** A unique training paradigm that produces models with a very low hallucination rate and high ethical alignment.
2. **Computer Use:** Starting with Claude 3.5 Sonnet and expanded in Haiku 4.5, Anthropic was the first to offer native APIs for direct keyboard, mouse, and screen control by the model.
3. **Claude 3.7 Hybrid Reasoning:** Toggling "extended thinking" allowed users to balance token speed against deep analytical reasoning.
4. **Claude Opus 4.8:** A high-performance flagship model focusing heavily on reducing the hallucination rate to under 1% and achieving unmatched software engineering scores.
5. **Claude Fable 5 & Mythos 5 (June 2026):** Anthropic's Opus 5-generation frontier models. Fable 5 provides enterprise-grade Constitutional AI safety, while Mythos 5 serves as the flagship Opus-tier research model for Project Glasswing with relaxed conversational refusals for critical software security audits.

