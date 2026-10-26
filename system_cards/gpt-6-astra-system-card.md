# OpenAI GPT-6 Astra System Card (summary)

GPT-6 Astra was released on 3 September 2026 as OpenAI's frontier model for software engineering and computer use. This file is a verified summary of the public announcement and the deployment-safety system card.

## Technical Specifications
* **Developer:** OpenAI
* **Release date:** 2026-09-03
* **Access:** Commercial API and ChatGPT
* **Context length:** 1,050,000 tokens
* **Pricing:** $10 / $50 per 1M input / output tokens
* **Source:** [GPT-6 Astra announcement](https://openai.com/index/gpt-6-astra) and [system card](https://deploymentsafety.openai.com/gpt-6-astra)

## Performance Benchmarks
| Benchmark | GPT-6 Astra | Measurement type |
|---|---|---|
| **GPQA Diamond** | 94.4% | Independent (OpenRouter leaderboard, 2026-10-26) |

OpenAI reports 96.0% on GPQA Diamond in its own announcement. The dashboard uses the lower independently measured figure, because it is reproducible on a production endpoint under a fixed question set. Context-only results on suites the dashboard does not model:

| Additional result | Score | Measurement type |
|---|---|---|
| FrontierSWE v2 | 65.5% | Vendor-reported |
| DeepSWE v1.1 | 74.1% | Vendor-reported |
| BrowseComp | 91.5% | Vendor-reported |
| Terminal-bench 4.0 | 58.2% | Vendor-reported |
| Vals Index | 63.1% | Independent (Vals AI) |

## Safety and Alignment
* **Framework:** Evaluated under OpenAI's Preparedness Framework before release.
* **Factuality:** No Vectara HHEM figure published; the dashboard shows N/A instead of an estimate.
* **Discrepancy note:** Where a vendor figure and an independent figure disagree (96.0% versus 94.4% GPQA), both are recorded here and the independent one is used in the dataset.
