---
models:
  - id: inkling-2-mini
    name: Inkling 2 Mini
    developer: Thinking Machines Lab
    release_date: 2026-11-20
    access: Open Weights
    class: Lightweight Looped MoE
    benchmarks:
      swe_bench: 79.2
    ethics_notes: Apache 2.0 open weights on Hugging Face, 26.4B total and 3.4B active parameters (roughly 5.4B effective active, because 12 of its 24 layers run three times per token) in a looped-transformer MoE with native NVFP4 and MXFP8 numerics. The checkpoint is about 20GB, which makes it the first model of this generation that genuinely runs on a 32GB office machine or laptop. For an EU SME this is the cheapest sovereignty guarantee available - Apache 2.0 removes licence friction entirely and nothing leaves your network.
    lying_notes: No hallucination measurement published. Read the 79.2% SWE-bench Verified figure with care - it is vendor-reported, it sits in clear tension with the independently measured Artificial Analysis Intelligence Index of 20, and one tracker lists the launch benchmark scores as unconfirmed. Until an independent harness reproduces it, treat the coding score as a best-case claim under a favourable scaffold rather than a measurement.
    best_applications:
      - Fully local and offline coding agent for SMEs with confidential source code (Apache 2.0, 32GB RAM)
      - On-premise long-context RAG over internal documents (1M token window on laptop-class hardware)
      - Private multimodal document and screenshot processing where GDPR or client NDAs forbid a US or Chinese API
    links:
      website: https://thinkingmachines.ai/model-card/inkling-2-mini
      system_card: https://thinkingmachines.ai/model-card/inkling-2-mini
    citations:
      - source: "Thinking Machines Lab model card (vendor-reported, not independently reproduced)"
        metric: "swe_bench"
        value: 79.2
        url: "https://thinkingmachines.ai/model-card/inkling-2-mini"
        verified_date: "2026-11-21"
      - source: "Thinking Machines Lab model card (vendor-reported)"
        metric: "deepswe_v1_1"
        value: 48.2
        url: "https://thinkingmachines.ai/model-card/inkling-2-mini"
        verified_date: "2026-11-21"
      - source: "Thinking Machines Lab model card, Vals Index v2.2 (vendor-reported)"
        metric: "vals_index"
        value: 46.5
        url: "https://thinkingmachines.ai/model-card/inkling-2-mini"
        verified_date: "2026-11-21"
---

# Thinking Machines Lab Inkling Series (Open Weights)

Thinking Machines Lab entered this dashboard in November 2026 with **Inkling 2 Mini**, and it matters for one specific reason: it is the only release of the autumn 2026 wave that an SME can actually run on its own hardware.

### Why this model is relevant to a Flemish SME:
1. **It fits.** 26.4B total / 3.4B active parameters, ~20GB checkpoint, runs on a 32GB unified-memory MacBook or a DGX Spark via llama.cpp, vLLM or SGLang. The frontier models of this generation (2.8T Kimi, 1.6T LongCat, every Gemini 4 and Claude 5.x) do not.
2. **Apache 2.0.** No custom licence to read, no commercial restriction, no trademark trap. Compare GLM-5.3's bespoke licence or the Kimi K3.1-Pro License.
3. **Looped transformer.** Half its layers run three times per token, which buys reasoning depth without buying parameters - the architectural reason a 26B model can behave like something larger.

### What to verify before you commit (*Nullius in Verba*):
Its headline **79.2% SWE-bench Verified is Thinking Machines' own number** and is hard to reconcile with its independently measured Artificial Analysis Intelligence Index of **20**, which is on par with Qwen 3.8 27B. Both can be true - AA's index weights knowledge and science heavily, where a 3.4B-active model is thin - but if autonomous bug fixing is the use case, benchmark it on your own repository before replacing a paid API with it.
