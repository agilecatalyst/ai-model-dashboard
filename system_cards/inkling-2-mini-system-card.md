# Thinking Machines Lab Inkling 2 Mini Model Card (summary)

Inkling 2 Mini was released on 20 November 2026 under Apache 2.0. It matters to this dashboard for one reason: it is the only model of the autumn 2026 wave that an SME can actually run on its own hardware.

## Technical Specifications
* **Developer:** Thinking Machines Lab
* **Release date:** 2026-11-20
* **Access:** Open weights on Hugging Face, plus hosted inference and fine-tuning via Tinker at $0.15 input / $0.50 output / $0.015 cache-hit per 1M tokens
* **Parameters:** 26.4B total / 3.4B active, approximately 5.4B effective active because 12 of its 24 layers run three times per token (looped transformer plus MoE)
* **Licence:** **Apache 2.0** - no custom terms, no commercial restriction
* **Context length:** 1,000,000 tokens; text and image in, text out
* **Numerics:** native NVFP4 and MXFP8
* **Local feasibility:** **yes.** The checkpoint is roughly 20GB. Artificial Analysis describes it as small enough to run on a MacBook or DGX Spark; it runs offline on a 32GB unified-memory machine, with llama.cpp, vLLM and SGLang support reported. Quantised variants need less.
* **Source:** [Thinking Machines Lab model card](https://thinkingmachines.ai/model-card/inkling-2-mini) and the [Artificial Analysis evaluation](https://artificialanalysis.ai/articles/inkling-2-mini)

## Performance Benchmarks
| Benchmark | Inkling 2 Mini | Measurement type |
|---|---|---|
| SWE-bench Verified | 79.2% | Vendor-reported, not independently reproduced |

Supporting figures, kept out of the table above because they come from different suites and must not be read as the same measurement:

| Additional result | Inkling 2 Mini | Comparison | Measurement type |
|---|---|---|---|
| Artificial Analysis Intelligence Index | 20 | level with Qwen 3.8 27B and Nanbeige4.3-33B, at 5-6x fewer active parameters | Independent (AA) |
| Cost per AA Index task | $0.59 at 9.0 min | Qwen 3.8 27B $3.53 at 38.2 min | Independent (AA) |
| SWE-bench Pro v2 Hard | 77.9% | Qwen 3.8 27B 73.8% | Vendor-reported |
| DeepSWE v1.1 | 48.2% | Qwen 3.8 27B 42.2% | Vendor-reported |
| Vals Index v2.2 | 46.5% | - | Vendor-reported |

**MMLU, GPQA Diamond, HumanEval, AIME, Arena Elo and any hallucination measurement are not published for this model.**

## Safety and Alignment
* **Read the headline coding score critically.** 79.2% SWE-bench Verified is the vendor's own figure and sits in clear tension with an independently measured Intelligence Index of 20. Both can be true - AA's index weights knowledge and science heavily, where a 3.4B-active model is inherently thin, while SWE-bench rewards a good scaffold - but one tracker lists the launch benchmark scores as unconfirmed. **Benchmark it on your own repository before replacing a paid API with it.** This is exactly the kind of number the *Nullius in Verba* principle exists for.
* **No published hallucination measurement**, so factual output must be verified by the user. Do not place it in an unsupervised customer-facing loop.
* **Why it still earns the local-model banner in this dashboard:** Apache 2.0, roughly 20GB, and a SWE-bench-style score far above the 30% threshold this project uses. For a Flemish SME that cannot send source code or client documents to a US or Chinese API, this is currently the strongest option that physically fits on office hardware - and sovereignty here is structural, not contractual: nothing leaves the network.
