# Google DeepMind Gemini 4 Argon Model Card (summary)

Gemini 4 Argon was announced on 30 September 2026 and became publicly available on 13 October 2026. This file is a verified summary of the official DeepMind model card and the launch announcement.

## Technical Specifications
* **Developer:** Google DeepMind
* **Release date:** 2026-10-13 (announced 2026-09-30)
* **Access:** Commercial API, Gemini app and Vertex AI
* **Context length:** 1,000,000 tokens combined input/output
* **Pricing:** $2 / $10 per 1M input / output tokens introductory, rising to $4 / $20 after 30 November 2026
* **Source:** [Launch announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon) and [model card](https://deepmind.google/models/model-cards/gemini-4-argon)

## Performance Benchmarks
| Benchmark | Gemini 4 Argon | Measurement type |
|---|---|---|
| **GPQA Diamond** | 96.5% | Independent (OpenRouter leaderboard, 2026-10-26) |

Google's own model card publishes agentic and knowledge-work suites rather than classic academic benchmarks. Context-only figures:

| Additional result | Gemini 4 Argon | GPT-6 Astra | Claude Opus 5.5 | Measurement type |
|---|---|---|---|---|
| DeepSWE v1.1 | 77.9% | 74.1% | 74.2% | Vendor-reported |
| FrontierSWE v2 | 55.0% | 65.5% | 62.3% | Vendor-reported |
| Terminal-bench 4.0 | 57.4% | 58.2% | 66.4% | Vendor-reported |
| Vals Index | 68.9% | 63.1% | 67.0% | Vendor-reported comparison |
| GraphWalks (256K-1M) | 84.2% | 71.8% | 66.8% | Vendor-reported |

## Safety and Alignment
* **Framework:** Released under Google DeepMind's Frontier Safety Framework.
* **Factuality:** Artificial Analysis reports the lowest measured AA-Omniscience hallucination behaviour among frontier models, while the model answers only about half of those questions correctly. This is a different metric from the Vectara HHEM percentages used for older models here, so the dashboard leaves the field empty.
* **Balanced reading:** Argon leads GPQA Diamond and DeepSWE v1.1 but trails GPT-6 Astra on FrontierSWE v2 and Claude Opus 5.5 on Terminal-bench 4.0. It is a strong but uneven model, not a uniform winner.
