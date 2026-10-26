# xAI Grok 4.6 Model Card (summary)

Grok 4.6 was announced on 14 August 2026 as xAI's frontier reasoning model. This file is a verified summary of the official xAI model card, the developer documentation and independent evaluations.

## Technical Specifications
* **Developer:** xAI
* **Release date:** 2026-08-14
* **Access:** Commercial API, Grok app and X integration
* **Context length:** 500,000 tokens
* **Pricing:** $2 / $6 per 1M input / output tokens
* **Source:** [Grok 4.6 announcement](https://x.ai/news/grok-4-6) and [model card](https://media.x.ai/v1/website/card-4p6-4cd2dc57.pdf)

## Performance Benchmarks
| Benchmark | Grok 4.6 | Measurement type |
|---|---|---|
| **GPQA Diamond** | 92.8% | Independent (OpenRouter leaderboard, 2026-10-26) |
| **SWE-bench Verified** | 95.6% | Independent (Vals AI) |

Vals AI separately reports 94.7% on GPQA Diamond under its own harness; the dashboard uses the OpenRouter figure so that GPQA stays comparable across all models added in this update. MMLU-Pro is reported at 89.40% by Vals AI, but MMLU-Pro is not the same benchmark as MMLU and is therefore not written into the `mmlu` field. LiveCodeBench is vendor-reported at 88.2%.

## Safety and Alignment
* **Framework:** Covered by an official xAI model card.
* **Factuality:** Artificial Analysis measures a 34.3% AA-Omniscience hallucination rate. That scale is not comparable with the Vectara HHEM rates listed for older models in this dashboard, so the field is left empty rather than filled with a number that would wrongly rank the model as the worst in the list.
* **Practical consequence:** A substantial share of confident but wrong answers on out-of-knowledge questions means factual claims still require human verification, especially in regulated SME contexts.
