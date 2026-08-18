# Muse Glimmer 30B Technical Report & System Card

Released in August 2026 under the Apache 2.0 license, Muse Glimmer 30B is Meta's open-weights dense multimodal model distilled from Meta's Muse Spark flagship teacher model.

## Technical Specifications
* **Developer:** Meta Superintelligence Labs
* **Parameters:** 29.6 Billion Dense (plus ~1.8B Vision Encoder)
* **Architecture:** Multimodal Causal Transformer with DFlash speculative decoding
* **Context Length:** 131,072 (128K) tokens
* **License:** Apache 2.0 (Permissive Open Weights)

## Performance Benchmarks
| Benchmark | Muse Glimmer 30B | Muse Spark 1.2 | Gemma 4 31B |
|---|---|---|---|
| **MMLU** | 91.2% | 96.1% | 92.4% |
| **GPQA** | 83.5% | 92.4% | 84.3% |
| **SWE-bench** | 76.0% | 82.9% | 56.5% |
| **HumanEval** | 88.5% | 94.5% | 91.2% |
| **AIME** | 94.7% | 95.8% | 89.2% |

## Safety and Alignment
* **Safety Paradigm:** Evaluated under Meta AI Safety Framework with Llama Guard 4 system guardrails.
* **Factual Consistency:** Hallucination rate is **1.3%** on general agentic benchmarks.
