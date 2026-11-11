# OpenAI GPT-6.1 Sol System Card (summary)

GPT-6.1 Sol was released on 29 September 2026 at OpenAI DevDay as the near-frontier, high-value tier of the GPT-6 generation. OpenAI shipped it with an addendum to the GPT-6 Astra system card rather than a standalone document.

## Technical Specifications
* **Developer:** OpenAI
* **Release date:** 2026-09-29
* **Access:** Commercial API and ChatGPT
* **Context length:** 1,050,000 tokens
* **Pricing:** $2 / $10 per 1M input / output tokens
* **Source:** [GPT-6.1 Sol announcement](https://openai.com/index/introducing-gpt-6-1-sol) and [system card addendum](https://deploymentsafety.openai.com/gpt-6-1-sol)

## Performance Benchmarks
| Benchmark | GPT-6.1 Sol | Measurement type |
|---|---|---|
| **GPQA Diamond** | 94.4% | Independent (OpenRouter leaderboard, Pareto routing, 2026-10-26) |

The value above was measured under OpenRouter's Pareto routing; a different routing configuration of the same family scores lower, so the routing setup is part of the claim. Classic MMLU, SWE-bench Verified, HumanEval and AIME results are not published for this model and are therefore left empty in `data/gpt_series.md`.

## Safety and Alignment
* **Framework:** Covered by the GPT-6 Astra Preparedness Framework evaluations plus a published addendum.
* **Factuality:** No Vectara HHEM figure published; the dashboard shows N/A.
* **SME relevance:** At $2/$10 per 1M tokens this is the cheapest way to reach near-frontier quality from a US hyperscaler, but data leaves the EEA unless an EU data-residency agreement is in place.
