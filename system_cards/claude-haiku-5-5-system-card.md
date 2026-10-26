# Anthropic Claude Haiku 5.5 System Card (summary)

Claude Haiku 5.5 was announced on 7 October 2026 as Anthropic's small, fast model for high-volume and cost-sensitive work. This file is a verified summary of the public announcement and system card.

## Technical Specifications
* **Developer:** Anthropic
* **Release date:** 2026-10-07
* **Access:** Commercial API and Claude apps
* **Context length:** 1,000,000 tokens (500K in Cowork)
* **Pricing:** $0.10 / $0.50 per 1M input / output tokens for prompts up to 100K tokens; $0.50 / $2.50 above that
* **Effort control:** first Haiku model with adjustable effort; adaptive thinking on by default
* **Source:** [Introducing Claude Haiku 5.5](https://www.anthropic.com/news/claude-haiku-5-5)

## Performance Benchmarks
| Benchmark | Claude Haiku 5.5 | Measurement type |
|---|---|---|
| **GPQA Diamond** | 86.2% | Independent (OpenRouter leaderboard, 2026-10-26) |

Context-only results on suites the dashboard does not model:

| Additional result | Score | Measurement type |
|---|---|---|
| SWE-bench Pro V2 (mini-swe-agent, high) | 52.94% | Independent (Scale AI) |
| Artificial Analysis Intelligence Index | 43 | Independent |

## Safety and Alignment
* **Framework:** Covered by a dedicated Anthropic system card under the Responsible Scaling Policy.
* **Factuality:** No comparable HHEM hallucination figure published; the dashboard shows N/A.
* **SME relevance:** At roughly 1% of the cost per task of Opus 5.5, this is the tier most Flemish SMEs will use for high-volume summarisation, classification and sub-agent work — provided outputs are still reviewed by a human.
