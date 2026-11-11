# Mistral Large 4 Model Card (summary)

Mistral Large 4 entered public API preview on 6 October 2026. This file is a verified summary of Mistral's announcement and official model documentation.

## Technical Specifications
* **Developer:** Mistral AI (France, EU)
* **Release date:** 2026-10-06 (API preview)
* **Access:** Commercial API. As of 2026-10-26 the weights have **not** been published and no licence has been announced, so the Apache 2.0 terms of Mistral Large 3 must not be assumed to carry over.
* **Parameters:** 1.05T total / 49B active (plus a 1.6B vision encoder), vendor-reported
* **Context length:** 1,048,576 tokens
* **Pricing:** $1.36 / $4.18 per 1M input / output tokens on OpenRouter
* **Source:** [Mistral Large 4 announcement](https://mistral.ai/news/mistral-large-4) and [model documentation](https://docs.mistral.ai/models/mistral-large-4-0)

## Performance Benchmarks
| Benchmark | Mistral Large 4 | Measurement type |
|---|---|---|
| Artificial Analysis Intelligence Index | 38.4 | Independent |

No MMLU, GPQA Diamond, SWE-bench Verified, HumanEval or AIME result had been published for this model at the time of writing, so all five benchmark fields are empty in `data/mistral_series.md`. The LMArena Text rating of 1432 is a preview listing and will move.

## Safety and Alignment
* **Jurisdiction:** Mistral is an EU-domiciled provider, which matters for Belgian SMEs that need an EU-controlled processor and not merely an EU hosting region.
* **Factuality:** No hallucination measurement published; the dashboard shows N/A.
* **Open-weights caveat:** A Hugging Face placeholder lists an ETA of 31 October 2026 for downloadable weights. An ETA is not a release; plan self-hosting only once weights and a licence actually exist.
