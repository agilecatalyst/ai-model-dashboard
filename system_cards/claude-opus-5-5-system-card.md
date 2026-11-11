# Anthropic Claude Opus 5.5 System Card (summary)

Claude Opus 5.5 was announced on 22 September 2026 as Anthropic's top-tier Opus-class model for long-horizon agentic coding and knowledge work. This file is a verified summary of the public announcement and system card; it is not a copy of the original document.

## Technical Specifications
* **Developer:** Anthropic
* **Release date:** 2026-09-22
* **Access:** Commercial API, Claude apps and Claude Code
* **Context length:** 1,000,000 tokens
* **Pricing:** $4 / $20 per 1M input / output tokens
* **Source:** [Introducing Claude Opus 5.5](https://www.anthropic.com/news/claude-opus-5-5)

## Performance Benchmarks
| Benchmark | Claude Opus 5.5 | Measurement type |
|---|---|---|
| **GPQA Diamond** | 90.2% | Independent (OpenRouter leaderboard, 2026-10-26) |

Anthropic no longer publishes classic MMLU, HumanEval or AIME figures for this generation, so those fields are deliberately empty in `data/claude_series.md` rather than estimated. Results that Anthropic does publish, on evaluation suites the dashboard does not model, are listed here for context only:

| Additional result | Score | Measurement type |
|---|---|---|
| SWE-bench Pro | 89.9% | Vendor-reported (system card) |
| DeepSWE v1.1 | 74.2% | Vendor-reported |
| FrontierSWE v2 | 62.3% | Vendor-reported |
| Terminal-bench 4.0 | 66.4% | Vendor-reported |
| OSWorld | 81.8% | Vendor-reported |
| Vals Index | 67.0% | Independent (Vals AI) |

## Safety and Alignment
* **Framework:** Released under Anthropic's Responsible Scaling Policy.
* **Factuality:** Anthropic publishes no Vectara HHEM figure for this model. Artificial Analysis measures 64.6% AA-Omniscience accuracy, which is a different metric on a different scale and must not be compared with the HHEM percentages shown for older models in this dashboard.
* **Verification note (*Nullius in Verba*):** Every number above is traceable to the source column. Anything that could not be sourced was left out instead of being interpolated.
