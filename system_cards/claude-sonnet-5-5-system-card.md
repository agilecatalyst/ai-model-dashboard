# Anthropic Claude Sonnet 5.5 System Card (summary)

Claude Sonnet 5.5 was announced on 28 September 2026 as the direct successor to Claude Sonnet 5 for well-scoped everyday work. This file is a verified summary of the public announcement and system card.

## Technical Specifications
* **Developer:** Anthropic
* **Release date:** 2026-09-28
* **Access:** Commercial API and Claude apps
* **Context length:** 1,000,000 tokens
* **Pricing:** $2 / $10 per 1M input / output tokens
* **Thinking:** always on; effort is the main lever for depth, latency and cost
* **Source:** [Introducing Claude Sonnet 5.5](https://www.anthropic.com/news/claude-sonnet-5-5)

## Performance Benchmarks
| Benchmark | Claude Sonnet 5.5 | Measurement type |
|---|---|---|
| **GPQA Diamond** | 92.4% | Independent (OpenRouter leaderboard, 2026-10-26) |

Classic MMLU, HumanEval and AIME results are not published for this model, so those fields stay empty in `data/claude_series.md`. Context-only results on suites the dashboard does not model:

| Additional result | Score | Measurement type |
|---|---|---|
| SWE-bench Pro V2 (mini-swe-agent, xhigh) | 70.59% | Independent (Scale AI) |
| OSWorld | 80.1% | Vendor-reported |

## Safety and Alignment
* **Framework:** Released under Anthropic's Responsible Scaling Policy with a dedicated system card.
* **Factuality:** No Vectara HHEM hallucination figure has been published for this model; the dashboard therefore shows N/A rather than a guess.
* **Cost caveat:** Artificial Analysis measures roughly 193,000 output tokens per task at maximum reasoning effort, the highest it has recorded, so cost per task can exceed that of Opus 5.5 despite the lower token price.
