---
models:
  - id: grok-2
    name: Grok-2
    developer: xAI
    release_date: 2024-08-12
    access: Commercial
    class: Frontier Multimodal
    benchmarks:
      mmlu: 87.5
      gpqa: 56.0
      swe_bench: 18.2
      human_eval: 88.4
      aime: 18.0
    hallucination_rate: 2.9
    ethics_rating: 6.0
    iq_lower: 98
    iq_upper: 130
    eq_bench: 77
    arena_elo: 1310
    ethics_notes: Positioned as a "wry" and less censored assistant. Initially allowed generation of controversial/copyrighted images without safety filters, leading to public debate. Governed under xAI safety cards.
    lying_rate: 3.4
    lying_notes: Can sometimes exhibit slightly higher hallucination rate on general topics because of its humorous/edgy conversational styling, occasionally "hallucinating" jokes or sarcastic premises.
    best_applications:
      - Real-time information retrieval (X platform integration)
      - Informal chat and creative brainstorming
      - Image generation (via FLUX integration)
    links:
      website: https://x.ai/blog/grok-2
      system_card: https://x.ai/grok-2-system-card

  - id: grok-3
    name: Grok-3
    developer: xAI
    release_date: 2025-02-17
    access: Commercial
    class: Frontier Reasoning
    benchmarks:
      mmlu: 92.5
      gpqa: 80.2
      swe_bench: 42.0
      human_eval: 94.6
      aime: 86.4
    hallucination_rate: 1.8
    ethics_rating: 6.8
    iq_lower: 115
    iq_upper: 144
    eq_bench: 82
    arena_elo: 1360
    ethics_notes: Features a specialized "Think" mode utilizing reinforcement learning. Safety guidelines were hardened compared to Grok-2 to prevent generation of dangerous cyber or biological instructions during thinking processes.
    lying_rate: 2.1
    lying_notes: Chain-of-thought helps verify mathematical and factual steps. Displays very low hallucination rate on code and logic tasks.
    best_applications:
      - Math and logical problem solving
      - Coding pipelines and script auditing
      - Real-time news analysis and context retrieval from X (formerly Twitter)
    links:
      website: https://x.ai/blog/grok-3
      system_card: https://x.ai/grok-3-system-card

  - id: grok-4-6
    name: Grok 4.6
    developer: xAI
    release_date: 2026-08-14
    access: Commercial
    class: Next-Gen Frontier Reasoning
    benchmarks:
      gpqa: 92.8
      swe_bench: 95.6
    arena_elo: 1454
    ethics_notes: Shipped with an official xAI model card. Artificial Analysis measures a 34.3% AA-Omniscience hallucination rate, which uses a different scale from the Vectara HHEM rates listed for older models here and must not be compared directly.
    lying_notes: AA-Omniscience indicates a substantial share of confidently wrong answers on questions outside its knowledge; verification remains necessary for factual claims.
    best_applications:
      - Autonomous bug fixing on real repositories (95.6% SWE-bench Verified, independently measured)
      - Code generation (88.2% LiveCodeBench, vendor-reported)
      - Cost-efficient reasoning at $2/$6 per 1M tokens
    links:
      website: https://x.ai/news/grok-4-6
      system_card: https://x.ai/grok-4-6-system-card
    citations:
      - source: "Vals AI SWE-bench Verified leaderboard (independent)"
        metric: "swe_bench"
        value: 95.6
        url: "https://www.vals.ai/benchmarks/swebench"
        verified_date: "2026-10-26"
      - source: "OpenRouter GPQA Diamond leaderboard (independent)"
        metric: "gpqa"
        value: 92.8
        url: "https://openrouter.ai/benchmarks/gpqa-diamond"
        verified_date: "2026-10-26"
      - source: "Arena Text leaderboard (independent)"
        metric: "arena_elo"
        value: 1454
        url: "https://arena.ai/leaderboard/chat/text"
        verified_date: "2026-10-26"

  - id: grok-4-7
    name: Grok 4.7
    developer: xAI
    release_date: 2026-09-21
    access: Commercial
    class: Next-Gen Frontier Reasoning
    ethics_notes: Shipped with an official model card from xAI, which now brands itself SpaceXAI. xAI claims its strongest jailbreak resistance so far with a 3.3% pass-through rate on HackerBench, but no independent replication of that number was found. Red-team access to offensive capabilities is invite-only for selected cybersecurity partners. The model card states supplementary training on anonymised Cursor workflow data. A widely shared claim of 2.1T parameters comes only from a post on X and is not in the model card, so it is not recorded here.
    lying_notes: Artificial Analysis measures a 29% AA-Omniscience hallucination rate, down from 34% for Grok 4.6 but still high in absolute terms - treat factual claims as unverified. Note also that AA reproduces Terminal-Bench 4.0 at roughly 26% in a neutral harness against the 37.6% xAI reports, which is a useful reminder that vendor harnesses flatter vendor scores.
    best_applications:
      - Long agentic coding sessions in Cursor or Grok Build (71.0% DeepSWE v1.1, vendor-reported)
      - Long-horizon knowledge work and document production (1657 Elo AA-Briefcase, 1695 Elo GDPval-AA, independently measured)
      - Cost-sensitive domain agents at $2/$6 per 1M tokens, provided you budget for roughly double the output tokens per task of Grok 4.6
    links:
      website: https://docs.x.ai/developers/release-notes
      system_card: https://x.ai/grok-4-7-model-card
    citations:
      - source: "ARC Prize verified results (independent)"
        metric: "arc_agi_v1"
        value: 90.2
        url: "https://arcprize.org/results/xai-grok-4-7"
        verified_date: "2026-11-21"
      - source: "ARC Prize verified results (independent)"
        metric: "arc_agi_v2"
        value: 61.4
        url: "https://arcprize.org/results/xai-grok-4-7"
        verified_date: "2026-11-21"
      - source: "xAI model card (vendor-reported)"
        metric: "deepswe_v1_1"
        value: 71.0
        url: "https://docs.x.ai/developers/release-notes"
        verified_date: "2026-11-21"
      - source: "Artificial Analysis neutral harness (independent)"
        metric: "terminal_bench_4"
        value: 26.0
        url: "https://artificialanalysis.ai/articles/benchmarking-grok-4-7"
        verified_date: "2026-11-21"
---

# xAI Grok Series

xAI's Grok models are designed to be "fun, witty, and real-time." By integrating directly with the X platform, Grok has access to live posts and breaking news, giving it an advantage on current event timelines.

### Key Milestones:
1. **Grok-2 (2024):** A major step forward that established xAI as a direct competitor to GPT-4. It introduced integrated visual capabilities and was paired with FLUX for image generation.
2. **Grok-3 (2025):** Launched with a dedicated reasoning mode ("Think") that allowed it to compete with OpenAI's o1. It was trained on xAI's Colossus cluster in Memphis, Tennessee.
3. **Censorship Philosophy:** xAI positions Grok as a model that will answer questions other models refuse, though it maintains core guardrails against harmful content.
4. **Grok 4.7 (September 2026):** Released on 21 September 2026 by the company now branding itself SpaceXAI, with verified ARC-AGI results (90.2% on v1, 61.4% on v2) and frontier-level Elo on AA-Briefcase and GDPval. It is also the clearest case study in this dashboard of harness effects: xAI reports 37.6% on Terminal-Bench 4.0, Artificial Analysis reproduces roughly 26% in a neutral harness. Same benchmark, different scaffold, 45% relative gap.
